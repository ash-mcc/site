(ns dcs.pasi.command
  (:require [clojure.pprint :as pp]
            [dcs.pasi.csv :as csv]
            [dcs.pasi.report :as report]))

(def ace-url "http://localhost:2021/pasi/ace/graphql")

(apply pp/print-table (report/aceFurnitureDescription ace-url))
(apply pp/print-table (report/aceReusedFurniture ace-url))

(apply pp/print-table (csv/apply-upserts (csv/csv-file->upsert-maps "opt/dcs-pasi/data/aceFurnitureDescription.csv") ace-url))
(apply pp/print-table (csv/apply-upserts (csv/csv-file->upsert-maps "opt/dcs-pasi/data/aceReusedFurniture.csv") ace-url))

