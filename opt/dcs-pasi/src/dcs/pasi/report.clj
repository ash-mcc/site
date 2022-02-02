(ns dcs.pasi.report
  (:require [clojure.spec.alpha :as s]
            [jsonista.core :as json]
            [java-http-clj.core :as http]
            [dcs.pasi.model :as model]))


(defn query
  [type-kw url]
  {:pre [(s/valid? keyword? type-kw)
         (s/valid? string? url)]}
  (let [model (type-kw model/queries)]
    (when (nil? model)
      (throw (Exception. (format "No such model for: %s" type-kw))))
    (let [graphql  (:graphql model)
          response (http/post url {:headers {"Content-type" "application/json"}
                                   :body    (json/write-value-as-string {:query     graphql
                                                                         :variables nil})})
          status   (:status response)]
      (when (not= 200 status)
        (throw (Exception. (format "Error code: %s" status))))
      (let [results-parser (:results-parser model)
            field-order    (:field-order model)]
        (-> response
            :body
            ;; assume that it was an application/json response 
            (json/read-value (json/object-mapper {:decode-key-fn true}))
            :data
            ;; assume a map with a single entry: get the value of that entry
            vals
            first
            (->>
             results-parser
             (conj [field-order])))))))


;; This is just for the blog article that I was writing
#_(defn dcsWasteReduction-stcmfOnly [url]
  (let [[headings data] (dcsWasteReduction url)]
    [[:enabler :from :to :batchKg :foodDestination :ref_process :ref_wasteStream :ref_carbonSavingCo2eKg]
     (->> data
          (filter #(= "Stirling Community Food" (:enabler %)))
          (map #(set/rename-keys % {:process            :ref_process
                                    :wasteStream        :ref_wasteStream
                                    :carbonSavingCo2eKg :ref_carbonSavingCo2eKg})))]))


