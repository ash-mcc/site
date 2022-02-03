(ns dcs.pasi.app.view.dcs
  (:require [reagent.core :as r]
            [dcs.pasi.app.util :as util]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.datagrid :as datagrid]))


(defn root []
  (r/after-render (util/scroll-fn))
  (reset! state/participant-cursor :dcs)
  
  [:div

   [:div.container.is-max-desktop.pt-4
    [:div.notification.is-danger
     [:div.columns.is-flex.is-vcentered
      [:div.column.is-2
       [:figure.image.is-64x64
        [:img {:src "img/dcs-circle.png"
               :alt "Data Commons Scotland image"}]]]
      [:div.column
       [:div.content
        [:h1.title.is-5 "Data Commons Scotland"]
        [:h2.subtitle.is-6.has-text-black "A mock-up of a webapp which Data Commons Scotland might use to access PASI"]]]]]]

   [:div.columns
    [:div.column.is-8.ml-2
     [datagrid/root @state/participant-cursor]]
    [:div.column
     [:figure.image.is-2by1.m-1
      [:img.pt-6 {:src "img/no-such-image.png"
                  :alt "graph for the grid data - TODO"}]]
     [:figure.image.is-2by1.m-1
      [:img {:src "img/no-such-image.png"
             :alt "map for the grid data - TODO"}]]]]])



