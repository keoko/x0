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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t44828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44828 = (function (f,fn_handler,meta44829){
this.f = f;
this.fn_handler = fn_handler;
this.meta44829 = meta44829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44828.cljs$lang$type = true;
cljs.core.async.t44828.cljs$lang$ctorStr = "cljs.core.async/t44828";
cljs.core.async.t44828.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t44828");
});
cljs.core.async.t44828.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t44828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t44828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t44828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44830){var self__ = this;
var _44830__$1 = this;return self__.meta44829;
});
cljs.core.async.t44828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44830,meta44829__$1){var self__ = this;
var _44830__$1 = this;return (new cljs.core.async.t44828(self__.f,self__.fn_handler,meta44829__$1));
});
cljs.core.async.__GT_t44828 = (function __GT_t44828(f__$1,fn_handler__$1,meta44829){return (new cljs.core.async.t44828(f__$1,fn_handler__$1,meta44829));
});
}
return (new cljs.core.async.t44828(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__44832 = buff;if(G__44832)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__44832.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__44832.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__44832);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__44832);
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
{var val_44833 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_44833);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_44833);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___44834 = n;var x_44835 = 0;while(true){
if((x_44835 < n__4291__auto___44834))
{(a[x_44835] = 0);
{
var G__44836 = (x_44835 + 1);
x_44835 = G__44836;
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
var G__44837 = (i + 1);
i = G__44837;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t44841 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44841 = (function (flag,alt_flag,meta44842){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta44842 = meta44842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44841.cljs$lang$type = true;
cljs.core.async.t44841.cljs$lang$ctorStr = "cljs.core.async/t44841";
cljs.core.async.t44841.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t44841");
});
cljs.core.async.t44841.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t44841.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t44841.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t44841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44843){var self__ = this;
var _44843__$1 = this;return self__.meta44842;
});
cljs.core.async.t44841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44843,meta44842__$1){var self__ = this;
var _44843__$1 = this;return (new cljs.core.async.t44841(self__.flag,self__.alt_flag,meta44842__$1));
});
cljs.core.async.__GT_t44841 = (function __GT_t44841(flag__$1,alt_flag__$1,meta44842){return (new cljs.core.async.t44841(flag__$1,alt_flag__$1,meta44842));
});
}
return (new cljs.core.async.t44841(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t44847 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44847 = (function (cb,flag,alt_handler,meta44848){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta44848 = meta44848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44847.cljs$lang$type = true;
cljs.core.async.t44847.cljs$lang$ctorStr = "cljs.core.async/t44847";
cljs.core.async.t44847.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t44847");
});
cljs.core.async.t44847.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t44847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t44847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t44847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44849){var self__ = this;
var _44849__$1 = this;return self__.meta44848;
});
cljs.core.async.t44847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44849,meta44848__$1){var self__ = this;
var _44849__$1 = this;return (new cljs.core.async.t44847(self__.cb,self__.flag,self__.alt_handler,meta44848__$1));
});
cljs.core.async.__GT_t44847 = (function __GT_t44847(cb__$1,flag__$1,alt_handler__$1,meta44848){return (new cljs.core.async.t44847(cb__$1,flag__$1,alt_handler__$1,meta44848));
});
}
return (new cljs.core.async.t44847(cb,flag,alt_handler,null));
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
return (function (p1__44850_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44850_SHARP_,port], null));
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
var G__44851 = (i + 1);
i = G__44851;
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
var alts_BANG___delegate = function (ports,p__44852){var map__44854 = p__44852;var map__44854__$1 = ((cljs.core.seq_QMARK_.call(null,map__44854))?cljs.core.apply.call(null,cljs.core.hash_map,map__44854):map__44854);var opts = map__44854__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__44852 = null;if (arguments.length > 1) {
  p__44852 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__44852);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__44855){
var ports = cljs.core.first(arglist__44855);
var p__44852 = cljs.core.rest(arglist__44855);
return alts_BANG___delegate(ports,p__44852);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t44863 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44863 = (function (ch,f,map_LT_,meta44864){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta44864 = meta44864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44863.cljs$lang$type = true;
cljs.core.async.t44863.cljs$lang$ctorStr = "cljs.core.async/t44863";
cljs.core.async.t44863.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t44863");
});
cljs.core.async.t44863.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t44863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t44863.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t44863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t44866 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44866 = (function (fn1,_,meta44864,ch,f,map_LT_,meta44867){
this.fn1 = fn1;
this._ = _;
this.meta44864 = meta44864;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta44867 = meta44867;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44866.cljs$lang$type = true;
cljs.core.async.t44866.cljs$lang$ctorStr = "cljs.core.async/t44866";
cljs.core.async.t44866.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t44866");
});
cljs.core.async.t44866.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t44866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t44866.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t44866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__44856_SHARP_){return f1.call(null,(((p1__44856_SHARP_ == null))?null:self__.f.call(null,p1__44856_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t44866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44868){var self__ = this;
var _44868__$1 = this;return self__.meta44867;
});
cljs.core.async.t44866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44868,meta44867__$1){var self__ = this;
var _44868__$1 = this;return (new cljs.core.async.t44866(self__.fn1,self__._,self__.meta44864,self__.ch,self__.f,self__.map_LT_,meta44867__$1));
});
cljs.core.async.__GT_t44866 = (function __GT_t44866(fn1__$1,___$2,meta44864__$1,ch__$2,f__$2,map_LT___$2,meta44867){return (new cljs.core.async.t44866(fn1__$1,___$2,meta44864__$1,ch__$2,f__$2,map_LT___$2,meta44867));
});
}
return (new cljs.core.async.t44866(fn1,___$1,self__.meta44864,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t44863.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t44863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t44863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44865){var self__ = this;
var _44865__$1 = this;return self__.meta44864;
});
cljs.core.async.t44863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44865,meta44864__$1){var self__ = this;
var _44865__$1 = this;return (new cljs.core.async.t44863(self__.ch,self__.f,self__.map_LT_,meta44864__$1));
});
cljs.core.async.__GT_t44863 = (function __GT_t44863(ch__$1,f__$1,map_LT___$1,meta44864){return (new cljs.core.async.t44863(ch__$1,f__$1,map_LT___$1,meta44864));
});
}
return (new cljs.core.async.t44863(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t44872 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44872 = (function (ch,f,map_GT_,meta44873){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta44873 = meta44873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44872.cljs$lang$type = true;
cljs.core.async.t44872.cljs$lang$ctorStr = "cljs.core.async/t44872";
cljs.core.async.t44872.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t44872");
});
cljs.core.async.t44872.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t44872.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t44872.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t44872.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t44872.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t44872.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t44872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44874){var self__ = this;
var _44874__$1 = this;return self__.meta44873;
});
cljs.core.async.t44872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44874,meta44873__$1){var self__ = this;
var _44874__$1 = this;return (new cljs.core.async.t44872(self__.ch,self__.f,self__.map_GT_,meta44873__$1));
});
cljs.core.async.__GT_t44872 = (function __GT_t44872(ch__$1,f__$1,map_GT___$1,meta44873){return (new cljs.core.async.t44872(ch__$1,f__$1,map_GT___$1,meta44873));
});
}
return (new cljs.core.async.t44872(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t44878 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44878 = (function (ch,p,filter_GT_,meta44879){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta44879 = meta44879;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44878.cljs$lang$type = true;
cljs.core.async.t44878.cljs$lang$ctorStr = "cljs.core.async/t44878";
cljs.core.async.t44878.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t44878");
});
cljs.core.async.t44878.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t44878.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t44878.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t44878.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t44878.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t44878.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t44878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44880){var self__ = this;
var _44880__$1 = this;return self__.meta44879;
});
cljs.core.async.t44878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44880,meta44879__$1){var self__ = this;
var _44880__$1 = this;return (new cljs.core.async.t44878(self__.ch,self__.p,self__.filter_GT_,meta44879__$1));
});
cljs.core.async.__GT_t44878 = (function __GT_t44878(ch__$1,p__$1,filter_GT___$1,meta44879){return (new cljs.core.async.t44878(ch__$1,p__$1,filter_GT___$1,meta44879));
});
}
return (new cljs.core.async.t44878(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6796__auto___44963 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_44942){var state_val_44943 = (state_44942[1]);if((state_val_44943 === 1))
{var state_44942__$1 = state_44942;var statearr_44944_44964 = state_44942__$1;(statearr_44944_44964[2] = null);
(statearr_44944_44964[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44943 === 2))
{var state_44942__$1 = state_44942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44942__$1,4,ch);
} else
{if((state_val_44943 === 3))
{var inst_44940 = (state_44942[2]);var state_44942__$1 = state_44942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44942__$1,inst_44940);
} else
{if((state_val_44943 === 4))
{var inst_44924 = (state_44942[7]);var inst_44924__$1 = (state_44942[2]);var inst_44925 = (inst_44924__$1 == null);var state_44942__$1 = (function (){var statearr_44945 = state_44942;(statearr_44945[7] = inst_44924__$1);
return statearr_44945;
})();if(cljs.core.truth_(inst_44925))
{var statearr_44946_44965 = state_44942__$1;(statearr_44946_44965[1] = 5);
} else
{var statearr_44947_44966 = state_44942__$1;(statearr_44947_44966[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44943 === 5))
{var inst_44927 = cljs.core.async.close_BANG_.call(null,out);var state_44942__$1 = state_44942;var statearr_44948_44967 = state_44942__$1;(statearr_44948_44967[2] = inst_44927);
(statearr_44948_44967[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44943 === 6))
{var inst_44924 = (state_44942[7]);var inst_44929 = p.call(null,inst_44924);var state_44942__$1 = state_44942;if(cljs.core.truth_(inst_44929))
{var statearr_44949_44968 = state_44942__$1;(statearr_44949_44968[1] = 8);
} else
{var statearr_44950_44969 = state_44942__$1;(statearr_44950_44969[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44943 === 7))
{var inst_44938 = (state_44942[2]);var state_44942__$1 = state_44942;var statearr_44951_44970 = state_44942__$1;(statearr_44951_44970[2] = inst_44938);
(statearr_44951_44970[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44943 === 8))
{var inst_44924 = (state_44942[7]);var state_44942__$1 = state_44942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44942__$1,11,out,inst_44924);
} else
{if((state_val_44943 === 9))
{var state_44942__$1 = state_44942;var statearr_44952_44971 = state_44942__$1;(statearr_44952_44971[2] = null);
(statearr_44952_44971[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44943 === 10))
{var inst_44935 = (state_44942[2]);var state_44942__$1 = (function (){var statearr_44953 = state_44942;(statearr_44953[8] = inst_44935);
return statearr_44953;
})();var statearr_44954_44972 = state_44942__$1;(statearr_44954_44972[2] = null);
(statearr_44954_44972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44943 === 11))
{var inst_44932 = (state_44942[2]);var state_44942__$1 = state_44942;var statearr_44955_44973 = state_44942__$1;(statearr_44955_44973[2] = inst_44932);
(statearr_44955_44973[1] = 10);
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
var state_machine__6782__auto____0 = (function (){var statearr_44959 = [null,null,null,null,null,null,null,null,null];(statearr_44959[0] = state_machine__6782__auto__);
(statearr_44959[1] = 1);
return statearr_44959;
});
var state_machine__6782__auto____1 = (function (state_44942){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_44942);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e44960){if((e44960 instanceof Object))
{var ex__6785__auto__ = e44960;var statearr_44961_44974 = state_44942;(statearr_44961_44974[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44942);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44960;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44975 = state_44942;
state_44942 = G__44975;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_44942){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_44942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_44962 = f__6797__auto__.call(null);(statearr_44962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___44963);
return statearr_44962;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6796__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_45127){var state_val_45128 = (state_45127[1]);if((state_val_45128 === 1))
{var state_45127__$1 = state_45127;var statearr_45129_45166 = state_45127__$1;(statearr_45129_45166[2] = null);
(statearr_45129_45166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 2))
{var state_45127__$1 = state_45127;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45127__$1,4,in$);
} else
{if((state_val_45128 === 3))
{var inst_45125 = (state_45127[2]);var state_45127__$1 = state_45127;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45127__$1,inst_45125);
} else
{if((state_val_45128 === 4))
{var inst_45073 = (state_45127[7]);var inst_45073__$1 = (state_45127[2]);var inst_45074 = (inst_45073__$1 == null);var state_45127__$1 = (function (){var statearr_45130 = state_45127;(statearr_45130[7] = inst_45073__$1);
return statearr_45130;
})();if(cljs.core.truth_(inst_45074))
{var statearr_45131_45167 = state_45127__$1;(statearr_45131_45167[1] = 5);
} else
{var statearr_45132_45168 = state_45127__$1;(statearr_45132_45168[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 5))
{var inst_45076 = cljs.core.async.close_BANG_.call(null,out);var state_45127__$1 = state_45127;var statearr_45133_45169 = state_45127__$1;(statearr_45133_45169[2] = inst_45076);
(statearr_45133_45169[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 6))
{var inst_45073 = (state_45127[7]);var inst_45078 = f.call(null,inst_45073);var inst_45083 = cljs.core.seq.call(null,inst_45078);var inst_45084 = inst_45083;var inst_45085 = null;var inst_45086 = 0;var inst_45087 = 0;var state_45127__$1 = (function (){var statearr_45134 = state_45127;(statearr_45134[8] = inst_45086);
(statearr_45134[9] = inst_45087);
(statearr_45134[10] = inst_45085);
(statearr_45134[11] = inst_45084);
return statearr_45134;
})();var statearr_45135_45170 = state_45127__$1;(statearr_45135_45170[2] = null);
(statearr_45135_45170[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 7))
{var inst_45123 = (state_45127[2]);var state_45127__$1 = state_45127;var statearr_45136_45171 = state_45127__$1;(statearr_45136_45171[2] = inst_45123);
(statearr_45136_45171[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 8))
{var inst_45086 = (state_45127[8]);var inst_45087 = (state_45127[9]);var inst_45089 = (inst_45087 < inst_45086);var inst_45090 = inst_45089;var state_45127__$1 = state_45127;if(cljs.core.truth_(inst_45090))
{var statearr_45137_45172 = state_45127__$1;(statearr_45137_45172[1] = 10);
} else
{var statearr_45138_45173 = state_45127__$1;(statearr_45138_45173[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 9))
{var inst_45120 = (state_45127[2]);var state_45127__$1 = (function (){var statearr_45139 = state_45127;(statearr_45139[12] = inst_45120);
return statearr_45139;
})();var statearr_45140_45174 = state_45127__$1;(statearr_45140_45174[2] = null);
(statearr_45140_45174[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 10))
{var inst_45087 = (state_45127[9]);var inst_45085 = (state_45127[10]);var inst_45092 = cljs.core._nth.call(null,inst_45085,inst_45087);var state_45127__$1 = state_45127;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45127__$1,13,out,inst_45092);
} else
{if((state_val_45128 === 11))
{var inst_45098 = (state_45127[13]);var inst_45084 = (state_45127[11]);var inst_45098__$1 = cljs.core.seq.call(null,inst_45084);var state_45127__$1 = (function (){var statearr_45144 = state_45127;(statearr_45144[13] = inst_45098__$1);
return statearr_45144;
})();if(inst_45098__$1)
{var statearr_45145_45175 = state_45127__$1;(statearr_45145_45175[1] = 14);
} else
{var statearr_45146_45176 = state_45127__$1;(statearr_45146_45176[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 12))
{var inst_45118 = (state_45127[2]);var state_45127__$1 = state_45127;var statearr_45147_45177 = state_45127__$1;(statearr_45147_45177[2] = inst_45118);
(statearr_45147_45177[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 13))
{var inst_45086 = (state_45127[8]);var inst_45087 = (state_45127[9]);var inst_45085 = (state_45127[10]);var inst_45084 = (state_45127[11]);var inst_45094 = (state_45127[2]);var inst_45095 = (inst_45087 + 1);var tmp45141 = inst_45086;var tmp45142 = inst_45085;var tmp45143 = inst_45084;var inst_45084__$1 = tmp45143;var inst_45085__$1 = tmp45142;var inst_45086__$1 = tmp45141;var inst_45087__$1 = inst_45095;var state_45127__$1 = (function (){var statearr_45148 = state_45127;(statearr_45148[14] = inst_45094);
(statearr_45148[8] = inst_45086__$1);
(statearr_45148[9] = inst_45087__$1);
(statearr_45148[10] = inst_45085__$1);
(statearr_45148[11] = inst_45084__$1);
return statearr_45148;
})();var statearr_45149_45178 = state_45127__$1;(statearr_45149_45178[2] = null);
(statearr_45149_45178[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 14))
{var inst_45098 = (state_45127[13]);var inst_45100 = cljs.core.chunked_seq_QMARK_.call(null,inst_45098);var state_45127__$1 = state_45127;if(inst_45100)
{var statearr_45150_45179 = state_45127__$1;(statearr_45150_45179[1] = 17);
} else
{var statearr_45151_45180 = state_45127__$1;(statearr_45151_45180[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 15))
{var state_45127__$1 = state_45127;var statearr_45152_45181 = state_45127__$1;(statearr_45152_45181[2] = null);
(statearr_45152_45181[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 16))
{var inst_45116 = (state_45127[2]);var state_45127__$1 = state_45127;var statearr_45153_45182 = state_45127__$1;(statearr_45153_45182[2] = inst_45116);
(statearr_45153_45182[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 17))
{var inst_45098 = (state_45127[13]);var inst_45102 = cljs.core.chunk_first.call(null,inst_45098);var inst_45103 = cljs.core.chunk_rest.call(null,inst_45098);var inst_45104 = cljs.core.count.call(null,inst_45102);var inst_45084 = inst_45103;var inst_45085 = inst_45102;var inst_45086 = inst_45104;var inst_45087 = 0;var state_45127__$1 = (function (){var statearr_45154 = state_45127;(statearr_45154[8] = inst_45086);
(statearr_45154[9] = inst_45087);
(statearr_45154[10] = inst_45085);
(statearr_45154[11] = inst_45084);
return statearr_45154;
})();var statearr_45155_45183 = state_45127__$1;(statearr_45155_45183[2] = null);
(statearr_45155_45183[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 18))
{var inst_45098 = (state_45127[13]);var inst_45107 = cljs.core.first.call(null,inst_45098);var state_45127__$1 = state_45127;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45127__$1,20,out,inst_45107);
} else
{if((state_val_45128 === 19))
{var inst_45113 = (state_45127[2]);var state_45127__$1 = state_45127;var statearr_45156_45184 = state_45127__$1;(statearr_45156_45184[2] = inst_45113);
(statearr_45156_45184[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45128 === 20))
{var inst_45098 = (state_45127[13]);var inst_45109 = (state_45127[2]);var inst_45110 = cljs.core.next.call(null,inst_45098);var inst_45084 = inst_45110;var inst_45085 = null;var inst_45086 = 0;var inst_45087 = 0;var state_45127__$1 = (function (){var statearr_45157 = state_45127;(statearr_45157[15] = inst_45109);
(statearr_45157[8] = inst_45086);
(statearr_45157[9] = inst_45087);
(statearr_45157[10] = inst_45085);
(statearr_45157[11] = inst_45084);
return statearr_45157;
})();var statearr_45158_45185 = state_45127__$1;(statearr_45158_45185[2] = null);
(statearr_45158_45185[1] = 8);
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
var state_machine__6782__auto____0 = (function (){var statearr_45162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45162[0] = state_machine__6782__auto__);
(statearr_45162[1] = 1);
return statearr_45162;
});
var state_machine__6782__auto____1 = (function (state_45127){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_45127);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e45163){if((e45163 instanceof Object))
{var ex__6785__auto__ = e45163;var statearr_45164_45186 = state_45127;(statearr_45164_45186[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45127);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45187 = state_45127;
state_45127 = G__45187;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_45127){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_45127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_45165 = f__6797__auto__.call(null);(statearr_45165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto__);
return statearr_45165;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6796__auto___45268 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_45247){var state_val_45248 = (state_45247[1]);if((state_val_45248 === 1))
{var state_45247__$1 = state_45247;var statearr_45249_45269 = state_45247__$1;(statearr_45249_45269[2] = null);
(statearr_45249_45269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45248 === 2))
{var state_45247__$1 = state_45247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45247__$1,4,from);
} else
{if((state_val_45248 === 3))
{var inst_45245 = (state_45247[2]);var state_45247__$1 = state_45247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45247__$1,inst_45245);
} else
{if((state_val_45248 === 4))
{var inst_45230 = (state_45247[7]);var inst_45230__$1 = (state_45247[2]);var inst_45231 = (inst_45230__$1 == null);var state_45247__$1 = (function (){var statearr_45250 = state_45247;(statearr_45250[7] = inst_45230__$1);
return statearr_45250;
})();if(cljs.core.truth_(inst_45231))
{var statearr_45251_45270 = state_45247__$1;(statearr_45251_45270[1] = 5);
} else
{var statearr_45252_45271 = state_45247__$1;(statearr_45252_45271[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45248 === 5))
{var state_45247__$1 = state_45247;if(cljs.core.truth_(close_QMARK_))
{var statearr_45253_45272 = state_45247__$1;(statearr_45253_45272[1] = 8);
} else
{var statearr_45254_45273 = state_45247__$1;(statearr_45254_45273[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45248 === 6))
{var inst_45230 = (state_45247[7]);var state_45247__$1 = state_45247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45247__$1,11,to,inst_45230);
} else
{if((state_val_45248 === 7))
{var inst_45243 = (state_45247[2]);var state_45247__$1 = state_45247;var statearr_45255_45274 = state_45247__$1;(statearr_45255_45274[2] = inst_45243);
(statearr_45255_45274[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45248 === 8))
{var inst_45234 = cljs.core.async.close_BANG_.call(null,to);var state_45247__$1 = state_45247;var statearr_45256_45275 = state_45247__$1;(statearr_45256_45275[2] = inst_45234);
(statearr_45256_45275[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45248 === 9))
{var state_45247__$1 = state_45247;var statearr_45257_45276 = state_45247__$1;(statearr_45257_45276[2] = null);
(statearr_45257_45276[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45248 === 10))
{var inst_45237 = (state_45247[2]);var state_45247__$1 = state_45247;var statearr_45258_45277 = state_45247__$1;(statearr_45258_45277[2] = inst_45237);
(statearr_45258_45277[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45248 === 11))
{var inst_45240 = (state_45247[2]);var state_45247__$1 = (function (){var statearr_45259 = state_45247;(statearr_45259[8] = inst_45240);
return statearr_45259;
})();var statearr_45260_45278 = state_45247__$1;(statearr_45260_45278[2] = null);
(statearr_45260_45278[1] = 2);
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
var state_machine__6782__auto____0 = (function (){var statearr_45264 = [null,null,null,null,null,null,null,null,null];(statearr_45264[0] = state_machine__6782__auto__);
(statearr_45264[1] = 1);
return statearr_45264;
});
var state_machine__6782__auto____1 = (function (state_45247){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_45247);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e45265){if((e45265 instanceof Object))
{var ex__6785__auto__ = e45265;var statearr_45266_45279 = state_45247;(statearr_45266_45279[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45247);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45280 = state_45247;
state_45247 = G__45280;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_45247){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_45247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_45267 = f__6797__auto__.call(null);(statearr_45267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___45268);
return statearr_45267;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6796__auto___45367 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_45345){var state_val_45346 = (state_45345[1]);if((state_val_45346 === 1))
{var state_45345__$1 = state_45345;var statearr_45347_45368 = state_45345__$1;(statearr_45347_45368[2] = null);
(statearr_45347_45368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45346 === 2))
{var state_45345__$1 = state_45345;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45345__$1,4,ch);
} else
{if((state_val_45346 === 3))
{var inst_45343 = (state_45345[2]);var state_45345__$1 = state_45345;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45345__$1,inst_45343);
} else
{if((state_val_45346 === 4))
{var inst_45326 = (state_45345[7]);var inst_45326__$1 = (state_45345[2]);var inst_45327 = (inst_45326__$1 == null);var state_45345__$1 = (function (){var statearr_45348 = state_45345;(statearr_45348[7] = inst_45326__$1);
return statearr_45348;
})();if(cljs.core.truth_(inst_45327))
{var statearr_45349_45369 = state_45345__$1;(statearr_45349_45369[1] = 5);
} else
{var statearr_45350_45370 = state_45345__$1;(statearr_45350_45370[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45346 === 5))
{var inst_45329 = cljs.core.async.close_BANG_.call(null,tc);var inst_45330 = cljs.core.async.close_BANG_.call(null,fc);var state_45345__$1 = (function (){var statearr_45351 = state_45345;(statearr_45351[8] = inst_45329);
return statearr_45351;
})();var statearr_45352_45371 = state_45345__$1;(statearr_45352_45371[2] = inst_45330);
(statearr_45352_45371[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45346 === 6))
{var inst_45326 = (state_45345[7]);var inst_45332 = p.call(null,inst_45326);var state_45345__$1 = state_45345;if(cljs.core.truth_(inst_45332))
{var statearr_45353_45372 = state_45345__$1;(statearr_45353_45372[1] = 9);
} else
{var statearr_45354_45373 = state_45345__$1;(statearr_45354_45373[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45346 === 7))
{var inst_45341 = (state_45345[2]);var state_45345__$1 = state_45345;var statearr_45355_45374 = state_45345__$1;(statearr_45355_45374[2] = inst_45341);
(statearr_45355_45374[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45346 === 8))
{var inst_45338 = (state_45345[2]);var state_45345__$1 = (function (){var statearr_45356 = state_45345;(statearr_45356[9] = inst_45338);
return statearr_45356;
})();var statearr_45357_45375 = state_45345__$1;(statearr_45357_45375[2] = null);
(statearr_45357_45375[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45346 === 9))
{var state_45345__$1 = state_45345;var statearr_45358_45376 = state_45345__$1;(statearr_45358_45376[2] = tc);
(statearr_45358_45376[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45346 === 10))
{var state_45345__$1 = state_45345;var statearr_45359_45377 = state_45345__$1;(statearr_45359_45377[2] = fc);
(statearr_45359_45377[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45346 === 11))
{var inst_45326 = (state_45345[7]);var inst_45336 = (state_45345[2]);var state_45345__$1 = state_45345;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45345__$1,8,inst_45336,inst_45326);
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
var state_machine__6782__auto____0 = (function (){var statearr_45363 = [null,null,null,null,null,null,null,null,null,null];(statearr_45363[0] = state_machine__6782__auto__);
(statearr_45363[1] = 1);
return statearr_45363;
});
var state_machine__6782__auto____1 = (function (state_45345){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_45345);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e45364){if((e45364 instanceof Object))
{var ex__6785__auto__ = e45364;var statearr_45365_45378 = state_45345;(statearr_45365_45378[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45345);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45364;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45379 = state_45345;
state_45345 = G__45379;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_45345){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_45345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_45366 = f__6797__auto__.call(null);(statearr_45366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___45367);
return statearr_45366;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6796__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_45426){var state_val_45427 = (state_45426[1]);if((state_val_45427 === 7))
{var inst_45422 = (state_45426[2]);var state_45426__$1 = state_45426;var statearr_45428_45444 = state_45426__$1;(statearr_45428_45444[2] = inst_45422);
(statearr_45428_45444[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45427 === 6))
{var inst_45415 = (state_45426[7]);var inst_45412 = (state_45426[8]);var inst_45419 = f.call(null,inst_45412,inst_45415);var inst_45412__$1 = inst_45419;var state_45426__$1 = (function (){var statearr_45429 = state_45426;(statearr_45429[8] = inst_45412__$1);
return statearr_45429;
})();var statearr_45430_45445 = state_45426__$1;(statearr_45430_45445[2] = null);
(statearr_45430_45445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45427 === 5))
{var inst_45412 = (state_45426[8]);var state_45426__$1 = state_45426;var statearr_45431_45446 = state_45426__$1;(statearr_45431_45446[2] = inst_45412);
(statearr_45431_45446[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45427 === 4))
{var inst_45415 = (state_45426[7]);var inst_45415__$1 = (state_45426[2]);var inst_45416 = (inst_45415__$1 == null);var state_45426__$1 = (function (){var statearr_45432 = state_45426;(statearr_45432[7] = inst_45415__$1);
return statearr_45432;
})();if(cljs.core.truth_(inst_45416))
{var statearr_45433_45447 = state_45426__$1;(statearr_45433_45447[1] = 5);
} else
{var statearr_45434_45448 = state_45426__$1;(statearr_45434_45448[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45427 === 3))
{var inst_45424 = (state_45426[2]);var state_45426__$1 = state_45426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45426__$1,inst_45424);
} else
{if((state_val_45427 === 2))
{var state_45426__$1 = state_45426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45426__$1,4,ch);
} else
{if((state_val_45427 === 1))
{var inst_45412 = init;var state_45426__$1 = (function (){var statearr_45435 = state_45426;(statearr_45435[8] = inst_45412);
return statearr_45435;
})();var statearr_45436_45449 = state_45426__$1;(statearr_45436_45449[2] = null);
(statearr_45436_45449[1] = 2);
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
var state_machine__6782__auto____0 = (function (){var statearr_45440 = [null,null,null,null,null,null,null,null,null];(statearr_45440[0] = state_machine__6782__auto__);
(statearr_45440[1] = 1);
return statearr_45440;
});
var state_machine__6782__auto____1 = (function (state_45426){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_45426);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e45441){if((e45441 instanceof Object))
{var ex__6785__auto__ = e45441;var statearr_45442_45450 = state_45426;(statearr_45442_45450[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45426);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45451 = state_45426;
state_45426 = G__45451;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_45426){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_45426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_45443 = f__6797__auto__.call(null);(statearr_45443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto__);
return statearr_45443;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6796__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_45513){var state_val_45514 = (state_45513[1]);if((state_val_45514 === 1))
{var inst_45493 = cljs.core.seq.call(null,coll);var inst_45494 = inst_45493;var state_45513__$1 = (function (){var statearr_45515 = state_45513;(statearr_45515[7] = inst_45494);
return statearr_45515;
})();var statearr_45516_45534 = state_45513__$1;(statearr_45516_45534[2] = null);
(statearr_45516_45534[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45514 === 2))
{var inst_45494 = (state_45513[7]);var state_45513__$1 = state_45513;if(cljs.core.truth_(inst_45494))
{var statearr_45517_45535 = state_45513__$1;(statearr_45517_45535[1] = 4);
} else
{var statearr_45518_45536 = state_45513__$1;(statearr_45518_45536[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45514 === 3))
{var inst_45511 = (state_45513[2]);var state_45513__$1 = state_45513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45513__$1,inst_45511);
} else
{if((state_val_45514 === 4))
{var inst_45494 = (state_45513[7]);var inst_45497 = cljs.core.first.call(null,inst_45494);var state_45513__$1 = state_45513;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45513__$1,7,ch,inst_45497);
} else
{if((state_val_45514 === 5))
{var state_45513__$1 = state_45513;if(cljs.core.truth_(close_QMARK_))
{var statearr_45519_45537 = state_45513__$1;(statearr_45519_45537[1] = 8);
} else
{var statearr_45520_45538 = state_45513__$1;(statearr_45520_45538[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45514 === 6))
{var inst_45509 = (state_45513[2]);var state_45513__$1 = state_45513;var statearr_45521_45539 = state_45513__$1;(statearr_45521_45539[2] = inst_45509);
(statearr_45521_45539[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45514 === 7))
{var inst_45494 = (state_45513[7]);var inst_45499 = (state_45513[2]);var inst_45500 = cljs.core.next.call(null,inst_45494);var inst_45494__$1 = inst_45500;var state_45513__$1 = (function (){var statearr_45522 = state_45513;(statearr_45522[7] = inst_45494__$1);
(statearr_45522[8] = inst_45499);
return statearr_45522;
})();var statearr_45523_45540 = state_45513__$1;(statearr_45523_45540[2] = null);
(statearr_45523_45540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45514 === 8))
{var inst_45504 = cljs.core.async.close_BANG_.call(null,ch);var state_45513__$1 = state_45513;var statearr_45524_45541 = state_45513__$1;(statearr_45524_45541[2] = inst_45504);
(statearr_45524_45541[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45514 === 9))
{var state_45513__$1 = state_45513;var statearr_45525_45542 = state_45513__$1;(statearr_45525_45542[2] = null);
(statearr_45525_45542[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45514 === 10))
{var inst_45507 = (state_45513[2]);var state_45513__$1 = state_45513;var statearr_45526_45543 = state_45513__$1;(statearr_45526_45543[2] = inst_45507);
(statearr_45526_45543[1] = 6);
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
var state_machine__6782__auto____0 = (function (){var statearr_45530 = [null,null,null,null,null,null,null,null,null];(statearr_45530[0] = state_machine__6782__auto__);
(statearr_45530[1] = 1);
return statearr_45530;
});
var state_machine__6782__auto____1 = (function (state_45513){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_45513);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e45531){if((e45531 instanceof Object))
{var ex__6785__auto__ = e45531;var statearr_45532_45544 = state_45513;(statearr_45532_45544[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45513);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45531;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45545 = state_45513;
state_45513 = G__45545;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_45513){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_45513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_45533 = f__6797__auto__.call(null);(statearr_45533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto__);
return statearr_45533;
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
cljs.core.async.Mux = (function (){var obj45547 = {};return obj45547;
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
cljs.core.async.Mult = (function (){var obj45549 = {};return obj45549;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t45773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t45773 = (function (cs,ch,mult,meta45774){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta45774 = meta45774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45773.cljs$lang$type = true;
cljs.core.async.t45773.cljs$lang$ctorStr = "cljs.core.async/t45773";
cljs.core.async.t45773.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t45773");
});})(cs))
;
cljs.core.async.t45773.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t45773.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t45773.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t45773.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t45773.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t45773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t45773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45775){var self__ = this;
var _45775__$1 = this;return self__.meta45774;
});})(cs))
;
cljs.core.async.t45773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45775,meta45774__$1){var self__ = this;
var _45775__$1 = this;return (new cljs.core.async.t45773(self__.cs,self__.ch,self__.mult,meta45774__$1));
});})(cs))
;
cljs.core.async.__GT_t45773 = ((function (cs){
return (function __GT_t45773(cs__$1,ch__$1,mult__$1,meta45774){return (new cljs.core.async.t45773(cs__$1,ch__$1,mult__$1,meta45774));
});})(cs))
;
}
return (new cljs.core.async.t45773(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6796__auto___45996 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_45910){var state_val_45911 = (state_45910[1]);if((state_val_45911 === 32))
{var inst_45854 = (state_45910[7]);var inst_45778 = (state_45910[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45910,31,Object,null,30);var inst_45861 = cljs.core.async.put_BANG_.call(null,inst_45854,inst_45778,done);var state_45910__$1 = state_45910;var statearr_45912_45997 = state_45910__$1;(statearr_45912_45997[2] = inst_45861);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45910__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 1))
{var state_45910__$1 = state_45910;var statearr_45913_45998 = state_45910__$1;(statearr_45913_45998[2] = null);
(statearr_45913_45998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 33))
{var inst_45867 = (state_45910[9]);var inst_45869 = cljs.core.chunked_seq_QMARK_.call(null,inst_45867);var state_45910__$1 = state_45910;if(inst_45869)
{var statearr_45914_45999 = state_45910__$1;(statearr_45914_45999[1] = 36);
} else
{var statearr_45915_46000 = state_45910__$1;(statearr_45915_46000[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 2))
{var state_45910__$1 = state_45910;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45910__$1,4,ch);
} else
{if((state_val_45911 === 34))
{var state_45910__$1 = state_45910;var statearr_45916_46001 = state_45910__$1;(statearr_45916_46001[2] = null);
(statearr_45916_46001[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 3))
{var inst_45908 = (state_45910[2]);var state_45910__$1 = state_45910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45910__$1,inst_45908);
} else
{if((state_val_45911 === 35))
{var inst_45892 = (state_45910[2]);var state_45910__$1 = state_45910;var statearr_45917_46002 = state_45910__$1;(statearr_45917_46002[2] = inst_45892);
(statearr_45917_46002[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 4))
{var inst_45778 = (state_45910[8]);var inst_45778__$1 = (state_45910[2]);var inst_45779 = (inst_45778__$1 == null);var state_45910__$1 = (function (){var statearr_45918 = state_45910;(statearr_45918[8] = inst_45778__$1);
return statearr_45918;
})();if(cljs.core.truth_(inst_45779))
{var statearr_45919_46003 = state_45910__$1;(statearr_45919_46003[1] = 5);
} else
{var statearr_45920_46004 = state_45910__$1;(statearr_45920_46004[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 36))
{var inst_45867 = (state_45910[9]);var inst_45871 = cljs.core.chunk_first.call(null,inst_45867);var inst_45872 = cljs.core.chunk_rest.call(null,inst_45867);var inst_45873 = cljs.core.count.call(null,inst_45871);var inst_45846 = inst_45872;var inst_45847 = inst_45871;var inst_45848 = inst_45873;var inst_45849 = 0;var state_45910__$1 = (function (){var statearr_45921 = state_45910;(statearr_45921[10] = inst_45847);
(statearr_45921[11] = inst_45846);
(statearr_45921[12] = inst_45849);
(statearr_45921[13] = inst_45848);
return statearr_45921;
})();var statearr_45922_46005 = state_45910__$1;(statearr_45922_46005[2] = null);
(statearr_45922_46005[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 5))
{var inst_45785 = cljs.core.deref.call(null,cs);var inst_45786 = cljs.core.seq.call(null,inst_45785);var inst_45787 = inst_45786;var inst_45788 = null;var inst_45789 = 0;var inst_45790 = 0;var state_45910__$1 = (function (){var statearr_45923 = state_45910;(statearr_45923[14] = inst_45790);
(statearr_45923[15] = inst_45787);
(statearr_45923[16] = inst_45788);
(statearr_45923[17] = inst_45789);
return statearr_45923;
})();var statearr_45924_46006 = state_45910__$1;(statearr_45924_46006[2] = null);
(statearr_45924_46006[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 37))
{var inst_45867 = (state_45910[9]);var inst_45876 = cljs.core.first.call(null,inst_45867);var state_45910__$1 = (function (){var statearr_45925 = state_45910;(statearr_45925[18] = inst_45876);
return statearr_45925;
})();var statearr_45926_46007 = state_45910__$1;(statearr_45926_46007[2] = null);
(statearr_45926_46007[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 6))
{var inst_45838 = (state_45910[19]);var inst_45837 = cljs.core.deref.call(null,cs);var inst_45838__$1 = cljs.core.keys.call(null,inst_45837);var inst_45839 = cljs.core.count.call(null,inst_45838__$1);var inst_45840 = cljs.core.reset_BANG_.call(null,dctr,inst_45839);var inst_45845 = cljs.core.seq.call(null,inst_45838__$1);var inst_45846 = inst_45845;var inst_45847 = null;var inst_45848 = 0;var inst_45849 = 0;var state_45910__$1 = (function (){var statearr_45927 = state_45910;(statearr_45927[19] = inst_45838__$1);
(statearr_45927[10] = inst_45847);
(statearr_45927[11] = inst_45846);
(statearr_45927[12] = inst_45849);
(statearr_45927[13] = inst_45848);
(statearr_45927[20] = inst_45840);
return statearr_45927;
})();var statearr_45928_46008 = state_45910__$1;(statearr_45928_46008[2] = null);
(statearr_45928_46008[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 38))
{var inst_45889 = (state_45910[2]);var state_45910__$1 = state_45910;var statearr_45929_46009 = state_45910__$1;(statearr_45929_46009[2] = inst_45889);
(statearr_45929_46009[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 7))
{var inst_45906 = (state_45910[2]);var state_45910__$1 = state_45910;var statearr_45930_46010 = state_45910__$1;(statearr_45930_46010[2] = inst_45906);
(statearr_45930_46010[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 39))
{var inst_45867 = (state_45910[9]);var inst_45885 = (state_45910[2]);var inst_45886 = cljs.core.next.call(null,inst_45867);var inst_45846 = inst_45886;var inst_45847 = null;var inst_45848 = 0;var inst_45849 = 0;var state_45910__$1 = (function (){var statearr_45931 = state_45910;(statearr_45931[10] = inst_45847);
(statearr_45931[11] = inst_45846);
(statearr_45931[12] = inst_45849);
(statearr_45931[13] = inst_45848);
(statearr_45931[21] = inst_45885);
return statearr_45931;
})();var statearr_45932_46011 = state_45910__$1;(statearr_45932_46011[2] = null);
(statearr_45932_46011[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 8))
{var inst_45790 = (state_45910[14]);var inst_45789 = (state_45910[17]);var inst_45792 = (inst_45790 < inst_45789);var inst_45793 = inst_45792;var state_45910__$1 = state_45910;if(cljs.core.truth_(inst_45793))
{var statearr_45933_46012 = state_45910__$1;(statearr_45933_46012[1] = 10);
} else
{var statearr_45934_46013 = state_45910__$1;(statearr_45934_46013[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 40))
{var inst_45876 = (state_45910[18]);var inst_45877 = (state_45910[2]);var inst_45878 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_45879 = cljs.core.async.untap_STAR_.call(null,m,inst_45876);var state_45910__$1 = (function (){var statearr_45935 = state_45910;(statearr_45935[22] = inst_45877);
(statearr_45935[23] = inst_45878);
return statearr_45935;
})();var statearr_45936_46014 = state_45910__$1;(statearr_45936_46014[2] = inst_45879);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45910__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 9))
{var inst_45835 = (state_45910[2]);var state_45910__$1 = state_45910;var statearr_45937_46015 = state_45910__$1;(statearr_45937_46015[2] = inst_45835);
(statearr_45937_46015[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 41))
{var inst_45778 = (state_45910[8]);var inst_45876 = (state_45910[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45910,40,Object,null,39);var inst_45883 = cljs.core.async.put_BANG_.call(null,inst_45876,inst_45778,done);var state_45910__$1 = state_45910;var statearr_45938_46016 = state_45910__$1;(statearr_45938_46016[2] = inst_45883);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45910__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 10))
{var inst_45790 = (state_45910[14]);var inst_45788 = (state_45910[16]);var inst_45796 = cljs.core._nth.call(null,inst_45788,inst_45790);var inst_45797 = cljs.core.nth.call(null,inst_45796,0,null);var inst_45798 = cljs.core.nth.call(null,inst_45796,1,null);var state_45910__$1 = (function (){var statearr_45939 = state_45910;(statearr_45939[24] = inst_45797);
return statearr_45939;
})();if(cljs.core.truth_(inst_45798))
{var statearr_45940_46017 = state_45910__$1;(statearr_45940_46017[1] = 13);
} else
{var statearr_45941_46018 = state_45910__$1;(statearr_45941_46018[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 42))
{var state_45910__$1 = state_45910;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45910__$1,45,dchan);
} else
{if((state_val_45911 === 11))
{var inst_45807 = (state_45910[25]);var inst_45787 = (state_45910[15]);var inst_45807__$1 = cljs.core.seq.call(null,inst_45787);var state_45910__$1 = (function (){var statearr_45942 = state_45910;(statearr_45942[25] = inst_45807__$1);
return statearr_45942;
})();if(inst_45807__$1)
{var statearr_45943_46019 = state_45910__$1;(statearr_45943_46019[1] = 16);
} else
{var statearr_45944_46020 = state_45910__$1;(statearr_45944_46020[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 43))
{var state_45910__$1 = state_45910;var statearr_45945_46021 = state_45910__$1;(statearr_45945_46021[2] = null);
(statearr_45945_46021[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 12))
{var inst_45833 = (state_45910[2]);var state_45910__$1 = state_45910;var statearr_45946_46022 = state_45910__$1;(statearr_45946_46022[2] = inst_45833);
(statearr_45946_46022[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 44))
{var inst_45903 = (state_45910[2]);var state_45910__$1 = (function (){var statearr_45947 = state_45910;(statearr_45947[26] = inst_45903);
return statearr_45947;
})();var statearr_45948_46023 = state_45910__$1;(statearr_45948_46023[2] = null);
(statearr_45948_46023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 13))
{var inst_45797 = (state_45910[24]);var inst_45800 = cljs.core.async.close_BANG_.call(null,inst_45797);var state_45910__$1 = state_45910;var statearr_45949_46024 = state_45910__$1;(statearr_45949_46024[2] = inst_45800);
(statearr_45949_46024[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 45))
{var inst_45900 = (state_45910[2]);var state_45910__$1 = state_45910;var statearr_45953_46025 = state_45910__$1;(statearr_45953_46025[2] = inst_45900);
(statearr_45953_46025[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 14))
{var state_45910__$1 = state_45910;var statearr_45954_46026 = state_45910__$1;(statearr_45954_46026[2] = null);
(statearr_45954_46026[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 15))
{var inst_45790 = (state_45910[14]);var inst_45787 = (state_45910[15]);var inst_45788 = (state_45910[16]);var inst_45789 = (state_45910[17]);var inst_45803 = (state_45910[2]);var inst_45804 = (inst_45790 + 1);var tmp45950 = inst_45787;var tmp45951 = inst_45788;var tmp45952 = inst_45789;var inst_45787__$1 = tmp45950;var inst_45788__$1 = tmp45951;var inst_45789__$1 = tmp45952;var inst_45790__$1 = inst_45804;var state_45910__$1 = (function (){var statearr_45955 = state_45910;(statearr_45955[27] = inst_45803);
(statearr_45955[14] = inst_45790__$1);
(statearr_45955[15] = inst_45787__$1);
(statearr_45955[16] = inst_45788__$1);
(statearr_45955[17] = inst_45789__$1);
return statearr_45955;
})();var statearr_45956_46027 = state_45910__$1;(statearr_45956_46027[2] = null);
(statearr_45956_46027[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 16))
{var inst_45807 = (state_45910[25]);var inst_45809 = cljs.core.chunked_seq_QMARK_.call(null,inst_45807);var state_45910__$1 = state_45910;if(inst_45809)
{var statearr_45957_46028 = state_45910__$1;(statearr_45957_46028[1] = 19);
} else
{var statearr_45958_46029 = state_45910__$1;(statearr_45958_46029[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 17))
{var state_45910__$1 = state_45910;var statearr_45959_46030 = state_45910__$1;(statearr_45959_46030[2] = null);
(statearr_45959_46030[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 18))
{var inst_45831 = (state_45910[2]);var state_45910__$1 = state_45910;var statearr_45960_46031 = state_45910__$1;(statearr_45960_46031[2] = inst_45831);
(statearr_45960_46031[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 19))
{var inst_45807 = (state_45910[25]);var inst_45811 = cljs.core.chunk_first.call(null,inst_45807);var inst_45812 = cljs.core.chunk_rest.call(null,inst_45807);var inst_45813 = cljs.core.count.call(null,inst_45811);var inst_45787 = inst_45812;var inst_45788 = inst_45811;var inst_45789 = inst_45813;var inst_45790 = 0;var state_45910__$1 = (function (){var statearr_45961 = state_45910;(statearr_45961[14] = inst_45790);
(statearr_45961[15] = inst_45787);
(statearr_45961[16] = inst_45788);
(statearr_45961[17] = inst_45789);
return statearr_45961;
})();var statearr_45962_46032 = state_45910__$1;(statearr_45962_46032[2] = null);
(statearr_45962_46032[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 20))
{var inst_45807 = (state_45910[25]);var inst_45817 = cljs.core.first.call(null,inst_45807);var inst_45818 = cljs.core.nth.call(null,inst_45817,0,null);var inst_45819 = cljs.core.nth.call(null,inst_45817,1,null);var state_45910__$1 = (function (){var statearr_45963 = state_45910;(statearr_45963[28] = inst_45818);
return statearr_45963;
})();if(cljs.core.truth_(inst_45819))
{var statearr_45964_46033 = state_45910__$1;(statearr_45964_46033[1] = 22);
} else
{var statearr_45965_46034 = state_45910__$1;(statearr_45965_46034[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 21))
{var inst_45828 = (state_45910[2]);var state_45910__$1 = state_45910;var statearr_45966_46035 = state_45910__$1;(statearr_45966_46035[2] = inst_45828);
(statearr_45966_46035[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 22))
{var inst_45818 = (state_45910[28]);var inst_45821 = cljs.core.async.close_BANG_.call(null,inst_45818);var state_45910__$1 = state_45910;var statearr_45967_46036 = state_45910__$1;(statearr_45967_46036[2] = inst_45821);
(statearr_45967_46036[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 23))
{var state_45910__$1 = state_45910;var statearr_45968_46037 = state_45910__$1;(statearr_45968_46037[2] = null);
(statearr_45968_46037[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 24))
{var inst_45807 = (state_45910[25]);var inst_45824 = (state_45910[2]);var inst_45825 = cljs.core.next.call(null,inst_45807);var inst_45787 = inst_45825;var inst_45788 = null;var inst_45789 = 0;var inst_45790 = 0;var state_45910__$1 = (function (){var statearr_45969 = state_45910;(statearr_45969[29] = inst_45824);
(statearr_45969[14] = inst_45790);
(statearr_45969[15] = inst_45787);
(statearr_45969[16] = inst_45788);
(statearr_45969[17] = inst_45789);
return statearr_45969;
})();var statearr_45970_46038 = state_45910__$1;(statearr_45970_46038[2] = null);
(statearr_45970_46038[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 25))
{var inst_45849 = (state_45910[12]);var inst_45848 = (state_45910[13]);var inst_45851 = (inst_45849 < inst_45848);var inst_45852 = inst_45851;var state_45910__$1 = state_45910;if(cljs.core.truth_(inst_45852))
{var statearr_45971_46039 = state_45910__$1;(statearr_45971_46039[1] = 27);
} else
{var statearr_45972_46040 = state_45910__$1;(statearr_45972_46040[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 26))
{var inst_45838 = (state_45910[19]);var inst_45896 = (state_45910[2]);var inst_45897 = cljs.core.seq.call(null,inst_45838);var state_45910__$1 = (function (){var statearr_45973 = state_45910;(statearr_45973[30] = inst_45896);
return statearr_45973;
})();if(inst_45897)
{var statearr_45974_46041 = state_45910__$1;(statearr_45974_46041[1] = 42);
} else
{var statearr_45975_46042 = state_45910__$1;(statearr_45975_46042[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 27))
{var inst_45847 = (state_45910[10]);var inst_45849 = (state_45910[12]);var inst_45854 = cljs.core._nth.call(null,inst_45847,inst_45849);var state_45910__$1 = (function (){var statearr_45976 = state_45910;(statearr_45976[7] = inst_45854);
return statearr_45976;
})();var statearr_45977_46043 = state_45910__$1;(statearr_45977_46043[2] = null);
(statearr_45977_46043[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 28))
{var inst_45846 = (state_45910[11]);var inst_45867 = (state_45910[9]);var inst_45867__$1 = cljs.core.seq.call(null,inst_45846);var state_45910__$1 = (function (){var statearr_45981 = state_45910;(statearr_45981[9] = inst_45867__$1);
return statearr_45981;
})();if(inst_45867__$1)
{var statearr_45982_46044 = state_45910__$1;(statearr_45982_46044[1] = 33);
} else
{var statearr_45983_46045 = state_45910__$1;(statearr_45983_46045[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 29))
{var inst_45894 = (state_45910[2]);var state_45910__$1 = state_45910;var statearr_45984_46046 = state_45910__$1;(statearr_45984_46046[2] = inst_45894);
(statearr_45984_46046[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 30))
{var inst_45847 = (state_45910[10]);var inst_45846 = (state_45910[11]);var inst_45849 = (state_45910[12]);var inst_45848 = (state_45910[13]);var inst_45863 = (state_45910[2]);var inst_45864 = (inst_45849 + 1);var tmp45978 = inst_45847;var tmp45979 = inst_45846;var tmp45980 = inst_45848;var inst_45846__$1 = tmp45979;var inst_45847__$1 = tmp45978;var inst_45848__$1 = tmp45980;var inst_45849__$1 = inst_45864;var state_45910__$1 = (function (){var statearr_45985 = state_45910;(statearr_45985[31] = inst_45863);
(statearr_45985[10] = inst_45847__$1);
(statearr_45985[11] = inst_45846__$1);
(statearr_45985[12] = inst_45849__$1);
(statearr_45985[13] = inst_45848__$1);
return statearr_45985;
})();var statearr_45986_46047 = state_45910__$1;(statearr_45986_46047[2] = null);
(statearr_45986_46047[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45911 === 31))
{var inst_45854 = (state_45910[7]);var inst_45855 = (state_45910[2]);var inst_45856 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_45857 = cljs.core.async.untap_STAR_.call(null,m,inst_45854);var state_45910__$1 = (function (){var statearr_45987 = state_45910;(statearr_45987[32] = inst_45855);
(statearr_45987[33] = inst_45856);
return statearr_45987;
})();var statearr_45988_46048 = state_45910__$1;(statearr_45988_46048[2] = inst_45857);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45910__$1);
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
var state_machine__6782__auto____0 = (function (){var statearr_45992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45992[0] = state_machine__6782__auto__);
(statearr_45992[1] = 1);
return statearr_45992;
});
var state_machine__6782__auto____1 = (function (state_45910){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_45910);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e45993){if((e45993 instanceof Object))
{var ex__6785__auto__ = e45993;var statearr_45994_46049 = state_45910;(statearr_45994_46049[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45910);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46050 = state_45910;
state_45910 = G__46050;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_45910){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_45910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_45995 = f__6797__auto__.call(null);(statearr_45995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___45996);
return statearr_45995;
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
cljs.core.async.Mix = (function (){var obj46052 = {};return obj46052;
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
;var m = (function (){if(typeof cljs.core.async.t46162 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46162 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta46163){
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
this.meta46163 = meta46163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46162.cljs$lang$type = true;
cljs.core.async.t46162.cljs$lang$ctorStr = "cljs.core.async/t46162";
cljs.core.async.t46162.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t46162");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46162.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t46162.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46162.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46162.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46162.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46162.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46162.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t46162.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46164){var self__ = this;
var _46164__$1 = this;return self__.meta46163;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t46162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46164,meta46163__$1){var self__ = this;
var _46164__$1 = this;return (new cljs.core.async.t46162(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta46163__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t46162 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t46162(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta46163){return (new cljs.core.async.t46162(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta46163));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t46162(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6796__auto___46271 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_46229){var state_val_46230 = (state_46229[1]);if((state_val_46230 === 1))
{var inst_46168 = (state_46229[7]);var inst_46168__$1 = calc_state.call(null);var inst_46169 = cljs.core.seq_QMARK_.call(null,inst_46168__$1);var state_46229__$1 = (function (){var statearr_46231 = state_46229;(statearr_46231[7] = inst_46168__$1);
return statearr_46231;
})();if(inst_46169)
{var statearr_46232_46272 = state_46229__$1;(statearr_46232_46272[1] = 2);
} else
{var statearr_46233_46273 = state_46229__$1;(statearr_46233_46273[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 2))
{var inst_46168 = (state_46229[7]);var inst_46171 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46168);var state_46229__$1 = state_46229;var statearr_46234_46274 = state_46229__$1;(statearr_46234_46274[2] = inst_46171);
(statearr_46234_46274[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 3))
{var inst_46168 = (state_46229[7]);var state_46229__$1 = state_46229;var statearr_46235_46275 = state_46229__$1;(statearr_46235_46275[2] = inst_46168);
(statearr_46235_46275[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 4))
{var inst_46168 = (state_46229[7]);var inst_46174 = (state_46229[2]);var inst_46175 = cljs.core.get.call(null,inst_46174,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_46176 = cljs.core.get.call(null,inst_46174,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_46177 = cljs.core.get.call(null,inst_46174,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_46178 = inst_46168;var state_46229__$1 = (function (){var statearr_46236 = state_46229;(statearr_46236[8] = inst_46177);
(statearr_46236[9] = inst_46178);
(statearr_46236[10] = inst_46175);
(statearr_46236[11] = inst_46176);
return statearr_46236;
})();var statearr_46237_46276 = state_46229__$1;(statearr_46237_46276[2] = null);
(statearr_46237_46276[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 5))
{var inst_46178 = (state_46229[9]);var inst_46181 = cljs.core.seq_QMARK_.call(null,inst_46178);var state_46229__$1 = state_46229;if(inst_46181)
{var statearr_46238_46277 = state_46229__$1;(statearr_46238_46277[1] = 7);
} else
{var statearr_46239_46278 = state_46229__$1;(statearr_46239_46278[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 6))
{var inst_46227 = (state_46229[2]);var state_46229__$1 = state_46229;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46229__$1,inst_46227);
} else
{if((state_val_46230 === 7))
{var inst_46178 = (state_46229[9]);var inst_46183 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46178);var state_46229__$1 = state_46229;var statearr_46240_46279 = state_46229__$1;(statearr_46240_46279[2] = inst_46183);
(statearr_46240_46279[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 8))
{var inst_46178 = (state_46229[9]);var state_46229__$1 = state_46229;var statearr_46241_46280 = state_46229__$1;(statearr_46241_46280[2] = inst_46178);
(statearr_46241_46280[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 9))
{var inst_46186 = (state_46229[12]);var inst_46186__$1 = (state_46229[2]);var inst_46187 = cljs.core.get.call(null,inst_46186__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_46188 = cljs.core.get.call(null,inst_46186__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_46189 = cljs.core.get.call(null,inst_46186__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_46229__$1 = (function (){var statearr_46242 = state_46229;(statearr_46242[13] = inst_46188);
(statearr_46242[14] = inst_46189);
(statearr_46242[12] = inst_46186__$1);
return statearr_46242;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_46229__$1,10,inst_46187);
} else
{if((state_val_46230 === 10))
{var inst_46194 = (state_46229[15]);var inst_46193 = (state_46229[16]);var inst_46192 = (state_46229[2]);var inst_46193__$1 = cljs.core.nth.call(null,inst_46192,0,null);var inst_46194__$1 = cljs.core.nth.call(null,inst_46192,1,null);var inst_46195 = (inst_46193__$1 == null);var inst_46196 = cljs.core._EQ_.call(null,inst_46194__$1,change);var inst_46197 = (inst_46195) || (inst_46196);var state_46229__$1 = (function (){var statearr_46243 = state_46229;(statearr_46243[15] = inst_46194__$1);
(statearr_46243[16] = inst_46193__$1);
return statearr_46243;
})();if(cljs.core.truth_(inst_46197))
{var statearr_46244_46281 = state_46229__$1;(statearr_46244_46281[1] = 11);
} else
{var statearr_46245_46282 = state_46229__$1;(statearr_46245_46282[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 11))
{var inst_46193 = (state_46229[16]);var inst_46199 = (inst_46193 == null);var state_46229__$1 = state_46229;if(cljs.core.truth_(inst_46199))
{var statearr_46246_46283 = state_46229__$1;(statearr_46246_46283[1] = 14);
} else
{var statearr_46247_46284 = state_46229__$1;(statearr_46247_46284[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 12))
{var inst_46189 = (state_46229[14]);var inst_46194 = (state_46229[15]);var inst_46208 = (state_46229[17]);var inst_46208__$1 = inst_46189.call(null,inst_46194);var state_46229__$1 = (function (){var statearr_46248 = state_46229;(statearr_46248[17] = inst_46208__$1);
return statearr_46248;
})();if(cljs.core.truth_(inst_46208__$1))
{var statearr_46249_46285 = state_46229__$1;(statearr_46249_46285[1] = 17);
} else
{var statearr_46250_46286 = state_46229__$1;(statearr_46250_46286[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 13))
{var inst_46225 = (state_46229[2]);var state_46229__$1 = state_46229;var statearr_46251_46287 = state_46229__$1;(statearr_46251_46287[2] = inst_46225);
(statearr_46251_46287[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 14))
{var inst_46194 = (state_46229[15]);var inst_46201 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46194);var state_46229__$1 = state_46229;var statearr_46252_46288 = state_46229__$1;(statearr_46252_46288[2] = inst_46201);
(statearr_46252_46288[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 15))
{var state_46229__$1 = state_46229;var statearr_46253_46289 = state_46229__$1;(statearr_46253_46289[2] = null);
(statearr_46253_46289[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 16))
{var inst_46204 = (state_46229[2]);var inst_46205 = calc_state.call(null);var inst_46178 = inst_46205;var state_46229__$1 = (function (){var statearr_46254 = state_46229;(statearr_46254[9] = inst_46178);
(statearr_46254[18] = inst_46204);
return statearr_46254;
})();var statearr_46255_46290 = state_46229__$1;(statearr_46255_46290[2] = null);
(statearr_46255_46290[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 17))
{var inst_46208 = (state_46229[17]);var state_46229__$1 = state_46229;var statearr_46256_46291 = state_46229__$1;(statearr_46256_46291[2] = inst_46208);
(statearr_46256_46291[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 18))
{var inst_46188 = (state_46229[13]);var inst_46189 = (state_46229[14]);var inst_46194 = (state_46229[15]);var inst_46211 = cljs.core.empty_QMARK_.call(null,inst_46189);var inst_46212 = inst_46188.call(null,inst_46194);var inst_46213 = cljs.core.not.call(null,inst_46212);var inst_46214 = (inst_46211) && (inst_46213);var state_46229__$1 = state_46229;var statearr_46257_46292 = state_46229__$1;(statearr_46257_46292[2] = inst_46214);
(statearr_46257_46292[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 19))
{var inst_46216 = (state_46229[2]);var state_46229__$1 = state_46229;if(cljs.core.truth_(inst_46216))
{var statearr_46258_46293 = state_46229__$1;(statearr_46258_46293[1] = 20);
} else
{var statearr_46259_46294 = state_46229__$1;(statearr_46259_46294[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 20))
{var inst_46193 = (state_46229[16]);var state_46229__$1 = state_46229;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46229__$1,23,out,inst_46193);
} else
{if((state_val_46230 === 21))
{var state_46229__$1 = state_46229;var statearr_46260_46295 = state_46229__$1;(statearr_46260_46295[2] = null);
(statearr_46260_46295[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 22))
{var inst_46186 = (state_46229[12]);var inst_46222 = (state_46229[2]);var inst_46178 = inst_46186;var state_46229__$1 = (function (){var statearr_46261 = state_46229;(statearr_46261[19] = inst_46222);
(statearr_46261[9] = inst_46178);
return statearr_46261;
})();var statearr_46262_46296 = state_46229__$1;(statearr_46262_46296[2] = null);
(statearr_46262_46296[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46230 === 23))
{var inst_46219 = (state_46229[2]);var state_46229__$1 = state_46229;var statearr_46263_46297 = state_46229__$1;(statearr_46263_46297[2] = inst_46219);
(statearr_46263_46297[1] = 22);
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
var state_machine__6782__auto____0 = (function (){var statearr_46267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46267[0] = state_machine__6782__auto__);
(statearr_46267[1] = 1);
return statearr_46267;
});
var state_machine__6782__auto____1 = (function (state_46229){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_46229);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e46268){if((e46268 instanceof Object))
{var ex__6785__auto__ = e46268;var statearr_46269_46298 = state_46229;(statearr_46269_46298[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46229);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46268;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46299 = state_46229;
state_46229 = G__46299;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_46229){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_46229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_46270 = f__6797__auto__.call(null);(statearr_46270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___46271);
return statearr_46270;
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
cljs.core.async.Pub = (function (){var obj46301 = {};return obj46301;
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
return (function (p1__46302_SHARP_){if(cljs.core.truth_(p1__46302_SHARP_.call(null,topic)))
{return p1__46302_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__46302_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t46427 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46427 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta46428){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta46428 = meta46428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46427.cljs$lang$type = true;
cljs.core.async.t46427.cljs$lang$ctorStr = "cljs.core.async/t46427";
cljs.core.async.t46427.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t46427");
});})(mults,ensure_mult))
;
cljs.core.async.t46427.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t46427.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t46427.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t46427.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t46427.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t46427.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t46427.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t46427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46429){var self__ = this;
var _46429__$1 = this;return self__.meta46428;
});})(mults,ensure_mult))
;
cljs.core.async.t46427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46429,meta46428__$1){var self__ = this;
var _46429__$1 = this;return (new cljs.core.async.t46427(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta46428__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t46427 = ((function (mults,ensure_mult){
return (function __GT_t46427(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta46428){return (new cljs.core.async.t46427(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta46428));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t46427(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6796__auto___46551 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_46503){var state_val_46504 = (state_46503[1]);if((state_val_46504 === 1))
{var state_46503__$1 = state_46503;var statearr_46505_46552 = state_46503__$1;(statearr_46505_46552[2] = null);
(statearr_46505_46552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 2))
{var state_46503__$1 = state_46503;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46503__$1,4,ch);
} else
{if((state_val_46504 === 3))
{var inst_46501 = (state_46503[2]);var state_46503__$1 = state_46503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46503__$1,inst_46501);
} else
{if((state_val_46504 === 4))
{var inst_46432 = (state_46503[7]);var inst_46432__$1 = (state_46503[2]);var inst_46433 = (inst_46432__$1 == null);var state_46503__$1 = (function (){var statearr_46506 = state_46503;(statearr_46506[7] = inst_46432__$1);
return statearr_46506;
})();if(cljs.core.truth_(inst_46433))
{var statearr_46507_46553 = state_46503__$1;(statearr_46507_46553[1] = 5);
} else
{var statearr_46508_46554 = state_46503__$1;(statearr_46508_46554[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 5))
{var inst_46439 = cljs.core.deref.call(null,mults);var inst_46440 = cljs.core.vals.call(null,inst_46439);var inst_46441 = cljs.core.seq.call(null,inst_46440);var inst_46442 = inst_46441;var inst_46443 = null;var inst_46444 = 0;var inst_46445 = 0;var state_46503__$1 = (function (){var statearr_46509 = state_46503;(statearr_46509[8] = inst_46442);
(statearr_46509[9] = inst_46445);
(statearr_46509[10] = inst_46444);
(statearr_46509[11] = inst_46443);
return statearr_46509;
})();var statearr_46510_46555 = state_46503__$1;(statearr_46510_46555[2] = null);
(statearr_46510_46555[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 6))
{var inst_46432 = (state_46503[7]);var inst_46480 = (state_46503[12]);var inst_46482 = (state_46503[13]);var inst_46480__$1 = topic_fn.call(null,inst_46432);var inst_46481 = cljs.core.deref.call(null,mults);var inst_46482__$1 = cljs.core.get.call(null,inst_46481,inst_46480__$1);var state_46503__$1 = (function (){var statearr_46511 = state_46503;(statearr_46511[12] = inst_46480__$1);
(statearr_46511[13] = inst_46482__$1);
return statearr_46511;
})();if(cljs.core.truth_(inst_46482__$1))
{var statearr_46512_46556 = state_46503__$1;(statearr_46512_46556[1] = 19);
} else
{var statearr_46513_46557 = state_46503__$1;(statearr_46513_46557[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 7))
{var inst_46499 = (state_46503[2]);var state_46503__$1 = state_46503;var statearr_46514_46558 = state_46503__$1;(statearr_46514_46558[2] = inst_46499);
(statearr_46514_46558[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 8))
{var inst_46445 = (state_46503[9]);var inst_46444 = (state_46503[10]);var inst_46447 = (inst_46445 < inst_46444);var inst_46448 = inst_46447;var state_46503__$1 = state_46503;if(cljs.core.truth_(inst_46448))
{var statearr_46518_46559 = state_46503__$1;(statearr_46518_46559[1] = 10);
} else
{var statearr_46519_46560 = state_46503__$1;(statearr_46519_46560[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 9))
{var inst_46478 = (state_46503[2]);var state_46503__$1 = state_46503;var statearr_46520_46561 = state_46503__$1;(statearr_46520_46561[2] = inst_46478);
(statearr_46520_46561[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 10))
{var inst_46442 = (state_46503[8]);var inst_46445 = (state_46503[9]);var inst_46444 = (state_46503[10]);var inst_46443 = (state_46503[11]);var inst_46450 = cljs.core._nth.call(null,inst_46443,inst_46445);var inst_46451 = cljs.core.async.muxch_STAR_.call(null,inst_46450);var inst_46452 = cljs.core.async.close_BANG_.call(null,inst_46451);var inst_46453 = (inst_46445 + 1);var tmp46515 = inst_46442;var tmp46516 = inst_46444;var tmp46517 = inst_46443;var inst_46442__$1 = tmp46515;var inst_46443__$1 = tmp46517;var inst_46444__$1 = tmp46516;var inst_46445__$1 = inst_46453;var state_46503__$1 = (function (){var statearr_46521 = state_46503;(statearr_46521[8] = inst_46442__$1);
(statearr_46521[14] = inst_46452);
(statearr_46521[9] = inst_46445__$1);
(statearr_46521[10] = inst_46444__$1);
(statearr_46521[11] = inst_46443__$1);
return statearr_46521;
})();var statearr_46522_46562 = state_46503__$1;(statearr_46522_46562[2] = null);
(statearr_46522_46562[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 11))
{var inst_46442 = (state_46503[8]);var inst_46456 = (state_46503[15]);var inst_46456__$1 = cljs.core.seq.call(null,inst_46442);var state_46503__$1 = (function (){var statearr_46523 = state_46503;(statearr_46523[15] = inst_46456__$1);
return statearr_46523;
})();if(inst_46456__$1)
{var statearr_46524_46563 = state_46503__$1;(statearr_46524_46563[1] = 13);
} else
{var statearr_46525_46564 = state_46503__$1;(statearr_46525_46564[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 12))
{var inst_46476 = (state_46503[2]);var state_46503__$1 = state_46503;var statearr_46526_46565 = state_46503__$1;(statearr_46526_46565[2] = inst_46476);
(statearr_46526_46565[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 13))
{var inst_46456 = (state_46503[15]);var inst_46458 = cljs.core.chunked_seq_QMARK_.call(null,inst_46456);var state_46503__$1 = state_46503;if(inst_46458)
{var statearr_46527_46566 = state_46503__$1;(statearr_46527_46566[1] = 16);
} else
{var statearr_46528_46567 = state_46503__$1;(statearr_46528_46567[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 14))
{var state_46503__$1 = state_46503;var statearr_46529_46568 = state_46503__$1;(statearr_46529_46568[2] = null);
(statearr_46529_46568[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 15))
{var inst_46474 = (state_46503[2]);var state_46503__$1 = state_46503;var statearr_46530_46569 = state_46503__$1;(statearr_46530_46569[2] = inst_46474);
(statearr_46530_46569[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 16))
{var inst_46456 = (state_46503[15]);var inst_46460 = cljs.core.chunk_first.call(null,inst_46456);var inst_46461 = cljs.core.chunk_rest.call(null,inst_46456);var inst_46462 = cljs.core.count.call(null,inst_46460);var inst_46442 = inst_46461;var inst_46443 = inst_46460;var inst_46444 = inst_46462;var inst_46445 = 0;var state_46503__$1 = (function (){var statearr_46531 = state_46503;(statearr_46531[8] = inst_46442);
(statearr_46531[9] = inst_46445);
(statearr_46531[10] = inst_46444);
(statearr_46531[11] = inst_46443);
return statearr_46531;
})();var statearr_46532_46570 = state_46503__$1;(statearr_46532_46570[2] = null);
(statearr_46532_46570[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 17))
{var inst_46456 = (state_46503[15]);var inst_46465 = cljs.core.first.call(null,inst_46456);var inst_46466 = cljs.core.async.muxch_STAR_.call(null,inst_46465);var inst_46467 = cljs.core.async.close_BANG_.call(null,inst_46466);var inst_46468 = cljs.core.next.call(null,inst_46456);var inst_46442 = inst_46468;var inst_46443 = null;var inst_46444 = 0;var inst_46445 = 0;var state_46503__$1 = (function (){var statearr_46533 = state_46503;(statearr_46533[16] = inst_46467);
(statearr_46533[8] = inst_46442);
(statearr_46533[9] = inst_46445);
(statearr_46533[10] = inst_46444);
(statearr_46533[11] = inst_46443);
return statearr_46533;
})();var statearr_46534_46571 = state_46503__$1;(statearr_46534_46571[2] = null);
(statearr_46534_46571[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 18))
{var inst_46471 = (state_46503[2]);var state_46503__$1 = state_46503;var statearr_46535_46572 = state_46503__$1;(statearr_46535_46572[2] = inst_46471);
(statearr_46535_46572[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 19))
{var state_46503__$1 = state_46503;var statearr_46536_46573 = state_46503__$1;(statearr_46536_46573[2] = null);
(statearr_46536_46573[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 20))
{var state_46503__$1 = state_46503;var statearr_46537_46574 = state_46503__$1;(statearr_46537_46574[2] = null);
(statearr_46537_46574[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 21))
{var inst_46496 = (state_46503[2]);var state_46503__$1 = (function (){var statearr_46538 = state_46503;(statearr_46538[17] = inst_46496);
return statearr_46538;
})();var statearr_46539_46575 = state_46503__$1;(statearr_46539_46575[2] = null);
(statearr_46539_46575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 22))
{var inst_46493 = (state_46503[2]);var state_46503__$1 = state_46503;var statearr_46540_46576 = state_46503__$1;(statearr_46540_46576[2] = inst_46493);
(statearr_46540_46576[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 23))
{var inst_46480 = (state_46503[12]);var inst_46484 = (state_46503[2]);var inst_46485 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46480);var state_46503__$1 = (function (){var statearr_46541 = state_46503;(statearr_46541[18] = inst_46484);
return statearr_46541;
})();var statearr_46542_46577 = state_46503__$1;(statearr_46542_46577[2] = inst_46485);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46503__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46504 === 24))
{var inst_46432 = (state_46503[7]);var inst_46482 = (state_46503[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46503,23,Object,null,22);var inst_46489 = cljs.core.async.muxch_STAR_.call(null,inst_46482);var state_46503__$1 = state_46503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46503__$1,25,inst_46489,inst_46432);
} else
{if((state_val_46504 === 25))
{var inst_46491 = (state_46503[2]);var state_46503__$1 = state_46503;var statearr_46543_46578 = state_46503__$1;(statearr_46543_46578[2] = inst_46491);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46503__$1);
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
var state_machine__6782__auto____0 = (function (){var statearr_46547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46547[0] = state_machine__6782__auto__);
(statearr_46547[1] = 1);
return statearr_46547;
});
var state_machine__6782__auto____1 = (function (state_46503){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_46503);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e46548){if((e46548 instanceof Object))
{var ex__6785__auto__ = e46548;var statearr_46549_46579 = state_46503;(statearr_46549_46579[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46580 = state_46503;
state_46503 = G__46580;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_46503){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_46503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_46550 = f__6797__auto__.call(null);(statearr_46550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___46551);
return statearr_46550;
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
,cljs.core.range.call(null,cnt));var c__6796__auto___46717 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_46687){var state_val_46688 = (state_46687[1]);if((state_val_46688 === 1))
{var state_46687__$1 = state_46687;var statearr_46689_46718 = state_46687__$1;(statearr_46689_46718[2] = null);
(statearr_46689_46718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46688 === 2))
{var inst_46650 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_46651 = 0;var state_46687__$1 = (function (){var statearr_46690 = state_46687;(statearr_46690[7] = inst_46650);
(statearr_46690[8] = inst_46651);
return statearr_46690;
})();var statearr_46691_46719 = state_46687__$1;(statearr_46691_46719[2] = null);
(statearr_46691_46719[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46688 === 3))
{var inst_46685 = (state_46687[2]);var state_46687__$1 = state_46687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46687__$1,inst_46685);
} else
{if((state_val_46688 === 4))
{var inst_46651 = (state_46687[8]);var inst_46653 = (inst_46651 < cnt);var state_46687__$1 = state_46687;if(cljs.core.truth_(inst_46653))
{var statearr_46692_46720 = state_46687__$1;(statearr_46692_46720[1] = 6);
} else
{var statearr_46693_46721 = state_46687__$1;(statearr_46693_46721[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46688 === 5))
{var inst_46671 = (state_46687[2]);var state_46687__$1 = (function (){var statearr_46694 = state_46687;(statearr_46694[9] = inst_46671);
return statearr_46694;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46687__$1,12,dchan);
} else
{if((state_val_46688 === 6))
{var state_46687__$1 = state_46687;var statearr_46695_46722 = state_46687__$1;(statearr_46695_46722[2] = null);
(statearr_46695_46722[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46688 === 7))
{var state_46687__$1 = state_46687;var statearr_46696_46723 = state_46687__$1;(statearr_46696_46723[2] = null);
(statearr_46696_46723[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46688 === 8))
{var inst_46669 = (state_46687[2]);var state_46687__$1 = state_46687;var statearr_46697_46724 = state_46687__$1;(statearr_46697_46724[2] = inst_46669);
(statearr_46697_46724[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46688 === 9))
{var inst_46651 = (state_46687[8]);var inst_46664 = (state_46687[2]);var inst_46665 = (inst_46651 + 1);var inst_46651__$1 = inst_46665;var state_46687__$1 = (function (){var statearr_46698 = state_46687;(statearr_46698[10] = inst_46664);
(statearr_46698[8] = inst_46651__$1);
return statearr_46698;
})();var statearr_46699_46725 = state_46687__$1;(statearr_46699_46725[2] = null);
(statearr_46699_46725[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46688 === 10))
{var inst_46655 = (state_46687[2]);var inst_46656 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_46687__$1 = (function (){var statearr_46700 = state_46687;(statearr_46700[11] = inst_46655);
return statearr_46700;
})();var statearr_46701_46726 = state_46687__$1;(statearr_46701_46726[2] = inst_46656);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46687__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46688 === 11))
{var inst_46651 = (state_46687[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46687,10,Object,null,9);var inst_46660 = chs__$1.call(null,inst_46651);var inst_46661 = done.call(null,inst_46651);var inst_46662 = cljs.core.async.take_BANG_.call(null,inst_46660,inst_46661);var state_46687__$1 = state_46687;var statearr_46702_46727 = state_46687__$1;(statearr_46702_46727[2] = inst_46662);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46687__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46688 === 12))
{var inst_46673 = (state_46687[12]);var inst_46673__$1 = (state_46687[2]);var inst_46674 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46673__$1);var state_46687__$1 = (function (){var statearr_46703 = state_46687;(statearr_46703[12] = inst_46673__$1);
return statearr_46703;
})();if(cljs.core.truth_(inst_46674))
{var statearr_46704_46728 = state_46687__$1;(statearr_46704_46728[1] = 13);
} else
{var statearr_46705_46729 = state_46687__$1;(statearr_46705_46729[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46688 === 13))
{var inst_46676 = cljs.core.async.close_BANG_.call(null,out);var state_46687__$1 = state_46687;var statearr_46706_46730 = state_46687__$1;(statearr_46706_46730[2] = inst_46676);
(statearr_46706_46730[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46688 === 14))
{var inst_46673 = (state_46687[12]);var inst_46678 = cljs.core.apply.call(null,f,inst_46673);var state_46687__$1 = state_46687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46687__$1,16,out,inst_46678);
} else
{if((state_val_46688 === 15))
{var inst_46683 = (state_46687[2]);var state_46687__$1 = state_46687;var statearr_46707_46731 = state_46687__$1;(statearr_46707_46731[2] = inst_46683);
(statearr_46707_46731[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46688 === 16))
{var inst_46680 = (state_46687[2]);var state_46687__$1 = (function (){var statearr_46708 = state_46687;(statearr_46708[13] = inst_46680);
return statearr_46708;
})();var statearr_46709_46732 = state_46687__$1;(statearr_46709_46732[2] = null);
(statearr_46709_46732[1] = 2);
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
var state_machine__6782__auto____0 = (function (){var statearr_46713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46713[0] = state_machine__6782__auto__);
(statearr_46713[1] = 1);
return statearr_46713;
});
var state_machine__6782__auto____1 = (function (state_46687){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_46687);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e46714){if((e46714 instanceof Object))
{var ex__6785__auto__ = e46714;var statearr_46715_46733 = state_46687;(statearr_46715_46733[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46687);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46734 = state_46687;
state_46687 = G__46734;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_46687){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_46687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_46716 = f__6797__auto__.call(null);(statearr_46716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___46717);
return statearr_46716;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6796__auto___46842 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_46818){var state_val_46819 = (state_46818[1]);if((state_val_46819 === 1))
{var inst_46789 = cljs.core.vec.call(null,chs);var inst_46790 = inst_46789;var state_46818__$1 = (function (){var statearr_46820 = state_46818;(statearr_46820[7] = inst_46790);
return statearr_46820;
})();var statearr_46821_46843 = state_46818__$1;(statearr_46821_46843[2] = null);
(statearr_46821_46843[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46819 === 2))
{var inst_46790 = (state_46818[7]);var inst_46792 = cljs.core.count.call(null,inst_46790);var inst_46793 = (inst_46792 > 0);var state_46818__$1 = state_46818;if(cljs.core.truth_(inst_46793))
{var statearr_46822_46844 = state_46818__$1;(statearr_46822_46844[1] = 4);
} else
{var statearr_46823_46845 = state_46818__$1;(statearr_46823_46845[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46819 === 3))
{var inst_46816 = (state_46818[2]);var state_46818__$1 = state_46818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46818__$1,inst_46816);
} else
{if((state_val_46819 === 4))
{var inst_46790 = (state_46818[7]);var state_46818__$1 = state_46818;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_46818__$1,7,inst_46790);
} else
{if((state_val_46819 === 5))
{var inst_46812 = cljs.core.async.close_BANG_.call(null,out);var state_46818__$1 = state_46818;var statearr_46824_46846 = state_46818__$1;(statearr_46824_46846[2] = inst_46812);
(statearr_46824_46846[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46819 === 6))
{var inst_46814 = (state_46818[2]);var state_46818__$1 = state_46818;var statearr_46825_46847 = state_46818__$1;(statearr_46825_46847[2] = inst_46814);
(statearr_46825_46847[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46819 === 7))
{var inst_46798 = (state_46818[8]);var inst_46797 = (state_46818[9]);var inst_46797__$1 = (state_46818[2]);var inst_46798__$1 = cljs.core.nth.call(null,inst_46797__$1,0,null);var inst_46799 = cljs.core.nth.call(null,inst_46797__$1,1,null);var inst_46800 = (inst_46798__$1 == null);var state_46818__$1 = (function (){var statearr_46826 = state_46818;(statearr_46826[8] = inst_46798__$1);
(statearr_46826[9] = inst_46797__$1);
(statearr_46826[10] = inst_46799);
return statearr_46826;
})();if(cljs.core.truth_(inst_46800))
{var statearr_46827_46848 = state_46818__$1;(statearr_46827_46848[1] = 8);
} else
{var statearr_46828_46849 = state_46818__$1;(statearr_46828_46849[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46819 === 8))
{var inst_46798 = (state_46818[8]);var inst_46797 = (state_46818[9]);var inst_46790 = (state_46818[7]);var inst_46799 = (state_46818[10]);var inst_46802 = (function (){var c = inst_46799;var v = inst_46798;var vec__46795 = inst_46797;var cs = inst_46790;return ((function (c,v,vec__46795,cs,inst_46798,inst_46797,inst_46790,inst_46799,state_val_46819){
return (function (p1__46735_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__46735_SHARP_);
});
;})(c,v,vec__46795,cs,inst_46798,inst_46797,inst_46790,inst_46799,state_val_46819))
})();var inst_46803 = cljs.core.filterv.call(null,inst_46802,inst_46790);var inst_46790__$1 = inst_46803;var state_46818__$1 = (function (){var statearr_46829 = state_46818;(statearr_46829[7] = inst_46790__$1);
return statearr_46829;
})();var statearr_46830_46850 = state_46818__$1;(statearr_46830_46850[2] = null);
(statearr_46830_46850[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46819 === 9))
{var inst_46798 = (state_46818[8]);var state_46818__$1 = state_46818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46818__$1,11,out,inst_46798);
} else
{if((state_val_46819 === 10))
{var inst_46810 = (state_46818[2]);var state_46818__$1 = state_46818;var statearr_46832_46851 = state_46818__$1;(statearr_46832_46851[2] = inst_46810);
(statearr_46832_46851[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46819 === 11))
{var inst_46790 = (state_46818[7]);var inst_46807 = (state_46818[2]);var tmp46831 = inst_46790;var inst_46790__$1 = tmp46831;var state_46818__$1 = (function (){var statearr_46833 = state_46818;(statearr_46833[7] = inst_46790__$1);
(statearr_46833[11] = inst_46807);
return statearr_46833;
})();var statearr_46834_46852 = state_46818__$1;(statearr_46834_46852[2] = null);
(statearr_46834_46852[1] = 2);
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
var state_machine__6782__auto____0 = (function (){var statearr_46838 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46838[0] = state_machine__6782__auto__);
(statearr_46838[1] = 1);
return statearr_46838;
});
var state_machine__6782__auto____1 = (function (state_46818){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_46818);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e46839){if((e46839 instanceof Object))
{var ex__6785__auto__ = e46839;var statearr_46840_46853 = state_46818;(statearr_46840_46853[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46818);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46839;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46854 = state_46818;
state_46818 = G__46854;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_46818){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_46818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_46841 = f__6797__auto__.call(null);(statearr_46841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___46842);
return statearr_46841;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6796__auto___46947 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_46924){var state_val_46925 = (state_46924[1]);if((state_val_46925 === 1))
{var inst_46901 = 0;var state_46924__$1 = (function (){var statearr_46926 = state_46924;(statearr_46926[7] = inst_46901);
return statearr_46926;
})();var statearr_46927_46948 = state_46924__$1;(statearr_46927_46948[2] = null);
(statearr_46927_46948[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46925 === 2))
{var inst_46901 = (state_46924[7]);var inst_46903 = (inst_46901 < n);var state_46924__$1 = state_46924;if(cljs.core.truth_(inst_46903))
{var statearr_46928_46949 = state_46924__$1;(statearr_46928_46949[1] = 4);
} else
{var statearr_46929_46950 = state_46924__$1;(statearr_46929_46950[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46925 === 3))
{var inst_46921 = (state_46924[2]);var inst_46922 = cljs.core.async.close_BANG_.call(null,out);var state_46924__$1 = (function (){var statearr_46930 = state_46924;(statearr_46930[8] = inst_46921);
return statearr_46930;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46924__$1,inst_46922);
} else
{if((state_val_46925 === 4))
{var state_46924__$1 = state_46924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46924__$1,7,ch);
} else
{if((state_val_46925 === 5))
{var state_46924__$1 = state_46924;var statearr_46931_46951 = state_46924__$1;(statearr_46931_46951[2] = null);
(statearr_46931_46951[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46925 === 6))
{var inst_46919 = (state_46924[2]);var state_46924__$1 = state_46924;var statearr_46932_46952 = state_46924__$1;(statearr_46932_46952[2] = inst_46919);
(statearr_46932_46952[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46925 === 7))
{var inst_46906 = (state_46924[9]);var inst_46906__$1 = (state_46924[2]);var inst_46907 = (inst_46906__$1 == null);var inst_46908 = cljs.core.not.call(null,inst_46907);var state_46924__$1 = (function (){var statearr_46933 = state_46924;(statearr_46933[9] = inst_46906__$1);
return statearr_46933;
})();if(inst_46908)
{var statearr_46934_46953 = state_46924__$1;(statearr_46934_46953[1] = 8);
} else
{var statearr_46935_46954 = state_46924__$1;(statearr_46935_46954[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46925 === 8))
{var inst_46906 = (state_46924[9]);var state_46924__$1 = state_46924;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46924__$1,11,out,inst_46906);
} else
{if((state_val_46925 === 9))
{var state_46924__$1 = state_46924;var statearr_46936_46955 = state_46924__$1;(statearr_46936_46955[2] = null);
(statearr_46936_46955[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46925 === 10))
{var inst_46916 = (state_46924[2]);var state_46924__$1 = state_46924;var statearr_46937_46956 = state_46924__$1;(statearr_46937_46956[2] = inst_46916);
(statearr_46937_46956[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46925 === 11))
{var inst_46901 = (state_46924[7]);var inst_46911 = (state_46924[2]);var inst_46912 = (inst_46901 + 1);var inst_46901__$1 = inst_46912;var state_46924__$1 = (function (){var statearr_46938 = state_46924;(statearr_46938[7] = inst_46901__$1);
(statearr_46938[10] = inst_46911);
return statearr_46938;
})();var statearr_46939_46957 = state_46924__$1;(statearr_46939_46957[2] = null);
(statearr_46939_46957[1] = 2);
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
var state_machine__6782__auto____0 = (function (){var statearr_46943 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_46943[0] = state_machine__6782__auto__);
(statearr_46943[1] = 1);
return statearr_46943;
});
var state_machine__6782__auto____1 = (function (state_46924){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_46924);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e46944){if((e46944 instanceof Object))
{var ex__6785__auto__ = e46944;var statearr_46945_46958 = state_46924;(statearr_46945_46958[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46924);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46944;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46959 = state_46924;
state_46924 = G__46959;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_46924){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_46924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_46946 = f__6797__auto__.call(null);(statearr_46946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___46947);
return statearr_46946;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6796__auto___47056 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_47031){var state_val_47032 = (state_47031[1]);if((state_val_47032 === 1))
{var inst_47008 = null;var state_47031__$1 = (function (){var statearr_47033 = state_47031;(statearr_47033[7] = inst_47008);
return statearr_47033;
})();var statearr_47034_47057 = state_47031__$1;(statearr_47034_47057[2] = null);
(statearr_47034_47057[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47032 === 2))
{var state_47031__$1 = state_47031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47031__$1,4,ch);
} else
{if((state_val_47032 === 3))
{var inst_47028 = (state_47031[2]);var inst_47029 = cljs.core.async.close_BANG_.call(null,out);var state_47031__$1 = (function (){var statearr_47035 = state_47031;(statearr_47035[8] = inst_47028);
return statearr_47035;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47031__$1,inst_47029);
} else
{if((state_val_47032 === 4))
{var inst_47011 = (state_47031[9]);var inst_47011__$1 = (state_47031[2]);var inst_47012 = (inst_47011__$1 == null);var inst_47013 = cljs.core.not.call(null,inst_47012);var state_47031__$1 = (function (){var statearr_47036 = state_47031;(statearr_47036[9] = inst_47011__$1);
return statearr_47036;
})();if(inst_47013)
{var statearr_47037_47058 = state_47031__$1;(statearr_47037_47058[1] = 5);
} else
{var statearr_47038_47059 = state_47031__$1;(statearr_47038_47059[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47032 === 5))
{var inst_47011 = (state_47031[9]);var inst_47008 = (state_47031[7]);var inst_47015 = cljs.core._EQ_.call(null,inst_47011,inst_47008);var state_47031__$1 = state_47031;if(inst_47015)
{var statearr_47039_47060 = state_47031__$1;(statearr_47039_47060[1] = 8);
} else
{var statearr_47040_47061 = state_47031__$1;(statearr_47040_47061[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47032 === 6))
{var state_47031__$1 = state_47031;var statearr_47042_47062 = state_47031__$1;(statearr_47042_47062[2] = null);
(statearr_47042_47062[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47032 === 7))
{var inst_47026 = (state_47031[2]);var state_47031__$1 = state_47031;var statearr_47043_47063 = state_47031__$1;(statearr_47043_47063[2] = inst_47026);
(statearr_47043_47063[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47032 === 8))
{var inst_47008 = (state_47031[7]);var tmp47041 = inst_47008;var inst_47008__$1 = tmp47041;var state_47031__$1 = (function (){var statearr_47044 = state_47031;(statearr_47044[7] = inst_47008__$1);
return statearr_47044;
})();var statearr_47045_47064 = state_47031__$1;(statearr_47045_47064[2] = null);
(statearr_47045_47064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47032 === 9))
{var inst_47011 = (state_47031[9]);var state_47031__$1 = state_47031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47031__$1,11,out,inst_47011);
} else
{if((state_val_47032 === 10))
{var inst_47023 = (state_47031[2]);var state_47031__$1 = state_47031;var statearr_47046_47065 = state_47031__$1;(statearr_47046_47065[2] = inst_47023);
(statearr_47046_47065[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47032 === 11))
{var inst_47011 = (state_47031[9]);var inst_47020 = (state_47031[2]);var inst_47008 = inst_47011;var state_47031__$1 = (function (){var statearr_47047 = state_47031;(statearr_47047[7] = inst_47008);
(statearr_47047[10] = inst_47020);
return statearr_47047;
})();var statearr_47048_47066 = state_47031__$1;(statearr_47048_47066[2] = null);
(statearr_47048_47066[1] = 2);
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
var state_machine__6782__auto____0 = (function (){var statearr_47052 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_47052[0] = state_machine__6782__auto__);
(statearr_47052[1] = 1);
return statearr_47052;
});
var state_machine__6782__auto____1 = (function (state_47031){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_47031);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e47053){if((e47053 instanceof Object))
{var ex__6785__auto__ = e47053;var statearr_47054_47067 = state_47031;(statearr_47054_47067[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47031);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47068 = state_47031;
state_47031 = G__47068;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_47031){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_47031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_47055 = f__6797__auto__.call(null);(statearr_47055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___47056);
return statearr_47055;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6796__auto___47203 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_47173){var state_val_47174 = (state_47173[1]);if((state_val_47174 === 1))
{var inst_47136 = (new Array(n));var inst_47137 = inst_47136;var inst_47138 = 0;var state_47173__$1 = (function (){var statearr_47175 = state_47173;(statearr_47175[7] = inst_47138);
(statearr_47175[8] = inst_47137);
return statearr_47175;
})();var statearr_47176_47204 = state_47173__$1;(statearr_47176_47204[2] = null);
(statearr_47176_47204[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47174 === 2))
{var state_47173__$1 = state_47173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47173__$1,4,ch);
} else
{if((state_val_47174 === 3))
{var inst_47171 = (state_47173[2]);var state_47173__$1 = state_47173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47173__$1,inst_47171);
} else
{if((state_val_47174 === 4))
{var inst_47141 = (state_47173[9]);var inst_47141__$1 = (state_47173[2]);var inst_47142 = (inst_47141__$1 == null);var inst_47143 = cljs.core.not.call(null,inst_47142);var state_47173__$1 = (function (){var statearr_47177 = state_47173;(statearr_47177[9] = inst_47141__$1);
return statearr_47177;
})();if(inst_47143)
{var statearr_47178_47205 = state_47173__$1;(statearr_47178_47205[1] = 5);
} else
{var statearr_47179_47206 = state_47173__$1;(statearr_47179_47206[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47174 === 5))
{var inst_47146 = (state_47173[10]);var inst_47138 = (state_47173[7]);var inst_47137 = (state_47173[8]);var inst_47141 = (state_47173[9]);var inst_47145 = (inst_47137[inst_47138] = inst_47141);var inst_47146__$1 = (inst_47138 + 1);var inst_47147 = (inst_47146__$1 < n);var state_47173__$1 = (function (){var statearr_47180 = state_47173;(statearr_47180[11] = inst_47145);
(statearr_47180[10] = inst_47146__$1);
return statearr_47180;
})();if(cljs.core.truth_(inst_47147))
{var statearr_47181_47207 = state_47173__$1;(statearr_47181_47207[1] = 8);
} else
{var statearr_47182_47208 = state_47173__$1;(statearr_47182_47208[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47174 === 6))
{var inst_47138 = (state_47173[7]);var inst_47159 = (inst_47138 > 0);var state_47173__$1 = state_47173;if(cljs.core.truth_(inst_47159))
{var statearr_47184_47209 = state_47173__$1;(statearr_47184_47209[1] = 12);
} else
{var statearr_47185_47210 = state_47173__$1;(statearr_47185_47210[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47174 === 7))
{var inst_47169 = (state_47173[2]);var state_47173__$1 = state_47173;var statearr_47186_47211 = state_47173__$1;(statearr_47186_47211[2] = inst_47169);
(statearr_47186_47211[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47174 === 8))
{var inst_47146 = (state_47173[10]);var inst_47137 = (state_47173[8]);var tmp47183 = inst_47137;var inst_47137__$1 = tmp47183;var inst_47138 = inst_47146;var state_47173__$1 = (function (){var statearr_47187 = state_47173;(statearr_47187[7] = inst_47138);
(statearr_47187[8] = inst_47137__$1);
return statearr_47187;
})();var statearr_47188_47212 = state_47173__$1;(statearr_47188_47212[2] = null);
(statearr_47188_47212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47174 === 9))
{var inst_47137 = (state_47173[8]);var inst_47151 = cljs.core.vec.call(null,inst_47137);var state_47173__$1 = state_47173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47173__$1,11,out,inst_47151);
} else
{if((state_val_47174 === 10))
{var inst_47157 = (state_47173[2]);var state_47173__$1 = state_47173;var statearr_47189_47213 = state_47173__$1;(statearr_47189_47213[2] = inst_47157);
(statearr_47189_47213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47174 === 11))
{var inst_47153 = (state_47173[2]);var inst_47154 = (new Array(n));var inst_47137 = inst_47154;var inst_47138 = 0;var state_47173__$1 = (function (){var statearr_47190 = state_47173;(statearr_47190[12] = inst_47153);
(statearr_47190[7] = inst_47138);
(statearr_47190[8] = inst_47137);
return statearr_47190;
})();var statearr_47191_47214 = state_47173__$1;(statearr_47191_47214[2] = null);
(statearr_47191_47214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47174 === 12))
{var inst_47137 = (state_47173[8]);var inst_47161 = cljs.core.vec.call(null,inst_47137);var state_47173__$1 = state_47173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47173__$1,15,out,inst_47161);
} else
{if((state_val_47174 === 13))
{var state_47173__$1 = state_47173;var statearr_47192_47215 = state_47173__$1;(statearr_47192_47215[2] = null);
(statearr_47192_47215[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47174 === 14))
{var inst_47166 = (state_47173[2]);var inst_47167 = cljs.core.async.close_BANG_.call(null,out);var state_47173__$1 = (function (){var statearr_47193 = state_47173;(statearr_47193[13] = inst_47166);
return statearr_47193;
})();var statearr_47194_47216 = state_47173__$1;(statearr_47194_47216[2] = inst_47167);
(statearr_47194_47216[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47174 === 15))
{var inst_47163 = (state_47173[2]);var state_47173__$1 = state_47173;var statearr_47195_47217 = state_47173__$1;(statearr_47195_47217[2] = inst_47163);
(statearr_47195_47217[1] = 14);
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
var state_machine__6782__auto____0 = (function (){var statearr_47199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47199[0] = state_machine__6782__auto__);
(statearr_47199[1] = 1);
return statearr_47199;
});
var state_machine__6782__auto____1 = (function (state_47173){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_47173);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e47200){if((e47200 instanceof Object))
{var ex__6785__auto__ = e47200;var statearr_47201_47218 = state_47173;(statearr_47201_47218[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47173);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47200;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47219 = state_47173;
state_47173 = G__47219;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_47173){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_47173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_47202 = f__6797__auto__.call(null);(statearr_47202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___47203);
return statearr_47202;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6796__auto___47362 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_47332){var state_val_47333 = (state_47332[1]);if((state_val_47333 === 1))
{var inst_47291 = [];var inst_47292 = inst_47291;var inst_47293 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_47332__$1 = (function (){var statearr_47334 = state_47332;(statearr_47334[7] = inst_47292);
(statearr_47334[8] = inst_47293);
return statearr_47334;
})();var statearr_47335_47363 = state_47332__$1;(statearr_47335_47363[2] = null);
(statearr_47335_47363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47333 === 2))
{var state_47332__$1 = state_47332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47332__$1,4,ch);
} else
{if((state_val_47333 === 3))
{var inst_47330 = (state_47332[2]);var state_47332__$1 = state_47332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47332__$1,inst_47330);
} else
{if((state_val_47333 === 4))
{var inst_47296 = (state_47332[9]);var inst_47296__$1 = (state_47332[2]);var inst_47297 = (inst_47296__$1 == null);var inst_47298 = cljs.core.not.call(null,inst_47297);var state_47332__$1 = (function (){var statearr_47336 = state_47332;(statearr_47336[9] = inst_47296__$1);
return statearr_47336;
})();if(inst_47298)
{var statearr_47337_47364 = state_47332__$1;(statearr_47337_47364[1] = 5);
} else
{var statearr_47338_47365 = state_47332__$1;(statearr_47338_47365[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47333 === 5))
{var inst_47293 = (state_47332[8]);var inst_47296 = (state_47332[9]);var inst_47300 = (state_47332[10]);var inst_47300__$1 = f.call(null,inst_47296);var inst_47301 = cljs.core._EQ_.call(null,inst_47300__$1,inst_47293);var inst_47302 = cljs.core.keyword_identical_QMARK_.call(null,inst_47293,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_47303 = (inst_47301) || (inst_47302);var state_47332__$1 = (function (){var statearr_47339 = state_47332;(statearr_47339[10] = inst_47300__$1);
return statearr_47339;
})();if(cljs.core.truth_(inst_47303))
{var statearr_47340_47366 = state_47332__$1;(statearr_47340_47366[1] = 8);
} else
{var statearr_47341_47367 = state_47332__$1;(statearr_47341_47367[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47333 === 6))
{var inst_47292 = (state_47332[7]);var inst_47317 = inst_47292.length;var inst_47318 = (inst_47317 > 0);var state_47332__$1 = state_47332;if(cljs.core.truth_(inst_47318))
{var statearr_47343_47368 = state_47332__$1;(statearr_47343_47368[1] = 12);
} else
{var statearr_47344_47369 = state_47332__$1;(statearr_47344_47369[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47333 === 7))
{var inst_47328 = (state_47332[2]);var state_47332__$1 = state_47332;var statearr_47345_47370 = state_47332__$1;(statearr_47345_47370[2] = inst_47328);
(statearr_47345_47370[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47333 === 8))
{var inst_47292 = (state_47332[7]);var inst_47296 = (state_47332[9]);var inst_47300 = (state_47332[10]);var inst_47305 = inst_47292.push(inst_47296);var tmp47342 = inst_47292;var inst_47292__$1 = tmp47342;var inst_47293 = inst_47300;var state_47332__$1 = (function (){var statearr_47346 = state_47332;(statearr_47346[7] = inst_47292__$1);
(statearr_47346[11] = inst_47305);
(statearr_47346[8] = inst_47293);
return statearr_47346;
})();var statearr_47347_47371 = state_47332__$1;(statearr_47347_47371[2] = null);
(statearr_47347_47371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47333 === 9))
{var inst_47292 = (state_47332[7]);var inst_47308 = cljs.core.vec.call(null,inst_47292);var state_47332__$1 = state_47332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47332__$1,11,out,inst_47308);
} else
{if((state_val_47333 === 10))
{var inst_47315 = (state_47332[2]);var state_47332__$1 = state_47332;var statearr_47348_47372 = state_47332__$1;(statearr_47348_47372[2] = inst_47315);
(statearr_47348_47372[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47333 === 11))
{var inst_47296 = (state_47332[9]);var inst_47300 = (state_47332[10]);var inst_47310 = (state_47332[2]);var inst_47311 = [];var inst_47312 = inst_47311.push(inst_47296);var inst_47292 = inst_47311;var inst_47293 = inst_47300;var state_47332__$1 = (function (){var statearr_47349 = state_47332;(statearr_47349[12] = inst_47310);
(statearr_47349[7] = inst_47292);
(statearr_47349[13] = inst_47312);
(statearr_47349[8] = inst_47293);
return statearr_47349;
})();var statearr_47350_47373 = state_47332__$1;(statearr_47350_47373[2] = null);
(statearr_47350_47373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47333 === 12))
{var inst_47292 = (state_47332[7]);var inst_47320 = cljs.core.vec.call(null,inst_47292);var state_47332__$1 = state_47332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47332__$1,15,out,inst_47320);
} else
{if((state_val_47333 === 13))
{var state_47332__$1 = state_47332;var statearr_47351_47374 = state_47332__$1;(statearr_47351_47374[2] = null);
(statearr_47351_47374[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47333 === 14))
{var inst_47325 = (state_47332[2]);var inst_47326 = cljs.core.async.close_BANG_.call(null,out);var state_47332__$1 = (function (){var statearr_47352 = state_47332;(statearr_47352[14] = inst_47325);
return statearr_47352;
})();var statearr_47353_47375 = state_47332__$1;(statearr_47353_47375[2] = inst_47326);
(statearr_47353_47375[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47333 === 15))
{var inst_47322 = (state_47332[2]);var state_47332__$1 = state_47332;var statearr_47354_47376 = state_47332__$1;(statearr_47354_47376[2] = inst_47322);
(statearr_47354_47376[1] = 14);
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
var state_machine__6782__auto____0 = (function (){var statearr_47358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47358[0] = state_machine__6782__auto__);
(statearr_47358[1] = 1);
return statearr_47358;
});
var state_machine__6782__auto____1 = (function (state_47332){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_47332);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e47359){if((e47359 instanceof Object))
{var ex__6785__auto__ = e47359;var statearr_47360_47377 = state_47332;(statearr_47360_47377[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47378 = state_47332;
state_47332 = G__47378;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_47332){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_47332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_47361 = f__6797__auto__.call(null);(statearr_47361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___47362);
return statearr_47361;
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