(ns dcs.pasi.report
  (:require [jsonista.core :as json]
            [java-http-clj.core :as http]
            [dcs.pasi.report.shared :as shared]))

(defn ->http-request [graphql]
  {:headers {"Content-type" "application/json"}
   :body    (json/write-value-as-string {:query     graphql
                                         :variables nil})})

(defn zwsCarbonMetric [url]
  (let [graphql  "query {
                   carbonMetrics {
                     id
                     wasteStream
                     carbonWeighting
                   }
                 }"
        response (http/post url (shared/->http-request graphql))
        status   (:status response)]
    (when (not= 200 status)
      (throw (Exception. (format "Error code %s" status))))
    (-> response
        :body
        (json/read-value (json/object-mapper {:decode-key-fn true}))
        :data
        :carbonMetrics
        (->>
         (sort-by :wasteStream)
         (conj [[:id :wasteStream :carbonWeighting]])))))

(defn aceFurnitureDescription [url]
  (let [graphql  "query {
                   furnitureDescriptions {
                     id
                     category
                     subcategory
                     itemKg
                   }
                 }"
        response (http/post url (shared/->http-request graphql))
        status   (:status response)]
    (when (not= 200 status)
      (throw (Exception. (format "Error code %s" status))))
    (-> response
        :body
        (json/read-value (json/object-mapper {:decode-key-fn true}))
        :data
        :furnitureDescriptions
        (->> 
         (sort-by (juxt :category :subcategory))
         (conj [[:id :category :subcategory :itemKg]])))))

(defn aceReusedFurniture [url]
  (let [graphql  "query {
                   reusedFurnitures {
                     id
                     from
                     to
                     description {
                       category
                       subcategory
                     }
                     itemCount
                   }
                 }"
        response (http/post url (shared/->http-request graphql))
        status   (:status response)]
    (when (not= 200 status)
      (throw (Exception. (format "Error code %s" status))))
    (-> response
        :body
        (json/read-value (json/object-mapper {:decode-key-fn true}))
        :data
        :reusedFurnitures
        (->>
         (map #(assoc %
                      :category (get-in % [:description :category])
                      :subcategory (get-in % [:description :subcategory])))
         (sort-by (juxt :from :to :category :subcategory))
         (conj [[:id :from :to :category :subcategory :itemCount]])))))

