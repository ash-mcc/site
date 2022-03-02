goog.provide('dcs.pasi.app.view.experiment');
var module$node_modules$ag_grid_react$main=shadow.js.require("module$node_modules$ag_grid_react$main", {});
dcs.pasi.app.view.experiment.counts_per_month_spec = (function dcs$pasi$app$view$experiment$counts_per_month_spec(data){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"schema","schema",-1582001791),"https://vega.github.io/schema/vega/v5.json",new cljs.core.Keyword(null,"title","title",636505583),"counts per quarter",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),data], null),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timeUnit","timeUnit",-1287194281),"yearquarter",new cljs.core.Keyword(null,"field","field",-1302436500),"to",new cljs.core.Keyword(null,"as","as",1148689641),"quarter"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aggregate","aggregate",1511468442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),"sum",new cljs.core.Keyword(null,"field","field",-1302436500),"itemCount",new cljs.core.Keyword(null,"as","as",1148689641),"itemCount"], null)], null),new cljs.core.Keyword(null,"groupby","groupby",-497368173),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["quarter"], null)], null)], null),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"cornerRadiusTopLeft","cornerRadiusTopLeft",-1216951048),(3),new cljs.core.Keyword(null,"cornerRadiusTopRight","cornerRadiusTopRight",-2094306983),(3)], null),new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"year quarter",new cljs.core.Keyword(null,"field","field",-1302436500),"quarter",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"labelExpr","labelExpr",897707185),"timeFormat(datum.value, '%q') == '1' ? timeFormat(datum.value, 'Q%q %Y') : timeFormat(datum.value, 'Q%q')",new cljs.core.Keyword(null,"labelAngle","labelAngle",-15299184),(90),new cljs.core.Keyword(null,"tickCount","tickCount",-1087099790),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"interval","interval",1708495417),"month",new cljs.core.Keyword(null,"step","step",1288888124),(3),new cljs.core.Keyword(null,"start","start",-355208981),(0)], null)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2016-01-01T00:00:00",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),"now()"], null)], null)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"item count",new cljs.core.Keyword(null,"field","field",-1302436500),"itemCount",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(200)], null)], null)], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"year quarter",new cljs.core.Keyword(null,"field","field",-1302436500),"quarter",new cljs.core.Keyword(null,"type","type",1174270348),"temporal",new cljs.core.Keyword(null,"format","format",-1306924766),"Q%q %Y"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"item count",new cljs.core.Keyword(null,"field","field",-1302436500),"itemCount",new cljs.core.Keyword(null,"type","type",1174270348),"quantitative",new cljs.core.Keyword(null,"format","format",-1306924766),".0f"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"axisX","axisX",-305600017),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),false], null)], null)], null);
});
dcs.pasi.app.view.experiment.editable = (function dcs$pasi$app$view$experiment$editable(e){
var row_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(e.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return clojure.string.starts_with_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row_map),"new-");
});
dcs.pasi.app.view.experiment.date_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd");
dcs.pasi.app.view.experiment.valid_date_QMARK_ = (function dcs$pasi$app$view$experiment$valid_date_QMARK_(s){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(dcs.pasi.app.view.experiment.date_format,s);
});
dcs.pasi.app.view.experiment.update_id = (function dcs$pasi$app$view$experiment$update_id(current_value_of_atom,old_id,new_id){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,current_value_of_atom)){
} else {
throw (new Error("Assert failed: (s/valid? seq? current-value-of-atom)"));
}

