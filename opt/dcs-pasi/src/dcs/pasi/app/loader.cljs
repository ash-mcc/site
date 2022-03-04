(ns dcs.pasi.app.loader
  (:require [clojure.string :as str]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [testdouble.cljs.csv :as csv]
            [dcs.pasi.app.state :as state])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(defn fetch
      [url body-handler]
      (js/console.log (str "Fetching " url))
      (go (let [response (<! (http/get url {:with-credentials? false}))]
                 (js/console.log (str "Response from " url ": status=" (:status response) " success=" (:success response)))
                 (let [body (:body response)
                       clj-body (cond
                                  (str/ends-with? url ".csv") (csv/read-csv (str/replace body "\r" "")) ;; parse as CSV (and remove \r chars since they're troublesome with this CSV lib in this context)
                                  (string? body) (.parse js/JSON body) ;; probably a text/plain response that we'll have to explicitly convert to JSON data
                                  :else body ;; probably an application/json response causing cljs-http to have auto converted the JSON to Clojure data
                                  )] 
                      (body-handler clj-body)))))

(defn load-data
  []
  (js/console.log "Loading data files")
  
  (fetch "StcilRoutes.csv"
         (fn [stcil-routes] (->> stcil-routes
                                 (drop 1)
                                 (remove #(some str/blank? (take 3 %)))
                                 (map #(vector (first %) 
                                               {:latitude (js/parseFloat (second %))
                                                :longitude (js/parseFloat (nth % 2))}))
                                 (into {})
                                 (reset! state/stcil-routes-cursor)))))