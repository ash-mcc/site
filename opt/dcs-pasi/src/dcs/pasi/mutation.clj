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

(defn OpsWasteReduction-upsert-fn [m]
  (format "mutation {
             upsertOpsWasteReduction(
               carbonSaving: %s,
               sourceRecord: \"%s\"
             ) { id }
           }"
          (:carbonSaving m)
          (:sourceRecord m)))

(defn OpsWasteReduction-delete-fn [m]
  (format "mutation {
             deleteOpsWasteReduction(
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