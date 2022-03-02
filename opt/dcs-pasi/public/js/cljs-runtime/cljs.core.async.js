goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29489 = arguments.length;
switch (G__29489) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29491 = (function (f,blockable,meta29492){
this.f = f;
this.blockable = blockable;
this.meta29492 = meta29492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29493,meta29492__$1){
var self__ = this;
var _29493__$1 = this;
return (new cljs.core.async.t_cljs$core$async29491(self__.f,self__.blockable,meta29492__$1));
}));

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29493){
var self__ = this;
var _29493__$1 = this;
return self__.meta29492;
}));

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29492","meta29492",1970580373,null)], null);
}));

(cljs.core.async.t_cljs$core$async29491.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29491");

(cljs.core.async.t_cljs$core$async29491.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29491");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29491.
 */
cljs.core.async.__GT_t_cljs$core$async29491 = (function cljs$core$async$__GT_t_cljs$core$async29491(f__$1,blockable__$1,meta29492){
return (new cljs.core.async.t_cljs$core$async29491(f__$1,blockable__$1,meta29492));
});

}

return (new cljs.core.async.t_cljs$core$async29491(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29513 = arguments.length;
switch (G__29513) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29517 = arguments.length;
switch (G__29517) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29523 = arguments.length;
switch (G__29523) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31205 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31205) : fn1.call(null,val_31205));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31205) : fn1.call(null,val_31205));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29537 = arguments.length;
switch (G__29537) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___31208 = n;
var x_31209 = (0);
while(true){
if((x_31209 < n__4741__auto___31208)){
(a[x_31209] = x_31209);

var G__31210 = (x_31209 + (1));
x_31209 = G__31210;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29550 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29550 = (function (flag,meta29551){
this.flag = flag;
this.meta29551 = meta29551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29552,meta29551__$1){
var self__ = this;
var _29552__$1 = this;
return (new cljs.core.async.t_cljs$core$async29550(self__.flag,meta29551__$1));
}));

(cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29552){
var self__ = this;
var _29552__$1 = this;
return self__.meta29551;
}));

(cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29551","meta29551",1790508543,null)], null);
}));

(cljs.core.async.t_cljs$core$async29550.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29550");

(cljs.core.async.t_cljs$core$async29550.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29550");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29550.
 */
cljs.core.async.__GT_t_cljs$core$async29550 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29550(flag__$1,meta29551){
return (new cljs.core.async.t_cljs$core$async29550(flag__$1,meta29551));
});

}

return (new cljs.core.async.t_cljs$core$async29550(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29562 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29562 = (function (flag,cb,meta29563){
this.flag = flag;
this.cb = cb;
this.meta29563 = meta29563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29564,meta29563__$1){
var self__ = this;
var _29564__$1 = this;
return (new cljs.core.async.t_cljs$core$async29562(self__.flag,self__.cb,meta29563__$1));
}));

(cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29564){
var self__ = this;
var _29564__$1 = this;
return self__.meta29563;
}));

(cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29562.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29563","meta29563",-1464340416,null)], null);
}));

(cljs.core.async.t_cljs$core$async29562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29562");

(cljs.core.async.t_cljs$core$async29562.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29562.
 */
cljs.core.async.__GT_t_cljs$core$async29562 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29562(flag__$1,cb__$1,meta29563){
return (new cljs.core.async.t_cljs$core$async29562(flag__$1,cb__$1,meta29563));
});

}

