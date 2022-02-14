(ns dcs.pasi.app.view.experiment
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
               [dcs.pasi.app.mutation :as mutation]))


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

(defn editable [e]
  ;(js/console.log e)
  (let [row-map (js->clj (.-data e) :keywordize-keys true)]
    (str/starts-with? (:id row-map) "new-")))

(def date-format (tf/formatter "yyyy-MM-dd"))

(defn valid-date? [s]
  (tf/parse date-format s))

(defn update-id 
  [current-value-of-atom old-id new-id]
  {:pre [(s/valid? seq? current-value-of-atom)]}
  (let [coll (vec current-value-of-atom)]
    (if-let [n (first (keep-indexed #(when (= (:id %2) old-id) %1) coll))]
      (-> coll
          (#(do (js/console.log "n:" n) %))
          (#(do (js/console.log "nth" (str (get coll n))) %))
          (assoc-in [n :id] new-id)
          (assoc-in [n :status] "saved to server")
          seq)
      coll)))

(defn add-new [current-value-of-atom _not-used]
  (conj current-value-of-atom
        {:id (str "new-" (->> current-value-of-atom
                              (map :id)
                              (filter #(str/starts-with? % "new-"))
                              (map #(js/parseInt (subs % 4)))
                              sort 
                              last
                              inc))
         :from (tf/unparse date-format (t/today))
         :to (tf/unparse date-format (t/plus (t/today) (t/days 1)))
         :itemCount 0
         :status "new - not saved to server"}))

(defn upsert [current-value-of-atom row-map]
  {:pre [(s/valid? seq? current-value-of-atom)]}
  (let [coll (vec current-value-of-atom)
        n (first (keep-indexed #(when (= (:id %2) (:id row-map)) %1) coll))]
      (-> coll
          (assoc n row-map)
          seq)))

(defn onCellValueChanged [e]
  (js/console.log e)
  (let [row-map   (js->clj (.-data e) :keywordize-keys true)
        old-value (.-oldValue e)
        new-value (.-newValue e)
        col       (.-field (.-colDef e))
        row-map   (if (and (= col "from")
                           (not (t/before? (tf/parse date-format (:from row-map)) (tf/parse date-format (:to row-map)))))
                    (assoc row-map :to nil)
                    row-map)
        row-map   (if (and (= col "to")
                           (not (t/before? (tf/parse date-format (:from row-map)) (tf/parse date-format (:to row-map)))))
                    (assoc row-map :from nil)
                    row-map)
        row-map   (if (and (= col "category")
                           (not= new-value old-value))
                    (assoc row-map :subcategory nil)
                    row-map)
        row-map (if (contains? #{"loaded from server" "saved to server"} (:status row-map)) ;; TODO improve by comparing with what was fetched?
                  (assoc row-map :status "changed - not saved to server")
                  row-map)]
     ;; if all needed values are present then add it to the backing data 
     ;; ...actually no - suspend this validity check here - perhaps do it on upload
    (when true #_(and (valid-date? (:to row-map))
               (valid-date? (:from row-map))
               (some? (:category row-map))
               (some? (:subcategory row-map))
               (int? (js/parseInt (:itemCount row-map))))
      (swap! state/x-ds-cursor upsert row-map))
    ))

(def category->subcategories
  {"Furniture"      ["Chair, Kitchen, Dining or Wooden"
                     "Chest-of-Drawers, Tallboy"
                     "Small Desk, Computer Table"]
   "Soft Furniture" ["Mattress, single"
                     "Chaise Longue "]})

(defn subcategories [e]
  (js/console.log e)
  (let [row-map   (js->clj (.-data e) :keywordize-keys true)]
    (clj->js {:values (get category->subcategories (:category row-map))})))


(defn grid [ds]
  (let [spec {:defaultColDef {:resizable true}
              :components {:datePicker (js/getDatePicker)}
              :columnDefs    [{:field "id"}
                              {:field              "from"
                               :editable           editable
                               :onCellValueChanged onCellValueChanged
                               :cellEditor         "datePicker"
                               :cellEditorPopup    true}
                              {:field              "to"
                               :editable           editable
                               :onCellValueChanged onCellValueChanged
                               :cellEditor         "datePicker"
                               :cellEditorPopup    true}
                              {:field              "category"
                               :editable           editable
                               :onCellValueChanged onCellValueChanged
                               :cellEditor         "agPopupSelectCellEditor" ;"agRichSelectCellEditor" but need enterprise edition 
                               :cellEditorPopup    true
                               :cellEditorParams   {:values (keys category->subcategories)}}
                              {:field              "subcategory"
                               :editable           editable
                               :onCellValueChanged onCellValueChanged
                               :cellEditor         "agPopupSelectCellEditor" ;"agRichSelectCellEditor" but need enterprise edition 
                               :cellEditorPopup    true
                               :cellEditorParams   subcategories}
                              {:field              "itemCount"
                               :type               "rightAligned"
                               :editable           true
                               :onCellValueChanged onCellValueChanged}
                              {:field              "status"}]
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



(defn load-from-server []
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
                                                          ;; parse each possibly nested map to surface the wanted data in the top map
                                                          results-parser
                                                          (->> 
                                                           ;; add a status column
                                                           (map #(assoc % :status "loaded from server"))
                                                           (sort-by :to)
                                                           reverse))]
                                             (reset! state/x-ds-cursor coll))))]
                  (query/http-call url graphql response-handler)))} 
   "Load from server"])

(defn new-row []
  [:button.button
   {:on-click (fn [_e]
                (swap! state/x-ds-cursor add-new {:placeholder :not-used}))}
   "New row"])

(defn save-to-server []
  [:button.button
   {:on-click (fn [_e]
                (let [;;TODO flag up and don't server-to-server, any would-be duplicates
                      changed-rows (remove #(contains? #{"loaded from server" "saved to server"} (:status %)) @state/x-ds-cursor)]
                  (js/console.log (count changed-rows) "changed rows")
                  (doseq [m changed-rows]
                    (js/console.log "processing changed row" (str m))
                  (let [url              "http://localhost:2021/pasi/graphql"
                      graphql          (str "mutation {
             upsertAceReusedFurniture(
               category: \"" (:category m) "\",
               subcategory: \"" (:subcategory m) "\",
               from: \"" (:from m) "\",
               to: \"" (:to m) "\",
               itemCount: " (:itemCount m) "
             ) { id }
           }")
                      response-handler (fn [response] 
                                         (let [status (:status response)]
                                           (when (not= 200 status)
                                             (throw (ex-info (str "Error code: " status) {})))
                                           (let [id (-> response
                                                        :body
                                                          ;; assume that it was an application/json response 
                                                          ;; which will have prompted cljs-http to have 
                                                          ;; converted the JSON data in the body, to Clojure data
                                                        :data
                                                        (#(do (js/console.log ":data" (str %)) %))
                                                        ;; assume a map with a single entry: get the value of that entry
                                                        vals
first
                                                        :id)]
                                             (swap! state/x-ds-cursor update-id (:id m) id))))]
                  (mutation/http-call url graphql response-handler)))))}
   "Save to server"])

(defn root []
  (r/after-render (util/scroll-fn))
  [:div
   
   [:div.container.is-fullhd.mt-2
    [load-from-server]
    [new-row]
    [save-to-server]]
   
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
   


   ])




