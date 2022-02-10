(ns dcs.pasi.app.view.experiment
  (:require    [cljs.spec.alpha :as s]
               [reagent.core :as r]
               ["ag-grid-react" :as ag-grid]
               [oz.core :as oz]
               [dcs.pasi.app.util :as util]
               [dcs.pasi.app.state :as state]
               [dcs.pasi.model :as model]
               [dcs.pasi.app.query :as query]))


(defn counts-per-month-spec
  [data]
  {:schema    "https://vega.github.io/schema/vega/v5.json"
   ;:width      500
   ;:height     500
   ;:background "#f2dfce"
   :title     "counts per quarter"
   :data      {:values data}
   :transform [{:timeUnit "yearquarter"
                :field    "to"
                :as       "quarter"}
               {:aggregate [{:op    "sum" ;; TODO calc this properly
                             :field "itemCount"
                             :as    "itemCount"}]
                :groupby   ["quarter"]}]
   :layer     [{:mark     {:type                 "bar"
                           :cornerRadiusTopLeft  3
                           :cornerRadiusTopRight 3}
                :encoding {:x       {:title "year quarter"
                                     :field "quarter"
                                     :type  "temporal"
                                     :axis  {:labelExpr  "timeFormat(datum.value, '%q') == '1' ? timeFormat(datum.value, 'Q%q %Y') : timeFormat(datum.value, 'Q%q')"
                                             :labelAngle 90
                                             :tickCount  {:interval "month"
                                                          :step     3
                                                          :start    0}}
                                     :scale {:domain ["2016-01-01T00:00:00" {:expr "now()"}]}}
                           :y       {:title "item count"
                                     :field "itemCount"
                                     :type  "quantitative"
                                     :scale {:domain [0 200]}}
                           :tooltip [{:title  "year quarter"
                                      :field  "quarter"
                                      :type   "temporal"
                                      :format "Q%q %Y"}
                                     {:title  "item count"
                                      :field  "itemCount"
                                      :type   "quantitative"
                                      :format ".0f"}]}}]
   :config    {:axisX {:grid false}}})


(defn grid [ds]
  (let [spec {:defaultColDef {:resizable true}
              :columnDefs    [;{:field "id"}
                              {:field "from"}
                              {:field "to"}
                              {:field "category"}
                              {:field "subcategory"}
                              {:field "itemCount" :type "rightAligned"}]
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
                                 (reset! state/x-grid-api-component-cursor grid-api)))
              }]
    [:div.ag-theme-balham {:style {:height "100%"
                                   :width  "100%"
                                   :color  "purple"}}
     [:> ag-grid/AgGridReact
      {:gridOptions spec}]]))


(def mock-rows [
                {:id          "pasi:ent/AceReusedFurniture/2016-12-01"
                 :from        "2018-05-01"
                 :to          "2016-12-01"
                 :category    "Furniture"
                 :subcategory "Chair, Kitchen, Dining or Wooden"
                 :itemCount   43}
                {:id          "pasi:ent/AceReusedFurniture/2017-09-01"
                 :from        "2018-08-01"
                 :to          "2019-09-01"
                 :category    "Soft Furniture"
                 :subcategory "Mattress, single"
                 :itemCount   4}
                {:id          "pasi:ent/AceReusedFurniture/2018-05-01"
                 :from        "2017-04-01"
                 :to          "2018-05-01"
                 :category    "Soft Furniture"
                 :subcategory "Mattress, single"
                 :itemCount   28}
                {:id          "pasi:ent/AceReusedFurniture/2019-11-01"
                 :from        "2017-10-01"
                 :to          "2019-11-01"
                 :category    "Furniture"
                 :subcategory "Chair, Kitchen, Dining or Wooden"
                 :itemCount   41 }])

(defn add-mock-row [coll]
  (conj coll (get mock-rows (rand-int 4))))


(defn push-to-test []
  [:button.button 
   {:on-click (fn [_e]
                (let [url "http://localhost:2021/pasi/graphql"
                      model (:aceReusedFurniture model/queries)
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
                                                          results-parser
                                                          add-mock-row)]
                                             (reset! state/x-ds-cursor coll))))]
                  (query/http-call url graphql response-handler)))} 
   "Push-to-test"])

(defn root []
  (r/after-render (util/scroll-fn))
  [:div
   
   [:div.container.is-fullhd.mt-2.mb-6
    [:div {:style {:height 250}}
     [grid @state/x-ds-cursor]]]
   
   [:div.container.is-fullhd
    [:div.columns
     [:div.column.is-4
      (let [raw @state/x-ds-cursor
            counts raw]
        [oz/vega-lite (counts-per-month-spec counts) util/vega-embed-opts])]
     [:div.column.is-4
      [:figcaption [:span "Trends"]]
      [:figure.image.is-5by3
       [:img {:src "img/ace-trend.png"
              :alt "graph for the grid data - TODO"}]]]]]

   [push-to-test]])
