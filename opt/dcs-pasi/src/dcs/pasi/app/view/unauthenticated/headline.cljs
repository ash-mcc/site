(ns dcs.pasi.app.view.unauthenticated.headline
  (:require [cljs.pprint :as pp]
            [dcs.pasi.app.state :as state]))

(defn int-comma [n] 
  (pp/cl-format nil "~:d" n))

(defn root []
  (let [observations  (->> @state/unauthn-wr-ds-cursor 
                           count
                           int-comma)
        years         (let [years (->> @state/unauthn-wr-ds-cursor 
                                       (map :from) 
                                       (map #(subs % 0 4))
                                       (map int)
                                       distinct)]
                        (str (apply min years) "-" (apply max years)))
        co2e          (->> @state/unauthn-wr-ds-cursor 
                           (map #(if (contains? % :batchKg)
                                   (/ (:batchKg %) 1000)
                                   (:batchTonnes %))) 
                           (apply +)
                           int
                           int-comma)
        cars          (->> @state/unauthn-wr-ds-cursor 
                           (map #(if (contains? % :batchKg)
                                   (/ (:batchKg %) 1000)
                                   (:batchTonnes %))) 
                           (apply +)
                           (#(/ % 4.1))
                           int
                           int-comma)
        flights          (->> @state/unauthn-wr-ds-cursor 
                           (map #(if (contains? % :batchKg)
                                   (:batchKg %)
                                   (* (:batchTonnes %) 1000))) 
                           (apply +)
                           (#(/ % 202.5))
                           int
                           int-comma)
        organisations (->> @state/unauthn-wr-ds-cursor 
                           (map :enabler) 
                           distinct 
                           count
                           int-comma)
        comments      0]
    [:nav.level
     [:div.level-item.has-text-centered
      [:div
       [:p.heading  [:span "♻️ Carbon savings" [:br] "(CO" [:sub "2"] "e tonnes)"]]
       [:p.title co2e]]]
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
       [:p.heading "📅 Years"]
       [:p.title years]]]
     [:div.level-item.has-text-centered
      [:div
       [:p.heading "🛠️ Organisations"]
       [:p.title organisations]]]
     [:div.level-item.has-text-centered
      [:div
       [:p.heading "📝 Comments"]
       [:p.title comments]]]]))
