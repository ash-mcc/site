(ns dcs.pasi.app.state
  (:require [reagent.core :as r]))


(defonce root (r/atom {:route-match nil
                       :participant "Please select a participant..."}))

(defonce route-match-cursor (r/cursor root [:route-match]))

(defonce participant-cursor (r/cursor root [:participant]))


;; -----------------



