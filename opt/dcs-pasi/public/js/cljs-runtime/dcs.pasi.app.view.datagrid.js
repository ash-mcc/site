goog.provide('dcs.pasi.app.view.datagrid');
var module$node_modules$ag_grid_react$main=shadow.js.require("module$node_modules$ag_grid_react$main", {});
dcs.pasi.app.view.datagrid.lookup_grid_api_component_cursor = (function dcs$pasi$app$view$datagrid$lookup_grid_api_component_cursor(){
var pred__52011 = cljs.core._EQ_;
var expr__52012 = cljs.core.deref(dcs.pasi.app.state.participant_cursor);
if(cljs.core.truth_((pred__52011.cljs$core$IFn$_invoke$arity$2 ? pred__52011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ace","ace",1638744810),expr__52012) : pred__52011.call(null,new cljs.core.Keyword(null,"ace","ace",1638744810),expr__52012)))){
return dcs.pasi.app.state.ace_grid_api_component_cursor;
} else {
if(cljs.core.truth_((pred__52011.cljs$core$IFn$_invoke$arity$2 ? pred__52011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"anon","anon",-765650478),expr__52012) : pred__52011.call(null,new cljs.core.Keyword(null,"anon","anon",-765650478),expr__52012)))){
return dcs.pasi.app.state.anon_grid_api_component_cursor;
} else {
if(cljs.core.truth_((pred__52011.cljs$core$IFn$_invoke$arity$2 ? pred__52011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dcs","dcs",1021102745),expr__52012) : pred__52011.call(null,new cljs.core.Keyword(null,"dcs","dcs",1021102745),expr__52012)))){
return dcs.pasi.app.state.dcs_grid_api_component_cursor;
} else {
if(cljs.core.truth_((pred__52011.cljs$core$IFn$_invoke$arity$2 ? pred__52011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frshr","frshr",-1983456992),expr__52012) : pred__52011.call(null,new cljs.core.Keyword(null,"frshr","frshr",-1983456992),expr__52012)))){
return dcs.pasi.app.state.frshr_grid_api_component_cursor;
} else {
if(cljs.core.truth_((pred__52011.cljs$core$IFn$_invoke$arity$2 ? pred__52011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stcmf","stcmf",2061124438),expr__52012) : pred__52011.call(null,new cljs.core.Keyword(null,"stcmf","stcmf",2061124438),expr__52012)))){
return dcs.pasi.app.state.stcmf_grid_api_component_cursor;
} else {
if(cljs.core.truth_((pred__52011.cljs$core$IFn$_invoke$arity$2 ? pred__52011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zws","zws",-758340415),expr__52012) : pred__52011.call(null,new cljs.core.Keyword(null,"zws","zws",-758340415),expr__52012)))){
return dcs.pasi.app.state.zws_grid_api_component_cursor;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52012)].join('')));
}
}
}
}
}
}
});
dcs.pasi.app.view.datagrid.lookup_type_kw_cursor = (function dcs$pasi$app$view$datagrid$lookup_type_kw_cursor(){
var pred__52022 = cljs.core._EQ_;
var expr__52023 = cljs.core.deref(dcs.pasi.app.state.participant_cursor);
if(cljs.core.truth_((pred__52022.cljs$core$IFn$_invoke$arity$2 ? pred__52022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ace","ace",1638744810),expr__52023) : pred__52022.call(null,new cljs.core.Keyword(null,"ace","ace",1638744810),expr__52023)))){
return dcs.pasi.app.state.ace_type_kw_cursor;
} else {
if(cljs.core.truth_((pred__52022.cljs$core$IFn$_invoke$arity$2 ? pred__52022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"anon","anon",-765650478),expr__52023) : pred__52022.call(null,new cljs.core.Keyword(null,"anon","anon",-765650478),expr__52023)))){
return dcs.pasi.app.state.anon_type_kw_cursor;
} else {
if(cljs.core.truth_((pred__52022.cljs$core$IFn$_invoke$arity$2 ? pred__52022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dcs","dcs",1021102745),expr__52023) : pred__52022.call(null,new cljs.core.Keyword(null,"dcs","dcs",1021102745),expr__52023)))){
return dcs.pasi.app.state.dcs_type_kw_cursor;
} else {
if(cljs.core.truth_((pred__52022.cljs$core$IFn$_invoke$arity$2 ? pred__52022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frshr","frshr",-1983456992),expr__52023) : pred__52022.call(null,new cljs.core.Keyword(null,"frshr","frshr",-1983456992),expr__52023)))){
return dcs.pasi.app.state.frshr_type_kw_cursor;
} else {
if(cljs.core.truth_((pred__52022.cljs$core$IFn$_invoke$arity$2 ? pred__52022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stcmf","stcmf",2061124438),expr__52023) : pred__52022.call(null,new cljs.core.Keyword(null,"stcmf","stcmf",2061124438),expr__52023)))){
return dcs.pasi.app.state.stcmf_type_kw_cursor;
} else {
if(cljs.core.truth_((pred__52022.cljs$core$IFn$_invoke$arity$2 ? pred__52022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zws","zws",-758340415),expr__52023) : pred__52022.call(null,new cljs.core.Keyword(null,"zws","zws",-758340415),expr__52023)))){
return dcs.pasi.app.state.zws_type_kw_cursor;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52023)].join('')));
}
}
}
}
}
}
});
dcs.pasi.app.view.datagrid.types = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dcsOrg","dcsOrg",-91475167),new cljs.core.Keyword(null,"dcsProcess","dcsProcess",-237797181),new cljs.core.Keyword(null,"dcsWasteReduction","dcsWasteReduction",1294729923),new cljs.core.Keyword(null,"zwsCarbonMetric","zwsCarbonMetric",-441146621),new cljs.core.Keyword(null,"frshrReusedMaterial","frshrReusedMaterial",519267748),new cljs.core.Keyword(null,"dcsFrshrToRefData","dcsFrshrToRefData",-1207231355),new cljs.core.Keyword(null,"stcmfRedistributedFood","stcmfRedistributedFood",1210106439),new cljs.core.Keyword(null,"aceFurnitureDescription","aceFurnitureDescription",1793783344),new cljs.core.Keyword(null,"stcmfIncomingFood","stcmfIncomingFood",359565136),new cljs.core.Keyword(null,"dcsStcmfToRefData","dcsStcmfToRefData",-1581237901),new cljs.core.Keyword(null,"aceReusedFurniture","aceReusedFurniture",-914335978),new cljs.core.Keyword(null,"frshrMaterialCategory","frshrMaterialCategory",-397234056),new cljs.core.Keyword(null,"stcmfSource","stcmfSource",-1162488967),new cljs.core.Keyword(null,"dcsStcilToRefData","dcsStcilToRefData",1216910106),new cljs.core.Keyword(null,"dcsAceToRefData","dcsAceToRefData",-1768253477),new cljs.core.Keyword(null,"stcmfDestination","stcmfDestination",1512514110)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"qid","qid",528505110),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"carbonWeighting","carbonWeighting",-776255024),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"batchKg","batchKg",-1306468617),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fraction","fraction",107940680),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"batchKg","batchKg",-1306468617),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"itemKg","itemKg",720425748),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"batchKg","batchKg",-1306468617),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fraction","fraction",107940680),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"itemCount","itemCount",1702035352),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fraction","fraction",107940680),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fraction","fraction",107940680),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),cljs.core.PersistentHashSet.EMPTY], null)]);
dcs.pasi.app.view.datagrid.filter_types = (function dcs$pasi$app$view$datagrid$filter_types(types_,participant){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,dcs.pasi.app.view.datagrid.types)){
} else {
throw (new Error("Assert failed: (s/valid? map? types)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,participant)){
} else {
throw (new Error("Assert failed: (s/valid? keyword? participant)"));
}

var _PERCENT_ = (function (){var participant_name = cljs.core.name(participant);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"anon","anon",-765650478),participant)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zwsCarbonMetric","zwsCarbonMetric",-441146621),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.Keyword(null,"dcsWasteReduction","dcsWasteReduction",1294729923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433),cljs.core.PersistentHashSet.EMPTY], null)], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__52028){
var vec__52029 = p__52028;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52029,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52029,(1),null);
return clojure.string.starts_with_QMARK_(cljs.core.name(k),participant_name);
}),types_));
}
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? map? %)"));
}

