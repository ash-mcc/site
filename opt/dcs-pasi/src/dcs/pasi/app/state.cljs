(ns dcs.pasi.app.state
  (:require [reagent.core :as r]))


(defonce root (r/atom {:route-match        nil
                       :participant        nil
                       :grid-api-component {:ace   nil
                                            :anon  nil
                                            :dcs   nil
                                            :frshr nil
                                            :stcmf nil
                                            :zws   nil}
                       :type-kw            {:ace   :aceReusedFurniture
                                            :anon  :dcsWasteReduction
                                            :dcs   :dcsWasteReduction
                                            :frshr :frshrReusedMaterial
                                            :stcmf :stcmfRedistributedFood
                                            :zws   :zwsCarbonMetric}}))

(defonce route-match-cursor (r/cursor root [:route-match]))
(defonce participant-cursor (r/cursor root [:participant]))

(def ace-grid-api-component-cursor (r/cursor root [:grid-api-component :ace]))
(def anon-grid-api-component-cursor (r/cursor root [:grid-api-component :anon]))
(def dcs-grid-api-component-cursor (r/cursor root [:grid-api-component :dcs]))
(def frshr-grid-api-component-cursor (r/cursor root [:grid-api-component :frshr]))
(def stcmf-grid-api-component-cursor (r/cursor root [:grid-api-component :stcmf]))
(def zws-grid-api-component-cursor (r/cursor root [:grid-api-component :zws]))

(def ace-type-kw-cursor (r/cursor root [:type-kw :ace]))
(def anon-type-kw-cursor (r/cursor root [:type-kw :anon]))
(def dcs-type-kw-cursor (r/cursor root [:type-kw :dcs]))
(def frshr-type-kw-cursor (r/cursor root [:type-kw :frshr]))
(def stcmf-type-kw-cursor (r/cursor root [:type-kw :stcmf]))
(def zws-type-kw-cursor (r/cursor root [:type-kw :zws]))


;; -----------------



