(ns dcs.pasi.app.state
  (:require [reagent.core :as r]))


(defonce root (r/atom {:route-match                                 nil
                       }))

(defonce route-match-cursor (r/cursor root [:route-match]))



;; -----------------



