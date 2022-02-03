(ns dcs.pasi.app.navbar
  (:require [clojure.string :as str]
            [reitit.frontend.easy :as rfe]
            [goog.string :as gstring]))

(defn remove-class [el toggleable-class]
  (let [el-classList (.-classList el)]
    (when (.contains el-classList toggleable-class)
      (.remove el-classList toggleable-class))))

(defn toggle-class [el toggleable-class]
  (let [el-classList (.-classList el)]
    (if (.contains el-classList toggleable-class)
      (.remove el-classList toggleable-class)
      (.add el-classList toggleable-class))))

(defn toggle-burger
  "Expands/collapses the burger-ised menu"
  [_event]
  (let [burger-el (.getElementById js/document "topburger")
        ;burger-el (.-currentTarget _event)
        navbarmenu-id (.-target (.-dataset burger-el))
        navbarmenu-el (.getElementById js/document navbarmenu-id)]
    (toggle-class burger-el "is-active")
    (toggle-class navbarmenu-el "is-active")))

(defn collapse-burger
  "Collapses the burger-ised menu. Only works when the burger is in-play."
  []
  (let [burger-el (.getElementById js/document "topburger")
        navbarmenu-id (.-target (.-dataset burger-el))
        navbarmenu-el (.getElementById js/document navbarmenu-id)]
    (remove-class burger-el "is-active")
    (remove-class navbarmenu-el "is-active")))

(defn navbar-clickable
      ([title href]
       [:a.navbar-item
        {:on-click #(collapse-burger) :href href :target (if (str/starts-with? href "http") "_blank" "_self")}  ;; Clickable navbar items should close the burger.
        [:span.navbar-content
         [:span.has-text-link-dark title]]])
      ([title subtitle href]
       (-> (navbar-clickable title href)
           (assoc-in [2 2] [:p.is-size-7.has-text-dark subtitle])))) ;; Append a vector that contains the subtitle

(defn root []
      [:nav.navbar.is-fixed-top.is-light {:role "navigation"}

       [:div.navbar-brand
        [:a.navbar-item {:href (rfe/href :dcs.pasi.app.router/home-view)}
         [:img.brand-logo.pr-4 {:src "img/pasi-logo.png" :alt "PASI logo"}]
         "Participatory Accounting of Social Impacts (" [:em "proof-of-concept"] ")"]
        [:a.navbar-item]

        [:span#topburger.navbar-burger.burger {:data-target "topnavbar" :on-click #(toggle-burger %) }
         [:span]
         [:span]
         [:span]]]

       [:div#topnavbar.navbar-menu

        [:div.navbar-start
         #_[:a.navbar-item {:href "#"} "Left side items beside the brand logo"]]

        [:div.navbar-end


         ;; Participants
         [:div.navbar-item.has-dropdown.is-hoverable
          [:label.navbar-link "Participants"]
          [:div.navbar-dropdown.is-right
           
           [:div.navbar-item
            [:p.has-text-weight-bold [:span "Choose to be one of the following"
                                      [:br] "participants..."]]]
           
           (navbar-clickable "ACE Admin"
                             [:span "Alloa Community Enterprises - Administrator"]
                             (rfe/href :dcs.pasi.app.router/home-view nil {:participant :ace}))
           (navbar-clickable "ANON"
                             [:span "Anonymous public access"]
                             (rfe/href :dcs.pasi.app.router/home-view nil {:participant :anon}))
           (navbar-clickable "DCS Admin"
                             [:span "Data Commons Scotland - Administrator"]
                             (rfe/href :dcs.pasi.app.router/dcs-view nil {:participant :dcs}))
           (navbar-clickable "FRSHR Admin"
                             [:span "The Fair Share - Administrator"]
                             (rfe/href :dcs.pasi.app.router/home-view nil {:participant :frshr}))
           (navbar-clickable "STCMF Admin"
                             [:span "Stirling Community Food - Administrator"]
                             (rfe/href :dcs.pasi.app.router/stcmf-view))
           (navbar-clickable "ZWS Admin"
                             [:span "Zero Waste Scotland - Administrator"]
                             (rfe/href :dcs.pasi.app.router/home-view nil {:participant :zws}))]]

                              
         ;; About
                              #_[:a.navbar-item
                                 {:on-click #(collapse-burger)
                                  :href     (rfe/href :dcs.prototype-6.router/about-view)}
                                 [:span (gstring/unescapeEntities "&nbsp;") "About" (gstring/unescapeEntities "&nbsp;")]]]]])