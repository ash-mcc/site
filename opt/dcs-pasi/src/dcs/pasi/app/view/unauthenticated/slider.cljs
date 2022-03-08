(ns dcs.pasi.app.view.unauthenticated.slider
  (:require [reagent.core :as r]
            [reagent.dom :as rd]))

;; see  https://codepen.io/muralidharmoka/pen/ZvQqGq

(defn- create-slider! [total-quarters-shown node f]
  (js/noUiSlider.create
   node
   (js-obj
    "start" 0
    "step" 1
    "range" (js-obj "min" 0
                    "max" (dec total-quarters-shown))
    "tooltips" true
    ;;"connect" true
    "animate" true
    "animationDuration" 600
    "pips" (js-obj "mode" "steps"
                   "density" (dec total-quarters-shown)
                    "filter" (fn [] 1))))
  (doto (.-noUiSlider node)
    (.on "slide" f)))

(defn home-render []
  [:div {:id "slider-date"}])

(defn date-slider-range-comp
  []
  (fn []
    (r/create-class {:reagent-render      home-render
                     :component-did-mount (fn [node]
                                            (create-slider!
                                             4
                                             (rd/dom-node node)
                                             (fn [e] (js/console.log e))))})))