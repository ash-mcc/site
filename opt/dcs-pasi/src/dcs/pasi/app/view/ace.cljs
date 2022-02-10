(ns dcs.pasi.app.view.ace
  (:require [reagent.core :as r]
            [dcs.pasi.app.util :as util]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.datagrid :as datagrid]))


(defn root []
  (r/after-render (util/scroll-fn))
  (reset! state/participant-cursor :ace)
  
  [:div

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

   [:div.container.is-fullhd.mt-2.mb-6
    [datagrid/root @state/participant-cursor 200]]
   
   [:div.container.is-fullhd
    [:div.columns
     [:div.column.is-4
      [:figcaption [:span "Counts"]]
      [:figure.image.is-5by3
       [:img {:src "img/ace-count.png"
              :alt "graph for the grid data - TODO"}]]]
     [:div.column.is-4
      [:figcaption [:span "Trends"]]
      [:figure.image.is-5by3
       [:img {:src "img/ace-trend.png"
              :alt "graph for the grid data - TODO"}]]]]]])





