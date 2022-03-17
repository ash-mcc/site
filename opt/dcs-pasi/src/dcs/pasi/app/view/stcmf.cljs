(ns dcs.pasi.app.view.stcmf
  (:require [reagent.core :as r]
            [dcs.pasi.app.util :as util]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.datagrid :as datagrid]))


(defn root []
  (r/after-render (util/scroll-fn))
  (reset! state/participant-cursor :stcmf)

  [:div
   
   [:section.hero.is-small.is-primary
    [:div.hero-body  
     [:div.container.is-max-desktop
      [:div.notification.is-primary.p-0
       [:div.columns.is-flex.is-vcentered
        [:div.column.is-2
         [:figure.image.is-2x1
          [:img {:src "img/stirling-community-food.png"
                 :alt "Stirling Community Food image"}]]]
        [:div.column
         [:div.content
          [:h1.title.is-5 "Stirling Community Food"]
          [:h2.subtitle.is-6.has-text-black "A mock-up of a webapp which Stirling Community Food might use to access PASI"]]]]]]]]
   
   [:div.container.is-fullhd.mt-2.mb-6
    [datagrid/root @state/participant-cursor 700]]
   
   #_[:div.container.is-fullhd
    [:div.columns
     [:div.column.is-4
      [:figcaption [:span "Material flow"]]
      [:figure.image.is-2by1
       [:img {:src "img/stcmf-flow.png"
                   :alt "graph for the grid data - TODO"}]]]
     [:div.column.is-4
      [:figcaption [:span "Incoming food"]]
      [:figure.image.is-2by1
       [:img {:src "img/stcmf-incoming.png"
              :alt "graph for the grid data - TODO"}]]]
     [:div.column
      [:figcaption [:span "Redistibuted food"]]
      [:figure.image.is-2by1
       [:img {:src "img/stcmf-outgoing.png"
              :alt "graph for the grid data - TODO"}]]]]]])

