goog.provide('dcs.pasi.app.query');
dcs.pasi.app.query.http_call = (function dcs$pasi$app$query$http_call(url,graphql,response_handler){
var c__41462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41463__auto__ = (function (){var switch__41424__auto__ = (function (state_42602){
var state_val_42603 = (state_42602[(1)]);
if((state_val_42603 === (1))){
var inst_42588 = [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_42589 = ["Content-type"];
var inst_42590 = ["application/json"];
var inst_42591 = cljs.core.PersistentHashMap.fromArrays(inst_42589,inst_42590);
var inst_42592 = [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"variables","variables",1563680814)];
var inst_42593 = [graphql,null];
var inst_42594 = cljs.core.PersistentHashMap.fromArrays(inst_42592,inst_42593);
var inst_42595 = [true,false,inst_42591,inst_42594];
var inst_42596 = cljs.core.PersistentHashMap.fromArrays(inst_42588,inst_42595);
var inst_42597 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_42596], 0));
var state_42602__$1 = state_42602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42602__$1,(2),inst_42597);
} else {
if((state_val_42603 === (2))){
var inst_42599 = (state_42602[(2)]);
var inst_42600 = (response_handler.cljs$core$IFn$_invoke$arity$1 ? response_handler.cljs$core$IFn$_invoke$arity$1(inst_42599) : response_handler.call(null,inst_42599));
var state_42602__$1 = state_42602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42602__$1,inst_42600);
} else {
return null;
}
}
});
return (function() {
var dcs$pasi$app$query$http_call_$_state_machine__41425__auto__ = null;
var dcs$pasi$app$query$http_call_$_state_machine__41425__auto____0 = (function (){
var statearr_42778 = [null,null,null,null,null,null,null];
(statearr_42778[(0)] = dcs$pasi$app$query$http_call_$_state_machine__41425__auto__);

(statearr_42778[(1)] = (1));

return statearr_42778;
});
var dcs$pasi$app$query$http_call_$_state_machine__41425__auto____1 = (function (state_42602){
while(true){
var ret_value__41426__auto__ = (function (){try{while(true){
var result__41427__auto__ = switch__41424__auto__(state_42602);
if(cljs.core.keyword_identical_QMARK_(result__41427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41427__auto__;
}
break;
}
}catch (e42788){var ex__41428__auto__ = e42788;
var statearr_42792_43007 = state_42602;
(statearr_42792_43007[(2)] = ex__41428__auto__);


if(cljs.core.seq((state_42602[(4)]))){
var statearr_42799_43008 = state_42602;
(statearr_42799_43008[(1)] = cljs.core.first((state_42602[(4)])));

} else {
throw ex__41428__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43009 = state_42602;
state_42602 = G__43009;
continue;
} else {
return ret_value__41426__auto__;
}
break;
}
});
dcs$pasi$app$query$http_call_$_state_machine__41425__auto__ = function(state_42602){
switch(arguments.length){
case 0:
return dcs$pasi$app$query$http_call_$_state_machine__41425__auto____0.call(this);
case 1:
return dcs$pasi$app$query$http_call_$_state_machine__41425__auto____1.call(this,state_42602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$pasi$app$query$http_call_$_state_machine__41425__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$pasi$app$query$http_call_$_state_machine__41425__auto____0;
dcs$pasi$app$query$http_call_$_state_machine__41425__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$pasi$app$query$http_call_$_state_machine__41425__auto____1;
return dcs$pasi$app$query$http_call_$_state_machine__41425__auto__;
})()
})();
var state__41464__auto__ = (function (){var statearr_42874 = f__41463__auto__();
(statearr_42874[(6)] = c__41462__auto__);

return statearr_42874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41464__auto__);
}));

return c__41462__auto__;
});
dcs.pasi.app.query.response_handler = (function dcs$pasi$app$query$response_handler(result_parser,params,response){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((200),status)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Error code: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var coll = cljs.core.first(cljs.core.vals(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))));
return (function (p1__42901_SHARP_){
return params.successCallback(cljs.core.clj__GT_js(p1__42901_SHARP_),cljs.core.clj__GT_js(cljs.core.count(p1__42901_SHARP_)));
})((function (p1__42900_SHARP_){
return p1__42900_SHARP_;
})((function (){var G__42945 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"rowId","rowId",632540453),(index + (1)));
}),coll);
return (result_parser.cljs$core$IFn$_invoke$arity$1 ? result_parser.cljs$core$IFn$_invoke$arity$1(G__42945) : result_parser.call(null,G__42945));
})()));
});
dcs.pasi.app.query.query = (function dcs$pasi$app$query$query(grid_api_component,params,type_kw,editable_fields,url){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,type_kw)){
} else {
throw (new Error("Assert failed: (s/valid? keyword? type-kw)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.set_QMARK_,editable_fields)){
} else {
throw (new Error("Assert failed: (s/valid? set? editable-fields)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,url)){
} else {
throw (new Error("Assert failed: (s/valid? string? url)"));
}

var model = (type_kw.cljs$core$IFn$_invoke$arity$1 ? type_kw.cljs$core$IFn$_invoke$arity$1(dcs.pasi.model.queries) : type_kw.call(null,dcs.pasi.model.queries));
if((model == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["No such model for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_kw)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var graphql = new cljs.core.Keyword(null,"graphql","graphql",-218428840).cljs$core$IFn$_invoke$arity$1(model);
var results_parser = new cljs.core.Keyword(null,"results-parser","results-parser",69648805).cljs$core$IFn$_invoke$arity$1(model);
var field_order = new cljs.core.Keyword(null,"field-order","field-order",903241043).cljs$core$IFn$_invoke$arity$1(model);
var col_defs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42963_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.name(p1__42963_SHARP_)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rowId","rowId",632540453),p1__42963_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),"agNumberColumnFilter"], null):null),((cljs.core.contains_QMARK_(editable_fields,p1__42963_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editable","editable",1930280326),true], null):null),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"refProcess","refProcess",654028611),null,new cljs.core.Keyword(null,"fraction","fraction",107940680),null,new cljs.core.Keyword(null,"process","process",1643192938),null,new cljs.core.Keyword(null,"abbr","abbr",2088591884),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"itemKg","itemKg",720425748),null,new cljs.core.Keyword(null,"qid","qid",528505110),null,new cljs.core.Keyword(null,"batchKg","batchKg",-1306468617),null,new cljs.core.Keyword(null,"itemCount","itemCount",1702035352),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),p1__42963_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),(100)], null):null),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),null,new cljs.core.Keyword(null,"carbonWeighting","carbonWeighting",-776255024),null,new cljs.core.Keyword(null,"furnitureCategory","furnitureCategory",1379781074),null,new cljs.core.Keyword(null,"materialCategory","materialCategory",-2053564395),null], null), null),p1__42963_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),(130)], null):null),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"carbonSavingCo2eKg","carbonSavingCo2eKg",316809450),null], null), null),p1__42963_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),(160)], null):null),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fraction","fraction",107940680),null,new cljs.core.Keyword(null,"carbonSavingCo2eKg","carbonSavingCo2eKg",316809450),null,new cljs.core.Keyword(null,"carbonWeighting","carbonWeighting",-776255024),null,new cljs.core.Keyword(null,"batchKg","batchKg",-1306468617),null,new cljs.core.Keyword(null,"itemCount","itemCount",1702035352),null,new cljs.core.Keyword(null,"batchTonnes","batchTonnes",-2041076421),null], null), null),p1__42963_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"rightAligned"], null):null),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fraction","fraction",107940680),null,new cljs.core.Keyword(null,"carbonSavingCo2eKg","carbonSavingCo2eKg",316809450),null,new cljs.core.Keyword(null,"carbonWeighting","carbonWeighting",-776255024),null,new cljs.core.Keyword(null,"batchKg","batchKg",-1306468617),null,new cljs.core.Keyword(null,"batchTonnes","batchTonnes",-2041076421),null], null), null),p1__42963_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valueFormatter","valueFormatter",-941066161),(function (params__$1){
var v = params__$1.value;
if(typeof v === 'number'){
return v.toFixed((2));
} else {
return v;
}
})], null):null),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabler","enabler",1883899765),null], null), null),p1__42963_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sortable","sortable",2109633621),true], null):null)], 0));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42962_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),p1__42962_SHARP_);
}),field_order));
var response_handler_SINGLEQUOTE_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dcs.pasi.app.query.response_handler,results_parser,params);
grid_api_component.setColumnDefs(cljs.core.clj__GT_js(col_defs));

return dcs.pasi.app.query.http_call(url,graphql,response_handler_SINGLEQUOTE_);
});

//# sourceMappingURL=dcs.pasi.app.query.js.map
