(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.36
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pu(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const St={},Vr=[],pn=()=>{},Pp=()=>!1,Pa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),mu=n=>n.startsWith("onUpdate:"),Ft=Object.assign,gu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Lp=Object.prototype.hasOwnProperty,tt=(n,e)=>Lp.call(n,e),Xe=Array.isArray,kr=n=>La(n)==="[object Map]",Nh=n=>La(n)==="[object Set]",qe=n=>typeof n=="function",bt=n=>typeof n=="string",Bi=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Fh=n=>(vt(n)||qe(n))&&qe(n.then)&&qe(n.catch),Oh=Object.prototype.toString,La=n=>Oh.call(n),Ip=n=>La(n).slice(8,-1),Bh=n=>La(n)==="[object Object]",_u=n=>bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ts=pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Dp=/-(\w)/g,Pn=Ia(n=>n.replace(Dp,(e,t)=>t?t.toUpperCase():"")),Up=/\B([A-Z])/g,vr=Ia(n=>n.replace(Up,"-$1").toLowerCase()),Da=Ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),sl=Ia(n=>n?`on${Da(n)}`:""),Ii=(n,e)=>!Object.is(n,e),ol=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Hh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Np=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let T0;const zh=()=>T0||(T0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bs(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=bt(i)?Hp(i):Bs(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(bt(n)||vt(n))return n}const Fp=/;(?![^(]*\))/g,Op=/:([^]+)/,Bp=/\/\*[^]*?\*\//g;function Hp(n){const e={};return n.replace(Bp,"").split(Fp).forEach(t=>{if(t){const i=t.split(Op);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function li(n){let e="";if(bt(n))e=n;else if(Xe(n))for(let t=0;t<n.length;t++){const i=li(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const zp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vp=pu(zp);function Vh(n){return!!n||n===""}const kh=n=>!!(n&&n.__v_isRef===!0),qt=n=>bt(n)?n:n==null?"":Xe(n)||vt(n)&&(n.toString===Oh||!qe(n.toString))?kh(n)?qt(n.value):JSON.stringify(n,Gh,2):String(n),Gh=(n,e)=>kh(e)?Gh(n,e.value):kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[al(i,s)+" =>"]=r,t),{})}:Nh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>al(t))}:Bi(e)?al(e):vt(e)&&!Xe(e)&&!Bh(e)?String(e):e,al=(n,e="")=>{var t;return Bi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.36
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mn;class kp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Mn,!e&&Mn&&(this.index=(Mn.scopes||(Mn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Mn;try{return Mn=this,e()}finally{Mn=t}}}on(){Mn=this}off(){Mn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Gp(n,e=Mn){e&&e.active&&e.effects.push(n)}function Wp(){return Mn}let ur;class vu{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Gp(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Hi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(Xp(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),zi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=bi,t=ur;try{return bi=!0,ur=this,this._runnings++,A0(this),this.fn()}finally{b0(this),this._runnings--,ur=t,bi=e}}stop(){this.active&&(A0(this),b0(this),this.onStop&&this.onStop(),this.active=!1)}}function Xp(n){return n.value}function A0(n){n._trackId++,n._depsLength=0}function b0(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Wh(n.deps[e],n);n.deps.length=n._depsLength}}function Wh(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let bi=!0,ic=0;const Xh=[];function Hi(){Xh.push(bi),bi=!1}function zi(){const n=Xh.pop();bi=n===void 0?!0:n}function xu(){ic++}function Su(){for(ic--;!ic&&rc.length;)rc.shift()()}function $h(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Wh(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const rc=[];function qh(n,e,t){xu();for(const i of n.keys()){let r;i._dirtyLevel<e&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&rc.push(i.scheduler)))}Su()}const Yh=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},sc=new WeakMap,fr=Symbol(""),oc=Symbol("");function jt(n,e,t){if(bi&&ur){let i=sc.get(n);i||sc.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Yh(()=>i.delete(t))),$h(ur,r)}}function si(n,e,t,i,r,s){const o=sc.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Xe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Bi(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Xe(n)?_u(t)&&a.push(o.get("length")):(a.push(o.get(fr)),kr(n)&&a.push(o.get(oc)));break;case"delete":Xe(n)||(a.push(o.get(fr)),kr(n)&&a.push(o.get(oc)));break;case"set":kr(n)&&a.push(o.get(fr));break}xu();for(const l of a)l&&qh(l,4);Su()}const $p=pu("__proto__,__v_isRef,__isVue"),Zh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Bi)),w0=qp();function qp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=ot(this);for(let s=0,o=this.length;s<o;s++)jt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(ot)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Hi(),xu();const i=ot(this)[e].apply(this,t);return Su(),zi(),i}}),n}function Yp(n){Bi(n)||(n=String(n));const e=ot(this);return jt(e,"has",n),e.hasOwnProperty(n)}class Kh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?am:ed:s?Qh:Jh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Xe(e);if(!r){if(o&&tt(w0,t))return Reflect.get(w0,t,i);if(t==="hasOwnProperty")return Yp}const a=Reflect.get(e,t,i);return(Bi(t)?Zh.has(t):$p(t))||(r||jt(e,"get",t),s)?a:Jt(a)?o&&_u(t)?a:a.value:vt(a)?r?nd(a):Na(a):a}}class jh extends Kh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=dr(s);if(!Kr(i)&&!dr(i)&&(s=ot(s),i=ot(i)),!Xe(e)&&Jt(s)&&!Jt(i))return l?!1:(s.value=i,!0)}const o=Xe(e)&&_u(t)?Number(t)<e.length:tt(e,t),a=Reflect.set(e,t,i,r);return e===ot(r)&&(o?Ii(i,s)&&si(e,"set",t,i):si(e,"add",t,i)),a}deleteProperty(e,t){const i=tt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&si(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Bi(t)||!Zh.has(t))&&jt(e,"has",t),i}ownKeys(e){return jt(e,"iterate",Xe(e)?"length":fr),Reflect.ownKeys(e)}}class Zp extends Kh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Kp=new jh,jp=new Zp,Jp=new jh(!0);const Mu=n=>n,Ua=n=>Reflect.getPrototypeOf(n);function Mo(n,e,t=!1,i=!1){n=n.__v_raw;const r=ot(n),s=ot(e);t||(Ii(e,s)&&jt(r,"get",e),jt(r,"get",s));const{has:o}=Ua(r),a=i?Mu:t?Cu:Hs;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function yo(n,e=!1){const t=this.__v_raw,i=ot(t),r=ot(n);return e||(Ii(n,r)&&jt(i,"has",n),jt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Eo(n,e=!1){return n=n.__v_raw,!e&&jt(ot(n),"iterate",fr),Reflect.get(n,"size",n)}function R0(n,e=!1){!e&&!Kr(n)&&!dr(n)&&(n=ot(n));const t=ot(this);return Ua(t).has.call(t,n)||(t.add(n),si(t,"add",n,n)),this}function P0(n,e,t=!1){!t&&!Kr(e)&&!dr(e)&&(e=ot(e));const i=ot(this),{has:r,get:s}=Ua(i);let o=r.call(i,n);o||(n=ot(n),o=r.call(i,n));const a=s.call(i,n);return i.set(n,e),o?Ii(e,a)&&si(i,"set",n,e):si(i,"add",n,e),this}function L0(n){const e=ot(this),{has:t,get:i}=Ua(e);let r=t.call(e,n);r||(n=ot(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&si(e,"delete",n,void 0),s}function I0(){const n=ot(this),e=n.size!==0,t=n.clear();return e&&si(n,"clear",void 0,void 0),t}function Co(n,e){return function(i,r){const s=this,o=s.__v_raw,a=ot(o),l=e?Mu:n?Cu:Hs;return!n&&jt(a,"iterate",fr),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function To(n,e,t){return function(...i){const r=this.__v_raw,s=ot(r),o=kr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Mu:e?Cu:Hs;return!e&&jt(s,"iterate",l?oc:fr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function pi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Qp(){const n={get(s){return Mo(this,s)},get size(){return Eo(this)},has:yo,add:R0,set:P0,delete:L0,clear:I0,forEach:Co(!1,!1)},e={get(s){return Mo(this,s,!1,!0)},get size(){return Eo(this)},has:yo,add(s){return R0.call(this,s,!0)},set(s,o){return P0.call(this,s,o,!0)},delete:L0,clear:I0,forEach:Co(!1,!0)},t={get(s){return Mo(this,s,!0)},get size(){return Eo(this,!0)},has(s){return yo.call(this,s,!0)},add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear"),forEach:Co(!0,!1)},i={get(s){return Mo(this,s,!0,!0)},get size(){return Eo(this,!0)},has(s){return yo.call(this,s,!0)},add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear"),forEach:Co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=To(s,!1,!1),t[s]=To(s,!0,!1),e[s]=To(s,!1,!0),i[s]=To(s,!0,!0)}),[n,t,e,i]}const[em,tm,nm,im]=Qp();function yu(n,e){const t=e?n?im:nm:n?tm:em;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(tt(t,r)&&r in i?t:i,r,s)}const rm={get:yu(!1,!1)},sm={get:yu(!1,!0)},om={get:yu(!0,!1)};const Jh=new WeakMap,Qh=new WeakMap,ed=new WeakMap,am=new WeakMap;function lm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cm(n){return n.__v_skip||!Object.isExtensible(n)?0:lm(Ip(n))}function Na(n){return dr(n)?n:Eu(n,!1,Kp,rm,Jh)}function td(n){return Eu(n,!1,Jp,sm,Qh)}function nd(n){return Eu(n,!0,jp,om,ed)}function Eu(n,e,t,i,r){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=cm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function As(n){return dr(n)?As(n.__v_raw):!!(n&&n.__v_isReactive)}function dr(n){return!!(n&&n.__v_isReadonly)}function Kr(n){return!!(n&&n.__v_isShallow)}function id(n){return n?!!n.__v_raw:!1}function ot(n){const e=n&&n.__v_raw;return e?ot(e):n}function um(n){return Object.isExtensible(n)&&Hh(n,"__v_skip",!0),n}const Hs=n=>vt(n)?Na(n):n,Cu=n=>vt(n)?nd(n):n;class rd{constructor(e,t,i,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new vu(()=>e(this._value),()=>ta(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ot(this);return(!e._cacheable||e.effect.dirty)&&Ii(e._value,e._value=e.effect.run())&&ta(e,4),sd(e),e.effect._dirtyLevel>=2&&ta(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function fm(n,e,t=!1){let i,r;const s=qe(n);return s?(i=n,r=pn):(i=n.get,r=n.set),new rd(i,r,s||!r,t)}function sd(n){var e;bi&&ur&&(n=ot(n),$h(ur,(e=n.dep)!=null?e:n.dep=Yh(()=>n.dep=void 0,n instanceof rd?n:void 0)))}function ta(n,e=4,t,i){n=ot(n);const r=n.dep;r&&qh(r,e)}function Jt(n){return!!(n&&n.__v_isRef===!0)}function Cn(n){return od(n,!1)}function hm(n){return od(n,!0)}function od(n,e){return Jt(n)?n:new dm(n,e)}class dm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ot(e),this._value=t?e:Hs(e)}get value(){return sd(this),this._value}set value(e){const t=this.__v_isShallow||Kr(e)||dr(e);e=t?e:ot(e),Ii(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=t?e:Hs(e),ta(this,4))}}function st(n){return Jt(n)?n.value:n}const pm={get:(n,e,t)=>st(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Jt(r)&&!Jt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function ad(n){return As(n)?n:new Proxy(n,pm)}/**
* @vue/runtime-core v3.4.36
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wi(n,e,t,i){try{return i?n(...i):n()}catch(r){Fa(r,e,t)}}function wn(n,e,t,i){if(qe(n)){const r=wi(n,e,t,i);return r&&Fh(r)&&r.catch(s=>{Fa(s,e,t)}),r}if(Xe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(wn(n[s],e,t,i));return r}}function Fa(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Hi(),wi(l,null,10,[n,o,a]),zi();return}}mm(n,t,r,i)}function mm(n,e,t,i=!0){console.error(n)}let zs=!1,ac=!1;const Ut=[];let Fn=0;const Gr=[];let yi=null,rr=0;const ld=Promise.resolve();let Tu=null;function Au(n){const e=Tu||ld;return n?e.then(this?n.bind(this):n):e}function gm(n){let e=Fn+1,t=Ut.length;for(;e<t;){const i=e+t>>>1,r=Ut[i],s=Vs(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function bu(n){(!Ut.length||!Ut.includes(n,zs&&n.allowRecurse?Fn+1:Fn))&&(n.id==null?Ut.push(n):Ut.splice(gm(n.id),0,n),cd())}function cd(){!zs&&!ac&&(ac=!0,Tu=ld.then(fd))}function _m(n){const e=Ut.indexOf(n);e>Fn&&Ut.splice(e,1)}function vm(n){Xe(n)?Gr.push(...n):(!yi||!yi.includes(n,n.allowRecurse?rr+1:rr))&&Gr.push(n),cd()}function D0(n,e,t=zs?Fn+1:0){for(;t<Ut.length;t++){const i=Ut[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Ut.splice(t,1),t--,i()}}}function ud(n){if(Gr.length){const e=[...new Set(Gr)].sort((t,i)=>Vs(t)-Vs(i));if(Gr.length=0,yi){yi.push(...e);return}for(yi=e,rr=0;rr<yi.length;rr++){const t=yi[rr];t.active!==!1&&t()}yi=null,rr=0}}const Vs=n=>n.id==null?1/0:n.id,xm=(n,e)=>{const t=Vs(n)-Vs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function fd(n){ac=!1,zs=!0,Ut.sort(xm);try{for(Fn=0;Fn<Ut.length;Fn++){const e=Ut[Fn];e&&e.active!==!1&&wi(e,e.i,e.i?15:14)}}finally{Fn=0,Ut.length=0,ud(),zs=!1,Tu=null,(Ut.length||Gr.length)&&fd()}}let zt=null,Oa=null;function ma(n){const e=zt;return zt=n,Oa=n&&n.type.__scopeId||null,e}function hd(n){Oa=n}function dd(){Oa=null}function Wr(n,e=zt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&k0(-1);const s=ma(e);let o;try{o=n(...r)}finally{ma(s),i._d&&k0(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function qi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Hi(),wn(l,t,8,[n.el,a,n,e]),zi())}}function pd(n,e){n.shapeFlag&6&&n.component?pd(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function no(n,e){return qe(n)?Ft({name:n.name},e,{setup:n}):n}const bs=n=>!!n.type.__asyncLoader,md=n=>n.type.__isKeepAlive;function Sm(n,e){gd(n,"a",e)}function Mm(n,e){gd(n,"da",e)}function gd(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ba(e,i,t),t){let r=t.parent;for(;r&&r.parent;)md(r.parent.vnode)&&ym(i,e,t,r),r=r.parent}}function ym(n,e,t,i){const r=Ba(e,n,i,!0);vd(()=>{gu(i[e],r)},t)}function Ba(n,e,t=Nt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Hi();const a=io(t),l=wn(e,t,n,o);return a(),zi(),l});return i?r.unshift(s):r.push(s),s}}const hi=n=>(e,t=Nt)=>{(!ka||n==="sp")&&Ba(n,(...i)=>e(...i),t)},Em=hi("bm"),Vi=hi("m"),Cm=hi("bu"),_d=hi("u"),Ha=hi("bum"),vd=hi("um"),Tm=hi("sp"),Am=hi("rtg"),bm=hi("rtc");function wm(n,e=Nt){Ba("ec",n,e)}const wu="components";function Ru(n,e){return Sd(wu,n,!0,e)||n}const xd=Symbol.for("v-ndc");function Rm(n){return bt(n)?Sd(wu,n,!1)||n:n||xd}function Sd(n,e,t=!0,i=!1){const r=zt||Nt;if(r){const s=r.type;if(n===wu){const a=v3(s,!1);if(a&&(a===e||a===Pn(e)||a===Da(Pn(e))))return s}const o=U0(r[n]||s[n],e)||U0(r.appContext[n],e);return!o&&i?s:o}}function U0(n,e){return n&&(n[e]||n[Pn(e)]||n[Da(Pn(e))])}function Yt(n,e,t,i){let r;const s=t;if(Xe(n)||bt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(vt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s)}}else r=[];return r}function ga(n,e,t={},i,r){if(zt.isCE||zt.parent&&bs(zt.parent)&&zt.parent.isCE)return _t("slot",t,i);let s=n[e];s&&s._c&&(s._d=!1),Ke();const o=s&&Md(s(t)),a=Ri(ut,{key:(t.key||o&&o.key||`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Md(n){return n.some(e=>va(e)?!(e.type===Di||e.type===ut&&!Md(e.children)):!0)?n:null}const lc=n=>n?zd(n)?Du(n):lc(n.parent):null,ws=Ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>lc(n.parent),$root:n=>lc(n.root),$emit:n=>n.emit,$options:n=>Pu(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,bu(n.update)}),$nextTick:n=>n.n||(n.n=Au.bind(n.proxy)),$watch:n=>Jm.bind(n)}),ll=(n,e)=>n!==St&&!n.__isScriptSetup&&tt(n,e),Pm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ll(i,e))return o[e]=1,i[e];if(r!==St&&tt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&tt(c,e))return o[e]=3,s[e];if(t!==St&&tt(t,e))return o[e]=4,t[e];cc&&(o[e]=0)}}const u=ws[e];let f,h;if(u)return e==="$attrs"&&jt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==St&&tt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,tt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ll(r,e)?(r[e]=t,!0):i!==St&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==St&&tt(n,o)||ll(e,o)||(a=s[0])&&tt(a,o)||tt(i,o)||tt(ws,o)||tt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function N0(n){return Xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let cc=!0;function Lm(n){const e=Pu(n),t=n.proxy,i=n.ctx;cc=!1,e.beforeCreate&&F0(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:S,unmounted:M,render:L,renderTracked:P,renderTriggered:R,errorCaptured:I,serverPrefetch:A,expose:y,inheritAttrs:w,components:U,directives:D,filters:G}=e;if(c&&Im(c,i,null),o)for(const q in o){const O=o[q];qe(O)&&(i[q]=O.bind(t))}if(r){const q=r.call(t,t);vt(q)&&(n.data=Na(q))}if(cc=!0,s)for(const q in s){const O=s[q],se=qe(O)?O.bind(t,t):qe(O.get)?O.get.bind(t,t):pn,K=!qe(O)&&qe(O.set)?O.set.bind(t):pn,ue=sn({get:se,set:K});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>ue.value,set:Ee=>ue.value=Ee})}if(a)for(const q in a)yd(a[q],i,t,q);if(l){const q=qe(l)?l.call(t):l;Reflect.ownKeys(q).forEach(O=>{Ps(O,q[O])})}u&&F0(u,n,"c");function $(q,O){Xe(O)?O.forEach(se=>q(se.bind(t))):O&&q(O.bind(t))}if($(Em,f),$(Vi,h),$(Cm,d),$(_d,g),$(Sm,_),$(Mm,m),$(wm,I),$(bm,P),$(Am,R),$(Ha,E),$(vd,M),$(Tm,A),Xe(y))if(y.length){const q=n.exposed||(n.exposed={});y.forEach(O=>{Object.defineProperty(q,O,{get:()=>t[O],set:se=>t[O]=se})})}else n.exposed||(n.exposed={});L&&n.render===pn&&(n.render=L),w!=null&&(n.inheritAttrs=w),U&&(n.components=U),D&&(n.directives=D)}function Im(n,e,t=pn){Xe(n)&&(n=uc(n));for(const i in n){const r=n[i];let s;vt(r)?"default"in r?s=Bn(r.from||i,r.default,!0):s=Bn(r.from||i):s=Bn(r),Jt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function F0(n,e,t){wn(Xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function yd(n,e,t,i){const r=i.includes(".")?Fd(t,i):()=>t[i];if(bt(n)){const s=e[n];qe(s)&&Ls(r,s)}else if(qe(n))Ls(r,n.bind(t));else if(vt(n))if(Xe(n))n.forEach(s=>yd(s,e,t,i));else{const s=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(s)&&Ls(r,s,n)}}function Pu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>_a(l,c,o,!0)),_a(l,e,o)),vt(e)&&s.set(e,l),l}function _a(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&_a(n,s,t,!0),r&&r.forEach(o=>_a(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Dm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Dm={data:O0,props:B0,emits:B0,methods:Es,computed:Es,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:Es,directives:Es,watch:Nm,provide:O0,inject:Um};function O0(n,e){return e?n?function(){return Ft(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Um(n,e){return Es(uc(n),uc(e))}function uc(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Bt(n,e){return n?[...new Set([].concat(n,e))]:e}function Es(n,e){return n?Ft(Object.create(null),n,e):e}function B0(n,e){return n?Xe(n)&&Xe(e)?[...new Set([...n,...e])]:Ft(Object.create(null),N0(n),N0(e??{})):e}function Nm(n,e){if(!n)return e;if(!e)return n;const t=Ft(Object.create(null),n);for(const i in e)t[i]=Bt(n[i],e[i]);return t}function Ed(){return{app:null,config:{isNativeTag:Pp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fm=0;function Om(n,e){return function(i,r=null){qe(i)||(i=Ft({},i)),r!=null&&!vt(r)&&(r=null);const s=Ed(),o=new WeakSet;let a=!1;const l=s.app={_uid:Fm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:S3,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&qe(c.install)?(o.add(c),c.install(l,...u)):qe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=_t(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Du(h.component)}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Rs;Rs=l;try{return c()}finally{Rs=u}}};return l}}let Rs=null;function Ps(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function Bn(n,e,t=!1){const i=Nt||zt;if(i||Rs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Rs._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const Cd={},Td=()=>Object.create(Cd),Ad=n=>Object.getPrototypeOf(n)===Cd;function Bm(n,e,t,i=!1){const r={},s=Td();n.propsDefaults=Object.create(null),bd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:td(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Hm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=ot(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(za(n.emitsOptions,h))continue;const d=e[h];if(l)if(tt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Pn(h);r[g]=fc(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{bd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!tt(e,f)&&((u=vr(f))===f||!tt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=fc(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!tt(e,f))&&(delete s[f],c=!0)}c&&si(n.attrs,"set","")}function bd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ts(l))continue;const c=e[l];let u;r&&tt(r,u=Pn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:za(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ot(t),c=a||St;for(let u=0;u<s.length;u++){const f=s[u];t[f]=fc(r,l,f,c[f],n,!tt(c,f))}}return o}function fc(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=io(r);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===vr(t))&&(i=!0))}return i}const zm=new WeakMap;function wd(n,e,t=!1){const i=t?zm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=f=>{l=!0;const[h,d]=wd(f,e,!0);Ft(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return vt(n)&&i.set(n,Vr),Vr;if(Xe(s))for(let u=0;u<s.length;u++){const f=Pn(s[u]);H0(f)&&(o[f]=St)}else if(s)for(const u in s){const f=Pn(u);if(H0(f)){const h=s[u],d=o[f]=Xe(h)||qe(h)?{type:h}:Ft({},h),g=d.type;let _=!1,m=!0;if(Xe(g))for(let p=0;p<g.length;++p){const E=g[p],S=qe(E)&&E.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(m=!1)}else _=qe(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||tt(d,"default"))&&a.push(f)}}const c=[o,a];return vt(n)&&i.set(n,c),c}function H0(n){return n[0]!=="$"&&!Ts(n)}const Rd=n=>n[0]==="_"||n==="$stable",Lu=n=>Xe(n)?n.map(Un):[Un(n)],Vm=(n,e,t)=>{if(e._n)return e;const i=Wr((...r)=>Lu(e(...r)),t);return i._c=!1,i},Pd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Rd(r))continue;const s=n[r];if(qe(s))e[r]=Vm(r,s,i);else if(s!=null){const o=Lu(s);e[r]=()=>o}}},Ld=(n,e)=>{const t=Lu(e);n.slots.default=()=>t},Id=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},km=(n,e,t)=>{const i=n.slots=Td();if(n.vnode.shapeFlag&32){const r=e._;r?(Id(i,e,t),t&&Hh(i,"_",r,!0)):Pd(e,i)}else e&&Ld(n,e)},Gm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=St;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Id(r,e,t):(s=!e.$stable,Pd(e,r)),o=e}else e&&(Ld(n,e),o={default:1});if(s)for(const a in r)!Rd(a)&&o[a]==null&&delete r[a]};function hc(n,e,t,i,r=!1){if(Xe(n)){n.forEach((h,d)=>hc(h,e&&(Xe(e)?e[d]:e),t,i,r));return}if(bs(i)&&!r)return;const s=i.shapeFlag&4?Du(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===St?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(bt(c)?(u[c]=null,tt(f,c)&&(f[c]=null)):Jt(c)&&(c.value=null)),qe(l))wi(l,a,12,[o,u]);else{const h=bt(l),d=Jt(l);if(h||d){const g=()=>{if(n.f){const _=h?tt(f,l)?f[l]:u[l]:l.value;r?Xe(_)&&gu(_,s):Xe(_)?_.includes(s)||_.push(s):h?(u[l]=[s],tt(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,tt(f,l)&&(f[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,$t(g,t)):g()}}}const Wm=Symbol("_vte"),Xm=n=>n.__isTeleport,$t=o3;function $m(n){return qm(n)}function qm(n,e){const t=zh();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=pn,insertStaticContent:g}=n,_=(C,v,k,ne=null,j=null,Y=null,de=void 0,oe=null,ce=!!v.dynamicChildren)=>{if(C===v)return;C&&!ms(C,v)&&(ne=N(C),Ee(C,j,Y,!0),C=null),v.patchFlag===-2&&(ce=!1,v.dynamicChildren=null);const{type:fe,ref:b,shapeFlag:x}=v;switch(fe){case Va:m(C,v,k,ne);break;case Di:p(C,v,k,ne);break;case fl:C==null&&E(v,k,ne,de);break;case ut:U(C,v,k,ne,j,Y,de,oe,ce);break;default:x&1?L(C,v,k,ne,j,Y,de,oe,ce):x&6?D(C,v,k,ne,j,Y,de,oe,ce):(x&64||x&128)&&fe.process(C,v,k,ne,j,Y,de,oe,ce,le)}b!=null&&j&&hc(b,C&&C.ref,Y,v||C,!v)},m=(C,v,k,ne)=>{if(C==null)i(v.el=a(v.children),k,ne);else{const j=v.el=C.el;v.children!==C.children&&c(j,v.children)}},p=(C,v,k,ne)=>{C==null?i(v.el=l(v.children||""),k,ne):v.el=C.el},E=(C,v,k,ne)=>{[C.el,C.anchor]=g(C.children,v,k,ne,C.el,C.anchor)},S=({el:C,anchor:v},k,ne)=>{let j;for(;C&&C!==v;)j=h(C),i(C,k,ne),C=j;i(v,k,ne)},M=({el:C,anchor:v})=>{let k;for(;C&&C!==v;)k=h(C),r(C),C=k;r(v)},L=(C,v,k,ne,j,Y,de,oe,ce)=>{v.type==="svg"?de="svg":v.type==="math"&&(de="mathml"),C==null?P(v,k,ne,j,Y,de,oe,ce):A(C,v,j,Y,de,oe,ce)},P=(C,v,k,ne,j,Y,de,oe)=>{let ce,fe;const{props:b,shapeFlag:x,transition:F,dirs:X}=C;if(ce=C.el=o(C.type,Y,b&&b.is,b),x&8?u(ce,C.children):x&16&&I(C.children,ce,null,ne,j,cl(C,Y),de,oe),X&&qi(C,null,ne,"created"),R(ce,C,C.scopeId,de,ne),b){for(const Z in b)Z!=="value"&&!Ts(Z)&&s(ce,Z,null,b[Z],Y,ne);"value"in b&&s(ce,"value",null,b.value,Y),(fe=b.onVnodeBeforeMount)&&Dn(fe,ne,C)}X&&qi(C,null,ne,"beforeMount");const ee=Ym(j,F);ee&&F.beforeEnter(ce),i(ce,v,k),((fe=b&&b.onVnodeMounted)||ee||X)&&$t(()=>{fe&&Dn(fe,ne,C),ee&&F.enter(ce),X&&qi(C,null,ne,"mounted")},j)},R=(C,v,k,ne,j)=>{if(k&&d(C,k),ne)for(let Y=0;Y<ne.length;Y++)d(C,ne[Y]);if(j){let Y=j.subTree;if(v===Y){const de=j.vnode;R(C,de,de.scopeId,de.slotScopeIds,j.parent)}}},I=(C,v,k,ne,j,Y,de,oe,ce=0)=>{for(let fe=ce;fe<C.length;fe++){const b=C[fe]=oe?Ei(C[fe]):Un(C[fe]);_(null,b,v,k,ne,j,Y,de,oe)}},A=(C,v,k,ne,j,Y,de)=>{const oe=v.el=C.el;let{patchFlag:ce,dynamicChildren:fe,dirs:b}=v;ce|=C.patchFlag&16;const x=C.props||St,F=v.props||St;let X;if(k&&Yi(k,!1),(X=F.onVnodeBeforeUpdate)&&Dn(X,k,v,C),b&&qi(v,C,k,"beforeUpdate"),k&&Yi(k,!0),(x.innerHTML&&F.innerHTML==null||x.textContent&&F.textContent==null)&&u(oe,""),fe?y(C.dynamicChildren,fe,oe,k,ne,cl(v,j),Y):de||O(C,v,oe,null,k,ne,cl(v,j),Y,!1),ce>0){if(ce&16)w(oe,x,F,k,j);else if(ce&2&&x.class!==F.class&&s(oe,"class",null,F.class,j),ce&4&&s(oe,"style",x.style,F.style,j),ce&8){const ee=v.dynamicProps;for(let Z=0;Z<ee.length;Z++){const Me=ee[Z],_e=x[Me],be=F[Me];(be!==_e||Me==="value")&&s(oe,Me,_e,be,j,k)}}ce&1&&C.children!==v.children&&u(oe,v.children)}else!de&&fe==null&&w(oe,x,F,k,j);((X=F.onVnodeUpdated)||b)&&$t(()=>{X&&Dn(X,k,v,C),b&&qi(v,C,k,"updated")},ne)},y=(C,v,k,ne,j,Y,de)=>{for(let oe=0;oe<v.length;oe++){const ce=C[oe],fe=v[oe],b=ce.el&&(ce.type===ut||!ms(ce,fe)||ce.shapeFlag&70)?f(ce.el):k;_(ce,fe,b,null,ne,j,Y,de,!0)}},w=(C,v,k,ne,j)=>{if(v!==k){if(v!==St)for(const Y in v)!Ts(Y)&&!(Y in k)&&s(C,Y,v[Y],null,j,ne);for(const Y in k){if(Ts(Y))continue;const de=k[Y],oe=v[Y];de!==oe&&Y!=="value"&&s(C,Y,oe,de,j,ne)}"value"in k&&s(C,"value",v.value,k.value,j)}},U=(C,v,k,ne,j,Y,de,oe,ce)=>{const fe=v.el=C?C.el:a(""),b=v.anchor=C?C.anchor:a("");let{patchFlag:x,dynamicChildren:F,slotScopeIds:X}=v;X&&(oe=oe?oe.concat(X):X),C==null?(i(fe,k,ne),i(b,k,ne),I(v.children||[],k,b,j,Y,de,oe,ce)):x>0&&x&64&&F&&C.dynamicChildren?(y(C.dynamicChildren,F,k,j,Y,de,oe),(v.key!=null||j&&v===j.subTree)&&Dd(C,v,!0)):O(C,v,k,b,j,Y,de,oe,ce)},D=(C,v,k,ne,j,Y,de,oe,ce)=>{v.slotScopeIds=oe,C==null?v.shapeFlag&512?j.ctx.activate(v,k,ne,de,ce):G(v,k,ne,j,Y,de,ce):W(C,v,ce)},G=(C,v,k,ne,j,Y,de)=>{const oe=C.component=d3(C,ne,j);if(md(C)&&(oe.ctx.renderer=le),p3(oe,!1,de),oe.asyncDep){if(j&&j.registerDep(oe,$,de),!C.el){const ce=oe.subTree=_t(Di);p(null,ce,v,k)}}else $(oe,C,v,k,j,Y,de)},W=(C,v,k)=>{const ne=v.component=C.component;if(i3(C,v,k))if(ne.asyncDep&&!ne.asyncResolved){q(ne,v,k);return}else ne.next=v,_m(ne.update),ne.effect.dirty=!0,ne.update();else v.el=C.el,ne.vnode=v},$=(C,v,k,ne,j,Y,de)=>{const oe=()=>{if(C.isMounted){let{next:b,bu:x,u:F,parent:X,vnode:ee}=C;{const Le=Ud(C);if(Le){b&&(b.el=ee.el,q(C,b,de)),Le.asyncDep.then(()=>{C.isUnmounted||oe()});return}}let Z=b,Me;Yi(C,!1),b?(b.el=ee.el,q(C,b,de)):b=ee,x&&ol(x),(Me=b.props&&b.props.onVnodeBeforeUpdate)&&Dn(Me,X,b,ee),Yi(C,!0);const _e=ul(C),be=C.subTree;C.subTree=_e,_(be,_e,f(be.el),N(be),C,j,Y),b.el=_e.el,Z===null&&r3(C,_e.el),F&&$t(F,j),(Me=b.props&&b.props.onVnodeUpdated)&&$t(()=>Dn(Me,X,b,ee),j)}else{let b;const{el:x,props:F}=v,{bm:X,m:ee,parent:Z}=C,Me=bs(v);if(Yi(C,!1),X&&ol(X),!Me&&(b=F&&F.onVnodeBeforeMount)&&Dn(b,Z,v),Yi(C,!0),x&&ze){const _e=()=>{C.subTree=ul(C),ze(x,C.subTree,C,j,null)};Me?v.type.__asyncLoader().then(()=>!C.isUnmounted&&_e()):_e()}else{const _e=C.subTree=ul(C);_(null,_e,k,ne,C,j,Y),v.el=_e.el}if(ee&&$t(ee,j),!Me&&(b=F&&F.onVnodeMounted)){const _e=v;$t(()=>Dn(b,Z,_e),j)}(v.shapeFlag&256||Z&&bs(Z.vnode)&&Z.vnode.shapeFlag&256)&&C.a&&$t(C.a,j),C.isMounted=!0,v=k=ne=null}},ce=C.effect=new vu(oe,pn,()=>bu(fe),C.scope),fe=C.update=()=>{ce.dirty&&ce.run()};fe.i=C,fe.id=C.uid,Yi(C,!0),fe()},q=(C,v,k)=>{v.component=C;const ne=C.vnode.props;C.vnode=v,C.next=null,Hm(C,v.props,ne,k),Gm(C,v.children,k),Hi(),D0(C),zi()},O=(C,v,k,ne,j,Y,de,oe,ce=!1)=>{const fe=C&&C.children,b=C?C.shapeFlag:0,x=v.children,{patchFlag:F,shapeFlag:X}=v;if(F>0){if(F&128){K(fe,x,k,ne,j,Y,de,oe,ce);return}else if(F&256){se(fe,x,k,ne,j,Y,de,oe,ce);return}}X&8?(b&16&&J(fe,j,Y),x!==fe&&u(k,x)):b&16?X&16?K(fe,x,k,ne,j,Y,de,oe,ce):J(fe,j,Y,!0):(b&8&&u(k,""),X&16&&I(x,k,ne,j,Y,de,oe,ce))},se=(C,v,k,ne,j,Y,de,oe,ce)=>{C=C||Vr,v=v||Vr;const fe=C.length,b=v.length,x=Math.min(fe,b);let F;for(F=0;F<x;F++){const X=v[F]=ce?Ei(v[F]):Un(v[F]);_(C[F],X,k,null,j,Y,de,oe,ce)}fe>b?J(C,j,Y,!0,!1,x):I(v,k,ne,j,Y,de,oe,ce,x)},K=(C,v,k,ne,j,Y,de,oe,ce)=>{let fe=0;const b=v.length;let x=C.length-1,F=b-1;for(;fe<=x&&fe<=F;){const X=C[fe],ee=v[fe]=ce?Ei(v[fe]):Un(v[fe]);if(ms(X,ee))_(X,ee,k,null,j,Y,de,oe,ce);else break;fe++}for(;fe<=x&&fe<=F;){const X=C[x],ee=v[F]=ce?Ei(v[F]):Un(v[F]);if(ms(X,ee))_(X,ee,k,null,j,Y,de,oe,ce);else break;x--,F--}if(fe>x){if(fe<=F){const X=F+1,ee=X<b?v[X].el:ne;for(;fe<=F;)_(null,v[fe]=ce?Ei(v[fe]):Un(v[fe]),k,ee,j,Y,de,oe,ce),fe++}}else if(fe>F)for(;fe<=x;)Ee(C[fe],j,Y,!0),fe++;else{const X=fe,ee=fe,Z=new Map;for(fe=ee;fe<=F;fe++){const Pe=v[fe]=ce?Ei(v[fe]):Un(v[fe]);Pe.key!=null&&Z.set(Pe.key,fe)}let Me,_e=0;const be=F-ee+1;let Le=!1,pe=0;const we=new Array(be);for(fe=0;fe<be;fe++)we[fe]=0;for(fe=X;fe<=x;fe++){const Pe=C[fe];if(_e>=be){Ee(Pe,j,Y,!0);continue}let ye;if(Pe.key!=null)ye=Z.get(Pe.key);else for(Me=ee;Me<=F;Me++)if(we[Me-ee]===0&&ms(Pe,v[Me])){ye=Me;break}ye===void 0?Ee(Pe,j,Y,!0):(we[ye-ee]=fe+1,ye>=pe?pe=ye:Le=!0,_(Pe,v[ye],k,null,j,Y,de,oe,ce),_e++)}const Be=Le?Zm(we):Vr;for(Me=Be.length-1,fe=be-1;fe>=0;fe--){const Pe=ee+fe,ye=v[Pe],ke=Pe+1<b?v[Pe+1].el:ne;we[fe]===0?_(null,ye,k,ke,j,Y,de,oe,ce):Le&&(Me<0||fe!==Be[Me]?ue(ye,k,ke,2):Me--)}}},ue=(C,v,k,ne,j=null)=>{const{el:Y,type:de,transition:oe,children:ce,shapeFlag:fe}=C;if(fe&6){ue(C.component.subTree,v,k,ne);return}if(fe&128){C.suspense.move(v,k,ne);return}if(fe&64){de.move(C,v,k,le);return}if(de===ut){i(Y,v,k);for(let x=0;x<ce.length;x++)ue(ce[x],v,k,ne);i(C.anchor,v,k);return}if(de===fl){S(C,v,k);return}if(ne!==2&&fe&1&&oe)if(ne===0)oe.beforeEnter(Y),i(Y,v,k),$t(()=>oe.enter(Y),j);else{const{leave:x,delayLeave:F,afterLeave:X}=oe,ee=()=>i(Y,v,k),Z=()=>{x(Y,()=>{ee(),X&&X()})};F?F(Y,ee,Z):Z()}else i(Y,v,k)},Ee=(C,v,k,ne=!1,j=!1)=>{const{type:Y,props:de,ref:oe,children:ce,dynamicChildren:fe,shapeFlag:b,patchFlag:x,dirs:F,cacheIndex:X}=C;if(x===-2&&(j=!1),oe!=null&&hc(oe,null,k,C,!0),X!=null&&(v.renderCache[X]=void 0),b&256){v.ctx.deactivate(C);return}const ee=b&1&&F,Z=!bs(C);let Me;if(Z&&(Me=de&&de.onVnodeBeforeUnmount)&&Dn(Me,v,C),b&6)ge(C.component,k,ne);else{if(b&128){C.suspense.unmount(k,ne);return}ee&&qi(C,null,v,"beforeUnmount"),b&64?C.type.remove(C,v,k,le,ne):fe&&!fe.hasOnce&&(Y!==ut||x>0&&x&64)?J(fe,v,k,!1,!0):(Y===ut&&x&384||!j&&b&16)&&J(ce,v,k),ne&&Oe(C)}(Z&&(Me=de&&de.onVnodeUnmounted)||ee)&&$t(()=>{Me&&Dn(Me,v,C),ee&&qi(C,null,v,"unmounted")},k)},Oe=C=>{const{type:v,el:k,anchor:ne,transition:j}=C;if(v===ut){ie(k,ne);return}if(v===fl){M(C);return}const Y=()=>{r(k),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(C.shapeFlag&1&&j&&!j.persisted){const{leave:de,delayLeave:oe}=j,ce=()=>de(k,Y);oe?oe(C.el,Y,ce):ce()}else Y()},ie=(C,v)=>{let k;for(;C!==v;)k=h(C),r(C),C=k;r(v)},ge=(C,v,k)=>{const{bum:ne,scope:j,update:Y,subTree:de,um:oe,m:ce,a:fe}=C;z0(ce),z0(fe),ne&&ol(ne),j.stop(),Y&&(Y.active=!1,Ee(de,C,v,k)),oe&&$t(oe,v),$t(()=>{C.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},J=(C,v,k,ne=!1,j=!1,Y=0)=>{for(let de=Y;de<C.length;de++)Ee(C[de],v,k,ne,j)},N=C=>{if(C.shapeFlag&6)return N(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const v=h(C.anchor||C.el),k=v&&v[Wm];return k?h(k):v};let re=!1;const ae=(C,v,k)=>{C==null?v._vnode&&Ee(v._vnode,null,null,!0):_(v._vnode||null,C,v,null,null,null,k),re||(re=!0,D0(),ud(),re=!1),v._vnode=C},le={p:_,um:Ee,m:ue,r:Oe,mt:G,mc:I,pc:O,pbc:y,n:N,o:n};let Ne,ze;return{render:ae,hydrate:Ne,createApp:Om(ae,Ne)}}function cl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Yi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Ym(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Dd(n,e,t=!1){const i=n.children,r=e.children;if(Xe(i)&&Xe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ei(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Dd(o,a)),a.type===Va&&(a.el=o.el)}}function Zm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Ud(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ud(e)}function z0(n){if(n)for(let e=0;e<n.length;e++)n[e].active=!1}const Km=Symbol.for("v-scx"),jm=()=>Bn(Km),Ao={};function Ls(n,e,t){return Nd(n,e,t)}function Nd(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=St){if(e&&s){const P=e;e=(...R)=>{P(...R),L()}}const l=Nt,c=P=>i===!0?P:sr(P,i===!1?1:void 0);let u,f=!1,h=!1;if(Jt(n)?(u=()=>n.value,f=Kr(n)):As(n)?(u=()=>c(n),f=!0):Xe(n)?(h=!0,f=n.some(P=>As(P)||Kr(P)),u=()=>n.map(P=>{if(Jt(P))return P.value;if(As(P))return c(P);if(qe(P))return wi(P,l,2)})):qe(n)?e?u=()=>wi(n,l,2):u=()=>(d&&d(),wn(n,l,3,[g])):u=pn,e&&i){const P=u;u=()=>sr(P())}let d,g=P=>{d=S.onStop=()=>{wi(P,l,4),d=S.onStop=void 0}},_;if(ka)if(g=pn,e?t&&wn(e,l,3,[u(),h?[]:void 0,g]):u(),r==="sync"){const P=jm();_=P.__watcherHandles||(P.__watcherHandles=[])}else return pn;let m=h?new Array(n.length).fill(Ao):Ao;const p=()=>{if(!(!S.active||!S.dirty))if(e){const P=S.run();(i||f||(h?P.some((R,I)=>Ii(R,m[I])):Ii(P,m)))&&(d&&d(),wn(e,l,3,[P,m===Ao?void 0:h&&m[0]===Ao?[]:m,g]),m=P)}else S.run()};p.allowRecurse=!!e;let E;r==="sync"?E=p:r==="post"?E=()=>$t(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),E=()=>bu(p));const S=new vu(u,pn,E),M=Wp(),L=()=>{S.stop(),M&&gu(M.effects,S)};return e?t?p():m=S.run():r==="post"?$t(S.run.bind(S),l&&l.suspense):S.run(),_&&_.push(L),L}function Jm(n,e,t){const i=this.proxy,r=bt(n)?n.includes(".")?Fd(i,n):()=>i[n]:n.bind(i,i);let s;qe(e)?s=e:(s=e.handler,t=e);const o=io(this),a=Nd(r,s.bind(i),t);return o(),a}function Fd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function sr(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Jt(n))sr(n.value,e,t);else if(Xe(n))for(let i=0;i<n.length;i++)sr(n[i],e,t);else if(Nh(n)||kr(n))n.forEach(i=>{sr(i,e,t)});else if(Bh(n)){for(const i in n)sr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&sr(n[i],e,t)}return n}const Qm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Pn(e)}Modifiers`]||n[`${vr(e)}Modifiers`];function e3(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||St;let r=t;const s=e.startsWith("update:"),o=s&&Qm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>bt(u)?u.trim():u)),o.number&&(r=t.map(Np)));let a,l=i[a=sl(e)]||i[a=sl(Pn(e))];!l&&s&&(l=i[a=sl(vr(e))]),l&&wn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,wn(c,n,6,r)}}function Od(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=Od(c,e,!0);u&&(a=!0,Ft(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(vt(n)&&i.set(n,null),null):(Xe(s)?s.forEach(l=>o[l]=null):Ft(o,s),vt(n)&&i.set(n,o),o)}function za(n,e){return!n||!Pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,vr(e))||tt(n,e))}function ul(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=ma(n);let p,E;try{if(t.shapeFlag&4){const M=r||i,L=M;p=Un(c.call(L,M,u,f,d,h,g)),E=a}else{const M=e;p=Un(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),E=e.props?a:t3(a)}}catch(M){Is.length=0,Fa(M,n,1),p=_t(Di)}let S=p;if(E&&_!==!1){const M=Object.keys(E),{shapeFlag:L}=S;M.length&&L&7&&(s&&M.some(mu)&&(E=n3(E,s)),S=jr(S,E,!1,!0))}return t.dirs&&(S=jr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),p=S,ma(m),p}const t3=n=>{let e;for(const t in n)(t==="class"||t==="style"||Pa(t))&&((e||(e={}))[t]=n[t]);return e},n3=(n,e)=>{const t={};for(const i in n)(!mu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function i3(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?V0(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!za(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?V0(i,o,c):!0:!!o;return!1}function V0(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!za(t,s))return!0}return!1}function r3({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const s3=n=>n.__isSuspense;function o3(n,e){e&&e.pendingBranch?Xe(n)?e.effects.push(...n):e.effects.push(n):vm(n)}const ut=Symbol.for("v-fgt"),Va=Symbol.for("v-txt"),Di=Symbol.for("v-cmt"),fl=Symbol.for("v-stc"),Is=[];let on=null;function Ke(n=!1){Is.push(on=n?null:[])}function a3(){Is.pop(),on=Is[Is.length-1]||null}let ks=1;function k0(n){ks+=n,n<0&&on&&(on.hasOnce=!0)}function Bd(n){return n.dynamicChildren=ks>0?on||Vr:null,a3(),ks>0&&on&&on.push(n),n}function nt(n,e,t,i,r,s){return Bd(ve(n,e,t,i,r,s,!0))}function Ri(n,e,t,i,r){return Bd(_t(n,e,t,i,r,!0))}function va(n){return n?n.__v_isVNode===!0:!1}function ms(n,e){return n.type===e.type&&n.key===e.key}const Hd=({key:n})=>n??null,na=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?bt(n)||Jt(n)||qe(n)?{i:zt,r:n,k:e,f:!!t}:n:null);function ve(n,e=null,t=null,i=0,r=null,s=n===ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Hd(e),ref:e&&na(e),scopeId:Oa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:zt};return a?(Iu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=bt(t)?8:16),ks>0&&!o&&on&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&on.push(l),l}const _t=l3;function l3(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===xd)&&(n=Di),va(n)){const a=jr(n,e,!0);return t&&Iu(a,t),ks>0&&!s&&on&&(a.shapeFlag&6?on[on.indexOf(n)]=a:on.push(a)),a.patchFlag=-2,a}if(x3(n)&&(n=n.__vccOpts),e){e=c3(e);let{class:a,style:l}=e;a&&!bt(a)&&(e.class=li(a)),vt(l)&&(id(l)&&!Xe(l)&&(l=Ft({},l)),e.style=Bs(l))}const o=bt(n)?1:s3(n)?128:Xm(n)?64:vt(n)?4:qe(n)?2:0;return ve(n,e,t,i,r,o,s,!0)}function c3(n){return n?id(n)||Ad(n)?Ft({},n):n:null}function jr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?u3(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Hd(c),ref:e&&e.ref?t&&s?Xe(s)?s.concat(na(e)):[s,na(e)]:na(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ut?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&jr(n.ssContent),ssFallback:n.ssFallback&&jr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&pd(u,l.clone(u)),u}function Jr(n=" ",e=0){return _t(Va,null,n,e)}function ia(n="",e=!1){return e?(Ke(),Ri(Di,null,n)):_t(Di,null,n)}function Un(n){return n==null||typeof n=="boolean"?_t(Di):Xe(n)?_t(ut,null,n.slice()):typeof n=="object"?Ei(n):_t(Va,null,String(n))}function Ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:jr(n)}function Iu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Xe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Iu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ad(e)?e._ctx=zt:r===3&&zt&&(zt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:zt},t=32):(e=String(e),i&64?(t=16,e=[Jr(e)]):t=8);n.children=e,n.shapeFlag|=t}function u3(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=li([e.class,i.class]));else if(r==="style")e.style=Bs([e.style,i.style]);else if(Pa(r)){const s=e[r],o=i[r];o&&s!==o&&!(Xe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Dn(n,e,t,i=null){wn(n,e,7,[t,i])}const f3=Ed();let h3=0;function d3(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||f3,s={uid:h3++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new kp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wd(i,r),emitsOptions:Od(i,r),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=e3.bind(null,s),n.ce&&n.ce(s),s}let Nt=null,xa,dc;{const n=zh(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};xa=e("__VUE_INSTANCE_SETTERS__",t=>Nt=t),dc=e("__VUE_SSR_SETTERS__",t=>ka=t)}const io=n=>{const e=Nt;return xa(n),n.scope.on(),()=>{n.scope.off(),xa(e)}},G0=()=>{Nt&&Nt.scope.off(),xa(null)};function zd(n){return n.vnode.shapeFlag&4}let ka=!1;function p3(n,e=!1,t=!1){e&&dc(e);const{props:i,children:r}=n.vnode,s=zd(n);Bm(n,i,s,e),km(n,r,t);const o=s?m3(n,e):void 0;return e&&dc(!1),o}function m3(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Pm);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?_3(n):null,s=io(n);Hi();const o=wi(i,n,0,[n.props,r]);if(zi(),s(),Fh(o)){if(o.then(G0,G0),e)return o.then(a=>{W0(n,a,e)}).catch(a=>{Fa(a,n,0)});n.asyncDep=o}else W0(n,o,e)}else Vd(n,e)}function W0(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=ad(e)),Vd(n,t)}let X0;function Vd(n,e,t){const i=n.type;if(!n.render){if(!e&&X0&&!i.render){const r=i.template||Pu(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ft(Ft({isCustomElement:s,delimiters:a},o),l);i.render=X0(r,c)}}n.render=i.render||pn}{const r=io(n);Hi();try{Lm(n)}finally{zi(),r()}}}const g3={get(n,e){return jt(n,"get",""),n[e]}};function _3(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,g3),slots:n.slots,emit:n.emit,expose:e}}function Du(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ad(um(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ws)return ws[t](n)},has(e,t){return t in e||t in ws}})):n.proxy}function v3(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function x3(n){return qe(n)&&"__vccOpts"in n}const sn=(n,e)=>fm(n,e,ka);function kd(n,e,t){const i=arguments.length;return i===2?vt(e)&&!Xe(e)?va(e)?_t(n,null,[e]):_t(n,e):_t(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&va(t)&&(t=[t]),_t(n,e,t))}const S3="3.4.36";/**
* @vue/runtime-dom v3.4.36
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const M3="http://www.w3.org/2000/svg",y3="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,$0=Jn&&Jn.createElement("template"),E3={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Jn.createElementNS(M3,n):e==="mathml"?Jn.createElementNS(y3,n):t?Jn.createElement(n,{is:t}):Jn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Jn.createTextNode(n),createComment:n=>Jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{$0.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=$0.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},C3=Symbol("_vtc");function T3(n,e,t){const i=n[C3];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const q0=Symbol("_vod"),A3=Symbol("_vsh"),b3=Symbol(""),w3=/(^|;)\s*display\s*:/;function R3(n,e,t){const i=n.style,r=bt(t);let s=!1;if(t&&!r){if(e)if(bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ra(i,a,"")}else for(const o in e)t[o]==null&&ra(i,o,"");for(const o in t)o==="display"&&(s=!0),ra(i,o,t[o])}else if(r){if(e!==t){const o=i[b3];o&&(t+=";"+o),i.cssText=t,s=w3.test(t)}}else e&&n.removeAttribute("style");q0 in n&&(n[q0]=s?i.display:"",n[A3]&&(i.display="none"))}const Y0=/\s*!important$/;function ra(n,e,t){if(Xe(t))t.forEach(i=>ra(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=P3(n,e);Y0.test(t)?n.setProperty(vr(i),t.replace(Y0,""),"important"):n[i]=t}}const Z0=["Webkit","Moz","ms"],hl={};function P3(n,e){const t=hl[e];if(t)return t;let i=Pn(e);if(i!=="filter"&&i in n)return hl[e]=i;i=Da(i);for(let r=0;r<Z0.length;r++){const s=Z0[r]+i;if(s in n)return hl[e]=s}return e}const K0="http://www.w3.org/1999/xlink";function j0(n,e,t,i,r,s=Vp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(K0,e.slice(6,e.length)):n.setAttributeNS(K0,e,t):t==null||s&&!Vh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Bi(t)?String(t):t)}function L3(n,e,t,i){if(e==="innerHTML"||e==="textContent"){if(t==null)return;n[e]=t;return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?"":String(t);(o!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Vh(t):t==null&&o==="string"?(t="",s=!0):o==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(e)}function I3(n,e,t,i){n.addEventListener(e,t,i)}function D3(n,e,t,i){n.removeEventListener(e,t,i)}const J0=Symbol("_vei");function U3(n,e,t,i,r=null){const s=n[J0]||(n[J0]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=N3(e);if(i){const c=s[e]=B3(i,r);I3(n,a,c,l)}else o&&(D3(n,a,o,l),s[e]=void 0)}}const Q0=/(?:Once|Passive|Capture)$/;function N3(n){let e;if(Q0.test(n)){e={};let i;for(;i=n.match(Q0);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vr(n.slice(2)),e]}let dl=0;const F3=Promise.resolve(),O3=()=>dl||(F3.then(()=>dl=0),dl=Date.now());function B3(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;wn(H3(i,t.value),e,5,[i])};return t.value=n,t.attached=O3(),t}function H3(n,e){if(Xe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const ef=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,z3=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?T3(n,i,o):e==="style"?R3(n,t,i):Pa(e)?mu(e)||U3(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):V3(n,e,i,o))?(L3(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&j0(n,e,i,o,s,e!=="value")):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),j0(n,e,i,o))};function V3(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ef(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ef(e)&&bt(t)?!1:e in n}const k3=Ft({patchProp:z3},E3);let tf;function G3(){return tf||(tf=$m(k3))}const W3=(...n)=>{const e=G3().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=$3(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,X3(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function X3(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function $3(n){return bt(n)?document.querySelector(n):n}const Uu=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},q3=n=>(hd("data-v-998b3e6f"),n=n(),dd(),n),Y3=["aria-expanded"],Z3=q3(()=>ve("svg",{width:"100",height:"100",viewBox:"0 0 100 100"},[ve("path",{class:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),ve("path",{class:"line line2",d:"M 20,50 H 80"}),ve("path",{class:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})],-1)),K3=[Z3],j3={__name:"Hamburger",props:["opened"],emits:["toggle-menu"],setup(n,{emit:e}){const t=n,i=e,r=()=>{i("toggle-menu")};return(s,o)=>(Ke(),nt("button",{class:li({menu:!0,opened:t.opened}),onClick:r,"aria-label":"Main Menu","aria-expanded":t.opened},K3,10,Y3))}},J3=Uu(j3,[["__scopeId","data-v-998b3e6f"]]),Gd="data:image/svg+xml,%3csvg%20width='103'%20height='101'%20viewBox='0%200%20103%20101'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_1_450)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M66.2172%2081H83V20L51.5%2048.6958L20%2020V81H36.7828V48.8676L51.5%2063.1017L66.2172%2048.8676V81ZM71.9013%2037.7924V75.3259H77.3159V32.8597L71.9013%2037.7924ZM31.0987%2037.7924L25.6841%2032.8597V75.3259H31.0987V37.7924Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_1_450'%20x='0.799999'%20y='0.799999'%20width='101.4'%20height='99.4'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.23%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_1_450'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_1_450'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Q3="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_231)'%3e%3cg%20filter='url(%23filter0_d_176_231)'%3e%3cpath%20d='M79.3825%2041.3863C79.1875%2041.258%2077.5625%2040.007%2074.0525%2040.007C73.1425%2040.007%2072.2325%2040.1032%2071.3225%2040.2636C70.64%2035.7727%2066.8375%2033.4951%2066.675%2033.3989L65.7325%2032.8536L65.1475%2033.7197C64.3675%2034.8745%2063.75%2036.1897%2063.49%2037.537C62.84%2040.1032%2063.23%2042.5411%2064.5625%2044.6262C62.97%2045.5244%2060.37%2045.749%2059.8175%2045.749H17.015C15.91%2045.749%2015%2046.6471%2015%2047.7699C15%2051.4589%2015.585%2055.1478%2016.885%2058.6123C18.3475%2062.4296%2020.5575%2065.2524%2023.385%2066.9847C26.57%2068.9093%2031.8025%2070%2037.75%2070C40.3175%2070%2042.9825%2069.7755%2045.615%2069.2943C49.255%2068.6527%2052.765%2067.4017%2055.9825%2065.5732C58.6472%2064.0692%2061.0323%2062.1274%2063.035%2059.8312C66.4475%2056.0781%2068.4625%2051.8117%2069.925%2048.1227H70.5425C74.2475%2048.1227%2076.555%2046.6471%2077.8225%2045.3961C78.6675%2044.6262%2079.285%2043.696%2079.74%2042.6053L80%2041.8354L79.3825%2041.3863ZM21.0125%2044.5621H26.7325C26.9925%2044.5621%2027.2525%2044.3375%2027.2525%2044.0488V38.9805C27.2525%2038.7238%2027.025%2038.4672%2026.7325%2038.4672H21.0125C20.72%2038.4672%2020.4925%2038.6918%2020.4925%2038.9805V44.0488C20.525%2044.3375%2020.72%2044.5621%2021.0125%2044.5621ZM28.91%2044.5621H34.63C34.89%2044.5621%2035.15%2044.3375%2035.15%2044.0488V38.9805C35.15%2038.7238%2034.9225%2038.4672%2034.63%2038.4672H28.91C28.6175%2038.4672%2028.39%2038.6918%2028.39%2038.9805V44.0488C28.4225%2044.3375%2028.6175%2044.5621%2028.91%2044.5621ZM36.9375%2044.5621H42.625C42.95%2044.5621%2043.1775%2044.3375%2043.1775%2044.0488V38.9805C43.1775%2038.7238%2042.9825%2038.4672%2042.625%2038.4672H36.9375C36.6775%2038.4672%2036.45%2038.6918%2036.45%2038.9805V44.0488C36.45%2044.3375%2036.645%2044.5621%2036.9375%2044.5621ZM44.8675%2044.5621H50.62C50.88%2044.5621%2051.1075%2044.3375%2051.1075%2044.0488V38.9805C51.1075%2038.7238%2050.9125%2038.4672%2050.62%2038.4672H44.8675C44.6075%2038.4672%2044.38%2038.6918%2044.38%2038.9805V44.0488C44.38%2044.3375%2044.6075%2044.5621%2044.8675%2044.5621ZM28.91%2037.3766H34.63C34.89%2037.3766%2035.15%2037.0879%2035.15%2036.7992V31.7629C35.15%2031.4742%2034.9225%2031.2497%2034.63%2031.2497H28.91C28.6175%2031.2497%2028.39%2031.4421%2028.39%2031.7629V36.7992C28.4225%2037.0879%2028.6175%2037.3766%2028.91%2037.3766ZM36.9375%2037.3766H42.625C42.95%2037.3766%2043.1775%2037.0879%2043.1775%2036.7992V31.7629C43.1775%2031.4742%2042.9825%2031.2497%2042.625%2031.2497H36.9375C36.6775%2031.2497%2036.45%2031.4421%2036.45%2031.7629V36.7992C36.45%2037.0879%2036.645%2037.3766%2036.9375%2037.3766ZM44.8675%2037.3766H50.62C50.88%2037.3766%2051.1075%2037.0879%2051.1075%2036.7992V31.7629C51.1075%2031.4742%2050.88%2031.2497%2050.62%2031.2497H44.8675C44.6075%2031.2497%2044.38%2031.4421%2044.38%2031.7629V36.7992C44.38%2037.0879%2044.6075%2037.3766%2044.8675%2037.3766ZM44.8675%2030.0628H50.62C50.88%2030.0628%2051.1075%2029.8382%2051.1075%2029.5495V24.5453C51.1075%2024.2245%2050.88%2024%2050.62%2024H44.8675C44.6075%2024%2044.38%2024.1925%2044.38%2024.5453V29.5495C44.38%2029.8061%2044.6075%2030.0628%2044.8675%2030.0628ZM52.8625%2044.5621H58.5825C58.875%2044.5621%2059.1025%2044.3375%2059.1025%2044.0488V38.9805C59.1025%2038.7238%2058.875%2038.4672%2058.5825%2038.4672H52.8625C52.6025%2038.4672%2052.375%2038.6918%2052.375%2038.9805V44.0488C52.375%2044.3375%2052.6025%2044.5621%2052.8625%2044.5621Z'%20fill='%231072D8'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_231'%20x='-4.2'%20y='4.8'%20width='103.4'%20height='84.4'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.0627451%200%200%200%200%200.447059%200%200%200%200%200.847059%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_231'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_231'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_231'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",eg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_176_210)'%3e%3crect%20x='13'%20y='13'%20width='68'%20height='68'%20rx='18.0851'%20fill='white'/%3e%3cpath%20d='M73.5625%2061.5926C72.7892%2061.8856%2071.9354%2061.8851%2071.1625%2061.5912C70.3896%2061.2973%2069.7512%2060.7303%2069.368%2059.9976C66.9607%2056.3938%2064.3023%2052.9527%2061.7472%2049.4376L60.6393%2047.9608C57.5968%2052.0371%2054.5544%2055.9508%2051.7778%2060.0124C51.4161%2060.7127%2050.8123%2061.2576%2050.0786%2061.5456C49.345%2061.8337%2048.5317%2061.8452%2047.7902%2061.578L59.2068%2046.2624L48.5876%2032.4233C49.3521%2032.1473%2050.1883%2032.1435%2050.9552%2032.4126C51.722%2032.6817%2052.3726%2033.2071%2052.797%2033.9002C55.2633%2037.5042%2057.9958%2040.9453%2060.7132%2044.5934C63.4456%2040.9748%2066.1484%2037.5188%2068.6739%2033.9445C69.0375%2033.2556%2069.6417%2032.7243%2070.3716%2032.452C71.1015%2032.1797%2071.906%2032.1852%2072.632%2032.4677L68.5114%2037.9324C66.6653%2040.3692%2064.8487%2042.8209%2062.9287%2045.1988C62.774%2045.3373%2062.6502%2045.5069%2062.5655%2045.6965C62.4807%2045.8861%2062.4369%2046.0915%2062.4369%2046.2992C62.4369%2046.5068%2062.4807%2046.7122%2062.5655%2046.9018C62.6502%2047.0914%2062.774%2047.261%2062.9287%2047.3995C66.4586%2052.0814%2069.9588%2056.7779%2073.5625%2061.5926ZM20.4375%2046.0703C20.7477%2044.5934%2020.9395%2042.9835%2021.368%2041.4771C23.923%2032.3941%2034.3353%2028.6129%2041.4984%2034.2402C45.6929%2037.5339%2046.7415%2042.201%2046.5349%2047.4587H22.9041C22.52%2056.852%2029.299%2062.5234%2037.9685%2059.6286C39.3749%2059.1256%2040.6338%2058.2802%2041.6317%2057.1689C42.6296%2056.0575%2043.335%2054.7151%2043.6842%2053.2629C44.1421%2051.786%2044.8806%2051.535%2046.2836%2051.9632C46.0525%2053.7612%2045.4168%2055.4834%2044.4243%2057.0004C43.4317%2058.5173%2042.1082%2059.7896%2040.5533%2060.7214C37.9841%2062.1266%2035.0363%2062.6834%2032.1316%2062.312C29.2269%2061.9406%2026.514%2060.6602%2024.381%2058.6538C22.2707%2056.281%2020.9947%2053.2829%2020.7477%2050.1171C20.7477%2049.6151%2020.5557%2049.1128%2020.4524%2048.6402C20.4426%2047.7836%2020.4376%2046.927%2020.4375%2046.0703ZM22.9336%2045.4352H44.3047C44.1716%2038.6267%2039.8738%2033.7971%2034.1435%2033.753C27.7632%2033.6643%2023.1995%2038.3903%2022.9187%2045.4057L22.9336%2045.4352Z'%20fill='%230F0F0F'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_210'%20x='-0.2'%20y='-0.2'%20width='94.4'%20height='94.4'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='6.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.3%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_210'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_210'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",tg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_227)'%3e%3cg%20filter='url(%23filter0_d_176_227)'%3e%3cpath%20d='M55.5104%2041.2794C54.3523%2041.5828%2053.396%2041.7453%2052.4185%2042.1028C51.6429%2042.3087%2050.8567%2042.5254%2049.9535%2042.7637L49.8898%2042.7746C49.4436%2042.9046%2049.4011%2042.9154%2048.9867%2042.4279C48.4873%2041.8536%2048.1261%2041.4853%2047.4354%2041.1386C45.3423%2040.0984%2043.3236%2040.4018%2041.443%2041.6478C39.1905%2043.1321%2038.0324%2045.3315%2038.0642%2048.0618C38.0961%2050.7705%2039.913%2052.9916%2042.4417%2053.3599C44.7792%2053.6633%2046.6704%2052.8616%2048.1579%2051.1389C48.3811%2050.8572%2048.5829%2050.5646%2048.8061%2050.2396C48.8911%2050.1312%2048.9654%2050.0121%2049.0504%2049.8821H42.6648C41.9742%2049.8821%2041.8042%2049.4487%2042.038%2048.8744C42.463%2047.8235%2043.2598%2046.0683%2043.7273%2045.1907C43.823%2044.9957%2044.0567%2044.5623%2044.4605%2044.5623H55.2023C55.6804%2043.1105%2056.456%2041.6478%2057.4973%2040.261C59.9091%2037.0214%2062.7354%2035.3312%2066.7622%2034.627C70.1409%2034.0202%2073.3178%2034.3561%2076.2078%2036.3497C78.8215%2038.1699%2080.4365%2040.6402%2080.8721%2043.8797C81.4352%2048.4411%2080.139%2052.1465%2076.9728%2055.321C74.8797%2057.5854%2072.2022%2059.0048%2069.1209%2059.644C68.5259%2059.7523%2067.9416%2059.8065%2067.3678%2059.8607C67.0597%2059.8824%2066.7622%2059.9149%2066.4647%2059.9474C63.4578%2059.8824%2060.706%2059.0048%2058.3898%2056.9787C56.7641%2055.5377%2055.6379%2053.7717%2055.0854%2051.7239C54.6923%2052.5149%2054.2354%2053.2841%2053.5979%2054.01C51.3029%2057.2171%2048.1898%2059.2106%2044.2586%2059.7415C41.0073%2060.1857%2038.0005%2059.5465%2035.3443%2057.5204C32.9005%2055.6244%2031.5087%2053.1324%2031.1474%2050.0229C30.7118%2046.3392%2031.7743%2042.9371%2033.9524%2040.1309C36.3111%2036.9889%2039.4242%2034.9954%2043.228%2034.2911C46.3411%2033.6194%2049.3161%2034.0853%2052.0042%2035.9488C53.7573%2037.1298%2055.011%2038.7441%2055.8398%2040.7052C56.0416%2041.0085%2055.9035%2041.1819%2055.5104%2041.2794ZM18.1319%2041.8861C17.999%2041.8861%2017.9661%2041.8211%2018.032%2041.7128L18.7279%2040.8027C18.7938%2040.7052%2018.9595%2040.6402%2019.0923%2040.6402H30.9137C31.0412%2040.6402%2031.073%2040.7377%2031.0093%2040.8352L30.4462%2041.7128C30.3824%2041.8211%2030.2124%2041.9186%2030.1168%2041.9186L18.1319%2041.8861ZM13.1324%2044.9957C13%2044.9957%2012.9669%2044.9198%2013.0332%2044.8223L13.7283%2043.9122C13.7946%2043.8147%2013.9602%2043.7389%2014.0923%2043.7389H29.1924C29.3199%2043.7389%2029.3837%2043.8472%2029.3518%2043.9447L29.0862%2044.7573C29.0543%2044.8873%2028.9268%2044.9632%2028.7887%2044.9632L13.1324%2044.9957ZM21.0452%2047.8993C20.9793%2047.9968%2021.0123%2048.0944%2021.144%2048.0944L28.3637%2048.1269C28.4593%2048.1269%2028.5974%2048.0293%2028.5974%2047.8993L28.6612%2047.0867C28.6612%2046.9459%2028.5974%2046.8484%2028.4593%2046.8484H21.84C21.7071%2046.8484%2021.5754%2046.9459%2021.5085%2047.0542L21.0452%2047.8993ZM74.3272%2045.9491C74.3059%2045.6674%2074.2953%2045.429%2074.2528%2045.1907C73.6578%2041.8536%2070.6403%2039.9576%2067.4953%2040.7052C64.4141%2041.4094%2062.4272%2043.403%2061.7047%2046.5775C61.1097%2049.2103%2062.3635%2051.8756%2064.7435%2052.9591C66.571%2053.7717%2068.3878%2053.6742%2070.1409%2052.7532C72.7547%2051.2797%2074.1784%2049.2103%2074.3484%2046.3066C74.3378%2046.1766%2074.3378%2046.0575%2074.3272%2045.9491Z'%20fill='%2308AFD8'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_227'%20x='-4.17895'%20y='16.8211'%20width='102.358'%20height='60.3053'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='8.58947'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.0313726%200%200%200%200%200.686275%200%200%200%200%200.847059%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_227'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_227'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_227'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",ng="/assets/jquery-BM37jaEU.svg",ig="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_204)'%3e%3cg%20filter='url(%23filter0_d_176_204)'%3e%3cpath%20d='M48.9175%2081.2073L47.0881%2080.6007C47.0881%2080.6007%2047.3317%2071.344%2043.9822%2070.6936C41.7898%2068.1407%2044.3062%20-38.2943%2052.3206%2070.3307C50.7981%2071.0995%2049.6338%2072.4298%2049.0734%2074.0407C48.7698%2076.4174%2048.7176%2078.8196%2048.9175%2081.2073Z'%20fill='url(%23paint0_linear_176_204)'/%3e%3cpath%20d='M49.9065%2072.2648C54.7781%2068.5987%2058.5088%2063.625%2060.665%2057.922C62.8211%2052.219%2063.314%2046.0211%2062.0863%2040.0491C58.5055%2024.2518%2050.0258%2019.0583%2049.1123%2017.0754C48.3266%2015.8393%2047.654%2014.5348%2047.1027%2013.1778L47.7774%2057.1935C47.7774%2057.1935%2046.3792%2070.6449%2049.9065%2072.2648Z'%20fill='url(%23paint1_linear_176_204)'/%3e%3cpath%20d='M46.1574%2072.8495C46.1574%2072.8495%2031.2468%2062.6939%2032.1091%2044.7286C32.1896%2039.3125%2033.4314%2033.9768%2035.7507%2029.0819C38.07%2024.1869%2041.4128%2019.8467%2045.5533%2016.3543C46.0365%2015.9427%2046.4204%2015.4272%2046.6764%2014.8464C46.9325%2014.2655%2047.054%2013.6344%2047.0319%2013C47.96%2014.9975%2047.809%2042.8237%2047.9064%2046.0781C48.284%2058.7379%2047.2024%2070.4598%2046.1574%2072.8495Z'%20fill='url(%23paint2_linear_176_204)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_204'%20x='12.8731'%20y='-6.2'%20width='69.0729'%20height='106.607'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.25098%200%200%200%200%200.576471%200%200%200%200%200.262745%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_204'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_204'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_176_204'%20x1='36.6198'%20y1='47.7183'%20x2='57.6464'%20y2='54.8535'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.231'%20stop-color='%23999875'/%3e%3cstop%20offset='0.563'%20stop-color='%239B9977'/%3e%3cstop%20offset='0.683'%20stop-color='%23A09F7E'/%3e%3cstop%20offset='0.768'%20stop-color='%23A9A889'/%3e%3cstop%20offset='0.837'%20stop-color='%23B7B69A'/%3e%3cstop%20offset='0.896'%20stop-color='%23C9C7B0'/%3e%3cstop%20offset='0.948'%20stop-color='%23DEDDCB'/%3e%3cstop%20offset='0.994'%20stop-color='%23F8F6EB'/%3e%3cstop%20offset='1'%20stop-color='%23FBF9EF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_176_204'%20x1='44.3304'%20y1='12.8633'%20x2='53.6262'%20y2='70.91'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2348A547'/%3e%3cstop%20offset='1'%20stop-color='%233F9143'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_176_204'%20x1='30.8265'%20y1='46.5069'%20x2='55.7724'%20y2='38.1525'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2341A247'/%3e%3cstop%20offset='0.352'%20stop-color='%234BA74B'/%3e%3cstop%20offset='0.956'%20stop-color='%2367B554'/%3e%3cstop%20offset='1'%20stop-color='%2369B655'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_176_204'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",rg="/assets/mysql-DzKHpFQZ.svg",sg="/assets/node-CSargNuJ.svg",og="/assets/postman-D8SM_7ZM.svg",ag="/assets/react-Bq8E9fLZ.svg",lg="/assets/sass-DkReCkeP.svg",cg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_233)'%3e%3cg%20filter='url(%23filter0_d_176_233)'%3e%3cpath%20d='M47%2027C37.922%2027%2032.278%2031.522%2030%2040.6C33.4%2036.078%2037.378%2034.378%2041.9%2035.5C44.484%2036.146%2046.354%2038.016%2048.394%2040.09C51.726%2043.49%2055.5%2047.4%2064%2047.4C73.078%2047.4%2078.722%2042.878%2081%2033.8C77.6%2038.322%2073.622%2040.022%2069.1%2038.9C66.516%2038.254%2064.68%2036.384%2062.606%2034.31C59.274%2030.91%2055.5%2027%2047%2027ZM30%2047.4C20.922%2047.4%2015.278%2051.922%2013%2061C16.4%2056.478%2020.378%2054.778%2024.9%2055.9C27.484%2056.546%2029.32%2058.416%2031.394%2060.49C34.726%2063.89%2038.5%2067.8%2047%2067.8C56.078%2067.8%2061.722%2063.278%2064%2054.2C60.6%2058.722%2056.622%2060.422%2052.1%2059.3C49.516%2058.654%2047.68%2056.784%2045.606%2054.71C42.274%2051.31%2038.5%2047.4%2030%2047.4Z'%20fill='%2338BDF8'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_233'%20x='-6.2'%20y='7.8'%20width='106.4'%20height='79.2'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.219608%200%200%200%200%200.741176%200%200%200%200%200.972549%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_233'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_233'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_233'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",ug="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_197)'%3e%3cg%20filter='url(%23filter0_d_176_197)'%3e%3cg%20clip-path='url(%23clip1_176_197)'%3e%3cmask%20id='mask0_176_197'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='13'%20y='13'%20width='68'%20height='68'%3e%3cpath%20d='M13%2013H81V81H13V13Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_176_197)'%3e%3cpath%20d='M79.3822%2013H14.615C14.4027%2013%2014.1924%2013.0419%2013.9963%2013.1232C13.8002%2013.2046%2013.622%2013.3238%2013.472%2013.474C13.322%2013.6243%2013.2031%2013.8027%2013.1221%2013.9989C13.0411%2014.1952%2012.9996%2014.4055%2013%2014.6178V79.385C12.9996%2079.5976%2013.0412%2079.8081%2013.1224%2080.0046C13.2036%2080.201%2013.3227%2080.3795%2013.473%2080.5298C13.6233%2080.6801%2013.8018%2080.7993%2013.9983%2080.8805C14.1947%2080.9616%2014.4053%2081.0032%2014.6178%2081.0028H79.385C79.5976%2081.0032%2079.8081%2080.9616%2080.0046%2080.8805C80.201%2080.7993%2080.3795%2080.6801%2080.5298%2080.5298C80.6801%2080.3795%2080.7993%2080.201%2080.8804%2080.0046C80.9616%2079.8081%2081.0032%2079.5976%2081.0028%2079.385V14.615C81.0028%2014.4024%2080.9609%2014.192%2080.8794%2013.9957C80.7978%2013.7994%2080.6784%2013.6211%2080.5278%2013.471C80.3772%2013.321%2080.1985%2013.2021%2080.0019%2013.1213C79.8053%2013.0405%2079.5947%2012.9993%2079.3822%2013ZM53.477%2049.3403H45.3822V74.523H38.9052V49.3403H30.8103V43.7615H53.477V49.3403ZM55.2903%2073.0837V66.3545C55.2903%2066.3545%2058.968%2069.1255%2063.3795%2069.1255C67.791%2069.1255%2067.621%2066.2412%2067.621%2065.8445C67.621%2061.6597%2055.1203%2061.6597%2055.1203%2052.3833C55.1203%2039.7693%2073.3358%2044.7475%2073.3358%2044.7475L73.1092%2050.7428C73.1092%2050.7428%2070.0548%2048.7057%2066.6038%2048.7057C63.1528%2048.7057%2061.909%2050.349%2061.909%2052.1C61.909%2056.6248%2074.523%2056.1743%2074.523%2065.2807C74.523%2079.3057%2055.2903%2073.0865%2055.2903%2073.0865'%20fill='url(%23paint0_linear_176_197)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_197'%20x='-6.2'%20y='-6.2'%20width='106.4'%20height='106.4'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.160784%200%200%200%200%200.466667%200%200%200%200%200.776471%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_197'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_197'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_176_197'%20x1='47.0014'%20y1='13'%20x2='47.0014'%20y2='81.0028'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232D79C7'/%3e%3cstop%20offset='1'%20stop-color='%231569BF'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_176_197'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_176_197'%3e%3crect%20x='13'%20y='13'%20width='68'%20height='68'%20rx='7.08333'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",fg="data:image/svg+xml,%3csvg%20width='100'%20height='95'%20viewBox='0%200%20100%2095'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_176_213)'%3e%3cpath%20d='M31.5923%2023.2209L42.7339%2023.2252L50.0169%2035.235L57.2743%2023.2262L68.4062%2023.2233L50.0726%2054.8166L31.5923%2023.2209Z'%20fill='%2335495E'/%3e%3cpath%20d='M19.4408%2023.3056L31.5826%2023.2228L50.0615%2054.818L68.3966%2023.2247L80.5592%2023.2372L50.0601%2075.2359L19.4408%2023.3056Z'%20fill='%2341B883'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_213'%20x='0.240795'%20y='4.02087'%20width='99.5184'%20height='90.415'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.254902%200%200%200%200%200.721569%200%200%200%200%200.513726%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_213'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_213'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",hg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_225)'%3e%3cg%20filter='url(%23filter0_d_176_225)'%3e%3cpath%20d='M47%2013C28.266%2013%2013%2028.266%2013%2047C13%2065.734%2028.266%2081%2047%2081C65.734%2081%2081%2065.734%2081%2047C81%2028.266%2065.734%2013%2047%2013ZM16.434%2047C16.434%2042.58%2017.386%2038.364%2019.086%2034.556L33.672%2074.506C23.472%2069.542%2016.434%2059.104%2016.434%2047ZM47%2077.566C44.008%2077.566%2041.118%2077.124%2038.364%2076.308L47.544%2049.652L56.928%2075.39C56.996%2075.526%2057.064%2075.696%2057.132%2075.798C53.97%2076.954%2050.57%2077.566%2047%2077.566ZM51.216%2032.652C53.052%2032.55%2054.718%2032.346%2054.718%2032.346C56.35%2032.142%2056.18%2029.728%2054.514%2029.83C54.514%2029.83%2049.55%2030.204%2046.354%2030.204C43.362%2030.204%2038.296%2029.83%2038.296%2029.83C36.664%2029.762%2036.46%2032.278%2038.126%2032.38C38.126%2032.38%2039.69%2032.584%2041.322%2032.686L46.082%2045.742L39.384%2065.802L28.266%2032.652C30.102%2032.584%2031.768%2032.38%2031.768%2032.38C33.4%2032.176%2033.23%2029.762%2031.564%2029.864C31.564%2029.864%2026.6%2030.238%2023.404%2030.238C22.826%2030.238%2022.146%2030.238%2021.432%2030.204C26.94%2021.908%2036.324%2016.434%2047%2016.434C54.956%2016.434%2062.198%2019.46%2067.638%2024.458C67.502%2024.458%2067.366%2024.424%2067.23%2024.424C64.238%2024.424%2062.096%2027.042%2062.096%2029.864C62.096%2032.38%2063.558%2034.522%2065.088%2037.038C66.244%2039.078%2067.604%2041.696%2067.604%2045.47C67.604%2048.088%2066.584%2051.114%2065.292%2055.364L62.232%2065.564L51.216%2032.652ZM73.826%2032.346C77.6432%2039.3355%2078.5816%2047.5389%2076.4416%2055.2099C74.3016%2062.8809%2069.2521%2069.4138%2062.368%2073.418L71.718%2046.422C73.452%2042.07%2074.03%2038.568%2074.03%2035.474C74.03%2034.352%2073.962%2033.298%2073.826%2032.346Z'%20fill='%2333A1D3'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_225'%20x='-6.2'%20y='-6.2'%20width='106.4'%20height='106.4'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.2%200%200%200%200%200.631373%200%200%200%200%200.827451%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_225'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_225'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_225'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",dg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_235)'%3e%3cg%20clip-path='url(%23clip1_176_235)'%20filter='url(%23filter0_d_176_235)'%3e%3cmask%20id='mask0_176_235'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='18'%20y='18'%20width='58'%20height='58'%3e%3cpath%20d='M18%2018H76V76H18V18Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_176_235)'%3e%3cpath%20d='M58.1892%2058.0272C60.3279%2057.8049%2061.9519%2055.9416%2061.8794%2053.7062C61.8432%2052.6318%2061.3929%2051.6129%2060.6227%2050.863C59.8524%2050.113%2058.8219%2049.69%2057.7469%2049.6825H57.5971C55.3085%2049.755%2053.5371%2051.6931%2053.6096%2054.0035C53.6869%2055.1224%2054.1292%2056.0891%2054.7937%2056.7585C52.2828%2061.7537%2048.4452%2065.4029%2042.6862%2068.4576C38.7761%2070.5456%2034.7161%2071.2899%2030.6585%2070.7679C27.3356%2070.3208%2024.7522%2068.8297%2023.1282%2066.372C20.7671%2062.7228%2020.5472%2058.7716%2022.5385%2054.8227C23.9402%2051.9928%2026.1562%2049.9048%2027.5579%2048.8632C27.1778%2047.6121%2026.8576%2046.3435%2026.5985%2045.0618C15.8951%2052.887%2017.0043%2063.4671%2020.2475%2068.46C22.6835%2072.1865%2027.628%2074.4968%2033.0921%2074.4968C34.5837%2074.5057%2036.0707%2074.3303%2037.5194%2073.9748C46.9686%2072.114%2054.1267%2066.4493%2058.1867%2058.0296M71.1763%2048.7907C65.5672%2042.1594%2057.2998%2038.5078%2047.8531%2038.5078H46.6713C46.3341%2037.8375%2045.8178%2037.2738%2045.1796%2036.8792C44.5414%2036.4846%2043.8063%2036.2745%2043.056%2036.2724H42.9062C40.62%2036.3473%2038.8462%2038.2855%2038.9211%2040.5958C38.9936%2042.8312%2040.8399%2044.6171%2043.0536%2044.6171H43.2034C43.983%2044.5771%2044.7357%2044.3183%2045.375%2043.8704C46.0144%2043.4225%2046.5148%2042.8035%2046.8187%2042.0845H48.1479C53.757%2042.0845%2059.0712%2043.723%2063.8683%2046.9275C67.5586%2049.3876%2070.2169%2052.5897%2071.6911%2056.4661C72.9477%2059.5932%2072.8752%2062.6479%2071.5461%2065.2579C69.4774%2069.2067%2066.0095%2071.3672%2061.4323%2071.3672C58.4816%2071.3672%2055.6758%2070.4731%2054.1992%2069.8012C53.137%2070.7492%2052.0288%2071.6444%2050.8787%2072.4837C54.0518%2073.9748%2057.2998%2074.7941%2060.4004%2074.7941C67.4861%2074.7941%2072.7254%2070.8452%2074.7192%2066.8964C76.8579%2062.5754%2076.7105%2055.1248%2071.1763%2048.7907ZM33.6842%2059.2936C33.7567%2061.529%2035.603%2063.3173%2037.8167%2063.3173H37.9641C40.2527%2063.2448%2042.0241%2061.3066%2041.9516%2058.9963C41.9154%2057.9219%2041.4651%2056.903%2040.6948%2056.1531C39.9246%2055.4031%2038.8941%2054.9801%2037.8191%2054.9726H37.6692C37.4936%2054.9587%2037.3171%2054.9835%2037.1521%2055.0451C34.1264%2049.9797%2032.8722%2044.4673%2033.3144%2038.5054C33.6092%2034.0346%2035.0858%2030.1606%2037.6692%2026.9561C39.8104%2024.2011%2043.9429%2022.8599%2046.7487%2022.785C54.5714%2022.6351%2057.8919%2032.471%2058.1142%2036.4198C59.0737%2036.6421%2060.6977%2037.1641%2061.8045%2037.5363C60.9176%2025.4675%2053.5395%2019.2083%2046.4514%2019.2083C39.8104%2019.2083%2033.6842%2024.0513%2031.2482%2031.2046C27.8527%2040.7408%2030.0664%2049.9048%2034.2013%2057.1331C33.8316%2057.6551%2033.6092%2058.4743%2033.6842%2059.2936Z'%20fill='%23764ABC'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_235'%20x='-1.2'%20y='-1.2'%20width='96.4'%20height='96.4'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.462745%200%200%200%200%200.290196%200%200%200%200%200.737255%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_235'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_235'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_235'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_176_235'%3e%3crect%20width='58'%20height='58'%20fill='white'%20transform='translate(18%2018)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",pg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_243)'%3e%3cg%20filter='url(%23filter0_d_176_243)'%3e%3cpath%20d='M79.1068%2026.2126L48.7159%2080.5564C48.5732%2080.812%2048.3651%2081.025%2048.1129%2081.1737C47.8608%2081.3224%2047.5736%2081.4014%2047.2809%2081.4026C46.9882%2081.4037%2046.7004%2081.3271%2046.4471%2081.1804C46.1937%2081.0338%2045.9839%2080.8224%2045.8392%2080.5679L14.847%2026.2173C14.6912%2025.9446%2014.6164%2025.6331%2014.6314%2025.3193C14.6464%2025.0056%2014.7505%2024.7027%2014.9317%2024.4461C15.1128%2024.1894%2015.3633%2023.9898%2015.6539%2023.8706C15.9445%2023.7514%2016.263%2023.7175%2016.5722%2023.7729L46.9954%2029.2119C47.1888%2029.2475%2047.3871%2029.2475%2047.5805%2029.2119L77.3678%2023.7822C77.6757%2023.7259%2077.9933%2023.7584%2078.2836%2023.8757C78.5738%2023.9931%2078.8246%2024.1905%2079.0069%2024.445C79.1892%2024.6996%2079.2954%2025.0006%2079.313%2025.3132C79.3307%2025.6257%2079.2592%2025.9392%2079.1068%2026.2126Z'%20fill='url(%23paint0_linear_176_243)'/%3e%3cpath%20d='M61.4856%2016.6412L38.9988%2021.0465C38.8193%2021.0828%2038.6568%2021.1772%2038.5364%2021.3151C38.416%2021.4531%2038.3445%2021.6269%2038.3328%2021.8097L36.9499%2045.1751C36.9423%2045.3033%2036.9647%2045.4315%2037.0153%2045.5495C37.0659%2045.6676%2037.1433%2045.7722%2037.2414%2045.855C37.3395%2045.9378%2037.4556%2045.9967%2037.5805%2046.0268C37.7053%2046.0569%2037.8354%2046.0575%2037.9605%2046.0285L44.2204%2044.5832C44.3553%2044.552%2044.4958%2044.5552%2044.6291%2044.5926C44.7624%2044.63%2044.8841%2044.7002%2044.9832%2044.7969C45.0822%2044.8936%2045.1553%2045.0137%2045.1958%2045.1461C45.2362%2045.2784%2045.2428%2045.4188%2045.2148%2045.5544L43.3556%2054.6633C43.3269%2054.8036%2043.3351%2054.9488%2043.3795%2055.0849C43.4239%2055.221%2043.503%2055.3432%2043.6088%2055.4395C43.7147%2055.5358%2043.8438%2055.603%2043.9835%2055.6343C44.1231%2055.6657%2044.2686%2055.6602%2044.4054%2055.6184L48.2719%2054.4437C48.4091%2054.4017%2048.5547%2054.3962%2048.6946%2054.4276C48.8345%2054.4591%2048.9638%2054.5264%2049.0698%2054.6231C49.1757%2054.7197%2049.2547%2054.8422%2049.2989%2054.9786C49.3431%2055.1151%2049.351%2055.2606%2049.3218%2055.401L46.3641%2069.7085C46.1791%2070.6034%2047.3701%2071.0913%2047.8673%2070.3259L48.1979%2069.8125L66.5245%2033.2403C66.5933%2033.1025%2066.6222%2032.9482%2066.6079%2032.7949C66.5936%2032.6415%2066.5366%2032.4952%2066.4435%2032.3726C66.3504%2032.2499%2066.2249%2032.1557%2066.081%2032.1006C65.9372%2032.0455%2065.7808%2032.0318%2065.6296%2032.061L59.1846%2033.3028C59.0459%2033.3293%2058.9027%2033.3198%2058.7687%2033.2752C58.6347%2033.2306%2058.5143%2033.1523%2058.4192%2033.0479C58.3241%2032.9435%2058.2573%2032.8165%2058.2253%2032.6789C58.1933%2032.5413%2058.1972%2032.3978%2058.2365%2032.2622L62.4406%2017.6795C62.4803%2017.5434%2062.4842%2017.3994%2062.452%2017.2614C62.4198%2017.1233%2062.3526%2016.9959%2062.2569%2016.8913C62.1611%2016.7868%2062.0401%2016.7086%2061.9054%2016.6644C61.7707%2016.6202%2061.6269%2016.6114%2061.4879%2016.6389'%20fill='url(%23paint1_linear_176_243)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_243'%20x='-4.57048'%20y='-2.57677'%20width='103.086'%20height='103.179'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.658824%200%200%200%200%200.305882%200%200%200%200%200.996078%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_243'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_243'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_176_243'%20x1='14.0897'%20y1='21.8301'%20x2='51.9111'%20y2='73.1945'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2341D1FF'/%3e%3cstop%20offset='1'%20stop-color='%23BD34FE'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_176_243'%20x1='45.2471'%20y1='17.8363'%20x2='52.0888'%20y2='64.7696'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFEA83'/%3e%3cstop%20offset='0.083'%20stop-color='%23FFDD35'/%3e%3cstop%20offset='1'%20stop-color='%23FFA800'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_176_243'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",mg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_248)'%3e%3cg%20filter='url(%23filter0_d_176_248)'%3e%3cpath%20d='M31.8521%2027C30.741%2027%2029.6299%2027%2028.4819%2027.0375C27.3333%2027.0743%2026.259%2027.0743%2025.259%2027.1118C24.259%2027.1486%2023.3333%2027.1486%2022.4444%2027.1854C21.5924%2027.2222%2021%2027.2222%2020.3701%2027.2222C20.1111%2027.2222%2020%2027.3701%2020%2027.6299V65.741C20%2066.0743%2020.1479%2066.2229%2020.4444%2066.2229H27.6299C27.8889%2066.1854%2028.0743%2065.9632%2028.0368%2065.7042V53.8153C28.7403%2053.8153%2029.259%2053.8153%2029.6299%2053.8521C30%2053.8889%2030.5924%2053.8889%2031.4813%2053.8889C34.5188%2053.8889%2037.2965%2053.5556%2039.8146%2052.6299C42.2222%2051.741%2044.2965%2050.1854%2045.7778%2048.1111C47.2593%2046.037%2048%2043.4074%2048%2040.2222C48%2038.5556%2047.7042%2036.9632%2047.1486%2035.4076C46.5599%2033.8228%2045.6378%2032.383%2044.4444%2031.1854C43.036%2029.8171%2041.3406%2028.7795%2039.4813%2028.1479C37.4069%2027.3701%2034.8889%2027%2031.8521%2027ZM32.6785%2034.2951C33.9979%2034.3201%2035.2826%2034.5507%2036.4813%2035.0368C37.5556%2035.4444%2038.4444%2036.1854%2039.0743%2037.1479C39.665%2038.144%2039.9605%2039.2875%2039.9264%2040.4451C39.9264%2042.0743%2039.5556%2043.334%2038.7778%2044.2597C37.9625%2045.1854%2036.9257%2045.8896%2035.741%2046.2229C34.3701%2046.6674%2032.9257%2046.8889%2031.4813%2046.8889H29.5181C29.0736%2046.8889%2028.5931%2046.8521%2028.0743%2046.8153V34.3708C28.3333%2034.3333%2028.8521%2034.2965%2029.5931%2034.334C30.2965%2034.2965%2031.1479%2034.2965%2032.1111%2034.2965C32.3009%2034.2919%2032.49%2034.2914%2032.6785%2034.2951ZM63.741%2036.1861C61.1111%2036.1861%2058.9257%2036.5931%2057.1854%2037.4819C55.5931%2038.2229%2054.2222%2039.4076%2053.2965%2040.8889C52.4819%2042.2597%2052.0368%2043.7778%2052.0368%2045.3708C52.0051%2046.6811%2052.2979%2047.9788%2052.8889%2049.1486C53.5816%2050.3942%2054.5433%2051.4696%2055.7042%2052.2965C57.3334%2053.4109%2059.1014%2054.3074%2060.9632%2054.9632C62.7778%2055.6667%2064%2056.2222%2064.5931%2056.7035C65.1854%2057.1854%2065.4819%2057.6667%2065.4819%2058.1854C65.4819%2058.8521%2065.0743%2059.4819%2064.4819%2059.741C63.8153%2060.0743%2062.8153%2060.2597%2061.4076%2060.2597C59.9264%2060.2597%2058.4444%2060.0743%2057.0368%2059.7042C55.4205%2059.3432%2053.8709%2058.7309%2052.4444%2057.8896C52.3333%2057.8153%2052.2222%2057.7785%2052.1111%2057.8528C52%2057.9264%2051.9632%2058.0743%2051.9632%2058.1854V64.6299C51.9264%2064.9264%2052.1111%2065.1854%2052.3708%2065.3333C53.5719%2065.8944%2054.8423%2066.2931%2056.1486%2066.5188C57.8153%2066.8521%2059.4813%2067%2061.1847%2067C63.8514%2067%2066.0743%2066.5931%2067.8889%2065.8153C69.5556%2065.1486%2071%2064.0007%2072.0368%2062.5188C73.0078%2061.0619%2073.5117%2059.3436%2073.4812%2057.5931C73.5178%2056.2706%2073.2252%2054.9599%2072.6299%2053.7785C71.9257%2052.5187%2070.9257%2051.4819%2069.7035%2050.7042C67.9154%2049.5813%2066.001%2048.6736%2064%2048C63.1064%2047.6302%2062.229%2047.2224%2061.3701%2046.7778C60.8889%2046.5188%2060.4444%2046.1854%2060.1111%2045.7778C59.8889%2045.4813%2059.741%2045.1486%2059.741%2044.8153C59.741%2044.4819%2059.8521%2044.1118%2060.0368%2043.8153C60.2965%2043.4451%2060.7035%2043.1854%2061.1847%2043.0743C61.8889%2042.8896%2062.6667%2042.7778%2063.4069%2042.8146C64.8146%2042.8146%2066.1847%2043%2067.5556%2043.2965C68.8153%2043.5556%2070%2043.9632%2071.1111%2044.5562C71.259%2044.6299%2071.4444%2044.6299%2071.7778%2044.5562C71.8356%2044.5134%2071.8826%2044.4574%2071.9148%2044.393C71.947%2044.3286%2071.9636%2044.2575%2071.9632%2044.1854V38.1486C71.9632%2038%2071.9257%2037.8521%2071.8889%2037.7042C71.8146%2037.5563%2071.6667%2037.4076%2071.5187%2037.3708C70.4972%2036.9533%2069.4269%2036.667%2068.3333%2036.5188C66.8126%2036.2973%2065.2778%2036.1866%2063.741%2036.1861Z'%20fill='%2331A8FF'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_248'%20x='-5.09804'%20y='1.90196'%20width='103.68'%20height='90.1961'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='12.549'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.128883%200%200%200%200%200.31262%200%200%200%200%200.653846%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_248'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_248'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_248'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",gg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_252)'%3e%3cg%20filter='url(%23filter0_d_176_252)'%3e%3cpath%20d='M47.5099%2058.0483H34.3998L31.7213%2066.3303C31.6509%2066.6475%2031.3691%2066.8589%2031.0519%2066.8236H24.4262C24.0386%2066.8236%2023.9329%2066.6121%2024.0386%2066.1892L35.3867%2033.5197C35.4924%2033.1675%2035.5982%2032.7796%2035.7389%2032.3567C35.88%2031.6166%2035.9504%2030.8415%2035.9504%2030.0661C35.9153%2029.89%2036.0561%2029.7135%2036.2325%2029.6785H45.36C45.6422%2029.6785%2045.7829%2029.7842%2045.8183%2029.9603L58.6816%2066.2599C58.7873%2066.6475%2058.6816%2066.8236%2058.3294%2066.8236H50.9635C50.7171%2066.8589%2050.4703%2066.6828%2050.3999%2066.436L47.5099%2058.0483ZM36.444%2050.8942H45.3954C45.1839%2050.1541%2044.9021%2049.273%2044.5849%2048.3568C44.2677%2047.4052%2043.9506%2046.3833%2043.6334%2045.3261C43.2808%2044.2334%2042.9637%2043.1762%2042.6111%2042.0835C42.2589%2040.9913%2041.9418%2039.969%2041.6596%2038.9471C41.3778%2037.9605%2041.131%2037.044%2040.8845%2036.1982H40.8138C40.4966%2037.7137%2040.109%2039.2293%2039.6158%2040.7445C39.0871%2042.4361%2038.5585%2044.1981%2037.9945%2045.9604C37.5395%2047.6238%2037.0222%2049.2695%2036.444%2050.8942ZM66.5407%2035.8457C65.3777%2035.881%2064.2501%2035.4228%2063.4042%2034.6123C62.5938%2033.7311%2062.1709%2032.5682%2062.2059%2031.3701C62.1709%2030.1718%2062.6288%2029.0442%2063.4746%2028.2334C64.3204%2027.4226%2065.4484%2027%2066.6114%2027C67.9858%2027%2069.0431%2027.4229%2069.8182%2028.2334C70.5994%2029.0877%2071.0166%2030.213%2070.9812%2031.3701C71.0166%2032.5682%2070.5937%2033.7311%2069.7478%2034.6123C68.9374%2035.4581%2067.739%2035.9164%2066.5407%2035.8457ZM62.5938%2066.436V39.2996C62.5938%2038.9471%2062.7345%2038.806%2063.0517%2038.806H70.0297C70.3469%2038.806%2070.4879%2038.9825%2070.4879%2039.2996V66.436C70.4879%2066.8236%2070.3469%2067%2070.0297%2067H63.1224C62.7699%2067%2062.5938%2066.7885%2062.5938%2066.436Z'%20fill='%23FF9A00'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_252'%20x='0.118233'%20y='3.11823'%20width='94.7468'%20height='87.7635'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='11.9409'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.509615%200%200%200%200%200.178365%200%200%200%200%200%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_252'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_252'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_252'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",_g="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_262)'%3e%3cg%20filter='url(%23filter0_d_176_262)'%3e%3cpath%20d='M81%2037.5162H74.0073V58.9503H69.9698V37.5162H62.9942V34.0028H81V37.5162ZM61.586%2058.9503H47.9265V34.0028H61.0448V37.5162H51.964V44.5825H60.3308V48.0788H51.964V55.4568H61.586V58.9503ZM42.58%2058.9503H38.1657L26.5433%2040.613C26.2542%2040.1557%2026.0095%2039.6718%2025.8123%2039.168H25.7103C25.801%2039.7026%2025.8463%2040.8453%2025.8463%2042.5963V58.9503H21.9448V34.0028H26.6453L37.8795%2051.9095C38.3517%2052.6499%2038.6568%2053.1599%2038.7947%2053.4395H38.8627C38.7493%2052.7784%2038.6927%2051.6592%2038.6927%2050.082V34H42.58V58.9503ZM17.9215%2056.9868C17.9215%2057.2955%2017.8578%2057.6012%2017.734%2057.8863C17.6103%2058.1715%2017.4288%2058.4305%2017.2002%2058.6487C16.9715%2058.8668%2016.7001%2059.0398%2016.4014%2059.1577C16.1026%2059.2755%2015.7825%2059.336%2015.4593%2059.3357C15.1361%2059.3357%2014.8161%2059.2748%2014.5175%2059.1566C14.2189%2059.0384%2013.9477%2058.8651%2013.7193%2058.6467C13.4909%2058.4283%2013.3098%2058.169%2013.1864%2057.8837C13.0629%2057.5984%2012.9996%2057.2927%2013%2056.984C13.0008%2056.3615%2013.2602%2055.7648%2013.7214%2055.325C14.1825%2054.8851%2014.8076%2054.638%2015.4593%2054.638C15.7825%2054.6376%2016.1026%2054.6981%2016.4014%2054.816C16.7001%2054.9339%2016.9715%2055.1069%2017.2002%2055.325C17.4288%2055.5431%2017.6103%2055.8022%2017.734%2056.0873C17.8578%2056.3725%2017.9215%2056.6782%2017.9215%2056.9868Z'%20fill='%235632D5'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_262'%20x='-6.2'%20y='14.8'%20width='106.4'%20height='63.7357'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.596311%200%200%200%200%200.483242%200%200%200%200%200.995192%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_262'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_262'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_262'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",vg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_265)'%3e%3cg%20filter='url(%23filter0_d_176_265)'%3e%3cmask%20id='mask0_176_265'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='17'%20y='17'%20width='61'%20height='61'%3e%3cpath%20d='M17%2022C17%2019.2386%2019.2386%2017%2022%2017H73C75.7614%2017%2078%2019.2386%2078%2022V73C78%2075.7614%2075.7614%2078%2073%2078H22C19.2386%2078%2017%2075.7614%2017%2073V22Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_176_265)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17%2017H78V78H17V17ZM63.632%2068.1383C60.8031%2068.1383%2059.2044%2066.6642%2057.9768%2064.6563L53.3179%2067.3631C55.0005%2070.6876%2058.4393%2073.2242%2063.7641%2073.2242C69.2084%2073.2242%2073.2623%2070.3979%2073.2623%2065.2358C73.2623%2060.4498%2070.5123%2058.3224%2065.6424%2056.2306L64.2089%2055.6181C61.7486%2054.5506%2060.6836%2053.8567%2060.6836%2052.136C60.6836%2050.7457%2061.7511%2049.6808%2063.4286%2049.6808C65.0731%2049.6808%2066.133%2050.3746%2067.1166%2052.136L71.5798%2049.2715C69.6913%2045.9496%2067.0734%2044.6813%2063.4286%2044.6813C58.3097%2044.6813%2055.0335%2047.955%2055.0335%2052.2555C55.0335%2056.9194%2057.7785%2059.1281%2061.9163%2060.8895L63.3498%2061.5046C65.9652%2062.6483%2067.5233%2063.3448%2067.5233%2065.3095C67.5233%2066.9514%2066.0059%2068.1383%2063.632%2068.1383ZM41.4178%2068.1002C39.448%2068.1002%2038.627%2066.7531%2037.7273%2065.1519L33.0608%2067.9782C34.413%2070.8401%2037.0715%2073.214%2041.6592%2073.214C46.74%2073.214%2050.2196%2070.5123%2050.2196%2064.5775V45.0066H44.4881V64.5012C44.4881%2067.3657%2043.2986%2068.1002%2041.4153%2068.1002'%20fill='%23FFDC17'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_265'%20x='-2.2'%20y='-2.2'%20width='99.4'%20height='99.4'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%201%200%200%200%200%200.862745%200%200%200%200%200.0901961%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_265'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_265'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_265'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",xg="/assets/jest-BPQIGl-M.svg",Sg="/assets/aws-_IyNxKEl.svg",Mg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_276)'%3e%3cg%20filter='url(%23filter0_d_176_276)'%3e%3cpath%20d='M19.3014%2037.1688H29.2377C32.1544%2037.1938%2034.2677%2038.0426%2035.5777%2039.7151C36.8877%2041.3877%2037.3203%2043.6718%2036.8754%2046.5675C36.7024%2047.8906%2036.3192%2049.1887%2035.726%2050.4618C35.1575%2051.735%2034.3665%2052.8832%2033.3532%2053.9068C32.1173%2055.2048%2030.7949%2056.0286%2029.3861%2056.3782C27.9772%2056.7277%2026.5188%2056.9024%2025.0111%2056.9024H20.562L19.1531%2064.017H13.9995L19.3014%2037.1688ZM23.6393%2041.4376L21.4147%2052.6711C21.563%2052.696%2021.7113%2052.7085%2021.8596%2052.7085H22.3787C24.7516%2052.7335%2026.7289%2052.4963%2028.3108%2051.9971C29.8927%2051.4728%2030.9556%2049.6505%2031.4994%2046.5301C31.9443%2043.9089%2031.4994%2042.3987%2030.1646%2041.9992C28.8546%2041.5998%2027.2109%2041.4126%2025.2335%2041.4376C24.9369%2041.4625%2024.6527%2041.475%2024.3808%2041.475C24.1336%2041.475%2023.8741%2041.475%2023.6022%2041.475L23.6393%2041.4376Z'%20fill='white'/%3e%3cpath%20d='M42.7474%2030.0189H47.8639L46.4179%2037.1709H51.0153C53.5365%2037.2209%2055.415%2037.7451%2056.6509%2038.7437C57.9115%2039.7422%2058.2822%2041.6394%2057.7632%2044.4353L55.2791%2056.9045H50.0884L52.4613%2044.997C52.7084%2043.7489%2052.6343%2042.8626%2052.2388%2042.3384C51.8433%2041.8142%2050.9906%2041.552%2049.6806%2041.552L45.5652%2041.5146L42.5249%2056.9045H37.4084L42.7474%2030.0189Z'%20fill='white'/%3e%3cpath%20d='M63.2582%2037.1688H73.1945C76.1112%2037.1938%2078.2245%2038.0426%2079.5345%2039.7151C80.8445%2041.3877%2081.2771%2043.6718%2080.8322%2046.5675C80.6591%2047.8906%2080.276%2049.1887%2079.6828%2050.4618C79.1143%2051.735%2078.3233%2052.8832%2077.31%2053.9068C76.0741%2055.2048%2074.7517%2056.0286%2073.3428%2056.3782C71.9339%2056.7277%2070.4756%2056.9024%2068.9679%2056.9024H64.5187L63.1099%2064.017H57.9563L63.2582%2037.1688ZM67.5961%2041.4376L65.3715%2052.6711C65.5198%2052.696%2065.6681%2052.7085%2065.8164%2052.7085H66.3355C68.7083%2052.7335%2070.6857%2052.4963%2072.2676%2051.9971C73.8495%2051.4728%2074.9123%2049.6505%2075.4562%2046.5301C75.9011%2043.9089%2075.4561%2042.3987%2074.1214%2041.9992C72.8114%2041.5998%2071.1677%2041.4126%2069.1903%2041.4376C68.8937%2041.4625%2068.6095%2041.475%2068.3376%2041.475C68.0904%2041.475%2067.8309%2041.475%2067.559%2041.475L67.5961%2041.4376Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_276'%20x='-5.20049'%20y='10.8189'%20width='105.402'%20height='72.398'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.490196%200%200%200%200%200.521569%200%200%200%200%200.937255%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_276'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_276'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_276'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",yg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_283)'%3e%3cg%20filter='url(%23filter0_d_176_283)'%3e%3cpath%20d='M20.3257%2063.0411L22.7695%2064.4521L49.995%2017.2976L47.5512%2015.8866L20.3257%2063.0411Z'%20fill='%23E535AB'/%3e%3cpath%20d='M74.217%2059.274H19.766V62.096H74.217V59.274Z'%20fill='%23E535AB'/%3e%3cpath%20d='M20.8434%2060.8594L48.0791%2076.5844L49.4901%2074.1405L22.2544%2058.4155L20.8434%2060.8594Z'%20fill='%23E535AB'/%3e%3cpath%20d='M44.5031%2019.876L71.7388%2035.601L73.1498%2033.1571L45.9141%2017.4321L44.5031%2019.876Z'%20fill='%23E535AB'/%3e%3cpath%20d='M20.851%2033.1464L22.262%2035.5902L49.4977%2019.8652L48.0867%2017.4214L20.851%2033.1464Z'%20fill='%23E535AB'/%3e%3cpath%20d='M44.0112%2017.2982L71.2367%2064.4528L73.6805%2063.0418L46.455%2015.8872L44.0112%2017.2982Z'%20fill='%23E535AB'/%3e%3cpath%20d='M24.747%2031.275H21.925V62.725H24.747V31.275Z'%20fill='%23E535AB'/%3e%3cpath%20d='M72.0751%2031.275H69.2531V62.725H72.0751V31.275Z'%20fill='%23E535AB'/%3e%3cpath%20d='M46.3663%2073.2552L47.5988%2075.3899L71.2865%2061.7134L70.054%2059.5787L46.3663%2073.2552Z'%20fill='%23E535AB'/%3e%3cpath%20d='M75.815%2063.643C74.183%2066.482%2070.545%2067.451%2067.706%2065.819C64.867%2064.187%2063.898%2060.549%2065.53%2057.71C67.162%2054.871%2070.8%2053.902%2073.639%2055.534C76.495%2057.183%2077.464%2060.804%2075.815%2063.643Z'%20fill='%23E535AB'/%3e%3cpath%20d='M28.4531%2036.29C26.8211%2039.129%2023.1831%2040.098%2020.3441%2038.466C17.5051%2036.834%2016.5361%2033.196%2018.1681%2030.357C19.8001%2027.518%2023.4381%2026.549%2026.2771%2028.181C29.1161%2029.83%2030.0851%2033.451%2028.4531%2036.29Z'%20fill='%23E535AB'/%3e%3cpath%20d='M18.185%2063.643C16.553%2060.804%2017.522%2057.183%2020.361%2055.534C23.2%2053.902%2026.821%2054.871%2028.47%2057.71C30.102%2060.549%2029.133%2064.17%2026.294%2065.819C23.438%2067.451%2019.817%2066.482%2018.185%2063.643Z'%20fill='%23E535AB'/%3e%3cpath%20d='M65.547%2036.29C63.915%2033.451%2064.884%2029.83%2067.723%2028.181C70.562%2026.549%2074.183%2027.518%2075.832%2030.357C77.464%2033.196%2076.495%2036.817%2073.656%2038.466C70.817%2040.098%2067.179%2039.129%2065.547%2036.29Z'%20fill='%23E535AB'/%3e%3cpath%20d='M47%2080.286C43.719%2080.286%2041.067%2077.634%2041.067%2074.353C41.067%2071.072%2043.719%2068.42%2047%2068.42C50.281%2068.42%2052.933%2071.072%2052.933%2074.353C52.933%2077.617%2050.281%2080.286%2047%2080.286Z'%20fill='%23E535AB'/%3e%3cpath%20d='M47%2025.58C43.719%2025.58%2041.067%2022.928%2041.067%2019.647C41.067%2016.366%2043.719%2013.714%2047%2013.714C50.281%2013.714%2052.933%2016.366%2052.933%2019.647C52.933%2022.928%2050.281%2025.58%2047%2025.58Z'%20fill='%23E535AB'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_283'%20x='-1.82415'%20y='-5.48601'%20width='97.6483'%20height='104.972'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.898039%200%200%200%200%200.207843%200%200%200%200%200.670588%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_283'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_283'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_283'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Eg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_310)'%3e%3cg%20filter='url(%23filter0_d_176_310)'%3e%3crect%20x='13'%20y='13'%20width='68'%20height='68'%20rx='18.0851'%20fill='white'/%3e%3cpath%20d='M75.2603%2040.4951V42.6869H70.5496V54.2178H68.1941V42.687H63.3853V40.4951H75.2603ZM29.1046%2054.2178L20.4194%2043.4226V54.2122H18.0638V40.4894H21.0081L31.981%2054.1152L31.9811%2042.687L31.9802%2040.4951H43.8551V42.6869H34.3365V46.2128H41.9914V48.4047H34.3365V52.0261H43.8552V54.2178H29.1046ZM51.4042%2048.3838L52.9479%2050.303L49.7848%2054.2341H46.6936L51.4042%2048.3838ZM49.7848%2040.5008L53.7702%2045.4503L57.743%2040.516L60.8256%2040.5114L55.3134%2047.3669L60.8345%2054.2235H57.743L46.7023%2040.5008H49.7848Z'%20fill='black'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_310'%20x='-6.2'%20y='-6.2'%20width='106.4'%20height='106.4'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_310'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_310'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_310'%3e%3crect%20width='94'%20height='94'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Cg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_176_259)'%3e%3cg%20filter='url(%23filter0_d_176_259)'%3e%3cpath%20d='M51.0265%2065.0622H75.5615C76.3409%2065.0622%2077.1063%2064.8634%2077.7813%2064.4854C78.4519%2064.1117%2079.0122%2063.5679%2079.406%2062.9089C79.7946%2062.2579%2079.9999%2061.5139%2080%2060.7557C80%2059.9998%2079.794%2059.2575%2079.4039%2058.6029L62.9271%2030.9203C62.5333%2030.2616%2061.973%2029.7181%2061.3027%2029.3443C60.6245%2028.9652%2059.8604%2028.7665%2059.0834%2028.7673C58.304%2028.7673%2057.5389%2028.9664%2056.8639%2029.3443C56.1936%2029.718%2055.6334%2030.2615%2055.2397%2030.9203L51.0265%2038.0032L42.7894%2024.1525C42.395%2023.494%2041.8345%2022.9506%2041.1642%2022.5767C40.4857%2022.198%2039.7214%2021.9995%2038.9444%2022C38.1653%2022%2037.3996%2022.199%2036.7246%2022.5767C36.0543%2022.9506%2035.494%2023.494%2035.0996%2024.1525L14.5955%2058.6029C14.2065%2059.2536%2014.0007%2059.9975%2014%2060.7557C14%2061.5116%2014.2044%2062.2543%2014.594%2062.9089C14.9878%2063.5679%2015.5481%2064.1117%2016.2187%2064.4854C16.8971%2064.8646%2017.6614%2065.0632%2018.4385%2065.0622H33.8394C39.9416%2065.0622%2044.4415%2062.4624%2047.5381%2057.3902L55.0556%2044.7618L59.0821%2038.0032L71.1668%2058.3039H55.0556L51.0265%2065.0622ZM33.5881%2058.2972L22.8404%2058.2946L38.9516%2031.2287L46.9905%2044.7618L41.6081%2053.8068C39.5518%2057.0978%2037.2158%2058.2969%2033.5883%2058.2969'%20fill='%2300DC82'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_176_259'%20x='-5.2'%20y='2.8'%20width='104.4'%20height='81.4621'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='9.6'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200.862745%200%200%200%200%200.509804%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_176_259'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_176_259'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_176_259'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Tg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_187_396)'%3e%3cg%20filter='url(%23filter0_d_187_396)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.8086%2078.9982L15%2015L78.3727%2033.2454L30.8086%2078.9982Z'%20stroke='white'%20stroke-width='1.46332'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M46.6748%2024.1245L54.5734%2056.1331L22.9047%2047.0075L46.6748%2024.1245Z'%20stroke='white'%20stroke-width='1.46332'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M38.8166%2051.3489L34.8934%2035.4481L50.627%2039.9647L38.8166%2051.3489Z'%20stroke='white'%20stroke-width='1.46332'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.9689%2019.5667L34.8921%2035.4674L19.1584%2030.9509L30.9689%2019.5667Z'%20stroke='white'%20stroke-width='1.46332'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M62.4346%2028.6309L66.3577%2044.5316L50.6241%2040.0151L62.4346%2028.6309Z'%20stroke='white'%20stroke-width='1.46332'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M38.8185%2051.3597L42.7417%2067.2605L27.0081%2062.744L38.8185%2051.3597Z'%20stroke='white'%20stroke-width='1.46332'%20stroke-miterlimit='10'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_187_396'%20x='-9.15546'%20y='-9.15546'%20width='111.684'%20height='112.309'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='11.7119'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_187_396'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_187_396'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_187_396'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Ag="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_187_442)'%3e%3cpath%20d='M73.2223%2038.5173C72.2426%2037.8511%2070.9101%2038.1254%2070.2439%2039.1051C66.3643%2044.9442%2058.1347%2045.2577%2057.7036%2045.2577C57.6252%2045.2577%2057.586%2045.2577%2057.5076%2045.2577C47.3578%2045.2577%2043.4781%2053.9184%2043.3214%2054.2711C42.8511%2055.3684%2043.3606%2056.6225%2044.4186%2057.0927C44.693%2057.2103%2045.0065%2057.2887%2045.2808%2057.2887C46.1038%2057.2887%2046.8875%2056.8184%2047.2402%2055.9954C47.2794%2055.9171%2049.9442%2049.9604%2056.8023%2049.5685V60.6589C56.5279%2063.0494%2055.3915%2064.9304%2053.3928%2066.3412C51.3158%2067.7912%2048.5335%2068.5358%2045.124%2068.5358C41.0484%2068.5358%2037.7174%2067.125%2035.2485%2064.3426C32.7404%2061.5602%2031.4864%2057.6022%2031.4864%2052.5076L31.5256%2040.2808C31.7215%2035.7741%2032.9364%2032.2079%2035.2485%2029.6607C37.7566%2026.8783%2041.0484%2025.4675%2045.124%2025.4675C48.5335%2025.4675%2051.3158%2026.2121%2053.3928%2027.6621C55.4698%2029.112%2056.6455%2031.1107%2056.8414%2033.6971C56.8414%2033.7755%2056.8414%2033.8931%2056.8414%2033.9714C56.8414%2035.4606%2058.0563%2036.6754%2059.5455%2036.6754C61.0346%2036.6754%2062.2495%2035.4606%2062.2495%2033.9714C62.2495%2033.8931%2062.2495%2033.7755%2062.2495%2033.6971C61.8576%2029.8174%2060.0941%2026.7607%2056.9198%2024.4486C53.7455%2022.1365%2049.7875%2021%2045.0065%2021C39.3241%2021%2034.7391%2022.8811%2031.2513%2026.604C27.9594%2030.0918%2026.2351%2034.6768%2026.0392%2040.32C26.0392%2040.7119%2026%2041.1038%2026%2041.4957L26.0392%2052.5076H26C26%2058.7386%2027.7635%2063.7156%2031.2513%2067.4385C34.7391%2071.1614%2039.3241%2073.0425%2045.0065%2073.0425C49.7875%2073.0425%2053.7455%2071.906%2056.9198%2069.5939C59.8198%2067.4777%2061.5441%2064.6953%2062.1319%2061.2467L62.2495%2048.9415C65.8156%2048.0793%2070.675%2046.1199%2073.7317%2041.4957C74.5155%2040.5159%2074.2412%2039.1835%2073.2223%2038.5173Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_187_442'%20x='11.3057'%20y='6.30565'%20width='77.5733'%20height='81.4312'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='7.34717'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_187_442'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_187_442'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",bg="/assets/contentful-DC398OKw.svg",wg="/assets/astro-Bj5q9Up6.svg",Rg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_187_546)'%3e%3cpath%20d='M24.5086%2029.1443C24.3972%2025.9477%2026.8878%2023%2030.2543%2023H64.75C68.1165%2023%2070.607%2025.9477%2070.4957%2029.1443C70.3888%2032.2149%2070.5276%2036.1926%2071.5287%2039.4359C72.5329%2042.6892%2074.2264%2044.7455%2077%2045.0098V48.0059C74.2264%2048.2701%2072.5329%2050.3264%2071.5287%2053.5797C70.5276%2056.823%2070.3888%2060.8007%2070.4957%2063.8714C70.607%2067.0679%2068.1165%2070.0156%2064.75%2070.0156H30.2543C26.8878%2070.0156%2024.3972%2067.0679%2024.5087%2063.8714C24.6155%2060.8007%2024.4766%2056.823%2023.4755%2053.5797C22.4713%2050.3264%2020.7737%2048.2701%2018%2048.0059V45.0098C20.7736%2044.7455%2022.4713%2042.6892%2023.4755%2039.4359C24.4766%2036.1926%2024.6155%2032.2149%2024.5086%2029.1443Z'%20fill='url(%23paint0_linear_187_546)'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_d_187_546)'%3e%3cpath%20d='M48.7794%2059.0057C54.2296%2059.0057%2057.5139%2056.3371%2057.5139%2051.9355C57.5139%2048.6084%2055.1705%2046.1996%2051.6909%2045.8183V45.6797C54.2474%2045.2638%2056.2535%2042.8897%2056.2535%2040.2384C56.2535%2036.4607%2053.271%2033.9999%2048.7261%2033.9999H38.5002V59.0057H48.7794ZM42.477%2037.1711H47.7675C50.6435%2037.1711%2052.2767%2038.4535%2052.2767%2040.7755C52.2767%2043.2537%2050.3772%2044.6399%2046.9331%2044.6399H42.477V37.1711ZM42.477%2055.8346V47.6033H47.7319C51.4956%2047.6033%2053.4484%2048.9896%2053.4484%2051.693C53.4484%2054.3962%2051.5489%2055.8346%2047.9627%2055.8346H42.477Z'%20fill='url(%23paint1_linear_187_546)'/%3e%3cpath%20d='M48.7794%2059.0057C54.2296%2059.0057%2057.5139%2056.3371%2057.5139%2051.9355C57.5139%2048.6084%2055.1705%2046.1996%2051.6909%2045.8183V45.6797C54.2474%2045.2638%2056.2535%2042.8897%2056.2535%2040.2384C56.2535%2036.4607%2053.271%2033.9999%2048.7261%2033.9999H38.5002V59.0057H48.7794ZM42.477%2037.1711H47.7675C50.6435%2037.1711%2052.2767%2038.4535%2052.2767%2040.7755C52.2767%2043.2537%2050.3772%2044.6399%2046.9331%2044.6399H42.477V37.1711ZM42.477%2055.8346V47.6033H47.7319C51.4956%2047.6033%2053.4484%2048.9896%2053.4484%2051.693C53.4484%2054.3962%2051.5489%2055.8346%2047.9627%2055.8346H42.477Z'%20stroke='white'%20stroke-width='0.115234'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_187_546'%20x='7.14844'%20y='12.1484'%20width='80.7031'%20height='68.7187'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='5.42578'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.609139%200%200%200%200%200.211538%200%200%200%200%201%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_187_546'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_187_546'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='filter1_d_187_546'%20x='36.5989'%20y='32.5594'%20width='22.8164'%20height='28.8086'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='0.460938'/%3e%3cfeGaussianBlur%20stdDeviation='0.921875'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.15%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_187_546'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_187_546'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_187_546'%20x1='26.7669'%20y1='24.2443'%20x2='78.3229'%20y2='65.1694'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%239013FE'/%3e%3cstop%20offset='1'%20stop-color='%236610F2'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_187_546'%20x1='40.2987'%20y1='35.6458'%20x2='51.8228'%20y2='55.1356'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23F1E5FC'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",Pg="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_187_555)'%3e%3cg%20filter='url(%23filter0_d_187_555)'%3e%3cpath%20d='M75.6865%2013C78.4479%2013%2080.6865%2015.2386%2080.6865%2018V76C80.6865%2078.7614%2078.4479%2081%2075.6865%2081H17.6865C14.9252%2080.9999%2012.6865%2078.7613%2012.6865%2076V35.3848L35.0713%2013H75.6865Z'%20fill='url(%23paint0_linear_187_555)'/%3e%3cg%20clip-path='url(%23clip1_187_555)'%3e%3cpath%20d='M59.9989%2057.5395H55.1335V38.0208H68.1028V42.566H59.9989V46.049H67.6369V50.4811H59.9989V57.5395Z'%20fill='white'/%3e%3cg%20style='mix-blend-mode:darken'%20opacity='0.1'%3e%3cpath%20d='M53.8498%2049.348H58.6722C57.9587%2054.316%2053.7694%2057.6016%2048.6938%2057.6016C43.1357%2057.6016%2038.6104%2053.4481%2038.6104%2047.8549C38.5988%2046.5543%2038.8516%2045.2647%2039.3538%2044.0648C39.8559%2042.8648%2040.5967%2041.7795%2041.5312%2040.8746C43.4493%2039.0171%2046.0239%2037.9933%2048.6938%2038.0263C53.7224%2038.0263%2058.0288%2041.3373%2058.6411%2046.2258H53.8236C52.375%2040.6883%2043.3491%2041.2298%2043.3491%2047.8549C43.3491%2054.4809%2052.4881%2054.969%2053.8498%2049.3496V49.348Z'%20fill='%23027AD4'/%3e%3c/g%3e%3cpath%20d='M52.8632%2049.348C52.0359%2052.143%2049.0912%2053.8049%2046.1927%2053.109C43.2926%2052.4106%2041.4754%2049.6076%2042.0774%2046.7585C42.6786%2043.9085%2045.4832%2042.0309%2048.4295%2042.5063C49.6365%2042.6698%2050.7494%2043.2466%2051.5788%2044.1387C52.152%2044.7288%2052.5822%2045.4425%2052.8362%2046.2249H57.5128C56.9004%2041.3254%2052.5822%2038.0263%2047.5655%2038.0263C44.8953%2037.9924%2042.3199%2039.0157%2040.4012%2040.8731C39.4661%2041.7781%2038.7249%2042.8639%2038.2226%2044.0645C37.7204%2045.2651%2037.4676%2046.5552%2037.4797%2047.8566C37.4797%2053.4497%2041.9787%2057.6016%2047.5671%2057.6016C52.6387%2057.6016%2056.816%2054.3161%2057.5422%2049.348H52.8632Z'%20fill='white'/%3e%3cg%20style='mix-blend-mode:darken'%20opacity='0.1'%3e%3cpath%20d='M38.3302%2054.6998H31.5593L30.4525%2057.5362H25.271L33.2005%2038H36.6564L44.9012%2057.5426H39.4307L38.3286%2054.6998H38.3302ZM33.4839%2049.864L33.3143%2050.3051H36.6014L36.4876%2049.9738L34.9571%2045.7846L33.4839%2049.864Z'%20fill='%23027AD4'/%3e%3c/g%3e%3cpath%20d='M37.048%2054.6998H30.2883L29.1823%2057.5362H24L31.9303%2038H35.3862L43.631%2057.5426H38.1629L37.048%2054.6998ZM32.213%2049.864L32.0442%2050.3051H35.3312L35.2166%2049.9738L33.6869%2045.7846L32.213%2049.864Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_187_555'%20x='0.179641'%20y='0.493117'%20width='93.0138'%20height='93.0138'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='6.25344'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.0392157%200%200%200%200%200.713726%200%200%200%200%200.827451%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_187_555'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_187_555'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_187_555'%20x1='16'%20y1='19.5'%20x2='61.6974'%20y2='67.2057'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230BBAD4'/%3e%3cstop%20offset='1'%20stop-color='%230172D5'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_187_555'%3e%3crect%20width='94'%20height='94'%20rx='25'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_187_555'%3e%3crect%20width='45'%20height='19.6364'%20fill='white'%20transform='translate(24%2038)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Lg="/assets/postgres-DJpcsbua.svg",Ig="data:image/svg+xml,%3csvg%20width='94'%20height='94'%20viewBox='0%200%2094%2094'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_187_603)'%3e%3cpath%20d='M75.4281%2065.4111L47.8695%2081V68.8587L65.0244%2059.4124L75.4281%2065.4056V65.4111ZM77.3151%2063.7012V31.1012L67.2324%2036.9284V57.8851L77.3151%2063.7012ZM17.887%2065.4111L45.4456%2081V68.8587L28.2907%2059.4124L17.887%2065.4111ZM16%2063.7012V31.1012L26.0827%2036.9284V57.8851L16%2063.7012ZM17.1842%2028.9873L45.4456%2013V24.7318L27.3333%2034.6927L27.1895%2034.7702L17.1842%2028.9873ZM76.1309%2028.9873L47.8695%2013V24.7318L65.9818%2034.6927L66.1257%2034.7757L76.1309%2028.9928V28.9873Z'%20fill='%238ED6FB'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_d_187_603)'%3e%3cpath%20d='M45.4456%2066.1251L28.501%2056.7729V38.3175L45.4456%2048.1013V66.1251ZM47.8695%2066.1251L64.8141%2056.7839V38.3175L47.8695%2048.1013V66.1251ZM29.6465%2036.2423L46.6576%2026.8347L63.6686%2036.1869L46.6576%2046.004L29.6465%2036.1869V36.2423Z'%20fill='%231C78C0'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_187_603'%20x='3.49312'%20y='0.493117'%20width='86.3288'%20height='93.0138'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='6.25344'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.556863%200%200%200%200%200.839216%200%200%200%200%200.984314%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_187_603'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_187_603'%20result='shape'/%3e%3c/filter%3e%3cfilter%20id='filter1_d_187_603'%20x='15.9941'%20y='14.3278'%20width='61.3269'%20height='64.3042'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='6.25344'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.109804%200%200%200%200%200.470588%200%200%200%200%200.752941%200%200%200%200.4%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_187_603'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_187_603'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",hn=(n,e="_top")=>{window.open(n,e)},Nu=n=>{const e=document.querySelector(n);window.scrollTo({top:e.offsetTop-200,behavior:"smooth"})},Dg=()=>[{name:"Docker",img:Q3,link:"https://www.docker.com/",color:"#2496ed"},{name:"ExpressJS",img:eg,link:"https://expressjs.com/",color:"#ffffff"},{name:"Go Lang",img:tg,link:"https://go.dev/",color:"#00add8"},{name:"JQuery",img:ng,link:"https://jquery.com/",color:"#0868ac"},{name:"MongoDb",img:ig,link:"https://www.mongodb.com/",color:"#47a248"},{name:"MySQL",img:rg,link:"https://www.mysql.com/",color:"#ffffff"},{name:"NodeJs",img:sg,link:"https://nodejs.org/",color:"#8cc84b"},{name:"Postman",img:og,link:"https://www.postman.com/",color:"#f76935"},{name:"ReactJs",img:ag,link:"https://react.dev/",color:"#61dafb"},{name:"Sass",img:lg,link:"https://sass-lang.com/",color:"#cd6799"},{name:"Tailwind",img:cg,link:"https://tailwindcss.com/",color:"#38bdf8"},{name:"Typescript",img:ug,link:"https://www.typescriptlang.org/",color:"#007acc"},{name:"Vue",img:fg,link:"https://vuejs.org/",color:"#42b883"},{name:"Wordpress",img:hg,link:"https://wordpress.com/",color:"#21759b"},{name:"Redux",img:dg,link:"https://redux.js.org/",color:"#764abc"},{name:"Vite",img:pg,link:"https://vitejs.dev/",color:"#646cff"},{name:".NET",img:_g,link:"https://dotnet.microsoft.com/",color:"#512bd4"},{name:"Javascript",img:vg,link:"",color:"#f7df1e"},{name:"Illustrator",img:gg,link:"https://www.adobe.com/br/products/illustrator/",color:"#f24e1e"},{name:"Photoshop",img:mg,link:"https://www.adobe.com/br/products/photoshop/",color:"#31a8ff"},{name:"Jest",img:xg,link:"https://jestjs.io/",color:"#99425f"},{name:"AWS",img:Sg,link:"https://aws.amazon.com/",color:"#ff9900"},{name:"PHP",img:Mg,link:"https://www.php.net/",color:"#777bb4"},{name:"GraphQl",img:yg,link:"https://graphql.org/",color:"#e10098"},{name:"Next.js",img:Eg,link:"https://nextjs.org/",color:"#ffffff"},{name:"Nuxt.js",img:Cg,link:"https://nuxtjs.org/",color:"#00dc82"},{name:"Three.js",img:Tg,link:"https://threejs.org/",color:"#049EF4"},{name:"Gutenberg",img:Ag,link:"https://wordpress.org/gutenberg/",color:"#ffffff"},{name:"Contentful",img:bg,link:"https://www.contentful.com/",color:"#FAE501"},{name:"Astro",img:wg,link:"https://astro.build/",color:"#ff5d01"},{name:"Bootstrap",img:Rg,link:"https://getbootstrap.com/",color:"#9013FE"},{name:"ACF",img:Pg,link:"https://www.advancedcustomfields.com/",color:"#0BBAD4"},{name:"Postgres",img:Lg,link:"https://www.postgresql.org/",color:"#336791"},{name:"Webpack",img:Ig,link:"https://webpack.js.org/",color:"#8ED6FB"}],Ug={class:"scrolling-down"},Ng={class:"logo"},Fg=["src"],Og=["onClick"],Bg={__name:"Header",setup(n){const e=Cn([{text:"home",to:"#hero"},{text:"technologies",to:"#technologies"},{text:"portfolio",to:"#relevant-projects"},{text:"experiences",to:"#experiences"}]),t=Cn(null),i=()=>{t.value=!t.value},r=()=>{const o=window.location.hash;e.value.forEach(a=>{a.active=o===a.to})},s=o=>{Nu(o),history.replaceState(null,"",o),r()};return Vi(()=>{r(),window.addEventListener("hashchange",r)}),(o,a)=>(Ke(),nt("header",Ug,[ve("div",Ng,[ve("img",{onClick:a[0]||(a[0]=l=>st(hn)("/")),src:st(Gd)},null,8,Fg)]),_t(J3,{onToggleMenu:i,opened:t.value},null,8,["opened"]),ve("nav",{class:li({opened:t.value})},[(Ke(!0),nt(ut,null,Yt(e.value,(l,c)=>(Ke(),nt("a",{onClick:u=>s(l.to),key:"routerItem"+c,class:li({active:l.active})},qt(l.text),11,Og))),128)),ve("a",{onClick:a[1]||(a[1]=l=>st(hn)("mailto:felipe.colla.m@gmail.com","_blank"))},"contact")],2)]))}},Hg=Uu(Bg,[["__scopeId","data-v-5fad34f8"]]),zg="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.62%2010.79C8.06%2013.62%2010.38%2015.93%2013.21%2017.38L15.41%2015.18C15.68%2014.91%2016.08%2014.82%2016.43%2014.94C17.55%2015.31%2018.76%2015.51%2020%2015.51C20.55%2015.51%2021%2015.96%2021%2016.51V20C21%2020.55%2020.55%2021%2020%2021C10.61%2021%203%2013.39%203%204C3%203.45%203.45%203%204%203H7.5C8.05%203%208.5%203.45%208.5%204C8.5%205.25%208.7%206.45%209.07%207.57C9.18%207.92%209.1%208.31%208.82%208.59L6.62%2010.79Z'%20fill='white'/%3e%3c/svg%3e",Vg="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.73%205.4101L17.45%206.4101L12%2010.4601L6.55%206.3701L5.27%205.3701C4.96845%205.12064%204.60035%204.96514%204.21129%204.92285C3.82222%204.88056%203.42931%204.95334%203.08121%205.13218C2.73311%205.31102%202.44512%205.58806%202.25294%205.92897C2.06075%206.26988%201.97281%206.65969%202%207.0501V18.6401C2%2019.0008%202.14328%2019.3467%202.39833%2019.6018C2.65338%2019.8568%202.9993%2020.0001%203.36%2020.0001H6.55V12.2801L12%2016.3701L17.45%2012.2801V20.0001H20.64C21.0007%2020.0001%2021.3466%2019.8568%2021.6017%2019.6018C21.8567%2019.3467%2022%2019.0008%2022%2018.6401V7.0501C22.0188%206.66306%2021.9247%206.2789%2021.7292%205.94432C21.5338%205.60974%2021.2453%205.33914%2020.899%205.16543C20.5526%204.99171%2020.1632%204.92235%2019.7782%204.96579C19.3931%205.00923%2019.029%205.16358%2018.73%205.4101Z'%20fill='white'/%3e%3c/svg%3e",Wd="data:image/svg+xml,%3csvg%20width='37'%20height='37'%20viewBox='0%200%2037%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.5%203.08334C16.4755%203.08334%2014.4707%203.4821%2012.6003%204.25686C10.7299%205.03162%209.03034%206.1672%207.59877%207.59877C4.70759%2010.49%203.08334%2014.4112%203.08334%2018.5C3.08334%2025.3142%207.50792%2031.0954%2013.6283%2033.1458C14.3992%2033.2692%2014.6458%2032.7913%2014.6458%2032.375V29.7696C10.3754%2030.6946%209.46584%2027.7038%209.46584%2027.7038C8.75667%2025.9154%207.75459%2025.4375%207.75459%2025.4375C6.35167%2024.4817%207.8625%2024.5125%207.8625%2024.5125C9.40417%2024.6204%2010.2213%2026.1004%2010.2213%2026.1004C11.5625%2028.4438%2013.8288%2027.75%2014.7075%2027.38C14.8463%2026.3779%2015.2471%2025.6996%2015.6788%2025.3142C12.2563%2024.9288%208.66417%2023.6029%208.66417%2017.7292C8.66417%2016.0179%209.25%2014.6458%2010.2521%2013.5513C10.0979%2013.1658%209.55834%2011.5625%2010.4063%209.48125C10.4063%209.48125%2011.7013%209.065%2014.6458%2011.0538C15.8638%2010.7146%2017.1896%2010.545%2018.5%2010.545C19.8104%2010.545%2021.1363%2010.7146%2022.3542%2011.0538C25.2988%209.065%2026.5938%209.48125%2026.5938%209.48125C27.4417%2011.5625%2026.9021%2013.1658%2026.7479%2013.5513C27.75%2014.6458%2028.3358%2016.0179%2028.3358%2017.7292C28.3358%2023.6183%2024.7283%2024.9133%2021.2904%2025.2988C21.8454%2025.7767%2022.3542%2026.7171%2022.3542%2028.1508V32.375C22.3542%2032.7913%2022.6008%2033.2846%2023.3871%2033.1458C29.5075%2031.08%2033.9167%2025.3142%2033.9167%2018.5C33.9167%2016.4755%2033.5179%2014.4707%2032.7431%2012.6003C31.9684%2010.7299%2030.8328%209.03034%2029.4012%207.59877C27.9697%206.1672%2026.2701%205.03162%2024.3997%204.25686C22.5293%203.4821%2020.5245%203.08334%2018.5%203.08334Z'%20fill='white'/%3e%3c/svg%3e",Xd="data:image/svg+xml,%3csvg%20width='37'%20height='37'%20viewBox='0%200%2037%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_70_9)'%3e%3cpath%20d='M18.5%204.0293C26.4922%204.0293%2032.9586%2010.4957%2032.9586%2018.4758C32.9586%2026.4559%2026.4922%2032.9344%2018.5%2032.9344C10.5078%2032.9344%204.04141%2026.468%204.04141%2018.4879C4.04141%2010.5078%2010.5078%204.0293%2018.5%204.0293Z'%20fill='%23E74D89'/%3e%3cpath%20d='M18.5%2033.9637C9.95078%2033.9637%203%2027.025%203%2018.4879C3%209.93867%209.95078%203%2018.5%203C27.0492%203%2034%209.93867%2034%2018.4758C34%2027.0129%2027.0492%2033.9637%2018.5%2033.9637ZM31.566%2020.5949C31.118%2020.4496%2027.473%2019.3719%2023.3195%2020.0258C25.0512%2024.7727%2025.7535%2028.6477%2025.8867%2029.4469C28.8656%2027.4488%2030.9848%2024.2762%2031.566%2020.5949ZM23.6707%2030.6699C23.477%2029.5074%2022.702%2025.4629%2020.8492%2020.6434C20.825%2020.6555%2020.7887%2020.6676%2020.7645%2020.6676C13.293%2023.2711%2010.6168%2028.4418%2010.3746%2028.9262C12.6148%2030.6699%2015.4363%2031.7113%2018.5%2031.7113C20.3285%2031.7234%2022.0844%2031.348%2023.6707%2030.6699ZM8.66719%2027.3398C8.96992%2026.8313%2012.6027%2020.825%2019.4324%2018.609C19.602%2018.5484%2019.7836%2018.5%2019.9531%2018.4516C19.6262%2017.7008%2019.2629%2016.95%2018.8754%2016.2113C12.2637%2018.1852%205.8457%2018.1004%205.26445%2018.0883C5.26445%2018.2215%205.25234%2018.3547%205.25234%2018.4879C5.26445%2021.8906%206.54805%2024.9906%208.66719%2027.3398ZM5.54297%2015.7875C6.13633%2015.7996%2011.5855%2015.8238%2017.7855%2014.177C15.5937%2010.2777%2013.2203%207.0082%2012.8812%206.53594C9.16367%208.27969%206.40273%2011.6945%205.54297%2015.7875ZM15.4%205.63984C15.7633%206.12422%2018.173%209.39375%2020.3406%2013.3777C25.0512%2011.6098%2027.0371%208.9457%2027.2793%208.60664C24.9422%206.53594%2021.8664%205.27656%2018.5%205.27656C17.4344%205.27656%2016.393%205.40977%2015.4%205.63984ZM28.7445%2010.1324C28.466%2010.5078%2026.25%2013.3535%2021.3578%2015.3516C21.6605%2015.9812%2021.9633%2016.623%2022.2418%2017.2648C22.3387%2017.4949%2022.4355%2017.725%2022.5324%2017.943C26.9402%2017.3859%2031.3117%2018.282%2031.7477%2018.3668C31.7113%2015.2547%2030.5973%2012.3848%2028.7445%2010.1324Z'%20fill='%23B2215A'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_70_9'%3e%3crect%20width='31'%20height='31'%20fill='white'%20transform='translate(3%203)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",kg={class:"footer-section"},Gg={class:"subsection"},Wg=["src"],Xg=["src"],$g={class:"sub-section"},qg={class:"logo"},Yg=["src"],Zg={class:"footer-section"},Kg={class:"subsection"},jg=["onClick"],Jg={class:"subsection"},Qg={class:"socials"},e_=["src"],t_=["src"],n_={__name:"Footer",setup(n){const e=[{text:"experiences",to:"#experiences",active:!0},{text:"technologies",to:"#technologies"},{text:"portfolio",to:"#relevant-projects"}];return(t,i)=>(Ke(),nt("footer",null,[ve("div",kg,[ve("div",Gg,[ve("a",{class:"footer-item",onClick:i[0]||(i[0]=r=>st(hn)("tel:+33783002154","_blank"))},[ve("img",{src:st(zg),alt:"Phone"},null,8,Wg),Jr("+33 7 83 00 21 54")]),ve("a",{class:"footer-item",onClick:i[1]||(i[1]=r=>st(hn)("mailto:felipe.colla.m@gmail.com","_blank"))},[ve("img",{src:st(Vg),alt:"Gmail"},null,8,Xg),Jr("Send me a message")])]),ve("div",$g,[ve("h1",qg,[ve("img",{onClick:i[2]||(i[2]=r=>st(hn)("/")),src:st(Gd)},null,8,Yg)])])]),ve("div",Zg,[ve("div",Kg,[(Ke(),nt(ut,null,Yt(e,(r,s)=>ve("a",{onClick:o=>st(Nu)(r.to),key:"routerItem"+s,class:li({active:r.active})},qt(r.text),11,jg)),64)),ve("a",{onClick:i[3]||(i[3]=r=>st(hn)("mailto:felipe.colla.m@gmail.com","_blank"))},"contact")]),ve("div",Jg,[ve("div",Qg,[ve("a",{onClick:i[4]||(i[4]=r=>st(hn)("https://github.com/mateusfcolla","_blank")),rel:"noopener noreferrer"},[ve("img",{src:st(Wd),alt:"My Github"},null,8,e_)]),ve("a",{onClick:i[5]||(i[5]=r=>st(hn)("https://dribbble.com/coall_fcm","_blank")),rel:"noopener noreferrer"},[ve("img",{src:st(Xd),alt:"My Dribbble"},null,8,t_)])])])])]))}},i_=n=>(hd("data-v-842ae5f9"),n=n(),dd(),n),r_=i_(()=>ve("div",{class:"loading"},[ve("div",{class:"line"}),ve("div",{class:"line"}),ve("div",{class:"line"})],-1)),s_=[r_],o_={__name:"Loading",props:["isLoading"],setup(n){const e=n;return(t,i)=>(Ke(),nt("div",{class:li(["loading-screen",{active:e.isLoading}])},s_,2))}},a_=Uu(o_,[["__scopeId","data-v-842ae5f9"]]),l_=ve("div",{class:"grained"},null,-1),c_=ve("div",{class:"cursor"},null,-1),u_={__name:"App",setup(n){const e=Cn(!0);Vi(()=>{Promise.all([document.fonts.ready]).then(()=>{e.value=!1}),setTimeout(()=>t("Hey, I'm Mateus Felipe. Lets work together!  "),300)});const t=i=>{document.title=i,setTimeout(()=>t(i.substr(1)+i.substr(0,1)),400)};return(i,r)=>{const s=Ru("RouterView");return Ke(),nt(ut,null,[l_,c_,_t(a_,{isLoading:e.value},null,8,["isLoading"]),e.value?ia("",!0):(Ke(),Ri(Hg,{key:0})),e.value?ia("",!0):(Ke(),Ri(s,{key:1})),e.value?ia("",!0):(Ke(),Ri(n_,{key:2}))],64)}}};/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Fr=typeof document<"u";function f_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const gt=Object.assign;function pl(n,e){const t={};for(const i in e){const r=e[i];t[i]=Ln(r)?r.map(n):n(r)}return t}const Ds=()=>{},Ln=Array.isArray,$d=/#/g,h_=/&/g,d_=/\//g,p_=/=/g,m_=/\?/g,qd=/\+/g,g_=/%5B/g,__=/%5D/g,Yd=/%5E/g,v_=/%60/g,Zd=/%7B/g,x_=/%7C/g,Kd=/%7D/g,S_=/%20/g;function Fu(n){return encodeURI(""+n).replace(x_,"|").replace(g_,"[").replace(__,"]")}function M_(n){return Fu(n).replace(Zd,"{").replace(Kd,"}").replace(Yd,"^")}function pc(n){return Fu(n).replace(qd,"%2B").replace(S_,"+").replace($d,"%23").replace(h_,"%26").replace(v_,"`").replace(Zd,"{").replace(Kd,"}").replace(Yd,"^")}function y_(n){return pc(n).replace(p_,"%3D")}function E_(n){return Fu(n).replace($d,"%23").replace(m_,"%3F")}function C_(n){return n==null?"":E_(n).replace(d_,"%2F")}function Gs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const T_=/\/$/,A_=n=>n.replace(T_,"");function ml(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=P_(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Gs(o)}}function b_(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function w_(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Qr(e.matched[i],t.matched[r])&&jd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Qr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function jd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!R_(n[t],e[t]))return!1;return!0}function R_(n,e){return Ln(n)?nf(n,e):Ln(e)?nf(e,n):n===e}function nf(n,e){return Ln(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function P_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const mi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ws;(function(n){n.pop="pop",n.push="push"})(Ws||(Ws={}));var Sa;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Sa||(Sa={}));const gl="";function L_(n){if(!n)if(Fr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),A_(n)}const I_=/^[^#]+#/;function D_(n,e){return n.replace(I_,"#")+e}function U_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const N_=()=>({left:window.scrollX,top:window.scrollY});function F_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=U_(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rf(n,e){return(history.state?history.state.position-e:-1)+n}const mc=new Map;function O_(n,e){mc.set(n,e)}function B_(n){const e=mc.get(n);return mc.delete(n),e}function H_(n=""){let e=[],t=[gl],i=0;n=L_(n);function r(a){i++,i!==t.length&&t.splice(i),t.push(a)}function s(a,l,{direction:c,delta:u}){const f={direction:c,delta:u,type:Ws.pop};for(const h of e)h(a,l,f)}const o={location:gl,state:{},base:n,createHref:D_.bind(null,n),replace(a){t.splice(i--,1),r(a)},push(a,l){r(a)},listen(a){return e.push(a),()=>{const l=e.indexOf(a);l>-1&&e.splice(l,1)}},destroy(){e=[],t=[gl],i=0},go(a,l=!0){const c=this.location,u=a<0?Sa.back:Sa.forward;i=Math.max(0,Math.min(i+a,t.length-1)),l&&s(this.location,c,{direction:u,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t[i]}),o}function z_(n){return typeof n=="string"||n&&typeof n=="object"}function Jd(n){return typeof n=="string"||typeof n=="symbol"}const Qd=Symbol("");var sf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(sf||(sf={}));function es(n,e){return gt(new Error,{type:n,[Qd]:!0},e)}function Xn(n,e){return n instanceof Error&&Qd in n&&(e==null||!!(n.type&e))}const of="[^/]+?",V_={sensitive:!1,strict:!1,start:!0,end:!0},k_=/[.+*?^${}()[\]/\\]/g;function G_(n,e){const t=gt({},V_,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(k_,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;s.push({name:g,repeatable:_,optional:m});const E=p||of;if(E!==of){d+=10;try{new RegExp(`(${E})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+M.message)}}let S=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),r+=S,d+=20,m&&(d+=-8),_&&(d+=-20),E===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Ln(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=Ln(p)?p.join("/"):p;if(!E)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function W_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function e2(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=W_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(af(i))return 1;if(af(r))return-1}return r.length-i.length}function af(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const X_={type:0,value:""},$_=/[a-zA-Z0-9_]/;function q_(n){if(!n)return[[]];if(n==="/")return[[X_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:$_.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Y_(n,e,t){const i=G_(q_(n.path),t),r=gt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Z_(n,e){const t=[],i=new Map;e=uf({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const g=!d,_=K_(f);_.aliasOf=d&&d.record;const m=uf(e,f),p=[_];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const L of M)p.push(gt({},_,{components:d?d.record.components:_.components,path:L,aliasOf:d?d.record:_}))}let E,S;for(const M of p){const{path:L}=M;if(h&&L[0]!=="/"){const P=h.record.path,R=P[P.length-1]==="/"?"":"/";M.path=h.record.path+(L&&R+L)}if(E=Y_(M,h,m),d?d.alias.push(E):(S=S||E,S!==E&&S.alias.push(E),g&&f.name&&!cf(E)&&o(f.name)),t2(E)&&l(E),_.children){const P=_.children;for(let R=0;R<P.length;R++)s(P[R],E,d&&d.children[R])}d=d||E}return S?()=>{o(S)}:Ds}function o(f){if(Jd(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=Q_(f,t);t.splice(h,0,f),f.record.name&&!cf(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},_,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw es(1,{location:f});m=d.record.name,g=gt(lf(h.params,d.keys.filter(S=>!S.optional).concat(d.parent?d.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),f.params&&lf(f.params,d.keys.map(S=>S.name))),_=d.stringify(g)}else if(f.path!=null)_=f.path,d=t.find(S=>S.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(S=>S.re.test(h.path)),!d)throw es(1,{location:f,currentLocation:h});m=d.record.name,g=gt({},h.params,f.params),_=d.stringify(g)}const p=[];let E=d;for(;E;)p.unshift(E.record),E=E.parent;return{name:m,path:_,params:g,matched:p,meta:J_(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function lf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function K_(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:j_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function j_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function cf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function J_(n){return n.reduce((e,t)=>gt(e,t.meta),{})}function uf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Q_(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;e2(n,e[s])<0?i=s:t=s+1}const r=e1(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function e1(n){let e=n;for(;e=e.parent;)if(t2(e)&&e2(n,e)===0)return e}function t2({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function t1(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(qd," "),o=s.indexOf("="),a=Gs(o<0?s:s.slice(0,o)),l=o<0?null:Gs(s.slice(o+1));if(a in e){let c=e[a];Ln(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ff(n){let e="";for(let t in n){const i=n[t];if(t=y_(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Ln(i)?i.map(s=>s&&pc(s)):[i&&pc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function n1(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Ln(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const i1=Symbol(""),hf=Symbol(""),Ou=Symbol(""),n2=Symbol(""),gc=Symbol("");function gs(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ci(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(es(4,{from:t,to:e})):h instanceof Error?l(h):z_(h)?l(es(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function _l(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(r1(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Ci(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=f_(u)?u.default:u;o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Ci(d,t,i,o,a,r)()}))}}return s}function r1(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function df(n){const e=Bn(Ou),t=Bn(n2),i=sn(()=>{const l=st(n.to);return e.resolve(l)}),r=sn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Qr.bind(null,u));if(h>-1)return h;const d=pf(l[c-2]);return c>1&&pf(u)===d&&f[f.length-1].path!==d?f.findIndex(Qr.bind(null,l[c-2])):h}),s=sn(()=>r.value>-1&&l1(t.params,i.value.params)),o=sn(()=>r.value>-1&&r.value===t.matched.length-1&&jd(t.params,i.value.params));function a(l={}){return a1(l)?e[st(n.replace)?"replace":"push"](st(n.to)).catch(Ds):Promise.resolve()}return{route:i,href:sn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const s1=no({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:df,setup(n,{slots:e}){const t=Na(df(n)),{options:i}=Bn(Ou),r=sn(()=>({[mf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[mf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:kd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),o1=s1;function a1(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function l1(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Ln(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function pf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const mf=(n,e,t)=>n??e??t,c1=no({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Bn(gc),r=sn(()=>n.route||i.value),s=Bn(hf,0),o=sn(()=>{let c=st(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=sn(()=>r.value.matched[o.value]);Ps(hf,sn(()=>o.value+1)),Ps(i1,a),Ps(gc,r);const l=Cn();return Ls(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Qr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return gf(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=kd(h,gt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return gf(t.default,{Component:m,route:c})||m}}});function gf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const u1=c1;function f1(n){const e=Z_(n.routes,n),t=n.parseQuery||t1,i=n.stringifyQuery||ff,r=n.history,s=gs(),o=gs(),a=gs(),l=hm(mi);let c=mi;Fr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pl.bind(null,N=>""+N),f=pl.bind(null,C_),h=pl.bind(null,Gs);function d(N,re){let ae,le;return Jd(N)?(ae=e.getRecordMatcher(N),le=re):le=N,e.addRoute(le,ae)}function g(N){const re=e.getRecordMatcher(N);re&&e.removeRoute(re)}function _(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,re){if(re=gt({},re||l.value),typeof N=="string"){const v=ml(t,N,re.path),k=e.resolve({path:v.path},re),ne=r.createHref(v.fullPath);return gt(v,k,{params:h(k.params),hash:Gs(v.hash),redirectedFrom:void 0,href:ne})}let ae;if(N.path!=null)ae=gt({},N,{path:ml(t,N.path,re.path).path});else{const v=gt({},N.params);for(const k in v)v[k]==null&&delete v[k];ae=gt({},N,{params:f(v)}),re.params=f(re.params)}const le=e.resolve(ae,re),Ne=N.hash||"";le.params=u(h(le.params));const ze=b_(i,gt({},N,{hash:M_(Ne),path:le.path})),C=r.createHref(ze);return gt({fullPath:ze,hash:Ne,query:i===ff?n1(N.query):N.query||{}},le,{redirectedFrom:void 0,href:C})}function E(N){return typeof N=="string"?ml(t,N,l.value.path):gt({},N)}function S(N,re){if(c!==N)return es(8,{from:re,to:N})}function M(N){return R(N)}function L(N){return M(gt(E(N),{replace:!0}))}function P(N){const re=N.matched[N.matched.length-1];if(re&&re.redirect){const{redirect:ae}=re;let le=typeof ae=="function"?ae(N):ae;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=E(le):{path:le},le.params={}),gt({query:N.query,hash:N.hash,params:le.path!=null?{}:N.params},le)}}function R(N,re){const ae=c=p(N),le=l.value,Ne=N.state,ze=N.force,C=N.replace===!0,v=P(ae);if(v)return R(gt(E(v),{state:typeof v=="object"?gt({},Ne,v.state):Ne,force:ze,replace:C}),re||ae);const k=ae;k.redirectedFrom=re;let ne;return!ze&&w_(i,le,ae)&&(ne=es(16,{to:k,from:le}),ue(le,le,!0,!1)),(ne?Promise.resolve(ne):y(k,le)).catch(j=>Xn(j)?Xn(j,2)?j:K(j):O(j,k,le)).then(j=>{if(j){if(Xn(j,2))return R(gt({replace:C},E(j.to),{state:typeof j.to=="object"?gt({},Ne,j.to.state):Ne,force:ze}),re||k)}else j=U(k,le,!0,C,Ne);return w(k,le,j),j})}function I(N,re){const ae=S(N,re);return ae?Promise.reject(ae):Promise.resolve()}function A(N){const re=ie.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(N):N()}function y(N,re){let ae;const[le,Ne,ze]=h1(N,re);ae=_l(le.reverse(),"beforeRouteLeave",N,re);for(const v of le)v.leaveGuards.forEach(k=>{ae.push(Ci(k,N,re))});const C=I.bind(null,N,re);return ae.push(C),J(ae).then(()=>{ae=[];for(const v of s.list())ae.push(Ci(v,N,re));return ae.push(C),J(ae)}).then(()=>{ae=_l(Ne,"beforeRouteUpdate",N,re);for(const v of Ne)v.updateGuards.forEach(k=>{ae.push(Ci(k,N,re))});return ae.push(C),J(ae)}).then(()=>{ae=[];for(const v of ze)if(v.beforeEnter)if(Ln(v.beforeEnter))for(const k of v.beforeEnter)ae.push(Ci(k,N,re));else ae.push(Ci(v.beforeEnter,N,re));return ae.push(C),J(ae)}).then(()=>(N.matched.forEach(v=>v.enterCallbacks={}),ae=_l(ze,"beforeRouteEnter",N,re,A),ae.push(C),J(ae))).then(()=>{ae=[];for(const v of o.list())ae.push(Ci(v,N,re));return ae.push(C),J(ae)}).catch(v=>Xn(v,8)?v:Promise.reject(v))}function w(N,re,ae){a.list().forEach(le=>A(()=>le(N,re,ae)))}function U(N,re,ae,le,Ne){const ze=S(N,re);if(ze)return ze;const C=re===mi,v=Fr?history.state:{};ae&&(le||C?r.replace(N.fullPath,gt({scroll:C&&v&&v.scroll},Ne)):r.push(N.fullPath,Ne)),l.value=N,ue(N,re,ae,C),K()}let D;function G(){D||(D=r.listen((N,re,ae)=>{if(!ge.listening)return;const le=p(N),Ne=P(le);if(Ne){R(gt(Ne,{replace:!0}),le).catch(Ds);return}c=le;const ze=l.value;Fr&&O_(rf(ze.fullPath,ae.delta),N_()),y(le,ze).catch(C=>Xn(C,12)?C:Xn(C,2)?(R(C.to,le).then(v=>{Xn(v,20)&&!ae.delta&&ae.type===Ws.pop&&r.go(-1,!1)}).catch(Ds),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),O(C,le,ze))).then(C=>{C=C||U(le,ze,!1),C&&(ae.delta&&!Xn(C,8)?r.go(-ae.delta,!1):ae.type===Ws.pop&&Xn(C,20)&&r.go(-1,!1)),w(le,ze,C)}).catch(Ds)}))}let W=gs(),$=gs(),q;function O(N,re,ae){K(N);const le=$.list();return le.length?le.forEach(Ne=>Ne(N,re,ae)):console.error(N),Promise.reject(N)}function se(){return q&&l.value!==mi?Promise.resolve():new Promise((N,re)=>{W.add([N,re])})}function K(N){return q||(q=!N,G(),W.list().forEach(([re,ae])=>N?ae(N):re()),W.reset()),N}function ue(N,re,ae,le){const{scrollBehavior:Ne}=n;if(!Fr||!Ne)return Promise.resolve();const ze=!ae&&B_(rf(N.fullPath,0))||(le||!ae)&&history.state&&history.state.scroll||null;return Au().then(()=>Ne(N,re,ze)).then(C=>C&&F_(C)).catch(C=>O(C,N,re))}const Ee=N=>r.go(N);let Oe;const ie=new Set,ge={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:M,replace:L,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:se,install(N){const re=this;N.component("RouterLink",o1),N.component("RouterView",u1),N.config.globalProperties.$router=re,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>st(l)}),Fr&&!Oe&&l.value===mi&&(Oe=!0,M(r.location).catch(Ne=>{}));const ae={};for(const Ne in mi)Object.defineProperty(ae,Ne,{get:()=>l.value[Ne],enumerable:!0});N.provide(Ou,re),N.provide(n2,td(ae)),N.provide(gc,l);const le=N.unmount;ie.add(N),N.unmount=function(){ie.delete(N),ie.size<1&&(c=mi,D&&D(),D=null,l.value=mi,Oe=!1,q=!1),le()}}};function J(N){return N.reduce((re,ae)=>re.then(()=>A(ae)),Promise.resolve())}return ge}function h1(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Qr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Qr(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bu="178",d1=0,_f=1,p1=2,i2=1,m1=2,jn=3,Ui=0,Kt=1,ei=2,Pi=0,Xr=1,_c=2,vf=3,xf=4,g1=5,or=100,_1=101,v1=102,x1=103,S1=104,M1=200,y1=201,E1=202,C1=203,vc=204,xc=205,T1=206,A1=207,b1=208,w1=209,R1=210,P1=211,L1=212,I1=213,D1=214,Sc=0,Mc=1,yc=2,ts=3,Ec=4,Cc=5,Tc=6,Ac=7,r2=0,U1=1,N1=2,Li=0,F1=1,O1=2,B1=3,H1=4,z1=5,V1=6,k1=7,s2=300,ns=301,is=302,bc=303,wc=304,Ga=306,Rc=1e3,lr=1001,Pc=1002,Rn=1003,G1=1004,bo=1005,On=1006,vl=1007,cr=1008,ci=1009,o2=1010,a2=1011,Xs=1012,Hu=1013,pr=1014,ti=1015,ro=1016,zu=1017,Vu=1018,$s=1020,l2=35902,c2=1021,u2=1022,Tn=1023,qs=1026,Ys=1027,f2=1028,ku=1029,h2=1030,Gu=1031,Wu=1033,sa=33776,oa=33777,aa=33778,la=33779,Lc=35840,Ic=35841,Dc=35842,Uc=35843,Nc=36196,Fc=37492,Oc=37496,Bc=37808,Hc=37809,zc=37810,Vc=37811,kc=37812,Gc=37813,Wc=37814,Xc=37815,$c=37816,qc=37817,Yc=37818,Zc=37819,Kc=37820,jc=37821,ca=36492,Jc=36494,Qc=36495,d2=36283,eu=36284,tu=36285,nu=36286,W1=3200,X1=3201,p2=0,$1=1,Ti="",fn="srgb",rs="srgb-linear",Ma="linear",ct="srgb",yr=7680,Sf=519,q1=512,Y1=513,Z1=514,m2=515,K1=516,j1=517,J1=518,Q1=519,Mf=35044,yf="300 es",ni=2e3,ya=2001;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xl=Math.PI/180,iu=180/Math.PI;function so(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function ev(n,e){return(n%e+e)%e}function Sl(n,e,t){return(1-t)*n+t*e}function _s(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),P=Math.atan2(L,p*E);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const M=a*E;if(l=l*m+h*M,c=c*m+d*M,u=u*m+g*M,f=f*m+_*M,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ef.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ef.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ml.copy(this).projectOnVector(e),this.sub(Ml)}reflect(e){return this.sub(Ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ml=new H,Ef=new oo;class Ye{constructor(e,t,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],E=r[1],S=r[4],M=r[7],L=r[2],P=r[5],R=r[8];return s[0]=o*_+a*E+l*L,s[3]=o*m+a*S+l*P,s[6]=o*p+a*M+l*R,s[1]=c*_+u*E+f*L,s[4]=c*m+u*S+f*P,s[7]=c*p+u*M+f*R,s[2]=h*_+d*E+g*L,s[5]=h*m+d*S+g*P,s[8]=h*p+d*M+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yl.makeScale(e,t)),this}rotate(e){return this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yl=new Ye;function g2(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tv(){const n=Ea("canvas");return n.style.display="block",n}const Cf={};function $r(n){n in Cf||(Cf[n]=!0,console.warn(n))}function nv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function iv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tf=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Af=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sv(){const n={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?Ma:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[rs]:{primaries:e,whitePoint:i,transfer:Ma,toXYZ:Tf,fromXYZ:Af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Tf,fromXYZ:Af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const rt=sv();function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Er;class ov{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Er===void 0&&(Er=Ea("canvas")),Er.width=e.width,Er.height=e.height;const r=Er.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Er}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=oi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oi(t[i]/255)*255):t[i]=oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let av=0;class Xu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(El(r[o].image)):s.push(El(r[o]))}else s=El(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function El(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ov.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lv=0;const Cl=new H;class Vt extends cs{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=lr,r=lr,s=On,o=cr,a=Tn,l=ci,c=Vt.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=so(),this.name="",this.source=new Xu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rc:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rc:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=s2;Vt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(d+1)/2,L=(p+1)/2,P=(u+h)/4,R=(f+_)/4,I=(g+m)/4;return S>M&&S>L?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=P/i,s=R/i):M>L?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=P/r,s=I/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=R/s,r=I/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(h-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cv extends cs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Vt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends cv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _2 extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uv extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ao{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),Ro.subVectors(this.max,vs),Cr.subVectors(e.a,vs),Tr.subVectors(e.b,vs),Ar.subVectors(e.c,vs),gi.subVectors(Tr,Cr),_i.subVectors(Ar,Tr),Zi.subVectors(Cr,Ar);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Zi.z,Zi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Zi.z,0,-Zi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Zi.y,Zi.x,0];return!Tl(t,Cr,Tr,Ar,Ro)||(t=[1,0,0,0,1,0,0,0,1],!Tl(t,Cr,Tr,Ar,Ro))?!1:(Po.crossVectors(gi,_i),t=[Po.x,Po.y,Po.z],Tl(t,Cr,Tr,Ar,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new H,new H,new H,new H,new H,new H,new H,new H],vn=new H,wo=new ao,Cr=new H,Tr=new H,Ar=new H,gi=new H,_i=new H,Zi=new H,vs=new H,Ro=new H,Po=new H,Ki=new H;function Tl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ki.fromArray(n,s);const a=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fv=new ao,xs=new H,Al=new H;class lo{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(xs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(Al)),this.expandByPoint(xs.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qn=new H,bl=new H,Lo=new H,vi=new H,wl=new H,Io=new H,Rl=new H;class $u{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bl.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(bl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=vi.dot(this.direction),l=-vi.dot(Lo),c=vi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(bl).addScaledVector(Lo,h),d}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){wl.subVectors(t,e),Io.subVectors(i,e),Rl.crossVectors(wl,Io);let o=this.direction.dot(Rl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(Io.crossVectors(vi,Io));if(l<0)return null;const c=a*this.direction.dot(wl.cross(vi));if(c<0||l+c>o)return null;const u=-a*vi.dot(Rl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),o=1/br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hv,e,dv)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),xi.crossVectors(i,tn),xi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),xi.crossVectors(i,tn)),xi.normalize(),Do.crossVectors(tn,xi),r[0]=xi.x,r[4]=Do.x,r[8]=tn.x,r[1]=xi.y,r[5]=Do.y,r[9]=tn.y,r[2]=xi.z,r[6]=Do.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],S=i[7],M=i[11],L=i[15],P=r[0],R=r[4],I=r[8],A=r[12],y=r[1],w=r[5],U=r[9],D=r[13],G=r[2],W=r[6],$=r[10],q=r[14],O=r[3],se=r[7],K=r[11],ue=r[15];return s[0]=o*P+a*y+l*G+c*O,s[4]=o*R+a*w+l*W+c*se,s[8]=o*I+a*U+l*$+c*K,s[12]=o*A+a*D+l*q+c*ue,s[1]=u*P+f*y+h*G+d*O,s[5]=u*R+f*w+h*W+d*se,s[9]=u*I+f*U+h*$+d*K,s[13]=u*A+f*D+h*q+d*ue,s[2]=g*P+_*y+m*G+p*O,s[6]=g*R+_*w+m*W+p*se,s[10]=g*I+_*U+m*$+p*K,s[14]=g*A+_*D+m*q+p*ue,s[3]=E*P+S*y+M*G+L*O,s[7]=E*R+S*w+M*W+L*se,s[11]=E*I+S*U+M*$+L*K,s[15]=E*A+S*D+M*q+L*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,S=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,M=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,L=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,P=t*E+i*S+r*M+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=E*R,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*R,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*R,e[4]=S*R,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*R,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*R,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*R,e[8]=M*R,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*p-t*f*p)*R,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*R,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*R,e[12]=L*R,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*R,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*R,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,E=l*c,S=l*u,M=l*f,L=i.x,P=i.y,R=i.z;return r[0]=(1-(_+p))*L,r[1]=(d+M)*L,r[2]=(g-S)*L,r[3]=0,r[4]=(d-M)*P,r[5]=(1-(h+p))*P,r[6]=(m+E)*P,r[7]=0,r[8]=(g+S)*R,r[9]=(m-E)*R,r[10]=(1-(h+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=br.set(r[0],r[1],r[2]).length();const o=br.set(r[4],r[5],r[6]).length(),a=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const c=1/s,u=1/o,f=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,t.setFromRotationMatrix(xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ni){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===ni)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ya)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ni){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,_;if(a===ni)g=(o+s)*f,_=-2*f;else if(a===ya)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const br=new H,xn=new Mt,hv=new H(0,0,0),dv=new H(1,1,1),xi=new H,Do=new H,tn=new H,bf=new Mt,wf=new oo;class zn{constructor(e=0,t=0,i=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wf.setFromEuler(this),this.setFromQuaternion(wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class v2{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pv=0;const Rf=new H,wr=new oo,Yn=new Mt,Uo=new H,Ss=new H,mv=new H,gv=new oo,Pf=new H(1,0,0),Lf=new H(0,1,0),If=new H(0,0,1),Df={type:"added"},_v={type:"removed"},Rr={type:"childadded",child:null},Pl={type:"childremoved",child:null};class kt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new H,t=new zn,i=new oo,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ye}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Pf,e)}rotateY(e){return this.rotateOnAxis(Lf,e)}rotateZ(e){return this.rotateOnAxis(If,e)}translateOnAxis(e,t){return Rf.copy(e).applyQuaternion(this.quaternion),this.position.add(Rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pf,e)}translateY(e){return this.translateOnAxis(Lf,e)}translateZ(e){return this.translateOnAxis(If,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uo.copy(e):Uo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ss,Uo,this.up):Yn.lookAt(Uo,Ss,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(Yn),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Df),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_v),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Df),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,mv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,gv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new H(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new H,Zn=new H,Ll=new H,Kn=new H,Pr=new H,Lr=new H,Uf=new H,Il=new H,Dl=new H,Ul=new H,Nl=new Ct,Fl=new Ct,Ol=new Ct;class En{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Sn.subVectors(e,t),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Sn.subVectors(r,t),Zn.subVectors(i,t),Ll.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot(Zn),l=Sn.dot(Ll),c=Zn.dot(Zn),u=Zn.dot(Ll),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Nl.setScalar(0),Fl.setScalar(0),Ol.setScalar(0),Nl.fromBufferAttribute(e,t),Fl.fromBufferAttribute(e,i),Ol.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Nl,s.x),o.addScaledVector(Fl,s.y),o.addScaledVector(Ol,s.z),o}static isFrontFacing(e,t,i,r){return Sn.subVectors(i,t),Zn.subVectors(e,t),Sn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Sn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return En.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Pr.subVectors(r,i),Lr.subVectors(s,i),Il.subVectors(e,i);const l=Pr.dot(Il),c=Lr.dot(Il);if(l<=0&&c<=0)return t.copy(i);Dl.subVectors(e,r);const u=Pr.dot(Dl),f=Lr.dot(Dl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Pr,o);Ul.subVectors(e,s);const d=Pr.dot(Ul),g=Lr.dot(Ul);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Lr,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Uf.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Uf,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Pr,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},No={h:0,s:0,l:0};function Bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=ev(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Bl(o,s,e+1/3),this.g=Bl(o,s,e),this.b=Bl(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=x2[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return rt.workingToColorSpace(Dt.copy(this),e),Math.round(Je(Dt.r*255,0,255))*65536+Math.round(Je(Dt.g*255,0,255))*256+Math.round(Je(Dt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=fn){rt.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(No);const i=Sl(Si.h,No.h,t),r=Sl(Si.s,No.s,t),s=Sl(Si.l,No.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new et;et.NAMES=x2;let vv=0;class xr extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Xr,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=xc,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vc&&(i.blendSrc=this.blendSrc),this.blendDst!==xc&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qu extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=r2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new H,Fo=new Ve;let xv=0;class Hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mf,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_s(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mf&&(e.usage=this.usage),e}}class S2 extends Hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class M2 extends Hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Lt extends Hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Sv=0;const un=new Mt,Hl=new kt,Ir=new H,nn=new ao,Ms=new ao,Pt=new H;class an extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g2(e)?M2:S2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(nn.min,Ms.min),nn.expandByPoint(Pt),Pt.addVectors(nn.max,Ms.max),nn.expandByPoint(Pt)):(nn.expandByPoint(Ms.min),nn.expandByPoint(Ms.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(Ir.fromBufferAttribute(e,c),Pt.add(Ir)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new H,l[I]=new H;const c=new H,u=new H,f=new H,h=new Ve,d=new Ve,g=new Ve,_=new H,m=new H;function p(I,A,y){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,I),d.fromBufferAttribute(s,A),g.fromBufferAttribute(s,y),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(w),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(w),a[I].add(_),a[A].add(_),a[y].add(_),l[I].add(m),l[A].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,A=E.length;I<A;++I){const y=E[I],w=y.start,U=y.count;for(let D=w,G=w+U;D<G;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const S=new H,M=new H,L=new H,P=new H;function R(I){L.fromBufferAttribute(r,I),P.copy(L);const A=a[I];S.copy(A),S.sub(L.multiplyScalar(L.dot(A))).normalize(),M.crossVectors(P,A);const w=M.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,w)}for(let I=0,A=E.length;I<A;++I){const y=E[I],w=y.start,U=y.count;for(let D=w,G=w+U;D<G;D+=3)R(e.getX(D+0)),R(e.getX(D+1)),R(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Hn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nf=new Mt,ji=new $u,Oo=new lo,Ff=new H,Bo=new H,Ho=new H,zo=new H,zl=new H,Vo=new H,Of=new H,ko=new H;class An extends kt{constructor(e=new an,t=new qu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Vo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(zl.fromBufferAttribute(f,e),o?Vo.addScaledVector(zl,u):Vo.addScaledVector(zl.sub(t),u))}t.add(Vo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),ji.copy(e.ray).recast(e.near),!(Oo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Oo,Ff)===null||ji.origin.distanceToSquared(Ff)>(e.far-e.near)**2))&&(Nf.copy(s).invert(),ji.copy(e.ray).applyMatrix4(Nf),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,L=S;M<L;M+=3){const P=a.getX(M),R=a.getX(M+1),I=a.getX(M+2);r=Go(this,p,e,i,c,u,f,P,R,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);r=Go(this,o,e,i,c,u,f,E,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,L=S;M<L;M+=3){const P=M,R=M+1,I=M+2;r=Go(this,p,e,i,c,u,f,P,R,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,S=m+1,M=m+2;r=Go(this,o,e,i,c,u,f,E,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Mv(n,e,t,i,r,s,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ui,a),l===null)return null;ko.copy(a),ko.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:n}}function Go(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Bo),n.getVertexPosition(l,Ho),n.getVertexPosition(c,zo);const u=Mv(n,e,t,i,Bo,Ho,zo,Of);if(u){const f=new H;En.getBarycoord(Of,Bo,Ho,zo,f),r&&(u.uv=En.getInterpolatedAttribute(r,a,l,c,f,new Ve)),s&&(u.uv1=En.getInterpolatedAttribute(s,a,l,c,f,new Ve)),o&&(u.normal=En.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};En.getNormal(Bo,Ho,zo,h.normal),u.face=h,u.barycoord=f}return u}class co extends an{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function g(_,m,p,E,S,M,L,P,R,I,A){const y=M/R,w=L/I,U=M/2,D=L/2,G=P/2,W=R+1,$=I+1;let q=0,O=0;const se=new H;for(let K=0;K<$;K++){const ue=K*w-D;for(let Ee=0;Ee<W;Ee++){const Oe=Ee*y-U;se[_]=Oe*E,se[m]=ue*S,se[p]=G,c.push(se.x,se.y,se.z),se[_]=0,se[m]=0,se[p]=P>0?1:-1,u.push(se.x,se.y,se.z),f.push(Ee/R),f.push(1-K/I),q+=1}}for(let K=0;K<I;K++)for(let ue=0;ue<R;ue++){const Ee=h+ue+W*K,Oe=h+ue+W*(K+1),ie=h+(ue+1)+W*(K+1),ge=h+(ue+1)+W*K;l.push(Ee,Oe,ge),l.push(Oe,ie,ge),O+=6}a.addGroup(d,O,A),d+=O,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=ss(n[t]);for(const r in i)e[r]=i[r]}return e}function yv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function y2(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Ev={clone:ss,merge:Ht};var Cv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cv,this.fragmentShader=Tv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=yv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class E2 extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new H,Bf=new Ve,Hf=new Ve;class rn extends E2{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=iu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return iu*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Bf,Hf),t.subVectors(Hf,Bf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=-90,Ur=1;class Av extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Dr,Ur,e,t);r.layers=this.layers,this.add(r);const s=new rn(Dr,Ur,e,t);s.layers=this.layers,this.add(s);const o=new rn(Dr,Ur,e,t);o.layers=this.layers,this.add(o);const a=new rn(Dr,Ur,e,t);a.layers=this.layers,this.add(a);const l=new rn(Dr,Ur,e,t);l.layers=this.layers,this.add(l);const c=new rn(Dr,Ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class C2 extends Vt{constructor(e=[],t=ns,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bv extends mr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new C2(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new co(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Pi});s.uniforms.tEquirect.value=t;const o=new An(r,s),a=t.minFilter;return t.minFilter===cr&&(t.minFilter=On),new Av(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Wo extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wv={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Wo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class T2 extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kl=new H,Rv=new H,Pv=new Ye;class nr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=kl.subVectors(i,t).cross(Rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(kl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Pv.getNormalMatrix(e),r=this.coplanarPoint(kl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new lo,Lv=new Ve(.5,.5),Xo=new H;class A2{constructor(e=new nr,t=new nr,i=new nr,r=new nr,s=new nr,o=new nr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],E=r[13],S=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-d,M-p).normalize(),i[1].setComponents(l+s,h+c,m+d,M+p).normalize(),i[2].setComponents(l+o,h+u,m+g,M+E).normalize(),i[3].setComponents(l-o,h-u,m-g,M-E).normalize(),i[4].setComponents(l-a,h-f,m-_,M-S).normalize(),t===ni)i[5].setComponents(l+a,h+f,m+_,M+S).normalize();else if(t===ya)i[5].setComponents(a,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);const t=Lv.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xo.x=r.normal.x>0?e.max.x:e.min.x,Xo.y=r.normal.y>0?e.max.y:e.min.y,Xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class b2 extends xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new H,Ta=new H,zf=new Mt,ys=new $u,$o=new lo,Gl=new H,Vf=new H;class Iv extends kt{constructor(e=new an,t=new b2){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ca.fromBufferAttribute(t,r-1),Ta.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ca.distanceTo(Ta);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(r),$o.radius+=s,e.ray.intersectsSphere($o)===!1)return;zf.copy(r).invert(),ys.copy(e.ray).applyMatrix4(zf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),E=u.getX(_+1),S=qo(this,e,ys,l,p,E,_);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=qo(this,e,ys,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=qo(this,e,ys,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=qo(this,e,ys,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qo(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Ca.fromBufferAttribute(a,r),Ta.fromBufferAttribute(a,s),t.distanceSqToSegment(Ca,Ta,Gl,Vf)>i)return;Gl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Gl);if(!(c<e.near||c>e.far))return{distance:c,point:Vf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const kf=new H,Gf=new H;class Dv extends Iv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)kf.fromBufferAttribute(t,r),Gf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+kf.distanceTo(Gf);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class w2 extends xr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wf=new Mt,ru=new $u,Yo=new lo,Zo=new H;class Uv extends kt{constructor(e=new an,t=new w2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(r),Yo.radius+=s,e.ray.intersectsSphere(Yo)===!1)return;Wf.copy(r).invert(),ru.copy(e.ray).applyMatrix4(Wf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);Zo.fromBufferAttribute(f,m),Xf(Zo,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)Zo.fromBufferAttribute(f,g),Xf(Zo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xf(n,e,t,i,r,s,o){const a=ru.distanceSqToPoint(n);if(a<t){const l=new H;ru.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Nv extends Vt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class R2 extends Vt{constructor(e,t,i=pr,r,s,o,a=Rn,l=Rn,c,u=qs,f=1){if(u!==qs&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ve:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new H,r=[],s=[],o=[],a=new H,l=new Mt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Je(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Je(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class P2 extends di{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ve){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fv extends P2{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yu(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Ko=new H,Wl=new Yu,Xl=new Yu,$l=new Yu;class L2 extends di{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new H){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ko.subVectors(r[0],r[1]).add(r[0]),c=Ko);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ko.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ko),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Wl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,_,m),Xl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,_,m),$l.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Wl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Xl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),$l.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Wl.calc(l),Xl.calc(l),$l.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $f(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Ov(n,e){const t=1-n;return t*t*e}function Bv(n,e){return 2*(1-n)*n*e}function Hv(n,e){return n*n*e}function Us(n,e,t,i){return Ov(n,e)+Bv(n,t)+Hv(n,i)}function zv(n,e){const t=1-n;return t*t*t*e}function Vv(n,e){const t=1-n;return 3*t*t*n*e}function kv(n,e){return 3*(1-n)*n*n*e}function Gv(n,e){return n*n*n*e}function Ns(n,e,t,i,r){return zv(n,e)+Vv(n,t)+kv(n,i)+Gv(n,r)}class Wv extends di{constructor(e=new Ve,t=new Ve,i=new Ve,r=new Ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ve){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ns(e,r.x,s.x,o.x,a.x),Ns(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xv extends di{constructor(e=new H,t=new H,i=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new H){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ns(e,r.x,s.x,o.x,a.x),Ns(e,r.y,s.y,o.y,a.y),Ns(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $v extends di{constructor(e=new Ve,t=new Ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ve){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qv extends di{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yv extends di{constructor(e=new Ve,t=new Ve,i=new Ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ve){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Us(e,r.x,s.x,o.x),Us(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I2 extends di{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Us(e,r.x,s.x,o.x),Us(e,r.y,s.y,o.y),Us(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zv extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ve){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set($f(a,l.x,c.x,u.x,f.x),$f(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ve().fromArray(r))}return this}}var Kv=Object.freeze({__proto__:null,ArcCurve:Fv,CatmullRomCurve3:L2,CubicBezierCurve:Wv,CubicBezierCurve3:Xv,EllipseCurve:P2,LineCurve:$v,LineCurve3:qv,QuadraticBezierCurve:Yv,QuadraticBezierCurve3:I2,SplineCurve:Zv});class Wa extends an{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*h-o;for(let S=0;S<c;S++){const M=S*f-s;g.push(M,-E,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const S=E+c*p,M=E+c*(p+1),L=E+1+c*(p+1),P=E+1+c*p;d.push(S,M,P),d.push(M,L,P)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zu extends an{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new H,h=new H,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const E=[],S=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){const P=L/t;f.x=-e*Math.cos(r+P*s)*Math.sin(o+S*a),f.y=e*Math.cos(o+S*a),f.z=e*Math.sin(r+P*s)*Math.sin(o+S*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(P+M,1-S),E.push(c++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const S=u[p][E+1],M=u[p][E],L=u[p+1][E],P=u[p+1][E+1];(p!==0||o>0)&&d.push(S,M,P),(p!==i-1||l<Math.PI)&&d.push(M,L,P)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ku extends an{constructor(e=new I2(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new H,l=new H,c=new Ve;let u=new H;const f=[],h=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2));function _(){for(let S=0;S<t;S++)m(S);m(s===!1?t:0),E(),p()}function m(S){u=e.getPointAt(S/t,u);const M=o.normals[S],L=o.binormals[S];for(let P=0;P<=r;P++){const R=P/r*Math.PI*2,I=Math.sin(R),A=-Math.cos(R);l.x=A*M.x+I*L.x,l.y=A*M.y+I*L.y,l.z=A*M.z+I*L.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=t;S++)for(let M=1;M<=r;M++){const L=(r+1)*(S-1)+(M-1),P=(r+1)*S+(M-1),R=(r+1)*S+M,I=(r+1)*(S-1)+M;g.push(L,P,I),g.push(P,R,I)}}function E(){for(let S=0;S<=t;S++)for(let M=0;M<=r;M++)c.x=S/t,c.y=M/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ku(new Kv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class jv extends an{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new H,s=new H;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],h=f.start,d=f.count;for(let g=h,_=h+d;g<_;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),E=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,E),qf(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,f),qf(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Lt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function qf(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class Jv extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=p2,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qv extends Jv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class e4 extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t4 extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class n4 extends E2{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class i4 extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Yf(n,e,t,i){const r=r4(i);switch(t){case c2:return n*e;case f2:return n*e/r.components*r.byteLength;case ku:return n*e/r.components*r.byteLength;case h2:return n*e*2/r.components*r.byteLength;case Gu:return n*e*2/r.components*r.byteLength;case u2:return n*e*3/r.components*r.byteLength;case Tn:return n*e*4/r.components*r.byteLength;case Wu:return n*e*4/r.components*r.byteLength;case sa:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case aa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:case Uc:return Math.max(n,16)*Math.max(e,8)/4;case Lc:case Dc:return Math.max(n,8)*Math.max(e,8)/2;case Nc:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ca:case Jc:case Qc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case d2:case eu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case tu:case nu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function r4(n){switch(n){case ci:case o2:return{byteLength:1,components:1};case Xs:case a2:case ro:return{byteLength:2,components:1};case zu:case Vu:return{byteLength:2,components:4};case pr:case Hu:case ti:return{byteLength:4,components:1};case l2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function D2(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function s4(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var o4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a4=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,l4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h4=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p4=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,m4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v4=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x4=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,S4=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M4=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T4=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w4=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,R4=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,P4=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,L4=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,I4=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D4=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U4=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N4=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F4="gl_FragColor = linearToOutputTexel( gl_FragColor );",O4=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,H4=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z4=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V4=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,G4=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W4=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X4=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$4=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q4=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Y4=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z4=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K4=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j4=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,J4=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Q4=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ex=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ix=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ox=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_x=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ux=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e5=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o5=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l5=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h5=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d5=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,p5=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,m5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_5=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v5=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S5=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M5=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y5=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E5=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C5=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T5=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A5=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b5=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w5=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L5=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I5=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D5=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N5=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F5=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,O5=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:o4,alphahash_pars_fragment:a4,alphamap_fragment:l4,alphamap_pars_fragment:c4,alphatest_fragment:u4,alphatest_pars_fragment:f4,aomap_fragment:h4,aomap_pars_fragment:d4,batching_pars_vertex:p4,batching_vertex:m4,begin_vertex:g4,beginnormal_vertex:_4,bsdfs:v4,iridescence_fragment:x4,bumpmap_pars_fragment:S4,clipping_planes_fragment:M4,clipping_planes_pars_fragment:y4,clipping_planes_pars_vertex:E4,clipping_planes_vertex:C4,color_fragment:T4,color_pars_fragment:A4,color_pars_vertex:b4,color_vertex:w4,common:R4,cube_uv_reflection_fragment:P4,defaultnormal_vertex:L4,displacementmap_pars_vertex:I4,displacementmap_vertex:D4,emissivemap_fragment:U4,emissivemap_pars_fragment:N4,colorspace_fragment:F4,colorspace_pars_fragment:O4,envmap_fragment:B4,envmap_common_pars_fragment:H4,envmap_pars_fragment:z4,envmap_pars_vertex:V4,envmap_physical_pars_fragment:J4,envmap_vertex:k4,fog_vertex:G4,fog_pars_vertex:W4,fog_fragment:X4,fog_pars_fragment:$4,gradientmap_pars_fragment:q4,lightmap_pars_fragment:Y4,lights_lambert_fragment:Z4,lights_lambert_pars_fragment:K4,lights_pars_begin:j4,lights_toon_fragment:Q4,lights_toon_pars_fragment:ex,lights_phong_fragment:tx,lights_phong_pars_fragment:nx,lights_physical_fragment:ix,lights_physical_pars_fragment:rx,lights_fragment_begin:sx,lights_fragment_maps:ox,lights_fragment_end:ax,logdepthbuf_fragment:lx,logdepthbuf_pars_fragment:cx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:fx,map_fragment:hx,map_pars_fragment:dx,map_particle_fragment:px,map_particle_pars_fragment:mx,metalnessmap_fragment:gx,metalnessmap_pars_fragment:_x,morphinstance_vertex:vx,morphcolor_vertex:xx,morphnormal_vertex:Sx,morphtarget_pars_vertex:Mx,morphtarget_vertex:yx,normal_fragment_begin:Ex,normal_fragment_maps:Cx,normal_pars_fragment:Tx,normal_pars_vertex:Ax,normal_vertex:bx,normalmap_pars_fragment:wx,clearcoat_normal_fragment_begin:Rx,clearcoat_normal_fragment_maps:Px,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:Ix,opaque_fragment:Dx,packing:Ux,premultiplied_alpha_fragment:Nx,project_vertex:Fx,dithering_fragment:Ox,dithering_pars_fragment:Bx,roughnessmap_fragment:Hx,roughnessmap_pars_fragment:zx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:kx,shadowmap_vertex:Gx,shadowmask_pars_fragment:Wx,skinbase_vertex:Xx,skinning_pars_vertex:$x,skinning_vertex:qx,skinnormal_vertex:Yx,specularmap_fragment:Zx,specularmap_pars_fragment:Kx,tonemapping_fragment:jx,tonemapping_pars_fragment:Jx,transmission_fragment:Qx,transmission_pars_fragment:e5,uv_pars_fragment:t5,uv_pars_vertex:n5,uv_vertex:i5,worldpos_vertex:r5,background_vert:s5,background_frag:o5,backgroundCube_vert:a5,backgroundCube_frag:l5,cube_vert:c5,cube_frag:u5,depth_vert:f5,depth_frag:h5,distanceRGBA_vert:d5,distanceRGBA_frag:p5,equirect_vert:m5,equirect_frag:g5,linedashed_vert:_5,linedashed_frag:v5,meshbasic_vert:x5,meshbasic_frag:S5,meshlambert_vert:M5,meshlambert_frag:y5,meshmatcap_vert:E5,meshmatcap_frag:C5,meshnormal_vert:T5,meshnormal_frag:A5,meshphong_vert:b5,meshphong_frag:w5,meshphysical_vert:R5,meshphysical_frag:P5,meshtoon_vert:L5,meshtoon_frag:I5,points_vert:D5,points_frag:U5,shadow_vert:N5,shadow_frag:F5,sprite_vert:O5,sprite_frag:B5},Ce={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Nn={basic:{uniforms:Ht([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ht([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new et(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ht([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ht([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ht([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new et(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ht([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ht([Ce.points,Ce.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ht([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ht([Ce.common,Ce.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ht([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ht([Ce.sprite,Ce.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Ht([Ce.common,Ce.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Ht([Ce.lights,Ce.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Nn.physical={uniforms:Ht([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const jo={r:0,b:0,g:0},Qi=new zn,H5=new Mt;function z5(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function _(S){let M=!1;const L=g(S);L===null?p(a,l):L&&L.isColor&&(p(L,1),M=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,M){const L=g(M);L&&(L.isCubeTexture||L.mapping===Ga)?(u===void 0&&(u=new An(new co(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:ss(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qi.copy(M.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(H5.makeRotationFromEuler(Qi)),u.material.toneMapped=rt.getTransfer(L.colorSpace)!==ct,(f!==L||h!==L.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=L,h=L.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new An(new Wa(2,2),new Ni({name:"BackgroundMaterial",uniforms:ss(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=rt.getTransfer(L.colorSpace)!==ct,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||h!==L.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=L,h=L.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(jo,y2(n)),i.buffers.color.setClear(jo.r,jo.g,jo.b,M,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m,dispose:E}}function V5(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,w,U,D,G){let W=!1;const $=f(D,U,w);s!==$&&(s=$,c(s.object)),W=d(y,D,U,G),W&&g(y,D,U,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(y,w,U,D),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,w,U){const D=U.wireframe===!0;let G=i[y.id];G===void 0&&(G={},i[y.id]=G);let W=G[w.id];W===void 0&&(W={},G[w.id]=W);let $=W[D];return $===void 0&&($=h(l()),W[D]=$),$}function h(y){const w=[],U=[],D=[];for(let G=0;G<t;G++)w[G]=0,U[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:U,attributeDivisors:D,object:y,attributes:{},index:null}}function d(y,w,U,D){const G=s.attributes,W=w.attributes;let $=0;const q=U.getAttributes();for(const O in q)if(q[O].location>=0){const K=G[O];let ue=W[O];if(ue===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),K===void 0||K.attribute!==ue||ue&&K.data!==ue.data)return!0;$++}return s.attributesNum!==$||s.index!==D}function g(y,w,U,D){const G={},W=w.attributes;let $=0;const q=U.getAttributes();for(const O in q)if(q[O].location>=0){let K=W[O];K===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const ue={};ue.attribute=K,K&&K.data&&(ue.data=K.data),G[O]=ue,$++}s.attributes=G,s.attributesNum=$,s.index=D}function _(){const y=s.newAttributes;for(let w=0,U=y.length;w<U;w++)y[w]=0}function m(y){p(y,0)}function p(y,w){const U=s.newAttributes,D=s.enabledAttributes,G=s.attributeDivisors;U[y]=1,D[y]===0&&(n.enableVertexAttribArray(y),D[y]=1),G[y]!==w&&(n.vertexAttribDivisor(y,w),G[y]=w)}function E(){const y=s.newAttributes,w=s.enabledAttributes;for(let U=0,D=w.length;U<D;U++)w[U]!==y[U]&&(n.disableVertexAttribArray(U),w[U]=0)}function S(y,w,U,D,G,W,$){$===!0?n.vertexAttribIPointer(y,w,U,G,W):n.vertexAttribPointer(y,w,U,D,G,W)}function M(y,w,U,D){_();const G=D.attributes,W=U.getAttributes(),$=w.defaultAttributeValues;for(const q in W){const O=W[q];if(O.location>=0){let se=G[q];if(se===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const K=se.normalized,ue=se.itemSize,Ee=e.get(se);if(Ee===void 0)continue;const Oe=Ee.buffer,ie=Ee.type,ge=Ee.bytesPerElement,J=ie===n.INT||ie===n.UNSIGNED_INT||se.gpuType===Hu;if(se.isInterleavedBufferAttribute){const N=se.data,re=N.stride,ae=se.offset;if(N.isInstancedInterleavedBuffer){for(let le=0;le<O.locationSize;le++)p(O.location+le,N.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let le=0;le<O.locationSize;le++)m(O.location+le);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let le=0;le<O.locationSize;le++)S(O.location+le,ue/O.locationSize,ie,K,re*ge,(ae+ue/O.locationSize*le)*ge,J)}else{if(se.isInstancedBufferAttribute){for(let N=0;N<O.locationSize;N++)p(O.location+N,se.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let N=0;N<O.locationSize;N++)m(O.location+N);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let N=0;N<O.locationSize;N++)S(O.location+N,ue/O.locationSize,ie,K,ue*ge,ue/O.locationSize*N*ge,J)}}else if($!==void 0){const K=$[q];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(O.location,K);break;case 3:n.vertexAttrib3fv(O.location,K);break;case 4:n.vertexAttrib4fv(O.location,K);break;default:n.vertexAttrib1fv(O.location,K)}}}}E()}function L(){I();for(const y in i){const w=i[y];for(const U in w){const D=w[U];for(const G in D)u(D[G].object),delete D[G];delete w[U]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const U in w){const D=w[U];for(const G in D)u(D[G].object),delete D[G];delete w[U]}delete i[y.id]}function R(y){for(const w in i){const U=i[w];if(U[y.id]===void 0)continue;const D=U[y.id];for(const G in D)u(D[G].object),delete D[G];delete U[y.id]}}function I(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function k5(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G5(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Tn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ci&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ti&&!I)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:L,maxSamples:P}}function W5(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new nr,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,S=E*4;let M=p.clippingState||null;l.value=M,M=u(g,h,S,d);for(let L=0;L!==S;++L)M[L]=t[L];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=d;S!==_;++S,M+=4)o.copy(f[S]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function X5(n){let e=new WeakMap;function t(o,a){return a===bc?o.mapping=ns:a===wc&&(o.mapping=is),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bc||a===wc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Hr=4,Zf=[.125,.215,.35,.446,.526,.582],ar=20,ql=new n4,Kf=new et;let Yl=null,Zl=0,Kl=0,jl=!1;const ir=(1+Math.sqrt(5))/2,Nr=1/ir,jf=[new H(-ir,Nr,0),new H(ir,Nr,0),new H(-Nr,0,ir),new H(Nr,0,ir),new H(0,ir,-Nr),new H(0,ir,Nr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],$5=new H;class Jf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=$5}=s;Yl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,Zl,Kl),this._renderer.xr.enabled=jl,e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:ro,format:Tn,colorSpace:rs,depthBuffer:!1},r=Qf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q5(s)),this._blurMaterial=Y5(s,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,ql)}_sceneToCubeUV(e,t,i,r,s){const l=new rn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Kf),f.toneMapping=Li,f.autoClear=!1;const g=new qu({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),_=new An(new co,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Kf),m=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const M=this._cubeSize;Jo(r,S*M,E>2?M:0,M,M),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ns||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Jo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ql)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=jf[(r-s-1)%jf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ar-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ar;m>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ar}`);const p=[];let E=0;for(let R=0;R<ar;++R){const I=R/_,A=Math.exp(-I*I/2);p.push(A),R===0?E+=A:R<m&&(E+=2*A)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const M=this._sizeLods[r],L=3*M*(r>S-Hr?r-S+Hr:0),P=4*(this._cubeSize-M);Jo(t,L,P,3*M,2*M),l.setRenderTarget(t),l.render(f,ql)}}function q5(n){const e=[],t=[],i=[];let r=n;const s=n-Hr+1+Zf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Hr?l=Zf[o-n+Hr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),S=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let P=0;P<d;P++){const R=P%3*2/3-1,I=P>2?0:-1,A=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];E.set(A,_*g*P),S.set(h,m*g*P);const y=[P,P,P,P,P,P];M.set(y,p*g*P)}const L=new an;L.setAttribute("position",new Hn(E,_)),L.setAttribute("uv",new Hn(S,m)),L.setAttribute("faceIndex",new Hn(M,p)),e.push(L),r>Hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qf(n,e,t){const i=new mr(n,e,t);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Y5(n,e,t){const i=new Float32Array(ar),r=new H(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function eh(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function th(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function ju(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Z5(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===bc||l===wc,u=l===ns||l===is;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Jf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Jf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function K5(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&$r("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function j5(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let S=0,M=E.length;S<M;S+=3){const L=E[S+0],P=E[S+1],R=E[S+2];h.push(L,P,P,R,R,L)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,M=E.length/3-1;S<M;S+=3){const L=S+0,P=S+1,R=S+2;h.push(L,P,P,R,R,L)}}else return;const m=new(g2(h)?M2:S2)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function J5(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Q5(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function eS(n,e,t){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let L=a.attributes.position.count*M,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const R=new Float32Array(L*P*4*f),I=new _2(R,L,P,f);I.type=ti,I.needsUpdate=!0;const A=M*4;for(let w=0;w<f;w++){const U=p[w],D=E[w],G=S[w],W=L*P*4*w;for(let $=0;$<U.count;$++){const q=$*A;g===!0&&(r.fromBufferAttribute(U,$),R[W+q+0]=r.x,R[W+q+1]=r.y,R[W+q+2]=r.z,R[W+q+3]=0),_===!0&&(r.fromBufferAttribute(D,$),R[W+q+4]=r.x,R[W+q+5]=r.y,R[W+q+6]=r.z,R[W+q+7]=0),m===!0&&(r.fromBufferAttribute(G,$),R[W+q+8]=r.x,R[W+q+9]=r.y,R[W+q+10]=r.z,R[W+q+11]=G.itemSize===4?r.w:1)}}h={count:f,texture:I,size:new Ve(L,P)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function tS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const U2=new Vt,nh=new R2(1,1),N2=new _2,F2=new uv,O2=new C2,ih=[],rh=[],sh=new Float32Array(16),oh=new Float32Array(9),ah=new Float32Array(4);function us(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ih[r];if(s===void 0&&(s=new Float32Array(r),ih[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xa(n,e){let t=rh[e];t===void 0&&(t=new Int32Array(e),rh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function oS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;ah.set(i),n.uniformMatrix2fv(this.addr,!1,ah),Rt(t,i)}}function aS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;oh.set(i),n.uniformMatrix3fv(this.addr,!1,oh),Rt(t,i)}}function lS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;sh.set(i),n.uniformMatrix4fv(this.addr,!1,sh),Rt(t,i)}}function cS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function fS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function dS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function pS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function mS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function gS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function _S(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(nh.compareFunction=m2,s=nh):s=U2,t.setTexture2D(e||s,r)}function vS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||F2,r)}function xS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||O2,r)}function SS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||N2,r)}function MS(n){switch(n){case 5126:return nS;case 35664:return iS;case 35665:return rS;case 35666:return sS;case 35674:return oS;case 35675:return aS;case 35676:return lS;case 5124:case 35670:return cS;case 35667:case 35671:return uS;case 35668:case 35672:return fS;case 35669:case 35673:return hS;case 5125:return dS;case 36294:return pS;case 36295:return mS;case 36296:return gS;case 35678:case 36198:case 36298:case 36306:case 35682:return _S;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return SS}}function yS(n,e){n.uniform1fv(this.addr,e)}function ES(n,e){const t=us(e,this.size,2);n.uniform2fv(this.addr,t)}function CS(n,e){const t=us(e,this.size,3);n.uniform3fv(this.addr,t)}function TS(n,e){const t=us(e,this.size,4);n.uniform4fv(this.addr,t)}function AS(n,e){const t=us(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bS(n,e){const t=us(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wS(n,e){const t=us(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function RS(n,e){n.uniform1iv(this.addr,e)}function PS(n,e){n.uniform2iv(this.addr,e)}function LS(n,e){n.uniform3iv(this.addr,e)}function IS(n,e){n.uniform4iv(this.addr,e)}function DS(n,e){n.uniform1uiv(this.addr,e)}function US(n,e){n.uniform2uiv(this.addr,e)}function NS(n,e){n.uniform3uiv(this.addr,e)}function FS(n,e){n.uniform4uiv(this.addr,e)}function OS(n,e,t){const i=this.cache,r=e.length,s=Xa(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||U2,s[o])}function BS(n,e,t){const i=this.cache,r=e.length,s=Xa(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||F2,s[o])}function HS(n,e,t){const i=this.cache,r=e.length,s=Xa(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||O2,s[o])}function zS(n,e,t){const i=this.cache,r=e.length,s=Xa(t,r);wt(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||N2,s[o])}function VS(n){switch(n){case 5126:return yS;case 35664:return ES;case 35665:return CS;case 35666:return TS;case 35674:return AS;case 35675:return bS;case 35676:return wS;case 5124:case 35670:return RS;case 35667:case 35671:return PS;case 35668:case 35672:return LS;case 35669:case 35673:return IS;case 5125:return DS;case 36294:return US;case 36295:return NS;case 36296:return FS;case 35678:case 36198:case 36298:case 36306:case 35682:return OS;case 35679:case 36299:case 36307:return BS;case 35680:case 36300:case 36308:case 36293:return HS;case 36289:case 36303:case 36311:case 36292:return zS}}class kS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=MS(t.type)}}class GS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VS(t.type)}}class WS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Jl=/(\w+)(\])?(\[|\.)?/g;function lh(n,e){n.seq.push(e),n.map[e.id]=e}function XS(n,e,t){const i=n.name,r=i.length;for(Jl.lastIndex=0;;){const s=Jl.exec(i),o=Jl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){lh(t,c===void 0?new kS(a,n,e):new GS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new WS(a),lh(t,f)),t=f}}}class ua{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);XS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ch(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $S=37297;let qS=0;function YS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const uh=new Ye;function ZS(n){rt._getMatrix(uh,rt.workingColorSpace,n);const e=`mat3( ${uh.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Ma:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function fh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+YS(n.getShaderSource(e),o)}else return r}function KS(n,e){const t=ZS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jS(n,e){let t;switch(e){case F1:t="Linear";break;case O1:t="Reinhard";break;case B1:t="Cineon";break;case H1:t="ACESFilmic";break;case V1:t="AgX";break;case k1:t="Neutral";break;case z1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qo=new H;function JS(){rt.getLuminanceCoefficients(Qo);const n=Qo.x.toFixed(4),e=Qo.y.toFixed(4),t=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function eM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Cs(n){return n!==""}function hh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nM=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(n){return n.replace(nM,rM)}const iM=new Map;function rM(n,e){let t=je[e];if(t===void 0){const i=iM.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return su(t)}const sM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(n){return n.replace(sM,oM)}function oM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===i2?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===m1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function lM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case Ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function uM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case r2:e="ENVMAP_BLENDING_MULTIPLY";break;case U1:e="ENVMAP_BLENDING_MIX";break;case N1:e="ENVMAP_BLENDING_ADD";break}return e}function fM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=aM(t),c=lM(t),u=cM(t),f=uM(t),h=fM(t),d=QS(t),g=eM(s),_=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(m=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?je.tonemapping_pars_fragment:"",t.toneMapping!==Li?jS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,KS("linearToOutputTexel",t.outputColorSpace),JS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),o=su(o),o=hh(o,t),o=dh(o,t),a=su(a),a=hh(a,t),a=dh(a,t),o=ph(o),a=ph(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+m+o,M=E+p+a,L=ch(r,r.VERTEX_SHADER,S),P=ch(r,r.FRAGMENT_SHADER,M);r.attachShader(_,L),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(w){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(L).trim(),G=r.getShaderInfoLog(P).trim();let W=!0,$=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,P);else{const q=fh(r,L,"vertex"),O=fh(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+q+`
`+O)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||G==="")&&($=!1);$&&(w.diagnostics={runnable:W,programLog:U,vertexShader:{log:D,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(L),r.deleteShader(P),I=new ua(r,_),A=tM(r,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,$S)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=P,this}let dM=0;class pM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mM(e),t.set(e,i)),i}}class mM{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}}function gM(n,e,t,i,r,s,o){const a=new v2,l=new pM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,y,w,U,D){const G=U.fog,W=D.geometry,$=A.isMeshStandardMaterial?U.environment:null,q=(A.isMeshStandardMaterial?t:e).get(A.envMap||$),O=q&&q.mapping===Ga?q.image.height:null,se=g[A.type];A.precision!==null&&(d=r.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));const K=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=K!==void 0?K.length:0;let Ee=0;W.morphAttributes.position!==void 0&&(Ee=1),W.morphAttributes.normal!==void 0&&(Ee=2),W.morphAttributes.color!==void 0&&(Ee=3);let Oe,ie,ge,J;if(se){const at=Nn[se];Oe=at.vertexShader,ie=at.fragmentShader}else Oe=A.vertexShader,ie=A.fragmentShader,l.update(A),ge=l.getVertexShaderID(A),J=l.getFragmentShaderID(A);const N=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),ae=D.isInstancedMesh===!0,le=D.isBatchedMesh===!0,Ne=!!A.map,ze=!!A.matcap,C=!!q,v=!!A.aoMap,k=!!A.lightMap,ne=!!A.bumpMap,j=!!A.normalMap,Y=!!A.displacementMap,de=!!A.emissiveMap,oe=!!A.metalnessMap,ce=!!A.roughnessMap,fe=A.anisotropy>0,b=A.clearcoat>0,x=A.dispersion>0,F=A.iridescence>0,X=A.sheen>0,ee=A.transmission>0,Z=fe&&!!A.anisotropyMap,Me=b&&!!A.clearcoatMap,_e=b&&!!A.clearcoatNormalMap,be=b&&!!A.clearcoatRoughnessMap,Le=F&&!!A.iridescenceMap,pe=F&&!!A.iridescenceThicknessMap,we=X&&!!A.sheenColorMap,Be=X&&!!A.sheenRoughnessMap,Pe=!!A.specularMap,ye=!!A.specularColorMap,ke=!!A.specularIntensityMap,B=ee&&!!A.transmissionMap,Te=ee&&!!A.thicknessMap,me=!!A.gradientMap,Ie=!!A.alphaMap,xe=A.alphaTest>0,he=!!A.alphaHash,De=!!A.extensions;let $e=Li;A.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&($e=n.toneMapping);const dt={shaderID:se,shaderType:A.type,shaderName:A.name,vertexShader:Oe,fragmentShader:ie,defines:A.defines,customVertexShaderID:ge,customFragmentShaderID:J,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:le,batchingColor:le&&D._colorsTexture!==null,instancing:ae,instancingColor:ae&&D.instanceColor!==null,instancingMorph:ae&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:rs,alphaToCoverage:!!A.alphaToCoverage,map:Ne,matcap:ze,envMap:C,envMapMode:C&&q.mapping,envMapCubeUVHeight:O,aoMap:v,lightMap:k,bumpMap:ne,normalMap:j,displacementMap:h&&Y,emissiveMap:de,normalMapObjectSpace:j&&A.normalMapType===$1,normalMapTangentSpace:j&&A.normalMapType===p2,metalnessMap:oe,roughnessMap:ce,anisotropy:fe,anisotropyMap:Z,clearcoat:b,clearcoatMap:Me,clearcoatNormalMap:_e,clearcoatRoughnessMap:be,dispersion:x,iridescence:F,iridescenceMap:Le,iridescenceThicknessMap:pe,sheen:X,sheenColorMap:we,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:ye,specularIntensityMap:ke,transmission:ee,transmissionMap:B,thicknessMap:Te,gradientMap:me,opaque:A.transparent===!1&&A.blending===Xr&&A.alphaToCoverage===!1,alphaMap:Ie,alphaTest:xe,alphaHash:he,combine:A.combine,mapUv:Ne&&_(A.map.channel),aoMapUv:v&&_(A.aoMap.channel),lightMapUv:k&&_(A.lightMap.channel),bumpMapUv:ne&&_(A.bumpMap.channel),normalMapUv:j&&_(A.normalMap.channel),displacementMapUv:Y&&_(A.displacementMap.channel),emissiveMapUv:de&&_(A.emissiveMap.channel),metalnessMapUv:oe&&_(A.metalnessMap.channel),roughnessMapUv:ce&&_(A.roughnessMap.channel),anisotropyMapUv:Z&&_(A.anisotropyMap.channel),clearcoatMapUv:Me&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(A.sheenRoughnessMap.channel),specularMapUv:Pe&&_(A.specularMap.channel),specularColorMapUv:ye&&_(A.specularColorMap.channel),specularIntensityMapUv:ke&&_(A.specularIntensityMap.channel),transmissionMapUv:B&&_(A.transmissionMap.channel),thicknessMapUv:Te&&_(A.thicknessMap.channel),alphaMapUv:Ie&&_(A.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(j||fe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(Ne||Ie),fog:!!G,useFog:A.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:re,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ee,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ne&&A.map.isVideoTexture===!0&&rt.getTransfer(A.map.colorSpace)===ct,decodeVideoTextureEmissive:de&&A.emissiveMap.isVideoTexture===!0&&rt.getTransfer(A.emissiveMap.colorSpace)===ct,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ei,flipSided:A.side===Kt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:De&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&A.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(A){const y=[];if(A.shaderID?y.push(A.shaderID):(y.push(A.customVertexShaderID),y.push(A.customFragmentShaderID)),A.defines!==void 0)for(const w in A.defines)y.push(w),y.push(A.defines[w]);return A.isRawShaderMaterial===!1&&(E(y,A),S(y,A),y.push(n.outputColorSpace)),y.push(A.customProgramCacheKey),y.join()}function E(A,y){A.push(y.precision),A.push(y.outputColorSpace),A.push(y.envMapMode),A.push(y.envMapCubeUVHeight),A.push(y.mapUv),A.push(y.alphaMapUv),A.push(y.lightMapUv),A.push(y.aoMapUv),A.push(y.bumpMapUv),A.push(y.normalMapUv),A.push(y.displacementMapUv),A.push(y.emissiveMapUv),A.push(y.metalnessMapUv),A.push(y.roughnessMapUv),A.push(y.anisotropyMapUv),A.push(y.clearcoatMapUv),A.push(y.clearcoatNormalMapUv),A.push(y.clearcoatRoughnessMapUv),A.push(y.iridescenceMapUv),A.push(y.iridescenceThicknessMapUv),A.push(y.sheenColorMapUv),A.push(y.sheenRoughnessMapUv),A.push(y.specularMapUv),A.push(y.specularColorMapUv),A.push(y.specularIntensityMapUv),A.push(y.transmissionMapUv),A.push(y.thicknessMapUv),A.push(y.combine),A.push(y.fogExp2),A.push(y.sizeAttenuation),A.push(y.morphTargetsCount),A.push(y.morphAttributeCount),A.push(y.numDirLights),A.push(y.numPointLights),A.push(y.numSpotLights),A.push(y.numSpotLightMaps),A.push(y.numHemiLights),A.push(y.numRectAreaLights),A.push(y.numDirLightShadows),A.push(y.numPointLightShadows),A.push(y.numSpotLightShadows),A.push(y.numSpotLightShadowsWithMaps),A.push(y.numLightProbes),A.push(y.shadowMapType),A.push(y.toneMapping),A.push(y.numClippingPlanes),A.push(y.numClipIntersection),A.push(y.depthPacking)}function S(A,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),A.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),A.push(a.mask)}function M(A){const y=g[A.type];let w;if(y){const U=Nn[y];w=Ev.clone(U.uniforms)}else w=A.uniforms;return w}function L(A,y){let w;for(let U=0,D=u.length;U<D;U++){const G=u[U];if(G.cacheKey===y){w=G,++w.usedTimes;break}}return w===void 0&&(w=new hM(n,y,A,s),u.push(w)),w}function P(A){if(--A.usedTimes===0){const y=u.indexOf(A);u[y]=u[u.length-1],u.pop(),A.destroy()}}function R(A){l.remove(A)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:L,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:I}}function _M(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function vM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _h(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||vM),i.length>1&&i.sort(h||gh),r.length>1&&r.sort(h||gh)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function xM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new _h,n.set(i,[o])):r>=s.length?(o=new _h,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function SM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new et};break;case"SpotLight":t={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function MM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yM=0;function EM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function CM(n){const e=new SM,t=MM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Mt,o=new Mt;function a(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,S=0,M=0,L=0,P=0,R=0;c.sort(EM);for(let A=0,y=c.length;A<y;A++){const w=c[A],U=w.color,D=w.intensity,G=w.distance,W=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=U.r*D,f+=U.g*D,h+=U.b*D;else if(w.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(w.sh.coefficients[$],D);R++}else if(w.isDirectionalLight){const $=e.get(w);if($.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const q=w.shadow,O=t.get(w);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,i.directionalShadow[d]=O,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=w.shadow.matrix,E++}i.directional[d]=$,d++}else if(w.isSpotLight){const $=e.get(w);$.position.setFromMatrixPosition(w.matrixWorld),$.color.copy(U).multiplyScalar(D),$.distance=G,$.coneCos=Math.cos(w.angle),$.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),$.decay=w.decay,i.spot[_]=$;const q=w.shadow;if(w.map&&(i.spotLightMap[L]=w.map,L++,q.updateMatrices(w),w.castShadow&&P++),i.spotLightMatrix[_]=q.matrix,w.castShadow){const O=t.get(w);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=W,M++}_++}else if(w.isRectAreaLight){const $=e.get(w);$.color.copy(U).multiplyScalar(D),$.halfWidth.set(w.width*.5,0,0),$.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=$,m++}else if(w.isPointLight){const $=e.get(w);if($.color.copy(w.color).multiplyScalar(w.intensity),$.distance=w.distance,$.decay=w.decay,w.castShadow){const q=w.shadow,O=t.get(w);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,O.shadowCameraNear=q.camera.near,O.shadowCameraFar=q.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=w.shadow.matrix,S++}i.point[g]=$,g++}else if(w.isHemisphereLight){const $=e.get(w);$.skyColor.copy(w.color).multiplyScalar(D),$.groundColor.copy(w.groundColor).multiplyScalar(D),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==E||I.numPointShadows!==S||I.numSpotShadows!==M||I.numSpotMaps!==L||I.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=E,I.numPointShadows=S,I.numSpotShadows=M,I.numSpotMaps=L,I.numLightProbes=R,i.version=yM++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const S=c[p];if(S.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(S.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function vh(n){const e=new CM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function TM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new vh(n),e.set(r,[a])):s>=o.length?(a=new vh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const AM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wM(n,e,t){let i=new A2;const r=new Ve,s=new Ve,o=new Ct,a=new e4({depthPacking:X1}),l=new t4,c={},u=t.maxTextureSize,f={[Ui]:Kt,[Kt]:Ui,[ei]:ei},h=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:AM,fragmentShader:bM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new An(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i2;let p=this.type;this.render=function(P,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const A=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Pi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=p!==jn&&this.type===jn,G=p===jn&&this.type!==jn;for(let W=0,$=P.length;W<$;W++){const q=P[W],O=q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const se=O.getFrameExtents();if(r.multiply(se),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,O.mapSize.y=s.y)),O.map===null||D===!0||G===!0){const ue=this.type!==jn?{minFilter:Rn,magFilter:Rn}:{};O.map!==null&&O.map.dispose(),O.map=new mr(r.x,r.y,ue),O.map.texture.name=q.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const K=O.getViewportCount();for(let ue=0;ue<K;ue++){const Ee=O.getViewport(ue);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),U.viewport(o),O.updateMatrices(q,ue),i=O.getFrustum(),M(R,I,O.camera,q,this.type)}O.isPointLightShadow!==!0&&this.type===jn&&E(O,I),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,y,w)};function E(P,R){const I=e.update(_);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new mr(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,I,h,_,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,I,d,_,null)}function S(P,R,I,A){let y=null;const w=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(w!==void 0)y=w;else if(y=I.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=y.uuid,D=R.uuid;let G=c[U];G===void 0&&(G={},c[U]=G);let W=G[D];W===void 0&&(W=y.clone(),G[D]=W,R.addEventListener("dispose",L)),y=W}if(y.visible=R.visible,y.wireframe=R.wireframe,A===jn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:f[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=I}return y}function M(P,R,I,A,y){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===jn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const D=e.update(P),G=P.material;if(Array.isArray(G)){const W=D.groups;for(let $=0,q=W.length;$<q;$++){const O=W[$],se=G[O.materialIndex];if(se&&se.visible){const K=S(P,se,A,y);P.onBeforeShadow(n,P,R,I,D,K,O),n.renderBufferDirect(I,null,D,K,P,O),P.onAfterShadow(n,P,R,I,D,K,O)}}}else if(G.visible){const W=S(P,G,A,y);P.onBeforeShadow(n,P,R,I,D,W,null),n.renderBufferDirect(I,null,D,W,P,null),P.onAfterShadow(n,P,R,I,D,W,null)}}const U=P.children;for(let D=0,G=U.length;D<G;D++)M(U[D],R,I,A,y)}function L(P){P.target.removeEventListener("dispose",L);for(const I in c){const A=c[I],y=P.target.uuid;y in A&&(A[y].dispose(),delete A[y])}}}const RM={[Sc]:Mc,[yc]:Tc,[Ec]:Ac,[ts]:Cc,[Mc]:Sc,[Tc]:yc,[Ac]:Ec,[Cc]:ts};function PM(n,e){function t(){let B=!1;const Te=new Ct;let me=null;const Ie=new Ct(0,0,0,0);return{setMask:function(xe){me!==xe&&!B&&(n.colorMask(xe,xe,xe,xe),me=xe)},setLocked:function(xe){B=xe},setClear:function(xe,he,De,$e,dt){dt===!0&&(xe*=$e,he*=$e,De*=$e),Te.set(xe,he,De,$e),Ie.equals(Te)===!1&&(n.clearColor(xe,he,De,$e),Ie.copy(Te))},reset:function(){B=!1,me=null,Ie.set(-1,0,0,0)}}}function i(){let B=!1,Te=!1,me=null,Ie=null,xe=null;return{setReversed:function(he){if(Te!==he){const De=e.get("EXT_clip_control");he?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Te=he;const $e=xe;xe=null,this.setClear($e)}},getReversed:function(){return Te},setTest:function(he){he?N(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(he){me!==he&&!B&&(n.depthMask(he),me=he)},setFunc:function(he){if(Te&&(he=RM[he]),Ie!==he){switch(he){case Sc:n.depthFunc(n.NEVER);break;case Mc:n.depthFunc(n.ALWAYS);break;case yc:n.depthFunc(n.LESS);break;case ts:n.depthFunc(n.LEQUAL);break;case Ec:n.depthFunc(n.EQUAL);break;case Cc:n.depthFunc(n.GEQUAL);break;case Tc:n.depthFunc(n.GREATER);break;case Ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=he}},setLocked:function(he){B=he},setClear:function(he){xe!==he&&(Te&&(he=1-he),n.clearDepth(he),xe=he)},reset:function(){B=!1,me=null,Ie=null,xe=null,Te=!1}}}function r(){let B=!1,Te=null,me=null,Ie=null,xe=null,he=null,De=null,$e=null,dt=null;return{setTest:function(at){B||(at?N(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(at){Te!==at&&!B&&(n.stencilMask(at),Te=at)},setFunc:function(at,_n,Wn){(me!==at||Ie!==_n||xe!==Wn)&&(n.stencilFunc(at,_n,Wn),me=at,Ie=_n,xe=Wn)},setOp:function(at,_n,Wn){(he!==at||De!==_n||$e!==Wn)&&(n.stencilOp(at,_n,Wn),he=at,De=_n,$e=Wn)},setLocked:function(at){B=at},setClear:function(at){dt!==at&&(n.clearStencil(at),dt=at)},reset:function(){B=!1,Te=null,me=null,Ie=null,xe=null,he=null,De=null,$e=null,dt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,S=null,M=null,L=null,P=null,R=new et(0,0,0),I=0,A=!1,y=null,w=null,U=null,D=null,G=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,q=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(O)[1]),$=q>=1):O.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),$=q>=2);let se=null,K={};const ue=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),Oe=new Ct().fromArray(ue),ie=new Ct().fromArray(Ee);function ge(B,Te,me,Ie){const xe=new Uint8Array(4),he=n.createTexture();n.bindTexture(B,he),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<me;De++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(Te+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return he}const J={};J[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(n.DEPTH_TEST),o.setFunc(ts),ne(!1),j(_f),N(n.CULL_FACE),v(Pi);function N(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function re(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function ae(B,Te){return f[B]!==Te?(n.bindFramebuffer(B,Te),f[B]=Te,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Te),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function le(B,Te){let me=d,Ie=!1;if(B){me=h.get(Te),me===void 0&&(me=[],h.set(Te,me));const xe=B.textures;if(me.length!==xe.length||me[0]!==n.COLOR_ATTACHMENT0){for(let he=0,De=xe.length;he<De;he++)me[he]=n.COLOR_ATTACHMENT0+he;me.length=xe.length,Ie=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(me)}function Ne(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const ze={[or]:n.FUNC_ADD,[_1]:n.FUNC_SUBTRACT,[v1]:n.FUNC_REVERSE_SUBTRACT};ze[x1]=n.MIN,ze[S1]=n.MAX;const C={[M1]:n.ZERO,[y1]:n.ONE,[E1]:n.SRC_COLOR,[vc]:n.SRC_ALPHA,[R1]:n.SRC_ALPHA_SATURATE,[b1]:n.DST_COLOR,[T1]:n.DST_ALPHA,[C1]:n.ONE_MINUS_SRC_COLOR,[xc]:n.ONE_MINUS_SRC_ALPHA,[w1]:n.ONE_MINUS_DST_COLOR,[A1]:n.ONE_MINUS_DST_ALPHA,[P1]:n.CONSTANT_COLOR,[L1]:n.ONE_MINUS_CONSTANT_COLOR,[I1]:n.CONSTANT_ALPHA,[D1]:n.ONE_MINUS_CONSTANT_ALPHA};function v(B,Te,me,Ie,xe,he,De,$e,dt,at){if(B===Pi){_===!0&&(re(n.BLEND),_=!1);return}if(_===!1&&(N(n.BLEND),_=!0),B!==g1){if(B!==m||at!==A){if((p!==or||M!==or)&&(n.blendEquation(n.FUNC_ADD),p=or,M=or),at)switch(B){case Xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.ONE,n.ONE);break;case vf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,S=null,L=null,P=null,R.set(0,0,0),I=0,m=B,A=at}return}xe=xe||Te,he=he||me,De=De||Ie,(Te!==p||xe!==M)&&(n.blendEquationSeparate(ze[Te],ze[xe]),p=Te,M=xe),(me!==E||Ie!==S||he!==L||De!==P)&&(n.blendFuncSeparate(C[me],C[Ie],C[he],C[De]),E=me,S=Ie,L=he,P=De),($e.equals(R)===!1||dt!==I)&&(n.blendColor($e.r,$e.g,$e.b,dt),R.copy($e),I=dt),m=B,A=!1}function k(B,Te){B.side===ei?re(n.CULL_FACE):N(n.CULL_FACE);let me=B.side===Kt;Te&&(me=!me),ne(me),B.blending===Xr&&B.transparent===!1?v(Pi):v(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Ie=B.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),de(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(B){y!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),y=B)}function j(B){B!==d1?(N(n.CULL_FACE),B!==w&&(B===_f?n.cullFace(n.BACK):B===p1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),w=B}function Y(B){B!==U&&($&&n.lineWidth(B),U=B)}function de(B,Te,me){B?(N(n.POLYGON_OFFSET_FILL),(D!==Te||G!==me)&&(n.polygonOffset(Te,me),D=Te,G=me)):re(n.POLYGON_OFFSET_FILL)}function oe(B){B?N(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function ce(B){B===void 0&&(B=n.TEXTURE0+W-1),se!==B&&(n.activeTexture(B),se=B)}function fe(B,Te,me){me===void 0&&(se===null?me=n.TEXTURE0+W-1:me=se);let Ie=K[me];Ie===void 0&&(Ie={type:void 0,texture:void 0},K[me]=Ie),(Ie.type!==B||Ie.texture!==Te)&&(se!==me&&(n.activeTexture(me),se=me),n.bindTexture(B,Te||J[B]),Ie.type=B,Ie.texture=Te)}function b(){const B=K[se];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(B){Oe.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Oe.copy(B))}function Be(B){ie.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ie.copy(B))}function Pe(B,Te){let me=c.get(Te);me===void 0&&(me=new WeakMap,c.set(Te,me));let Ie=me.get(B);Ie===void 0&&(Ie=n.getUniformBlockIndex(Te,B.name),me.set(B,Ie))}function ye(B,Te){const Ie=c.get(Te).get(B);l.get(Te)!==Ie&&(n.uniformBlockBinding(Te,Ie,B.__bindingPointIndex),l.set(Te,Ie))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,K={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,S=null,M=null,L=null,P=null,R=new et(0,0,0),I=0,A=!1,y=null,w=null,U=null,D=null,G=null,Oe.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:N,disable:re,bindFramebuffer:ae,drawBuffers:le,useProgram:Ne,setBlending:v,setMaterial:k,setFlipSided:ne,setCullFace:j,setLineWidth:Y,setPolygonOffset:de,setScissorTest:oe,activeTexture:ce,bindTexture:fe,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Le,texImage3D:pe,updateUBOMapping:Pe,uniformBlockBinding:ye,texStorage2D:_e,texStorage3D:be,texSubImage2D:X,texSubImage3D:ee,compressedTexSubImage2D:Z,compressedTexSubImage3D:Me,scissor:we,viewport:Be,reset:ke}}function LM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return d?new OffscreenCanvas(b,x):Ea("canvas")}function _(b,x,F){let X=1;const ee=fe(b);if((ee.width>F||ee.height>F)&&(X=F/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(X*ee.width),Me=Math.floor(X*ee.height);f===void 0&&(f=g(Z,Me));const _e=x?g(Z,Me):f;return _e.width=Z,_e.height=Me,_e.getContext("2d").drawImage(b,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Me+")."),_e}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(b,x,F,X,ee=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=x;if(x===n.RED&&(F===n.FLOAT&&(Z=n.R32F),F===n.HALF_FLOAT&&(Z=n.R16F),F===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.R8UI),F===n.UNSIGNED_SHORT&&(Z=n.R16UI),F===n.UNSIGNED_INT&&(Z=n.R32UI),F===n.BYTE&&(Z=n.R8I),F===n.SHORT&&(Z=n.R16I),F===n.INT&&(Z=n.R32I)),x===n.RG&&(F===n.FLOAT&&(Z=n.RG32F),F===n.HALF_FLOAT&&(Z=n.RG16F),F===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RG8UI),F===n.UNSIGNED_SHORT&&(Z=n.RG16UI),F===n.UNSIGNED_INT&&(Z=n.RG32UI),F===n.BYTE&&(Z=n.RG8I),F===n.SHORT&&(Z=n.RG16I),F===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),F===n.UNSIGNED_INT&&(Z=n.RGB32UI),F===n.BYTE&&(Z=n.RGB8I),F===n.SHORT&&(Z=n.RGB16I),F===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),F===n.UNSIGNED_INT&&(Z=n.RGBA32UI),F===n.BYTE&&(Z=n.RGBA8I),F===n.SHORT&&(Z=n.RGBA16I),F===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),x===n.RGBA){const Me=ee?Ma:rt.getTransfer(X);F===n.FLOAT&&(Z=n.RGBA32F),F===n.HALF_FLOAT&&(Z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Z=Me===ct?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(b,x){let F;return b?x===null||x===pr||x===$s?F=n.DEPTH24_STENCIL8:x===ti?F=n.DEPTH32F_STENCIL8:x===Xs&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===pr||x===$s?F=n.DEPTH_COMPONENT24:x===ti?F=n.DEPTH_COMPONENT32F:x===Xs&&(F=n.DEPTH_COMPONENT16),F}function L(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Rn&&b.minFilter!==On?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function P(b){const x=b.target;x.removeEventListener("dispose",P),I(x),x.isVideoTexture&&u.delete(x)}function R(b){const x=b.target;x.removeEventListener("dispose",R),y(x)}function I(b){const x=i.get(b);if(x.__webglInit===void 0)return;const F=b.source,X=h.get(F);if(X){const ee=X[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(b),Object.keys(X).length===0&&h.delete(F)}i.remove(b)}function A(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const F=b.source,X=h.get(F);delete X[x.__cacheKey],o.memory.textures--}function y(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let ee=0;ee<x.__webglFramebuffer[X].length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[X][ee]);else n.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)n.deleteFramebuffer(x.__webglFramebuffer[X]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=b.textures;for(let X=0,ee=F.length;X<ee;X++){const Z=i.get(F[X]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(F[X])}i.remove(b)}let w=0;function U(){w=0}function D(){const b=w;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),w+=1,b}function G(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function W(b,x){const F=i.get(b);if(b.isVideoTexture&&oe(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const X=b.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,b,x);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function $(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){J(F,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function q(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){J(F,b,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function O(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){N(F,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const se={[Rc]:n.REPEAT,[lr]:n.CLAMP_TO_EDGE,[Pc]:n.MIRRORED_REPEAT},K={[Rn]:n.NEAREST,[G1]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[vl]:n.LINEAR_MIPMAP_NEAREST,[cr]:n.LINEAR_MIPMAP_LINEAR},ue={[q1]:n.NEVER,[Q1]:n.ALWAYS,[Y1]:n.LESS,[m2]:n.LEQUAL,[Z1]:n.EQUAL,[J1]:n.GEQUAL,[K1]:n.GREATER,[j1]:n.NOTEQUAL};function Ee(b,x){if(x.type===ti&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===On||x.magFilter===vl||x.magFilter===bo||x.magFilter===cr||x.minFilter===On||x.minFilter===vl||x.minFilter===bo||x.minFilter===cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,se[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,se[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,se[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,K[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,K[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Rn||x.minFilter!==bo&&x.minFilter!==cr||x.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Oe(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",P));const X=x.source;let ee=h.get(X);ee===void 0&&(ee={},h.set(X,ee));const Z=G(x);if(Z!==b.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[Z].usedTimes++;const Me=ee[b.__cacheKey];Me!==void 0&&(ee[b.__cacheKey].usedTimes--,Me.usedTimes===0&&A(x)),b.__cacheKey=Z,b.__webglTexture=ee[Z].texture}return F}function ie(b,x,F){return Math.floor(Math.floor(b/F)/x)}function ge(b,x,F,X){const Z=b.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,X,x.data);else{Z.sort((pe,we)=>pe.start-we.start);let Me=0;for(let pe=1;pe<Z.length;pe++){const we=Z[Me],Be=Z[pe],Pe=we.start+we.count,ye=ie(Be.start,x.width,4),ke=ie(we.start,x.width,4);Be.start<=Pe+1&&ye===ke&&ie(Be.start+Be.count-1,x.width,4)===ye?we.count=Math.max(we.count,Be.start+Be.count-we.start):(++Me,Z[Me]=Be)}Z.length=Me+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Le=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let pe=0,we=Z.length;pe<we;pe++){const Be=Z[pe],Pe=Math.floor(Be.start/4),ye=Math.ceil(Be.count/4),ke=Pe%x.width,B=Math.floor(Pe/x.width),Te=ye,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,ke,B,Te,me,F,X,x.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function J(b,x,F){let X=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=n.TEXTURE_3D);const ee=Oe(b,x),Z=x.source;t.bindTexture(X,b.__webglTexture,n.TEXTURE0+F);const Me=i.get(Z);if(Z.version!==Me.__version||ee===!0){t.activeTexture(n.TEXTURE0+F);const _e=rt.getPrimaries(rt.workingColorSpace),be=x.colorSpace===Ti?null:rt.getPrimaries(x.colorSpace),Le=x.colorSpace===Ti||_e===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let pe=_(x.image,!1,r.maxTextureSize);pe=ce(x,pe);const we=s.convert(x.format,x.colorSpace),Be=s.convert(x.type);let Pe=S(x.internalFormat,we,Be,x.colorSpace,x.isVideoTexture);Ee(X,x);let ye;const ke=x.mipmaps,B=x.isVideoTexture!==!0,Te=Me.__version===void 0||ee===!0,me=Z.dataReady,Ie=L(x,pe);if(x.isDepthTexture)Pe=M(x.format===Ys,x.type),Te&&(B?t.texStorage2D(n.TEXTURE_2D,1,Pe,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Pe,pe.width,pe.height,0,we,Be,null));else if(x.isDataTexture)if(ke.length>0){B&&Te&&t.texStorage2D(n.TEXTURE_2D,Ie,Pe,ke[0].width,ke[0].height);for(let xe=0,he=ke.length;xe<he;xe++)ye=ke[xe],B?me&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ye.width,ye.height,we,Be,ye.data):t.texImage2D(n.TEXTURE_2D,xe,Pe,ye.width,ye.height,0,we,Be,ye.data);x.generateMipmaps=!1}else B?(Te&&t.texStorage2D(n.TEXTURE_2D,Ie,Pe,pe.width,pe.height),me&&ge(x,pe,we,Be)):t.texImage2D(n.TEXTURE_2D,0,Pe,pe.width,pe.height,0,we,Be,pe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Pe,ke[0].width,ke[0].height,pe.depth);for(let xe=0,he=ke.length;xe<he;xe++)if(ye=ke[xe],x.format!==Tn)if(we!==null)if(B){if(me)if(x.layerUpdates.size>0){const De=Yf(ye.width,ye.height,x.format,x.type);for(const $e of x.layerUpdates){const dt=ye.data.subarray($e*De/ye.data.BYTES_PER_ELEMENT,($e+1)*De/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,$e,ye.width,ye.height,1,we,dt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,ye.width,ye.height,pe.depth,we,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Pe,ye.width,ye.height,pe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,ye.width,ye.height,pe.depth,we,Be,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Pe,ye.width,ye.height,pe.depth,0,we,Be,ye.data)}else{B&&Te&&t.texStorage2D(n.TEXTURE_2D,Ie,Pe,ke[0].width,ke[0].height);for(let xe=0,he=ke.length;xe<he;xe++)ye=ke[xe],x.format!==Tn?we!==null?B?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,ye.width,ye.height,we,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?me&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ye.width,ye.height,we,Be,ye.data):t.texImage2D(n.TEXTURE_2D,xe,Pe,ye.width,ye.height,0,we,Be,ye.data)}else if(x.isDataArrayTexture)if(B){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Pe,pe.width,pe.height,pe.depth),me)if(x.layerUpdates.size>0){const xe=Yf(pe.width,pe.height,x.format,x.type);for(const he of x.layerUpdates){const De=pe.data.subarray(he*xe/pe.data.BYTES_PER_ELEMENT,(he+1)*xe/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,pe.width,pe.height,1,we,Be,De)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,we,Be,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,pe.width,pe.height,pe.depth,0,we,Be,pe.data);else if(x.isData3DTexture)B?(Te&&t.texStorage3D(n.TEXTURE_3D,Ie,Pe,pe.width,pe.height,pe.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,we,Be,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,pe.width,pe.height,pe.depth,0,we,Be,pe.data);else if(x.isFramebufferTexture){if(Te)if(B)t.texStorage2D(n.TEXTURE_2D,Ie,Pe,pe.width,pe.height);else{let xe=pe.width,he=pe.height;for(let De=0;De<Ie;De++)t.texImage2D(n.TEXTURE_2D,De,Pe,xe,he,0,we,Be,null),xe>>=1,he>>=1}}else if(ke.length>0){if(B&&Te){const xe=fe(ke[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Pe,xe.width,xe.height)}for(let xe=0,he=ke.length;xe<he;xe++)ye=ke[xe],B?me&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,we,Be,ye):t.texImage2D(n.TEXTURE_2D,xe,Pe,we,Be,ye);x.generateMipmaps=!1}else if(B){if(Te){const xe=fe(pe);t.texStorage2D(n.TEXTURE_2D,Ie,Pe,xe.width,xe.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Be,pe)}else t.texImage2D(n.TEXTURE_2D,0,Pe,we,Be,pe);m(x)&&p(X),Me.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function N(b,x,F){if(x.image.length!==6)return;const X=Oe(b,x),ee=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const Z=i.get(ee);if(ee.version!==Z.__version||X===!0){t.activeTexture(n.TEXTURE0+F);const Me=rt.getPrimaries(rt.workingColorSpace),_e=x.colorSpace===Ti?null:rt.getPrimaries(x.colorSpace),be=x.colorSpace===Ti||Me===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Le=x.isCompressedTexture||x.image[0].isCompressedTexture,pe=x.image[0]&&x.image[0].isDataTexture,we=[];for(let he=0;he<6;he++)!Le&&!pe?we[he]=_(x.image[he],!0,r.maxCubemapSize):we[he]=pe?x.image[he].image:x.image[he],we[he]=ce(x,we[he]);const Be=we[0],Pe=s.convert(x.format,x.colorSpace),ye=s.convert(x.type),ke=S(x.internalFormat,Pe,ye,x.colorSpace),B=x.isVideoTexture!==!0,Te=Z.__version===void 0||X===!0,me=ee.dataReady;let Ie=L(x,Be);Ee(n.TEXTURE_CUBE_MAP,x);let xe;if(Le){B&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ke,Be.width,Be.height);for(let he=0;he<6;he++){xe=we[he].mipmaps;for(let De=0;De<xe.length;De++){const $e=xe[De];x.format!==Tn?Pe!==null?B?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,$e.width,$e.height,Pe,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,ke,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,$e.width,$e.height,Pe,ye,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,ke,$e.width,$e.height,0,Pe,ye,$e.data)}}}else{if(xe=x.mipmaps,B&&Te){xe.length>0&&Ie++;const he=fe(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ke,he.width,he.height)}for(let he=0;he<6;he++)if(pe){B?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,we[he].width,we[he].height,Pe,ye,we[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ke,we[he].width,we[he].height,0,Pe,ye,we[he].data);for(let De=0;De<xe.length;De++){const dt=xe[De].image[he].image;B?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,dt.width,dt.height,Pe,ye,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,ke,dt.width,dt.height,0,Pe,ye,dt.data)}}else{B?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe,ye,we[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ke,Pe,ye,we[he]);for(let De=0;De<xe.length;De++){const $e=xe[De];B?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,Pe,ye,$e.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,ke,Pe,ye,$e.image[he])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),Z.__version=ee.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function re(b,x,F,X,ee,Z){const Me=s.convert(F.format,F.colorSpace),_e=s.convert(F.type),be=S(F.internalFormat,Me,_e,F.colorSpace),Le=i.get(x),pe=i.get(F);if(pe.__renderTarget=x,!Le.__hasExternalTextures){const we=Math.max(1,x.width>>Z),Be=Math.max(1,x.height>>Z);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,be,we,Be,x.depth,0,Me,_e,null):t.texImage2D(ee,Z,be,we,Be,0,Me,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),de(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,ee,pe.__webglTexture,0,Y(x)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,ee,pe.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(b,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const X=x.depthTexture,ee=X&&X.isDepthTexture?X.type:null,Z=M(x.stencilBuffer,ee),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=Y(x);de(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,Z,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,b)}else{const X=x.textures;for(let ee=0;ee<X.length;ee++){const Z=X[ee],Me=s.convert(Z.format,Z.colorSpace),_e=s.convert(Z.type),be=S(Z.internalFormat,Me,_e,Z.colorSpace),Le=Y(x);F&&de(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,be,x.width,x.height):de(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,be,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,be,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const ee=X.__webglTexture,Z=Y(x);if(x.depthTexture.format===qs)de(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(x.depthTexture.format===Ys)de(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ne(b){const x=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const X=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=X}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const X=b.texture.mipmaps;X&&X.length>0?le(x.__webglFramebuffer[0],b):le(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=n.createRenderbuffer(),ae(x.__webglDepthbuffer[X],b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}else{const X=b.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ae(x.__webglDepthbuffer,b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(b,x,F){const X=i.get(b);x!==void 0&&re(X.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ne(b)}function C(b){const x=b.texture,F=i.get(b),X=i.get(x);b.addEventListener("dispose",R);const ee=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,o.memory.textures++),Z){F.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[_e]=[];for(let be=0;be<x.mipmaps.length;be++)F.__webglFramebuffer[_e][be]=n.createFramebuffer()}else F.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let _e=0;_e<x.mipmaps.length;_e++)F.__webglFramebuffer[_e]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Me)for(let _e=0,be=ee.length;_e<be;_e++){const Le=i.get(ee[_e]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&de(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let _e=0;_e<ee.length;_e++){const be=ee[_e];F.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[_e]);const Le=s.convert(be.format,be.colorSpace),pe=s.convert(be.type),we=S(be.internalFormat,Le,pe,be.colorSpace,b.isXRRenderTarget===!0),Be=Y(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,we,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,F.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,x);for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)re(F.__webglFramebuffer[_e][be],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,be);else re(F.__webglFramebuffer[_e],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let _e=0,be=ee.length;_e<be;_e++){const Le=ee[_e],pe=i.get(Le);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),Ee(n.TEXTURE_2D,Le),re(F.__webglFramebuffer,b,Le,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),m(Le)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(_e=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,X.__webglTexture),Ee(_e,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)re(F.__webglFramebuffer[be],b,x,n.COLOR_ATTACHMENT0,_e,be);else re(F.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,_e,0);m(x)&&p(_e),t.unbindTexture()}b.depthBuffer&&Ne(b)}function v(b){const x=b.textures;for(let F=0,X=x.length;F<X;F++){const ee=x[F];if(m(ee)){const Z=E(b),Me=i.get(ee).__webglTexture;t.bindTexture(Z,Me),p(Z),t.unbindTexture()}}}const k=[],ne=[];function j(b){if(b.samples>0){if(de(b)===!1){const x=b.textures,F=b.width,X=b.height;let ee=n.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(b),_e=x.length>1;if(_e)for(let Le=0;Le<x.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const be=b.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Le=0;Le<x.length;Le++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Le]);const pe=i.get(x[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,F,X,0,0,F,X,ee,n.NEAREST),l===!0&&(k.length=0,ne.length=0,k.push(n.COLOR_ATTACHMENT0+Le),b.depthBuffer&&b.resolveDepthBuffer===!1&&(k.push(Z),ne.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Le=0;Le<x.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Le]);const pe=i.get(x[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Y(b){return Math.min(r.maxSamples,b.samples)}function de(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function oe(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function ce(b,x){const F=b.colorSpace,X=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==rs&&F!==Ti&&(rt.getTransfer(F)===ct?(X!==Tn||ee!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function fe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=O,this.rebindTextures=ze,this.setupRenderTarget=C,this.updateRenderTargetMipmap=v,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=re,this.useMultisampledRTT=de}function IM(n,e){function t(i,r=Ti){let s;const o=rt.getTransfer(r);if(i===ci)return n.UNSIGNED_BYTE;if(i===zu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===l2)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===o2)return n.BYTE;if(i===a2)return n.SHORT;if(i===Xs)return n.UNSIGNED_SHORT;if(i===Hu)return n.INT;if(i===pr)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===ro)return n.HALF_FLOAT;if(i===c2)return n.ALPHA;if(i===u2)return n.RGB;if(i===Tn)return n.RGBA;if(i===qs)return n.DEPTH_COMPONENT;if(i===Ys)return n.DEPTH_STENCIL;if(i===f2)return n.RED;if(i===ku)return n.RED_INTEGER;if(i===h2)return n.RG;if(i===Gu)return n.RG_INTEGER;if(i===Wu)return n.RGBA_INTEGER;if(i===sa||i===oa||i===aa||i===la)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lc||i===Ic||i===Dc||i===Uc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ic)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nc||i===Fc||i===Oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nc||i===Fc)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Oc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bc||i===Hc||i===zc||i===Vc||i===kc||i===Gc||i===Wc||i===Xc||i===$c||i===qc||i===Yc||i===Zc||i===Kc||i===jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$c)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ca||i===Jc||i===Qc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ca)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===d2||i===eu||i===tu||i===nu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ca)return s.COMPRESSED_RED_RGTC1_EXT;if(i===eu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const DM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Vt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ni({vertexShader:DM,fragmentShader:UM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new Wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FM extends cs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new NM,m=t.getContextAttributes();let p=null,E=null;const S=[],M=[],L=new Ve;let P=null;const R=new rn;R.viewport=new Ct;const I=new rn;I.viewport=new Ct;const A=[R,I],y=new i4;let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ge=S[ie];return ge===void 0&&(ge=new Vl,S[ie]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ie){let ge=S[ie];return ge===void 0&&(ge=new Vl,S[ie]=ge),ge.getGripSpace()},this.getHand=function(ie){let ge=S[ie];return ge===void 0&&(ge=new Vl,S[ie]=ge),ge.getHandSpace()};function D(ie){const ge=M.indexOf(ie.inputSource);if(ge===-1)return;const J=S[ge];J!==void 0&&(J.update(ie.inputSource,ie.frame,c||o),J.dispatchEvent({type:ie.type,data:ie.inputSource}))}function G(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",W);for(let ie=0;ie<S.length;ie++){const ge=M[ie];ge!==null&&(M[ie]=null,S[ie].disconnect(ge))}w=null,U=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,E=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",G),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,N=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Ys:qs,N=m.stencil?$s:pr);const ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new mr(h.textureWidth,h.textureHeight,{format:Tn,type:ci,depthTexture:new R2(h.textureWidth,h.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new mr(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(ie){for(let ge=0;ge<ie.removed.length;ge++){const J=ie.removed[ge],N=M.indexOf(J);N>=0&&(M[N]=null,S[N].disconnect(J))}for(let ge=0;ge<ie.added.length;ge++){const J=ie.added[ge];let N=M.indexOf(J);if(N===-1){for(let ae=0;ae<S.length;ae++)if(ae>=M.length){M.push(J),N=ae;break}else if(M[ae]===null){M[ae]=J,N=ae;break}if(N===-1)break}const re=S[N];re&&re.connect(J)}}const $=new H,q=new H;function O(ie,ge,J){$.setFromMatrixPosition(ge.matrixWorld),q.setFromMatrixPosition(J.matrixWorld);const N=$.distanceTo(q),re=ge.projectionMatrix.elements,ae=J.projectionMatrix.elements,le=re[14]/(re[10]-1),Ne=re[14]/(re[10]+1),ze=(re[9]+1)/re[5],C=(re[9]-1)/re[5],v=(re[8]-1)/re[0],k=(ae[8]+1)/ae[0],ne=le*v,j=le*k,Y=N/(-v+k),de=Y*-v;if(ge.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(de),ie.translateZ(Y),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),re[10]===-1)ie.projectionMatrix.copy(ge.projectionMatrix),ie.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const oe=le+Y,ce=Ne+Y,fe=ne-de,b=j+(N-de),x=ze*Ne/ce*oe,F=C*Ne/ce*oe;ie.projectionMatrix.makePerspective(fe,b,x,F,oe,ce),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function se(ie,ge){ge===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ge.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let ge=ie.near,J=ie.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(J=_.depthFar)),y.near=I.near=R.near=ge,y.far=I.far=R.far=J,(w!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,U=y.far),R.layers.mask=ie.layers.mask|2,I.layers.mask=ie.layers.mask|4,y.layers.mask=R.layers.mask|I.layers.mask;const N=ie.parent,re=y.cameras;se(y,N);for(let ae=0;ae<re.length;ae++)se(re[ae],N);re.length===2?O(y,R,I):y.projectionMatrix.copy(R.projectionMatrix),K(ie,y,N)};function K(ie,ge,J){J===null?ie.matrix.copy(ge.matrixWorld):(ie.matrix.copy(J.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ge.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ge.projectionMatrix),ie.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=iu*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ue=null;function Ee(ie,ge){if(u=ge.getViewerPose(c||o),g=ge,u!==null){const J=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let N=!1;J.length!==y.cameras.length&&(y.cameras.length=0,N=!0);for(let le=0;le<J.length;le++){const Ne=J[le];let ze=null;if(d!==null)ze=d.getViewport(Ne);else{const v=f.getViewSubImage(h,Ne);ze=v.viewport,le===0&&(e.setRenderTargetTextures(E,v.colorTexture,v.depthStencilTexture),e.setRenderTarget(E))}let C=A[le];C===void 0&&(C=new rn,C.layers.enable(le),C.viewport=new Ct,A[le]=C),C.matrix.fromArray(Ne.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Ne.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(ze.x,ze.y,ze.width,ze.height),le===0&&(y.matrix.copy(C.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),N===!0&&y.cameras.push(C)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const le=f.getDepthInformation(J[0]);le&&le.isValid&&le.texture&&_.init(e,le,r.renderState)}}for(let J=0;J<S.length;J++){const N=M[J],re=S[J];N!==null&&re!==void 0&&re.update(N,ge,c||o)}ue&&ue(ie,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}const Oe=new D2;Oe.setAnimationLoop(Ee),this.setAnimationLoop=function(ie){ue=ie},this.dispose=function(){}}}const er=new zn,OM=new Mt;function BM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,y2(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),S=E.envMap,M=E.envMapRotation;S&&(m.envMap.value=S,er.copy(M),er.x*=-1,er.y*=-1,er.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),m.envMapRotation.value.setFromMatrix4(OM.makeRotationFromEuler(er)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const M=S.program;i.uniformBlockBinding(E,M)}function c(E,S){let M=r[E.id];M===void 0&&(g(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",m));const L=S.program;i.updateUBOMapping(E,L);const P=e.render.frame;s[E.id]!==P&&(h(E),s[E.id]=P)}function u(E){const S=f();E.__bindingPointIndex=S;const M=n.createBuffer(),L=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,L,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,M),M}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const S=r[E.id],M=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let P=0,R=M.length;P<R;P++){const I=Array.isArray(M[P])?M[P]:[M[P]];for(let A=0,y=I.length;A<y;A++){const w=I[A];if(d(w,P,A,L)===!0){const U=w.__offset,D=Array.isArray(w.value)?w.value:[w.value];let G=0;for(let W=0;W<D.length;W++){const $=D[W],q=_($);typeof $=="number"||typeof $=="boolean"?(w.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,U+G,w.__data)):$.isMatrix3?(w.__data[0]=$.elements[0],w.__data[1]=$.elements[1],w.__data[2]=$.elements[2],w.__data[3]=0,w.__data[4]=$.elements[3],w.__data[5]=$.elements[4],w.__data[6]=$.elements[5],w.__data[7]=0,w.__data[8]=$.elements[6],w.__data[9]=$.elements[7],w.__data[10]=$.elements[8],w.__data[11]=0):($.toArray(w.__data,G),G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,S,M,L){const P=E.value,R=S+"_"+M;if(L[R]===void 0)return typeof P=="number"||typeof P=="boolean"?L[R]=P:L[R]=P.clone(),!0;{const I=L[R];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return L[R]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function g(E){const S=E.uniforms;let M=0;const L=16;for(let R=0,I=S.length;R<I;R++){const A=Array.isArray(S[R])?S[R]:[S[R]];for(let y=0,w=A.length;y<w;y++){const U=A[y],D=Array.isArray(U.value)?U.value:[U.value];for(let G=0,W=D.length;G<W;G++){const $=D[G],q=_($),O=M%L,se=O%q.boundary,K=O+se;M+=se,K!==0&&L-K<q.storage&&(M+=L-K),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=q.storage}}}const P=M%L;return P>0&&(M+=L-P),E.__size=M,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class B2{constructor(e={}){const{canvas:t=tv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let L=!1;this._outputColorSpace=fn;let P=0,R=0,I=null,A=-1,y=null;const w=new Ct,U=new Ct;let D=null;const G=new et(0);let W=0,$=t.width,q=t.height,O=1,se=null,K=null;const ue=new Ct(0,0,$,q),Ee=new Ct(0,0,$,q);let Oe=!1;const ie=new A2;let ge=!1,J=!1;const N=new Mt,re=new Mt,ae=new H,le=new Ct,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function C(){return I===null?O:1}let v=i;function k(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bu}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",he,!1),v===null){const z="webgl2";if(v=k(z,T),v===null)throw k(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ne,j,Y,de,oe,ce,fe,b,x,F,X,ee,Z,Me,_e,be,Le,pe,we,Be,Pe,ye,ke,B;function Te(){ne=new K5(v),ne.init(),ye=new IM(v,ne),j=new G5(v,ne,e,ye),Y=new PM(v,ne),j.reverseDepthBuffer&&h&&Y.buffers.depth.setReversed(!0),de=new Q5(v),oe=new _M,ce=new LM(v,ne,Y,oe,j,ye,de),fe=new X5(M),b=new Z5(M),x=new s4(v),ke=new V5(v,x),F=new j5(v,x,de,ke),X=new tS(v,F,x,de),we=new eS(v,j,ce),be=new W5(oe),ee=new gM(M,fe,b,ne,j,ke,be),Z=new BM(M,oe),Me=new xM,_e=new TM(ne),pe=new z5(M,fe,b,Y,X,d,l),Le=new wM(M,X,j),B=new HM(v,de,j,Y),Be=new k5(v,ne,de),Pe=new J5(v,ne,de),de.programs=ee.programs,M.capabilities=j,M.extensions=ne,M.properties=oe,M.renderLists=Me,M.shadowMap=Le,M.state=Y,M.info=de}Te();const me=new FM(M,v);this.xr=me,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const T=ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize($,q,!1))},this.getSize=function(T){return T.set($,q)},this.setSize=function(T,z,Q=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,q=z,t.width=Math.floor(T*O),t.height=Math.floor(z*O),Q===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set($*O,q*O).floor()},this.setDrawingBufferSize=function(T,z,Q){$=T,q=z,O=Q,t.width=Math.floor(T*Q),t.height=Math.floor(z*Q),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(ue)},this.setViewport=function(T,z,Q,te){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,z,Q,te),Y.viewport(w.copy(ue).multiplyScalar(O).round())},this.getScissor=function(T){return T.copy(Ee)},this.setScissor=function(T,z,Q,te){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,z,Q,te),Y.scissor(U.copy(Ee).multiplyScalar(O).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(T){Y.setScissorTest(Oe=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,Q=!0){let te=0;if(T){let V=!1;if(I!==null){const Se=I.texture.format;V=Se===Wu||Se===Gu||Se===ku}if(V){const Se=I.texture.type,Ae=Se===ci||Se===pr||Se===Xs||Se===$s||Se===zu||Se===Vu,Ue=pe.getClearColor(),Re=pe.getClearAlpha(),Ge=Ue.r,We=Ue.g,Fe=Ue.b;Ae?(g[0]=Ge,g[1]=We,g[2]=Fe,g[3]=Re,v.clearBufferuiv(v.COLOR,0,g)):(_[0]=Ge,_[1]=We,_[2]=Fe,_[3]=Re,v.clearBufferiv(v.COLOR,0,_))}else te|=v.COLOR_BUFFER_BIT}z&&(te|=v.DEPTH_BUFFER_BIT),Q&&(te|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),pe.dispose(),Me.dispose(),_e.dispose(),oe.dispose(),fe.dispose(),b.dispose(),X.dispose(),ke.dispose(),B.dispose(),ee.dispose(),me.dispose(),me.removeEventListener("sessionstart",v0),me.removeEventListener("sessionend",x0),Xi.stop()};function Ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=de.autoReset,z=Le.enabled,Q=Le.autoUpdate,te=Le.needsUpdate,V=Le.type;Te(),de.autoReset=T,Le.enabled=z,Le.autoUpdate=Q,Le.needsUpdate=te,Le.type=V}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function De(T){const z=T.target;z.removeEventListener("dispose",De),$e(z)}function $e(T){dt(T),oe.remove(T)}function dt(T){const z=oe.get(T).programs;z!==void 0&&(z.forEach(function(Q){ee.releaseProgram(Q)}),T.isShaderMaterial&&ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Q,te,V,Se){z===null&&(z=Ne);const Ae=V.isMesh&&V.matrixWorld.determinant()<0,Ue=Cp(T,z,Q,te,V);Y.setMaterial(te,Ae);let Re=Q.index,Ge=1;if(te.wireframe===!0){if(Re=F.getWireframeAttribute(Q),Re===void 0)return;Ge=2}const We=Q.drawRange,Fe=Q.attributes.position;let Qe=We.start*Ge,lt=(We.start+We.count)*Ge;Se!==null&&(Qe=Math.max(Qe,Se.start*Ge),lt=Math.min(lt,(Se.start+Se.count)*Ge)),Re!==null?(Qe=Math.max(Qe,0),lt=Math.min(lt,Re.count)):Fe!=null&&(Qe=Math.max(Qe,0),lt=Math.min(lt,Fe.count));const Et=lt-Qe;if(Et<0||Et===1/0)return;ke.setup(V,te,Ue,Q,Re);let pt,ft=Be;if(Re!==null&&(pt=x.get(Re),ft=Pe,ft.setIndex(pt)),V.isMesh)te.wireframe===!0?(Y.setLineWidth(te.wireframeLinewidth*C()),ft.setMode(v.LINES)):ft.setMode(v.TRIANGLES);else if(V.isLine){let He=te.linewidth;He===void 0&&(He=1),Y.setLineWidth(He*C()),V.isLineSegments?ft.setMode(v.LINES):V.isLineLoop?ft.setMode(v.LINE_LOOP):ft.setMode(v.LINE_STRIP)}else V.isPoints?ft.setMode(v.POINTS):V.isSprite&&ft.setMode(v.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)$r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ft.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const He=V._multiDrawStarts,xt=V._multiDrawCounts,it=V._multiDrawCount,Qt=Re?x.get(Re).bytesPerElement:1,Mr=oe.get(te).currentProgram.getUniforms();for(let en=0;en<it;en++)Mr.setValue(v,"_gl_DrawID",en),ft.render(He[en]/Qt,xt[en])}else if(V.isInstancedMesh)ft.renderInstances(Qe,Et,V.count);else if(Q.isInstancedBufferGeometry){const He=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,xt=Math.min(Q.instanceCount,He);ft.renderInstances(Qe,Et,xt)}else ft.render(Qe,Et)};function at(T,z,Q){T.transparent===!0&&T.side===ei&&T.forceSinglePass===!1?(T.side=Kt,T.needsUpdate=!0,So(T,z,Q),T.side=Ui,T.needsUpdate=!0,So(T,z,Q),T.side=ei):So(T,z,Q)}this.compile=function(T,z,Q=null){Q===null&&(Q=T),p=_e.get(Q),p.init(z),S.push(p),Q.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==Q&&T.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const te=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Se=V.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){const Ue=Se[Ae];at(Ue,Q,V),te.add(Ue)}else at(Se,Q,V),te.add(Se)}),p=S.pop(),te},this.compileAsync=function(T,z,Q=null){const te=this.compile(T,z,Q);return new Promise(V=>{function Se(){if(te.forEach(function(Ae){oe.get(Ae).currentProgram.isReady()&&te.delete(Ae)}),te.size===0){V(T);return}setTimeout(Se,10)}ne.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let _n=null;function Wn(T){_n&&_n(T)}function v0(){Xi.stop()}function x0(){Xi.start()}const Xi=new D2;Xi.setAnimationLoop(Wn),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(T){_n=T,me.setAnimationLoop(T),T===null?Xi.stop():Xi.start()},me.addEventListener("sessionstart",v0),me.addEventListener("sessionend",x0),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(z),z=me.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,z,I),p=_e.get(T,S.length),p.init(z),S.push(p),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ie.setFromProjectionMatrix(re),J=this.localClippingEnabled,ge=be.init(this.clippingPlanes,J),m=Me.get(T,E.length),m.init(),E.push(m),me.enabled===!0&&me.isPresenting===!0){const Se=M.xr.getDepthSensingMesh();Se!==null&&il(Se,z,-1/0,M.sortObjects)}il(T,z,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(se,K),ze=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,ze&&pe.addToRenderList(m,T),this.info.render.frame++,ge===!0&&be.beginShadows();const Q=p.state.shadowsArray;Le.render(Q,T,z),ge===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=m.opaque,V=m.transmissive;if(p.setupLights(),z.isArrayCamera){const Se=z.cameras;if(V.length>0)for(let Ae=0,Ue=Se.length;Ae<Ue;Ae++){const Re=Se[Ae];M0(te,V,T,Re)}ze&&pe.render(T);for(let Ae=0,Ue=Se.length;Ae<Ue;Ae++){const Re=Se[Ae];S0(m,T,Re,Re.viewport)}}else V.length>0&&M0(te,V,T,z),ze&&pe.render(T),S0(m,T,z);I!==null&&R===0&&(ce.updateMultisampleRenderTarget(I),ce.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(M,T,z),ke.resetDefaultState(),A=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],ge===!0&&be.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function il(T,z,Q,te){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ie.intersectsSprite(T)){te&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(re);const Ae=X.update(T),Ue=T.material;Ue.visible&&m.push(T,Ae,Ue,Q,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ie.intersectsObject(T))){const Ae=X.update(T),Ue=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),le.copy(Ae.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(re)),Array.isArray(Ue)){const Re=Ae.groups;for(let Ge=0,We=Re.length;Ge<We;Ge++){const Fe=Re[Ge],Qe=Ue[Fe.materialIndex];Qe&&Qe.visible&&m.push(T,Ae,Qe,Q,le.z,Fe)}}else Ue.visible&&m.push(T,Ae,Ue,Q,le.z,null)}}const Se=T.children;for(let Ae=0,Ue=Se.length;Ae<Ue;Ae++)il(Se[Ae],z,Q,te)}function S0(T,z,Q,te){const V=T.opaque,Se=T.transmissive,Ae=T.transparent;p.setupLightsView(Q),ge===!0&&be.setGlobalState(M.clippingPlanes,Q),te&&Y.viewport(w.copy(te)),V.length>0&&xo(V,z,Q),Se.length>0&&xo(Se,z,Q),Ae.length>0&&xo(Ae,z,Q),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function M0(T,z,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[te.id]===void 0&&(p.state.transmissionRenderTarget[te.id]=new mr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?ro:ci,minFilter:cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Se=p.state.transmissionRenderTarget[te.id],Ae=te.viewport||w;Se.setSize(Ae.z*M.transmissionResolutionScale,Ae.w*M.transmissionResolutionScale);const Ue=M.getRenderTarget(),Re=M.getActiveCubeFace(),Ge=M.getActiveMipmapLevel();M.setRenderTarget(Se),M.getClearColor(G),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),ze&&pe.render(Q);const We=M.toneMapping;M.toneMapping=Li;const Fe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),p.setupLightsView(te),ge===!0&&be.setGlobalState(M.clippingPlanes,te),xo(T,Q,te),ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let lt=0,Et=z.length;lt<Et;lt++){const pt=z[lt],ft=pt.object,He=pt.geometry,xt=pt.material,it=pt.group;if(xt.side===ei&&ft.layers.test(te.layers)){const Qt=xt.side;xt.side=Kt,xt.needsUpdate=!0,y0(ft,Q,te,He,xt,it),xt.side=Qt,xt.needsUpdate=!0,Qe=!0}}Qe===!0&&(ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se))}M.setRenderTarget(Ue,Re,Ge),M.setClearColor(G,W),Fe!==void 0&&(te.viewport=Fe),M.toneMapping=We}function xo(T,z,Q){const te=z.isScene===!0?z.overrideMaterial:null;for(let V=0,Se=T.length;V<Se;V++){const Ae=T[V],Ue=Ae.object,Re=Ae.geometry,Ge=Ae.group;let We=Ae.material;We.allowOverride===!0&&te!==null&&(We=te),Ue.layers.test(Q.layers)&&y0(Ue,z,Q,Re,We,Ge)}}function y0(T,z,Q,te,V,Se){T.onBeforeRender(M,z,Q,te,V,Se),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(M,z,Q,te,T,Se),V.transparent===!0&&V.side===ei&&V.forceSinglePass===!1?(V.side=Kt,V.needsUpdate=!0,M.renderBufferDirect(Q,z,te,V,T,Se),V.side=Ui,V.needsUpdate=!0,M.renderBufferDirect(Q,z,te,V,T,Se),V.side=ei):M.renderBufferDirect(Q,z,te,V,T,Se),T.onAfterRender(M,z,Q,te,V,Se)}function So(T,z,Q){z.isScene!==!0&&(z=Ne);const te=oe.get(T),V=p.state.lights,Se=p.state.shadowsArray,Ae=V.state.version,Ue=ee.getParameters(T,V.state,Se,z,Q),Re=ee.getProgramCacheKey(Ue);let Ge=te.programs;te.environment=T.isMeshStandardMaterial?z.environment:null,te.fog=z.fog,te.envMap=(T.isMeshStandardMaterial?b:fe).get(T.envMap||te.environment),te.envMapRotation=te.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",De),Ge=new Map,te.programs=Ge);let We=Ge.get(Re);if(We!==void 0){if(te.currentProgram===We&&te.lightsStateVersion===Ae)return C0(T,Ue),We}else Ue.uniforms=ee.getUniforms(T),T.onBeforeCompile(Ue,M),We=ee.acquireProgram(Ue,Re),Ge.set(Re,We),te.uniforms=Ue.uniforms;const Fe=te.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=be.uniform),C0(T,Ue),te.needsLights=Ap(T),te.lightsStateVersion=Ae,te.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMap.value=V.state.directionalShadowMap,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotShadowMap.value=V.state.spotShadowMap,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMap.value=V.state.pointShadowMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),te.currentProgram=We,te.uniformsList=null,We}function E0(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=ua.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function C0(T,z){const Q=oe.get(T);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function Cp(T,z,Q,te,V){z.isScene!==!0&&(z=Ne),ce.resetTextureUnits();const Se=z.fog,Ae=te.isMeshStandardMaterial?z.environment:null,Ue=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:rs,Re=(te.isMeshStandardMaterial?b:fe).get(te.envMap||Ae),Ge=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,We=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Fe=!!Q.morphAttributes.position,Qe=!!Q.morphAttributes.normal,lt=!!Q.morphAttributes.color;let Et=Li;te.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Et=M.toneMapping);const pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ft=pt!==void 0?pt.length:0,He=oe.get(te),xt=p.state.lights;if(ge===!0&&(J===!0||T!==y)){const Ot=T===y&&te.id===A;be.setState(te,T,Ot)}let it=!1;te.version===He.__version?(He.needsLights&&He.lightsStateVersion!==xt.state.version||He.outputColorSpace!==Ue||V.isBatchedMesh&&He.batching===!1||!V.isBatchedMesh&&He.batching===!0||V.isBatchedMesh&&He.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&He.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&He.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&He.instancingMorph===!1&&V.morphTexture!==null||He.envMap!==Re||te.fog===!0&&He.fog!==Se||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==be.numPlanes||He.numIntersection!==be.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==We||He.morphTargets!==Fe||He.morphNormals!==Qe||He.morphColors!==lt||He.toneMapping!==Et||He.morphTargetsCount!==ft)&&(it=!0):(it=!0,He.__version=te.version);let Qt=He.currentProgram;it===!0&&(Qt=So(te,z,V));let Mr=!1,en=!1,ps=!1;const mt=Qt.getUniforms(),ln=He.uniforms;if(Y.useProgram(Qt.program)&&(Mr=!0,en=!0,ps=!0),te.id!==A&&(A=te.id,en=!0),Mr||y!==T){Y.buffers.depth.getReversed()?(N.copy(T.projectionMatrix),iv(N),rv(N),mt.setValue(v,"projectionMatrix",N)):mt.setValue(v,"projectionMatrix",T.projectionMatrix),mt.setValue(v,"viewMatrix",T.matrixWorldInverse);const Wt=mt.map.cameraPosition;Wt!==void 0&&Wt.setValue(v,ae.setFromMatrixPosition(T.matrixWorld)),j.logarithmicDepthBuffer&&mt.setValue(v,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&mt.setValue(v,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,en=!0,ps=!0)}if(V.isSkinnedMesh){mt.setOptional(v,V,"bindMatrix"),mt.setOptional(v,V,"bindMatrixInverse");const Ot=V.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),mt.setValue(v,"boneTexture",Ot.boneTexture,ce))}V.isBatchedMesh&&(mt.setOptional(v,V,"batchingTexture"),mt.setValue(v,"batchingTexture",V._matricesTexture,ce),mt.setOptional(v,V,"batchingIdTexture"),mt.setValue(v,"batchingIdTexture",V._indirectTexture,ce),mt.setOptional(v,V,"batchingColorTexture"),V._colorsTexture!==null&&mt.setValue(v,"batchingColorTexture",V._colorsTexture,ce));const cn=Q.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&we.update(V,Q,Qt),(en||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,mt.setValue(v,"receiveShadow",V.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(ln.envMap.value=Re,ln.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&z.environment!==null&&(ln.envMapIntensity.value=z.environmentIntensity),en&&(mt.setValue(v,"toneMappingExposure",M.toneMappingExposure),He.needsLights&&Tp(ln,ps),Se&&te.fog===!0&&Z.refreshFogUniforms(ln,Se),Z.refreshMaterialUniforms(ln,te,O,q,p.state.transmissionRenderTarget[T.id]),ua.upload(v,E0(He),ln,ce)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ua.upload(v,E0(He),ln,ce),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&mt.setValue(v,"center",V.center),mt.setValue(v,"modelViewMatrix",V.modelViewMatrix),mt.setValue(v,"normalMatrix",V.normalMatrix),mt.setValue(v,"modelMatrix",V.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Ot=te.uniformsGroups;for(let Wt=0,rl=Ot.length;Wt<rl;Wt++){const $i=Ot[Wt];B.update($i,Qt),B.bind($i,Qt)}}return Qt}function Tp(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Ap(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,z,Q){const te=oe.get(T);te.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),oe.get(T.texture).__webglTexture=z,oe.get(T.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:Q,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const Q=oe.get(T);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0};const bp=v.createFramebuffer();this.setRenderTarget=function(T,z=0,Q=0){I=T,P=z,R=Q;let te=!0,V=null,Se=!1,Ae=!1;if(T){const Re=oe.get(T);if(Re.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(v.FRAMEBUFFER,null),te=!1;else if(Re.__webglFramebuffer===void 0)ce.setupRenderTarget(T);else if(Re.__hasExternalTextures)ce.rebindTextures(T,oe.get(T.texture).__webglTexture,oe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Fe=T.depthTexture;if(Re.__boundDepthTexture!==Fe){if(Fe!==null&&oe.has(Fe)&&(T.width!==Fe.image.width||T.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ae=!0);const We=oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[z])?V=We[z][Q]:V=We[z],Se=!0):T.samples>0&&ce.useMultisampledRTT(T)===!1?V=oe.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?V=We[Q]:V=We,w.copy(T.viewport),U.copy(T.scissor),D=T.scissorTest}else w.copy(ue).multiplyScalar(O).floor(),U.copy(Ee).multiplyScalar(O).floor(),D=Oe;if(Q!==0&&(V=bp),Y.bindFramebuffer(v.FRAMEBUFFER,V)&&te&&Y.drawBuffers(T,V),Y.viewport(w),Y.scissor(U),Y.setScissorTest(D),Se){const Re=oe.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,Q)}else if(Ae){const Re=oe.get(T.texture),Ge=z;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Re.__webglTexture,Q,Ge)}else if(T!==null&&Q!==0){const Re=oe.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Re.__webglTexture,Q)}A=-1},this.readRenderTargetPixels=function(T,z,Q,te,V,Se,Ae,Ue=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){Y.bindFramebuffer(v.FRAMEBUFFER,Re);try{const Ge=T.textures[Ue],We=Ge.format,Fe=Ge.type;if(!j.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-te&&Q>=0&&Q<=T.height-V&&(T.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ue),v.readPixels(z,Q,te,V,ye.convert(We),ye.convert(Fe),Se))}finally{const Ge=I!==null?oe.get(I).__webglFramebuffer:null;Y.bindFramebuffer(v.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(T,z,Q,te,V,Se,Ae,Ue=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re)if(z>=0&&z<=T.width-te&&Q>=0&&Q<=T.height-V){Y.bindFramebuffer(v.FRAMEBUFFER,Re);const Ge=T.textures[Ue],We=Ge.format,Fe=Ge.type;if(!j.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Qe),v.bufferData(v.PIXEL_PACK_BUFFER,Se.byteLength,v.STREAM_READ),T.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ue),v.readPixels(z,Q,te,V,ye.convert(We),ye.convert(Fe),0);const lt=I!==null?oe.get(I).__webglFramebuffer:null;Y.bindFramebuffer(v.FRAMEBUFFER,lt);const Et=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await nv(v,Et,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Qe),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Se),v.deleteBuffer(Qe),v.deleteSync(Et),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,Q=0){const te=Math.pow(2,-Q),V=Math.floor(T.image.width*te),Se=Math.floor(T.image.height*te),Ae=z!==null?z.x:0,Ue=z!==null?z.y:0;ce.setTexture2D(T,0),v.copyTexSubImage2D(v.TEXTURE_2D,Q,0,0,Ae,Ue,V,Se),Y.unbindTexture()};const wp=v.createFramebuffer(),Rp=v.createFramebuffer();this.copyTextureToTexture=function(T,z,Q=null,te=null,V=0,Se=null){Se===null&&(V!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=V,V=0):Se=0);let Ae,Ue,Re,Ge,We,Fe,Qe,lt,Et;const pt=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(Q!==null)Ae=Q.max.x-Q.min.x,Ue=Q.max.y-Q.min.y,Re=Q.isBox3?Q.max.z-Q.min.z:1,Ge=Q.min.x,We=Q.min.y,Fe=Q.isBox3?Q.min.z:0;else{const cn=Math.pow(2,-V);Ae=Math.floor(pt.width*cn),Ue=Math.floor(pt.height*cn),T.isDataArrayTexture?Re=pt.depth:T.isData3DTexture?Re=Math.floor(pt.depth*cn):Re=1,Ge=0,We=0,Fe=0}te!==null?(Qe=te.x,lt=te.y,Et=te.z):(Qe=0,lt=0,Et=0);const ft=ye.convert(z.format),He=ye.convert(z.type);let xt;z.isData3DTexture?(ce.setTexture3D(z,0),xt=v.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ce.setTexture2DArray(z,0),xt=v.TEXTURE_2D_ARRAY):(ce.setTexture2D(z,0),xt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,z.unpackAlignment);const it=v.getParameter(v.UNPACK_ROW_LENGTH),Qt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Mr=v.getParameter(v.UNPACK_SKIP_PIXELS),en=v.getParameter(v.UNPACK_SKIP_ROWS),ps=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,pt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,pt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ge),v.pixelStorei(v.UNPACK_SKIP_ROWS,We),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Fe);const mt=T.isDataArrayTexture||T.isData3DTexture,ln=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const cn=oe.get(T),Ot=oe.get(z),Wt=oe.get(cn.__renderTarget),rl=oe.get(Ot.__renderTarget);Y.bindFramebuffer(v.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Y.bindFramebuffer(v.DRAW_FRAMEBUFFER,rl.__webglFramebuffer);for(let $i=0;$i<Re;$i++)mt&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,oe.get(T).__webglTexture,V,Fe+$i),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,oe.get(z).__webglTexture,Se,Et+$i)),v.blitFramebuffer(Ge,We,Ae,Ue,Qe,lt,Ae,Ue,v.DEPTH_BUFFER_BIT,v.NEAREST);Y.bindFramebuffer(v.READ_FRAMEBUFFER,null),Y.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||oe.has(T)){const cn=oe.get(T),Ot=oe.get(z);Y.bindFramebuffer(v.READ_FRAMEBUFFER,wp),Y.bindFramebuffer(v.DRAW_FRAMEBUFFER,Rp);for(let Wt=0;Wt<Re;Wt++)mt?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,cn.__webglTexture,V,Fe+Wt):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,cn.__webglTexture,V),ln?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ot.__webglTexture,Se,Et+Wt):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ot.__webglTexture,Se),V!==0?v.blitFramebuffer(Ge,We,Ae,Ue,Qe,lt,Ae,Ue,v.COLOR_BUFFER_BIT,v.NEAREST):ln?v.copyTexSubImage3D(xt,Se,Qe,lt,Et+Wt,Ge,We,Ae,Ue):v.copyTexSubImage2D(xt,Se,Qe,lt,Ge,We,Ae,Ue);Y.bindFramebuffer(v.READ_FRAMEBUFFER,null),Y.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else ln?T.isDataTexture||T.isData3DTexture?v.texSubImage3D(xt,Se,Qe,lt,Et,Ae,Ue,Re,ft,He,pt.data):z.isCompressedArrayTexture?v.compressedTexSubImage3D(xt,Se,Qe,lt,Et,Ae,Ue,Re,ft,pt.data):v.texSubImage3D(xt,Se,Qe,lt,Et,Ae,Ue,Re,ft,He,pt):T.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,Se,Qe,lt,Ae,Ue,ft,He,pt.data):T.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,Se,Qe,lt,pt.width,pt.height,ft,pt.data):v.texSubImage2D(v.TEXTURE_2D,Se,Qe,lt,Ae,Ue,ft,He,pt);v.pixelStorei(v.UNPACK_ROW_LENGTH,it),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Qt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Mr),v.pixelStorei(v.UNPACK_SKIP_ROWS,en),v.pixelStorei(v.UNPACK_SKIP_IMAGES,ps),Se===0&&z.generateMipmaps&&v.generateMipmap(xt),Y.unbindTexture()},this.copyTextureToTexture3D=function(T,z,Q=null,te=null,V=0){return $r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,Q,te,V)},this.initRenderTarget=function(T){oe.get(T).__webglFramebuffer===void 0&&ce.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ce.setTextureCube(T,0):T.isData3DTexture?ce.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ce.setTexture2DArray(T,0):ce.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){P=0,R=0,I=null,Y.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const zM={id:"hero",ref:"heroSection"},VM=ve("div",{class:"glow"},null,-1),kM=ve("h2",null,"Hey! I’m Mateus Felipe",-1),GM=ve("h1",null,[ve("span",{class:"word"},"Web Developer"),ve("span",{class:"word"},"UI/UX Designer")],-1),WM={class:"socials"},XM=["src"],$M=["src"],qM={class:"actions"},YM={class:"contact"},ZM=ve("canvas",{id:"space-background"},null,-1),KM=5,jM={__name:"Hero",setup(n){let e=3e-4;const t=[];return Vi(()=>{const i=document.getElementById("space-background"),r=new T2,s=new rn(75,window.innerWidth/window.innerHeight,.1,1e3);s.position.z=5;const o=new B2({canvas:i,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(window.devicePixelRatio),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)});const a=new an,l=2e3,c=[];function u(){const U=document.createElement("canvas");U.width=64,U.height=64;const D=U.getContext("2d"),G=D.createLinearGradient(64/2,64/2,0,64/2,64/2,64/2);return G.addColorStop(0,"#f5f5f5"),G.addColorStop(1,"#adadad"),D.fillStyle=G,D.beginPath(),D.arc(64/2,64/2,64/2,0,Math.PI*4),D.fill(),new Nv(U)}for(let w=0;w<l;w++){const U=(Math.random()-.5)*100,D=(Math.random()-.5)*100,G=(Math.random()-.5)*100;c.push(U,D,G)}a.setAttribute("position",new Lt(c,3));const f=[];for(let w=0;w<l;w++)Math.random()<.1?f.push(.76,.15,.15):f.push(1,1,1);a.setAttribute("color",new Lt(f,3));const h=new w2({size:Math.random()*.05+.06,map:u(),transparent:!0,alphaTest:.01,blending:_c,depthWrite:!1,vertexColors:!0}),d=new Uv(a,h);r.add(d);let g=0,_=0;document.addEventListener("mousemove",w=>{g=(w.clientX-window.innerWidth/2)*5e-4,_=(w.clientY-window.innerHeight/2)*5e-4});let m=0;window.addEventListener("scroll",()=>{m=window.scrollY*7e-4});function p(w,U,D=1.5){const G=[];for(let W=0;W<=10;W++){const $=W/10,q=new H().copy(w).addScaledVector(U,-$*D);G.push(q)}return new L2(G)}function E(){const w=Math.random()*Math.PI*2,U=50+Math.random()*20,D=new H(Math.cos(w)*U,Math.random()*30-15,Math.sin(w)*U-50),G=new H(-Math.cos(w)*.6,(Math.random()-.5)*.3,1),W=new Ku(p(D,G),20,.02,8,!1),$=new qu({color:16777215,transparent:!0,opacity:.6}),q=new An(W,$);r.add(q),t.push({mesh:q,velocity:G,lifetime:0,material:$})}const S=()=>{requestAnimationFrame(S),d.rotation.y+=e,d.rotation.x+=e*.25,s.position.x+=(g-s.position.x)*.05,s.position.y+=(-_-s.position.y)*.05,s.position.z=5+m,Math.random()<.01&&t.length<KM&&E();for(let w=t.length-1;w>=0;w--){const U=t[w];U.mesh.position.add(U.velocity),U.lifetime+=1,U.lifetime>100&&(r.remove(U.mesh),t.splice(w,1))}o.render(r,s)};S();const M=document.getElementsByClassName("word"),L=[];let P=0;M[P].style.opacity=1;for(let w=0;w<M.length;w++)y(M[w]);function R(){const w=L[P],U=P==M.length-1?L[0]:L[P+1];for(let D=0;D<w.length;D++)I(w,D);for(let D=0;D<U.length;D++)U[D].className="letter behind",U[0].parentElement.style.opacity=1,A(U,D);P=P==L.length-1?0:P+1}function I(w,U){setTimeout(function(){w[U].className="letter out"},U*45)}function A(w,U){setTimeout(()=>{w[U].className="letter in"},340+U*45)}function y(w){const U=w.innerHTML;w.innerHTML="";const D=[];for(let G=0;G<U.length;G++){const W=document.createElement("span");W.className="letter",W.innerHTML=U.charAt(G),w.appendChild(W),D.push(W)}L.push(D)}R(),setInterval(R,3500)}),(i,r)=>(Ke(),nt("main",zM,[VM,kM,GM,ve("div",WM,[ve("a",{onClick:r[0]||(r[0]=s=>st(hn)("https://github.com/mateusfcolla","_blank")),rel:"noopener noreferrer"},[ve("img",{src:st(Wd),alt:"My Github"},null,8,XM)]),ve("a",{onClick:r[1]||(r[1]=s=>st(hn)("https://dribbble.com/coall_fcm","_blank")),rel:"noopener noreferrer"},[ve("img",{src:st(Xd),alt:"My Dribbble"},null,8,$M)])]),ve("div",qM,[ve("div",{class:"button outline",onClick:r[2]||(r[2]=s=>st(Nu)("#relevant-projects"))},"what I've been working on")]),ve("div",YM,[ve("a",{onClick:r[3]||(r[3]=s=>st(hn)("mailto:felipe.colla.m@gmail.com","_blank"))},"felipe.colla.m@gmail.com")]),ZM],512))}},JM="/assets/Engeled-Chg6Unmo.png",QM="/assets/Superpet-Cb3hFaoK.png",ey="/assets/Velope-CGmblxup.png",ty="/assets/Oli-DShSKzDR.png",ny="/assets/Lcw-D447Eech.png",iy={id:"relevant-projects"},ry=ve("h2",null,"Portfolio",-1),sy=["id","onMousemove"],oy=["src","alt"],ay={class:"project-content"},ly=["href"],cy={class:"project-title"},uy={class:"project-subtitle"},fy={__name:"Projects",setup(n){const e=[{title:"Oli",subtitle:"Website",background:ty,url:"http://oliapp.com.br/"},{title:"LCW",subtitle:"Website",url:"https://lcwmotos.com.br/",background:ny},{title:"Superpet",subtitle:"Website",url:"https://superpetdelivery.com.br/",background:QM},{title:"Engeled",subtitle:"Website",background:JM,url:"https://engeled.com.br/"},{title:"Velope",subtitle:"Design",url:"https://velope.com.br/",background:ey}],t=Cn([]),i=(r,s)=>{const o=t.value[r],a=s.currentTarget.getBoundingClientRect(),l=s.clientX-a.left,c=s.clientY-a.top;if(o){const f=-(r/(e.length-1)*2-1)*20;o.style.transform=`translate(${l}px, ${c}px) translate(-80%, calc(-50% + ${f}%))`}};return Vi(()=>{for(let r=0;r<e.length;r++){const s=t.value[r];s&&(s.style.transform="translate(-80%, -50%)")}}),(r,s)=>(Ke(),nt("section",iy,[ry,(Ke(),nt(ut,null,Yt(e,(o,a)=>ve("div",{class:"project",key:`project-${a}-${o.title}`,id:`project-${a}`,onMousemove:l=>i(a,l)},[ve("img",{class:"project-background",ref_for:!0,ref:l=>t.value[a]=l,src:o.background,alt:`Project background for ${o.title}`},null,8,oy),ve("div",ay,[ve("a",{class:"project-link",href:o.url,target:"_blank"},[ve("h3",cy,qt(o.title),1),ve("p",uy,qt(o.subtitle),1)],8,ly)])],40,sy)),64))]))}},hy={class:"logo-displayer",id:"technologies"},dy=ve("h2",null,"Technology Stack",-1),py={class:"logo-row"},my=ve("div",{class:"empty-logo"},null,-1),gy=[my],_y=ve("div",{class:"empty-logo"},null,-1),vy=[_y],xy=["href","onMouseenter"],Sy=["src","alt"],My=ve("div",{class:"empty-logo"},null,-1),yy=[My],Ey={class:"logo-row"},Cy=ve("div",{class:"empty-logo"},null,-1),Ty=[Cy],Ay=104,by=16,wy={__name:"LogoDisplayer",setup(n){const e=Dg(),t=Cn(!1),i=Cn([]),r=Cn(null),s=Cn([]),o=()=>{Au(()=>{const l=document.querySelector(".logo-displayer");if(!l)return;const c=l.clientWidth-25.6*2,u=Ay+by*2,f=Math.max(1,Math.floor(c/u)),h=[];for(let d=0;d<i.value.length;d+=f)h.push(i.value.slice(d,d+f));s.value=h})},a=()=>e.sort(()=>.5-Math.random());return Vi(()=>{i.value=a(),o(),window.addEventListener("resize",o);const l=new IntersectionObserver(([u])=>{u.isIntersecting&&(t.value=!0,l.disconnect())},{root:null,threshold:.3}),c=document.querySelector(".logo-displayer");c&&l.observe(c)}),Ha(()=>{window.removeEventListener("resize",groupLogos)}),(l,c)=>(Ke(),nt("section",hy,[dy,ve("div",py,[(Ke(),nt(ut,null,Yt(20,u=>ve("a",{class:"logo-display empty",key:"empty-"+u},gy)),64))]),(Ke(!0),nt(ut,null,Yt(s.value,(u,f)=>(Ke(),nt("div",{class:"logo-row",key:"row-"+f},[(Ke(),nt(ut,null,Yt(10,h=>ve("a",{class:"logo-display empty",key:"empty-"+h},vy)),64)),(Ke(!0),nt(ut,null,Yt(u,(h,d)=>(Ke(),nt("a",{class:li(["logo-display",{animated:t.value}]),href:h==null?void 0:h.link,target:"_blank",key:(h==null?void 0:h.name)+d+f,style:Bs({boxShadow:r.value===(h==null?void 0:h.name)+d+f?`0px 0px 30px -10px ${h==null?void 0:h.color}`:"",borderColor:r.value===(h==null?void 0:h.name)+d+f?h==null?void 0:h.color:""}),onMouseenter:g=>r.value=(h==null?void 0:h.name)+d+f,onMouseleave:c[0]||(c[0]=g=>r.value=null)},[h!=null&&h.img?(Ke(),nt("img",{key:0,src:h==null?void 0:h.img,alt:h==null?void 0:h.name,style:Bs({animationDelay:`${(f*s.value[0].length+d)*60}ms`})},null,12,Sy)):ia("",!0)],46,xy))),128)),(Ke(),nt(ut,null,Yt(10,h=>ve("a",{class:"logo-display empty",key:"empty-"+h},yy)),64))]))),128)),ve("div",Ey,[(Ke(),nt(ut,null,Yt(20,u=>ve("a",{class:"logo-display empty",key:"empty-"+u},Ty)),64))])]))}},Ry={id:"about"},Py={class:"left"},Ly=ve("h2",null,"A little about myself...",-1),Iy=ve("p",null,[Jr("I work and specialize in since 2018."),ve("span",null,qt(" ")+" web development and design "+qt(" ")),Jr("I’m passionate about creating inspiring interfaces and improving applications.")],-1),Dy=ve("div",{class:"right"},[ve("h2",null,"Languages"),ve("ul",null,[ve("li",null,"Fluent English"),ve("li",null,"Native Brazillian Portuguese"),ve("li",null,"Basic German")]),ve("div",{id:"threejs-container"})],-1),Uy={__name:"About",setup(n){let e,t,i,r,s,o;function a(S){if(!e||!i||!S)return;const M=S.offsetWidth,L=S.offsetHeight;e.setSize(M,L),i.aspect=M/L,i.updateProjectionMatrix()}let l=!1,c=0,u=!0,f=.003;const h=f;let d=0,g=!1;function _(S){l=!0,u=!1,c=S.clientX,d=0,g=!1}function m(S){if(!l)return;const M=S.clientX-c;c=S.clientX;const P=M*.01;r.rotation.y+=P,s.rotation.y+=P,d=P}function p(){l=!1,f=d,u=!0,g=!0}function E(){g&&(f+=(h-f)*.05,Math.abs(f-h)<1e-4&&(f=h,g=!1))}return Vi(()=>{const S=document.getElementById("threejs-container");if(!S)return;t=new T2,i=new rn(60,S.offsetWidth/S.offsetHeight,.1,1e3),i.position.z=2.5,e=new B2({alpha:!0,antialias:!0}),e.setSize(S.offsetWidth,S.offsetHeight),e.setClearColor(0,0),S.appendChild(e.domElement);const M=new Zu(1.2,16,16),L=new Qv({color:16777215,transparent:!0,opacity:0});r=new An(M,L),t.add(r);const P=new jv(M);s=new Dv(P,new b2({color:3881787,linewidth:2})),t.add(s);function R(){o=requestAnimationFrame(R),u&&(r.rotation.y+=f,s.rotation.y+=f,E()),e.render(t,i)}R();const I=()=>a(S);window.addEventListener("resize",I);const A=e.domElement;A.addEventListener("pointerdown",_),window.addEventListener("pointermove",m),window.addEventListener("pointerup",p),a(S),Ha(()=>{window.removeEventListener("resize",I),o&&cancelAnimationFrame(o),e&&(e.dispose(),e.forceContextLoss(),e.domElement=null,e=null),t=null,i=null,r=null,s=null,A.removeEventListener("pointerdown",_),window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",p)})}),(S,M)=>(Ke(),nt(ut,null,[ve("section",Ry,[ve("div",Py,[Ly,Iy,ve("div",{class:"button",onClick:M[0]||(M[0]=L=>st(hn)("mailto:felipe.colla.m@gmail.com","_blank"))},"contact me")]),Dy]),_t(wy)],64))}};function Ny(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Fy(n,e,t){return e&&Ny(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var xh="(prefers-reduced-motion: reduce)",zr=1,Oy=2,os=3,fs=4,uo=5,fa=6,Aa=7,By={CREATED:zr,MOUNTED:Oy,IDLE:os,MOVING:fs,SCROLLING:uo,DRAGGING:fa,DESTROYED:Aa};function ui(n){n.length=0}function ki(n,e,t){return Array.prototype.slice.call(n,e,t)}function ht(n){return n.bind.apply(n,[null].concat(ki(arguments,1)))}var H2=setTimeout,ou=function(){};function Sh(n){return requestAnimationFrame(n)}function $a(n,e){return typeof e===n}function Zs(n){return!Qu(n)&&$a("object",n)}var Ju=Array.isArray,z2=ht($a,"function"),Fi=ht($a,"string"),fo=ht($a,"undefined");function Qu(n){return n===null}function V2(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function ho(n){return Ju(n)?n:[n]}function gn(n,e){ho(n).forEach(e)}function e0(n,e){return n.indexOf(e)>-1}function ha(n,e){return n.push.apply(n,ho(e)),n}function ii(n,e,t){n&&gn(e,function(i){i&&n.classList[t?"add":"remove"](i)})}function Vn(n,e){ii(n,Fi(e)?e.split(" "):e,!0)}function po(n,e){gn(e,n.appendChild.bind(n))}function t0(n,e){gn(n,function(t){var i=(e||t).parentNode;i&&i.insertBefore(t,e)})}function Ks(n,e){return V2(n)&&(n.msMatchesSelector||n.matches).call(n,e)}function k2(n,e){var t=n?ki(n.children):[];return e?t.filter(function(i){return Ks(i,e)}):t}function mo(n,e){return e?k2(n,e)[0]:n.firstElementChild}var js=Object.keys;function hr(n,e,t){return n&&(t?js(n).reverse():js(n)).forEach(function(i){i!=="__proto__"&&e(n[i],i)}),n}function Js(n){return ki(arguments,1).forEach(function(e){hr(e,function(t,i){n[i]=e[i]})}),n}function Ai(n){return ki(arguments,1).forEach(function(e){hr(e,function(t,i){Ju(t)?n[i]=t.slice():Zs(t)?n[i]=Ai({},Zs(n[i])?n[i]:{},t):n[i]=t})}),n}function Mh(n,e){gn(e||js(n),function(t){delete n[t]})}function kn(n,e){gn(n,function(t){gn(e,function(i){t&&t.removeAttribute(i)})})}function Ze(n,e,t){Zs(e)?hr(e,function(i,r){Ze(n,r,i)}):gn(n,function(i){Qu(t)||t===""?kn(i,e):i.setAttribute(e,String(t))})}function Yr(n,e,t){var i=document.createElement(n);return e&&(Fi(e)?Vn(i,e):Ze(i,e)),t&&po(t,i),i}function yn(n,e,t){if(fo(t))return getComputedStyle(n)[e];Qu(t)||(n.style[e]=""+t)}function Qs(n,e){yn(n,"display",e)}function G2(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function bn(n,e){return n.getAttribute(e)}function yh(n,e){return n&&n.classList.contains(e)}function dn(n){return n.getBoundingClientRect()}function gr(n){gn(n,function(e){e&&e.parentNode&&e.parentNode.removeChild(e)})}function W2(n){return mo(new DOMParser().parseFromString(n,"text/html").body)}function Qn(n,e){n.preventDefault(),e&&(n.stopPropagation(),n.stopImmediatePropagation())}function X2(n,e){return n&&n.querySelector(e)}function n0(n,e){return e?ki(n.querySelectorAll(e)):[]}function ri(n,e){ii(n,e,!1)}function au(n){return n.timeStamp}function tr(n){return Fi(n)?n:n?n+"px":""}var go="splide",i0="data-"+go;function Fs(n,e){if(!n)throw new Error("["+go+"] "+(e||""))}var Oi=Math.min,ba=Math.max,wa=Math.floor,eo=Math.ceil,Zt=Math.abs;function $2(n,e,t){return Zt(n-e)<t}function da(n,e,t,i){var r=Oi(e,t),s=ba(e,t);return i?r<n&&n<s:r<=n&&n<=s}function Or(n,e,t){var i=Oi(e,t),r=ba(e,t);return Oi(ba(i,n),r)}function lu(n){return+(n>0)-+(n<0)}function cu(n,e){return gn(e,function(t){n=n.replace("%s",""+t)}),n}function r0(n){return n<10?"0"+n:""+n}var Eh={};function Hy(n){return""+n+r0(Eh[n]=(Eh[n]||0)+1)}function q2(){var n=[];function e(o,a,l,c){r(o,a,function(u,f,h){var d="addEventListener"in u,g=d?u.removeEventListener.bind(u,f,l,c):u.removeListener.bind(u,l);d?u.addEventListener(f,l,c):u.addListener(l),n.push([u,f,h,l,g])})}function t(o,a,l){r(o,a,function(c,u,f){n=n.filter(function(h){return h[0]===c&&h[1]===u&&h[2]===f&&(!l||h[3]===l)?(h[4](),!1):!0})})}function i(o,a,l){var c,u=!0;return typeof CustomEvent=="function"?c=new CustomEvent(a,{bubbles:u,detail:l}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(a,u,!1,l)),o.dispatchEvent(c),c}function r(o,a,l){gn(o,function(c){c&&gn(a,function(u){u.split(" ").forEach(function(f){var h=f.split(".");l(c,h[0],h[1])})})})}function s(){n.forEach(function(o){o[4]()}),ui(n)}return{bind:e,unbind:t,dispatch:i,destroy:s}}var Gi="mounted",Ch="ready",fi="move",hs="moved",s0="click",Y2="active",Z2="inactive",K2="visible",j2="hidden",At="refresh",Gt="updated",as="resize",qa="resized",J2="drag",Q2="dragging",ep="dragged",Ya="scroll",Sr="scrolled",zy="overflow",o0="destroy",tp="arrows:mounted",np="arrows:updated",ip="pagination:mounted",rp="pagination:updated",a0="navigation:mounted",l0="autoplay:play",sp="autoplay:playing",c0="autoplay:pause",u0="lazyload:loaded",op="sk",ap="sh",Ra="ei";function yt(n){var e=n?n.event.bus:document.createDocumentFragment(),t=q2();function i(s,o){t.bind(e,ho(s).join(" "),function(a){o.apply(o,Ju(a.detail)?a.detail:[])})}function r(s){t.dispatch(e,s,ki(arguments,1))}return n&&n.event.on(o0,t.destroy),Js(t,{bus:e,on:i,off:ht(t.unbind,e),emit:r})}function Za(n,e,t,i){var r=Date.now,s,o=0,a,l=!0,c=0;function u(){if(!l){if(o=n?Oi((r()-s)/n,1):1,t&&t(o),o>=1&&(e(),s=r(),i&&++c>=i))return h();a=Sh(u)}}function f(p){p||g(),s=r()-(p?o*n:0),l=!1,a=Sh(u)}function h(){l=!0}function d(){s=r(),o=0,t&&t(o)}function g(){a&&cancelAnimationFrame(a),o=0,a=0,l=!0}function _(p){n=p}function m(){return l}return{start:f,rewind:d,pause:h,cancel:g,set:_,isPaused:m}}function Vy(n){var e=n;function t(r){e=r}function i(r){return e0(ho(r),e)}return{set:t,is:i}}function ky(n,e){var t=Za(0,n,null,1);return function(){t.isPaused()&&t.start()}}function Gy(n,e,t){var i=n.state,r=t.breakpoints||{},s=t.reducedMotion||{},o=q2(),a=[];function l(){var g=t.mediaQuery==="min";js(r).sort(function(_,m){return g?+_-+m:+m-+_}).forEach(function(_){u(r[_],"("+(g?"min":"max")+"-width:"+_+"px)")}),u(s,xh),f()}function c(g){g&&o.destroy()}function u(g,_){var m=matchMedia(_);o.bind(m,"change",f),a.push([g,m])}function f(){var g=i.is(Aa),_=t.direction,m=a.reduce(function(p,E){return Ai(p,E[1].matches?E[0]:{})},{});Mh(t),d(m),t.destroy?n.destroy(t.destroy==="completely"):g?(c(!0),n.mount()):_!==t.direction&&n.refresh()}function h(g){matchMedia(xh).matches&&(g?Ai(t,s):Mh(t,js(s)))}function d(g,_,m){Ai(t,g),_&&Ai(Object.getPrototypeOf(t),g),(m||!i.is(zr))&&n.emit(Gt,t)}return{setup:l,destroy:c,reduce:h,set:d}}var Ka="Arrow",ja=Ka+"Left",Ja=Ka+"Right",lp=Ka+"Up",cp=Ka+"Down",Th="rtl",Qa="ttb",Ql={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[lp,Ja],ArrowRight:[cp,ja]};function Wy(n,e,t){function i(s,o,a){a=a||t.direction;var l=a===Th&&!o?1:a===Qa?0:-1;return Ql[s]&&Ql[s][l]||s.replace(/width|left|right/i,function(c,u){var f=Ql[c.toLowerCase()][l]||c;return u>0?f.charAt(0).toUpperCase()+f.slice(1):f})}function r(s){return s*(t.direction===Th?1:-1)}return{resolve:i,orient:r}}var ai="role",Zr="tabindex",Xy="disabled",In="aria-",_o=In+"controls",up=In+"current",Ah=In+"selected",mn=In+"label",f0=In+"labelledby",fp=In+"hidden",h0=In+"orientation",to=In+"roledescription",bh=In+"live",wh=In+"busy",Rh=In+"atomic",d0=[ai,Zr,Xy,_o,up,mn,f0,fp,h0,to],Gn=go+"__",Wi="is-",ec=go,Ph=Gn+"track",$y=Gn+"list",el=Gn+"slide",hp=el+"--clone",qy=el+"__container",p0=Gn+"arrows",tl=Gn+"arrow",dp=tl+"--prev",pp=tl+"--next",nl=Gn+"pagination",mp=nl+"__page",Yy=Gn+"progress",Zy=Yy+"__bar",Ky=Gn+"toggle",jy=Gn+"spinner",Jy=Gn+"sr",Qy=Wi+"initialized",_r=Wi+"active",gp=Wi+"prev",_p=Wi+"next",uu=Wi+"visible",fu=Wi+"loading",vp=Wi+"focus-in",xp=Wi+"overflow",e6=[_r,uu,gp,_p,fu,vp,xp],t6={slide:el,clone:hp,arrows:p0,arrow:tl,prev:dp,next:pp,pagination:nl,page:mp,spinner:jy};function n6(n,e){if(z2(n.closest))return n.closest(e);for(var t=n;t&&t.nodeType===1&&!Ks(t,e);)t=t.parentElement;return t}var i6=5,Lh=200,Sp="touchstart mousedown",tc="touchmove mousemove",nc="touchend touchcancel mouseup click";function r6(n,e,t){var i=yt(n),r=i.on,s=i.bind,o=n.root,a=t.i18n,l={},c=[],u=[],f=[],h,d,g;function _(){S(),M(),E()}function m(){r(At,p),r(At,_),r(Gt,E),s(document,Sp+" keydown",function(R){g=R.type==="keydown"},{capture:!0}),s(o,"focusin",function(){ii(o,vp,!!g)})}function p(R){var I=d0.concat("style");ui(c),ri(o,u),ri(h,f),kn([h,d],I),kn(o,R?I:["style",to])}function E(){ri(o,u),ri(h,f),u=P(ec),f=P(Ph),Vn(o,u),Vn(h,f),Ze(o,mn,t.label),Ze(o,f0,t.labelledby)}function S(){h=L("."+Ph),d=mo(h,"."+$y),Fs(h&&d,"A track/list element is missing."),ha(c,k2(d,"."+el+":not(."+hp+")")),hr({arrows:p0,pagination:nl,prev:dp,next:pp,bar:Zy,toggle:Ky},function(R,I){l[I]=L("."+R)}),Js(l,{root:o,track:h,list:d,slides:c})}function M(){var R=o.id||Hy(go),I=t.role;o.id=R,h.id=h.id||R+"-track",d.id=d.id||R+"-list",!bn(o,ai)&&o.tagName!=="SECTION"&&I&&Ze(o,ai,I),Ze(o,to,a.carousel),Ze(d,ai,"presentation")}function L(R){var I=X2(o,R);return I&&n6(I,"."+ec)===o?I:void 0}function P(R){return[R+"--"+t.type,R+"--"+t.direction,t.drag&&R+"--draggable",t.isNavigation&&R+"--nav",R===ec&&_r]}return Js(l,{setup:_,mount:m,destroy:p})}var ls="slide",ds="loop",vo="fade";function s6(n,e,t,i){var r=yt(n),s=r.on,o=r.emit,a=r.bind,l=n.Components,c=n.root,u=n.options,f=u.isNavigation,h=u.updateOnMove,d=u.i18n,g=u.pagination,_=u.slideFocus,m=l.Direction.resolve,p=bn(i,"style"),E=bn(i,mn),S=t>-1,M=mo(i,"."+qy),L;function P(){S||(i.id=c.id+"-slide"+r0(e+1),Ze(i,ai,g?"tabpanel":"group"),Ze(i,to,d.slide),Ze(i,mn,E||cu(d.slideLabel,[e+1,n.length]))),R()}function R(){a(i,"click",ht(o,s0,O)),a(i,"keydown",ht(o,op,O)),s([hs,ap,Sr],w),s(a0,A),h&&s(fi,y)}function I(){L=!0,r.destroy(),ri(i,e6),kn(i,d0),Ze(i,"style",p),Ze(i,mn,E||"")}function A(){var se=n.splides.map(function(K){var ue=K.splide.Components.Slides.getAt(e);return ue?ue.slide.id:""}).join(" ");Ze(i,mn,cu(d.slideX,(S?t:e)+1)),Ze(i,_o,se),Ze(i,ai,_?"button":""),_&&kn(i,to)}function y(){L||w()}function w(){if(!L){var se=n.index;U(),D(),ii(i,gp,e===se-1),ii(i,_p,e===se+1)}}function U(){var se=W();se!==yh(i,_r)&&(ii(i,_r,se),Ze(i,up,f&&se||""),o(se?Y2:Z2,O))}function D(){var se=$(),K=!se&&(!W()||S);if(n.state.is([fs,uo])||Ze(i,fp,K||""),Ze(n0(i,u.focusableNodes||""),Zr,K?-1:""),_&&Ze(i,Zr,K?-1:0),se!==yh(i,uu)&&(ii(i,uu,se),o(se?K2:j2,O)),!se&&document.activeElement===i){var ue=l.Slides.getAt(n.index);ue&&G2(ue.slide)}}function G(se,K,ue){yn(ue&&M||i,se,K)}function W(){var se=n.index;return se===e||u.cloneStatus&&se===t}function $(){if(n.is(vo))return W();var se=dn(l.Elements.track),K=dn(i),ue=m("left",!0),Ee=m("right",!0);return wa(se[ue])<=eo(K[ue])&&wa(K[Ee])<=eo(se[Ee])}function q(se,K){var ue=Zt(se-e);return!S&&(u.rewind||n.is(ds))&&(ue=Oi(ue,n.length-ue)),ue<=K}var O={index:e,slideIndex:t,slide:i,container:M,isClone:S,mount:P,destroy:I,update:w,style:G,isWithin:q};return O}function o6(n,e,t){var i=yt(n),r=i.on,s=i.emit,o=i.bind,a=e.Elements,l=a.slides,c=a.list,u=[];function f(){h(),r(At,d),r(At,h)}function h(){l.forEach(function(w,U){_(w,U,-1)})}function d(){L(function(w){w.destroy()}),ui(u)}function g(){L(function(w){w.update()})}function _(w,U,D){var G=s6(n,U,D,w);G.mount(),u.push(G),u.sort(function(W,$){return W.index-$.index})}function m(w){return w?P(function(U){return!U.isClone}):u}function p(w){var U=e.Controller,D=U.toIndex(w),G=U.hasFocus()?1:t.perPage;return P(function(W){return da(W.index,D,D+G-1)})}function E(w){return P(w)[0]}function S(w,U){gn(w,function(D){if(Fi(D)&&(D=W2(D)),V2(D)){var G=l[U];G?t0(D,G):po(c,D),Vn(D,t.classes.slide),I(D,ht(s,as))}}),s(At)}function M(w){gr(P(w).map(function(U){return U.slide})),s(At)}function L(w,U){m(U).forEach(w)}function P(w){return u.filter(z2(w)?w:function(U){return Fi(w)?Ks(U.slide,w):e0(ho(w),U.index)})}function R(w,U,D){L(function(G){G.style(w,U,D)})}function I(w,U){var D=n0(w,"img"),G=D.length;G?D.forEach(function(W){o(W,"load error",function(){--G||U()})}):U()}function A(w){return w?l.length:u.length}function y(){return u.length>t.perPage}return{mount:f,destroy:d,update:g,register:_,get:m,getIn:p,getAt:E,add:S,remove:M,forEach:L,filter:P,style:R,getLength:A,isEnough:y}}function a6(n,e,t){var i=yt(n),r=i.on,s=i.bind,o=i.emit,a=e.Slides,l=e.Direction.resolve,c=e.Elements,u=c.root,f=c.track,h=c.list,d=a.getAt,g=a.style,_,m,p;function E(){S(),s(window,"resize load",ky(ht(o,as))),r([Gt,At],S),r(as,M)}function S(){_=t.direction===Qa,yn(u,"maxWidth",tr(t.width)),yn(f,l("paddingLeft"),L(!1)),yn(f,l("paddingRight"),L(!0)),M(!0)}function M(O){var se=dn(u);(O||m.width!==se.width||m.height!==se.height)&&(yn(f,"height",P()),g(l("marginRight"),tr(t.gap)),g("width",I()),g("height",A(),!0),m=se,o(qa),p!==(p=q())&&(ii(u,xp,p),o(zy,p)))}function L(O){var se=t.padding,K=l(O?"right":"left");return se&&tr(se[K]||(Zs(se)?0:se))||"0px"}function P(){var O="";return _&&(O=R(),Fs(O,"height or heightRatio is missing."),O="calc("+O+" - "+L(!1)+" - "+L(!0)+")"),O}function R(){return tr(t.height||dn(h).width*t.heightRatio)}function I(){return t.autoWidth?null:tr(t.fixedWidth)||(_?"":y())}function A(){return tr(t.fixedHeight)||(_?t.autoHeight?null:y():R())}function y(){var O=tr(t.gap);return"calc((100%"+(O&&" + "+O)+")/"+(t.perPage||1)+(O&&" - "+O)+")"}function w(){return dn(h)[l("width")]}function U(O,se){var K=d(O||0);return K?dn(K.slide)[l("width")]+(se?0:W()):0}function D(O,se){var K=d(O);if(K){var ue=dn(K.slide)[l("right")],Ee=dn(h)[l("left")];return Zt(ue-Ee)+(se?0:W())}return 0}function G(O){return D(n.length-1)-D(0)+U(0,O)}function W(){var O=d(0);return O&&parseFloat(yn(O.slide,l("marginRight")))||0}function $(O){return parseFloat(yn(f,l("padding"+(O?"Right":"Left"))))||0}function q(){return n.is(vo)||G(!0)>w()}return{mount:E,resize:M,listSize:w,slideSize:U,sliderSize:G,totalSize:D,getPadding:$,isOverflow:q}}var l6=2;function c6(n,e,t){var i=yt(n),r=i.on,s=e.Elements,o=e.Slides,a=e.Direction.resolve,l=[],c;function u(){r(At,f),r([Gt,as],d),(c=m())&&(g(c),e.Layout.resize(!0))}function f(){h(),u()}function h(){gr(l),ui(l),i.destroy()}function d(){var p=m();c!==p&&(c<p||!p)&&i.emit(At)}function g(p){var E=o.get().slice(),S=E.length;if(S){for(;E.length<p;)ha(E,E);ha(E.slice(-p),E.slice(0,p)).forEach(function(M,L){var P=L<p,R=_(M.slide,L);P?t0(R,E[0].slide):po(s.list,R),ha(l,R),o.register(R,L-p+(P?0:S),M.index)})}}function _(p,E){var S=p.cloneNode(!0);return Vn(S,t.classes.clone),S.id=n.root.id+"-clone"+r0(E+1),S}function m(){var p=t.clones;if(!n.is(ds))p=0;else if(fo(p)){var E=t[a("fixedWidth")]&&e.Layout.slideSize(0),S=E&&eo(dn(s.track)[a("width")]/E);p=S||t[a("autoWidth")]&&n.length||t.perPage*l6}return p}return{mount:u,destroy:h}}function u6(n,e,t){var i=yt(n),r=i.on,s=i.emit,o=n.state.set,a=e.Layout,l=a.slideSize,c=a.getPadding,u=a.totalSize,f=a.listSize,h=a.sliderSize,d=e.Direction,g=d.resolve,_=d.orient,m=e.Elements,p=m.list,E=m.track,S;function M(){S=e.Transition,r([Gi,qa,Gt,At],L)}function L(){e.Controller.isBusy()||(e.Scroll.cancel(),R(n.index),e.Slides.update())}function P(K,ue,Ee,Oe){K!==ue&&O(K>Ee)&&(w(),I(y(G(),K>Ee),!0)),o(fs),s(fi,ue,Ee,K),S.start(ue,function(){o(os),s(hs,ue,Ee,K),Oe&&Oe()})}function R(K){I(D(K,!0))}function I(K,ue){if(!n.is(vo)){var Ee=ue?K:A(K);yn(p,"transform","translate"+g("X")+"("+Ee+"px)"),K!==Ee&&s(ap)}}function A(K){if(n.is(ds)){var ue=U(K),Ee=ue>e.Controller.getEnd(),Oe=ue<0;(Oe||Ee)&&(K=y(K,Ee))}return K}function y(K,ue){var Ee=K-q(ue),Oe=h();return K-=_(Oe*(eo(Zt(Ee)/Oe)||1))*(ue?1:-1),K}function w(){I(G(),!0),S.cancel()}function U(K){for(var ue=e.Slides.get(),Ee=0,Oe=1/0,ie=0;ie<ue.length;ie++){var ge=ue[ie].index,J=Zt(D(ge,!0)-K);if(J<=Oe)Oe=J,Ee=ge;else break}return Ee}function D(K,ue){var Ee=_(u(K-1)-$(K));return ue?W(Ee):Ee}function G(){var K=g("left");return dn(p)[K]-dn(E)[K]+_(c(!1))}function W(K){return t.trimSpace&&n.is(ls)&&(K=Or(K,0,_(h(!0)-f()))),K}function $(K){var ue=t.focus;return ue==="center"?(f()-l(K,!0))/2:+ue*l(K)||0}function q(K){return D(K?e.Controller.getEnd():0,!!t.trimSpace)}function O(K){var ue=_(y(G(),K));return K?ue>=0:ue<=p[g("scrollWidth")]-dn(E)[g("width")]}function se(K,ue){ue=fo(ue)?G():ue;var Ee=K!==!0&&_(ue)<_(q(!1)),Oe=K!==!1&&_(ue)>_(q(!0));return Ee||Oe}return{mount:M,move:P,jump:R,translate:I,shift:y,cancel:w,toIndex:U,toPosition:D,getPosition:G,getLimit:q,exceededLimit:se,reposition:L}}function f6(n,e,t){var i=yt(n),r=i.on,s=i.emit,o=e.Move,a=o.getPosition,l=o.getLimit,c=o.toPosition,u=e.Slides,f=u.isEnough,h=u.getLength,d=t.omitEnd,g=n.is(ds),_=n.is(ls),m=ht(G,!1),p=ht(G,!0),E=t.start||0,S,M=E,L,P,R;function I(){A(),r([Gt,At,Ra],A),r(qa,y)}function A(){L=h(!0),P=t.perMove,R=t.perPage,S=O();var J=Or(E,0,d?S:L-1);J!==E&&(E=J,o.reposition())}function y(){S!==O()&&s(Ra)}function w(J,N,re){if(!ge()){var ae=D(J),le=q(ae);le>-1&&(N||le!==E)&&(Ee(le),o.move(ae,le,M,re))}}function U(J,N,re,ae){e.Scroll.scroll(J,N,re,function(){var le=q(o.toIndex(a()));Ee(d?Oi(le,S):le),ae&&ae()})}function D(J){var N=E;if(Fi(J)){var re=J.match(/([+\-<>])(\d+)?/)||[],ae=re[1],le=re[2];ae==="+"||ae==="-"?N=W(E+ +(""+ae+(+le||1)),E):ae===">"?N=le?se(+le):m(!0):ae==="<"&&(N=p(!0))}else N=g?J:Or(J,0,S);return N}function G(J,N){var re=P||(ie()?1:R),ae=W(E+re*(J?-1:1),E,!(P||ie()));return ae===-1&&_&&!$2(a(),l(!J),1)?J?0:S:N?ae:q(ae)}function W(J,N,re){if(f()||ie()){var ae=$(J);ae!==J&&(N=J,J=ae,re=!1),J<0||J>S?!P&&(da(0,J,N,!0)||da(S,N,J,!0))?J=se(K(J)):g?J=re?J<0?-(L%R||R):L:J:t.rewind?J=J<0?S:0:J=-1:re&&J!==N&&(J=se(K(N)+(J<N?-1:1)))}else J=-1;return J}function $(J){if(_&&t.trimSpace==="move"&&J!==E)for(var N=a();N===c(J,!0)&&da(J,0,n.length-1,!t.rewind);)J<E?--J:++J;return J}function q(J){return g?(J+L)%L||0:J}function O(){for(var J=L-(ie()||g&&P?1:R);d&&J-- >0;)if(c(L-1,!0)!==c(J,!0)){J++;break}return Or(J,0,L-1)}function se(J){return Or(ie()?J:R*J,0,S)}function K(J){return ie()?Oi(J,S):wa((J>=S?L-1:J)/R)}function ue(J){var N=o.toIndex(J);return _?Or(N,0,S):N}function Ee(J){J!==E&&(M=E,E=J)}function Oe(J){return J?M:E}function ie(){return!fo(t.focus)||t.isNavigation}function ge(){return n.state.is([fs,uo])&&!!t.waitForTransition}return{mount:I,go:w,scroll:U,getNext:m,getPrev:p,getAdjacent:G,getEnd:O,setIndex:Ee,getIndex:Oe,toIndex:se,toPage:K,toDest:ue,hasFocus:ie,isBusy:ge}}var h6="http://www.w3.org/2000/svg",d6="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",ea=40;function p6(n,e,t){var i=yt(n),r=i.on,s=i.bind,o=i.emit,a=t.classes,l=t.i18n,c=e.Elements,u=e.Controller,f=c.arrows,h=c.track,d=f,g=c.prev,_=c.next,m,p,E={};function S(){L(),r(Gt,M)}function M(){P(),S()}function L(){var U=t.arrows;U&&!(g&&_)&&A(),g&&_&&(Js(E,{prev:g,next:_}),Qs(d,U?"":"none"),Vn(d,p=p0+"--"+t.direction),U&&(R(),w(),Ze([g,_],_o,h.id),o(tp,g,_)))}function P(){i.destroy(),ri(d,p),m?(gr(f?[g,_]:d),g=_=null):kn([g,_],d0)}function R(){r([Gi,hs,At,Sr,Ra],w),s(_,"click",ht(I,">")),s(g,"click",ht(I,"<"))}function I(U){u.go(U,!0)}function A(){d=f||Yr("div",a.arrows),g=y(!0),_=y(!1),m=!0,po(d,[g,_]),!f&&t0(d,h)}function y(U){var D='<button class="'+a.arrow+" "+(U?a.prev:a.next)+'" type="button"><svg xmlns="'+h6+'" viewBox="0 0 '+ea+" "+ea+'" width="'+ea+'" height="'+ea+'" focusable="false"><path d="'+(t.arrowPath||d6)+'" />';return W2(D)}function w(){if(g&&_){var U=n.index,D=u.getPrev(),G=u.getNext(),W=D>-1&&U<D?l.last:l.prev,$=G>-1&&U>G?l.first:l.next;g.disabled=D<0,_.disabled=G<0,Ze(g,mn,W),Ze(_,mn,$),o(np,g,_,D,G)}}return{arrows:E,mount:S,destroy:P,update:w}}var m6=i0+"-interval";function g6(n,e,t){var i=yt(n),r=i.on,s=i.bind,o=i.emit,a=Za(t.interval,n.go.bind(n,">"),R),l=a.isPaused,c=e.Elements,u=e.Elements,f=u.root,h=u.toggle,d=t.autoplay,g,_,m=d==="pause";function p(){d&&(E(),h&&Ze(h,_o,c.track.id),m||S(),P())}function E(){t.pauseOnHover&&s(f,"mouseenter mouseleave",function(A){g=A.type==="mouseenter",L()}),t.pauseOnFocus&&s(f,"focusin focusout",function(A){_=A.type==="focusin",L()}),h&&s(h,"click",function(){m?S():M(!0)}),r([fi,Ya,At],a.rewind),r(fi,I)}function S(){l()&&e.Slides.isEnough()&&(a.start(!t.resetProgress),_=g=m=!1,P(),o(l0))}function M(A){A===void 0&&(A=!0),m=!!A,P(),l()||(a.pause(),o(c0))}function L(){m||(g||_?M(!1):S())}function P(){h&&(ii(h,_r,!m),Ze(h,mn,t.i18n[m?"play":"pause"]))}function R(A){var y=c.bar;y&&yn(y,"width",A*100+"%"),o(sp,A)}function I(A){var y=e.Slides.getAt(A);a.set(y&&+bn(y.slide,m6)||t.interval)}return{mount:p,destroy:a.cancel,play:S,pause:M,isPaused:l}}function _6(n,e,t){var i=yt(n),r=i.on;function s(){t.cover&&(r(u0,ht(a,!0)),r([Gi,Gt,At],ht(o,!0)))}function o(l){e.Slides.forEach(function(c){var u=mo(c.container||c.slide,"img");u&&u.src&&a(l,u,c)})}function a(l,c,u){u.style("background",l?'center/cover no-repeat url("'+c.src+'")':"",!0),Qs(c,l?"none":"")}return{mount:s,destroy:ht(o,!1)}}var v6=10,x6=600,S6=.6,M6=1.5,y6=800;function E6(n,e,t){var i=yt(n),r=i.on,s=i.emit,o=n.state.set,a=e.Move,l=a.getPosition,c=a.getLimit,u=a.exceededLimit,f=a.translate,h=n.is(ls),d,g,_=1;function m(){r(fi,M),r([Gt,At],L)}function p(R,I,A,y,w){var U=l();if(M(),A&&(!h||!u())){var D=e.Layout.sliderSize(),G=lu(R)*D*wa(Zt(R)/D)||0;R=a.toPosition(e.Controller.toDest(R%D))+G}var W=$2(U,R,1);_=1,I=W?0:I||ba(Zt(R-U)/M6,y6),g=y,d=Za(I,E,ht(S,U,R,w),1),o(uo),s(Ya),d.start()}function E(){o(os),g&&g(),s(Sr)}function S(R,I,A,y){var w=l(),U=R+(I-R)*P(y),D=(U-w)*_;f(w+D),h&&!A&&u()&&(_*=S6,Zt(D)<v6&&p(c(u(!0)),x6,!1,g,!0))}function M(){d&&d.cancel()}function L(){d&&!d.isPaused()&&(M(),E())}function P(R){var I=t.easingFunc;return I?I(R):1-Math.pow(1-R,4)}return{mount:m,destroy:M,scroll:p,cancel:L}}var Br={passive:!1,capture:!0};function C6(n,e,t){var i=yt(n),r=i.on,s=i.emit,o=i.bind,a=i.unbind,l=n.state,c=e.Move,u=e.Scroll,f=e.Controller,h=e.Elements.track,d=e.Media.reduce,g=e.Direction,_=g.resolve,m=g.orient,p=c.getPosition,E=c.exceededLimit,S,M,L,P,R,I=!1,A,y,w;function U(){o(h,tc,ou,Br),o(h,nc,ou,Br),o(h,Sp,G,Br),o(h,"click",q,{capture:!0}),o(h,"dragstart",Qn),r([Gi,Gt],D)}function D(){var C=t.drag;ze(!C),P=C==="free"}function G(C){if(A=!1,!y){var v=le(C);ae(C.target)&&(v||!C.button)&&(f.isBusy()?Qn(C,!0):(w=v?h:window,R=l.is([fs,uo]),L=null,o(w,tc,W,Br),o(w,nc,$,Br),c.cancel(),u.cancel(),O(C)))}}function W(C){if(l.is(fa)||(l.set(fa),s(J2)),C.cancelable)if(R){c.translate(S+re(ie(C)));var v=ge(C)>Lh,k=I!==(I=E());(v||k)&&O(C),A=!0,s(Q2),Qn(C)}else ue(C)&&(R=K(C),Qn(C))}function $(C){l.is(fa)&&(l.set(os),s(ep)),R&&(se(C),Qn(C)),a(w,tc,W),a(w,nc,$),R=!1}function q(C){!y&&A&&Qn(C,!0)}function O(C){L=M,M=C,S=p()}function se(C){var v=Ee(C),k=Oe(v),ne=t.rewind&&t.rewindByDrag;d(!1),P?f.scroll(k,0,t.snap):n.is(vo)?f.go(m(lu(v))<0?ne?"<":"-":ne?">":"+"):n.is(ls)&&I&&ne?f.go(E(!0)?">":"<"):f.go(f.toDest(k),!0),d(!0)}function K(C){var v=t.dragMinThreshold,k=Zs(v),ne=k&&v.mouse||0,j=(k?v.touch:+v)||10;return Zt(ie(C))>(le(C)?j:ne)}function ue(C){return Zt(ie(C))>Zt(ie(C,!0))}function Ee(C){if(n.is(ds)||!I){var v=ge(C);if(v&&v<Lh)return ie(C)/v}return 0}function Oe(C){return p()+lu(C)*Oi(Zt(C)*(t.flickPower||600),P?1/0:e.Layout.listSize()*(t.flickMaxPages||1))}function ie(C,v){return N(C,v)-N(J(C),v)}function ge(C){return au(C)-au(J(C))}function J(C){return M===C&&L||M}function N(C,v){return(le(C)?C.changedTouches[0]:C)["page"+_(v?"Y":"X")]}function re(C){return C/(I&&n.is(ls)?i6:1)}function ae(C){var v=t.noDrag;return!Ks(C,"."+mp+", ."+tl)&&(!v||!Ks(C,v))}function le(C){return typeof TouchEvent<"u"&&C instanceof TouchEvent}function Ne(){return R}function ze(C){y=C}return{mount:U,disable:ze,isDragging:Ne}}var T6={Spacebar:" ",Right:Ja,Left:ja,Up:lp,Down:cp};function m0(n){return n=Fi(n)?n:n.key,T6[n]||n}var Ih="keydown";function A6(n,e,t){var i=yt(n),r=i.on,s=i.bind,o=i.unbind,a=n.root,l=e.Direction.resolve,c,u;function f(){h(),r(Gt,d),r(Gt,h),r(fi,_)}function h(){var p=t.keyboard;p&&(c=p==="global"?window:a,s(c,Ih,m))}function d(){o(c,Ih)}function g(p){u=p}function _(){var p=u;u=!0,H2(function(){u=p})}function m(p){if(!u){var E=m0(p);E===l(ja)?n.go("<"):E===l(Ja)&&n.go(">")}}return{mount:f,destroy:d,disable:g}}var Os=i0+"-lazy",pa=Os+"-srcset",b6="["+Os+"], ["+pa+"]";function w6(n,e,t){var i=yt(n),r=i.on,s=i.off,o=i.bind,a=i.emit,l=t.lazyLoad==="sequential",c=[hs,Sr],u=[];function f(){t.lazyLoad&&(h(),r(At,h))}function h(){ui(u),d(),l?p():(s(c),r(c,g),g())}function d(){e.Slides.forEach(function(E){n0(E.slide,b6).forEach(function(S){var M=bn(S,Os),L=bn(S,pa);if(M!==S.src||L!==S.srcset){var P=t.classes.spinner,R=S.parentElement,I=mo(R,"."+P)||Yr("span",P,R);u.push([S,E,I]),S.src||Qs(S,"none")}})})}function g(){u=u.filter(function(E){var S=t.perPage*((t.preloadPages||1)+1)-1;return E[1].isWithin(n.index,S)?_(E):!0}),u.length||s(c)}function _(E){var S=E[0];Vn(E[1].slide,fu),o(S,"load error",ht(m,E)),Ze(S,"src",bn(S,Os)),Ze(S,"srcset",bn(S,pa)),kn(S,Os),kn(S,pa)}function m(E,S){var M=E[0],L=E[1];ri(L.slide,fu),S.type!=="error"&&(gr(E[2]),Qs(M,""),a(u0,M,L),a(as)),l&&p()}function p(){u.length&&_(u.shift())}return{mount:f,destroy:ht(ui,u),check:g}}function R6(n,e,t){var i=yt(n),r=i.on,s=i.emit,o=i.bind,a=e.Slides,l=e.Elements,c=e.Controller,u=c.hasFocus,f=c.getIndex,h=c.go,d=e.Direction.resolve,g=l.pagination,_=[],m,p;function E(){S(),r([Gt,At,Ra],E);var y=t.pagination;g&&Qs(g,y?"":"none"),y&&(r([fi,Ya,Sr],A),M(),A(),s(ip,{list:m,items:_},I(n.index)))}function S(){m&&(gr(g?ki(m.children):m),ri(m,p),ui(_),m=null),i.destroy()}function M(){var y=n.length,w=t.classes,U=t.i18n,D=t.perPage,G=u()?c.getEnd()+1:eo(y/D);m=g||Yr("ul",w.pagination,l.track.parentElement),Vn(m,p=nl+"--"+R()),Ze(m,ai,"tablist"),Ze(m,mn,U.select),Ze(m,h0,R()===Qa?"vertical":"");for(var W=0;W<G;W++){var $=Yr("li",null,m),q=Yr("button",{class:w.page,type:"button"},$),O=a.getIn(W).map(function(K){return K.slide.id}),se=!u()&&D>1?U.pageX:U.slideX;o(q,"click",ht(L,W)),t.paginationKeyboard&&o(q,"keydown",ht(P,W)),Ze($,ai,"presentation"),Ze(q,ai,"tab"),Ze(q,_o,O.join(" ")),Ze(q,mn,cu(se,W+1)),Ze(q,Zr,-1),_.push({li:$,button:q,page:W})}}function L(y){h(">"+y,!0)}function P(y,w){var U=_.length,D=m0(w),G=R(),W=-1;D===d(Ja,!1,G)?W=++y%U:D===d(ja,!1,G)?W=(--y+U)%U:D==="Home"?W=0:D==="End"&&(W=U-1);var $=_[W];$&&(G2($.button),h(">"+W),Qn(w,!0))}function R(){return t.paginationDirection||t.direction}function I(y){return _[c.toPage(y)]}function A(){var y=I(f(!0)),w=I(f());if(y){var U=y.button;ri(U,_r),kn(U,Ah),Ze(U,Zr,-1)}if(w){var D=w.button;Vn(D,_r),Ze(D,Ah,!0),Ze(D,Zr,"")}s(rp,{list:m,items:_},y,w)}return{items:_,mount:E,destroy:S,getAt:I,update:A}}var P6=[" ","Enter"];function L6(n,e,t){var i=t.isNavigation,r=t.slideFocus,s=[];function o(){n.splides.forEach(function(g){g.isParent||(c(n,g.splide),c(g.splide,n))}),i&&u()}function a(){s.forEach(function(g){g.destroy()}),ui(s)}function l(){a(),o()}function c(g,_){var m=yt(g);m.on(fi,function(p,E,S){_.go(_.is(ds)?S:p)}),s.push(m)}function u(){var g=yt(n),_=g.on;_(s0,h),_(op,d),_([Gi,Gt],f),s.push(g),g.emit(a0,n.splides)}function f(){Ze(e.Elements.list,h0,t.direction===Qa?"vertical":"")}function h(g){n.go(g.index)}function d(g,_){e0(P6,m0(_))&&(h(g),Qn(_))}return{setup:ht(e.Media.set,{slideFocus:fo(r)?i:r},!0),mount:o,destroy:a,remount:l}}function I6(n,e,t){var i=yt(n),r=i.bind,s=0;function o(){t.wheel&&r(e.Elements.track,"wheel",a,Br)}function a(c){if(c.cancelable){var u=c.deltaY,f=u<0,h=au(c),d=t.wheelMinThreshold||0,g=t.wheelSleep||0;Zt(u)>d&&h-s>g&&(n.go(f?"<":">"),s=h),l(f)&&Qn(c)}}function l(c){return!t.releaseWheel||n.state.is(fs)||e.Controller.getAdjacent(c)!==-1}return{mount:o}}var D6=90;function U6(n,e,t){var i=yt(n),r=i.on,s=e.Elements.track,o=t.live&&!t.isNavigation,a=Yr("span",Jy),l=Za(D6,ht(u,!1));function c(){o&&(h(!e.Autoplay.isPaused()),Ze(s,Rh,!0),a.textContent="…",r(l0,ht(h,!0)),r(c0,ht(h,!1)),r([hs,Sr],ht(u,!0)))}function u(d){Ze(s,wh,d),d?(po(s,a),l.start()):(gr(a),l.cancel())}function f(){kn(s,[bh,Rh,wh]),gr(a)}function h(d){o&&Ze(s,bh,d?"off":"polite")}return{mount:c,disable:h,destroy:f}}var N6=Object.freeze({__proto__:null,Media:Gy,Direction:Wy,Elements:r6,Slides:o6,Layout:a6,Clones:c6,Move:u6,Controller:f6,Arrows:p6,Autoplay:g6,Cover:_6,Scroll:E6,Drag:C6,Keyboard:A6,LazyLoad:w6,Pagination:R6,Sync:L6,Wheel:I6,Live:U6}),F6={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},O6={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:t6,i18n:F6,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function B6(n,e,t){var i=e.Slides;function r(){yt(n).on([Gi,At],s)}function s(){i.forEach(function(a){a.style("transform","translateX(-"+100*a.index+"%)")})}function o(a,l){i.style("transition","opacity "+t.speed+"ms "+t.easing),H2(l)}return{mount:r,start:o,cancel:ou}}function H6(n,e,t){var i=e.Move,r=e.Controller,s=e.Scroll,o=e.Elements.list,a=ht(yn,o,"transition"),l;function c(){yt(n).bind(o,"transitionend",function(d){d.target===o&&l&&(f(),l())})}function u(d,g){var _=i.toPosition(d,!0),m=i.getPosition(),p=h(d);Zt(_-m)>=1&&p>=1?t.useScroll?s.scroll(_,p,!1,g):(a("transform "+p+"ms "+t.easing),i.translate(_,!0),l=g):(i.jump(d),g())}function f(){a(""),s.cancel()}function h(d){var g=t.rewindSpeed;if(n.is(ls)&&g){var _=r.getIndex(!0),m=r.getEnd();if(_===0&&d>=m||_>=m&&d===0)return g}return t.speed}return{mount:c,start:u,cancel:f}}var z6=function(){function n(t,i){this.event=yt(),this.Components={},this.state=Vy(zr),this.splides=[],this._o={},this._E={};var r=Fi(t)?X2(document,t):t;Fs(r,r+" is invalid."),this.root=r,i=Ai({label:bn(r,mn)||"",labelledby:bn(r,f0)||""},O6,n.defaults,i||{});try{Ai(i,JSON.parse(bn(r,i0)))}catch{Fs(!1,"Invalid JSON")}this._o=Object.create(Ai({},i))}var e=n.prototype;return e.mount=function(i,r){var s=this,o=this.state,a=this.Components;Fs(o.is([zr,Aa]),"Already mounted!"),o.set(zr),this._C=a,this._T=r||this._T||(this.is(vo)?B6:H6),this._E=i||this._E;var l=Js({},N6,this._E,{Transition:this._T});return hr(l,function(c,u){var f=c(s,a,s._o);a[u]=f,f.setup&&f.setup()}),hr(a,function(c){c.mount&&c.mount()}),this.emit(Gi),Vn(this.root,Qy),o.set(os),this.emit(Ch),this},e.sync=function(i){return this.splides.push({splide:i}),i.splides.push({splide:this,isParent:!0}),this.state.is(os)&&(this._C.Sync.remount(),i.Components.Sync.remount()),this},e.go=function(i){return this._C.Controller.go(i),this},e.on=function(i,r){return this.event.on(i,r),this},e.off=function(i){return this.event.off(i),this},e.emit=function(i){var r;return(r=this.event).emit.apply(r,[i].concat(ki(arguments,1))),this},e.add=function(i,r){return this._C.Slides.add(i,r),this},e.remove=function(i){return this._C.Slides.remove(i),this},e.is=function(i){return this._o.type===i},e.refresh=function(){return this.emit(At),this},e.destroy=function(i){i===void 0&&(i=!0);var r=this.event,s=this.state;return s.is(zr)?yt(this).on(Ch,this.destroy.bind(this,i)):(hr(this._C,function(o){o.destroy&&o.destroy(i)},!0),r.emit(o0),r.destroy(),i&&ui(this.splides),s.set(Aa)),this},Fy(n,[{key:"options",get:function(){return this._o},set:function(i){this._C.Media.set(i,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),n}(),g0=z6;g0.defaults={};g0.STATES=By;const Dh=[Y2,tp,np,c0,l0,sp,s0,o0,J2,ep,Q2,j2,Z2,u0,Gi,fi,hs,a0,ip,rp,At,as,qa,Ya,Sr,Gt,K2],Mp="splide";function Uh(n){return n!==null&&typeof n=="object"}function V6(n,e){if(n){const t=Object.keys(n);for(let i=0;i<t.length;i++){const r=t[i];if(r!=="__proto__"&&e(n[r],r)===!1)break}}return n}function yp(n,e){const t=n;return V6(e,(i,r)=>{Array.isArray(i)?t[r]=i.slice():Uh(i)?t[r]=yp(Uh(t[r])?t[r]:{},i):t[r]=i}),t}const k6=no({name:"SplideTrack",setup(){_d(()=>{var n;const e=Bn(Mp);(n=e==null?void 0:e.value)==null||n.refresh()})}}),_0=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},G6={class:"splide__track"},W6={class:"splide__list"};function X6(n,e,t,i,r,s){return Ke(),nt("div",G6,[ve("ul",W6,[ga(n.$slots,"default")])])}const Ep=_0(k6,[["render",X6]]),$6=no({name:"Splide",emits:Dh.map(n=>`splide:${n}`),components:{SplideTrack:Ep},props:{tag:{default:"div",type:String},options:{default:{},type:Object},extensions:Object,transition:Function,hasTrack:{default:!0,type:Boolean}},setup(n,e){const t=Cn(),i=Cn();Vi(()=>{i.value&&(t.value=new g0(i.value,n.options),l(t.value),t.value.mount(n.extensions,n.transition))}),Ha(()=>{var c;(c=t.value)==null||c.destroy()}),Ls(()=>yp({},n.options),c=>{t.value&&(t.value.options=c)},{deep:!0}),Ps(Mp,t);const r=sn(()=>{var c;return((c=t.value)==null?void 0:c.index)||0}),s=sn(()=>{var c;return((c=t.value)==null?void 0:c.length)||0});function o(c){var u;(u=t.value)==null||u.go(c)}function a(c){var u;(u=t.value)==null||u.sync(c)}function l(c){Dh.forEach(u=>{c.on(u,(...f)=>{e.emit(`splide:${u}`,c,...f)})})}return{splide:t,root:i,index:r,length:s,go:o,sync:a}}});function q6(n,e,t,i,r,s){const o=Ru("SplideTrack");return Ke(),Ri(Rm(n.tag),{class:"splide",ref:"root"},{default:Wr(()=>[n.hasTrack?(Ke(),Ri(o,{key:0},{default:Wr(()=>[ga(n.$slots,"default")]),_:3})):ga(n.$slots,"default",{key:1})]),_:3},512)}const hu=_0($6,[["render",q6]]),Y6=no({name:"SplideSlide"}),Z6={class:"splide__slide"};function K6(n,e,t,i,r,s){return Ke(),nt("li",Z6,[ga(n.$slots,"default")])}const du=_0(Y6,[["render",K6]]),j6={install(n){n.component(hu.name,hu),n.component(du.name,du)}},J6={id:"experiences"},Q6=ve("h2",{class:"title",id:"experiencestitle"},"Experiences",-1),eE={class:"company"},tE={class:"techs"},nE={class:"experiences experiences__mobile"},iE={__name:"Experiences",setup(n){const e={perPage:1,type:"loop",pagination:!1,rewindByDrag:!0,fixedWidth:"70rem",arrowPath:"M16.8929 13.6928C17.2834 13.3023 17.9166 13.3023 18.3071 13.6928L23.9071 19.2928C24.0946 19.4803 24.2 19.7347 24.2 19.9999C24.2 20.2651 24.0946 20.5195 23.9071 20.707L18.3071 26.307C17.9166 26.6975 17.2834 26.6975 16.8929 26.307C16.5023 25.9165 16.5023 25.2833 16.8929 24.8928L21.7858 19.9999L16.8929 15.107C16.5023 14.7165 16.5023 14.0833 16.8929 13.6928Z"},t=[{time:"october 2024 - today",title:"Senior Web Developer",company:"Freelance",doings:["Reduced API call times by an average of 80% through advanced data prefetching, query optimization, and custom caching policies.","Boosted Core Web Vitals by adding skeleton loaders, lazy loading, and pagination for large datasets.","Integrated responsive PDF viewer with mobile optimization for smoother user access.","Created reusable React component libraries using Context API and Hooks.","Automated WordPress deployments to Vercel, enabling instant content updates after key changes.","Engineered custom Gutenberg blocks and advanced ACF setups for modular, flexible content editing.","Enhanced app integrations ( chatbot, UTM tracking, VWO A/B tests) and implemented structured SEO strategies including meta tags and rich schema.","Implemented secure CI/CD pipelines with GitHub Actions."]},{time:"july 2024 - october 2024",title:"Web Developer",company:"Mosyle ( Assetbots )",doings:["Built component-based UIs aligned with Figma designs using MUI and Styled Components.","Added features and enhancements to core interfaces using TypeScript and React.","Implemented and Improved A/B tests to measure UX changes and guide product improvements.","Upgraded backend APIs to support interactive features and secure data handling."]},{time:"april 2024 - october 2024",title:"Web Developer Freelance",company:"WKode",doings:["Built modular WordPress themes and custom ACF/Gutenberg blocks enabling flexible content management for 30+ websites.","Engineered custom Gutenberg blocks using React, TypeScript, and WordPress REST API for dynamic content editing.","Led development of headless architectures integrating WPGraphQL and microfrontend SPAs with React.","Built scalable component libraries using Hooks and Context API, improving developer efficiency.","Implemented secure CI/CD pipelines with GitHub Actions and Docker.","Improved performance and maintainability for headless WordPress SPAs with microfrontend architectures.","Integrated secure authentication using OAuth and built APIs with Express.js and GoLang ( Gin ).","Enhanced SEO with SSR, schema markup, and Lighthouse audits."]},{time:"april 2021 - april 2024",title:"Web Developer & UI/UX Designer",company:"JettaCargo",doings:["Built a 3D editor UI modeled after Blender, improving usability for customized cargo planning.","Created a microservice to dynamically generate PDF cargo reports, offering API-first users report access.","Designed and integrated a full onboarding tutorial system, reducing user drop-off during first-time interactions.","Led a complete UI/UX redesign of the company’s core web app for a more modern and intuitive interface.","Rebuilt corporate website in Nuxt.js, focusing on SEO and responsive UX.","Upgraded backend APIs to support interactive features and secure data handling.","Created reusable Vue component libraries, improving Component-Based architecture on the main webapp.","Implemented a custom chatbot and support ticket integration within the webapp."]},{time:"march 2020 - april 2021",title:"Front End Wordpress Developer",company:"Escritolândia",doings:["Designed and developed a custom e-commerce website from scratch using WordPress and WooCommerce.","Built a fully custom theme with a UI inspired by MercadoLivre and Amazon, optimized for conversion and speed.","Engineered dynamic Gutenberg blocks and ACF layouts to allow flexible content and product management.","Developed an integration between the website and the company’s internal system to sync product data and pricing in real time.","Implemented secure payment APIs to support various checkout flows.","Created icon fonts to reduce HTTP requests and improve overall load performance.","Led SEO strategies like schema markup, optimized image formats, improved loading speed, and structured internal links.","Set up tracking and behavior analytics using Google Analytics and Google Search Console to optimize product visibility.","Designed marketing materials and product images using Adobe tools.","Managed cloud infrastructure and DNS configurations, ensuring uptime and scalability.","Launched and monitored promotional campaigns with automated discounts and banners."]}];return(i,r)=>{const s=Ru("Technology");return Ke(),nt("section",J6,[Q6,_t(st(hu),{class:"experiences experiences__desktop",options:e,"has-track":!1,"aria-labelledby":"#experiencestitle"},{default:Wr(()=>[_t(st(Ep),null,{default:Wr(()=>[(Ke(),nt(ut,null,Yt(t,(o,a)=>_t(st(du),{class:"experience",key:`experience${a}`},{default:Wr(()=>[ve("p",null,qt(o.time),1),ve("h4",null,[Jr(qt(o.title)+",",1),ve("span",eE,qt(" "+o.company),1)]),ve("div",tE,[(Ke(!0),nt(ut,null,Yt(o.techs,(l,c)=>(Ke(),Ri(s,{key:`tech-${c}`,technology:l},null,8,["technology"]))),128))]),ve("ul",null,[(Ke(!0),nt(ut,null,Yt(o.doings,l=>(Ke(),nt("li",null,qt(l),1))),256))])]),_:2},1024)),64))]),_:1})]),_:1}),ve("div",nE,[(Ke(),nt(ut,null,Yt(t,(o,a)=>ve("div",{class:"experience is-active",key:`experience${a}`},[ve("p",null,qt(o.time),1),ve("h4",null,qt(o.title),1),ve("ul",null,[(Ke(!0),nt(ut,null,Yt(o.doings,l=>(Ke(),nt("li",null,qt(l),1))),256))])])),64))])])}}},rE={__name:"Home",setup(n){return(e,t)=>(Ke(),nt(ut,null,[_t(jM),_t(Uy),_t(fy),_t(iE)],64))}},sE=[{path:"/",component:rE}],oE=f1({history:H_(),routes:sE});W3(u_).use(oE).use(j6).mount("body");