return (new cljs.core.async.t_cljs$core$async29562(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29573_SHARP_){
var G__29583 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29573_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29583) : fret.call(null,G__29583));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29574_SHARP_){
var G__29584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29574_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29584) : fret.call(null,G__29584));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31211 = (i + (1));
i = G__31211;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31212 = arguments.length;
var i__4865__auto___31213 = (0);
while(true){
if((i__4865__auto___31213 < len__4864__auto___31212)){
args__4870__auto__.push((arguments[i__4865__auto___31213]));

var G__31214 = (i__4865__auto___31213 + (1));
i__4865__auto___31213 = G__31214;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29593){
var map__29594 = p__29593;
var map__29594__$1 = cljs.core.__destructure_map(map__29594);
var opts = map__29594__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29591){
var G__29592 = cljs.core.first(seq29591);
var seq29591__$1 = cljs.core.next(seq29591);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29592,seq29591__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29602 = arguments.length;
switch (G__29602) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29422__auto___31216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_29646){
var state_val_29649 = (state_29646[(1)]);
if((state_val_29649 === (7))){
var inst_29641 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
var statearr_29719_31217 = state_29646__$1;
(statearr_29719_31217[(2)] = inst_29641);

(statearr_29719_31217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (1))){
var state_29646__$1 = state_29646;
var statearr_29723_31218 = state_29646__$1;
(statearr_29723_31218[(2)] = null);

(statearr_29723_31218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (4))){
var inst_29615 = (state_29646[(7)]);
var inst_29615__$1 = (state_29646[(2)]);
var inst_29616 = (inst_29615__$1 == null);
var state_29646__$1 = (function (){var statearr_29750 = state_29646;
(statearr_29750[(7)] = inst_29615__$1);

return statearr_29750;
})();
if(cljs.core.truth_(inst_29616)){
var statearr_29751_31219 = state_29646__$1;
(statearr_29751_31219[(1)] = (5));

} else {
var statearr_29756_31220 = state_29646__$1;
(statearr_29756_31220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (13))){
var state_29646__$1 = state_29646;
var statearr_29765_31221 = state_29646__$1;
(statearr_29765_31221[(2)] = null);

(statearr_29765_31221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (6))){
var inst_29615 = (state_29646[(7)]);
var state_29646__$1 = state_29646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29646__$1,(11),to,inst_29615);
} else {
if((state_val_29649 === (3))){
var inst_29643 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29646__$1,inst_29643);
} else {
if((state_val_29649 === (12))){
var state_29646__$1 = state_29646;
var statearr_29776_31222 = state_29646__$1;
(statearr_29776_31222[(2)] = null);

(statearr_29776_31222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (2))){
var state_29646__$1 = state_29646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29646__$1,(4),from);
} else {
if((state_val_29649 === (11))){
var inst_29633 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
if(cljs.core.truth_(inst_29633)){
var statearr_29777_31223 = state_29646__$1;
(statearr_29777_31223[(1)] = (12));

} else {
var statearr_29778_31224 = state_29646__$1;
(statearr_29778_31224[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (9))){
var state_29646__$1 = state_29646;
var statearr_29779_31225 = state_29646__$1;
(statearr_29779_31225[(2)] = null);

(statearr_29779_31225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (5))){
var state_29646__$1 = state_29646;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29780_31226 = state_29646__$1;
(statearr_29780_31226[(1)] = (8));

} else {
var statearr_29781_31227 = state_29646__$1;
(statearr_29781_31227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (14))){
var inst_29639 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
var statearr_29782_31228 = state_29646__$1;
(statearr_29782_31228[(2)] = inst_29639);

(statearr_29782_31228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (10))){
var inst_29630 = (state_29646[(2)]);
var state_29646__$1 = state_29646;
var statearr_29783_31229 = state_29646__$1;
(statearr_29783_31229[(2)] = inst_29630);

(statearr_29783_31229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29649 === (8))){
var inst_29623 = cljs.core.async.close_BANG_(to);
var state_29646__$1 = state_29646;
var statearr_29784_31230 = state_29646__$1;
(statearr_29784_31230[(2)] = inst_29623);

(statearr_29784_31230[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29349__auto__ = null;
var cljs$core$async$state_machine__29349__auto____0 = (function (){
var statearr_29785 = [null,null,null,null,null,null,null,null];
(statearr_29785[(0)] = cljs$core$async$state_machine__29349__auto__);

(statearr_29785[(1)] = (1));

return statearr_29785;
});
var cljs$core$async$state_machine__29349__auto____1 = (function (state_29646){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_29646);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e29787){var ex__29352__auto__ = e29787;
var statearr_29788_31231 = state_29646;
(statearr_29788_31231[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_29646[(4)]))){
var statearr_29789_31232 = state_29646;
(statearr_29789_31232[(1)] = cljs.core.first((state_29646[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31233 = state_29646;
state_29646 = G__31233;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$state_machine__29349__auto__ = function(state_29646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29349__auto____1.call(this,state_29646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29349__auto____0;
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29349__auto____1;
return cljs$core$async$state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_29805 = f__29423__auto__();
(statearr_29805[(6)] = c__29422__auto___31216);

return statearr_29805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29809){
var vec__29810 = p__29809;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29810,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29810,(1),null);
var job = vec__29810;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29422__auto___31235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_29817){
var state_val_29822 = (state_29817[(1)]);
if((state_val_29822 === (1))){
var state_29817__$1 = state_29817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29817__$1,(2),res,v);
} else {
if((state_val_29822 === (2))){
var inst_29814 = (state_29817[(2)]);
var inst_29815 = cljs.core.async.close_BANG_(res);
var state_29817__$1 = (function (){var statearr_29823 = state_29817;
(statearr_29823[(7)] = inst_29814);

return statearr_29823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29817__$1,inst_29815);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0 = (function (){
var statearr_29824 = [null,null,null,null,null,null,null,null];
(statearr_29824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__);

(statearr_29824[(1)] = (1));

return statearr_29824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1 = (function (state_29817){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_29817);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e29825){var ex__29352__auto__ = e29825;
var statearr_29826_31237 = state_29817;
(statearr_29826_31237[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_29817[(4)]))){
var statearr_29827_31238 = state_29817;
(statearr_29827_31238[(1)] = cljs.core.first((state_29817[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31239 = state_29817;
state_29817 = G__31239;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__ = function(state_29817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1.call(this,state_29817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_29828 = f__29423__auto__();
(statearr_29828[(6)] = c__29422__auto___31235);

return statearr_29828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29829){
var vec__29830 = p__29829;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29830,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29830,(1),null);
var job = vec__29830;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___31240 = n;
var __31241 = (0);
while(true){
if((__31241 < n__4741__auto___31240)){
var G__29833_31242 = type;
var G__29833_31243__$1 = (((G__29833_31242 instanceof cljs.core.Keyword))?G__29833_31242.fqn:null);
switch (G__29833_31243__$1) {
case "compute":
var c__29422__auto___31245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31241,c__29422__auto___31245,G__29833_31242,G__29833_31243__$1,n__4741__auto___31240,jobs,results,process,async){
return (function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = ((function (__31241,c__29422__auto___31245,G__29833_31242,G__29833_31243__$1,n__4741__auto___31240,jobs,results,process,async){
return (function (state_29846){
var state_val_29847 = (state_29846[(1)]);
if((state_val_29847 === (1))){
var state_29846__$1 = state_29846;
var statearr_29848_31246 = state_29846__$1;
(statearr_29848_31246[(2)] = null);

(statearr_29848_31246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (2))){
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29846__$1,(4),jobs);
} else {
if((state_val_29847 === (3))){
var inst_29844 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29846__$1,inst_29844);
} else {
if((state_val_29847 === (4))){
var inst_29836 = (state_29846[(2)]);
var inst_29837 = process(inst_29836);
var state_29846__$1 = state_29846;
if(cljs.core.truth_(inst_29837)){
var statearr_29849_31248 = state_29846__$1;
(statearr_29849_31248[(1)] = (5));

} else {
var statearr_29850_31249 = state_29846__$1;
(statearr_29850_31249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (5))){
var state_29846__$1 = state_29846;
var statearr_29851_31250 = state_29846__$1;
(statearr_29851_31250[(2)] = null);

(statearr_29851_31250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (6))){
var state_29846__$1 = state_29846;
var statearr_29852_31251 = state_29846__$1;
(statearr_29852_31251[(2)] = null);

(statearr_29852_31251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (7))){
var inst_29842 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29853_31252 = state_29846__$1;
(statearr_29853_31252[(2)] = inst_29842);

(statearr_29853_31252[(1)] = (3));


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
});})(__31241,c__29422__auto___31245,G__29833_31242,G__29833_31243__$1,n__4741__auto___31240,jobs,results,process,async))
;
return ((function (__31241,switch__29348__auto__,c__29422__auto___31245,G__29833_31242,G__29833_31243__$1,n__4741__auto___31240,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0 = (function (){
var statearr_29854 = [null,null,null,null,null,null,null];
(statearr_29854[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__);

(statearr_29854[(1)] = (1));

return statearr_29854;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1 = (function (state_29846){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_29846);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e29855){var ex__29352__auto__ = e29855;
var statearr_29856_31253 = state_29846;
(statearr_29856_31253[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_29846[(4)]))){
var statearr_29857_31254 = state_29846;
(statearr_29857_31254[(1)] = cljs.core.first((state_29846[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31255 = state_29846;
state_29846 = G__31255;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__ = function(state_29846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1.call(this,state_29846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__;
})()
;})(__31241,switch__29348__auto__,c__29422__auto___31245,G__29833_31242,G__29833_31243__$1,n__4741__auto___31240,jobs,results,process,async))
})();
var state__29424__auto__ = (function (){var statearr_29858 = f__29423__auto__();
(statearr_29858[(6)] = c__29422__auto___31245);

return statearr_29858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
});})(__31241,c__29422__auto___31245,G__29833_31242,G__29833_31243__$1,n__4741__auto___31240,jobs,results,process,async))
);


break;
case "async":
var c__29422__auto___31256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31241,c__29422__auto___31256,G__29833_31242,G__29833_31243__$1,n__4741__auto___31240,jobs,results,process,async){
return (function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = ((function (__31241,c__29422__auto___31256,G__29833_31242,G__29833_31243__$1,n__4741__auto___31240,jobs,results,process,async){
return (function (state_29873){
var state_val_29875 = (state_29873[(1)]);
if((state_val_29875 === (1))){
var state_29873__$1 = state_29873;
var statearr_29880_31257 = state_29873__$1;
(statearr_29880_31257[(2)] = null);

(statearr_29880_31257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (2))){
var state_29873__$1 = state_29873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29873__$1,(4),jobs);
} else {
if((state_val_29875 === (3))){
var inst_29870 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29873__$1,inst_29870);
} else {
if((state_val_29875 === (4))){
var inst_29862 = (state_29873[(2)]);
var inst_29863 = async(inst_29862);
var state_29873__$1 = state_29873;
if(cljs.core.truth_(inst_29863)){
var statearr_29881_31258 = state_29873__$1;
(statearr_29881_31258[(1)] = (5));

} else {
var statearr_29882_31259 = state_29873__$1;
(statearr_29882_31259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (5))){
var state_29873__$1 = state_29873;
var statearr_29888_31260 = state_29873__$1;
(statearr_29888_31260[(2)] = null);

(statearr_29888_31260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (6))){
var state_29873__$1 = state_29873;
var statearr_29889_31261 = state_29873__$1;
(statearr_29889_31261[(2)] = null);

(statearr_29889_31261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29875 === (7))){
var inst_29868 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
var statearr_29890_31262 = state_29873__$1;
(statearr_29890_31262[(2)] = inst_29868);

(statearr_29890_31262[(1)] = (3));


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
});})(__31241,c__29422__auto___31256,G__29833_31242,G__29833_31243__$1,n__4741__auto___31240,jobs,results,process,async))
;
return ((function (__31241,switch__29348__auto__,c__29422__auto___31256,G__29833_31242,G__29833_31243__$1,n__4741__auto___31240,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0 = (function (){
var statearr_29891 = [null,null,null,null,null,null,null];
(statearr_29891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__);

(statearr_29891[(1)] = (1));

return statearr_29891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1 = (function (state_29873){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_29873);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e29892){var ex__29352__auto__ = e29892;
var statearr_29893_31264 = state_29873;
(statearr_29893_31264[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_29873[(4)]))){
var statearr_29894_31265 = state_29873;
(statearr_29894_31265[(1)] = cljs.core.first((state_29873[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31266 = state_29873;
state_29873 = G__31266;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__ = function(state_29873){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1.call(this,state_29873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__;
})()
;})(__31241,switch__29348__auto__,c__29422__auto___31256,G__29833_31242,G__29833_31243__$1,n__4741__auto___31240,jobs,results,process,async))
})();
var state__29424__auto__ = (function (){var statearr_29895 = f__29423__auto__();
(statearr_29895[(6)] = c__29422__auto___31256);

return statearr_29895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
});})(__31241,c__29422__auto___31256,G__29833_31242,G__29833_31243__$1,n__4741__auto___31240,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29833_31243__$1)].join('')));

}

var G__31267 = (__31241 + (1));
__31241 = G__31267;
continue;
} else {
}
break;
}

var c__29422__auto___31268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_29917){
var state_val_29918 = (state_29917[(1)]);
if((state_val_29918 === (7))){
var inst_29913 = (state_29917[(2)]);
var state_29917__$1 = state_29917;
var statearr_29926_31269 = state_29917__$1;
(statearr_29926_31269[(2)] = inst_29913);

(statearr_29926_31269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29918 === (1))){
var state_29917__$1 = state_29917;
var statearr_29927_31270 = state_29917__$1;
(statearr_29927_31270[(2)] = null);

(statearr_29927_31270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29918 === (4))){
var inst_29898 = (state_29917[(7)]);
var inst_29898__$1 = (state_29917[(2)]);
var inst_29899 = (inst_29898__$1 == null);
var state_29917__$1 = (function (){var statearr_29938 = state_29917;
(statearr_29938[(7)] = inst_29898__$1);

return statearr_29938;
})();
if(cljs.core.truth_(inst_29899)){
var statearr_29939_31271 = state_29917__$1;
(statearr_29939_31271[(1)] = (5));

} else {
var statearr_29940_31272 = state_29917__$1;
(statearr_29940_31272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29918 === (6))){
var inst_29903 = (state_29917[(8)]);
var inst_29898 = (state_29917[(7)]);
var inst_29903__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29904 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29905 = [inst_29898,inst_29903__$1];
var inst_29906 = (new cljs.core.PersistentVector(null,2,(5),inst_29904,inst_29905,null));
var state_29917__$1 = (function (){var statearr_29944 = state_29917;
(statearr_29944[(8)] = inst_29903__$1);

return statearr_29944;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29917__$1,(8),jobs,inst_29906);
} else {
if((state_val_29918 === (3))){
var inst_29915 = (state_29917[(2)]);
var state_29917__$1 = state_29917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29917__$1,inst_29915);
} else {
if((state_val_29918 === (2))){
var state_29917__$1 = state_29917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29917__$1,(4),from);
} else {
if((state_val_29918 === (9))){
var inst_29910 = (state_29917[(2)]);
var state_29917__$1 = (function (){var statearr_29948 = state_29917;
(statearr_29948[(9)] = inst_29910);

return statearr_29948;
})();
var statearr_29949_31273 = state_29917__$1;
(statearr_29949_31273[(2)] = null);

(statearr_29949_31273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29918 === (5))){
var inst_29901 = cljs.core.async.close_BANG_(jobs);
var state_29917__$1 = state_29917;
var statearr_29950_31274 = state_29917__$1;
(statearr_29950_31274[(2)] = inst_29901);

(statearr_29950_31274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29918 === (8))){
var inst_29903 = (state_29917[(8)]);
var inst_29908 = (state_29917[(2)]);
var state_29917__$1 = (function (){var statearr_29951 = state_29917;
(statearr_29951[(10)] = inst_29908);

return statearr_29951;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29917__$1,(9),results,inst_29903);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0 = (function (){
var statearr_29952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__);

(statearr_29952[(1)] = (1));

return statearr_29952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1 = (function (state_29917){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_29917);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e29953){var ex__29352__auto__ = e29953;
var statearr_29954_31276 = state_29917;
(statearr_29954_31276[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_29917[(4)]))){
var statearr_29955_31278 = state_29917;
(statearr_29955_31278[(1)] = cljs.core.first((state_29917[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31279 = state_29917;
state_29917 = G__31279;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__ = function(state_29917){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1.call(this,state_29917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_29957 = f__29423__auto__();
(statearr_29957[(6)] = c__29422__auto___31268);

return statearr_29957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


var c__29422__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_29995){
var state_val_29996 = (state_29995[(1)]);
if((state_val_29996 === (7))){
var inst_29991 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
var statearr_29997_31281 = state_29995__$1;
(statearr_29997_31281[(2)] = inst_29991);

(statearr_29997_31281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (20))){
var state_29995__$1 = state_29995;
var statearr_29998_31283 = state_29995__$1;
(statearr_29998_31283[(2)] = null);

(statearr_29998_31283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (1))){
var state_29995__$1 = state_29995;
var statearr_29999_31284 = state_29995__$1;
(statearr_29999_31284[(2)] = null);

(statearr_29999_31284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (4))){
var inst_29960 = (state_29995[(7)]);
var inst_29960__$1 = (state_29995[(2)]);
var inst_29961 = (inst_29960__$1 == null);
var state_29995__$1 = (function (){var statearr_30000 = state_29995;
(statearr_30000[(7)] = inst_29960__$1);

return statearr_30000;
})();
if(cljs.core.truth_(inst_29961)){
var statearr_30001_31285 = state_29995__$1;
(statearr_30001_31285[(1)] = (5));

} else {
var statearr_30002_31286 = state_29995__$1;
(statearr_30002_31286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (15))){
var inst_29973 = (state_29995[(8)]);
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29995__$1,(18),to,inst_29973);
} else {
if((state_val_29996 === (21))){
var inst_29986 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
var statearr_30003_31287 = state_29995__$1;
(statearr_30003_31287[(2)] = inst_29986);

(statearr_30003_31287[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (13))){
var inst_29988 = (state_29995[(2)]);
var state_29995__$1 = (function (){var statearr_30004 = state_29995;
(statearr_30004[(9)] = inst_29988);

return statearr_30004;
})();
var statearr_30005_31288 = state_29995__$1;
(statearr_30005_31288[(2)] = null);

(statearr_30005_31288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (6))){
var inst_29960 = (state_29995[(7)]);
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29995__$1,(11),inst_29960);
} else {
if((state_val_29996 === (17))){
var inst_29981 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
if(cljs.core.truth_(inst_29981)){
var statearr_30006_31289 = state_29995__$1;
(statearr_30006_31289[(1)] = (19));

} else {
var statearr_30007_31290 = state_29995__$1;
(statearr_30007_31290[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (3))){
var inst_29993 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29995__$1,inst_29993);
} else {
if((state_val_29996 === (12))){
var inst_29970 = (state_29995[(10)]);
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29995__$1,(14),inst_29970);
} else {
if((state_val_29996 === (2))){
var state_29995__$1 = state_29995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29995__$1,(4),results);
} else {
if((state_val_29996 === (19))){
var state_29995__$1 = state_29995;
var statearr_30008_31291 = state_29995__$1;
(statearr_30008_31291[(2)] = null);

(statearr_30008_31291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (11))){
var inst_29970 = (state_29995[(2)]);
var state_29995__$1 = (function (){var statearr_30009 = state_29995;
(statearr_30009[(10)] = inst_29970);

return statearr_30009;
})();
var statearr_30010_31292 = state_29995__$1;
(statearr_30010_31292[(2)] = null);

(statearr_30010_31292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (9))){
var state_29995__$1 = state_29995;
var statearr_30011_31293 = state_29995__$1;
(statearr_30011_31293[(2)] = null);

(statearr_30011_31293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (5))){
var state_29995__$1 = state_29995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30012_31294 = state_29995__$1;
(statearr_30012_31294[(1)] = (8));

} else {
var statearr_30013_31295 = state_29995__$1;
(statearr_30013_31295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (14))){
var inst_29975 = (state_29995[(11)]);
var inst_29973 = (state_29995[(8)]);
var inst_29973__$1 = (state_29995[(2)]);
var inst_29974 = (inst_29973__$1 == null);
var inst_29975__$1 = cljs.core.not(inst_29974);
var state_29995__$1 = (function (){var statearr_30015 = state_29995;
(statearr_30015[(11)] = inst_29975__$1);

(statearr_30015[(8)] = inst_29973__$1);

return statearr_30015;
})();
if(inst_29975__$1){
var statearr_30016_31296 = state_29995__$1;
(statearr_30016_31296[(1)] = (15));

} else {
var statearr_30017_31297 = state_29995__$1;
(statearr_30017_31297[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (16))){
var inst_29975 = (state_29995[(11)]);
var state_29995__$1 = state_29995;
var statearr_30018_31298 = state_29995__$1;
(statearr_30018_31298[(2)] = inst_29975);

(statearr_30018_31298[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (10))){
var inst_29967 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
var statearr_30019_31299 = state_29995__$1;
(statearr_30019_31299[(2)] = inst_29967);

(statearr_30019_31299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (18))){
var inst_29978 = (state_29995[(2)]);
var state_29995__$1 = state_29995;
var statearr_30020_31300 = state_29995__$1;
(statearr_30020_31300[(2)] = inst_29978);

(statearr_30020_31300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29996 === (8))){
var inst_29964 = cljs.core.async.close_BANG_(to);
var state_29995__$1 = state_29995;
var statearr_30021_31301 = state_29995__$1;
(statearr_30021_31301[(2)] = inst_29964);

(statearr_30021_31301[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0 = (function (){
var statearr_30022 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__);

(statearr_30022[(1)] = (1));

return statearr_30022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1 = (function (state_29995){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_29995);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30023){var ex__29352__auto__ = e30023;
var statearr_30024_31302 = state_29995;
(statearr_30024_31302[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_29995[(4)]))){
var statearr_30025_31303 = state_29995;
(statearr_30025_31303[(1)] = cljs.core.first((state_29995[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31304 = state_29995;
state_29995 = G__31304;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__ = function(state_29995){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1.call(this,state_29995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_30026 = f__29423__auto__();
(statearr_30026[(6)] = c__29422__auto__);

return statearr_30026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));

return c__29422__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30029 = arguments.length;
switch (G__30029) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30033 = arguments.length;
switch (G__30033) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30035 = arguments.length;
switch (G__30035) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29422__auto___31311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_30061){
var state_val_30062 = (state_30061[(1)]);
if((state_val_30062 === (7))){
var inst_30057 = (state_30061[(2)]);
var state_30061__$1 = state_30061;
var statearr_30063_31312 = state_30061__$1;
(statearr_30063_31312[(2)] = inst_30057);

(statearr_30063_31312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30062 === (1))){
var state_30061__$1 = state_30061;
var statearr_30064_31313 = state_30061__$1;
(statearr_30064_31313[(2)] = null);

(statearr_30064_31313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30062 === (4))){
var inst_30038 = (state_30061[(7)]);
var inst_30038__$1 = (state_30061[(2)]);
var inst_30039 = (inst_30038__$1 == null);
var state_30061__$1 = (function (){var statearr_30065 = state_30061;
(statearr_30065[(7)] = inst_30038__$1);

return statearr_30065;
})();
if(cljs.core.truth_(inst_30039)){
var statearr_30066_31314 = state_30061__$1;
(statearr_30066_31314[(1)] = (5));

} else {
var statearr_30067_31315 = state_30061__$1;
(statearr_30067_31315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30062 === (13))){
var state_30061__$1 = state_30061;
var statearr_30068_31316 = state_30061__$1;
(statearr_30068_31316[(2)] = null);

(statearr_30068_31316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30062 === (6))){
var inst_30038 = (state_30061[(7)]);
var inst_30044 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30038) : p.call(null,inst_30038));
var state_30061__$1 = state_30061;
if(cljs.core.truth_(inst_30044)){
var statearr_30069_31317 = state_30061__$1;
(statearr_30069_31317[(1)] = (9));

} else {
var statearr_30070_31318 = state_30061__$1;
(statearr_30070_31318[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30062 === (3))){
var inst_30059 = (state_30061[(2)]);
var state_30061__$1 = state_30061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30061__$1,inst_30059);
} else {
if((state_val_30062 === (12))){
var state_30061__$1 = state_30061;
var statearr_30071_31319 = state_30061__$1;
(statearr_30071_31319[(2)] = null);

(statearr_30071_31319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30062 === (2))){
var state_30061__$1 = state_30061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30061__$1,(4),ch);
} else {
if((state_val_30062 === (11))){
var inst_30038 = (state_30061[(7)]);
var inst_30048 = (state_30061[(2)]);
var state_30061__$1 = state_30061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30061__$1,(8),inst_30048,inst_30038);
} else {
if((state_val_30062 === (9))){
var state_30061__$1 = state_30061;
var statearr_30072_31322 = state_30061__$1;
(statearr_30072_31322[(2)] = tc);

(statearr_30072_31322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30062 === (5))){
var inst_30041 = cljs.core.async.close_BANG_(tc);
var inst_30042 = cljs.core.async.close_BANG_(fc);
var state_30061__$1 = (function (){var statearr_30073 = state_30061;
(statearr_30073[(8)] = inst_30041);

return statearr_30073;
})();
var statearr_30074_31323 = state_30061__$1;
(statearr_30074_31323[(2)] = inst_30042);

(statearr_30074_31323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30062 === (14))){
var inst_30055 = (state_30061[(2)]);
var state_30061__$1 = state_30061;
var statearr_30075_31324 = state_30061__$1;
(statearr_30075_31324[(2)] = inst_30055);

(statearr_30075_31324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30062 === (10))){
var state_30061__$1 = state_30061;
var statearr_30076_31325 = state_30061__$1;
(statearr_30076_31325[(2)] = fc);

(statearr_30076_31325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30062 === (8))){
var inst_30050 = (state_30061[(2)]);
var state_30061__$1 = state_30061;
if(cljs.core.truth_(inst_30050)){
var statearr_30077_31326 = state_30061__$1;
(statearr_30077_31326[(1)] = (12));

} else {
var statearr_30078_31327 = state_30061__$1;
(statearr_30078_31327[(1)] = (13));

}

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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29349__auto__ = null;
var cljs$core$async$state_machine__29349__auto____0 = (function (){
var statearr_30079 = [null,null,null,null,null,null,null,null,null];
(statearr_30079[(0)] = cljs$core$async$state_machine__29349__auto__);

(statearr_30079[(1)] = (1));

return statearr_30079;
});
var cljs$core$async$state_machine__29349__auto____1 = (function (state_30061){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_30061);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30080){var ex__29352__auto__ = e30080;
var statearr_30081_31331 = state_30061;
(statearr_30081_31331[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_30061[(4)]))){
var statearr_30082_31333 = state_30061;
(statearr_30082_31333[(1)] = cljs.core.first((state_30061[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31334 = state_30061;
state_30061 = G__31334;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$state_machine__29349__auto__ = function(state_30061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29349__auto____1.call(this,state_30061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29349__auto____0;
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29349__auto____1;
return cljs$core$async$state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_30083 = f__29423__auto__();
(statearr_30083[(6)] = c__29422__auto___31311);

return statearr_30083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29422__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_30105){
var state_val_30106 = (state_30105[(1)]);
if((state_val_30106 === (7))){
var inst_30101 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30107_31335 = state_30105__$1;
(statearr_30107_31335[(2)] = inst_30101);

(statearr_30107_31335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (1))){
var inst_30084 = init;
var inst_30085 = inst_30084;
var state_30105__$1 = (function (){var statearr_30108 = state_30105;
(statearr_30108[(7)] = inst_30085);

return statearr_30108;
})();
var statearr_30109_31336 = state_30105__$1;
(statearr_30109_31336[(2)] = null);

(statearr_30109_31336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (4))){
var inst_30088 = (state_30105[(8)]);
var inst_30088__$1 = (state_30105[(2)]);
var inst_30089 = (inst_30088__$1 == null);
var state_30105__$1 = (function (){var statearr_30110 = state_30105;
(statearr_30110[(8)] = inst_30088__$1);

return statearr_30110;
})();
if(cljs.core.truth_(inst_30089)){
var statearr_30111_31337 = state_30105__$1;
(statearr_30111_31337[(1)] = (5));

} else {
var statearr_30112_31338 = state_30105__$1;
(statearr_30112_31338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (6))){
var inst_30085 = (state_30105[(7)]);
var inst_30088 = (state_30105[(8)]);
var inst_30092 = (state_30105[(9)]);
var inst_30092__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30085,inst_30088) : f.call(null,inst_30085,inst_30088));
var inst_30093 = cljs.core.reduced_QMARK_(inst_30092__$1);
var state_30105__$1 = (function (){var statearr_30113 = state_30105;
(statearr_30113[(9)] = inst_30092__$1);

return statearr_30113;
})();
if(inst_30093){
var statearr_30114_31339 = state_30105__$1;
(statearr_30114_31339[(1)] = (8));

} else {
var statearr_30115_31340 = state_30105__$1;
(statearr_30115_31340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (3))){
var inst_30103 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30105__$1,inst_30103);
} else {
if((state_val_30106 === (2))){
var state_30105__$1 = state_30105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30105__$1,(4),ch);
} else {
if((state_val_30106 === (9))){
var inst_30092 = (state_30105[(9)]);
var inst_30085 = inst_30092;
var state_30105__$1 = (function (){var statearr_30116 = state_30105;
(statearr_30116[(7)] = inst_30085);

return statearr_30116;
})();
var statearr_30117_31341 = state_30105__$1;
(statearr_30117_31341[(2)] = null);

(statearr_30117_31341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (5))){
var inst_30085 = (state_30105[(7)]);
var state_30105__$1 = state_30105;
var statearr_30118_31342 = state_30105__$1;
(statearr_30118_31342[(2)] = inst_30085);

(statearr_30118_31342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (10))){
var inst_30099 = (state_30105[(2)]);
var state_30105__$1 = state_30105;
var statearr_30119_31343 = state_30105__$1;
(statearr_30119_31343[(2)] = inst_30099);

(statearr_30119_31343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30106 === (8))){
var inst_30092 = (state_30105[(9)]);
var inst_30095 = cljs.core.deref(inst_30092);
var state_30105__$1 = state_30105;
var statearr_30120_31345 = state_30105__$1;
(statearr_30120_31345[(2)] = inst_30095);

(statearr_30120_31345[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29349__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29349__auto____0 = (function (){
var statearr_30121 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30121[(0)] = cljs$core$async$reduce_$_state_machine__29349__auto__);

(statearr_30121[(1)] = (1));

return statearr_30121;
});
var cljs$core$async$reduce_$_state_machine__29349__auto____1 = (function (state_30105){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_30105);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30122){var ex__29352__auto__ = e30122;
var statearr_30123_31346 = state_30105;
(statearr_30123_31346[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_30105[(4)]))){
var statearr_30124_31347 = state_30105;
(statearr_30124_31347[(1)] = cljs.core.first((state_30105[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31348 = state_30105;
state_30105 = G__31348;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29349__auto__ = function(state_30105){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29349__auto____1.call(this,state_30105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29349__auto____0;
cljs$core$async$reduce_$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29349__auto____1;
return cljs$core$async$reduce_$_state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_30125 = f__29423__auto__();
(statearr_30125[(6)] = c__29422__auto__);

return statearr_30125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));

return c__29422__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29422__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_30131){
var state_val_30132 = (state_30131[(1)]);
if((state_val_30132 === (1))){
var inst_30126 = cljs.core.async.reduce(f__$1,init,ch);
var state_30131__$1 = state_30131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30131__$1,(2),inst_30126);
} else {
if((state_val_30132 === (2))){
var inst_30128 = (state_30131[(2)]);
var inst_30129 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30128) : f__$1.call(null,inst_30128));
var state_30131__$1 = state_30131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30131__$1,inst_30129);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29349__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29349__auto____0 = (function (){
var statearr_30133 = [null,null,null,null,null,null,null];
(statearr_30133[(0)] = cljs$core$async$transduce_$_state_machine__29349__auto__);

(statearr_30133[(1)] = (1));

return statearr_30133;
});
var cljs$core$async$transduce_$_state_machine__29349__auto____1 = (function (state_30131){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_30131);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30134){var ex__29352__auto__ = e30134;
var statearr_30135_31349 = state_30131;
(statearr_30135_31349[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_30131[(4)]))){
var statearr_30136_31350 = state_30131;
(statearr_30136_31350[(1)] = cljs.core.first((state_30131[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31351 = state_30131;
state_30131 = G__31351;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29349__auto__ = function(state_30131){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29349__auto____1.call(this,state_30131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29349__auto____0;
cljs$core$async$transduce_$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29349__auto____1;
return cljs$core$async$transduce_$_state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_30137 = f__29423__auto__();
(statearr_30137[(6)] = c__29422__auto__);

return statearr_30137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));

return c__29422__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30139 = arguments.length;
switch (G__30139) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29422__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_30164){
var state_val_30165 = (state_30164[(1)]);
if((state_val_30165 === (7))){
var inst_30146 = (state_30164[(2)]);
var state_30164__$1 = state_30164;
var statearr_30166_31353 = state_30164__$1;
(statearr_30166_31353[(2)] = inst_30146);

(statearr_30166_31353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (1))){
var inst_30140 = cljs.core.seq(coll);
var inst_30141 = inst_30140;
var state_30164__$1 = (function (){var statearr_30167 = state_30164;
(statearr_30167[(7)] = inst_30141);

return statearr_30167;
})();
var statearr_30168_31354 = state_30164__$1;
(statearr_30168_31354[(2)] = null);

(statearr_30168_31354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (4))){
var inst_30141 = (state_30164[(7)]);
var inst_30144 = cljs.core.first(inst_30141);
var state_30164__$1 = state_30164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30164__$1,(7),ch,inst_30144);
} else {
if((state_val_30165 === (13))){
var inst_30158 = (state_30164[(2)]);
var state_30164__$1 = state_30164;
var statearr_30169_31355 = state_30164__$1;
(statearr_30169_31355[(2)] = inst_30158);

(statearr_30169_31355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (6))){
var inst_30149 = (state_30164[(2)]);
var state_30164__$1 = state_30164;
if(cljs.core.truth_(inst_30149)){
var statearr_30170_31356 = state_30164__$1;
(statearr_30170_31356[(1)] = (8));

} else {
var statearr_30171_31357 = state_30164__$1;
(statearr_30171_31357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (3))){
var inst_30162 = (state_30164[(2)]);
var state_30164__$1 = state_30164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30164__$1,inst_30162);
} else {
if((state_val_30165 === (12))){
var state_30164__$1 = state_30164;
var statearr_30172_31358 = state_30164__$1;
(statearr_30172_31358[(2)] = null);

(statearr_30172_31358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (2))){
var inst_30141 = (state_30164[(7)]);
var state_30164__$1 = state_30164;
if(cljs.core.truth_(inst_30141)){
var statearr_30173_31359 = state_30164__$1;
(statearr_30173_31359[(1)] = (4));

} else {
var statearr_30174_31360 = state_30164__$1;
(statearr_30174_31360[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (11))){
var inst_30155 = cljs.core.async.close_BANG_(ch);
var state_30164__$1 = state_30164;
var statearr_30175_31361 = state_30164__$1;
(statearr_30175_31361[(2)] = inst_30155);

(statearr_30175_31361[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (9))){
var state_30164__$1 = state_30164;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30176_31362 = state_30164__$1;
(statearr_30176_31362[(1)] = (11));

} else {
var statearr_30177_31363 = state_30164__$1;
(statearr_30177_31363[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (5))){
var inst_30141 = (state_30164[(7)]);
var state_30164__$1 = state_30164;
var statearr_30178_31364 = state_30164__$1;
(statearr_30178_31364[(2)] = inst_30141);

(statearr_30178_31364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (10))){
var inst_30160 = (state_30164[(2)]);
var state_30164__$1 = state_30164;
var statearr_30179_31365 = state_30164__$1;
(statearr_30179_31365[(2)] = inst_30160);

(statearr_30179_31365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30165 === (8))){
var inst_30141 = (state_30164[(7)]);
var inst_30151 = cljs.core.next(inst_30141);
var inst_30141__$1 = inst_30151;
var state_30164__$1 = (function (){var statearr_30180 = state_30164;
(statearr_30180[(7)] = inst_30141__$1);

return statearr_30180;
})();
var statearr_30181_31366 = state_30164__$1;
(statearr_30181_31366[(2)] = null);

(statearr_30181_31366[(1)] = (2));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__29349__auto__ = null;
var cljs$core$async$state_machine__29349__auto____0 = (function (){
var statearr_30182 = [null,null,null,null,null,null,null,null];
(statearr_30182[(0)] = cljs$core$async$state_machine__29349__auto__);

(statearr_30182[(1)] = (1));

return statearr_30182;
});
var cljs$core$async$state_machine__29349__auto____1 = (function (state_30164){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_30164);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30183){var ex__29352__auto__ = e30183;
var statearr_30184_31367 = state_30164;
(statearr_30184_31367[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_30164[(4)]))){
var statearr_30185_31368 = state_30164;
(statearr_30185_31368[(1)] = cljs.core.first((state_30164[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31369 = state_30164;
state_30164 = G__31369;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$state_machine__29349__auto__ = function(state_30164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29349__auto____1.call(this,state_30164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29349__auto____0;
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29349__auto____1;
return cljs$core$async$state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_30186 = f__29423__auto__();
(statearr_30186[(6)] = c__29422__auto__);

return statearr_30186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));

return c__29422__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30188 = arguments.length;
switch (G__30188) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_31371 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_31371(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_31372 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_31372(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_31373 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_31373(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_31374 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_31374(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30189 = (function (ch,cs,meta30190){
this.ch = ch;
this.cs = cs;
this.meta30190 = meta30190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30191,meta30190__$1){
var self__ = this;
var _30191__$1 = this;
return (new cljs.core.async.t_cljs$core$async30189(self__.ch,self__.cs,meta30190__$1));
}));

(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30191){
var self__ = this;
var _30191__$1 = this;
return self__.meta30190;
}));

(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30189.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30190","meta30190",-1122924839,null)], null);
}));

(cljs.core.async.t_cljs$core$async30189.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30189");

(cljs.core.async.t_cljs$core$async30189.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30189");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30189.
 */
cljs.core.async.__GT_t_cljs$core$async30189 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30189(ch__$1,cs__$1,meta30190){
return (new cljs.core.async.t_cljs$core$async30189(ch__$1,cs__$1,meta30190));
});

}

return (new cljs.core.async.t_cljs$core$async30189(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29422__auto___31379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_30324){
var state_val_30325 = (state_30324[(1)]);
if((state_val_30325 === (7))){
var inst_30320 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30326_31380 = state_30324__$1;
(statearr_30326_31380[(2)] = inst_30320);

(statearr_30326_31380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (20))){
var inst_30225 = (state_30324[(7)]);
var inst_30237 = cljs.core.first(inst_30225);
var inst_30238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30237,(0),null);
var inst_30239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30237,(1),null);
var state_30324__$1 = (function (){var statearr_30327 = state_30324;
(statearr_30327[(8)] = inst_30238);

return statearr_30327;
})();
if(cljs.core.truth_(inst_30239)){
var statearr_30328_31382 = state_30324__$1;
(statearr_30328_31382[(1)] = (22));

} else {
var statearr_30329_31383 = state_30324__$1;
(statearr_30329_31383[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (27))){
var inst_30269 = (state_30324[(9)]);
var inst_30274 = (state_30324[(10)]);
var inst_30194 = (state_30324[(11)]);
var inst_30267 = (state_30324[(12)]);
var inst_30274__$1 = cljs.core._nth(inst_30267,inst_30269);
var inst_30275 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30274__$1,inst_30194,done);
var state_30324__$1 = (function (){var statearr_30330 = state_30324;
(statearr_30330[(10)] = inst_30274__$1);

return statearr_30330;
})();
if(cljs.core.truth_(inst_30275)){
var statearr_30331_31384 = state_30324__$1;
(statearr_30331_31384[(1)] = (30));

} else {
var statearr_30332_31385 = state_30324__$1;
(statearr_30332_31385[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (1))){
var state_30324__$1 = state_30324;
var statearr_30333_31386 = state_30324__$1;
(statearr_30333_31386[(2)] = null);

(statearr_30333_31386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (24))){
var inst_30225 = (state_30324[(7)]);
var inst_30244 = (state_30324[(2)]);
var inst_30245 = cljs.core.next(inst_30225);
var inst_30203 = inst_30245;
var inst_30204 = null;
var inst_30205 = (0);
var inst_30206 = (0);
var state_30324__$1 = (function (){var statearr_30334 = state_30324;
(statearr_30334[(13)] = inst_30204);

(statearr_30334[(14)] = inst_30205);

(statearr_30334[(15)] = inst_30244);

(statearr_30334[(16)] = inst_30206);

(statearr_30334[(17)] = inst_30203);

return statearr_30334;
})();
var statearr_30335_31387 = state_30324__$1;
(statearr_30335_31387[(2)] = null);

(statearr_30335_31387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (39))){
var state_30324__$1 = state_30324;
var statearr_30339_31388 = state_30324__$1;
(statearr_30339_31388[(2)] = null);

(statearr_30339_31388[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (4))){
var inst_30194 = (state_30324[(11)]);
var inst_30194__$1 = (state_30324[(2)]);
var inst_30195 = (inst_30194__$1 == null);
var state_30324__$1 = (function (){var statearr_30340 = state_30324;
(statearr_30340[(11)] = inst_30194__$1);

return statearr_30340;
})();
if(cljs.core.truth_(inst_30195)){
var statearr_30341_31389 = state_30324__$1;
(statearr_30341_31389[(1)] = (5));

} else {
var statearr_30342_31390 = state_30324__$1;
(statearr_30342_31390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (15))){
var inst_30204 = (state_30324[(13)]);
var inst_30205 = (state_30324[(14)]);
var inst_30206 = (state_30324[(16)]);
var inst_30203 = (state_30324[(17)]);
var inst_30221 = (state_30324[(2)]);
var inst_30222 = (inst_30206 + (1));
var tmp30336 = inst_30204;
var tmp30337 = inst_30205;
var tmp30338 = inst_30203;
var inst_30203__$1 = tmp30338;
var inst_30204__$1 = tmp30336;
var inst_30205__$1 = tmp30337;
var inst_30206__$1 = inst_30222;
var state_30324__$1 = (function (){var statearr_30343 = state_30324;
(statearr_30343[(13)] = inst_30204__$1);

(statearr_30343[(14)] = inst_30205__$1);

(statearr_30343[(18)] = inst_30221);

(statearr_30343[(16)] = inst_30206__$1);

(statearr_30343[(17)] = inst_30203__$1);

return statearr_30343;
})();
var statearr_30344_31391 = state_30324__$1;
(statearr_30344_31391[(2)] = null);

(statearr_30344_31391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (21))){
var inst_30248 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30348_31392 = state_30324__$1;
(statearr_30348_31392[(2)] = inst_30248);

(statearr_30348_31392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (31))){
var inst_30274 = (state_30324[(10)]);
var inst_30278 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30274);
var state_30324__$1 = state_30324;
var statearr_30349_31393 = state_30324__$1;
(statearr_30349_31393[(2)] = inst_30278);

(statearr_30349_31393[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (32))){
var inst_30269 = (state_30324[(9)]);
var inst_30266 = (state_30324[(19)]);
var inst_30268 = (state_30324[(20)]);
var inst_30267 = (state_30324[(12)]);
var inst_30280 = (state_30324[(2)]);
var inst_30281 = (inst_30269 + (1));
var tmp30345 = inst_30266;
var tmp30346 = inst_30268;
var tmp30347 = inst_30267;
var inst_30266__$1 = tmp30345;
var inst_30267__$1 = tmp30347;
var inst_30268__$1 = tmp30346;
var inst_30269__$1 = inst_30281;
var state_30324__$1 = (function (){var statearr_30350 = state_30324;
(statearr_30350[(9)] = inst_30269__$1);

(statearr_30350[(19)] = inst_30266__$1);

(statearr_30350[(20)] = inst_30268__$1);

(statearr_30350[(21)] = inst_30280);

(statearr_30350[(12)] = inst_30267__$1);

return statearr_30350;
})();
var statearr_30351_31394 = state_30324__$1;
(statearr_30351_31394[(2)] = null);

(statearr_30351_31394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (40))){
var inst_30293 = (state_30324[(22)]);
var inst_30297 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30293);
var state_30324__$1 = state_30324;
var statearr_30352_31395 = state_30324__$1;
(statearr_30352_31395[(2)] = inst_30297);

(statearr_30352_31395[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (33))){
var inst_30284 = (state_30324[(23)]);
var inst_30286 = cljs.core.chunked_seq_QMARK_(inst_30284);
var state_30324__$1 = state_30324;
if(inst_30286){
var statearr_30353_31396 = state_30324__$1;
(statearr_30353_31396[(1)] = (36));

} else {
var statearr_30354_31397 = state_30324__$1;
(statearr_30354_31397[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (13))){
var inst_30215 = (state_30324[(24)]);
var inst_30218 = cljs.core.async.close_BANG_(inst_30215);
var state_30324__$1 = state_30324;
var statearr_30355_31398 = state_30324__$1;
(statearr_30355_31398[(2)] = inst_30218);

(statearr_30355_31398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (22))){
var inst_30238 = (state_30324[(8)]);
var inst_30241 = cljs.core.async.close_BANG_(inst_30238);
var state_30324__$1 = state_30324;
var statearr_30356_31399 = state_30324__$1;
(statearr_30356_31399[(2)] = inst_30241);

(statearr_30356_31399[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (36))){
var inst_30284 = (state_30324[(23)]);
var inst_30288 = cljs.core.chunk_first(inst_30284);
var inst_30289 = cljs.core.chunk_rest(inst_30284);
var inst_30290 = cljs.core.count(inst_30288);
var inst_30266 = inst_30289;
var inst_30267 = inst_30288;
var inst_30268 = inst_30290;
var inst_30269 = (0);
var state_30324__$1 = (function (){var statearr_30357 = state_30324;
(statearr_30357[(9)] = inst_30269);

(statearr_30357[(19)] = inst_30266);

(statearr_30357[(20)] = inst_30268);

(statearr_30357[(12)] = inst_30267);

return statearr_30357;
})();
var statearr_30358_31400 = state_30324__$1;
(statearr_30358_31400[(2)] = null);

(statearr_30358_31400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (41))){
var inst_30284 = (state_30324[(23)]);
var inst_30299 = (state_30324[(2)]);
var inst_30300 = cljs.core.next(inst_30284);
var inst_30266 = inst_30300;
var inst_30267 = null;
var inst_30268 = (0);
var inst_30269 = (0);
var state_30324__$1 = (function (){var statearr_30359 = state_30324;
(statearr_30359[(9)] = inst_30269);

(statearr_30359[(19)] = inst_30266);

(statearr_30359[(20)] = inst_30268);

(statearr_30359[(12)] = inst_30267);

(statearr_30359[(25)] = inst_30299);

return statearr_30359;
})();
var statearr_30360_31401 = state_30324__$1;
(statearr_30360_31401[(2)] = null);

(statearr_30360_31401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (43))){
var state_30324__$1 = state_30324;
var statearr_30361_31402 = state_30324__$1;
(statearr_30361_31402[(2)] = null);

(statearr_30361_31402[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (29))){
var inst_30308 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30362_31404 = state_30324__$1;
(statearr_30362_31404[(2)] = inst_30308);

(statearr_30362_31404[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (44))){
var inst_30317 = (state_30324[(2)]);
var state_30324__$1 = (function (){var statearr_30363 = state_30324;
(statearr_30363[(26)] = inst_30317);

return statearr_30363;
})();
var statearr_30364_31406 = state_30324__$1;
(statearr_30364_31406[(2)] = null);

(statearr_30364_31406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (6))){
var inst_30258 = (state_30324[(27)]);
var inst_30257 = cljs.core.deref(cs);
var inst_30258__$1 = cljs.core.keys(inst_30257);
var inst_30259 = cljs.core.count(inst_30258__$1);
var inst_30260 = cljs.core.reset_BANG_(dctr,inst_30259);
var inst_30265 = cljs.core.seq(inst_30258__$1);
var inst_30266 = inst_30265;
var inst_30267 = null;
var inst_30268 = (0);
var inst_30269 = (0);
var state_30324__$1 = (function (){var statearr_30365 = state_30324;
(statearr_30365[(9)] = inst_30269);

(statearr_30365[(19)] = inst_30266);

(statearr_30365[(20)] = inst_30268);

(statearr_30365[(28)] = inst_30260);

(statearr_30365[(27)] = inst_30258__$1);

(statearr_30365[(12)] = inst_30267);

return statearr_30365;
})();
var statearr_30366_31407 = state_30324__$1;
(statearr_30366_31407[(2)] = null);

(statearr_30366_31407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (28))){
var inst_30266 = (state_30324[(19)]);
var inst_30284 = (state_30324[(23)]);
var inst_30284__$1 = cljs.core.seq(inst_30266);
var state_30324__$1 = (function (){var statearr_30367 = state_30324;
(statearr_30367[(23)] = inst_30284__$1);

return statearr_30367;
})();
if(inst_30284__$1){
var statearr_30368_31408 = state_30324__$1;
(statearr_30368_31408[(1)] = (33));

} else {
var statearr_30369_31409 = state_30324__$1;
(statearr_30369_31409[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (25))){
var inst_30269 = (state_30324[(9)]);
var inst_30268 = (state_30324[(20)]);
var inst_30271 = (inst_30269 < inst_30268);
var inst_30272 = inst_30271;
var state_30324__$1 = state_30324;
if(cljs.core.truth_(inst_30272)){
var statearr_30370_31410 = state_30324__$1;
(statearr_30370_31410[(1)] = (27));

} else {
var statearr_30371_31411 = state_30324__$1;
(statearr_30371_31411[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (34))){
var state_30324__$1 = state_30324;
var statearr_30372_31412 = state_30324__$1;
(statearr_30372_31412[(2)] = null);

(statearr_30372_31412[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (17))){
var state_30324__$1 = state_30324;
var statearr_30373_31413 = state_30324__$1;
(statearr_30373_31413[(2)] = null);

(statearr_30373_31413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (3))){
var inst_30322 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30324__$1,inst_30322);
} else {
if((state_val_30325 === (12))){
var inst_30253 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30374_31414 = state_30324__$1;
(statearr_30374_31414[(2)] = inst_30253);

(statearr_30374_31414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (2))){
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30324__$1,(4),ch);
} else {
if((state_val_30325 === (23))){
var state_30324__$1 = state_30324;
var statearr_30375_31415 = state_30324__$1;
(statearr_30375_31415[(2)] = null);

(statearr_30375_31415[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (35))){
var inst_30306 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30376_31416 = state_30324__$1;
(statearr_30376_31416[(2)] = inst_30306);

(statearr_30376_31416[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (19))){
var inst_30225 = (state_30324[(7)]);
var inst_30229 = cljs.core.chunk_first(inst_30225);
var inst_30230 = cljs.core.chunk_rest(inst_30225);
var inst_30231 = cljs.core.count(inst_30229);
var inst_30203 = inst_30230;
var inst_30204 = inst_30229;
var inst_30205 = inst_30231;
var inst_30206 = (0);
var state_30324__$1 = (function (){var statearr_30377 = state_30324;
(statearr_30377[(13)] = inst_30204);

(statearr_30377[(14)] = inst_30205);

(statearr_30377[(16)] = inst_30206);

(statearr_30377[(17)] = inst_30203);

return statearr_30377;
})();
var statearr_30378_31417 = state_30324__$1;
(statearr_30378_31417[(2)] = null);

(statearr_30378_31417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (11))){
var inst_30225 = (state_30324[(7)]);
var inst_30203 = (state_30324[(17)]);
var inst_30225__$1 = cljs.core.seq(inst_30203);
var state_30324__$1 = (function (){var statearr_30379 = state_30324;
(statearr_30379[(7)] = inst_30225__$1);

return statearr_30379;
})();
if(inst_30225__$1){
var statearr_30380_31419 = state_30324__$1;
(statearr_30380_31419[(1)] = (16));

} else {
var statearr_30381_31420 = state_30324__$1;
(statearr_30381_31420[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (9))){
var inst_30255 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30382_31421 = state_30324__$1;
(statearr_30382_31421[(2)] = inst_30255);

(statearr_30382_31421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (5))){
var inst_30201 = cljs.core.deref(cs);
var inst_30202 = cljs.core.seq(inst_30201);
var inst_30203 = inst_30202;
var inst_30204 = null;
var inst_30205 = (0);
var inst_30206 = (0);
var state_30324__$1 = (function (){var statearr_30383 = state_30324;
(statearr_30383[(13)] = inst_30204);

(statearr_30383[(14)] = inst_30205);

(statearr_30383[(16)] = inst_30206);

(statearr_30383[(17)] = inst_30203);

return statearr_30383;
})();
var statearr_30384_31422 = state_30324__$1;
(statearr_30384_31422[(2)] = null);

(statearr_30384_31422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (14))){
var state_30324__$1 = state_30324;
var statearr_30385_31423 = state_30324__$1;
(statearr_30385_31423[(2)] = null);

(statearr_30385_31423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (45))){
var inst_30314 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30386_31424 = state_30324__$1;
(statearr_30386_31424[(2)] = inst_30314);

(statearr_30386_31424[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (26))){
var inst_30258 = (state_30324[(27)]);
var inst_30310 = (state_30324[(2)]);
var inst_30311 = cljs.core.seq(inst_30258);
var state_30324__$1 = (function (){var statearr_30387 = state_30324;
(statearr_30387[(29)] = inst_30310);

return statearr_30387;
})();
if(inst_30311){
var statearr_30388_31425 = state_30324__$1;
(statearr_30388_31425[(1)] = (42));

} else {
var statearr_30389_31426 = state_30324__$1;
(statearr_30389_31426[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (16))){
var inst_30225 = (state_30324[(7)]);
var inst_30227 = cljs.core.chunked_seq_QMARK_(inst_30225);
var state_30324__$1 = state_30324;
if(inst_30227){
var statearr_30390_31427 = state_30324__$1;
(statearr_30390_31427[(1)] = (19));

} else {
var statearr_30391_31428 = state_30324__$1;
(statearr_30391_31428[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (38))){
var inst_30303 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30392_31429 = state_30324__$1;
(statearr_30392_31429[(2)] = inst_30303);

(statearr_30392_31429[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (30))){
var state_30324__$1 = state_30324;
var statearr_30393_31430 = state_30324__$1;
(statearr_30393_31430[(2)] = null);

(statearr_30393_31430[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (10))){
var inst_30204 = (state_30324[(13)]);
var inst_30206 = (state_30324[(16)]);
var inst_30214 = cljs.core._nth(inst_30204,inst_30206);
var inst_30215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30214,(0),null);
var inst_30216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30214,(1),null);
var state_30324__$1 = (function (){var statearr_30394 = state_30324;
(statearr_30394[(24)] = inst_30215);

return statearr_30394;
})();
if(cljs.core.truth_(inst_30216)){
var statearr_30395_31431 = state_30324__$1;
(statearr_30395_31431[(1)] = (13));

} else {
var statearr_30396_31432 = state_30324__$1;
(statearr_30396_31432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (18))){
var inst_30251 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30397_31433 = state_30324__$1;
(statearr_30397_31433[(2)] = inst_30251);

(statearr_30397_31433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (42))){
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30324__$1,(45),dchan);
} else {
if((state_val_30325 === (37))){
var inst_30293 = (state_30324[(22)]);
var inst_30194 = (state_30324[(11)]);
var inst_30284 = (state_30324[(23)]);
var inst_30293__$1 = cljs.core.first(inst_30284);
var inst_30294 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30293__$1,inst_30194,done);
var state_30324__$1 = (function (){var statearr_30398 = state_30324;
(statearr_30398[(22)] = inst_30293__$1);

return statearr_30398;
})();
if(cljs.core.truth_(inst_30294)){
var statearr_30399_31434 = state_30324__$1;
(statearr_30399_31434[(1)] = (39));

} else {
var statearr_30400_31436 = state_30324__$1;
(statearr_30400_31436[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (8))){
var inst_30205 = (state_30324[(14)]);
var inst_30206 = (state_30324[(16)]);
var inst_30208 = (inst_30206 < inst_30205);
var inst_30209 = inst_30208;
var state_30324__$1 = state_30324;
if(cljs.core.truth_(inst_30209)){
var statearr_30401_31438 = state_30324__$1;
(statearr_30401_31438[(1)] = (10));

} else {
var statearr_30402_31439 = state_30324__$1;
(statearr_30402_31439[(1)] = (11));

}

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
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29349__auto__ = null;
var cljs$core$async$mult_$_state_machine__29349__auto____0 = (function (){
var statearr_30403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30403[(0)] = cljs$core$async$mult_$_state_machine__29349__auto__);

(statearr_30403[(1)] = (1));

return statearr_30403;
});
var cljs$core$async$mult_$_state_machine__29349__auto____1 = (function (state_30324){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_30324);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30404){var ex__29352__auto__ = e30404;
var statearr_30405_31440 = state_30324;
(statearr_30405_31440[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_30324[(4)]))){
var statearr_30406_31441 = state_30324;
(statearr_30406_31441[(1)] = cljs.core.first((state_30324[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31442 = state_30324;
state_30324 = G__31442;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29349__auto__ = function(state_30324){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29349__auto____1.call(this,state_30324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29349__auto____0;
cljs$core$async$mult_$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29349__auto____1;
return cljs$core$async$mult_$_state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_30407 = f__29423__auto__();
(statearr_30407[(6)] = c__29422__auto___31379);

return statearr_30407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30409 = arguments.length;
switch (G__30409) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_31445 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_31445(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_31446 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_31446(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_31447 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_31447(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_31448 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_31448(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_31450 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_31450(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31451 = arguments.length;
var i__4865__auto___31452 = (0);
while(true){
if((i__4865__auto___31452 < len__4864__auto___31451)){
args__4870__auto__.push((arguments[i__4865__auto___31452]));

var G__31453 = (i__4865__auto___31452 + (1));
i__4865__auto___31452 = G__31453;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30414){
var map__30415 = p__30414;
var map__30415__$1 = cljs.core.__destructure_map(map__30415);
var opts = map__30415__$1;
var statearr_30416_31460 = state;
(statearr_30416_31460[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30417_31465 = state;
(statearr_30417_31465[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_30418_31468 = state;
(statearr_30418_31468[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30410){
var G__30411 = cljs.core.first(seq30410);
var seq30410__$1 = cljs.core.next(seq30410);
var G__30412 = cljs.core.first(seq30410__$1);
var seq30410__$2 = cljs.core.next(seq30410__$1);
var G__30413 = cljs.core.first(seq30410__$2);
var seq30410__$3 = cljs.core.next(seq30410__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30411,G__30412,G__30413,seq30410__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30419 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30420){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30420 = meta30420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30421,meta30420__$1){
var self__ = this;
var _30421__$1 = this;
return (new cljs.core.async.t_cljs$core$async30419(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30420__$1));
}));

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30421){
var self__ = this;
var _30421__$1 = this;
return self__.meta30420;
}));

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30420","meta30420",1269398590,null)], null);
}));

(cljs.core.async.t_cljs$core$async30419.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30419");

(cljs.core.async.t_cljs$core$async30419.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30419");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30419.
 */
cljs.core.async.__GT_t_cljs$core$async30419 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30419(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30420){
return (new cljs.core.async.t_cljs$core$async30419(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30420));
});

}

return (new cljs.core.async.t_cljs$core$async30419(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29422__auto___31477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_30489){
var state_val_30490 = (state_30489[(1)]);
if((state_val_30490 === (7))){
var inst_30449 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
if(cljs.core.truth_(inst_30449)){
var statearr_30491_31479 = state_30489__$1;
(statearr_30491_31479[(1)] = (8));

} else {
var statearr_30492_31480 = state_30489__$1;
(statearr_30492_31480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (20))){
var inst_30442 = (state_30489[(7)]);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30489__$1,(23),out,inst_30442);
} else {
if((state_val_30490 === (1))){
var inst_30425 = calc_state();
var inst_30426 = cljs.core.__destructure_map(inst_30425);
var inst_30427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30426,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30426,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30426,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30430 = inst_30425;
var state_30489__$1 = (function (){var statearr_30493 = state_30489;
(statearr_30493[(8)] = inst_30428);

(statearr_30493[(9)] = inst_30427);

(statearr_30493[(10)] = inst_30430);

(statearr_30493[(11)] = inst_30429);

return statearr_30493;
})();
var statearr_30494_31482 = state_30489__$1;
(statearr_30494_31482[(2)] = null);

(statearr_30494_31482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (24))){
var inst_30433 = (state_30489[(12)]);
var inst_30430 = inst_30433;
var state_30489__$1 = (function (){var statearr_30495 = state_30489;
(statearr_30495[(10)] = inst_30430);

return statearr_30495;
})();
var statearr_30496_31483 = state_30489__$1;
(statearr_30496_31483[(2)] = null);

(statearr_30496_31483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (4))){
var inst_30444 = (state_30489[(13)]);
var inst_30442 = (state_30489[(7)]);
var inst_30441 = (state_30489[(2)]);
var inst_30442__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30441,(0),null);
var inst_30443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30441,(1),null);
var inst_30444__$1 = (inst_30442__$1 == null);
var state_30489__$1 = (function (){var statearr_30497 = state_30489;
(statearr_30497[(13)] = inst_30444__$1);

(statearr_30497[(14)] = inst_30443);

(statearr_30497[(7)] = inst_30442__$1);

return statearr_30497;
})();
if(cljs.core.truth_(inst_30444__$1)){
var statearr_30498_31484 = state_30489__$1;
(statearr_30498_31484[(1)] = (5));

} else {
var statearr_30499_31485 = state_30489__$1;
(statearr_30499_31485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (15))){
var inst_30463 = (state_30489[(15)]);
var inst_30434 = (state_30489[(16)]);
var inst_30463__$1 = cljs.core.empty_QMARK_(inst_30434);
var state_30489__$1 = (function (){var statearr_30500 = state_30489;
(statearr_30500[(15)] = inst_30463__$1);

return statearr_30500;
})();
if(inst_30463__$1){
var statearr_30501_31486 = state_30489__$1;
(statearr_30501_31486[(1)] = (17));

} else {
var statearr_30502_31487 = state_30489__$1;
(statearr_30502_31487[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (21))){
var inst_30433 = (state_30489[(12)]);
var inst_30430 = inst_30433;
var state_30489__$1 = (function (){var statearr_30503 = state_30489;
(statearr_30503[(10)] = inst_30430);

return statearr_30503;
})();
var statearr_30504_31488 = state_30489__$1;
(statearr_30504_31488[(2)] = null);

(statearr_30504_31488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (13))){
var inst_30456 = (state_30489[(2)]);
var inst_30457 = calc_state();
var inst_30430 = inst_30457;
var state_30489__$1 = (function (){var statearr_30505 = state_30489;
(statearr_30505[(10)] = inst_30430);

(statearr_30505[(17)] = inst_30456);

return statearr_30505;
})();
var statearr_30506_31489 = state_30489__$1;
(statearr_30506_31489[(2)] = null);

(statearr_30506_31489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (22))){
var inst_30483 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30507_31490 = state_30489__$1;
(statearr_30507_31490[(2)] = inst_30483);

(statearr_30507_31490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (6))){
var inst_30443 = (state_30489[(14)]);
var inst_30447 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30443,change);
var state_30489__$1 = state_30489;
var statearr_30508_31493 = state_30489__$1;
(statearr_30508_31493[(2)] = inst_30447);

(statearr_30508_31493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (25))){
var state_30489__$1 = state_30489;
var statearr_30509_31494 = state_30489__$1;
(statearr_30509_31494[(2)] = null);

(statearr_30509_31494[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (17))){
var inst_30435 = (state_30489[(18)]);
var inst_30443 = (state_30489[(14)]);
var inst_30465 = (inst_30435.cljs$core$IFn$_invoke$arity$1 ? inst_30435.cljs$core$IFn$_invoke$arity$1(inst_30443) : inst_30435.call(null,inst_30443));
var inst_30466 = cljs.core.not(inst_30465);
var state_30489__$1 = state_30489;
var statearr_30510_31495 = state_30489__$1;
(statearr_30510_31495[(2)] = inst_30466);

(statearr_30510_31495[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (3))){
var inst_30487 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30489__$1,inst_30487);
} else {
if((state_val_30490 === (12))){
var state_30489__$1 = state_30489;
var statearr_30511_31496 = state_30489__$1;
(statearr_30511_31496[(2)] = null);

(statearr_30511_31496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (2))){
var inst_30430 = (state_30489[(10)]);
var inst_30433 = (state_30489[(12)]);
var inst_30433__$1 = cljs.core.__destructure_map(inst_30430);
var inst_30434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30433__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30433__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30433__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30489__$1 = (function (){var statearr_30512 = state_30489;
(statearr_30512[(18)] = inst_30435);

(statearr_30512[(16)] = inst_30434);

(statearr_30512[(12)] = inst_30433__$1);

return statearr_30512;
})();
return cljs.core.async.ioc_alts_BANG_(state_30489__$1,(4),inst_30436);
} else {
if((state_val_30490 === (23))){
var inst_30474 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
if(cljs.core.truth_(inst_30474)){
var statearr_30513_31497 = state_30489__$1;
(statearr_30513_31497[(1)] = (24));

} else {
var statearr_30514_31498 = state_30489__$1;
(statearr_30514_31498[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (19))){
var inst_30469 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30515_31499 = state_30489__$1;
(statearr_30515_31499[(2)] = inst_30469);

(statearr_30515_31499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (11))){
var inst_30443 = (state_30489[(14)]);
var inst_30453 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30443);
var state_30489__$1 = state_30489;
var statearr_30516_31500 = state_30489__$1;
(statearr_30516_31500[(2)] = inst_30453);

(statearr_30516_31500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (9))){
var inst_30460 = (state_30489[(19)]);
var inst_30434 = (state_30489[(16)]);
var inst_30443 = (state_30489[(14)]);
var inst_30460__$1 = (inst_30434.cljs$core$IFn$_invoke$arity$1 ? inst_30434.cljs$core$IFn$_invoke$arity$1(inst_30443) : inst_30434.call(null,inst_30443));
var state_30489__$1 = (function (){var statearr_30517 = state_30489;
(statearr_30517[(19)] = inst_30460__$1);

return statearr_30517;
})();
if(cljs.core.truth_(inst_30460__$1)){
var statearr_30518_31501 = state_30489__$1;
(statearr_30518_31501[(1)] = (14));

} else {
var statearr_30519_31502 = state_30489__$1;
(statearr_30519_31502[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (5))){
var inst_30444 = (state_30489[(13)]);
var state_30489__$1 = state_30489;
var statearr_30520_31503 = state_30489__$1;
(statearr_30520_31503[(2)] = inst_30444);

(statearr_30520_31503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (14))){
var inst_30460 = (state_30489[(19)]);
var state_30489__$1 = state_30489;
var statearr_30521_31504 = state_30489__$1;
(statearr_30521_31504[(2)] = inst_30460);

(statearr_30521_31504[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (26))){
var inst_30479 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30522_31509 = state_30489__$1;
(statearr_30522_31509[(2)] = inst_30479);

(statearr_30522_31509[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (16))){
var inst_30471 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
if(cljs.core.truth_(inst_30471)){
var statearr_30523_31512 = state_30489__$1;
(statearr_30523_31512[(1)] = (20));

} else {
var statearr_30524_31513 = state_30489__$1;
(statearr_30524_31513[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (10))){
var inst_30485 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30525_31514 = state_30489__$1;
(statearr_30525_31514[(2)] = inst_30485);

(statearr_30525_31514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (18))){
var inst_30463 = (state_30489[(15)]);
var state_30489__$1 = state_30489;
var statearr_30526_31515 = state_30489__$1;
(statearr_30526_31515[(2)] = inst_30463);

(statearr_30526_31515[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30490 === (8))){
var inst_30442 = (state_30489[(7)]);
var inst_30451 = (inst_30442 == null);
var state_30489__$1 = state_30489;
if(cljs.core.truth_(inst_30451)){
var statearr_30527_31516 = state_30489__$1;
(statearr_30527_31516[(1)] = (11));

} else {
var statearr_30528_31517 = state_30489__$1;
(statearr_30528_31517[(1)] = (12));

}

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
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29349__auto__ = null;
var cljs$core$async$mix_$_state_machine__29349__auto____0 = (function (){
var statearr_30529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30529[(0)] = cljs$core$async$mix_$_state_machine__29349__auto__);

(statearr_30529[(1)] = (1));

return statearr_30529;
});
var cljs$core$async$mix_$_state_machine__29349__auto____1 = (function (state_30489){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_30489);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30530){var ex__29352__auto__ = e30530;
var statearr_30531_31519 = state_30489;
(statearr_30531_31519[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_30489[(4)]))){
var statearr_30532_31520 = state_30489;
(statearr_30532_31520[(1)] = cljs.core.first((state_30489[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31521 = state_30489;
state_30489 = G__31521;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29349__auto__ = function(state_30489){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29349__auto____1.call(this,state_30489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29349__auto____0;
cljs$core$async$mix_$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29349__auto____1;
return cljs$core$async$mix_$_state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_30533 = f__29423__auto__();
(statearr_30533[(6)] = c__29422__auto___31477);

return statearr_30533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_31525 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_31525(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_31527 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_31527(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_31528 = (function() {
var G__31529 = null;
var G__31529__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__31529__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__31529 = function(p,v){
switch(arguments.length){
case 1:
return G__31529__1.call(this,p);
case 2:
return G__31529__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31529.cljs$core$IFn$_invoke$arity$1 = G__31529__1;
G__31529.cljs$core$IFn$_invoke$arity$2 = G__31529__2;
return G__31529;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30535 = arguments.length;
switch (G__30535) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_31528(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_31528(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30538 = arguments.length;
switch (G__30538) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30536_SHARP_){
if(cljs.core.truth_((p1__30536_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30536_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30536_SHARP_.call(null,topic)))){
return p1__30536_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30536_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30539 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30540){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30540 = meta30540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30541,meta30540__$1){
var self__ = this;
var _30541__$1 = this;
return (new cljs.core.async.t_cljs$core$async30539(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30540__$1));
}));

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30541){
var self__ = this;
var _30541__$1 = this;
return self__.meta30540;
}));

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30540","meta30540",1724121833,null)], null);
}));

(cljs.core.async.t_cljs$core$async30539.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30539");

(cljs.core.async.t_cljs$core$async30539.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30539");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30539.
 */
cljs.core.async.__GT_t_cljs$core$async30539 = (function cljs$core$async$__GT_t_cljs$core$async30539(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30540){
return (new cljs.core.async.t_cljs$core$async30539(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30540));
});

}

return (new cljs.core.async.t_cljs$core$async30539(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29422__auto___31532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_30613){
var state_val_30614 = (state_30613[(1)]);
if((state_val_30614 === (7))){
var inst_30609 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30615_31534 = state_30613__$1;
(statearr_30615_31534[(2)] = inst_30609);

(statearr_30615_31534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (20))){
var state_30613__$1 = state_30613;
var statearr_30616_31535 = state_30613__$1;
(statearr_30616_31535[(2)] = null);

(statearr_30616_31535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (1))){
var state_30613__$1 = state_30613;
var statearr_30617_31536 = state_30613__$1;
(statearr_30617_31536[(2)] = null);

(statearr_30617_31536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (24))){
var inst_30592 = (state_30613[(7)]);
var inst_30601 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30592);
var state_30613__$1 = state_30613;
var statearr_30618_31537 = state_30613__$1;
(statearr_30618_31537[(2)] = inst_30601);

(statearr_30618_31537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (4))){
var inst_30544 = (state_30613[(8)]);
var inst_30544__$1 = (state_30613[(2)]);
var inst_30545 = (inst_30544__$1 == null);
var state_30613__$1 = (function (){var statearr_30619 = state_30613;
(statearr_30619[(8)] = inst_30544__$1);

return statearr_30619;
})();
if(cljs.core.truth_(inst_30545)){
var statearr_30620_31538 = state_30613__$1;
(statearr_30620_31538[(1)] = (5));

} else {
var statearr_30621_31539 = state_30613__$1;
(statearr_30621_31539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (15))){
var inst_30586 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30622_31540 = state_30613__$1;
(statearr_30622_31540[(2)] = inst_30586);

(statearr_30622_31540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (21))){
var inst_30606 = (state_30613[(2)]);
var state_30613__$1 = (function (){var statearr_30623 = state_30613;
(statearr_30623[(9)] = inst_30606);

return statearr_30623;
})();
var statearr_30624_31541 = state_30613__$1;
(statearr_30624_31541[(2)] = null);

(statearr_30624_31541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (13))){
var inst_30568 = (state_30613[(10)]);
var inst_30570 = cljs.core.chunked_seq_QMARK_(inst_30568);
var state_30613__$1 = state_30613;
if(inst_30570){
var statearr_30625_31542 = state_30613__$1;
(statearr_30625_31542[(1)] = (16));

} else {
var statearr_30626_31543 = state_30613__$1;
(statearr_30626_31543[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (22))){
var inst_30598 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
if(cljs.core.truth_(inst_30598)){
var statearr_30627_31544 = state_30613__$1;
(statearr_30627_31544[(1)] = (23));

} else {
var statearr_30628_31545 = state_30613__$1;
(statearr_30628_31545[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (6))){
var inst_30544 = (state_30613[(8)]);
var inst_30592 = (state_30613[(7)]);
var inst_30594 = (state_30613[(11)]);
var inst_30592__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30544) : topic_fn.call(null,inst_30544));
var inst_30593 = cljs.core.deref(mults);
var inst_30594__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30593,inst_30592__$1);
var state_30613__$1 = (function (){var statearr_30629 = state_30613;
(statearr_30629[(7)] = inst_30592__$1);

(statearr_30629[(11)] = inst_30594__$1);

return statearr_30629;
})();
if(cljs.core.truth_(inst_30594__$1)){
var statearr_30630_31546 = state_30613__$1;
(statearr_30630_31546[(1)] = (19));

} else {
var statearr_30631_31547 = state_30613__$1;
(statearr_30631_31547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (25))){
var inst_30603 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30632_31548 = state_30613__$1;
(statearr_30632_31548[(2)] = inst_30603);

(statearr_30632_31548[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (17))){
var inst_30568 = (state_30613[(10)]);
var inst_30577 = cljs.core.first(inst_30568);
var inst_30578 = cljs.core.async.muxch_STAR_(inst_30577);
var inst_30579 = cljs.core.async.close_BANG_(inst_30578);
var inst_30580 = cljs.core.next(inst_30568);
var inst_30554 = inst_30580;
var inst_30555 = null;
var inst_30556 = (0);
var inst_30557 = (0);
var state_30613__$1 = (function (){var statearr_30633 = state_30613;
(statearr_30633[(12)] = inst_30555);

(statearr_30633[(13)] = inst_30557);

(statearr_30633[(14)] = inst_30554);

(statearr_30633[(15)] = inst_30579);

(statearr_30633[(16)] = inst_30556);

return statearr_30633;
})();
var statearr_30634_31549 = state_30613__$1;
(statearr_30634_31549[(2)] = null);

(statearr_30634_31549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (3))){
var inst_30611 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30613__$1,inst_30611);
} else {
if((state_val_30614 === (12))){
var inst_30588 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30635_31550 = state_30613__$1;
(statearr_30635_31550[(2)] = inst_30588);

(statearr_30635_31550[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (2))){
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30613__$1,(4),ch);
} else {
if((state_val_30614 === (23))){
var state_30613__$1 = state_30613;
var statearr_30636_31551 = state_30613__$1;
(statearr_30636_31551[(2)] = null);

(statearr_30636_31551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (19))){
var inst_30544 = (state_30613[(8)]);
var inst_30594 = (state_30613[(11)]);
var inst_30596 = cljs.core.async.muxch_STAR_(inst_30594);
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30613__$1,(22),inst_30596,inst_30544);
} else {
if((state_val_30614 === (11))){
var inst_30554 = (state_30613[(14)]);
var inst_30568 = (state_30613[(10)]);
var inst_30568__$1 = cljs.core.seq(inst_30554);
var state_30613__$1 = (function (){var statearr_30637 = state_30613;
(statearr_30637[(10)] = inst_30568__$1);

return statearr_30637;
})();
if(inst_30568__$1){
var statearr_30638_31552 = state_30613__$1;
(statearr_30638_31552[(1)] = (13));

} else {
var statearr_30639_31553 = state_30613__$1;
(statearr_30639_31553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (9))){
var inst_30590 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30640_31554 = state_30613__$1;
(statearr_30640_31554[(2)] = inst_30590);

(statearr_30640_31554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (5))){
var inst_30551 = cljs.core.deref(mults);
var inst_30552 = cljs.core.vals(inst_30551);
var inst_30553 = cljs.core.seq(inst_30552);
var inst_30554 = inst_30553;
var inst_30555 = null;
var inst_30556 = (0);
var inst_30557 = (0);
var state_30613__$1 = (function (){var statearr_30641 = state_30613;
(statearr_30641[(12)] = inst_30555);

(statearr_30641[(13)] = inst_30557);

(statearr_30641[(14)] = inst_30554);

(statearr_30641[(16)] = inst_30556);

return statearr_30641;
})();
var statearr_30642_31555 = state_30613__$1;
(statearr_30642_31555[(2)] = null);

(statearr_30642_31555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (14))){
var state_30613__$1 = state_30613;
var statearr_30646_31556 = state_30613__$1;
(statearr_30646_31556[(2)] = null);

(statearr_30646_31556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (16))){
var inst_30568 = (state_30613[(10)]);
var inst_30572 = cljs.core.chunk_first(inst_30568);
var inst_30573 = cljs.core.chunk_rest(inst_30568);
var inst_30574 = cljs.core.count(inst_30572);
var inst_30554 = inst_30573;
var inst_30555 = inst_30572;
var inst_30556 = inst_30574;
var inst_30557 = (0);
var state_30613__$1 = (function (){var statearr_30647 = state_30613;
(statearr_30647[(12)] = inst_30555);

(statearr_30647[(13)] = inst_30557);

(statearr_30647[(14)] = inst_30554);

(statearr_30647[(16)] = inst_30556);

return statearr_30647;
})();
var statearr_30648_31559 = state_30613__$1;
(statearr_30648_31559[(2)] = null);

(statearr_30648_31559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (10))){
var inst_30555 = (state_30613[(12)]);
var inst_30557 = (state_30613[(13)]);
var inst_30554 = (state_30613[(14)]);
var inst_30556 = (state_30613[(16)]);
var inst_30562 = cljs.core._nth(inst_30555,inst_30557);
var inst_30563 = cljs.core.async.muxch_STAR_(inst_30562);
var inst_30564 = cljs.core.async.close_BANG_(inst_30563);
var inst_30565 = (inst_30557 + (1));
var tmp30643 = inst_30555;
var tmp30644 = inst_30554;
var tmp30645 = inst_30556;
var inst_30554__$1 = tmp30644;
var inst_30555__$1 = tmp30643;
var inst_30556__$1 = tmp30645;
var inst_30557__$1 = inst_30565;
var state_30613__$1 = (function (){var statearr_30649 = state_30613;
(statearr_30649[(12)] = inst_30555__$1);

(statearr_30649[(13)] = inst_30557__$1);

(statearr_30649[(17)] = inst_30564);

(statearr_30649[(14)] = inst_30554__$1);

(statearr_30649[(16)] = inst_30556__$1);

return statearr_30649;
})();
var statearr_30650_31560 = state_30613__$1;
(statearr_30650_31560[(2)] = null);

(statearr_30650_31560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (18))){
var inst_30583 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30651_31561 = state_30613__$1;
(statearr_30651_31561[(2)] = inst_30583);

(statearr_30651_31561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (8))){
var inst_30557 = (state_30613[(13)]);
var inst_30556 = (state_30613[(16)]);
var inst_30559 = (inst_30557 < inst_30556);
var inst_30560 = inst_30559;
var state_30613__$1 = state_30613;
if(cljs.core.truth_(inst_30560)){
var statearr_30652_31562 = state_30613__$1;
(statearr_30652_31562[(1)] = (10));

} else {
var statearr_30653_31563 = state_30613__$1;
(statearr_30653_31563[(1)] = (11));

}

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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29349__auto__ = null;
var cljs$core$async$state_machine__29349__auto____0 = (function (){
var statearr_30654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30654[(0)] = cljs$core$async$state_machine__29349__auto__);

(statearr_30654[(1)] = (1));

return statearr_30654;
});
var cljs$core$async$state_machine__29349__auto____1 = (function (state_30613){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_30613);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30655){var ex__29352__auto__ = e30655;
var statearr_30656_31564 = state_30613;
(statearr_30656_31564[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_30613[(4)]))){
var statearr_30657_31565 = state_30613;
(statearr_30657_31565[(1)] = cljs.core.first((state_30613[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31566 = state_30613;
state_30613 = G__31566;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$state_machine__29349__auto__ = function(state_30613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29349__auto____1.call(this,state_30613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29349__auto____0;
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29349__auto____1;
return cljs$core$async$state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_30658 = f__29423__auto__();
(statearr_30658[(6)] = c__29422__auto___31532);

return statearr_30658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30660 = arguments.length;
switch (G__30660) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30662 = arguments.length;
switch (G__30662) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30664 = arguments.length;
switch (G__30664) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29422__auto___31572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_30707){
var state_val_30708 = (state_30707[(1)]);
if((state_val_30708 === (7))){
var state_30707__$1 = state_30707;
var statearr_30709_31574 = state_30707__$1;
(statearr_30709_31574[(2)] = null);

(statearr_30709_31574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (1))){
var state_30707__$1 = state_30707;
var statearr_30710_31575 = state_30707__$1;
(statearr_30710_31575[(2)] = null);

(statearr_30710_31575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (4))){
var inst_30668 = (state_30707[(7)]);
var inst_30667 = (state_30707[(8)]);
var inst_30670 = (inst_30668 < inst_30667);
var state_30707__$1 = state_30707;
if(cljs.core.truth_(inst_30670)){
var statearr_30711_31578 = state_30707__$1;
(statearr_30711_31578[(1)] = (6));

} else {
var statearr_30712_31580 = state_30707__$1;
(statearr_30712_31580[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (15))){
var inst_30693 = (state_30707[(9)]);
var inst_30698 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30693);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30707__$1,(17),out,inst_30698);
} else {
if((state_val_30708 === (13))){
var inst_30693 = (state_30707[(9)]);
var inst_30693__$1 = (state_30707[(2)]);
var inst_30694 = cljs.core.some(cljs.core.nil_QMARK_,inst_30693__$1);
var state_30707__$1 = (function (){var statearr_30713 = state_30707;
(statearr_30713[(9)] = inst_30693__$1);

return statearr_30713;
})();
if(cljs.core.truth_(inst_30694)){
var statearr_30714_31582 = state_30707__$1;
(statearr_30714_31582[(1)] = (14));

} else {
var statearr_30715_31583 = state_30707__$1;
(statearr_30715_31583[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (6))){
var state_30707__$1 = state_30707;
var statearr_30716_31584 = state_30707__$1;
(statearr_30716_31584[(2)] = null);

(statearr_30716_31584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (17))){
var inst_30700 = (state_30707[(2)]);
var state_30707__$1 = (function (){var statearr_30718 = state_30707;
(statearr_30718[(10)] = inst_30700);

return statearr_30718;
})();
var statearr_30719_31585 = state_30707__$1;
(statearr_30719_31585[(2)] = null);

(statearr_30719_31585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (3))){
var inst_30705 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30707__$1,inst_30705);
} else {
if((state_val_30708 === (12))){
var _ = (function (){var statearr_30720 = state_30707;
(statearr_30720[(4)] = cljs.core.rest((state_30707[(4)])));

return statearr_30720;
})();
var state_30707__$1 = state_30707;
var ex30717 = (state_30707__$1[(2)]);
var statearr_30721_31589 = state_30707__$1;
(statearr_30721_31589[(5)] = ex30717);


if((ex30717 instanceof Object)){
var statearr_30722_31590 = state_30707__$1;
(statearr_30722_31590[(1)] = (11));

(statearr_30722_31590[(5)] = null);

} else {
throw ex30717;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (2))){
var inst_30666 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30667 = cnt;
var inst_30668 = (0);
var state_30707__$1 = (function (){var statearr_30723 = state_30707;
(statearr_30723[(7)] = inst_30668);

(statearr_30723[(11)] = inst_30666);

(statearr_30723[(8)] = inst_30667);

return statearr_30723;
})();
var statearr_30724_31591 = state_30707__$1;
(statearr_30724_31591[(2)] = null);

(statearr_30724_31591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (11))){
var inst_30672 = (state_30707[(2)]);
var inst_30673 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30707__$1 = (function (){var statearr_30725 = state_30707;
(statearr_30725[(12)] = inst_30672);

return statearr_30725;
})();
var statearr_30726_31593 = state_30707__$1;
(statearr_30726_31593[(2)] = inst_30673);

(statearr_30726_31593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (9))){
var inst_30668 = (state_30707[(7)]);
var _ = (function (){var statearr_30727 = state_30707;
(statearr_30727[(4)] = cljs.core.cons((12),(state_30707[(4)])));

return statearr_30727;
})();
var inst_30679 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30668) : chs__$1.call(null,inst_30668));
var inst_30680 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30668) : done.call(null,inst_30668));
var inst_30681 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30679,inst_30680);
var ___$1 = (function (){var statearr_30728 = state_30707;
(statearr_30728[(4)] = cljs.core.rest((state_30707[(4)])));

return statearr_30728;
})();
var state_30707__$1 = state_30707;
var statearr_30729_31594 = state_30707__$1;
(statearr_30729_31594[(2)] = inst_30681);

(statearr_30729_31594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (5))){
var inst_30691 = (state_30707[(2)]);
var state_30707__$1 = (function (){var statearr_30730 = state_30707;
(statearr_30730[(13)] = inst_30691);

return statearr_30730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30707__$1,(13),dchan);
} else {
if((state_val_30708 === (14))){
var inst_30696 = cljs.core.async.close_BANG_(out);
var state_30707__$1 = state_30707;
var statearr_30731_31596 = state_30707__$1;
(statearr_30731_31596[(2)] = inst_30696);

(statearr_30731_31596[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (16))){
var inst_30703 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30732_31597 = state_30707__$1;
(statearr_30732_31597[(2)] = inst_30703);

(statearr_30732_31597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (10))){
var inst_30668 = (state_30707[(7)]);
var inst_30684 = (state_30707[(2)]);
var inst_30685 = (inst_30668 + (1));
var inst_30668__$1 = inst_30685;
var state_30707__$1 = (function (){var statearr_30733 = state_30707;
(statearr_30733[(14)] = inst_30684);

(statearr_30733[(7)] = inst_30668__$1);

return statearr_30733;
})();
var statearr_30734_31598 = state_30707__$1;
(statearr_30734_31598[(2)] = null);

(statearr_30734_31598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (8))){
var inst_30689 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30735_31599 = state_30707__$1;
(statearr_30735_31599[(2)] = inst_30689);

(statearr_30735_31599[(1)] = (5));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29349__auto__ = null;
var cljs$core$async$state_machine__29349__auto____0 = (function (){
var statearr_30736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30736[(0)] = cljs$core$async$state_machine__29349__auto__);

(statearr_30736[(1)] = (1));

return statearr_30736;
});
var cljs$core$async$state_machine__29349__auto____1 = (function (state_30707){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_30707);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30737){var ex__29352__auto__ = e30737;
var statearr_30738_31603 = state_30707;
(statearr_30738_31603[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_30707[(4)]))){
var statearr_30739_31604 = state_30707;
(statearr_30739_31604[(1)] = cljs.core.first((state_30707[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31605 = state_30707;
state_30707 = G__31605;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$state_machine__29349__auto__ = function(state_30707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29349__auto____1.call(this,state_30707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29349__auto____0;
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29349__auto____1;
return cljs$core$async$state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_30740 = f__29423__auto__();
(statearr_30740[(6)] = c__29422__auto___31572);

return statearr_30740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30743 = arguments.length;
switch (G__30743) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29422__auto___31607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_30775){
var state_val_30776 = (state_30775[(1)]);
if((state_val_30776 === (7))){
var inst_30754 = (state_30775[(7)]);
var inst_30755 = (state_30775[(8)]);
var inst_30754__$1 = (state_30775[(2)]);
var inst_30755__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30754__$1,(0),null);
var inst_30756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30754__$1,(1),null);
var inst_30757 = (inst_30755__$1 == null);
var state_30775__$1 = (function (){var statearr_30777 = state_30775;
(statearr_30777[(7)] = inst_30754__$1);

(statearr_30777[(8)] = inst_30755__$1);

(statearr_30777[(9)] = inst_30756);

return statearr_30777;
})();
if(cljs.core.truth_(inst_30757)){
var statearr_30778_31608 = state_30775__$1;
(statearr_30778_31608[(1)] = (8));

} else {
var statearr_30779_31609 = state_30775__$1;
(statearr_30779_31609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (1))){
var inst_30744 = cljs.core.vec(chs);
var inst_30745 = inst_30744;
var state_30775__$1 = (function (){var statearr_30780 = state_30775;
(statearr_30780[(10)] = inst_30745);

return statearr_30780;
})();
var statearr_30781_31610 = state_30775__$1;
(statearr_30781_31610[(2)] = null);

(statearr_30781_31610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (4))){
var inst_30745 = (state_30775[(10)]);
var state_30775__$1 = state_30775;
return cljs.core.async.ioc_alts_BANG_(state_30775__$1,(7),inst_30745);
} else {
if((state_val_30776 === (6))){
var inst_30771 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
var statearr_30782_31611 = state_30775__$1;
(statearr_30782_31611[(2)] = inst_30771);

(statearr_30782_31611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (3))){
var inst_30773 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30775__$1,inst_30773);
} else {
if((state_val_30776 === (2))){
var inst_30745 = (state_30775[(10)]);
var inst_30747 = cljs.core.count(inst_30745);
var inst_30748 = (inst_30747 > (0));
var state_30775__$1 = state_30775;
if(cljs.core.truth_(inst_30748)){
var statearr_30784_31612 = state_30775__$1;
(statearr_30784_31612[(1)] = (4));

} else {
var statearr_30785_31613 = state_30775__$1;
(statearr_30785_31613[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (11))){
var inst_30745 = (state_30775[(10)]);
var inst_30764 = (state_30775[(2)]);
var tmp30783 = inst_30745;
var inst_30745__$1 = tmp30783;
var state_30775__$1 = (function (){var statearr_30786 = state_30775;
(statearr_30786[(10)] = inst_30745__$1);

(statearr_30786[(11)] = inst_30764);

return statearr_30786;
})();
var statearr_30787_31614 = state_30775__$1;
(statearr_30787_31614[(2)] = null);

(statearr_30787_31614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (9))){
var inst_30755 = (state_30775[(8)]);
var state_30775__$1 = state_30775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30775__$1,(11),out,inst_30755);
} else {
if((state_val_30776 === (5))){
var inst_30769 = cljs.core.async.close_BANG_(out);
var state_30775__$1 = state_30775;
var statearr_30788_31615 = state_30775__$1;
(statearr_30788_31615[(2)] = inst_30769);

(statearr_30788_31615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (10))){
var inst_30767 = (state_30775[(2)]);
var state_30775__$1 = state_30775;
var statearr_30789_31616 = state_30775__$1;
(statearr_30789_31616[(2)] = inst_30767);

(statearr_30789_31616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30776 === (8))){
var inst_30745 = (state_30775[(10)]);
var inst_30754 = (state_30775[(7)]);
var inst_30755 = (state_30775[(8)]);
var inst_30756 = (state_30775[(9)]);
var inst_30759 = (function (){var cs = inst_30745;
var vec__30750 = inst_30754;
var v = inst_30755;
var c = inst_30756;
return (function (p1__30741_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30741_SHARP_);
});
})();
var inst_30760 = cljs.core.filterv(inst_30759,inst_30745);
var inst_30745__$1 = inst_30760;
var state_30775__$1 = (function (){var statearr_30790 = state_30775;
(statearr_30790[(10)] = inst_30745__$1);

return statearr_30790;
})();
var statearr_30791_31618 = state_30775__$1;
(statearr_30791_31618[(2)] = null);

(statearr_30791_31618[(1)] = (2));


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
var cljs$core$async$state_machine__29349__auto__ = null;
var cljs$core$async$state_machine__29349__auto____0 = (function (){
var statearr_30792 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30792[(0)] = cljs$core$async$state_machine__29349__auto__);

(statearr_30792[(1)] = (1));

return statearr_30792;
});
var cljs$core$async$state_machine__29349__auto____1 = (function (state_30775){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_30775);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30793){var ex__29352__auto__ = e30793;
var statearr_30794_31620 = state_30775;
(statearr_30794_31620[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_30775[(4)]))){
var statearr_30795_31621 = state_30775;
(statearr_30795_31621[(1)] = cljs.core.first((state_30775[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31622 = state_30775;
state_30775 = G__31622;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$state_machine__29349__auto__ = function(state_30775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29349__auto____1.call(this,state_30775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29349__auto____0;
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29349__auto____1;
return cljs$core$async$state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_30796 = f__29423__auto__();
(statearr_30796[(6)] = c__29422__auto___31607);

return statearr_30796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30798 = arguments.length;
switch (G__30798) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29422__auto___31627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_30822){
var state_val_30823 = (state_30822[(1)]);
if((state_val_30823 === (7))){
var inst_30804 = (state_30822[(7)]);
var inst_30804__$1 = (state_30822[(2)]);
var inst_30805 = (inst_30804__$1 == null);
var inst_30806 = cljs.core.not(inst_30805);
var state_30822__$1 = (function (){var statearr_30824 = state_30822;
(statearr_30824[(7)] = inst_30804__$1);

return statearr_30824;
})();
if(inst_30806){
var statearr_30825_31628 = state_30822__$1;
(statearr_30825_31628[(1)] = (8));

} else {
var statearr_30826_31629 = state_30822__$1;
(statearr_30826_31629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (1))){
var inst_30799 = (0);
var state_30822__$1 = (function (){var statearr_30827 = state_30822;
(statearr_30827[(8)] = inst_30799);

return statearr_30827;
})();
var statearr_30828_31630 = state_30822__$1;
(statearr_30828_31630[(2)] = null);

(statearr_30828_31630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (4))){
var state_30822__$1 = state_30822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30822__$1,(7),ch);
} else {
if((state_val_30823 === (6))){
var inst_30817 = (state_30822[(2)]);
var state_30822__$1 = state_30822;
var statearr_30829_31631 = state_30822__$1;
(statearr_30829_31631[(2)] = inst_30817);

(statearr_30829_31631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (3))){
var inst_30819 = (state_30822[(2)]);
var inst_30820 = cljs.core.async.close_BANG_(out);
var state_30822__$1 = (function (){var statearr_30830 = state_30822;
(statearr_30830[(9)] = inst_30819);

return statearr_30830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30822__$1,inst_30820);
} else {
if((state_val_30823 === (2))){
var inst_30799 = (state_30822[(8)]);
var inst_30801 = (inst_30799 < n);
var state_30822__$1 = state_30822;
if(cljs.core.truth_(inst_30801)){
var statearr_30831_31632 = state_30822__$1;
(statearr_30831_31632[(1)] = (4));

} else {
var statearr_30832_31633 = state_30822__$1;
(statearr_30832_31633[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (11))){
var inst_30799 = (state_30822[(8)]);
var inst_30809 = (state_30822[(2)]);
var inst_30810 = (inst_30799 + (1));
var inst_30799__$1 = inst_30810;
var state_30822__$1 = (function (){var statearr_30833 = state_30822;
(statearr_30833[(8)] = inst_30799__$1);

(statearr_30833[(10)] = inst_30809);

return statearr_30833;
})();
var statearr_30834_31634 = state_30822__$1;
(statearr_30834_31634[(2)] = null);

(statearr_30834_31634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (9))){
var state_30822__$1 = state_30822;
var statearr_30835_31635 = state_30822__$1;
(statearr_30835_31635[(2)] = null);

(statearr_30835_31635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (5))){
var state_30822__$1 = state_30822;
var statearr_30836_31636 = state_30822__$1;
(statearr_30836_31636[(2)] = null);

(statearr_30836_31636[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (10))){
var inst_30814 = (state_30822[(2)]);
var state_30822__$1 = state_30822;
var statearr_30837_31637 = state_30822__$1;
(statearr_30837_31637[(2)] = inst_30814);

(statearr_30837_31637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30823 === (8))){
var inst_30804 = (state_30822[(7)]);
var state_30822__$1 = state_30822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30822__$1,(11),out,inst_30804);
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
var cljs$core$async$state_machine__29349__auto__ = null;
var cljs$core$async$state_machine__29349__auto____0 = (function (){
var statearr_30838 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30838[(0)] = cljs$core$async$state_machine__29349__auto__);

(statearr_30838[(1)] = (1));

return statearr_30838;
});
var cljs$core$async$state_machine__29349__auto____1 = (function (state_30822){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_30822);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30839){var ex__29352__auto__ = e30839;
var statearr_30840_31638 = state_30822;
(statearr_30840_31638[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_30822[(4)]))){
var statearr_30841_31639 = state_30822;
(statearr_30841_31639[(1)] = cljs.core.first((state_30822[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31640 = state_30822;
state_30822 = G__31640;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$state_machine__29349__auto__ = function(state_30822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29349__auto____1.call(this,state_30822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29349__auto____0;
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29349__auto____1;
return cljs$core$async$state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_30842 = f__29423__auto__();
(statearr_30842[(6)] = c__29422__auto___31627);

return statearr_30842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30844 = (function (f,ch,meta30845){
this.f = f;
this.ch = ch;
this.meta30845 = meta30845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30846,meta30845__$1){
var self__ = this;
var _30846__$1 = this;
return (new cljs.core.async.t_cljs$core$async30844(self__.f,self__.ch,meta30845__$1));
}));

(cljs.core.async.t_cljs$core$async30844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30846){
var self__ = this;
var _30846__$1 = this;
return self__.meta30845;
}));

(cljs.core.async.t_cljs$core$async30844.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30844.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30844.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30847 = (function (f,ch,meta30845,_,fn1,meta30848){
this.f = f;
this.ch = ch;
this.meta30845 = meta30845;
this._ = _;
this.fn1 = fn1;
this.meta30848 = meta30848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30849,meta30848__$1){
var self__ = this;
var _30849__$1 = this;
return (new cljs.core.async.t_cljs$core$async30847(self__.f,self__.ch,self__.meta30845,self__._,self__.fn1,meta30848__$1));
}));

(cljs.core.async.t_cljs$core$async30847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30849){
var self__ = this;
var _30849__$1 = this;
return self__.meta30848;
}));

(cljs.core.async.t_cljs$core$async30847.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30843_SHARP_){
var G__30850 = (((p1__30843_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30843_SHARP_) : self__.f.call(null,p1__30843_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30850) : f1.call(null,G__30850));
});
}));

(cljs.core.async.t_cljs$core$async30847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30845","meta30845",1319645086,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30844","cljs.core.async/t_cljs$core$async30844",-1630737582,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30848","meta30848",-1657681877,null)], null);
}));

(cljs.core.async.t_cljs$core$async30847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30847");

(cljs.core.async.t_cljs$core$async30847.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30847.
 */
cljs.core.async.__GT_t_cljs$core$async30847 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30847(f__$1,ch__$1,meta30845__$1,___$2,fn1__$1,meta30848){
return (new cljs.core.async.t_cljs$core$async30847(f__$1,ch__$1,meta30845__$1,___$2,fn1__$1,meta30848));
});

}

return (new cljs.core.async.t_cljs$core$async30847(self__.f,self__.ch,self__.meta30845,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30851 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30851) : self__.f.call(null,G__30851));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30844.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30845","meta30845",1319645086,null)], null);
}));

(cljs.core.async.t_cljs$core$async30844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30844");

(cljs.core.async.t_cljs$core$async30844.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30844.
 */
cljs.core.async.__GT_t_cljs$core$async30844 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30844(f__$1,ch__$1,meta30845){
return (new cljs.core.async.t_cljs$core$async30844(f__$1,ch__$1,meta30845));
});

}

return (new cljs.core.async.t_cljs$core$async30844(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30852 = (function (f,ch,meta30853){
this.f = f;
this.ch = ch;
this.meta30853 = meta30853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30854,meta30853__$1){
var self__ = this;
var _30854__$1 = this;
return (new cljs.core.async.t_cljs$core$async30852(self__.f,self__.ch,meta30853__$1));
}));

(cljs.core.async.t_cljs$core$async30852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30854){
var self__ = this;
var _30854__$1 = this;
return self__.meta30853;
}));

(cljs.core.async.t_cljs$core$async30852.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30852.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30852.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async30852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30853","meta30853",882196697,null)], null);
}));

(cljs.core.async.t_cljs$core$async30852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30852");

(cljs.core.async.t_cljs$core$async30852.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30852.
 */
cljs.core.async.__GT_t_cljs$core$async30852 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30852(f__$1,ch__$1,meta30853){
return (new cljs.core.async.t_cljs$core$async30852(f__$1,ch__$1,meta30853));
});

}

return (new cljs.core.async.t_cljs$core$async30852(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30855 = (function (p,ch,meta30856){
this.p = p;
this.ch = ch;
this.meta30856 = meta30856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30857,meta30856__$1){
var self__ = this;
var _30857__$1 = this;
return (new cljs.core.async.t_cljs$core$async30855(self__.p,self__.ch,meta30856__$1));
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30857){
var self__ = this;
var _30857__$1 = this;
return self__.meta30856;
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30855.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30856","meta30856",1737564773,null)], null);
}));

(cljs.core.async.t_cljs$core$async30855.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30855");

(cljs.core.async.t_cljs$core$async30855.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30855");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30855.
 */
cljs.core.async.__GT_t_cljs$core$async30855 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30855(p__$1,ch__$1,meta30856){
return (new cljs.core.async.t_cljs$core$async30855(p__$1,ch__$1,meta30856));
});

}

return (new cljs.core.async.t_cljs$core$async30855(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30859 = arguments.length;
switch (G__30859) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29422__auto___31649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_30880){
var state_val_30881 = (state_30880[(1)]);
if((state_val_30881 === (7))){
var inst_30876 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30882_31651 = state_30880__$1;
(statearr_30882_31651[(2)] = inst_30876);

(statearr_30882_31651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (1))){
var state_30880__$1 = state_30880;
var statearr_30883_31652 = state_30880__$1;
(statearr_30883_31652[(2)] = null);

(statearr_30883_31652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (4))){
var inst_30862 = (state_30880[(7)]);
var inst_30862__$1 = (state_30880[(2)]);
var inst_30863 = (inst_30862__$1 == null);
var state_30880__$1 = (function (){var statearr_30884 = state_30880;
(statearr_30884[(7)] = inst_30862__$1);

return statearr_30884;
})();
if(cljs.core.truth_(inst_30863)){
var statearr_30885_31653 = state_30880__$1;
(statearr_30885_31653[(1)] = (5));

} else {
var statearr_30886_31654 = state_30880__$1;
(statearr_30886_31654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (6))){
var inst_30862 = (state_30880[(7)]);
var inst_30867 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30862) : p.call(null,inst_30862));
var state_30880__$1 = state_30880;
if(cljs.core.truth_(inst_30867)){
var statearr_30887_31655 = state_30880__$1;
(statearr_30887_31655[(1)] = (8));

} else {
var statearr_30888_31656 = state_30880__$1;
(statearr_30888_31656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (3))){
var inst_30878 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30880__$1,inst_30878);
} else {
if((state_val_30881 === (2))){
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30880__$1,(4),ch);
} else {
if((state_val_30881 === (11))){
var inst_30870 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30889_31659 = state_30880__$1;
(statearr_30889_31659[(2)] = inst_30870);

(statearr_30889_31659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (9))){
var state_30880__$1 = state_30880;
var statearr_30890_31660 = state_30880__$1;
(statearr_30890_31660[(2)] = null);

(statearr_30890_31660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (5))){
var inst_30865 = cljs.core.async.close_BANG_(out);
var state_30880__$1 = state_30880;
var statearr_30891_31661 = state_30880__$1;
(statearr_30891_31661[(2)] = inst_30865);

(statearr_30891_31661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (10))){
var inst_30873 = (state_30880[(2)]);
var state_30880__$1 = (function (){var statearr_30892 = state_30880;
(statearr_30892[(8)] = inst_30873);

return statearr_30892;
})();
var statearr_30893_31662 = state_30880__$1;
(statearr_30893_31662[(2)] = null);

(statearr_30893_31662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (8))){
var inst_30862 = (state_30880[(7)]);
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30880__$1,(11),out,inst_30862);
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
var cljs$core$async$state_machine__29349__auto__ = null;
var cljs$core$async$state_machine__29349__auto____0 = (function (){
var statearr_30894 = [null,null,null,null,null,null,null,null,null];
(statearr_30894[(0)] = cljs$core$async$state_machine__29349__auto__);

(statearr_30894[(1)] = (1));

return statearr_30894;
});
var cljs$core$async$state_machine__29349__auto____1 = (function (state_30880){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_30880);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30895){var ex__29352__auto__ = e30895;
var statearr_30896_31663 = state_30880;
(statearr_30896_31663[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_30880[(4)]))){
var statearr_30897_31664 = state_30880;
(statearr_30897_31664[(1)] = cljs.core.first((state_30880[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31665 = state_30880;
state_30880 = G__31665;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$state_machine__29349__auto__ = function(state_30880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29349__auto____1.call(this,state_30880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29349__auto____0;
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29349__auto____1;
return cljs$core$async$state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_30898 = f__29423__auto__();
(statearr_30898[(6)] = c__29422__auto___31649);

return statearr_30898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30900 = arguments.length;
switch (G__30900) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29422__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_30962){
var state_val_30963 = (state_30962[(1)]);
if((state_val_30963 === (7))){
var inst_30958 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
var statearr_30964_31671 = state_30962__$1;
(statearr_30964_31671[(2)] = inst_30958);

(statearr_30964_31671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (20))){
var inst_30928 = (state_30962[(7)]);
var inst_30939 = (state_30962[(2)]);
var inst_30940 = cljs.core.next(inst_30928);
var inst_30914 = inst_30940;
var inst_30915 = null;
var inst_30916 = (0);
var inst_30917 = (0);
var state_30962__$1 = (function (){var statearr_30965 = state_30962;
(statearr_30965[(8)] = inst_30915);

(statearr_30965[(9)] = inst_30914);

(statearr_30965[(10)] = inst_30939);

(statearr_30965[(11)] = inst_30917);

(statearr_30965[(12)] = inst_30916);

return statearr_30965;
})();
var statearr_30966_31673 = state_30962__$1;
(statearr_30966_31673[(2)] = null);

(statearr_30966_31673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (1))){
var state_30962__$1 = state_30962;
var statearr_30967_31674 = state_30962__$1;
(statearr_30967_31674[(2)] = null);

(statearr_30967_31674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (4))){
var inst_30903 = (state_30962[(13)]);
var inst_30903__$1 = (state_30962[(2)]);
var inst_30904 = (inst_30903__$1 == null);
var state_30962__$1 = (function (){var statearr_30968 = state_30962;
(statearr_30968[(13)] = inst_30903__$1);

return statearr_30968;
})();
if(cljs.core.truth_(inst_30904)){
var statearr_30969_31675 = state_30962__$1;
(statearr_30969_31675[(1)] = (5));

} else {
var statearr_30970_31676 = state_30962__$1;
(statearr_30970_31676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (15))){
var state_30962__$1 = state_30962;
var statearr_30974_31677 = state_30962__$1;
(statearr_30974_31677[(2)] = null);

(statearr_30974_31677[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (21))){
var state_30962__$1 = state_30962;
var statearr_30975_31678 = state_30962__$1;
(statearr_30975_31678[(2)] = null);

(statearr_30975_31678[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (13))){
var inst_30915 = (state_30962[(8)]);
var inst_30914 = (state_30962[(9)]);
var inst_30917 = (state_30962[(11)]);
var inst_30916 = (state_30962[(12)]);
var inst_30924 = (state_30962[(2)]);
var inst_30925 = (inst_30917 + (1));
var tmp30971 = inst_30915;
var tmp30972 = inst_30914;
var tmp30973 = inst_30916;
var inst_30914__$1 = tmp30972;
var inst_30915__$1 = tmp30971;
var inst_30916__$1 = tmp30973;
var inst_30917__$1 = inst_30925;
var state_30962__$1 = (function (){var statearr_30976 = state_30962;
(statearr_30976[(8)] = inst_30915__$1);

(statearr_30976[(9)] = inst_30914__$1);

(statearr_30976[(14)] = inst_30924);

(statearr_30976[(11)] = inst_30917__$1);

(statearr_30976[(12)] = inst_30916__$1);

return statearr_30976;
})();
var statearr_30977_31681 = state_30962__$1;
(statearr_30977_31681[(2)] = null);

(statearr_30977_31681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (22))){
var state_30962__$1 = state_30962;
var statearr_30978_31682 = state_30962__$1;
(statearr_30978_31682[(2)] = null);

(statearr_30978_31682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (6))){
var inst_30903 = (state_30962[(13)]);
var inst_30912 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30903) : f.call(null,inst_30903));
var inst_30913 = cljs.core.seq(inst_30912);
var inst_30914 = inst_30913;
var inst_30915 = null;
var inst_30916 = (0);
var inst_30917 = (0);
var state_30962__$1 = (function (){var statearr_30979 = state_30962;
(statearr_30979[(8)] = inst_30915);

(statearr_30979[(9)] = inst_30914);

(statearr_30979[(11)] = inst_30917);

(statearr_30979[(12)] = inst_30916);

return statearr_30979;
})();
var statearr_30980_31683 = state_30962__$1;
(statearr_30980_31683[(2)] = null);

(statearr_30980_31683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (17))){
var inst_30928 = (state_30962[(7)]);
var inst_30932 = cljs.core.chunk_first(inst_30928);
var inst_30933 = cljs.core.chunk_rest(inst_30928);
var inst_30934 = cljs.core.count(inst_30932);
var inst_30914 = inst_30933;
var inst_30915 = inst_30932;
var inst_30916 = inst_30934;
var inst_30917 = (0);
var state_30962__$1 = (function (){var statearr_30981 = state_30962;
(statearr_30981[(8)] = inst_30915);

(statearr_30981[(9)] = inst_30914);

(statearr_30981[(11)] = inst_30917);

(statearr_30981[(12)] = inst_30916);

return statearr_30981;
})();
var statearr_30982_31685 = state_30962__$1;
(statearr_30982_31685[(2)] = null);

(statearr_30982_31685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (3))){
var inst_30960 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30962__$1,inst_30960);
} else {
if((state_val_30963 === (12))){
var inst_30948 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
var statearr_30983_31690 = state_30962__$1;
(statearr_30983_31690[(2)] = inst_30948);

(statearr_30983_31690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (2))){
var state_30962__$1 = state_30962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30962__$1,(4),in$);
} else {
if((state_val_30963 === (23))){
var inst_30956 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
var statearr_30984_31691 = state_30962__$1;
(statearr_30984_31691[(2)] = inst_30956);

(statearr_30984_31691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (19))){
var inst_30943 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
var statearr_30985_31692 = state_30962__$1;
(statearr_30985_31692[(2)] = inst_30943);

(statearr_30985_31692[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (11))){
var inst_30914 = (state_30962[(9)]);
var inst_30928 = (state_30962[(7)]);
var inst_30928__$1 = cljs.core.seq(inst_30914);
var state_30962__$1 = (function (){var statearr_30986 = state_30962;
(statearr_30986[(7)] = inst_30928__$1);

return statearr_30986;
})();
if(inst_30928__$1){
var statearr_30987_31693 = state_30962__$1;
(statearr_30987_31693[(1)] = (14));

} else {
var statearr_30988_31696 = state_30962__$1;
(statearr_30988_31696[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (9))){
var inst_30950 = (state_30962[(2)]);
var inst_30951 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30962__$1 = (function (){var statearr_30989 = state_30962;
(statearr_30989[(15)] = inst_30950);

return statearr_30989;
})();
if(cljs.core.truth_(inst_30951)){
var statearr_30990_31697 = state_30962__$1;
(statearr_30990_31697[(1)] = (21));

} else {
var statearr_30991_31698 = state_30962__$1;
(statearr_30991_31698[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (5))){
var inst_30906 = cljs.core.async.close_BANG_(out);
var state_30962__$1 = state_30962;
var statearr_30992_31699 = state_30962__$1;
(statearr_30992_31699[(2)] = inst_30906);

(statearr_30992_31699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (14))){
var inst_30928 = (state_30962[(7)]);
var inst_30930 = cljs.core.chunked_seq_QMARK_(inst_30928);
var state_30962__$1 = state_30962;
if(inst_30930){
var statearr_30993_31700 = state_30962__$1;
(statearr_30993_31700[(1)] = (17));

} else {
var statearr_30994_31701 = state_30962__$1;
(statearr_30994_31701[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (16))){
var inst_30946 = (state_30962[(2)]);
var state_30962__$1 = state_30962;
var statearr_30995_31702 = state_30962__$1;
(statearr_30995_31702[(2)] = inst_30946);

(statearr_30995_31702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30963 === (10))){
var inst_30915 = (state_30962[(8)]);
var inst_30917 = (state_30962[(11)]);
var inst_30922 = cljs.core._nth(inst_30915,inst_30917);
var state_30962__$1 = state_30962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30962__$1,(13),out,inst_30922);
} else {
if((state_val_30963 === (18))){
var inst_30928 = (state_30962[(7)]);
var inst_30937 = cljs.core.first(inst_30928);
var state_30962__$1 = state_30962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30962__$1,(20),out,inst_30937);
} else {
if((state_val_30963 === (8))){
var inst_30917 = (state_30962[(11)]);
var inst_30916 = (state_30962[(12)]);
var inst_30919 = (inst_30917 < inst_30916);
var inst_30920 = inst_30919;
var state_30962__$1 = state_30962;
if(cljs.core.truth_(inst_30920)){
var statearr_30996_31722 = state_30962__$1;
(statearr_30996_31722[(1)] = (10));

} else {
var statearr_30997_31723 = state_30962__$1;
(statearr_30997_31723[(1)] = (11));

}

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
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29349__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29349__auto____0 = (function (){
var statearr_30998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30998[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29349__auto__);

(statearr_30998[(1)] = (1));

return statearr_30998;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29349__auto____1 = (function (state_30962){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_30962);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e30999){var ex__29352__auto__ = e30999;
var statearr_31000_31724 = state_30962;
(statearr_31000_31724[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_30962[(4)]))){
var statearr_31001_31725 = state_30962;
(statearr_31001_31725[(1)] = cljs.core.first((state_30962[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31726 = state_30962;
state_30962 = G__31726;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29349__auto__ = function(state_30962){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29349__auto____1.call(this,state_30962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29349__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29349__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_31002 = f__29423__auto__();
(statearr_31002[(6)] = c__29422__auto__);

return statearr_31002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));

return c__29422__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31004 = arguments.length;
switch (G__31004) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31006 = arguments.length;
switch (G__31006) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31008 = arguments.length;
switch (G__31008) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29422__auto___31731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_31032){
var state_val_31033 = (state_31032[(1)]);
if((state_val_31033 === (7))){
var inst_31027 = (state_31032[(2)]);
var state_31032__$1 = state_31032;
var statearr_31034_31735 = state_31032__$1;
(statearr_31034_31735[(2)] = inst_31027);

(statearr_31034_31735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (1))){
var inst_31009 = null;
var state_31032__$1 = (function (){var statearr_31035 = state_31032;
(statearr_31035[(7)] = inst_31009);

return statearr_31035;
})();
var statearr_31036_31739 = state_31032__$1;
(statearr_31036_31739[(2)] = null);

(statearr_31036_31739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (4))){
var inst_31012 = (state_31032[(8)]);
var inst_31012__$1 = (state_31032[(2)]);
var inst_31013 = (inst_31012__$1 == null);
var inst_31014 = cljs.core.not(inst_31013);
var state_31032__$1 = (function (){var statearr_31037 = state_31032;
(statearr_31037[(8)] = inst_31012__$1);

return statearr_31037;
})();
if(inst_31014){
var statearr_31038_31740 = state_31032__$1;
(statearr_31038_31740[(1)] = (5));

} else {
var statearr_31039_31741 = state_31032__$1;
(statearr_31039_31741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (6))){
var state_31032__$1 = state_31032;
var statearr_31040_31742 = state_31032__$1;
(statearr_31040_31742[(2)] = null);

(statearr_31040_31742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (3))){
var inst_31029 = (state_31032[(2)]);
var inst_31030 = cljs.core.async.close_BANG_(out);
var state_31032__$1 = (function (){var statearr_31041 = state_31032;
(statearr_31041[(9)] = inst_31029);

return statearr_31041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31032__$1,inst_31030);
} else {
if((state_val_31033 === (2))){
var state_31032__$1 = state_31032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31032__$1,(4),ch);
} else {
if((state_val_31033 === (11))){
var inst_31012 = (state_31032[(8)]);
var inst_31021 = (state_31032[(2)]);
var inst_31009 = inst_31012;
var state_31032__$1 = (function (){var statearr_31042 = state_31032;
(statearr_31042[(10)] = inst_31021);

(statearr_31042[(7)] = inst_31009);

return statearr_31042;
})();
var statearr_31043_31743 = state_31032__$1;
(statearr_31043_31743[(2)] = null);

(statearr_31043_31743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (9))){
var inst_31012 = (state_31032[(8)]);
var state_31032__$1 = state_31032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31032__$1,(11),out,inst_31012);
} else {
if((state_val_31033 === (5))){
var inst_31012 = (state_31032[(8)]);
var inst_31009 = (state_31032[(7)]);
var inst_31016 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31012,inst_31009);
var state_31032__$1 = state_31032;
if(inst_31016){
var statearr_31045_31747 = state_31032__$1;
(statearr_31045_31747[(1)] = (8));

} else {
var statearr_31046_31748 = state_31032__$1;
(statearr_31046_31748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (10))){
var inst_31024 = (state_31032[(2)]);
var state_31032__$1 = state_31032;
var statearr_31047_31749 = state_31032__$1;
(statearr_31047_31749[(2)] = inst_31024);

(statearr_31047_31749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31033 === (8))){
var inst_31009 = (state_31032[(7)]);
var tmp31044 = inst_31009;
var inst_31009__$1 = tmp31044;
var state_31032__$1 = (function (){var statearr_31048 = state_31032;
(statearr_31048[(7)] = inst_31009__$1);

return statearr_31048;
})();
var statearr_31049_31750 = state_31032__$1;
(statearr_31049_31750[(2)] = null);

(statearr_31049_31750[(1)] = (2));


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
var cljs$core$async$state_machine__29349__auto__ = null;
var cljs$core$async$state_machine__29349__auto____0 = (function (){
var statearr_31050 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31050[(0)] = cljs$core$async$state_machine__29349__auto__);

(statearr_31050[(1)] = (1));

return statearr_31050;
});
var cljs$core$async$state_machine__29349__auto____1 = (function (state_31032){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_31032);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e31051){var ex__29352__auto__ = e31051;
var statearr_31052_31754 = state_31032;
(statearr_31052_31754[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_31032[(4)]))){
var statearr_31053_31755 = state_31032;
(statearr_31053_31755[(1)] = cljs.core.first((state_31032[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31756 = state_31032;
state_31032 = G__31756;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$state_machine__29349__auto__ = function(state_31032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29349__auto____1.call(this,state_31032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29349__auto____0;
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29349__auto____1;
return cljs$core$async$state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_31054 = f__29423__auto__();
(statearr_31054[(6)] = c__29422__auto___31731);

return statearr_31054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31056 = arguments.length;
switch (G__31056) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29422__auto___31761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_31094){
var state_val_31095 = (state_31094[(1)]);
if((state_val_31095 === (7))){
var inst_31090 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
var statearr_31096_31762 = state_31094__$1;
(statearr_31096_31762[(2)] = inst_31090);

(statearr_31096_31762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (1))){
var inst_31057 = (new Array(n));
var inst_31058 = inst_31057;
var inst_31059 = (0);
var state_31094__$1 = (function (){var statearr_31097 = state_31094;
(statearr_31097[(7)] = inst_31058);

(statearr_31097[(8)] = inst_31059);

return statearr_31097;
})();
var statearr_31098_31763 = state_31094__$1;
(statearr_31098_31763[(2)] = null);

(statearr_31098_31763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (4))){
var inst_31062 = (state_31094[(9)]);
var inst_31062__$1 = (state_31094[(2)]);
var inst_31063 = (inst_31062__$1 == null);
var inst_31064 = cljs.core.not(inst_31063);
var state_31094__$1 = (function (){var statearr_31099 = state_31094;
(statearr_31099[(9)] = inst_31062__$1);

return statearr_31099;
})();
if(inst_31064){
var statearr_31100_31764 = state_31094__$1;
(statearr_31100_31764[(1)] = (5));

} else {
var statearr_31101_31765 = state_31094__$1;
(statearr_31101_31765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (15))){
var inst_31084 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
var statearr_31102_31766 = state_31094__$1;
(statearr_31102_31766[(2)] = inst_31084);

(statearr_31102_31766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (13))){
var state_31094__$1 = state_31094;
var statearr_31103_31767 = state_31094__$1;
(statearr_31103_31767[(2)] = null);

(statearr_31103_31767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (6))){
var inst_31059 = (state_31094[(8)]);
var inst_31080 = (inst_31059 > (0));
var state_31094__$1 = state_31094;
if(cljs.core.truth_(inst_31080)){
var statearr_31104_31770 = state_31094__$1;
(statearr_31104_31770[(1)] = (12));

} else {
var statearr_31105_31771 = state_31094__$1;
(statearr_31105_31771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (3))){
var inst_31092 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31094__$1,inst_31092);
} else {
if((state_val_31095 === (12))){
var inst_31058 = (state_31094[(7)]);
var inst_31082 = cljs.core.vec(inst_31058);
var state_31094__$1 = state_31094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31094__$1,(15),out,inst_31082);
} else {
if((state_val_31095 === (2))){
var state_31094__$1 = state_31094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31094__$1,(4),ch);
} else {
if((state_val_31095 === (11))){
var inst_31074 = (state_31094[(2)]);
var inst_31075 = (new Array(n));
var inst_31058 = inst_31075;
var inst_31059 = (0);
var state_31094__$1 = (function (){var statearr_31106 = state_31094;
(statearr_31106[(7)] = inst_31058);

(statearr_31106[(8)] = inst_31059);

(statearr_31106[(10)] = inst_31074);

return statearr_31106;
})();
var statearr_31107_31774 = state_31094__$1;
(statearr_31107_31774[(2)] = null);

(statearr_31107_31774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (9))){
var inst_31058 = (state_31094[(7)]);
var inst_31072 = cljs.core.vec(inst_31058);
var state_31094__$1 = state_31094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31094__$1,(11),out,inst_31072);
} else {
if((state_val_31095 === (5))){
var inst_31058 = (state_31094[(7)]);
var inst_31059 = (state_31094[(8)]);
var inst_31062 = (state_31094[(9)]);
var inst_31067 = (state_31094[(11)]);
var inst_31066 = (inst_31058[inst_31059] = inst_31062);
var inst_31067__$1 = (inst_31059 + (1));
var inst_31068 = (inst_31067__$1 < n);
var state_31094__$1 = (function (){var statearr_31108 = state_31094;
(statearr_31108[(12)] = inst_31066);

(statearr_31108[(11)] = inst_31067__$1);

return statearr_31108;
})();
if(cljs.core.truth_(inst_31068)){
var statearr_31109_31775 = state_31094__$1;
(statearr_31109_31775[(1)] = (8));

} else {
var statearr_31110_31776 = state_31094__$1;
(statearr_31110_31776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (14))){
var inst_31087 = (state_31094[(2)]);
var inst_31088 = cljs.core.async.close_BANG_(out);
var state_31094__$1 = (function (){var statearr_31112 = state_31094;
(statearr_31112[(13)] = inst_31087);

return statearr_31112;
})();
var statearr_31113_31777 = state_31094__$1;
(statearr_31113_31777[(2)] = inst_31088);

(statearr_31113_31777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (10))){
var inst_31078 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
var statearr_31114_31778 = state_31094__$1;
(statearr_31114_31778[(2)] = inst_31078);

(statearr_31114_31778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (8))){
var inst_31058 = (state_31094[(7)]);
var inst_31067 = (state_31094[(11)]);
var tmp31111 = inst_31058;
var inst_31058__$1 = tmp31111;
var inst_31059 = inst_31067;
var state_31094__$1 = (function (){var statearr_31115 = state_31094;
(statearr_31115[(7)] = inst_31058__$1);

(statearr_31115[(8)] = inst_31059);

return statearr_31115;
})();
var statearr_31116_31780 = state_31094__$1;
(statearr_31116_31780[(2)] = null);

(statearr_31116_31780[(1)] = (2));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29349__auto__ = null;
var cljs$core$async$state_machine__29349__auto____0 = (function (){
var statearr_31117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31117[(0)] = cljs$core$async$state_machine__29349__auto__);

(statearr_31117[(1)] = (1));

return statearr_31117;
});
var cljs$core$async$state_machine__29349__auto____1 = (function (state_31094){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_31094);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e31118){var ex__29352__auto__ = e31118;
var statearr_31119_31782 = state_31094;
(statearr_31119_31782[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_31094[(4)]))){
var statearr_31120_31784 = state_31094;
(statearr_31120_31784[(1)] = cljs.core.first((state_31094[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31785 = state_31094;
state_31094 = G__31785;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$state_machine__29349__auto__ = function(state_31094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29349__auto____1.call(this,state_31094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29349__auto____0;
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29349__auto____1;
return cljs$core$async$state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_31121 = f__29423__auto__();
(statearr_31121[(6)] = c__29422__auto___31761);

return statearr_31121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31123 = arguments.length;
switch (G__31123) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29422__auto___31793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29423__auto__ = (function (){var switch__29348__auto__ = (function (state_31168){
var state_val_31169 = (state_31168[(1)]);
if((state_val_31169 === (7))){
var inst_31164 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
var statearr_31170_31798 = state_31168__$1;
(statearr_31170_31798[(2)] = inst_31164);

(statearr_31170_31798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (1))){
var inst_31124 = [];
var inst_31125 = inst_31124;
var inst_31126 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31168__$1 = (function (){var statearr_31171 = state_31168;
(statearr_31171[(7)] = inst_31125);

(statearr_31171[(8)] = inst_31126);

return statearr_31171;
})();
var statearr_31172_31799 = state_31168__$1;
(statearr_31172_31799[(2)] = null);

(statearr_31172_31799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (4))){
var inst_31129 = (state_31168[(9)]);
var inst_31129__$1 = (state_31168[(2)]);
var inst_31130 = (inst_31129__$1 == null);
var inst_31131 = cljs.core.not(inst_31130);
var state_31168__$1 = (function (){var statearr_31173 = state_31168;
(statearr_31173[(9)] = inst_31129__$1);

return statearr_31173;
})();
if(inst_31131){
var statearr_31174_31801 = state_31168__$1;
(statearr_31174_31801[(1)] = (5));

} else {
var statearr_31175_31802 = state_31168__$1;
(statearr_31175_31802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (15))){
var inst_31125 = (state_31168[(7)]);
var inst_31156 = cljs.core.vec(inst_31125);
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31168__$1,(18),out,inst_31156);
} else {
if((state_val_31169 === (13))){
var inst_31151 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
var statearr_31176_31803 = state_31168__$1;
(statearr_31176_31803[(2)] = inst_31151);

(statearr_31176_31803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (6))){
var inst_31125 = (state_31168[(7)]);
var inst_31153 = inst_31125.length;
var inst_31154 = (inst_31153 > (0));
var state_31168__$1 = state_31168;
if(cljs.core.truth_(inst_31154)){
var statearr_31177_31804 = state_31168__$1;
(statearr_31177_31804[(1)] = (15));

} else {
var statearr_31178_31805 = state_31168__$1;
(statearr_31178_31805[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (17))){
var inst_31161 = (state_31168[(2)]);
var inst_31162 = cljs.core.async.close_BANG_(out);
var state_31168__$1 = (function (){var statearr_31179 = state_31168;
(statearr_31179[(10)] = inst_31161);

return statearr_31179;
})();
var statearr_31180_31806 = state_31168__$1;
(statearr_31180_31806[(2)] = inst_31162);

(statearr_31180_31806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (3))){
var inst_31166 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31168__$1,inst_31166);
} else {
if((state_val_31169 === (12))){
var inst_31125 = (state_31168[(7)]);
var inst_31144 = cljs.core.vec(inst_31125);
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31168__$1,(14),out,inst_31144);
} else {
if((state_val_31169 === (2))){
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31168__$1,(4),ch);
} else {
if((state_val_31169 === (11))){
var inst_31133 = (state_31168[(11)]);
var inst_31129 = (state_31168[(9)]);
var inst_31125 = (state_31168[(7)]);
var inst_31141 = inst_31125.push(inst_31129);
var tmp31181 = inst_31125;
var inst_31125__$1 = tmp31181;
var inst_31126 = inst_31133;
var state_31168__$1 = (function (){var statearr_31182 = state_31168;
(statearr_31182[(7)] = inst_31125__$1);

(statearr_31182[(8)] = inst_31126);

(statearr_31182[(12)] = inst_31141);

return statearr_31182;
})();
var statearr_31183_31807 = state_31168__$1;
(statearr_31183_31807[(2)] = null);

(statearr_31183_31807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (9))){
var inst_31126 = (state_31168[(8)]);
var inst_31137 = cljs.core.keyword_identical_QMARK_(inst_31126,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_31168__$1 = state_31168;
var statearr_31184_31809 = state_31168__$1;
(statearr_31184_31809[(2)] = inst_31137);

(statearr_31184_31809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (5))){
var inst_31133 = (state_31168[(11)]);
var inst_31129 = (state_31168[(9)]);
var inst_31134 = (state_31168[(13)]);
var inst_31126 = (state_31168[(8)]);
var inst_31133__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31129) : f.call(null,inst_31129));
var inst_31134__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31133__$1,inst_31126);
var state_31168__$1 = (function (){var statearr_31185 = state_31168;
(statearr_31185[(11)] = inst_31133__$1);

(statearr_31185[(13)] = inst_31134__$1);

return statearr_31185;
})();
if(inst_31134__$1){
var statearr_31186_31810 = state_31168__$1;
(statearr_31186_31810[(1)] = (8));

} else {
var statearr_31187_31811 = state_31168__$1;
(statearr_31187_31811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (14))){
var inst_31133 = (state_31168[(11)]);
var inst_31129 = (state_31168[(9)]);
var inst_31146 = (state_31168[(2)]);
var inst_31147 = [];
var inst_31148 = inst_31147.push(inst_31129);
var inst_31125 = inst_31147;
var inst_31126 = inst_31133;
var state_31168__$1 = (function (){var statearr_31188 = state_31168;
(statearr_31188[(14)] = inst_31146);

(statearr_31188[(7)] = inst_31125);

(statearr_31188[(15)] = inst_31148);

(statearr_31188[(8)] = inst_31126);

return statearr_31188;
})();
var statearr_31189_31812 = state_31168__$1;
(statearr_31189_31812[(2)] = null);

(statearr_31189_31812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (16))){
var state_31168__$1 = state_31168;
var statearr_31190_31813 = state_31168__$1;
(statearr_31190_31813[(2)] = null);

(statearr_31190_31813[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (10))){
var inst_31139 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
if(cljs.core.truth_(inst_31139)){
var statearr_31191_31814 = state_31168__$1;
(statearr_31191_31814[(1)] = (11));

} else {
var statearr_31192_31815 = state_31168__$1;
(statearr_31192_31815[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (18))){
var inst_31158 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
var statearr_31193_31816 = state_31168__$1;
(statearr_31193_31816[(2)] = inst_31158);

(statearr_31193_31816[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31169 === (8))){
var inst_31134 = (state_31168[(13)]);
var state_31168__$1 = state_31168;
var statearr_31194_31817 = state_31168__$1;
(statearr_31194_31817[(2)] = inst_31134);

(statearr_31194_31817[(1)] = (10));


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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29349__auto__ = null;
var cljs$core$async$state_machine__29349__auto____0 = (function (){
var statearr_31195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31195[(0)] = cljs$core$async$state_machine__29349__auto__);

(statearr_31195[(1)] = (1));

return statearr_31195;
});
var cljs$core$async$state_machine__29349__auto____1 = (function (state_31168){
while(true){
var ret_value__29350__auto__ = (function (){try{while(true){
var result__29351__auto__ = switch__29348__auto__(state_31168);
if(cljs.core.keyword_identical_QMARK_(result__29351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29351__auto__;
}
break;
}
}catch (e31196){var ex__29352__auto__ = e31196;
var statearr_31197_31818 = state_31168;
(statearr_31197_31818[(2)] = ex__29352__auto__);


if(cljs.core.seq((state_31168[(4)]))){
var statearr_31198_31819 = state_31168;
(statearr_31198_31819[(1)] = cljs.core.first((state_31168[(4)])));

} else {
throw ex__29352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31820 = state_31168;
state_31168 = G__31820;
continue;
} else {
return ret_value__29350__auto__;
}
break;
}
});
cljs$core$async$state_machine__29349__auto__ = function(state_31168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29349__auto____1.call(this,state_31168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29349__auto____0;
cljs$core$async$state_machine__29349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29349__auto____1;
return cljs$core$async$state_machine__29349__auto__;
})()
})();
var state__29424__auto__ = (function (){var statearr_31199 = f__29423__auto__();
(statearr_31199[(6)] = c__29422__auto___31793);

return statearr_31199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29424__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
