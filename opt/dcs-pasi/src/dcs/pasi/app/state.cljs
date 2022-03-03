(ns dcs.pasi.app.state
  (:require [reagent.core :as r]))


(defonce root (r/atom {:route-match        nil
                       :participant        nil
                       :grid-api-component {:ace   nil
                                            :anon  nil
                                            :dcs   nil
                                            :frshr nil
                                            :stcmf nil
                                            :zws   nil
                                            :x     nil}
                       :type-kw            {:ace   :aceReusedFurniture
                                            :anon  :dcsWasteReduction
                                            :dcs   :dcsWasteReduction
                                            :frshr :frshrReusedMaterial
                                            :stcmf :stcmfRedistributedFood
                                            :zws   :zwsCarbonMetric}
                       
                       :x-ds               nil
                       :unauthn            {:wr-ds    nil
                                            :selected {:years     #{}
                                                       :orgs      #{}
                                                       :streams   #{}
                                                       :groupby   "Waste stream"
                                                       :charttype "Bar chart"}
                                            :grid-api nil
                                            :geojson  nil}}))

(defonce route-match-cursor (r/cursor root [:route-match]))
(defonce participant-cursor (r/cursor root [:participant]))

(def ace-grid-api-component-cursor (r/cursor root [:grid-api-component :ace]))
(def anon-grid-api-component-cursor (r/cursor root [:grid-api-component :anon]))
(def dcs-grid-api-component-cursor (r/cursor root [:grid-api-component :dcs]))
(def frshr-grid-api-component-cursor (r/cursor root [:grid-api-component :frshr]))
(def stcmf-grid-api-component-cursor (r/cursor root [:grid-api-component :stcmf]))
(def zws-grid-api-component-cursor (r/cursor root [:grid-api-component :zws]))
(def x-grid-api-component-cursor (r/cursor root [:grid-api-component :x]))

(def ace-type-kw-cursor (r/cursor root [:type-kw :ace]))
(def anon-type-kw-cursor (r/cursor root [:type-kw :anon]))
(def dcs-type-kw-cursor (r/cursor root [:type-kw :dcs]))
(def frshr-type-kw-cursor (r/cursor root [:type-kw :frshr]))
(def stcmf-type-kw-cursor (r/cursor root [:type-kw :stcmf]))
(def zws-type-kw-cursor (r/cursor root [:type-kw :zws]))

(def x-ds-cursor (r/cursor root [:x-ds]))

(def unauthn-wr-ds-cursor (r/cursor root [:unauthn :wr-ds]))
(def unauthn-selected-years-cursor (r/cursor root [:unauthn :selected :years]))
(def unauthn-selected-orgs-cursor (r/cursor root [:unauthn :selected :orgs]))
(def unauthn-selected-streams-cursor (r/cursor root [:unauthn :selected :streams]))
(def unauthn-selected-groupby-cursor (r/cursor root [:unauthn :selected :groupby]))
(def unauthn-selected-charttype-cursor (r/cursor root [:unauthn :selected :charttype]))
(def unauthn-grid-api-cursor (r/cursor root [:unauthn :grid-api]))
(def geojson-cursor (r/cursor root [:unauthn :geojson]))


;; -----------------


