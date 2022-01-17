(ns dcs.pasi.as-a-client
  (:require [clojure.pprint :as pp]
            [jsonista.core :as json]
            [java-http-clj.core :as http]))

(def url "http://localhost:2021/pasi/graphql")


;; Query for FurnitureDescription entities
;;
(let [grahphql "
query {
  furnitureDescriptions {
    category
    id
    itemKg
    subcategory
  }
}"
      response (http/post url {:headers {"Content-type" "application/json"}
                               :body    (json/write-value-as-string {:query     grahphql
                                                                     :variables nil})})]
  (when (= 200 (:status response))
    (-> response
        :body
        (json/read-value (json/object-mapper {:decode-key-fn true}))
        :data
        :furnitureDescriptions)))


;; Upsert a FurnitureDescription entity
;;
(let [grahphql "
mutation {
  upsertFurnitureDescription(
    category: \"Soft\",
    subcategory: \"sub3\",
    itemKg: 1.3
  ) { 
    id 
  }
}"
      response (http/post url {:headers {"Content-type" "application/json"}
                               :body    (json/write-value-as-string {:query     grahphql
                                                                     :variables nil})})]
  (when (= 200 (:status response))
    (-> response
        :body
        (json/read-value (json/object-mapper {:decode-key-fn true}))
        :data
        :upsertFurnitureDescription
        :id)))

