(ns dcs.pasi.app.view.unauthenticated.control
  (:require [cljs.spec.alpha :as s]
            [reagent.core :as r]
            [reagent.dom :as rd]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.unauthenticated.tmp :as tmp]
            ;[dcs.pasi.app.view.unauthenticated.slider :as slider]
            ))

;; Bulma/CSS add-ons:
;;   https://justboil.github.io/bulma-checkbox/
;;   https://bulma-collapsible.netlify.app/usage/


(defn toggle [current-value-of-atom value]
  {:pre [(s/valid? set? current-value-of-atom)]}
  (js/console.log "current-value-of-atom =" (str current-value-of-atom))
  (js/console.log "value =" (str value))
  (if (contains? current-value-of-atom value)
    (disj current-value-of-atom value)
    (conj current-value-of-atom value)))


(defn checkbox [backing-atom value label]
 (let [assoc-colour (tmp/colour value)
       style {:border-color assoc-colour}
       checked? (contains? @backing-atom value)
       style (if checked?
              (assoc style :background-color assoc-colour)
               style)]
   [:div {:key value}
  [:label.b-checkbox.checkbox.is-small
   [:input {:type      "checkbox"
            :on-change #(swap! backing-atom toggle value)
            :checked   checked?}]
   [:span.check {:style style}]
   [:span.control-label label]]]))

(defn radio [backing-atom value label]
  [:div {:key value}
   [:label.b-checkbox.checkbox.is-small
    [:input {:type      "checkbox"
             :on-change #(reset! backing-atom value)
             :checked   (= @backing-atom value)}]
    [:span.check.is-info]
    [:span.control-label label]]])


(defn ele [wr-ds selected-years selected-orgs selected-streams selected-focuson selected-groupby selected-charttype]
  (let [years                                 (->> wr-ds
                                                   (map :from) 
                                                   (map #(subs % 0 4))
                                                   (map int)
                                                   distinct
                                                   sort)
        organisations                         (->> wr-ds
                                                   (map :enabler) 
                                                   distinct 
                                                   sort)
        waste-streams                         (->> wr-ds
                                                   (map :wasteStream) 
                                                   distinct 
                                                   sort)
        n                                     (quot (count waste-streams) 2)
        [waste-streams-pt1 waste-streams-pt2] (split-at n waste-streams)] 
    
    [:div.columns 
     
     [:div.column.is-1
      [:div.container
       [:h3.subtitle.mb-1 "Years"]
       (doall (map #(checkbox state/unauthn-selected-years-cursor % (str %)) years))
       ]]
     
     [:div.column.is-2
      [:div.container
       [:h3.subtitle.mb-1 "Organisations"]
       (doall (map #(checkbox state/unauthn-selected-orgs-cursor % (str %)) organisations))]]
     

     [:div.column.is-3
      [:div.container
       [:h3.subtitle.mb-1 "Waste streams"]
       (doall (map #(checkbox state/unauthn-selected-streams-cursor % (str %)) waste-streams-pt1))]]
     
     [:div.column.is-3
      [:div.container
       (doall (map #(checkbox state/unauthn-selected-streams-cursor % (str %)) waste-streams-pt2))]]
     
     [:div.column.is-2
      [:div.container
       [:h3.subtitle.mb-1 "Chart type"]
       (radio state/unauthn-selected-charttype-cursor "Bar chart" "Bar chart")
       (radio state/unauthn-selected-charttype-cursor "Line chart" "Line chart")
       [:br]
       [:h3.subtitle.mb-1 "Group by"]
       (radio state/unauthn-selected-groupby-cursor "Waste stream" "Waste stream")
       (radio state/unauthn-selected-groupby-cursor "Organisation" "Organisation")
       [:br]
       [:h3.subtitle.mb-1 "Focus on"]
       (radio state/unauthn-selected-focuson-cursor "Carbon savings" "Carbon savings")
       (radio state/unauthn-selected-focuson-cursor "Weights" "Weights")
       ;[:br]
       ;(slider/date-slider-range-comp)
       ]]]))


(defn root []
  [ele
   @state/unauthn-wr-ds-cursor
   @state/unauthn-selected-years-cursor
   @state/unauthn-selected-orgs-cursor
   @state/unauthn-selected-streams-cursor
   @state/unauthn-selected-focuson-cursor
   @state/unauthn-selected-groupby-cursor
   @state/unauthn-selected-charttype-cursor])