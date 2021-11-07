;; Copyright © 2021, JUXT LTD.

(ns juxt.site.graphql-authz-test
  (:require
   [clojure.test :refer [deftest is are testing] :as t]
   [juxt.test.util :refer [with-crux with-handler submit-and-await!
                           *crux-node* *handler*
                           access-all-areas access-all-apis]]
   [clojure.java.io :as io]
   [juxt.grab.alpha.schema :as schema]
   [juxt.grab.alpha.document :as document]
   [juxt.grab.alpha.parser :as parser]
   [clojure.string :as str]
   [jsonista.core :as json]
   [juxt.site.alpha.graphql :as graphql]
   [clojure.edn :as edn]
   [crux.api :as xt])
  (:import (java.io ByteArrayInputStream)))

(alias 'site (create-ns 'juxt.site.alpha))
(alias 'http (create-ns 'juxt.http.alpha))
(alias 'grab (create-ns 'juxt.grab.alpha))
(alias 'pass (create-ns 'juxt.pass.alpha))
(alias 'g (create-ns 'juxt.grab.alpha.graphql))

(t/use-fixtures :each with-crux with-handler)

(defn graphql-with-authz [acl]
  (let [schema-resource
        ;; This is all a bit knotted up
        (graphql/schema-resource
         {:crux.db/id "https://example.org/graphql"}
         (slurp (io/resource "juxt/site/authz.graphql")))]

    (submit-and-await!
     (remove
      nil?
      [
       [:crux.tx/put
        {:crux.db/id "https://example.org/_site/users/alice"
         ::site/type "User"
         :name "Alice"}]

       [:crux.tx/put
        {:crux.db/id "https://example.org/_site/users/bob"
         ::site/type "User"
         :name "Bob"}]

       [:crux.tx/put
        {:crux.db/id "https://example.org/_site/users/carl"
         ::site/type "User"
         :name "Carl"}]

       ;; All resources subject to authorization must be in a namespace
       [:crux.tx/put
        {:crux.db/id "https://example.org/things"
         ::pass/type "Namespace"
         ;; Namespaces are associated with rules
         ::pass/rules '[[(check acl subject obj)
                         [acl ::pass/owner subject]
                         [acl ::pass/entity obj]]]}]

       [:crux.tx/put
        {:crux.db/id "https://example.org/thing"
         ::pass/namespace "https://example.org/things"
         :secret "ABC"}]

       acl

       ;; Add GraphQL schema
       [:crux.tx/put schema-resource]]))

    (let [db (xt/db *crux-node*)
          schema (::grab/schema schema-resource)
          document (-> "query TestQuery { thing { secret } }"
                       parser/parse
                       (document/compile-document schema))
          subject :me]
      (->
       (graphql/query schema document "TestQuery" *crux-node* db subject)
       (get-in [:data :thing :secret])))))


#_((t/join-fixtures [with-crux with-handler])
 (fn []
   #_(= "ABC" (graphql-with-authz [:crux.tx/put
                                   {:crux.db/id "https://example.org/acl"
                                    ::pass/type "ACL"
                                    ::pass/owner :me
                                    ::pass/entity "https://example.org/thing"
                                    }]))
   (graphql-with-authz nil)))


(deftest graphql-with-acl-test
  (is (= "ABC" (graphql-with-authz [:crux.tx/put
                                    {:crux.db/id "https://example.org/acl"
                                     ::pass/type "ACL"
                                     ::pass/owner :me
                                     ::pass/entity "https://example.org/thing"
                                     }]))))

(deftest graphql-with-no-acl-test
  (is (nil? (graphql-with-authz nil))))