var coll = cljs.core.vec(current_value_of_atom);
var temp__5751__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__52059_SHARP_,p2__52058_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__52058_SHARP_),old_id)){
return p1__52059_SHARP_;
} else {
return null;
}
}),coll));
if(cljs.core.truth_(temp__5751__auto__)){
var n = temp__5751__auto__;
return cljs.core.seq(cljs.core.assoc_in(cljs.core.assoc_in((function (p1__52061_SHARP_){
console.log("nth",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,n)));

return p1__52061_SHARP_;
})((function (p1__52060_SHARP_){
console.log("n:",n);

return p1__52060_SHARP_;
})(coll)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"id","id",-1388402092)], null),new_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.Keyword(null,"status","status",-1997798413)], null),"saved to server"));
} else {
return coll;
}
});
dcs.pasi.app.view.experiment.add_new = (function dcs$pasi$app$view$experiment$add_new(current_value_of_atom,_not_used){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_value_of_atom,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["new-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.last(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52063_SHARP_){
return parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__52063_SHARP_,(4)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52062_SHARP_){
return clojure.string.starts_with_QMARK_(p1__52062_SHARP_,"new-");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),current_value_of_atom))))) + (1)))].join(''),new cljs.core.Keyword(null,"from","from",1815293044),cljs_time.format.unparse(dcs.pasi.app.view.experiment.date_format,cljs_time.core.today()),new cljs.core.Keyword(null,"to","to",192099007),cljs_time.format.unparse(dcs.pasi.app.view.experiment.date_format,cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)))),new cljs.core.Keyword(null,"itemCount","itemCount",1702035352),(0),new cljs.core.Keyword(null,"status","status",-1997798413),"new - not saved to server"], null));
});
dcs.pasi.app.view.experiment.upsert = (function dcs$pasi$app$view$experiment$upsert(current_value_of_atom,row_map){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,current_value_of_atom)){
} else {
throw (new Error("Assert failed: (s/valid? seq? current-value-of-atom)"));
}

