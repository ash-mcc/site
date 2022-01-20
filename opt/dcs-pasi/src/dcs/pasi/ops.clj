(ns dcs.pasi.ops)


;; For now, let's implement ops functionality over the GraphQL interface.


(defn report->delete-maps [coll ent-typename] ;; TODO suss the ent-typename from the contents of coll 
  (let [delete-fn-maker (resolve (symbol "dcs.pasi.mutation" (str ent-typename "-delete-fn")))]
    (when (nil? delete-fn-maker)
      (throw (Exception. (str "Unsupported entity type: " ent-typename)))) ;; i.e. no appropriately named dcs.pasi.mutation/<ent-typename>-delete-fn found
    (->> coll
       (map #(assoc % :mutation-fn (delete-fn-maker %))))))

(defn ace-waste-reduction-related-reports->upsert-maps 
  [aceReusedFurniture-coll
   aceFurnitureDescription-coll
   opsAceToRefData-coll
   zwsCarbonMetric-coll]
  (for [m aceReusedFurniture-coll]
    {:carbonSaving {:itemCount m} ;;TODO just a placeholder for now
     :sourceRecord {:id m}}))