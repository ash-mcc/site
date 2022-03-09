(ns dcs.pasi.app.view.unauthenticated.chart
  (:require [cljs.spec.alpha :as s]
            [clojure.string :as str]
            [reagent.core :as r]
            [oz.core :as oz]
            [dcs.pasi.app.util :as util]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.unauthenticated.tmp :as tmp]))



(def chart-templateTemplate-co2e-wasteStream-bar
  {:schema    "https://vega.github.io/schema/vega/v5.json"
   :width      900 ;"container"
   ;:height     500
   :background "#E8F8F5"
   :title     "Carbon savings per quarter"
   :data      {:values :PLACEHOLDER}
   :transform [{:timeUnit "yearquarter"
                :field    "to"
                :as       "quarter"}
               {:aggregate [{:op    "sum" ;; TODO calc this properly
                             :field "carbonSavingCo2eKg"
                             :as    "carbonSavingCo2eKg"}]
                :groupby   ["quarter" "wasteStream"]}
               {:calculate "datum.carbonSavingCo2eKg / 1000" :as "carbonSavingCo2eTonnes"}]
   :layer     [{:mark     {:type                 "bar"
                           :cornerRadiusTopLeft  3
                           :cornerRadiusTopRight 3}
                :encoding {:x       {:title "Year quarter"
                                     :field "quarter"
                                     :type  "temporal"
                                     :axis  {:labelExpr  "timeFormat(datum.value, '%q') == '1' ? timeFormat(datum.value, 'Q%q %Y') : timeFormat(datum.value, 'Q%q')"
                                             :labelAngle 45
                                             #_:tickCount  #_{:interval "month"
                                                          :step     3
                                                          :start    0}
                                             ;:tickBand "extent"
                                             }
                                     :timeUnit "yearquarter"
                                     :scale {:domain ["2013-01-01T00:00:00" {:expr "now()"}]}}
                           :y       {:title "Carbon savings (CO2e tonnes)"
                                     :field "carbonSavingCo2eTonnes"
                                     :type  "quantitative"}
                           :color   {:title "Waste stream"
                                     :field "wasteStream" 
                                     :type "nominal" 
                                     :scale :PLACEHOLDER 
                                     :legend nil #_{:columns 2}}
                           :tooltip [{:title  "Year quarter"
                                      :field  "quarter"
                                      :type   "temporal"
                                      :format "Q%q %Y"}
                                     {:title  "Carbon Savings (CO2e tonnes)"
                                      :field  "carbonSavingCo2eTonnes"
                                      :type   "quantitative"
                                      :format ".3f"}
                                     {:title "Waste stream"
                                      :field "wasteStream"
                                      :type "nominal"}]}}]
   :config    {:axisX {:grid false}}})

(def chart-template-co2e-wasteStream-bar
  (-> chart-templateTemplate-co2e-wasteStream-bar
      (assoc-in [:layer 0 :encoding :color :scale] {:domain tmp/wasteStreams :range tmp/wasteStream-colours})))

(def chart-template-co2e-wasteStream-line
  (-> chart-template-co2e-wasteStream-bar
      (assoc-in [:layer 0 :mark :type] "line")))

(def chart-template-co2e-organisation-bar 
  (-> chart-template-co2e-wasteStream-bar
      (assoc-in [:layer 0 :encoding :color :scale] {:domain tmp/orgs :range tmp/org-colours})
      (assoc-in [:transform 1 :groupby 1] "enabler")
      (assoc-in [:layer 0 :encoding :color :title] "Organisation")
      (assoc-in [:layer 0 :encoding :color :field] "enabler")
      ;(assoc-in [:layer 0 :encoding :color :legend :columns] 1)
      (assoc-in [:layer 0 :encoding :tooltip 2 :title] "Organisation")
      (assoc-in [:layer 0 :encoding :tooltip 2 :field] "enabler")))

(def chart-template-co2e-organisation-line
  (-> chart-template-co2e-organisation-bar
      (assoc-in [:layer 0 :mark :type] "line")))

(def chart-template-weight-wasteStream-bar
  (-> chart-template-co2e-wasteStream-bar
      (assoc-in [:title] "Weights per quarter")
      (assoc-in [:transform 1 :aggregate 0] {:op    "sum"
                                             :field "batchKg"
                                             :as    "batchKg"})
      (assoc-in [:transform 2] {:calculate "datum.batchKg / 1000"
                                :as        "batchTonnes"})
      (assoc-in [:layer 0 :encoding :y :title] "Weights (tonnes)")
      (assoc-in [:layer 0 :encoding :y :field] "batchTonnes")
      (assoc-in [:layer 0 :encoding :tooltip 1 :title] "Weights (tonnes)")
      (assoc-in [:layer 0 :encoding :tooltip 1 :field] "batchTonnes")))

(def chart-template-weight-wasteStream-line
  (-> chart-template-weight-wasteStream-bar
      (assoc-in [:layer 0 :mark :type] "line")))

(def chart-template-weight-organisation-bar
  (-> chart-template-weight-wasteStream-bar
      (assoc-in [:layer 0 :encoding :color :scale] {:domain tmp/orgs :range tmp/org-colours})
      (assoc-in [:transform 1 :groupby 1] "enabler")
      (assoc-in [:layer 0 :encoding :color :title] "Organisation")
      (assoc-in [:layer 0 :encoding :color :field] "enabler")
      ;(assoc-in [:layer 0 :encoding :color :legend :columns] 1)
      (assoc-in [:layer 0 :encoding :tooltip 2 :title] "Organisation")
      (assoc-in [:layer 0 :encoding :tooltip 2 :field] "enabler")))

(def chart-template-weight-organisation-line
  (-> chart-template-weight-organisation-bar
      (assoc-in [:layer 0 :mark :type] "line")))

(def chart-templates 
  {["Carbon savings" "Waste stream" "Bar chart"]  chart-template-co2e-wasteStream-bar
   ["Carbon savings" "Waste stream" "Line chart"] chart-template-co2e-wasteStream-line
   ["Carbon savings" "Organisation" "Bar chart"]  chart-template-co2e-organisation-bar
   ["Carbon savings" "Organisation" "Line chart"] chart-template-co2e-organisation-line
   ["Weights"        "Waste stream" "Bar chart"]         chart-template-weight-wasteStream-bar
   ["Weights"        "Waste stream" "Line chart"]        chart-template-weight-wasteStream-line
   ["Weights"        "Organisation" "Bar chart"]         chart-template-weight-organisation-bar
   ["Weights"        "Organisation" "Line chart"]        chart-template-weight-organisation-line})
  

(defn ele [wr-ds selected-years selected-orgs selected-streams selected-focuson selected-groupby selected-charttype]
  (let [chart-template (chart-templates [selected-focuson selected-groupby selected-charttype])
        chart-spec (assoc-in chart-template [:data :values] (tmp/filter-ds wr-ds selected-years selected-orgs selected-streams))]
    [oz/vega-lite chart-spec util/vega-embed-opts]))


(defn root []
  [ele
   @state/unauthn-wr-ds-cursor
   @state/unauthn-selected-years-cursor
   @state/unauthn-selected-orgs-cursor
   @state/unauthn-selected-streams-cursor
   @state/unauthn-selected-focuson-cursor
   @state/unauthn-selected-groupby-cursor
   @state/unauthn-selected-charttype-cursor])