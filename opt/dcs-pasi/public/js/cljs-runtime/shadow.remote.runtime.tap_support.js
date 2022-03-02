goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__43306,p__43307){
var map__43308 = p__43306;
var map__43308__$1 = cljs.core.__destructure_map(map__43308);
var svc = map__43308__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43308__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43308__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43308__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43309 = p__43307;
var map__43309__$1 = cljs.core.__destructure_map(map__43309);
var msg = map__43309__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43309__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43309__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43309__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43309__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__43314,p__43315){
var map__43316 = p__43314;
var map__43316__$1 = cljs.core.__destructure_map(map__43316);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43316__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__43317 = p__43315;
var map__43317__$1 = cljs.core.__destructure_map(map__43317);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43317__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__43322,p__43323){
var map__43324 = p__43322;
var map__43324__$1 = cljs.core.__destructure_map(map__43324);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43324__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43324__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43325 = p__43323;
var map__43325__$1 = cljs.core.__destructure_map(map__43325);
var msg = map__43325__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43325__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__43327,tid){
var map__43329 = p__43327;
var map__43329__$1 = cljs.core.__destructure_map(map__43329);
var svc = map__43329__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43329__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__43337 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__43339 = null;
var count__43340 = (0);
var i__43341 = (0);
while(true){
if((i__43341 < count__43340)){
var vec__43352 = chunk__43339.cljs$core$IIndexed$_nth$arity$2(null,i__43341);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43352,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43352,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43363 = seq__43337;
var G__43364 = chunk__43339;
var G__43365 = count__43340;
var G__43366 = (i__43341 + (1));
seq__43337 = G__43363;
chunk__43339 = G__43364;
count__43340 = G__43365;
i__43341 = G__43366;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43337);
if(temp__5753__auto__){
var seq__43337__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43337__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43337__$1);
var G__43367 = cljs.core.chunk_rest(seq__43337__$1);
var G__43368 = c__4679__auto__;
var G__43369 = cljs.core.count(c__4679__auto__);
var G__43370 = (0);
seq__43337 = G__43367;
chunk__43339 = G__43368;
count__43340 = G__43369;
i__43341 = G__43370;
continue;
} else {
var vec__43356 = cljs.core.first(seq__43337__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43356,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43356,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43371 = cljs.core.next(seq__43337__$1);
var G__43372 = null;
var G__43373 = (0);
var G__43374 = (0);
seq__43337 = G__43371;
chunk__43339 = G__43372;
count__43340 = G__43373;
i__43341 = G__43374;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__43331_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__43331_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__43332_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__43332_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__43333_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__43333_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__43334_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__43334_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__43360){
var map__43361 = p__43360;
var map__43361__$1 = cljs.core.__destructure_map(map__43361);
var svc = map__43361__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43361__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43361__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
