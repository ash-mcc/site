goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45533 = arguments.length;
var i__4865__auto___45534 = (0);
while(true){
if((i__4865__auto___45534 < len__4864__auto___45533)){
args__4870__auto__.push((arguments[i__4865__auto___45534]));

var G__45535 = (i__4865__auto___45534 + (1));
i__4865__auto___45534 = G__45535;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq44832){
var G__44833 = cljs.core.first(seq44832);
var seq44832__$1 = cljs.core.next(seq44832);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44833,seq44832__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__44838 = cljs.core.seq(sources);
var chunk__44839 = null;
var count__44840 = (0);
var i__44841 = (0);
while(true){
if((i__44841 < count__44840)){
var map__44864 = chunk__44839.cljs$core$IIndexed$_nth$arity$2(null,i__44841);
var map__44864__$1 = cljs.core.__destructure_map(map__44864);
var src = map__44864__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44864__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44864__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44864__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44864__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44865){var e_45544 = e44865;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45544);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45544.message)].join('')));
}

var G__45546 = seq__44838;
var G__45547 = chunk__44839;
var G__45548 = count__44840;
var G__45549 = (i__44841 + (1));
seq__44838 = G__45546;
chunk__44839 = G__45547;
count__44840 = G__45548;
i__44841 = G__45549;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44838);
if(temp__5753__auto__){
var seq__44838__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44838__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44838__$1);
var G__45550 = cljs.core.chunk_rest(seq__44838__$1);
var G__45551 = c__4679__auto__;
var G__45552 = cljs.core.count(c__4679__auto__);
var G__45553 = (0);
seq__44838 = G__45550;
chunk__44839 = G__45551;
count__44840 = G__45552;
i__44841 = G__45553;
continue;
} else {
var map__44866 = cljs.core.first(seq__44838__$1);
var map__44866__$1 = cljs.core.__destructure_map(map__44866);
var src = map__44866__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44866__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44866__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44866__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44866__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44867){var e_45554 = e44867;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45554);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45554.message)].join('')));
}

var G__45555 = cljs.core.next(seq__44838__$1);
var G__45556 = null;
var G__45557 = (0);
var G__45558 = (0);
seq__44838 = G__45555;
chunk__44839 = G__45556;
count__44840 = G__45557;
i__44841 = G__45558;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__44868 = cljs.core.seq(js_requires);
var chunk__44869 = null;
var count__44870 = (0);
var i__44871 = (0);
while(true){
if((i__44871 < count__44870)){
var js_ns = chunk__44869.cljs$core$IIndexed$_nth$arity$2(null,i__44871);
var require_str_45561 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45561);


var G__45562 = seq__44868;
var G__45563 = chunk__44869;
var G__45564 = count__44870;
var G__45565 = (i__44871 + (1));
seq__44868 = G__45562;
chunk__44869 = G__45563;
count__44870 = G__45564;
i__44871 = G__45565;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44868);
if(temp__5753__auto__){
var seq__44868__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44868__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44868__$1);
var G__45566 = cljs.core.chunk_rest(seq__44868__$1);
var G__45567 = c__4679__auto__;
var G__45568 = cljs.core.count(c__4679__auto__);
var G__45569 = (0);
seq__44868 = G__45566;
chunk__44869 = G__45567;
count__44870 = G__45568;
i__44871 = G__45569;
continue;
} else {
var js_ns = cljs.core.first(seq__44868__$1);
var require_str_45570 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45570);


