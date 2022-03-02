goog.provide('dcs.pasi.app.view.unauthenticated.tmp');
dcs.pasi.app.view.unauthenticated.tmp.load_from_server = (function dcs$pasi$app$view$unauthenticated$tmp$load_from_server(){
var url = ["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.hostname),":2021/pasi/graphql"].join('');
var model = new cljs.core.Keyword(null,"dcsWasteReduction","dcsWasteReduction",1294729923).cljs$core$IFn$_invoke$arity$1(dcs.pasi.model.queries);
var graphql = new cljs.core.Keyword(null,"graphql","graphql",-218428840).cljs$core$IFn$_invoke$arity$1(model);
var results_parser = new cljs.core.Keyword(null,"results-parser","results-parser",69648805).cljs$core$IFn$_invoke$arity$1(model);
var field_order = new cljs.core.Keyword(null,"field-order","field-order",903241043).cljs$core$IFn$_invoke$arity$1(model);
var response_handler = (function (response){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((200),status)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Error code: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var coll = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60878_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60878_SHARP_,new cljs.core.Keyword(null,"status","status",-1997798413),"loaded from server");
}),(function (){var G__60879 = cljs.core.first(cljs.core.vals(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))));
return (results_parser.cljs$core$IFn$_invoke$arity$1 ? results_parser.cljs$core$IFn$_invoke$arity$1(G__60879) : results_parser.call(null,G__60879));
})())));
return cljs.core.reset_BANG_(dcs.pasi.app.state.unauthn_wr_ds_cursor,coll);
});
return dcs.pasi.app.query.http_call(url,graphql,response_handler);
});
dcs.pasi.app.view.unauthenticated.tmp.filter_ds = (function dcs$pasi$app$view$unauthenticated$tmp$filter_ds(wr_ds,selected_years,selected_orgs,selected_streams){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.set_QMARK_,selected_years)){
} else {
throw (new Error("Assert failed: (s/valid? set? selected-years)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.set_QMARK_,selected_orgs)){
} else {
throw (new Error("Assert failed: (s/valid? set? selected-orgs)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.set_QMARK_,selected_streams)){
} else {
throw (new Error("Assert failed: (s/valid? set? selected-streams)"));
}

return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60882_SHARP_){
return cljs.core.contains_QMARK_(selected_streams,new cljs.core.Keyword(null,"wasteStream","wasteStream",563074007).cljs$core$IFn$_invoke$arity$1(p1__60882_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60881_SHARP_){
return cljs.core.contains_QMARK_(selected_orgs,new cljs.core.Keyword(null,"enabler","enabler",1883899765).cljs$core$IFn$_invoke$arity$1(p1__60881_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60880_SHARP_){
return cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(selected_years,(function (){var from = parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__60880_SHARP_),(0),(4)));
var to = (((!(clojure.string.starts_with_QMARK_(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__60880_SHARP_),"01-01-"))))?parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__60880_SHARP_),(0),(4))):null);
return cljs.core.PersistentHashSet.createAsIfByAssoc([to,from]);
})()));
}),wr_ds)));
});
dcs.pasi.app.view.unauthenticated.tmp.wasteStreams = cljs.core.PersistentVector.fromArray(["Textiles","Textiles and Footwear","Aluminium cans and foil","Footwear","Mixed Cans","Scrap Metal","Steel Cans","PET (including forming)","WEEE - Small","WEEE - Mixed","WEEE - Large","PS (including forming)","Wood","Average Plastics","Average plastic rigid (including bottles)","HDPE (including forming)","LDPE and LLDPE (including forming)","Average plastic film (including bags)","PP (including forming)","PVC (including forming)","Board","Mixed paper and board","Paper","Books","Mineral Oil","WEEE - Fridges and Freezers","Food and Drink Waste (wet AD)","Food and Drink Waste (Composting)","Batteries (Post Consumer Non Automotive)","Glass (colour separated)","Mixed Food and Garden Waste (dry AD)","Garden Waste (dry AD)","Mixed Food and Garden Waste (Composting)","Garden Waste Composting","Glass (mixed colours)","Plasterboard","Aggregates (Rubble)"], true);
dcs.pasi.app.view.unauthenticated.tmp.geojson_template = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentArrayMap(null, 8, ["n",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Site name"], null),"r",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Region"], null),"p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Permit"], null),"s",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Status"], null),"a",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Activities"], null),"k",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Accepts"], null),"t",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60883_SHARP_){
return ["m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60883_SHARP_)].join('');
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),dcs.pasi.app.view.unauthenticated.tmp.wasteStreams)),new cljs.core.Keyword(null,"name","name",1843675177),"Materials"], null),"z",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Total incoming tonnes"], null)], null),new cljs.core.Keyword(null,"attribution","attribution",1937239286),"SEPA",new cljs.core.Keyword(null,"description","description",-1428560544),"Waste site locations and the quantities of incoming materials (2019)"], null)], null);
dcs.pasi.app.view.unauthenticated.tmp.__GT_geojson_as_a_clj_structure = (function dcs$pasi$app$view$unauthenticated$tmp$__GT_geojson_as_a_clj_structure(ds){
console.log(["->geojson-as-a-clj-structure encoding ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ds))," rows"].join(''));

var ds__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60886){
var vec__60887 = p__60886;
var enabler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60887,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60887,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enabler","enabler",1883899765),enabler,new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll)),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll)),new cljs.core.Keyword(null,"per-wasteStream-carbonSavingCo2eKg","per-wasteStream-carbonSavingCo2eKg",651304546),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,wasteStream){
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"carbonSavingCo2eKg","carbonSavingCo2eKg",316809450),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60884_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wasteStream,new cljs.core.Keyword(null,"wasteStream","wasteStream",563074007).cljs$core$IFn$_invoke$arity$1(p1__60884_SHARP_));
}),coll)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),v], null);
}),dcs.pasi.app.view.unauthenticated.tmp.wasteStreams)),new cljs.core.Keyword(null,"total-carbonSavingCo2eKg","total-carbonSavingCo2eKg",1785657963),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"carbonSavingCo2eKg","carbonSavingCo2eKg",316809450),coll))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"enabler","enabler",1883899765),ds));
var features = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60885_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"properties","properties",685819552)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(p1__60885_SHARP_),new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(p1__60885_SHARP_)], null)], null),"Feature",new cljs.core.PersistentArrayMap(null, 8, ["n",new cljs.core.Keyword(null,"enabler","enabler",1883899765).cljs$core$IFn$_invoke$arity$1(p1__60885_SHARP_),"r","region","p","permit","s","status","a","activities","k","accepts","t",new cljs.core.Keyword(null,"per-wasteStream-carbonSavingCo2eKg","per-wasteStream-carbonSavingCo2eKg",651304546).cljs$core$IFn$_invoke$arity$1(p1__60885_SHARP_),"z",new cljs.core.Keyword(null,"total-carbonSavingCo2eKg","total-carbonSavingCo2eKg",1785657963).cljs$core$IFn$_invoke$arity$1(p1__60885_SHARP_)], null)]);
}),ds__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dcs.pasi.app.view.unauthenticated.tmp.geojson_template,new cljs.core.Keyword(null,"features","features",-1146962336),features);
});

//# sourceMappingURL=dcs.pasi.app.view.unauthenticated.tmp.js.map
