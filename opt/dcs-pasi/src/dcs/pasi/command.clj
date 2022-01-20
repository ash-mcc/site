(ns dcs.pasi.command
  (:require [clojure.pprint :as pp]
            [dcs.pasi.csv :as csv]
            [dcs.pasi.mutation :as mutation]
            [dcs.pasi.report :as report]
            [dcs.pasi.ops :as ops]))

(def url "http://localhost:2021/pasi/graphql")

(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/ZwsCarbonMetric.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/AceFurnitureDescription.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/AceReusedFurniture.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/StcmfSource.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/StcmfDestination.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/StcmfIncomingFood.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/StcmfRedistributedFood.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/OpsAceToRefData.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/OpsStcmfToRefData.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/OpsOrg.csv") url))
(apply pp/print-table (mutation/apply-mutations (csv/csv-file->upsert-maps "opt/dcs-pasi/data/OpsProcess.csv") url))


(apply pp/print-table (mutation/apply-mutations (ops/report->delete-maps 
                                                 (second (report/opsWasteReduction url)) "OpsWasteReduction") 
                                                url))
(apply pp/print-table (mutation/apply-mutations (ops/ace-waste-reduction-related-reports->upsert-maps
                                                 (second (report/aceReusedFurniture url))
                                                 (second (report/aceFurnitureDescription url))
                                                 (second (report/opsAceToRefData url))
                                                 (second (report/zwsCarbonMetric url))) 
                                                url))


(apply pp/print-table (report/zwsCarbonMetric url))
(apply pp/print-table (report/aceFurnitureDescription url))
(apply pp/print-table (report/aceReusedFurniture url))
(apply pp/print-table (report/stcmfSource url))
(apply pp/print-table (report/stcmfDestination url))
(apply pp/print-table (report/stcmfIncomingFood url))
(apply pp/print-table (report/stcmfRedistributedFood url))
(apply pp/print-table (report/opsAceToRefData url))
(apply pp/print-table (report/opsStcmfToRefData url))
(apply pp/print-table (report/opsOrg url))
(apply pp/print-table (report/opsProcess url))
(apply pp/print-table (report/opsWasteReduction url))