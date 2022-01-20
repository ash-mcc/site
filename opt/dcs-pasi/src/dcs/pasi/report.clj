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

(defn stcmfSource [url]
  (let [graphql  "query {
                   stcmfSource {
                     id
                     name
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
        :stcmfSource
        (->>
         (sort-by :name)
         (conj [[:id :name]])))))

(defn stcmfDestination [url]
  (let [graphql  "query {
                   stcmfDestination {
                     id
                     name
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
        :stcmfDestination
        (->>
         (sort-by :name)
         (conj [[:id :name]])))))

(defn stcmfIncomingFood [url]
  (let [graphql  "query {
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
        response (http/post url (shared/->http-request graphql))
        status   (:status response)]
    (when (not= 200 status)
      (throw (Exception. (format "Error code %s" status))))
    (-> response
        :body
        (json/read-value (json/object-mapper {:decode-key-fn true}))
        :data
        :stcmfIncomingFood
        (->>
         (map #(assoc %
                      :source (get-in % [:source :name])))
         (sort-by (juxt :from :to :source))
         (conj [[:id :from :to :source :batchKg]])))))

(defn stcmfRedistributedFood [url]
  (let [graphql  "query {
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
        response (http/post url (shared/->http-request graphql))
        status   (:status response)]
    (when (not= 200 status)
      (throw (Exception. (format "Error code %s" status))))
    (-> response
        :body
        (json/read-value (json/object-mapper {:decode-key-fn true}))
        :data
        :stcmfRedistributedFood
        (->>
         (map #(assoc %
                      :destination (get-in % [:destination :name])))
         (sort-by (juxt :from :to :destination))
         (conj [[:id :from :to :destination :batchKg]])))))

(defn opsAceToRefData [url]
  (let [graphql  "query {
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
         (sort-by (juxt :category :subcategory :wasteStream))
         (conj [[:id :category :subcategory :wasteStream :fraction]])))))

(defn opsStcmfToRefData [url]
  (let [graphql  "query {
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
        response (http/post url (shared/->http-request graphql))
        status   (:status response)]
    (when (not= 200 status)
      (throw (Exception. (format "Error code %s" status))))
    (-> response
        :body
        (json/read-value (json/object-mapper {:decode-key-fn true}))
        :data
        :opsStcmfToRefData
        (->>
         (map #(assoc %
                      :destination (get-in % [:destination :name])
                      :refProcess (get-in % [:refProcess :name])
                      :refMaterial (get-in % [:refMaterial :wasteStream])))
         (sort-by (juxt :destination :refProcess :refMaterial))
         (conj [[:id :destination :refProcess :refMaterial :fraction]])))))

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

(defn opsProcess [url]
  (let [graphql  "query {
                   opsProcess {
                     id
                     name
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
        :opsProcess
        (->>
         (sort-by :name)
         (conj [[:id :name]])))))

(defn opsWasteReduction [url]
  (let [graphql  "query {
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
        response (http/post url (shared/->http-request graphql))
        status   (:status response)]
    (when (not= 200 status)
      (throw (Exception. (format "Error code %s" status))))
    (-> response
        :body
        (json/read-value (json/object-mapper {:decode-key-fn true}))
        (#(do (println "\n\n" %)
              (println (count (:opsWasteReduction (:data %))) "\n\n") 
              %))
        :data
        :opsWasteReduction
        (->>
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