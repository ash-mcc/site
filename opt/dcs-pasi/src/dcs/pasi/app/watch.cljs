(ns dcs.pasi.app.watch
  (:require [clojure.data :as data]
            [dcs.pasi.app.state :as state]
            [dcs.pasi.app.view.unauthenticated.tmp :as tmp]))


(add-watch state/x-ds-cursor :x-aggrid
           (fn [_key _atom old-state new-state]
             (let [[only-in-a only-in-b _in-both] (data/diff (set old-state) 
                                                             (set new-state))]
               (when (or (seq only-in-a) 
                         (seq only-in-b))
                 (when-let [component @state/x-grid-api-component-cursor]
                   ;; neither of the next 2 lines do what we want
                   ;(.refreshCells component (clj->js {:force? true}))
                   ;(.redrawRows component)
                   (.setRowData component (clj->js new-state)))))))

(add-watch state/unauthn-wr-ds-cursor :unauthn-wr-ds
           (fn [_key _atom old-state new-state]
             (let [[only-in-a only-in-b _in-both] (data/diff (set old-state) 
                                                             (set new-state))]
               (when (or (seq only-in-a) 
                         (seq only-in-b))
                 (reset! state/unauthn-selected-years-cursor (->> new-state
                                                                  (map :from)
                                                                  (map #(subs % 0 4))
                                                                  (map int)
                                                                  set))
                 (reset! state/unauthn-selected-orgs-cursor (->> new-state
                                                                 (map :enabler)
                                                                 set))
                 #_(when-let [component @state/unauthn-grid-api-cursor]
                   ;; neither of the next 2 lines do what we want
                   ;(.refreshCells component (clj->js {:force? true}))
                   ;(.redrawRows component)
                   (.setRowData component (clj->js new-state)))))))

(add-watch state/unauthn-selected-orgs-cursor :unauthn-selected-orgs
           (fn [_key _atom old-state new-state]
             (let [[only-in-a only-in-b _in-both] (data/diff (set old-state) 
                                                             (set new-state))]
               (when (or (seq only-in-a) 
                         (seq only-in-b))
                 (let [wr-ds @state/unauthn-wr-ds-cursor
                       grid-api @state/unauthn-grid-api-cursor]
                   (js/console.log "the when test: " (and (seq wr-ds)
                            grid-api))
                   (when (and (seq wr-ds)
                            grid-api)
                     ;; neither of the next 2 lines do what we want
                     ;(.refreshCells component (clj->js {:force? true}))
                     ;(.redrawRows component)
                     (.setRowData grid-api (clj->js (tmp/filter-ds wr-ds new-state)))))))))