var coll = cljs.core.vec(current_value_of_atom);
var n = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__52065_SHARP_,p2__52064_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__52064_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row_map))){
return p1__52065_SHARP_;
} else {
return null;
}
}),coll));
return cljs.core.seq(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll,n,row_map));
});
dcs.pasi.app.view.experiment.onCellValueChanged = (function dcs$pasi$app$view$experiment$onCellValueChanged(e){
console.log(e);

var row_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(e.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var old_value = e.oldValue;
var new_value = e.newValue;
var col = e.colDef.field;
var row_map__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,"from")) && (cljs.core.not(cljs_time.core.before_QMARK_(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(dcs.pasi.app.view.experiment.date_format,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(row_map)),cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(dcs.pasi.app.view.experiment.date_format,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(row_map)))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row_map,new cljs.core.Keyword(null,"to","to",192099007),null):row_map);
var row_map__$2 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,"to")) && (cljs.core.not(cljs_time.core.before_QMARK_(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(dcs.pasi.app.view.experiment.date_format,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(row_map__$1)),cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(dcs.pasi.app.view.experiment.date_format,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(row_map__$1)))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row_map__$1,new cljs.core.Keyword(null,"from","from",1815293044),null):row_map__$1);
var row_map__$3 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,"category")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_value,old_value))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row_map__$2,new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998),null):row_map__$2);
var row_map__$4 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["loaded from server",null,"saved to server",null], null), null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(row_map__$3)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row_map__$3,new cljs.core.Keyword(null,"status","status",-1997798413),"changed - not saved to server"):row_map__$3);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dcs.pasi.app.state.x_ds_cursor,dcs.pasi.app.view.experiment.upsert,row_map__$4);

});
dcs.pasi.app.view.experiment.category__GT_subcategories = new cljs.core.PersistentArrayMap(null, 2, ["Furniture",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chair, Kitchen, Dining or Wooden","Chest-of-Drawers, Tallboy","Small Desk, Computer Table"], null),"Soft Furniture",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mattress, single","Chaise Longue "], null)], null);
dcs.pasi.app.view.experiment.subcategories = (function dcs$pasi$app$view$experiment$subcategories(e){
console.log(e);

var row_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(e.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get.cljs$core$IFn$_invoke$arity$2(dcs.pasi.app.view.experiment.category__GT_subcategories,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(row_map))], null));
});
dcs.pasi.app.view.experiment.grid = (function dcs$pasi$app$view$experiment$grid(ds){
var spec = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"defaultColDef","defaultColDef",467717895),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resizable","resizable",-2107060206),true], null),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datePicker","datePicker",890690035),getDatePicker()], null),new cljs.core.Keyword(null,"columnDefs","columnDefs",1825078585),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),"id"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"from",new cljs.core.Keyword(null,"editable","editable",1930280326),dcs.pasi.app.view.experiment.editable,new cljs.core.Keyword(null,"onCellValueChanged","onCellValueChanged",-620283690),dcs.pasi.app.view.experiment.onCellValueChanged,new cljs.core.Keyword(null,"cellEditor","cellEditor",-1588650455),"datePicker",new cljs.core.Keyword(null,"cellEditorPopup","cellEditorPopup",-1656813312),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),"to",new cljs.core.Keyword(null,"editable","editable",1930280326),dcs.pasi.app.view.experiment.editable,new cljs.core.Keyword(null,"onCellValueChanged","onCellValueChanged",-620283690),dcs.pasi.app.view.experiment.onCellValueChanged,new cljs.core.Keyword(null,"cellEditor","cellEditor",-1588650455),"datePicker",new cljs.core.Keyword(null,"cellEditorPopup","cellEditorPopup",-1656813312),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"field","field",-1302436500),"category",new cljs.core.Keyword(null,"editable","editable",1930280326),dcs.pasi.app.view.experiment.editable,new cljs.core.Keyword(null,"onCellValueChanged","onCellValueChanged",-620283690),dcs.pasi.app.view.experiment.onCellValueChanged,new cljs.core.Keyword(null,"cellEditor","cellEditor",-1588650455),"agPopupSelectCellEditor",new cljs.core.Keyword(null,"cellEditorPopup","cellEditorPopup",-1656813312),true,new cljs.core.Keyword(null,"cellEditorParams","cellEditorParams",-1355769822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.keys(dcs.pasi.app.view.experiment.category__GT_subcategories)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"field","field",-1302436500),"subcategory",new cljs.core.Keyword(null,"editable","editable",1930280326),dcs.pasi.app.view.experiment.editable,new cljs.core.Keyword(null,"onCellValueChanged","onCellValueChanged",-620283690),dcs.pasi.app.view.experiment.onCellValueChanged,new cljs.core.Keyword(null,"cellEditor","cellEditor",-1588650455),"agPopupSelectCellEditor",new cljs.core.Keyword(null,"cellEditorPopup","cellEditorPopup",-1656813312),true,new cljs.core.Keyword(null,"cellEditorParams","cellEditorParams",-1355769822),dcs.pasi.app.view.experiment.subcategories], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),"itemCount",new cljs.core.Keyword(null,"type","type",1174270348),"rightAligned",new cljs.core.Keyword(null,"editable","editable",1930280326),true,new cljs.core.Keyword(null,"onCellValueChanged","onCellValueChanged",-620283690),dcs.pasi.app.view.experiment.onCellValueChanged], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),"status"], null)], null),new cljs.core.Keyword(null,"immutableData","immutableData",-2116580325),true,new cljs.core.Keyword(null,"animateRows","animateRows",568775869),true,new cljs.core.Keyword(null,"rowData","rowData",725590989),ds,new cljs.core.Keyword(null,"getRowNodeId","getRowNodeId",1768749081),(function (p1__52066_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__52066_SHARP_),"id");
}),new cljs.core.Keyword(null,"onGridReady","onGridReady",1150900741),(function (e){
var grid_api = e.api;
var col_api = e.columnApi;
grid_api.sizeColumnsToFit();

return cljs.core.reset_BANG_(dcs.pasi.app.state.x_grid_api_component_cursor,grid_api);
})], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ag-theme-balham","div.ag-theme-balham",824692119),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$ag_grid_react$main.AgGridReact,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gridOptions","gridOptions",1968903920),spec], null)], null)], null);
});
dcs.pasi.app.view.experiment.load_from_server = (function dcs$pasi$app$view$experiment$load_from_server(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
var url = ["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.hostname),":2021/pasi/graphql"].join('');
var model = new cljs.core.Keyword(null,"aceReusedFurniture","aceReusedFurniture",-914335978).cljs$core$IFn$_invoke$arity$1(dcs.pasi.model.queries);
var graphql = new cljs.core.Keyword(null,"graphql","graphql",-218428840).cljs$core$IFn$_invoke$arity$1(model);
var results_parser = new cljs.core.Keyword(null,"results-parser","results-parser",69648805).cljs$core$IFn$_invoke$arity$1(model);
var field_order = new cljs.core.Keyword(null,"field-order","field-order",903241043).cljs$core$IFn$_invoke$arity$1(model);
var response_handler = (function (response){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((200),status)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Error code: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var coll = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52067_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52067_SHARP_,new cljs.core.Keyword(null,"status","status",-1997798413),"loaded from server");
}),(function (){var G__52068 = cljs.core.first(cljs.core.vals(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))));
return (results_parser.cljs$core$IFn$_invoke$arity$1 ? results_parser.cljs$core$IFn$_invoke$arity$1(G__52068) : results_parser.call(null,G__52068));
})())));
return cljs.core.reset_BANG_(dcs.pasi.app.state.x_ds_cursor,coll);
});
return dcs.pasi.app.query.http_call(url,graphql,response_handler);
})], null),"Load from server"], null);
});
dcs.pasi.app.view.experiment.new_row = (function dcs$pasi$app$view$experiment$new_row(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dcs.pasi.app.state.x_ds_cursor,dcs.pasi.app.view.experiment.add_new,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"not-used","not-used",-330157808)], null));
})], null),"New row"], null);
});
dcs.pasi.app.view.experiment.save_to_server = (function dcs$pasi$app$view$experiment$save_to_server(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_e){
var changed_rows = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52069_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["loaded from server",null,"saved to server",null], null), null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__52069_SHARP_));
}),cljs.core.deref(dcs.pasi.app.state.x_ds_cursor));
console.log(cljs.core.count(changed_rows),"changed rows");

