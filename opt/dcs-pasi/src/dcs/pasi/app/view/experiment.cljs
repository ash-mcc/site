(ns dcs.pasi.app.view.experiment
  (:require    [cljs.spec.alpha :as s]
               [reagent.core :as r]
               ["ag-grid-react" :as ag-grid]
               [dcs.pasi.app.util :as util]
               [dcs.pasi.app.state :as state]
               [dcs.pasi.model :as model]
               [dcs.pasi.app.query :as query]))


(defn grid [ds]
  (let [spec {:defaultColDef {:resizable true}
              :columnDefs    [{:field "id"}
                              {:field "from"}
                              {:field "to"}
                              {:field "category"}
                              {:field "subcategory"}
                              {:field "itemCount"}]
              :immutableData true
              :animateRows   true
              :rowData       ds
              :getRowNodeId  #(get (js->clj %) "id")
              :onGridReady   #(let [grid-api-component (.-api %)]
                                (.sizeColumnsToFit grid-api-component)
                                (reset! state/x-grid-api-component-cursor grid-api-component))
              }]
    [:div.ag-theme-balham {:style {:height "100%"
                                   :width  "100%"
                                   :color  "purple"}}
     [:> ag-grid/AgGridReact
      {:gridOptions spec}]]))

(defn push-to-test []
  [:button.button 
   {:on-click (fn [_e]
                #_(let [new-id   (inc (or (apply max (map :id @state/x-ds-cursor)) 0))
                      new-name (apply str (take 6 (repeatedly #(char (+ (rand 26) 65)))))]
                  (swap! state/x-ds-cursor conj {:id   new-id
                                                 :name new-name}))
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
                                                          results-parser)]
                                             (reset! state/x-ds-cursor coll))))]
                  (query/http-call url graphql response-handler)))} 
   "Push-to-test"])

(defn root []
  (r/after-render (util/scroll-fn))
  [:div {:style {:height 500}}
   [grid @state/x-ds-cursor]
   [push-to-test]])