var G__45571 = cljs.core.next(seq__44868__$1);
var G__45572 = null;
var G__45573 = (0);
var G__45574 = (0);
seq__44868 = G__45571;
chunk__44869 = G__45572;
count__44870 = G__45573;
i__44871 = G__45574;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__44873){
var map__44874 = p__44873;
var map__44874__$1 = cljs.core.__destructure_map(map__44874);
var msg = map__44874__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44874__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44874__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44875(s__44876){
return (new cljs.core.LazySeq(null,(function (){
var s__44876__$1 = s__44876;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__44876__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__44883 = cljs.core.first(xs__6308__auto__);
var map__44883__$1 = cljs.core.__destructure_map(map__44883);
var src = map__44883__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44883__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44883__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__44876__$1,map__44883,map__44883__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__44874,map__44874__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44875_$_iter__44877(s__44878){
return (new cljs.core.LazySeq(null,((function (s__44876__$1,map__44883,map__44883__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__44874,map__44874__$1,msg,info,reload_info){
return (function (){
var s__44878__$1 = s__44878;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__44878__$1);
if(temp__5753__auto____$1){
var s__44878__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44878__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__44878__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__44880 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__44879 = (0);
while(true){
if((i__44879 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__44879);
cljs.core.chunk_append(b__44880,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45576 = (i__44879 + (1));
i__44879 = G__45576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44880),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44875_$_iter__44877(cljs.core.chunk_rest(s__44878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44880),null);
}
} else {
var warning = cljs.core.first(s__44878__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44875_$_iter__44877(cljs.core.rest(s__44878__$2)));
}
} else {
return null;
}
break;
}
});})(s__44876__$1,map__44883,map__44883__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__44874,map__44874__$1,msg,info,reload_info))
,null,null));
});})(s__44876__$1,map__44883,map__44883__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__44874,map__44874__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44875(cljs.core.rest(s__44876__$1)));
} else {
var G__45577 = cljs.core.rest(s__44876__$1);
s__44876__$1 = G__45577;
continue;
}
} else {
var G__45578 = cljs.core.rest(s__44876__$1);
s__44876__$1 = G__45578;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__44892_45579 = cljs.core.seq(warnings);
var chunk__44893_45580 = null;
var count__44894_45581 = (0);
var i__44895_45582 = (0);
while(true){
if((i__44895_45582 < count__44894_45581)){
var map__44900_45583 = chunk__44893_45580.cljs$core$IIndexed$_nth$arity$2(null,i__44895_45582);
var map__44900_45584__$1 = cljs.core.__destructure_map(map__44900_45583);
var w_45585 = map__44900_45584__$1;
var msg_45586__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900_45584__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900_45584__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900_45584__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44900_45584__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45589)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45587),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45588),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45586__$1)].join(''));


var G__45590 = seq__44892_45579;
var G__45591 = chunk__44893_45580;
var G__45592 = count__44894_45581;
var G__45593 = (i__44895_45582 + (1));
seq__44892_45579 = G__45590;
chunk__44893_45580 = G__45591;
count__44894_45581 = G__45592;
i__44895_45582 = G__45593;
continue;
} else {
var temp__5753__auto___45594 = cljs.core.seq(seq__44892_45579);
if(temp__5753__auto___45594){
var seq__44892_45595__$1 = temp__5753__auto___45594;
if(cljs.core.chunked_seq_QMARK_(seq__44892_45595__$1)){
var c__4679__auto___45596 = cljs.core.chunk_first(seq__44892_45595__$1);
var G__45597 = cljs.core.chunk_rest(seq__44892_45595__$1);
var G__45598 = c__4679__auto___45596;
var G__45599 = cljs.core.count(c__4679__auto___45596);
var G__45600 = (0);
seq__44892_45579 = G__45597;
chunk__44893_45580 = G__45598;
count__44894_45581 = G__45599;
i__44895_45582 = G__45600;
continue;
} else {
var map__44904_45601 = cljs.core.first(seq__44892_45595__$1);
var map__44904_45602__$1 = cljs.core.__destructure_map(map__44904_45601);
var w_45603 = map__44904_45602__$1;
var msg_45604__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44904_45602__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44904_45602__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44904_45602__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44904_45602__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45607)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45605),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45606),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45604__$1)].join(''));


