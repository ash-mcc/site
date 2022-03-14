(ns dcs.pasi.app.view.unauthenticated.slider
  (:require [reagent.core :as r]
            [reagent.dom :as rd]
            [goog.functions :as gfuncs]
            [goog.string :as gstring]
            [clojure.string :as str]
            [dcs.pasi.app.state :as state]))

;; see 
;;   
;;   https://codepen.io/muralidharmoka/pen/ZvQqGq


(def quarters-count (+ (* 9 4) 1))
(def first-year 2013)

;(js/console.log "quarters-count: " quarters-count)

;; create an indexed data structure of quarter-year strings, each like "Q1 2022"
(def qy-strs
  (vec (for [idx (range quarters-count)]
         (let [year    (+ first-year (quot idx 4))
               quarter (inc (rem idx 4))]
           (str "Q" quarter " " year)))))

;(js/console.log "qy-strs: " (str/join "\n" qy-strs))

;; index -> quarter-year string
(defn ->qy-str [v]
  (let [qy-str (get qy-strs (js/Math.round v))]
    ;(js/console.log "->qy-str: " v " -> " qy-str)
    qy-str))

;; index -> year string
(defn ->y-str [v]
  (if (= 0 (rem v 4))
    (str (+ first-year (quot v 4)))
    ""))


(defn- create-slider! [^js node f]
  (js/noUiSlider.create node
                        (clj->js {:start [0 (dec quarters-count)]
                                  :margin 0 ;; so 1 quarter can be selected, i.e. where fromIncl = toExcl)
                                  :step 1
                                  :behaviour "drag"
                                  :orientation "vertical"
                                  ;;:direction "rtl"
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

(defn update-state [e]
  (js/console.log "update-state got: " e)
  (let [[from to] e
        from (str (-> from (subs 3 7)) 
                  "-" 
                  (-> from (subs 1 2) js/parseInt dec (* 3) (+ 1) (->> (gstring/format "%02d")))
                  "-01")
        year-end? (-> to (subs 1 2) js/parseInt (= 4))
        to (str (-> to (subs 3 7) js/parseInt (+ (if year-end? 1 0)))
                  "-"
                  (-> to (subs 1 2) js/parseInt (* 4) (#(if year-end? 1 %)) (->> (gstring/format "%02d")))
                  "-01")]
    (js/console.log (str "setting state: " from " " to))
    (reset! state/unauthn-selected-period-cursor [from to])))

(def debounced-update-state (gfuncs/debounce update-state 250))

(defn home-render []
  [:div#qy-slider.pasi-slider {:style {:height "200px" :margin-top "20px" :margin-left "54px"}}])

(defn date-slider-range-comp
  []
  (fn []
    (r/create-class {:reagent-render      home-render
                     :component-did-mount (fn [node]
                                            (create-slider!
                                             (rd/dom-node node)
                                             debounced-update-state))})))


