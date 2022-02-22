(ns dcs.pasi.app.view.unauthenticated.table
  (:require    [cljs.spec.alpha :as s]
               [clojure.string :as str]
               [reagent.core :as r]
               ["ag-grid-react" :as ag-grid]
               [oz.core :as oz]
               [cljs-time.core :as t]
               [cljs-time.format :as tf]
               [dcs.pasi.app.util :as util]
               [dcs.pasi.app.state :as state]
               [dcs.pasi.model :as model]
               [dcs.pasi.app.query :as query]
               [dcs.pasi.app.mutation :as mutation]
               [dcs.pasi.app.view.unauthenticated.tmp :as tmp]))





(defn grid [ds]
  (let [spec {:defaultColDef {:resizable true}
              :columnDefs (->> model/queries
                               :dcsWasteReduction
                               :field-order
                               (map #(merge {:field (name %)}
                                              ;; hack in some maxWidth settings
                                            ;(when (contains? #{:from :to :process :refProcess :batchKg :itemCount :itemKg :fraction :abbr :qid :source} %) {:maxWidth 100})
                                            ;(when (contains? #{:category :furnitureCategory :materialCategory :carbonWeighting} %) {:maxWidth 130})
                                            ;(when (contains? #{:carbonSavingCo2eKg} %) {:maxWidth 160})
                                            (when (contains? #{:fraction :batchKg :batchTonnes :carbonSavingCo2eKg :carbonWeighting :itemCount} %) {:type "rightAligned"})
                                            (when (contains? #{:fraction :batchKg :batchTonnes :carbonSavingCo2eKg :carbonWeighting} %) {:valueFormatter (fn [^js params] (let [v (.-value params)] (if (number? v) (.toFixed v 2) v)))})
                                            (when (contains? #{:to :enabler} %) {:sortable true})))
                               vec)    
              :immutableData true
              :animateRows   true
              :rowData       ds
              :getRowNodeId  #(get (js->clj %) "id")
              :onGridReady   (fn [e]
                               (let [grid-api (.-api e)
                                     col-api  (.-columnApi e)
                                     ;col-ids  (vec (map #(.-colId %) (.getAllColumns col-api)))
                                     ]
                                 (.sizeColumnsToFit grid-api)
                                 ;(.autoSizeColumns col-api (clj->js col-ids) true) ; no point without data in the grid
                                 (reset! state/unauthn-grid-api-cursor grid-api)))
              }]
    (js/console.log "columnDefs =" (str (:columnDefs spec)))
    [:div.ag-theme-balham {:style {:height "100%"
                                   :width  "100%"
                                   :color  "purple"}}
     [:> ag-grid/AgGridReact
      {:gridOptions spec}]]))


(defn ele [wr-ds selected-years selected-orgs selected-streams]
  [:div {:style {:height 500}}
   [grid (tmp/filter-ds wr-ds selected-years selected-orgs selected-streams)]])


(defn root []
  [ele
   @state/unauthn-wr-ds-cursor
   @state/unauthn-selected-years-cursor
   @state/unauthn-selected-orgs-cursor
   @state/unauthn-selected-streams-cursor])