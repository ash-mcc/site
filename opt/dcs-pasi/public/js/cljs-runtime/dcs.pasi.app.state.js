goog.provide('dcs.pasi.app.state');
if((typeof dcs !== 'undefined') && (typeof dcs.pasi !== 'undefined') && (typeof dcs.pasi.app !== 'undefined') && (typeof dcs.pasi.app.state !== 'undefined') && (typeof dcs.pasi.app.state.root !== 'undefined')){
} else {
dcs.pasi.app.state.root = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937),null,new cljs.core.Keyword(null,"participant","participant",1962214029),null,new cljs.core.Keyword(null,"grid-api-component","grid-api-component",433717481),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ace","ace",1638744810),null,new cljs.core.Keyword(null,"anon","anon",-765650478),null,new cljs.core.Keyword(null,"dcs","dcs",1021102745),null,new cljs.core.Keyword(null,"frshr","frshr",-1983456992),null,new cljs.core.Keyword(null,"stcmf","stcmf",2061124438),null,new cljs.core.Keyword(null,"zws","zws",-758340415),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null),new cljs.core.Keyword(null,"type-kw","type-kw",669829103),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ace","ace",1638744810),new cljs.core.Keyword(null,"aceReusedFurniture","aceReusedFurniture",-914335978),new cljs.core.Keyword(null,"anon","anon",-765650478),new cljs.core.Keyword(null,"dcsWasteReduction","dcsWasteReduction",1294729923),new cljs.core.Keyword(null,"dcs","dcs",1021102745),new cljs.core.Keyword(null,"dcsWasteReduction","dcsWasteReduction",1294729923),new cljs.core.Keyword(null,"frshr","frshr",-1983456992),new cljs.core.Keyword(null,"frshrReusedMaterial","frshrReusedMaterial",519267748),new cljs.core.Keyword(null,"stcmf","stcmf",2061124438),new cljs.core.Keyword(null,"stcmfRedistributedFood","stcmfRedistributedFood",1210106439),new cljs.core.Keyword(null,"zws","zws",-758340415),new cljs.core.Keyword(null,"zwsCarbonMetric","zwsCarbonMetric",-441146621)], null),new cljs.core.Keyword(null,"x-ds","x-ds",-1621805115),null,new cljs.core.Keyword(null,"unauthn","unauthn",1584889132),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"wr-ds","wr-ds",1673708794),null,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"years","years",-1298579689),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"orgs","orgs",155776628),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"streams","streams",1465783789),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"groupby","groupby",-497368173),"Waste stream",new cljs.core.Keyword(null,"charttype","charttype",-1333830530),"Bar chart"], null),new cljs.core.Keyword(null,"grid-api","grid-api",-176163200),null,new cljs.core.Keyword(null,"geojson","geojson",-719473398),null], null)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.pasi !== 'undefined') && (typeof dcs.pasi.app !== 'undefined') && (typeof dcs.pasi.app.state !== 'undefined') && (typeof dcs.pasi.app.state.route_match_cursor !== 'undefined')){
} else {
dcs.pasi.app.state.route_match_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937)], null));
}
if((typeof dcs !== 'undefined') && (typeof dcs.pasi !== 'undefined') && (typeof dcs.pasi.app !== 'undefined') && (typeof dcs.pasi.app.state !== 'undefined') && (typeof dcs.pasi.app.state.participant_cursor !== 'undefined')){
} else {
dcs.pasi.app.state.participant_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participant","participant",1962214029)], null));
}
dcs.pasi.app.state.ace_grid_api_component_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid-api-component","grid-api-component",433717481),new cljs.core.Keyword(null,"ace","ace",1638744810)], null));
dcs.pasi.app.state.anon_grid_api_component_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid-api-component","grid-api-component",433717481),new cljs.core.Keyword(null,"anon","anon",-765650478)], null));
dcs.pasi.app.state.dcs_grid_api_component_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid-api-component","grid-api-component",433717481),new cljs.core.Keyword(null,"dcs","dcs",1021102745)], null));
dcs.pasi.app.state.frshr_grid_api_component_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid-api-component","grid-api-component",433717481),new cljs.core.Keyword(null,"frshr","frshr",-1983456992)], null));
dcs.pasi.app.state.stcmf_grid_api_component_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid-api-component","grid-api-component",433717481),new cljs.core.Keyword(null,"stcmf","stcmf",2061124438)], null));
dcs.pasi.app.state.zws_grid_api_component_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid-api-component","grid-api-component",433717481),new cljs.core.Keyword(null,"zws","zws",-758340415)], null));
dcs.pasi.app.state.x_grid_api_component_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid-api-component","grid-api-component",433717481),new cljs.core.Keyword(null,"x","x",2099068185)], null));
dcs.pasi.app.state.ace_type_kw_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-kw","type-kw",669829103),new cljs.core.Keyword(null,"ace","ace",1638744810)], null));
dcs.pasi.app.state.anon_type_kw_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-kw","type-kw",669829103),new cljs.core.Keyword(null,"anon","anon",-765650478)], null));
dcs.pasi.app.state.dcs_type_kw_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-kw","type-kw",669829103),new cljs.core.Keyword(null,"dcs","dcs",1021102745)], null));
dcs.pasi.app.state.frshr_type_kw_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-kw","type-kw",669829103),new cljs.core.Keyword(null,"frshr","frshr",-1983456992)], null));
dcs.pasi.app.state.stcmf_type_kw_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-kw","type-kw",669829103),new cljs.core.Keyword(null,"stcmf","stcmf",2061124438)], null));
dcs.pasi.app.state.zws_type_kw_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-kw","type-kw",669829103),new cljs.core.Keyword(null,"zws","zws",-758340415)], null));
dcs.pasi.app.state.x_ds_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-ds","x-ds",-1621805115)], null));
dcs.pasi.app.state.unauthn_wr_ds_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unauthn","unauthn",1584889132),new cljs.core.Keyword(null,"wr-ds","wr-ds",1673708794)], null));
dcs.pasi.app.state.unauthn_selected_years_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unauthn","unauthn",1584889132),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"years","years",-1298579689)], null));
dcs.pasi.app.state.unauthn_selected_orgs_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unauthn","unauthn",1584889132),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"orgs","orgs",155776628)], null));
dcs.pasi.app.state.unauthn_selected_streams_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unauthn","unauthn",1584889132),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"streams","streams",1465783789)], null));
dcs.pasi.app.state.unauthn_selected_groupby_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unauthn","unauthn",1584889132),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"groupby","groupby",-497368173)], null));
dcs.pasi.app.state.unauthn_selected_charttype_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unauthn","unauthn",1584889132),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"charttype","charttype",-1333830530)], null));
dcs.pasi.app.state.unauthn_grid_api_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unauthn","unauthn",1584889132),new cljs.core.Keyword(null,"grid-api","grid-api",-176163200)], null));
dcs.pasi.app.state.geojson_cursor = reagent.core.cursor(dcs.pasi.app.state.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unauthn","unauthn",1584889132),new cljs.core.Keyword(null,"geojson","geojson",-719473398)], null));

//# sourceMappingURL=dcs.pasi.app.state.js.map