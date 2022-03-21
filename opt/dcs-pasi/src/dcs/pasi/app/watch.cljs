(ns dcs.pasi.app.watch
  (:require [clojure.data :as data]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.unauthenticated.tmp :as tmp]))



(add-watch state/ace-fd-ds-cursor :ace-fd-ds
           (fn [_key _atom old-state new-state]
             (let [[only-in-a only-in-b _in-both] (data/diff (set old-state)
                                                             (set new-state))]
               (when (or (seq only-in-a)
                         (seq only-in-b))
                 (when-let [component @state/ace-fd-grid-api-cursor]
                   ;; neither of the next 2 lines do what we want
                   ;(.refreshCells component (clj->js {:force? true}))
                   ;(.redrawRows component)
                   (.setRowData component (clj->js new-state))))))) ;; get the component to 'refresh'

(add-watch state/ace-rf-ds-cursor :ace-rf-ds
           (fn [_key _atom old-state new-state]
             (let [[only-in-a only-in-b _in-both] (data/diff (set old-state) 
                                                             (set new-state))]
               (when (or (seq only-in-a) 
                         (seq only-in-b))
                 (when-let [component @state/ace-rf-grid-api-cursor]
                   ;; neither of the next 2 lines do what we want
                   ;(.refreshCells component (clj->js {:force? true}))
                   ;(.redrawRows component)
                   (.setRowData component (clj->js new-state))))))) ;; get the component to 'refresh'




(add-watch state/unauthn-wr-ds-cursor :unauthn-wr-ds
           (fn [_key _atom old-state new-state]
             (let [[only-in-a only-in-b _in-both] (data/diff (set old-state) 
                                                             (set new-state))]
               (when (or (seq only-in-a) 
                         (seq only-in-b))
                 (reset! state/unauthn-selected-period-cursor [])
                 (reset! state/unauthn-selected-orgs-cursor (->> new-state
                                                                 (map :enabler)
                                                                 set))
                 (reset! state/unauthn-selected-streams-cursor (->> new-state
                                                                    (map :wasteStream)
                                                                    set))
                 #_(when-let [component @state/unauthn-grid-api-cursor]
                   ;; neither of the next 2 lines do what we want
                   ;(.refreshCells component (clj->js {:force? true}))
                   ;(.redrawRows component)
                   (.setRowData component (clj->js new-state))))))) ;; let 'downstream' watchers get the component to 'refresh'

(add-watch state/unauthn-selected-orgs-cursor :unauthn-selected-orgs
           (fn [_key _atom old-state new-state]
             (let [[only-in-a only-in-b _in-both] (data/diff (set old-state) 
                                                             (set new-state))]
               (when (or (seq only-in-a) 
                         (seq only-in-b))
                 (let [wr-ds @state/unauthn-wr-ds-cursor
                       grid-api @state/unauthn-grid-api-cursor]
                   (when (and (seq wr-ds)
                              grid-api)
                     ;; neither of the next 2 lines do what we want
                     ;(.refreshCells component (clj->js {:force? true}))
                     ;(.redrawRows component)
                     (.setRowData grid-api (clj->js (tmp/filter-ds wr-ds @state/unauthn-selected-period-cursor new-state @state/unauthn-selected-streams-cursor))))))))) ;; get the component to 'refresh'

(add-watch state/unauthn-selected-period-cursor :unauthn-selected-years
           (fn [_key _atom old-state new-state]
             (let [[only-in-a only-in-b _in-both] (data/diff (set old-state) 
                                                             (set new-state))]
               (when (or (seq only-in-a) 
                         (seq only-in-b))
                 (let [wr-ds @state/unauthn-wr-ds-cursor
                       grid-api @state/unauthn-grid-api-cursor]
                   (when (and (seq wr-ds)
                              grid-api)
                     ;; neither of the next 2 lines do what we want
                     ;(.refreshCells component (clj->js {:force? true}))
                     ;(.redrawRows component)
                     (.setRowData grid-api (clj->js (tmp/filter-ds wr-ds new-state @state/unauthn-selected-orgs-cursor @state/unauthn-selected-streams-cursor))))))))) ;; get the component to 'refresh'

(add-watch state/unauthn-selected-streams-cursor :unauthn-selected-streams
           (fn [_key _atom old-state new-state]
             (let [[only-in-a only-in-b _in-both] (data/diff (set old-state) 
                                                             (set new-state))]
               (when (or (seq only-in-a) 
                         (seq only-in-b))
                 (let [wr-ds @state/unauthn-wr-ds-cursor
                       grid-api @state/unauthn-grid-api-cursor]
                   (when (and (seq wr-ds)
                              grid-api)
                     ;; neither of the next 2 lines do what we want
                     ;(.refreshCells component (clj->js {:force? true}))
                     ;(.redrawRows component)
                     (.setRowData grid-api (clj->js (tmp/filter-ds wr-ds @state/unauthn-selected-period-cursor @state/unauthn-selected-orgs-cursor new-state))))))))) ;; get the component to 'refresh'