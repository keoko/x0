// Compiled by ClojureScript 0.0-2173
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__10030__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__10029 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__10029,0,null);var body = cljs.core.nthnext.call(null,vec__10029,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__10030 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10030__delegate.call(this,args);};
G__10030.cljs$lang$maxFixedArity = 0;
G__10030.cljs$lang$applyTo = (function (arglist__10031){
var args = cljs.core.seq(arglist__10031);
return G__10030__delegate(args);
});
G__10030.cljs$core$IFn$_invoke$arity$variadic = G__10030__delegate;
return G__10030;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4160__auto__ = (function iter__10036(s__10037){return (new cljs.core.LazySeq(null,(function (){var s__10037__$1 = s__10037;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10037__$1);if(temp__4092__auto__)
{var s__10037__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10037__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10037__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10039 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10038 = 0;while(true){
if((i__10038 < size__4159__auto__))
{var args = cljs.core._nth.call(null,c__4158__auto__,i__10038);cljs.core.chunk_append.call(null,b__10039,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__10040 = (i__10038 + 1);
i__10038 = G__10040;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10039),iter__10036.call(null,cljs.core.chunk_rest.call(null,s__10037__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10039),null);
}
} else
{var args = cljs.core.first.call(null,s__10037__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__10036.call(null,cljs.core.rest.call(null,s__10037__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4160__auto__ = (function iter__10045(s__10046){return (new cljs.core.LazySeq(null,(function (){var s__10046__$1 = s__10046;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10046__$1);if(temp__4092__auto__)
{var s__10046__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10046__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10046__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10048 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10047 = 0;while(true){
if((i__10047 < size__4159__auto__))
{var style = cljs.core._nth.call(null,c__4158__auto__,i__10047);cljs.core.chunk_append.call(null,b__10048,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__10049 = (i__10047 + 1);
i__10047 = G__10049;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10048),iter__10045.call(null,cljs.core.chunk_rest.call(null,s__10046__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10048),null);
}
} else
{var style = cljs.core.first.call(null,s__10046__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__10045.call(null,cljs.core.rest.call(null,s__10046__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__10050){
var styles = cljs.core.seq(arglist__10050);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to10051 = (function() { 
var link_to10051__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to10051 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to10051__delegate.call(this,url,content);};
link_to10051.cljs$lang$maxFixedArity = 1;
link_to10051.cljs$lang$applyTo = (function (arglist__10052){
var url = cljs.core.first(arglist__10052);
var content = cljs.core.rest(arglist__10052);
return link_to10051__delegate(url,content);
});
link_to10051.cljs$core$IFn$_invoke$arity$variadic = link_to10051__delegate;
return link_to10051;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to10051);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to10053 = (function() { 
var mail_to10053__delegate = function (e_mail,p__10054){var vec__10056 = p__10054;var content = cljs.core.nth.call(null,vec__10056,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3443__auto__ = content;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to10053 = function (e_mail,var_args){
var p__10054 = null;if (arguments.length > 1) {
  p__10054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to10053__delegate.call(this,e_mail,p__10054);};
mail_to10053.cljs$lang$maxFixedArity = 1;
mail_to10053.cljs$lang$applyTo = (function (arglist__10057){
var e_mail = cljs.core.first(arglist__10057);
var p__10054 = cljs.core.rest(arglist__10057);
return mail_to10053__delegate(e_mail,p__10054);
});
mail_to10053.cljs$core$IFn$_invoke$arity$variadic = mail_to10053__delegate;
return mail_to10053;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to10053);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list10058 = (function unordered_list10058(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4160__auto__ = (function iter__10063(s__10064){return (new cljs.core.LazySeq(null,(function (){var s__10064__$1 = s__10064;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10064__$1);if(temp__4092__auto__)
{var s__10064__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10064__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10064__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10066 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10065 = 0;while(true){
if((i__10065 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__10065);cljs.core.chunk_append.call(null,b__10066,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__10067 = (i__10065 + 1);
i__10065 = G__10067;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10066),iter__10063.call(null,cljs.core.chunk_rest.call(null,s__10064__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10066),null);
}
} else
{var x = cljs.core.first.call(null,s__10064__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__10063.call(null,cljs.core.rest.call(null,s__10064__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list10058);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list10068 = (function ordered_list10068(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4160__auto__ = (function iter__10073(s__10074){return (new cljs.core.LazySeq(null,(function (){var s__10074__$1 = s__10074;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10074__$1);if(temp__4092__auto__)
{var s__10074__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10074__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10074__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10076 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10075 = 0;while(true){
if((i__10075 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__10075);cljs.core.chunk_append.call(null,b__10076,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__10077 = (i__10075 + 1);
i__10075 = G__10077;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10076),iter__10073.call(null,cljs.core.chunk_rest.call(null,s__10074__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10076),null);
}
} else
{var x = cljs.core.first.call(null,s__10074__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__10073.call(null,cljs.core.rest.call(null,s__10074__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list10068);
/**
* Create an image element.
*/
sablono.core.image10078 = (function() {
var image10078 = null;
var image10078__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image10078__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image10078 = function(src,alt){
switch(arguments.length){
case 1:
return image10078__1.call(this,src);
case 2:
return image10078__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image10078.cljs$core$IFn$_invoke$arity$1 = image10078__1;
image10078.cljs$core$IFn$_invoke$arity$2 = image10078__2;
return image10078;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image10078);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__10079_SHARP_,p2__10080_SHARP_){return [cljs.core.str(p1__10079_SHARP_),cljs.core.str("["),cljs.core.str(p2__10080_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__10081_SHARP_,p2__10082_SHARP_){return [cljs.core.str(p1__10081_SHARP_),cljs.core.str("-"),cljs.core.str(p2__10082_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field10083 = (function() {
var color_field10083 = null;
var color_field10083__1 = (function (name__4882__auto__){return color_field10083.call(null,name__4882__auto__,null);
});
var color_field10083__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__4882__auto__,value__4883__auto__);
});
color_field10083 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return color_field10083__1.call(this,name__4882__auto__);
case 2:
return color_field10083__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field10083.cljs$core$IFn$_invoke$arity$1 = color_field10083__1;
color_field10083.cljs$core$IFn$_invoke$arity$2 = color_field10083__2;
return color_field10083;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field10083);
/**
* Creates a date input field.
*/
sablono.core.date_field10084 = (function() {
var date_field10084 = null;
var date_field10084__1 = (function (name__4882__auto__){return date_field10084.call(null,name__4882__auto__,null);
});
var date_field10084__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__4882__auto__,value__4883__auto__);
});
date_field10084 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return date_field10084__1.call(this,name__4882__auto__);
case 2:
return date_field10084__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field10084.cljs$core$IFn$_invoke$arity$1 = date_field10084__1;
date_field10084.cljs$core$IFn$_invoke$arity$2 = date_field10084__2;
return date_field10084;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field10084);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field10085 = (function() {
var datetime_field10085 = null;
var datetime_field10085__1 = (function (name__4882__auto__){return datetime_field10085.call(null,name__4882__auto__,null);
});
var datetime_field10085__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__4882__auto__,value__4883__auto__);
});
datetime_field10085 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return datetime_field10085__1.call(this,name__4882__auto__);
case 2:
return datetime_field10085__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field10085.cljs$core$IFn$_invoke$arity$1 = datetime_field10085__1;
datetime_field10085.cljs$core$IFn$_invoke$arity$2 = datetime_field10085__2;
return datetime_field10085;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field10085);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field10086 = (function() {
var datetime_local_field10086 = null;
var datetime_local_field10086__1 = (function (name__4882__auto__){return datetime_local_field10086.call(null,name__4882__auto__,null);
});
var datetime_local_field10086__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__4882__auto__,value__4883__auto__);
});
datetime_local_field10086 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return datetime_local_field10086__1.call(this,name__4882__auto__);
case 2:
return datetime_local_field10086__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field10086.cljs$core$IFn$_invoke$arity$1 = datetime_local_field10086__1;
datetime_local_field10086.cljs$core$IFn$_invoke$arity$2 = datetime_local_field10086__2;
return datetime_local_field10086;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field10086);
/**
* Creates a email input field.
*/
sablono.core.email_field10087 = (function() {
var email_field10087 = null;
var email_field10087__1 = (function (name__4882__auto__){return email_field10087.call(null,name__4882__auto__,null);
});
var email_field10087__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__4882__auto__,value__4883__auto__);
});
email_field10087 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return email_field10087__1.call(this,name__4882__auto__);
case 2:
return email_field10087__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field10087.cljs$core$IFn$_invoke$arity$1 = email_field10087__1;
email_field10087.cljs$core$IFn$_invoke$arity$2 = email_field10087__2;
return email_field10087;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field10087);
/**
* Creates a file input field.
*/
sablono.core.file_field10088 = (function() {
var file_field10088 = null;
var file_field10088__1 = (function (name__4882__auto__){return file_field10088.call(null,name__4882__auto__,null);
});
var file_field10088__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__4882__auto__,value__4883__auto__);
});
file_field10088 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return file_field10088__1.call(this,name__4882__auto__);
case 2:
return file_field10088__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field10088.cljs$core$IFn$_invoke$arity$1 = file_field10088__1;
file_field10088.cljs$core$IFn$_invoke$arity$2 = file_field10088__2;
return file_field10088;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field10088);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field10089 = (function() {
var hidden_field10089 = null;
var hidden_field10089__1 = (function (name__4882__auto__){return hidden_field10089.call(null,name__4882__auto__,null);
});
var hidden_field10089__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__4882__auto__,value__4883__auto__);
});
hidden_field10089 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return hidden_field10089__1.call(this,name__4882__auto__);
case 2:
return hidden_field10089__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field10089.cljs$core$IFn$_invoke$arity$1 = hidden_field10089__1;
hidden_field10089.cljs$core$IFn$_invoke$arity$2 = hidden_field10089__2;
return hidden_field10089;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field10089);
/**
* Creates a month input field.
*/
sablono.core.month_field10090 = (function() {
var month_field10090 = null;
var month_field10090__1 = (function (name__4882__auto__){return month_field10090.call(null,name__4882__auto__,null);
});
var month_field10090__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__4882__auto__,value__4883__auto__);
});
month_field10090 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return month_field10090__1.call(this,name__4882__auto__);
case 2:
return month_field10090__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field10090.cljs$core$IFn$_invoke$arity$1 = month_field10090__1;
month_field10090.cljs$core$IFn$_invoke$arity$2 = month_field10090__2;
return month_field10090;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field10090);
/**
* Creates a number input field.
*/
sablono.core.number_field10091 = (function() {
var number_field10091 = null;
var number_field10091__1 = (function (name__4882__auto__){return number_field10091.call(null,name__4882__auto__,null);
});
var number_field10091__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__4882__auto__,value__4883__auto__);
});
number_field10091 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return number_field10091__1.call(this,name__4882__auto__);
case 2:
return number_field10091__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field10091.cljs$core$IFn$_invoke$arity$1 = number_field10091__1;
number_field10091.cljs$core$IFn$_invoke$arity$2 = number_field10091__2;
return number_field10091;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field10091);
/**
* Creates a password input field.
*/
sablono.core.password_field10092 = (function() {
var password_field10092 = null;
var password_field10092__1 = (function (name__4882__auto__){return password_field10092.call(null,name__4882__auto__,null);
});
var password_field10092__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__4882__auto__,value__4883__auto__);
});
password_field10092 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return password_field10092__1.call(this,name__4882__auto__);
case 2:
return password_field10092__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field10092.cljs$core$IFn$_invoke$arity$1 = password_field10092__1;
password_field10092.cljs$core$IFn$_invoke$arity$2 = password_field10092__2;
return password_field10092;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field10092);
/**
* Creates a range input field.
*/
sablono.core.range_field10093 = (function() {
var range_field10093 = null;
var range_field10093__1 = (function (name__4882__auto__){return range_field10093.call(null,name__4882__auto__,null);
});
var range_field10093__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__4882__auto__,value__4883__auto__);
});
range_field10093 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return range_field10093__1.call(this,name__4882__auto__);
case 2:
return range_field10093__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field10093.cljs$core$IFn$_invoke$arity$1 = range_field10093__1;
range_field10093.cljs$core$IFn$_invoke$arity$2 = range_field10093__2;
return range_field10093;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field10093);
/**
* Creates a search input field.
*/
sablono.core.search_field10094 = (function() {
var search_field10094 = null;
var search_field10094__1 = (function (name__4882__auto__){return search_field10094.call(null,name__4882__auto__,null);
});
var search_field10094__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__4882__auto__,value__4883__auto__);
});
search_field10094 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return search_field10094__1.call(this,name__4882__auto__);
case 2:
return search_field10094__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field10094.cljs$core$IFn$_invoke$arity$1 = search_field10094__1;
search_field10094.cljs$core$IFn$_invoke$arity$2 = search_field10094__2;
return search_field10094;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field10094);
/**
* Creates a tel input field.
*/
sablono.core.tel_field10095 = (function() {
var tel_field10095 = null;
var tel_field10095__1 = (function (name__4882__auto__){return tel_field10095.call(null,name__4882__auto__,null);
});
var tel_field10095__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__4882__auto__,value__4883__auto__);
});
tel_field10095 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return tel_field10095__1.call(this,name__4882__auto__);
case 2:
return tel_field10095__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field10095.cljs$core$IFn$_invoke$arity$1 = tel_field10095__1;
tel_field10095.cljs$core$IFn$_invoke$arity$2 = tel_field10095__2;
return tel_field10095;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field10095);
/**
* Creates a text input field.
*/
sablono.core.text_field10096 = (function() {
var text_field10096 = null;
var text_field10096__1 = (function (name__4882__auto__){return text_field10096.call(null,name__4882__auto__,null);
});
var text_field10096__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__4882__auto__,value__4883__auto__);
});
text_field10096 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return text_field10096__1.call(this,name__4882__auto__);
case 2:
return text_field10096__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field10096.cljs$core$IFn$_invoke$arity$1 = text_field10096__1;
text_field10096.cljs$core$IFn$_invoke$arity$2 = text_field10096__2;
return text_field10096;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field10096);
/**
* Creates a time input field.
*/
sablono.core.time_field10097 = (function() {
var time_field10097 = null;
var time_field10097__1 = (function (name__4882__auto__){return time_field10097.call(null,name__4882__auto__,null);
});
var time_field10097__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__4882__auto__,value__4883__auto__);
});
time_field10097 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return time_field10097__1.call(this,name__4882__auto__);
case 2:
return time_field10097__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field10097.cljs$core$IFn$_invoke$arity$1 = time_field10097__1;
time_field10097.cljs$core$IFn$_invoke$arity$2 = time_field10097__2;
return time_field10097;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field10097);
/**
* Creates a url input field.
*/
sablono.core.url_field10098 = (function() {
var url_field10098 = null;
var url_field10098__1 = (function (name__4882__auto__){return url_field10098.call(null,name__4882__auto__,null);
});
var url_field10098__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__4882__auto__,value__4883__auto__);
});
url_field10098 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return url_field10098__1.call(this,name__4882__auto__);
case 2:
return url_field10098__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field10098.cljs$core$IFn$_invoke$arity$1 = url_field10098__1;
url_field10098.cljs$core$IFn$_invoke$arity$2 = url_field10098__2;
return url_field10098;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field10098);
/**
* Creates a week input field.
*/
sablono.core.week_field10099 = (function() {
var week_field10099 = null;
var week_field10099__1 = (function (name__4882__auto__){return week_field10099.call(null,name__4882__auto__,null);
});
var week_field10099__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__4882__auto__,value__4883__auto__);
});
week_field10099 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return week_field10099__1.call(this,name__4882__auto__);
case 2:
return week_field10099__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field10099.cljs$core$IFn$_invoke$arity$1 = week_field10099__1;
week_field10099.cljs$core$IFn$_invoke$arity$2 = week_field10099__2;
return week_field10099;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field10099);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box10100 = (function() {
var check_box10100 = null;
var check_box10100__1 = (function (name){return check_box10100.call(null,name,null);
});
var check_box10100__2 = (function (name,checked_QMARK_){return check_box10100.call(null,name,checked_QMARK_,"true");
});
var check_box10100__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box10100 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box10100__1.call(this,name);
case 2:
return check_box10100__2.call(this,name,checked_QMARK_);
case 3:
return check_box10100__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box10100.cljs$core$IFn$_invoke$arity$1 = check_box10100__1;
check_box10100.cljs$core$IFn$_invoke$arity$2 = check_box10100__2;
check_box10100.cljs$core$IFn$_invoke$arity$3 = check_box10100__3;
return check_box10100;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box10100);
/**
* Creates a radio button.
*/
sablono.core.radio_button10101 = (function() {
var radio_button10101 = null;
var radio_button10101__1 = (function (group){return radio_button10101.call(null,group,null);
});
var radio_button10101__2 = (function (group,checked_QMARK_){return radio_button10101.call(null,group,checked_QMARK_,"true");
});
var radio_button10101__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button10101 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button10101__1.call(this,group);
case 2:
return radio_button10101__2.call(this,group,checked_QMARK_);
case 3:
return radio_button10101__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button10101.cljs$core$IFn$_invoke$arity$1 = radio_button10101__1;
radio_button10101.cljs$core$IFn$_invoke$arity$2 = radio_button10101__2;
radio_button10101.cljs$core$IFn$_invoke$arity$3 = radio_button10101__3;
return radio_button10101;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button10101);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options10102 = (function() {
var select_options10102 = null;
var select_options10102__1 = (function (coll){return select_options10102.call(null,coll,null);
});
var select_options10102__2 = (function (coll,selected){var iter__4160__auto__ = (function iter__10111(s__10112){return (new cljs.core.LazySeq(null,(function (){var s__10112__$1 = s__10112;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10112__$1);if(temp__4092__auto__)
{var s__10112__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10112__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10112__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10114 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10113 = 0;while(true){
if((i__10113 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__10113);cljs.core.chunk_append.call(null,b__10114,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10117 = x;var text = cljs.core.nth.call(null,vec__10117,0,null);var val = cljs.core.nth.call(null,vec__10117,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__10117,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options10102.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__10119 = (i__10113 + 1);
i__10113 = G__10119;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10114),iter__10111.call(null,cljs.core.chunk_rest.call(null,s__10112__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10114),null);
}
} else
{var x = cljs.core.first.call(null,s__10112__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10118 = x;var text = cljs.core.nth.call(null,vec__10118,0,null);var val = cljs.core.nth.call(null,vec__10118,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__10118,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options10102.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__10111.call(null,cljs.core.rest.call(null,s__10112__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
});
select_options10102 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options10102__1.call(this,coll);
case 2:
return select_options10102__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options10102.cljs$core$IFn$_invoke$arity$1 = select_options10102__1;
select_options10102.cljs$core$IFn$_invoke$arity$2 = select_options10102__2;
return select_options10102;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options10102);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down10120 = (function() {
var drop_down10120 = null;
var drop_down10120__2 = (function (name,options){return drop_down10120.call(null,name,options,null);
});
var drop_down10120__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down10120 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down10120__2.call(this,name,options);
case 3:
return drop_down10120__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down10120.cljs$core$IFn$_invoke$arity$2 = drop_down10120__2;
drop_down10120.cljs$core$IFn$_invoke$arity$3 = drop_down10120__3;
return drop_down10120;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down10120);
/**
* Creates a text area element.
*/
sablono.core.text_area10121 = (function() {
var text_area10121 = null;
var text_area10121__1 = (function (name){return text_area10121.call(null,name,null);
});
var text_area10121__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area10121 = function(name,value){
switch(arguments.length){
case 1:
return text_area10121__1.call(this,name);
case 2:
return text_area10121__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area10121.cljs$core$IFn$_invoke$arity$1 = text_area10121__1;
text_area10121.cljs$core$IFn$_invoke$arity$2 = text_area10121__2;
return text_area10121;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area10121);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label10122 = (function label10122(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label10122);
/**
* Creates a submit button.
*/
sablono.core.submit_button10123 = (function submit_button10123(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button10123);
/**
* Creates a form reset button.
*/
sablono.core.reset_button10124 = (function reset_button10124(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button10124);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to10125 = (function() { 
var form_to10125__delegate = function (p__10126,body){var vec__10128 = p__10126;var method = cljs.core.nth.call(null,vec__10128,0,null);var action = cljs.core.nth.call(null,vec__10128,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to10125 = function (p__10126,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to10125__delegate.call(this,p__10126,body);};
form_to10125.cljs$lang$maxFixedArity = 1;
form_to10125.cljs$lang$applyTo = (function (arglist__10129){
var p__10126 = cljs.core.first(arglist__10129);
var body = cljs.core.rest(arglist__10129);
return form_to10125__delegate(p__10126,body);
});
form_to10125.cljs$core$IFn$_invoke$arity$variadic = form_to10125__delegate;
return form_to10125;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to10125);

//# sourceMappingURL=core.js.map