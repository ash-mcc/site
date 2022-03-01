(ns dcs.pasi.app.view.unauthenticated.control
  (:require [cljs.spec.alpha :as s]
            [reagent.core :as r]
            [dcs.pasi.app.state :as state]))

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
 [:div {:key value}
  [:label.b-checkbox.checkbox.is-small
   [:input {:type      "checkbox"
            :on-change #(swap! backing-atom toggle value)
            :checked   (contains? @backing-atom value)}]
   [:span.check.is-info]
   [:span.control-label label]]])

(defn radio [backing-atom value label]
  [:div {:key value}
   [:label.b-checkbox.checkbox.is-small
    [:input {:type      "checkbox"
             :on-change #(reset! backing-atom value)
             :checked   (= @backing-atom value)}]
    [:span.check.is-info]
    [:span.control-label label]]])


(defn ele [wr-ds selected-years selected-orgs selected-streams selected-groupby selected-charttype]
  (let [years (->> wr-ds
                   (map :from) 
                   (map #(subs % 0 4))
                   (map int)
                   distinct
                   sort)
        organisations (->> wr-ds
                           (map :enabler) 
                           distinct 
                           sort)
        waste-streams (->> wr-ds
                           (map :wasteStream) 
                           distinct 
                           sort)] 
    
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
       (doall (map #(checkbox state/unauthn-selected-streams-cursor % (str %)) waste-streams))]]
     
     [:div.column.is-2
      [:div.container
       [:h3.subtitle.mb-1 "Group by"]
       (radio state/unauthn-selected-groupby-cursor "Waste stream" "Waste stream")
       (radio state/unauthn-selected-groupby-cursor "Organisation" "Organisation")
       [:br]
       [:h3.subtitle.mb-1 "Chart type"]
       (radio state/unauthn-selected-charttype-cursor "Bar chart" "Bar chart")
       (radio state/unauthn-selected-charttype-cursor "Line chart" "Line chart")]]
     
     [:div.column.is-4
      [:div.container
       [:h3.subtitle "TODO controls"]
       [:div.content 
        [:ul 
         [:li "in terms of tonnes vs cars vs airplanes"]
         [:li "use parent->child grid rows for drill-in"]
         [:li "date range slider"]
         [:li "controls for 'process' and other dims"]
         [:li "use the same colour swatch throughout"]
         [:li "download current selection as CSV"]
         [:li "generate SPARQL query for current selection"]
         [:li "handle comments (comments attach to?)"]
         [:li "handle 'presets' (in comments?)"]]]]]
     ]))


(defn root []
  [ele
   @state/unauthn-wr-ds-cursor
   @state/unauthn-selected-years-cursor
   @state/unauthn-selected-orgs-cursor
   @state/unauthn-selected-streams-cursor
   @state/unauthn-selected-groupby-cursor
   @state/unauthn-selected-charttype-cursor])