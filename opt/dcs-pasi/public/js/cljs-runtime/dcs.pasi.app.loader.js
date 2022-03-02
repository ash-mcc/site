goog.provide('dcs.pasi.app.loader');
dcs.pasi.app.loader.fetch = (function dcs$pasi$app$loader$fetch(url,body_handler){
console.log(["Fetching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''));

var c__41462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41463__auto__ = (function (){var switch__41377__auto__ = (function (state_48296){
var state_val_48297 = (state_48296[(1)]);
if((state_val_48297 === (7))){
var state_48296__$1 = state_48296;
var statearr_48298_48316 = state_48296__$1;
(statearr_48298_48316[(1)] = (9));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48297 === (1))){
var inst_48266 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_48267 = [false];
var inst_48268 = cljs.core.PersistentHashMap.fromArrays(inst_48266,inst_48267);
var inst_48269 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48268], 0));
var state_48296__$1 = state_48296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48296__$1,(2),inst_48269);
} else {
if((state_val_48297 === (4))){
var inst_48276 = (state_48296[(7)]);
var inst_48282 = typeof inst_48276 === 'string';
var state_48296__$1 = state_48296;
if(cljs.core.truth_(inst_48282)){
var statearr_48300_48317 = state_48296__$1;
(statearr_48300_48317[(1)] = (6));

} else {
var statearr_48301_48318 = state_48296__$1;
(statearr_48301_48318[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48297 === (6))){
var inst_48276 = (state_48296[(7)]);
var inst_48284 = JSON.parse(inst_48276);
var state_48296__$1 = state_48296;
var statearr_48302_48319 = state_48296__$1;
(statearr_48302_48319[(2)] = inst_48284);

(statearr_48302_48319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48297 === (3))){
var inst_48276 = (state_48296[(7)]);
var inst_48279 = clojure.string.replace(inst_48276,"\r","");
var inst_48280 = testdouble.cljs.csv.read_csv(inst_48279);
var state_48296__$1 = state_48296;
var statearr_48303_48320 = state_48296__$1;
(statearr_48303_48320[(2)] = inst_48280);

(statearr_48303_48320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48297 === (2))){
var inst_48271 = (state_48296[(2)]);
var inst_48272 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_48271);
var inst_48273 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_48271);
var inst_48274 = ["Response from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),": status=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48272)," success=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48273)].join('');
var inst_48275 = console.log(inst_48274);
var inst_48276 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_48271);
var inst_48277 = clojure.string.ends_with_QMARK_(url,".csv");
var state_48296__$1 = (function (){var statearr_48304 = state_48296;
(statearr_48304[(8)] = inst_48275);

(statearr_48304[(7)] = inst_48276);

return statearr_48304;
})();
if(inst_48277){
var statearr_48305_48321 = state_48296__$1;
(statearr_48305_48321[(1)] = (3));

} else {
var statearr_48306_48322 = state_48296__$1;
(statearr_48306_48322[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48297 === (11))){
var inst_48289 = (state_48296[(2)]);
var state_48296__$1 = state_48296;
var statearr_48307_48323 = state_48296__$1;
(statearr_48307_48323[(2)] = inst_48289);

(statearr_48307_48323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48297 === (9))){
var inst_48276 = (state_48296[(7)]);
var state_48296__$1 = state_48296;
var statearr_48308_48324 = state_48296__$1;
(statearr_48308_48324[(2)] = inst_48276);

(statearr_48308_48324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48297 === (5))){
var inst_48293 = (state_48296[(2)]);
var inst_48294 = (body_handler.cljs$core$IFn$_invoke$arity$1 ? body_handler.cljs$core$IFn$_invoke$arity$1(inst_48293) : body_handler.call(null,inst_48293));
var state_48296__$1 = state_48296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48296__$1,inst_48294);
} else {
if((state_val_48297 === (10))){
var state_48296__$1 = state_48296;
var statearr_48309_48325 = state_48296__$1;
(statearr_48309_48325[(2)] = null);

(statearr_48309_48325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48297 === (8))){
var inst_48291 = (state_48296[(2)]);
var state_48296__$1 = state_48296;
var statearr_48310_48326 = state_48296__$1;
(statearr_48310_48326[(2)] = inst_48291);

(statearr_48310_48326[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var dcs$pasi$app$loader$fetch_$_state_machine__41378__auto__ = null;
var dcs$pasi$app$loader$fetch_$_state_machine__41378__auto____0 = (function (){
var statearr_48311 = [null,null,null,null,null,null,null,null,null];
(statearr_48311[(0)] = dcs$pasi$app$loader$fetch_$_state_machine__41378__auto__);

(statearr_48311[(1)] = (1));

return statearr_48311;
});
var dcs$pasi$app$loader$fetch_$_state_machine__41378__auto____1 = (function (state_48296){
while(true){
var ret_value__41379__auto__ = (function (){try{while(true){
var result__41380__auto__ = switch__41377__auto__(state_48296);
if(cljs.core.keyword_identical_QMARK_(result__41380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41380__auto__;
}
break;
}
}catch (e48312){var ex__41381__auto__ = e48312;
var statearr_48313_48327 = state_48296;
(statearr_48313_48327[(2)] = ex__41381__auto__);


if(cljs.core.seq((state_48296[(4)]))){
var statearr_48314_48328 = state_48296;
(statearr_48314_48328[(1)] = cljs.core.first((state_48296[(4)])));

} else {
throw ex__41381__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48329 = state_48296;
state_48296 = G__48329;
continue;
} else {
return ret_value__41379__auto__;
}
break;
}
});
dcs$pasi$app$loader$fetch_$_state_machine__41378__auto__ = function(state_48296){
switch(arguments.length){
case 0:
return dcs$pasi$app$loader$fetch_$_state_machine__41378__auto____0.call(this);
case 1:
return dcs$pasi$app$loader$fetch_$_state_machine__41378__auto____1.call(this,state_48296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$pasi$app$loader$fetch_$_state_machine__41378__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$pasi$app$loader$fetch_$_state_machine__41378__auto____0;
dcs$pasi$app$loader$fetch_$_state_machine__41378__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$pasi$app$loader$fetch_$_state_machine__41378__auto____1;
return dcs$pasi$app$loader$fetch_$_state_machine__41378__auto__;
})()
})();
var state__41464__auto__ = (function (){var statearr_48315 = f__41463__auto__();
(statearr_48315[(6)] = c__41462__auto__);

return statearr_48315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41464__auto__);
}));

return c__41462__auto__;
});
dcs.pasi.app.loader.load_data = (function dcs$pasi$app$loader$load_data(){
return console.log("Loading data files");
});

//# sourceMappingURL=dcs.pasi.app.loader.js.map
