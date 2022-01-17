(ns dcs.site.sparql
  (:require [clojure.string :as str]
            [clojure.tools.logging :as log]
            [jsonista.core :as json]
            [ring.util.codec :refer [form-decode]]
            [xtdb.sparql.protocol :as sparql-protocol]
            [xtdb.sparql :as sparql]
            [juxt.clojars-mirrors.ring-core.v1v9v2.ring.util.time :as rt]
            [xtdb.api :as xt]))

(alias 'site (create-ns 'juxt.site.alpha))
(alias 'http (create-ns 'juxt.http.alpha))
(alias 'pass (create-ns 'juxt.pass.alpha))

(def sparql-json-response #'sparql-protocol/sparql-json-response)
(def sparql-xml-response #'sparql-protocol/sparql-xml-response)


;; TO BE REMOVED / for reference only 
#_(defn sparql-query [xtdb-node request]
  (if-let [query (case (:request-method request)
                   :get
                   (get-in request [:query-params "query"])

                   :post
                   (or (get-in request [:form-params "query"])
                       (when (= "application/sparql-query"
                                (get-in request [:headers "content-type"]))
                         (slurp (:body request) (or (req/character-encoding request) "UTF-8")))))]
    (let [accept (get-in request [:headers "accept"])
          accept (if (= "*/*" accept)
                   "application/sparql-results+xml"
                   accept)
          {:keys [find] :as query-map} (sparql/sparql->datalog query)
          db (xt/db xtdb-node)
          results (xt/q db query-map (object-array 0))]
      (log/debug :sparql query)
      (log/debug :sparql->datalog query-map)
      (cond
        (str/index-of accept "application/sparql-results+xml")
        {:status 200
         :headers {"Content-Type" "application/sparql-results+xml"
                   "Last-Modified" (rt/format-date (xt/transaction-time db))}
         :body (sparql-xml-response find results)}

        (str/index-of accept "application/sparql-results+json")
        {:status 200
         :headers {"Content-Type" "application/sparql-results+json"
                   "Last-Modified" (rt/format-date (xt/transaction-time db))}
         :body (sparql-json-response find results)}

        :else
        {:status 406
         :headers {"Content-Type" "text/plain"}}))
    {:status 400
     :headers {"Content-Type" "text/plain"}}))


(defn post-handler [{::site/keys [xt-node received-representation] :as req}]
    (println "\n\n ------ SPARQL adaptor --------")
    (log/debug :received-representation received-representation)
    (let [content-type                  (::http/content-type received-representation)
          _                             (log/debug :content-type content-type)
          posted-body                   (slurp (::http/body received-representation))
          form                          (form-decode posted-body)
          query                         (get form "query")
          _                             (log/debug :sparql query)
          {:keys [find] :as query-map}  (sparql/sparql->datalog query)
          _                             (log/debug :sparql->datalog query-map)
          db                            (xt/db xt-node)
          results                       (xt/q db query-map (object-array 0))]
      
      ;; TODO fix the assumption of a 200 and application/sparql-results+json
      
      (-> req
          (assoc
           :ring.response/status 200
           :ring.response/body
           (sparql-json-response find results))
          (update :ring.response/headers 
                  assoc 
                  "Content-Type" "application/sparql-results+json"
                  "Last-Modified" (rt/format-date (xt/transaction-time db))))))


(defn post-error-text-body [req]
  (->>
   (for [error (::errors req)]
     (cond-> (str \tab (:error error))
       (:location error) (str " (line " (-> error :location :row inc) ")")))
   (into ["Query errors"])
   (str/join (System/lineSeparator))))