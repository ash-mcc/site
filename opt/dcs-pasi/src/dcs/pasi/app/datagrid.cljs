(ns dcs.pasi.app.datagrid
  (:require
   [cljs.core.async :as async]
   [cljs.spec.alpha :as s]
   [reagent.core :as r]
   [cljs-http.client :as http]
   ["ag-grid-react" :as ag-grid]
   [dcs.pasi.model :as model]))


;; state (and more later)
(def grid-api-component-holder (r/atom nil))


(defn http-call [url ^String graphql response-handler]
  (async/go 
    (let [response (async/<! (http/post 
                              url 
                              {:with-credentials? false
                               :headers           {"Content-type" "application/json"}
                               :json-params       {:query     graphql
                                                   :variables nil}}))]
      (response-handler response))))


(defn response-handler [result-parser params response]
  (let [status (:status response)]
    (js/console.log "Status code" status)
    (when (= 200 status)
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
                (clj->js (count %)))))))))


(def url "http://localhost:2021/pasi/graphql")


(defn query [params type-kw editable-fields url]
  {:pre [(s/valid? keyword? type-kw)
         (s/valid? set? editable-fields)
         (s/valid? string? url)]}
  (let [model (type-kw model/queries)
        graphql  (:graphql model)
        results-parser (:results-parser model)
        field-order    (:field-order model)
        col-defs (->> field-order
                      (remove #(= :id %))
                      (map #(merge {:field (name %)}
                                   (when (= :rowId %) {:filter "agNumberColumnFilter"})
                                   (when (contains? editable-fields %) {:editable true}))))
        response-handler' (partial response-handler results-parser params)]
    (.setColumnDefs @grid-api-component-holder (clj->js col-defs)) ;; hack to set the columnDefs to 'match' the expected data
    (http-call url graphql response-handler')))

;; Can't (in general) rely on resolving a string to a function in running cljs code 
;; so our wiring has to be hard, and at an appropriate time
(def types 
  {:zwsCarbonMetric         {:editable-fields #{:carbonWeighting}}
   :aceFurnitureDescription {:editable-fields #{:itemKg}}
   :aceReusedFurniture      {:editable-fields #{:itemCount}}
   :stcmfSource             {:editable-fields #{}}
   :stcmfDestination        {:editable-fields #{}}
   :stcmfIncomingFood       {:editable-fields #{:batchKg}}
   :stcmfRedistributedFood  {:editable-fields #{:batchKg}}
   :frshrMaterialCategory   {:editable-fields #{}}
   :frshrReusedMaterial     {:editable-fields #{:batchKg}}
   :opsAceToRefData         {:editable-fields #{:fraction}}
   :opsStcmfToRefData       {:editable-fields #{:fraction}}
   :opsFrshrToRefData       {:editable-fields #{:fraction}}
   :opsOrg                  {:editable-fields #{:name :qid}}
   :opsProcess              {:editable-fields #{}}
   :opsWasteReduction       {:editable-fields #{}}})


;; (more) state
(def type-kw-holder (r/atom (first (keys types))))


(defn get-rows [params]
  (let [type-kw @type-kw-holder]
    (query params type-kw (:editable-fields (type-kw types)) url)))


(def grid-options
  {:rowModelType "infinite" ;; define with otherwise :datasource with :getRows won't work
   :datasource   {:getRows get-rows}
   :onGridReady #(reset! grid-api-component-holder (.-api %))})



(defn toggle-is-activate [id]
  (let [myClass (.-classList (.getElementById js/document (name id)))]
    (-> myClass (.toggle "is-active"))))

(defn dropdown [prompt values]
  [:div#region-dropdown.dropdown
   [:div.dropdown-trigger
    [:button.button {:aria-haspopup true
                     :aria-controls :dropdown-menu
                     :on-click      (fn [event]
                                      (.preventDefault event)
                                      (toggle-is-activate :region-dropdown))}
     [:span prompt]
     [:span.icon.is-small
      [:i.fas.fa-angle-down {:aria-hidden true}]]]]
   [:div.dropdown-menu {:id :dropdown-menu :role :menu}
    [:div.dropdown-content
     (sort-by (fn [item]
                (:name (second item)))
              (map (fn [[m-code m-name]]
                     [:a.dropdown-item {:name m-name
                                        :key m-code
                                        :on-click (fn [event]
                                                    (.preventDefault event)
                                                    (toggle-is-activate :region-dropdown)
                                                    (js/console.log (str "Do something with: " m-code ", " m-name))
                                                    (js/console.log (str "before: " @type-kw-holder))
                                                    (reset! type-kw-holder (keyword m-name))
                                                    (js/console.log (str "after: " @type-kw-holder))
                                                    ;; The get-rows defn hasn't changed 
                                                    ;; - reassinging it only to prompt a re-fetch (which will use the new type-kw).
                                                    ;; Probably there is a nicer way to force the re-fetch.
                                                    (.setDatasource @grid-api-component-holder #js{:getRows get-rows}))}
                      m-name])
                   values))]]])


(defn root-div
  "Put me on a page"
  []
  [:div
   [dropdown @type-kw-holder (keep-indexed (fn [ix k] [ix (name k)]) (keys types))]
   [:div.ag-theme-alpine {:style {:height 500
                                  :width  1000
                                  :color  "purple"}}
    [:> ag-grid/AgGridReact
     {:gridOptions grid-options}]]])




      


