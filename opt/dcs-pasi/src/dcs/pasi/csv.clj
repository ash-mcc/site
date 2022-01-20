(ns dcs.pasi.csv
  (:require [clojure.java.io :as io]
            [clojure.data.csv :as csv]))

(defn- rows->maps [rows]
  (map zipmap
       (repeat (map keyword (first rows)))
       (rest rows)))

(defn csv-file->upsert-maps [^String s]
  (let [file (io/file s)
        fname (.getName file)
        ent-typename (subs fname 0 (- (count fname) 4))
        upsert-fn-maker (resolve (symbol "dcs.pasi.mutation" (str ent-typename "-upsert-fn")))]
    (when (nil? upsert-fn-maker)
      (throw (Exception. (str "Unsupported entity type: " ent-typename)))) ;; i.e. no appropriately named dcs.pasi.mutation/<ent-typename>-upsert-fn found
    (-> file
        slurp
        csv/read-csv
        rows->maps
        (->>
         (map #(assoc % :mutation-fn (upsert-fn-maker %)))))))