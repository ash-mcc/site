(ns dcs.pasi.app.router
  (:require [reitit.frontend :as rf]
            [reitit.coercion.spec :as rss]
            [reitit.frontend.easy :as rfe]
            [spec-tools.data-spec :as ds]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.datagrid :as datagrid-view]))

(def routes
  [["/"
    {:name ::datagrid-view
     :view datagrid-view/root-div}]
   #_["/todo"
    {:name ::todo-view
     :view todo-view/root-div}]
   #_["/x"
    {:name ::experiment-view
     :view experiment-view/root-div}]
   ["*path"
    {:name ::catch-all
     :view datagrid-view/root-div}]])

(defn init
      []
      (rfe/start!
        (rf/router routes
                   {:data      {:coercion rss/coercion}
                    :conflicts nil})
        (fn [m] (reset! state/route-match-cursor m))
        {:use-fragment true})) ;; So URLs looking like  base-path/#/other/paths
