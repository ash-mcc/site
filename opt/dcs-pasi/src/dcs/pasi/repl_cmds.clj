;; Based on Juxt's user.clj
;; Contains investigative code for dcs-pawr

;; Copyright © 2021, JUXT LTD.

(ns dcs.pasi.repl-cmds
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


;; ----------------- PASI specific -----------------

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
;;   http://localhost:2021/_site/graphiql/index.html?url=/pasi/graphql
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

(help)

(status)

(pp/pprint (config))

(pp/pprint (types))

(pp/pprint (cat-type "OpenAPI"))

(pp/pprint (ls))


;; ----------------- authz specific -----------------

; Define an access-all-areas access rule
(def access-all-areas
  {:xt/id "http://localhost:2021/access-rule"
   ::site/description "A rule allowing access everything"
   ::site/type "Rule"
   ::pass/target []
   ::pass/effect ::pass/allow})

; Transact the access-all-areas access rule
(xt/submit-tx
 (xt-node)
 [[::xt/put access-all-areas]])

;; Remove the access-all-areas access rule
#_(xt/submit-tx
   (xt-node)
   [[::xt/delete "http://localhost:2021/access-rule"]])


;; ----------------- xtdb.api specific -----------------

(-> (xt-node)
    xt/db
    (xt/entity
     "pasi:ent/StcmfRedistributedFood/2021-01-29/2021-01-30/Used for human-food, bio-etc &amp; sanctuary")
    pp/pprint)

;; Remove all PASI ents
#_(-> (xt-node)
      xt/db
      (xt/q `{:find  [e]
              :where [[e ~(keyword "pasi:pred/type") any]]})
      (->>
       (map #(xt/submit-tx (xt-node) [[::xt/delete (first %)]]))))

;; Remove a specific ent (I'm sure that there's a better way of coding this)
#_(-> (xt-node)
      xt/db
      (xt/q `{:find  [e]
              :where [[e :xt/id "pasi:ent/OpsOpsWasteReduction/pasi:ent/StcmfRedistributedFood/2021-01-28/2021-01-29/Used for compost-indiv"]]})
      (->>
       (map #(xt/submit-tx (xt-node) [[::xt/delete (first %)]]))))


;; ----------------- Datalog specific -----------------

(-> (xt-node)
    xt/db
    (xt/q `{:find  [e]
            :where [[e ~(keyword "pasi:pred/type") "AceFurnitureDescription"]]})
    pp/pprint)

(-> (xt-node)
    xt/db
    (xt/q `{:find  [e fromDate toDate category subcategory itemCount]
            :where [[e ~(keyword "pasi:pred/type") "AceReusedFurniture"]
                    [e ~(keyword "pasi:pred/from") fromDate]
                    [e ~(keyword "pasi:pred/to") toDate]
                    [e ~(keyword "pasi:pred/itemCount") itemCount]
                    [e ~(keyword "pasi:pred/description") d]
                    [d ~(keyword "pasi:pred/category") category]
                    [d ~(keyword "pasi:pred/subcategory") subcategory]]})
    pp/pprint)

(-> (xt-node)
    xt/db
    (xt/q `{:find  [e]
            :where [[e ~(keyword "pasi:pred/type") any]]})
    pp/pprint)

;; Interestingly, it seems like we can use :pasi:pred/type instead of (keyword "pasi:pred/type") 
;; but this doesn't seem to work for IRIs like "https//myserver/mypath"
;; Perhaps they can't be respresented as a legal literal in Clojure?
;; I.e. :https//myserver/mypath is, perhaps, not legal
;; and instead we have to use (keyword "https//myserver/mypath")
;; But, I'm not sure that :pasi:pred/type won't be undesireably interpreted in some other Clojure context. 
(-> (xt-node)
    xt/db
    (xt/q '{:find  [e d]
            :where [[e :pasi:pred/from d]
                    (or [e :pasi:pred/type "StcmfRedistributedFood"]
                        [e :pasi:pred/type "AceReusedFurniture"])]})
    pp/pprint)


;; ----------------- SPARQL specific -----------------

;; Add the following into a CURL command if Site's auth hasn't been disabled
;; -u admin:admin 

;; I'm surfacing XTDB's SPARQL support, on Site using my site-mod-sparql.
;; But it doesn't yet support the GET method.

;; SPARQL query where:
;;   * the predicate is of the form <schema>:<path> 
;;   * the predicate isn't declared in a prefix
;; When called in-process it:
;;   * SUCCEEDS
;;
(-> (xt-node)
    xt/db
    (xt/q
     (sparql/sparql->datalog
      "SELECT ?s WHERE { ?s <pasi:pred/type> \"ZwsCarbonMetric\" }")))

;; SPARQL query where:
;;   * the predicate is of the form <schema>:<path> 
;;   * the predicate isn't declared in a prefix
;; When called over-HTTP it:
;;   * SUCCEEDS
;;
;; curl -v -H "Accept:application/sparql-results+json" --data-urlencode 'query=SELECT ?s WHERE {?s <pasi:pred/type> "ZwsCarbonMetric"}' http://localhost:2021/sparql


;; SPARQL query where:
;;   * the predicate is of the form <schema>:<path> 
;;   * the predicate isn't declared in a prefix
;; When called over-HTTP as a federated SPARQL query (from my Blazegraph app) it:
;;   * FAILS  (...I suspect that this is an error in Blazegraph)
;;
;; SELECT ?s 
;; WHERE {
;;   SERVICE <http://localhost:2021/sparql> {
;;     ?s <pasi:pred/type> "ZwsCarbonMetric"
;;   }
;; }

;; SPARQL query where:
;;   * the predicate is of the form <schema>:<path> 
;;   * the predicate is declared in a prefix
;; When called over-HTTP as a federated SPARQL query ()from my Blazegraph app) it:
;;   * SUCCEEDS
;;
;; PREFIX dummy: <dummy:blah/>
;; SELECT ?s 
;; WHERE {
;;   SERVICE <http://localhost:2021/sparql> {
;;     ?s <pasi:pred/type> "ZwsCarbonMetric"
;;   }
;; }


(-> (xt-node)
    xt/db
    (xt/q
     (sparql/sparql->datalog
      "PREFIX pasi: <pasi:pred/>
       SELECT ?s ?wasteStream ?carbonWeighting
       WHERE { ?s pasi:type \"ZwsCarbonMetric\" ;
                  pasi:wasteStream ?wasteStream ;
                  pasi:carbonWeighting ?carbonWeighting }"))
    pp/pprint)

(-> (xt-node)
    xt/db
    (xt/q
     (sparql/sparql->datalog
      "PREFIX pasi: <pasi:pred/>
       SELECT ?s ?dt
       WHERE { ?s pasi:destination/pasi:type ?dt }"))
    pp/pprint)

;; GROUP BY doesn't seem to be supported: 
;;   No implementation of method: :rdf->clj of protocol: #'xtdb.rdf/RDFToClojure 
;;   found for class: org.eclipse.rdf4j.query.algebra.Group
(-> (xt-node)
    xt/db
    (xt/q
     (sparql/sparql->datalog
      "PREFIX pasi: <pasi:pred/>
       SELECT DISTINCT ?s (COUNT(?s) AS ?c)
       WHERE {
        ?s pasi:type ?type 
       }
       GROUP BY ?s"))
    pp/pprint)