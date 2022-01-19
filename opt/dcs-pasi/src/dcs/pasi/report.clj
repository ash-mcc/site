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
                   zwsCarbonMetric {
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
        :zwsCarbonMetric
        (->>
         (sort-by :wasteStream)
         (conj [[:id :wasteStream :carbonWeighting]])))))

(defn aceFurnitureDescription [url]
  (let [graphql  "query {
                   aceFurnitureDescription {
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
        :aceFurnitureDescription
        (->> 
         (sort-by (juxt :category :subcategory))
         (conj [[:id :category :subcategory :itemKg]])))))

(defn aceReusedFurniture [url]
  (let [graphql  "query {
                   aceReusedFurniture {
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
        :aceReusedFurniture
        (->>
         (map #(assoc %
                      :category (get-in % [:description :category])
                      :subcategory (get-in % [:description :subcategory])))
         (sort-by (juxt :from :to :category :subcategory))
         (conj [[:id :from :to :category :subcategory :itemCount]])))))

(defn opsAceToRefData [url]
  (let [graphql  "query {
                   opsAceToRefData {
                     id
                     description {
                       category
                       subcategory
                     }
                     fraction
                     refMaterial {
                       wasteStream
                     }
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
        :opsAceToRefData
        (->>
         (map #(assoc %
                      :category (get-in % [:description :category])
                      :subcategory (get-in % [:description :subcategory])
                      :wasteStream (get-in % [:refMaterial :wasteStream])))
         (sort-by (juxt :category :subcategory))
         (conj [[:id :category :subcategory :fraction :wasteStream]])))))

(defn opsOrg [url]
  (let [graphql  "query {
                   opsOrg {
                     id
                     name
                     qid
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
        :opsOrg
        (->>
         (sort-by :name)
         (conj [[:id :name :qid]])))))