(ns dcs.pasi.report
  (:require [jsonista.core :as json]
            [java-http-clj.core :as http]
            [dcs.pasi.report.shared :as shared]))


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
  (apply-query "query {
                  zwsCarbonMetric {
                    id
                    wasteStream
                    carbonWeighting
                  }
                }"
               url
               (fn [coll]
                 (->> coll
                      (sort-by :wasteStream)
                      (conj [[:id :wasteStream :carbonWeighting]])))))

(defn aceFurnitureDescription [url]
  (apply-query  "query {
                   aceFurnitureDescription {
                     id
                     category
                     subcategory
                     itemKg
                   }
                 }"
               url
               (fn [coll]
                 (->> coll
                      (sort-by (juxt :category :subcategory))
                      (conj [[:id :category :subcategory :itemKg]])))))

(defn aceReusedFurniture [url]
  (apply-query  "query {
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
                url
                (fn [coll]
                  (->> coll
                       (map #(assoc %
                                    :category (get-in % [:description :category])
                                    :subcategory (get-in % [:description :subcategory])))
                       (sort-by (juxt :from :to :category :subcategory))
                       (conj [[:id :from :to :category :subcategory :itemCount]])))))

(defn stcmfSource [url]
  (apply-query  "query {
                   stcmfSource {
                     id
                     name
                   }
                 }"
                url
                (fn [coll]
                  (->> coll
                       (sort-by :name)
                       (conj [[:id :name]])))))

(defn stcmfDestination [url]
  (apply-query  "query {
                   stcmfDestination {
                     id
                     name
                   }
                 }"
                url
                (fn [coll]
                  (->> coll
                       (sort-by :name)
                       (conj [[:id :name]])))))

(defn stcmfIncomingFood [url]
  (apply-query  "query {
                   stcmfIncomingFood {
                     id
                     from
                     to
                     source {
                       name
                     }
                     batchKg
                   }
                 }"
                url
                (fn [coll]
                  (->> coll
                       (map #(assoc %
                                    :source (get-in % [:source :name])))
                       (sort-by (juxt :from :to :source))
                       (conj [[:id :from :to :source :batchKg]])))))

(defn stcmfRedistributedFood [url]
  (apply-query  "query {
                   stcmfRedistributedFood {
                     id
                     from
                     to
                     destination {
                       name
                     }
                     batchKg
                   }
                 }"
                url
                (fn [coll]
                  (->> coll
                       (map #(assoc %
                                    :destination (get-in % [:destination :name])))
                       (sort-by (juxt :from :to :destination))
                       (conj [[:id :from :to :destination :batchKg]])))))

(defn opsAceToRefData [url]
  (apply-query  "query {
                   opsAceToRefData {
                     id
                     description {
                       category
                       subcategory
                     }
                     refMaterial {
                       wasteStream
                     }
                     fraction
                   }
                 }"
                url
                (fn [coll]
                  (->> coll
                       (map #(assoc %
                                    :category (get-in % [:description :category])
                                    :subcategory (get-in % [:description :subcategory])
                                    :wasteStream (get-in % [:refMaterial :wasteStream])))
                       (sort-by (juxt :category :subcategory :wasteStream))
                       (conj [[:id :category :subcategory :wasteStream :fraction]])))))

(defn opsStcmfToRefData [url]
  (apply-query  "query {
                   opsStcmfToRefData {
                     id
                     destination {
                       name
                     }
                     refProcess {
                       name
                     }
                     refMaterial {
                       wasteStream
                     }
                     fraction
                   }
                 }"
                url
                (fn [coll]
                  (->> coll
                       (map #(assoc %
                                    :destination (get-in % [:destination :name])
                                    :refProcess (get-in % [:refProcess :name])
                                    :refMaterial (get-in % [:refMaterial :wasteStream])))
                       (sort-by (juxt :destination :refProcess :refMaterial))
                       (conj [[:id :destination :refProcess :refMaterial :fraction]])))))

(defn opsOrg [url]
  (apply-query  "query {
                   opsOrg {
                     id
                     name
                     qid
                   }
                 }"
                url
                (fn [coll]
                  (->> coll
                       (sort-by :name)
                       (conj [[:id :name :qid]])))))

(defn opsProcess [url]
  (apply-query  "query {
                   opsProcess {
                     id
                     name
                   }
                 }"
                url
                (fn [coll]
                  (->> coll
                       (sort-by :name)
                       (conj [[:id :name]])))))

(defn opsWasteReduction [url]
  (apply-query  "query {
                   opsWasteReduction {
                     id
                     sourceRecord {
                       __typename
                       ... on AceReusedFurniture {
                         from
                         to
                         itemCount
                         description {
                           itemKg
                         }
                       }
                       ... on StcmfRedistributedFood {
                         from
                         to
                         batchKg
                       }
                     }
                     enabler {
                       name
                     }
                     carbonSaving
                   }
                 }"
                url
                (fn [coll]
                  (->> coll
                       (map #(assoc %
                                    :from (get-in % [:sourceRecord :from])
                                    :to (get-in % [:sourceRecord :to])
                                    :batchKg (if (= "AceReusedFurniture" (get-in % [:sourceRecord :__typename]))
                                               (* (bigdec (get-in % [:sourceRecord :itemCount]))
                                                  (bigdec (get-in % [:sourceRecord :description :itemKg])))
                                               (get-in % [:sourceRecord :batchKg]))
                                    :itemCount (when (= "AceReusedFurniture" (get-in % [:sourceRecord :__typename]))
                                                 (get-in % [:sourceRecord :itemCount]))
                                    :enabler (get-in % [:enabler :name])))
                       (sort-by (juxt :from :to :enabler))
                       (conj [[:id :from :to :enabler :batchKg :itemCount :carbonSaving]])))))
