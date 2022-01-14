;; Based on Juxt's user.clj
;; Contains investigative code for dcs-pawr

;; Copyright © 2021, JUXT LTD.

(ns dcs.pasi.ace.repl-cmds
  (:require
   clojure.main
   [io.aviso.ansi :as ansi]
   [juxt.site.alpha.main :as main]
   [clojure.tools.logging :as log]
   [clojure.java.io :as io]
   [juxt.site.alpha.repl :refer :all]
   [integrant.core :as ig]
   [xtdb.api :as xt]
   [xtdb.sparql :as sparql]
   [clojure.pprint :as pp]))

(apply require clojure.main/repl-requires)

(alias 'http (create-ns 'juxt.http.alpha))
(alias 'pass (create-ns 'juxt.pass.alpha))
(alias 'site (create-ns 'juxt.site.alpha))

(defn delete-local-access-token
  "Until access tokens are stored in the database, restarting a server will clear
  tokens out of memory causing the local access token to be invalid. Delete it
  now to avoid any unhelpful 401 messages when using the CLI tool."
  []
  (let [f (io/file (System/getProperty "user.home") ".local/share/site/access-token.json")]
    (when (.exists f)
      (println "Deleting" (.getAbsolutePath f))
      (.delete f))))

(defn start []
  (println "Site by JUXT. Copyright (c) 2021, JUXT LTD.")
  (println "Compiling code, please wait...")
  (delete-local-access-token)
  (log/info "Starting development system")


  (alter-var-root #'main/profile (constantly :dev))
  (let [system-config (main/system-config)
        sys (ig/init system-config)]
    (alter-var-root #'main/system (constantly sys)))
  (log/info "System started and ready...")

  (println)
  (println "Welcome to Site!")
  (status)

  (println (ansi/yellow "Enter (help) for help"))

  :ready)


;; Github           
;;   https://github.com/juxt/site
;; local dir
;;   /Users/amc/workspace/ash-mcc/site
;; Make using the site tool easier (an as expected in many of the scripts)
;;   export PATH=$PATH:/Users/amc/workspace/ash-mcc/site/bin/
;; handy command line commands
;;   site get-token -u admin -p admin
;;   site config
;; HTTP endpoints
;;   http://localhost:2021
;;   http://localhost:2021/_site/graphiql/index.html?url=/_site/graphql
;;   http://localhost:2021/_site/graphiql/index.html?url=/dcs-pasi-ace/graphql
;;   http://localhost:2021/swagger-ui/index.html?url=/_site/apis/site/openapi.json
;; To build graphiql
;;   cd opt/graphiql  
;;   brew install yarn
;;   brew install nvm
;;   nvm install --lts
;;   nvm use --lts
;;   then build it as per its README...
;;   yarn build
;;   site put-static-site -d build -p _site/graphiql
;;   also Alex has started this documentation: https://juxtsite.netlify.app/learn/installation
;;
;; 


(start)

; (update-site-graphql) for use with Alex's alx/insite-console branch

(-> (xt-node)
    xt/db
    (xt/entity 
     "http://localhost:2021/dcs-pasi-ace/ent/ReusedFurniture/2022-01-01")
    pp/pprint)


(-> (xt-node)
    xt/db
    (xt/q
      (sparql/sparql->datalog 
       "SELECT ?s WHERE { ?s <http://localhost:2021/dcs-pasi-ace/pred/type> \"FurnitureDescription\" }")))

(-> (xt-node)
    xt/db
    (xt/q
     (sparql/sparql->datalog
      "SELECT ?s ?subcategory ?itemKg
       WHERE { ?s <http://localhost:2021/dcs-pasi-ace/pred/category> \"Soft\" ;
                  <http://localhost:2021/dcs-pasi-ace/pred/subcategory> ?subcategory ;
                  <http://localhost:2021/dcs-pasi-ace/pred/itemKg> ?itemKg . }"))
    pp/pprint)


;; A federated SPARQL query ...not working. My current `site` service ask for authentication
;;
;; SELECT ?s
;;   WHERE {
;;     SERVICE <http://localhost:2021/_xtdb/sparql> {
;;       ?s <http://localhost:2021/dcs-pasi-ace/pred/category> "Soft" 
;;     }
;; }          


;; A remote SPARQL query ...not working. Endpoint not found. 
;;
;; curl -v -H "Accept:application/sparql-results+json" http://localhost:2021/_xtdb/sparql?query=SELECT%20%3Fs%20WHERE%20%7B%20%3Fs%20%3Chttp%3A%2F%2Flocalhost%3A2021%2Fdcs-pasi-ace%2Fpred%2Fcategory%3E%20%22Soft%22%20%7D
;; i.e. SELECT ?s WHERE { ?s <http://localhost:2021/dcs-pasi-ace/pred/category> "Soft" }



(-> (xt-node)
    xt/db
    (xt/q `{:find  [e]
            :where [[e ~(keyword "http://localhost:2021/dcs-pasi-ace/pred/type") "ReusedFurniture"]]})
    pp/pprint)

(-> (xt-node)
    xt/db
    (xt/q
     (sparql/sparql->datalog
      "SELECT ?s WHERE { ?s <http://localhost:2021/dcs-pasi-ace/pred/type> \"ReusedFurniture\" }"))
    pp/pprint)