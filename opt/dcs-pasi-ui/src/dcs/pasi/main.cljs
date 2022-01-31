(ns dcs.pasi.main
  (:require [reagent.dom :as rdom]
            [dcs.pasi.datagrid :as datagrid]))

(defn page
  []
  [:div
       ;[navbar/root]
       ;[status/root]
   #_(let [route @state/route-match-cursor
           view  (-> route :data :view)]
       (js/console.log "page route=" route)
       [view route])
   [datagrid/root-div]
   [:footer.footer
    [:p "Built by the " [:strong "Data Commons Scotland"] " project."]]])

;; called by init and after code reloading finishes
(defn ^:dev/after-load start
  []
  (js/console.log "Starting router")
      ;(router/init)
  (js/console.log "Starting render")
  (rdom/render [page] (.getElementById js/document "app")))

(defn ^:export init
  []
      ;; init is called ONCE when the page loads
      ;; this is called in the index.html and must be exported
      ;; so it is available even in :advanced release builds
      ;(loader/load-data)
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop
  []
  (js/console.log "stop"))
