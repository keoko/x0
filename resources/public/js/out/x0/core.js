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
x0.core.invalid_ops_QMARK_ = (function invalid_ops_QMARK_(p__12368){var vec__12370 = p__12368;var op = cljs.core.nth.call(null,vec__12370,0,null);var x = cljs.core.nth.call(null,vec__12370,1,null);var y = cljs.core.nth.call(null,vec__12370,2,null);var or__3443__auto__ = (cljs.core._EQ_.call(null,"/",op)) && (cljs.core._EQ_.call(null,0,y));if(or__3443__auto__)
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
x0.core.handle_change = (function handle_change(e,owner,p__12371){var map__12373 = p__12371;var map__12373__$1 = ((cljs.core.seq_QMARK_.call(null,map__12373))?cljs.core.apply.call(null,cljs.core.hash_map,map__12373):map__12373);var text = cljs.core.get.call(null,map__12373__$1,new cljs.core.Keyword(null,"text","text",1017460895));return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"val","val",1014020755),e.target.value);
});
x0.core.check_op = (function check_op(e,app,owner,op,x,y,pos){var val = parseInt(e.target.value);if(cljs.core._EQ_.call(null,val,cljs.core.get.call(null,x0.core.operators,op).call(null,x,y)))
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"pos","pos",1014015430),(function (p1__12374_SHARP_){return (p1__12374_SHARP_ + 1);
}));
om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"score","score",1123168772),(function (p1__12375_SHARP_){return (p1__12375_SHARP_ + 1);
}));
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"val","val",1014020755),"");
} else
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"pos","pos",1014015430),(function (p1__12376_SHARP_){return (p1__12376_SHARP_ + 1);
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
x0.core.score_view = (function score_view(app,owner){if(typeof x0.core.t12381 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t12381 = (function (owner,app,score_view,meta12382){
this.owner = owner;
this.app = app;
this.score_view = score_view;
this.meta12382 = meta12382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t12381.cljs$lang$type = true;
x0.core.t12381.cljs$lang$ctorStr = "x0.core/t12381";
x0.core.t12381.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t12381");
});
x0.core.t12381.prototype.om$core$IRender$ = true;
x0.core.t12381.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "heads"},"Punts ",(function (){var attrs12384 = new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs12384))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score-val"], null)], null),attrs12384)):{"className": "score-val"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12384))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",sablono.interpreter.interpret.call(null,x0.core.max_ops)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12384),"/",sablono.interpreter.interpret.call(null,x0.core.max_ops)], null))));
})());
});
x0.core.t12381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12383){var self__ = this;
var _12383__$1 = this;return self__.meta12382;
});
x0.core.t12381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12383,meta12382__$1){var self__ = this;
var _12383__$1 = this;return (new x0.core.t12381(self__.owner,self__.app,self__.score_view,meta12382__$1));
});
x0.core.__GT_t12381 = (function __GT_t12381(owner__$1,app__$1,score_view__$1,meta12382){return (new x0.core.t12381(owner__$1,app__$1,score_view__$1,meta12382));
});
}
return (new x0.core.t12381(owner,app,score_view,null));
});
x0.core.timer_view = (function timer_view(app,owner){if(typeof x0.core.t12389 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t12389 = (function (owner,app,timer_view,meta12390){
this.owner = owner;
this.app = app;
this.timer_view = timer_view;
this.meta12390 = meta12390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t12389.cljs$lang$type = true;
x0.core.t12389.cljs$lang$ctorStr = "x0.core/t12389";
x0.core.t12389.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t12389");
});
x0.core.t12389.prototype.om$core$IRender$ = true;
x0.core.t12389.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "heads"},"Temps ",(function (){var attrs12392 = new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830).cljs$core$IFn$_invoke$arity$1(self__.app);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs12392))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["time-val"], null)], null),attrs12392)):{"className": "time-val"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12392))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12392)], null))));
})());
});
x0.core.t12389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12391){var self__ = this;
var _12391__$1 = this;return self__.meta12390;
});
x0.core.t12389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12391,meta12390__$1){var self__ = this;
var _12391__$1 = this;return (new x0.core.t12389(self__.owner,self__.app,self__.timer_view,meta12390__$1));
});
x0.core.__GT_t12389 = (function __GT_t12389(owner__$1,app__$1,timer_view__$1,meta12390){return (new x0.core.t12389(owner__$1,app__$1,timer_view__$1,meta12390));
});
}
return (new x0.core.t12389(owner,app,timer_view,null));
});
x0.core.start_view = (function start_view(app,owner){if(typeof x0.core.t12398 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t12398 = (function (owner,app,start_view,meta12399){
this.owner = owner;
this.app = app;
this.start_view = start_view;
this.meta12399 = meta12399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t12398.cljs$lang$type = true;
x0.core.t12398.cljs$lang$ctorStr = "x0.core/t12398";
x0.core.t12398.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t12398");
});
x0.core.t12398.prototype.om$core$IRender$ = true;
x0.core.t12398.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "dots-game"},React.DOM.div({"className": "notice-square"},React.DOM.div({"className": "marq"},React.DOM.span({"className": "yellow"},"x0")),React.DOM.div({"className": "control-area"},React.DOM.a({"className": "start-new-game", "href": "#", "onClick": (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"phase","phase",1120533741),(function (___$2){return new cljs.core.Keyword(null,"play","play",1017347750);
}));
})},"nou joc"))));
});
x0.core.t12398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12400){var self__ = this;
var _12400__$1 = this;return self__.meta12399;
});
x0.core.t12398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12400,meta12399__$1){var self__ = this;
var _12400__$1 = this;return (new x0.core.t12398(self__.owner,self__.app,self__.start_view,meta12399__$1));
});
x0.core.__GT_t12398 = (function __GT_t12398(owner__$1,app__$1,start_view__$1,meta12399){return (new x0.core.t12398(owner__$1,app__$1,start_view__$1,meta12399));
});
}
return (new x0.core.t12398(owner,app,start_view,null));
});
x0.core.play_view = (function play_view(app,owner){if(typeof x0.core.t12467 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t12467 = (function (owner,app,play_view,meta12468){
this.owner = owner;
this.app = app;
this.play_view = play_view;
this.meta12468 = meta12468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t12467.cljs$lang$type = true;
x0.core.t12467.cljs$lang$ctorStr = "x0.core/t12467";
x0.core.t12467.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t12467");
});
x0.core.t12467.prototype.om$core$IRenderState$ = true;
x0.core.t12467.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var pos = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.app);var vec__12470 = cljs.core.nth.call(null,new cljs.core.Keyword(null,"ops","ops",1014014500).cljs$core$IFn$_invoke$arity$1(self__.app),pos);var op = cljs.core.nth.call(null,vec__12470,0,null);var x = cljs.core.nth.call(null,vec__12470,1,null);var y = cljs.core.nth.call(null,vec__12470,2,null);var operator = new cljs.core.Symbol(null,"*","*",-1640531485,null);return React.DOM.div({"className": "dots-game"},(function (){var attrs12471 = om.core.build.call(null,x0.core.score_view,self__.app);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs12471))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header"], null)], null),attrs12471)):{"className": "header"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12471))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,x0.core.timer_view,self__.app))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12471),sablono.interpreter.interpret.call(null,om.core.build.call(null,x0.core.timer_view,self__.app))], null))));
})(),React.DOM.div({"className": "board-area"},React.DOM.div({"className": "chain-line"}),React.DOM.div({"className": "fot-highlights"}),React.DOM.div({"className": "board"},(function (){var attrs12476 = x;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs12476))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["op"], null)], null),attrs12476)):{"className": "op"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12476))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,op),sablono.interpreter.interpret.call(null,y),"="], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12476),sablono.interpreter.interpret.call(null,op),sablono.interpreter.interpret.call(null,y),"="], null))));
})(),sablono.interpreter.interpret.call(null,sablono.core.text_field.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1014017029),"op-field",new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"val","val",1014020755).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__12403_SHARP_){return x0.core.handle_change.call(null,p1__12403_SHARP_,self__.owner,state);
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",3322948697),(function (p1__12404_SHARP_){if((p1__12404_SHARP_.keyCode === 13))
{return x0.core.check_op.call(null,p1__12404_SHARP_,self__.app,self__.owner,op,x,y,pos);
} else
{return null;
}
})], null),new cljs.core.Keyword(null,"op-val","op-val",4296631463))))));
});
x0.core.t12467.prototype.om$core$IDidMount$ = true;
x0.core.t12467.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var node = om.core.get_node.call(null,self__.owner,"op-field");return node.focus();
});
x0.core.t12467.prototype.om$core$IWillMount$ = true;
x0.core.t12467.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var timer_12529 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"timer","timer",1124268727));var c__6796__auto___12530 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_12483){var state_val_12484 = (state_12483[1]);if((state_val_12484 === 2))
{var inst_12478 = (state_12483[2]);var inst_12479 = cljs.core.print.call(null,"time is over!");var inst_12480 = (function (){var t = inst_12478;return ((function (t,inst_12478,inst_12479,state_val_12484){
return (function (___$2){return new cljs.core.Keyword(null,"end","end",1014004813);
});
;})(t,inst_12478,inst_12479,state_val_12484))
})();var inst_12481 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"phase","phase",1120533741),inst_12480);var state_12483__$1 = (function (){var statearr_12485 = state_12483;(statearr_12485[7] = inst_12479);
return statearr_12485;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12483__$1,inst_12481);
} else
{if((state_val_12484 === 1))
{var state_12483__$1 = state_12483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12483__$1,2,timer_12529);
} else
{return null;
}
}
});return ((function (switch__6781__auto__){
return (function() {
var state_machine__6782__auto__ = null;
var state_machine__6782__auto____0 = (function (){var statearr_12489 = [null,null,null,null,null,null,null,null];(statearr_12489[0] = state_machine__6782__auto__);
(statearr_12489[1] = 1);
return statearr_12489;
});
var state_machine__6782__auto____1 = (function (state_12483){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_12483);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e12490){if((e12490 instanceof Object))
{var ex__6785__auto__ = e12490;var statearr_12491_12531 = state_12483;(statearr_12491_12531[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12532 = state_12483;
state_12483 = G__12532;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_12483){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_12483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_12492 = f__6797__auto__.call(null);(statearr_12492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto___12530);
return statearr_12492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
var c__6796__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6797__auto__ = (function (){var switch__6781__auto__ = (function (state_12511){var state_val_12512 = (state_12511[1]);if((state_val_12512 === 7))
{var inst_12507 = (state_12511[2]);var state_12511__$1 = state_12511;var statearr_12513_12533 = state_12511__$1;(statearr_12513_12533[2] = inst_12507);
(statearr_12513_12533[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12512 === 6))
{var inst_12503 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830),cljs.core.dec);var inst_12504 = cljs.core.async.timeout.call(null,1000);var inst_12494 = inst_12504;var state_12511__$1 = (function (){var statearr_12514 = state_12511;(statearr_12514[7] = inst_12503);
(statearr_12514[8] = inst_12494);
return statearr_12514;
})();var statearr_12515_12534 = state_12511__$1;(statearr_12515_12534[2] = null);
(statearr_12515_12534[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12512 === 5))
{var state_12511__$1 = state_12511;var statearr_12516_12535 = state_12511__$1;(statearr_12516_12535[2] = 0);
(statearr_12516_12535[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12512 === 4))
{var inst_12497 = (state_12511[2]);var inst_12498 = cljs.core.deref.call(null,self__.app);var inst_12499 = new cljs.core.Keyword(null,"remaining-time","remaining-time",2356347830).cljs$core$IFn$_invoke$arity$1(inst_12498);var inst_12500 = (inst_12499 <= 0);var state_12511__$1 = (function (){var statearr_12517 = state_12511;(statearr_12517[9] = inst_12497);
return statearr_12517;
})();if(cljs.core.truth_(inst_12500))
{var statearr_12518_12536 = state_12511__$1;(statearr_12518_12536[1] = 5);
} else
{var statearr_12519_12537 = state_12511__$1;(statearr_12519_12537[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12512 === 3))
{var inst_12509 = (state_12511[2]);var state_12511__$1 = state_12511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12511__$1,inst_12509);
} else
{if((state_val_12512 === 2))
{var inst_12494 = (state_12511[8]);var state_12511__$1 = state_12511;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12511__$1,4,inst_12494);
} else
{if((state_val_12512 === 1))
{var inst_12493 = cljs.core.async.timeout.call(null,1000);var inst_12494 = inst_12493;var state_12511__$1 = (function (){var statearr_12520 = state_12511;(statearr_12520[8] = inst_12494);
return statearr_12520;
})();var statearr_12521_12538 = state_12511__$1;(statearr_12521_12538[2] = null);
(statearr_12521_12538[1] = 2);
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
var state_machine__6782__auto____0 = (function (){var statearr_12525 = [null,null,null,null,null,null,null,null,null,null];(statearr_12525[0] = state_machine__6782__auto__);
(statearr_12525[1] = 1);
return statearr_12525;
});
var state_machine__6782__auto____1 = (function (state_12511){while(true){
var ret_value__6783__auto__ = (function (){try{while(true){
var result__6784__auto__ = switch__6781__auto__.call(null,state_12511);if(cljs.core.keyword_identical_QMARK_.call(null,result__6784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6784__auto__;
}
break;
}
}catch (e12526){if((e12526 instanceof Object))
{var ex__6785__auto__ = e12526;var statearr_12527_12539 = state_12511;(statearr_12527_12539[5] = ex__6785__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12511);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12540 = state_12511;
state_12511 = G__12540;
continue;
}
} else
{return ret_value__6783__auto__;
}
break;
}
});
state_machine__6782__auto__ = function(state_12511){
switch(arguments.length){
case 0:
return state_machine__6782__auto____0.call(this);
case 1:
return state_machine__6782__auto____1.call(this,state_12511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6782__auto____0;
state_machine__6782__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6782__auto____1;
return state_machine__6782__auto__;
})()
;})(switch__6781__auto__))
})();var state__6798__auto__ = (function (){var statearr_12528 = f__6797__auto__.call(null);(statearr_12528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6796__auto__);
return statearr_12528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6798__auto__);
}));
return c__6796__auto__;
});
x0.core.t12467.prototype.om$core$IInitState$ = true;
x0.core.t12467.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",1014020755),"",new cljs.core.Keyword(null,"timer","timer",1124268727),cljs.core.async.timeout.call(null,(1000 * x0.core.max_time))], null);
});
x0.core.t12467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12469){var self__ = this;
var _12469__$1 = this;return self__.meta12468;
});
x0.core.t12467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12469,meta12468__$1){var self__ = this;
var _12469__$1 = this;return (new x0.core.t12467(self__.owner,self__.app,self__.play_view,meta12468__$1));
});
x0.core.__GT_t12467 = (function __GT_t12467(owner__$1,app__$1,play_view__$1,meta12468){return (new x0.core.t12467(owner__$1,app__$1,play_view__$1,meta12468));
});
}
return (new x0.core.t12467(owner,app,play_view,null));
});
x0.core.restart_game = (function restart_game(app){om.core.update_BANG_.call(null,app,x0.core.init_state.call(null));
return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"phase","phase",1120533741),(function (_){return new cljs.core.Keyword(null,"play","play",1017347750);
}));
});
x0.core.end_view = (function end_view(app,owner){if(typeof x0.core.t12545 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t12545 = (function (owner,app,end_view,meta12546){
this.owner = owner;
this.app = app;
this.end_view = end_view;
this.meta12546 = meta12546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t12545.cljs$lang$type = true;
x0.core.t12545.cljs$lang$ctorStr = "x0.core/t12545";
x0.core.t12545.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t12545");
});
x0.core.t12545.prototype.om$core$IRender$ = true;
x0.core.t12545.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "dots-game"},React.DOM.div({"className": "notice-square"},(function (){var attrs12548 = [cljs.core.str("Punts "),cljs.core.str(new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(self__.app))].join('');return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs12548))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["marq"], null)], null),attrs12548)):{"className": "marq"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12548))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12548)], null))));
})(),React.DOM.div({"className": "control-area"},React.DOM.a({"className": "start-new-game", "href": "#", "onClick": (function (){return x0.core.restart_game.call(null,self__.app);
})},"new game"))));
});
x0.core.t12545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12547){var self__ = this;
var _12547__$1 = this;return self__.meta12546;
});
x0.core.t12545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12547,meta12546__$1){var self__ = this;
var _12547__$1 = this;return (new x0.core.t12545(self__.owner,self__.app,self__.end_view,meta12546__$1));
});
x0.core.__GT_t12545 = (function __GT_t12545(owner__$1,app__$1,end_view__$1,meta12546){return (new x0.core.t12545(owner__$1,app__$1,end_view__$1,meta12546));
});
}
return (new x0.core.t12545(owner,app,end_view,null));
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
x0.core.error_view = (function error_view(app,owner){if(typeof x0.core.t12552 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t12552 = (function (owner,app,error_view,meta12553){
this.owner = owner;
this.app = app;
this.error_view = error_view;
this.meta12553 = meta12553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t12552.cljs$lang$type = true;
x0.core.t12552.cljs$lang$ctorStr = "x0.core/t12552";
x0.core.t12552.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t12552");
});
x0.core.t12552.prototype.om$core$IRenderState$ = true;
x0.core.t12552.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,"ERROR!",sablono.interpreter.interpret.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"msg","msg",1014012659))));
});
x0.core.t12552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12554){var self__ = this;
var _12554__$1 = this;return self__.meta12553;
});
x0.core.t12552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12554,meta12553__$1){var self__ = this;
var _12554__$1 = this;return (new x0.core.t12552(self__.owner,self__.app,self__.error_view,meta12553__$1));
});
x0.core.__GT_t12552 = (function __GT_t12552(owner__$1,app__$1,error_view__$1,meta12553){return (new x0.core.t12552(owner__$1,app__$1,error_view__$1,meta12553));
});
}
return (new x0.core.t12552(owner,app,error_view,null));
});
x0.core.game_view = (function game_view(app,owner){if(typeof x0.core.t12559 !== 'undefined')
{} else
{
/**
* @constructor
*/
x0.core.t12559 = (function (owner,app,game_view,meta12560){
this.owner = owner;
this.app = app;
this.game_view = game_view;
this.meta12560 = meta12560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
x0.core.t12559.cljs$lang$type = true;
x0.core.t12559.cljs$lang$ctorStr = "x0.core/t12559";
x0.core.t12559.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"x0.core/t12559");
});
x0.core.t12559.prototype.om$core$IRender$ = true;
x0.core.t12559.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var G__12562 = new cljs.core.Keyword(null,"phase","phase",1120533741).cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",1014004813),G__12562))
{return om.core.build.call(null,x0.core.end_view,self__.app);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"start","start",1123661780),G__12562))
{return om.core.build.call(null,x0.core.start_view,self__.app);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"play","play",1017347750),G__12562))
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
x0.core.t12559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12561){var self__ = this;
var _12561__$1 = this;return self__.meta12560;
});
x0.core.t12559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12561,meta12560__$1){var self__ = this;
var _12561__$1 = this;return (new x0.core.t12559(self__.owner,self__.app,self__.game_view,meta12560__$1));
});
x0.core.__GT_t12559 = (function __GT_t12559(owner__$1,app__$1,game_view__$1,meta12560){return (new x0.core.t12559(owner__$1,app__$1,game_view__$1,meta12560));
});
}
return (new x0.core.t12559(owner,app,game_view,null));
});
om.core.root.call(null,x0.core.game_view,x0.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map