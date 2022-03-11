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
        years         (->> ds
                           (map :from) 
                           (map #(subs % 0 4))
                           distinct
                           count)
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
       [:p.heading "📅 Period covered"]
       [:p.title years]]]
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