return _PERCENT_;
});
dcs.pasi.app.view.datagrid.labels = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dcsOrg","dcsOrg",-91475167),new cljs.core.Keyword(null,"dcsProcess","dcsProcess",-237797181),new cljs.core.Keyword(null,"dcsWasteReduction","dcsWasteReduction",1294729923),new cljs.core.Keyword(null,"zwsCarbonMetric","zwsCarbonMetric",-441146621),new cljs.core.Keyword(null,"frshrReusedMaterial","frshrReusedMaterial",519267748),new cljs.core.Keyword(null,"dcsFrshrToRefData","dcsFrshrToRefData",-1207231355),new cljs.core.Keyword(null,"stcmfRedistributedFood","stcmfRedistributedFood",1210106439),new cljs.core.Keyword(null,"aceFurnitureDescription","aceFurnitureDescription",1793783344),new cljs.core.Keyword(null,"stcmfIncomingFood","stcmfIncomingFood",359565136),new cljs.core.Keyword(null,"dcsStcmfToRefData","dcsStcmfToRefData",-1581237901),new cljs.core.Keyword(null,"aceReusedFurniture","aceReusedFurniture",-914335978),new cljs.core.Keyword(null,"frshrMaterialCategory","frshrMaterialCategory",-397234056),new cljs.core.Keyword(null,"stcmfSource","stcmfSource",-1162488967),new cljs.core.Keyword(null,"dcsStcilToRefData","dcsStcilToRefData",1216910106),new cljs.core.Keyword(null,"dcsAceToRefData","dcsAceToRefData",-1768253477),new cljs.core.Keyword(null,"stcmfDestination","stcmfDestination",1512514110)],["Organisations","Processes which reduce waste","Calculated instances of waste reduction","The carbon metric","Batches of resold/reused items","The Fair Share metrics -> reference metrics","Batches of redistributed food","Furniture categories","Batches of incoming food","Stirling Community Food metrics -> reference metrics","Batches of resold/reused furniture","Item categories","Food sources","Stirling council metrics -> reference metrics","Alloa Community Enterprise metrics -> reference metrics","Food destinations"]);
dcs.pasi.app.view.datagrid.url = ["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.hostname),":2021/pasi/graphql"].join('');
dcs.pasi.app.view.datagrid.get_rows = (function dcs$pasi$app$view$datagrid$get_rows(params){
var type_kw = cljs.core.deref(dcs.pasi.app.view.datagrid.lookup_type_kw_cursor());
return dcs.pasi.app.query.query(cljs.core.deref(dcs.pasi.app.view.datagrid.lookup_grid_api_component_cursor()),params,type_kw,new cljs.core.Keyword(null,"editable-fields","editable-fields",591410433).cljs$core$IFn$_invoke$arity$1((type_kw.cljs$core$IFn$_invoke$arity$1 ? type_kw.cljs$core$IFn$_invoke$arity$1(dcs.pasi.app.view.datagrid.types) : type_kw.call(null,dcs.pasi.app.view.datagrid.types))),dcs.pasi.app.view.datagrid.url);
});
/**
 * controls the grid's datasource
 */
dcs.pasi.app.view.datagrid.on_click_handler_template = (function dcs$pasi$app$view$datagrid$on_click_handler_template(dropdown_id,event){
event.preventDefault();

dcs.pasi.app.view.dropdown.toggle_is_activate(dropdown_id);

var s = event.target.id;
console.log("s:",s);

cljs.core.reset_BANG_(dcs.pasi.app.view.datagrid.lookup_type_kw_cursor(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s));

return cljs.core.deref(dcs.pasi.app.view.datagrid.lookup_grid_api_component_cursor()).setDatasource(({"getRows": dcs.pasi.app.view.datagrid.get_rows}));
});
dcs.pasi.app.view.datagrid.type_chooser = (function dcs$pasi$app$view$datagrid$type_chooser(){
var participant = cljs.core.deref(dcs.pasi.app.state.participant_cursor);
var dropdown_id = ["chooser-for-",cljs.core.name(participant)].join('');
var type_kw = cljs.core.deref(dcs.pasi.app.view.datagrid.lookup_type_kw_cursor());
var prompt = (type_kw.cljs$core$IFn$_invoke$arity$1 ? type_kw.cljs$core$IFn$_invoke$arity$1(dcs.pasi.app.view.datagrid.labels) : type_kw.call(null,dcs.pasi.app.view.datagrid.labels));
var values = (function (){var ks = cljs.core.keys(dcs.pasi.app.view.datagrid.filter_types(dcs.pasi.app.view.datagrid.types,participant));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(dcs.pasi.app.view.datagrid.labels) : k.call(null,dcs.pasi.app.view.datagrid.labels))], null);
}),ks);
})();
var on_click_handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dcs.pasi.app.view.datagrid.on_click_handler_template,dropdown_id);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.pasi.app.view.dropdown.dropdown,dropdown_id,prompt,values,on_click_handler], null);
});
dcs.pasi.app.view.datagrid.grid = (function dcs$pasi$app$view$datagrid$grid(){
var participant = cljs.core.deref(dcs.pasi.app.state.participant_cursor);
var grid_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowModelType","rowModelType",284564314),"infinite",new cljs.core.Keyword(null,"datasource","datasource",-246060221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"getRows","getRows",915985604),dcs.pasi.app.view.datagrid.get_rows], null),new cljs.core.Keyword(null,"onGridReady","onGridReady",1150900741),(function (p1__52046_SHARP_){
return cljs.core.reset_BANG_(dcs.pasi.app.view.datagrid.lookup_grid_api_component_cursor(),p1__52046_SHARP_.api);
})], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ag-theme-balham","div.ag-theme-balham",824692119),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$ag_grid_react$main.AgGridReact,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gridOptions","gridOptions",1968903920),grid_options], null)], null)], null);
});
dcs.pasi.app.view.datagrid.root = (function dcs$pasi$app$view$datagrid$root(participant,height){
console.log("datagrid root participant:",participant);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.pasi.app.view.datagrid.type_chooser], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.pasi.app.view.datagrid.grid], null)], null);
});

//# sourceMappingURL=dcs.pasi.app.view.datagrid.js.map
