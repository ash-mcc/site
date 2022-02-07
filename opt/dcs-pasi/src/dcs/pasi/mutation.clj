(ns dcs.pasi.mutation
  (:require [clojure.instant :as inst]
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

(defn FrshrMaterialCategory-upsert-fn [m]
  (format "mutation {
             upsertFrshrMaterialCategory(
               name: \"%s\"
             ) { id }
           }"
          (:name m)))

(defn FrshrReusedMaterial-upsert-fn [m]
  (format "mutation {
             upsertFrshrReusedMaterial(
               from: \"%s\",
               to: \"%s\",
               material: \"%s\",
               batchKg: %s
             ) { id }
           }"
          (:from m)
          (:to m)
          (:material m)
          (:batchKg m)))

(defn StcilBin-upsert-fn [m]
  (format "mutation {
             upsertStcilBin(
               name: \"%s\"
             ) { id }
           }"
          (:name m)))

(defn StcilKerbsideRecycling-upsert-fn [m]
  (format "mutation {
             upsertStcilKerbsideRecycling(
               from: \"%s\",
               to: \"%s\",
               bin: \"%s\",
               route: \"%s\",
               batchTonnes: %s
             ) { id }
           }"
          (:startTime m)
          (:endTime m)
          (:bin m)
          (:route m)
          (:batchTonnes m)))

(defn DcsAceToRefData-upsert-fn [m]
  (format "mutation {
             upsertDcsAceToRefData(
               category: \"%s\",
               subcategory: \"%s\",
               fraction: %s,
               refProcess: \"reusing\",
               refMaterial: \"%s\",
               enabler: \"ACE\"
             ) { id }
           }"
          (:category m)
          (:subcategory m)
          (:fraction m)
          (:refMaterial m)))

(defn DcsStcmfToRefData-upsert-fn [m]
  (format "mutation {
             upsertDcsStcmfToRefData(
               destination: \"%s\",
               fraction: %s,
               refProcess: \"%s\",
               refMaterial: \"%s\",
               enabler: \"STCMF\"
             ) { id }
           }"
          (:destination m)
          (:fraction m)
          (:refProcess m)
          (:refMaterial m)))

(defn DcsFrshrToRefData-upsert-fn [m]
  (format "mutation {
             upsertDcsFrshrToRefData(
               material: \"%s\",
               fraction: %s,
               refProcess: \"%s\",
               refMaterial: \"%s\",
               enabler: \"FRSHR\"
             ) { id }
           }"
          (:material m)
          (:fraction m)
          (:refProcess m)
          (:refMaterial m)))

(defn DcsStcilToRefData-upsert-fn [m]
  (format "mutation {
             upsertDcsStcilToRefData(
               bin: \"%s\",
               fraction: %s,
               refProcess: \"%s\",
               refMaterial: \"%s\",
               enabler: \"STCIL\"
             ) { id }
           }"
          (:bin m)
          (:fraction m)
          (:refProcess m)
          (:refMaterial m)))

(defn DcsOrg-upsert-fn [m]
  (format "mutation {
             upsertDcsOrg(
               abbr: \"%s\",
               name: \"%s\",
               qid: \"%s\"
             ) { id }
           }"
          (:abbr m)
          (:name m)
          (:qid m)))

(defn DcsProcess-upsert-fn [m]
  (format "mutation {
             upsertDcsProcess(
               name: \"%s\"
             ) { id }
           }"
          (:name m)))

(defn DcsWasteReduction-upsert-fn [m]
  (format "mutation {
             upsertDcsWasteReduction(
               carbonSaving: %s,
               sourceRecord: \"%s\"
             ) { id }
           }"
          (:carbonSaving m)
          (:sourceRecord m)))

(defn DcsWasteReduction-delete-fn [m]
  (format "mutation {
             deleteDcsWasteReduction(
               id: \"%s\"
             ) { id }
           }"
          (:id m)))

(defn- apply-mutation [^String #_GraphQL mutation-fn url]
  (let [response (http/post url {:headers {"Content-type" "application/json"}
                                 :body    (json/write-value-as-string {:query     mutation-fn
                                                                       :variables nil})})
        status   (:status response)]
    (if (= 200 status)
      {:new-id (-> response
                   :body
                   (json/read-value (json/object-mapper {:decode-key-fn true}))
                   :data
                   vals
                   first
                   :id)}
      {:error (format "Error %s" status)})))

(defn apply-mutations [mutation-maps url]
  (->> (for [mutation-map mutation-maps]
         (-> mutation-map
             :mutation-fn
             (apply-mutation url)
             (#(merge mutation-map %))))
       (conj [[:id :new-id :error]])))