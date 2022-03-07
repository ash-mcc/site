(ns dcs.pasi.app.view.unauthenticated.map
  (:require [cljs.spec.alpha :as s]
            [clojure.string :as str]
            [reagent.core :as r]
            [dcs.pasi.app.util :as util]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.unauthenticated.tmp :as tmp]))


(def map-holder (r/atom nil))
(def markerclusters-holder (r/atom nil))
(def markers-holder (r/atom nil))

(defn init-markers [ds]
  (let [[map-component markerclusters-component markers-component]
        (js/initMarkers @map-holder
                        @markerclusters-holder
                        (-> ds
                            (tmp/filter-ds @state/unauthn-selected-years-cursor @state/unauthn-selected-orgs-cursor @state/unauthn-selected-streams-cursor)
                            tmp/->geojson-as-a-clj-structure
                            clj->js)
                        (let [markerclusters ^js @markerclusters-holder
                              layers         (.getLayers markerclusters)
                                 ;; when zero layers then call fitBounds (zoom to) after adding the new layers/markers 
                              fit-bounds?    (= 0 (count layers))]
                          fit-bounds?))]
    (reset! map-holder map-component)
    (reset! markerclusters-holder markerclusters-component)
    (reset! markers-holder markers-component)))

(defn did-mount []
  (let [[map-component markerclusters-component] (js/initMap)]
    (reset! map-holder map-component)
    (reset! markerclusters-holder markerclusters-component)
    (when-let [ds @state/unauthn-wr-ds-cursor]
      (init-markers ds))))

(defn did-update [_this _prev-props]
  (when-let [ds @state/unauthn-wr-ds-cursor]
    (init-markers ds)))

(defn render []
  [:div#mymap-container {:style {:height 320}}
   [:div#mymap]])

(defn component [wr-ds selected-years selected-orgs selected-streams]
  (r/create-class {:reagent-render       render
                   :component-did-mount  did-mount
                   :component-did-update did-update}))

;; TODO make popups etc. work
;;   maybe see https://github.com/rururu/rete4flights for inspiration of how to do it with Reagent
(defn root []
  [component 
   @state/unauthn-wr-ds-cursor
   @state/unauthn-selected-years-cursor
   @state/unauthn-selected-orgs-cursor
   @state/unauthn-selected-streams-cursor])
