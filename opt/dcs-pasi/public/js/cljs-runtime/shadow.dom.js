goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_41131 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_41131(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_41132 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_41132(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__40841 = coll;
var G__40842 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__40841,G__40842) : shadow.dom.lazy_native_coll_seq.call(null,G__40841,G__40842));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__40845 = arguments.length;
switch (G__40845) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__40847 = arguments.length;
switch (G__40847) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__40849 = arguments.length;
switch (G__40849) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__40851 = arguments.length;
switch (G__40851) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__40854 = arguments.length;
switch (G__40854) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__40857 = arguments.length;
switch (G__40857) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e40859){if((e40859 instanceof Object)){
var e = e40859;
return console.log("didnt support attachEvent",el,e);
} else {
throw e40859;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__40860 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__40861 = null;
var count__40862 = (0);
var i__40863 = (0);
while(true){
if((i__40863 < count__40862)){
var el = chunk__40861.cljs$core$IIndexed$_nth$arity$2(null,i__40863);
var handler_41159__$1 = ((function (seq__40860,chunk__40861,count__40862,i__40863,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40860,chunk__40861,count__40862,i__40863,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_41159__$1);


var G__41164 = seq__40860;
var G__41165 = chunk__40861;
var G__41166 = count__40862;
var G__41167 = (i__40863 + (1));
seq__40860 = G__41164;
chunk__40861 = G__41165;
count__40862 = G__41166;
i__40863 = G__41167;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40860);
if(temp__5753__auto__){
var seq__40860__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40860__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40860__$1);
var G__41168 = cljs.core.chunk_rest(seq__40860__$1);
var G__41169 = c__4679__auto__;
var G__41170 = cljs.core.count(c__4679__auto__);
var G__41171 = (0);
seq__40860 = G__41168;
chunk__40861 = G__41169;
count__40862 = G__41170;
i__40863 = G__41171;
continue;
} else {
var el = cljs.core.first(seq__40860__$1);
var handler_41172__$1 = ((function (seq__40860,chunk__40861,count__40862,i__40863,el,seq__40860__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40860,chunk__40861,count__40862,i__40863,el,seq__40860__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_41172__$1);


var G__41173 = cljs.core.next(seq__40860__$1);
var G__41174 = null;
var G__41175 = (0);
var G__41176 = (0);
seq__40860 = G__41173;
chunk__40861 = G__41174;
count__40862 = G__41175;
i__40863 = G__41176;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__40868 = arguments.length;
switch (G__40868) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__40869 = cljs.core.seq(events);
var chunk__40870 = null;
var count__40871 = (0);
var i__40872 = (0);
while(true){
if((i__40872 < count__40871)){
var vec__40879 = chunk__40870.cljs$core$IIndexed$_nth$arity$2(null,i__40872);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40879,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40879,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41178 = seq__40869;
var G__41179 = chunk__40870;
var G__41180 = count__40871;
var G__41181 = (i__40872 + (1));
seq__40869 = G__41178;
chunk__40870 = G__41179;
count__40871 = G__41180;
i__40872 = G__41181;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40869);
if(temp__5753__auto__){
var seq__40869__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40869__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40869__$1);
var G__41182 = cljs.core.chunk_rest(seq__40869__$1);
var G__41183 = c__4679__auto__;
var G__41184 = cljs.core.count(c__4679__auto__);
var G__41185 = (0);
seq__40869 = G__41182;
chunk__40870 = G__41183;
count__40871 = G__41184;
i__40872 = G__41185;
continue;
} else {
var vec__40882 = cljs.core.first(seq__40869__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40882,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40882,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41186 = cljs.core.next(seq__40869__$1);
var G__41187 = null;
var G__41188 = (0);
var G__41189 = (0);
seq__40869 = G__41186;
chunk__40870 = G__41187;
count__40871 = G__41188;
i__40872 = G__41189;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__40886 = cljs.core.seq(styles);
var chunk__40887 = null;
var count__40888 = (0);
var i__40889 = (0);
while(true){
if((i__40889 < count__40888)){
var vec__40898 = chunk__40887.cljs$core$IIndexed$_nth$arity$2(null,i__40889);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40898,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__41207 = seq__40886;
var G__41208 = chunk__40887;
var G__41209 = count__40888;
var G__41210 = (i__40889 + (1));
seq__40886 = G__41207;
chunk__40887 = G__41208;
count__40888 = G__41209;
i__40889 = G__41210;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40886);
if(temp__5753__auto__){
var seq__40886__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40886__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40886__$1);
var G__41213 = cljs.core.chunk_rest(seq__40886__$1);
var G__41214 = c__4679__auto__;
var G__41215 = cljs.core.count(c__4679__auto__);
var G__41216 = (0);
seq__40886 = G__41213;
chunk__40887 = G__41214;
count__40888 = G__41215;
i__40889 = G__41216;
continue;
} else {
var vec__40901 = cljs.core.first(seq__40886__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40901,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40901,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__41230 = cljs.core.next(seq__40886__$1);
var G__41231 = null;
var G__41232 = (0);
var G__41233 = (0);
seq__40886 = G__41230;
chunk__40887 = G__41231;
count__40888 = G__41232;
i__40889 = G__41233;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__40904_41234 = key;
var G__40904_41235__$1 = (((G__40904_41234 instanceof cljs.core.Keyword))?G__40904_41234.fqn:null);
switch (G__40904_41235__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_41242 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_41242,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_41242,"aria-");
}
})())){
el.setAttribute(ks_41242,value);
} else {
(el[ks_41242] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__40906){
var map__40907 = p__40906;
var map__40907__$1 = cljs.core.__destructure_map(map__40907);
var props = map__40907__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40907__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__40908 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40908,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40908,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40908,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__40911 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__40911,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__40911;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__40913 = arguments.length;
switch (G__40913) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__40914){
var vec__40915 = p__40914;
var seq__40916 = cljs.core.seq(vec__40915);
var first__40917 = cljs.core.first(seq__40916);
var seq__40916__$1 = cljs.core.next(seq__40916);
var nn = first__40917;
var first__40917__$1 = cljs.core.first(seq__40916__$1);
var seq__40916__$2 = cljs.core.next(seq__40916__$1);
var np = first__40917__$1;
var nc = seq__40916__$2;
var node = vec__40915;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40918 = nn;
var G__40919 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40918,G__40919) : create_fn.call(null,G__40918,G__40919));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40920 = nn;
var G__40921 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40920,G__40921) : create_fn.call(null,G__40920,G__40921));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__40922 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40922,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40922,(1),null);
var seq__40925_41298 = cljs.core.seq(node_children);
var chunk__40926_41299 = null;
var count__40927_41300 = (0);
var i__40928_41301 = (0);
while(true){
if((i__40928_41301 < count__40927_41300)){
var child_struct_41302 = chunk__40926_41299.cljs$core$IIndexed$_nth$arity$2(null,i__40928_41301);
var children_41303 = shadow.dom.dom_node(child_struct_41302);
if(cljs.core.seq_QMARK_(children_41303)){
var seq__40941_41304 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41303));
var chunk__40943_41305 = null;
var count__40944_41306 = (0);
var i__40945_41307 = (0);
while(true){
if((i__40945_41307 < count__40944_41306)){
var child_41310 = chunk__40943_41305.cljs$core$IIndexed$_nth$arity$2(null,i__40945_41307);
if(cljs.core.truth_(child_41310)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41310);


var G__41315 = seq__40941_41304;
var G__41316 = chunk__40943_41305;
var G__41317 = count__40944_41306;
var G__41318 = (i__40945_41307 + (1));
seq__40941_41304 = G__41315;
chunk__40943_41305 = G__41316;
count__40944_41306 = G__41317;
i__40945_41307 = G__41318;
continue;
} else {
var G__41319 = seq__40941_41304;
var G__41320 = chunk__40943_41305;
var G__41321 = count__40944_41306;
var G__41322 = (i__40945_41307 + (1));
seq__40941_41304 = G__41319;
chunk__40943_41305 = G__41320;
count__40944_41306 = G__41321;
i__40945_41307 = G__41322;
continue;
}
} else {
var temp__5753__auto___41323 = cljs.core.seq(seq__40941_41304);
if(temp__5753__auto___41323){
var seq__40941_41325__$1 = temp__5753__auto___41323;
if(cljs.core.chunked_seq_QMARK_(seq__40941_41325__$1)){
var c__4679__auto___41326 = cljs.core.chunk_first(seq__40941_41325__$1);
var G__41327 = cljs.core.chunk_rest(seq__40941_41325__$1);
var G__41328 = c__4679__auto___41326;
var G__41329 = cljs.core.count(c__4679__auto___41326);
var G__41330 = (0);
seq__40941_41304 = G__41327;
chunk__40943_41305 = G__41328;
count__40944_41306 = G__41329;
i__40945_41307 = G__41330;
continue;
} else {
var child_41331 = cljs.core.first(seq__40941_41325__$1);
if(cljs.core.truth_(child_41331)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41331);


var G__41332 = cljs.core.next(seq__40941_41325__$1);
var G__41333 = null;
var G__41334 = (0);
var G__41335 = (0);
seq__40941_41304 = G__41332;
chunk__40943_41305 = G__41333;
count__40944_41306 = G__41334;
i__40945_41307 = G__41335;
continue;
} else {
var G__41336 = cljs.core.next(seq__40941_41325__$1);
var G__41337 = null;
var G__41338 = (0);
var G__41339 = (0);
seq__40941_41304 = G__41336;
chunk__40943_41305 = G__41337;
count__40944_41306 = G__41338;
i__40945_41307 = G__41339;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41303);
}


var G__41340 = seq__40925_41298;
var G__41341 = chunk__40926_41299;
var G__41342 = count__40927_41300;
var G__41343 = (i__40928_41301 + (1));
seq__40925_41298 = G__41340;
chunk__40926_41299 = G__41341;
count__40927_41300 = G__41342;
i__40928_41301 = G__41343;
continue;
} else {
var temp__5753__auto___41344 = cljs.core.seq(seq__40925_41298);
if(temp__5753__auto___41344){
var seq__40925_41345__$1 = temp__5753__auto___41344;
if(cljs.core.chunked_seq_QMARK_(seq__40925_41345__$1)){
var c__4679__auto___41346 = cljs.core.chunk_first(seq__40925_41345__$1);
var G__41347 = cljs.core.chunk_rest(seq__40925_41345__$1);
var G__41348 = c__4679__auto___41346;
var G__41349 = cljs.core.count(c__4679__auto___41346);
var G__41350 = (0);
seq__40925_41298 = G__41347;
chunk__40926_41299 = G__41348;
count__40927_41300 = G__41349;
i__40928_41301 = G__41350;
continue;
} else {
var child_struct_41351 = cljs.core.first(seq__40925_41345__$1);
var children_41352 = shadow.dom.dom_node(child_struct_41351);
if(cljs.core.seq_QMARK_(children_41352)){
var seq__40947_41353 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41352));
var chunk__40949_41354 = null;
var count__40950_41355 = (0);
var i__40951_41356 = (0);
while(true){
if((i__40951_41356 < count__40950_41355)){
var child_41357 = chunk__40949_41354.cljs$core$IIndexed$_nth$arity$2(null,i__40951_41356);
if(cljs.core.truth_(child_41357)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41357);


var G__41358 = seq__40947_41353;
var G__41359 = chunk__40949_41354;
var G__41360 = count__40950_41355;
var G__41361 = (i__40951_41356 + (1));
seq__40947_41353 = G__41358;
chunk__40949_41354 = G__41359;
count__40950_41355 = G__41360;
i__40951_41356 = G__41361;
continue;
} else {
var G__41362 = seq__40947_41353;
var G__41363 = chunk__40949_41354;
var G__41364 = count__40950_41355;
var G__41365 = (i__40951_41356 + (1));
seq__40947_41353 = G__41362;
chunk__40949_41354 = G__41363;
count__40950_41355 = G__41364;
i__40951_41356 = G__41365;
continue;
}
} else {
var temp__5753__auto___41366__$1 = cljs.core.seq(seq__40947_41353);
if(temp__5753__auto___41366__$1){
var seq__40947_41367__$1 = temp__5753__auto___41366__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40947_41367__$1)){
var c__4679__auto___41368 = cljs.core.chunk_first(seq__40947_41367__$1);
var G__41369 = cljs.core.chunk_rest(seq__40947_41367__$1);
var G__41370 = c__4679__auto___41368;
var G__41371 = cljs.core.count(c__4679__auto___41368);
var G__41372 = (0);
seq__40947_41353 = G__41369;
chunk__40949_41354 = G__41370;
count__40950_41355 = G__41371;
i__40951_41356 = G__41372;
continue;
} else {
var child_41373 = cljs.core.first(seq__40947_41367__$1);
if(cljs.core.truth_(child_41373)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41373);


var G__41374 = cljs.core.next(seq__40947_41367__$1);
var G__41375 = null;
var G__41376 = (0);
var G__41377 = (0);
seq__40947_41353 = G__41374;
chunk__40949_41354 = G__41375;
count__40950_41355 = G__41376;
i__40951_41356 = G__41377;
continue;
} else {
var G__41378 = cljs.core.next(seq__40947_41367__$1);
var G__41379 = null;
var G__41380 = (0);
var G__41381 = (0);
seq__40947_41353 = G__41378;
chunk__40949_41354 = G__41379;
count__40950_41355 = G__41380;
i__40951_41356 = G__41381;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41352);
}


var G__41382 = cljs.core.next(seq__40925_41345__$1);
var G__41383 = null;
var G__41384 = (0);
var G__41385 = (0);
seq__40925_41298 = G__41382;
chunk__40926_41299 = G__41383;
count__40927_41300 = G__41384;
i__40928_41301 = G__41385;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__40956 = cljs.core.seq(node);
var chunk__40957 = null;
var count__40958 = (0);
var i__40959 = (0);
while(true){
if((i__40959 < count__40958)){
var n = chunk__40957.cljs$core$IIndexed$_nth$arity$2(null,i__40959);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41387 = seq__40956;
var G__41388 = chunk__40957;
var G__41389 = count__40958;
var G__41390 = (i__40959 + (1));
seq__40956 = G__41387;
chunk__40957 = G__41388;
count__40958 = G__41389;
i__40959 = G__41390;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40956);
if(temp__5753__auto__){
var seq__40956__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40956__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40956__$1);
var G__41391 = cljs.core.chunk_rest(seq__40956__$1);
var G__41392 = c__4679__auto__;
var G__41393 = cljs.core.count(c__4679__auto__);
var G__41394 = (0);
seq__40956 = G__41391;
chunk__40957 = G__41392;
count__40958 = G__41393;
i__40959 = G__41394;
continue;
} else {
var n = cljs.core.first(seq__40956__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41395 = cljs.core.next(seq__40956__$1);
var G__41396 = null;
var G__41397 = (0);
var G__41398 = (0);
seq__40956 = G__41395;
chunk__40957 = G__41396;
count__40958 = G__41397;
i__40959 = G__41398;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40961 = arguments.length;
switch (G__40961) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__40969 = arguments.length;
switch (G__40969) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__40971 = arguments.length;
switch (G__40971) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___41459 = arguments.length;
var i__4865__auto___41460 = (0);
while(true){
if((i__4865__auto___41460 < len__4864__auto___41459)){
args__4870__auto__.push((arguments[i__4865__auto___41460]));

var G__41461 = (i__4865__auto___41460 + (1));
i__4865__auto___41460 = G__41461;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__40973_41462 = cljs.core.seq(nodes);
var chunk__40974_41463 = null;
var count__40975_41464 = (0);
var i__40976_41465 = (0);
while(true){
if((i__40976_41465 < count__40975_41464)){
var node_41470 = chunk__40974_41463.cljs$core$IIndexed$_nth$arity$2(null,i__40976_41465);
fragment.appendChild(shadow.dom._to_dom(node_41470));


var G__41471 = seq__40973_41462;
var G__41472 = chunk__40974_41463;
var G__41473 = count__40975_41464;
var G__41474 = (i__40976_41465 + (1));
seq__40973_41462 = G__41471;
chunk__40974_41463 = G__41472;
count__40975_41464 = G__41473;
i__40976_41465 = G__41474;
continue;
} else {
var temp__5753__auto___41475 = cljs.core.seq(seq__40973_41462);
if(temp__5753__auto___41475){
var seq__40973_41477__$1 = temp__5753__auto___41475;
if(cljs.core.chunked_seq_QMARK_(seq__40973_41477__$1)){
var c__4679__auto___41478 = cljs.core.chunk_first(seq__40973_41477__$1);
var G__41479 = cljs.core.chunk_rest(seq__40973_41477__$1);
var G__41480 = c__4679__auto___41478;
var G__41481 = cljs.core.count(c__4679__auto___41478);
var G__41482 = (0);
seq__40973_41462 = G__41479;
chunk__40974_41463 = G__41480;
count__40975_41464 = G__41481;
i__40976_41465 = G__41482;
continue;
} else {
var node_41483 = cljs.core.first(seq__40973_41477__$1);
fragment.appendChild(shadow.dom._to_dom(node_41483));


var G__41489 = cljs.core.next(seq__40973_41477__$1);
var G__41490 = null;
var G__41491 = (0);
var G__41492 = (0);
seq__40973_41462 = G__41489;
chunk__40974_41463 = G__41490;
count__40975_41464 = G__41491;
i__40976_41465 = G__41492;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq40972){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40972));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40977_41505 = cljs.core.seq(scripts);
var chunk__40978_41506 = null;
var count__40979_41507 = (0);
var i__40980_41508 = (0);
while(true){
if((i__40980_41508 < count__40979_41507)){
var vec__40987_41509 = chunk__40978_41506.cljs$core$IIndexed$_nth$arity$2(null,i__40980_41508);
var script_tag_41510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40987_41509,(0),null);
var script_body_41511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40987_41509,(1),null);
eval(script_body_41511);


var G__41512 = seq__40977_41505;
var G__41513 = chunk__40978_41506;
var G__41514 = count__40979_41507;
var G__41515 = (i__40980_41508 + (1));
seq__40977_41505 = G__41512;
chunk__40978_41506 = G__41513;
count__40979_41507 = G__41514;
i__40980_41508 = G__41515;
continue;
} else {
var temp__5753__auto___41516 = cljs.core.seq(seq__40977_41505);
if(temp__5753__auto___41516){
var seq__40977_41517__$1 = temp__5753__auto___41516;
if(cljs.core.chunked_seq_QMARK_(seq__40977_41517__$1)){
var c__4679__auto___41518 = cljs.core.chunk_first(seq__40977_41517__$1);
var G__41519 = cljs.core.chunk_rest(seq__40977_41517__$1);
var G__41520 = c__4679__auto___41518;
var G__41521 = cljs.core.count(c__4679__auto___41518);
var G__41522 = (0);
seq__40977_41505 = G__41519;
chunk__40978_41506 = G__41520;
count__40979_41507 = G__41521;
i__40980_41508 = G__41522;
continue;
} else {
var vec__40990_41523 = cljs.core.first(seq__40977_41517__$1);
var script_tag_41524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40990_41523,(0),null);
var script_body_41525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40990_41523,(1),null);
eval(script_body_41525);


var G__41526 = cljs.core.next(seq__40977_41517__$1);
var G__41527 = null;
var G__41528 = (0);
var G__41529 = (0);
seq__40977_41505 = G__41526;
chunk__40978_41506 = G__41527;
count__40979_41507 = G__41528;
i__40980_41508 = G__41529;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__40993){
var vec__40994 = p__40993;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40994,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40994,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__40998 = arguments.length;
switch (G__40998) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__40999 = cljs.core.seq(style_keys);
var chunk__41000 = null;
var count__41001 = (0);
var i__41002 = (0);
while(true){
if((i__41002 < count__41001)){
var it = chunk__41000.cljs$core$IIndexed$_nth$arity$2(null,i__41002);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41550 = seq__40999;
var G__41551 = chunk__41000;
var G__41552 = count__41001;
var G__41553 = (i__41002 + (1));
seq__40999 = G__41550;
chunk__41000 = G__41551;
count__41001 = G__41552;
i__41002 = G__41553;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40999);
if(temp__5753__auto__){
var seq__40999__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40999__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40999__$1);
var G__41561 = cljs.core.chunk_rest(seq__40999__$1);
var G__41562 = c__4679__auto__;
var G__41563 = cljs.core.count(c__4679__auto__);
var G__41564 = (0);
seq__40999 = G__41561;
chunk__41000 = G__41562;
count__41001 = G__41563;
i__41002 = G__41564;
continue;
} else {
var it = cljs.core.first(seq__40999__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41565 = cljs.core.next(seq__40999__$1);
var G__41566 = null;
var G__41567 = (0);
var G__41568 = (0);
seq__40999 = G__41565;
chunk__41000 = G__41566;
count__41001 = G__41567;
i__41002 = G__41568;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k41004,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__41008 = k41004;
var G__41008__$1 = (((G__41008 instanceof cljs.core.Keyword))?G__41008.fqn:null);
switch (G__41008__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41004,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__41009){
var vec__41010 = p__41009;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41010,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41010,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41003){
var self__ = this;
var G__41003__$1 = this;
return (new cljs.core.RecordIter((0),G__41003__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41005,other41006){
var self__ = this;
var this41005__$1 = this;
return (((!((other41006 == null)))) && ((((this41005__$1.constructor === other41006.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41005__$1.x,other41006.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41005__$1.y,other41006.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41005__$1.__extmap,other41006.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k41004){
var self__ = this;
var this__4509__auto____$1 = this;
var G__41017 = k41004;
var G__41017__$1 = (((G__41017 instanceof cljs.core.Keyword))?G__41017.fqn:null);
switch (G__41017__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41004);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__41003){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__41018 = cljs.core.keyword_identical_QMARK_;
var expr__41019 = k__4511__auto__;
if(cljs.core.truth_((pred__41018.cljs$core$IFn$_invoke$arity$2 ? pred__41018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__41019) : pred__41018.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__41019)))){
return (new shadow.dom.Coordinate(G__41003,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41018.cljs$core$IFn$_invoke$arity$2 ? pred__41018.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__41019) : pred__41018.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__41019)))){
return (new shadow.dom.Coordinate(self__.x,G__41003,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__41003),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__41003){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__41003,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__41007){
var extmap__4542__auto__ = (function (){var G__41021 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41007,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__41007)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41021);
} else {
return G__41021;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__41007),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__41007),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k41023,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__41027 = k41023;
var G__41027__$1 = (((G__41027 instanceof cljs.core.Keyword))?G__41027.fqn:null);
switch (G__41027__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41023,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__41028){
var vec__41029 = p__41028;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41029,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41029,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41022){
var self__ = this;
var G__41022__$1 = this;
return (new cljs.core.RecordIter((0),G__41022__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41024,other41025){
var self__ = this;
var this41024__$1 = this;
return (((!((other41025 == null)))) && ((((this41024__$1.constructor === other41025.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41024__$1.w,other41025.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41024__$1.h,other41025.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41024__$1.__extmap,other41025.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k41023){
var self__ = this;
var this__4509__auto____$1 = this;
var G__41032 = k41023;
var G__41032__$1 = (((G__41032 instanceof cljs.core.Keyword))?G__41032.fqn:null);
switch (G__41032__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41023);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__41022){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__41033 = cljs.core.keyword_identical_QMARK_;
var expr__41034 = k__4511__auto__;
if(cljs.core.truth_((pred__41033.cljs$core$IFn$_invoke$arity$2 ? pred__41033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__41034) : pred__41033.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__41034)))){
return (new shadow.dom.Size(G__41022,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41033.cljs$core$IFn$_invoke$arity$2 ? pred__41033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__41034) : pred__41033.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__41034)))){
return (new shadow.dom.Size(self__.w,G__41022,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__41022),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__41022){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__41022,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__41026){
var extmap__4542__auto__ = (function (){var G__41036 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41026,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__41026)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41036);
} else {
return G__41036;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__41026),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__41026),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__41634 = (i + (1));
var G__41635 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__41634;
ret = G__41635;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41041){
var vec__41042 = p__41041;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41042,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41042,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__41046 = arguments.length;
switch (G__41046) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__41646 = ps;
var G__41647 = (i + (1));
el__$1 = G__41646;
i = G__41647;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__41047 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41047,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41047,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41047,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__41050_41648 = cljs.core.seq(props);
var chunk__41051_41649 = null;
var count__41052_41650 = (0);
var i__41053_41651 = (0);
while(true){
if((i__41053_41651 < count__41052_41650)){
var vec__41060_41652 = chunk__41051_41649.cljs$core$IIndexed$_nth$arity$2(null,i__41053_41651);
var k_41653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41060_41652,(0),null);
var v_41654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41060_41652,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_41653);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41653),v_41654);


var G__41655 = seq__41050_41648;
var G__41656 = chunk__41051_41649;
var G__41657 = count__41052_41650;
var G__41658 = (i__41053_41651 + (1));
seq__41050_41648 = G__41655;
chunk__41051_41649 = G__41656;
count__41052_41650 = G__41657;
i__41053_41651 = G__41658;
continue;
} else {
var temp__5753__auto___41659 = cljs.core.seq(seq__41050_41648);
if(temp__5753__auto___41659){
var seq__41050_41660__$1 = temp__5753__auto___41659;
if(cljs.core.chunked_seq_QMARK_(seq__41050_41660__$1)){
var c__4679__auto___41661 = cljs.core.chunk_first(seq__41050_41660__$1);
var G__41662 = cljs.core.chunk_rest(seq__41050_41660__$1);
var G__41663 = c__4679__auto___41661;
var G__41664 = cljs.core.count(c__4679__auto___41661);
var G__41665 = (0);
seq__41050_41648 = G__41662;
chunk__41051_41649 = G__41663;
count__41052_41650 = G__41664;
i__41053_41651 = G__41665;
continue;
} else {
var vec__41063_41666 = cljs.core.first(seq__41050_41660__$1);
var k_41667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41063_41666,(0),null);
var v_41668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41063_41666,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_41667);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41667),v_41668);


var G__41669 = cljs.core.next(seq__41050_41660__$1);
var G__41670 = null;
var G__41671 = (0);
var G__41672 = (0);
seq__41050_41648 = G__41669;
chunk__41051_41649 = G__41670;
count__41052_41650 = G__41671;
i__41053_41651 = G__41672;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__41067 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41067,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41067,(1),null);
var seq__41070_41673 = cljs.core.seq(node_children);
var chunk__41072_41674 = null;
var count__41073_41675 = (0);
var i__41074_41676 = (0);
while(true){
if((i__41074_41676 < count__41073_41675)){
var child_struct_41677 = chunk__41072_41674.cljs$core$IIndexed$_nth$arity$2(null,i__41074_41676);
if((!((child_struct_41677 == null)))){
if(typeof child_struct_41677 === 'string'){
var text_41678 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41678),child_struct_41677].join(''));
} else {
var children_41679 = shadow.dom.svg_node(child_struct_41677);
if(cljs.core.seq_QMARK_(children_41679)){
var seq__41088_41680 = cljs.core.seq(children_41679);
var chunk__41090_41681 = null;
var count__41091_41682 = (0);
var i__41092_41683 = (0);
while(true){
if((i__41092_41683 < count__41091_41682)){
var child_41684 = chunk__41090_41681.cljs$core$IIndexed$_nth$arity$2(null,i__41092_41683);
if(cljs.core.truth_(child_41684)){
node.appendChild(child_41684);


var G__41685 = seq__41088_41680;
var G__41686 = chunk__41090_41681;
var G__41687 = count__41091_41682;
var G__41688 = (i__41092_41683 + (1));
seq__41088_41680 = G__41685;
chunk__41090_41681 = G__41686;
count__41091_41682 = G__41687;
i__41092_41683 = G__41688;
continue;
} else {
var G__41689 = seq__41088_41680;
var G__41690 = chunk__41090_41681;
var G__41691 = count__41091_41682;
var G__41692 = (i__41092_41683 + (1));
seq__41088_41680 = G__41689;
chunk__41090_41681 = G__41690;
count__41091_41682 = G__41691;
i__41092_41683 = G__41692;
continue;
}
} else {
var temp__5753__auto___41693 = cljs.core.seq(seq__41088_41680);
if(temp__5753__auto___41693){
var seq__41088_41694__$1 = temp__5753__auto___41693;
if(cljs.core.chunked_seq_QMARK_(seq__41088_41694__$1)){
var c__4679__auto___41695 = cljs.core.chunk_first(seq__41088_41694__$1);
var G__41696 = cljs.core.chunk_rest(seq__41088_41694__$1);
var G__41697 = c__4679__auto___41695;
var G__41698 = cljs.core.count(c__4679__auto___41695);
var G__41699 = (0);
seq__41088_41680 = G__41696;
chunk__41090_41681 = G__41697;
count__41091_41682 = G__41698;
i__41092_41683 = G__41699;
continue;
} else {
var child_41700 = cljs.core.first(seq__41088_41694__$1);
if(cljs.core.truth_(child_41700)){
node.appendChild(child_41700);


var G__41701 = cljs.core.next(seq__41088_41694__$1);
var G__41702 = null;
var G__41703 = (0);
var G__41704 = (0);
seq__41088_41680 = G__41701;
chunk__41090_41681 = G__41702;
count__41091_41682 = G__41703;
i__41092_41683 = G__41704;
continue;
} else {
var G__41705 = cljs.core.next(seq__41088_41694__$1);
var G__41706 = null;
var G__41707 = (0);
var G__41708 = (0);
seq__41088_41680 = G__41705;
chunk__41090_41681 = G__41706;
count__41091_41682 = G__41707;
i__41092_41683 = G__41708;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41679);
}
}


var G__41709 = seq__41070_41673;
var G__41710 = chunk__41072_41674;
var G__41711 = count__41073_41675;
var G__41712 = (i__41074_41676 + (1));
seq__41070_41673 = G__41709;
chunk__41072_41674 = G__41710;
count__41073_41675 = G__41711;
i__41074_41676 = G__41712;
continue;
} else {
var G__41713 = seq__41070_41673;
var G__41714 = chunk__41072_41674;
var G__41715 = count__41073_41675;
var G__41716 = (i__41074_41676 + (1));
seq__41070_41673 = G__41713;
chunk__41072_41674 = G__41714;
count__41073_41675 = G__41715;
i__41074_41676 = G__41716;
continue;
}
} else {
var temp__5753__auto___41717 = cljs.core.seq(seq__41070_41673);
if(temp__5753__auto___41717){
var seq__41070_41718__$1 = temp__5753__auto___41717;
if(cljs.core.chunked_seq_QMARK_(seq__41070_41718__$1)){
var c__4679__auto___41719 = cljs.core.chunk_first(seq__41070_41718__$1);
var G__41720 = cljs.core.chunk_rest(seq__41070_41718__$1);
var G__41721 = c__4679__auto___41719;
var G__41722 = cljs.core.count(c__4679__auto___41719);
var G__41723 = (0);
seq__41070_41673 = G__41720;
chunk__41072_41674 = G__41721;
count__41073_41675 = G__41722;
i__41074_41676 = G__41723;
continue;
} else {
var child_struct_41724 = cljs.core.first(seq__41070_41718__$1);
if((!((child_struct_41724 == null)))){
if(typeof child_struct_41724 === 'string'){
var text_41725 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41725),child_struct_41724].join(''));
} else {
var children_41726 = shadow.dom.svg_node(child_struct_41724);
if(cljs.core.seq_QMARK_(children_41726)){
var seq__41094_41727 = cljs.core.seq(children_41726);
var chunk__41096_41728 = null;
var count__41097_41729 = (0);
var i__41098_41730 = (0);
while(true){
if((i__41098_41730 < count__41097_41729)){
var child_41731 = chunk__41096_41728.cljs$core$IIndexed$_nth$arity$2(null,i__41098_41730);
if(cljs.core.truth_(child_41731)){
node.appendChild(child_41731);


var G__41732 = seq__41094_41727;
var G__41733 = chunk__41096_41728;
var G__41734 = count__41097_41729;
var G__41735 = (i__41098_41730 + (1));
seq__41094_41727 = G__41732;
chunk__41096_41728 = G__41733;
count__41097_41729 = G__41734;
i__41098_41730 = G__41735;
continue;
} else {
var G__41736 = seq__41094_41727;
var G__41737 = chunk__41096_41728;
var G__41738 = count__41097_41729;
var G__41739 = (i__41098_41730 + (1));
seq__41094_41727 = G__41736;
chunk__41096_41728 = G__41737;
count__41097_41729 = G__41738;
i__41098_41730 = G__41739;
continue;
}
} else {
var temp__5753__auto___41740__$1 = cljs.core.seq(seq__41094_41727);
if(temp__5753__auto___41740__$1){
var seq__41094_41741__$1 = temp__5753__auto___41740__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41094_41741__$1)){
var c__4679__auto___41742 = cljs.core.chunk_first(seq__41094_41741__$1);
var G__41743 = cljs.core.chunk_rest(seq__41094_41741__$1);
var G__41744 = c__4679__auto___41742;
var G__41745 = cljs.core.count(c__4679__auto___41742);
var G__41746 = (0);
seq__41094_41727 = G__41743;
chunk__41096_41728 = G__41744;
count__41097_41729 = G__41745;
i__41098_41730 = G__41746;
continue;
} else {
var child_41747 = cljs.core.first(seq__41094_41741__$1);
if(cljs.core.truth_(child_41747)){
node.appendChild(child_41747);


var G__41748 = cljs.core.next(seq__41094_41741__$1);
var G__41749 = null;
var G__41750 = (0);
var G__41751 = (0);
seq__41094_41727 = G__41748;
chunk__41096_41728 = G__41749;
count__41097_41729 = G__41750;
i__41098_41730 = G__41751;
continue;
} else {
var G__41752 = cljs.core.next(seq__41094_41741__$1);
var G__41753 = null;
var G__41754 = (0);
var G__41755 = (0);
seq__41094_41727 = G__41752;
chunk__41096_41728 = G__41753;
count__41097_41729 = G__41754;
i__41098_41730 = G__41755;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41726);
}
}


var G__41756 = cljs.core.next(seq__41070_41718__$1);
var G__41757 = null;
var G__41758 = (0);
var G__41759 = (0);
seq__41070_41673 = G__41756;
chunk__41072_41674 = G__41757;
count__41073_41675 = G__41758;
i__41074_41676 = G__41759;
continue;
} else {
var G__41760 = cljs.core.next(seq__41070_41718__$1);
var G__41761 = null;
var G__41762 = (0);
var G__41763 = (0);
seq__41070_41673 = G__41760;
chunk__41072_41674 = G__41761;
count__41073_41675 = G__41762;
i__41074_41676 = G__41763;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___41764 = arguments.length;
var i__4865__auto___41765 = (0);
while(true){
if((i__4865__auto___41765 < len__4864__auto___41764)){
args__4870__auto__.push((arguments[i__4865__auto___41765]));

var G__41766 = (i__4865__auto___41765 + (1));
i__4865__auto___41765 = G__41766;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq41100){
var G__41101 = cljs.core.first(seq41100);
var seq41100__$1 = cljs.core.next(seq41100);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41101,seq41100__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__41105 = arguments.length;
switch (G__41105) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__40756__auto___41768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40757__auto__ = (function (){var switch__40708__auto__ = (function (state_41111){
var state_val_41112 = (state_41111[(1)]);
if((state_val_41112 === (1))){
var state_41111__$1 = state_41111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41111__$1,(2),once_or_cleanup);
} else {
if((state_val_41112 === (2))){
var inst_41108 = (state_41111[(2)]);
var inst_41109 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_41111__$1 = (function (){var statearr_41121 = state_41111;
(statearr_41121[(7)] = inst_41108);

return statearr_41121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41111__$1,inst_41109);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__40709__auto__ = null;
var shadow$dom$state_machine__40709__auto____0 = (function (){
var statearr_41126 = [null,null,null,null,null,null,null,null];
(statearr_41126[(0)] = shadow$dom$state_machine__40709__auto__);

(statearr_41126[(1)] = (1));

return statearr_41126;
});
var shadow$dom$state_machine__40709__auto____1 = (function (state_41111){
while(true){
var ret_value__40710__auto__ = (function (){try{while(true){
var result__40711__auto__ = switch__40708__auto__(state_41111);
if(cljs.core.keyword_identical_QMARK_(result__40711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40711__auto__;
}
break;
}
}catch (e41127){var ex__40712__auto__ = e41127;
var statearr_41128_41783 = state_41111;
(statearr_41128_41783[(2)] = ex__40712__auto__);


if(cljs.core.seq((state_41111[(4)]))){
var statearr_41129_41787 = state_41111;
(statearr_41129_41787[(1)] = cljs.core.first((state_41111[(4)])));

} else {
throw ex__40712__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41788 = state_41111;
state_41111 = G__41788;
continue;
} else {
return ret_value__40710__auto__;
}
break;
}
});
shadow$dom$state_machine__40709__auto__ = function(state_41111){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__40709__auto____0.call(this);
case 1:
return shadow$dom$state_machine__40709__auto____1.call(this,state_41111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__40709__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__40709__auto____0;
shadow$dom$state_machine__40709__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__40709__auto____1;
return shadow$dom$state_machine__40709__auto__;
})()
})();
var state__40758__auto__ = (function (){var statearr_41130 = f__40757__auto__();
(statearr_41130[(6)] = c__40756__auto___41768);

return statearr_41130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40758__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
