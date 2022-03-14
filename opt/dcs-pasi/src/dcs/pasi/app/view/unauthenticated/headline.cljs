(ns dcs.pasi.app.view.unauthenticated.headline
  (:require [cljs.pprint :as pp]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.unauthenticated.tmp :as tmp]))

(defn int-comma [n] 
  (pp/cl-format nil "~:d" n))

(defn ele [wr-ds selected-period selected-orgs selected-streams]
  (let [ds (tmp/filter-ds wr-ds selected-period selected-orgs selected-streams)
        observations  (->> ds
                           count
                           int-comma)
        period         (if (empty? selected-period)
                         "Q1 2013 - Q1 2022" ;; a hardwired nasty
                         (let [from (first selected-period)
                             from-month (-> from (subs 5 7) js/parseInt)
                             from (str "Q" (-> from-month (quot 3) (+ 1)) 
                                       " " 
                                       (subs from 0 4))
                             to (second selected-period)
                             to-month (-> to (subs 5 7) js/parseInt)
                             to-year (-> to (subs 0 4) js/parseInt)
                             year-end? (-> to-month (= 1))
                             to (str "Q" (if year-end?
                                           4
                                           (-> to-month (quot 3)))
                                     " "
                                     (if year-end?
                                       (dec to-year)
                                       to-year))
                             _ (js/console.log "to: " to)]
                         (str from " - " to)))
        co2eT         (->> ds
                           (map :carbonSavingCo2eKg) 
                           (apply +)
                           (#(/ % 1000))
                           int
                           int-comma)
        cars          (->> ds
                           (map :carbonSavingCo2eKg)
                           (apply +)
                           (#(/ % 1000))
                           (#(/ % 4.1))
                           int
                           int-comma)
        flights          (->> ds 
                              (map :carbonSavingCo2eKg)
                              (apply +)
                              (#(/ % 1000))
                              (#(/ % 0.2025))
                              int
                              int-comma)
        organisations (->> ds
                           (map :enabler) 
                           distinct 
                           count
                           int-comma)
        comments      0]
    [:nav.level
     [:div.level-item.has-text-centered
      [:div
       [:p.heading  [:span "♻️ Carbon savings" [:br] "(CO" [:sub "2"] "e tonnes)"]]
       [:p.title co2eT]]]
     [:div.level-item.has-text-centered
      [:div
       [:p.heading [:span "✈️ Equivalent flights" [:br] "(Glasgow -> Berlin)"]]
       [:p.title flights]]]
     [:div.level-item.has-text-centered
      [:div
       [:p.heading "👁️ Observations"]
       [:p.title observations]]]
     [:div.level-item.has-text-centered
      [:div
       [:p.heading [:span "📅 Period covered" [:br] "(inclusive)"]]
       [:p.subtitle.has-text-weight-bold period]]]
     [:div.level-item.has-text-centered
      [:div
       [:p.heading "🛠️ Organisations"]
       [:p.title organisations]]]
     [:div.level-item.has-text-centered
      [:div
       [:p.heading "📝 Comments"]
       [:p.title comments]]]]))


(defn root []
  [ele
   @state/unauthn-wr-ds-cursor
   @state/unauthn-selected-period-cursor
   @state/unauthn-selected-orgs-cursor
   @state/unauthn-selected-streams-cursor])