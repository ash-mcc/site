(ns dcs.pasi.model)


#?(:clj
   (defn decimal [s] (bigdec s))
   :cljs
   (defn decimal [s] (js/parseFloat s)))


(def queries
  {:zwsCarbonMetric         {:graphql "query {
                  zwsCarbonMetric {
                    id
                    wasteStream
                    carbonWeighting
                  }
                }"
                             :results-parser identity
                             :field-order [:id :wasteStream :carbonWeighting]}
   :aceFurnitureDescription {:graphql "query {
                   aceFurnitureDescription {
                     id
                     category
                     subcategory
                     itemKg
                   }
                 }"
                             :results-parser identity
                             :field-order [:id :category :subcategory :itemKg]}
   :aceReusedFurniture      {:graphql       "query {
                   aceReusedFurniture {
                     id
                     from
                     to
                     description {
                       category
                       subcategory
                     }
                     itemCount
                   }
                 }"
                             :results-parser (fn [coll]
                                              (map #(assoc %
                                                           :category (get-in % [:description :category])
                                                           :subcategory (get-in % [:description :subcategory]))
                                                   coll))
                             :field-order [:id :from :to :category :subcategory :itemCount]}
   :stcmfSource             {:graphql "query {
                   stcmfSource {
                     id
                     name
                   }
                 }"
                             :results-parser identity
                             :field-order [:id :name]}
   :stcmfDestination        {:graphql "query {
                   stcmfDestination {
                     id
                     name
                   }
                 }"
                             :results-parser identity
                             :field-order [:id :name]}
   :stcmfIncomingFood       {:graphql "query {
                   stcmfIncomingFood {
                     id
                     from
                     to
                     source {
                       name
                     }
                     batchKg
                   }
                 }"
                             :results-parser (fn [coll]
                                              (map #(assoc %
                                                           :source (get-in % [:source :name]))
                                                   coll))
                             :field-order [:id :from :to :source :batchKg]}
   :stcmfRedistributedFood  {:graphql "query {
                   stcmfRedistributedFood {
                     id
                     from
                     to
                     destination {
                       name
                     }
                     batchKg
                   }
                 }"
                             :results-parser (fn [coll]
                                              (map #(assoc %
                                                           :destination (get-in % [:destination :name]))
                                                   coll))
                             :field-order [:id :from :to :destination :batchKg]}
   :frshrMaterialCategory   {:graphql "query {
                   frshrMaterialCategory {
                     id
                     name
                   }
                 }"
                             :results-parser identity
                             :field-order [:id :name]}
   :frshrReusedMaterial     {:graphql "query {
                   frshrReusedMaterial {
                     id
                     from
                     to
                     material {
                       name
                     }
                     batchKg
                   }
                 }"
                             :results-parser (fn [coll]
                                              (map #(assoc %
                                                           :material (get-in % [:material :name]))
                                                   coll))
                             :field-order [:id :from :to :material :batchKg]}
   :stcilBin   {:graphql "query {
                   stcilBin {
                     id
                     name
                   }
                 }"
                             :results-parser identity
                             :field-order [:id :name]}
   :stcilKerbsideRecycling     {:graphql "query {
                   stcilKerbsideRecycling {
                     id
                     from
                     to
                     bin {
                       name
                     }
                     route
                     batchTonnes
                   }
                 }"
                             :results-parser (fn [coll]
                                               (map #(assoc %
                                                            :bin (get-in % [:bin :name]))
                                                    coll))
                             :field-order [:id :from :to :bin :route :batchTonnes]}
   :dcsAceToRefData         {:graphql "query {
                   dcsAceToRefData {
                     id
                     description {
                       category
                       subcategory
                     }
                     refMaterial {
                       wasteStream
                     }
                     fraction
                   }
                 }"
                             :results-parser (fn [coll]
                                              (map #(assoc %
                                                           :category (get-in % [:description :category])
                                                           :subcategory (get-in % [:description :subcategory])
                                                           :wasteStream (get-in % [:refMaterial :wasteStream]))
                                                   coll))
                             :field-order [:id :category :subcategory :wasteStream :fraction]}
   :dcsStcmfToRefData       {:graphql       "query {
                   dcsStcmfToRefData {
                     id
                     destination {
                       name
                     }
                     refProcess {
                       name
                     }
                     refMaterial {
                       wasteStream
                     }
                     fraction
                   }
                 }"
                             :results-parser (fn [coll]
                                              (map #(assoc %                       
                                                           :destination (get-in % [:destination :name])        
                                                           :refProcess (get-in % [:refProcess :name])         
                                                           :wasteStream (get-in % [:refMaterial :wasteStream]))
                                                   coll))
                             :field-order [:id :destination :refProcess :wasteStream :fraction]}
   :dcsFrshrToRefData       {:graphql "query {
                   dcsFrshrToRefData {
                     id
                     material {
                       name
                     }
                     refProcess {
                       name
                     }
                     refMaterial {
                       wasteStream
                     }
                     fraction
                   }
                 }"
                             :results-parser (fn [coll]
                                              (map #(assoc %
                                                           :material (get-in % [:material :name])
                                                           :refProcess (get-in % [:refProcess :name])
                                                           :wasteStream (get-in % [:refMaterial :wasteStream]))
                                                   coll))
                             :field-order [:id :material :refProcess :wasteStream :fraction]}
   :dcsStcilToRefData       {:graphql "query {
                   dcsStcilToRefData {
                     id
                     bin {
                       name
                     }
                     refProcess {
                       name
                     }
                     refMaterial {
                       wasteStream
                     }
                     fraction
                   }
                 }"
                             :results-parser (fn [coll]
                                               (map #(assoc %
                                                            :bin (get-in % [:bin :name])
                                                            :refProcess (get-in % [:refProcess :name])
                                                            :wasteStream (get-in % [:refMaterial :wasteStream]))
                                                    coll))
                             :field-order [:id :bin :refProcess :wasteStream :fraction]}
   :dcsOrg                  {:graphql "query {
                   dcsOrg {
                     id
                     abbr
                     name
                     qid
                   }
                 }"
                             :results-parser identity
                             :field-order [:id :abbr :name :qid]}
   :dcsProcess              {:graphql "query {
                   dcsProcess {
                     id
                     name
                   }
                 }"
                             :results-parser identity
                             :field-order [:id :name]}
   :dcsWasteReduction       {:graphql        "query {
                   dcsWasteReduction {
                     __typename
                     ... on AceReusedFurniture {
                       id
                       from
                       to
                       itemCount
                       description {
                         category
                         subcategory
                         itemKg
                         refDataConnectors {
                           fraction
                           refMaterial {
                             wasteStream
                             carbonWeighting
                           }
                           refProcess {
                             name
                           }
                           enabler {
                             name
                           }
                         }
                       }
                     }
                     ... on StcmfRedistributedFood {
                       id
                       from
                       to
                       batchKg
                       destination {
                         name
                         refDataConnectors {
                           fraction
                           refMaterial {
                             wasteStream
                             carbonWeighting
                           }
                           refProcess {
                             name
                           }
                           enabler {
                             name
                           }                        
                         }
                       }
                     }
                     ... on FrshrReusedMaterial {
                       id
                       from
                       to
                       batchKg
                       material {
                         name
                         refDataConnectors {
                           fraction
                           refMaterial {
                             wasteStream
                             carbonWeighting
                           }
                           refProcess {
                             name
                           }
                           enabler {
                             name
                           }                        
                         }
                       }
                     }
                     ... on StcilKerbsideRecycling {
                       id
                       from
                       to
                       batchTonnes
                       bin {
                         name
                         refDataConnectors {
                           fraction
                           refMaterial {
                             wasteStream
                             carbonWeighting
                           }
                           refProcess {
                             name
                           }
                           enabler {
                             name
                           }                        
                         }
                       }
                       route
                     }
                   }  
                 }"
                             :results-parser (fn [coll]
                                               (->> coll
                                                    (map (fn [m]
                                                           (let [typename (:__typename m)]
                                                             (when (not (contains? #{"AceReusedFurniture" "StcmfRedistributedFood" "FrshrReusedMaterial" "StcilKerbsideRecycling"} typename))
                                                               (throw (ex-info (str "Unexpected typename: " typename) {})))
                                                             (let [m2               (condp = typename
                                                                                      "AceReusedFurniture" (assoc m
                                                                                                                  :furnitureCategory (get-in m [:description :category])
                                                                                                                  :furnitureSubcategory (get-in m [:description :subcategory])
                                                                                                                  :furnitureItemKg (decimal (get-in m [:description :itemKg]))
                                                                                                                  :furnitureItemCount (decimal (:itemCount m)))
                                                                                      "StcmfRedistributedFood" (assoc m
                                                                                                                      :foodDestination (get-in m [:destination :name]))
                                                                                      "FrshrReusedMaterial" (assoc m
                                                                                                                   :materialCategory (get-in m [:material :name]))
                                                                                      "StcilKerbsideRecycling" (assoc m
                                                                                                                      :binType (get-in m [:bin :name])))
                                                                   m3               (assoc m2
                                                                                           :batchKg (condp = typename
                                                                                                      "AceReusedFurniture" (* (:furnitureItemKg m2)
                                                                                                                              (:furnitureItemCount m2))
                                                                                                      "StcmfRedistributedFood" (decimal (:batchKg m2))
                                                                                                      "FrshrReusedMaterial" (decimal (:batchKg m2))
                                                                                                      "StcilKerbsideRecycling" (* (decimal (:batchTonnes m2))
                                                                                                                                  1000)))
                                                                   refdata-mappings (condp = typename
                                                                                      "AceReusedFurniture" (get-in m3 [:description :refDataConnectors])
                                                                                      "StcmfRedistributedFood" (get-in m3 [:destination :refDataConnectors])
                                                                                      "FrshrReusedMaterial" (get-in m3 [:material :refDataConnectors])
                                                                                      "StcilKerbsideRecycling" (get-in m3 [:bin :refDataConnectors]))]
                                                               (for [refdata-mapping refdata-mappings]
                                                                 (let [m4 (assoc m3
                                                                                 :enabler (get-in refdata-mapping [:enabler :name])
                                                                                 :process (get-in refdata-mapping [:refProcess :name])
                                                                                 :wasteStream (get-in refdata-mapping [:refMaterial :wasteStream])
                                                                                 :batchKg (* (:batchKg m3)
                                                                                             (decimal (:fraction refdata-mapping))))]
                                                                   (assoc m4
                                                                          :carbonSavingCo2eKg (* (:batchKg m4)
                                                                                                 (decimal (get-in refdata-mapping [:refMaterial :carbonWeighting]))))))))))
                                                    flatten))
                             :field-order    [:from :to :enabler :process :wasteStream :batchKg :carbonSavingCo2eKg :furnitureCategory :furnitureSubcategory :foodDestination :materialCategory :binType :route]}})