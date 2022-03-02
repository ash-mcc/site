goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__19943__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19949__i = 0, G__19949__a = new Array(arguments.length -  0);
while (G__19949__i < G__19949__a.length) {G__19949__a[G__19949__i] = arguments[G__19949__i + 0]; ++G__19949__i;}
  args = new cljs.core.IndexedSeq(G__19949__a,0,null);
} 
return G__19943__delegate.call(this,args);};
G__19943.cljs$lang$maxFixedArity = 0;
G__19943.cljs$lang$applyTo = (function (arglist__19950){
var args = cljs.core.seq(arglist__19950);
return G__19943__delegate(args);
});
G__19943.cljs$core$IFn$_invoke$arity$variadic = G__19943__delegate;
return G__19943;
})()
);

(o.error = (function() { 
var G__19951__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__19951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19954__i = 0, G__19954__a = new Array(arguments.length -  0);
while (G__19954__i < G__19954__a.length) {G__19954__a[G__19954__i] = arguments[G__19954__i + 0]; ++G__19954__i;}
  args = new cljs.core.IndexedSeq(G__19954__a,0,null);
} 
return G__19951__delegate.call(this,args);};
G__19951.cljs$lang$maxFixedArity = 0;
G__19951.cljs$lang$applyTo = (function (arglist__19955){
var args = cljs.core.seq(arglist__19955);
return G__19951__delegate(args);
});
G__19951.cljs$core$IFn$_invoke$arity$variadic = G__19951__delegate;
return G__19951;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
