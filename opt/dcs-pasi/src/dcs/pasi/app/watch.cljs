(ns dcs.pasi.app.watch
  (:require [clojure.data :as data]
            [dcs.pasi.app.state :as state]))


(add-watch state/x-ds-cursor :x-aggrid
           (fn [_key _atom old-state new-state]
             (let [[only-in-a only-in-b _in-both] (data/diff (set old-state) 
                                                             (set new-state))]
               (when (or (not (empty? only-in-a))
                         (not (empty? only-in-b))))
               (when-let [component @state/x-grid-api-component-cursor]
                 (.setRowData component (clj->js new-state))))))