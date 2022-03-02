(ns dcs.pasi.app.view.unauthenticated.main
  (:require [reagent.core :as r]
            [dcs.pasi.app.util :as util]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.datagrid :as datagrid]
            [dcs.pasi.app.view.unauthenticated.tmp :as tmp]
            [dcs.pasi.app.view.unauthenticated.headline :as headline]
            [dcs.pasi.app.view.unauthenticated.control :as control]
            [dcs.pasi.app.view.unauthenticated.map :as map]
            [dcs.pasi.app.view.unauthenticated.chart :as chart]
            [dcs.pasi.app.view.unauthenticated.table :as table]))


(defn root []
  ;(r/after-render (util/scroll-fn))
  (reset! state/participant-cursor :anon)
  (when (nil? @state/unauthn-wr-ds-cursor)
    (tmp/load-from-server))
  
  [:div

   [:section.hero.is-small.has-background-warning-dark
    [:div.hero-body 
     [:div.container.is-max-desktop
      [:div.notification.has-background-warning-dark.p-0
       [:div.columns.is-flex.is-vcentered
        [:div.column.is-1
         [:figure.image.is-64x64
          [:img {:src "img/anon.png"
                 :alt "Anonymous image"}]]]
        [:div.column
         [:div.content
          [:h1.title.is-5 "Public access (unauthenticated)"]
          [:h2.subtitle.is-6.has-text-white "A mock-up of a webapp which an unauthenticated member of the public might use to access PASI"]]]]]]]]
   
   [:section.hero.is-small.is-white
    [:div
     [:div.hero-body
      (control/root)]]]
   
   [:section.hero.is-small.is-primary
       [:div
        [:div.hero-body
         (headline/root)]]]
   
   [:section.hero
    [:div.container.is-fullhd
     [:div.hero-body
      (map/root)]]]
   
   [:section.hero.is-full-height.is-link
    [:div.hero-body
     [:div.container.is-fullhd
      (chart/root)]]]
   
   [:section.hero.is-full-height.is-info
    [:div.hero-body 
     [:div.container.is-fullhd.mt-2.mb-6
      [table/root]]]]
   
   ])

