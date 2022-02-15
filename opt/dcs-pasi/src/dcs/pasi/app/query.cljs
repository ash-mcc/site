(ns dcs.pasi.app.query
  (:require
   [cljs.core.async :as async]
   [cljs.spec.alpha :as s]
   [cljs-http.client :as http]
   [dcs.pasi.model :as model]))



(defn http-call [url ^String graphql response-handler]
  (async/go 
    (let [response (async/<! (http/post 
                              url 
                              {:debug true
                               :with-credentials? false
                               :headers           {"Content-type" "application/json"}
                               :json-params       {:query     graphql
                                                   :variables nil}}))]
      (response-handler response))))


(defn response-handler [result-parser params response]
  (let [status (:status response)]
    (when (not= 200 status)
      (throw (ex-info (str "Error code: " status) {})))
    (let [coll (-> response
                   :body
                   ;; assume that it was an application/json response 
                   ;; which will have prompted cljs-http to have 
                   ;; converted the JSON data in the body, to Clojure data
                   :data
                   ;; assume a map with a single entry: get the value of that entry
                   vals
                   first)]
      (->> coll
           (keep-indexed (fn [index item] (assoc item :rowId (inc index))))
           result-parser
           (#(do 
               %))
           (#(.successCallback
              ^js params
              (clj->js %)
              (clj->js (count %))))))))


(defn query 
  [grid-api-component params type-kw editable-fields url]
  {:pre [(s/valid? keyword? type-kw)
         (s/valid? set? editable-fields)
         (s/valid? string? url)]}
  (let [model (type-kw model/queries)]
    (when (nil? model)
      (throw (ex-info (str "No such model for: " type-kw) {})))
    (let [graphql           (:graphql model)
          results-parser    (:results-parser model)
          field-order       (:field-order model)
          col-defs          (->> field-order
                                 (remove #(= :id %))
                                 (map #(merge {:field (name %)}
                                              (when (= :rowId %) {:filter "agNumberColumnFilter"})
                                              (when (contains? editable-fields %) {:editable true})
                                              ;; hack in some maxWidth settings
                                              (when (contains? #{:from :to :process :refProcess :batchKg :itemCount :itemKg :fraction :abbr :qid :source} %) {:maxWidth 100})
                                              (when (contains? #{:category :furnitureCategory :materialCategory :carbonWeighting :route} %) {:maxWidth 130})
                                              (when (contains? #{:carbonSavingCo2eKg} %) {:maxWidth 160})
                                              (when (contains? #{:fraction :batchKg :batchTonnes :carbonSavingCo2eKg :carbonWeighting :itemCount} %) {:type "rightAligned"})
                                              (when (contains? #{:fraction :batchKg :batchTonnes :carbonSavingCo2eKg :carbonWeighting} %) {:valueFormatter (fn [^js params] (let [v (.-value params)] (if (number? v) (.toFixed v 2) v)))}))))
          response-handler' (partial response-handler results-parser params)]
      (.setColumnDefs grid-api-component (clj->js col-defs)) ;; hack to set the columnDefs to 'match' the expected data
      (http-call url graphql response-handler'))))