var seq__52071 = cljs.core.seq(changed_rows);
var chunk__52072 = null;
var count__52073 = (0);
var i__52074 = (0);
while(true){
if((i__52074 < count__52073)){
var m = chunk__52072.cljs$core$IIndexed$_nth$arity$2(null,i__52074);
console.log("processing changed row",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m));

var url_52075 = "http://localhost:2021/pasi/graphql";
var graphql_52076 = ["mutation {\n             upsertAceReusedFurniture(\n               category: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(m)),"\",\n               subcategory: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998).cljs$core$IFn$_invoke$arity$1(m)),"\",\n               from: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(m)),"\",\n               to: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(m)),"\",\n               itemCount: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"itemCount","itemCount",1702035352).cljs$core$IFn$_invoke$arity$1(m)),"\n             ) { id }\n           }"].join('');
var response_handler_52077 = ((function (seq__52071,chunk__52072,count__52073,i__52074,url_52075,graphql_52076,m,changed_rows){
return (function (response){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((200),status)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Error code: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vals(((function (seq__52071,chunk__52072,count__52073,i__52074,status,url_52075,graphql_52076,m,changed_rows){
return (function (p1__52070_SHARP_){
console.log(":data",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52070_SHARP_));

return p1__52070_SHARP_;
});})(seq__52071,chunk__52072,count__52073,i__52074,status,url_52075,graphql_52076,m,changed_rows))
(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))))));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dcs.pasi.app.state.x_ds_cursor,dcs.pasi.app.view.experiment.update_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),id);
});})(seq__52071,chunk__52072,count__52073,i__52074,url_52075,graphql_52076,m,changed_rows))
;
dcs.pasi.app.mutation.http_call(url_52075,graphql_52076,response_handler_52077);