var G__45609 = cljs.core.next(seq__44892_45595__$1);
var G__45610 = null;
var G__45611 = (0);
var G__45612 = (0);
seq__44892_45579 = G__45609;
chunk__44893_45580 = G__45610;
count__44894_45581 = G__45611;
i__44895_45582 = G__45612;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__44872_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__44872_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__44923){
var map__44924 = p__44923;
var map__44924__$1 = cljs.core.__destructure_map(map__44924);
var msg = map__44924__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44924__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44924__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__44929 = cljs.core.seq(updates);
var chunk__44931 = null;
var count__44932 = (0);
var i__44933 = (0);
while(true){
if((i__44933 < count__44932)){
var path = chunk__44931.cljs$core$IIndexed$_nth$arity$2(null,i__44933);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45095_45614 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45099_45615 = null;
var count__45100_45616 = (0);
var i__45101_45617 = (0);
while(true){
if((i__45101_45617 < count__45100_45616)){
var node_45619 = chunk__45099_45615.cljs$core$IIndexed$_nth$arity$2(null,i__45101_45617);
if(cljs.core.not(node_45619.shadow$old)){
var path_match_45620 = shadow.cljs.devtools.client.browser.match_paths(node_45619.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45620)){
var new_link_45621 = (function (){var G__45184 = node_45619.cloneNode(true);
G__45184.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45620),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45184;
})();
(node_45619.shadow$old = true);

(new_link_45621.onload = ((function (seq__45095_45614,chunk__45099_45615,count__45100_45616,i__45101_45617,seq__44929,chunk__44931,count__44932,i__44933,new_link_45621,path_match_45620,node_45619,path,map__44924,map__44924__$1,msg,updates,reload_info){
return (function (e){
var seq__45187_45623 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45189_45624 = null;
var count__45190_45625 = (0);
var i__45191_45626 = (0);
while(true){
if((i__45191_45626 < count__45190_45625)){
var map__45205_45627 = chunk__45189_45624.cljs$core$IIndexed$_nth$arity$2(null,i__45191_45626);
var map__45205_45628__$1 = cljs.core.__destructure_map(map__45205_45627);
var task_45629 = map__45205_45628__$1;
var fn_str_45630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45205_45628__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45205_45628__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45632 = goog.getObjectByName(fn_str_45630,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45631)].join(''));

(fn_obj_45632.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45632.cljs$core$IFn$_invoke$arity$2(path,new_link_45621) : fn_obj_45632.call(null,path,new_link_45621));


var G__45634 = seq__45187_45623;
var G__45635 = chunk__45189_45624;
var G__45636 = count__45190_45625;
var G__45637 = (i__45191_45626 + (1));
seq__45187_45623 = G__45634;
chunk__45189_45624 = G__45635;
count__45190_45625 = G__45636;
i__45191_45626 = G__45637;
continue;
} else {
var temp__5753__auto___45638 = cljs.core.seq(seq__45187_45623);
if(temp__5753__auto___45638){
var seq__45187_45640__$1 = temp__5753__auto___45638;
if(cljs.core.chunked_seq_QMARK_(seq__45187_45640__$1)){
var c__4679__auto___45642 = cljs.core.chunk_first(seq__45187_45640__$1);
var G__45643 = cljs.core.chunk_rest(seq__45187_45640__$1);
var G__45644 = c__4679__auto___45642;
var G__45645 = cljs.core.count(c__4679__auto___45642);
var G__45646 = (0);
seq__45187_45623 = G__45643;
chunk__45189_45624 = G__45644;
count__45190_45625 = G__45645;
i__45191_45626 = G__45646;
continue;
} else {
var map__45210_45647 = cljs.core.first(seq__45187_45640__$1);
var map__45210_45648__$1 = cljs.core.__destructure_map(map__45210_45647);
var task_45649 = map__45210_45648__$1;
var fn_str_45650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45210_45648__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45210_45648__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45652 = goog.getObjectByName(fn_str_45650,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45651)].join(''));

(fn_obj_45652.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45652.cljs$core$IFn$_invoke$arity$2(path,new_link_45621) : fn_obj_45652.call(null,path,new_link_45621));


var G__45653 = cljs.core.next(seq__45187_45640__$1);
var G__45654 = null;
var G__45655 = (0);
var G__45656 = (0);
seq__45187_45623 = G__45653;
chunk__45189_45624 = G__45654;
count__45190_45625 = G__45655;
i__45191_45626 = G__45656;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45619);
});})(seq__45095_45614,chunk__45099_45615,count__45100_45616,i__45101_45617,seq__44929,chunk__44931,count__44932,i__44933,new_link_45621,path_match_45620,node_45619,path,map__44924,map__44924__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45620], 0));

goog.dom.insertSiblingAfter(new_link_45621,node_45619);


var G__45658 = seq__45095_45614;
var G__45659 = chunk__45099_45615;
var G__45660 = count__45100_45616;
var G__45661 = (i__45101_45617 + (1));
seq__45095_45614 = G__45658;
chunk__45099_45615 = G__45659;
count__45100_45616 = G__45660;
i__45101_45617 = G__45661;
continue;
} else {
var G__45662 = seq__45095_45614;
var G__45663 = chunk__45099_45615;
var G__45664 = count__45100_45616;
var G__45665 = (i__45101_45617 + (1));
seq__45095_45614 = G__45662;
chunk__45099_45615 = G__45663;
count__45100_45616 = G__45664;
i__45101_45617 = G__45665;
continue;
}
} else {
var G__45666 = seq__45095_45614;
var G__45667 = chunk__45099_45615;
var G__45668 = count__45100_45616;
var G__45669 = (i__45101_45617 + (1));
seq__45095_45614 = G__45666;
chunk__45099_45615 = G__45667;
count__45100_45616 = G__45668;
i__45101_45617 = G__45669;
continue;
}
} else {
var temp__5753__auto___45670 = cljs.core.seq(seq__45095_45614);
if(temp__5753__auto___45670){
var seq__45095_45671__$1 = temp__5753__auto___45670;
if(cljs.core.chunked_seq_QMARK_(seq__45095_45671__$1)){
var c__4679__auto___45672 = cljs.core.chunk_first(seq__45095_45671__$1);
var G__45673 = cljs.core.chunk_rest(seq__45095_45671__$1);
var G__45674 = c__4679__auto___45672;
var G__45675 = cljs.core.count(c__4679__auto___45672);
var G__45676 = (0);
seq__45095_45614 = G__45673;
chunk__45099_45615 = G__45674;
count__45100_45616 = G__45675;
i__45101_45617 = G__45676;
continue;
} else {
var node_45678 = cljs.core.first(seq__45095_45671__$1);
if(cljs.core.not(node_45678.shadow$old)){
var path_match_45679 = shadow.cljs.devtools.client.browser.match_paths(node_45678.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45679)){
var new_link_45681 = (function (){var G__45220 = node_45678.cloneNode(true);
G__45220.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45679),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45220;
})();
(node_45678.shadow$old = true);

(new_link_45681.onload = ((function (seq__45095_45614,chunk__45099_45615,count__45100_45616,i__45101_45617,seq__44929,chunk__44931,count__44932,i__44933,new_link_45681,path_match_45679,node_45678,seq__45095_45671__$1,temp__5753__auto___45670,path,map__44924,map__44924__$1,msg,updates,reload_info){
return (function (e){
var seq__45225_45682 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45227_45683 = null;
var count__45228_45684 = (0);
var i__45229_45685 = (0);
while(true){
if((i__45229_45685 < count__45228_45684)){
var map__45240_45686 = chunk__45227_45683.cljs$core$IIndexed$_nth$arity$2(null,i__45229_45685);
var map__45240_45687__$1 = cljs.core.__destructure_map(map__45240_45686);
var task_45688 = map__45240_45687__$1;
var fn_str_45689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45240_45687__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45240_45687__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45691 = goog.getObjectByName(fn_str_45689,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45690)].join(''));

(fn_obj_45691.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45691.cljs$core$IFn$_invoke$arity$2(path,new_link_45681) : fn_obj_45691.call(null,path,new_link_45681));


var G__45692 = seq__45225_45682;
var G__45693 = chunk__45227_45683;
var G__45694 = count__45228_45684;
var G__45695 = (i__45229_45685 + (1));
seq__45225_45682 = G__45692;
chunk__45227_45683 = G__45693;
count__45228_45684 = G__45694;
i__45229_45685 = G__45695;
continue;
} else {
var temp__5753__auto___45696__$1 = cljs.core.seq(seq__45225_45682);
if(temp__5753__auto___45696__$1){
var seq__45225_45698__$1 = temp__5753__auto___45696__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45225_45698__$1)){
var c__4679__auto___45699 = cljs.core.chunk_first(seq__45225_45698__$1);
var G__45700 = cljs.core.chunk_rest(seq__45225_45698__$1);
var G__45701 = c__4679__auto___45699;
var G__45702 = cljs.core.count(c__4679__auto___45699);
var G__45703 = (0);
seq__45225_45682 = G__45700;
chunk__45227_45683 = G__45701;
count__45228_45684 = G__45702;
i__45229_45685 = G__45703;
continue;
} else {
var map__45245_45704 = cljs.core.first(seq__45225_45698__$1);
var map__45245_45705__$1 = cljs.core.__destructure_map(map__45245_45704);
var task_45706 = map__45245_45705__$1;
var fn_str_45707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45245_45705__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45245_45705__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45709 = goog.getObjectByName(fn_str_45707,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45708)].join(''));

(fn_obj_45709.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45709.cljs$core$IFn$_invoke$arity$2(path,new_link_45681) : fn_obj_45709.call(null,path,new_link_45681));


var G__45710 = cljs.core.next(seq__45225_45698__$1);
var G__45711 = null;
var G__45712 = (0);
var G__45713 = (0);
seq__45225_45682 = G__45710;
chunk__45227_45683 = G__45711;
count__45228_45684 = G__45712;
i__45229_45685 = G__45713;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45678);
});})(seq__45095_45614,chunk__45099_45615,count__45100_45616,i__45101_45617,seq__44929,chunk__44931,count__44932,i__44933,new_link_45681,path_match_45679,node_45678,seq__45095_45671__$1,temp__5753__auto___45670,path,map__44924,map__44924__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45679], 0));

goog.dom.insertSiblingAfter(new_link_45681,node_45678);


var G__45714 = cljs.core.next(seq__45095_45671__$1);
var G__45715 = null;
var G__45716 = (0);
var G__45717 = (0);
seq__45095_45614 = G__45714;
chunk__45099_45615 = G__45715;
count__45100_45616 = G__45716;
i__45101_45617 = G__45717;
continue;
} else {
var G__45719 = cljs.core.next(seq__45095_45671__$1);
var G__45720 = null;
var G__45721 = (0);
var G__45722 = (0);
seq__45095_45614 = G__45719;
chunk__45099_45615 = G__45720;
count__45100_45616 = G__45721;
i__45101_45617 = G__45722;
continue;
}
} else {
var G__45724 = cljs.core.next(seq__45095_45671__$1);
var G__45725 = null;
var G__45726 = (0);
var G__45727 = (0);
seq__45095_45614 = G__45724;
chunk__45099_45615 = G__45725;
count__45100_45616 = G__45726;
i__45101_45617 = G__45727;
continue;
}
}
} else {
}
}
break;
}


