(ns dcs.pasi.datagrid
  (:require
   [cljs.core.async :as async]
   [reagent.core :as r]
   [cljs-http.client :as http]
   ["ag-grid-react" :as ag-grid]))


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


(defn response-handler [map-parser params response]
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
             (map map-parser)
             (#(do 
                 %))
             (#(.successCallback
                ^js params
                (clj->js %)
                (clj->js (count %)))))))))


(def url "http://localhost:2021/pasi/graphql")


(defn zwsCarbonMetric [url params]
  (let [graphql "query {
                   zwsCarbonMetric {
                     id
                     wasteStream
                     carbonWeighting
                   } 
                 }"
        map-parser identity
        col-defs [{:field "rowId" :filter "agNumberColumnFilter"}
                  {:field "id" :hide  true}
                  {:field "wasteStream"}
                  {:field "carbonWeighting" :editable true}]
        response-handler' (partial response-handler map-parser params)]
    (.setColumnDefs @grid-api-component-holder (clj->js col-defs)) ;; hack to set the columnDefs to 'match' the expected data
    (http-call url graphql response-handler')))

(defn aceReusedFurniture [url params]
  (let [graphql "query {
                   aceReusedFurniture {
                     id
                     from
                     to
                     description {
                       category
                       subcategory
                     }
                     itemCount
                   }
                 }"
        map-parser (fn [m]
                     (assoc m
                            :category (get-in m [:description :category])
                            :subcategory (get-in m [:description :subcategory])))
        col-defs [{:field "rowId" :filter "agNumberColumnFilter"}
                  {:field "id" :hide  true}
                  {:field "from"}
                  {:field "to"}
                  {:field "category"}
                  {:field "subcategory"}
                  {:field "itemCount" :editable true}]
        response-handler' (partial response-handler map-parser params)]
    (.setColumnDefs @grid-api-component-holder (clj->js col-defs)) ;; hack to set the columnDefs to 'match' the expected data
    (http-call url graphql response-handler')))

(defn opsOrg [url params]
  (let [graphql "query {
                   opsOrg {
                     id
                     abbr
                     name
                     qid
                   }
                 }"
        map-parser identity
        col-defs [{:field "rowId" :filter "agNumberColumnFilter"}
                  {:field "id" :hide  true}
                  {:field "abbr"}
                  {:field "name" :editable true}]
        response-handler' (partial response-handler map-parser params)]
    (.setColumnDefs @grid-api-component-holder (clj->js col-defs)) ;; hack to set the columnDefs to 'match' the expected data
    (http-call url graphql response-handler')))

;; Can't (in general) rely on resolving a string to a function in running cljs code 
;; so our wiring has to be hard, and at an appropriate time
(defn str->fetch-fn [^String s]
  (condp = s
    "zwsCarbonMetric"    zwsCarbonMetric
    "opsOrg"             opsOrg
    "aceReusedFurniture" aceReusedFurniture))
(def opt-list
  [[1 "zwsCarbonMetric"]
   [2 "opsOrg"]
   [3 "aceReusedFurniture"]])


;; (more) state
(def type-indicator-holder (r/atom (second (first opt-list))))



(def get-rows (partial aceReusedFurniture url))


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
                                                    (js/console.log (str "before: " @type-indicator-holder))
                                                    (reset! type-indicator-holder m-name)
                                                    (js/console.log (str "after: " @type-indicator-holder))
                                                    (let [fetch-fn    (str->fetch-fn @type-indicator-holder)
                                                          get-rows-fn (partial fetch-fn url)] ;; hack
                                                      (.setDatasource @grid-api-component-holder #js{:getRows get-rows-fn})) )}
                      m-name])
                   values))]]])


(defn root-div
  "Put me on a page"
  []
  [:div
   [dropdown @type-indicator-holder opt-list]
   [:div.ag-theme-alpine {:style {:height 500
                                  :width  1000
                                  :color  "purple"}}
    [:> ag-grid/AgGridReact
     {:gridOptions grid-options}]]])




      


