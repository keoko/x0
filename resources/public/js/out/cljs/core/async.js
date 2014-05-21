// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11476 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11476 = (function (f,fn_handler,meta11477){
this.f = f;
this.fn_handler = fn_handler;
this.meta11477 = meta11477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11476.cljs$lang$type = true;
cljs.core.async.t11476.cljs$lang$ctorStr = "cljs.core.async/t11476";
cljs.core.async.t11476.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11476");
});
cljs.core.async.t11476.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11478){var self__ = this;
var _11478__$1 = this;return self__.meta11477;
});
cljs.core.async.t11476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11478,meta11477__$1){var self__ = this;
var _11478__$1 = this;return (new cljs.core.async.t11476(self__.f,self__.fn_handler,meta11477__$1));
});
cljs.core.async.__GT_t11476 = (function __GT_t11476(f__$1,fn_handler__$1,meta11477){return (new cljs.core.async.t11476(f__$1,fn_handler__$1,meta11477));
});
}
return (new cljs.core.async.t11476(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11480 = buff;if(G__11480)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11480.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11480.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11480);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11480);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11481 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11481);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11481);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11482 = n;var x_11483 = 0;while(true){
if((x_11483 < n__4291__auto___11482))
{(a[x_11483] = 0);
{
var G__11484 = (x_11483 + 1);
x_11483 = G__11484;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11485 = (i + 1);
i = G__11485;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11489 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11489 = (function (flag,alt_flag,meta11490){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11490 = meta11490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11489.cljs$lang$type = true;
cljs.core.async.t11489.cljs$lang$ctorStr = "cljs.core.async/t11489";
cljs.core.async.t11489.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11489");
});
cljs.core.async.t11489.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11491){var self__ = this;
var _11491__$1 = this;return self__.meta11490;
});
cljs.core.async.t11489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11491,meta11490__$1){var self__ = this;
var _11491__$1 = this;return (new cljs.core.async.t11489(self__.flag,self__.alt_flag,meta11490__$1));
});
cljs.core.async.__GT_t11489 = (function __GT_t11489(flag__$1,alt_flag__$1,meta11490){return (new cljs.core.async.t11489(flag__$1,alt_flag__$1,meta11490));
});
}
return (new cljs.core.async.t11489(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11495 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11495 = (function (cb,flag,alt_handler,meta11496){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11496 = meta11496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11495.cljs$lang$type = true;
cljs.core.async.t11495.cljs$lang$ctorStr = "cljs.core.async/t11495";
cljs.core.async.t11495.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11495");
});
cljs.core.async.t11495.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11495.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11495.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11497){var self__ = this;
var _11497__$1 = this;return self__.meta11496;
});
cljs.core.async.t11495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11497,meta11496__$1){var self__ = this;
var _11497__$1 = this;return (new cljs.core.async.t11495(self__.cb,self__.flag,self__.alt_handler,meta11496__$1));
});
cljs.core.async.__GT_t11495 = (function __GT_t11495(cb__$1,flag__$1,alt_handler__$1,meta11496){return (new cljs.core.async.t11495(cb__$1,flag__$1,alt_handler__$1,meta11496));
});
}
return (new cljs.core.async.t11495(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11498_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11498_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11499 = (i + 1);
i = G__11499;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11500){var map__11502 = p__11500;var map__11502__$1 = ((cljs.core.seq_QMARK_.call(null,map__11502))?cljs.core.apply.call(null,cljs.core.hash_map,map__11502):map__11502);var opts = map__11502__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11500 = null;if (arguments.length > 1) {
  p__11500 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11500);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11503){
var ports = cljs.core.first(arglist__11503);
var p__11500 = cljs.core.rest(arglist__11503);
return alts_BANG___delegate(ports,p__11500);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11511 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11511 = (function (ch,f,map_LT_,meta11512){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11512 = meta11512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11511.cljs$lang$type = true;
cljs.core.async.t11511.cljs$lang$ctorStr = "cljs.core.async/t11511";
cljs.core.async.t11511.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11511");
});
cljs.core.async.t11511.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11511.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11514 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11514 = (function (fn1,_,meta11512,ch,f,map_LT_,meta11515){
this.fn1 = fn1;
this._ = _;
this.meta11512 = meta11512;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11515 = meta11515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11514.cljs$lang$type = true;
cljs.core.async.t11514.cljs$lang$ctorStr = "cljs.core.async/t11514";
cljs.core.async.t11514.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11514");
});
cljs.core.async.t11514.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11514.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11504_SHARP_){return f1.call(null,(((p1__11504_SHARP_ == null))?null:self__.f.call(null,p1__11504_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11516){var self__ = this;
var _11516__$1 = this;return self__.meta11515;
});
cljs.core.async.t11514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11516,meta11515__$1){var self__ = this;
var _11516__$1 = this;return (new cljs.core.async.t11514(self__.fn1,self__._,self__.meta11512,self__.ch,self__.f,self__.map_LT_,meta11515__$1));
});
cljs.core.async.__GT_t11514 = (function __GT_t11514(fn1__$1,___$2,meta11512__$1,ch__$2,f__$2,map_LT___$2,meta11515){return (new cljs.core.async.t11514(fn1__$1,___$2,meta11512__$1,ch__$2,f__$2,map_LT___$2,meta11515));
});
}
return (new cljs.core.async.t11514(fn1,___$1,self__.meta11512,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11511.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11513){var self__ = this;
var _11513__$1 = this;return self__.meta11512;
});
cljs.core.async.t11511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11513,meta11512__$1){var self__ = this;
var _11513__$1 = this;return (new cljs.core.async.t11511(self__.ch,self__.f,self__.map_LT_,meta11512__$1));
});
cljs.core.async.__GT_t11511 = (function __GT_t11511(ch__$1,f__$1,map_LT___$1,meta11512){return (new cljs.core.async.t11511(ch__$1,f__$1,map_LT___$1,meta11512));
});
}
return (new cljs.core.async.t11511(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11520 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11520 = (function (ch,f,map_GT_,meta11521){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11521 = meta11521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11520.cljs$lang$type = true;
cljs.core.async.t11520.cljs$lang$ctorStr = "cljs.core.async/t11520";
cljs.core.async.t11520.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11520");
});
cljs.core.async.t11520.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11520.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11520.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11520.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11520.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11520.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11522){var self__ = this;
var _11522__$1 = this;return self__.meta11521;
});
cljs.core.async.t11520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11522,meta11521__$1){var self__ = this;
var _11522__$1 = this;return (new cljs.core.async.t11520(self__.ch,self__.f,self__.map_GT_,meta11521__$1));
});
cljs.core.async.__GT_t11520 = (function __GT_t11520(ch__$1,f__$1,map_GT___$1,meta11521){return (new cljs.core.async.t11520(ch__$1,f__$1,map_GT___$1,meta11521));
});
}
return (new cljs.core.async.t11520(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11526 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11526 = (function (ch,p,filter_GT_,meta11527){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11527 = meta11527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11526.cljs$lang$type = true;
cljs.core.async.t11526.cljs$lang$ctorStr = "cljs.core.async/t11526";
cljs.core.async.t11526.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11526");
});
cljs.core.async.t11526.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11526.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11526.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11526.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11526.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11526.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11528){var self__ = this;
var _11528__$1 = this;return self__.meta11527;
});
cljs.core.async.t11526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11528,meta11527__$1){var self__ = this;
var _11528__$1 = this;return (new cljs.core.async.t11526(self__.ch,self__.p,self__.filter_GT_,meta11527__$1));
});
cljs.core.async.__GT_t11526 = (function __GT_t11526(ch__$1,p__$1,filter_GT___$1,meta11527){return (new cljs.core.async.t11526(ch__$1,p__$1,filter_GT___$1,meta11527));
});
}
return (new cljs.core.async.t11526(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6796__auto___11611 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_11590){var state_val_11591 = (state_11590[1]);if((state_val_11591 === 1))
{var state_11590__$1 = state_11590;var statearr_11592_11612 = state_11590__$1;(statearr_11592_11612[2] = null);
(statearr_11592_11612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 2))
{var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11590__$1,4,ch);
} else
{if((state_val_11591 === 3))
{var inst_11588 = (state_11590[2]);var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11590__$1,inst_11588);
} else
{if((state_val_11591 === 4))
{var inst_11572 = (state_11590[7]);var inst_11572__$1 = (state_11590[2]);var inst_11573 = (inst_11572__$1 == null);var state_11590__$1 = (function (){var statearr_11593 = state_11590;(statearr_11593[7] = inst_11572__$1);
return statearr_11593;
})();if(cljs.core.truth_(inst_11573))
{var statearr_11594_11613 = state_11590__$1;(statearr_11594_11613[1] = 5);
} else
{var statearr_11595_11614 = state_11590__$1;(statearr_11595_11614[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 5))
{var inst_11575 = cljs.core.async.close_BANG_.call(null,out);var state_11590__$1 = state_11590;var statearr_11596_11615 = state_11590__$1;(statearr_11596_11615[2] = inst_11575);
(statearr_11596_11615[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 6))
{var inst_11572 = (state_11590[7]);var inst_11577 = p.call(null,inst_11572);var state_11590__$1 = state_11590;if(cljs.core.truth_(inst_11577))
{var statearr_11597_11616 = state_11590__$1;(statearr_11597_11616[1] = 8);
} else
{var statearr_11598_11617 = state_11590__$1;(statearr_11598_11617[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 7))
{var inst_11586 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11599_11618 = state_11590__$1;(statearr_11599_11618[2] = inst_11586);
(statearr_11599_11618[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 8))
{var inst_11572 = (state_11590[7]);var state_11590__$1 = state_11590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11590__$1,11,out,inst_11572);
} else
{if((state_val_11591 === 9))
{var state_11590__$1 = state_11590;var statearr_11600_11619 = state_11590__$1;(statearr_11600_11619[2] = null);
(statearr_11600_11619[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 10))
{var inst_11583 = (state_11590[2]);var state_11590__$1 = (function (){var statearr_11601 = state_11590;(statearr_11601[8] = inst_11583);
return statearr_11601;
})();var statearr_11602_11620 = state_11590__$1;(statearr_11602_11620[2] = null);
(statearr_11602_11620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11591 === 11))
{var inst_11580 = (state_11590[2]);var state_11590__$1 = state_11590;var statearr_11603_11621 = state_11590__$1;(statearr_11603_11621[2] = inst_11580);
(statearr_11603_11621[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_11607 = [null,null,null,null,null,null,null,null,null];(statearr_11607[0] = state_machine__6782__auto__);
(statearr_11607[1] = 1);
return statearr_11607;
});
var state_machine__6782__auto____1 = (function (state_11590){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_11590);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e11608){if((e11608 instanceof Object))
{var ex__6785__auto__ = e11608;var statearr_11609_11622 = state_11590;(statearr_11609_11622[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11590);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11608;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11623 = state_11590;
state_11590 = G__11623;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_11590){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_11590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_11610 = f__6797__auto__.call(null);(statearr_11610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___11611);
return statearr_11610;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6796__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_11775){var state_val_11776 = (state_11775[1]);if((state_val_11776 === 1))
{var state_11775__$1 = state_11775;var statearr_11777_11814 = state_11775__$1;(statearr_11777_11814[2] = null);
(statearr_11777_11814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 2))
{var state_11775__$1 = state_11775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11775__$1,4,in$);
} else
{if((state_val_11776 === 3))
{var inst_11773 = (state_11775[2]);var state_11775__$1 = state_11775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11775__$1,inst_11773);
} else
{if((state_val_11776 === 4))
{var inst_11721 = (state_11775[7]);var inst_11721__$1 = (state_11775[2]);var inst_11722 = (inst_11721__$1 == null);var state_11775__$1 = (function (){var statearr_11778 = state_11775;(statearr_11778[7] = inst_11721__$1);
return statearr_11778;
})();if(cljs.core.truth_(inst_11722))
{var statearr_11779_11815 = state_11775__$1;(statearr_11779_11815[1] = 5);
} else
{var statearr_11780_11816 = state_11775__$1;(statearr_11780_11816[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 5))
{var inst_11724 = cljs.core.async.close_BANG_.call(null,out);var state_11775__$1 = state_11775;var statearr_11781_11817 = state_11775__$1;(statearr_11781_11817[2] = inst_11724);
(statearr_11781_11817[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 6))
{var inst_11721 = (state_11775[7]);var inst_11726 = f.call(null,inst_11721);var inst_11731 = cljs.core.seq.call(null,inst_11726);var inst_11732 = inst_11731;var inst_11733 = null;var inst_11734 = 0;var inst_11735 = 0;var state_11775__$1 = (function (){var statearr_11782 = state_11775;(statearr_11782[8] = inst_11732);
(statearr_11782[9] = inst_11733);
(statearr_11782[10] = inst_11734);
(statearr_11782[11] = inst_11735);
return statearr_11782;
})();var statearr_11783_11818 = state_11775__$1;(statearr_11783_11818[2] = null);
(statearr_11783_11818[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 7))
{var inst_11771 = (state_11775[2]);var state_11775__$1 = state_11775;var statearr_11784_11819 = state_11775__$1;(statearr_11784_11819[2] = inst_11771);
(statearr_11784_11819[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 8))
{var inst_11734 = (state_11775[10]);var inst_11735 = (state_11775[11]);var inst_11737 = (inst_11735 < inst_11734);var inst_11738 = inst_11737;var state_11775__$1 = state_11775;if(cljs.core.truth_(inst_11738))
{var statearr_11785_11820 = state_11775__$1;(statearr_11785_11820[1] = 10);
} else
{var statearr_11786_11821 = state_11775__$1;(statearr_11786_11821[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 9))
{var inst_11768 = (state_11775[2]);var state_11775__$1 = (function (){var statearr_11787 = state_11775;(statearr_11787[12] = inst_11768);
return statearr_11787;
})();var statearr_11788_11822 = state_11775__$1;(statearr_11788_11822[2] = null);
(statearr_11788_11822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 10))
{var inst_11733 = (state_11775[9]);var inst_11735 = (state_11775[11]);var inst_11740 = cljs.core._nth.call(null,inst_11733,inst_11735);var state_11775__$1 = state_11775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11775__$1,13,out,inst_11740);
} else
{if((state_val_11776 === 11))
{var inst_11746 = (state_11775[13]);var inst_11732 = (state_11775[8]);var inst_11746__$1 = cljs.core.seq.call(null,inst_11732);var state_11775__$1 = (function (){var statearr_11792 = state_11775;(statearr_11792[13] = inst_11746__$1);
return statearr_11792;
})();if(inst_11746__$1)
{var statearr_11793_11823 = state_11775__$1;(statearr_11793_11823[1] = 14);
} else
{var statearr_11794_11824 = state_11775__$1;(statearr_11794_11824[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 12))
{var inst_11766 = (state_11775[2]);var state_11775__$1 = state_11775;var statearr_11795_11825 = state_11775__$1;(statearr_11795_11825[2] = inst_11766);
(statearr_11795_11825[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 13))
{var inst_11732 = (state_11775[8]);var inst_11733 = (state_11775[9]);var inst_11734 = (state_11775[10]);var inst_11735 = (state_11775[11]);var inst_11742 = (state_11775[2]);var inst_11743 = (inst_11735 + 1);var tmp11789 = inst_11732;var tmp11790 = inst_11733;var tmp11791 = inst_11734;var inst_11732__$1 = tmp11789;var inst_11733__$1 = tmp11790;var inst_11734__$1 = tmp11791;var inst_11735__$1 = inst_11743;var state_11775__$1 = (function (){var statearr_11796 = state_11775;(statearr_11796[8] = inst_11732__$1);
(statearr_11796[9] = inst_11733__$1);
(statearr_11796[10] = inst_11734__$1);
(statearr_11796[11] = inst_11735__$1);
(statearr_11796[14] = inst_11742);
return statearr_11796;
})();var statearr_11797_11826 = state_11775__$1;(statearr_11797_11826[2] = null);
(statearr_11797_11826[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 14))
{var inst_11746 = (state_11775[13]);var inst_11748 = cljs.core.chunked_seq_QMARK_.call(null,inst_11746);var state_11775__$1 = state_11775;if(inst_11748)
{var statearr_11798_11827 = state_11775__$1;(statearr_11798_11827[1] = 17);
} else
{var statearr_11799_11828 = state_11775__$1;(statearr_11799_11828[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 15))
{var state_11775__$1 = state_11775;var statearr_11800_11829 = state_11775__$1;(statearr_11800_11829[2] = null);
(statearr_11800_11829[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 16))
{var inst_11764 = (state_11775[2]);var state_11775__$1 = state_11775;var statearr_11801_11830 = state_11775__$1;(statearr_11801_11830[2] = inst_11764);
(statearr_11801_11830[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 17))
{var inst_11746 = (state_11775[13]);var inst_11750 = cljs.core.chunk_first.call(null,inst_11746);var inst_11751 = cljs.core.chunk_rest.call(null,inst_11746);var inst_11752 = cljs.core.count.call(null,inst_11750);var inst_11732 = inst_11751;var inst_11733 = inst_11750;var inst_11734 = inst_11752;var inst_11735 = 0;var state_11775__$1 = (function (){var statearr_11802 = state_11775;(statearr_11802[8] = inst_11732);
(statearr_11802[9] = inst_11733);
(statearr_11802[10] = inst_11734);
(statearr_11802[11] = inst_11735);
return statearr_11802;
})();var statearr_11803_11831 = state_11775__$1;(statearr_11803_11831[2] = null);
(statearr_11803_11831[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 18))
{var inst_11746 = (state_11775[13]);var inst_11755 = cljs.core.first.call(null,inst_11746);var state_11775__$1 = state_11775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11775__$1,20,out,inst_11755);
} else
{if((state_val_11776 === 19))
{var inst_11761 = (state_11775[2]);var state_11775__$1 = state_11775;var statearr_11804_11832 = state_11775__$1;(statearr_11804_11832[2] = inst_11761);
(statearr_11804_11832[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11776 === 20))
{var inst_11746 = (state_11775[13]);var inst_11757 = (state_11775[2]);var inst_11758 = cljs.core.next.call(null,inst_11746);var inst_11732 = inst_11758;var inst_11733 = null;var inst_11734 = 0;var inst_11735 = 0;var state_11775__$1 = (function (){var statearr_11805 = state_11775;(statearr_11805[8] = inst_11732);
(statearr_11805[9] = inst_11733);
(statearr_11805[10] = inst_11734);
(statearr_11805[15] = inst_11757);
(statearr_11805[11] = inst_11735);
return statearr_11805;
})();var statearr_11806_11833 = state_11775__$1;(statearr_11806_11833[2] = null);
(statearr_11806_11833[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_11810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11810[0] = state_machine__6782__auto__);
(statearr_11810[1] = 1);
return statearr_11810;
});
var state_machine__6782__auto____1 = (function (state_11775){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_11775);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e11811){if((e11811 instanceof Object))
{var ex__6785__auto__ = e11811;var statearr_11812_11834 = state_11775;(statearr_11812_11834[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11775);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11835 = state_11775;
state_11775 = G__11835;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_11775){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_11775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_11813 = f__6797__auto__.call(null);(statearr_11813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto__);
return statearr_11813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return c__6796__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6796__auto___11916 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_11895){var state_val_11896 = (state_11895[1]);if((state_val_11896 === 1))
{var state_11895__$1 = state_11895;var statearr_11897_11917 = state_11895__$1;(statearr_11897_11917[2] = null);
(statearr_11897_11917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 2))
{var state_11895__$1 = state_11895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11895__$1,4,from);
} else
{if((state_val_11896 === 3))
{var inst_11893 = (state_11895[2]);var state_11895__$1 = state_11895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11895__$1,inst_11893);
} else
{if((state_val_11896 === 4))
{var inst_11878 = (state_11895[7]);var inst_11878__$1 = (state_11895[2]);var inst_11879 = (inst_11878__$1 == null);var state_11895__$1 = (function (){var statearr_11898 = state_11895;(statearr_11898[7] = inst_11878__$1);
return statearr_11898;
})();if(cljs.core.truth_(inst_11879))
{var statearr_11899_11918 = state_11895__$1;(statearr_11899_11918[1] = 5);
} else
{var statearr_11900_11919 = state_11895__$1;(statearr_11900_11919[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 5))
{var state_11895__$1 = state_11895;if(cljs.core.truth_(close_QMARK_))
{var statearr_11901_11920 = state_11895__$1;(statearr_11901_11920[1] = 8);
} else
{var statearr_11902_11921 = state_11895__$1;(statearr_11902_11921[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 6))
{var inst_11878 = (state_11895[7]);var state_11895__$1 = state_11895;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11895__$1,11,to,inst_11878);
} else
{if((state_val_11896 === 7))
{var inst_11891 = (state_11895[2]);var state_11895__$1 = state_11895;var statearr_11903_11922 = state_11895__$1;(statearr_11903_11922[2] = inst_11891);
(statearr_11903_11922[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 8))
{var inst_11882 = cljs.core.async.close_BANG_.call(null,to);var state_11895__$1 = state_11895;var statearr_11904_11923 = state_11895__$1;(statearr_11904_11923[2] = inst_11882);
(statearr_11904_11923[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 9))
{var state_11895__$1 = state_11895;var statearr_11905_11924 = state_11895__$1;(statearr_11905_11924[2] = null);
(statearr_11905_11924[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 10))
{var inst_11885 = (state_11895[2]);var state_11895__$1 = state_11895;var statearr_11906_11925 = state_11895__$1;(statearr_11906_11925[2] = inst_11885);
(statearr_11906_11925[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11896 === 11))
{var inst_11888 = (state_11895[2]);var state_11895__$1 = (function (){var statearr_11907 = state_11895;(statearr_11907[8] = inst_11888);
return statearr_11907;
})();var statearr_11908_11926 = state_11895__$1;(statearr_11908_11926[2] = null);
(statearr_11908_11926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_11912 = [null,null,null,null,null,null,null,null,null];(statearr_11912[0] = state_machine__6782__auto__);
(statearr_11912[1] = 1);
return statearr_11912;
});
var state_machine__6782__auto____1 = (function (state_11895){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_11895);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e11913){if((e11913 instanceof Object))
{var ex__6785__auto__ = e11913;var statearr_11914_11927 = state_11895;(statearr_11914_11927[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11895);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11928 = state_11895;
state_11895 = G__11928;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_11895){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_11895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_11915 = f__6797__auto__.call(null);(statearr_11915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___11916);
return statearr_11915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6796__auto___12015 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_11993){var state_val_11994 = (state_11993[1]);if((state_val_11994 === 1))
{var state_11993__$1 = state_11993;var statearr_11995_12016 = state_11993__$1;(statearr_11995_12016[2] = null);
(statearr_11995_12016[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11994 === 2))
{var state_11993__$1 = state_11993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11993__$1,4,ch);
} else
{if((state_val_11994 === 3))
{var inst_11991 = (state_11993[2]);var state_11993__$1 = state_11993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11993__$1,inst_11991);
} else
{if((state_val_11994 === 4))
{var inst_11974 = (state_11993[7]);var inst_11974__$1 = (state_11993[2]);var inst_11975 = (inst_11974__$1 == null);var state_11993__$1 = (function (){var statearr_11996 = state_11993;(statearr_11996[7] = inst_11974__$1);
return statearr_11996;
})();if(cljs.core.truth_(inst_11975))
{var statearr_11997_12017 = state_11993__$1;(statearr_11997_12017[1] = 5);
} else
{var statearr_11998_12018 = state_11993__$1;(statearr_11998_12018[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11994 === 5))
{var inst_11977 = cljs.core.async.close_BANG_.call(null,tc);var inst_11978 = cljs.core.async.close_BANG_.call(null,fc);var state_11993__$1 = (function (){var statearr_11999 = state_11993;(statearr_11999[8] = inst_11977);
return statearr_11999;
})();var statearr_12000_12019 = state_11993__$1;(statearr_12000_12019[2] = inst_11978);
(statearr_12000_12019[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11994 === 6))
{var inst_11974 = (state_11993[7]);var inst_11980 = p.call(null,inst_11974);var state_11993__$1 = state_11993;if(cljs.core.truth_(inst_11980))
{var statearr_12001_12020 = state_11993__$1;(statearr_12001_12020[1] = 9);
} else
{var statearr_12002_12021 = state_11993__$1;(statearr_12002_12021[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11994 === 7))
{var inst_11989 = (state_11993[2]);var state_11993__$1 = state_11993;var statearr_12003_12022 = state_11993__$1;(statearr_12003_12022[2] = inst_11989);
(statearr_12003_12022[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11994 === 8))
{var inst_11986 = (state_11993[2]);var state_11993__$1 = (function (){var statearr_12004 = state_11993;(statearr_12004[9] = inst_11986);
return statearr_12004;
})();var statearr_12005_12023 = state_11993__$1;(statearr_12005_12023[2] = null);
(statearr_12005_12023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11994 === 9))
{var state_11993__$1 = state_11993;var statearr_12006_12024 = state_11993__$1;(statearr_12006_12024[2] = tc);
(statearr_12006_12024[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11994 === 10))
{var state_11993__$1 = state_11993;var statearr_12007_12025 = state_11993__$1;(statearr_12007_12025[2] = fc);
(statearr_12007_12025[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11994 === 11))
{var inst_11974 = (state_11993[7]);var inst_11984 = (state_11993[2]);var state_11993__$1 = state_11993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11993__$1,8,inst_11984,inst_11974);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_12011 = [null,null,null,null,null,null,null,null,null,null];(statearr_12011[0] = state_machine__6782__auto__);
(statearr_12011[1] = 1);
return statearr_12011;
});
var state_machine__6782__auto____1 = (function (state_11993){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_11993);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e12012){if((e12012 instanceof Object))
{var ex__6785__auto__ = e12012;var statearr_12013_12026 = state_11993;(statearr_12013_12026[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11993);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12027 = state_11993;
state_11993 = G__12027;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_11993){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_11993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_12014 = f__6797__auto__.call(null);(statearr_12014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___12015);
return statearr_12014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6796__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_12074){var state_val_12075 = (state_12074[1]);if((state_val_12075 === 7))
{var inst_12070 = (state_12074[2]);var state_12074__$1 = state_12074;var statearr_12076_12092 = state_12074__$1;(statearr_12076_12092[2] = inst_12070);
(statearr_12076_12092[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 6))
{var inst_12060 = (state_12074[7]);var inst_12063 = (state_12074[8]);var inst_12067 = f.call(null,inst_12060,inst_12063);var inst_12060__$1 = inst_12067;var state_12074__$1 = (function (){var statearr_12077 = state_12074;(statearr_12077[7] = inst_12060__$1);
return statearr_12077;
})();var statearr_12078_12093 = state_12074__$1;(statearr_12078_12093[2] = null);
(statearr_12078_12093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 5))
{var inst_12060 = (state_12074[7]);var state_12074__$1 = state_12074;var statearr_12079_12094 = state_12074__$1;(statearr_12079_12094[2] = inst_12060);
(statearr_12079_12094[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 4))
{var inst_12063 = (state_12074[8]);var inst_12063__$1 = (state_12074[2]);var inst_12064 = (inst_12063__$1 == null);var state_12074__$1 = (function (){var statearr_12080 = state_12074;(statearr_12080[8] = inst_12063__$1);
return statearr_12080;
})();if(cljs.core.truth_(inst_12064))
{var statearr_12081_12095 = state_12074__$1;(statearr_12081_12095[1] = 5);
} else
{var statearr_12082_12096 = state_12074__$1;(statearr_12082_12096[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 3))
{var inst_12072 = (state_12074[2]);var state_12074__$1 = state_12074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12074__$1,inst_12072);
} else
{if((state_val_12075 === 2))
{var state_12074__$1 = state_12074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12074__$1,4,ch);
} else
{if((state_val_12075 === 1))
{var inst_12060 = init;var state_12074__$1 = (function (){var statearr_12083 = state_12074;(statearr_12083[7] = inst_12060);
return statearr_12083;
})();var statearr_12084_12097 = state_12074__$1;(statearr_12084_12097[2] = null);
(statearr_12084_12097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_12088 = [null,null,null,null,null,null,null,null,null];(statearr_12088[0] = state_machine__6782__auto__);
(statearr_12088[1] = 1);
return statearr_12088;
});
var state_machine__6782__auto____1 = (function (state_12074){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_12074);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e12089){if((e12089 instanceof Object))
{var ex__6785__auto__ = e12089;var statearr_12090_12098 = state_12074;(statearr_12090_12098[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12074);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12099 = state_12074;
state_12074 = G__12099;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_12074){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_12074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_12091 = f__6797__auto__.call(null);(statearr_12091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto__);
return statearr_12091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return c__6796__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6796__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_12161){var state_val_12162 = (state_12161[1]);if((state_val_12162 === 1))
{var inst_12141 = cljs.core.seq.call(null,coll);var inst_12142 = inst_12141;var state_12161__$1 = (function (){var statearr_12163 = state_12161;(statearr_12163[7] = inst_12142);
return statearr_12163;
})();var statearr_12164_12182 = state_12161__$1;(statearr_12164_12182[2] = null);
(statearr_12164_12182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12162 === 2))
{var inst_12142 = (state_12161[7]);var state_12161__$1 = state_12161;if(cljs.core.truth_(inst_12142))
{var statearr_12165_12183 = state_12161__$1;(statearr_12165_12183[1] = 4);
} else
{var statearr_12166_12184 = state_12161__$1;(statearr_12166_12184[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12162 === 3))
{var inst_12159 = (state_12161[2]);var state_12161__$1 = state_12161;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12161__$1,inst_12159);
} else
{if((state_val_12162 === 4))
{var inst_12142 = (state_12161[7]);var inst_12145 = cljs.core.first.call(null,inst_12142);var state_12161__$1 = state_12161;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12161__$1,7,ch,inst_12145);
} else
{if((state_val_12162 === 5))
{var state_12161__$1 = state_12161;if(cljs.core.truth_(close_QMARK_))
{var statearr_12167_12185 = state_12161__$1;(statearr_12167_12185[1] = 8);
} else
{var statearr_12168_12186 = state_12161__$1;(statearr_12168_12186[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12162 === 6))
{var inst_12157 = (state_12161[2]);var state_12161__$1 = state_12161;var statearr_12169_12187 = state_12161__$1;(statearr_12169_12187[2] = inst_12157);
(statearr_12169_12187[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12162 === 7))
{var inst_12142 = (state_12161[7]);var inst_12147 = (state_12161[2]);var inst_12148 = cljs.core.next.call(null,inst_12142);var inst_12142__$1 = inst_12148;var state_12161__$1 = (function (){var statearr_12170 = state_12161;(statearr_12170[7] = inst_12142__$1);
(statearr_12170[8] = inst_12147);
return statearr_12170;
})();var statearr_12171_12188 = state_12161__$1;(statearr_12171_12188[2] = null);
(statearr_12171_12188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12162 === 8))
{var inst_12152 = cljs.core.async.close_BANG_.call(null,ch);var state_12161__$1 = state_12161;var statearr_12172_12189 = state_12161__$1;(statearr_12172_12189[2] = inst_12152);
(statearr_12172_12189[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12162 === 9))
{var state_12161__$1 = state_12161;var statearr_12173_12190 = state_12161__$1;(statearr_12173_12190[2] = null);
(statearr_12173_12190[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12162 === 10))
{var inst_12155 = (state_12161[2]);var state_12161__$1 = state_12161;var statearr_12174_12191 = state_12161__$1;(statearr_12174_12191[2] = inst_12155);
(statearr_12174_12191[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_12178 = [null,null,null,null,null,null,null,null,null];(statearr_12178[0] = state_machine__6782__auto__);
(statearr_12178[1] = 1);
return statearr_12178;
});
var state_machine__6782__auto____1 = (function (state_12161){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_12161);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e12179){if((e12179 instanceof Object))
{var ex__6785__auto__ = e12179;var statearr_12180_12192 = state_12161;(statearr_12180_12192[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12161);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12193 = state_12161;
state_12161 = G__12193;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_12161){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_12161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_12181 = f__6797__auto__.call(null);(statearr_12181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto__);
return statearr_12181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return c__6796__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12195 = {};return obj12195;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12197 = {};return obj12197;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12421 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12421 = (function (cs,ch,mult,meta12422){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12422 = meta12422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12421.cljs$lang$type = true;
cljs.core.async.t12421.cljs$lang$ctorStr = "cljs.core.async/t12421";
cljs.core.async.t12421.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12421");
});})(cs))
;
cljs.core.async.t12421.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12421.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12421.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12421.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12421.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12421.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12423){var self__ = this;
var _12423__$1 = this;return self__.meta12422;
});})(cs))
;
cljs.core.async.t12421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12423,meta12422__$1){var self__ = this;
var _12423__$1 = this;return (new cljs.core.async.t12421(self__.cs,self__.ch,self__.mult,meta12422__$1));
});})(cs))
;
cljs.core.async.__GT_t12421 = ((function (cs){
return (function __GT_t12421(cs__$1,ch__$1,mult__$1,meta12422){return (new cljs.core.async.t12421(cs__$1,ch__$1,mult__$1,meta12422));
});})(cs))
;
}
return (new cljs.core.async.t12421(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6796__auto___12644 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_12558){var state_val_12559 = (state_12558[1]);if((state_val_12559 === 32))
{var inst_12502 = (state_12558[7]);var inst_12426 = (state_12558[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12558,31,Object,null,30);var inst_12509 = cljs.core.async.put_BANG_.call(null,inst_12502,inst_12426,done);var state_12558__$1 = state_12558;var statearr_12560_12645 = state_12558__$1;(statearr_12560_12645[2] = inst_12509);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12558__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 1))
{var state_12558__$1 = state_12558;var statearr_12561_12646 = state_12558__$1;(statearr_12561_12646[2] = null);
(statearr_12561_12646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 33))
{var inst_12515 = (state_12558[9]);var inst_12517 = cljs.core.chunked_seq_QMARK_.call(null,inst_12515);var state_12558__$1 = state_12558;if(inst_12517)
{var statearr_12562_12647 = state_12558__$1;(statearr_12562_12647[1] = 36);
} else
{var statearr_12563_12648 = state_12558__$1;(statearr_12563_12648[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 2))
{var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12558__$1,4,ch);
} else
{if((state_val_12559 === 34))
{var state_12558__$1 = state_12558;var statearr_12564_12649 = state_12558__$1;(statearr_12564_12649[2] = null);
(statearr_12564_12649[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 3))
{var inst_12556 = (state_12558[2]);var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12558__$1,inst_12556);
} else
{if((state_val_12559 === 35))
{var inst_12540 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12565_12650 = state_12558__$1;(statearr_12565_12650[2] = inst_12540);
(statearr_12565_12650[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 4))
{var inst_12426 = (state_12558[8]);var inst_12426__$1 = (state_12558[2]);var inst_12427 = (inst_12426__$1 == null);var state_12558__$1 = (function (){var statearr_12566 = state_12558;(statearr_12566[8] = inst_12426__$1);
return statearr_12566;
})();if(cljs.core.truth_(inst_12427))
{var statearr_12567_12651 = state_12558__$1;(statearr_12567_12651[1] = 5);
} else
{var statearr_12568_12652 = state_12558__$1;(statearr_12568_12652[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 36))
{var inst_12515 = (state_12558[9]);var inst_12519 = cljs.core.chunk_first.call(null,inst_12515);var inst_12520 = cljs.core.chunk_rest.call(null,inst_12515);var inst_12521 = cljs.core.count.call(null,inst_12519);var inst_12494 = inst_12520;var inst_12495 = inst_12519;var inst_12496 = inst_12521;var inst_12497 = 0;var state_12558__$1 = (function (){var statearr_12569 = state_12558;(statearr_12569[10] = inst_12497);
(statearr_12569[11] = inst_12495);
(statearr_12569[12] = inst_12496);
(statearr_12569[13] = inst_12494);
return statearr_12569;
})();var statearr_12570_12653 = state_12558__$1;(statearr_12570_12653[2] = null);
(statearr_12570_12653[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 5))
{var inst_12433 = cljs.core.deref.call(null,cs);var inst_12434 = cljs.core.seq.call(null,inst_12433);var inst_12435 = inst_12434;var inst_12436 = null;var inst_12437 = 0;var inst_12438 = 0;var state_12558__$1 = (function (){var statearr_12571 = state_12558;(statearr_12571[14] = inst_12435);
(statearr_12571[15] = inst_12436);
(statearr_12571[16] = inst_12437);
(statearr_12571[17] = inst_12438);
return statearr_12571;
})();var statearr_12572_12654 = state_12558__$1;(statearr_12572_12654[2] = null);
(statearr_12572_12654[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 37))
{var inst_12515 = (state_12558[9]);var inst_12524 = cljs.core.first.call(null,inst_12515);var state_12558__$1 = (function (){var statearr_12573 = state_12558;(statearr_12573[18] = inst_12524);
return statearr_12573;
})();var statearr_12574_12655 = state_12558__$1;(statearr_12574_12655[2] = null);
(statearr_12574_12655[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 6))
{var inst_12486 = (state_12558[19]);var inst_12485 = cljs.core.deref.call(null,cs);var inst_12486__$1 = cljs.core.keys.call(null,inst_12485);var inst_12487 = cljs.core.count.call(null,inst_12486__$1);var inst_12488 = cljs.core.reset_BANG_.call(null,dctr,inst_12487);var inst_12493 = cljs.core.seq.call(null,inst_12486__$1);var inst_12494 = inst_12493;var inst_12495 = null;var inst_12496 = 0;var inst_12497 = 0;var state_12558__$1 = (function (){var statearr_12575 = state_12558;(statearr_12575[10] = inst_12497);
(statearr_12575[11] = inst_12495);
(statearr_12575[12] = inst_12496);
(statearr_12575[13] = inst_12494);
(statearr_12575[20] = inst_12488);
(statearr_12575[19] = inst_12486__$1);
return statearr_12575;
})();var statearr_12576_12656 = state_12558__$1;(statearr_12576_12656[2] = null);
(statearr_12576_12656[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 38))
{var inst_12537 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12577_12657 = state_12558__$1;(statearr_12577_12657[2] = inst_12537);
(statearr_12577_12657[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 7))
{var inst_12554 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12578_12658 = state_12558__$1;(statearr_12578_12658[2] = inst_12554);
(statearr_12578_12658[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 39))
{var inst_12515 = (state_12558[9]);var inst_12533 = (state_12558[2]);var inst_12534 = cljs.core.next.call(null,inst_12515);var inst_12494 = inst_12534;var inst_12495 = null;var inst_12496 = 0;var inst_12497 = 0;var state_12558__$1 = (function (){var statearr_12579 = state_12558;(statearr_12579[21] = inst_12533);
(statearr_12579[10] = inst_12497);
(statearr_12579[11] = inst_12495);
(statearr_12579[12] = inst_12496);
(statearr_12579[13] = inst_12494);
return statearr_12579;
})();var statearr_12580_12659 = state_12558__$1;(statearr_12580_12659[2] = null);
(statearr_12580_12659[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 8))
{var inst_12437 = (state_12558[16]);var inst_12438 = (state_12558[17]);var inst_12440 = (inst_12438 < inst_12437);var inst_12441 = inst_12440;var state_12558__$1 = state_12558;if(cljs.core.truth_(inst_12441))
{var statearr_12581_12660 = state_12558__$1;(statearr_12581_12660[1] = 10);
} else
{var statearr_12582_12661 = state_12558__$1;(statearr_12582_12661[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 40))
{var inst_12524 = (state_12558[18]);var inst_12525 = (state_12558[2]);var inst_12526 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12527 = cljs.core.async.untap_STAR_.call(null,m,inst_12524);var state_12558__$1 = (function (){var statearr_12583 = state_12558;(statearr_12583[22] = inst_12525);
(statearr_12583[23] = inst_12526);
return statearr_12583;
})();var statearr_12584_12662 = state_12558__$1;(statearr_12584_12662[2] = inst_12527);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12558__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 9))
{var inst_12483 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12585_12663 = state_12558__$1;(statearr_12585_12663[2] = inst_12483);
(statearr_12585_12663[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 41))
{var inst_12426 = (state_12558[8]);var inst_12524 = (state_12558[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12558,40,Object,null,39);var inst_12531 = cljs.core.async.put_BANG_.call(null,inst_12524,inst_12426,done);var state_12558__$1 = state_12558;var statearr_12586_12664 = state_12558__$1;(statearr_12586_12664[2] = inst_12531);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12558__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 10))
{var inst_12436 = (state_12558[15]);var inst_12438 = (state_12558[17]);var inst_12444 = cljs.core._nth.call(null,inst_12436,inst_12438);var inst_12445 = cljs.core.nth.call(null,inst_12444,0,null);var inst_12446 = cljs.core.nth.call(null,inst_12444,1,null);var state_12558__$1 = (function (){var statearr_12587 = state_12558;(statearr_12587[24] = inst_12445);
return statearr_12587;
})();if(cljs.core.truth_(inst_12446))
{var statearr_12588_12665 = state_12558__$1;(statearr_12588_12665[1] = 13);
} else
{var statearr_12589_12666 = state_12558__$1;(statearr_12589_12666[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 42))
{var state_12558__$1 = state_12558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12558__$1,45,dchan);
} else
{if((state_val_12559 === 11))
{var inst_12455 = (state_12558[25]);var inst_12435 = (state_12558[14]);var inst_12455__$1 = cljs.core.seq.call(null,inst_12435);var state_12558__$1 = (function (){var statearr_12590 = state_12558;(statearr_12590[25] = inst_12455__$1);
return statearr_12590;
})();if(inst_12455__$1)
{var statearr_12591_12667 = state_12558__$1;(statearr_12591_12667[1] = 16);
} else
{var statearr_12592_12668 = state_12558__$1;(statearr_12592_12668[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 43))
{var state_12558__$1 = state_12558;var statearr_12593_12669 = state_12558__$1;(statearr_12593_12669[2] = null);
(statearr_12593_12669[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 12))
{var inst_12481 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12594_12670 = state_12558__$1;(statearr_12594_12670[2] = inst_12481);
(statearr_12594_12670[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 44))
{var inst_12551 = (state_12558[2]);var state_12558__$1 = (function (){var statearr_12595 = state_12558;(statearr_12595[26] = inst_12551);
return statearr_12595;
})();var statearr_12596_12671 = state_12558__$1;(statearr_12596_12671[2] = null);
(statearr_12596_12671[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 13))
{var inst_12445 = (state_12558[24]);var inst_12448 = cljs.core.async.close_BANG_.call(null,inst_12445);var state_12558__$1 = state_12558;var statearr_12597_12672 = state_12558__$1;(statearr_12597_12672[2] = inst_12448);
(statearr_12597_12672[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 45))
{var inst_12548 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12601_12673 = state_12558__$1;(statearr_12601_12673[2] = inst_12548);
(statearr_12601_12673[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 14))
{var state_12558__$1 = state_12558;var statearr_12602_12674 = state_12558__$1;(statearr_12602_12674[2] = null);
(statearr_12602_12674[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 15))
{var inst_12435 = (state_12558[14]);var inst_12436 = (state_12558[15]);var inst_12437 = (state_12558[16]);var inst_12438 = (state_12558[17]);var inst_12451 = (state_12558[2]);var inst_12452 = (inst_12438 + 1);var tmp12598 = inst_12435;var tmp12599 = inst_12436;var tmp12600 = inst_12437;var inst_12435__$1 = tmp12598;var inst_12436__$1 = tmp12599;var inst_12437__$1 = tmp12600;var inst_12438__$1 = inst_12452;var state_12558__$1 = (function (){var statearr_12603 = state_12558;(statearr_12603[27] = inst_12451);
(statearr_12603[14] = inst_12435__$1);
(statearr_12603[15] = inst_12436__$1);
(statearr_12603[16] = inst_12437__$1);
(statearr_12603[17] = inst_12438__$1);
return statearr_12603;
})();var statearr_12604_12675 = state_12558__$1;(statearr_12604_12675[2] = null);
(statearr_12604_12675[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 16))
{var inst_12455 = (state_12558[25]);var inst_12457 = cljs.core.chunked_seq_QMARK_.call(null,inst_12455);var state_12558__$1 = state_12558;if(inst_12457)
{var statearr_12605_12676 = state_12558__$1;(statearr_12605_12676[1] = 19);
} else
{var statearr_12606_12677 = state_12558__$1;(statearr_12606_12677[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 17))
{var state_12558__$1 = state_12558;var statearr_12607_12678 = state_12558__$1;(statearr_12607_12678[2] = null);
(statearr_12607_12678[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 18))
{var inst_12479 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12608_12679 = state_12558__$1;(statearr_12608_12679[2] = inst_12479);
(statearr_12608_12679[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 19))
{var inst_12455 = (state_12558[25]);var inst_12459 = cljs.core.chunk_first.call(null,inst_12455);var inst_12460 = cljs.core.chunk_rest.call(null,inst_12455);var inst_12461 = cljs.core.count.call(null,inst_12459);var inst_12435 = inst_12460;var inst_12436 = inst_12459;var inst_12437 = inst_12461;var inst_12438 = 0;var state_12558__$1 = (function (){var statearr_12609 = state_12558;(statearr_12609[14] = inst_12435);
(statearr_12609[15] = inst_12436);
(statearr_12609[16] = inst_12437);
(statearr_12609[17] = inst_12438);
return statearr_12609;
})();var statearr_12610_12680 = state_12558__$1;(statearr_12610_12680[2] = null);
(statearr_12610_12680[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 20))
{var inst_12455 = (state_12558[25]);var inst_12465 = cljs.core.first.call(null,inst_12455);var inst_12466 = cljs.core.nth.call(null,inst_12465,0,null);var inst_12467 = cljs.core.nth.call(null,inst_12465,1,null);var state_12558__$1 = (function (){var statearr_12611 = state_12558;(statearr_12611[28] = inst_12466);
return statearr_12611;
})();if(cljs.core.truth_(inst_12467))
{var statearr_12612_12681 = state_12558__$1;(statearr_12612_12681[1] = 22);
} else
{var statearr_12613_12682 = state_12558__$1;(statearr_12613_12682[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 21))
{var inst_12476 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12614_12683 = state_12558__$1;(statearr_12614_12683[2] = inst_12476);
(statearr_12614_12683[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 22))
{var inst_12466 = (state_12558[28]);var inst_12469 = cljs.core.async.close_BANG_.call(null,inst_12466);var state_12558__$1 = state_12558;var statearr_12615_12684 = state_12558__$1;(statearr_12615_12684[2] = inst_12469);
(statearr_12615_12684[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 23))
{var state_12558__$1 = state_12558;var statearr_12616_12685 = state_12558__$1;(statearr_12616_12685[2] = null);
(statearr_12616_12685[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 24))
{var inst_12455 = (state_12558[25]);var inst_12472 = (state_12558[2]);var inst_12473 = cljs.core.next.call(null,inst_12455);var inst_12435 = inst_12473;var inst_12436 = null;var inst_12437 = 0;var inst_12438 = 0;var state_12558__$1 = (function (){var statearr_12617 = state_12558;(statearr_12617[29] = inst_12472);
(statearr_12617[14] = inst_12435);
(statearr_12617[15] = inst_12436);
(statearr_12617[16] = inst_12437);
(statearr_12617[17] = inst_12438);
return statearr_12617;
})();var statearr_12618_12686 = state_12558__$1;(statearr_12618_12686[2] = null);
(statearr_12618_12686[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 25))
{var inst_12497 = (state_12558[10]);var inst_12496 = (state_12558[12]);var inst_12499 = (inst_12497 < inst_12496);var inst_12500 = inst_12499;var state_12558__$1 = state_12558;if(cljs.core.truth_(inst_12500))
{var statearr_12619_12687 = state_12558__$1;(statearr_12619_12687[1] = 27);
} else
{var statearr_12620_12688 = state_12558__$1;(statearr_12620_12688[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 26))
{var inst_12486 = (state_12558[19]);var inst_12544 = (state_12558[2]);var inst_12545 = cljs.core.seq.call(null,inst_12486);var state_12558__$1 = (function (){var statearr_12621 = state_12558;(statearr_12621[30] = inst_12544);
return statearr_12621;
})();if(inst_12545)
{var statearr_12622_12689 = state_12558__$1;(statearr_12622_12689[1] = 42);
} else
{var statearr_12623_12690 = state_12558__$1;(statearr_12623_12690[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 27))
{var inst_12497 = (state_12558[10]);var inst_12495 = (state_12558[11]);var inst_12502 = cljs.core._nth.call(null,inst_12495,inst_12497);var state_12558__$1 = (function (){var statearr_12624 = state_12558;(statearr_12624[7] = inst_12502);
return statearr_12624;
})();var statearr_12625_12691 = state_12558__$1;(statearr_12625_12691[2] = null);
(statearr_12625_12691[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 28))
{var inst_12494 = (state_12558[13]);var inst_12515 = (state_12558[9]);var inst_12515__$1 = cljs.core.seq.call(null,inst_12494);var state_12558__$1 = (function (){var statearr_12629 = state_12558;(statearr_12629[9] = inst_12515__$1);
return statearr_12629;
})();if(inst_12515__$1)
{var statearr_12630_12692 = state_12558__$1;(statearr_12630_12692[1] = 33);
} else
{var statearr_12631_12693 = state_12558__$1;(statearr_12631_12693[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 29))
{var inst_12542 = (state_12558[2]);var state_12558__$1 = state_12558;var statearr_12632_12694 = state_12558__$1;(statearr_12632_12694[2] = inst_12542);
(statearr_12632_12694[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 30))
{var inst_12497 = (state_12558[10]);var inst_12495 = (state_12558[11]);var inst_12496 = (state_12558[12]);var inst_12494 = (state_12558[13]);var inst_12511 = (state_12558[2]);var inst_12512 = (inst_12497 + 1);var tmp12626 = inst_12495;var tmp12627 = inst_12496;var tmp12628 = inst_12494;var inst_12494__$1 = tmp12628;var inst_12495__$1 = tmp12626;var inst_12496__$1 = tmp12627;var inst_12497__$1 = inst_12512;var state_12558__$1 = (function (){var statearr_12633 = state_12558;(statearr_12633[31] = inst_12511);
(statearr_12633[10] = inst_12497__$1);
(statearr_12633[11] = inst_12495__$1);
(statearr_12633[12] = inst_12496__$1);
(statearr_12633[13] = inst_12494__$1);
return statearr_12633;
})();var statearr_12634_12695 = state_12558__$1;(statearr_12634_12695[2] = null);
(statearr_12634_12695[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12559 === 31))
{var inst_12502 = (state_12558[7]);var inst_12503 = (state_12558[2]);var inst_12504 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12505 = cljs.core.async.untap_STAR_.call(null,m,inst_12502);var state_12558__$1 = (function (){var statearr_12635 = state_12558;(statearr_12635[32] = inst_12503);
(statearr_12635[33] = inst_12504);
return statearr_12635;
})();var statearr_12636_12696 = state_12558__$1;(statearr_12636_12696[2] = inst_12505);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12558__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_12640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12640[0] = state_machine__6782__auto__);
(statearr_12640[1] = 1);
return statearr_12640;
});
var state_machine__6782__auto____1 = (function (state_12558){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_12558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e12641){if((e12641 instanceof Object))
{var ex__6785__auto__ = e12641;var statearr_12642_12697 = state_12558;(statearr_12642_12697[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12558);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12698 = state_12558;
state_12558 = G__12698;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_12558){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_12558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_12643 = f__6797__auto__.call(null);(statearr_12643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___12644);
return statearr_12643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12700 = {};return obj12700;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12810 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12810 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12811){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12811 = meta12811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12810.cljs$lang$type = true;
cljs.core.async.t12810.cljs$lang$ctorStr = "cljs.core.async/t12810";
cljs.core.async.t12810.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12810");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12810.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12810.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12810.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12810.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12810.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12810.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12810.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12810.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12810.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12812){var self__ = this;
var _12812__$1 = this;return self__.meta12811;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12812,meta12811__$1){var self__ = this;
var _12812__$1 = this;return (new cljs.core.async.t12810(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12811__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12810 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12810(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12811){return (new cljs.core.async.t12810(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12811));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12810(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6796__auto___12919 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_12877){var state_val_12878 = (state_12877[1]);if((state_val_12878 === 1))
{var inst_12816 = (state_12877[7]);var inst_12816__$1 = calc_state.call(null);var inst_12817 = cljs.core.seq_QMARK_.call(null,inst_12816__$1);var state_12877__$1 = (function (){var statearr_12879 = state_12877;(statearr_12879[7] = inst_12816__$1);
return statearr_12879;
})();if(inst_12817)
{var statearr_12880_12920 = state_12877__$1;(statearr_12880_12920[1] = 2);
} else
{var statearr_12881_12921 = state_12877__$1;(statearr_12881_12921[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 2))
{var inst_12816 = (state_12877[7]);var inst_12819 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12816);var state_12877__$1 = state_12877;var statearr_12882_12922 = state_12877__$1;(statearr_12882_12922[2] = inst_12819);
(statearr_12882_12922[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 3))
{var inst_12816 = (state_12877[7]);var state_12877__$1 = state_12877;var statearr_12883_12923 = state_12877__$1;(statearr_12883_12923[2] = inst_12816);
(statearr_12883_12923[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 4))
{var inst_12816 = (state_12877[7]);var inst_12822 = (state_12877[2]);var inst_12823 = cljs.core.get.call(null,inst_12822,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12824 = cljs.core.get.call(null,inst_12822,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12825 = cljs.core.get.call(null,inst_12822,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12826 = inst_12816;var state_12877__$1 = (function (){var statearr_12884 = state_12877;(statearr_12884[8] = inst_12823);
(statearr_12884[9] = inst_12825);
(statearr_12884[10] = inst_12824);
(statearr_12884[11] = inst_12826);
return statearr_12884;
})();var statearr_12885_12924 = state_12877__$1;(statearr_12885_12924[2] = null);
(statearr_12885_12924[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 5))
{var inst_12826 = (state_12877[11]);var inst_12829 = cljs.core.seq_QMARK_.call(null,inst_12826);var state_12877__$1 = state_12877;if(inst_12829)
{var statearr_12886_12925 = state_12877__$1;(statearr_12886_12925[1] = 7);
} else
{var statearr_12887_12926 = state_12877__$1;(statearr_12887_12926[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 6))
{var inst_12875 = (state_12877[2]);var state_12877__$1 = state_12877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12877__$1,inst_12875);
} else
{if((state_val_12878 === 7))
{var inst_12826 = (state_12877[11]);var inst_12831 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12826);var state_12877__$1 = state_12877;var statearr_12888_12927 = state_12877__$1;(statearr_12888_12927[2] = inst_12831);
(statearr_12888_12927[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 8))
{var inst_12826 = (state_12877[11]);var state_12877__$1 = state_12877;var statearr_12889_12928 = state_12877__$1;(statearr_12889_12928[2] = inst_12826);
(statearr_12889_12928[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 9))
{var inst_12834 = (state_12877[12]);var inst_12834__$1 = (state_12877[2]);var inst_12835 = cljs.core.get.call(null,inst_12834__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12836 = cljs.core.get.call(null,inst_12834__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12837 = cljs.core.get.call(null,inst_12834__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12877__$1 = (function (){var statearr_12890 = state_12877;(statearr_12890[13] = inst_12836);
(statearr_12890[14] = inst_12837);
(statearr_12890[12] = inst_12834__$1);
return statearr_12890;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12877__$1,10,inst_12835);
} else
{if((state_val_12878 === 10))
{var inst_12842 = (state_12877[15]);var inst_12841 = (state_12877[16]);var inst_12840 = (state_12877[2]);var inst_12841__$1 = cljs.core.nth.call(null,inst_12840,0,null);var inst_12842__$1 = cljs.core.nth.call(null,inst_12840,1,null);var inst_12843 = (inst_12841__$1 == null);var inst_12844 = cljs.core._EQ_.call(null,inst_12842__$1,change);var inst_12845 = (inst_12843) || (inst_12844);var state_12877__$1 = (function (){var statearr_12891 = state_12877;(statearr_12891[15] = inst_12842__$1);
(statearr_12891[16] = inst_12841__$1);
return statearr_12891;
})();if(cljs.core.truth_(inst_12845))
{var statearr_12892_12929 = state_12877__$1;(statearr_12892_12929[1] = 11);
} else
{var statearr_12893_12930 = state_12877__$1;(statearr_12893_12930[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 11))
{var inst_12841 = (state_12877[16]);var inst_12847 = (inst_12841 == null);var state_12877__$1 = state_12877;if(cljs.core.truth_(inst_12847))
{var statearr_12894_12931 = state_12877__$1;(statearr_12894_12931[1] = 14);
} else
{var statearr_12895_12932 = state_12877__$1;(statearr_12895_12932[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 12))
{var inst_12837 = (state_12877[14]);var inst_12856 = (state_12877[17]);var inst_12842 = (state_12877[15]);var inst_12856__$1 = inst_12837.call(null,inst_12842);var state_12877__$1 = (function (){var statearr_12896 = state_12877;(statearr_12896[17] = inst_12856__$1);
return statearr_12896;
})();if(cljs.core.truth_(inst_12856__$1))
{var statearr_12897_12933 = state_12877__$1;(statearr_12897_12933[1] = 17);
} else
{var statearr_12898_12934 = state_12877__$1;(statearr_12898_12934[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 13))
{var inst_12873 = (state_12877[2]);var state_12877__$1 = state_12877;var statearr_12899_12935 = state_12877__$1;(statearr_12899_12935[2] = inst_12873);
(statearr_12899_12935[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 14))
{var inst_12842 = (state_12877[15]);var inst_12849 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12842);var state_12877__$1 = state_12877;var statearr_12900_12936 = state_12877__$1;(statearr_12900_12936[2] = inst_12849);
(statearr_12900_12936[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 15))
{var state_12877__$1 = state_12877;var statearr_12901_12937 = state_12877__$1;(statearr_12901_12937[2] = null);
(statearr_12901_12937[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 16))
{var inst_12852 = (state_12877[2]);var inst_12853 = calc_state.call(null);var inst_12826 = inst_12853;var state_12877__$1 = (function (){var statearr_12902 = state_12877;(statearr_12902[18] = inst_12852);
(statearr_12902[11] = inst_12826);
return statearr_12902;
})();var statearr_12903_12938 = state_12877__$1;(statearr_12903_12938[2] = null);
(statearr_12903_12938[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 17))
{var inst_12856 = (state_12877[17]);var state_12877__$1 = state_12877;var statearr_12904_12939 = state_12877__$1;(statearr_12904_12939[2] = inst_12856);
(statearr_12904_12939[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 18))
{var inst_12836 = (state_12877[13]);var inst_12837 = (state_12877[14]);var inst_12842 = (state_12877[15]);var inst_12859 = cljs.core.empty_QMARK_.call(null,inst_12837);var inst_12860 = inst_12836.call(null,inst_12842);var inst_12861 = cljs.core.not.call(null,inst_12860);var inst_12862 = (inst_12859) && (inst_12861);var state_12877__$1 = state_12877;var statearr_12905_12940 = state_12877__$1;(statearr_12905_12940[2] = inst_12862);
(statearr_12905_12940[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 19))
{var inst_12864 = (state_12877[2]);var state_12877__$1 = state_12877;if(cljs.core.truth_(inst_12864))
{var statearr_12906_12941 = state_12877__$1;(statearr_12906_12941[1] = 20);
} else
{var statearr_12907_12942 = state_12877__$1;(statearr_12907_12942[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 20))
{var inst_12841 = (state_12877[16]);var state_12877__$1 = state_12877;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12877__$1,23,out,inst_12841);
} else
{if((state_val_12878 === 21))
{var state_12877__$1 = state_12877;var statearr_12908_12943 = state_12877__$1;(statearr_12908_12943[2] = null);
(statearr_12908_12943[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 22))
{var inst_12834 = (state_12877[12]);var inst_12870 = (state_12877[2]);var inst_12826 = inst_12834;var state_12877__$1 = (function (){var statearr_12909 = state_12877;(statearr_12909[19] = inst_12870);
(statearr_12909[11] = inst_12826);
return statearr_12909;
})();var statearr_12910_12944 = state_12877__$1;(statearr_12910_12944[2] = null);
(statearr_12910_12944[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12878 === 23))
{var inst_12867 = (state_12877[2]);var state_12877__$1 = state_12877;var statearr_12911_12945 = state_12877__$1;(statearr_12911_12945[2] = inst_12867);
(statearr_12911_12945[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_12915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12915[0] = state_machine__6782__auto__);
(statearr_12915[1] = 1);
return statearr_12915;
});
var state_machine__6782__auto____1 = (function (state_12877){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_12877);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e12916){if((e12916 instanceof Object))
{var ex__6785__auto__ = e12916;var statearr_12917_12946 = state_12877;(statearr_12917_12946[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12877);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12947 = state_12877;
state_12877 = G__12947;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_12877){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_12877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_12918 = f__6797__auto__.call(null);(statearr_12918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___12919);
return statearr_12918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12949 = {};return obj12949;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__12950_SHARP_){if(cljs.core.truth_(p1__12950_SHARP_.call(null,topic)))
{return p1__12950_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12950_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13075 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13075 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13076){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13076 = meta13076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13075.cljs$lang$type = true;
cljs.core.async.t13075.cljs$lang$ctorStr = "cljs.core.async/t13075";
cljs.core.async.t13075.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13075");
});})(mults,ensure_mult))
;
cljs.core.async.t13075.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13075.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13075.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13075.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13075.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13075.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13075.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13077){var self__ = this;
var _13077__$1 = this;return self__.meta13076;
});})(mults,ensure_mult))
;
cljs.core.async.t13075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13077,meta13076__$1){var self__ = this;
var _13077__$1 = this;return (new cljs.core.async.t13075(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13076__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13075 = ((function (mults,ensure_mult){
return (function __GT_t13075(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13076){return (new cljs.core.async.t13075(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13076));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13075(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6796__auto___13199 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_13151){var state_val_13152 = (state_13151[1]);if((state_val_13152 === 1))
{var state_13151__$1 = state_13151;var statearr_13153_13200 = state_13151__$1;(statearr_13153_13200[2] = null);
(statearr_13153_13200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 2))
{var state_13151__$1 = state_13151;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13151__$1,4,ch);
} else
{if((state_val_13152 === 3))
{var inst_13149 = (state_13151[2]);var state_13151__$1 = state_13151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13151__$1,inst_13149);
} else
{if((state_val_13152 === 4))
{var inst_13080 = (state_13151[7]);var inst_13080__$1 = (state_13151[2]);var inst_13081 = (inst_13080__$1 == null);var state_13151__$1 = (function (){var statearr_13154 = state_13151;(statearr_13154[7] = inst_13080__$1);
return statearr_13154;
})();if(cljs.core.truth_(inst_13081))
{var statearr_13155_13201 = state_13151__$1;(statearr_13155_13201[1] = 5);
} else
{var statearr_13156_13202 = state_13151__$1;(statearr_13156_13202[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 5))
{var inst_13087 = cljs.core.deref.call(null,mults);var inst_13088 = cljs.core.vals.call(null,inst_13087);var inst_13089 = cljs.core.seq.call(null,inst_13088);var inst_13090 = inst_13089;var inst_13091 = null;var inst_13092 = 0;var inst_13093 = 0;var state_13151__$1 = (function (){var statearr_13157 = state_13151;(statearr_13157[8] = inst_13090);
(statearr_13157[9] = inst_13091);
(statearr_13157[10] = inst_13092);
(statearr_13157[11] = inst_13093);
return statearr_13157;
})();var statearr_13158_13203 = state_13151__$1;(statearr_13158_13203[2] = null);
(statearr_13158_13203[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 6))
{var inst_13080 = (state_13151[7]);var inst_13130 = (state_13151[12]);var inst_13128 = (state_13151[13]);var inst_13128__$1 = topic_fn.call(null,inst_13080);var inst_13129 = cljs.core.deref.call(null,mults);var inst_13130__$1 = cljs.core.get.call(null,inst_13129,inst_13128__$1);var state_13151__$1 = (function (){var statearr_13159 = state_13151;(statearr_13159[12] = inst_13130__$1);
(statearr_13159[13] = inst_13128__$1);
return statearr_13159;
})();if(cljs.core.truth_(inst_13130__$1))
{var statearr_13160_13204 = state_13151__$1;(statearr_13160_13204[1] = 19);
} else
{var statearr_13161_13205 = state_13151__$1;(statearr_13161_13205[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 7))
{var inst_13147 = (state_13151[2]);var state_13151__$1 = state_13151;var statearr_13162_13206 = state_13151__$1;(statearr_13162_13206[2] = inst_13147);
(statearr_13162_13206[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 8))
{var inst_13092 = (state_13151[10]);var inst_13093 = (state_13151[11]);var inst_13095 = (inst_13093 < inst_13092);var inst_13096 = inst_13095;var state_13151__$1 = state_13151;if(cljs.core.truth_(inst_13096))
{var statearr_13166_13207 = state_13151__$1;(statearr_13166_13207[1] = 10);
} else
{var statearr_13167_13208 = state_13151__$1;(statearr_13167_13208[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 9))
{var inst_13126 = (state_13151[2]);var state_13151__$1 = state_13151;var statearr_13168_13209 = state_13151__$1;(statearr_13168_13209[2] = inst_13126);
(statearr_13168_13209[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 10))
{var inst_13090 = (state_13151[8]);var inst_13091 = (state_13151[9]);var inst_13092 = (state_13151[10]);var inst_13093 = (state_13151[11]);var inst_13098 = cljs.core._nth.call(null,inst_13091,inst_13093);var inst_13099 = cljs.core.async.muxch_STAR_.call(null,inst_13098);var inst_13100 = cljs.core.async.close_BANG_.call(null,inst_13099);var inst_13101 = (inst_13093 + 1);var tmp13163 = inst_13090;var tmp13164 = inst_13091;var tmp13165 = inst_13092;var inst_13090__$1 = tmp13163;var inst_13091__$1 = tmp13164;var inst_13092__$1 = tmp13165;var inst_13093__$1 = inst_13101;var state_13151__$1 = (function (){var statearr_13169 = state_13151;(statearr_13169[8] = inst_13090__$1);
(statearr_13169[9] = inst_13091__$1);
(statearr_13169[10] = inst_13092__$1);
(statearr_13169[11] = inst_13093__$1);
(statearr_13169[14] = inst_13100);
return statearr_13169;
})();var statearr_13170_13210 = state_13151__$1;(statearr_13170_13210[2] = null);
(statearr_13170_13210[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 11))
{var inst_13090 = (state_13151[8]);var inst_13104 = (state_13151[15]);var inst_13104__$1 = cljs.core.seq.call(null,inst_13090);var state_13151__$1 = (function (){var statearr_13171 = state_13151;(statearr_13171[15] = inst_13104__$1);
return statearr_13171;
})();if(inst_13104__$1)
{var statearr_13172_13211 = state_13151__$1;(statearr_13172_13211[1] = 13);
} else
{var statearr_13173_13212 = state_13151__$1;(statearr_13173_13212[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 12))
{var inst_13124 = (state_13151[2]);var state_13151__$1 = state_13151;var statearr_13174_13213 = state_13151__$1;(statearr_13174_13213[2] = inst_13124);
(statearr_13174_13213[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 13))
{var inst_13104 = (state_13151[15]);var inst_13106 = cljs.core.chunked_seq_QMARK_.call(null,inst_13104);var state_13151__$1 = state_13151;if(inst_13106)
{var statearr_13175_13214 = state_13151__$1;(statearr_13175_13214[1] = 16);
} else
{var statearr_13176_13215 = state_13151__$1;(statearr_13176_13215[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 14))
{var state_13151__$1 = state_13151;var statearr_13177_13216 = state_13151__$1;(statearr_13177_13216[2] = null);
(statearr_13177_13216[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 15))
{var inst_13122 = (state_13151[2]);var state_13151__$1 = state_13151;var statearr_13178_13217 = state_13151__$1;(statearr_13178_13217[2] = inst_13122);
(statearr_13178_13217[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 16))
{var inst_13104 = (state_13151[15]);var inst_13108 = cljs.core.chunk_first.call(null,inst_13104);var inst_13109 = cljs.core.chunk_rest.call(null,inst_13104);var inst_13110 = cljs.core.count.call(null,inst_13108);var inst_13090 = inst_13109;var inst_13091 = inst_13108;var inst_13092 = inst_13110;var inst_13093 = 0;var state_13151__$1 = (function (){var statearr_13179 = state_13151;(statearr_13179[8] = inst_13090);
(statearr_13179[9] = inst_13091);
(statearr_13179[10] = inst_13092);
(statearr_13179[11] = inst_13093);
return statearr_13179;
})();var statearr_13180_13218 = state_13151__$1;(statearr_13180_13218[2] = null);
(statearr_13180_13218[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 17))
{var inst_13104 = (state_13151[15]);var inst_13113 = cljs.core.first.call(null,inst_13104);var inst_13114 = cljs.core.async.muxch_STAR_.call(null,inst_13113);var inst_13115 = cljs.core.async.close_BANG_.call(null,inst_13114);var inst_13116 = cljs.core.next.call(null,inst_13104);var inst_13090 = inst_13116;var inst_13091 = null;var inst_13092 = 0;var inst_13093 = 0;var state_13151__$1 = (function (){var statearr_13181 = state_13151;(statearr_13181[8] = inst_13090);
(statearr_13181[9] = inst_13091);
(statearr_13181[10] = inst_13092);
(statearr_13181[11] = inst_13093);
(statearr_13181[16] = inst_13115);
return statearr_13181;
})();var statearr_13182_13219 = state_13151__$1;(statearr_13182_13219[2] = null);
(statearr_13182_13219[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 18))
{var inst_13119 = (state_13151[2]);var state_13151__$1 = state_13151;var statearr_13183_13220 = state_13151__$1;(statearr_13183_13220[2] = inst_13119);
(statearr_13183_13220[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 19))
{var state_13151__$1 = state_13151;var statearr_13184_13221 = state_13151__$1;(statearr_13184_13221[2] = null);
(statearr_13184_13221[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 20))
{var state_13151__$1 = state_13151;var statearr_13185_13222 = state_13151__$1;(statearr_13185_13222[2] = null);
(statearr_13185_13222[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 21))
{var inst_13144 = (state_13151[2]);var state_13151__$1 = (function (){var statearr_13186 = state_13151;(statearr_13186[17] = inst_13144);
return statearr_13186;
})();var statearr_13187_13223 = state_13151__$1;(statearr_13187_13223[2] = null);
(statearr_13187_13223[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 22))
{var inst_13141 = (state_13151[2]);var state_13151__$1 = state_13151;var statearr_13188_13224 = state_13151__$1;(statearr_13188_13224[2] = inst_13141);
(statearr_13188_13224[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 23))
{var inst_13128 = (state_13151[13]);var inst_13132 = (state_13151[2]);var inst_13133 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13128);var state_13151__$1 = (function (){var statearr_13189 = state_13151;(statearr_13189[18] = inst_13132);
return statearr_13189;
})();var statearr_13190_13225 = state_13151__$1;(statearr_13190_13225[2] = inst_13133);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13151__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13152 === 24))
{var inst_13080 = (state_13151[7]);var inst_13130 = (state_13151[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13151,23,Object,null,22);var inst_13137 = cljs.core.async.muxch_STAR_.call(null,inst_13130);var state_13151__$1 = state_13151;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13151__$1,25,inst_13137,inst_13080);
} else
{if((state_val_13152 === 25))
{var inst_13139 = (state_13151[2]);var state_13151__$1 = state_13151;var statearr_13191_13226 = state_13151__$1;(statearr_13191_13226[2] = inst_13139);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13151__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_13195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13195[0] = state_machine__6782__auto__);
(statearr_13195[1] = 1);
return statearr_13195;
});
var state_machine__6782__auto____1 = (function (state_13151){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_13151);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e13196){if((e13196 instanceof Object))
{var ex__6785__auto__ = e13196;var statearr_13197_13227 = state_13151;(statearr_13197_13227[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13151);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13228 = state_13151;
state_13151 = G__13228;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_13151){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_13151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_13198 = f__6797__auto__.call(null);(statearr_13198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___13199);
return statearr_13198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6796__auto___13365 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_13335){var state_val_13336 = (state_13335[1]);if((state_val_13336 === 1))
{var state_13335__$1 = state_13335;var statearr_13337_13366 = state_13335__$1;(statearr_13337_13366[2] = null);
(statearr_13337_13366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13336 === 2))
{var inst_13298 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13299 = 0;var state_13335__$1 = (function (){var statearr_13338 = state_13335;(statearr_13338[7] = inst_13298);
(statearr_13338[8] = inst_13299);
return statearr_13338;
})();var statearr_13339_13367 = state_13335__$1;(statearr_13339_13367[2] = null);
(statearr_13339_13367[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13336 === 3))
{var inst_13333 = (state_13335[2]);var state_13335__$1 = state_13335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13335__$1,inst_13333);
} else
{if((state_val_13336 === 4))
{var inst_13299 = (state_13335[8]);var inst_13301 = (inst_13299 < cnt);var state_13335__$1 = state_13335;if(cljs.core.truth_(inst_13301))
{var statearr_13340_13368 = state_13335__$1;(statearr_13340_13368[1] = 6);
} else
{var statearr_13341_13369 = state_13335__$1;(statearr_13341_13369[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13336 === 5))
{var inst_13319 = (state_13335[2]);var state_13335__$1 = (function (){var statearr_13342 = state_13335;(statearr_13342[9] = inst_13319);
return statearr_13342;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13335__$1,12,dchan);
} else
{if((state_val_13336 === 6))
{var state_13335__$1 = state_13335;var statearr_13343_13370 = state_13335__$1;(statearr_13343_13370[2] = null);
(statearr_13343_13370[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13336 === 7))
{var state_13335__$1 = state_13335;var statearr_13344_13371 = state_13335__$1;(statearr_13344_13371[2] = null);
(statearr_13344_13371[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13336 === 8))
{var inst_13317 = (state_13335[2]);var state_13335__$1 = state_13335;var statearr_13345_13372 = state_13335__$1;(statearr_13345_13372[2] = inst_13317);
(statearr_13345_13372[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13336 === 9))
{var inst_13299 = (state_13335[8]);var inst_13312 = (state_13335[2]);var inst_13313 = (inst_13299 + 1);var inst_13299__$1 = inst_13313;var state_13335__$1 = (function (){var statearr_13346 = state_13335;(statearr_13346[10] = inst_13312);
(statearr_13346[8] = inst_13299__$1);
return statearr_13346;
})();var statearr_13347_13373 = state_13335__$1;(statearr_13347_13373[2] = null);
(statearr_13347_13373[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13336 === 10))
{var inst_13303 = (state_13335[2]);var inst_13304 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13335__$1 = (function (){var statearr_13348 = state_13335;(statearr_13348[11] = inst_13303);
return statearr_13348;
})();var statearr_13349_13374 = state_13335__$1;(statearr_13349_13374[2] = inst_13304);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13335__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13336 === 11))
{var inst_13299 = (state_13335[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13335,10,Object,null,9);var inst_13308 = chs__$1.call(null,inst_13299);var inst_13309 = done.call(null,inst_13299);var inst_13310 = cljs.core.async.take_BANG_.call(null,inst_13308,inst_13309);var state_13335__$1 = state_13335;var statearr_13350_13375 = state_13335__$1;(statearr_13350_13375[2] = inst_13310);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13335__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13336 === 12))
{var inst_13321 = (state_13335[12]);var inst_13321__$1 = (state_13335[2]);var inst_13322 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13321__$1);var state_13335__$1 = (function (){var statearr_13351 = state_13335;(statearr_13351[12] = inst_13321__$1);
return statearr_13351;
})();if(cljs.core.truth_(inst_13322))
{var statearr_13352_13376 = state_13335__$1;(statearr_13352_13376[1] = 13);
} else
{var statearr_13353_13377 = state_13335__$1;(statearr_13353_13377[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13336 === 13))
{var inst_13324 = cljs.core.async.close_BANG_.call(null,out);var state_13335__$1 = state_13335;var statearr_13354_13378 = state_13335__$1;(statearr_13354_13378[2] = inst_13324);
(statearr_13354_13378[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13336 === 14))
{var inst_13321 = (state_13335[12]);var inst_13326 = cljs.core.apply.call(null,f,inst_13321);var state_13335__$1 = state_13335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13335__$1,16,out,inst_13326);
} else
{if((state_val_13336 === 15))
{var inst_13331 = (state_13335[2]);var state_13335__$1 = state_13335;var statearr_13355_13379 = state_13335__$1;(statearr_13355_13379[2] = inst_13331);
(statearr_13355_13379[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13336 === 16))
{var inst_13328 = (state_13335[2]);var state_13335__$1 = (function (){var statearr_13356 = state_13335;(statearr_13356[13] = inst_13328);
return statearr_13356;
})();var statearr_13357_13380 = state_13335__$1;(statearr_13357_13380[2] = null);
(statearr_13357_13380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_13361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13361[0] = state_machine__6782__auto__);
(statearr_13361[1] = 1);
return statearr_13361;
});
var state_machine__6782__auto____1 = (function (state_13335){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_13335);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e13362){if((e13362 instanceof Object))
{var ex__6785__auto__ = e13362;var statearr_13363_13381 = state_13335;(statearr_13363_13381[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13362;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13382 = state_13335;
state_13335 = G__13382;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_13335){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_13335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_13364 = f__6797__auto__.call(null);(statearr_13364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___13365);
return statearr_13364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6796__auto___13490 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_13466){var state_val_13467 = (state_13466[1]);if((state_val_13467 === 1))
{var inst_13437 = cljs.core.vec.call(null,chs);var inst_13438 = inst_13437;var state_13466__$1 = (function (){var statearr_13468 = state_13466;(statearr_13468[7] = inst_13438);
return statearr_13468;
})();var statearr_13469_13491 = state_13466__$1;(statearr_13469_13491[2] = null);
(statearr_13469_13491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13467 === 2))
{var inst_13438 = (state_13466[7]);var inst_13440 = cljs.core.count.call(null,inst_13438);var inst_13441 = (inst_13440 > 0);var state_13466__$1 = state_13466;if(cljs.core.truth_(inst_13441))
{var statearr_13470_13492 = state_13466__$1;(statearr_13470_13492[1] = 4);
} else
{var statearr_13471_13493 = state_13466__$1;(statearr_13471_13493[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13467 === 3))
{var inst_13464 = (state_13466[2]);var state_13466__$1 = state_13466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13466__$1,inst_13464);
} else
{if((state_val_13467 === 4))
{var inst_13438 = (state_13466[7]);var state_13466__$1 = state_13466;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13466__$1,7,inst_13438);
} else
{if((state_val_13467 === 5))
{var inst_13460 = cljs.core.async.close_BANG_.call(null,out);var state_13466__$1 = state_13466;var statearr_13472_13494 = state_13466__$1;(statearr_13472_13494[2] = inst_13460);
(statearr_13472_13494[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13467 === 6))
{var inst_13462 = (state_13466[2]);var state_13466__$1 = state_13466;var statearr_13473_13495 = state_13466__$1;(statearr_13473_13495[2] = inst_13462);
(statearr_13473_13495[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13467 === 7))
{var inst_13446 = (state_13466[8]);var inst_13445 = (state_13466[9]);var inst_13445__$1 = (state_13466[2]);var inst_13446__$1 = cljs.core.nth.call(null,inst_13445__$1,0,null);var inst_13447 = cljs.core.nth.call(null,inst_13445__$1,1,null);var inst_13448 = (inst_13446__$1 == null);var state_13466__$1 = (function (){var statearr_13474 = state_13466;(statearr_13474[8] = inst_13446__$1);
(statearr_13474[9] = inst_13445__$1);
(statearr_13474[10] = inst_13447);
return statearr_13474;
})();if(cljs.core.truth_(inst_13448))
{var statearr_13475_13496 = state_13466__$1;(statearr_13475_13496[1] = 8);
} else
{var statearr_13476_13497 = state_13466__$1;(statearr_13476_13497[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13467 === 8))
{var inst_13446 = (state_13466[8]);var inst_13445 = (state_13466[9]);var inst_13438 = (state_13466[7]);var inst_13447 = (state_13466[10]);var inst_13450 = (function (){var c = inst_13447;var v = inst_13446;var vec__13443 = inst_13445;var cs = inst_13438;return ((function (c,v,vec__13443,cs,inst_13446,inst_13445,inst_13438,inst_13447,state_val_13467){
return (function (p1__13383_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13383_SHARP_);
});
;})(c,v,vec__13443,cs,inst_13446,inst_13445,inst_13438,inst_13447,state_val_13467))
})();var inst_13451 = cljs.core.filterv.call(null,inst_13450,inst_13438);var inst_13438__$1 = inst_13451;var state_13466__$1 = (function (){var statearr_13477 = state_13466;(statearr_13477[7] = inst_13438__$1);
return statearr_13477;
})();var statearr_13478_13498 = state_13466__$1;(statearr_13478_13498[2] = null);
(statearr_13478_13498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13467 === 9))
{var inst_13446 = (state_13466[8]);var state_13466__$1 = state_13466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13466__$1,11,out,inst_13446);
} else
{if((state_val_13467 === 10))
{var inst_13458 = (state_13466[2]);var state_13466__$1 = state_13466;var statearr_13480_13499 = state_13466__$1;(statearr_13480_13499[2] = inst_13458);
(statearr_13480_13499[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13467 === 11))
{var inst_13438 = (state_13466[7]);var inst_13455 = (state_13466[2]);var tmp13479 = inst_13438;var inst_13438__$1 = tmp13479;var state_13466__$1 = (function (){var statearr_13481 = state_13466;(statearr_13481[7] = inst_13438__$1);
(statearr_13481[11] = inst_13455);
return statearr_13481;
})();var statearr_13482_13500 = state_13466__$1;(statearr_13482_13500[2] = null);
(statearr_13482_13500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_13486 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13486[0] = state_machine__6782__auto__);
(statearr_13486[1] = 1);
return statearr_13486;
});
var state_machine__6782__auto____1 = (function (state_13466){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_13466);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e13487){if((e13487 instanceof Object))
{var ex__6785__auto__ = e13487;var statearr_13488_13501 = state_13466;(statearr_13488_13501[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13502 = state_13466;
state_13466 = G__13502;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_13466){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_13466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_13489 = f__6797__auto__.call(null);(statearr_13489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___13490);
return statearr_13489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6796__auto___13595 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_13572){var state_val_13573 = (state_13572[1]);if((state_val_13573 === 1))
{var inst_13549 = 0;var state_13572__$1 = (function (){var statearr_13574 = state_13572;(statearr_13574[7] = inst_13549);
return statearr_13574;
})();var statearr_13575_13596 = state_13572__$1;(statearr_13575_13596[2] = null);
(statearr_13575_13596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13573 === 2))
{var inst_13549 = (state_13572[7]);var inst_13551 = (inst_13549 < n);var state_13572__$1 = state_13572;if(cljs.core.truth_(inst_13551))
{var statearr_13576_13597 = state_13572__$1;(statearr_13576_13597[1] = 4);
} else
{var statearr_13577_13598 = state_13572__$1;(statearr_13577_13598[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13573 === 3))
{var inst_13569 = (state_13572[2]);var inst_13570 = cljs.core.async.close_BANG_.call(null,out);var state_13572__$1 = (function (){var statearr_13578 = state_13572;(statearr_13578[8] = inst_13569);
return statearr_13578;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13572__$1,inst_13570);
} else
{if((state_val_13573 === 4))
{var state_13572__$1 = state_13572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13572__$1,7,ch);
} else
{if((state_val_13573 === 5))
{var state_13572__$1 = state_13572;var statearr_13579_13599 = state_13572__$1;(statearr_13579_13599[2] = null);
(statearr_13579_13599[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13573 === 6))
{var inst_13567 = (state_13572[2]);var state_13572__$1 = state_13572;var statearr_13580_13600 = state_13572__$1;(statearr_13580_13600[2] = inst_13567);
(statearr_13580_13600[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13573 === 7))
{var inst_13554 = (state_13572[9]);var inst_13554__$1 = (state_13572[2]);var inst_13555 = (inst_13554__$1 == null);var inst_13556 = cljs.core.not.call(null,inst_13555);var state_13572__$1 = (function (){var statearr_13581 = state_13572;(statearr_13581[9] = inst_13554__$1);
return statearr_13581;
})();if(inst_13556)
{var statearr_13582_13601 = state_13572__$1;(statearr_13582_13601[1] = 8);
} else
{var statearr_13583_13602 = state_13572__$1;(statearr_13583_13602[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13573 === 8))
{var inst_13554 = (state_13572[9]);var state_13572__$1 = state_13572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13572__$1,11,out,inst_13554);
} else
{if((state_val_13573 === 9))
{var state_13572__$1 = state_13572;var statearr_13584_13603 = state_13572__$1;(statearr_13584_13603[2] = null);
(statearr_13584_13603[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13573 === 10))
{var inst_13564 = (state_13572[2]);var state_13572__$1 = state_13572;var statearr_13585_13604 = state_13572__$1;(statearr_13585_13604[2] = inst_13564);
(statearr_13585_13604[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13573 === 11))
{var inst_13549 = (state_13572[7]);var inst_13559 = (state_13572[2]);var inst_13560 = (inst_13549 + 1);var inst_13549__$1 = inst_13560;var state_13572__$1 = (function (){var statearr_13586 = state_13572;(statearr_13586[10] = inst_13559);
(statearr_13586[7] = inst_13549__$1);
return statearr_13586;
})();var statearr_13587_13605 = state_13572__$1;(statearr_13587_13605[2] = null);
(statearr_13587_13605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_13591 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13591[0] = state_machine__6782__auto__);
(statearr_13591[1] = 1);
return statearr_13591;
});
var state_machine__6782__auto____1 = (function (state_13572){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_13572);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e13592){if((e13592 instanceof Object))
{var ex__6785__auto__ = e13592;var statearr_13593_13606 = state_13572;(statearr_13593_13606[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13572);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13607 = state_13572;
state_13572 = G__13607;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_13572){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_13572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_13594 = f__6797__auto__.call(null);(statearr_13594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___13595);
return statearr_13594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6796__auto___13704 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_13679){var state_val_13680 = (state_13679[1]);if((state_val_13680 === 1))
{var inst_13656 = null;var state_13679__$1 = (function (){var statearr_13681 = state_13679;(statearr_13681[7] = inst_13656);
return statearr_13681;
})();var statearr_13682_13705 = state_13679__$1;(statearr_13682_13705[2] = null);
(statearr_13682_13705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 2))
{var state_13679__$1 = state_13679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13679__$1,4,ch);
} else
{if((state_val_13680 === 3))
{var inst_13676 = (state_13679[2]);var inst_13677 = cljs.core.async.close_BANG_.call(null,out);var state_13679__$1 = (function (){var statearr_13683 = state_13679;(statearr_13683[8] = inst_13676);
return statearr_13683;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13679__$1,inst_13677);
} else
{if((state_val_13680 === 4))
{var inst_13659 = (state_13679[9]);var inst_13659__$1 = (state_13679[2]);var inst_13660 = (inst_13659__$1 == null);var inst_13661 = cljs.core.not.call(null,inst_13660);var state_13679__$1 = (function (){var statearr_13684 = state_13679;(statearr_13684[9] = inst_13659__$1);
return statearr_13684;
})();if(inst_13661)
{var statearr_13685_13706 = state_13679__$1;(statearr_13685_13706[1] = 5);
} else
{var statearr_13686_13707 = state_13679__$1;(statearr_13686_13707[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 5))
{var inst_13656 = (state_13679[7]);var inst_13659 = (state_13679[9]);var inst_13663 = cljs.core._EQ_.call(null,inst_13659,inst_13656);var state_13679__$1 = state_13679;if(inst_13663)
{var statearr_13687_13708 = state_13679__$1;(statearr_13687_13708[1] = 8);
} else
{var statearr_13688_13709 = state_13679__$1;(statearr_13688_13709[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 6))
{var state_13679__$1 = state_13679;var statearr_13690_13710 = state_13679__$1;(statearr_13690_13710[2] = null);
(statearr_13690_13710[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 7))
{var inst_13674 = (state_13679[2]);var state_13679__$1 = state_13679;var statearr_13691_13711 = state_13679__$1;(statearr_13691_13711[2] = inst_13674);
(statearr_13691_13711[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 8))
{var inst_13656 = (state_13679[7]);var tmp13689 = inst_13656;var inst_13656__$1 = tmp13689;var state_13679__$1 = (function (){var statearr_13692 = state_13679;(statearr_13692[7] = inst_13656__$1);
return statearr_13692;
})();var statearr_13693_13712 = state_13679__$1;(statearr_13693_13712[2] = null);
(statearr_13693_13712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 9))
{var inst_13659 = (state_13679[9]);var state_13679__$1 = state_13679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13679__$1,11,out,inst_13659);
} else
{if((state_val_13680 === 10))
{var inst_13671 = (state_13679[2]);var state_13679__$1 = state_13679;var statearr_13694_13713 = state_13679__$1;(statearr_13694_13713[2] = inst_13671);
(statearr_13694_13713[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 11))
{var inst_13659 = (state_13679[9]);var inst_13668 = (state_13679[2]);var inst_13656 = inst_13659;var state_13679__$1 = (function (){var statearr_13695 = state_13679;(statearr_13695[10] = inst_13668);
(statearr_13695[7] = inst_13656);
return statearr_13695;
})();var statearr_13696_13714 = state_13679__$1;(statearr_13696_13714[2] = null);
(statearr_13696_13714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_13700 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13700[0] = state_machine__6782__auto__);
(statearr_13700[1] = 1);
return statearr_13700;
});
var state_machine__6782__auto____1 = (function (state_13679){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_13679);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e13701){if((e13701 instanceof Object))
{var ex__6785__auto__ = e13701;var statearr_13702_13715 = state_13679;(statearr_13702_13715[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13679);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13716 = state_13679;
state_13679 = G__13716;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_13679){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_13679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_13703 = f__6797__auto__.call(null);(statearr_13703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___13704);
return statearr_13703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6796__auto___13851 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_13821){var state_val_13822 = (state_13821[1]);if((state_val_13822 === 1))
{var inst_13784 = (new Array(n));var inst_13785 = inst_13784;var inst_13786 = 0;var state_13821__$1 = (function (){var statearr_13823 = state_13821;(statearr_13823[7] = inst_13786);
(statearr_13823[8] = inst_13785);
return statearr_13823;
})();var statearr_13824_13852 = state_13821__$1;(statearr_13824_13852[2] = null);
(statearr_13824_13852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13822 === 2))
{var state_13821__$1 = state_13821;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13821__$1,4,ch);
} else
{if((state_val_13822 === 3))
{var inst_13819 = (state_13821[2]);var state_13821__$1 = state_13821;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13821__$1,inst_13819);
} else
{if((state_val_13822 === 4))
{var inst_13789 = (state_13821[9]);var inst_13789__$1 = (state_13821[2]);var inst_13790 = (inst_13789__$1 == null);var inst_13791 = cljs.core.not.call(null,inst_13790);var state_13821__$1 = (function (){var statearr_13825 = state_13821;(statearr_13825[9] = inst_13789__$1);
return statearr_13825;
})();if(inst_13791)
{var statearr_13826_13853 = state_13821__$1;(statearr_13826_13853[1] = 5);
} else
{var statearr_13827_13854 = state_13821__$1;(statearr_13827_13854[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13822 === 5))
{var inst_13794 = (state_13821[10]);var inst_13789 = (state_13821[9]);var inst_13786 = (state_13821[7]);var inst_13785 = (state_13821[8]);var inst_13793 = (inst_13785[inst_13786] = inst_13789);var inst_13794__$1 = (inst_13786 + 1);var inst_13795 = (inst_13794__$1 < n);var state_13821__$1 = (function (){var statearr_13828 = state_13821;(statearr_13828[11] = inst_13793);
(statearr_13828[10] = inst_13794__$1);
return statearr_13828;
})();if(cljs.core.truth_(inst_13795))
{var statearr_13829_13855 = state_13821__$1;(statearr_13829_13855[1] = 8);
} else
{var statearr_13830_13856 = state_13821__$1;(statearr_13830_13856[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13822 === 6))
{var inst_13786 = (state_13821[7]);var inst_13807 = (inst_13786 > 0);var state_13821__$1 = state_13821;if(cljs.core.truth_(inst_13807))
{var statearr_13832_13857 = state_13821__$1;(statearr_13832_13857[1] = 12);
} else
{var statearr_13833_13858 = state_13821__$1;(statearr_13833_13858[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13822 === 7))
{var inst_13817 = (state_13821[2]);var state_13821__$1 = state_13821;var statearr_13834_13859 = state_13821__$1;(statearr_13834_13859[2] = inst_13817);
(statearr_13834_13859[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13822 === 8))
{var inst_13794 = (state_13821[10]);var inst_13785 = (state_13821[8]);var tmp13831 = inst_13785;var inst_13785__$1 = tmp13831;var inst_13786 = inst_13794;var state_13821__$1 = (function (){var statearr_13835 = state_13821;(statearr_13835[7] = inst_13786);
(statearr_13835[8] = inst_13785__$1);
return statearr_13835;
})();var statearr_13836_13860 = state_13821__$1;(statearr_13836_13860[2] = null);
(statearr_13836_13860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13822 === 9))
{var inst_13785 = (state_13821[8]);var inst_13799 = cljs.core.vec.call(null,inst_13785);var state_13821__$1 = state_13821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13821__$1,11,out,inst_13799);
} else
{if((state_val_13822 === 10))
{var inst_13805 = (state_13821[2]);var state_13821__$1 = state_13821;var statearr_13837_13861 = state_13821__$1;(statearr_13837_13861[2] = inst_13805);
(statearr_13837_13861[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13822 === 11))
{var inst_13801 = (state_13821[2]);var inst_13802 = (new Array(n));var inst_13785 = inst_13802;var inst_13786 = 0;var state_13821__$1 = (function (){var statearr_13838 = state_13821;(statearr_13838[7] = inst_13786);
(statearr_13838[8] = inst_13785);
(statearr_13838[12] = inst_13801);
return statearr_13838;
})();var statearr_13839_13862 = state_13821__$1;(statearr_13839_13862[2] = null);
(statearr_13839_13862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13822 === 12))
{var inst_13785 = (state_13821[8]);var inst_13809 = cljs.core.vec.call(null,inst_13785);var state_13821__$1 = state_13821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13821__$1,15,out,inst_13809);
} else
{if((state_val_13822 === 13))
{var state_13821__$1 = state_13821;var statearr_13840_13863 = state_13821__$1;(statearr_13840_13863[2] = null);
(statearr_13840_13863[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13822 === 14))
{var inst_13814 = (state_13821[2]);var inst_13815 = cljs.core.async.close_BANG_.call(null,out);var state_13821__$1 = (function (){var statearr_13841 = state_13821;(statearr_13841[13] = inst_13814);
return statearr_13841;
})();var statearr_13842_13864 = state_13821__$1;(statearr_13842_13864[2] = inst_13815);
(statearr_13842_13864[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13822 === 15))
{var inst_13811 = (state_13821[2]);var state_13821__$1 = state_13821;var statearr_13843_13865 = state_13821__$1;(statearr_13843_13865[2] = inst_13811);
(statearr_13843_13865[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_13847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13847[0] = state_machine__6782__auto__);
(statearr_13847[1] = 1);
return statearr_13847;
});
var state_machine__6782__auto____1 = (function (state_13821){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_13821);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e13848){if((e13848 instanceof Object))
{var ex__6785__auto__ = e13848;var statearr_13849_13866 = state_13821;(statearr_13849_13866[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13821);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13867 = state_13821;
state_13821 = G__13867;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_13821){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_13821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_13850 = f__6797__auto__.call(null);(statearr_13850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___13851);
return statearr_13850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6796__auto___14010 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_13980){var state_val_13981 = (state_13980[1]);if((state_val_13981 === 1))
{var inst_13939 = [];var inst_13940 = inst_13939;var inst_13941 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13980__$1 = (function (){var statearr_13982 = state_13980;(statearr_13982[7] = inst_13941);
(statearr_13982[8] = inst_13940);
return statearr_13982;
})();var statearr_13983_14011 = state_13980__$1;(statearr_13983_14011[2] = null);
(statearr_13983_14011[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 2))
{var state_13980__$1 = state_13980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13980__$1,4,ch);
} else
{if((state_val_13981 === 3))
{var inst_13978 = (state_13980[2]);var state_13980__$1 = state_13980;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13980__$1,inst_13978);
} else
{if((state_val_13981 === 4))
{var inst_13944 = (state_13980[9]);var inst_13944__$1 = (state_13980[2]);var inst_13945 = (inst_13944__$1 == null);var inst_13946 = cljs.core.not.call(null,inst_13945);var state_13980__$1 = (function (){var statearr_13984 = state_13980;(statearr_13984[9] = inst_13944__$1);
return statearr_13984;
})();if(inst_13946)
{var statearr_13985_14012 = state_13980__$1;(statearr_13985_14012[1] = 5);
} else
{var statearr_13986_14013 = state_13980__$1;(statearr_13986_14013[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 5))
{var inst_13944 = (state_13980[9]);var inst_13948 = (state_13980[10]);var inst_13941 = (state_13980[7]);var inst_13948__$1 = f.call(null,inst_13944);var inst_13949 = cljs.core._EQ_.call(null,inst_13948__$1,inst_13941);var inst_13950 = cljs.core.keyword_identical_QMARK_.call(null,inst_13941,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13951 = (inst_13949) || (inst_13950);var state_13980__$1 = (function (){var statearr_13987 = state_13980;(statearr_13987[10] = inst_13948__$1);
return statearr_13987;
})();if(cljs.core.truth_(inst_13951))
{var statearr_13988_14014 = state_13980__$1;(statearr_13988_14014[1] = 8);
} else
{var statearr_13989_14015 = state_13980__$1;(statearr_13989_14015[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 6))
{var inst_13940 = (state_13980[8]);var inst_13965 = inst_13940.length;var inst_13966 = (inst_13965 > 0);var state_13980__$1 = state_13980;if(cljs.core.truth_(inst_13966))
{var statearr_13991_14016 = state_13980__$1;(statearr_13991_14016[1] = 12);
} else
{var statearr_13992_14017 = state_13980__$1;(statearr_13992_14017[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 7))
{var inst_13976 = (state_13980[2]);var state_13980__$1 = state_13980;var statearr_13993_14018 = state_13980__$1;(statearr_13993_14018[2] = inst_13976);
(statearr_13993_14018[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 8))
{var inst_13944 = (state_13980[9]);var inst_13948 = (state_13980[10]);var inst_13940 = (state_13980[8]);var inst_13953 = inst_13940.push(inst_13944);var tmp13990 = inst_13940;var inst_13940__$1 = tmp13990;var inst_13941 = inst_13948;var state_13980__$1 = (function (){var statearr_13994 = state_13980;(statearr_13994[11] = inst_13953);
(statearr_13994[7] = inst_13941);
(statearr_13994[8] = inst_13940__$1);
return statearr_13994;
})();var statearr_13995_14019 = state_13980__$1;(statearr_13995_14019[2] = null);
(statearr_13995_14019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 9))
{var inst_13940 = (state_13980[8]);var inst_13956 = cljs.core.vec.call(null,inst_13940);var state_13980__$1 = state_13980;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13980__$1,11,out,inst_13956);
} else
{if((state_val_13981 === 10))
{var inst_13963 = (state_13980[2]);var state_13980__$1 = state_13980;var statearr_13996_14020 = state_13980__$1;(statearr_13996_14020[2] = inst_13963);
(statearr_13996_14020[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 11))
{var inst_13944 = (state_13980[9]);var inst_13948 = (state_13980[10]);var inst_13958 = (state_13980[2]);var inst_13959 = [];var inst_13960 = inst_13959.push(inst_13944);var inst_13940 = inst_13959;var inst_13941 = inst_13948;var state_13980__$1 = (function (){var statearr_13997 = state_13980;(statearr_13997[12] = inst_13960);
(statearr_13997[7] = inst_13941);
(statearr_13997[8] = inst_13940);
(statearr_13997[13] = inst_13958);
return statearr_13997;
})();var statearr_13998_14021 = state_13980__$1;(statearr_13998_14021[2] = null);
(statearr_13998_14021[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 12))
{var inst_13940 = (state_13980[8]);var inst_13968 = cljs.core.vec.call(null,inst_13940);var state_13980__$1 = state_13980;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13980__$1,15,out,inst_13968);
} else
{if((state_val_13981 === 13))
{var state_13980__$1 = state_13980;var statearr_13999_14022 = state_13980__$1;(statearr_13999_14022[2] = null);
(statearr_13999_14022[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 14))
{var inst_13973 = (state_13980[2]);var inst_13974 = cljs.core.async.close_BANG_.call(null,out);var state_13980__$1 = (function (){var statearr_14000 = state_13980;(statearr_14000[14] = inst_13973);
return statearr_14000;
})();var statearr_14001_14023 = state_13980__$1;(statearr_14001_14023[2] = inst_13974);
(statearr_14001_14023[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13981 === 15))
{var inst_13970 = (state_13980[2]);var state_13980__$1 = state_13980;var statearr_14002_14024 = state_13980__$1;(statearr_14002_14024[2] = inst_13970);
(statearr_14002_14024[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_14006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14006[0] = state_machine__6782__auto__);
(statearr_14006[1] = 1);
return statearr_14006;
});
var state_machine__6782__auto____1 = (function (state_13980){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_13980);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e14007){if((e14007 instanceof Object))
{var ex__6785__auto__ = e14007;var statearr_14008_14025 = state_13980;(statearr_14008_14025[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13980);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14026 = state_13980;
state_13980 = G__14026;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_13980){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_13980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_14009 = f__6797__auto__.call(null);(statearr_14009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___14010);
return statearr_14009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map