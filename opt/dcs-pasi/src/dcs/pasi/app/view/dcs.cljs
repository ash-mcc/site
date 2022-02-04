(ns dcs.pasi.app.view.dcs
  (:require [reagent.core :as r]
            [dcs.pasi.app.util :as util]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.datagrid :as datagrid]))


(defn root []
  (r/after-render (util/scroll-fn))
  (reset! state/participant-cursor :dcs)
  
  [:div

   [:section.hero.is-small.is-danger
    [:div.hero-body 
     [:div.container.is-max-desktop
      [:div.notification.is-danger.p-0
       [:div.columns.is-flex.is-vcentered
        [:div.column.is-1
         [:figure.image.is-64x64
          [:img {:src "img/dcs-circle.png"
                 :alt "Data Commons Scotland image"}]]]
        [:div.column
         [:div.content
          [:h1.title.is-5 "Data Commons Scotland"]
          [:h2.subtitle.is-6.has-text-black "A mock-up of a webapp which Data Commons Scotland might use to access PASI"]]]]]]]]

   [:div.container.is-fullhd.mt-2.mb-6
    [datagrid/root @state/participant-cursor 500]]
   
   [:div.container.is-fullhd
    [:div.columns
     [:div.column.is-6 
      [:figcaption [:span "Reuse/recycling rates"]]
      [:figure.image.is-3by1 
       [:img {:src "img/dcs-upwards.png"
              :alt "graph for the grid data - TODO"}]]]
     [:div.column
      [:figcaption [:span "Waste reduction instances over space & time"]]
      [:figure.image.is-3x2 
       [:img {:src 
              ;; NYC subway example
              "https://piratefsh.github.io/assets/images/subway/subway-visualizer.gif"
              :alt "map for the grid data - TODO"}]]]]]])



