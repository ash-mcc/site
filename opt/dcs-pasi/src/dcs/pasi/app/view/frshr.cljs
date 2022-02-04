(ns dcs.pasi.app.view.frshr
  (:require [reagent.core :as r]
            [dcs.pasi.app.util :as util]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.datagrid :as datagrid]))


(defn root []
  (r/after-render (util/scroll-fn))
  (reset! state/participant-cursor :frshr)
  
  [:div

   [:section.hero.is-small.is-warning
    [:div.hero-body 
     [:div.container.is-max-desktop
      [:div.notification.is-warning.p-0
       [:div.columns.is-flex.is-vcentered
        [:div.column.is-2
         [:figure.image.is-2by1
          [:img {:src "img/fairshare.png"
                 :alt "The Fair Share image"}]]]
        [:div.column
         [:div.content
          [:h1.title.is-5 "The Fair Share"]
          [:h2.subtitle.is-6.has-text-black "A mock-up of a webapp which The Fair Share might use to access PASI"]]]]]]]]

   [:div.container.is-fullhd.mt-2.mb-6
    [datagrid/root @state/participant-cursor 200]]
   
   [:div.container.is-fullhd
    [:div.columns
     [:div.column.is-5
      [:figcaption [:span "Donations"]]
      [:figure.image.is-2by1
       [:img {:src "img/frshr-donations.png"
              :alt "graph for the grid data - TODO"}]]]
     [:div.column.is-4
      [:figcaption [:span "Carbon saving in terms of running a car for a year"]]
      [:figure.image.is-2by3
       [:img {:src "img/frshr-cars.png"
              :alt "graph for the grid data - TODO"}]]]]]])



