(ns dcs.pasi.command
  (:require [clojure.pprint :as pp]
            [dcs.pasi.csv :as csv]
            [dcs.pasi.report :as report]))

(def url "http://localhost:2021/pasi/graphql")

(apply pp/print-table (report/zwsCarbonMetric url))
(apply pp/print-table (report/aceFurnitureDescription url))
(apply pp/print-table (report/aceReusedFurniture url))

(apply pp/print-table (csv/apply-upserts (csv/csv-file->upsert-maps "opt/dcs-pasi/data/ZwsCarbonMetric.csv") url))
(apply pp/print-table (csv/apply-upserts (csv/csv-file->upsert-maps "opt/dcs-pasi/data/AceFurnitureDescription.csv") url))
(apply pp/print-table (csv/apply-upserts (csv/csv-file->upsert-maps "opt/dcs-pasi/data/AceReusedFurniture.csv") url))

