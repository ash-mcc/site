goog.provide('dcs.pasi.app.util');
/**
 * Milliseconds since epoch
 */
dcs.pasi.app.util.now = (function dcs$pasi$app$util$now(){
return Date.now();
});
dcs.pasi.app.util.secs_to_now = (function dcs$pasi$app$util$secs_to_now(start_time){
return ((dcs.pasi.app.util.now() - start_time) / (1000));
});
dcs.pasi.app.util.date_str = (function dcs$pasi$app$util$date_str(year,quarter){
var q_map = new cljs.core.PersistentArrayMap(null, 4, [(1),"31 Mar",(2),"30 Jun",(3),"31 Aug",(4),"31 Dec"], null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((q_map.cljs$core$IFn$_invoke$arity$1 ? q_map.cljs$core$IFn$_invoke$arity$1(quarter) : q_map.call(null,quarter)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
dcs.pasi.app.util.vega_embed_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),false], null);
dcs.pasi.app.util.easier_repo = "https://raw.githubusercontent.com/data-commons-scotland/dcs-easier-open-data/v1.6-beta/";
dcs.pasi.app.util.easier_repo_data = [dcs.pasi.app.util.easier_repo,"data/"].join('');
dcs.pasi.app.util.open_tab = (function dcs$pasi$app$util$open_tab(event,tab_group_suffix,tab_id){
var seq__45085_45095 = cljs.core.seq(document.getElementsByClassName(["tab-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__45086_45096 = null;
var count__45087_45097 = (0);
var i__45088_45098 = (0);
while(true){
if((i__45088_45098 < count__45087_45097)){
var tab_content_45099 = chunk__45086_45096.cljs$core$IIndexed$_nth$arity$2(null,i__45088_45098);
(tab_content_45099.style.display = "none");


var G__45100 = seq__45085_45095;
var G__45101 = chunk__45086_45096;
var G__45102 = count__45087_45097;
var G__45103 = (i__45088_45098 + (1));
seq__45085_45095 = G__45100;
chunk__45086_45096 = G__45101;
count__45087_45097 = G__45102;
i__45088_45098 = G__45103;
continue;
} else {
var temp__5753__auto___45104 = cljs.core.seq(seq__45085_45095);
if(temp__5753__auto___45104){
var seq__45085_45105__$1 = temp__5753__auto___45104;
if(cljs.core.chunked_seq_QMARK_(seq__45085_45105__$1)){
var c__4679__auto___45106 = cljs.core.chunk_first(seq__45085_45105__$1);
var G__45107 = cljs.core.chunk_rest(seq__45085_45105__$1);
var G__45108 = c__4679__auto___45106;
var G__45109 = cljs.core.count(c__4679__auto___45106);
var G__45110 = (0);
seq__45085_45095 = G__45107;
chunk__45086_45096 = G__45108;
count__45087_45097 = G__45109;
i__45088_45098 = G__45110;
continue;
} else {
var tab_content_45111 = cljs.core.first(seq__45085_45105__$1);
(tab_content_45111.style.display = "none");


var G__45112 = cljs.core.next(seq__45085_45105__$1);
var G__45113 = null;
var G__45114 = (0);
var G__45115 = (0);
seq__45085_45095 = G__45112;
chunk__45086_45096 = G__45113;
count__45087_45097 = G__45114;
i__45088_45098 = G__45115;
continue;
}
} else {
}
}
break;
}

var seq__45089_45116 = cljs.core.seq(document.getElementsByClassName(["tab-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')));
var chunk__45090_45117 = null;
var count__45091_45118 = (0);
var i__45092_45119 = (0);
while(true){
if((i__45092_45119 < count__45091_45118)){
var tab_45120 = chunk__45090_45117.cljs$core$IIndexed$_nth$arity$2(null,i__45092_45119);
(tab_45120.className = clojure.string.replace(tab_45120.className," is-active",""));


var G__45121 = seq__45089_45116;
var G__45122 = chunk__45090_45117;
var G__45123 = count__45091_45118;
var G__45124 = (i__45092_45119 + (1));
seq__45089_45116 = G__45121;
chunk__45090_45117 = G__45122;
count__45091_45118 = G__45123;
i__45092_45119 = G__45124;
continue;
} else {
var temp__5753__auto___45125 = cljs.core.seq(seq__45089_45116);
if(temp__5753__auto___45125){
var seq__45089_45126__$1 = temp__5753__auto___45125;
if(cljs.core.chunked_seq_QMARK_(seq__45089_45126__$1)){
var c__4679__auto___45127 = cljs.core.chunk_first(seq__45089_45126__$1);
var G__45128 = cljs.core.chunk_rest(seq__45089_45126__$1);
var G__45129 = c__4679__auto___45127;
var G__45130 = cljs.core.count(c__4679__auto___45127);
var G__45131 = (0);
seq__45089_45116 = G__45128;
chunk__45090_45117 = G__45129;
count__45091_45118 = G__45130;
i__45092_45119 = G__45131;
continue;
} else {
var tab_45132 = cljs.core.first(seq__45089_45126__$1);
(tab_45132.className = clojure.string.replace(tab_45132.className," is-active",""));


var G__45133 = cljs.core.next(seq__45089_45126__$1);
var G__45134 = null;
var G__45135 = (0);
var G__45136 = (0);
seq__45089_45116 = G__45133;
chunk__45090_45117 = G__45134;
count__45091_45118 = G__45135;
i__45092_45119 = G__45136;
continue;
}
} else {
}
}
break;
}

(document.getElementById([cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tab_group_suffix)].join('')).style.display = "block");

return (event.currentTarget.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(event.currentTarget.className)," is-active"].join(''));
});
dcs.pasi.app.util.scroll_fn = (function dcs$pasi$app$util$scroll_fn(var_args){
var G__45094 = arguments.length;
switch (G__45094) {
case 1:
return dcs.pasi.app.util.scroll_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dcs.pasi.app.util.scroll_fn.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dcs.pasi.app.util.scroll_fn.cljs$core$IFn$_invoke$arity$1 = (function (id){
return (function (){
var temp__5753__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5753__auto__)){
var ele = temp__5753__auto__;
ele.scrollIntoView(true);

ele.classList.add("is-selected");

var mousedown_handler = (function dcs$pasi$app$util$mousedown_handler(_e){
ele.classList.remove("is-selected");

return document.removeEventListener("mousedown",dcs$pasi$app$util$mousedown_handler);
});
document.addEventListener("mousedown",mousedown_handler);

var temp__5753__auto____$1 = window.scrollY;
if(cljs.core.truth_(temp__5753__auto____$1)){
var scrolledY = temp__5753__auto____$1;
return window.scroll((0),(scrolledY - (65)));
} else {
return null;
}
} else {
return null;
}
});
}));

(dcs.pasi.app.util.scroll_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (){
return window.scroll((0),(0));
});
}));

(dcs.pasi.app.util.scroll_fn.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=dcs.pasi.app.util.js.map
