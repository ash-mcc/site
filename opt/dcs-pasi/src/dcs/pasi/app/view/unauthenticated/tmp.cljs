(ns dcs.pasi.app.view.unauthenticated.tmp
  (:require    [cljs.spec.alpha :as s]
               [clojure.set :as set]
               [clojure.string :as str]
               [dcs.pasi.app.state :as state]
               [dcs.pasi.model :as model]
               [dcs.pasi.app.query :as query]))



(defn load-from-server []
  (let [url (str "http://" js/window.location.hostname ":2021/pasi/graphql")
                      model (:dcsWasteReduction model/queries)
                      graphql (:graphql model)
                      results-parser    (:results-parser model)
                      field-order       (:field-order model)
                      response-handler (fn [response] 
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
                                                          first
                                                          ;; parse each possibly nested map to surface the wanted data in the top map
                                                          results-parser
                                                          (->> 
                                                           ;; add a status column
                                                           (map #(assoc % :status "loaded from server"))
                                                           (sort-by :to)
                                                           reverse))]
                                             (reset! state/unauthn-wr-ds-cursor coll))))]
                  (query/http-call url graphql response-handler)))


(defn filter-ds 
  [wr-ds selected-years selected-orgs]
  {:pre [#_(s/valid? set? selected-years)
         (s/valid? set? selected-orgs)]}
  (->> wr-ds
       (filter #(seq (set/intersection selected-years 
                                       (let [from (-> % :from (subs 0 4) js/parseInt)
                                             to   (when (not (str/starts-with? (:to %) "01-01-"))
                                                    (-> % :to (subs 0 4) js/parseInt))]
                                         #{from to}))))
       (filter #(contains? selected-orgs (:enabler %)))))



