(ns dcs.pasi.app.view.zws
  (:require [reagent.core :as r]
            [dcs.pasi.app.util :as util]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.datagrid :as datagrid]))


(defn root []
  (r/after-render (util/scroll-fn))
  (reset! state/participant-cursor :zws)
  
  [:div

   [:section.hero.is-small.is-black
    [:div.hero-body 
     [:div.container.is-max-desktop
      [:div.notification.is-black.p-0
       [:div.columns.is-flex.is-vcentered
        [:div.column.is-1
         [:figure.image.is-64x64
          [:img {:src "img/zerowaste-white-logo.png"
                 :alt "Zero Waste Scotland image"}]]]
        [:div.column
         [:div.content
          [:h1.title.is-5 "Zero Waste Scotland"]
          [:h2.subtitle.is-6.has-text-white "A mock-up of a webapp which Zero Waste Scotland might use to access PASI"]]]]]]]]

    [:div.container.is-fullhd.mt-2.mb-6
     [datagrid/root @state/participant-cursor 800]]])



