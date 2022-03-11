(ns dcs.pasi.app.view.unauthenticated.slider
  (:require [reagent.core :as r]
            [reagent.dom :as rd]))

;; see 
;;   
;;   https://codepen.io/muralidharmoka/pen/ZvQqGq


(def quarters-count (+ (* 9 4) 1))
(def first-year 2013)

(def qy-strs
  (vec (for [idx (range quarters-count)]
         (let [year    (+ first-year (quot idx 4))
               quarter (inc (rem idx 4))]
           (str "Q" quarter " " year)))))

(defn ->qy-str [v]
  (get qy-strs (js/parseInt v)))

(defn ->y-str [v]
  (if (= 0 (rem v 4))
    (str (+ first-year (quot v 4)))
    ""))


(defn- create-slider! [^js node f]
  (js/noUiSlider.create node
                        (clj->js {:start [0 (dec quarters-count)]
                                  :margin 1
                                  :step 1
                                  :behaviour "drag"
                                  :orientation "vertical"
                                  :direction "rtl"
                                  :height "250px"
                                  :tooltips [true true]
                                  :format {:to ->qy-str
                                           :from identity}
                                  :connect true
                                  :range   {:min 0
                                            :max (dec quarters-count)}
                                  :pips {:mode "steps"
                                         :format {:to ->y-str
                                                  :from identity}}}))
  (doto (.-noUiSlider node)
    (.on "slide" f)))

(defn home-render []
  [:div#qy-slider.pasi-slider {:style {:height "200px"}}])

(def year-labels [])

(defn date-slider-range-comp
  []
  (fn []
    (r/create-class {:reagent-render      home-render
                     :component-did-mount (fn [node]
                                            (create-slider!
                                             (rd/dom-node node)
                                             (fn [e] (js/console.log e))))})))


