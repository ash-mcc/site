(ns site-mod.sparql
  (:require [clojure.string :as str]
            [clojure.tools.logging :as log]
            #_[clojure.pprint :as pp]
            [ring.util.codec :as codec]
            [xtdb.sparql.protocol :as sparql-protocol]
            [xtdb.sparql :as sparql]
            [juxt.clojars-mirrors.ring-core.v1v9v2.ring.util.time :as rt]
            [xtdb.api :as xt])
  #_(:import java.net.URLDecoder))

(alias 'site (create-ns 'juxt.site.alpha))
(alias 'http (create-ns 'juxt.http.alpha))
(alias 'pass (create-ns 'juxt.pass.alpha))

(def sparql-xml-response #'sparql-protocol/sparql-xml-response)
(def sparql-json-response #'sparql-protocol/sparql-json-response)


(def XML "application/sparql-results+xml")
(def JSON "application/sparql-results+json")


(defn post-handler [{::site/keys [xt-node received-representation] :as req}]
    (let [posted-body                   (slurp (::http/body received-representation))
          form                          (codec/form-decode posted-body)
          sparql                        (get form "query")
          _                             (log/debug "sparql:" sparql)
          {:keys [find] :as query-map}  (sparql/sparql->datalog sparql)
          _                             (log/debug "datalog:" query-map)
          db                            (xt/db xt-node)
          results                       (xt/q db query-map (object-array 0))
          accept                        (get-in req [:ring.request/headers "accept"]) ;; TODO proper content negotiation?
          _                             (log/debug "accept:" accept)
          response-content-type         (cond 
                                          (str/index-of accept "*/*") XML
                                          (str/index-of accept XML) XML
                                          (str/index-of accept JSON) JSON
                                          :else (throw
                                                 (ex-info
                                                  "Can't produce a value that is acceptable to the client"
                                                  {::site/request-context (assoc req :ring.response/status 406)})))
          response-body                  (if (= XML response-content-type)
                                           (sparql-xml-response find results)
                                           (sparql-json-response find results))] 
      (-> req
          (assoc
           :ring.response/status 200
           :ring.response/body response-body)
          (update :ring.response/headers
                  assoc
                  "Content-Type" response-content-type
                  "Last-Modified" (rt/format-date (xt/transaction-time db))))))


(defn post-error-text-body [req]
  (->>
   (for [error (::errors req)]
     (cond-> (str \tab (:error error))
       (:location error) (str " (line " (-> error :location :row inc) ")")))
   (into ["Query errors"])
   (str/join (System/lineSeparator))))