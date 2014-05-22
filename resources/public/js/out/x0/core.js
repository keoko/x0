// Compiled by ClojureScript 0.0-2173
goog.provide('x0.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
x0.core.operators = new cljs.core.PersistentArrayMap(null, 1, ["*",cljs.core._STAR_], null);
x0.core.max_ops = 10;
x0.core.max_time = 100;
x0.core.invalid_ops_QMARK_ = (function invalid_ops_QMARK_(p__9833){var vec__9835 = p__9833;var op = cljs.core.nth.call(null,vec__9835,0,null);var x = cljs.core.nth.call(null,vec__9835,1,null);var y = cljs.core.nth.call(null,vec__9835,2,null);var or__3443__auto__ = (cljs.core._EQ_.call(null,"/",op)) && (cljs.core._EQ_.call(null,0,y));if(or__3443__auto__)
{return or__3443__auto__;
} else
{var and__3431__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([op], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","/"], null));if(cljs.core.truth_(and__3431__auto__))
{return (x < y);
} else
{return and__3431__auto__;
}
}
});
x0.core.init_state = (function init_state(){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"score","score",1123168772),0,new cljs.core.Keyword(null,"ops","ops",1014014500),x0.core.rand_dataset.call(null),new cljs.core.Keyword(null,"pos","pos",1014015430),0,new cljs.core.Keyword(null,"phase","phase",1120533741),new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830),x0.core.max_time], null);
});
x0.core.rand_dataset = (function rand_dataset(){return cljs.core.take.call(null,x0.core.max_ops,cljs.core.remove.call(null,x0.core.invalid_ops_QMARK_,cljs.core.repeatedly.call(null,(function (){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.rand_nth.call(null,cljs.core.keys.call(null,x0.core.operators)),cljs.core.rand_int.call(null,1),cljs.core.rand_int.call(null,9)],null));
}))));
});
x0.core.app_state = cljs.core.atom.call(null,x0.core.init_state.call(null));
x0.core.handle_change = (function handle_change(e,owner,p__9836){var map__9838 = p__9836;var map__9838__$1 = ((cljs.core.seq_QMARK_.call(null,map__9838))?cljs.core.apply.call(null,cljs.core.hash_map,map__9838):map__9838);var text = cljs.core.get.call(null,map__9838__$1,new cljs.core.Keyword(null,"text","text",1017460895));return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"val","val",1014020755),e.target.value);
});
x0.core.check_op = (function check_op(e,app,owner,op,x,y,pos){var val = parseInt(e.target.value);if(cljs.core._EQ_.call(null,val,cljs.core.get.call(null,x0.core.operators,op).call(null,x,y)))
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"pos","pos",1014015430),(function (p1__9839_SHARP_){return (p1__9839_SHARP_ + 1);
}));
om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"score","score",1123168772),(function (p1__9840_SHARP_){return (p1__9840_SHARP_ + 1);
}));
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"val","val",1014020755),"");
} else
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"pos","pos",1014015430),(function (p1__9841_SHARP_){return (p1__9841_SHARP_ + 1);
}));
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"val","val",1014020755),"");
}
if((new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)) >= x0.core.max_ops))
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"phase","phase",1120533741),(function (_){return new cljs.core.Keyword(null,"end","end",1014004813);
}));
return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"pos","pos",1014015430),(function (_){return 0;
}));
} else
{return null;
}
});
x0.core.score_view = (function score_view(app,owner){if(typeof x0.core.t9846 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t9846 = (function (owner,app,score_view,meta9847){
this.owner = owner;
this.app = app;
this.score_view = score_view;
this.meta9847 = meta9847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t9846.cljs$lang$type = true;
x0.core.t9846.cljs$lang$ctorStr = "x0.core/t9846";
x0.core.t9846.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t9846");
});
x0.core.t9846.prototype.om$core$IRender$ = true;
x0.core.t9846.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "heads"},"Punts ",(function (){var attrs9849 = new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs9849))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score-val"], null)], null),attrs9849)):{"className": "score-val"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs9849))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",sablono.interpreter.interpret.call(null,x0.core.max_ops)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs9849),"/",sablono.interpreter.interpret.call(null,x0.core.max_ops)], null))));
})());
});
x0.core.t9846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9848){var self__ = this;
var _9848__$1 = this;return self__.meta9847;
});
x0.core.t9846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9848,meta9847__$1){var self__ = this;
var _9848__$1 = this;return (new x0.core.t9846(self__.owner,self__.app,self__.score_view,meta9847__$1));
});
x0.core.__GT_t9846 = (function __GT_t9846(owner__$1,app__$1,score_view__$1,meta9847){return (new x0.core.t9846(owner__$1,app__$1,score_view__$1,meta9847));
});
}
return (new x0.core.t9846(owner,app,score_view,null));
});
x0.core.timer_view = (function timer_view(app,owner){if(typeof x0.core.t9854 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t9854 = (function (owner,app,timer_view,meta9855){
this.owner = owner;
this.app = app;
this.timer_view = timer_view;
this.meta9855 = meta9855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t9854.cljs$lang$type = true;
x0.core.t9854.cljs$lang$ctorStr = "x0.core/t9854";
x0.core.t9854.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t9854");
});
x0.core.t9854.prototype.om$core$IRender$ = true;
x0.core.t9854.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "heads"},"Temps ",(function (){var attrs9857 = new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs9857))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["time-val"], null)], null),attrs9857)):{"className": "time-val"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs9857))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs9857)], null))));
})());
});
x0.core.t9854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9856){var self__ = this;
var _9856__$1 = this;return self__.meta9855;
});
x0.core.t9854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9856,meta9855__$1){var self__ = this;
var _9856__$1 = this;return (new x0.core.t9854(self__.owner,self__.app,self__.timer_view,meta9855__$1));
});
x0.core.__GT_t9854 = (function __GT_t9854(owner__$1,app__$1,timer_view__$1,meta9855){return (new x0.core.t9854(owner__$1,app__$1,timer_view__$1,meta9855));
});
}
return (new x0.core.t9854(owner,app,timer_view,null));
});
x0.core.start_view = (function start_view(app,owner){if(typeof x0.core.t9863 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t9863 = (function (owner,app,start_view,meta9864){
this.owner = owner;
this.app = app;
this.start_view = start_view;
this.meta9864 = meta9864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t9863.cljs$lang$type = true;
x0.core.t9863.cljs$lang$ctorStr = "x0.core/t9863";
x0.core.t9863.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t9863");
});
x0.core.t9863.prototype.om$core$IRender$ = true;
x0.core.t9863.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "dots-game"},React.DOM.div({"className": "notice-square"},React.DOM.div({"className": "marq"},React.DOM.span({"className": "yellow"},"x0")),React.DOM.div({"className": "control-area"},React.DOM.a({"className": "start-new-game", "href": "#", "onClick": (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"phase","phase",1120533741),(function (___$2){return new cljs.core.Keyword(null,"play","play",1017347750);
}));
})},"nous joc"))));
});
x0.core.t9863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9865){var self__ = this;
var _9865__$1 = this;return self__.meta9864;
});
x0.core.t9863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9865,meta9864__$1){var self__ = this;
var _9865__$1 = this;return (new x0.core.t9863(self__.owner,self__.app,self__.start_view,meta9864__$1));
});
x0.core.__GT_t9863 = (function __GT_t9863(owner__$1,app__$1,start_view__$1,meta9864){return (new x0.core.t9863(owner__$1,app__$1,start_view__$1,meta9864));
});
}
return (new x0.core.t9863(owner,app,start_view,null));
});
x0.core.play_view = (function play_view(app,owner){if(typeof x0.core.t9932 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t9932 = (function (owner,app,play_view,meta9933){
this.owner = owner;
this.app = app;
this.play_view = play_view;
this.meta9933 = meta9933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t9932.cljs$lang$type = true;
x0.core.t9932.cljs$lang$ctorStr = "x0.core/t9932";
x0.core.t9932.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t9932");
});
x0.core.t9932.prototype.om$core$IRenderState$ = true;
x0.core.t9932.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var pos = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.app);var vec__9935 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"ops","ops",1014014500).cljs$core$IFn$_invoke$arity$1(self__.app),pos);var op = cljs.core.nth.call(null,vec__9935,0,null);var x = cljs.core.nth.call(null,vec__9935,1,null);var y = cljs.core.nth.call(null,vec__9935,2,null);var operator = new cljs.core.Symbol(null,"*","*",-1640531485,null);return React.DOM.div({"className": "dots-game"},(function (){var attrs9936 = om.core.build.call(null,x0.core.score_view,self__.app);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs9936))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header"], null)], null),attrs9936)):{"className": "header"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs9936))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,x0.core.timer_view,self__.app))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs9936),sablono.interpreter.interpret.call(null,om.core.build.call(null,x0.core.timer_view,self__.app))], null))));
})(),React.DOM.div({"className": "board-area"},React.DOM.div({"className": "chain-line"}),React.DOM.div({"className": "fot-highlights"}),React.DOM.div({"className": "board"},(function (){var attrs9941 = x;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs9941))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["op"], null)], null),attrs9941)):{"className": "op"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs9941))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,op),sablono.interpreter.interpret.call(null,y),"="], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs9941),sablono.interpreter.interpret.call(null,op),sablono.interpreter.interpret.call(null,y),"="], null))));
})(),sablono.interpreter.interpret.call(null,sablono.core.text_field.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1014017029),"op-field",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"val","val",1014020755).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__9868_SHARP_){return x0.core.handle_change.call(null,p1__9868_SHARP_,self__.owner,state);
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",3322948697),(function (p1__9869_SHARP_){if((p1__9869_SHARP_.keyCode === 13))
{return x0.core.check_op.call(null,p1__9869_SHARP_,self__.app,self__.owner,op,x,y,pos);
} else
{return null;
}
})], null),new cljs.core.Keyword(null,"op-val","op-val",4296631463))))));
});
x0.core.t9932.prototype.om$core$IDidMount$ = true;
x0.core.t9932.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner,"op-field");return node.focus();
});
x0.core.t9932.prototype.om$core$IWillMount$ = true;
x0.core.t9932.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var timer_9994 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"timer","timer",1124268727));var c__6796__auto___9995 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_9948){var state_val_9949 = (state_9948[1]);if((state_val_9949 === 2))
{var inst_9943 = (state_9948[2]);var inst_9944 = cljs.core.print.call(null,"time is over!");var inst_9945 = (function (){var t = inst_9943;return ((function (t,inst_9943,inst_9944,state_val_9949){
return (function (___$2){return new cljs.core.Keyword(null,"end","end",1014004813);
});
;})(t,inst_9943,inst_9944,state_val_9949))
})();var inst_9946 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"phase","phase",1120533741),inst_9945);var state_9948__$1 = (function (){var statearr_9950 = state_9948;(statearr_9950[7] = inst_9944);
return statearr_9950;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9948__$1,inst_9946);
} else
{if((state_val_9949 === 1))
{var state_9948__$1 = state_9948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9948__$1,2,timer_9994);
} else
{return null;
}
}
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_9954 = [null,null,null,null,null,null,null,null];(statearr_9954[0] = state_machine__6782__auto__);
(statearr_9954[1] = 1);
return statearr_9954;
});
var state_machine__6782__auto____1 = (function (state_9948){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_9948);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e9955){if((e9955 instanceof Object))
{var ex__6785__auto__ = e9955;var statearr_9956_9996 = state_9948;(statearr_9956_9996[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9955;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9997 = state_9948;
state_9948 = G__9997;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_9948){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_9948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_9957 = f__6797__auto__.call(null);(statearr_9957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___9995);
return statearr_9957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
var c__6796__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_9976){var state_val_9977 = (state_9976[1]);if((state_val_9977 === 7))
{var inst_9972 = (state_9976[2]);var state_9976__$1 = state_9976;var statearr_9978_9998 = state_9976__$1;(statearr_9978_9998[2] = inst_9972);
(statearr_9978_9998[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9977 === 6))
{var inst_9968 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830),cljs.core.dec);var inst_9969 = cljs.core.async.timeout.call(null,1000);var inst_9959 = inst_9969;var state_9976__$1 = (function (){var statearr_9979 = state_9976;(statearr_9979[7] = inst_9968);
(statearr_9979[8] = inst_9959);
return statearr_9979;
})();var statearr_9980_9999 = state_9976__$1;(statearr_9980_9999[2] = null);
(statearr_9980_9999[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9977 === 5))
{var state_9976__$1 = state_9976;var statearr_9981_10000 = state_9976__$1;(statearr_9981_10000[2] = 0);
(statearr_9981_10000[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9977 === 4))
{var inst_9962 = (state_9976[2]);var inst_9963 = cljs.core.deref.call(null,self__.app);var inst_9964 = new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830).cljs$core$IFn$_invoke$arity$1(inst_9963);var inst_9965 = (inst_9964 <= 0);var state_9976__$1 = (function (){var statearr_9982 = state_9976;(statearr_9982[9] = inst_9962);
return statearr_9982;
})();if(cljs.core.truth_(inst_9965))
{var statearr_9983_10001 = state_9976__$1;(statearr_9983_10001[1] = 5);
} else
{var statearr_9984_10002 = state_9976__$1;(statearr_9984_10002[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9977 === 3))
{var inst_9974 = (state_9976[2]);var state_9976__$1 = state_9976;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9976__$1,inst_9974);
} else
{if((state_val_9977 === 2))
{var inst_9959 = (state_9976[8]);var state_9976__$1 = state_9976;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9976__$1,4,inst_9959);
} else
{if((state_val_9977 === 1))
{var inst_9958 = cljs.core.async.timeout.call(null,1000);var inst_9959 = inst_9958;var state_9976__$1 = (function (){var statearr_9985 = state_9976;(statearr_9985[8] = inst_9959);
return statearr_9985;
})();var statearr_9986_10003 = state_9976__$1;(statearr_9986_10003[2] = null);
(statearr_9986_10003[1] = 2);
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
var state_machine__6782__auto____0 = (function (){var statearr_9990 = [null,null,null,null,null,null,null,null,null,null];(statearr_9990[0] = state_machine__6782__auto__);
(statearr_9990[1] = 1);
return statearr_9990;
});
var state_machine__6782__auto____1 = (function (state_9976){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_9976);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e9991){if((e9991 instanceof Object))
{var ex__6785__auto__ = e9991;var statearr_9992_10004 = state_9976;(statearr_9992_10004[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9976);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10005 = state_9976;
state_9976 = G__10005;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_9976){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_9976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_9993 = f__6797__auto__.call(null);(statearr_9993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto__);
return statearr_9993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return c__6796__auto__;
});
x0.core.t9932.prototype.om$core$IInitState$ = true;
x0.core.t9932.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",1014020755),"",new cljs.core.Keyword(null,"timer","timer",1124268727),cljs.core.async.timeout.call(null,(1000 * x0.core.max_time))], null);
});
x0.core.t9932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9934){var self__ = this;
var _9934__$1 = this;return self__.meta9933;
});
x0.core.t9932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9934,meta9933__$1){var self__ = this;
var _9934__$1 = this;return (new x0.core.t9932(self__.owner,self__.app,self__.play_view,meta9933__$1));
});
x0.core.__GT_t9932 = (function __GT_t9932(owner__$1,app__$1,play_view__$1,meta9933){return (new x0.core.t9932(owner__$1,app__$1,play_view__$1,meta9933));
});
}
return (new x0.core.t9932(owner,app,play_view,null));
});
x0.core.restart_game = (function restart_game(app){om.core.update_BANG_.call(null,app,x0.core.init_state.call(null));
return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"phase","phase",1120533741),(function (_){return new cljs.core.Keyword(null,"play","play",1017347750);
}));
});
x0.core.end_view = (function end_view(app,owner){if(typeof x0.core.t10010 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t10010 = (function (owner,app,end_view,meta10011){
this.owner = owner;
this.app = app;
this.end_view = end_view;
this.meta10011 = meta10011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t10010.cljs$lang$type = true;
x0.core.t10010.cljs$lang$ctorStr = "x0.core/t10010";
x0.core.t10010.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t10010");
});
x0.core.t10010.prototype.om$core$IRender$ = true;
x0.core.t10010.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "dots-game"},React.DOM.div({"className": "notice-square"},(function (){var attrs10013 = [cljs.core.str("Punts "),cljs.core.str(new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(self__.app))].join('');return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs10013))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marq"], null)], null),attrs10013)):{"className": "marq"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10013))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10013)], null))));
})(),React.DOM.div({"className": "control-area"},React.DOM.a({"className": "start-new-game", "href": "#", "onClick": (function (){return x0.core.restart_game.call(null,self__.app);
})},"new game"))));
});
x0.core.t10010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10012){var self__ = this;
var _10012__$1 = this;return self__.meta10011;
});
x0.core.t10010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10012,meta10011__$1){var self__ = this;
var _10012__$1 = this;return (new x0.core.t10010(self__.owner,self__.app,self__.end_view,meta10011__$1));
});
x0.core.__GT_t10010 = (function __GT_t10010(owner__$1,app__$1,end_view__$1,meta10011){return (new x0.core.t10010(owner__$1,app__$1,end_view__$1,meta10011));
});
}
return (new x0.core.t10010(owner,app,end_view,null));
});
x0.core.entry_view = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("entry-view",(function (app,_){return new cljs.core.Keyword(null,"phase","phase",1120533741).cljs$core$IFn$_invoke$arity$1(app);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,x0.core.entry_view,new cljs.core.Keyword(null,"start","start",1123661780),(function (app,owner){return x0.core.start_view.call(null,app,owner);
}));
cljs.core._add_method.call(null,x0.core.entry_view,new cljs.core.Keyword(null,"play","play",1017347750),(function (app,owner){return x0.core.play_view.call(null,app,owner);
}));
cljs.core._add_method.call(null,x0.core.entry_view,new cljs.core.Keyword(null,"end","end",1014004813),(function (app,owner){return x0.core.end_view.call(null,app,owner);
}));
x0.core.error_view = (function error_view(app,owner){if(typeof x0.core.t10017 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t10017 = (function (owner,app,error_view,meta10018){
this.owner = owner;
this.app = app;
this.error_view = error_view;
this.meta10018 = meta10018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t10017.cljs$lang$type = true;
x0.core.t10017.cljs$lang$ctorStr = "x0.core/t10017";
x0.core.t10017.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t10017");
});
x0.core.t10017.prototype.om$core$IRenderState$ = true;
x0.core.t10017.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,"ERROR!",sablono.interpreter.interpret.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"msg","msg",1014012659))));
});
x0.core.t10017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10019){var self__ = this;
var _10019__$1 = this;return self__.meta10018;
});
x0.core.t10017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10019,meta10018__$1){var self__ = this;
var _10019__$1 = this;return (new x0.core.t10017(self__.owner,self__.app,self__.error_view,meta10018__$1));
});
x0.core.__GT_t10017 = (function __GT_t10017(owner__$1,app__$1,error_view__$1,meta10018){return (new x0.core.t10017(owner__$1,app__$1,error_view__$1,meta10018));
});
}
return (new x0.core.t10017(owner,app,error_view,null));
});
x0.core.game_view = (function game_view(app,owner){if(typeof x0.core.t10024 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t10024 = (function (owner,app,game_view,meta10025){
this.owner = owner;
this.app = app;
this.game_view = game_view;
this.meta10025 = meta10025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t10024.cljs$lang$type = true;
x0.core.t10024.cljs$lang$ctorStr = "x0.core/t10024";
x0.core.t10024.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t10024");
});
x0.core.t10024.prototype.om$core$IRender$ = true;
x0.core.t10024.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__10027 = new cljs.core.Keyword(null,"phase","phase",1120533741).cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),G__10027))
{return om.core.build.call(null,x0.core.end_view,self__.app);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"start","start",1123661780),G__10027))
{return om.core.build.call(null,x0.core.start_view,self__.app);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"play","play",1017347750),G__10027))
{return om.core.build.call(null,x0.core.play_view,self__.app);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return om.core.build.call(null,x0.core.error_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",1014012659),[cljs.core.str("phase unknown:"),cljs.core.str(new cljs.core.Keyword(null,"phase","phase",1120533741).cljs$core$IFn$_invoke$arity$1(self__.app))].join('')], null)], null)], null));
} else
{return null;
}
}
}
}
});
x0.core.t10024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10026){var self__ = this;
var _10026__$1 = this;return self__.meta10025;
});
x0.core.t10024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10026,meta10025__$1){var self__ = this;
var _10026__$1 = this;return (new x0.core.t10024(self__.owner,self__.app,self__.game_view,meta10025__$1));
});
x0.core.__GT_t10024 = (function __GT_t10024(owner__$1,app__$1,game_view__$1,meta10025){return (new x0.core.t10024(owner__$1,app__$1,game_view__$1,meta10025));
});
}
return (new x0.core.t10024(owner,app,game_view,null));
});
x0.core.get_top_ten = (function get_top_ten(){var iter__4160__auto__ = (function iter__10032(s__10033){return (new cljs.core.LazySeq(null,(function (){var s__10033__$1 = s__10033;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10033__$1);if(temp__4092__auto__)
{var s__10033__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10033__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10033__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10035 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10034 = 0;while(true){
if((i__10034 < size__4159__auto__))
{var i = cljs.core._nth.call(null,c__4158__auto__,i__10034);cljs.core.chunk_append.call(null,b__10035,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1017503549),localStorage.getItem([cljs.core.str(i),cljs.core.str("user")].join('')),new cljs.core.Keyword(null,"score","score",1123168772),localStorage.getItem([cljs.core.str(i),cljs.core.str("score")].join(''))], null));
{
var G__10036 = (i__10034 + 1);
i__10034 = G__10036;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10035),iter__10032.call(null,cljs.core.chunk_rest.call(null,s__10033__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10035),null);
}
} else
{var i = cljs.core.first.call(null,s__10033__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1017503549),localStorage.getItem([cljs.core.str(i),cljs.core.str("user")].join('')),new cljs.core.Keyword(null,"score","score",1123168772),localStorage.getItem([cljs.core.str(i),cljs.core.str("score")].join(''))], null),iter__10032.call(null,cljs.core.rest.call(null,s__10033__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,1,11));
});
om.core.root.call(null,x0.core.game_view,x0.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map