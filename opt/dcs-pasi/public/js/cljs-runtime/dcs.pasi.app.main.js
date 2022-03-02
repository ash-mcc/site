goog.provide('dcs.pasi.app.main');
dcs.pasi.app.main.page = (function dcs$pasi$app$main$page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.pasi.app.navbar.root], null),(function (){var route = cljs.core.deref(dcs.pasi.app.state.route_match_cursor);
var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
console.log("page route=",route);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,route], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Built by the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Data Commons Scotland"], null)," project."], null)], null)], null);
});
dcs.pasi.app.main.start = (function dcs$pasi$app$main$start(){
console.log("Starting router");

dcs.pasi.app.router.init();

console.log("Starting render");

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dcs.pasi.app.main.page], null),document.getElementById("app"));
});
dcs.pasi.app.main.init = (function dcs$pasi$app$main$init(){
dcs.pasi.app.loader.load_data();

return dcs.pasi.app.main.start();
});
goog.exportSymbol('dcs.pasi.app.main.init', dcs.pasi.app.main.init);
dcs.pasi.app.main.stop = (function dcs$pasi$app$main$stop(){
return console.log("stop");
});

//# sourceMappingURL=dcs.pasi.app.main.js.map
