(ns dcs.pasi.csv
  (:require [jsonista.core :as json]
            [java-http-clj.core :as http]))


(defn upsert-ace-furniture-description [url category subcategory itemKg]
(let [grahphql (format "
mutation {
  upsertFurnitureDescription(
    category: \"%s\",
    subcategory: \"%s\",
    itemKg: %s
  ) { 
    id 
  }
}" category subcategory itemKg)
      response (http/post url {:headers {"Content-type" "application/json"}
                               :body    (json/write-value-as-string {:query     grahphql
                                                                     :variables nil})})]
  (when (= 200 (:status response))
    (-> response
        :body
        (json/read-value (json/object-mapper {:decode-key-fn true}))
        :data
        :upsertFurnitureDescription
        :id))))

