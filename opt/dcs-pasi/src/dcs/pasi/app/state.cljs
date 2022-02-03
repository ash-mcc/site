(ns dcs.pasi.app.state
  (:require [reagent.core :as r]))


(defonce root (r/atom {:route-match        nil
                       :participant        nil
                       :grid-api-component {:dcs   nil
                                            :stcmf nil}
                       :type-kw            {:dcs   :dcsOrg
                                            :stcmf :stcmfSource}}))

(defonce route-match-cursor (r/cursor root [:route-match]))
(defonce participant-cursor (r/cursor root [:participant]))

(def dcs-grid-api-component-cursor (r/cursor root [:grid-api-component :dcs]))
(def stcmf-grid-api-component-cursor (r/cursor root [:grid-api-component :stcmf]))

(def dcs-type-kw-cursor (r/cursor root [:type-kw :dcs]))
(def stcmf-type-kw-cursor (r/cursor root [:type-kw :stcmf]))


;; -----------------



