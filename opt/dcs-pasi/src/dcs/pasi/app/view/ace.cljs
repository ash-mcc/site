(ns dcs.pasi.app.view.ace
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

(defn load-from-server-AceFurnitureDescription []
  (let [model (:aceFurnitureDescription model/queries)
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
                                             (sort-by (juxt :category :subcategory))))]
                               (reset! state/ace-fd-ds-cursor coll))))]
    (query/http-call query/graphql-url graphql response-handler)))

(defn grid-AceFurnitureDescription [ds]
  (let [spec {:defaultColDef {:resizable true}
              :columnDefs (->> model/queries
                               :aceFurnitureDescription
                               :field-order
                               (map #(merge {:field (name %)}
                                              ;; hack in some maxWidth settings
                                            ;(when (contains? #{:from :to :process :refProcess :batchKg :itemCount :itemKg :fraction :abbr :qid :source} %) {:maxWidth 100})
                                            ;(when (contains? #{:category :furnitureCategory :materialCategory :carbonWeighting} %) {:maxWidth 130})
                                            ;(when (contains? #{:carbonSavingCo2eKg} %) {:maxWidth 160})
                                            (when (contains? #{:fraction :batchKg :batchTonnes :carbonSavingCo2eKg :carbonWeighting :itemCount} %) {:type "rightAligned"})
                                            (when (contains? #{:fraction :batchKg :batchTonnes :carbonSavingCo2eKg :carbonWeighting} %) {:valueFormatter (fn [^js params] (let [v (.-value params)] (if (number? v) (.toFixed v 2) v)))})
                                            (when (contains? #{:to :enabler :batchKg :carbonSavingCo2eKg} %) {:sortable true})))
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
                                 (reset! state/ace-fd-grid-api-cursor grid-api)))}]
    (js/console.log "columnDefs =" (str (:columnDefs spec)))
    [:div.ag-theme-balham {:style {:height "100%"
                                   :width  "100%"
                                   :color  "purple"}}
     [:> ag-grid/AgGridReact
      {:gridOptions spec}]]))


(defn counts-per-month-spec
  [data]
  {:schema    "https://vega.github.io/schema/vega/v5.json"
   :width      900
   :height     350
   ;:background "#f2dfce"
   :title     "Counts per quarter"
   :data      {:values data}
   :transform [{:timeUnit "yearquarter"
                :field    "to"
                :as       "quarter"}
               {:aggregate [{:op    "sum" ;; TODO calc this properly
                             :field "itemCount"
                             :as    "itemCount"}]
                :groupby   ["quarter" "category"]}]
   :layer     [{:mark     {:type                 "bar"
                           :cornerRadiusTopLeft  3
                           :cornerRadiusTopRight 3}
                :encoding {:x       {:title "Year quarter"
                                     :field "quarter"
                                     :type  "temporal"
                                     :axis  {:labelExpr  "timeFormat(datum.value, '%q') == '1' ? timeFormat(datum.value, 'Q%q %Y') : timeFormat(datum.value, 'Q%q')"
                                             :labelAngle 90
                                             #_:tickCount  #_{:interval "month"
                                                          :step     3
                                                          :start    0}}
                                     :timeUnit "yearquarter"
                                     :scale {:domain ["2016-01-01T00:00:00" {:expr "now()"}]}}
                           :y       {:title "Item count"
                                     :field "itemCount"
                                     :type  "quantitative"
                                     ;:scale {:domain [0 200]}
                                     }
                           :color   {:title "Category"
                                     :field "category"
                                     :type "nominal"
                                     :scale :PLACEHOLDER
                                     :legend nil #_{:columns 2}}
                           :tooltip [{:title  "Year quarter"
                                      :field  "quarter"
                                      :type   "temporal"
                                      :format "Q%q %Y"}
                                     {:title  "Item count"
                                      :field  "itemCount"
                                      :type   "quantitative"
                                      :format ".0f"}
                                     {:title "Category"
                                      :field "category"
                                      :type "nominal"}]}}]
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
      (swap! state/ace-rf-ds-cursor upsert row-map))
    ))

(defn dropdown-categories []
  (->> @state/ace-fd-ds-cursor
       (map :category)
       distinct
       sort
       (#(clj->js {:values %}))))

(defn dropdown-subcategories [e]
  (let [row-map   (js->clj (.-data e) :keywordize-keys true)
        category (:category row-map)]
    (->> @state/ace-fd-ds-cursor
         (filter #(= category (:category %)))
         (map :subcategory)
         distinct
         sort
         (#(clj->js {:values %})))))


(defn grid-AceReusedFurniture [ds]
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
                               :cellEditorParams   dropdown-categories}
                              {:field              "subcategory"
                               :editable           editable
                               :onCellValueChanged onCellValueChanged
                               :cellEditor         "agPopupSelectCellEditor" ;"agRichSelectCellEditor" but need enterprise edition 
                               :cellEditorPopup    true
                               :cellEditorParams   dropdown-subcategories}
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
                                 (reset! state/ace-rf-grid-api-cursor grid-api)))
              }]
    [:div.ag-theme-balham {:style {:height "100%"
                                   :width  "100%"
                                   :color  "purple"}}
     [:> ag-grid/AgGridReact
      {:gridOptions spec}]]))

(defn load-from-server-AceReusedFurniture []
  (let [model (:aceReusedFurniture model/queries)
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
                               (reset! state/ace-rf-ds-cursor coll))))]
    (query/http-call query/graphql-url graphql response-handler)))

(defn load-from-server-btn []
  [:button.button 
   {:on-click (fn [_e] (load-from-server-AceReusedFurniture))} 
   "Load from server"])

(defn new-row-btn []
  [:button.button
   {:on-click (fn [_e]
                (swap! state/ace-rf-ds-cursor add-new {:placeholder :not-used}))}
   "New row"])

(defn save-to-server-btn []
  [:button.button
   {:on-click (fn [_e]
                (let [;;TODO flag up and don't server-to-server, any would-be duplicates
                      changed-rows (remove #(contains? #{"loaded from server" "saved to server"} (:status %)) @state/ace-rf-ds-cursor)]
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
                                             (swap! state/ace-rf-ds-cursor update-id (:id m) id))))]
                  (mutation/http-call url graphql response-handler)))))}
   "Save to server"])


(defn ele [fd-ds rf-ds]
  (r/after-render (util/scroll-fn))
  (reset! state/participant-cursor :ace)
  
  [:<>

   [:section.hero.is-small.is-info
    [:div.hero-body
     [:div.container.is-max-desktop
      [:div.notification.is-info.p-0
       [:div.columns.is-flex.is-vcentered
        [:div.column.is-2
         [:figure.image.is-2by1
          [:img {:src "img/ace-furniture.png"
                 :alt "Alloa Community Enterprises image"}]]]
        [:div.column
         [:div.content
          [:h1.title.is-5 "Alloa Community Enterprises"]
          [:h2.subtitle.is-6.has-text-black "A mock-up of a webapp which Alloa Community Enterprises might use to access PASI"]]]]]]]]



   [:div.tabs
    [:ul
     [:li.tab-aceTabs {:on-click (fn [e] (util/open-tab e "aceTabs" "A"))} [:a "Furniture categories"]]
     [:li.tab-aceTabs.is-active {:on-click (fn [e] (util/open-tab e "aceTabs" "B"))} [:a "Batches of resold/reused furniture"]]]]


   ;; ----------- AceFurnitureDescription ----------------
   
   [:div#A-aceTabs.tab-content-aceTabs {:style {:display "none"}}

    [:div.container.is-fullhd.mt-2.mb-6
     [:div {:style {:height 350}}
      [grid-AceFurnitureDescription fd-ds]]]]



   ;; ----------- AceReusedFurniture ----------------
   
   [:div#B-aceTabs.tab-content-aceTabs 

    [:div.container.is-fullhd.mt-2
     [load-from-server-btn]
     [new-row-btn]
     [save-to-server-btn]]

    [:div.container.is-fullhd.mt-2.mb-6
     [:div {:style {:height 400}}
      [grid-AceReusedFurniture rf-ds]]]

    [:div.container.is-fullhd.has-text-centered
     (let [raw    rf-ds
             counts raw]
         [oz/vega-lite (counts-per-month-spec counts) util/vega-embed-opts])]]])


(defn root []
  [ele
   @state/ace-fd-ds-cursor
   @state/ace-rf-ds-cursor])