var G__52078 = seq__52071;
var G__52079 = chunk__52072;
var G__52080 = count__52073;
var G__52081 = (i__52074 + (1));
seq__52071 = G__52078;
chunk__52072 = G__52079;
count__52073 = G__52080;
i__52074 = G__52081;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52071);
if(temp__5753__auto__){
var seq__52071__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52071__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52071__$1);
var G__52082 = cljs.core.chunk_rest(seq__52071__$1);
var G__52083 = c__4679__auto__;
var G__52084 = cljs.core.count(c__4679__auto__);
var G__52085 = (0);
seq__52071 = G__52082;
chunk__52072 = G__52083;
count__52073 = G__52084;
i__52074 = G__52085;
continue;
} else {
var m = cljs.core.first(seq__52071__$1);
console.log("processing changed row",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m));

var url_52086 = "http://localhost:2021/pasi/graphql";
var graphql_52087 = ["mutation {\n             upsertAceReusedFurniture(\n               category: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(m)),"\",\n               subcategory: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998).cljs$core$IFn$_invoke$arity$1(m)),"\",\n               from: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(m)),"\",\n               to: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(m)),"\",\n               itemCount: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"itemCount","itemCount",1702035352).cljs$core$IFn$_invoke$arity$1(m)),"\n             ) { id }\n           }"].join('');
var response_handler_52088 = ((function (seq__52071,chunk__52072,count__52073,i__52074,url_52086,graphql_52087,m,seq__52071__$1,temp__5753__auto__,changed_rows){
return (function (response){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((200),status)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Error code: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vals(((function (seq__52071,chunk__52072,count__52073,i__52074,status,url_52086,graphql_52087,m,seq__52071__$1,temp__5753__auto__,changed_rows){
return (function (p1__52070_SHARP_){
console.log(":data",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52070_SHARP_));

return p1__52070_SHARP_;
});})(seq__52071,chunk__52072,count__52073,i__52074,status,url_52086,graphql_52087,m,seq__52071__$1,temp__5753__auto__,changed_rows))
(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))))));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dcs.pasi.app.state.x_ds_cursor,dcs.pasi.app.view.experiment.update_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),id);
});})(seq__52071,chunk__52072,count__52073,i__52074,url_52086,graphql_52087,m,seq__52071__$1,temp__5753__auto__,changed_rows))
;
dcs.pasi.app.mutation.http_call(url_52086,graphql_52087,response_handler_52088);


var G__52089 = cljs.core.next(seq__52071__$1);
var G__52090 = null;
var G__52091 = (0);
var G__52092 = (0);
seq__52071 = G__52089;
chunk__52072 = G__52090;
count__52073 = G__52091;
i__52074 = G__52092;
continue;
}
} else {
return null;
}
}
break;
}
})], null),"Save to server"], null);
});
dcs.pasi.app.view.experiment.root = (function dcs$pasi$app$view$experiment$root(){
reagent.core.after_render(dcs.pasi.app.util.scroll_fn.cljs$core$IFn$_invoke$arity$0());

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.is-fullhd.mt-2","div.container.is-fullhd.mt-2",619991348),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.pasi.app.view.experiment.load_from_server], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.pasi.app.view.experiment.new_row], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.pasi.app.view.experiment.save_to_server], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.is-fullhd.mt-2.mb-6","div.container.is-fullhd.mt-2.mb-6",1080916357),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(250)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.pasi.app.view.experiment.grid,cljs.core.deref(dcs.pasi.app.state.x_ds_cursor)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.is-fullhd","div.container.is-fullhd",-205233727),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-4","div.column.is-4",-186249880),(function (){var raw = cljs.core.deref(dcs.pasi.app.state.x_ds_cursor);
var counts = raw;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [oz.core.vega_lite,dcs.pasi.app.view.experiment.counts_per_month_spec(counts),dcs.pasi.app.util.vega_embed_opts], null);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-4","div.column.is-4",-186249880),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Trends"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.image.is-5by3","figure.image.is-5by3",478053320),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/ace-trend.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"graph for the grid data - TODO"], null)], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=dcs.pasi.app.view.experiment.js.map
