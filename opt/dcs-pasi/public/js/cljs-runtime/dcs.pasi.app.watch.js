goog.provide('dcs.pasi.app.watch');
cljs.core.add_watch(dcs.pasi.app.state.x_ds_cursor,new cljs.core.Keyword(null,"x-aggrid","x-aggrid",-1827497037),(function (_key,_atom,old_state,new_state){
var vec__60891 = clojure.data.diff(cljs.core.set(old_state),cljs.core.set(new_state));
var only_in_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60891,(0),null);
var only_in_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60891,(1),null);
var _in_both = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60891,(2),null);
if(((cljs.core.seq(only_in_a)) || (cljs.core.seq(only_in_b)))){
var temp__5753__auto__ = cljs.core.deref(dcs.pasi.app.state.x_grid_api_component_cursor);
if(cljs.core.truth_(temp__5753__auto__)){
var component = temp__5753__auto__;
return component.setRowData(cljs.core.clj__GT_js(new_state));
} else {
return null;
}
} else {
return null;
}
}));
cljs.core.add_watch(dcs.pasi.app.state.unauthn_wr_ds_cursor,new cljs.core.Keyword(null,"unauthn-wr-ds","unauthn-wr-ds",-892239342),(function (_key,_atom,old_state,new_state){
var vec__60903 = clojure.data.diff(cljs.core.set(old_state),cljs.core.set(new_state));
var only_in_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60903,(0),null);
var only_in_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60903,(1),null);
var _in_both = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60903,(2),null);
if(((cljs.core.seq(only_in_a)) || (cljs.core.seq(only_in_b)))){
cljs.core.reset_BANG_(dcs.pasi.app.state.unauthn_selected_years_cursor,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60902_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__60902_SHARP_,(0),(4));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),new_state)))));

cljs.core.reset_BANG_(dcs.pasi.app.state.unauthn_selected_orgs_cursor,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enabler","enabler",1883899765),new_state)));

return cljs.core.reset_BANG_(dcs.pasi.app.state.unauthn_selected_streams_cursor,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wasteStream","wasteStream",563074007),new_state)));
} else {
return null;
}
}));
cljs.core.add_watch(dcs.pasi.app.state.unauthn_selected_orgs_cursor,new cljs.core.Keyword(null,"unauthn-selected-orgs","unauthn-selected-orgs",1373113539),(function (_key,_atom,old_state,new_state){
var vec__60908 = clojure.data.diff(cljs.core.set(old_state),cljs.core.set(new_state));
var only_in_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60908,(0),null);
var only_in_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60908,(1),null);
var _in_both = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60908,(2),null);
if(((cljs.core.seq(only_in_a)) || (cljs.core.seq(only_in_b)))){
var wr_ds = cljs.core.deref(dcs.pasi.app.state.unauthn_wr_ds_cursor);
var grid_api = cljs.core.deref(dcs.pasi.app.state.unauthn_grid_api_cursor);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.seq(wr_ds);
if(and__4251__auto__){
return grid_api;
} else {
return and__4251__auto__;
}
})())){
return grid_api.setRowData(cljs.core.clj__GT_js(dcs.pasi.app.view.unauthenticated.tmp.filter_ds(wr_ds,cljs.core.deref(dcs.pasi.app.state.unauthn_selected_years_cursor),new_state,cljs.core.deref(dcs.pasi.app.state.unauthn_selected_streams_cursor))));
} else {
return null;
}
} else {
return null;
}
}));
cljs.core.add_watch(dcs.pasi.app.state.unauthn_selected_years_cursor,new cljs.core.Keyword(null,"unauthn-selected-years","unauthn-selected-years",-250736564),(function (_key,_atom,old_state,new_state){
var vec__60911 = clojure.data.diff(cljs.core.set(old_state),cljs.core.set(new_state));
var only_in_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60911,(0),null);
var only_in_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60911,(1),null);
var _in_both = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60911,(2),null);
if(((cljs.core.seq(only_in_a)) || (cljs.core.seq(only_in_b)))){
var wr_ds = cljs.core.deref(dcs.pasi.app.state.unauthn_wr_ds_cursor);
var grid_api = cljs.core.deref(dcs.pasi.app.state.unauthn_grid_api_cursor);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.seq(wr_ds);
if(and__4251__auto__){
return grid_api;
} else {
return and__4251__auto__;
}
})())){
return grid_api.setRowData(cljs.core.clj__GT_js(dcs.pasi.app.view.unauthenticated.tmp.filter_ds(wr_ds,new_state,cljs.core.deref(dcs.pasi.app.state.unauthn_selected_orgs_cursor),cljs.core.deref(dcs.pasi.app.state.unauthn_selected_streams_cursor))));
} else {
return null;
}
} else {
return null;
}
}));
cljs.core.add_watch(dcs.pasi.app.state.unauthn_selected_streams_cursor,new cljs.core.Keyword(null,"unauthn-selected-streams","unauthn-selected-streams",-410461843),(function (_key,_atom,old_state,new_state){
var vec__60914 = clojure.data.diff(cljs.core.set(old_state),cljs.core.set(new_state));
var only_in_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60914,(0),null);
var only_in_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60914,(1),null);
var _in_both = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60914,(2),null);
if(((cljs.core.seq(only_in_a)) || (cljs.core.seq(only_in_b)))){
var wr_ds = cljs.core.deref(dcs.pasi.app.state.unauthn_wr_ds_cursor);
var grid_api = cljs.core.deref(dcs.pasi.app.state.unauthn_grid_api_cursor);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.seq(wr_ds);
if(and__4251__auto__){
return grid_api;
} else {
return and__4251__auto__;
}
})())){
return grid_api.setRowData(cljs.core.clj__GT_js(dcs.pasi.app.view.unauthenticated.tmp.filter_ds(wr_ds,cljs.core.deref(dcs.pasi.app.state.unauthn_selected_years_cursor),cljs.core.deref(dcs.pasi.app.state.unauthn_selected_orgs_cursor),new_state)));
} else {
return null;
}
} else {
return null;
}
}));

//# sourceMappingURL=dcs.pasi.app.watch.js.map