var G__45728 = seq__44929;
var G__45729 = chunk__44931;
var G__45730 = count__44932;
var G__45731 = (i__44933 + (1));
seq__44929 = G__45728;
chunk__44931 = G__45729;
count__44932 = G__45730;
i__44933 = G__45731;
continue;
} else {
var G__45732 = seq__44929;
var G__45733 = chunk__44931;
var G__45734 = count__44932;
var G__45735 = (i__44933 + (1));
seq__44929 = G__45732;
chunk__44931 = G__45733;
count__44932 = G__45734;
i__44933 = G__45735;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44929);
if(temp__5753__auto__){
var seq__44929__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44929__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44929__$1);
var G__45736 = cljs.core.chunk_rest(seq__44929__$1);
var G__45737 = c__4679__auto__;
var G__45738 = cljs.core.count(c__4679__auto__);
var G__45739 = (0);
seq__44929 = G__45736;
chunk__44931 = G__45737;
count__44932 = G__45738;
i__44933 = G__45739;
continue;
} else {
var path = cljs.core.first(seq__44929__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45251_45741 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45255_45742 = null;
var count__45256_45743 = (0);
var i__45257_45744 = (0);
while(true){
if((i__45257_45744 < count__45256_45743)){
var node_45745 = chunk__45255_45742.cljs$core$IIndexed$_nth$arity$2(null,i__45257_45744);
if(cljs.core.not(node_45745.shadow$old)){
var path_match_45746 = shadow.cljs.devtools.client.browser.match_paths(node_45745.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45746)){
var new_link_45747 = (function (){var G__45334 = node_45745.cloneNode(true);
G__45334.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45746),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45334;
})();
(node_45745.shadow$old = true);

(new_link_45747.onload = ((function (seq__45251_45741,chunk__45255_45742,count__45256_45743,i__45257_45744,seq__44929,chunk__44931,count__44932,i__44933,new_link_45747,path_match_45746,node_45745,path,seq__44929__$1,temp__5753__auto__,map__44924,map__44924__$1,msg,updates,reload_info){
return (function (e){
var seq__45336_45748 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45338_45749 = null;
var count__45339_45750 = (0);
var i__45340_45751 = (0);
while(true){
if((i__45340_45751 < count__45339_45750)){
var map__45351_45752 = chunk__45338_45749.cljs$core$IIndexed$_nth$arity$2(null,i__45340_45751);
var map__45351_45753__$1 = cljs.core.__destructure_map(map__45351_45752);
var task_45754 = map__45351_45753__$1;
var fn_str_45755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45351_45753__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45351_45753__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45757 = goog.getObjectByName(fn_str_45755,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45756)].join(''));

(fn_obj_45757.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45757.cljs$core$IFn$_invoke$arity$2(path,new_link_45747) : fn_obj_45757.call(null,path,new_link_45747));


var G__45758 = seq__45336_45748;
var G__45759 = chunk__45338_45749;
var G__45760 = count__45339_45750;
var G__45761 = (i__45340_45751 + (1));
seq__45336_45748 = G__45758;
chunk__45338_45749 = G__45759;
count__45339_45750 = G__45760;
i__45340_45751 = G__45761;
continue;
} else {
var temp__5753__auto___45762__$1 = cljs.core.seq(seq__45336_45748);
if(temp__5753__auto___45762__$1){
var seq__45336_45763__$1 = temp__5753__auto___45762__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45336_45763__$1)){
var c__4679__auto___45764 = cljs.core.chunk_first(seq__45336_45763__$1);
var G__45766 = cljs.core.chunk_rest(seq__45336_45763__$1);
var G__45767 = c__4679__auto___45764;
var G__45768 = cljs.core.count(c__4679__auto___45764);
var G__45769 = (0);
seq__45336_45748 = G__45766;
chunk__45338_45749 = G__45767;
count__45339_45750 = G__45768;
i__45340_45751 = G__45769;
continue;
} else {
var map__45356_45770 = cljs.core.first(seq__45336_45763__$1);
var map__45356_45771__$1 = cljs.core.__destructure_map(map__45356_45770);
var task_45772 = map__45356_45771__$1;
var fn_str_45773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45356_45771__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45356_45771__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45775 = goog.getObjectByName(fn_str_45773,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45774)].join(''));

(fn_obj_45775.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45775.cljs$core$IFn$_invoke$arity$2(path,new_link_45747) : fn_obj_45775.call(null,path,new_link_45747));


var G__45776 = cljs.core.next(seq__45336_45763__$1);
var G__45777 = null;
var G__45778 = (0);
var G__45779 = (0);
seq__45336_45748 = G__45776;
chunk__45338_45749 = G__45777;
count__45339_45750 = G__45778;
i__45340_45751 = G__45779;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45745);
});})(seq__45251_45741,chunk__45255_45742,count__45256_45743,i__45257_45744,seq__44929,chunk__44931,count__44932,i__44933,new_link_45747,path_match_45746,node_45745,path,seq__44929__$1,temp__5753__auto__,map__44924,map__44924__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45746], 0));

goog.dom.insertSiblingAfter(new_link_45747,node_45745);


var G__45780 = seq__45251_45741;
var G__45781 = chunk__45255_45742;
var G__45782 = count__45256_45743;
var G__45783 = (i__45257_45744 + (1));
seq__45251_45741 = G__45780;
chunk__45255_45742 = G__45781;
count__45256_45743 = G__45782;
i__45257_45744 = G__45783;
continue;
} else {
var G__45784 = seq__45251_45741;
var G__45785 = chunk__45255_45742;
var G__45786 = count__45256_45743;
var G__45787 = (i__45257_45744 + (1));
seq__45251_45741 = G__45784;
chunk__45255_45742 = G__45785;
count__45256_45743 = G__45786;
i__45257_45744 = G__45787;
continue;
}
} else {
var G__45788 = seq__45251_45741;
var G__45789 = chunk__45255_45742;
var G__45790 = count__45256_45743;
var G__45791 = (i__45257_45744 + (1));
seq__45251_45741 = G__45788;
chunk__45255_45742 = G__45789;
count__45256_45743 = G__45790;
i__45257_45744 = G__45791;
continue;
}
} else {
var temp__5753__auto___45792__$1 = cljs.core.seq(seq__45251_45741);
if(temp__5753__auto___45792__$1){
var seq__45251_45794__$1 = temp__5753__auto___45792__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45251_45794__$1)){
var c__4679__auto___45795 = cljs.core.chunk_first(seq__45251_45794__$1);
var G__45796 = cljs.core.chunk_rest(seq__45251_45794__$1);
var G__45797 = c__4679__auto___45795;
var G__45798 = cljs.core.count(c__4679__auto___45795);
var G__45799 = (0);
seq__45251_45741 = G__45796;
chunk__45255_45742 = G__45797;
count__45256_45743 = G__45798;
i__45257_45744 = G__45799;
continue;
} else {
var node_45800 = cljs.core.first(seq__45251_45794__$1);
if(cljs.core.not(node_45800.shadow$old)){
var path_match_45801 = shadow.cljs.devtools.client.browser.match_paths(node_45800.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45801)){
var new_link_45802 = (function (){var G__45365 = node_45800.cloneNode(true);
G__45365.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45801),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45365;
})();
(node_45800.shadow$old = true);

(new_link_45802.onload = ((function (seq__45251_45741,chunk__45255_45742,count__45256_45743,i__45257_45744,seq__44929,chunk__44931,count__44932,i__44933,new_link_45802,path_match_45801,node_45800,seq__45251_45794__$1,temp__5753__auto___45792__$1,path,seq__44929__$1,temp__5753__auto__,map__44924,map__44924__$1,msg,updates,reload_info){
return (function (e){
var seq__45371_45803 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45393_45804 = null;
var count__45396_45805 = (0);
var i__45398_45806 = (0);
while(true){
if((i__45398_45806 < count__45396_45805)){
var map__45468_45808 = chunk__45393_45804.cljs$core$IIndexed$_nth$arity$2(null,i__45398_45806);
var map__45468_45809__$1 = cljs.core.__destructure_map(map__45468_45808);
var task_45810 = map__45468_45809__$1;
var fn_str_45811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45468_45809__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45468_45809__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45813 = goog.getObjectByName(fn_str_45811,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45812)].join(''));

(fn_obj_45813.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45813.cljs$core$IFn$_invoke$arity$2(path,new_link_45802) : fn_obj_45813.call(null,path,new_link_45802));


var G__45815 = seq__45371_45803;
var G__45816 = chunk__45393_45804;
var G__45817 = count__45396_45805;
var G__45818 = (i__45398_45806 + (1));
seq__45371_45803 = G__45815;
chunk__45393_45804 = G__45816;
count__45396_45805 = G__45817;
i__45398_45806 = G__45818;
continue;
} else {
var temp__5753__auto___45819__$2 = cljs.core.seq(seq__45371_45803);
if(temp__5753__auto___45819__$2){
var seq__45371_45820__$1 = temp__5753__auto___45819__$2;
if(cljs.core.chunked_seq_QMARK_(seq__45371_45820__$1)){
var c__4679__auto___45821 = cljs.core.chunk_first(seq__45371_45820__$1);
var G__45822 = cljs.core.chunk_rest(seq__45371_45820__$1);
var G__45823 = c__4679__auto___45821;
var G__45824 = cljs.core.count(c__4679__auto___45821);
var G__45825 = (0);
seq__45371_45803 = G__45822;
chunk__45393_45804 = G__45823;
count__45396_45805 = G__45824;
i__45398_45806 = G__45825;
continue;
} else {
var map__45470_45826 = cljs.core.first(seq__45371_45820__$1);
var map__45470_45827__$1 = cljs.core.__destructure_map(map__45470_45826);
var task_45828 = map__45470_45827__$1;
var fn_str_45829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45470_45827__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45470_45827__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45833 = goog.getObjectByName(fn_str_45829,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45830)].join(''));

(fn_obj_45833.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45833.cljs$core$IFn$_invoke$arity$2(path,new_link_45802) : fn_obj_45833.call(null,path,new_link_45802));


var G__45835 = cljs.core.next(seq__45371_45820__$1);
var G__45836 = null;
var G__45837 = (0);
var G__45838 = (0);
seq__45371_45803 = G__45835;
chunk__45393_45804 = G__45836;
count__45396_45805 = G__45837;
i__45398_45806 = G__45838;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45800);
});})(seq__45251_45741,chunk__45255_45742,count__45256_45743,i__45257_45744,seq__44929,chunk__44931,count__44932,i__44933,new_link_45802,path_match_45801,node_45800,seq__45251_45794__$1,temp__5753__auto___45792__$1,path,seq__44929__$1,temp__5753__auto__,map__44924,map__44924__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45801], 0));

