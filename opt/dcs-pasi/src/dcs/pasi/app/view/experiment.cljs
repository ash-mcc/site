(ns dcs.pasi.app.view.experiment
  (:require [reagent.core :as r]
            [dcs.pasi.app.util :as util]
            [dcs.pasi.app.state :as state]
            [reagent-datatable.table :as table]))





(defn my-page
  []
  (let [headers [{:column-key :product-name
                  :column-name "Name"}
                 {:column-key :id
                  :column-name "ID"}
                 {:column-key :status
                  :column-name "Status"}
                 {:column-key :created-at
                  :column-name "Created at"
                  :render-fn #(str "I'm custom! " %)}]
        data [{:product-name "one"
               :id "1"
               :status "active"
               :created-at "2017-01-01T12:00"}
              {:product-name "two"
               :id "2"
               :status "active"
               :created-at "2017-01-02T12:00"}]]
    [table/table headers data
     ;;This map and all keys in it are optional
     #_{:filters [:status]
      :refresh-action #(rf/dispatch [:fetch-data])
      :loading? @(rf/subscribe [:data-loading?])
      :search-query (:filter (query-params))
      :link-row-fn (fn [row] (str "/view/" (:id row)))}]))


(defn root []
  (r/after-render (util/scroll-fn))

  [:div

   (my-page)])
