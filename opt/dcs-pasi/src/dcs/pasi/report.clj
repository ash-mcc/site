(ns dcs.pasi.report
  (:require [clojure.set :as set]
            [jsonista.core :as json]
            [java-http-clj.core :as http]
            [dcs.pasi.model :as model]))


(defn apply-query [^String #_GraphQL query-fn url parse-sort-and-label-fn]
  (let [response (http/post url {:headers {"Content-type" "application/json"}
                                 :body    (json/write-value-as-string {:query     query-fn
                                                                       :variables nil})})
        status   (:status response)]
    (when (not= 200 status)
      (throw (Exception. (format "Error code %s" status))))
    (-> response
        :body
        (json/read-value (json/object-mapper {:decode-key-fn true}))
        :data
        vals
        first
        (->>
         parse-sort-and-label-fn))))


(defn zwsCarbonMetric [url]
  (apply-query (-> model/queries :zwsCarbonMetric :graphql)
               url
               (fn [coll]
                 (->> coll
                      (-> model/queries :zwsCarbonMetric :result-parser)
                      (sort-by :wasteStream)
                      (conj [[:id :wasteStream :carbonWeighting]])))))

(defn aceFurnitureDescription [url]
  (apply-query (-> model/queries :aceFurnitureDescription :graphql)
               url
               (fn [coll]
                 (->> coll
                      (-> model/queries :aceFurnitureDescription :result-parser)
                      (sort-by (juxt :category :subcategory))
                      (conj [[:id :category :subcategory :itemKg]])))))

(defn aceReusedFurniture [url]
  (apply-query (-> model/queries :aceReusedFurniture :graphql)
                url
                (fn [coll]
                  (->> coll
                       (-> model/queries :aceReusedFurniture :result-parser)
                       (sort-by (juxt :from :to :category :subcategory))
                       (conj [[:id :from :to :category :subcategory :itemCount]])))))

(defn stcmfSource [url]
  (apply-query (-> model/queries :stcmfSource :graphql)
                url
                (fn [coll]
                  (->> coll
                       (-> model/queries :stcmfSource :result-parser)
                       (sort-by :name)
                       (conj [[:id :name]])))))

(defn stcmfDestination [url]
  (apply-query (-> model/queries :stcmfDestination :graphql)
                url
                (fn [coll]
                  (->> coll
                       (-> model/queries :stcmfDestination :result-parser)
                       (sort-by :name)
                       (conj [[:id :name]])))))

(defn stcmfIncomingFood [url]
  (apply-query (-> model/queries :stcmfIncomingFood :graphql)
                url
                (fn [coll]
                  (->> coll
                       (-> model/queries :stcmfIncomingFood :result-parser)
                       (sort-by (juxt :from :to :source))
                       (conj [[:id :from :to :source :batchKg]])))))

(defn stcmfRedistributedFood [url]
  (apply-query (-> model/queries :stcmfRedistributedFood :graphql)
                url
                (fn [coll]
                  (->> coll
                       (-> model/queries :stcmfRedistributedFood :result-parser)
                       (sort-by (juxt :from :to :destination))
                       (conj [[:id :from :to :destination :batchKg]])))))

(defn frshrMaterialCategory [url]
  (apply-query (-> model/queries :frshrMaterialCategory :graphql)
                url
                (fn [coll]
                  (->> coll
                       (sort-by :name)
                       (conj [[:id :name]])))))

(defn frshrReusedMaterial [url]
  (apply-query (-> model/queries :frshrReusedMaterial :graphql)
                url
                (fn [coll]
                  (->> coll
                       (-> model/queries :frshrReusedMaterial :result-parser)
                       (sort-by (juxt :from :to :material))
                       (conj [[:id :from :to :material :batchKg]])))))

(defn opsAceToRefData [url]
  (apply-query (-> model/queries :opsAceToRefData :graphql)
                url
                (fn [coll]
                  (->> coll
                       (-> model/queries :opsAceToRefData :result-parser)
                       (sort-by (juxt :category :subcategory :wasteStream))
                       (conj [[:id :category :subcategory :wasteStream :fraction]])))))

(defn opsStcmfToRefData [url]
  (apply-query (-> model/queries :opsStcmfToRefData :graphql)
                url
                (fn [coll]
                  (->> coll
                       (-> model/queries :opsStcmfToRefData :result-parser)
                       (sort-by (juxt :destination :refProcess :wasteStream))
                       (conj [[:id :destination :refProcess :wasteStream :fraction]])))))

(defn opsFrshrToRefData [url]
  (apply-query (-> model/queries :opsFrshrToRefData :graphql)
                url
                (fn [coll]
                  (->> coll
                       (-> model/queries :opsFrshrToRefData :result-parser)
                       (sort-by (juxt :material :refProcess :wasteStream))
                       (conj [[:id :material :refProcess :wasteStream :fraction]])))))

(defn opsOrg [url]
  (apply-query (-> model/queries :opsOrg :graphql)
                url
                (fn [coll]
                  (->> coll
                       (-> model/queries :opsOrg :result-parser)
                       (sort-by :abbr)
                       (conj [[:id :abbr :name :qid]])))))

(defn opsProcess [url]
  (apply-query (-> model/queries :opsProcess :graphql)
                url
                (fn [coll]
                  (->> coll
                        (-> model/queries :opsProcess :result-parser)
                       (sort-by :name)
                       (conj [[:id :name]])))))

(defn opsWasteReduction [url]
  (apply-query (-> model/queries :opsWasteReduction :graphql)
                url
                (fn [coll]
                  (->> coll
                       (-> model/queries :opsWasteReduction :result-parser)
                       (sort-by (juxt :from :to :enabler :process :wasteStream))
                       (conj [[:from :to :enabler :process :wasteStream :batchKg :carbonSavingCo2eKg :furnitureCategory :furnitureSubcategory :foodDestination :materialCategory]])))))

;; This is just for the blog article that I was writing
(defn opsWasteReduction-stcmfOnly [url]
  (let [[headings data] (opsWasteReduction url)]
    [[:enabler :from :to :batchKg :foodDestination :ref_process :ref_wasteStream :ref_carbonSavingCo2eKg]
     (->> data
          (filter #(= "Stirling Community Food" (:enabler %)))
          (map #(set/rename-keys % {:process            :ref_process
                                    :wasteStream        :ref_wasteStream
                                    :carbonSavingCo2eKg :ref_carbonSavingCo2eKg})))]))
