goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41151){
var map__41152 = p__41151;
var map__41152__$1 = cljs.core.__destructure_map(map__41152);
var m = map__41152__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41152__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41152__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41160_41466 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41161_41467 = null;
var count__41162_41468 = (0);
var i__41163_41469 = (0);
while(true){
if((i__41163_41469 < count__41162_41468)){
var f_41476 = chunk__41161_41467.cljs$core$IIndexed$_nth$arity$2(null,i__41163_41469);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41476], 0));


var G__41484 = seq__41160_41466;
var G__41485 = chunk__41161_41467;
var G__41486 = count__41162_41468;
var G__41487 = (i__41163_41469 + (1));
seq__41160_41466 = G__41484;
chunk__41161_41467 = G__41485;
count__41162_41468 = G__41486;
i__41163_41469 = G__41487;
continue;
} else {
var temp__5753__auto___41488 = cljs.core.seq(seq__41160_41466);
if(temp__5753__auto___41488){
var seq__41160_41493__$1 = temp__5753__auto___41488;
if(cljs.core.chunked_seq_QMARK_(seq__41160_41493__$1)){
var c__4679__auto___41494 = cljs.core.chunk_first(seq__41160_41493__$1);
var G__41495 = cljs.core.chunk_rest(seq__41160_41493__$1);
var G__41496 = c__4679__auto___41494;
var G__41497 = cljs.core.count(c__4679__auto___41494);
var G__41498 = (0);
seq__41160_41466 = G__41495;
chunk__41161_41467 = G__41496;
count__41162_41468 = G__41497;
i__41163_41469 = G__41498;
continue;
} else {
var f_41499 = cljs.core.first(seq__41160_41493__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41499], 0));


var G__41500 = cljs.core.next(seq__41160_41493__$1);
var G__41501 = null;
var G__41502 = (0);
var G__41503 = (0);
seq__41160_41466 = G__41500;
chunk__41161_41467 = G__41501;
count__41162_41468 = G__41502;
i__41163_41469 = G__41503;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41504 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41504], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41504)))?cljs.core.second(arglists_41504):arglists_41504)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41191_41530 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41192_41531 = null;
var count__41193_41532 = (0);
var i__41194_41533 = (0);
while(true){
if((i__41194_41533 < count__41193_41532)){
var vec__41217_41535 = chunk__41192_41531.cljs$core$IIndexed$_nth$arity$2(null,i__41194_41533);
var name_41536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41217_41535,(0),null);
var map__41220_41537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41217_41535,(1),null);
var map__41220_41538__$1 = cljs.core.__destructure_map(map__41220_41537);
var doc_41539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41220_41538__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41220_41538__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41536], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41540], 0));

if(cljs.core.truth_(doc_41539)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41539], 0));
} else {
}


var G__41546 = seq__41191_41530;
var G__41547 = chunk__41192_41531;
var G__41548 = count__41193_41532;
var G__41549 = (i__41194_41533 + (1));
seq__41191_41530 = G__41546;
chunk__41192_41531 = G__41547;
count__41193_41532 = G__41548;
i__41194_41533 = G__41549;
continue;
} else {
var temp__5753__auto___41554 = cljs.core.seq(seq__41191_41530);
if(temp__5753__auto___41554){
var seq__41191_41555__$1 = temp__5753__auto___41554;
if(cljs.core.chunked_seq_QMARK_(seq__41191_41555__$1)){
var c__4679__auto___41556 = cljs.core.chunk_first(seq__41191_41555__$1);
var G__41557 = cljs.core.chunk_rest(seq__41191_41555__$1);
var G__41558 = c__4679__auto___41556;
var G__41559 = cljs.core.count(c__4679__auto___41556);
var G__41560 = (0);
seq__41191_41530 = G__41557;
chunk__41192_41531 = G__41558;
count__41193_41532 = G__41559;
i__41194_41533 = G__41560;
continue;
} else {
var vec__41221_41569 = cljs.core.first(seq__41191_41555__$1);
var name_41570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41569,(0),null);
var map__41224_41571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41569,(1),null);
var map__41224_41572__$1 = cljs.core.__destructure_map(map__41224_41571);
var doc_41573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41224_41572__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41224_41572__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41570], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41574], 0));

if(cljs.core.truth_(doc_41573)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41573], 0));
} else {
}


var G__41575 = cljs.core.next(seq__41191_41555__$1);
var G__41576 = null;
var G__41577 = (0);
var G__41578 = (0);
seq__41191_41530 = G__41575;
chunk__41192_41531 = G__41576;
count__41193_41532 = G__41577;
i__41194_41533 = G__41578;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__41226 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41227 = null;
var count__41228 = (0);
var i__41229 = (0);
while(true){
if((i__41229 < count__41228)){
var role = chunk__41227.cljs$core$IIndexed$_nth$arity$2(null,i__41229);
var temp__5753__auto___41580__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___41580__$1)){
var spec_41582 = temp__5753__auto___41580__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41582)], 0));
} else {
}


