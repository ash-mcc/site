goog.provide('dcs.pasi.app.mutation');
dcs.pasi.app.mutation.http_call = (function dcs$pasi$app$mutation$http_call(url,graphql,response_handler){
var c__41462__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41463__auto__ = (function (){var switch__41424__auto__ = (function (state_43773){
var state_val_43774 = (state_43773[(1)]);
if((state_val_43774 === (1))){
var inst_43757 = [new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_43758 = ["Content-type"];
var inst_43759 = ["application/json"];
var inst_43760 = cljs.core.PersistentHashMap.fromArrays(inst_43758,inst_43759);
var inst_43761 = [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"variables","variables",1563680814)];
var inst_43762 = [graphql,null];
var inst_43763 = cljs.core.PersistentHashMap.fromArrays(inst_43761,inst_43762);
var inst_43764 = cljs.core.clj__GT_js(inst_43763);
var inst_43765 = JSON.stringify(inst_43764);
var inst_43766 = [true,false,inst_43760,inst_43765];
var inst_43767 = cljs.core.PersistentHashMap.fromArrays(inst_43757,inst_43766);
var inst_43768 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_43767], 0));
var state_43773__$1 = state_43773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43773__$1,(2),inst_43768);
} else {
if((state_val_43774 === (2))){
var inst_43770 = (state_43773[(2)]);
var inst_43771 = (response_handler.cljs$core$IFn$_invoke$arity$1 ? response_handler.cljs$core$IFn$_invoke$arity$1(inst_43770) : response_handler.call(null,inst_43770));
var state_43773__$1 = state_43773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43773__$1,inst_43771);
} else {
return null;
}
}
});
return (function() {
var dcs$pasi$app$mutation$http_call_$_state_machine__41425__auto__ = null;
var dcs$pasi$app$mutation$http_call_$_state_machine__41425__auto____0 = (function (){
var statearr_43775 = [null,null,null,null,null,null,null];
(statearr_43775[(0)] = dcs$pasi$app$mutation$http_call_$_state_machine__41425__auto__);

(statearr_43775[(1)] = (1));

return statearr_43775;
});
var dcs$pasi$app$mutation$http_call_$_state_machine__41425__auto____1 = (function (state_43773){
while(true){
var ret_value__41426__auto__ = (function (){try{while(true){
var result__41427__auto__ = switch__41424__auto__(state_43773);
if(cljs.core.keyword_identical_QMARK_(result__41427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41427__auto__;
}
break;
}
}catch (e43776){var ex__41428__auto__ = e43776;
var statearr_43777_43785 = state_43773;
(statearr_43777_43785[(2)] = ex__41428__auto__);


if(cljs.core.seq((state_43773[(4)]))){
var statearr_43778_43786 = state_43773;
(statearr_43778_43786[(1)] = cljs.core.first((state_43773[(4)])));

} else {
throw ex__41428__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43787 = state_43773;
state_43773 = G__43787;
continue;
} else {
return ret_value__41426__auto__;
}
break;
}
});
dcs$pasi$app$mutation$http_call_$_state_machine__41425__auto__ = function(state_43773){
switch(arguments.length){
case 0:
return dcs$pasi$app$mutation$http_call_$_state_machine__41425__auto____0.call(this);
case 1:
return dcs$pasi$app$mutation$http_call_$_state_machine__41425__auto____1.call(this,state_43773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dcs$pasi$app$mutation$http_call_$_state_machine__41425__auto__.cljs$core$IFn$_invoke$arity$0 = dcs$pasi$app$mutation$http_call_$_state_machine__41425__auto____0;
dcs$pasi$app$mutation$http_call_$_state_machine__41425__auto__.cljs$core$IFn$_invoke$arity$1 = dcs$pasi$app$mutation$http_call_$_state_machine__41425__auto____1;
return dcs$pasi$app$mutation$http_call_$_state_machine__41425__auto__;
})()
})();
var state__41464__auto__ = (function (){var statearr_43779 = f__41463__auto__();
(statearr_43779[(6)] = c__41462__auto__);

return statearr_43779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41464__auto__);
}));

return c__41462__auto__;
});

//# sourceMappingURL=dcs.pasi.app.mutation.js.map
