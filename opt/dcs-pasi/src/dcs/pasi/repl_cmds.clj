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
   [clojure.pprint :as pp])
  (:import  java.math.RoundingMode))

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

;; Alternatively, start via...
;;
;;  $ cd site
;;  $ bin/site-server
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

; Define and transact access-all-areas access rules
(doseq [id ["http://localhost:2021/access-rule"
            "http://localhost:2031/access-rule"
            "http://192.168.1.106:2021/access-rule"
            "http://192.168.1.106:2031/access-rule"]]
  (let [access-all-areas
        {:xt/id            id
         ::site/description "A rule allowing access everything"
         ::site/type        "Rule"
         ::pass/target      []
         ::pass/effect      ::pass/allow}]

    ;; Transact the access-all-areas access rule
    (xt/submit-tx
     (xt-node)
     [[::xt/put access-all-areas]])))


;; Remove the access-all-areas access rule
#_(xt/submit-tx
   (xt-node)
   [[::xt/delete "http://localhost:2021/access-rule"]])


;; ----------------- xtdb.api specific -----------------

(-> (xt-node)
    xt/db
    (xt/entity
     "pasi:ent/DcsAceToRefData/Soft Furniture/Mattress, single/Textiles and Footwear")
    pp/pprint)

;; Remove all PASI ents
#_(-> (xt-node)
      xt/db
      (xt/q `{:find  [e]
              :where [[e ~(keyword "pasi:pred/type") any]]})
      (->>
       (map #(xt/submit-tx (xt-node) [[::xt/delete (first %)]]))))

;; Remove a specific _type_ of ent (I'm sure that there's a better way of coding this)
#_(-> (xt-node)
      xt/db
      (xt/q `{:find  [e]
              :where [[e :pasi:pred/type "StcilKerbsideRecycling"]]}) 
      (->>
       (map #(xt/submit-tx (xt-node) [[::xt/delete (first %)]]))))

;; Remove a specific ent _by id_ (I'm sure that there's a better way of coding this)
#_(-> (xt-node)
      xt/db
      (xt/q `{:find  [e]
              :where [[e :xt/id "pasi:ent/DcsWasteReduction/pasi:ent/AceReusedFurniture/2018-03-01/2019-03-01/Furniture/Chair, Kitchen, Dining or Wooden"]]})
      (->>
       (map #(xt/submit-tx (xt-node) [[::xt/delete (first %)]]))))

;; Remove a specific ent _by attributes_ (I'm sure that there's a better way of coding this)
#_(-> (xt-node)
      xt/db
      (xt/q `{:find  [?e]
              :where [[?e :pasi:pred/type "AceReusedFurniture"]
                      [?e :pasi:pred/from "2022-03-10"]]})
      (->>
       (map #(xt/submit-tx (xt-node) [[::xt/delete (first %)]]))))


;; ----------------- Datalog specific -----------------

(-> (xt-node)
    xt/db
    (xt/q `{:find  [?e ?route]
            :where [[?e :pasi:pred/type "StcilKerbsideRecycling"]
                    [?e :pasi:pred/route ?route]]
            :limit 10})
    pp/pprint)

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
    (xt/q `{:find  [?e ?category ?subcategory ?itemCount]
            :where [[?e :pasi:pred/type "AceReusedFurniture"]
                    [?e :pasi:pred/from "2020-12-01"]
                    [?e :pasi:pred/category ?category]
                    [?e :pasi:pred/subcategory ?subcategory]
                    [?e :pasi:pred/itemCount ?itemCount]]
            :limit 10}))

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
;; When called over-HTTP as a federated SPARQL query (from my Blazegraph app) it:
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




;; This yields an error
;;   No implementation of method: :rdf->clj of protocol: #'xtdb.rdf/RDFToClojure 
;;   found for class: org.eclipse.rdf4j.query.algebra.SingletonSet
(-> (xt-node)
    xt/db
    (xt/q
     (sparql/sparql->datalog
      "SELECT ?a ?b
       WHERE {
        BIND(1 AS ?a)
        BIND(2 AS ?b)
       }")))

;; This yields an error
;;   Find refers to unknown variable: ?syn1
(-> (xt-node)
    xt/db
    (xt/q
     (sparql/sparql->datalog
      "PREFIX pasi: <pasi:pred/>
       SELECT ?actu1 (?actu1 AS ?syn1)
       WHERE {
         ?actu1 pasi:type \"AceReusedFurniture\" .
       }")))


;; ----------------- SPARQL specific for an initial note on the PASI work -----------------

(-> (xt-node)
    xt/db
    (xt/q
     (sparql/sparql->datalog
      "PREFIX pasi: <pasi:pred/>
       SELECT DISTINCT ?typename
       WHERE { 
         ?_ pasi:type ?typename 
       }
       ORDER BY ?typename"))
    distinct ;; eek, the ORDER BY seems to cancel out the DISTINCT so re-apply a distinct (but in Clojure)
    (->>
     (map #(zipmap [:typename] %))
     pp/print-table))

(defn round [x scale]
  (.setScale (bigdec x) scale RoundingMode/HALF_EVEN))

(-> (xt-node)
    xt/db
    (xt/q
     (sparql/sparql->datalog
      "PREFIX pasi: <pasi:pred/>
       SELECT ?from ?to ?enabler ?process ?wasteStream ?batchKg ?carbonSavingCo2eKg ?furnitureCategory ?furnitureSubcategory
       WHERE {
         ?aceReusedFurniture pasi:type \"AceReusedFurniture\" ;
                             pasi:from ?from ;
                             pasi:to ?to ;
                             pasi:itemCount ?itemCount ;
                             pasi:description ?description .
         ?description pasi:category ?furnitureCategory ;
                      pasi:subcategory ?furnitureSubcategory ;
                      pasi:itemKg ?itemKg .
         ?dcsAceToRefData pasi:type \"DcsAceToRefData\" ;
                          pasi:description ?description ;
                          pasi:fraction ?fraction ;
                          pasi:refMaterial/pasi:wasteStream ?wasteStream ;
                          pasi:refMaterial/pasi:carbonWeighting ?carbonWeighting ;
                          pasi:refProcess/pasi:name ?process ;
                          pasi:enabler/pasi:name ?enabler.
          BIND((?itemCount * ?itemKg) AS ?origBatchKg)
          BIND((?origBatchKg * ?fraction) AS ?batchKg)
          BIND((?batchKg * ?carbonWeighting) AS ?carbonSavingCo2eKg)
       }
       ORDER BY ?from ?to ?enabler ?process ?wasteStream"))
    distinct ;; eek, the ORDER BY seems to cancel out the DISTINCT so re-apply a distinct (but in Clojure)
    (->>
     (map #(replace {:xtdb.sparql/optional nil} %)) ;; map internal values to human oriented values
     (map #(zipmap [:from :to :enabler :process :wasteStream :batchKg :carbonSavingCo2eKg :furnitureCategory :furnitureSubcategory] %))
     (pp/print-table [:from :to :enabler :process :wasteStream :batchKg :carbonSavingCo2eKg :furnitureCategory :furnitureSubcategory])))

(-> (xt-node)
    xt/db
    (xt/q
     (sparql/sparql->datalog
      "PREFIX pasi: <pasi:pred/>
       SELECT ?enabler ?from ?to ?batchKg ?foodDestination ?ref_process ?ref_wasteStream ?ref_carbonSavingCo2eKg 
       WHERE {
         ?stcmfRedistributedFood pasi:type \"StcmfRedistributedFood\" ;
                             pasi:from ?from ;
                             pasi:to ?to ;
                             pasi:batchKg ?origBatchKg ;
                             pasi:destination ?destination .
         ?destination pasi:name ?foodDestination .
         ?dcsAceToRefData pasi:type \"DcsStcmfToRefData\" ;
                          pasi:destination ?destination ;
                          pasi:fraction ?fraction ;
                          pasi:refMaterial/pasi:wasteStream ?ref_wasteStream ;
                          pasi:refMaterial/pasi:carbonWeighting ?carbonWeighting ;
                          pasi:refProcess/pasi:name ?ref_process ;
                          pasi:enabler/pasi:name ?enabler.
          BIND((?origBatchKg * ?fraction) AS ?batchKg)
          BIND((?batchKg * ?carbonWeighting) AS ?ref_carbonSavingCo2eKg)
       }
       ORDER BY ?enabler ?from ?to"))
    distinct ;; eek, the ORDER BY seems to cancel out the DISTINCT so re-apply a distinct (but in Clojure)
    (->>
     ;(map #(replace {:xtdb.sparql/optional nil} %)) ;; map internal values to human oriented values
     (map #(zipmap [:enabler :from :to :batchKg :foodDestination :ref_process :ref_wasteStream :ref_carbonSavingCo2eKg] %))
     (map #(assoc %
                  :batchKg (round (:batchKg %) 2)
                  :ref_carbonSavingCo2eKg (round (:ref_carbonSavingCo2eKg %) 2)))
     (pp/print-table [:enabler :from :to :batchKg :foodDestination :ref_process :ref_wasteStream :ref_carbonSavingCo2eKg])))

;; But I can't get a UNION of the two queries above (when their ?value names have been sync'd), to work  :-(


;; ----------------- Monkey-patch XTDB to workaround it not correctly differentiating between an IRI and a value -----------------

;; For background see the Github issue: 
;;    SPARQL-over-http should be able to return string values
;;    https://github.com/xtdb/xtdb/issues/1686

;; The bad decision point is at:
;;    https://github.com/xtdb/xtdb/blame/e2f51ed99fc2716faa8ad254c0b18166c937b134/labs/rdf/src/xtdb/rdf.clj#L237

;; The following monkey-patch assumes that all IRIs will start with the string   pasi:
;;    Of course, that doesn't generally hold but it does hold for most of our PASI examples. 

;; Run this to have the REPL enter the namespace
(ns xtdb.rdf)

;; Now copy the below defn into the REPL and <enter>
;; to monkey-patch the function
(defn ^org.eclipse.rdf4j.model.Value clj->rdf [x]
  #_(let [s "\n\n*** clj->rdf ***\n"
        s (str s "x = " x "\n")
        s (str s "(c/valid-id? x) = " (c/valid-id? x) "\n")
        s (str s "\n\n")]
    (log/info s))
  (let [factory (SimpleValueFactory/getInstance)]
    (if (and (c/valid-id? x) 
             (str/starts-with? x "pasi:")) ;; monkey-patched !
      (if (and (keyword? x) (= "_" (namespace x)))
        (.createBNode factory (name x))
        (.createIRI factory (if (and (keyword? x) (namespace x))
                              (subs (str x) 1)
                              (str x))))
      (Literals/createLiteral factory x))))

;; After applying the above monkey-patch, I used successfully ran the 
;; following federated SPARQL queries (from my Blazegraph app)


;;;; For Alloa Community Enterprises (a nil category/subcategory is causing a failure so ignoring category/subcategory for now)
;;
;; PREFIX pasi: <pasi:pred/>
;; SELECT ?iri ?from ?to ?itemKg ?itemCount
;; WHERE {
;; 	SERVICE <http://localhost:2021/sparql> {
;; 		?iri pasi:type "AceReusedFurniture";
;;              pasi:from ?from;
;;              pasi:to ?to;
;;              pasi:description/pasi:itemKg ?itemKg;
;;              pasi:itemCount ?itemCount
;; 	}
;; }


;;;; For Stirling Community Food
;;
;; PREFIX dummy: <dummy:blah/>
;; SELECT ?iri ?from ?to ?destination ?batchKg
;; WHERE {
;; 	SERVICE <http://localhost:2021/sparql> {
;; 		?iri <pasi:pred/type> "StcmfRedistributedFood";
;;              <pasi:pred/from> ?from;
;;              <pasi:pred/to> ?to;
;;              <pasi:pred/destination>/<pasi:pred/name> ?destination;
;;              <pasi:pred/batchKg> ?batchKg
;;	}
;; }


;;;; For The Fair Share (a nil material name is causing a failure so just return the material IRI for now)
;;
;; PREFIX dummy: <dummy:blah/>
;; SELECT ?iri ?from ?to ?materialIri ?batchKg
;; WHERE {
;; 	SERVICE <http://localhost:2021/sparql> {
;; 		?iri <pasi:pred/type> "FrshrReusedMaterial";
;;              <pasi:pred/from> ?from;
;;              <pasi:pred/to> ?to;
;;              <pasi:pred/material> ?materialIri;
;;              <pasi:pred/batchKg> ?batchKg
;; 	}
;; }






;; ----------------- New stuff... -----------------

