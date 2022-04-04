(ns dcs.pasi.command
  (:require [clojure.pprint :as pp]
            [dcs.pasi.csv :as csv]
            [dcs.pasi.mutation :as mutation]
            [dcs.pasi.report :as report]))

(def url "http://localhost:2021/pasi/graphql")

(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/ZwsCarbonMetric.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/AceFurnitureDescription.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/AceReusedFurniture.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/StcmfSource.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/StcmfDestination.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/StcmfIncomingFood.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/StcmfRedistributedFood.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/FrshrMaterialCategory.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/FrshrReusedMaterial.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/StcilBin.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/StcilKerbsideRecycling.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/DcsAceToRefData.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/DcsStcmfToRefData.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/DcsFrshrToRefData.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/DcsStcilToRefData.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/DcsOrg.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/DcsProcess.csv") url))

(apply pp/print-table (report/query :zwsCarbonMetric url))
(apply pp/print-table (report/query :aceFurnitureDescription url))
(apply pp/print-table (report/query :aceReusedFurniture url))
(apply pp/print-table (report/query :stcmfSource url))
(apply pp/print-table (report/query :stcmfDestination url))
(apply pp/print-table (report/query :stcmfIncomingFood url))
(apply pp/print-table (report/query :stcmfRedistributedFood url))
(apply pp/print-table (report/query :frshrMaterialCategory url))
(apply pp/print-table (report/query :frshrReusedMaterial url))
(apply pp/print-table (report/query :stcilBin url))
(apply pp/print-table (report/query :stcilKerbsideRecycling url))
(apply pp/print-table (report/query :dcsAceToRefData url))
(apply pp/print-table (report/query :dcsStcmfToRefData url))
(apply pp/print-table (report/query :dcsFrshrToRefData url))
(apply pp/print-table (report/query :dcsStcilToRefData url))
(apply pp/print-table (report/query :dcsOrg url))
(apply pp/print-table (report/query :dcsProcess url))
(apply pp/print-table (report/query :dcsWasteReduction url))
;;(apply pp/print-table (report/query :dcsWasteReduction-stcmfOnly url))

(let [[header-row rows] (report/query :stcilKerbsideRecycling url)
      rows              (take 5 rows)]
  (pp/print-table header-row rows))


(->> (report/query :dcsWasteReduction url)
    second
    (filter #(and
              (= "Chair, Kitchen, Dining or Wooden" (:furnitureSubcategory %))
              (= 55 (:itemCount %)))))





{:__typename "AceReusedFurniture",
 :batchKg 385.0,
 :carbonSavingCo2eKg 3349.50,
 :enabler "Alloa Community Enterprises",
 :fraction 1,
  :refMaterial {:carbonWeighting "8.7", :wasteStream "Wood"},
                 :refProcess {:name "reusing"},
 :enabler "Alloa Community Enterprises",
 :from "2017-03-01",
 :furnitureCategory "Furniture ",
 :furnitureItemCount 55,
 :furnitureItemKg 7.0,
 :furnitureSubcategory "Chair, Kitchen, Dining or Wooden",
 :id "pasi:ent/AceReusedFurniture/2017-03-01/2018-02-28/Furniture /Chair, Kitchen, Dining or Wooden/Wood",
 :itemCount 55,
 :latitude "56.122913",
 :longitude "-3.781621",
 :process "reusing",
 :to "2018-02-28",
 :wasteStream "Wood"}