(ns dcs.pasi.app.view.unauthenticated.map
  (:require [cljs.spec.alpha :as s]
            [clojure.string :as str]
            [reagent.core :as r]
            [dcs.pasi.app.util :as util]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.unauthenticated.tmp :as tmp]))


(def map-holder (r/atom nil))
(def markerclusters-holder (r/atom nil))


(defn did-mount []
  (let [[map-component markerclusters-component] (js/initMap)]
    (reset! map-holder map-component)
    (reset! markerclusters-holder markerclusters-component)
    (when-let [ds @state/unauthn-wr-ds-cursor]
      (js/initMarkers map-component markerclusters-component (clj->js (tmp/->geojson-as-a-clj-structure ds))))))

(defn did-update [_this _prev-props]
  (when-let [ds @state/unauthn-wr-ds-cursor]
    (js/initMarkers @map-holder @markerclusters-holder (clj->js (tmp/->geojson-as-a-clj-structure ds)))))

(defn render []
  [:div#map-container {:style {:height 350}}
   [:div#map]])

(defn component []
  (r/create-class {:reagent-render       render
                   :component-did-mount  did-mount
                   :component-did-update did-update}))

(defn root []
  [component {:data @state/unauthn-wr-ds-cursor}])
