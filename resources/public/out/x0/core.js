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
x0.core.invalid_ops_QMARK_ = (function invalid_ops_QMARK_(p__43185){var vec__43187 = p__43185;var op = cljs.core.nth.call(null,vec__43187,0,null);var x = cljs.core.nth.call(null,vec__43187,1,null);var y = cljs.core.nth.call(null,vec__43187,2,null);var or__3443__auto__ = (cljs.core._EQ_.call(null,"/",op)) && (cljs.core._EQ_.call(null,0,y));if(or__3443__auto__)
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
x0.core.handle_change = (function handle_change(e,owner,p__43188){var map__43190 = p__43188;var map__43190__$1 = ((cljs.core.seq_QMARK_.call(null,map__43190))?cljs.core.apply.call(null,cljs.core.hash_map,map__43190):map__43190);var text = cljs.core.get.call(null,map__43190__$1,new cljs.core.Keyword(null,"text","text",1017460895));return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"val","val",1014020755),e.target.value);
});
x0.core.check_op = (function check_op(e,app,owner,op,x,y,pos){var val = parseInt(e.target.value);if(cljs.core._EQ_.call(null,val,cljs.core.get.call(null,x0.core.operators,op).call(null,x,y)))
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"pos","pos",1014015430),(function (p1__43191_SHARP_){return (p1__43191_SHARP_ + 1);
}));
om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"score","score",1123168772),(function (p1__43192_SHARP_){return (p1__43192_SHARP_ + 1);
}));
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"val","val",1014020755),"");
} else
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"pos","pos",1014015430),(function (p1__43193_SHARP_){return (p1__43193_SHARP_ + 1);
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
x0.core.score_view = (function score_view(app,owner){if(typeof x0.core.t43198 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t43198 = (function (owner,app,score_view,meta43199){
this.owner = owner;
this.app = app;
this.score_view = score_view;
this.meta43199 = meta43199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t43198.cljs$lang$type = true;
x0.core.t43198.cljs$lang$ctorStr = "x0.core/t43198";
x0.core.t43198.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t43198");
});
x0.core.t43198.prototype.om$core$IRender$ = true;
x0.core.t43198.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "heads"},"Punts ",(function (){var attrs43201 = new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs43201))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score-val"], null)], null),attrs43201)):{"className": "score-val"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43201))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",sablono.interpreter.interpret.call(null,x0.core.max_ops)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43201),"/",sablono.interpreter.interpret.call(null,x0.core.max_ops)], null))));
})());
});
x0.core.t43198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43200){var self__ = this;
var _43200__$1 = this;return self__.meta43199;
});
x0.core.t43198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43200,meta43199__$1){var self__ = this;
var _43200__$1 = this;return (new x0.core.t43198(self__.owner,self__.app,self__.score_view,meta43199__$1));
});
x0.core.__GT_t43198 = (function __GT_t43198(owner__$1,app__$1,score_view__$1,meta43199){return (new x0.core.t43198(owner__$1,app__$1,score_view__$1,meta43199));
});
}
return (new x0.core.t43198(owner,app,score_view,null));
});
x0.core.timer_view = (function timer_view(app,owner){if(typeof x0.core.t43206 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t43206 = (function (owner,app,timer_view,meta43207){
this.owner = owner;
this.app = app;
this.timer_view = timer_view;
this.meta43207 = meta43207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t43206.cljs$lang$type = true;
x0.core.t43206.cljs$lang$ctorStr = "x0.core/t43206";
x0.core.t43206.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t43206");
});
x0.core.t43206.prototype.om$core$IRender$ = true;
x0.core.t43206.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "heads"},"Temps ",(function (){var attrs43209 = new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs43209))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["time-val"], null)], null),attrs43209)):{"className": "time-val"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43209))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43209)], null))));
})());
});
x0.core.t43206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43208){var self__ = this;
var _43208__$1 = this;return self__.meta43207;
});
x0.core.t43206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43208,meta43207__$1){var self__ = this;
var _43208__$1 = this;return (new x0.core.t43206(self__.owner,self__.app,self__.timer_view,meta43207__$1));
});
x0.core.__GT_t43206 = (function __GT_t43206(owner__$1,app__$1,timer_view__$1,meta43207){return (new x0.core.t43206(owner__$1,app__$1,timer_view__$1,meta43207));
});
}
return (new x0.core.t43206(owner,app,timer_view,null));
});
x0.core.start_view = (function start_view(app,owner){if(typeof x0.core.t43215 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t43215 = (function (owner,app,start_view,meta43216){
this.owner = owner;
this.app = app;
this.start_view = start_view;
this.meta43216 = meta43216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t43215.cljs$lang$type = true;
x0.core.t43215.cljs$lang$ctorStr = "x0.core/t43215";
x0.core.t43215.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t43215");
});
x0.core.t43215.prototype.om$core$IRender$ = true;
x0.core.t43215.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "dots-game"},React.DOM.div({"className": "notice-square"},React.DOM.div({"className": "marq"},"x0"),React.DOM.div({"className": "control-area"},React.DOM.a({"className": "start-new-game", "href": "#", "onClick": (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"phase","phase",1120533741),(function (___$2){return new cljs.core.Keyword(null,"play","play",1017347750);
}));
})},"nou joc"))));
});
x0.core.t43215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43217){var self__ = this;
var _43217__$1 = this;return self__.meta43216;
});
x0.core.t43215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43217,meta43216__$1){var self__ = this;
var _43217__$1 = this;return (new x0.core.t43215(self__.owner,self__.app,self__.start_view,meta43216__$1));
});
x0.core.__GT_t43215 = (function __GT_t43215(owner__$1,app__$1,start_view__$1,meta43216){return (new x0.core.t43215(owner__$1,app__$1,start_view__$1,meta43216));
});
}
return (new x0.core.t43215(owner,app,start_view,null));
});
x0.core.play_view = (function play_view(app,owner){if(typeof x0.core.t43284 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t43284 = (function (owner,app,play_view,meta43285){
this.owner = owner;
this.app = app;
this.play_view = play_view;
this.meta43285 = meta43285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t43284.cljs$lang$type = true;
x0.core.t43284.cljs$lang$ctorStr = "x0.core/t43284";
x0.core.t43284.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t43284");
});
x0.core.t43284.prototype.om$core$IRenderState$ = true;
x0.core.t43284.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var pos = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.app);var vec__43287 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"ops","ops",1014014500).cljs$core$IFn$_invoke$arity$1(self__.app),pos);var op = cljs.core.nth.call(null,vec__43287,0,null);var x = cljs.core.nth.call(null,vec__43287,1,null);var y = cljs.core.nth.call(null,vec__43287,2,null);var operator = new cljs.core.Symbol(null,"*","*",-1640531485,null);return React.DOM.div({"className": "dots-game"},(function (){var attrs43288 = om.core.build.call(null,x0.core.score_view,self__.app);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs43288))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header"], null)], null),attrs43288)):{"className": "header"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43288))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,x0.core.timer_view,self__.app))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43288),sablono.interpreter.interpret.call(null,om.core.build.call(null,x0.core.timer_view,self__.app))], null))));
})(),React.DOM.div({"className": "board-area"},React.DOM.div({"className": "chain-line"}),React.DOM.div({"className": "fot-highlights"}),React.DOM.div({"className": "board"},(function (){var attrs43293 = x;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs43293))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["op"], null)], null),attrs43293)):{"className": "op"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43293))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,op),sablono.interpreter.interpret.call(null,y),"="], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43293),sablono.interpreter.interpret.call(null,op),sablono.interpreter.interpret.call(null,y),"="], null))));
})(),sablono.interpreter.interpret.call(null,sablono.core.text_field.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"val","val",1014020755).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__43220_SHARP_){return x0.core.handle_change.call(null,p1__43220_SHARP_,self__.owner,state);
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",3322948697),(function (p1__43221_SHARP_){if((p1__43221_SHARP_.keyCode === 13))
{return x0.core.check_op.call(null,p1__43221_SHARP_,self__.app,self__.owner,op,x,y,pos);
} else
{return null;
}
})], null),new cljs.core.Keyword(null,"op-val","op-val",4296631463))))));
});
x0.core.t43284.prototype.om$core$IWillMount$ = true;
x0.core.t43284.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var timer_43346 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"timer","timer",1124268727));var c__6796__auto___43347 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_43300){var state_val_43301 = (state_43300[1]);if((state_val_43301 === 2))
{var inst_43295 = (state_43300[2]);var inst_43296 = cljs.core.print.call(null,"time is over!");var inst_43297 = (function (){var t = inst_43295;return ((function (t,inst_43295,inst_43296,state_val_43301){
return (function (___$2){return new cljs.core.Keyword(null,"end","end",1014004813);
});
;})(t,inst_43295,inst_43296,state_val_43301))
})();var inst_43298 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"phase","phase",1120533741),inst_43297);var state_43300__$1 = (function (){var statearr_43302 = state_43300;(statearr_43302[7] = inst_43296);
return statearr_43302;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43300__$1,inst_43298);
} else
{if((state_val_43301 === 1))
{var state_43300__$1 = state_43300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43300__$1,2,timer_43346);
} else
{return null;
}
}
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_43306 = [null,null,null,null,null,null,null,null];(statearr_43306[0] = state_machine__6782__auto__);
(statearr_43306[1] = 1);
return statearr_43306;
});
var state_machine__6782__auto____1 = (function (state_43300){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_43300);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e43307){if((e43307 instanceof Object))
{var ex__6785__auto__ = e43307;var statearr_43308_43348 = state_43300;(statearr_43308_43348[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43300);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43349 = state_43300;
state_43300 = G__43349;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_43300){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_43300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_43309 = f__6797__auto__.call(null);(statearr_43309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___43347);
return statearr_43309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
var c__6796__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_43328){var state_val_43329 = (state_43328[1]);if((state_val_43329 === 7))
{var inst_43324 = (state_43328[2]);var state_43328__$1 = state_43328;var statearr_43330_43350 = state_43328__$1;(statearr_43330_43350[2] = inst_43324);
(statearr_43330_43350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43329 === 6))
{var inst_43320 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830),cljs.core.dec);var inst_43321 = cljs.core.async.timeout.call(null,1000);var inst_43311 = inst_43321;var state_43328__$1 = (function (){var statearr_43331 = state_43328;(statearr_43331[7] = inst_43320);
(statearr_43331[8] = inst_43311);
return statearr_43331;
})();var statearr_43332_43351 = state_43328__$1;(statearr_43332_43351[2] = null);
(statearr_43332_43351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43329 === 5))
{var state_43328__$1 = state_43328;var statearr_43333_43352 = state_43328__$1;(statearr_43333_43352[2] = 0);
(statearr_43333_43352[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43329 === 4))
{var inst_43314 = (state_43328[2]);var inst_43315 = cljs.core.deref.call(null,self__.app);var inst_43316 = new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830).cljs$core$IFn$_invoke$arity$1(inst_43315);var inst_43317 = (inst_43316 <= 0);var state_43328__$1 = (function (){var statearr_43334 = state_43328;(statearr_43334[9] = inst_43314);
return statearr_43334;
})();if(cljs.core.truth_(inst_43317))
{var statearr_43335_43353 = state_43328__$1;(statearr_43335_43353[1] = 5);
} else
{var statearr_43336_43354 = state_43328__$1;(statearr_43336_43354[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43329 === 3))
{var inst_43326 = (state_43328[2]);var state_43328__$1 = state_43328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43328__$1,inst_43326);
} else
{if((state_val_43329 === 2))
{var inst_43311 = (state_43328[8]);var state_43328__$1 = state_43328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43328__$1,4,inst_43311);
} else
{if((state_val_43329 === 1))
{var inst_43310 = cljs.core.async.timeout.call(null,1000);var inst_43311 = inst_43310;var state_43328__$1 = (function (){var statearr_43337 = state_43328;(statearr_43337[8] = inst_43311);
return statearr_43337;
})();var statearr_43338_43355 = state_43328__$1;(statearr_43338_43355[2] = null);
(statearr_43338_43355[1] = 2);
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
var state_machine__6782__auto____0 = (function (){var statearr_43342 = [null,null,null,null,null,null,null,null,null,null];(statearr_43342[0] = state_machine__6782__auto__);
(statearr_43342[1] = 1);
return statearr_43342;
});
var state_machine__6782__auto____1 = (function (state_43328){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_43328);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e43343){if((e43343 instanceof Object))
{var ex__6785__auto__ = e43343;var statearr_43344_43356 = state_43328;(statearr_43344_43356[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43328);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43357 = state_43328;
state_43328 = G__43357;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_43328){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_43328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_43345 = f__6797__auto__.call(null);(statearr_43345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto__);
return statearr_43345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return c__6796__auto__;
});
x0.core.t43284.prototype.om$core$IInitState$ = true;
x0.core.t43284.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",1014020755),"",new cljs.core.Keyword(null,"timer","timer",1124268727),cljs.core.async.timeout.call(null,(1000 * x0.core.max_time))], null);
});
x0.core.t43284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43286){var self__ = this;
var _43286__$1 = this;return self__.meta43285;
});
x0.core.t43284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43286,meta43285__$1){var self__ = this;
var _43286__$1 = this;return (new x0.core.t43284(self__.owner,self__.app,self__.play_view,meta43285__$1));
});
x0.core.__GT_t43284 = (function __GT_t43284(owner__$1,app__$1,play_view__$1,meta43285){return (new x0.core.t43284(owner__$1,app__$1,play_view__$1,meta43285));
});
}
return (new x0.core.t43284(owner,app,play_view,null));
});
x0.core.restart_game = (function restart_game(app){om.core.update_BANG_.call(null,app,x0.core.init_state.call(null));
return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"phase","phase",1120533741),(function (_){return new cljs.core.Keyword(null,"play","play",1017347750);
}));
});
x0.core.end_view = (function end_view(app,owner){if(typeof x0.core.t43362 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t43362 = (function (owner,app,end_view,meta43363){
this.owner = owner;
this.app = app;
this.end_view = end_view;
this.meta43363 = meta43363;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t43362.cljs$lang$type = true;
x0.core.t43362.cljs$lang$ctorStr = "x0.core/t43362";
x0.core.t43362.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t43362");
});
x0.core.t43362.prototype.om$core$IRender$ = true;
x0.core.t43362.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "dots-game"},React.DOM.div({"className": "notice-square"},(function (){var attrs43365 = [cljs.core.str("Punts "),cljs.core.str(new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(self__.app))].join('');return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs43365))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marq"], null)], null),attrs43365)):{"className": "marq"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs43365))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43365)], null))));
})(),React.DOM.div({"className": "control-area"},React.DOM.a({"className": "start-new-game", "href": "#", "onClick": (function (){return x0.core.restart_game.call(null,self__.app);
})},"new game"))));
});
x0.core.t43362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43364){var self__ = this;
var _43364__$1 = this;return self__.meta43363;
});
x0.core.t43362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43364,meta43363__$1){var self__ = this;
var _43364__$1 = this;return (new x0.core.t43362(self__.owner,self__.app,self__.end_view,meta43363__$1));
});
x0.core.__GT_t43362 = (function __GT_t43362(owner__$1,app__$1,end_view__$1,meta43363){return (new x0.core.t43362(owner__$1,app__$1,end_view__$1,meta43363));
});
}
return (new x0.core.t43362(owner,app,end_view,null));
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
x0.core.error_view = (function error_view(app,owner){if(typeof x0.core.t43369 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t43369 = (function (owner,app,error_view,meta43370){
this.owner = owner;
this.app = app;
this.error_view = error_view;
this.meta43370 = meta43370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t43369.cljs$lang$type = true;
x0.core.t43369.cljs$lang$ctorStr = "x0.core/t43369";
x0.core.t43369.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t43369");
});
x0.core.t43369.prototype.om$core$IRenderState$ = true;
x0.core.t43369.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,"ERROR!",sablono.interpreter.interpret.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"msg","msg",1014012659))));
});
x0.core.t43369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43371){var self__ = this;
var _43371__$1 = this;return self__.meta43370;
});
x0.core.t43369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43371,meta43370__$1){var self__ = this;
var _43371__$1 = this;return (new x0.core.t43369(self__.owner,self__.app,self__.error_view,meta43370__$1));
});
x0.core.__GT_t43369 = (function __GT_t43369(owner__$1,app__$1,error_view__$1,meta43370){return (new x0.core.t43369(owner__$1,app__$1,error_view__$1,meta43370));
});
}
return (new x0.core.t43369(owner,app,error_view,null));
});
x0.core.game_view = (function game_view(app,owner){if(typeof x0.core.t43376 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t43376 = (function (owner,app,game_view,meta43377){
this.owner = owner;
this.app = app;
this.game_view = game_view;
this.meta43377 = meta43377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t43376.cljs$lang$type = true;
x0.core.t43376.cljs$lang$ctorStr = "x0.core/t43376";
x0.core.t43376.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t43376");
});
x0.core.t43376.prototype.om$core$IRender$ = true;
x0.core.t43376.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__43379 = new cljs.core.Keyword(null,"phase","phase",1120533741).cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),G__43379))
{return om.core.build.call(null,x0.core.end_view,self__.app);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"start","start",1123661780),G__43379))
{return om.core.build.call(null,x0.core.start_view,self__.app);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"play","play",1017347750),G__43379))
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
x0.core.t43376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43378){var self__ = this;
var _43378__$1 = this;return self__.meta43377;
});
x0.core.t43376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43378,meta43377__$1){var self__ = this;
var _43378__$1 = this;return (new x0.core.t43376(self__.owner,self__.app,self__.game_view,meta43377__$1));
});
x0.core.__GT_t43376 = (function __GT_t43376(owner__$1,app__$1,game_view__$1,meta43377){return (new x0.core.t43376(owner__$1,app__$1,game_view__$1,meta43377));
});
}
return (new x0.core.t43376(owner,app,game_view,null));
});
om.core.root.call(null,x0.core.game_view,x0.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map