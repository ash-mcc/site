(ns dcs.pasi.command
  (:require [clojure.pprint :as pp]
            [dcs.pasi.csv :as csv]
            [dcs.pasi.report :as report]))

(def ace-url "http://localhost:2021/pasi/ace/graphql")

(csv/upsert-ace-furniture-description ace-url "Soft" "Pillow" 0.35)

(apply pp/print-table (report/ace-furniture-descriptions ace-url))
;(apply pp/print-table (report/ace-reused-furniture ace-url))