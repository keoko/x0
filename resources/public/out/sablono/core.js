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
var G__43382__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__43381 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__43381,0,null);var body = cljs.core.nthnext.call(null,vec__43381,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__43382 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__43382__delegate.call(this,args);};
G__43382.cljs$lang$maxFixedArity = 0;
G__43382.cljs$lang$applyTo = (function (arglist__43383){
var args = cljs.core.seq(arglist__43383);
return G__43382__delegate(args);
});
G__43382.cljs$core$IFn$_invoke$arity$variadic = G__43382__delegate;
return G__43382;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4160__auto__ = (function iter__43388(s__43389){return (new cljs.core.LazySeq(null,(function (){var s__43389__$1 = s__43389;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43389__$1);if(temp__4092__auto__)
{var s__43389__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43389__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__43389__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__43391 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__43390 = 0;while(true){
if((i__43390 < size__4159__auto__))
{var args = cljs.core._nth.call(null,c__4158__auto__,i__43390);cljs.core.chunk_append.call(null,b__43391,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__43392 = (i__43390 + 1);
i__43390 = G__43392;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43391),iter__43388.call(null,cljs.core.chunk_rest.call(null,s__43389__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43391),null);
}
} else
{var args = cljs.core.first.call(null,s__43389__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__43388.call(null,cljs.core.rest.call(null,s__43389__$2)));
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
var include_css__delegate = function (styles){var iter__4160__auto__ = (function iter__43397(s__43398){return (new cljs.core.LazySeq(null,(function (){var s__43398__$1 = s__43398;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43398__$1);if(temp__4092__auto__)
{var s__43398__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43398__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__43398__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__43400 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__43399 = 0;while(true){
if((i__43399 < size__4159__auto__))
{var style = cljs.core._nth.call(null,c__4158__auto__,i__43399);cljs.core.chunk_append.call(null,b__43400,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__43401 = (i__43399 + 1);
i__43399 = G__43401;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43400),iter__43397.call(null,cljs.core.chunk_rest.call(null,s__43398__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43400),null);
}
} else
{var style = cljs.core.first.call(null,s__43398__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__43397.call(null,cljs.core.rest.call(null,s__43398__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__43402){
var styles = cljs.core.seq(arglist__43402);
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
sablono.core.link_to43403 = (function() { 
var link_to43403__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to43403 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to43403__delegate.call(this,url,content);};
link_to43403.cljs$lang$maxFixedArity = 1;
link_to43403.cljs$lang$applyTo = (function (arglist__43404){
var url = cljs.core.first(arglist__43404);
var content = cljs.core.rest(arglist__43404);
return link_to43403__delegate(url,content);
});
link_to43403.cljs$core$IFn$_invoke$arity$variadic = link_to43403__delegate;
return link_to43403;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to43403);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to43405 = (function() { 
var mail_to43405__delegate = function (e_mail,p__43406){var vec__43408 = p__43406;var content = cljs.core.nth.call(null,vec__43408,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3443__auto__ = content;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to43405 = function (e_mail,var_args){
var p__43406 = null;if (arguments.length > 1) {
  p__43406 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to43405__delegate.call(this,e_mail,p__43406);};
mail_to43405.cljs$lang$maxFixedArity = 1;
mail_to43405.cljs$lang$applyTo = (function (arglist__43409){
var e_mail = cljs.core.first(arglist__43409);
var p__43406 = cljs.core.rest(arglist__43409);
return mail_to43405__delegate(e_mail,p__43406);
});
mail_to43405.cljs$core$IFn$_invoke$arity$variadic = mail_to43405__delegate;
return mail_to43405;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to43405);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list43410 = (function unordered_list43410(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4160__auto__ = (function iter__43415(s__43416){return (new cljs.core.LazySeq(null,(function (){var s__43416__$1 = s__43416;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43416__$1);if(temp__4092__auto__)
{var s__43416__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43416__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__43416__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__43418 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__43417 = 0;while(true){
if((i__43417 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__43417);cljs.core.chunk_append.call(null,b__43418,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__43419 = (i__43417 + 1);
i__43417 = G__43419;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43418),iter__43415.call(null,cljs.core.chunk_rest.call(null,s__43416__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43418),null);
}
} else
{var x = cljs.core.first.call(null,s__43416__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__43415.call(null,cljs.core.rest.call(null,s__43416__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list43410);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list43420 = (function ordered_list43420(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4160__auto__ = (function iter__43425(s__43426){return (new cljs.core.LazySeq(null,(function (){var s__43426__$1 = s__43426;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43426__$1);if(temp__4092__auto__)
{var s__43426__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43426__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__43426__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__43428 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__43427 = 0;while(true){
if((i__43427 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__43427);cljs.core.chunk_append.call(null,b__43428,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__43429 = (i__43427 + 1);
i__43427 = G__43429;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43428),iter__43425.call(null,cljs.core.chunk_rest.call(null,s__43426__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43428),null);
}
} else
{var x = cljs.core.first.call(null,s__43426__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__43425.call(null,cljs.core.rest.call(null,s__43426__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list43420);
/**
* Create an image element.
*/
sablono.core.image43430 = (function() {
var image43430 = null;
var image43430__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image43430__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image43430 = function(src,alt){
switch(arguments.length){
case 1:
return image43430__1.call(this,src);
case 2:
return image43430__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image43430.cljs$core$IFn$_invoke$arity$1 = image43430__1;
image43430.cljs$core$IFn$_invoke$arity$2 = image43430__2;
return image43430;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image43430);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__43431_SHARP_,p2__43432_SHARP_){return [cljs.core.str(p1__43431_SHARP_),cljs.core.str("["),cljs.core.str(p2__43432_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__43433_SHARP_,p2__43434_SHARP_){return [cljs.core.str(p1__43433_SHARP_),cljs.core.str("-"),cljs.core.str(p2__43434_SHARP_)].join('');
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
sablono.core.color_field43435 = (function() {
var color_field43435 = null;
var color_field43435__1 = (function (name__4882__auto__){return color_field43435.call(null,name__4882__auto__,null);
});
var color_field43435__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__4882__auto__,value__4883__auto__);
});
color_field43435 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return color_field43435__1.call(this,name__4882__auto__);
case 2:
return color_field43435__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field43435.cljs$core$IFn$_invoke$arity$1 = color_field43435__1;
color_field43435.cljs$core$IFn$_invoke$arity$2 = color_field43435__2;
return color_field43435;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field43435);
/**
* Creates a date input field.
*/
sablono.core.date_field43436 = (function() {
var date_field43436 = null;
var date_field43436__1 = (function (name__4882__auto__){return date_field43436.call(null,name__4882__auto__,null);
});
var date_field43436__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__4882__auto__,value__4883__auto__);
});
date_field43436 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return date_field43436__1.call(this,name__4882__auto__);
case 2:
return date_field43436__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field43436.cljs$core$IFn$_invoke$arity$1 = date_field43436__1;
date_field43436.cljs$core$IFn$_invoke$arity$2 = date_field43436__2;
return date_field43436;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field43436);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field43437 = (function() {
var datetime_field43437 = null;
var datetime_field43437__1 = (function (name__4882__auto__){return datetime_field43437.call(null,name__4882__auto__,null);
});
var datetime_field43437__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__4882__auto__,value__4883__auto__);
});
datetime_field43437 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return datetime_field43437__1.call(this,name__4882__auto__);
case 2:
return datetime_field43437__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field43437.cljs$core$IFn$_invoke$arity$1 = datetime_field43437__1;
datetime_field43437.cljs$core$IFn$_invoke$arity$2 = datetime_field43437__2;
return datetime_field43437;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field43437);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field43438 = (function() {
var datetime_local_field43438 = null;
var datetime_local_field43438__1 = (function (name__4882__auto__){return datetime_local_field43438.call(null,name__4882__auto__,null);
});
var datetime_local_field43438__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__4882__auto__,value__4883__auto__);
});
datetime_local_field43438 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return datetime_local_field43438__1.call(this,name__4882__auto__);
case 2:
return datetime_local_field43438__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field43438.cljs$core$IFn$_invoke$arity$1 = datetime_local_field43438__1;
datetime_local_field43438.cljs$core$IFn$_invoke$arity$2 = datetime_local_field43438__2;
return datetime_local_field43438;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field43438);
/**
* Creates a email input field.
*/
sablono.core.email_field43439 = (function() {
var email_field43439 = null;
var email_field43439__1 = (function (name__4882__auto__){return email_field43439.call(null,name__4882__auto__,null);
});
var email_field43439__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__4882__auto__,value__4883__auto__);
});
email_field43439 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return email_field43439__1.call(this,name__4882__auto__);
case 2:
return email_field43439__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field43439.cljs$core$IFn$_invoke$arity$1 = email_field43439__1;
email_field43439.cljs$core$IFn$_invoke$arity$2 = email_field43439__2;
return email_field43439;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field43439);
/**
* Creates a file input field.
*/
sablono.core.file_field43440 = (function() {
var file_field43440 = null;
var file_field43440__1 = (function (name__4882__auto__){return file_field43440.call(null,name__4882__auto__,null);
});
var file_field43440__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__4882__auto__,value__4883__auto__);
});
file_field43440 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return file_field43440__1.call(this,name__4882__auto__);
case 2:
return file_field43440__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field43440.cljs$core$IFn$_invoke$arity$1 = file_field43440__1;
file_field43440.cljs$core$IFn$_invoke$arity$2 = file_field43440__2;
return file_field43440;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field43440);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field43441 = (function() {
var hidden_field43441 = null;
var hidden_field43441__1 = (function (name__4882__auto__){return hidden_field43441.call(null,name__4882__auto__,null);
});
var hidden_field43441__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__4882__auto__,value__4883__auto__);
});
hidden_field43441 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return hidden_field43441__1.call(this,name__4882__auto__);
case 2:
return hidden_field43441__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field43441.cljs$core$IFn$_invoke$arity$1 = hidden_field43441__1;
hidden_field43441.cljs$core$IFn$_invoke$arity$2 = hidden_field43441__2;
return hidden_field43441;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field43441);
/**
* Creates a month input field.
*/
sablono.core.month_field43442 = (function() {
var month_field43442 = null;
var month_field43442__1 = (function (name__4882__auto__){return month_field43442.call(null,name__4882__auto__,null);
});
var month_field43442__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__4882__auto__,value__4883__auto__);
});
month_field43442 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return month_field43442__1.call(this,name__4882__auto__);
case 2:
return month_field43442__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field43442.cljs$core$IFn$_invoke$arity$1 = month_field43442__1;
month_field43442.cljs$core$IFn$_invoke$arity$2 = month_field43442__2;
return month_field43442;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field43442);
/**
* Creates a number input field.
*/
sablono.core.number_field43443 = (function() {
var number_field43443 = null;
var number_field43443__1 = (function (name__4882__auto__){return number_field43443.call(null,name__4882__auto__,null);
});
var number_field43443__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__4882__auto__,value__4883__auto__);
});
number_field43443 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return number_field43443__1.call(this,name__4882__auto__);
case 2:
return number_field43443__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field43443.cljs$core$IFn$_invoke$arity$1 = number_field43443__1;
number_field43443.cljs$core$IFn$_invoke$arity$2 = number_field43443__2;
return number_field43443;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field43443);
/**
* Creates a password input field.
*/
sablono.core.password_field43444 = (function() {
var password_field43444 = null;
var password_field43444__1 = (function (name__4882__auto__){return password_field43444.call(null,name__4882__auto__,null);
});
var password_field43444__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__4882__auto__,value__4883__auto__);
});
password_field43444 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return password_field43444__1.call(this,name__4882__auto__);
case 2:
return password_field43444__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field43444.cljs$core$IFn$_invoke$arity$1 = password_field43444__1;
password_field43444.cljs$core$IFn$_invoke$arity$2 = password_field43444__2;
return password_field43444;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field43444);
/**
* Creates a range input field.
*/
sablono.core.range_field43445 = (function() {
var range_field43445 = null;
var range_field43445__1 = (function (name__4882__auto__){return range_field43445.call(null,name__4882__auto__,null);
});
var range_field43445__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__4882__auto__,value__4883__auto__);
});
range_field43445 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return range_field43445__1.call(this,name__4882__auto__);
case 2:
return range_field43445__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field43445.cljs$core$IFn$_invoke$arity$1 = range_field43445__1;
range_field43445.cljs$core$IFn$_invoke$arity$2 = range_field43445__2;
return range_field43445;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field43445);
/**
* Creates a search input field.
*/
sablono.core.search_field43446 = (function() {
var search_field43446 = null;
var search_field43446__1 = (function (name__4882__auto__){return search_field43446.call(null,name__4882__auto__,null);
});
var search_field43446__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__4882__auto__,value__4883__auto__);
});
search_field43446 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return search_field43446__1.call(this,name__4882__auto__);
case 2:
return search_field43446__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field43446.cljs$core$IFn$_invoke$arity$1 = search_field43446__1;
search_field43446.cljs$core$IFn$_invoke$arity$2 = search_field43446__2;
return search_field43446;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field43446);
/**
* Creates a tel input field.
*/
sablono.core.tel_field43447 = (function() {
var tel_field43447 = null;
var tel_field43447__1 = (function (name__4882__auto__){return tel_field43447.call(null,name__4882__auto__,null);
});
var tel_field43447__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__4882__auto__,value__4883__auto__);
});
tel_field43447 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return tel_field43447__1.call(this,name__4882__auto__);
case 2:
return tel_field43447__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field43447.cljs$core$IFn$_invoke$arity$1 = tel_field43447__1;
tel_field43447.cljs$core$IFn$_invoke$arity$2 = tel_field43447__2;
return tel_field43447;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field43447);
/**
* Creates a text input field.
*/
sablono.core.text_field43448 = (function() {
var text_field43448 = null;
var text_field43448__1 = (function (name__4882__auto__){return text_field43448.call(null,name__4882__auto__,null);
});
var text_field43448__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__4882__auto__,value__4883__auto__);
});
text_field43448 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return text_field43448__1.call(this,name__4882__auto__);
case 2:
return text_field43448__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field43448.cljs$core$IFn$_invoke$arity$1 = text_field43448__1;
text_field43448.cljs$core$IFn$_invoke$arity$2 = text_field43448__2;
return text_field43448;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field43448);
/**
* Creates a time input field.
*/
sablono.core.time_field43449 = (function() {
var time_field43449 = null;
var time_field43449__1 = (function (name__4882__auto__){return time_field43449.call(null,name__4882__auto__,null);
});
var time_field43449__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__4882__auto__,value__4883__auto__);
});
time_field43449 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return time_field43449__1.call(this,name__4882__auto__);
case 2:
return time_field43449__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field43449.cljs$core$IFn$_invoke$arity$1 = time_field43449__1;
time_field43449.cljs$core$IFn$_invoke$arity$2 = time_field43449__2;
return time_field43449;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field43449);
/**
* Creates a url input field.
*/
sablono.core.url_field43450 = (function() {
var url_field43450 = null;
var url_field43450__1 = (function (name__4882__auto__){return url_field43450.call(null,name__4882__auto__,null);
});
var url_field43450__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__4882__auto__,value__4883__auto__);
});
url_field43450 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return url_field43450__1.call(this,name__4882__auto__);
case 2:
return url_field43450__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field43450.cljs$core$IFn$_invoke$arity$1 = url_field43450__1;
url_field43450.cljs$core$IFn$_invoke$arity$2 = url_field43450__2;
return url_field43450;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field43450);
/**
* Creates a week input field.
*/
sablono.core.week_field43451 = (function() {
var week_field43451 = null;
var week_field43451__1 = (function (name__4882__auto__){return week_field43451.call(null,name__4882__auto__,null);
});
var week_field43451__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__4882__auto__,value__4883__auto__);
});
week_field43451 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return week_field43451__1.call(this,name__4882__auto__);
case 2:
return week_field43451__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field43451.cljs$core$IFn$_invoke$arity$1 = week_field43451__1;
week_field43451.cljs$core$IFn$_invoke$arity$2 = week_field43451__2;
return week_field43451;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field43451);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box43452 = (function() {
var check_box43452 = null;
var check_box43452__1 = (function (name){return check_box43452.call(null,name,null);
});
var check_box43452__2 = (function (name,checked_QMARK_){return check_box43452.call(null,name,checked_QMARK_,"true");
});
var check_box43452__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box43452 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box43452__1.call(this,name);
case 2:
return check_box43452__2.call(this,name,checked_QMARK_);
case 3:
return check_box43452__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box43452.cljs$core$IFn$_invoke$arity$1 = check_box43452__1;
check_box43452.cljs$core$IFn$_invoke$arity$2 = check_box43452__2;
check_box43452.cljs$core$IFn$_invoke$arity$3 = check_box43452__3;
return check_box43452;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box43452);
/**
* Creates a radio button.
*/
sablono.core.radio_button43453 = (function() {
var radio_button43453 = null;
var radio_button43453__1 = (function (group){return radio_button43453.call(null,group,null);
});
var radio_button43453__2 = (function (group,checked_QMARK_){return radio_button43453.call(null,group,checked_QMARK_,"true");
});
var radio_button43453__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button43453 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button43453__1.call(this,group);
case 2:
return radio_button43453__2.call(this,group,checked_QMARK_);
case 3:
return radio_button43453__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button43453.cljs$core$IFn$_invoke$arity$1 = radio_button43453__1;
radio_button43453.cljs$core$IFn$_invoke$arity$2 = radio_button43453__2;
radio_button43453.cljs$core$IFn$_invoke$arity$3 = radio_button43453__3;
return radio_button43453;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button43453);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options43454 = (function() {
var select_options43454 = null;
var select_options43454__1 = (function (coll){return select_options43454.call(null,coll,null);
});
var select_options43454__2 = (function (coll,selected){var iter__4160__auto__ = (function iter__43463(s__43464){return (new cljs.core.LazySeq(null,(function (){var s__43464__$1 = s__43464;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43464__$1);if(temp__4092__auto__)
{var s__43464__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43464__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__43464__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__43466 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__43465 = 0;while(true){
if((i__43465 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__43465);cljs.core.chunk_append.call(null,b__43466,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__43469 = x;var text = cljs.core.nth.call(null,vec__43469,0,null);var val = cljs.core.nth.call(null,vec__43469,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__43469,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options43454.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__43471 = (i__43465 + 1);
i__43465 = G__43471;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43466),iter__43463.call(null,cljs.core.chunk_rest.call(null,s__43464__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43466),null);
}
} else
{var x = cljs.core.first.call(null,s__43464__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__43470 = x;var text = cljs.core.nth.call(null,vec__43470,0,null);var val = cljs.core.nth.call(null,vec__43470,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__43470,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options43454.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__43463.call(null,cljs.core.rest.call(null,s__43464__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
});
select_options43454 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options43454__1.call(this,coll);
case 2:
return select_options43454__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options43454.cljs$core$IFn$_invoke$arity$1 = select_options43454__1;
select_options43454.cljs$core$IFn$_invoke$arity$2 = select_options43454__2;
return select_options43454;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options43454);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down43472 = (function() {
var drop_down43472 = null;
var drop_down43472__2 = (function (name,options){return drop_down43472.call(null,name,options,null);
});
var drop_down43472__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down43472 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down43472__2.call(this,name,options);
case 3:
return drop_down43472__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down43472.cljs$core$IFn$_invoke$arity$2 = drop_down43472__2;
drop_down43472.cljs$core$IFn$_invoke$arity$3 = drop_down43472__3;
return drop_down43472;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down43472);
/**
* Creates a text area element.
*/
sablono.core.text_area43473 = (function() {
var text_area43473 = null;
var text_area43473__1 = (function (name){return text_area43473.call(null,name,null);
});
var text_area43473__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area43473 = function(name,value){
switch(arguments.length){
case 1:
return text_area43473__1.call(this,name);
case 2:
return text_area43473__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area43473.cljs$core$IFn$_invoke$arity$1 = text_area43473__1;
text_area43473.cljs$core$IFn$_invoke$arity$2 = text_area43473__2;
return text_area43473;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area43473);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label43474 = (function label43474(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label43474);
/**
* Creates a submit button.
*/
sablono.core.submit_button43475 = (function submit_button43475(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button43475);
/**
* Creates a form reset button.
*/
sablono.core.reset_button43476 = (function reset_button43476(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button43476);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to43477 = (function() { 
var form_to43477__delegate = function (p__43478,body){var vec__43480 = p__43478;var method = cljs.core.nth.call(null,vec__43480,0,null);var action = cljs.core.nth.call(null,vec__43480,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to43477 = function (p__43478,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to43477__delegate.call(this,p__43478,body);};
form_to43477.cljs$lang$maxFixedArity = 1;
form_to43477.cljs$lang$applyTo = (function (arglist__43481){
var p__43478 = cljs.core.first(arglist__43481);
var body = cljs.core.rest(arglist__43481);
return form_to43477__delegate(p__43478,body);
});
form_to43477.cljs$core$IFn$_invoke$arity$variadic = form_to43477__delegate;
return form_to43477;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to43477);

//# sourceMappingURL=core.js.map