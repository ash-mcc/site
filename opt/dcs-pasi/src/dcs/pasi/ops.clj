(ns dcs.pasi.ops
  (:require [jsonista.core :as json]
            [java-http-clj.core :as http]))


;; For now, let's implement ops functionality over the GraphQL interface.


(defn OpsWasteReduction-delete-fn [m]
  (format "mutation {
             deleteOpsWasteReduction(
               id: \"%s\"
             ) { id }
           }"
          (:id m)))

(defn ->mutation-maps [coll]
  (->> coll
   (map #(assoc % :mutation-fn (OpsWasteReduction-delete-fn %)))))


(defn- apply-mutation [^String #_GraphQL mutation-fn url]
  (println "\nbody=\n" (json/write-value-as-string {:query     mutation-fn
                                                    :variables nil}) "\n\n")
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