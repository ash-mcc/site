goog.provide('dcs.pasi.app.view.unauthenticated.table');
var module$node_modules$ag_grid_react$main=shadow.js.require("module$node_modules$ag_grid_react$main", {});
dcs.pasi.app.view.unauthenticated.table.grid = (function dcs$pasi$app$view$unauthenticated$table$grid(ds){
var spec = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"defaultColDef","defaultColDef",467717895),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resizable","resizable",-2107060206),true], null),new cljs.core.Keyword(null,"columnDefs","columnDefs",1825078585),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60906_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.name(p1__60906_SHARP_)], null),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fraction","fraction",107940680),null,new cljs.core.Keyword(null,"carbonSavingCo2eKg","carbonSavingCo2eKg",316809450),null,new cljs.core.Keyword(null,"carbonWeighting","carbonWeighting",-776255024),null,new cljs.core.Keyword(null,"batchKg","batchKg",-1306468617),null,new cljs.core.Keyword(null,"itemCount","itemCount",1702035352),null,new cljs.core.Keyword(null,"batchTonnes","batchTonnes",-2041076421),null], null), null),p1__60906_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"rightAligned"], null):null),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fraction","fraction",107940680),null,new cljs.core.Keyword(null,"carbonSavingCo2eKg","carbonSavingCo2eKg",316809450),null,new cljs.core.Keyword(null,"carbonWeighting","carbonWeighting",-776255024),null,new cljs.core.Keyword(null,"batchKg","batchKg",-1306468617),null,new cljs.core.Keyword(null,"batchTonnes","batchTonnes",-2041076421),null], null), null),p1__60906_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueFormatter","valueFormatter",-941066161),(function (params){
var v = params.value;
if(typeof v === 'number'){
return v.toFixed((2));
} else {
return v;
}
})], null):null),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"carbonSavingCo2eKg","carbonSavingCo2eKg",316809450),null,new cljs.core.Keyword(null,"enabler","enabler",1883899765),null,new cljs.core.Keyword(null,"batchKg","batchKg",-1306468617),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),p1__60906_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sortable","sortable",2109633621),true], null):null)], 0));
}),new cljs.core.Keyword(null,"field-order","field-order",903241043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dcsWasteReduction","dcsWasteReduction",1294729923).cljs$core$IFn$_invoke$arity$1(dcs.pasi.model.queries)))),new cljs.core.Keyword(null,"immutableData","immutableData",-2116580325),true,new cljs.core.Keyword(null,"animateRows","animateRows",568775869),true,new cljs.core.Keyword(null,"rowData","rowData",725590989),ds,new cljs.core.Keyword(null,"getRowNodeId","getRowNodeId",1768749081),(function (p1__60907_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__60907_SHARP_),"id");
}),new cljs.core.Keyword(null,"onGridReady","onGridReady",1150900741),(function (e){
var grid_api = e.api;
var col_api = e.columnApi;
grid_api.sizeColumnsToFit();

return cljs.core.reset_BANG_(dcs.pasi.app.state.unauthn_grid_api_cursor,grid_api);
})], null);
console.log("columnDefs =",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"columnDefs","columnDefs",1825078585).cljs$core$IFn$_invoke$arity$1(spec)));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ag-theme-balham","div.ag-theme-balham",824692119),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$ag_grid_react$main.AgGridReact,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gridOptions","gridOptions",1968903920),spec], null)], null)], null);
});
dcs.pasi.app.view.unauthenticated.table.ele = (function dcs$pasi$app$view$unauthenticated$table$ele(wr_ds,selected_years,selected_orgs,selected_streams){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(500)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.pasi.app.view.unauthenticated.table.grid,dcs.pasi.app.view.unauthenticated.tmp.filter_ds(wr_ds,selected_years,selected_orgs,selected_streams)], null)], null);
});
dcs.pasi.app.view.unauthenticated.table.root = (function dcs$pasi$app$view$unauthenticated$table$root(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.pasi.app.view.unauthenticated.table.ele,cljs.core.deref(dcs.pasi.app.state.unauthn_wr_ds_cursor),cljs.core.deref(dcs.pasi.app.state.unauthn_selected_years_cursor),cljs.core.deref(dcs.pasi.app.state.unauthn_selected_orgs_cursor),cljs.core.deref(dcs.pasi.app.state.unauthn_selected_streams_cursor)], null);
});

//# sourceMappingURL=dcs.pasi.app.view.unauthenticated.table.js.map
