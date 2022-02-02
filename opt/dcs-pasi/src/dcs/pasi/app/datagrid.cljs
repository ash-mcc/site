(ns dcs.pasi.app.datagrid
  (:require
   [reagent.core :as r]
   ["ag-grid-react" :as ag-grid]
   [dcs.pasi.app.query :as query]
   [dcs.pasi.app.dropdown :as dropdown]))


;; state (and more later)
(def grid-api-component-holder (r/atom nil))


(def url "http://localhost:2021/pasi/graphql")


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
    (query/query @grid-api-component-holder params type-kw (:editable-fields (type-kw types)) url)))


(def grid-options
  {:rowModelType "infinite" ;; define with otherwise :datasource with :getRows won't work
   :datasource   {:getRows get-rows}
   :onGridReady #(reset! grid-api-component-holder (.-api %))})



(defn on-click-handler 
  [dropdown-id event]
  (.preventDefault event)
  (dropdown/toggle-is-activate dropdown-id)
  (let [s (-> event .-target .-name)]
    (js/console.log "s:" s)
    (reset! type-kw-holder (keyword s))
    ;; The get-rows defn hasn't changed 
    ;; - reassinging it only to prompt a re-fetch (which will use the new type-kw).
    ;; Probably there is a nicer way to force the re-fetch.
    (.setDatasource @grid-api-component-holder #js{:getRows get-rows})))


(defn root-div
  "Put me on a page"
  []
  [:div
   (let [dropdown-id "chooser"
         prompt @type-kw-holder
         values (keep-indexed (fn [ix k] 
                                [ix (name k)]) 
                              (keys types))
         on-click-handler' (partial on-click-handler dropdown-id)]
     [dropdown/dropdown dropdown-id prompt values on-click-handler'])
   [:div.ag-theme-alpine {:style {:height 500
                                  :width  1000
                                  :color  "purple"}}
    [:> ag-grid/AgGridReact
     {:gridOptions grid-options}]]])




  