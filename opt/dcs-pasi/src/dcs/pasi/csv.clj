(ns dcs.pasi.csv
  (:require [clojure.java.io :as io]
            [clojure.instant :as inst]
            [clojure.data.csv :as csv]
            [jsonista.core :as json]
            [java-http-clj.core :as http]))


(defn ZwsCarbonMetric-upsert-fn [m]
  (format "mutation {
             upsertZwsCarbonMetric(
               wasteStream: \"%s\",
               carbonWeighting: %s
             ) { id }
           }"
          (:wasteStream m)
          (:carbonWeighting m)))

(defn AceFurnitureDescription-upsert-fn [m]
  (format "mutation {
             upsertAceFurnitureDescription(
               category: \"%s\",
               subcategory: \"%s\",
               itemKg: %s
             ) { id }
           }"
          (:category m)
          (:subcategory m)
          (:itemKg m)))

(defn AceReusedFurniture-upsert-fn [m]
  (format "mutation {
             upsertAceReusedFurniture(
               category: \"%s\",
               subcategory: \"%s\",
               from: \"%s\",
               to: \"%s\",
               itemCount: %s
             ) { id }
           }"
          (:category m)
          (:subcategory m)
          (:startTime m)
          (:endTime m)
          (:itemCount m)))

(defn StcmfSource-upsert-fn [m]
  (format "mutation {
             upsertStcmfSource(
               name: \"%s\"
             ) { id }
           }"
          (:name m)))

(defn StcmfDestination-upsert-fn [m]
  (format "mutation {
             upsertStcmfDestination(
               name: \"%s\"
             ) { id }
           }"
          (:name m)))

(defn StcmfIncomingFood-upsert-fn [m]
  (format "mutation {
             upsertStcmfIncomingFood(
               from: \"%s\",
               to: \"%s\",
               source: \"%s\",
               batchKg: %s
             ) { id }
           }"
          (:startTime m)
          (:endTime m)
          (:source m)
          (:batchKg m)))

(defn StcmfRedistributedFood-upsert-fn [m]
  (format "mutation {
             upsertStcmfRedistributedFood(
               from: \"%s\",
               to: \"%s\",
               destination: \"%s\",
               batchKg: %s
             ) { id }
           }"
          (:startTime m)
          (:endTime m)
          (:destination m)
          (:batchKg m)))

(defn OpsAceToRefData-upsert-fn [m]
  (format "mutation {
             upsertOpsAceToRefData(
               category: \"%s\",
               subcategory: \"%s\",
               fraction: %s,
               refMaterial: \"%s\"
             ) { id }
           }"
          (:category m)
          (:subcategory m)
          (:fraction m)
          (:refMaterial m)))

(defn OpsStcmfToRefData-upsert-fn [m]
  (format "mutation {
             upsertOpsStcmfToRefData(
               destination: \"%s\",
               fraction: %s,
               refProcess: \"%s\",
               refMaterial: \"%s\"
             ) { id }
           }"
          (:destination m)
          (:fraction m)
          (:refProcess m)
          (:refMaterial m)))

(defn OpsOrg-upsert-fn [m]
  (format "mutation {
             upsertOpsOrg(
               name: \"%s\",
               qid: \"%s\"
             ) { id }
           }"
          (:name m)
          (:qid m)))

(defn OpsProcess-upsert-fn [m]
  (format "mutation {
             upsertOpsProcess(
               name: \"%s\"
             ) { id }
           }"
          (:name m)))

(defn- rows->maps [rows]
  (map zipmap
       (repeat (map keyword (first rows)))
       (rest rows)))

(defn csv-file->upsert-maps [^String s]
  (let [file (io/file s)
        fname (.getName file)
        ent-type (subs fname 0 (- (count fname) 4))
        upsert-fn-maker (resolve (symbol "dcs.pasi.csv" (str ent-type "-upsert-fn")))]
    (when (nil? upsert-fn-maker)
      (throw (Exception. (str "Unsupported entity type: " ent-type))))
    (-> file
        slurp
        csv/read-csv
        rows->maps
        (->>
         (map #(assoc % :upsert-fn (upsert-fn-maker %)))))))


(defn- apply-upsert [^String #_GraphQL upsert-fn url]
  (let [response (http/post url {:headers {"Content-type" "application/json"}
                                 :body    (json/write-value-as-string {:query     upsert-fn
                                                                       :variables nil})})
        status   (:status response)]
    (if (= 200 status)
      {:id (-> response
               :body
               (json/read-value (json/object-mapper {:decode-key-fn true}))
               :data
               vals
               first
               :id)}
      {:error (format "Error %s" status)})))

(defn apply-upserts [upsert-maps url]
  (->> (for [upsert-map upsert-maps]
         (-> upsert-map
             :upsert-fn
             (apply-upsert url)
             (#(merge upsert-map %))))
       (conj [[:id :error]])))