var G__41584 = seq__41226;
var G__41585 = chunk__41227;
var G__41586 = count__41228;
var G__41587 = (i__41229 + (1));
seq__41226 = G__41584;
chunk__41227 = G__41585;
count__41228 = G__41586;
i__41229 = G__41587;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__41226);
if(temp__5753__auto____$1){
var seq__41226__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41226__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41226__$1);
var G__41588 = cljs.core.chunk_rest(seq__41226__$1);
var G__41589 = c__4679__auto__;
var G__41590 = cljs.core.count(c__4679__auto__);
var G__41591 = (0);
seq__41226 = G__41588;
chunk__41227 = G__41589;
count__41228 = G__41590;
i__41229 = G__41591;
continue;
} else {
var role = cljs.core.first(seq__41226__$1);
var temp__5753__auto___41592__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___41592__$2)){
var spec_41593 = temp__5753__auto___41592__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41593)], 0));
} else {
}


var G__41594 = cljs.core.next(seq__41226__$1);
var G__41595 = null;
var G__41596 = (0);
var G__41597 = (0);
seq__41226 = G__41594;
chunk__41227 = G__41595;
count__41228 = G__41596;
i__41229 = G__41597;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__41610 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__41611 = cljs.core.ex_cause(t);
via = G__41610;
t = G__41611;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__41263 = datafied_throwable;
var map__41263__$1 = cljs.core.__destructure_map(map__41263);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41263__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41263__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41263__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41264 = cljs.core.last(via);
var map__41264__$1 = cljs.core.__destructure_map(map__41264);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41264__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41264__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41264__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41265 = data;
var map__41265__$1 = cljs.core.__destructure_map(map__41265);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41265__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41265__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41265__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41266 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41266__$1 = cljs.core.__destructure_map(map__41266);
var top_data = map__41266__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41266__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41267 = phase;
var G__41267__$1 = (((G__41267 instanceof cljs.core.Keyword))?G__41267.fqn:null);
switch (G__41267__$1) {
case "read-source":
var map__41268 = data;
var map__41268__$1 = cljs.core.__destructure_map(map__41268);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41268__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41268__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41272 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__41272__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41272,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41272);
var G__41272__$2 = (cljs.core.truth_((function (){var fexpr__41274 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41274.cljs$core$IFn$_invoke$arity$1 ? fexpr__41274.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41274.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41272__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41272__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41272__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41272__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41275 = top_data;
var G__41275__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41275,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41275);
var G__41275__$2 = (cljs.core.truth_((function (){var fexpr__41276 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41276.cljs$core$IFn$_invoke$arity$1 ? fexpr__41276.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41276.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41275__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41275__$1);
var G__41275__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41275__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41275__$2);
var G__41275__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41275__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41275__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41275__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41275__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41277 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41277,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41277,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41277,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41277,(3),null);
var G__41281 = top_data;
var G__41281__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41281,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41281);
var G__41281__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41281__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41281__$1);
var G__41281__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41281__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41281__$2);
var G__41281__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41281__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41281__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41281__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41281__$4;
}

break;
case "execution":
var vec__41287 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41287,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41287,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41287,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41287,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41262_SHARP_){
var or__4253__auto__ = (p1__41262_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__41291 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41291.cljs$core$IFn$_invoke$arity$1 ? fexpr__41291.cljs$core$IFn$_invoke$arity$1(p1__41262_SHARP_) : fexpr__41291.call(null,p1__41262_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__41292 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41292__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41292,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41292);
var G__41292__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41292__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41292__$1);
var G__41292__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41292__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41292__$2);
var G__41292__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41292__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41292__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41292__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41292__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41267__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41311){
var map__41324 = p__41311;
var map__41324__$1 = cljs.core.__destructure_map(map__41324);
var triage_data = map__41324__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41386 = phase;
var G__41386__$1 = (((G__41386 instanceof cljs.core.Keyword))?G__41386.fqn:null);
switch (G__41386__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41401 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41402 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41403 = loc;
var G__41404 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41412_41636 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41413_41637 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41414_41638 = true;
var _STAR_print_fn_STAR__temp_val__41415_41639 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41414_41638);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41415_41639);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41297_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41297_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41413_41637);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41412_41636);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41401,G__41402,G__41403,G__41404) : format.call(null,G__41401,G__41402,G__41403,G__41404));

break;
case "macroexpansion":
var G__41419 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41420 = cause_type;
var G__41421 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41422 = loc;
var G__41423 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41419,G__41420,G__41421,G__41422,G__41423) : format.call(null,G__41419,G__41420,G__41421,G__41422,G__41423));

break;
case "compile-syntax-check":
var G__41425 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41426 = cause_type;
var G__41427 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41428 = loc;
var G__41429 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41425,G__41426,G__41427,G__41428,G__41429) : format.call(null,G__41425,G__41426,G__41427,G__41428,G__41429));

break;
case "compilation":
var G__41431 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41432 = cause_type;
var G__41433 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41434 = loc;
var G__41435 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41431,G__41432,G__41433,G__41434,G__41435) : format.call(null,G__41431,G__41432,G__41433,G__41434,G__41435));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41436 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41437 = symbol;
var G__41438 = loc;
var G__41439 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41440_41642 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41441_41643 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41442_41644 = true;
var _STAR_print_fn_STAR__temp_val__41443_41645 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41442_41644);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41443_41645);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41308_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41308_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41441_41643);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41440_41642);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41436,G__41437,G__41438,G__41439) : format.call(null,G__41436,G__41437,G__41438,G__41439));
} else {
var G__41444 = "Execution error%s at %s(%s).\n%s\n";
var G__41445 = cause_type;
var G__41446 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41447 = loc;
var G__41448 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41444,G__41445,G__41446,G__41447,G__41448) : format.call(null,G__41444,G__41445,G__41446,G__41447,G__41448));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41386__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
