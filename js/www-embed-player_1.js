var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function n(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=la(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),na;
if("function"==typeof Object.setPrototypeOf)na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=na;
function t(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}
function sa(){this.B=!1;this.m=null;this.j=void 0;this.i=1;this.o=this.s=0;this.v=this.l=null}
function ta(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
sa.prototype.N=function(a){this.j=a};
function ua(a,b){a.l={Pb:b,Vb:!0};a.i=a.s||a.o}
sa.prototype.return=function(a){this.l={return:a};this.i=this.o};
function v(a,b,c){a.i=c;return{value:b}}
sa.prototype.u=function(a){this.i=a};
function va(a,b,c){a.s=b;void 0!=c&&(a.o=c)}
function wa(a,b){a.i=b;a.s=0}
function xa(a){a.s=0;var b=a.l.Pb;a.l=null;return b}
function Aa(a){a.v=[a.l];a.s=0;a.o=0}
function Ba(a){var b=a.v.splice(0)[0];(b=a.l=a.l||b)?b.Vb?a.i=a.s||a.o:void 0!=b.u&&a.o<b.u?(a.i=b.u,a.l=null):a.i=a.o:a.i=0}
function Ca(a){this.i=new sa;this.j=a}
function Da(a,b){ta(a.i);var c=a.i.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ga(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.B=!1,e;var f=e.value}catch(g){return a.i.m=null,ua(a.i,g),Ga(a)}a.i.m=null;d.call(a.i,f);return Ga(a)}
function Ga(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.B=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,ua(a.i,c)}a.i.B=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Vb)throw b.Pb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ta(a.i);a.i.m?b=Ea(a,a.i.m.next,b,a.i.N):(a.i.N(b),b=Ga(a));return b};
this.throw=function(b){ta(a.i);a.i.m?b=Ea(a,a.i.m["throw"],b,a.i.N):(ua(a.i,b),b=Ga(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ia(new Ha(new Ca(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return ma});
n("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.B=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.o()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.o=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.m(m)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.o)}};
b.prototype.K=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.s(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.T(h,g):this.s(g)};
b.prototype.o=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.P();this.v()};
b.prototype.P=function(){var g=this;e(function(){if(g.F()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.F=function(){if(this.B)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.v=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.R=function(g){var h=this.m();g.Ua(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(x,u){return"function"==typeof x?function(A){try{m(x(A))}catch(D){q(D)}}:u}
var m,q,r=new b(function(x,u){m=x;q=u});
this.Ua(k(g,m),k(h,q));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ua=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Ua(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function r(A){return function(D){x[A]=D;u--;0==u&&m(x)}}
var x=[],u=0;do x.push(void 0),u++,d(k.value).Ua(r(x.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ja(k,g)){var m=new c;da(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return ha(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ja(h.data_,m))for(h=0;h<q.length;h++){var r=q[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:m,list:q,index:h,entry:r}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.setPrototypeOf",function(a){return a||ra});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||fa});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
var Ma=Ma||{},y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){a.sb=void 0;a.getInstance=function(){return a.sb?a.sb:a.sb=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa=Va:Xa=Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.hq=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function kb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function mb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function rb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;function yb(){if(void 0===xb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){y.console&&y.console.error(c.message)}xb=a}else xb=a}return xb}
;function Bb(a,b){this.l=a===Cb&&b||""}
Bb.prototype.j=!0;Bb.prototype.i=function(){return this.l};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a){this.l=Eb===Eb?a:"";this.j=!0}
Fb.prototype.toString=function(){return this.l.toString()};
Fb.prototype.i=function(){return this.l.toString()};function Gb(a,b){this.l=b===Hb?a:""}
Gb.prototype.toString=function(){return this.l+""};
Gb.prototype.j=!0;Gb.prototype.i=function(){return this.l.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.l;Oa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=yb();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Lb(a,b){return a<b?-1:a>b?1:0}
;function Mb(a,b){this.l=b===Nb?a:""}
Mb.prototype.toString=function(){return this.l.toString()};
Mb.prototype.j=!0;Mb.prototype.i=function(){return this.l.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.l;Oa(a);return"type_error:SafeUrl"}
var Pb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Nb={},Qb=new Mb("about:invalid#zClosurez",Nb);function Rb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Rb().indexOf(a)}
;function Sb(){return C("Trident")||C("MSIE")}
function Tb(){return C("Firefox")||C("FxiOS")}
function Ub(){return C("Safari")&&!(Vb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Tb()||C("Silk")||C("Android"))}
function Vb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Yb(){return C("Android")&&!(Vb()||Tb()||C("Opera")||C("Silk"))}
function Zb(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function $b(a){var b=Rb();if("Internet Explorer"===a){if(Sb())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=Zb(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Vb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Tb()||"Safari"===a&&Ub()||"Android Browser"===a&&Yb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function ac(a){a=$b(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var bc={};function cc(a){this.l=bc===bc?a:"";this.j=!0}
cc.prototype.i=function(){return this.l.toString()};
cc.prototype.toString=function(){return this.l.toString()};function dc(a,b){b instanceof Mb||b instanceof Mb||(b="object"==typeof b&&b.j?b.i():String(b),Pb.test(b)||(b="about:invalid#zClosurez"),b=new Mb(b,Nb));a.href=Ob(b)}
function ec(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=fc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function gc(){return fc("script[nonce]")}
var hc=/^[\w+/_-]+[=]{0,2}$/;function fc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&hc.test(a)?a:"":""}
;function ic(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kc(a){return a?decodeURI(a):a}
function lc(a,b){return b.match(jc)[a]||null}
function mc(a){return kc(lc(3,a))}
function nc(a){var b=a.match(jc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function oc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function pc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)pc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function qc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)pc(a[b],a[b+1],c);return c.join("&")}
function rc(a){var b=[],c;for(c in a)pc(c,a[c],b);return b.join("&")}
function sc(a,b){var c=2==arguments.length?qc(arguments[1],0):qc(arguments,1);return oc(a,c)}
function tc(a,b){b=rc(b);return oc(a,b)}
function xc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return oc(a,b+c)}
function yc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var zc=/#|$/,Ac=/[?&]($|#)/;function Bc(a,b){for(var c=a.search(zc),d=0,e,f=[];0<=(e=yc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Ac,"$1")}
;var Cc={};function Dc(a){if(a!==Cc)throw Error("requires a valid immutable API token");}
;function Ec(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Fc(){var a=Rb();if(C("Windows")){var b=/Windows (?:NT|Phone) ([0-9.]+)/;b.exec(a)}else Ec()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):-1!=Rb().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b.exec(a)):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b.exec(a)):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b.exec(a))}
;function Gc(a){Gc[" "](a);return a}
Gc[" "]=function(){};
function Hc(a){var b=Ic;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}
;var Jc=C("Opera"),Kc=Sb(),Lc=C("Edge"),Mc=C("Gecko")&&!(-1!=Rb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Nc=-1!=Rb().toLowerCase().indexOf("webkit")&&!C("Edge"),Oc=C("Android");function Pc(){var a=y.document;return a?a.documentMode:void 0}
var Qc;a:{var Rc="",Sc=function(){var a=Rb();if(Mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Lc)return/Edge\/([\d\.]+)/.exec(a);if(Kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nc)return/WebKit\/(\S+)/.exec(a);if(Jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sc&&(Rc=Sc?Sc[1]:"");if(Kc){var Tc=Pc();if(null!=Tc&&Tc>parseFloat(Rc)){Qc=String(Tc);break a}}Qc=Rc}var Uc=Qc,Ic={};
function Vc(){return Hc(function(){for(var a=0,b=Kb(String(Uc)).split("."),c=Kb("9").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Lb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Lb(0==f[2].length,0==g[2].length)||Lb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}return 0<=a})}
var Wc;if(y.document&&Kc){var Xc=Pc();Wc=Xc?Xc:parseInt(Uc,10)||void 0}else Wc=void 0;var Yc=Wc;var Zc=Ec()||C("iPod"),$c=C("iPad");Yb();Vb();var ad=Ub()&&!(Ec()||C("iPad")||C("iPod"));var bd={},cd=null;
function dd(a,b){Pa(a);void 0===b&&(b=0);if(!cd){cd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));bd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===cd[h]&&(cd[h]=g)}}}b=bd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var ed="undefined"!==typeof Uint8Array,fd={};var gd;function hd(a){if(fd!==fd)throw Error("illegal external caller");this.ja=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
hd.prototype.isEmpty=function(){return null==this.ja};var id="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function jd(a,b){Object.isFrozen(a)||(id?a[id]|=b:void 0!==a.ta?a.ta|=b:Object.defineProperties(a,{ta:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function kd(a){var b;id?b=a[id]:b=a.ta;return null==b?0:b}
function ld(a){return Array.isArray(a)?!!(kd(a)&1):!1}
function md(a){jd(a,1);return a}
function nd(a){return Array.isArray(a)?!!(kd(a)&2):!1}
function od(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");jd(a,2)}
function sd(a,b){if(!Array.isArray(a))throw Error("cannot mark non-array as mutable");b?jd(a,8):Object.isFrozen(a)||(id?a[id]&=-9:void 0!==a.ta&&(a.ta&=-9))}
;function td(a){return nd(a.I)}
function ud(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var vd,wd=Object.freeze(md([]));function xd(a){if(td(a))throw Error("Cannot mutate an immutable Message");}
var yd="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function zd(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Ad(a){y.setTimeout(function(){throw a;},0)}
;function Bd(a){return a.displayName||a.name||"unknown type name"}
function Cd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Bd(b)+" but got "+(a&&Bd(a.constructor)));return a}
function Dd(a,b,c){c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function Ed(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(ed&&null!=a&&a instanceof Uint8Array)return dd(a);if(a instanceof hd){var b=a.ja;null!=b&&"string"!==typeof b&&(ed&&b instanceof Uint8Array?b=dd(b):(Oa(b),b=null));return null==b?"":a.ja=b}}}return a}
;function Fd(a,b){b=void 0===b?Gd:b;return Hd(a,b)}
function Id(a,b){if(null!=a){if(Array.isArray(a))a=Hd(a,b);else if(ud(a)){var c={},d;for(d in a)c[d]=Id(a[d],b);a=c}else a=b(a);return a}}
function Hd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Id(c[d],b);ld(a)&&md(c);return c}
function Jd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Ed(a);return Array.isArray(a)?Fd(a,Jd):a}
function Gd(a){return ed&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Kd(a){return a.j||(a.j=a.I[a.l+a.ra]={})}
function Ld(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.I[b+a.ra]}
function E(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||xd(a);b<a.l&&!d?a.I[b+a.ra]=c:Kd(a)[b]=c;return a}
function Md(a,b,c,d){c=void 0===c?!0:c;var e=Ld(a,b,d);Array.isArray(e)||(e=wd);if(td(a))c&&(od(e),Object.freeze(e));else if(e===wd||nd(e))e=md(e.slice()),E(a,b,e,d);return e}
function Nd(a,b,c){a=Ld(a,b);return null==a?c:a}
function Od(a,b,c){null==c?c=wd:md(c);return E(a,b,c)}
function Pd(a,b,c,d){xd(a);(c=Qd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),E(a,c));return E(a,b,d)}
function Qd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Ld(a,e)&&(0!==c&&E(a,c,void 0,!1,!0),c=e)}return c}
function Rd(a,b,c,d,e){e=void 0===e?!1:e;var f=e;if(-1===c)d=null;else{a.i||(a.i={});var g=a.i[c];if(g)d=g;else{var h=Ld(a,c,f);b=Dd(h,b,d);void 0==b?d=g:(d&&b.I!==h&&E(a,c,b.I,f,!0),a.i[c]=b,td(a)&&od(b.I),d=b)}}if(null==d)return d;td(d)&&!td(a)&&(d=d.Ab(Cc),E(a,c,d.I,e),a.i[c]=d);return d}
function Sd(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=td(a),g=a.i[c];d=Md(a,c,!0,d);var h=f||nd(d);if(!g){g=[];f=f||h;for(var k=0;k<d.length;k++){var m=d[k];f=f||nd(m);m=Dd(m,b);void 0!==m&&(g.push(m),h&&od(m.I))}a.i[c]=g;sd(d,!f)}b=h||e;e=nd(g);b&&!e&&(Object.isFrozen(g)&&(a.i[c]=g=g.slice()),od(g),Object.freeze(g));!b&&e&&(a.i[c]=g=g.slice());return g}
function Td(a,b,c,d){d=void 0===d?!1:d;var e=td(a);b=Sd(a,b,c,d,e);a=Md(a,c,d);if(!(c=e)&&(c=a)){if(!Array.isArray(a))throw Error("cannot check mutability state of non-array");c=!(kd(a)&8)}if(c){for(c=0;c<b.length;c++)(d=b[c])&&td(d)&&!e&&(b[c]=b[c].Ab(Cc),a[c]=b[c].I);sd(a,!0)}return b}
function G(a,b,c,d){xd(a);a.i||(a.i={});b=null!=d?Cd(d,b).I:d;a.i[c]=d;return E(a,c,b)}
function Ud(a,b,c,d,e){xd(a);a.i||(a.i={});b=null!=e?Cd(e,b).I:e;a.i[c]=e;Pd(a,c,d,b)}
function Vd(a,b,c,d){xd(a);if(null!=d){var e=md([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Cd(d[g],b).I,f=f||nd(e[g]);a.i||(a.i={});a.i[c]=d;sd(e,!f)}else a.i&&(a.i[c]=void 0),e=wd;return E(a,c,e)}
function Wd(a,b,c,d){xd(a);var e=Sd(a,c,b,void 0,!1);c=null!=d?Cd(d,c):new c;a=Md(a,b);e.push(c);a.push(c.I);Dc(Cc);td(c)&&sd(a,!1)}
;function Xd(a,b,c){a||(a=Yd);Yd=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.ra=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.I=a;a:{d=this.I.length;a=d-1;if(d&&(d=this.I[a],ud(d))){this.l=a-this.ra;this.j=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.ra),this.j=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.ra,(d=this.I[a])?Array.isArray(d)&&md(d):this.I[a]=wd;else{d=Kd(this);var e=d[a];e?Array.isArray(e)&&md(e):d[a]=wd}}
Xd.prototype.toJSON=function(){var a=this.I;return vd?a:Fd(a,Jd)};
function Zd(a){vd=!0;try{return JSON.stringify(a.toJSON(),$d)}finally{vd=!1}}
Xd.prototype.clone=function(){var a=Fd(this.I);Yd=a;a=new this.constructor(a);Yd=null;ae(a,this);return a};
Xd.prototype.isMutable=function(a){Dc(a);return!td(this)};
Xd.prototype.toString=function(){return this.I.toString()};
function $d(a,b){return Ed(b)}
function ae(a,b){b.Ha&&(a.Ha=b.Ha.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Td(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)ae(f[g],e[g])}else(f=Rd(a,e.constructor,g,void 0,f))&&ae(f,e)}}}}
var Yd;function be(){Xd.apply(this,arguments)}
t(be,Xd);be.prototype.Ab=function(){return this};
if(yd){var ce={};Object.defineProperties(be,(ce[Symbol.hasInstance]=zd(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),ce))};function de(a){var b=this.i,c=this.j;return this.isRepeated?Td(a,b,c,!0):Rd(a,b,c,void 0,!0)}
;function ee(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.kb?md(a.slice()):a,Vd(b,0<e.length?e[0].constructor:void 0,c,e)):G(b,a.constructor,c,a):(ed&&d instanceof Uint8Array?e=d.length?new hd(new Uint8Array(d)):gd||(gd=new hd(null)):(Array.isArray(d)&&(e?od(d):ld(d)&&f.kb&&(d=d.slice())),e=d),E(b,c,e))}
;function I(){be.apply(this,arguments)}
t(I,be);I.prototype.Ab=function(a){Dc(a);if(td(this)){a={kb:!0};var b=td(this);if(b&&!a.kb)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.Ha&&(c.Ha=this.Ha.slice());for(var d=this.I,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&ud(f))for(h in f){var g=+h;Number.isNaN(g)?Kd(c)[h]=f[h]:ee(this,c,g,f[h],b,a)}else ee(this,c,e-this.ra,f,b,a)}var h=c}else h=this;return h};
if(yd){var fe={};Object.defineProperties(I,(fe[Symbol.hasInstance]=zd(Object[Symbol.hasInstance]),fe))};function ge(a){this.Jb=a}
;function he(a,b,c){this.j=a;this.m=b;this.i=c||[];this.xa=new Map}
l=he.prototype;l.tc=function(a){var b=Ja.apply(1,arguments),c=this.nb(b);c?c.push(new ge(a)):this.ic(a,b)};
l.ic=function(a){this.xa.set(this.Qb(Ja.apply(1,arguments)),[new ge(a)])};
l.nb=function(){var a=this.Qb(Ja.apply(0,arguments));return this.xa.has(a)?this.xa.get(a):void 0};
l.Gc=function(){var a=this.nb(Ja.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.xa.clear()};
l.Qb=function(){var a=Ja.apply(0,arguments);return a?a.join(","):"key"};function ie(a,b){he.call(this,a,3,b)}
t(ie,he);ie.prototype.l=function(a){var b=Ja.apply(1,arguments),c=0,d=this.Gc(b);d&&(c=d.Jb);this.ic(c+a,b)};function je(a,b){he.call(this,a,2,b)}
t(je,he);je.prototype.l=function(a){this.tc(a,Ja.apply(1,arguments))};function ke(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function le(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?le.apply(null,d):ke(d)}}
;function J(){this.N=this.N;this.B=this.B}
J.prototype.N=!1;J.prototype.i=function(){return this.N};
J.prototype.dispose=function(){this.N||(this.N=!0,this.C())};
function me(a,b){ne(a,Ya(ke,b))}
function ne(a,b){a.N?b():(a.B||(a.B=[]),a.B.push(b))}
J.prototype.C=function(){if(this.B)for(;this.B.length;)this.B.shift()()};function oe(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
oe.prototype.stopPropagation=function(){this.l=!0};
oe.prototype.preventDefault=function(){this.defaultPrevented=!0};function pe(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=qe(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,re[c])c=re[c];else{c=String(c);if(!re[c]){var f=/function\s+([^\(]+)/m.exec(c);re[c]=f?f[1]:"[Anonymous]"}c=re[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function qe(a,b){b||(b={});b[se(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[se(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=qe(a,b));return c}
function se(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var re={};var te=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function xe(a,b){oe.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Za(xe,oe);var ye={2:"touch",3:"pen",4:"mouse"};
xe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(Mc){a:{try{Gc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ye[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&xe.Y.preventDefault.call(this)};
xe.prototype.stopPropagation=function(){xe.Y.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
xe.prototype.preventDefault=function(){xe.Y.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var ze="closure_listenable_"+(1E6*Math.random()|0);var Ae=0;function Be(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ya=e;this.key=++Ae;this.Ja=this.Ta=!1}
function Ce(a){a.Ja=!0;a.listener=null;a.proxy=null;a.src=null;a.Ya=null}
;function De(a){this.src=a;this.listeners={};this.i=0}
De.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Ee(a,b,d,e);-1<g?(b=a[g],c||(b.Ta=!1)):(b=new Be(b,this.src,f,!!d,e),b.Ta=c,a.push(b));return b};
De.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ee(e,b,c,d);return-1<b?(Ce(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Fe(a,b){var c=b.type;c in a.listeners&&kb(a.listeners[c],b)&&(Ce(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Ee(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ja&&f.listener==b&&f.capture==!!c&&f.Ya==d)return e}return-1}
;var Ge="closure_lm_"+(1E6*Math.random()|0),He={},Ie=0;function Je(a,b,c,d,e){if(d&&d.once)Ke(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else c=Le(c),a&&a[ze]?a.aa(b,c,Qa(d)?!!d.capture:!!d,e):Me(a,b,c,!1,d,e)}
function Me(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ne(a);h||(a[Ge]=h=new De(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Oe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)te||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Pe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ie++}}
function Oe(){function a(c){return b.call(a.src,a.listener,c)}
var b=Qe;return a}
function Ke(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else c=Le(c),a&&a[ze]?a.m.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Me(a,b,c,!0,d,e)}
function Re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Le(c),a&&a[ze])?a.m.remove(String(b),c,d,e):a&&(a=Ne(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ee(b,c,d,e)),(c=-1<a?b[a]:null)&&Se(c))}
function Se(a){if("number"!==typeof a&&a&&!a.Ja){var b=a.src;if(b&&b[ze])Fe(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Pe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ie--;(c=Ne(b))?(Fe(c,a),0==c.i&&(c.src=null,b[Ge]=null)):Ce(a)}}}
function Pe(a){return a in He?He[a]:He[a]="on"+a}
function Qe(a,b){if(a.Ja)a=!0;else{b=new xe(b,this);var c=a.listener,d=a.Ya||a.src;a.Ta&&Se(a);a=c.call(d,b)}return a}
function Ne(a){a=a[Ge];return a instanceof De?a:null}
var Te="__closure_events_fn_"+(1E9*Math.random()>>>0);function Le(a){if("function"===typeof a)return a;a[Te]||(a[Te]=function(b){return a.handleEvent(b)});
return a[Te]}
;function Ue(){J.call(this);this.m=new De(this);this.pc=this;this.ka=null}
Za(Ue,J);Ue.prototype[ze]=!0;Ue.prototype.addEventListener=function(a,b,c,d){Je(this,a,b,c,d)};
Ue.prototype.removeEventListener=function(a,b,c,d){Re(this,a,b,c,d)};
function Ve(a,b){var c=a.ka;if(c){var d=[];for(var e=1;c;c=c.ka)d.push(c),++e}a=a.pc;c=b.type||b;"string"===typeof b?b=new oe(b,a):b instanceof oe?b.target=b.target||a:(e=b,b=new oe(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=We(g,c,!0,b)&&e}b.l||(g=b.i=a,e=We(g,c,!0,b)&&e,b.l||(e=We(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=We(g,c,!1,b)&&e}
Ue.prototype.C=function(){Ue.Y.C.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ce(d[e]);delete a.listeners[c];a.i--}}this.ka=null};
Ue.prototype.aa=function(a,b,c,d){return this.m.add(String(a),b,!1,c,d)};
function We(a,b,c,d){b=a.m.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ja&&g.capture==c){var h=g.listener,k=g.Ya||g.src;g.Ta&&Fe(a.m,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Xe(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
Xe.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function Ye(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;function Ze(a,b){return a+Math.random()*(b-a)}
;function $e(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=$e.prototype;l.clone=function(){return new $e(this.x,this.y)};
l.equals=function(a){return a instanceof $e&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function af(a,b){this.width=a;this.height=b}
l=af.prototype;l.clone=function(){return new af(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function bf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function cf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function df(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var ef;function ff(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=cf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Sb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ib;c.Ib=null;e()}};
return function(e){d.next={Ib:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function gf(){this.j=this.i=null}
gf.prototype.add=function(a,b){var c=hf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
gf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var hf=new Xe(function(){return new jf},function(a){return a.reset()});
function jf(){this.next=this.scope=this.i=null}
jf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
jf.prototype.reset=function(){this.next=this.scope=this.i=null};var kf,lf=!1,mf=new gf;function nf(a,b){kf||of();lf||(kf(),lf=!0);mf.add(a,b)}
function of(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);kf=function(){a.then(pf)}}else kf=function(){var b=pf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(ef||(ef=ff()),ef(b)):y.setImmediate(b)}}
function pf(){for(var a;a=mf.remove();){try{a.i.call(a.scope)}catch(b){Ad(b)}Ye(hf,a)}lf=!1}
;function qf(a){this.i=0;this.B=void 0;this.m=this.j=this.l=null;this.o=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){rf(b,2,c)},function(c){rf(b,3,c)})}catch(c){rf(this,3,c)}}
function sf(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
sf.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var tf=new Xe(function(){return new sf},function(a){a.reset()});
function uf(a,b,c){var d=tf.get();d.j=a;d.onRejected=b;d.context=c;return d}
function vf(a){return new qf(function(b,c){c(a)})}
qf.prototype.then=function(a,b,c){return wf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
qf.prototype.$goog_Thenable=!0;l=qf.prototype;l.gb=function(a,b){return wf(this,null,a,b)};
l.catch=qf.prototype.gb;l.cancel=function(a){if(0==this.i){var b=new xf(a);nf(function(){yf(this,b)},this)}};
function yf(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?yf(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):zf(c),Af(c,e,3,b)))}a.l=null}else rf(a,3,b)}
function Bf(a,b){a.j||2!=a.i&&3!=a.i||Cf(a);a.m?a.m.next=b:a.j=b;a.m=b}
function wf(a,b,c,d){var e=uf(null,null,null);e.i=new qf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof xf?g(h):f(k)}catch(m){g(m)}}:g});
e.i.l=a;Bf(a,e);return e.i}
l.qd=function(a){this.i=0;rf(this,2,a)};
l.rd=function(a){this.i=0;rf(this,3,a)};
function rf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.qd,f=a.rd;if(d instanceof qf){Bf(d,uf(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){Df(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.B=c,a.i=b,a.l=null,Cf(a),3!=b||c instanceof xf||Ef(a,c))}}
function Df(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Cf(a){a.s||(a.s=!0,nf(a.Ec,a))}
function zf(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
l.Ec=function(){for(var a;a=zf(this);)Af(this,a,this.i,this.B);this.s=!1};
function Af(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.o;a=a.l)a.o=!1;if(b.i)b.i.l=null,Ff(b,c,d);else try{b.l?b.j.call(b.context):Ff(b,c,d)}catch(e){Gf.call(null,e)}Ye(tf,b)}
function Ff(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ef(a,b){a.o=!0;nf(function(){a.o&&Gf.call(null,b)})}
var Gf=Ad;function xf(a){ab.call(this,a)}
Za(xf,ab);xf.prototype.name="cancel";function Hf(a,b){Ue.call(this);this.l=a||1;this.j=b||y;this.o=Xa(this.od,this);this.s=Date.now()}
Za(Hf,Ue);l=Hf.prototype;l.enabled=!1;l.ca=null;function If(a,b){a.l=b;a.ca&&a.enabled?(a.stop(),a.start()):a.ca&&a.stop()}
l.od=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.l?this.ca=this.j.setTimeout(this.o,this.l-a):(this.ca&&(this.j.clearTimeout(this.ca),this.ca=null),Ve(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.ca||(this.ca=this.j.setTimeout(this.o,this.l),this.s=Date.now())};
l.stop=function(){this.enabled=!1;this.ca&&(this.j.clearTimeout(this.ca),this.ca=null)};
l.C=function(){Hf.Y.C.call(this);this.stop();delete this.j};
function Jf(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Kf(a){this.B=a;this.i=new Map;this.s=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.j=new Hf(this.flushInterval);this.j.aa("tick",this.ib,!1,this);this.o=!1}
l=Kf.prototype;l.fc=function(a){this.o=a;this.m=1};
function Lf(a){a.j.enabled||a.j.start();a.l++;a.l>=a.m&&a.ib()}
l.ib=function(){var a=this.i.values();a=[].concat(ia(a)).filter(function(b){return b.xa.size});
a.length&&this.B.flush(a,this.o);Mf(a);this.l=0;this.j.enabled&&this.j.stop()};
l.uc=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new ie(a,b))};
l.Gb=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new je(a,b))};
function Nf(a,b){return a.s.has(b)?void 0:a.i.get(b)}
l.Bb=function(a){this.nc.apply(this,[a,1].concat(ia(Ja.apply(1,arguments))))};
l.nc=function(a,b){var c=Ja.apply(2,arguments),d=Nf(this,a);d&&d instanceof ie&&(d.l(b,c),Lf(this))};
l.hb=function(a,b){var c=Ja.apply(2,arguments),d=Nf(this,a);d&&d instanceof je&&(d.l(b,c),Lf(this))};
function Mf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Of(a){this.i=a;this.i.Gb("/client_streamz/bg/fil",{mb:3,lb:"rk"})}
function Pf(a){this.i=a;this.i.uc("/client_streamz/bg/fsc",{mb:3,lb:"rk"})}
function Qf(a){this.i=a;this.i.Gb("/client_streamz/bg/fsl",{mb:3,lb:"rk"})}
;function Rf(a){I.call(this,a,-1,Sf)}
t(Rf,I);function Tf(a){I.call(this,a,-1,Uf)}
t(Tf,I);function Vf(a){I.call(this,a)}
t(Vf,I);function Wf(a){I.call(this,a)}
t(Wf,I);var Sf=[3,6,4],Uf=[1],Xf=[1,2,3],Yf=[1,2,3];function Zf(a){I.call(this,a,-1,$f)}
t(Zf,I);var $f=[1];function ag(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function bg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(r){for(var x=g,u=0;64>u;u+=4)x[u/4]=r[u]<<24|r[u+1]<<16|r[u+2]<<8|r[u+3];for(u=16;80>u;u++)r=x[u-3]^x[u-8]^x[u-14]^x[u-16],x[u]=(r<<1|r>>>31)&4294967295;r=e[0];var A=e[1],D=e[2],F=e[3],N=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var O=F^A&(D^F);var Q=1518500249}else O=A^D^F,Q=1859775393;else 60>u?(O=A&D|F&(A|D),Q=2400959708):(O=A^D^F,Q=3395469782);O=((r<<5|r>>>27)&4294967295)+O+N+Q+x[u]&4294967295;N=F;F=D;D=(A<<30|A>>>2)&4294967295;A=r;r=O}e[0]=e[0]+r&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+N&4294967295}
function c(r,x){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var u=[],A=0,D=r.length;A<D;++A)u.push(r.charCodeAt(A));r=u}x||(x=r.length);u=0;if(0==m)for(;u+64<x;)b(r.slice(u,u+64)),u+=64,q+=64;for(;u<x;)if(f[m++]=r[u++],q++,64==m)for(m=0,b(f);u+64<x;)b(r.slice(u,u+64)),u+=64,q+=64}
function d(){var r=[],x=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var u=63;56<=u;u--)f[u]=x&255,x>>>=8;b(f);for(u=x=0;5>u;u++)for(var A=24;0<=A;A-=8)r[x++]=e[u]>>A&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Ac:function(){for(var r=d(),x="",u=0;u<r.length;u++)x+="0123456789ABCDEF".charAt(Math.floor(r[u]/16))+"0123456789ABCDEF".charAt(r[u]%16);return x}}}
;function cg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,dg(ag(d),a,c||null)].join(" "):null}
function dg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),eg(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=eg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function eg(a){var b=bg();b.update(a);return b.Ac().toLowerCase()}
;var fg={};function gg(a){this.i=a||{cookie:""}}
l=gg.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ab:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.xq;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ab}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Kb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ab:0,path:b,domain:c});return d};
l.qb=function(){return hg(this).keys};
l.isEmpty=function(){return!this.i.cookie};
l.clear=function(){for(var a=hg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function hg(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ig=new gg("undefined"==typeof document?null:document);function jg(a){return!!fg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function kg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;jg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new gg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");jg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function lg(a,b,c,d){(a=y[a])||(a=(new gg(document)).get(b));return a?cg(a,c,d):null}
function mg(a,b){b=void 0===b?!1:b;var c=ag(String(y.location.href)),d=[];if(kg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new gg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?cg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&jg(b)&&((b=lg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=lg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function ng(a){I.call(this,a,-1,og)}
t(ng,I);var og=[2];function pg(a){this.i=this.j=this.l=a}
pg.prototype.reset=function(){this.i=this.j=this.l};
pg.prototype.getValue=function(){return this.j};function qg(a){var b=[];rg(new sg,a,b);return b.join("")}
function sg(){}
function rg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),rg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),tg(d,c),c.push(":"),rg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":tg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ug={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},vg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function tg(a,b){b.push('"',a.replace(vg,function(c){var d=ug[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),ug[c]=d);return d}),'"')}
;function wg(){}
wg.prototype.i=null;wg.prototype.getOptions=function(){var a;(a=this.i)||(a={},xg(this)&&(a[0]=!0,a[1]=!0),a=this.i=a);return a};var yg;function zg(){}
Za(zg,wg);function Ag(a){return(a=xg(a))?new ActiveXObject(a):new XMLHttpRequest}
function xg(a){if(!a.j&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.j=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.j}
yg=new zg;function Bg(a){Ue.call(this);this.headers=new Map;this.K=a||null;this.j=!1;this.J=this.A=null;this.o=this.T="";this.l=this.R=this.v=this.P=!1;this.s=0;this.F=null;this.da="";this.W=this.X=!1}
Za(Bg,Ue);var Cg=/^https?$/i,Dg=["POST","PUT"],Eg=[];function Hg(a,b,c,d,e,f,g){var h=new Bg;Eg.push(h);b&&h.aa("complete",b);h.m.add("ready",h.yc,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.X=g);h.send(a,c,d,e)}
l=Bg.prototype;l.yc=function(){this.dispose();kb(Eg,this)};
l.send=function(a,b,c,d){if(this.A)throw Error("[goog.net.XhrIo] Object is active with another request="+this.T+"; newUri="+a);b=b?b.toUpperCase():"GET";this.T=a;this.o="";this.P=!1;this.j=!0;this.A=this.K?Ag(this.K):Ag(yg);this.J=this.K?this.K.getOptions():yg.getOptions();this.A.onreadystatechange=Xa(this.Xb,this);try{this.getStatus(),this.R=!0,this.A.open(b,String(a),!0),this.R=!1}catch(g){this.getStatus();Ig(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=p(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=eb(Dg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=p(c);for(d=b.next();!d.done;d=b.next())c=p(d.value),d=c.next().value,c=c.next().value,this.A.setRequestHeader(d,c);this.da&&(this.A.responseType=this.da);"withCredentials"in this.A&&this.A.withCredentials!==this.X&&(this.A.withCredentials=this.X);try{Jg(this),0<this.s&&(this.W=Kg(this.A),this.getStatus(),this.W?(this.A.timeout=this.s,this.A.ontimeout=Xa(this.kc,this)):
this.F=Jf(this.kc,this.s,this)),this.getStatus(),this.v=!0,this.A.send(a),this.v=!1}catch(g){this.getStatus(),Ig(this,g)}};
function Kg(a){return Kc&&Vc()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.kc=function(){"undefined"!=typeof Ma&&this.A&&(this.o="Timed out after "+this.s+"ms, aborting",this.getStatus(),Ve(this,"timeout"),this.abort(8))};
function Ig(a,b){a.j=!1;a.A&&(a.l=!0,a.A.abort(),a.l=!1);a.o=b;Lg(a);Mg(a)}
function Lg(a){a.P||(a.P=!0,Ve(a,"complete"),Ve(a,"error"))}
l.abort=function(){this.A&&this.j&&(this.getStatus(),this.j=!1,this.l=!0,this.A.abort(),this.l=!1,Ve(this,"complete"),Ve(this,"abort"),Mg(this))};
l.C=function(){this.A&&(this.j&&(this.j=!1,this.l=!0,this.A.abort(),this.l=!1),Mg(this,!0));Bg.Y.C.call(this)};
l.Xb=function(){this.i()||(this.R||this.v||this.l?Ng(this):this.Qc())};
l.Qc=function(){Ng(this)};
function Ng(a){if(a.j&&"undefined"!=typeof Ma)if(a.J[1]&&4==Og(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==Og(a))Jf(a.Xb,0,a);else if(Ve(a,"readystatechange"),a.isComplete()){a.getStatus();a.j=!1;try{if(Pg(a))Ve(a,"complete"),Ve(a,"success");else{try{var b=2<Og(a)?a.A.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Lg(a)}}finally{Mg(a)}}}
function Mg(a,b){if(a.A){Jg(a);var c=a.A,d=a.J[0]?function(){}:null;
a.A=null;a.J=null;b||Ve(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Jg(a){a.A&&a.W&&(a.A.ontimeout=null);a.F&&(y.clearTimeout(a.F),a.F=null)}
l.isActive=function(){return!!this.A};
l.isComplete=function(){return 4==Og(this)};
function Pg(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=lc(1,String(a.T)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Cg.test(a?a.toLowerCase():"");c=b}return c}
function Og(a){return a.A?a.A.readyState:0}
l.getStatus=function(){try{return 2<Og(this)?this.A.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.o?this.o:String(this.o)};function Qg(a){I.call(this,a)}
t(Qg,I);function Rg(a){I.call(this,a,-1,Sg)}
t(Rg,I);var Sg=[1];var Tg=["platform","platformVersion","architecture","model","uaFullVersion"];new Rg;function Ug(a){I.call(this,a)}
t(Ug,I);function Vg(a){I.call(this,a,31,Wg)}
t(Vg,I);var Wg=[3,20,27];function Xg(a){I.call(this,a,17,Yg)}
t(Xg,I);var Yg=[3,5];function Zg(a){I.call(this,a,6,$g)}
t(Zg,I);var $g=[5];function ah(a){I.call(this,a)}
t(ah,I);var bh;bh=new function(a,b,c){this.j=a;this.fieldName=b;this.i=c;this.isRepeated=0;this.l=de}(175237375,{nq:0},ah);function ch(a,b,c,d,e,f,g,h,k,m,q){Ue.call(this);var r=this;this.P="";this.l=[];this.Eb="";this.Fb=this.qa=-1;this.Qa=!1;this.J=this.o=null;this.F=0;this.qc=1;this.timeoutMillis=0;this.da=!1;Ue.call(this);this.Db=b||function(){};
this.v=new dh(a,f);this.oc=d;this.Pa=q;this.sc=Ya(Ze,0,1);this.T=e||null;this.K=c||null;this.W=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Ea=f||!1;!this.Ea&&(65<=ac("Chromium")||45<=ac("Firefox")||12<=ac("Safari")||(Ec()||C("iPad")||C("iPod"))&&Fc());a=E(new Ug,1,1);eh(this.v,a);this.s=new pg(1E4);this.j=new Hf(this.s.getValue());me(this,this.j);m=fh(this,m);Je(this.j,"tick",m,!1,this);this.R=new Hf(6E5);me(this,this.R);Je(this.R,"tick",m,!1,this);this.W||this.R.start();
this.Ea||(Je(document,"visibilitychange",function(){"hidden"===document.visibilityState&&r.X()}),Je(document,"pagehide",this.X,!1,this))}
t(ch,Ue);function fh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
ch.prototype.C=function(){this.X();Ue.prototype.C.call(this)};
function gh(a){a.T||(a.T=.01>a.sc()?"https://web.archive.org/web/20220623202258/https://www.google.com/log?format=json&hasfast=true":"https://web.archive.org/web/20220623202258/https://play.google.com/log?format=json&hasfast=true");return a.T}
function hh(a,b){a.s=new pg(1>b?1:b);If(a.j,a.s.getValue())}
ch.prototype.log=function(a){a=a.clone();var b=this.qc++;E(a,21,b);this.P&&E(a,26,this.P);if(!Ld(a,1)){b=a;var c=Date.now().toString();E(b,1,c)}null!=Ld(a,15)||E(a,15,60*(new Date).getTimezoneOffset());this.o&&(b=this.o.clone(),G(a,ng,16,b));for(;1E3<=this.l.length;)this.l.shift(),++this.F;this.l.push(a);Ve(this,new ih(a));this.W||this.j.enabled||this.j.start()};
ch.prototype.flush=function(a,b){var c=this;if(0===this.l.length)a&&a();else if(this.da)jh(this);else{var d=Date.now();if(this.Fb>d&&this.qa<d)b&&b("throttled");else{var e=kh(this.v,this.l,this.F);d={};var f=this.Db();f&&(d.Authorization=f);var g=gh(this);this.K&&(d["X-Goog-AuthUser"]=this.K,g=xc(g,"authuser",this.K));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=xc(g,"pageId",this.pageId));if(f&&this.Eb===f)b&&b("stale-auth-token");else{this.l=[];this.j.enabled&&this.j.stop();this.F=0;var h=Zd(e),
k;this.J&&this.J.isSupported(h.length)&&(k=this.J.compress(h));var m={url:g,body:h,wc:1,xb:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},q=function(u){c.s.reset();If(c.j,c.s.getValue());if(u){var A=null;try{var D=JSON.parse(u.replace(")]}'\n",""));A=new Zg(D)}catch(F){}A&&(u=Number(Nd(A,1,"-1")),0<u&&(c.qa=Date.now(),c.Fb=c.qa+u),A=bh.l(A))&&(A=Nd(A,1,-1),-1!=A&&(c.Qa||hh(c,A)))}a&&a()},r=function(u,A){var D=Td(e,Vg,3),F=c.s;
F.i=Math.min(3E5,2*F.i);F.j=Math.min(3E5,F.i+Math.round(.2*(Math.random()-.5)*F.i));If(c.j,c.s.getValue());401===u&&f&&(c.Eb=f);void 0===A&&(A=500<=u&&600>u||401===u||0===u);A&&(c.l=D.concat(c.l),c.W||c.j.enabled||c.j.start());b&&b("net-send-failed",u)},x=function(){c.Pa?c.Pa.send(m,q,r):c.oc(m,q,r)};
k?k.then(function(u){m.xb["Content-Encoding"]="gzip";m.xb["Content-Type"]="application/binary";m.body=u;m.wc=2;x()},function(){x()}):x()}}}};
ch.prototype.X=function(){this.flush()};
function jh(a){lh(a,function(b,c){b=xc(b,"format","json");b=window.navigator.sendBeacon(b,Zd(c));a.da&&!b&&(a.da=!1);return b})}
function lh(a,b){if(0!==a.l.length){var c=Bc(gh(a),"format");c=sc(c,"auth",a.Db(),"authuser",a.K||"0");for(var d=0;10>d&&a.l.length;++d){var e=a.l.slice(0,32),f=kh(a.v,e,a.F);if(!b(c,f))break;a.F=0;a.l=a.l.slice(e.length)}a.j.enabled&&a.j.stop()}}
function ih(){oe.call(this,"event-logged",void 0)}
t(ih,oe);function dh(a,b){this.j=b=void 0===b?!1:b;this.uach=this.locale=null;this.i=new Xg;E(this.i,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));eh(this,new Ug)}
function eh(a,b){G(a.i,Ug,1,b);Ld(b,1)||E(b,1,1);a.j||(b=mh(a),Ld(b,5)||E(b,5,a.locale));a.uach&&(b=mh(a),Rd(b,Rg,9)||G(b,Rg,9,a.uach))}
function nh(a,b){var c=void 0===c?Tg:c;b(window,c).then(function(d){a.uach=d;d=mh(a);G(d,Rg,9,a.uach);return!0}).catch(function(){return!1})}
function mh(a){a=Rd(a.i,Ug,1);var b=Rd(a,Qg,11);b||(b=new Qg,G(a,Qg,11,b));return b}
function kh(a,b,c){c=void 0===c?0:c;a=a.i.clone();var d=Date.now().toString();a=E(a,4,d);b=Vd(a,Vg,3,b);c&&E(b,14,c);return b}
;function oh(a,b,c){Hg(a.url,function(d){d=d.target;if(Pg(d)){try{var e=d.A?d.A.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.xb,a.timeoutMillis,a.withCredentials)}
;function ph(){this.l="https://web.archive.org/web/20220623202258/https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.s=oh;this.i=""}
;function qh(){var a=void 0===a?"":a;var b=void 0===b?!1:b;var c=void 0===c?"":c;var d=new ph;d.i="";""!=a&&(d.l=a);b&&(d.m=!0);c&&(d.j=c);a=new ch(1828,d.J?d.J:mg,"0",d.s,d.l,d.m,!1,d.R,void 0,void 0,d.B?d.B:void 0);d.v&&eh(a.v,d.v);d.j&&(b=d.j,c=mh(a.v),E(c,7,b));d.o&&(a.J=d.o);d.i&&(a.P=d.i);d.N&&((b=d.N)?(a.o||(a.o=new ng),b=Zd(b),E(a.o,4,b)):a.o&&E(a.o,4,void 0,!1));d.K&&(b=d.K,a.o||(a.o=new ng),Od(a.o,2,b));d.F&&(b=d.F,a.Qa=!0,hh(a,b));d.P&&nh(a.v,d.P);this.i=a}
qh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Zf;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new Rf;g=E(g,1,f.j);for(var h=f,k=[],m=0;m<h.i.length;m++)k.push(h.i[m].lb);g=Od(g,3,k);h=[];k=[];m=p(f.xa.keys());for(var q=m.next();!q.done;q=m.next())k.push(q.value.split(","));for(m=0;m<k.length;m++){q=k[m];var r=f.m;for(var x=f.nb(q)||[],u=[],A=0;A<x.length;A++){var D=x[A];D=D&&D.Jb;var F=new Wf;switch(r){case 3:Pd(F,1,Yf,Number(D));break;case 2:Pd(F,2,Yf,Number(D))}u.push(F)}r=
u;for(x=0;x<r.length;x++){u=r[x];A=new Tf;u=G(A,Wf,2,u);A=q;D=[];F=f;for(var N=[],O=0;O<F.i.length;O++)N.push(F.i[O].mb);F=N;for(N=0;N<F.length;N++){O=F[N];var Q=A[N],ba=new Vf;switch(O){case 3:Pd(ba,1,Xf,String(Q));break;case 2:Pd(ba,2,Xf,Number(Q));break;case 1:Pd(ba,3,Xf,"true"==Q)}D.push(ba)}Vd(u,Vf,1,D);h.push(u)}}Vd(g,Tf,4,h);c.push(g);e.clear()}Vd(a,Rf,1,c);b=this.i;a instanceof Vg?b.log(a):(c=new Vg,a=Zd(a),a=E(c,8,a),b.log(a));this.i.flush()}};function rh(){this.o=sh();this.transport=new qh;this.i=new Kf(this.transport);this.m=new Of(this.i);this.j=new Pf(this.i);this.l=new Qf(this.i);this.Aa=window.document.location.hostname}
function sh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function th(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function uh(a){var b=this;this.Wa=!1;if(a.uq){var c;this.sa=null!=(c=a.sa)?c:new rh}c=a.program;a=a.globalName;var d=new th;this.j=d.promise;this.md=p((0,y[a].a)(c,function(e,f){Promise.resolve().then(function(){var g;if(null!=(g=b.sa)){var h=sh()-g.o;g.m.i.hb("/client_streamz/bg/fil",h,g.Aa)}d.resolve({vc:e,jd:f})})},!0)).next().value;
this.hd=d.promise.then(function(){})}
uh.prototype.snapshot=function(a){var b=this;if(this.Wa)throw Error("Already disposed");var c=sh(),d;null!=(d=this.sa)&&d.j.i.Bb("/client_streamz/bg/fsc",d.Aa);return this.j.then(function(e){var f=e.vc;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.sa)){var m=sh()-c;k.l.i.hb("/client_streamz/bg/fsl",m,k.Aa)}g(h)},[a.Lb,
a.kd])})})};
uh.prototype.dispose=function(){var a;null!=(a=this.sa)&&a.i.ib();this.Wa=!0;this.j.then(function(b){(b=b.jd)&&b()})};
uh.prototype.i=function(){return this.Wa};var vh=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function wh(a){this.isValid=a}
function xh(a){return new wh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var yh=[xh("data"),xh("http"),xh("https"),xh("mailto"),xh("ftp"),new wh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function zh(a,b){a.src=Ib(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Ah(a){var b=Bh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ch(){var a=[];Ah(function(b){a.push(b)});
return a}
var Bh={Fd:"allow-forms",Gd:"allow-modals",Hd:"allow-orientation-lock",Id:"allow-pointer-lock",Jd:"allow-popups",Kd:"allow-popups-to-escape-sandbox",Ld:"allow-presentation",Md:"allow-same-origin",Nd:"allow-scripts",Od:"allow-top-navigation",Pd:"allow-top-navigation-by-user-activation"},Dh=db(function(){return Ch()});
function Eh(){var a=Fh(),b={};fb(Dh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Fh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Gh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Hh=(new Date).getTime();var Ih="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Ih);function Jh(a){Ue.call(this);var b=this;this.v=this.l=0;this.Z=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
fa:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return w(function(e){return v(e,Kh(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.v||Lh(this)}
t(Jh,Ue);function Mh(){var a=Nh;Jh.i||(Jh.i=new Jh(a));return Jh.i}
Jh.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Z.fa(this.v);delete Jh.i};
Jh.prototype.L=function(){return this.j};
function Lh(a){a.v=a.Z.S(function(){var b;return w(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):v(c,Kh(a),3):v(c,Kh(a),3);Lh(a);c.i=0})},3E4)}
function Kh(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,va(h,2,3),d&&(a.l=a.Z.S(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.s=void 0;a.l&&(a.Z.fa(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?Ve(a,"networkstatus-online"):Ve(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:xa(h),g=!1,h.u(3)}})})}
;var Oh={Lh:"EMBEDDED_PLAYER_MODE_UNKNOWN",Ih:"EMBEDDED_PLAYER_MODE_DEFAULT",Kh:"EMBEDDED_PLAYER_MODE_PFP",Jh:"EMBEDDED_PLAYER_MODE_PFL"},Ph={Pp:"WEB_DISPLAY_MODE_UNKNOWN",Lp:"WEB_DISPLAY_MODE_BROWSER",Np:"WEB_DISPLAY_MODE_MINIMAL_UI",Op:"WEB_DISPLAY_MODE_STANDALONE",Mp:"WEB_DISPLAY_MODE_FULLSCREEN"};function Qh(){this.data_=[];this.i=-1}
Qh.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Qh.prototype.get=function(a){return!!this.data_[a]};
function Rh(a){-1===a.i&&(a.i=ib(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Sh(a,b){this.i=a[y.Symbol.iterator]();this.j=b}
Sh.prototype[Symbol.iterator]=function(){return this};
Sh.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function Th(a,b){return new Sh(a,b)}
;function Uh(){this.blockSize=-1}
;function Vh(){this.blockSize=-1;this.blockSize=64;this.i=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Za(Vh,Uh);Vh.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function Wh(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Vh.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Wh(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Wh(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Wh(this,e);f=0;break}}this.j=f;this.m+=b}};
Vh.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Wh(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function Xh(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Yh(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Zh(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Xh(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function $h(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Zh(a,"inverted-hdpi")&&Yh(a,Array.prototype.filter.call(a.classList?a.classList:Xh(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function ai(){}
ai.prototype.next=function(){return bi};
var bi={done:!0,value:void 0};function ci(a){return{value:a,done:!1}}
ai.prototype.ea=function(){return this};function di(a){if(a instanceof ei||a instanceof fi||a instanceof gi)return a;if("function"==typeof a.next)return new ei(function(){return a});
if("function"==typeof a[Symbol.iterator])return new ei(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ea)return new ei(function(){return a.ea()});
throw Error("Not an iterator or iterable.");}
function ei(a){this.j=a}
ei.prototype.ea=function(){return new fi(this.j())};
ei.prototype[Symbol.iterator]=function(){return new gi(this.j())};
ei.prototype.i=function(){return new gi(this.j())};
function fi(a){this.j=a}
t(fi,ai);fi.prototype.next=function(){return this.j.next()};
fi.prototype[Symbol.iterator]=function(){return new gi(this.j)};
fi.prototype.i=function(){return new gi(this.j)};
function gi(a){ei.call(this,function(){return a});
this.l=a}
t(gi,ei);gi.prototype.next=function(){return this.l.next()};function hi(a,b){this.j={};this.i=[];this.na=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof hi)for(c=a.qb(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=hi.prototype;l.qb=function(){ii(this);return this.i.concat()};
l.has=function(a){return ji(this.j,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ki;ii(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ki(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.j={};this.na=this.size=this.i.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return ji(this.j,a)?(delete this.j[a],--this.size,this.na++,this.i.length>2*this.size&&ii(this),!0):!1};
function ii(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];ji(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],ji(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
l.get=function(a,b){return ji(this.j,a)?this.j[a]:b};
l.set=function(a,b){ji(this.j,a)||(this.size+=1,this.i.push(a),this.na++);this.j[a]=b};
l.forEach=function(a,b){for(var c=this.qb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new hi(this)};
l.keys=function(){return di(this.ea(!0)).i()};
l.values=function(){return di(this.ea(!1)).i()};
l.entries=function(){var a=this;return Th(this.keys(),function(b){return[b,a.get(b)]})};
l.ea=function(a){ii(this);var b=0,c=this.na,d=this,e=new ai;e.next=function(){if(c!=d.na)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return bi;var f=d.i[b++];return ci(a?f:d.j[f])};
return e};
function ji(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){J.call(this);this.s=1;this.m=[];this.o=0;this.j=[];this.l={};this.v=!!a}
Za(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.s=e+3;d.push(e);return e};
function li(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Da(b)}}
l.Da=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.o?(this.m.push(a),this.j[a+1]=function(){}):(c&&kb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
l.oa=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];mi(this.j[g+1],this.j[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i();e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.Da(c)}}return 0!=e}return!1};
function mi(a,b,c){nf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Da,this),delete this.l[a])}else this.j.length=0,this.l={}};
l.C=function(){K.Y.C.call(this);this.clear();this.m.length=0};function ni(a){this.i=a}
ni.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,qg(b))};
ni.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ni.prototype.remove=function(a){this.i.remove(a)};function oi(a){this.i=a}
Za(oi,ni);function pi(a){this.data=a}
function qi(a){return void 0===a||a instanceof pi?a:new pi(a)}
oi.prototype.set=function(a,b){oi.Y.set.call(this,a,qi(b))};
oi.prototype.j=function(a){a=oi.Y.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
oi.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ri(a){this.i=a}
Za(ri,oi);ri.prototype.set=function(a,b,c){if(b=qi(b)){if(c){if(c<Date.now()){ri.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}ri.Y.set.call(this,a,b)};
ri.prototype.j=function(a){var b=ri.Y.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())ri.prototype.remove.call(this,a);else return b}};function si(){}
;function ti(){}
Za(ti,si);ti.prototype[Symbol.iterator]=function(){return di(this.ea(!0)).i()};
ti.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ui(a){this.i=a}
Za(ui,ti);l=ui.prototype;l.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeItem(a)};
l.ea=function(a){var b=0,c=this.i,d=new ai;d.next=function(){if(b>=c.length)return bi;var e=c.key(b++);if(a)return ci(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ci(e)};
return d};
l.clear=function(){this.i.clear()};
l.key=function(a){return this.i.key(a)};function vi(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Za(vi,ui);function wi(a,b){this.j=a;this.i=null;var c;if(c=Kc)c=!(9<=Number(Yc));if(c){xi||(xi=new hi);this.i=xi.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),xi.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Za(wi,ti);var yi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},xi=null;function zi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return yi[b]})}
l=wi.prototype;l.isAvailable=function(){return!!this.i};
l.set=function(a,b){this.i.setAttribute(zi(a),b);Ai(this)};
l.get=function(a){a=this.i.getAttribute(zi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeAttribute(zi(a));Ai(this)};
l.ea=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new ai;d.next=function(){if(b>=c.length)return bi;var e=c[b++];if(a)return ci(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ci(e)};
return d};
l.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ai(this)};
function Ai(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Bi(a,b){this.j=a;this.i=b+"::"}
Za(Bi,ti);Bi.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Bi.prototype.get=function(a){return this.j.get(this.i+a)};
Bi.prototype.remove=function(a){this.j.remove(this.i+a)};
Bi.prototype.ea=function(a){var b=this.j[Symbol.iterator](),c=this,d=new ai;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return ci(a?e.slice(c.i.length):c.j.get(e))};
return d};function Ci(a){I.call(this,a)}
t(Ci,I);function Di(a){I.call(this,a)}
t(Di,I);Di.prototype.getKey=function(){return Ld(this,1)};
Di.prototype.getValue=function(){return Ld(this,2===Qd(this,Ei)?2:-1)};
Di.prototype.setValue=function(a){return Pd(this,2,Ei,a)};
var Ei=[2,3,4,5,6];function Fi(a){I.call(this,a)}
t(Fi,I);function Gi(a){I.call(this,a)}
t(Gi,I);function Hi(a){I.call(this,a,-1,Ii)}
t(Hi,I);var Ii=[2];function Ji(a){I.call(this,a,-1,Ki)}
t(Ji,I);Ji.prototype.getPlayerType=function(){return Ld(this,36)};
Ji.prototype.setHomeGroupInfo=function(a){return G(this,Hi,81,a)};
var Ki=[9,66,24,32,86,100,101];function Li(a){I.call(this,a,-1,Mi)}
t(Li,I);var Mi=[15,26,28];function Ni(a){I.call(this,a)}
t(Ni,I);Ni.prototype.setToken=function(a){return E(this,2,a)};function Oi(a){I.call(this,a,-1,Pi)}
t(Oi,I);Oi.prototype.setSafetyMode=function(a){return E(this,5,a)};
var Pi=[12];function Qi(a){I.call(this,a,-1,Ri)}
t(Qi,I);Qi.prototype.s=function(a){G(this,Ji,1,a)};
var Ri=[12];function Si(a){I.call(this,a,-1,Ti)}
t(Si,I);function Ui(a){I.call(this,a)}
t(Ui,I);Ui.prototype.getKey=function(){return Nd(this,1,"")};
Ui.prototype.getValue=function(){return Nd(this,2,"")};
Ui.prototype.setValue=function(a){return E(this,2,a)};
var Ti=[4,5];function Vi(a){I.call(this,a)}
t(Vi,I);function Wi(a){I.call(this,a)}
t(Wi,I);var Xi=[2,3,4];function Yi(a){I.call(this,a)}
t(Yi,I);Yi.prototype.getMessage=function(){return Nd(this,1,"")};function Zi(a){I.call(this,a)}
t(Zi,I);function $i(a){I.call(this,a)}
t($i,I);function aj(a){I.call(this,a,-1,bj)}
t(aj,I);var bj=[10,17];function cj(a){I.call(this,a)}
t(cj,I);function dj(a){I.call(this,a)}
t(dj,I);dj.prototype.V=function(a){E(this,1,a)};function ej(a){I.call(this,a)}
t(ej,I);function fj(a){I.call(this,a)}
t(fj,I);function gj(a){I.call(this,a)}
t(gj,I);function hj(a){I.call(this,a,-1,ij)}
t(hj,I);hj.prototype.getVideoData=function(){return Rd(this,gj,15)};
var ij=[4];function jj(a){I.call(this,a)}
t(jj,I);function kj(a,b){G(a,ej,1,b)}
jj.prototype.V=function(a){E(this,2,a)};
function lj(a){I.call(this,a)}
t(lj,I);function mj(a,b){G(a,ej,1,b)}
;function nj(a){I.call(this,a,-1,oj)}
t(nj,I);nj.prototype.V=function(a){E(this,1,a)};
function pj(a,b){G(a,ej,2,b)}
var oj=[3];function qj(a){I.call(this,a)}
t(qj,I);qj.prototype.V=function(a){E(this,1,a)};function rj(a){I.call(this,a)}
t(rj,I);rj.prototype.V=function(a){E(this,1,a)};function sj(a){I.call(this,a)}
t(sj,I);sj.prototype.V=function(a){E(this,1,a)};function tj(a){I.call(this,a)}
t(tj,I);tj.prototype.V=function(a){E(this,1,a)};function uj(a){I.call(this,a)}
t(uj,I);function vj(a){I.call(this,a)}
t(vj,I);function wj(a){I.call(this,a,-1,xj)}
t(wj,I);function yj(a,b){return E(a,1,b)}
wj.prototype.getPlayerType=function(){return Nd(this,7,0)};
wj.prototype.setVideoId=function(a){return E(this,19,a)};
function zj(a,b){return E(a,25,b)}
function Aj(a,b){Wd(a,68,Bj,b)}
function Bj(a){I.call(this,a)}
t(Bj,I);Bj.prototype.getId=function(){return Nd(this,2,"")};
var xj=[83,68];function Cj(a){I.call(this,a)}
t(Cj,I);function Dj(a){I.call(this,a)}
t(Dj,I);function Ej(a){I.call(this,a)}
t(Ej,I);function Fj(a){I.call(this,a,432)}
t(Fj,I);
var Gj=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];var Hj={Li:0,wi:1,Ci:2,Di:4,Ii:8,Ei:16,Fi:32,Ki:64,Ji:128,yi:256,Ai:512,Hi:1024,zi:2048,Bi:4096,xi:8192,Gi:16384};function Ij(a){I.call(this,a)}
t(Ij,I);function Jj(a){I.call(this,a)}
t(Jj,I);Jj.prototype.setVideoId=function(a){return Pd(this,1,Kj,a)};
Jj.prototype.getPlaylistId=function(){return Ld(this,2===Qd(this,Kj)?2:-1)};
var Kj=[1,2];function Lj(a){I.call(this,a,-1,Mj)}
t(Lj,I);var Mj=[3];function ik(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var jk=y.window,kk,lk,mk=(null==jk?void 0:null==(kk=jk.yt)?void 0:kk.config_)||(null==jk?void 0:null==(lk=jk.ytcfg)?void 0:lk.data_)||{};z("yt.config_",mk);function nk(){ik(mk,arguments)}
function L(a,b){return a in mk?mk[a]:b}
function ok(){var a=mk.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=pk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function qk(a,b){a=pk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function rk(){return L("EXPERIMENTS_TOKEN","")}
function pk(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function sk(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var tk=[];function uk(a){tk.forEach(function(b){return b(a)})}
function vk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){wk(b)}}:a}
function wk(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),nk("ERRORS",e));uk(a)}
function xk(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),nk("ERRORS",e))}
;function yk(){var a=zk;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function Ak(a){z("yt.ads.biscotti.lastId_",a)}
;var Bk=/^[\w.]*$/,Ck={q:!0,search_query:!0};function Dk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Ek(f[0]||""),h=Ek(f[1]||"");g in c?Array.isArray(c[g])?lb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,m=f[0],q=String(Dk);k.args=[{key:m,value:f[1],query:a,method:Fk==q?"unchanged":q}];Ck.hasOwnProperty(m)||xk(k)}}return c}
var Fk=String(Dk);function Gk(a){var b=[];mb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];fb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Hk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Dk(a,"&")}
function Ik(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Hk(1<a.length?a[1]:a[0])):{}}
function Jk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Hk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return tc(a,e)+d}
function Kk(a){if(!b)var b=window.location.href;var c=lc(1,a),d=mc(a);c&&d?(a=a.match(jc),b=b.match(jc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?mc(b)==d&&(Number(lc(4,b))||null)==(Number(lc(4,a))||null):!0;return a}
function Ek(a){return a&&a.match(Bk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Lk(a){var b=Mk;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Hh;e.flash="0";a:{try{var f=b.i.top.location.href}catch(ya){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?vh:g;try{var h=g.history.length}catch(ya){h=0}e.u_his=h;var k;e.u_h=null==(k=vh.screen)?void 0:k.height;var m;e.u_w=null==(m=vh.screen)?void 0:m.width;var q;e.u_ah=null==(q=vh.screen)?void 0:q.availHeight;var r;e.u_aw=
null==(r=vh.screen)?void 0:r.availWidth;var x;e.u_cd=null==(x=vh.screen)?void 0:x.colorDepth}catch(ya){}h=b.i;try{var u=h.screenX;var A=h.screenY}catch(ya){}try{var D=h.outerWidth;var F=h.outerHeight}catch(ya){}try{var N=h.innerWidth;var O=h.innerHeight}catch(ya){}try{var Q=h.screenLeft;var ba=h.screenTop}catch(ya){}try{N=h.innerWidth,O=h.innerHeight}catch(ya){}try{var ca=h.screen.availWidth;var V=h.screen.availTop}catch(ya){}u=[Q,ba,u,A,ca,V,D,F,N,O];try{var Ua=(b.i.top||window).document,za="CSS1Compat"==
Ua.compatMode?Ua.documentElement:Ua.body;var H=(new af(za.clientWidth,za.clientHeight)).round()}catch(ya){H=new af(-12245933,-12245933)}Ua=H;H={};var Fa=void 0===Fa?y:Fa;za=new Qh;Fa.SVGElement&&Fa.document.createElementNS&&za.set(0);A=Eh();A["allow-top-navigation-by-user-activation"]&&za.set(1);A["allow-popups-to-escape-sandbox"]&&za.set(2);Fa.crypto&&Fa.crypto.subtle&&za.set(3);Fa.TextDecoder&&Fa.TextEncoder&&za.set(4);Fa=Rh(za);H.bc=Fa;H.bih=Ua.height;H.biw=Ua.width;H.brdim=u.join();b=b.j;b=(H.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,H.wgl=!!vh.WebGLRenderingContext,H);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Mk=new function(){var a=window.document;this.i=window;this.j=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Gk(Lk(a))});Date.now();var Nk="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Ok(){if(!Nk)return null;var a=Nk();return"open"in a?a:null}
function Pk(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Qk(a,b){"function"===typeof a&&(a=vk(a));return window.setTimeout(a,b)}
function Rk(a){window.clearTimeout(a)}
;var Sk={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Tk="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Ih)),Uk=!1;
function Vk(a,b){b=void 0===b?{}:b;var c=Kk(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in Sk){var f=L(Sk[e]);M("enable_visitor_header_for_vss")&&"X-Goog-Visitor-Id"===e&&!f&&(f=L("VISITOR_DATA"));!f||!c&&mc(a)||d&&void 0!==b[e]||!M("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!mc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!mc(a)){try{var g=
(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!mc(a))b["X-YouTube-Ad-Signals"]=Gk(Lk());return b}
function Wk(a){var b=window.location.search,c=mc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!Kk(a)||(c=document.location.hostname);var d=kc(lc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Hk(b),f={};fb(Tk,function(g){e[g]&&(f[g]=e[g])});
return Jk(a,f||{},!1)}
function Xk(a,b){var c=b.format||"JSON";a=Yk(a,b);var d=Zk(a,b),e=!1,f=$k(a,function(k){if(!e){e=!0;h&&Rk(h);var m=Pk(k),q=null,r=400<=k.status&&500>k.status,x=500<=k.status&&600>k.status;if(m||r||x)q=al(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};r=b.context||y;m?b.onSuccess&&b.onSuccess.call(r,k,q):b.onError&&b.onError.call(r,k,q);b.onFinish&&b.onFinish.call(r,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Qk(function(){e||(e=!0,f.abort(),Rk(h),g.call(b.context||y,f))},d)}return f}
function Yk(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Jk(a,b||{},!0);return a}
function Zk(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||mc(a)&&!b.withCredentials&&mc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Hk(e),wb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):rc(e));f=e||f&&!pb(f);!Uk&&f&&"POST"!=b.method&&(Uk=
!0,wk(Error("AJAX request with postData should use POST")));return e}
function al(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,xk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?bl(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=cl(g)})}d&&dl(e);
return e}
function dl(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=yb();d=e?e.createHTML(d):d;a[c]=new cc(d)}else dl(a[b])}}
function bl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function cl(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function $k(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&vk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ok();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=Wk(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Vk(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function el(a){var b=this;this.j=void 0;this.i=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.j=c});
a.addEventListener("appinstalled",function(){b.i=!0},{once:!0})}
function fl(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function gl(a,b,c,d,e){ig.set(""+a,b,{ab:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function hl(a){return ig.get(""+a,void 0)}
function il(){if(!ig.isEnabled())return!1;if(!ig.isEmpty())return!0;ig.set("TESTCOOKIESENABLED","1",{ab:60});if("1"!==ig.get("TESTCOOKIESENABLED"))return!1;ig.remove("TESTCOOKIESENABLED");return!0}
;var jl=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",jl);function kl(){this.i=L("ALT_PREF_COOKIE_NAME","PREF");this.j=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=hl(this.i);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(jl[d]=c.toString())}}}
kl.prototype.get=function(a,b){ll(a);ml(a);a=void 0!==jl[a]?jl[a].toString():null;return null!=a?a:b?b:""};
kl.prototype.set=function(a,b){ll(a);ml(a);if(null==b)throw Error("ExpectedNotNull");jl[a]=b.toString()};
function nl(a){return!!((ol("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
kl.prototype.remove=function(a){ll(a);ml(a);delete jl[a]};
kl.prototype.clear=function(){for(var a in jl)delete jl[a]};
function ml(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function ll(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function ol(a){a=void 0!==jl[a]?jl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Na(kl);var pl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},ql={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},rl={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},sl={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function tl(){var a=y.navigator;return a?a.connection:void 0}
function ul(){var a=tl();if(a){var b=pl[a.type||"unknown"]||"CONN_UNKNOWN";a=pl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function vl(){var a=tl();if(null!=a&&a.effectiveType)return sl.hasOwnProperty(a.effectiveType)?sl[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function wl(){return"INNERTUBE_API_KEY"in mk&&"INNERTUBE_API_VERSION"in mk}
function xl(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),rb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Sb:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ic:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ub:L("INNERTUBE_CONTEXT_HL"),Tb:L("INNERTUBE_CONTEXT_GL"),Jc:L("INNERTUBE_HOST_OVERRIDE")||"",Lc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Kc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function yl(a){var b={client:{hl:a.Ub,gl:a.Tb,clientName:a.Sb,clientVersion:a.innertubeContextClientVersion,configInfo:a.rb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=rk();""!==c&&(b.client.experimentsToken=c);c=sk();0<c.length&&(b.request={internalExperimentFlags:c});zl(a,void 0,b);Al(void 0,b);Bl(a,void 0,b);Cl(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(Hk(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Dl(a){var b=new Qi,c=new Ji;E(c,1,a.Ub);E(c,2,a.Tb);E(c,16,a.Ic);E(c,17,a.innertubeContextClientVersion);if(a.rb){var d=a.rb,e=new Fi;d.coldConfigData&&E(e,1,d.coldConfigData);d.appInstallData&&E(e,6,d.appInstallData);d.coldHashData&&E(e,3,d.coldHashData);d.hotHashData&&E(e,5,d.hotHashData);G(c,Fi,62,e)}(d=y.devicePixelRatio)&&1!=d&&E(c,65,d);d=rk();""!==d&&E(c,54,d);d=sk();if(0<d.length){e=new Li;for(var f=0;f<d.length;f++){var g=new Di;E(g,1,d[f].key);g.setValue(d[f].value);Wd(e,15,Di,
g)}G(b,Li,5,e)}zl(a,c);Al(c);Bl(a,c);Cl(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Oi,E(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(Hk(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?E(c,12,e):"cmodel"===d?E(c,13,e):"cbr"===d?E(c,87,e):"cbrver"===d?E(c,88,e):"cos"===d?E(c,18,e):"cosver"===d?E(c,19,e):"cplatform"===d&&E(c,42,e);b.s(c);return b}
function zl(a,b,c){a=a.Sb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Rd(b,Gi,96)||new Gi;var d=fl();d=Object.keys(Ph).indexOf(d);d=-1===d?null:d;null!==d&&E(c,3,d);G(b,Gi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=fl())}
function Al(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?E(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Bl(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Rd(b,Fi,62))?d:new Fi;E(c,6,a.appInstallData);G(b,Fi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Cl(a,b){var c=ul();c&&(a?E(a,61,ql[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=vl())&&(a?E(a,94,rl[c]):b&&(b.client.effectiveConnectionType=c))}
function El(a,b,c){c=void 0===c?{}:c;var d={};M("enable_web_eom_visitor_data")&&L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.gq||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().fq:b=mg([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function Fl(a){a=Object.assign({},a);delete a.Authorization;var b=mg();if(b){var c=new Vh;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=dd(c.digest(),3)}return a}
;function Gl(a){var b=new vi;(b=b.isAvailable()?a?new Bi(b,a):b:null)||(a=new wi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new ri(a):null;this.j=document.domain||window.location.hostname}
Gl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(qg(b))}catch(f){return}else e=escape(b);gl(a,e,c,this.j)};
Gl.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=hl(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Gl.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;ig.remove(""+a,"/",void 0===b?"youtube.com":b)};var Hl=window,P=Hl.ytcsi&&Hl.ytcsi.now?Hl.ytcsi.now:Hl.performance&&Hl.performance.timing&&Hl.performance.now&&Hl.performance.timing.navigationStart?function(){return Hl.performance.timing.navigationStart+Hl.performance.now()}:function(){return(new Date).getTime()};var Il;function Jl(){Il||(Il=new Gl("yt.innertube"));return Il}
function Kl(a,b,c,d){if(d)return null;d=Jl().get("nextId",!0)||1;var e=Jl().get("requests",!0)||{};e[d]={method:a,request:b,authState:Fl(c),requestTime:Math.round(P())};Jl().set("nextId",d+1,86400,!0);Jl().set("requests",e,86400,!0);return d}
function Ll(a){var b=Jl().get("requests",!0)||{};delete b[a];Jl().set("requests",b,86400,!0)}
function Ml(a){var b=Jl().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Fl(El(!1));sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Nl(a,d.method,e,{}));delete b[c]}}Jl().set("requests",b,86400,!0)}}
;function Ol(){}
Ol.prototype.S=function(a,b){return Pl(a,1,b)};
function Ql(a,b){Pl(a,2,b)}
function Rl(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Sl(){Ol.apply(this,arguments)}
t(Sl,Ol);function Tl(){Sl.i||(Sl.i=new Sl);return Sl.i}
function Pl(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Qk(a,c||0)}
Sl.prototype.fa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):Rk(a)}};
Sl.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Sl.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};var Nh=Tl();var Ul=Zc||$c;function Vl(a){var b=Rb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Wl=function(){var a;return function(){a||(a=new Gl("ytidb"));return a}}();
function Xl(){var a;return null==(a=Wl())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Yl=[],Zl,$l=!1;function am(){var a={};for(Zl=new bm(void 0===a.handleError?cm:a.handleError,void 0===a.logEvent?dm:a.logEvent);0<Yl.length;)switch(a=Yl.shift(),a.type){case "ERROR":Zl.handleError(a.payload);break;case "EVENT":Zl.logEvent(a.eventType,a.payload)}}
function em(a){$l||(Zl?Zl.handleError(a):(Yl.push({type:"ERROR",payload:a}),10<Yl.length&&Yl.shift()))}
function fm(a,b){$l||(Zl?Zl.logEvent(a,b):(Yl.push({type:"EVENT",eventType:a,payload:b}),10<Yl.length&&Yl.shift()))}
;function R(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
t(R,Error);function gm(){try{return hm(),!0}catch(a){return!1}}
function hm(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new R("Datasync ID not set",void 0===a?"unknown":a);}
;function im(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function jm(a){return a.substr(0,a.indexOf(":"))||a}
;var km={},lm=(km.AUTH_INVALID="No user identifier specified.",km.EXPLICIT_ABORT="Transaction was explicitly aborted.",km.IDB_NOT_SUPPORTED="IndexedDB is not supported.",km.MISSING_INDEX="Index not created.",km.MISSING_OBJECT_STORES="Object stores not created.",km.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",km.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",km.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
km.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",km.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",km.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",km.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",km),mm={},nm=(mm.AUTH_INVALID="ERROR",mm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",mm.EXPLICIT_ABORT="IGNORED",mm.IDB_NOT_SUPPORTED="ERROR",mm.MISSING_INDEX=
"WARNING",mm.MISSING_OBJECT_STORES="ERROR",mm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",mm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",mm.QUOTA_EXCEEDED="WARNING",mm.QUOTA_MAYBE_EXCEEDED="WARNING",mm.UNKNOWN_ABORT="WARNING",mm.INCOMPATIBLE_DB_VERSION="WARNING",mm),om={},pm=(om.AUTH_INVALID=!1,om.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,om.EXPLICIT_ABORT=!1,om.IDB_NOT_SUPPORTED=!1,om.MISSING_INDEX=!1,om.MISSING_OBJECT_STORES=!1,om.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,om.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,om.QUOTA_EXCEEDED=!1,om.QUOTA_MAYBE_EXCEEDED=!0,om.UNKNOWN_ABORT=!0,om.INCOMPATIBLE_DB_VERSION=!1,om);function qm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?lm[a]:c;d=void 0===d?nm[a]:d;e=void 0===e?pm[a]:e;R.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,qm.prototype)}
t(qm,R);function rm(a,b){qm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},lm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,rm.prototype)}
t(rm,qm);function sm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,sm.prototype)}
t(sm,Error);var tm=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function um(a,b,c,d){b=jm(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof qm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new qm("QUOTA_EXCEEDED",a);if(ad&&"UnknownError"===e.name)return new qm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof sm)return new qm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&tm.some(function(f){return e.message.includes(f)}))return new qm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new qm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Yb:e.name})];e.level="WARNING";return e}
function vm(a,b,c){var d=Xl();return new qm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function wm(a){if(!a)throw Error();throw a;}
function xm(a){return a}
function ym(a){this.i=a}
function zm(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
zm.all=function(a){return new zm(new ym(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={wa:0};f.wa<a.length;f={wa:f.wa},++f.wa)zm.resolve(a[f.wa]).then(function(g){return function(h){d[g.wa]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
zm.resolve=function(a){return new zm(new ym(function(b,c){a instanceof zm?a.then(b,c):b(a)}))};
zm.reject=function(a){return new zm(new ym(function(b,c){c(a)}))};
zm.prototype.then=function(a,b){var c=this,d=null!=a?a:xm,e=null!=b?b:wm;return new zm(new ym(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Am(c,c,d,f,g)}),c.onRejected.push(function(){Bm(c,c,e,f,g)})):"FULFILLED"===c.state.status?Am(c,c,d,f,g):"REJECTED"===c.state.status&&Bm(c,c,e,f,g)}))};
zm.prototype.catch=function(a){return this.then(void 0,a)};
function Am(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof zm?Cm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Bm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof zm?Cm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Cm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof zm?Cm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Dm(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Em(a){return new Promise(function(b,c){Dm(a,b,c)})}
function Fm(a){return new zm(new ym(function(b,c){Dm(a,b,c)}))}
;function Gm(a,b){return new zm(new ym(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Hm(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
l=Hm.prototype;l.add=function(a,b,c){return Im(this,[a],{mode:"readwrite",U:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Im(this,[a],{mode:"readwrite",U:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Im(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).count(b)})};
function Jm(a,b,c){a=a.i.createObjectStore(b,c);return new Km(a)}
l.delete=function(a,b){return Im(this,[a],{mode:"readwrite",U:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Im(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).get(b)})};
function Lm(a,b){return Im(a,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(c){c=c.objectStore("LogsRequestsStore");return Fm(c.i.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Im(a,b,c,d){var e,f,g,h,k,m,q,r,x,u,A,D;return w(function(F){switch(F.i){case 1:var N={mode:"readonly",U:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?N.mode=c:Object.assign(N,c);e=N;a.transactionCount++;f=e.U?3:1;g=0;case 2:if(h){F.u(3);break}g++;k=Math.round(P());va(F,4);m=a.i.transaction(b,e.mode);N=new Mm(m);N=Nm(N,d);return v(F,N,6);case 6:return q=F.j,r=Math.round(P()),Om(a,k,r,g,void 0,b.join(),e),F.return(q);case 4:x=xa(F);u=Math.round(P());A=um(x,a.i.name,b.join(),a.i.version);
if((D=A instanceof qm&&!A.i)||g>=f)Om(a,k,u,g,A,b.join(),e),h=A;F.u(2);break;case 3:return F.return(Promise.reject(h))}})}
function Om(a,b,c,d,e,f,g){b=c-b;e?(e instanceof qm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&fm("QUOTA_EXCEEDED",{dbName:jm(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof qm&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),fm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Pm(a,!1,d,f,b,g.tag),em(e)):Pm(a,!0,d,f,b,g.tag)}
function Pm(a,b,c,d,e,f){fm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.i.name};
function Km(a){this.i=a}
l=Km.prototype;l.add=function(a,b){return Fm(this.i.add(a,b))};
l.autoIncrement=function(){return this.i.autoIncrement};
l.clear=function(){return Fm(this.i.clear()).then(function(){})};
l.count=function(a){return Fm(this.i.count(a))};
function Qm(a,b){return Rm(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?Qm(this,a):Fm(this.i.delete(a))};
l.get=function(a){return Fm(this.i.get(a))};
l.index=function(a){try{return new Sm(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new sm(a,this.i.name);throw b;}};
l.getName=function(){return this.i.name};
l.keyPath=function(){return this.i.keyPath};
function Rm(a,b,c){a=a.i.openCursor(b.query,b.direction);return Tm(a).then(function(d){return Gm(d,c)})}
function Mm(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=qm;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Nm(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
Mm.prototype.abort=function(){this.i.abort();this.j=!0;throw new qm("EXPLICIT_ABORT");};
Mm.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Km(a),this.l.set(a,b));return b};
function Sm(a){this.i=a}
l=Sm.prototype;l.count=function(a){return Fm(this.i.count(a))};
l.delete=function(a){return Um(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Fm(this.i.get(a))};
l.getKey=function(a){return Fm(this.i.getKey(a))};
l.keyPath=function(){return this.i.keyPath};
l.unique=function(){return this.i.unique};
function Um(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Tm(a).then(function(d){return Gm(d,c)})}
function Vm(a,b){this.request=a;this.cursor=b}
function Tm(a){return Fm(a).then(function(b){return b?new Vm(a,b):null})}
l=Vm.prototype;l.advance=function(a){this.cursor.advance(a);return Tm(this.request)};
l.continue=function(a){this.cursor.continue(a);return Tm(this.request)};
l.delete=function(){return Fm(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Fm(this.cursor.update(a))};function Wm(a,b,c){return new Promise(function(d,e){function f(){x||(x=new Hm(g.result,{closed:r}));return x}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.nd,q=c.upgrade,r=c.closed,x;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&fm("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:jm(a)});var A=f(),D=new Mm(g.transaction);
q&&q(A,function(F){return u.oldVersion<F&&u.newVersion>=F},D);
D.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var u=g.result;k&&u.addEventListener("versionchange",function(){k(f())});
u.addEventListener("close",function(){fm("IDB_UNEXPECTEDLY_CLOSED",{dbName:jm(a),dbVersion:u.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Xm(a,b,c){c=void 0===c?{}:c;return Wm(a,b,c)}
function Ym(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.i)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),v(g,Em(c),4);
if(2!=g.i)return wa(g,0);f=xa(g);throw um(f,a,"",-1);})}
;function Zm(a){return new Promise(function(b){Ql(function(){b()},a)})}
function $m(a,b){this.name=a;this.options=b;this.m=!0;this.s=this.o=0;this.j=500}
$m.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Xm(a,b,c)};
$m.prototype.delete=function(a){a=void 0===a?{}:a;return Ym(this.name,a)};
function an(a,b){return new qm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function bn(a,b){if(!b)throw vm("openWithToken",jm(a.name));return cn(a)}
function cn(a){function b(){var f,g,h,k,m,q,r,x,u,A;return w(function(D){switch(D.i){case 1:return g=null!=(f=Error().stack)?f:"",va(D,2),v(D,a.l(a.name,a.options.version,d),4);case 4:h=D.j;for(var F=a.options,N=[],O=p(Object.keys(F.Ia)),Q=O.next();!Q.done;Q=O.next()){Q=Q.value;var ba=F.Ia[Q],ca=void 0===ba.Vc?Number.MAX_VALUE:ba.Vc;!(h.i.version>=ba.jb)||h.i.version>=ca||h.i.objectStoreNames.contains(Q)||N.push(Q)}k=N;if(0===k.length){D.u(5);break}m=Object.keys(a.options.Ia);q=h.objectStoreNames();
if(a.s<qk("ytidb_reopen_db_retries",0))return a.s++,h.close(),em(new qm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),D.return(b());if(!(a.o<qk("ytidb_remake_db_retries",1))){D.u(6);break}a.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){D.u(7);break}return v(D,Zm(a.j),8);case 8:a.j*=2;case 7:return v(D,a.delete(),9);case 9:return em(new qm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),D.return(b());
case 6:throw new rm(q,m);case 5:return D.return(h);case 2:r=xa(D);if(r instanceof DOMException?"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){D.u(10);break}return v(D,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:x=D.j;u=x.i.version;if(void 0!==a.options.version&&u>a.options.version+1)throw x.close(),
a.m=!1,an(a,u);return D.return(x);case 10:throw c(),r instanceof Error&&!M("ytidb_async_stack_killswitch")&&(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),um(r,a.name,"",null!=(A=a.options.version)?A:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw an(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,nd:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var dn=new $m("YtIdbMeta",{Ia:{databases:{jb:1}},upgrade:function(a,b){b(1)&&Jm(a,"databases",{keyPath:"actualName"})}});
function en(a,b){var c;return w(function(d){if(1==d.i)return v(d,bn(dn,b),2);c=d.j;return d.return(Im(c,["databases"],{U:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Fm(f.i.put(a,void 0)).then(function(){})})}))})}
function fn(a,b){var c;return w(function(d){if(1==d.i)return a?v(d,bn(dn,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function gn(a,b){var c,d;return w(function(e){return 1==e.i?(c=[],v(e,bn(dn,b),2)):3!=e.i?(d=e.j,v(e,Im(d,["databases"],{U:!0,mode:"readonly"},function(f){c.length=0;return Rm(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function hn(a){return gn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function jn(a,b,c){return gn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function kn(a){var b,c;return w(function(d){if(1==d.i)return b=hm("YtIdbMeta hasAnyMeta other"),v(d,gn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.j;return d.return(0<c.length)})}
;var ln,mn=new function(){}(new function(){});
function nn(){var a,b,c,d;return w(function(e){switch(e.i){case 1:a=Xl();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Ul)f=/WebKit\/([0-9]+)/.exec(Rb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Rb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,en(d,mn),4);case 4:return v(e,fn("yt-idb-test-do-not-use",mn),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function on(){if(void 0!==ln)return ln;$l=!0;return ln=nn().then(function(a){$l=!1;var b;if(null!=(b=Wl())&&b.i){var c;b={hasSucceededOnce:(null==(c=Xl())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Wl())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function pn(){return B("ytglobal.idbToken_")||void 0}
function qn(){var a=pn();return a?Promise.resolve(a):on().then(function(b){(b=b?mn:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var rn=0;function sn(a,b){rn||(rn=Nh.S(function(){var c,d,e,f,g;return w(function(h){switch(h.i){case 1:return v(h,qn(),2);case 2:c=h.j;if(!c)return h.return();d=!0;va(h,3);return v(h,jn(a,c,b),5);case 5:e=h.j;if(!e.length){d=!1;h.u(6);break}f=e[0];return v(h,Ym(f.actualName),7);case 7:return v(h,fn(f.actualName,c),6);case 6:wa(h,4);break;case 3:g=xa(h),em(g),d=!1;case 4:Nh.fa(rn),rn=0,d&&sn(a,b),h.i=0}})}))}
function tn(){var a;return w(function(b){return 1==b.i?v(b,qn(),2):(a=b.j)?b.return(kn(a)):b.return(!1)})}
new th;function un(a){if(!gm())throw a=new qm("AUTH_INVALID",{dbName:a}),em(a),a;var b=hm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function vn(a,b,c,d){var e,f,g,h,k,m;return w(function(q){switch(q.i){case 1:return f=null!=(e=Error().stack)?e:"",v(q,qn(),2);case 2:g=q.j;if(!g)throw h=vm("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),em(h),h;im(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:un(a);va(q,3);return v(q,en(k,g),5);case 5:return v(q,Xm(k.actualName,b,d),6);case 6:return q.return(q.j);case 3:return m=xa(q),va(q,7),v(q,fn(k.actualName,g),9);case 9:wa(q,
8);break;case 7:xa(q);case 8:throw m;}})}
function wn(a,b,c){c=void 0===c?{}:c;return vn(a,b,!1,c)}
function xn(a,b,c){c=void 0===c?{}:c;return vn(a,b,!0,c)}
function yn(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.i)return v(e,qn(),2);if(3!=e.i){c=e.j;if(!c)return e.return();im(a);d=un(a);return v(e,Ym(d.actualName,b),3)}return v(e,fn(d.actualName,c),0)})}
function zn(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.i?v(e,Ym(d.actualName,b),2):v(e,fn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function An(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.i)return v(d,qn(),2);if(3!=d.i){b=d.j;if(!b)return d.return();im("LogsDatabaseV2");return v(d,hn(b),3)}c=d.j;return v(d,zn(c,a,b),0)})}
function Bn(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.i)return v(d,qn(),2);if(3!=d.i){c=d.j;if(!c)return d.return();im(a);return v(d,Ym(a,b),3)}return v(d,fn(a,c),0)})}
;function Cn(a){this.Sa=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.za=function(){};
this.now=Date.now;this.Ga=!1;var b;this.jc=null!=(b=a.jc)?b:100;var c;this.ec=null!=(c=a.ec)?c:1;var d;this.cc=null!=(d=a.cc)?d:2592E6;var e;this.Zb=null!=(e=a.Zb)?e:12E4;var f;this.dc=null!=(f=a.dc)?f:5E3;var g;this.G=null!=(g=a.G)?g:void 0;this.Xa=!!a.Xa;var h;this.Va=null!=(h=a.Va)?h:.1;var k;this.cb=null!=(k=a.cb)?k:10;a.handleError&&(this.handleError=a.handleError);a.za&&(this.za=a.za);a.Ga&&(this.Ga=a.Ga);a.Sa&&(this.Sa=a.Sa);this.H=a.H;this.Z=a.Z;this.O=a.O;this.M=a.M;this.ia=a.ia;this.wb=
a.wb;this.vb=a.vb;Dn(this)&&(!this.H||this.H("networkless_logging"))&&En(this)}
function En(a){Dn(a)&&!a.Ga&&(a.i=!0,a.Xa&&Math.random()<=a.Va&&a.O.xc(a.G),Fn(a),a.M.L()&&a.Ma(),a.M.aa(a.wb,a.Ma.bind(a)),a.M.aa(a.vb,a.Hb.bind(a)))}
l=Cn.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Dn(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.G).then(function(e){d.id=e;c.M.L()&&Gn(c,d)}).catch(function(e){Gn(c,d);
Hn(c,e)})}else this.ia(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Dn(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.H&&this.H("nwl_skip_retry")&&(e.skipRetry=c);if(this.M.L()||this.H&&this.H("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.i)return v(k,d.O.set(e,d.G).catch(function(m){Hn(d,m)}),2);
f(g,h);k.i=0})}}this.ia(a,b,e.skipRetry)}else this.O.set(e,this.G).catch(function(g){d.ia(a,b,e.skipRetry);
Hn(d,g)})}else this.ia(a,b,this.H&&this.H("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Dn(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.ya(d.id,c.G):e=!0;c.M.ha&&c.H&&c.H("vss_network_hint")&&c.M.ha(!0);f(g,h)};
this.ia(d.url,d.options);this.O.set(d,this.G).then(function(g){d.id=g;e&&c.O.ya(d.id,c.G)}).catch(function(g){Hn(c,g)})}else this.ia(a,b)};
l.Ma=function(){var a=this;if(!Dn(this))throw vm("throttleSend");this.j||(this.j=this.Z.S(function(){var b;return w(function(c){if(1==c.i)return v(c,a.O.Rb("NEW",a.G),2);if(3!=c.i)return b=c.j,b?v(c,Gn(a,b),3):(a.Hb(),c.return());a.j&&(a.j=0,a.Ma());c.i=0})},this.jc))};
l.Hb=function(){this.Z.fa(this.j);this.j=0};
function Gn(a,b){var c,d;return w(function(e){switch(e.i){case 1:if(!Dn(a))throw c=vm("immediateSend"),c;if(void 0===b.id){e.u(2);break}return v(e,a.O.Nc(b.id,a.G),3);case 3:(d=e.j)?b=d:a.za(Error("The request cannot be found in the database."));case 2:if(In(a,b,a.cc)){e.u(4);break}a.za(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return v(e,a.O.ya(b.id,a.G),5);case 5:return e.return();case 4:b.skipRetry||(b=Jn(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return v(e,a.O.ya(b.id,a.G),8);case 8:a.ia(b.url,b.options,!!b.skipRetry),e.i=0}})}
function Jn(a,b){if(!Dn(a))throw vm("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:g=Kn(f);if(!(a.H&&a.H("nwl_consider_error_code")&&g||a.H&&!a.H("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.cb)){m.u(2);break}if(!a.M.Ka){m.u(3);break}return v(m,a.M.Ka(),3);case 3:if(a.M.L()){m.u(2);break}c(e,f);if(!a.H||!a.H("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return v(m,a.O.yb(b.id,a.G,!1),6);case 6:return m.return();case 2:if(a.H&&a.H("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.cb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.ec?v(m,a.O.yb(b.id,a.G),12):v(m,a.O.ya(b.id,a.G),8);case 12:a.Z.S(function(){a.M.L()&&a.Ma()},a.dc);
case 8:c(e,f),m.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):v(h,a.O.ya(b.id,a.G),2);a.M.ha&&a.H&&a.H("vss_network_hint")&&a.M.ha(!0);d(e,f);h.i=0})};
return b}
function In(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Fn(a){if(!Dn(a))throw vm("retryQueuedRequests");a.O.Rb("QUEUED",a.G).then(function(b){b&&!In(a,b,a.Zb)?a.Z.S(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,a.O.yb(b.id,a.G),2);Fn(a);c.i=0})}):a.M.L()&&a.Ma()})}
function Hn(a,b){a.mc&&!a.M.L()?a.mc(b):a.handleError(b)}
function Dn(a){return!!a.G||a.Sa}
function Kn(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Ln(a,b){this.version=a;this.args=b}
;function Mn(a,b){this.topic=a;this.i=b}
Mn.prototype.toString=function(){return this.topic};var Nn=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Da;K.prototype.publish=K.prototype.oa;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",Nn);var On=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",On);var Pn=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Pn);var Qn=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Qn);
z("ytPubsub2Pubsub2SkipSubKey",null);function Rn(a,b){var c=Sn();c&&c.publish.call(c,a.toString(),a,b)}
function Tn(a){var b=Un,c=Sn();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(On[d])try{if(f&&b instanceof Mn&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.na){var m=new h;h.na=m.version}var q=h.na}catch(F){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var r=q.construct;
var x=k.args,u=x.length;if(0<u){var A=Array(u);for(k=0;k<u;k++)A[k]=x[k];var D=A}else D=[];f=r.call(q,h,D)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){wk(F)}},Qn[b.toString()]?B("yt.scheduler.instance")?Nh.S(g):Qk(g,0):g())});
On[d]=!0;Pn[b.toString()]||(Pn[b.toString()]=[]);Pn[b.toString()].push(d);return d}
function Vn(){var a=Wn,b=Tn(function(c){a.apply(void 0,arguments);Xn(b)});
return b}
function Xn(a){var b=Sn();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete On[c]}))}
function Sn(){return B("ytPubsub2Pubsub2Instance")}
;function Yn(a,b){$m.call(this,a,b);this.options=b;im(a)}
t(Yn,$m);function Zn(a,b){var c;return function(){c||(c=new Yn(a,b));return c}}
Yn.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.zb?xn:wn)(a,b,Object.assign({},c))};
Yn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.zb?Bn:yn)(this.name,a)};
function $n(a,b){return Zn(a,b)}
;var ao;
function bo(){if(ao)return ao();var a={};ao=$n("LogsDatabaseV2",{Ia:(a.LogsRequestsStore={jb:2},a),zb:!1,upgrade:function(b,c,d){c(2)&&Jm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return ao()}
;function co(a){return bn(bo(),a)}
function eo(a,b){var c,d,e,f;return w(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,co(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,Lm(d,e),3);f=g.j;c.pd=P();fo(c);return g.return(f)})}
function go(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(m,co(b),2);if(3!=m.i)return d=m.j,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,v(m,Im(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(q){return Um(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===a&&(k.status="QUEUED",
r.update(k)))})}),3);
c.pd=P();fo(c);return m.return(k)})}
function ho(a,b){var c;return w(function(d){if(1==d.i)return v(d,co(b),2);c=d.j;return d.return(Im(c,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Fm(f.i.put(g,void 0)).then(function(){return g})})}))})}
function io(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.i)return v(e,co(b),2);d=e.j;return e.return(Im(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Fm(g.i.put(h,void 0)).then(function(){return h})):zm.resolve(void 0)})}))})}
function jo(a,b){var c;return w(function(d){if(1==d.i)return v(d,co(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function ko(a){var b,c;return w(function(d){if(1==d.i)return v(d,co(a),2);b=d.j;c=P()-2592E6;return v(d,Im(b,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){return Rm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function lo(){return w(function(a){return v(a,An(),0)})}
function fo(a){M("nwl_csi_killswitch")||.01>=Math.random()&&Rn("nwl_transaction_latency_payload",a)}
;var mo={},no=$n("ServiceWorkerLogsDatabase",{Ia:(mo.SWHealthLog={jb:1},mo),zb:!0,upgrade:function(a,b){b(1)&&Jm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function oo(a){return bn(no(),a)}
function po(a){var b,c;return w(function(d){if(1==d.i)return v(d,oo(a),2);b=d.j;c=P()-2592E6;return v(d,Im(b,["SWHealthLog"],{mode:"readwrite",U:!0},function(e){return Rm(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function qo(a){var b;return w(function(c){if(1==c.i)return v(c,oo(a),2);b=c.j;return v(c,b.clear("SWHealthLog"),0)})}
;var ro={},so=0;
function to(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)$k(a,void 0,"POST",b);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))$k(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new bb({url:a});if(d.l&&d.j||d.m){var e=kc(lc(5,a)),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(zc),h=yc(a,0,"ri",g);if(0>h)var k=null;else{var m=a.indexOf("&",h);if(0>m||m>g)m=g;k=decodeURIComponent(a.slice(h+3,-1!==m?m:0).replace(/\+/g," "))}f="1"!==k}var q=!f;break b}}catch(x){}q=!1}if(q){b:{try{if(window.navigator&&
window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var r=!0;break b}}catch(x){}r=!1}b=r?!0:!1}else b=!1;b||uo(a)}}
function uo(a){var b=new Image,c=""+so++;ro[c]=b;b.onload=b.onerror=function(){delete ro[c]};
b.src=a}
;function vo(){this.i=new Map;this.j=!1}
function wo(){if(!vo.i){var a=B("yt.networkRequestMonitor.instance")||new vo;z("yt.networkRequestMonitor.instance",a);vo.i=a}return vo.i}
vo.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
vo.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
vo.prototype.removeParams=function(a){return a.split("?")[0]};
vo.prototype.removeParams=vo.prototype.removeParams;vo.prototype.isEndpointCFR=vo.prototype.isEndpointCFR;vo.prototype.requestComplete=vo.prototype.requestComplete;vo.getInstance=wo;var xo;function yo(){xo||(xo=new Gl("yt.offline"));return xo}
function zo(a){if(M("offline_error_handling")){var b=yo().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);yo().set("errors",b,2592E3,!0)}}
;function Ao(){Ue.call(this);var a=this;this.l=!1;this.j=Mh();this.j.aa("networkstatus-online",function(){if(a.l&&M("offline_error_handling")){var b=yo().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new R(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;wk(d)}yo().set("errors",{},2592E3,!0)}}})}
t(Ao,Ue);function Bo(){if(!Ao.i){var a=B("yt.networkStatusManager.instance")||new Ao;z("yt.networkStatusManager.instance",a);Ao.i=a}return Ao.i}
l=Ao.prototype;l.L=function(){return this.j.L()};
l.ha=function(a){this.j.j=a};
l.Oc=function(){};
l.Hc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Bc=function(){this.l=!0};
l.aa=function(a,b){return this.j.aa(a,b)};
l.Ka=function(a){a=Kh(this.j,a);a.then(function(b){M("use_cfr_monitor")&&wo().requestComplete("generate_204",b)});
return a};
Ao.prototype.sendNetworkCheckRequest=Ao.prototype.Ka;Ao.prototype.listen=Ao.prototype.aa;Ao.prototype.enableErrorFlushing=Ao.prototype.Bc;Ao.prototype.getWindowStatus=Ao.prototype.Hc;Ao.prototype.monitorNetworkStatusChange=Ao.prototype.Oc;Ao.prototype.networkStatusHint=Ao.prototype.ha;Ao.prototype.isNetworkAvailable=Ao.prototype.L;Ao.getInstance=Bo;function Co(a){a=void 0===a?{}:a;Ue.call(this);var b=this;this.j=this.s=0;this.l=Bo();var c=B("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.fb?(this.fb=a.fb,c("networkstatus-online",function(){Do(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Do(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ve(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ve(b,"publicytnetworkstatus-offline")})))}
t(Co,Ue);Co.prototype.L=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
Co.prototype.ha=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
Co.prototype.Ka=function(a){var b=this,c;return w(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return M("skip_network_check_if_cfr")&&wo().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ha((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.L())})):c?d.return(c(a)):d.return(!0)})};
function Do(a,b){a.fb?a.j?(Nh.fa(a.s),a.s=Nh.S(function(){a.o!==b&&(Ve(a,b),a.o=b,a.j=P())},a.fb-(P()-a.j))):(Ve(a,b),a.o=b,a.j=P()):Ve(a,b)}
;var Eo;function Fo(){Cn.call(this,{O:{xc:ko,ya:jo,Rb:go,Nc:ho,yb:io,set:eo},M:Go(),handleError:wk,za:xk,ia:Ho,now:P,mc:zo,Z:Tl(),wb:"publicytnetworkstatus-online",vb:"publicytnetworkstatus-offline",Xa:!0,Va:.1,cb:qk("potential_esf_error_limit",10),H:M,Ga:!(gm()&&Io())});this.l=new th;M("networkless_immediately_drop_all_requests")&&lo();Bn("LogsDatabaseV2")}
t(Fo,Cn);function Jo(){var a=B("yt.networklessRequestController.instance");a||(a=new Fo,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&qn().then(function(b){a.G=b;En(a);a.l.resolve();a.Xa&&Math.random()<=a.Va&&a.G&&po(a.G);M("networkless_immediately_drop_sw_health_store")&&Ko(a)}));
return a}
Fo.prototype.writeThenSend=function(a,b){b||(b={});gm()||(this.i=!1);Cn.prototype.writeThenSend.call(this,a,b)};
Fo.prototype.sendThenWrite=function(a,b,c){b||(b={});gm()||(this.i=!1);Cn.prototype.sendThenWrite.call(this,a,b,c)};
Fo.prototype.sendAndWrite=function(a,b){b||(b={});gm()||(this.i=!1);Cn.prototype.sendAndWrite.call(this,a,b)};
Fo.prototype.awaitInitialization=function(){return this.l.promise};
function Ko(a){var b;w(function(c){if(!a.G)throw b=vm("clearSWHealthLogsDb"),b;return c.return(qo(a.G).catch(function(d){a.handleError(d)}))})}
function Ho(a,b,c){M("use_cfr_monitor")&&Lo(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P());c&&0===Object.keys(b).length?to(a):Xk(a,b)}
function Go(){Eo||(Eo=new Co({Mc:!0,Cc:!0}));return Eo}
function Lo(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){wo().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){wo().requestComplete(a,!0);d(e,f)}}
function Io(){return"www.youtube-nocookie.com"!==mc(document.location.toString())}
;var Mo=!1,No=0,Oo=0,Po,Qo=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Mo,potentialEsfErrorCounter:Oo};z("ytNetworklessLoggingInitializationOptions",Qo);
function Ro(){var a;w(function(b){switch(b.i){case 1:return v(b,qn(),2);case 2:a=b.j;if(!a||!gm()&&!M("nwl_init_require_datasync_id_killswitch")||!Io()){b.u(0);break}Mo=!0;Qo.isNwlInitialized=Mo;if(!M("use_new_nwl_initialization")){b.u(4);break}return v(b,Jo().awaitInitialization(),5);case 5:return b.return();case 4:return v(b,Bn("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.u(7);break}return v(b,ko(a),8);case 8:return v(b,po(a),7);case 7:So();To().L()&&Uo();To().aa("publicytnetworkstatus-online",
Uo);To().aa("publicytnetworkstatus-offline",Vo);if(!M("networkless_immediately_drop_sw_health_store")){b.u(10);break}return v(b,Wo(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return v(b,lo(),0);b.u(0)}})}
function Xo(a,b){function c(d){var e=To().L();if(!Yo()||!d||e&&M("vss_networkless_bypass_write"))Zo(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};eo(f,d).then(function(g){f.id=g;To().L()&&$o(f)}).catch(function(g){$o(f);
To().L()?wk(g):zo(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?qn().then(function(d){c(d)}):c(pn())}
function ap(a,b){function c(d){if(Yo()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&wo().requestComplete(e.url,!0);void 0!==e.id?jo(e.id,d):f=!0;M("vss_network_hint")&&To().ha(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){wo().requestComplete(e.url,!1);h(k,m)}}Zo(e.url,e.options);
eo(e,d).then(function(k){e.id=k;f&&jo(e.id,d)}).catch(function(k){To().L()?wk(k):zo(k)})}else Zo(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?qn().then(function(d){c(d)}):c(pn())}
function Uo(){var a=pn();if(!a)throw vm("throttleSend");No||(No=Nh.S(function(){var b;return w(function(c){if(1==c.i)return v(c,go("NEW",a),2);if(3!=c.i)return b=c.j,b?v(c,$o(b),3):(Vo(),c.return());No&&(No=0,Uo());c.i=0})},100))}
function Vo(){Nh.fa(No);No=0}
function $o(a){var b,c,d;return w(function(e){switch(e.i){case 1:b=pn();if(!b)throw c=vm("immediateSend"),c;if(void 0===a.id){e.u(2);break}return v(e,ho(a.id,b),3);case 3:(d=e.j)?a=d:xk(Error("The request cannot be found in the database."));case 2:if(bp(a,2592E6)){e.u(4);break}xk(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return v(e,jo(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=cp(a));var f=a,g,h;if(null==f?0:null==(g=f.options)?
0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return v(e,jo(a.id,b),8);case 8:Zo(a.url,a.options,!!a.skipRetry),e.i=0}})}
function cp(a){var b=pn();if(!b)throw vm("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:M("use_cfr_monitor")&&wo().requestComplete(a.url,!1);g=Kn(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&dp()<=qk("potential_esf_error_limit",10))){m.u(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||wo().isEndpointCFR(a.url))){m.u(3);break}return v(m,To().Ka(),3);case 3:if(To().L()){m.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.u(6);break}return v(m,io(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&dp()>qk("potential_esf_error_limit",10))return m.return();B("ytNetworklessLoggingInitializationOptions")&&Qo.potentialEsfErrorCounter++;Oo++;if(void 0===(null==(k=a)?void 0:k.id)){m.u(8);break}return 1>a.sendCount?v(m,io(a.id,b),12):v(m,jo(a.id,b),8);case 12:Nh.S(function(){To().L()&&Uo()},5E3);
case 8:c(e,f),m.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return M("use_cfr_monitor")&&wo().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):v(h,jo(a.id,b),2);M("vss_network_hint")&&To().ha(!0);d(e,f);h.i=0})};
return a}
function bp(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function So(){var a=pn();if(!a)throw vm("retryQueuedRequests");go("QUEUED",a).then(function(b){b&&!bp(b,12E4)?Nh.S(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,io(b.id,a),2);So();c.i=0})}):To().L()&&Uo()})}
function Wo(){var a,b;return w(function(c){a=pn();if(!a)throw b=vm("clearSWHealthLogsDb"),b;return c.return(qo(a).catch(function(d){wk(d)}))})}
function To(){if(M("use_new_nwl"))return Go();Po||(Po=new Co({Mc:!0,Cc:!0}));return Po}
function Zo(a,b,c){c&&0===Object.keys(b).length?to(a):Xk(a,b)}
function Yo(){return B("ytNetworklessLoggingInitializationOptions")?Qo.isNwlInitialized:Mo}
function dp(){return B("ytNetworklessLoggingInitializationOptions")?Qo.potentialEsfErrorCounter:Oo}
;function ep(a){var b=this;this.config_=null;a?this.config_=a:wl()&&(this.config_=xl());Pl(function(){Ml(b)},0,5E3)}
ep.prototype.isReady=function(){!this.config_&&wl()&&(this.config_=xl());return!!this.config_};
function Nl(a,b,c,d){function e(A){A=void 0===A?!1:A;var D;if(d.retry&&"www.youtube-nocookie.com"!=h&&(A||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(D=Kl(b,c,m,k)),D)){var F=g.onSuccess,N=g.onFetchSuccess;g.onSuccess=function(O,Q){Ll(D);F(O,Q)};
c.onFetchSuccess=function(O,Q){Ll(D);N(O,Q)}}try{A&&d.retry&&!d.Wb.bypassNetworkless?(g.method="POST",d.Wb.writeThenSend?M("use_new_nwl_wts")?Jo().writeThenSend(u,g):Xo(u,g):M("use_new_nwl_saw")?Jo().sendAndWrite(u,g):ap(u,g)):(g.method="POST",g.postParams||(g.postParams={}),Xk(u,g))}catch(O){if("InvalidAccessError"==O.name)D&&(Ll(D),D=0),xk(Error("An extension is blocking network request."));
else throw O;}D&&Pl(function(){Ml(a)},0,5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&xk(new R("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new R("innertube xhrclient not ready",b,c,d);wk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(A,D){if(d.onSuccess)d.onSuccess(D)},
onFetchSuccess:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,D){if(d.onError)d.onError(D)},
onFetchError:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Jc)&&(h=f);var k=a.config_.Lc||!1,m=El(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},x=a.config_.Kc&&f;x=x&&f.startsWith("Bearer");x||(r.key=a.config_.innertubeApiKey);var u=Jk(""+h+q,r||{},!0);M("use_new_nwl")&&Jo().i||!M("use_new_nwl")&&
Yo()?on().then(function(A){e(A)}):e(!1)}
;var fp={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},gp={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var hp=0,ip=Nc?"webkit":Mc?"moz":Kc?"ms":Jc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++hp});var zp={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Yp(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in zp||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function Zp(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
Yp.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Yp.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Yp.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ob=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",ob);var $p=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",$p);
function aq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var bq=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function cq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=aq(a,b,c,d);if(e)return e;e=++$p.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Yp(h);if(!df(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Yp(h);
h.currentTarget=a;return c.call(a,h)};
g=vk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),bq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ob[e]=[a,b,c,g,d];return e}
function dq(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in ob){var c=ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?bq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[b]}}))}
;var eq=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function fq(a){this.F=a;this.j=null;this.o=0;this.v=null;this.s=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.m=0;this.K=cq(window,"mousemove",Xa(this.P,this));a=Xa(this.J,this);"function"===typeof a&&(a=vk(a));this.R=window.setInterval(a,25)}
Za(fq,J);fq.prototype.P=function(a){void 0===a.i&&Zp(a);var b=a.i;void 0===a.j&&Zp(a);this.j=new $e(b,a.j)};
fq.prototype.J=function(){if(this.j){var a=eq();if(0!=this.o){var b=this.v,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.l[this.m]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.F();this.s=d}this.o=a;this.v=this.j;this.m=(this.m+1)%4}};
fq.prototype.C=function(){window.clearInterval(this.R);dq(this.K)};var gq={};
function hq(a){var b=void 0===a?{}:a;a=void 0===b.Sc?!1:b.Sc;b=void 0===b.Dc?!0:b.Dc;if(null==B("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&iq();cq(document,"keydown",iq);cq(document,"keyup",iq);cq(document,"mousedown",iq);cq(document,"mouseup",iq);a?cq(window,"touchmove",function(){jq("touchmove",200)},{passive:!0}):(cq(window,"resize",function(){jq("resize",200)}),b&&cq(window,"scroll",function(){jq("scroll",200)}));
new fq(function(){jq("mouse",100)});
cq(document,"touchstart",iq,{passive:!0});cq(document,"touchend",iq,{passive:!0})}}
function jq(a,b){gq[a]||(gq[a]=!0,Nh.S(function(){iq();gq[a]=!1},b))}
function iq(){null==B("_lact",window)&&hq();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function kq(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var lq=y.ytPubsubPubsubInstance||new K,mq=y.ytPubsubPubsubSubscribedKeys||{},nq=y.ytPubsubPubsubTopicToKeys||{},oq=y.ytPubsubPubsubIsSynchronous||{};function pq(a,b){var c=qq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){mq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{oq[a]?f():Qk(f,0)}catch(g){wk(g)}},void 0);
mq[d]=!0;nq[a]||(nq[a]=[]);nq[a].push(d);return d}return 0}
function rq(a){var b=qq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete mq[c]}))}
function sq(a,b){var c=qq();c&&c.publish.apply(c,arguments)}
function tq(a){var b=qq();if(b)if(b.clear(a),a)uq(a);else for(var c in nq)uq(c)}
function qq(){return y.ytPubsubPubsubInstance}
function uq(a){nq[a]&&(a=nq[a],fb(a,function(b){mq[b]&&delete mq[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Da;K.prototype.publish=K.prototype.oa;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",lq);z("ytPubsubPubsubTopicToKeys",nq);z("ytPubsubPubsubIsSynchronous",oq);z("ytPubsubPubsubSubscribedKeys",mq);var vq=y.window;vq.ytExports||(vq.ytExports={logging:{transport:{leaderQueueLength:0,leaderChosen:!1}}});var wq=qk("initial_gel_batch_timeout",2E3),xq=Math.pow(2,16)-1,yq=!1,zq=void 0;function Aq(){this.l=this.i=this.j=0}
var Bq=new Aq,Cq=new Aq,Dq=!0,Eq=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Eq);var Fq=new Map,Gq=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",Gq);var Hq=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Hq);var Iq=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",Iq);
function Jq(){M("jspb_with_transport_leader")&&!vq.ytExports.logging.transport.leaderChosen&&(yq=vq.ytExports.logging.transport.leaderChosen=!0,document.addEventListener("FLUSH_REQUEST",function(){Kq(void 0,void 0,!0)}))}
function Lq(a,b){Jq();if("log_event"===a.endpoint){Mq(a);var c=Nq(a),d=Eq.get(c)||[];Eq.set(c,d);d.push(a.payload);Oq(b,d,c)}}
function Pq(a,b){Jq();if("log_event"===a.endpoint){Mq(void 0,a);var c=Nq(a,!0);if(M("jspb_with_transport_leader")&&yq){var d=Fq.get(c)||[];Fq.set(c,d);vq.ytExports.logging.transport.leaderQueueLength++;d.push(a.payload);Oq(b,d,c,!0)}else d=Gq.get(c)||[],Gq.set(c,d),a=a.payload.toJSON(),d.push(a),Oq(b,d,c,!0)}}
function Oq(a,b,c,d){d=void 0===d?!1:d;a&&(zq=new a);a=qk("tvhtml5_logging_max_batch")||qk("web_logging_max_batch")||100;var e=P(),f=d?Cq.l:Bq.l,g=Gq.get(c)||[];M("jspb_with_transport_leader")&&(yq&&b.length+g.length>=a||!yq&&vq.ytExports.logging.transport.leaderQueueLength+b.length>=a)||b.length>=a?Kq({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Qq(d),d?Cq.l=e:Bq.l=e)}
function Rq(a,b){Jq();if("log_event"===a.endpoint){Mq(a);var c=Nq(a),d=new Map;d.set(c,[a.payload]);b&&(zq=new b);return new qf(function(e,f){zq&&zq.isReady()?Sq(d,e,f,{bypassNetworkless:!0},!0):e()})}}
function Tq(a,b){Jq();if("log_event"===a.endpoint){Mq(void 0,a);var c=Nq(a,!0),d=new Map,e=new Map;M("jspb_with_transport_leader")&&yq?e.set(c,[a.payload]):d.set(c,[a.payload.toJSON()]);b&&(zq=new b);return new qf(function(f){zq&&zq.isReady()?Uq(d,e,f,{bypassNetworkless:!0},!0):f()})}}
function Nq(a,b){var c="";if(a.Fa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Jj;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Pd(d,2,Kj,c.playlistId);Iq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Hq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Kq(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new qf(function(d,e){c?(Rk(Cq.j),Rk(Cq.i),Cq.i=0):(Rk(Bq.j),Rk(Bq.i),Bq.i=0);if(M("jspb_with_transport_leader")&&!yq)document.dispatchEvent(new CustomEvent("FLUSH_REQUEST")),d();else if(zq&&zq.isReady())if(void 0!==b)if(c){e=new Map;var f=new Map,g=Gq.get(b)||[];e.set(b,g);M("jspb_with_transport_leader")&&(g=Fq.get(b)||[],f.set(b,g));Uq(e,f,d,a);M("jspb_with_transport_leader")&&Fq.delete(b);Gq.delete(b)}else f=new Map,g=Eq.get(b)||[],f.set(b,
g),Sq(f,d,e,a),Eq.delete(b);else c?(Uq(Gq,Fq,d,a),Gq.clear(),M("jspb_with_transport_leader")&&Fq.clear()):(Sq(Eq,d,e,a),Eq.clear());else Qq(c),d()})}
function Qq(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!Bq.i||a&&!Cq.i)){var b=Qk(function(){Kq({writeThenSend:!0},void 0,a)},6E4);
a?Cq.i=b:Bq.i=b}Rk(a?Cq.j:Bq.j);b=L("LOGGING_BATCH_TIMEOUT",qk("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Dq&&(b=wq);b=Qk(function(){Kq({writeThenSend:!0},void 0,a)},b);
a?Cq.j=b:Bq.j=b}
function Sq(a,b,c,d,e){var f=zq;d=void 0===d?{}:d;var g=Math.round(P()),h=a.size;a=p(a);for(var k=a.next();!k.done;k=a.next()){var m=p(k.value);k=m.next().value;var q=m.next().value;m=k;k=ub({context:yl(f.config_||xl())});k.events=q;(q=Hq[m])&&Vq(k,m,q);delete Hq[m];m="visitorOnlyApprovedKey"===m;Wq(k,g,m);Xq(d);q=function(){h--;h||b()};
var r=function(){h--;h||b()};
try{Nl(f,"log_event",k,Yq(d,m,q,r,e)),Dq=!1}catch(x){wk(x),c()}}}
function Uq(a,b,c,d,e){var f=zq;d=void 0===d?{}:d;var g=Math.round(P()),h=a.size+b.size,k=new Map([].concat(ia(a),ia(b)));k=p(k);for(var m=k.next();!m.done;m=k.next()){var q=p(m.value).next().value,r=a.get(q),x=b.get(q)||[];m=new Lj;var u=Dl(f.config_||xl());G(m,Qi,1,u);r=r?Zq(r):[];r=p(r);for(u=r.next();!u.done;u=r.next())Wd(m,3,Fj,u.value);x=p(x);for(r=x.next();!r.done;r=x.next())Wd(m,3,Fj,r.value);(x=Iq[q])&&$q(m,q,x);delete Iq[q];q="visitorOnlyApprovedKey"===q;ar(m,g,q);Xq(d);m=Zd(m);q=Yq(d,q,
function(){vq.ytExports.logging.transport.leaderQueueLength=0;h--;h||c()},function(){vq.ytExports.logging.transport.leaderQueueLength=0;
h--;h||c()},e);
q.headers={"Content-Type":"application/json+protobuf"};q.postBodyFormat="JSPB";q.postBody=m;Nl(f,"log_event","",q);Dq=!1}}
function Xq(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function Yq(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Wb:a,Fa:b,iq:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Wq(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=br(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ar(a,b,c){E(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=br();var d=new Ij;E(d,1,b);E(d,2,c);G(a,Ij,5,d)}}
function br(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*xq/2));a++;a>xq&&(a=1);nk("BATCH_CLIENT_COUNTER",a);return a}
function Vq(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function $q(a,b,c){if(Ld(c,1===Qd(c,Kj)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,Jj,4,c);a=Rd(a,Qi,1)||new Qi;c=Rd(a,Oi,3)||new Oi;var e=new Ni;e.setToken(b);E(e,1,d);Wd(c,12,Ni,e);G(a,Oi,3,c)}
function Zq(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Fj(a[c]))}catch(d){wk(new R("Transport failed to deserialize "+String(a[c])))}return b}
function Mq(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);z("yt.logging.transport.scrapedPayloadsForTesting",c)}}
;var cr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",cr);
function dr(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(gp[a]||fp[a])return}else if(M("lr_drop_other_payloads")&&gp[a])return;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=kq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.ba&&(a=e.context,b=d.ba,b={index:er(b),groupKey:b},a.sequence=b,d.Ob&&delete cr[d.ba]);(d.fc?Rq:Lq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
Fa:d.Fa},c)}
function fr(a){Kq(void 0,void 0,void 0===a?!1:a)}
function er(a){cr[a]=a in cr?cr[a]+1:0;return cr[a]}
;var gr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",gr);function hr(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());E(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=kq();d=new Ej;E(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.ba){e=c.ba;var f=er(e),g=new Dj;E(g,2,f);E(g,1,e);G(d,Dj,3,g);c.Ob&&delete gr[c.ba]}G(a,Ej,33,d);(c.fc?Tq:Pq)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,Fa:c.Fa},b)}
;function ir(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);hr(a,c?null:ep,b)}
;function jr(a,b){var c=new Fj;Ud(c,sj,72,Gj,a);ir(c,b)}
function kr(a,b,c){var d=new Fj;Ud(d,rj,73,Gj,a);c?hr(d,c,b):ir(d,b)}
function lr(a,b,c){var d=new Fj;Ud(d,qj,78,Gj,a);c?hr(d,c,b):ir(d,b)}
function mr(a,b,c){var d=new Fj;Ud(d,tj,208,Gj,a);c?hr(d,c,b):ir(d,b)}
function nr(a,b,c){var d=new Fj;Ud(d,jj,156,Gj,a);c?hr(d,c,b):ir(d,b)}
function or(a,b,c){var d=new Fj;Ud(d,nj,215,Gj,a);c?hr(d,c,b):ir(d,b)}
function pr(a,b,c){var d=new Fj;Ud(d,fj,111,Gj,a);c?hr(d,c,b):ir(d,b)}
;function dm(a,b,c){c=void 0===c?{}:c;var d=ep;L("ytLoggingEventsDefaultDisabled",!1)&&ep==ep&&(d=null);dr(a,b,d,c)}
;var qr=[{ub:function(a){return"Cannot read property '"+a.key+"'"},
bb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ub:function(a){return"Cannot call '"+a.key+"'"},
bb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{ub:function(a){return a.key+" is not defined"},
bb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var sr={ma:[],la:[{callback:rr,weight:500}]};function rr(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function tr(){this.la=[];this.ma=[]}
var ur;function vr(){if(!ur){var a=ur=new tr;a.ma.length=0;a.la.length=0;sr.ma&&a.ma.push.apply(a.ma,sr.ma);sr.la&&a.la.push.apply(a.la,sr.la)}return ur}
;var wr=new K;function xr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=yr(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=yr(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=yr(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function yr(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function zr(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ar(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=xr(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Ar(e+".ve",f,g,h):0;d+=g;d+=Ar(e,a[e],b,c);if(500<d)break}}else c[b]=Br(a),d+=c[b].length;else c[b]=Br(a),d+=c[b].length;return d}
function Ar(a,b,c,d){c+="."+a;a=Br(b);d[c]=a;return c.length+a.length}
function Br(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Cr=new Set,Dr=0,Er=0,Fr=0,Gr=[],Hr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function cm(a){Ir(a)}
function Jr(a){Ir(a,"WARNING")}
function Ir(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Dr)){var m=Gr,q=pe(a),r=q.message||"Unknown Error",x=q.name||"UnknownError",u=q.stack||a.j||"Not available";if(u.startsWith(x+": "+r)){var A=u.split("\n");A.shift();u=A.join("\n")}var D=q.lineNumber||"Not available",F=q.fileName||"Not available",N=u,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var Q=0;Q<a.args.length&&!(O=zr(a.args[Q],"params."+Q,g,O),500<=O);Q++);else if(a.hasOwnProperty("params")&&
a.params){var ba=a.params;if("object"===typeof a.params)for(var ca in ba){if(ba[ca]){var V="params."+ca,Ua=Br(ba[ca]);g[V]=Ua;O+=V.length+Ua.length;if(500<O)break}}else g.params=Br(ba)}if(m.length)for(var za=0;za<m.length&&!(O=zr(m[za],"params.context."+za,g,O),500<=O);za++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var H={message:r,name:x,lineNumber:D,fileName:F,stack:N,params:g,sampleWeight:1},Fa=Number(a.columnNumber);isNaN(Fa)||(H.lineNumber=H.lineNumber+
":"+Fa);if("IGNORED"===a.level)var ya=0;else a:{for(var jp=vr(),kp=p(jp.ma),Nj=kp.next();!Nj.done;Nj=kp.next()){var lp=Nj.value;if(H.message&&H.message.match(lp.qq)){ya=lp.weight;break a}}for(var mp=p(jp.la),Oj=mp.next();!Oj.done;Oj=mp.next()){var np=Oj.value;if(np.callback(H)){ya=np.weight;break a}}ya=1}H.sampleWeight=ya;for(var op=p(qr),Pj=op.next();!Pj.done;Pj=op.next()){var Qj=Pj.value;if(Qj.bb[H.name])for(var pp=p(Qj.bb[H.name]),Rj=pp.next();!Rj.done;Rj=pp.next()){var qp=Rj.value,Fg=H.message.match(qp.regexp);
if(Fg){H.params["params.error.original"]=Fg[0];for(var Sj=qp.groups,rp={},pd=0;pd<Sj.length;pd++)rp[Sj[pd]]=Fg[pd+1],H.params["params.error."+Sj[pd]]=Fg[pd+1];H.message=Qj.ub(rp);break}}}H.params||(H.params={});var sp=vr();H.params["params.errorServiceSignature"]="msg="+sp.ma.length+"&cb="+sp.la.length;H.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(H.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(H.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(H);if(0!==H.sampleWeight&&!Cr.has(H.message)){if("ERROR"===h){wr.oa("handleError",H);if(M("record_app_crashed_web")&&0===Fr&&1===H.sampleWeight)if(Fr++,M("errors_via_jspb")){var Tj=new cj;E(Tj,1,1);if(!M("report_client_error_with_app_crash_ks")){var tp=new Yi;E(tp,1,H.message);var up=new Zi;G(up,Yi,3,tp);var vp=new $i;G(vp,Zi,5,up);var wp=new aj;G(wp,$i,9,vp);G(Tj,aj,4,wp)}var xp=new Fj;Ud(xp,cj,20,
Gj,Tj);ir(xp)}else{var yp={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(yp.systemHealth={crashData:{clientError:{logMessage:{message:H.message}}}});dm("appCrashed",yp)}Er++}else"WARNING"===h&&wr.oa("handleWarning",H);if(M("kevlar_gel_error_routing"))a:{var ue=h;if(M("errors_via_jspb")){if(Kr())var Ap=void 0;else{var qd=new Vi;E(qd,1,H.stack);H.fileName&&E(qd,4,H.fileName);var zb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==zb.length&&(1!==
zb.length||isNaN(Number(zb[0]))?2!==zb.length||isNaN(Number(zb[0]))||isNaN(Number(zb[1]))||(E(qd,2,Number(zb[0])),E(qd,3,Number(zb[1]))):E(qd,2,Number(zb[0])));var uc=new Yi;E(uc,1,H.message);E(uc,3,H.name);E(uc,6,H.sampleWeight);"ERROR"===ue?E(uc,2,2):"WARNING"===ue?E(uc,2,1):E(uc,2,0);var Uj=new Wi;E(Uj,1,!0);Ud(Uj,Vi,3,Xi,qd);var Wb=new Si;E(Wb,3,window.location.href);for(var Bp=L("FEXP_EXPERIMENTS",[]),Vj=0;Vj<Bp.length;Vj++){var vv=Bp[Vj];xd(Wb);Md(Wb,5).push(vv)}var Wj=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!ok()&&Wj)for(var Cp=p(Object.keys(Wj)),vc=Cp.next();!vc.done;vc=Cp.next()){var Dp=vc.value,Xj=new Ui;E(Xj,1,Dp);Xj.setValue(String(Wj[Dp]));Wd(Wb,4,Ui,Xj)}var Yj=H.params;if(Yj){var Ep=p(Object.keys(Yj));for(vc=Ep.next();!vc.done;vc=Ep.next()){var Fp=vc.value,Zj=new Ui;E(Zj,1,"client."+Fp);Zj.setValue(String(Yj[Fp]));Wd(Wb,4,Ui,Zj)}}var Gp=L("SERVER_NAME"),Hp=L("SERVER_VERSION");if(Gp&&Hp){var ak=new Ui;E(ak,1,"server.name");ak.setValue(Gp);Wd(Wb,4,Ui,ak);var bk=new Ui;E(bk,1,"server.version");
bk.setValue(Hp);Wd(Wb,4,Ui,bk)}var Gg=new Zi;G(Gg,Si,1,Wb);G(Gg,Wi,2,Uj);G(Gg,Yi,3,uc);Ap=Gg}var Ip=Ap;if(!Ip)break a;var Jp=new Fj;Ud(Jp,Zi,163,Gj,Ip);ir(Jp)}else{if(Kr())var Kp=void 0;else{var ve={stackTrace:H.stack};H.fileName&&(ve.filename=H.fileName);var Ab=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Ab.length&&(1!==Ab.length||isNaN(Number(Ab[0]))?2!==Ab.length||isNaN(Number(Ab[0]))||isNaN(Number(Ab[1]))||(ve.lineNumber=Number(Ab[0]),ve.columnNumber=Number(Ab[1])):ve.lineNumber=
Number(Ab[0]));var ck={level:"ERROR_LEVEL_UNKNOWN",message:H.message,errorClassName:H.name,sampleWeight:H.sampleWeight};"ERROR"===ue?ck.level="ERROR_LEVEL_ERROR":"WARNING"===ue&&(ck.level="ERROR_LEVEL_WARNNING");var wv={isObfuscated:!0,browserStackInfo:ve},rd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(rd.experimentIds=L("FEXP_EXPERIMENTS"));var dk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!ok()&&dk)for(var Lp=p(Object.keys(dk)),wc=Lp.next();!wc.done;wc=Lp.next()){var Mp=
wc.value;rd.kvPairs.push({key:Mp,value:String(dk[Mp])})}var ek=H.params;if(ek){var Np=p(Object.keys(ek));for(wc=Np.next();!wc.done;wc=Np.next()){var Op=wc.value;rd.kvPairs.push({key:"client."+Op,value:String(ek[Op])})}}var Pp=L("SERVER_NAME"),Qp=L("SERVER_VERSION");Pp&&Qp&&(rd.kvPairs.push({key:"server.name",value:Pp}),rd.kvPairs.push({key:"server.version",value:Qp}));Kp={errorMetadata:rd,stackTrace:wv,logMessage:ck}}var Rp=Kp;if(!Rp)break a;dm("clientError",Rp)}if("ERROR"===ue||M("errors_flush_gel_always_killswitch"))b:{if(M("web_fp_via_jspb")&&
(fr(!0),!M("web_fp_via_jspb_and_json")))break b;fr()}}if(!M("suppress_error_204_logging")){var we=H.params||{},Xb={urlParams:{a:"logerror",t:"jserror",type:H.name,msg:H.message.substr(0,250),line:H.lineNumber,level:h,"client.name":we.name},postParams:{url:L("PAGE_NAME",window.location.href),file:H.fileName},method:"POST"};we.version&&(Xb["client.version"]=we.version);if(Xb.postParams){H.stack&&(Xb.postParams.stack=H.stack);for(var Sp=p(Object.keys(we)),fk=Sp.next();!fk.done;fk=Sp.next()){var Tp=fk.value;
Xb.postParams["client."+Tp]=we[Tp]}var gk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(gk)for(var Up=p(Object.keys(gk)),hk=Up.next();!hk.done;hk=Up.next()){var Vp=hk.value;Xb.postParams[Vp]=gk[Vp]}var Wp=L("SERVER_NAME"),Xp=L("SERVER_VERSION");Wp&&Xp&&(Xb.postParams["server.name"]=Wp,Xb.postParams["server.version"]=Xp)}Xk(L("ECATCHER_REPORT_HOST","")+"/error_204",Xb)}try{Cr.add(H.message)}catch(Vw){}Dr++}}}}
function Kr(){for(var a=p(Hr),b=a.next();!b.done;b=a.next())if(Vl(b.value.toLowerCase()))return!0;return!1}
function Lr(a){var b=Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ia(b))}
;function Mr(){this.register=new Map}
function Nr(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.tq("ABORTED")}
Mr.prototype.clear=function(){Nr(this);this.register.clear()};
var Or=new Mr;var Pr=Date.now().toString();
function Qr(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Pr)for(a=1,b=0;b<Pr.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Pr.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Rr=y.ytLoggingDocDocumentNonce_;Rr||(Rr=Qr(),z("ytLoggingDocDocumentNonce_",Rr));var Sr=Rr;var Tr={xh:0,je:1,te:2,pl:3,zh:4,Cp:5,fm:6,Ln:7,fn:8,zn:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function Ur(a){this.i=a}
function Vr(a){return new Ur({trackingParams:a})}
Ur.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
Ur.prototype.getAsJspb=function(){var a=new ej;void 0!==this.i.trackingParams?E(a,1,this.i.trackingParams):(void 0!==this.i.veType&&E(a,2,this.i.veType),void 0!==this.i.veCounter&&E(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&E(a,3,this.i.elementIndex));if(void 0!==this.i.dataElement){var b=this.i.dataElement.getAsJspb();G(a,ej,7,b)}void 0!==this.i.youtubeData&&G(a,Ci,8,this.i.jspbYoutubeData);return a};
Ur.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Ur.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};function Wr(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Xr(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Yr(a){return L(Xr(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",Yr);function Zr(a){return(a=Yr(void 0===a?0:a))?new Ur({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function $r(){var a=L("csn-to-ctt-auth-info");a||(a={},nk("csn-to-ctt-auth-info",a));return a}
function as(a){a=L(Wr(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",as);function bs(a,b,c){var d=$r();(c=as(c))&&delete d[c];b&&(d[a]=b)}
function cs(a){return $r()[a]}
z("yt_logging_screen.getCttAuthInfo",cs);
function ds(a,b,c,d){c=void 0===c?0:c;if(a!==L(Wr(c))||b!==L(Xr(c)))if(bs(a,d,c),nk(Wr(c),a),nk(Xr(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new fj;E(e,1,Sr);E(e,2,a);M("use_default_heartbeat_client")?pr(e):pr(e,void 0,ep)}else e={clientDocumentNonce:Sr,clientScreenNonce:a},M("use_default_heartbeat_client")?dm("foregroundHeartbeatScreenAssociated",e):dr("foregroundHeartbeatScreenAssociated",e,ep)},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
z("yt_logging_screen.setCurrentScreen",ds);var es=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",es);function fs(a){ik(es,arguments)}
;var gs={ie:3611,ud:27686,vd:85013,wd:23462,yd:42016,zd:62407,Ad:26926,xd:43781,Bd:51236,Cd:79148,Dd:50160,Ed:77504,Qd:153587,Rd:87907,Sd:18630,Td:54445,Ud:80935,Vd:152172,Wd:105675,Xd:150723,Yd:37521,Zd:147285,ae:47786,be:98349,ce:123695,de:6827,ee:29434,ge:7282,he:124448,le:32276,ke:76278,me:147868,ne:147869,oe:93911,pe:106531,qe:27259,re:27262,se:27263,ue:21759,we:27107,xe:62936,ye:49568,ze:38408,Ae:80637,Be:68727,Ce:68728,De:80353,Ee:80356,Fe:74610,Ge:45707,He:83962,Ie:83970,Je:46713,Ke:89711,
Le:74612,Me:93265,Ne:74611,Oe:131380,Qe:128979,Re:139311,Se:128978,Pe:131391,Te:105350,Ve:139312,We:134800,Ue:131392,Ye:113533,Ze:93252,af:99357,cf:94521,df:114252,ef:113532,ff:94522,bf:94583,gf:88E3,hf:139580,jf:93253,kf:93254,lf:94387,mf:94388,nf:93255,pf:97424,Xe:72502,qf:110111,rf:76019,tf:117092,uf:117093,sf:89431,vf:110466,wf:77240,xf:60508,yf:148123,zf:148124,Af:137401,Bf:137402,Cf:137046,Df:73393,Ef:113534,Ff:92098,Gf:131381,Hf:84517,If:83759,Jf:80357,Kf:86113,Lf:72598,Mf:72733,Nf:107349,
Of:124275,Pf:118203,Qf:133275,Rf:152569,Sf:133274,Tf:133272,Uf:133273,Vf:133276,Wf:144507,Xf:143247,Yf:143248,Zf:143249,ag:143250,cg:143251,dg:144401,fg:117431,eg:133797,gg:153964,hg:128572,ig:133405,jg:117429,kg:117430,lg:117432,mg:120080,ng:117259,og:121692,pg:145656,qg:145655,rg:145653,sg:145654,tg:145657,ug:132972,vg:133051,wg:133658,xg:132971,yg:97615,Ag:143359,zg:143356,Cg:143361,Bg:143358,Eg:143360,Dg:143357,Fg:142303,Gg:143353,Hg:143354,Ig:144479,Jg:143355,Kg:31402,Mg:133624,Ng:146477,Og:133623,
Pg:133622,Lg:133621,Qg:84774,Rg:95117,Sg:150497,Tg:98930,Ug:98931,Vg:98932,Wg:43347,Xg:129889,Yg:149123,Zg:45474,ah:100352,bh:84758,dh:98443,eh:117985,fh:74613,gh:74614,hh:64502,ih:136032,jh:74615,kh:74616,lh:122224,mh:74617,nh:77820,oh:74618,ph:93278,qh:93274,rh:93275,sh:93276,th:22110,uh:29433,vh:133798,wh:132295,yh:120541,Ah:82047,Bh:113550,Ch:75836,Dh:75837,Eh:42352,Fh:84512,Gh:76065,Hh:75989,Mh:16623,Nh:32594,Oh:27240,Ph:32633,Qh:74858,Sh:3945,Rh:16989,Th:45520,Uh:25488,Vh:25492,Wh:25494,Xh:55760,
Yh:14057,Zh:18451,ai:57204,bi:57203,ci:17897,di:57205,fi:18198,gi:17898,hi:17909,ii:43980,ji:46220,ki:11721,li:147994,mi:49954,ni:96369,oi:3854,ri:151633,si:56251,ti:25624,vi:152036,Mi:16906,Ni:99999,Oi:68172,Pi:27068,Qi:47973,Ri:72773,Si:26970,Ti:26971,Ui:96805,Vi:17752,Wi:73233,Xi:109512,Yi:22256,Zi:14115,aj:22696,bj:89278,cj:89277,dj:109513,ej:43278,fj:43459,gj:43464,hj:89279,ij:43717,jj:55764,kj:22255,lj:147912,mj:89281,nj:40963,oj:43277,pj:43442,qj:91824,rj:120137,sj:96367,tj:36850,uj:72694,
vj:37414,wj:36851,yj:124863,xj:121343,zj:73491,Aj:54473,Bj:43375,Cj:46674,Dj:143815,Ej:139095,Fj:144402,Gj:149968,Hj:149969,Ij:32473,Jj:72901,Kj:72906,Lj:50947,Mj:50612,Nj:50613,Oj:50942,Pj:84938,Qj:84943,Rj:84939,Sj:84941,Tj:84944,Uj:84940,Vj:84942,Wj:35585,Xj:51926,Yj:79983,Zj:63238,ak:18921,bk:63241,ck:57893,dk:41182,ek:135732,fk:33424,gk:22207,hk:42993,ik:36229,jk:22206,kk:22205,lk:18993,mk:19001,nk:18990,pk:18991,qk:18997,rk:18725,sk:19003,tk:36874,uk:44763,vk:33427,wk:67793,xk:22182,yk:37091,
zk:34650,Ak:50617,Bk:47261,Ck:22287,Dk:25144,Ek:97917,Fk:62397,Gk:150871,Hk:150874,Ik:125598,Jk:137935,Kk:36961,Lk:108035,Mk:27426,Nk:27857,Ok:27846,Pk:27854,Qk:69692,Rk:61411,Sk:39299,Tk:38696,Uk:62520,Vk:36382,Wk:108701,Xk:50663,Yk:36387,Zk:14908,al:37533,bl:105443,dl:61635,fl:62274,il:133818,jl:65702,kl:65703,ll:65701,ml:76256,nl:37671,ol:49953,ql:36216,rl:28237,sl:39553,ul:29222,vl:26107,wl:38050,xl:26108,zl:120745,yl:26109,Al:26110,Bl:66881,Cl:28236,Dl:14586,El:57929,Fl:74723,Gl:44098,Hl:44099,
Kl:23528,Ll:61699,Il:134104,Jl:134103,Ml:59149,Nl:101951,Ol:97346,Pl:118051,Ql:95102,Rl:64882,Sl:119505,Tl:63595,Ul:63349,Vl:95101,Wl:75240,Xl:27039,Yl:68823,Zl:21537,am:83464,bm:75707,cm:83113,dm:101952,em:101953,gm:79610,hm:125755,im:24402,jm:24400,km:32925,lm:57173,mm:122502,nm:145268,om:138480,pm:64423,qm:64424,rm:33986,sm:100828,tm:129089,um:21409,ym:135155,zm:135156,Am:135157,Bm:135158,Cm:135159,Dm:135160,Em:135161,Fm:135162,Gm:135163,Hm:135164,Im:135165,Jm:135166,vm:11070,wm:11074,xm:17880,
Km:14001,Mm:30709,Nm:30707,Om:30711,Pm:30710,Qm:30708,Lm:26984,Rm:146143,Sm:63648,Tm:63649,Um:51879,Vm:111059,Wm:5754,Xm:20445,Ym:151308,Zm:151152,bn:130975,an:130976,cn:110386,dn:113746,en:66557,gn:17310,hn:28631,jn:21589,kn:154946,ln:68012,mn:60480,nn:138664,pn:141121,qn:31571,rn:141978,sn:150105,tn:150106,un:150107,vn:150108,wn:76980,xn:41577,yn:45469,An:38669,Bn:13768,Cn:13777,Dn:141842,En:62985,Fn:4724,Gn:59369,Hn:43927,In:43928,Jn:12924,Kn:100355,Nn:56219,On:27669,Pn:10337,Mn:47896,Qn:122629,
Sn:139723,Rn:139722,Tn:121258,Un:107598,Vn:127991,Wn:96639,Xn:107536,Yn:130169,Zn:96661,ao:145188,bo:96658,co:116646,eo:121122,fo:96660,ho:127738,jo:127083,ko:147842,lo:104443,mo:96659,no:147595,oo:106442,po:134840,qo:63667,ro:63668,so:63669,to:130686,uo:147036,vo:78314,wo:147799,xo:148649,yo:55761,zo:127098,Ao:134841,Bo:96368,Co:67374,Do:48992,Eo:146176,Fo:49956,Go:31961,Ho:26388,Io:23811,Jo:5E4,Ko:126250,Lo:96370,Mo:47355,No:47356,Oo:37935,Po:45521,Qo:21760,Ro:83769,So:49977,To:49974,Uo:93497,Vo:93498,
Wo:34325,Xo:140759,Yo:115803,Zo:123707,ap:100081,bp:35309,cp:68314,ep:25602,fp:100339,gp:143516,hp:59018,ip:18248,jp:50625,kp:9729,lp:37168,mp:37169,np:21667,qp:16749,rp:18635,sp:39305,tp:18046,up:53969,vp:8213,wp:93926,xp:102852,yp:110099,zp:22678,Ap:69076,Bp:137575,Dp:139224,Ep:100856,Fp:154430,Gp:17736,Hp:3832,Ip:147111,Jp:55759,Kp:64031,Qp:93044,Rp:93045,Sp:34388,Tp:17657,Up:17655,Vp:39579,Wp:39578,Xp:77448,Yp:8196,Zp:11357,aq:69877,bq:8197,cq:82039};function hs(){var a=tb(is),b;return(new qf(function(c,d){a.onSuccess=function(e){Pk(e)?c(new js(e)):d(new ks("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new ks("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new ks("Request timed out","net.timeout",e))};
b=Xk("//web.archive.org/web/20220623202258/https://googleads.g.doubleclick.net/pagead/id",a)})).gb(function(c){c instanceof xf&&b.abort();
return vf(c)})}
function ks(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
t(ks,ab);function js(a){this.xhr=a}
;function ls(){this.i=0;this.ja=null}
ls.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.ja))&&"function"===typeof a.then?a:ms(a):2===this.i&&b?(a=b.call(c,this.ja))&&"function"===typeof a.then?a:ns(a):this};
ls.prototype.getValue=function(){return this.ja};
ls.prototype.$goog_Thenable=!0;function ns(a){var b=new ls;a=void 0===a?null:a;b.i=2;b.ja=void 0===a?null:a;return b}
function ms(a){var b=new ls;a=void 0===a?null:a;b.i=1;b.ja=void 0===a?null:a;return b}
;function os(a,b){return{method:void 0===b?"POST":b,mode:Kk(a)?"same-origin":"cors",credentials:Kk(a)?"same-origin":"include"}}
;function ps(){if(kg()||Ul&&Vl("applewebkit")&&!Vl("version")&&(!Vl("safari")||Vl("gsa/"))||Oc&&Vl("version/"))return!0;if(M("enable_web_eom_visitor_data"))return L("EOM_VISITOR_DATA")?!1:!0;var a=L("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=hl("CONSENT"))?a.startsWith("YES+"):!0}
;function qs(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in Oh)if(Oh[c]==b.embeddedPlayerMode){b=Oh[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function rs(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ss;this.isTimeout=a instanceof ks&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof xf}
t(rs,ab);rs.prototype.name="BiscottiError";function ss(){ab.call(this,"Biscotti ID is missing from server")}
t(ss,ab);ss.prototype.name="BiscottiMissingError";var is={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ts=null;
function zk(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return vf(Error("Biscotti id fetching has been disabled entirely."));if(!ps())return vf(Error("User has not consented - not fetching biscotti id."));var a=L("PLAYER_VARS",{});if("1"==rb(a))return vf(Error("Biscotti ID is not available in private embed mode"));if(M("embeds_web_disable_ads_for_pfl")&&qs(a))return vf(Error("Biscotti id fetching has been disabled for pfl."));ts||(ts=hs().then(us).gb(function(b){return vs(2,b)}));
return ts}
function us(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ss;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ss;a=a.id;Ak(a);ts=ms(a);ws(18E5,2);return a}
function vs(a,b){b=new rs(b);Ak("");ts=ns(b);0<a&&ws(12E4,a-1);throw b;}
function ws(a,b){Qk(function(){hs().then(us,function(c){return vs(b,c)}).gb(cb)},a)}
function xs(){try{var a=B("yt.ads.biscotti.getId_");return a?a():zk()}catch(b){return vf(b)}}
;function ys(a){if("1"!=rb(L("PLAYER_VARS",{}))){a&&yk();try{xs().then(function(){},function(){}),Qk(ys,18E5)}catch(b){wk(b)}}}
;function zs(){this.ld=!0}
function As(a){var b={},c=mg([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in mk||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in mk&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var Bs=Symbol("injectionDeps");function Cs(a){this.name=a}
Cs.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ds(){this.key=Es}
function Fs(){this.providers=new Map;this.i=new Map}
Fs.prototype.resolve=function(a){return a instanceof Ds?Gs(this,a.key,[],!0):Gs(this,a,[])};
function Gs(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.td)var e=d.td;else if(d.sd)e=d[Bs]?Hs(a,d[Bs],c):[],e=d.sd.apply(d,ia(e));else if(d.lc){e=d.lc;var f=e[Bs]?Hs(a,e[Bs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.zq||a.i.set(b,e);
return e}
function Hs(a,b,c){return b?b.map(function(d){return d instanceof Ds?Gs(a,d.key,c,!0):Gs(a,d,c)}):[]}
;var Is;var Js={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Ks=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ls(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;kc(lc(5,a));try{var b=Ik(a).theme;return Ks.get(b)||null}catch(c){}return null}
;function Ms(){this.i={};if(this.j=il()){var a=hl("CONSISTENCY");a&&Ns(this,{encryptedTokenJarContents:a})}}
Ms.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.ga.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.i[c.value.encryptedTokenJarContents];Ns(this,a)}};
function Ns(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.j&&gl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Os=window.location.hostname.split(".").slice(-2).join(".");function Ps(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.i=Qs(this))&&(a=this.i.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)}
var Rs;Ps.getInstance=function(){Rs=B("yt.clientLocationService.instance");Rs||(Rs=new Ps,z("yt.clientLocationService.instance",Rs));return Rs};
Ps.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.j?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.j.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.j.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.j.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Ps.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.j=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.i=Qs(this))&&this.i.set("yt-location-playability-token",a,15552E3):gl("YT_CL",JSON.stringify({loctok:a}),15552E3,Os,!0))};
function Qs(a){return void 0===a.i?new Gl("yt-client-location"):a.i}
Ps.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!M("web_enable_browser_geolocation_api")&&!M("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;M("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.j=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Ps.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Ss(a,b){var c;if((null==(c=a.signalServiceEndpoint)?0:c.signal)&&b.La&&(c=b.La[a.signalServiceEndpoint.signal]))return c();var d;if((null==(d=a.continuationCommand)?0:d.request)&&b.zc&&(d=b.zc[a.continuationCommand.request]))return d();for(var e in a)if(b.Kb[e]&&(a=b.Kb[e]))return a()}
;function Ts(a){return function(){return new a}}
;var Us={},Vs=(Us.WEB_UNPLUGGED="^unplugged/",Us.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Us.WEB_UNPLUGGED_OPS="^unplugged/",Us.WEB_UNPLUGGED_PUBLIC="^unplugged/",Us.WEB_CREATOR="^creator/",Us.WEB_KIDS="^kids/",Us.WEB_EXPERIMENTS="^experiments/",Us.WEB_MUSIC="^music/",Us.WEB_REMIX="^music/",Us.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Us.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Us);
function Ws(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Vs[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Vs).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Xs(){}
Xs.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Js:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=ub(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;kl.getInstance();var m="USER_INTERFACE_THEME_LIGHT";nl(165)?m="USER_INTERFACE_THEME_DARK":nl(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Ls()||m;h.userInterfaceTheme=k;if(!f){if(k=
ul())h.connectionType=k;M("web_log_effective_connection_type")&&(k=vl())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=y.navigator)?0:q.deviceMemory)){var r;q=null==(r=y.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}r=Ik(y.location.href);!M("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
el.i&&(r=el.i,h.mainAppWebInfo.pwaInstallabilityStatus=!r.i&&r.j?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=fl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(r=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:r}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var x=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Ua){}x=void 0}x&&(h.timeZone=x)}(x=rk())?h.experimentsToken=x:delete h.experimentsToken;x=sk();Ms.i||(Ms.i=new Ms);h=Ms.i.i;r=[];q=0;for(var u in h)r[q++]=h[u];g.request=Object.assign({},g.request,{internalExperimentFlags:x,consistencyTokenJars:r});!M("web_prequest_context_killswitch")&&(u=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=u);x=kl.getInstance();u=nl(58);x=x.get("gsml","");g.user=Object.assign({},g.user);u&&(g.user.enableSafetyMode=u);x&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=as())&&(g.clientScreenNonce=f):!f&&(f=as())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&Ps.getInstance().setLocationOnInnerTubeContext(g);try{var A=Lk(),D=A.bid;delete A.bid;
g.adSignalsInfo={params:[],bid:D};var F=p(Object.entries(A));for(var N=F.next();!N.done;N=F.next()){var O=p(N.value),Q=O.next().value,ba=O.next().value;A=Q;D=ba;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:A,value:""+D})}}catch(Ua){Ir(Ua)}F=g}else Ir(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(N=this.i(a)){this.j(F,N,b);var ca;b="/youtubei/v1/"+Ws(this.l());var V;(N=null==(ca=a.commandMetadata)?void 0:null==(V=ca.webCommandMetadata)?void 0:V.apiUrl)&&
(b=N);ca=b;(V=L("INNERTUBE_HOST_OVERRIDE"))&&(ca=String(V)+String(nc(ca)));V={};V.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(V.prettyPrint="false");ca=Jk(ca,V||{},!1);a=M("kevlar_response_command_processor_page")?Object.assign({},{command:a},void 0):Object.assign({},void 0);a={input:ca,Ba:os(ca),ga:F,config:a};a.config.Ra?a.config.Ra.identity=c:a.config.Ra={identity:c};return a}Ir(new R("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(Xs.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Ys(){}
t(Ys,Xs);Ys.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",Ba:os("/getDatasyncIdsEndpoint","GET"),ga:{}}};
Ys.prototype.l=function(){return[]};
Ys.prototype.i=function(){};
Ys.prototype.j=function(){};var Zs={},$s=(Zs.GET_DATASYNC_IDS=Ts(Ys),Zs);function at(a){var b=Ja.apply(1,arguments);if(!bt(a)||b.some(function(d){return!bt(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())ct(a,c.value);return a}
function ct(a,b){for(var c in b)if(bt(b[c])){if(c in a&&!bt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});ct(a[c],b[c])}else if(dt(b[c])){if(c in a&&!dt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);et(a[c],b[c])}else a[c]=b[c];return a}
function et(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,bt(c)?a.push(ct({},c)):dt(c)?a.push(et([],c)):a.push(c);return a}
function bt(a){return"object"===typeof a&&!Array.isArray(a)}
function dt(a){return"object"===typeof a&&Array.isArray(a)}
;function ft(a,b){Ln.call(this,1,arguments);this.timer=b}
t(ft,Ln);var gt=new Mn("aft-recorded",ft);var ht=window;function jt(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=ht.performance||ht.mozPerformance||ht.msPerformance||ht.webkitPerformance||new jt;var kt=!1,lt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Xa(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||cb,S);function mt(a){var b=nt(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function ot(){var a;if(M("csi_use_performance_navigation_timing")||M("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==S?void 0:null==(a=S.getEntriesByType)?void 0:null==(b=a.call(S,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=pt(e.requestStart),e.responseEnd=pt(e.responseEnd),e.redirectStart=pt(e.redirectStart),e.redirectEnd=pt(e.redirectEnd),e.domainLookupEnd=pt(e.domainLookupEnd),e.connectStart=pt(e.connectStart),e.connectEnd=
pt(e.connectEnd),e.responseStart=pt(e.responseStart),e.secureConnectionStart=pt(e.secureConnectionStart),e.domainLookupStart=pt(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function qt(){return(M("csi_use_time_origin")||M("csi_use_time_origin_tvhtml5"))&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function pt(a){return Math.round(qt()+a)}
function rt(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function st(a){a=rt(a);a.info||(a.info={});return a.info}
function nt(a){a=rt(a);a.tick||(a.tick={});return a.tick}
function tt(a){a=rt(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function ut(a){a=tt(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function vt(a){var b=rt(a).nonce;b||(b=Qr(),rt(a).nonce=b);return b}
function wt(a){var b=nt(a||""),c=mt(a);c&&!kt&&(Rn(gt,new ft(Math.round(c-b._start),a)),kt=!0)}
function xt(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!xt(a[d],b[d]))return!1;return!0}
;function zt(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=jb(a,function(b){return"first-paint"===b.name}))return pt(a.startTime)}a=S.timing;
return a.Pc?Math.max(0,a.Pc):0}
;function At(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function Bt(a){a=a||"";var b=B("ytcsi.reference");b||(At(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=At(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},Ct=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",
T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home="LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",
T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch=
"LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",
T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",
T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",
T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),U={},Dt=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",U.ad_at="adType",U.aida="appInstallDataAgeMs",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",U.cs="commandSource",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.ctop="creatorInfo.topEntityType",
U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid="requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid="requestIds",U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",U.nav_type="kabukiInfo.navigationType",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",
U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt="playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",
U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.rc="resourceInfo.resourceCache",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm="shellStartupDurationMs",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.aac_type="tvInfo.authAccessCredentialType",U.upg_player_vis="playerInfo.visibilityState",
U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),Et="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Ft={},Gt=(Ft.ccs="CANARY_STATE_",Ft.mver="MEASUREMENT_VERSION_",Ft.pis="PLAYER_INITIALIZED_STATE_",Ft.yt_pt="LATENCY_PLAYER_",Ft.pa="LATENCY_ACTION_",Ft.ctop="TOP_ENTITY_TYPE_",Ft.yt_vst="VIDEO_STREAM_TYPE_",Ft),Ht="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function It(a){return Ct[a]||"LATENCY_ACTION_UNKNOWN"}
function Jt(a,b,c){c=tt(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Dt){c=Dt[a];0<=eb(Et,c)&&(b=!!b);a in Gt&&"string"===typeof b&&(b=Gt[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return at({},d)}0<=eb(Ht,a)||Jr(new R("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,
LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,
LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,
LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,
LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,
LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,
LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,
LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,
LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,
LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,
LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,
LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,
LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";
W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";
W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";
W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";
W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";
W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";
W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";
W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";
W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";
W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";
W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";
W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";
W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";
W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";
W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";
W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";
W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";
W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";
W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";
W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";
W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";
W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Kt={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Kt[Kt.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Kt[Kt.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Kt[Kt.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Lt={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Lt[Lt.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Lt[Lt.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Lt[Lt.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Lt[Lt.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Lt[Lt.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Lt[Lt.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Lt[Lt.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Lt[Lt.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Mt={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Mt[Mt.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Mt[Mt.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Mt[Mt.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Mt[Mt.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Nt={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Nt[Nt.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Nt[Nt.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Ot={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Ot[Ot.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Ot[Ot.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Ot[Ot.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Ot[Ot.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Ot[Ot.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Ot[Ot.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Pt={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Pt[Pt.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Pt[Pt.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Pt[Pt.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Pt[Pt.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Qt={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Qt[Qt.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Qt[Qt.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Qt[Qt.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Rt={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Rt[Rt.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Rt[Rt.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Rt[Rt.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var St="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo prefetchInfo accelerationSession webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var Tt=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",Tt);function Ut(){this.i=0}
function Vt(){Ut.i||(Ut.i=new Ut);return Ut.i}
Ut.prototype.tick=function(a,b,c,d){Wt(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Cj,E(d,1,a),E(d,2,b),a=new Fj,Ud(a,Cj,5,Gj,d),ir(a,c)):dm("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Ut.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Wt(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,dm("latencyActionInfo",a,{cttAuthInfo:c}))};
Ut.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Wt(this,"info_"+d+"_"+b)||(E(a,2,b),b={cttAuthInfo:c},c=new Fj,Ud(c,wj,7,Gj,a),ir(c,b))};
Ut.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Wt(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,dm("latencyActionSpan",a,{cttAuthInfo:c}))};
function Wt(a,b){Tt[b]=Tt[b]||{count:0};var c=Tt[b];c.count++;c.time=P();a.i||(a.i=Pl(function(){var d=P(),e;for(e in Tt)Tt[e]&&6E4<d-Tt[e].time&&delete Tt[e];a&&(a.i=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new R("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Jr(c)),!0):!1}
;function Xt(){var a=["ol"];Bt("").info.actionType="embed";a&&nk("TIMING_AFT_KEYS",a);nk("TIMING_ACTION","embed");Yt();a=st();var b=ut();if("cold"===a.yt_lt||"cold"===b.loadType){var c=nt(),d=tt();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||Z(e,c[e]);e={};c=!1;d=p(Object.keys(a));for(var f=d.next();!f.done;f=d.next())f=f.value,(f=Jt(f,a[f]))&&!xt(ut(),f)&&(at(b,f),at(e,f),c=!0);c&&Zt(e)}z("ytglobal.timingready_",!0);a=L("TIMING_ACTION");B("ytglobal.timingready_")&&a&&"_start"in nt()&&
mt()&&wt()}
function $t(a,b,c,d){null!==b&&(st(c)[a]=b,(a=Jt(a,b,c))&&Zt(a,c,d))}
function Zt(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=Bt(b||""),at(c.info,a),at(ut(b),a),c=vt(b),b=rt(b).cttAuthInfo,Vt().info(a,c,b);else{c=new wj;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":yj(c,W[a[e]]);break;case "clientActionNonce":E(c,2,a[e]);break;case "clientScreenNonce":E(c,4,a[e]);break;case "loadType":E(c,3,a[e]);break;case "isPrewarmedLaunch":E(c,92,a[e]);break;case "isFirstInstall":E(c,55,a[e]);break;case "networkType":E(c,
5,Kt[a[e]]);break;case "connectionType":E(c,26,X[a[e]]);break;case "detailedConnectionType":E(c,27,Y[a[e]]);break;case "isVisible":E(c,6,a[e]);break;case "playerType":E(c,7,Lt[a[e]]);break;case "clientPlaybackNonce":E(c,8,a[e]);break;case "adClientPlaybackNonce":E(c,28,a[e]);break;case "previousCpn":E(c,77,a[e]);break;case "targetCpn":E(c,76,a[e]);break;case "isMonetized":E(c,9,a[e]);break;case "isPrerollAllowed":E(c,16,a[e]);break;case "isPrerollShown":E(c,17,a[e]);break;case "adType":E(c,12,a[e]);
break;case "adTypesAllowed":E(c,36,a[e]);break;case "adNetworks":E(c,37,a[e]);break;case "previousAction":E(c,13,W[a[e]]);break;case "isRedSubscriber":E(c,14,a[e]);break;case "serverTimeMs":E(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":E(c,20,a[e]);break;case "targetVideoId":E(c,78,a[e]);break;case "adBreakType":E(c,21,Mt[a[e]]);break;case "isNavigation":zj(c,a[e]);break;case "viewportHeight":E(c,29,a[e]);break;case "viewportWidth":E(c,30,a[e]);break;case "screenHeight":E(c,
84,a[e]);break;case "screenWidth":E(c,85,a[e]);break;case "browseId":E(c,31,a[e]);break;case "isCacheHit":E(c,32,a[e]);break;case "httpProtocol":E(c,33,a[e]);break;case "transportProtocol":E(c,34,a[e]);break;case "searchQuery":E(c,41,a[e]);break;case "isContinuation":E(c,42,a[e]);break;case "availableProcessors":E(c,43,a[e]);break;case "sdk":E(c,44,a[e]);break;case "isLocalStream":E(c,45,a[e]);break;case "navigationRequestedSameUrl":E(c,64,a[e]);break;case "shellStartupDurationMs":E(c,70,a[e]);break;
case "appInstallDataAgeMs":E(c,73,a[e]);break;case "latencyActionError":E(c,71,Nt[a[e]]);break;case "actionStep":E(c,79,a[e]);break;case "jsHeapSizeLimit":E(c,80,a[e]);break;case "totalJsHeapSize":E(c,81,a[e]);break;case "usedJsHeapSize":E(c,82,a[e]);break;case "sourceVideoDurationMs":E(c,90,a[e]);break;case "videoOutputFrames":E(c,93,a[e]);break;case "isResume":E(c,104,a[e]);break;case "adPrebufferedTimeSecs":E(c,39,a[e]);break;case "isLivestream":E(c,47,a[e]);break;case "liveStreamMode":E(c,91,
Ot[a[e]]);break;case "adCpn2":E(c,48,a[e]);break;case "adDaiDriftMillis":E(c,49,a[e]);break;case "videoStreamType":E(c,53,Pt[a[e]]);break;case "playbackRequiresTap":E(c,56,a[e]);break;case "performanceNavigationTiming":E(c,67,a[e]);break;case "transactionType":E(c,74,Qt[a[e]]);break;case "playerRotationType":E(c,101,Rt[a[e]]);break;case "allowedPreroll":E(c,10,a[e]);break;case "shownPreroll":E(c,11,a[e]);break;case "getHomeRequestId":E(c,57,a[e]);break;case "getSearchRequestId":E(c,60,a[e]);break;
case "getPlayerRequestId":E(c,61,a[e]);break;case "getWatchNextRequestId":E(c,62,a[e]);break;case "getBrowseRequestId":E(c,63,a[e]);break;case "getLibraryRequestId":E(c,66,a[e]);break;default:St.includes(f)&&wk(new R("Codegen laipb translator asked to translate message field",""+f))}}catch(g){wk(Error("Codegen laipb translator failed to set "+f))}}au(c,b)}}
function au(a,b){var c=tt(b);c.jspbInfos||(c.jspbInfos=[]);c.jspbInfos.push(a);Bt(b||"").jspbInfo.push(a);c=vt(b);b=rt(b).cttAuthInfo;Vt().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}d=Bt(c||"");d.tick[a]=b||P();if(d.callback&&d.callback[a]){d=p(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=tt(c);d.gelTicks&&(d.gelTicks[a]=!0);d=nt(c);e=b||P();d[a]=e;e=vt(c);var f=rt(c).cttAuthInfo;if("_start"===a){var g=Vt();Wt(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new uj,E(f,1,e),e=new Fj,Ud(e,uj,6,Gj,f),ir(e,
b)):dm("latencyActionBaselined",{clientActionNonce:e},b))}else Vt().tick(a,e,b,f);wt(c);return d[a]}
function bu(){var a=vt();requestAnimationFrame(function(){setTimeout(function(){a===vt()&&Z("ol",void 0,void 0)},0)})}
function cu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ip+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Yt(){function a(f){var g=ot(),h=qt(),k=L("CSI_START_TIMESTAMP_MILLIS",0);0<k&&!M("embeds_web_enable_csi_start_override_killswitch")&&(h=k);h&&(Z("srt",g.responseStart),1!==f.prerender&&Z("_start",h,void 0));f=zt();0<f&&Z("fpt",f);f=ot();f.isPerformanceNavigationTiming&&Zt({performanceNavigationTiming:!0});Z("nreqs",f.requestStart,void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,
void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=qt()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",f.connectEnd,void 0));S&&"getEntriesByType"in S&&du()}
var b=L("TIMING_INFO",{});if(M("web_csi_via_jspb")){b=eu(b);au(b);b=yj(zj(new wj,!0),W[It(L("TIMING_ACTION"))]);var c=L("PREVIOUS_ACTION");c&&E(b,13,W[It(c)]);(c=L("CLIENT_PROTOCOL"))&&E(b,33,c);(c=L("CLIENT_TRANSPORT"))&&E(b,34,c);(c=as())&&"UNDEFINED_CSN"!==c&&E(b,4,c);c=cu();1!==c&&-1!==c||E(b,6,!0);c=st();E(b,3,"cold");a(c);c=fu();if(0<c.length){c=p(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=new vj;E(e,1,d);Wd(b,83,vj,e)}}au(b)}else{for(c in b)b.hasOwnProperty(c)&&$t(c,b[c]);b=
{isNavigation:!0,actionType:It(L("TIMING_ACTION"))};if(c=L("PREVIOUS_ACTION"))b.previousAction=It(c);if(c=L("CLIENT_PROTOCOL"))b.httpProtocol=c;if(c=L("CLIENT_TRANSPORT"))b.transportProtocol=c;(c=as())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);c=cu();if(1===c||-1===c)b.isVisible=!0;c=st();b.loadType="cold";a(c);c=fu();if(0<c.length)for(b.resourceInfo=[],c=p(c),d=c.next();!d.done;d=c.next())b.resourceInfo.push({resourceCache:d.value});Zt(b)}}
function eu(a){var b=new wj;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "GetGuide_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "GetHome_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "GetPlayer_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "GetSearch_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;
case "GetSettings_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "GetTrending_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "GetWatchNext_rid":e=new Bj;E(e,1,c);E(e,2,String(d));Aj(b,e);break;case "yt_red":E(b,14,!!d);break;case "yt_ad":E(b,9,!!d)}}return b}
function gu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);gc()&&a.setAttribute("nonce",gc());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=qt(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function fu(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in lt)if(lt.hasOwnProperty(b)){var c=lt[b];gu(b,c)&&a.push(c)}return a}
function du(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//web.archive.org/web/20220623202258/https://fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",pt(b.startTime)),Z("wffe",pt(b.responseEnd)))}
var hu=window;hu.ytcsi&&(hu.ytcsi.info=$t,hu.ytcsi.tick=Z);var iu="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" ");function ju(a,b,c,d){this.o=a;this.M=b;this.m=c;this.l=d;this.j=void 0;this.i=new Map;a.La||(a.La={});a.La=Object.assign({},$s,a.La)}
function ku(a,b,c,d){if(void 0!==ju.i){if(d=ju.i,a=[a!==d.o,b!==d.M,c!==d.m,!1,!1,void 0!==d.j],a.some(function(e){return e}))throw new R("InnerTubeTransportService is already initialized",a);
}else ju.i=new ju(a,b,c,d)}
function lu(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Js:c;var d=Ss(b,a.o);if(!d)return vf(new R("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new qf(function(f){var g,h,k;return w(function(m){if(1==m.i){h="cors"===(null==(g=e.Ba)?void 0:g.mode)?"cors":void 0;if(a.m.ld){var q=e.config,r;q=null==q?void 0:null==(r=q.Ra)?void 0:r.sessionIndex;r=As({sessionIndex:q});k=Object.assign({},mu(h),r);return m.u(2)}return v(m,nu(e.config,
h),3)}2!=m.i&&(k=m.j);f(ou(a,e,k));m.i=0})}):vf(new R("Error: Failed to build request for command.",b))}
function ou(a,b,c){var d,e,f,g,h,k,m,q,r,x,u,A,D,F,N,O,Q,ba,ca;return w(function(V){switch(V.i){case 1:V.u(2);break;case 3:if((d=V.j)&&!d.isExpired())return V.return(Promise.resolve(d.i()));case 2:if(null==(e=b)?0:null==(f=e.ga)?0:f.context)for(g=p([]),h=g.next();!h.done;h=g.next())k=h.value,k.sq(b.ga.context);if(null==(m=a.j)?0:m.yq(b.input,b.ga))return V.return(a.j.pq(b.input,b.ga));(x=null==(r=b.config)?void 0:r.Aa)&&a.i.has(x)&&M("web_memoize_inflight_requests")?q=a.i.get(x):(u=JSON.stringify(b.ga),
b.Ba=Object.assign({},b.Ba,{headers:c}),A=Object.assign({},b.Ba),"POST"===b.Ba.method&&(A=Object.assign({},A,{body:u})),(null==(D=b.config)?0:D.Wc)&&Z(b.config.Wc),F=function(){return a.M.fetch(b.input,A,b.config)},q=F(),x&&a.i.set(x,q));
return v(V,q,4);case 4:N=V.j;x&&a.i.has(x)&&a.i.delete(x);(null==(O=b.config)?0:O.Xc)&&Z(b.config.Xc);if(N||null==(Q=a.j)||!Q.jq(b.input,b.ga)){V.u(5);break}return v(V,a.j.oq(b.input,b.ga),6);case 6:N=V.j;case 5:if(N&&a.l)for(ba=p(iu),h=ba.next();!h.done;h=ba.next())ca=h.value,a.l[ca]&&a.l[ca].handleResponse(N,b);return V.return(N)}})}
function nu(a,b){var c,d,e,f;return w(function(g){if(1==g.i){e=null==(c=a)?void 0:null==(d=c.Ra)?void 0:d.sessionIndex;var h=As({sessionIndex:e});if(!(h instanceof qf)){var k=new qf(cb);rf(k,2,h);h=k}return v(g,h,2)}f=g.j;return g.return(Promise.resolve(Object.assign({},mu(b),f)))})}
function mu(a){var b={"Content-Type":"application/json"};M("enable_web_eom_visitor_data")&&L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1));"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var pu=["share/get_web_player_share_panel"],qu=["feedback"],ru=["notification/modify_channel_preference"],su=["browse/edit_playlist"],tu=["subscription/subscribe"],uu=["subscription/unsubscribe"];function vu(){}
t(vu,Xs);vu.prototype.l=function(){return tu};
vu.prototype.i=function(a){return a.subscribeEndpoint};
vu.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(vu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function wu(){}
t(wu,Xs);wu.prototype.l=function(){return uu};
wu.prototype.i=function(a){return a.unsubscribeEndpoint};
wu.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(wu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function xu(){}
t(xu,Xs);xu.prototype.l=function(){return qu};
xu.prototype.i=function(a){return a.feedbackEndpoint};
xu.prototype.j=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(xu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function yu(){}
t(yu,Xs);yu.prototype.l=function(){return ru};
yu.prototype.i=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
yu.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function zu(){}
t(zu,Xs);zu.prototype.l=function(){return su};
zu.prototype.i=function(a){return a.playlistEditEndpoint};
zu.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Au(){}
t(Au,Xs);Au.prototype.l=function(){return pu};
Au.prototype.i=function(a){return a.webPlayerShareEntityServiceEndpoint};
Au.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Es=new Cs("NETWORK_SLI_TOKEN");function Bu(a){this.i=a}
Bu.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.i&&(d=kc(lc(5,Bc(a,"key")))||"/UNKNOWN_PATH",c.i.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Jr(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Jr(g)}))})};
Bu.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){Jr(new R("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Bu[Bs]=[new Ds];var Cu=new Cs("NETWORK_MANAGER_TOKEN");var Du;function Eu(a){Ln.call(this,1,arguments);this.csn=a}
t(Eu,Ln);var Un=new Mn("screen-created",Eu),Fu=[],Hu=Gu,Iu=0;function Ju(a,b,c,d,e,f,g){function h(){Jr(new R("newScreen() parent element does not have a VE - rootVe",b))}
var k=Hu();f=new Ur({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,ba:k};if(M("il_via_jspb")){var m=new jj;m.V(k);kj(m,f.getAsJspb());c&&c.visualElement?(f=new lj,c.clientScreenNonce&&E(f,2,c.clientScreenNonce),mj(f,c.visualElement.getAsJspb()),g&&E(f,4,Hj[g]),G(m,lj,5,f)):c&&h();d&&E(m,3,d);nr(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=
g)):c&&h(),d&&(f.cloneCsn=d),a?dr("screenCreated",f,a,e):dm("screenCreated",f,e);Rn(Un,new Eu(k));return k}
function Ku(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:cs(b),
ba:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(pb(g)||!g.trackingParams&&!g.veType)&&Jr(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new nj;h.V(b);pj(h,c.getAsJspb());hb(e,function(k){k=k.getAsJspb();Wd(h,3,ej,k)});
"UNDEFINED_CSN"==b?Lu("visualElementAttached",h,f):or(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:hb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?Lu("visualElementAttached",c,f):a?dr("visualElementAttached",c,a,f):dm("visualElementAttached",c,f)}
function Gu(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return dd(b,3)}
function Lu(a,b,c){Fu.push({payloadName:a,payload:b,options:c});Iu||(Iu=Vn())}
function Wn(a){if(Fu){for(var b=p(Fu),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(M("il_via_jspb"))switch(c.payload.V(a.csn),c.payloadName){case "screenCreated":nr(c.payload,c.options);break;case "visualElementAttached":or(c.payload,c.options);break;case "visualElementShown":jr(c.payload,c.options);break;case "visualElementHidden":kr(c.payload,c.options);break;case "visualElementGestured":lr(c.payload,c.options);break;case "visualElementStateChanged":mr(c.payload,c.options);break;default:Jr(new R("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,dr(c.payloadName,c.payload,null,c.options);Fu.length=0}Iu=0}
;function Mu(){this.j=new Set;this.i=new Set;this.l=new Map}
Mu.prototype.s=function(){};
Mu.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear()};
Na(Mu);function Nu(){this.o=[];this.N=[];this.i=[];this.m=[];this.B=[];this.j=new Set;this.v=new Map}
Nu.prototype.s=function(a){this.client=a};
function Ou(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=as(c),f=Zr(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Ku(a.client,e,f,[Vr(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Ku(a.client,e,f,[Vr(d.playerResponse.trackingParams)])}})}
function Pu(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.o.push([b,c]);else{var e=as(d);c=c||Zr(d);e&&c&&Ku(a.client,e,c,[b])}}
Nu.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=as(void 0===c?0:c)){a=this.client;var e=Vr(d);d={cttAuthInfo:cs(c),ba:c};if(M("il_via_jspb")){var f=new qj;f.V(c);e=e.getAsJspb();G(f,ej,2,e);E(f,4,Hj.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK);b&&G(f,hj,3);"UNDEFINED_CSN"==c?Lu("visualElementGestured",f,d):lr(f,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(f.clientData=b),"UNDEFINED_CSN"==c?
Lu("visualElementGestured",f,d):a?dr("visualElementGestured",f,a,d):dm("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function Qu(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){Ru(a,b,c);var f=Zr(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,Pu(a,h[0],h[1]||f,c.layer);f=p(a.N);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=as(g);var m=k[0]||Zr(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:cs(h),ba:h};M("il_via_jspb")?(q=new tj,q.V(h),m=m.getAsJspb(),G(q,ej,2,m),"UNDEFINED_CSN"==h?Lu("visualElementStateChanged",q,k):mr(q,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:q},"UNDEFINED_CSN"==h?Lu("visualElementStateChanged",m,k):g?dr("visualElementStateChanged",m,g,k):dm("visualElementStateChanged",m,k))}}}};
as(c.layer)||a.l();if(c.Nb)for(var d=p(c.Nb),e=d.next();!e.done;e=d.next())Ou(a,e.value,c.layer);else Ir(Error("Delayed screen needs a data promise."))}
function Ru(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Rc?c.Rc:c.layer;var e=as(d);d=Zr(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Ju(a.client,b,f,c.Mb,c.cttAuthInfo,g,c.mq)}catch(m){Lr(m,{wq:b,rootVe:d,parentVisualElement:void 0,kq:e,rq:f,Mb:c.Mb});Ir(m);return}ds(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(Tr));for(f=b.next();!f.done;f=b.next())if(as(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:cs(e),ba:e,Ob:g},M("il_via_jspb")?(h=new rj,h.V(e),d=d.getAsJspb(),G(h,ej,2,d),E(h,4,g?16:8),"UNDEFINED_CSN"==e?Lu("visualElementHidden",h,f):kr(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?Lu("visualElementHidden",d,f):b?dr("visualElementHidden",d,b,f):dm("visualElementHidden",
d,f)));a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");Zt({clientScreenNonce:k});Mu.getInstance().clear();d=Zr(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:cs(e),ba:e},M("il_via_jspb")?(b=new sj,b.V(e),f=d.getAsJspb(),G(b,ej,2,f),E(b,4,1),"UNDEFINED_CSN"==e?Lu("visualElementShown",b,k):jr(b,k)):(b={csn:e,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==e?Lu("visualElementShown",b,k):dm("visualElementShown",
b,k)));a.j.delete(c.layer||0);a.l=void 0;e=p(a.v);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Pu(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Ir(m)}}for(c=a.m.length=0;c<a.B.length;c++){e=a.B[c];try{e()}catch(m){Ir(m)}}}
;function Su(){var a,b;return w(function(c){if(1==c.i)return a=ju.i,a?v(c,lu(a),2):(Jr(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.j)return b.errorMetadata?(Jr(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.lq);Jr(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var Tu=y.caches,Uu;function Vu(a){var b=a.indexOf(":");return-1===b?{Yb:a}:{Yb:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Wu(){return w(function(a){if(void 0!==Uu)return a.return(Uu);Uu=new Promise(function(b){var c;return w(function(d){switch(d.i){case 1:return va(d,2),v(d,Tu.open("test-only"),4);case 4:return v(d,Tu.delete("test-only"),5);case 5:wa(d,3);break;case 2:if(c=xa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.i=0}})});
return a.return(Uu)})}
function Xu(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.i)return v(k,Wu(),2);if(3!=k.i){if(!k.j)return k.return(!1);b=[];return v(k,Tu.keys(),3)}c=k.j;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Vu(f),h=g.datasyncId,!h||a.includes(h)||b.push(Tu.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function Yu(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.i)return v(h,Wu(),2);if(3!=h.i){if(!h.j)return h.return(!1);a=hm("cache contains other");return v(h,Tu.keys(),3)}b=h.j;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Vu(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Zu(){try{return!!self.localStorage}catch(a){return!1}}
;function $u(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function av(a){if(Zu()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=$u(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function bv(){if(!Zu())return!1;var a=hm(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=$u(c.value),void 0!==c&&c!==a)return!0;return!1}
;function cv(){Su().then(function(a){a&&(sn(a),Xu(a),av(a))})}
function dv(){var a=new Co;Nh.S(function(){var b,c,d,e;return w(function(f){switch(f.i){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=hm("clear");if(b.startsWith("V")){var g=[b];sn(g);Xu(g);av(g);return f.return()}c=bv();return v(f,Yu(),3);case 3:return d=f.j,v(f,tn(),4);case 4:if(e=f.j,!c&&!d&&!e)return f.return();case 2:a.L()?cv():a.m.add("publicytnetworkstatus-online",cv,!0,void 0,void 0),f.i=0}})})}
;function ev(a){a&&(a.dataset?a.dataset[fv("loaded")]="true":a.setAttribute("data-loaded","true"))}
function gv(a,b){return a?a.dataset?a.dataset[fv(b)]:a.getAttribute("data-"+b):null}
var hv={};function fv(a){return hv[a]||(hv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var iv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,jv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function kv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(iv,""),c=c.replace(jv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else lv(a,b,c)}
function lv(a,b,c){c=void 0===c?null:c;var d=mv(a),e=document.getElementById(d),f=e&&gv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=pq(d,b),b=""+Ra(b),nv[b]=f),g||(e=ov(a,d,function(){gv(e,"loaded")||(ev(e),sq(d),Qk(Ya(tq,d),0))},c)))}
function ov(a,b,c,d){d=void 0===d?null:d;var e=cf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);zh(e,Jb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function pv(a){a=mv(a);var b=document.getElementById(a);b&&(tq(a),b.parentNode.removeChild(b))}
function qv(a,b){a&&b&&(a=""+Ra(b),(a=nv[a])&&rq(a))}
function mv(a){var b=document.createElement("a");dc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ic(a)}
var nv={};var rv=[],sv=!1;function tv(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&ps()){var a=L("PLAYER_VARS",{});if(!("1"==rb(a)||M("embeds_web_disable_ads_for_pfl")&&qs(a))){var b=function(){sv=!0;"google_ad_status"in window?nk("DCLKSTAT",1):nk("DCLKSTAT",2)};
try{kv("//web.archive.org/web/20220623202258/https://static.doubleclick.net/instream/ad_status.js",b)}catch(c){}rv.push(Nh.S(function(){if(!(sv||"google_ad_status"in window)){try{qv("//web.archive.org/web/20220623202258/https://static.doubleclick.net/instream/ad_status.js",b)}catch(c){}sv=!0;nk("DCLKSTAT",3)}},5E3))}}}
function uv(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function xv(){this.state=1;this.i=null}
xv.prototype.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Db("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=yb())?f.createScript(e):e,e=(new Fb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Db("From proto message. b/166824318"),d=Jb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());
yv(this,e,d,a.program,b,c)}else Jr(Error("Cannot initialize botguard without program"))};
function yv(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,kv(c,function(){window[g]?zv(a,d,g,e):(a.state=3,pv(c),Jr(new R("Unable to load Botguard","from "+c)))},f)):b?(f=cf("SCRIPT"),f.textContent=b,f.nonce=gc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?zv(a,d,g,e):(a.state=4,Jr(new R("Unable to load Botguard from JS")))):Jr(new R("Unable to load VM; no url or JS provided"))}
xv.prototype.isInitialized=function(){return!!this.i};
function zv(a,b,c,d){a.state=5;try{var e=new uh({program:b,globalName:c});e.hd.then(function(){a.state=6;d&&d(b)});
Av(a,e)}catch(f){a.state=7,f instanceof Error&&Jr(f)}}
xv.prototype.invoke=function(a){a=void 0===a?{}:a;var b=this.i;if(b){var c={Lb:a};if(b.Wa)throw Error("Already disposed");a=sh();var d;null!=(d=b.sa)&&d.j.i.Bb("/client_streamz/bg/fsc",d.Aa);d=b.md([c.Lb,c.kd]);null!=(b=b.sa)&&(a=sh()-a,b.l.i.hb("/client_streamz/bg/fsl",a,b.Aa));b=d}else b=null;return b};
xv.prototype.dispose=function(){Av(this,null);this.state=8};
function Av(a,b){ke(a.i);a.i=b}
;var Bv=new xv;function Cv(){return Bv.isInitialized()}
function Dv(a){a=void 0===a?{}:a;return Bv.invoke(a)}
;function Ev(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Tl():d;this.m=c;this.l=d;this.j=new th;this.i=a;a={};c=p(this.i.entries());for(d=c.next();!d.done;a={Ca:a.Ca,Na:a.Na},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Na=d;a.Ca=e;d=function(f){return function(){f.Ca.tb();b.i[f.Na].eb=!0;b.i.every(function(g){return!0===g.eb})&&b.j.resolve()}}(a);
e=Pl(d,Fv(this,a.Ca));this.i[a.Na]=Object.assign({},a.Ca,{tb:d,Za:e})}}
function Gv(a){var b=Array.from(a.i.keys()).sort(function(d,e){return Fv(a,a.i[e])-Fv(a,a.i[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.i[c.value],void 0===c.Za||c.eb||(a.l.fa(c.Za),Pl(c.tb,10))}
Ev.prototype.cancel=function(){for(var a=p(this.i),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Za||b.eb||this.l.fa(b.Za),b.eb=!0;this.j.resolve()};
function Fv(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function Hv(a){this.state=a;this.plugins=[];this.s=void 0}
Hv.prototype.install=function(){this.plugins.push.apply(this.plugins,ia(Ja.apply(0,arguments)))};
Hv.prototype.transition=function(a,b){var c=this,d=this.B.find(function(f){return f.from===c.state&&f.D===a});
if(d){this.l&&(Gv(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Iv(this,e,this.s),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Iv(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
Tl();var g={};e=p(e);for(var h=e.next();!h.done;g={Oa:g.Oa},h=e.next())g.Oa=h.value,Rl(function(k){return function(){k.Oa.callback.apply(k.Oa,ia(d))}}(g));
f=f.map(function(k){var m;return{tb:function(){k.callback.apply(k,ia(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.l=new Ev(f))}}
fa.Object.defineProperties(Hv.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Jv(a){Hv.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.i=new Map;this.B=[{from:"document_active",D:"document_disposed_preventable",action:this.N},{from:"document_active",D:"document_disposed",action:this.m},{from:"document_disposed_preventable",D:"document_disposed",action:this.m},{from:"document_disposed_preventable",D:"flush_logs",action:this.o},{from:"document_disposed_preventable",D:"document_active",action:this.j},{from:"document_disposed",D:"flush_logs",action:this.o},
{from:"document_disposed",D:"document_active",action:this.j},{from:"document_disposed",D:"document_disposed",action:function(){}},
{from:"flush_logs",D:"document_active",action:this.j}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
t(Jv,Hv);Jv.prototype.N=function(a,b){if(!this.i.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.i=new Map;this.transition("document_active");return}}this.i.set("document_disposed_preventable",!0);this.i.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Jv.prototype.m=function(a,b){this.i.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.i.set("document_disposed",!0),this.transition("flush_logs"))};
Jv.prototype.o=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Jv.prototype.j=function(){this.i=new Map};function Kv(a){Hv.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.B=[{from:"document_visibility_unknown",D:"document_visible",action:this.j},{from:"document_visibility_unknown",D:"document_hidden",action:this.i},{from:"document_visibility_unknown",D:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",D:"document_backgrounded",action:this.m},{from:"document_visible",D:"document_hidden",action:this.i},{from:"document_visible",D:"document_foregrounded",action:this.o},
{from:"document_visible",D:"document_visible",action:this.j},{from:"document_foregrounded",D:"document_visible",action:this.j},{from:"document_foregrounded",D:"document_hidden",action:this.i},{from:"document_foregrounded",D:"document_foregrounded",action:this.o},{from:"document_hidden",D:"document_visible",action:this.j},{from:"document_hidden",D:"document_backgrounded",action:this.m},{from:"document_hidden",D:"document_hidden",action:this.i},{from:"document_backgrounded",D:"document_hidden",action:this.i},
{from:"document_backgrounded",D:"document_backgrounded",action:this.m},{from:"document_backgrounded",D:"document_visible",action:this.j}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
t(Kv,Hv);Kv.prototype.j=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Kv.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Kv.prototype.m=function(a,b){a(null==b?void 0:b.event)};
Kv.prototype.o=function(a,b){a(null==b?void 0:b.event)};function Lv(){this.i=new Jv;this.j=new Kv}
Lv.prototype.install=function(){var a=Ja.apply(0,arguments);this.i.install.apply(this.i,ia(a));this.j.install.apply(this.j,ia(a))};function Mv(){Lv.call(this);var a={};this.install((a.document_disposed={callback:this.l},a));a={};this.install((a.flush_logs={callback:this.m},a))}
var Nv;t(Mv,Lv);Mv.prototype.m=function(){if(M("web_fp_via_jspb")){var a=new dj,b=as();b&&a.V(b);b=new Fj;Ud(b,dj,380,Gj,a);ir(b);M("web_fp_via_jspb_and_json")&&dm("finalPayload",{csn:as()})}else dm("finalPayload",{csn:as()})};
Mv.prototype.l=function(){Nr(Or)};function Ov(){}
Ov.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new Ov,z("ytglobal.storage_",a));return a};
Ov.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Pv()):d.return()})};
function Pv(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",Ov);function bm(a,b){var c=this;this.handleError=a;this.i=b;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.j=!0});
this.l=Math.random()<=qk("ytidb_transaction_ended_event_rate_limit",.02)}
bm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Qv(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}};
function Qv(a,b){Ov.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Rv(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Rv(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
function Rv(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Sv(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.v=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.s||0<=eb(d.s,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.s=this.j=this.o=null;window.addEventListener("message",this.v)}
t(Sv,J);Sv.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){xk(d)}}};
Sv.prototype.C=function(){window.removeEventListener("message",this.v);J.prototype.C.call(this)};function Tv(){this.j=[];this.isReady=!1;this.l={};var a=this.i=new Sv(!!L("WIDGET_ID_ENFORCE")),b=this.Uc.bind(this);a.o=b;a.s=null;this.i.channel="widget";if(a=L("WIDGET_ID"))this.i.sessionId=a}
l=Tv.prototype;l.Uc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.l[a]||"onReady"===a||(this.addEventListener(a,Uv(this,a)),this.l[a]=!0)):this.Cb(a,b,c)};
l.Cb=function(){};
function Uv(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Fc=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.pb());this.sendMessage("onReady");fb(this.j,this.hc,this);this.j=[]};
l.pb=function(){return null};
function Vv(a,b){a.sendMessage("infoDelivery",b)}
l.hc=function(a){this.isReady?this.i.sendMessage(a):this.j.push(a)};
l.sendMessage=function(a,b){this.hc({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.i=null};function Wv(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Xv(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Yv(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Zv(a){Tv.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.ed.bind(this));this.addEventListener("onVolumeChange",this.fd.bind(this));this.addEventListener("onApiChange",this.Yc.bind(this));this.addEventListener("onPlaybackQualityChange",this.bd.bind(this));this.addEventListener("onPlaybackRateChange",this.cd.bind(this));this.addEventListener("onStateChange",this.dd.bind(this));this.addEventListener("onWebglSettingsChanged",
this.gd.bind(this))}
t(Zv,Tv);l=Zv.prototype;
l.Cb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Wv(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Xv(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Xv(e);break;case "loadPlaylist":case "cuePlaylist":e=Yv(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Wv(a)&&Vv(this,this.pb())}};
l.onReady=function(){var a=this.Fc.bind(this);this.i.j=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.pb=function(){if(!this.api)return null;var a=this.api.getApiInterface();kb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.dd=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Vv(this,a)};
l.bd=function(a){Vv(this,{playbackQuality:a})};
l.cd=function(a){Vv(this,{playbackRate:a})};
l.Yc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.fd=function(){Vv(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.ed=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Vv(this,a)};
l.gd=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Vv(this,a)};
l.dispose=function(){Tv.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function $v(a){J.call(this);this.j={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.ac,this)}
t($v,J);l=$v.prototype;l.start=function(){this.started||this.i()||(this.started=!0,this.connection.va("RECEIVING"))};
l.va=function(a,b){this.started&&!this.i()&&this.connection.va(a,b)};
l.ac=function(a,b,c){if(this.started&&!this.i()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=aw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=bw(a,c))&&this.va(a,c))}}};
l.addListener=function(a){if(!(a in this.j)){var b=this.Zc.bind(this,a);this.j[a]=b;this.addEventListener(a,b)}};
l.Zc=function(a,b){this.started&&!this.i()&&this.connection.va(a,this.ob(a,b))};
l.ob=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.j&&(this.removeEventListener(a,this.j[a]),delete this.j[a])};
l.C=function(){var a=this.connection;a.i()||li(a.j,"command",this.ac,this);this.connection=null;for(var b in this.j)this.j.hasOwnProperty(b)&&this.removeListener(b);J.prototype.C.call(this)};function cw(a,b){$v.call(this,b);this.api=a;this.start()}
t(cw,$v);cw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
cw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function aw(a,b){switch(a){case "loadVideoById":return a=Xv(b),[a];case "cueVideoById":return a=Xv(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Yv(b),[a];case "cuePlaylist":return a=Yv(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function bw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
cw.prototype.ob=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return $v.prototype.ob.call(this,a,b)};
cw.prototype.C=function(){$v.prototype.C.call(this);delete this.api};function dw(a){a=void 0===a?!1:a;J.call(this);this.j=new K(a);me(this,this.j)}
Za(dw,J);dw.prototype.subscribe=function(a,b,c){return this.i()?0:this.j.subscribe(a,b,c)};
dw.prototype.m=function(a,b){this.i()||this.j.oa.apply(this.j,arguments)};function ew(a,b,c){dw.call(this);this.l=a;this.destination=b;this.id=c}
t(ew,dw);ew.prototype.va=function(a,b){this.i()||this.l.va(this.destination,this.id,a,b)};
ew.prototype.C=function(){this.destination=this.l=null;dw.prototype.C.call(this)};function fw(a,b,c){J.call(this);this.destination=a;this.origin=c;this.j=cq(window,"message",this.l.bind(this));this.connection=new ew(this,a,b);me(this,this.connection)}
t(fw,J);fw.prototype.va=function(a,b,c,d){this.i()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(qg(a),this.origin))};
fw.prototype.l=function(a){var b;if(b=!this.i())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.i()||c.m("command",b.command,b.data,a.origin))}};
fw.prototype.C=function(){dq(this.j);this.destination=null;J.prototype.C.call(this)};function gw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||tb(b);this.assets=a.assets||{};this.attrs=a.attrs||tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
gw.prototype.clone=function(){var a=new gw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=tb(c):a[b]=c}return a};var hw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function iw(a){a=a||"";if(window.spf){var b=a.match(hw);spf.style.load(a,b?b[1]:"",void 0)}else jw(a)}
function jw(a){var b=kw(a),c=document.getElementById(b),d=c&&gv(c,"loaded");d||c&&!d||(c=lw(a,b,function(){gv(c,"loaded")||(ev(c),sq(b),Qk(Ya(tq,b),0))}))}
function lw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Jb(a);ec(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function kw(a){var b=cf("A");Db("This URL is never added to the DOM");dc(b,new Mb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ic(a)}
;function mw(){J.call(this);this.j=[]}
t(mw,J);mw.prototype.C=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.C.call(this)};function nw(){mw.apply(this,arguments)}
t(nw,mw);function ow(a,b,c,d){J.call(this);var e=this;this.v=b;this.webPlayerContextConfig=d;this.da=!1;this.api={};this.W=this.s=null;this.K=new K;this.j={};this.R=this.X=this.elementId=this.qa=this.config=null;this.P=!1;this.m=this.F=null;this.ka={};this.Pa=["onReady"];this.lastError=null;this.Ea=NaN;this.J={};this.Qa=new nw(this);this.T=0;this.l=this.o=a;me(this,this.K);pw(this);qw(this);me(this,this.Qa);c?this.T=Qk(function(){e.loadNewVideoConfig(c)},0):d&&(rw(this),sw(this))}
t(ow,J);l=ow.prototype;l.getId=function(){return this.v};
l.loadNewVideoConfig=function(a){if(!this.i()){this.T&&(Rk(this.T),this.T=0);var b=a||{};b instanceof gw||(b=new gw(b));this.config=b;this.setConfig(a);sw(this);this.isReady()&&tw(this)}};
function rw(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.l)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.qa=a;this.config=uw(a);rw(this);if(!this.X){var b;this.X=vw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.l&&(this.l.style.width=Gh(Number(b)||b)),(a=a.height)&&this.l&&(this.l.style.height=Gh(Number(a)||a))};
function tw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function ww(a){var b=!0,c=xw(a);c&&a.config&&(a=yw(a),b=gv(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function sw(a){if(!a.i()&&!a.P){var b=ww(a);if(b&&"html5"===(xw(a)?"html5":null))a.R="html5",a.isReady()||zw(a);else if(Aw(a),a.R="html5",b&&a.m&&a.o)a.o.appendChild(a.m),zw(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.F=function(){c=!0;var d=Bw(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?uw(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);zw(a)};
a.P=!0;b?a.F():(kv(yw(a),a.F),(b=Cw(a))&&iw(b),Dw(a)&&!c&&z("yt.player.Application.create",null))}}}
function xw(a){var b=bf(a.elementId);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.elementId));return b}
function zw(a){if(!a.i()){var b=xw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.P=!1;if(!Bw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Ew(a)}else a.Ea=Qk(function(){zw(a)},50)}}
function Ew(a){pw(a);a.da=!0;var b=xw(a);if(b){a.s=Fw(a,b,"addEventListener");a.W=Fw(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Fw(a,b,f))}}for(var g in a.j)a.j.hasOwnProperty(g)&&a.s&&a.s(g,a.j[g]);tw(a);a.X&&a.X(a.api);a.K.oa("onReady",a.api)}
function Fw(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Jr(f))}}}
function pw(a){a.da=!1;if(a.W)for(var b in a.j)a.j.hasOwnProperty(b)&&a.W(b,a.j[b]);for(var c in a.J)a.J.hasOwnProperty(c)&&Rk(Number(c));a.J={};a.s=null;a.W=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.da};
function qw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){sq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){sq("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=vw(this,b);d&&(0<=eb(this.Pa,a)||this.j[a]||(b=Gw(this,a),this.s&&this.s(a,b)),this.K.subscribe(a,d),"onReady"===a&&this.isReady()&&Qk(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.i()||(b=vw(this,b))&&li(this.K,a,b)};
function vw(a,b){var c=b;if("string"===typeof b){if(a.ka[b])return a.ka[b];c=function(){var d=Ja.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){Ir(f)}};
a.ka[b]=c}return c?c:null}
function Gw(a,b){var c="ytPlayer"+b+a.v;a.j[b]=c;y[c]=function(d){var e=Qk(function(){if(!a.i()){try{a.K.oa(b,null!=d?d:void 0)}catch(h){Jr(new R("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.J,g=String(e);g in f&&delete f[g]}},0);
qb(a.J,String(e))};
return c}
l.getPlayerType=function(){return this.R||(xw(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Aw(a){a.cancel();pw(a);a.R=null;a.config&&(a.config.loaded=!1);var b=xw(a);b&&(ww(a)||!Dw(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.F&&qv(yw(this),this.F);Rk(this.Ea);this.P=!1};
l.C=function(){Aw(this);if(this.m&&this.config&&this.m.destroy)try{this.m.destroy()}catch(b){Ir(b)}this.ka=null;for(var a in this.j)this.j.hasOwnProperty(a)&&(y[this.j[a]]=null);this.qa=this.config=this.api=null;delete this.o;delete this.l;J.prototype.C.call(this)};
function Dw(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function yw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Cw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Bw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Dk(c||"","&")[b]}
function uw(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?tb(e):e}return b}
;var Hw={},Iw="player_uid_"+(1E9*Math.random()>>>0);function Jw(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?bf(d):d;var e=Iw+"_"+Ra(d),f=Hw[e];if(f&&c)return Kw(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new ow(d,e,a,b);Hw[e]=f;sq("player-added",f.api);ne(f,function(){delete Hw[f.getId()]});
return f.api}
function Kw(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Lw=null,Mw=null,Nw=null;function Ow(){Pw()}
function Qw(){Pw()}
function Pw(){var a=Lw.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Rw(a,b,c){a="ST-"+ic(a).toString(36);b=b?rc(b):"";c=c||5;ps()&&gl(a,b,c)}
;function Sw(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=mc(window.location.href);g&&f.push(g);g=mc(d);if(0<=eb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),dc(f,d),d=f.href),d&&(d=nc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:as()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Rw(d,b,h)}else Rw(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=tc(a,k)+m;var r=void 0===r?yh:r;a:{r=void 0===r?yh:r;for(k=0;k<r.length;++k)if(m=r[k],m instanceof wh&&m.isValid(a)){r=new Mb(a,Nb);break a}r=void 0}c.href=Ob(r||Qb)}return!0}
;z("yt.setConfig",nk);z("yt.config.set",nk);z("yt.setMsg",fs);z("yt.msgs.set",fs);z("yt.logging.errors.log",Ir);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}ys(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=Ik(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));Xt();if((c=L("WEB_PLAYER_CONTEXT_CONFIGS"))&&
"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Ik(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Lw=Jw(a,c,!1)}else Lw=Jw(a);Lw.addEventListener("onVideoDataChange",Ow);Lw.addEventListener("onReady",Qw);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?Nw=new Zv(Lw):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Mw=new fw(window.parent,
a,b),Nw=new cw(Lw,Mw.connection));tv();M("ytidb_create_logger_embed_killswitch")||am();a={};Nv||(Nv=new Mv);Nv.install((a.flush_logs={callback:function(){Kq()}},a));
M("embeds_web_enable_new_nwl")?Jo():Ro();M("ytidb_clear_embedded_player")&&Nh.S(function(){var e;if(!Du){Is||(Is=new Fs);var f=Is;var g={Tc:Cu,lc:Bu};f.providers.set(g.Tc,g);g={Kb:{feedbackEndpoint:Ts(xu),modifyChannelNotificationPreferenceEndpoint:Ts(yu),playlistEditEndpoint:Ts(zu),subscribeEndpoint:Ts(vu),unsubscribeEndpoint:Ts(wu),webPlayerShareEntityServiceEndpoint:Ts(Au)}};var h=M("web_enable_client_location_service")?Ps.getInstance():void 0,k={};h&&(k.client_location=h);if(void 0===m){zs.i||
(zs.i=new zs);var m=zs.i}void 0===e&&(e=f.resolve(Cu));ku(g,e,m,k);Du=ju.i}dv()})});
var Tw=vk(function(){bu();var a=kl.getInstance(),b=nl(119),c=1<window.devicePixelRatio;if(document.body&&Zh(document.body,"exp-invert-logo"))if(c&&!Zh(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Zh(d,"inverted-hdpi")){var e=Xh(d);Yh(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Zh(document.body,"inverted-hdpi")&&$h();if(b!=c){b="f"+(Math.floor(119/31)+1);d=ol(b)||0;d=c?d|67108864:d&-67108865;0==d?delete jl[b]:(c=d.toString(16),
jl[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.i;d=[];for(var f in jl)d.push(f+"="+encodeURIComponent(String(jl[f])));gl(b,d.join("&"),63072E3,a.j,c)}Nu.i||(Nu.i=new Nu);a=Nu.i;f=16623;var g=void 0===g?{}:g;Object.values(gs).includes(f)||(Jr(new R("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.i.push({rootVe:f,key:g.key||""});a.o=[];a.N=[];g.Nb?Qu(a,f,g):Ru(a,f,g)}),Uw=vk(function(){Lw&&Lw.sendAbandonmentPing&&Lw.sendAbandonmentPing();
L("PL_ATT")&&Bv.dispose();for(var a=Nh,b=0,c=rv.length;b<c;b++)a.fa(rv[b]);rv.length=0;pv("//web.archive.org/web/20220623202258/https://static.doubleclick.net/instream/ad_status.js");sv=!1;nk("DCLKSTAT",0);le(Nw,Mw);Lw&&(Lw.removeEventListener("onVideoDataChange",Ow),Lw.destroy())});
window.addEventListener?(window.addEventListener("load",Tw),window.addEventListener("pagehide",Uw)):window.attachEvent&&(window.attachEvent("onload",Tw),window.attachEvent("onunload",Uw));z("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Cv);z("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Dv);z("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||uv);z("yt.player.exports.navigate",B("yt.player.exports.navigate")||Sw);
z("yt.util.activity.init",B("yt.util.activity.init")||hq);z("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||kq);z("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||iq);}).call(this);


}
/*
     FILE ARCHIVED ON 20:22:58 Jun 23, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:07:57 Aug 16, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.764
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.011
  esindex: 0.014
  cdx.remote: 6.516
  LoadShardBlock: 25.552 (3)
  PetaboxLoader3.datanode: 33.64 (4)
  load_resource: 69.823
  PetaboxLoader3.resolve: 53.277
*/