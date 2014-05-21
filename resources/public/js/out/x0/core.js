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
x0.core.invalid_ops_QMARK_ = (function invalid_ops_QMARK_(p__10241){var vec__10243 = p__10241;var op = cljs.core.nth.call(null,vec__10243,0,null);var x = cljs.core.nth.call(null,vec__10243,1,null);var y = cljs.core.nth.call(null,vec__10243,2,null);var or__3443__auto__ = (cljs.core._EQ_.call(null,"/",op)) && (cljs.core._EQ_.call(null,0,y));if(or__3443__auto__)
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
x0.core.handle_change = (function handle_change(e,owner,p__10244){var map__10246 = p__10244;var map__10246__$1 = ((cljs.core.seq_QMARK_.call(null,map__10246))?cljs.core.apply.call(null,cljs.core.hash_map,map__10246):map__10246);var text = cljs.core.get.call(null,map__10246__$1,new cljs.core.Keyword(null,"text","text",1017460895));return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"val","val",1014020755),e.target.value);
});
x0.core.check_op = (function check_op(e,app,owner,op,x,y,pos){var val = parseInt(e.target.value);if(cljs.core._EQ_.call(null,val,cljs.core.get.call(null,x0.core.operators,op).call(null,x,y)))
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"pos","pos",1014015430),(function (p1__10247_SHARP_){return (p1__10247_SHARP_ + 1);
}));
om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"score","score",1123168772),(function (p1__10248_SHARP_){return (p1__10248_SHARP_ + 1);
}));
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"val","val",1014020755),"");
} else
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"pos","pos",1014015430),(function (p1__10249_SHARP_){return (p1__10249_SHARP_ + 1);
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
x0.core.score_view = (function score_view(app,owner){if(typeof x0.core.t10254 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t10254 = (function (owner,app,score_view,meta10255){
this.owner = owner;
this.app = app;
this.score_view = score_view;
this.meta10255 = meta10255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t10254.cljs$lang$type = true;
x0.core.t10254.cljs$lang$ctorStr = "x0.core/t10254";
x0.core.t10254.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t10254");
});
x0.core.t10254.prototype.om$core$IRender$ = true;
x0.core.t10254.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "heads"},"Punts ",(function (){var attrs10257 = new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs10257))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score-val"], null)], null),attrs10257)):{"className": "score-val"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10257))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",sablono.interpreter.interpret.call(null,x0.core.max_ops)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10257),"/",sablono.interpreter.interpret.call(null,x0.core.max_ops)], null))));
})());
});
x0.core.t10254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10256){var self__ = this;
var _10256__$1 = this;return self__.meta10255;
});
x0.core.t10254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10256,meta10255__$1){var self__ = this;
var _10256__$1 = this;return (new x0.core.t10254(self__.owner,self__.app,self__.score_view,meta10255__$1));
});
x0.core.__GT_t10254 = (function __GT_t10254(owner__$1,app__$1,score_view__$1,meta10255){return (new x0.core.t10254(owner__$1,app__$1,score_view__$1,meta10255));
});
}
return (new x0.core.t10254(owner,app,score_view,null));
});
x0.core.timer_view = (function timer_view(app,owner){if(typeof x0.core.t10262 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t10262 = (function (owner,app,timer_view,meta10263){
this.owner = owner;
this.app = app;
this.timer_view = timer_view;
this.meta10263 = meta10263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t10262.cljs$lang$type = true;
x0.core.t10262.cljs$lang$ctorStr = "x0.core/t10262";
x0.core.t10262.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t10262");
});
x0.core.t10262.prototype.om$core$IRender$ = true;
x0.core.t10262.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "heads"},"Temps ",(function (){var attrs10265 = new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs10265))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["time-val"], null)], null),attrs10265)):{"className": "time-val"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10265))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10265)], null))));
})());
});
x0.core.t10262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10264){var self__ = this;
var _10264__$1 = this;return self__.meta10263;
});
x0.core.t10262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10264,meta10263__$1){var self__ = this;
var _10264__$1 = this;return (new x0.core.t10262(self__.owner,self__.app,self__.timer_view,meta10263__$1));
});
x0.core.__GT_t10262 = (function __GT_t10262(owner__$1,app__$1,timer_view__$1,meta10263){return (new x0.core.t10262(owner__$1,app__$1,timer_view__$1,meta10263));
});
}
return (new x0.core.t10262(owner,app,timer_view,null));
});
x0.core.start_view = (function start_view(app,owner){if(typeof x0.core.t10271 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t10271 = (function (owner,app,start_view,meta10272){
this.owner = owner;
this.app = app;
this.start_view = start_view;
this.meta10272 = meta10272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t10271.cljs$lang$type = true;
x0.core.t10271.cljs$lang$ctorStr = "x0.core/t10271";
x0.core.t10271.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t10271");
});
x0.core.t10271.prototype.om$core$IRender$ = true;
x0.core.t10271.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "dots-game"},React.DOM.div({"className": "notice-square"},React.DOM.div({"className": "marq"},React.DOM.span({"className": "yellow"},"x0")),React.DOM.div({"className": "control-area"},React.DOM.a({"className": "start-new-game", "href": "#", "onClick": (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"phase","phase",1120533741),(function (___$2){return new cljs.core.Keyword(null,"play","play",1017347750);
}));
})},"nous joc"))));
});
x0.core.t10271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10273){var self__ = this;
var _10273__$1 = this;return self__.meta10272;
});
x0.core.t10271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10273,meta10272__$1){var self__ = this;
var _10273__$1 = this;return (new x0.core.t10271(self__.owner,self__.app,self__.start_view,meta10272__$1));
});
x0.core.__GT_t10271 = (function __GT_t10271(owner__$1,app__$1,start_view__$1,meta10272){return (new x0.core.t10271(owner__$1,app__$1,start_view__$1,meta10272));
});
}
return (new x0.core.t10271(owner,app,start_view,null));
});
x0.core.play_view = (function play_view(app,owner){if(typeof x0.core.t10340 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t10340 = (function (owner,app,play_view,meta10341){
this.owner = owner;
this.app = app;
this.play_view = play_view;
this.meta10341 = meta10341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t10340.cljs$lang$type = true;
x0.core.t10340.cljs$lang$ctorStr = "x0.core/t10340";
x0.core.t10340.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t10340");
});
x0.core.t10340.prototype.om$core$IRenderState$ = true;
x0.core.t10340.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var pos = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.app);var vec__10343 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"ops","ops",1014014500).cljs$core$IFn$_invoke$arity$1(self__.app),pos);var op = cljs.core.nth.call(null,vec__10343,0,null);var x = cljs.core.nth.call(null,vec__10343,1,null);var y = cljs.core.nth.call(null,vec__10343,2,null);var operator = new cljs.core.Symbol(null,"*","*",-1640531485,null);return React.DOM.div({"className": "dots-game"},(function (){var attrs10344 = om.core.build.call(null,x0.core.score_view,self__.app);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs10344))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header"], null)], null),attrs10344)):{"className": "header"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10344))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,x0.core.timer_view,self__.app))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10344),sablono.interpreter.interpret.call(null,om.core.build.call(null,x0.core.timer_view,self__.app))], null))));
})(),React.DOM.div({"className": "board-area"},React.DOM.div({"className": "chain-line"}),React.DOM.div({"className": "fot-highlights"}),React.DOM.div({"className": "board"},(function (){var attrs10349 = x;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs10349))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["op"], null)], null),attrs10349)):{"className": "op"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10349))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,op),sablono.interpreter.interpret.call(null,y),"="], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10349),sablono.interpreter.interpret.call(null,op),sablono.interpreter.interpret.call(null,y),"="], null))));
})(),sablono.interpreter.interpret.call(null,sablono.core.text_field.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1014017029),"op-field",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"val","val",1014020755).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__10276_SHARP_){return x0.core.handle_change.call(null,p1__10276_SHARP_,self__.owner,state);
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",3322948697),(function (p1__10277_SHARP_){if((p1__10277_SHARP_.keyCode === 13))
{return x0.core.check_op.call(null,p1__10277_SHARP_,self__.app,self__.owner,op,x,y,pos);
} else
{return null;
}
})], null),new cljs.core.Keyword(null,"op-val","op-val",4296631463))))));
});
x0.core.t10340.prototype.om$core$IDidMount$ = true;
x0.core.t10340.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner,"op-field");return node.focus();
});
x0.core.t10340.prototype.om$core$IWillMount$ = true;
x0.core.t10340.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var timer_10402 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"timer","timer",1124268727));var c__6796__auto___10403 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_10356){var state_val_10357 = (state_10356[1]);if((state_val_10357 === 2))
{var inst_10351 = (state_10356[2]);var inst_10352 = cljs.core.print.call(null,"time is over!");var inst_10353 = (function (){var t = inst_10351;return ((function (t,inst_10351,inst_10352,state_val_10357){
return (function (___$2){return new cljs.core.Keyword(null,"end","end",1014004813);
});
;})(t,inst_10351,inst_10352,state_val_10357))
})();var inst_10354 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"phase","phase",1120533741),inst_10353);var state_10356__$1 = (function (){var statearr_10358 = state_10356;(statearr_10358[7] = inst_10352);
return statearr_10358;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10356__$1,inst_10354);
} else
{if((state_val_10357 === 1))
{var state_10356__$1 = state_10356;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10356__$1,2,timer_10402);
} else
{return null;
}
}
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_10362 = [null,null,null,null,null,null,null,null];(statearr_10362[0] = state_machine__6782__auto__);
(statearr_10362[1] = 1);
return statearr_10362;
});
var state_machine__6782__auto____1 = (function (state_10356){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_10356);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e10363){if((e10363 instanceof Object))
{var ex__6785__auto__ = e10363;var statearr_10364_10404 = state_10356;(statearr_10364_10404[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10356);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10405 = state_10356;
state_10356 = G__10405;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_10356){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_10356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_10365 = f__6797__auto__.call(null);(statearr_10365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___10403);
return statearr_10365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
var c__6796__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_10384){var state_val_10385 = (state_10384[1]);if((state_val_10385 === 7))
{var inst_10380 = (state_10384[2]);var state_10384__$1 = state_10384;var statearr_10386_10406 = state_10384__$1;(statearr_10386_10406[2] = inst_10380);
(statearr_10386_10406[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10385 === 6))
{var inst_10376 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830),cljs.core.dec);var inst_10377 = cljs.core.async.timeout.call(null,1000);var inst_10367 = inst_10377;var state_10384__$1 = (function (){var statearr_10387 = state_10384;(statearr_10387[7] = inst_10367);
(statearr_10387[8] = inst_10376);
return statearr_10387;
})();var statearr_10388_10407 = state_10384__$1;(statearr_10388_10407[2] = null);
(statearr_10388_10407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10385 === 5))
{var state_10384__$1 = state_10384;var statearr_10389_10408 = state_10384__$1;(statearr_10389_10408[2] = 0);
(statearr_10389_10408[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10385 === 4))
{var inst_10370 = (state_10384[2]);var inst_10371 = cljs.core.deref.call(null,self__.app);var inst_10372 = new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830).cljs$core$IFn$_invoke$arity$1(inst_10371);var inst_10373 = (inst_10372 <= 0);var state_10384__$1 = (function (){var statearr_10390 = state_10384;(statearr_10390[9] = inst_10370);
return statearr_10390;
})();if(cljs.core.truth_(inst_10373))
{var statearr_10391_10409 = state_10384__$1;(statearr_10391_10409[1] = 5);
} else
{var statearr_10392_10410 = state_10384__$1;(statearr_10392_10410[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10385 === 3))
{var inst_10382 = (state_10384[2]);var state_10384__$1 = state_10384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10384__$1,inst_10382);
} else
{if((state_val_10385 === 2))
{var inst_10367 = (state_10384[7]);var state_10384__$1 = state_10384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10384__$1,4,inst_10367);
} else
{if((state_val_10385 === 1))
{var inst_10366 = cljs.core.async.timeout.call(null,1000);var inst_10367 = inst_10366;var state_10384__$1 = (function (){var statearr_10393 = state_10384;(statearr_10393[7] = inst_10367);
return statearr_10393;
})();var statearr_10394_10411 = state_10384__$1;(statearr_10394_10411[2] = null);
(statearr_10394_10411[1] = 2);
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
var state_machine__6782__auto____0 = (function (){var statearr_10398 = [null,null,null,null,null,null,null,null,null,null];(statearr_10398[0] = state_machine__6782__auto__);
(statearr_10398[1] = 1);
return statearr_10398;
});
var state_machine__6782__auto____1 = (function (state_10384){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_10384);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e10399){if((e10399 instanceof Object))
{var ex__6785__auto__ = e10399;var statearr_10400_10412 = state_10384;(statearr_10400_10412[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10413 = state_10384;
state_10384 = G__10413;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_10384){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_10384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_10401 = f__6797__auto__.call(null);(statearr_10401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto__);
return statearr_10401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return c__6796__auto__;
});
x0.core.t10340.prototype.om$core$IInitState$ = true;
x0.core.t10340.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",1014020755),"",new cljs.core.Keyword(null,"timer","timer",1124268727),cljs.core.async.timeout.call(null,(1000 * x0.core.max_time))], null);
});
x0.core.t10340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10342){var self__ = this;
var _10342__$1 = this;return self__.meta10341;
});
x0.core.t10340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10342,meta10341__$1){var self__ = this;
var _10342__$1 = this;return (new x0.core.t10340(self__.owner,self__.app,self__.play_view,meta10341__$1));
});
x0.core.__GT_t10340 = (function __GT_t10340(owner__$1,app__$1,play_view__$1,meta10341){return (new x0.core.t10340(owner__$1,app__$1,play_view__$1,meta10341));
});
}
return (new x0.core.t10340(owner,app,play_view,null));
});
x0.core.restart_game = (function restart_game(app){om.core.update_BANG_.call(null,app,x0.core.init_state.call(null));
return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"phase","phase",1120533741),(function (_){return new cljs.core.Keyword(null,"play","play",1017347750);
}));
});
x0.core.end_view = (function end_view(app,owner){if(typeof x0.core.t10418 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t10418 = (function (owner,app,end_view,meta10419){
this.owner = owner;
this.app = app;
this.end_view = end_view;
this.meta10419 = meta10419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t10418.cljs$lang$type = true;
x0.core.t10418.cljs$lang$ctorStr = "x0.core/t10418";
x0.core.t10418.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t10418");
});
x0.core.t10418.prototype.om$core$IRender$ = true;
x0.core.t10418.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "dots-game"},React.DOM.div({"className": "notice-square"},(function (){var attrs10421 = [cljs.core.str("Punts "),cljs.core.str(new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(self__.app))].join('');return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs10421))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marq"], null)], null),attrs10421)):{"className": "marq"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10421))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10421)], null))));
})(),React.DOM.div({"className": "control-area"},React.DOM.a({"className": "start-new-game", "href": "#", "onClick": (function (){return x0.core.restart_game.call(null,self__.app);
})},"new game"))));
});
x0.core.t10418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10420){var self__ = this;
var _10420__$1 = this;return self__.meta10419;
});
x0.core.t10418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10420,meta10419__$1){var self__ = this;
var _10420__$1 = this;return (new x0.core.t10418(self__.owner,self__.app,self__.end_view,meta10419__$1));
});
x0.core.__GT_t10418 = (function __GT_t10418(owner__$1,app__$1,end_view__$1,meta10419){return (new x0.core.t10418(owner__$1,app__$1,end_view__$1,meta10419));
});
}
return (new x0.core.t10418(owner,app,end_view,null));
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
x0.core.error_view = (function error_view(app,owner){if(typeof x0.core.t10425 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t10425 = (function (owner,app,error_view,meta10426){
this.owner = owner;
this.app = app;
this.error_view = error_view;
this.meta10426 = meta10426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t10425.cljs$lang$type = true;
x0.core.t10425.cljs$lang$ctorStr = "x0.core/t10425";
x0.core.t10425.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t10425");
});
x0.core.t10425.prototype.om$core$IRenderState$ = true;
x0.core.t10425.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,"ERROR!",sablono.interpreter.interpret.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"msg","msg",1014012659))));
});
x0.core.t10425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10427){var self__ = this;
var _10427__$1 = this;return self__.meta10426;
});
x0.core.t10425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10427,meta10426__$1){var self__ = this;
var _10427__$1 = this;return (new x0.core.t10425(self__.owner,self__.app,self__.error_view,meta10426__$1));
});
x0.core.__GT_t10425 = (function __GT_t10425(owner__$1,app__$1,error_view__$1,meta10426){return (new x0.core.t10425(owner__$1,app__$1,error_view__$1,meta10426));
});
}
return (new x0.core.t10425(owner,app,error_view,null));
});
x0.core.game_view = (function game_view(app,owner){if(typeof x0.core.t10432 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t10432 = (function (owner,app,game_view,meta10433){
this.owner = owner;
this.app = app;
this.game_view = game_view;
this.meta10433 = meta10433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t10432.cljs$lang$type = true;
x0.core.t10432.cljs$lang$ctorStr = "x0.core/t10432";
x0.core.t10432.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t10432");
});
x0.core.t10432.prototype.om$core$IRender$ = true;
x0.core.t10432.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__10435 = new cljs.core.Keyword(null,"phase","phase",1120533741).cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),G__10435))
{return om.core.build.call(null,x0.core.end_view,self__.app);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"start","start",1123661780),G__10435))
{return om.core.build.call(null,x0.core.start_view,self__.app);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"play","play",1017347750),G__10435))
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
x0.core.t10432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10434){var self__ = this;
var _10434__$1 = this;return self__.meta10433;
});
x0.core.t10432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10434,meta10433__$1){var self__ = this;
var _10434__$1 = this;return (new x0.core.t10432(self__.owner,self__.app,self__.game_view,meta10433__$1));
});
x0.core.__GT_t10432 = (function __GT_t10432(owner__$1,app__$1,game_view__$1,meta10433){return (new x0.core.t10432(owner__$1,app__$1,game_view__$1,meta10433));
});
}
return (new x0.core.t10432(owner,app,game_view,null));
});
x0.core.get_top_ten = (function get_top_ten(){var iter__4160__auto__ = (function iter__10440(s__10441){return (new cljs.core.LazySeq(null,(function (){var s__10441__$1 = s__10441;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10441__$1);if(temp__4092__auto__)
{var s__10441__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10441__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10441__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10443 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10442 = 0;while(true){
if((i__10442 < size__4159__auto__))
{var i = cljs.core._nth.call(null,c__4158__auto__,i__10442);cljs.core.chunk_append.call(null,b__10443,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1017503549),localStorage.getItem([cljs.core.str(i),cljs.core.str("user")].join('')),new cljs.core.Keyword(null,"score","score",1123168772),localStorage.getItem([cljs.core.str(i),cljs.core.str("score")].join(''))], null));
{
var G__10444 = (i__10442 + 1);
i__10442 = G__10444;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10443),iter__10440.call(null,cljs.core.chunk_rest.call(null,s__10441__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10443),null);
}
} else
{var i = cljs.core.first.call(null,s__10441__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1017503549),localStorage.getItem([cljs.core.str(i),cljs.core.str("user")].join('')),new cljs.core.Keyword(null,"score","score",1123168772),localStorage.getItem([cljs.core.str(i),cljs.core.str("score")].join(''))], null),iter__10440.call(null,cljs.core.rest.call(null,s__10441__$2)));
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