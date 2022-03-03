;; bulma-ui    
;; https://git.fh-muenster.de/ww-software/libraries/bulma-ui/-/tree/master
;;
;; License
;; Copyright © 2021 Bruno Burke, Joachim Schunk.
;; This program and the accompanying materials are made available under the
;; terms of the Eclipse Public License 2.0 which is available at
;; http://www.eclipse.org/legal/epl-2.0.
;; This Source Code may also be made available under the following Secondary
;; Licenses when the conditions for such availability set forth in the Eclipse
;; Public License, v. 2.0 are satisfied: GNU General Public License as published by
;; the Free Software Foundation, either version 2 of the License, or (at your
;; option) any later version, with the GNU Classpath Exception which is available
;; at https://www.gnu.org/software/classpath/license.html.
;;
(ns dcs.pasi.app.view.unauthenticated.collapsible
  (:require [clojure.string :refer [join]]
            [reagent.core :as reagent]
            [oops.core :refer [oget oset!]]
            ;[dcs.pasi.app.state :as state]
            )) 

(defn icon [{:keys [class size position id] :as options}]
  ;;;TODO check if this makes sense. Use ligature as key to force 'font awesome' to re-render
  (let [component-id (gensym "icon")]
    (fn [{:keys [class i-class size position style id]
          :or {style :fas} :as options}]
      ^{:key (str component-id)}
      [:span.icon {:class (join " "
                                [class
                                 (case position
                                   :left "is-left"
                                   :right "is-right"
                                   "")
                                 (case size
                                   :small "is-small"
                                   "")])}
       [:i {:class
            (if (string? options) ;;; fallback for old icon component
              (str "fas " options)
              (join " " [i-class
                         (case style
                           :solid "fas"
                           :regular "far"
                           :light "fal"
                           :brand "fab"
                           "")
                         (name style)
                         (when id
                           (name id))]))}]])))


(defn set-element-height! [id height]
  (oset! (js/document.getElementById id)
         "style" "height" height))



(defn resize-element [id]
  (set-element-height! id "5px")
  (set-element-height! id
                       (str (oget (js/document.getElementById id)
                                  "scrollHeight") "px")))


(defn collapsible [_]
  (let [id (gensym "collapsible")
        collapsible-state (reagent/atom {})]
    (reagent/create-class
     {:reagent-render
      (fn [{:keys [class elements animated?]}]
        (let [state @collapsible-state]
          [:div.collapsible-component
           {:class class}
           (map-indexed (fn [index element]
                          (let [element-id (str id "-" index)
                                open? (get state index
                                           (when (= (:initial-state element) :open)
                                             true))]
                            ^{:key (str id "-" index)}
                            [:div.card
                             [:header.card-header
                              {:on-click #(do
                                            (when animated?
                                              (if-not open?
                                                (resize-element element-id)
                                                (set-element-height! element-id "0px")))
                                            (swap! collapsible-state update index not))
                               :style {:cursor :pointer}}
                              [:div.card-header-title
                               (:label element)
                           ;;;TODO icon --[:i.material-icons (:icon element)]
                               ]
                              [:a.card-header-icon
                               [icon (if open?
                                       "fa-angle-up"
                                       "fa-angle-down")]]]

                             (when (or open?
                                       animated?)
                               [:div.collapsible-content
                                {:id element-id
                                 :class (str
                                         (if open?
                                           "active"
                                           "inactive")
                                         " "
                                         (if animated?
                                           "animated"
                                           "not-animated"))}
                                [:div.card-content
                                 (:content element)]])]))
                        elements)]))})))


;; E.g. use  ...but didn't manage to thread through changes to my global state
#_(def collapsible-elements
    [{:label   "Filters etc."
      :content [:section.hero.is-small.is-white
                [:div
                 [:div.hero-body
                  (control/root)]]]}
     {:label         "Summary"
      :initial-state :open
      :content       [:section.hero.is-small.is-primary
                      [:div
                       [:div.hero-body
                        (headline/root)]]]}
     {:label   "Map"
      :content [:section.hero
                [:div.container.is-fullhd
                 [:div.hero-body
                  (map/root)]]]}
     {:label   "Chart"
      :content [:section.hero.is-full-height.is-link
                [:div.hero-body
                 [:div.container.is-fullhd
                  (chart/root)]]]}
     {:label   "Table"
      :content [:section.hero.is-full-height.is-info
                [:div.hero-body
                 [:div.container.is-fullhd.mt-2.mb-6
                  [table/root]]]]}])