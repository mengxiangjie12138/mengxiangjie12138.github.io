(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var k=this||self;function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}} 
function n(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n=aa:n=ea;return n.apply(null,arguments)}function fa(a,b){function c(){}c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.I=function(d,e,h){for(var g=Array(arguments.length-2),f=2;f<arguments.length;f++)g[f-2]=arguments[f];return b.prototype[e].apply(d,g)}};function p(a,b){Array.prototype.forEach.call(a,b,void 0)};var ha={},q=null;var ia="function"===typeof Uint8Array;const r=Symbol(void 0);function t(a){Object.isFrozen(a)||(r?a[r]|=1:void 0!==a.g?a.g|=1:Object.defineProperties(a,{g:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a};function ja(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var u=Object.freeze(t([]));function v(a,b,c=!1){return-1===b?null:b>=a.l?a.h?a.h[b]:void 0:c&&a.h&&(c=a.h[b],null!=c)?c:a.g[b+a.j]}function z(a,b,c){a=v(a,b);return null==a?c:a}function A(a,b){a=v(a,b);a=null==a?a:!!a;return null==a?!1:a}function ka(a){var b=la;a.i||(a.i={});const c=a.i[1];if(c)return c;let d=v(a,1,!1);if(null==d)return c;b=new b(d);return a.i[1]=b} 
function ma(a){var b=na;a.i||(a.i={});var c=a.i[1];if(!c){var d=v(a,1,!1);null==d&&(d=u);d===u&&(c=d=t(d.slice()),1<a.l?a.g[1+a.j]=c:(a.h||(a.h=a.g[a.l+a.j]={}))[1]=c);c=[];for(let e=0;e<d.length;e++)c[e]=new b(d[e]);a.i[1]=c}return c};function oa(a,b=pa){return qa(a,b)}function ra(a,b){if(null!=a){if(Array.isArray(a))a=qa(a,b);else if(ja(a)){const c={};for(let d in a)c[d]=ra(a[d],b);a=c}else a=b(a);return a}}function qa(a,b){const c=a.slice();for(let d=0;d<c.length;d++)c[d]=ra(c[d],b);if(b=Array.isArray(a)){let d;r?d=a[r]:d=a.g;b=(null==d?0:d)&1}b&&t(c);return c} 
function sa(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a:switch(typeof a){case "number":a=isFinite(a)?a:String(a);break a;case "object":if(a&&!Array.isArray(a)&&ia&&null!=a&&a instanceof Uint8Array){var b;void 0===b&&(b=0);if(!q){q={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var h=c.concat(d[e].split(""));ha[e]=h;for(var g=0;g<h.length;g++){var f=h[g];void 0===q[f]&&(q[f]=g)}}}b=ha[b];c=Array(Math.floor(a.length/ 
3));d=b[64]||"";for(e=h=0;h<a.length-2;h+=3){var l=a[h],m=a[h+1];f=a[h+2];g=b[l>>2];l=b[(l&3)<<4|m>>4];m=b[(m&15)<<2|f>>6];f=b[f&63];c[e++]=g+l+m+f}g=0;f=d;switch(a.length-h){case 2:g=a[h+1],f=b[(g&15)<<2]||d;case 1:a=a[h],c[e]=b[a>>2]+b[(a&3)<<4|g>>4]+f+d}a=c.join("")}}return Array.isArray(a)?oa(a,sa):a}function pa(a){return ia&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a};let ta;function B(a,b,c){var d=ta;ta=null;a||(a=d);d=this.constructor.K;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.J||0);this.i=void 0;this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],ja(d))){this.l=a-this.j;this.h=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.h=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.g[a])?Array.isArray(d)&&t(d):this.g[a]=u;else{d=this.h||(this.h=this.g[this.l+this.j]={});let e=d[a];e?Array.isArray(e)&& 
t(e):d[a]=u}}B.prototype.toJSON=function(){return oa(this.g,sa)};B.prototype.toString=function(){return this.g.toString()};var ua=class extends B{};const va=()=>{Object.defineProperties(ua,{[Symbol.hasInstance]:{value:Object[Symbol.hasInstance],configurable:!1,writable:!1,enumerable:!1}})};va();class C extends ua{}const wa=()=>{Object.defineProperties(C,{[Symbol.hasInstance]:{value:Object[Symbol.hasInstance],configurable:!1,writable:!1,enumerable:!1}})};wa();var la=class extends C{constructor(a){super(a,-1,xa)}},na=class extends C{constructor(a){super(a)}},xa=[1];var ya=class extends C{constructor(a){super(a)}};var F=class{constructor(a,b){this.g=b===D?a:""}};F.prototype.i=!0;F.prototype.h=function(){return this.g.toString()};F.prototype.toString=function(){return this.g.toString()};function za(a){return a instanceof F&&a.constructor===F?a.g:"type_error:SafeUrl"}var Aa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,D={};/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var Ba=class{};class G extends Ba{constructor(a){super();this.g=a}toString(){return this.g}}var Ca=new G("about:invalid#zTSz");function Da(a){if(a instanceof Ba)if(a instanceof G)a=a.g;else throw Error("");else a=za(a);return a};function Ea(){}function Fa(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var Ga={capture:!0},Ha={passive:!0},Ia=Fa(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",null,b)}catch(b){}return a});function H(a,b,c,d){if(a.addEventListener){var e=a.addEventListener;d=d?d.passive&&Ia()?d:d.capture||!1:!1;e.call(a,b,c,d)}};function Ja(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ja(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};function Ka(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}let I=[];const J=()=>{const a=I;I=[];for(const b of a)try{b()}catch(c){}};var La=a=>{var b=K;"complete"===b.readyState||"interactive"===b.readyState?(I.push(a),1==I.length&&(window.Promise?Promise.resolve().then(J):window.setImmediate?setImmediate(J):setTimeout(J,0))):b.addEventListener("DOMContentLoaded",a)};function Ma(a=document){return a.createElement("img")};function Na(a=null){return a&&"23"===a.getAttribute("data-jc")?a:document.querySelector('[data-jc="23"]')} 
function Oa(){if(!(.01<Math.random())){var a=Na(document.currentScript);a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${23}&version=${a&&a.getAttribute("data-jc-version")||"unknown"}&sample=${.01}`;var b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):(b.google_image_requests||(b.google_image_requests=[]),c=Ma(b.document),c.src=a,b.google_image_requests.push(c))}};var K=document,L=window;var Pa=(a=[])=>{k.google_logging_queue||(k.google_logging_queue=[]);k.google_logging_queue.push([12,a])};class Qa{constructor(a){this.F=a}}function M(a){return new Qa(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const Ra=new Qa(a=>/^[^:]*([/?#]|$)/.test(a));var Sa=M("http"),Ta=M("https"),Ua=M("ftp"),Va=M("mailto");const Wa=[M("data"),Sa,Ta,Va,Ua,Ra];function Xa(a=Wa){for(let b=0;b<a.length;++b){const c=a[b];if(c instanceof Qa&&c.F("#"))return new G("#")}}function Ya(a=Wa){return Xa(a)||Ca};const Za=[Sa,Ta,Va,Ua,Ra,M("market"),M("itms"),M("intent"),M("itms-appss")]; 
var $a=()=>{var a=`${"http:"===L.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return b=>{b={id:"unsafeurl",ctx:625,url:b};var c=[];for(d in b)Ja(d,b[d],c);var d=c.join("&");if(d){b=a.indexOf("#");0>b&&(b=a.length);c=a.indexOf("?");if(0>c||c>b){c=b;var e=""}else e=a.substring(c+1,b);b=[a.substr(0,c),e,a.substr(b)];c=b[1];b[1]=d?c?c+"&"+d:d:c;d=b[0]+(b[1]?"?"+b[1]:"")+b[2]}else d=a;navigator.sendBeacon&&navigator.sendBeacon(d,"")}};var ab=()=>{var a=K;try{return a.querySelectorAll("*[data-ifc]")}catch(b){return[]}},bb=(a,b)=>{a&&Ka(b,(c,d)=>{a.style[d]=c})},cb=a=>{var b=K.body;const c=document.createDocumentFragment(),d=a.length;for(let e=0;e<d;++e)c.appendChild(a[e]);b.appendChild(c)};let N=null;var db=()=>{const a=k.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},eb=()=>{const a=k.performance;return a&&a.now?a.now():null};class fb{constructor(a,b){var c=eb()||db();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const O=k.performance,gb=!!(O&&O.mark&&O.measure&&O.clearMarks),P=Fa(()=>{var a;if(a=gb){var b;if(null===N){N="";try{a="";try{a=k.top.location.hash}catch(c){a=k.location.hash}a&&(N=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=N;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function hb(a){a&&O&&P()&&(O.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),O.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class ib{constructor(){var a=Q;this.g=[];this.i=a||k;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.g=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.h=P()||(null!=b?b:1>Math.random())}start(a,b){if(!this.h)return null;a=new fb(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;O&&P()&&O.mark(b);return a}end(a){if(this.h&&"number"===typeof a.value){a.duration=(eb()||db())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;O&&P()&&O.mark(b);!this.h||2048<this.g.length|| 
this.g.push(a)}}};const Q=window,V=new ib;var jb=()=>{Q.google_measure_js_timing||(V.h=!1,V.g!=V.i.google_js_reporting_queue&&(P()&&p(V.g,hb),V.g.length=0))};"number"!==typeof Q.google_srt&&(Q.google_srt=Math.random());"complete"==Q.document.readyState?jb():V.h&&H(Q,"load",()=>{jb()});var kb=a=>{H(L,"message",b=>{let c;try{c=JSON.parse(b.data)}catch(d){return}!c||"ig"!==c.googMsgType||a(c,b)})};function W(){this.h=this.h;this.i=this.i}W.prototype.h=!1;function lb(a){a.h||(a.h=!0,a.j())}W.prototype.j=function(){if(this.i)for(;this.i.length;)this.i.shift()()};function X(a,b,c){W.call(this);this.l=a;this.B=b||0;this.o=c;this.u=n(this.A,this)}fa(X,W);X.prototype.g=0;X.prototype.j=function(){X.G.j.call(this);0!=this.g&&k.clearTimeout(this.g);this.g=0;delete this.l;delete this.o}; 
X.prototype.start=function(a){0!=this.g&&k.clearTimeout(this.g);this.g=0;var b=this.u;a=void 0!==a?a:this.B;if("function"!==typeof b)if(b&&"function"==typeof b.handleEvent)b=n(b.handleEvent,b);else throw Error("Invalid listener argument");this.g=2147483647<Number(a)?-1:k.setTimeout(b,a||0)};X.prototype.A=function(){this.g=0;this.l&&this.l.call(this.o)};const mb={display:"inline-block",position:"absolute"},nb={display:"none",width:"100%",height:"100%",top:"0",left:"0"},Y=(a,b)=>{a&&(a.style.display=b?"inline-block":"none")};function ob(a=""){const b={top:0,right:0,bottom:0,left:0};a&&(a=a.split(","),4===a.length&&a.reduce((c,d)=>c&&!isNaN(+d),!0)&&([b.top,b.right,b.bottom,b.left]=a.map(c=>+c)));return b} 
function pb(a,b,c=2147483647){const d=K.createElement("div");bb(d,Object.assign({},mb,{"z-index":String(c)},b));A(a.data,10)&&H(d,"click",Ea);if(A(a.data,11)){a=b=K.createElement("a");c=$a();const e=Ya(Za);e===Ca&&c("#");c=new F(Da(e),D);c instanceof F||c instanceof F||(c="object"==typeof c&&c.i?c.h():String(c),Aa.test(c)||(c="about:invalid#zClosurez"),c=new F(c,D));a.href=za(c);b.appendChild(d);return b}return d} 
function qb(a,b){switch(z(b.m,5,1)){case 2:var c;let d;null==(c=L.AFMA_Communicator)||null==(d=c.addEventListener)||d.call(c,"onshow",()=>{Z(a,b)});break;case 10:H(L,"i-creative-view",()=>{Z(a,b)});break;case 4:H(K,"DOMContentLoaded",()=>{Z(a,b)});break;case 8:kb(g=>{g.rr&&Z(a,b)});break;case 9:"IntersectionObserver"in L&&(c=new IntersectionObserver(g=>{for(const f of g)if(0<f.intersectionRatio){Z(a,b);break}}),c.observe(K.body),a.H.push(c));break;case 11:let e,h;null==(e=L.AFMA_Communicator)||null== 
(h=e.addEventListener)||h.call(e,"onAdVisibilityChanged",()=>{Z(a,b)})}}function rb(a,b){b=ob(b);const c=z(a.data,9,0);a.i=[{width:"100%",height:b.top+c+"px",top:-c+"px",left:"0"},{width:b.right+c+"px",height:"100%",top:"0",right:-c+"px"},{width:"100%",height:b.bottom+c+"px",bottom:-c+"px",left:"0"},{width:b.left+c+"px",height:"100%",top:"0",left:-c+"px"}].map(d=>pb(a,d,9019))} 
function sb(a){var b=0;for(const d of a.B){const e=d.m,h=a.u[z(e,5,1)];d.s||void 0===h||(b=Math.max(b,h+z(e,2,0)))}a.j&&lb(a.j);b-=Date.now();const c=a.g;0<b?(Y(c,!0),a.j=new X(()=>{Y(c,!1)},b),a.j.start()):Y(c,!1)}function Z(a,b){b.s||(a.u[z(b.m,5,1)]=Date.now(),A(b.m,9)&&(a.B.push(b),sb(a)))};window.googqscp=new class{constructor(){this.i=[];this.j=this.g=null;this.B=[];this.data=null;this.A=[];this.h=[];this.o=[];this.u={};this.H=[];this.l=null}init(a){Pa([a]);this.data=new ya(a);a=ka(this.data);p(ma(a),e=>{this.o.push({C:0,s:!1,D:0,m:e,v:-1})});this.h=ab();let b=!1;a=this.h.length;for(let e=0;e<a;++e){var c=new la(JSON.parse(this.h[e].getAttribute("data-ifc")||"[]"));p(ma(c),h=>{this.o.push({C:0,s:!1,D:0,m:h,v:e});1===z(h,4,1)&&(b=!0)})}a=!1;for(var d of this.o)c=d.m,0<z(c,2,0)&&0<z(c, 
5,1)?(!this.g&&A(c,9)&&(this.g=pb(this,nb)),qb(this,d)):z(c,1,"")&&A(c,9)&&rb(this,z(c,1,"")),z(c,1,"")&&(a=!0);d=[];this.g&&d.push(this.g);!b&&d.push(...this.i);K.body&&cb(d);A(this.data,13)&&La(()=>{const e=K.body.querySelectorAll(".amp-fcp, .amp-bcp");for(let g=0;g<e.length;++g){var h=(h=e[g])?L.getComputedStyle(h).getPropertyValue("position"):void 0;"absolute"===h&&Y(e[g],!1)}});H(K,"click",e=>{if(!1===e.isTrusted&&A(this.data,15))e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopImmediatePropagation(), 
Oa();else{var h=-1,g=[];for(const w of this.o){var f=w.v,l=-1!==f;if(!(z(w.m,3,0)<=h||w.s||l&&!1===g[f])){var m=!l||g[f]||this.h[f].contains(e.target);l&&m&&(g[f]=!0);if(f=m)if(f=e,m=w,l=m.m,0<z(l,2,0)&&0<z(l,5,1))f=this.u[z(l,5,1)],f=void 0!==f&&Date.now()<f+z(l,2,0);else if(z(l,1,"")){{l=(0<=m.v?this.h[m.v]:K.body).getBoundingClientRect();var E=Number;var x=(x=K.body)?L.getComputedStyle(x).getPropertyValue("zoom"):void 0;E=E(x||"1");const [tb,ub]=[f.clientX,f.clientY],[R,S,ba,ca]=[tb/E-l.left,ub/ 
E-l.top,l.width,l.height];if(!(0<ba&&0<ca)||isNaN(R)||isNaN(S)||0>R||0>S)f=!1;else{m=ob(z(m.m,1,""));x=!(R>=m.left&&ba-R>m.right&&S>=m.top&&ca-S>m.bottom);if(this.l&&A(this.data,12)&&300>f.timeStamp-this.l.timeStamp){f=this.l.changedTouches[0];const [T,U]=[f.clientX/E-l.left,f.clientY/E-l.top];!isNaN(T)&&!isNaN(U)&&0<=T&&0<=U&&(x=(x=A(this.data,16)?x:!1)||!(T>=m.left&&ba-T>m.right&&U>=m.top&&ca-U>m.bottom))}f=x}}}else f=!0;if(f){var y=w;h=z(w.m,3,0)}}}if(y)switch(h=y.m,z(h,4,1)){case 2:case 3:e.preventDefault? 
e.preventDefault():e.returnValue=!1;g=Date.now();500<g-y.D&&(y.D=g,++y.C);g=y.m;if(z(g,8,0)&&y.C>=z(g,8,0))if(y.s=!0,this.g&&0<z(g,2,0))sb(this);else if(0<this.i.length&&z(g,1,""))for(var da of this.i)Y(da,!1);Oa();da=h.toJSON();for(const w of this.A)w(e,da)}}},Ga);a&&A(this.data,12)&&H(K,"touchend",e=>{this.l=e},Ha)}registerCallback(a){this.A.push(a)}};}).call(this);
