(ns dcs.pasi.app.view.identified-mop
  (:require [reagent.core :as r]
            [dcs.pasi.app.util :as util]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.datagrid :as datagrid]))


(defn root []
  (r/after-render (util/scroll-fn))
  (reset! state/participant-cursor :anon)
  
  [:div

   [:section.hero.is-small.has-background-success
    [:div.hero-body 
     [:div.container.is-max-desktop
      [:div.notification.has-background-success.p-0
       [:div.columns.is-flex.is-vcentered
        [:div.column.is-1
         [:span.icon.fa-3x.mt-3
           [:i.fas.fa-bullhorn]]]
        [:div.column
         [:div.content
          [:h1.title.is-5 "Identified member of the public access"]
          [:h2.subtitle.is-6.has-text-white "A mock-up of a webapp which an identified member of the public might use to access PASI"]]]]]]]]

   [:div.container.is-fullhd.mt-2.mb-6
    [datagrid/root @state/participant-cursor 500]]
   
   [:div.container.is-fullhd
    [:div.columns
     [:div.column.is-6
      [:figcaption [:span "Waste reduction instances over space & time"]]
      [:figure.image.is-3x2 
       [:img {:src ;; NYC subway example
              "https://piratefsh.github.io/assets/images/subway/subway-visualizer.gif"
              :alt "map for the grid data - TODO"}]]]
     [:div.column
      [:figcaption [:span "Materials reused/recycled per..."]]
      [:figure.image.is-3by1
       [:img {:src "img/anon-material.png"
              :alt "graph for the grid data - TODO"}]]]]]])



