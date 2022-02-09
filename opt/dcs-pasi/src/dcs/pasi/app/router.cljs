(ns dcs.pasi.app.router
  (:require [reitit.frontend :as rf]
            [reitit.coercion.spec :as rss]
            [reitit.frontend.easy :as rfe]
            [spec-tools.data-spec :as ds]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.ace :as ace-view]
            [dcs.pasi.app.view.anon :as anon-view]
            [dcs.pasi.app.view.dcs :as dcs-view]
            [dcs.pasi.app.view.frshr :as frshr-view]
            [dcs.pasi.app.view.stcmf :as stcmf-view]
            [dcs.pasi.app.view.zws :as zws-view]
            [dcs.pasi.app.view.experiment :as experiment-view]))

(def routes
  [["/"
    {:name ::home-view
     :view dcs-view/root}]
   ["/ace"
    {:name ::ace-view
     :view ace-view/root}]
   ["/anon"
    {:name ::anon-view
     :view anon-view/root}]
   ["/dcs"
    {:name ::dcs-view
     :view dcs-view/root}]
   ["/frshr"
    {:name ::frshr-view
     :view frshr-view/root}]
   ["/stcmf"
    {:name ::stcmf-view
     :view stcmf-view/root}]
   ["/zws"
    {:name ::zws-view
     :view zws-view/root}]
   ["/x"
    {:name ::experiment-view
     :view experiment-view/root}]
   ["*path"
    {:name ::catch-all
     :view dcs-view/root}]])

(defn init
      []
      (rfe/start!
        (rf/router routes
                   {:data      {:coercion rss/coercion}
                    :conflicts nil})
        (fn [m] (reset! state/route-match-cursor m))
        {:use-fragment true})) ;; So URLs looking like  base-path/#/other/paths
