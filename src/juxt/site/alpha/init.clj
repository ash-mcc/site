;; Copyright © 2021, JUXT LTD.

(ns juxt.site.alpha.init
  (:require
   [clojure.edn :as edn]
   [clojure.java.io :as io]
   [clojure.tools.logging :as log]
   [clojure.walk :refer [postwalk]]
   [xtdb.api :as x]
   [crypto.password.bcrypt :as password]
   [jsonista.core :as json]
   [juxt.pass.alpha.authentication :as authn]
   [juxt.reap.alpha.combinators :as p]
   [juxt.reap.alpha.regex :as re]
   [juxt.reap.alpha.decoders.rfc7230 :as rfc7230.decoders]
   [juxt.site.alpha.util :as util])
  (:import
   (java.util Date)))

(alias 'apex (create-ns 'juxt.apex.alpha))
(alias 'http (create-ns 'juxt.http.alpha))
(alias 'pass (create-ns 'juxt.pass.alpha))
(alias 'site (create-ns 'juxt.site.alpha))

(defn put! [xt-node & ms]
  (->>
   (x/submit-tx
    xt-node
    (for [m ms]
      [:xtdb.api/put m]))
   (x/await-tx xt-node)))

(defn put-superuser-role!
  "Create the superuser role."
  [xt-node {::site/keys [base-uri]}]
  (log/info "Creating superuser role")
  (let [role (str base-uri "/_site/roles/superuser")]
    (put!
     xt-node
     {:xt/id role
      ::site/type "Role"
      :name "superuser"
      :description "Superuser"}

     ;; Add rule that allows superusers to do everything.
     {:xt/id (str base-uri "/_site/rules/superuser-allow-all")
      :description "Superusers can do everything"
      ::site/type "Rule"
      ::pass/target [['subject :juxt.pass.alpha/user 'user]
                     ['mapping :juxt.site.alpha/type "UserRoleMapping"]
                     ['mapping :juxt.pass.alpha/role role]
                     ['mapping :juxt.pass.alpha/assignee 'user]]
      ::pass/effect ::pass/allow
      ::http/max-content-length (Math/pow 2 40)})))

(defn put-superuser!
  "Create a superuser."
  [xt-node {:keys [username password fullname email]} {::site/keys [base-uri]}]
  (assert username)
  (assert password)
  (assert fullname)
  (let [user (str base-uri "/_site/users/" username)]
    (put!
     xt-node
     (merge
      {:xt/id user
       ::site/type "User"
       ::pass/username username
       :name fullname}
      (when email {:email email}))

     {:xt/id (str user "/password")
      ::site/type "Password"
      ::pass/user user
      ::pass/password-hash (password/encrypt password)
      ::pass/classification "RESTRICTED"}

     {:xt/id (format "%s/_site/roles/%s/users/%s" base-uri "superuser" username)
      ::site/type "UserRoleMapping"
      ::pass/assignee (format "%s/_site/users/%s" base-uri username)
      ::pass/role (str base-uri "/_site/roles/superuser")})))

(defn allow-public-access-to-public-resources!
  "Resources classified as PUBLIC should be readable (but not writable). For
  example, a login page needs to be a PUBLIC resource."
  [xt-node {::site/keys [base-uri]}]
  (put!
   xt-node
   {:xt/id (str base-uri "/_site/rules/public-resources")
    ::site/type "Rule"
    ::site/description "PUBLIC resources are accessible to GET"
    ::pass/target '[[request :ring.request/method #{:get :head :options}]
                    [resource ::pass/classification "PUBLIC"]]
    ::pass/effect ::pass/allow}))

(defn restict-access-to-restricted-resources!
  "Resources classified as RESTRICTED should never be accessed, unless another
  policy explicitly authorizes access."
  [xt-node {::site/keys [base-uri]}]
  (put!
   xt-node
   {:xt/id (str base-uri "/_site/rules/restricted-resources")
    ::site/type "Rule"
    ::site/description "RESTRICTED access is denied by default"
    ::pass/target '[[resource ::pass/classification "RESTRICTED"]]
    ::pass/effect ::pass/deny}))

(defn put-site-api!
  "Add the Site API"
  [xt-node json {::site/keys [base-uri]}]
  (log/info "Installing Site API")
  (let [openapi (json/read-value json)
        body (.getBytes json "UTF-8")]
    (put!
     xt-node
     {:xt/id (str base-uri "/_site/apis/site/openapi.json")
      ::site/type "OpenAPI"
      ::http/methods #{:get :head :options :put}
      ::http/content-type "application/vnd.oai.openapi+json;version=3.0.2"
      ;; TODO: Get last modified from resource - check JDK javadocs
      ;;::http/last-modified (Date. (.lastModified f))
      ::http/content-length (count body)
      ::http/body body
      ::apex/openapi openapi
      ;; Duplicated from openapi.clj - TODO: remove duplication
      :title (get-in openapi ["info" "title"])
      :version (get-in openapi ["info" "version"])
      :description (get-in openapi ["info" "description"])})))

(defn put-openid-token-endpoint! [xt-node {::site/keys [base-uri]}]
  (log/info "Installing OpenID Connect token endpoint")
  (let [token-endpoint (str base-uri "/_site/token")
        grant-types #{"client_credentials"}]
    (put!
     xt-node
     {:xt/id token-endpoint
      ::http/methods #{:post :options}
      ::http/acceptable "application/x-www-form-urlencoded"
      ::site/post-fn `authn/token-response
      ::site/access-control-allow-origins
      {"http://localhost:8000"
       {::site/access-control-allow-methods #{:post}
        ::site/access-control-allow-headers #{"authorization" "content-type"}}}
      ::pass/expires-in (* 60 60 1)}

     {:xt/id (str base-uri "/_site/rules/anyone-can-ask-for-a-token")
      ::site/type "Rule"
      ::site/description "The token_endpoint must be accessible"
      ::pass/target [['request ::site/uri token-endpoint]
                     ['request :ring.request/method #{:post}]]
      ::pass/effect ::pass/allow})

    (let [content
          (str
           (json/write-value-as-string
            {"issuer" "https://juxt.site" ; draft
             "token_endpoint" token-endpoint
             "token_endpoint_auth_methods_supported" ["client_secret_basic"]
             "grant_types_supported" (vec grant-types)}
            (json/object-mapper
             {:pretty true}))
           "\r\n")]
      (put!
       xt-node
       {:xt/id (str base-uri "/.well-known/openid-configuration")
        ;; OpenID Connect Discovery documents are publically available
        ::pass/classification "PUBLIC"
        ::http/methods #{:get :head :options}
        ::http/content-type "application/json"
        ::http/last-modified (Date.)
        ::http/etag (subs (util/hexdigest (.getBytes content)) 0 32)
        ::http/content content}))))

(defn put-login-endpoint! [xt-node {::site/keys [base-uri]}]
  (log/info "Installing login endpoint")
  ;; Allow anyone to login
  (put!
   xt-node
   {:xt/id (str base-uri "/_site/login")
    ::http/methods #{:post}
    ::http/acceptable "application/x-www-form-urlencoded"
    ::site/post-fn `authn/login-response
    ::pass/expires-in (* 3600 24 30)}

   {:xt/id (str base-uri "/_site/rules/anyone-can-post-login-credentials")
    ::site/type "Rule"
    ::site/description "The login POST handler must be accessible by all"
    ::pass/target [['request :ring.request/method #{:post}]
                   ['request ::site/uri (str base-uri "/_site/login")]]
    ::pass/effect ::pass/allow}))

(defn put-logout-endpoint! [xt-node {::site/keys [base-uri]}]
  (log/info "Installing logout endpoint")
  ;; Allow anyone to login
  (put!
   xt-node
   {:xt/id (str base-uri "/_site/logout")
    ::http/methods #{:post}
    ::http/acceptable "application/x-www-form-urlencoded"
    ::site/post-fn `authn/logout-response}

   {:xt/id (str base-uri "/_site/rules/anyone-can-post-logout-credentials")
    ::site/type "Rule"
    ::site/description "The logout POST handler must be accessible by all"
    ::pass/target [['request :ring.request/method #{:post}]
                   ['request ::site/uri (str base-uri "/_site/logout")]]
    ::pass/effect ::pass/allow}))

;; Currently awaiting a fix to https://github.com/juxt/xtdb/issues/1480 because
;; these can be used.
(defn put-site-txfns! [xt-node {::site/keys [base-uri]}]
  (x/submit-tx
   xt-node
   [[:xtdb.api/put
     {:xt/id (str base-uri "/_site/tx_fns/put_if_match_wildcard")
      ::site/description "Use this function for an If-Match header value of '*'"
      :xt/fn
      '(fn [ctx uri new-rep]
         (let [db (xtdb.api/db ctx)]
           (if (xtdb.api/entity db uri)
             [[:xtdb.api/put new-rep]]
             false)))
      :http/content-type "application/clojure"}]])

  (x/submit-tx
   xt-node
   [[:xtdb.api/put
     {:xt/id (str base-uri "/_site/tx_fns/put_if_match_etags")
      :xt/fn
      '(fn [ctx uri header-field new-rep if-match?]
         (let [db (xtdb.api/db ctx)
               selected-representation (xtdb.api/entity db uri)
               txes [[:xtdb.api/put new-rep]]]
           (if-let [rep-unparsed-etag (some-> (get selected-representation ::http/etag))]
             (if (if-match? header-field rep-unparsed-etag)
               txes ; success, we matched
               false)
             false)))
      :http/content-type "application/clojure"}]]))

(def host-parser (rfc7230.decoders/host {}))

(def base-uri-parser
  (p/complete
   (p/into {}
    (p/sequence-group
     (p/pattern-parser #"(?<scheme>https?)://" {:group {:juxt.reap.alpha.rfc7230/scheme "scheme"}})
     host-parser))))
