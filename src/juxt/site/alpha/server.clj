;; Copyright © 2021, JUXT LTD.

(ns juxt.site.alpha.server
  (:require
   [clojure.tools.logging :as log]
   [integrant.core :as ig]
   [ring.adapter.jetty :refer [run-jetty]]
   [juxt.site.alpha.handler :refer [make-handler]]))

(alias 'site (create-ns 'juxt.site.alpha))

(defmethod ig/init-key ::server [_ {::site/keys [xt-node port base-uri dynamic?] :as opts}]
  (log/infof "Starting Jetty server on port %d" port)
  (run-jetty
   ;; Dynamic mode helps in development where performance is less critical than
   ;; development speed. Dynamic mode allows functions to be re-evaled.
   (if dynamic?
     (fn [req] (let [h (#'make-handler opts)] (h req)))
     (make-handler opts))
   {:port port :join? false}))

(defmethod ig/halt-key! ::server [_ s]
  (when s
    (log/info "Stopping Jetty server")
    (.stop s)))
