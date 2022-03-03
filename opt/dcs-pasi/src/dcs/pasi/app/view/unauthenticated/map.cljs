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
      (js/initMarkers map-component 
                      markerclusters-component 
                      (-> ds
                          (tmp/filter-ds @state/unauthn-selected-years-cursor @state/unauthn-selected-orgs-cursor @state/unauthn-selected-streams-cursor)
                          tmp/->geojson-as-a-clj-structure
                          clj->js)
                      true))))

(defn did-update [_this _prev-props]
  (when-let [ds @state/unauthn-wr-ds-cursor]
    (js/initMarkers @map-holder 
                    @markerclusters-holder 
                    (-> ds
                        (tmp/filter-ds @state/unauthn-selected-years-cursor @state/unauthn-selected-orgs-cursor @state/unauthn-selected-streams-cursor)
                        tmp/->geojson-as-a-clj-structure
                        clj->js)
                    false))) ;; TODO figure out when to fitBounds and when noit to

(defn render []
  [:div#map-container {:style {:height 320}}
   [:div#map]])

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
