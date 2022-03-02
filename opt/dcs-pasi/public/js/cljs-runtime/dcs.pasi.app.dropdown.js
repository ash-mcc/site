goog.provide('dcs.pasi.app.dropdown');
dcs.pasi.app.dropdown.toggle_is_activate = (function dcs$pasi$app$dropdown$toggle_is_activate(id){
var myClass = document.getElementById(id).classList;
return myClass.toggle("is-active");
});
dcs.pasi.app.dropdown.dropdown = (function dcs$pasi$app$dropdown$dropdown(dropdown_id,prompt,values,on_click_handler){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown","div.dropdown",1029783296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),dropdown_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-trigger","div.dropdown-trigger",646734844),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-haspopup","aria-haspopup",-1220141412),true,new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
event.preventDefault();

return dcs.pasi.app.dropdown.toggle_is_activate(dropdown_id);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),prompt], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.is-small","span.icon.is-small",1815318948),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-angle-down","i.fas.fa-angle-down",596435338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-menu","div.dropdown-menu",-1884774306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"menu","menu",352255198)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-content","div.dropdown-content",1846372776),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(item));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52568){
var vec__52569 = p__52568;
var m_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52569,(0),null);
var m_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52569,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),m_name,new cljs.core.Keyword(null,"key","key",-1516042587),m_code,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_handler], null),m_name], null);
}),values))], null)], null)], null);
});

//# sourceMappingURL=dcs.pasi.app.dropdown.js.map
