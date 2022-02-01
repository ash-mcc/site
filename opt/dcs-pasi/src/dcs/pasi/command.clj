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
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/OpsAceToRefData.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/OpsStcmfToRefData.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/OpsFrshrToRefData.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/OpsOrg.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/OpsProcess.csv") url))

(apply pp/print-table (report/query :zwsCarbonMetric url))
(apply pp/print-table (report/query :aceFurnitureDescription url))
(apply pp/print-table (report/query :aceReusedFurniture url))
(apply pp/print-table (report/query :stcmfSource url))
(apply pp/print-table (report/query :stcmfDestination url))
(apply pp/print-table (report/query :stcmfIncomingFood url))
(apply pp/print-table (report/query :stcmfRedistributedFood url))
(apply pp/print-table (report/query :frshrMaterialCategory url))
(apply pp/print-table (report/query :frshrReusedMaterial url))
(apply pp/print-table (report/query :opsAceToRefData url))
(apply pp/print-table (report/query :opsStcmfToRefData url))
(apply pp/print-table (report/query :opsFrshrToRefData url))
(apply pp/print-table (report/query :opsOrg url))
(apply pp/print-table (report/query :opsProcess url))
(apply pp/print-table (report/query :opsWasteReduction url))
;;(apply pp/print-table (report/query :opsWasteReduction-stcmfOnly url))