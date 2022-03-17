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
            [:p.has-text-weight-bold [:span "Choose to play the role of one of the" (repeat 6 (gstring/unescapeEntities " &nbsp;"))
                                      [:br] "following participants... "]]]
           
           (navbar-clickable [:span.icon-text [:span.icon.has-text-warning-dark [:i.fas.fa-circle]] [:span "Public access (unauthenticated)"]]
                             ;[:span "Public access (unauthenticated)"]
                             (rfe/href :dcs.pasi.app.router/unauthenticated-view nil {:participant :unauthenticated}))
           #_(navbar-clickable [:span.icon-text [:span.icon.has-text-success [:i.fas.fa-circle]] [:span "Identified member of the public"]]
                             ;[:span "Identified member of the public access"]
                               (rfe/href :dcs.pasi.app.router/identified-mop-view nil {:participant :identified-mop}))
           (navbar-clickable [:span.icon-text [:span.icon.has-text-info [:i.fas.fa-circle]] [:span "Alloa Community Enterprises"]]
                             ;[:span "Alloa Community Enterprises"]
                             (rfe/href :dcs.pasi.app.router/ace-view nil {:participant :ace}))
           (navbar-clickable [:span.icon-text [:span.icon.has-text-warning [:i.fas.fa-circle]] [:span "The Fair Share"]]
                             ;[:span "The Fair Share"]
                             (rfe/href :dcs.pasi.app.router/frshr-view nil {:participant :frshr}))
           (navbar-clickable [:span.icon-text [:span.icon.has-text-primary [:i.fas.fa-circle]] [:span "Stirling Community Food"]]
                             ;[:span "Stirling Community Food"]
                             (rfe/href :dcs.pasi.app.router/stcmf-view))
           (navbar-clickable [:span.icon-text [:span.icon.has-text-black [:i.fas.fa-circle]] [:span "Zero Waste Scotland"]]
                             ;[:span "Zero Waste Scotland"]
                             (rfe/href :dcs.pasi.app.router/zws-view nil {:participant :zws}))
            (navbar-clickable [:span.icon-text [:span.icon.has-text-danger [:i.fas.fa-circle]] [:span "Data Commons Scotland"]]
                             ;[:span "Data Commons Scotland"]
                              (rfe/href :dcs.pasi.app.router/dcs-view nil {:participant :dcs}))
           [:hr.navbar-divider]
           (navbar-clickable [:span.icon-text [:span.icon.has-text-grey [:i.fas.fa-circle]] [:span "Data access (SPARQL)"]]
                             ;[:span "SPARQL queries"]
                             "/sparql-client.html")]]

                              
         ;; About
                              #_[:a.navbar-item
                                 {:on-click #(collapse-burger)
                                  :href     (rfe/href :dcs.prototype-6.router/about-view)}
                                 [:span (gstring/unescapeEntities "&nbsp;") "About" (gstring/unescapeEntities "&nbsp;")]]]]])