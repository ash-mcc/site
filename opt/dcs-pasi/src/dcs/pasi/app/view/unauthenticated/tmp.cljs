(ns dcs.pasi.app.view.unauthenticated.tmp
  (:require    [cljs.spec.alpha :as s]
               [clojure.set :as set]
               [clojure.string :as str]
               [dcs.pasi.app.state :as state]
               [dcs.pasi.model :as model]
               [dcs.pasi.app.query :as query]))




(def wasteStreams ;; ordered by CO2e, the most first
  ;; manually hacked ui-style.css to align with this
  ["Textiles"
   "Textiles and Footwear"
   "Aluminium cans and foil"
   "Footwear"
   "Mixed Cans"
   "Scrap Metal"
   "Steel Cans"
   "PET (including forming)"
   "WEEE - Small"
   "WEEE - Mixed"
   "WEEE - Large"
   "PS (including forming)"
   "Wood"
   "Average Plastics"
   "Average plastic rigid (including bottles)"
   "HDPE (including forming)"
   "LDPE and LLDPE (including forming)"
   "Average plastic film (including bags)"
   "PP (including forming)"
   "PVC (including forming)"
   "Board"
   "Mixed paper and board"
   "Paper"
   "Books"
   "Mineral Oil"
   "WEEE - Fridges and Freezers"
   "Food and Drink Waste (wet AD)"
   "Food and Drink Waste (Composting)"
   "Batteries (Post Consumer Non Automotive)"
   "Glass (colour separated)"
   "Mixed Food and Garden Waste (dry AD)"
   "Garden Waste (dry AD)"
   "Mixed Food and Garden Waste (Composting)"
   "Garden Waste Composting"
   "Glass (mixed colours)"
   "Plasterboard"
   "Aggregates (Rubble)"])

(def wasteStream-colours 
  ["#1F77B4"
   "#FF7F0E"
   "#2CA02C"
   "#D62728"
   "#9467BD"
   "#8C564B"
   "#CFECF9"
   "#7F7F7F"
   "#BCBD22"
   "#17BECF"
   ;; repeat
   "#D7B5A6" ;; customised
   "#FF7F0E"
   "#2CA02C"
   "#D62728"
   "#9467BD"
   "#8C564B"
   "#CFECF9"
   "#7F7F7F"
   "#BCBD22"
   "#F1CE63" ;; customised
   ;; repeat
   "#1F77B4"
   "#FF7F0E"
   "#2CA02C"
   "#D62728"
   "#9467BD"
   "#8C564B"
   "#FF9D9A" ;; customised
   "#7F7F7F"
   "#BCBD22"
   "#17BECF"
   ;; repeat
   "#1F77B4"
   "#FF7F0E"
   "#2CA02C"
   "#D62728"
   "#9467BD"
   "#8C564B"
   "#CFECF9"
   "#7F7F7F"
   "#BCBD22"
   "#17BECF"])

(def orgs
  ["Alloa Community Enterprises"
   "The Fair Share"
   "Stirling council"
   "Stirling Community Food"])

(def org-colours
  ["#aeebf9"
   "#f2e1ab"
   "#ff9c00"
   "#94cc7a"])

