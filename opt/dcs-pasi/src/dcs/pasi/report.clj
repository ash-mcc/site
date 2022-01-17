(ns dcs.pasi.report
  (:require [jsonista.core :as json]
            [java-http-clj.core :as http]
            [dcs.pasi.report.shared :as shared]))

(defn ->http-request [graphql]
  {:headers {"Content-type" "application/json"}
   :body    (json/write-value-as-string {:query     graphql
                                         :variables nil})})

(defn ace-furniture-descriptions [url]
  (let [graphql "query {
                   furnitureDescriptions {
                     id
                     category
                     subcategory
                     itemKg
                   }
                 }"
        response (http/post url (shared/->http-request graphql))
        status (:status response)]
    (if (= 200 status)
      (-> response
          :body
          (json/read-value (json/object-mapper {:decode-key-fn true}))
          :data
          :furnitureDescriptions
          (->> 
           (sort-by (juxt :category :subcategory))
           (conj [[:id :category :subcategory :itemKg]])))
      (throw (Exception. (format "Error code %s" status))))))

