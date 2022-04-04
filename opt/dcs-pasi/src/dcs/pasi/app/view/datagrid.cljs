(ns dcs.pasi.app.view.datagrid
  (:require
   [clojure.string :as str]
   [cljs.spec.alpha :as s]
   [reagent.core :as r]
   ["ag-grid-react" :as ag-grid]
   [dcs.pasi.app.state :as state]
   [dcs.pasi.app.query :as query]
   [dcs.pasi.app.view.dropdown :as dropdown]))

(defn lookup-grid-api-component-cursor []
  (condp = @state/participant-cursor
    :ace state/ace-grid-api-component-cursor
    :anon state/anon-grid-api-component-cursor
    :dcs state/dcs-grid-api-component-cursor
    :frshr state/frshr-grid-api-component-cursor
    :stcmf state/stcmf-grid-api-component-cursor
    :zws state/zws-grid-api-component-cursor))

(defn lookup-type-kw-cursor []
  (condp = @state/participant-cursor
    :ace state/ace-type-kw-cursor
    :anon state/anon-type-kw-cursor
    :dcs state/dcs-type-kw-cursor
    :frshr state/frshr-type-kw-cursor
    :stcmf state/stcmf-type-kw-cursor
    :zws state/zws-type-kw-cursor))


;; Can't (in general) rely on resolving a string to a function in running cljs code 
;; so our wiring has to be hard, and at an appropriate time
(def types 
  {:zwsCarbonMetric         {:editable-fields #{:carbonWeighting}}
   :aceFurnitureDescription {:editable-fields #{:itemKg}}
   ;:aceReusedFurniture      {:editable-fields #{:itemCount}}
   :stcmfSource             {:editable-fields #{}}
   :stcmfDestination        {:editable-fields #{}}
   :stcmfIncomingFood       {:editable-fields #{:batchKg}}
   :stcmfRedistributedFood  {:editable-fields #{:batchKg}}
   :frshrMaterialCategory   {:editable-fields #{}}
   :frshrReusedMaterial     {:editable-fields #{:batchKg}}
   :dcsAceToRefData         {:editable-fields #{:fraction}}
   :dcsStcmfToRefData       {:editable-fields #{:fraction}}
   :dcsFrshrToRefData       {:editable-fields #{:fraction}}
   :dcsStcilToRefData       {:editable-fields #{:fraction}}
   :dcsOrg                  {:editable-fields #{:name :qid}}
   :dcsProcess              {:editable-fields #{}}
   :dcsWasteReduction       {:editable-fields #{}}})

(defn filter-types [types_ participant]
   {:pre [(s/valid? map? types)
          (s/valid? keyword? participant)]
    :post [(s/valid? map? %)]}
  (let [participant-name (name participant)]
    (if (= :anon participant)
      {:zwsCarbonMetric         {:editable-fields #{}}
       :dcsWasteReduction       {:editable-fields #{}}}
      (->> types_
         (filter (fn [[k _v]] (str/starts-with? (name k) participant-name)))
         (into {})))))


(def labels
  {:zwsCarbonMetric         "The carbon metric"
   :aceFurnitureDescription "Furniture categories"
   ;:aceReusedFurniture      "Batches of resold/reused furniture"
   :stcmfSource             "Food sources"
   :stcmfDestination        "Food destinations"
   :stcmfIncomingFood       "Batches of incoming food"
   :stcmfRedistributedFood  "Batches of redistributed food"
   :frshrMaterialCategory   "Item categories"
   :frshrReusedMaterial     "Batches of resold/reused items"
   :dcsAceToRefData         "Alloa Community Enterprise metrics -> reference metrics"
   :dcsStcmfToRefData       "Stirling Community Food metrics -> reference metrics"
   :dcsFrshrToRefData       "The Fair Share metrics -> reference metrics"
   :dcsStcilToRefData       "Stirling council metrics -> reference metrics"
   :dcsOrg                  "Organisations"
   :dcsProcess              "Processes which reduce waste"
   :dcsWasteReduction       "Calculated instances of waste reduction"})


(def url (str "http://" js/window.location.hostname ":2021/pasi/graphql"))


(defn get-rows [params]
  (let [type-kw @(lookup-type-kw-cursor)]
    (query/query @(lookup-grid-api-component-cursor) 
                 params 
                 type-kw 
                 (:editable-fields (type-kw types)) 
                 url)))


(defn on-click-handler-template
  "controls the grid's datasource"
  [dropdown-id event]
  (.preventDefault event)
  (dropdown/toggle-is-activate dropdown-id)
  (let [s (-> event .-target .-id)]
    ;(js/console.log event)
    (js/console.log "s:" s)
    (reset! (lookup-type-kw-cursor) (keyword s))
    ;; The get-rows defn hasn't changed 
    ;; - reassinging it only to prompt a re-fetch (which will use the new type-kw).
    ;; Probably there is a nicer way to force the re-fetch.
    (.setDatasource @(lookup-grid-api-component-cursor) #js{:getRows get-rows})))

(defn type-chooser []
  (let [participant      @state/participant-cursor
        dropdown-id      (str "chooser-for-" (name participant))
        type-kw          @(lookup-type-kw-cursor)
        prompt           (type-kw labels)
        values           (let [ks (keys (filter-types types participant))]
                           (map (fn [k] [(name k) (k labels)]) ks))
        on-click-handler (partial on-click-handler-template dropdown-id)]
    [dropdown/dropdown dropdown-id prompt values on-click-handler]))

(defn grid []
  (let [participant @state/participant-cursor
        grid-options {:defaultColDef {:resizable true}
                      :rowModelType "infinite" ;; define with otherwise :datasource with :getRows won't work
                      :datasource   {:getRows get-rows}
                      :onGridReady  #(reset! (lookup-grid-api-component-cursor) (.-api %))}]
    [:div.ag-theme-balham {:style {:height "100%"
                                   :width  "100%"
                                   :color  "purple"}}
     [:> ag-grid/AgGridReact
      {:gridOptions grid-options}]]))


(defn root [participant height]
  (js/console.log "datagrid root participant:" participant)
  [:div {:style {:height height}}
   [type-chooser]
   [grid]
   ])




  