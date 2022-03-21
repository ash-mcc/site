(ns dcs.pasi.app.state
  (:require [reagent.core :as r]))


(defonce root (r/atom {:route-match        nil
                       :participant        nil
                       :grid-api-component {:dcs   nil
                                            :frshr nil
                                            :stcmf nil
                                            :zws   nil}
                       :type-kw            {:dcs   :dcsWasteReduction
                                            :frshr :frshrReusedMaterial
                                            :stcmf :stcmfRedistributedFood
                                            :zws   :zwsCarbonMetric}
                       :ace                {:fd-ds       nil
                                            :rf-ds       nil
                                            :fd-grid-api nil
                                            :rf-grid-api nil}
                       :unauthn            {:wr-ds        nil
                                            :selected     {:period    []
                                                           :orgs      #{}
                                                           :streams   #{}
                                                           :focuson   "Carbon savings"
                                                           :groupby   "Waste stream"
                                                           :charttype "Bar chart"}
                                            :grid-api     nil
                                            :stcil-routes nil}}))

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

(def ace-rf-ds-cursor (r/cursor root [:ace :rf-ds]))
(def ace-fd-ds-cursor (r/cursor root [:ace :fd-ds]))
(def ace-fd-grid-api-cursor (r/cursor root [:ace :fd-grid-api]))
(def ace-rf-grid-api-cursor (r/cursor root [:ace :rf-grid-api]))

(def unauthn-wr-ds-cursor (r/cursor root [:unauthn :wr-ds]))
(def unauthn-selected-period-cursor (r/cursor root [:unauthn :selected :period]))
(def unauthn-selected-orgs-cursor (r/cursor root [:unauthn :selected :orgs]))
(def unauthn-selected-streams-cursor (r/cursor root [:unauthn :selected :streams]))
(def unauthn-selected-focuson-cursor (r/cursor root [:unauthn :selected :focuson]))
(def unauthn-selected-groupby-cursor (r/cursor root [:unauthn :selected :groupby]))
(def unauthn-selected-charttype-cursor (r/cursor root [:unauthn :selected :charttype]))
(def unauthn-grid-api-cursor (r/cursor root [:unauthn :grid-api]))
(def stcil-routes-cursor (r/cursor root [:unauthn :stcil-routes]))


;; -----------------



