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