(defn colour [v]
  (let [idx (.indexOf wasteStreams v)]
    (if (>= idx 0) 
      (get wasteStream-colours idx)
      (let [idx (.indexOf orgs v)]
        (if (>= idx 0)
          (get org-colours idx)
          "#3e8ed0")))))

  

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
  [wr-ds selected-years selected-orgs selected-streams]
  {:pre [(s/valid? set? selected-years)
         (s/valid? set? selected-orgs)
         (s/valid? set? selected-streams)]}
  (->> wr-ds
       (filter #(seq (set/intersection selected-years 
                                       (let [from (-> % :from (subs 0 4) js/parseInt)
                                             to   (when (not (str/starts-with? (:to %) "01-01-"))
                                                    (-> % :to (subs 0 4) js/parseInt))]
                                         #{from to}))))
       (filter #(contains? selected-orgs (:enabler %)))
       (filter #(contains? selected-streams (:wasteStream %)))))




(def geojson-template {:type       "FeatureCollection"
                       :features   []
                       :properties {:fields      {"n" {:name "Site name"}
                                                  "r" {:name "Region"}
                                                  "p" {:name "Permit"}
                                                  "s" {:name "Status"}
                                                  "a" {:name "Activities"}
                                                  "k" {:name "Accepts"}
                                                  "t" {:lookup (apply array-map
                                                                      (interleave (map #(str "m" %) (range))
                                                                                  wasteStreams))
                                                       :name   "Materials"}
                                                  "z" {:name "Total incoming tonnes"}}
                                    :attribution "SEPA",
                                    :description "Waste site locations and the quantities of incoming materials (2019)"}})

;; Example of a ds (containing 1 record) that has been restructed ready to be turned into a geojson oriented Feature record 
#_({:enabler                            "The Fair Share"
  :latitude                           "56.146389"
  :longitude                          "-3.919833"
  :per-wasteStream-carbonSavingCo2eKg {"m34" 2868.330419999999
                                       "m25" 0
                                       "m8"  18442.849840000003
                                       "m11" 0
                                       "m27" 0
                                       "m20" 0
                                       "m3"  0
                                       "m7"  0
                                       "m12" 4137.0327
                                       "m4"  943.6153999999997
                                       "m13" 9685.26552
                                       "m15" 7935.50175
                                       "m17" 443.4934500000001
                                       "m33" 0
                                       "m0"  0
                                       "m28" 384.8385
                                       "m9"  0
                                       "m26" 16967.29245
                                       "m36" 117.01556999999998
                                       "m29" 0
                                       "m16" 0
                                       "m19" 0
                                       "m10" 4465.179
                                       "m32" 0
                                       "m23" 31551.068070000005
                                       "m30" 0
                                       "m2"  193311.91663000002
                                       "m35" 0
                                       "m6"  0
                                       "m24" 0
                                       "m1"  1586281.4197999998
                                       "m18" 0
                                       "m14" 0
                                       "m21" 3930.29872
                                       "m31" 0
                                       "m5"  20312.238950000003
                                       "m22" 0}
  :total-carbonSavingCo2eKg           1901777.35677})

(defn ->geojson-as-a-clj-structure [ds]
  (js/console.log (str "->geojson-as-a-clj-structure encoding " (count ds) " rows"))
  (let [ds (->> ds
                (group-by :enabler)
                (map (fn [[enabler coll]] {:enabler                            enabler
                                           :latitude                           (-> coll first :latitude)
                                           :longitude                          (-> coll first :longitude)
                                           :per-wasteStream-carbonSavingCo2eKg (->> wasteStreams
                                                                                    (keep-indexed
                                                                                     (fn [idx wasteStream] (let [v (->> coll
                                                                                                                        (filter #(= wasteStream (:wasteStream %)))
                                                                                                                        (map :carbonSavingCo2eKg)
                                                                                                                        (apply +))]
                                                                                                             (when (= "Wood" wasteStream) (js/console.log (str "wasteStream " idx " " wasteStream)))
                                                                                                             [(str "m" idx) v])))
                                                                                    (into {}))
                                           :total-carbonSavingCo2eKg           (->> coll
                                                                                    (map :carbonSavingCo2eKg)
                                                                                    (apply +))})))
        _ (js/console.log (str ds))
        
        ;; Encode as GeoJSON oriented feature records
        features (map #(hash-map :geometry {:type        "Point"
                                            :coordinates [(:longitude %) (:latitude %)]}
                                 :type "Feature"
                                 :properties {"n" (:enabler %)
                                              "r" "region"
                                              "p" "permit"
                                              "s" "status"
                                              "a" "activities"
                                              "k" "accepts"
                                              "t" (:per-wasteStream-carbonSavingCo2eKg %) ;tonnes-incoming 
                                              "z" (:total-carbonSavingCo2eKg %) ;tonnes-incoming-total
                                              })
                      ds)]
    (assoc geojson-template :features features)))


