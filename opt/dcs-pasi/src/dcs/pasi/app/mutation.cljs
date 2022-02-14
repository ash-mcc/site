(ns dcs.pasi.app.mutation
  (:require
   [cljs.core.async :as async]
   [cljs.spec.alpha :as s]
   [cljs-http.client :as http]
   [dcs.pasi.model :as model]))



(defn http-call [url ^String graphql response-handler]
  (async/go
    (let [response (async/<! (http/post
                              url
                              {:with-credentials? false
                               :headers           {"Content-type" "application/json"}
                               :body              (.stringify js/JSON (clj->js {:query     graphql
                                                                                :variables nil}))}))]
      (response-handler response))))