goog.dom.insertSiblingAfter(new_link_45802,node_45800);


var G__45839 = cljs.core.next(seq__45251_45794__$1);
var G__45840 = null;
var G__45841 = (0);
var G__45842 = (0);
seq__45251_45741 = G__45839;
chunk__45255_45742 = G__45840;
count__45256_45743 = G__45841;
i__45257_45744 = G__45842;
continue;
} else {
var G__45843 = cljs.core.next(seq__45251_45794__$1);
var G__45844 = null;
var G__45845 = (0);
var G__45846 = (0);
seq__45251_45741 = G__45843;
chunk__45255_45742 = G__45844;
count__45256_45743 = G__45845;
i__45257_45744 = G__45846;
continue;
}
} else {
var G__45847 = cljs.core.next(seq__45251_45794__$1);
var G__45848 = null;
var G__45849 = (0);
var G__45850 = (0);
seq__45251_45741 = G__45847;
chunk__45255_45742 = G__45848;
count__45256_45743 = G__45849;
i__45257_45744 = G__45850;
continue;
}
}
} else {
}
}
break;
}


var G__45851 = cljs.core.next(seq__44929__$1);
var G__45852 = null;
var G__45853 = (0);
var G__45854 = (0);
seq__44929 = G__45851;
chunk__44931 = G__45852;
count__44932 = G__45853;
i__44933 = G__45854;
continue;
} else {
var G__45855 = cljs.core.next(seq__44929__$1);
var G__45856 = null;
var G__45857 = (0);
var G__45858 = (0);
seq__44929 = G__45855;
chunk__44931 = G__45856;
count__44932 = G__45857;
i__44933 = G__45858;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__45485){
var map__45488 = p__45485;
var map__45488__$1 = cljs.core.__destructure_map(map__45488);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45488__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__45507){
var map__45508 = p__45507;
var map__45508__$1 = cljs.core.__destructure_map(map__45508);
var _ = map__45508__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45508__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45509,done,error){
var map__45510 = p__45509;
var map__45510__$1 = cljs.core.__destructure_map(map__45510);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45510__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45511,done,error){
var map__45512 = p__45511;
var map__45512__$1 = cljs.core.__destructure_map(map__45512);
var msg = map__45512__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45512__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45512__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45512__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45513){
var map__45514 = p__45513;
var map__45514__$1 = cljs.core.__destructure_map(map__45514);
var src = map__45514__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45514__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45515 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45515) : done.call(null,G__45515));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45516){
var map__45517 = p__45516;
var map__45517__$1 = cljs.core.__destructure_map(map__45517);
var msg__$1 = map__45517__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45517__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e45518){var ex = e45518;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45519){
var map__45520 = p__45519;
var map__45520__$1 = cljs.core.__destructure_map(map__45520);
var env = map__45520__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45520__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45522){
var map__45523 = p__45522;
var map__45523__$1 = cljs.core.__destructure_map(map__45523);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__45527){
var map__45528 = p__45527;
var map__45528__$1 = cljs.core.__destructure_map(map__45528);
var svc = map__45528__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45528__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
