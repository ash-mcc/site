(ns dcs.pasi.app.dropdown)


(defn toggle-is-activate [^String id]
  (let [myClass (.-classList (.getElementById js/document id))]
    (-> myClass (.toggle "is-active"))))


(defn dropdown [^String dropdown-id prompt values on-click-handler]
  [:div.dropdown {:id dropdown-id}
   [:div.dropdown-trigger
    [:button.button {:aria-haspopup true
                     :aria-controls :dropdown-menu
                     :on-click      (fn [event]
                                      (.preventDefault event)
                                      (toggle-is-activate dropdown-id))}
     [:span prompt]
     [:span.icon.is-small
      [:i.fas.fa-angle-down {:aria-hidden true}]]]]
   [:div.dropdown-menu {:id   :dropdown-menu
                        :role :menu}
    [:div.dropdown-content
     (sort-by (fn [item]
                (:name (second item)))
              (map (fn [[m-code m-name]]
                     [:a.dropdown-item {:name     m-name
                                        :key      m-code
                                        :on-click on-click-handler}
                      m-name])
                   values))]]])
