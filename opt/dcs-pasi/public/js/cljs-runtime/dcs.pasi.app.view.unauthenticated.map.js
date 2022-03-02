goog.provide('dcs.pasi.app.view.unauthenticated.map');
dcs.pasi.app.view.unauthenticated.map.map_holder = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
dcs.pasi.app.view.unauthenticated.map.markerclusters_holder = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
dcs.pasi.app.view.unauthenticated.map.did_mount = (function dcs$pasi$app$view$unauthenticated$map$did_mount(){
var vec__60899 = initMap();
var map_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60899,(0),null);
var markerclusters_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60899,(1),null);
cljs.core.reset_BANG_(dcs.pasi.app.view.unauthenticated.map.map_holder,map_component);

cljs.core.reset_BANG_(dcs.pasi.app.view.unauthenticated.map.markerclusters_holder,markerclusters_component);

var temp__5753__auto__ = cljs.core.deref(dcs.pasi.app.state.unauthn_wr_ds_cursor);
if(cljs.core.truth_(temp__5753__auto__)){
var ds = temp__5753__auto__;
return initMarkers(map_component,markerclusters_component,cljs.core.clj__GT_js(dcs.pasi.app.view.unauthenticated.tmp.__GT_geojson_as_a_clj_structure(ds)));
} else {
return null;
}
});
dcs.pasi.app.view.unauthenticated.map.did_update = (function dcs$pasi$app$view$unauthenticated$map$did_update(_this,_prev_props){
var temp__5753__auto__ = cljs.core.deref(dcs.pasi.app.state.unauthn_wr_ds_cursor);
if(cljs.core.truth_(temp__5753__auto__)){
var ds = temp__5753__auto__;
return initMarkers(cljs.core.deref(dcs.pasi.app.view.unauthenticated.map.map_holder),cljs.core.deref(dcs.pasi.app.view.unauthenticated.map.markerclusters_holder),cljs.core.clj__GT_js(dcs.pasi.app.view.unauthenticated.tmp.__GT_geojson_as_a_clj_structure(ds)));
} else {
return null;
}
});
dcs.pasi.app.view.unauthenticated.map.render = (function dcs$pasi$app$view$unauthenticated$map$render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#map-container","div#map-container",465281127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(350)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#map","div#map",173142408)], null)], null);
});
dcs.pasi.app.view.unauthenticated.map.component = (function dcs$pasi$app$view$unauthenticated$map$component(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),dcs.pasi.app.view.unauthenticated.map.render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),dcs.pasi.app.view.unauthenticated.map.did_mount,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),dcs.pasi.app.view.unauthenticated.map.did_update], null));
});
dcs.pasi.app.view.unauthenticated.map.root = (function dcs$pasi$app$view$unauthenticated$map$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.pasi.app.view.unauthenticated.map.component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(dcs.pasi.app.state.unauthn_wr_ds_cursor)], null)], null);
});

//# sourceMappingURL=dcs.pasi.app.view.unauthenticated.map.js.map
