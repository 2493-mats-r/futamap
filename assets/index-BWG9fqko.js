const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PokeFutaView-Kd2Hqd5X.js","assets/PokeFutaView-lI4pRDSR.css","assets/SignIn-CBdiUge4.js","assets/SignIn-516qQ7XX.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.2
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ms(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Z={},Yt=[],He=()=>{},dl=()=>!1,Tr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),xs=t=>t.startsWith("onUpdate:"),ae=Object.assign,Ls=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hl=Object.prototype.hasOwnProperty,J=(t,e)=>hl.call(t,e),U=Array.isArray,Xt=t=>jn(t)==="[object Map]",Rr=t=>jn(t)==="[object Set]",gi=t=>jn(t)==="[object Date]",H=t=>typeof t=="function",ie=t=>typeof t=="string",Ke=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",Wo=t=>(ne(t)||H(t))&&H(t.then)&&H(t.catch),Ko=Object.prototype.toString,jn=t=>Ko.call(t),pl=t=>jn(t).slice(8,-1),zo=t=>jn(t)==="[object Object]",Us=t=>ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,In=Ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gl=/-(\w)/g,Ut=Cr(t=>t.replace(gl,(e,n)=>n?n.toUpperCase():"")),ml=/\B([A-Z])/g,Ht=Cr(t=>t.replace(ml,"-$1").toLowerCase()),Go=Cr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vr=Cr(t=>t?`on${Go(t)}`:""),St=(t,e)=>!Object.is(t,e),ir=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},qo=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},us=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mi;const Jo=()=>mi||(mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fs(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ie(r)?bl(r):Fs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ie(t)||ne(t))return t}const _l=/;(?![^(]*\))/g,vl=/:([^]+)/,yl=/\/\*[^]*?\*\//g;function bl(t){const e={};return t.replace(yl,"").split(_l).forEach(n=>{if(n){const r=n.split(vl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Bs(t){let e="";if(ie(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=Bs(t[n]);r&&(e+=r+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const El="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wl=Ms(El);function Yo(t){return!!t||t===""}function Il(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=on(t[r],e[r]);return n}function on(t,e){if(t===e)return!0;let n=gi(t),r=gi(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ke(t),r=Ke(e),n||r)return t===e;if(n=U(t),r=U(e),n||r)return n&&r?Il(t,e):!1;if(n=ne(t),r=ne(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(c&&!a||!c&&a||!on(t[o],e[o]))return!1}}return String(t)===String(e)}function Xo(t,e){return t.findIndex(n=>on(n,e))}const Qo=t=>!!(t&&t.__v_isRef===!0),Sl=t=>ie(t)?t:t==null?"":U(t)||ne(t)&&(t.toString===Ko||!H(t.toString))?Qo(t)?Sl(t.value):JSON.stringify(t,Zo,2):String(t),Zo=(t,e)=>Qo(e)?Zo(t,e.value):Xt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Wr(r,i)+" =>"]=s,n),{})}:Rr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wr(n))}:Ke(e)?Wr(e):ne(e)&&!U(e)&&!zo(e)?String(e):e,Wr=(t,e="")=>{var n;return Ke(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.2
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let we;class ea{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=we,!e&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=we;try{return we=this,e()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Tl(t){return new ea(t)}function Rl(){return we}let X;const Kr=new WeakSet;class ta{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,we&&we.active&&we.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Kr.has(this)&&(Kr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=Sn,Sn=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_i(this),ra(this);const e=X,n=ke;X=this,ke=!0;try{return this.fn()}finally{sa(this),X=e,ke=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)js(e);this.deps=this.depsTail=void 0,_i(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Kr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fs(this)&&this.run()}get dirty(){return fs(this)}}let na=0,Sn;function $s(){na++}function Hs(){if(--na>0)return;let t;for(;Sn;){let e=Sn;for(Sn=void 0;e;){const n=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ra(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sa(t){let e,n=t.depsTail;for(let r=n;r;r=r.prevDep)r.version===-1?(r===n&&(n=r.prevDep),js(r),Cl(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;t.deps=e,t.depsTail=n}function fs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&ia(e.dep.computed)===!1||e.dep.version!==e.version)return!0;return!!t._dirty}function ia(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===kn))return;t.globalVersion=kn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!fs(t)){t.flags&=-3;return}const n=X,r=ke;X=t,ke=!0;try{ra(t);const s=t.fn(t._value);(e.version===0||St(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{X=n,ke=r,sa(t),t.flags&=-3}}function js(t){const{dep:e,prevSub:n,nextSub:r}=t;if(n&&(n.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=n,t.nextSub=void 0),e.subs===t&&(e.subs=n),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)js(s)}}function Cl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ke=!0;const oa=[];function Tt(){oa.push(ke),ke=!1}function Rt(){const t=oa.pop();ke=t===void 0?!0:t}function _i(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=X;X=void 0;try{e()}finally{X=n}}}let kn=0;class Vs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!X||!ke||X===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==X)n=this.activeLink={dep:this,sub:X,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},X.deps?(n.prevDep=X.depsTail,X.depsTail.nextDep=n,X.depsTail=n):X.deps=X.depsTail=n,X.flags&4&&aa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=X.depsTail,n.nextDep=void 0,X.depsTail.nextDep=n,X.depsTail=n,X.deps===n&&(X.deps=r)}return n}trigger(e){this.version++,kn++,this.notify(e)}notify(e){$s();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{Hs()}}}function aa(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)aa(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const ds=new WeakMap,xt=Symbol(""),hs=Symbol(""),Nn=Symbol("");function ue(t,e,n){if(ke&&X){let r=ds.get(t);r||ds.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=new Vs),s.track()}}function rt(t,e,n,r,s,i){const o=ds.get(t);if(!o){kn++;return}let c=[];if(e==="clear")c=[...o.values()];else{const a=U(t),f=a&&Us(n);if(a&&n==="length"){const l=Number(r);o.forEach((h,p)=>{(p==="length"||p===Nn||!Ke(p)&&p>=l)&&c.push(h)})}else{const l=h=>h&&c.push(h);switch(n!==void 0&&l(o.get(n)),f&&l(o.get(Nn)),e){case"add":a?f&&l(o.get("length")):(l(o.get(xt)),Xt(t)&&l(o.get(hs)));break;case"delete":a||(l(o.get(xt)),Xt(t)&&l(o.get(hs)));break;case"set":Xt(t)&&l(o.get(xt));break}}}$s();for(const a of c)a.trigger();Hs()}function zt(t){const e=K(t);return e===t?e:(ue(e,"iterate",Nn),Ne(t)?e:e.map(ce))}function Ar(t){return ue(t=K(t),"iterate",Nn),t}const Al={__proto__:null,[Symbol.iterator](){return zr(this,Symbol.iterator,ce)},concat(...t){return zt(this).concat(...t.map(e=>U(e)?zt(e):e))},entries(){return zr(this,"entries",t=>(t[1]=ce(t[1]),t))},every(t,e){return qe(this,"every",t,e,void 0,arguments)},filter(t,e){return qe(this,"filter",t,e,n=>n.map(ce),arguments)},find(t,e){return qe(this,"find",t,e,ce,arguments)},findIndex(t,e){return qe(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return qe(this,"findLast",t,e,ce,arguments)},findLastIndex(t,e){return qe(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return qe(this,"forEach",t,e,void 0,arguments)},includes(...t){return Gr(this,"includes",t)},indexOf(...t){return Gr(this,"indexOf",t)},join(t){return zt(this).join(t)},lastIndexOf(...t){return Gr(this,"lastIndexOf",t)},map(t,e){return qe(this,"map",t,e,void 0,arguments)},pop(){return _n(this,"pop")},push(...t){return _n(this,"push",t)},reduce(t,...e){return vi(this,"reduce",t,e)},reduceRight(t,...e){return vi(this,"reduceRight",t,e)},shift(){return _n(this,"shift")},some(t,e){return qe(this,"some",t,e,void 0,arguments)},splice(...t){return _n(this,"splice",t)},toReversed(){return zt(this).toReversed()},toSorted(t){return zt(this).toSorted(t)},toSpliced(...t){return zt(this).toSpliced(...t)},unshift(...t){return _n(this,"unshift",t)},values(){return zr(this,"values",ce)}};function zr(t,e,n){const r=Ar(t),s=r[e]();return r!==t&&!Ne(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Pl=Array.prototype;function qe(t,e,n,r,s,i){const o=Ar(t),c=o!==t&&!Ne(t),a=o[e];if(a!==Pl[e]){const h=a.apply(t,i);return c?ce(h):h}let f=n;o!==t&&(c?f=function(h,p){return n.call(this,ce(h),p,t)}:n.length>2&&(f=function(h,p){return n.call(this,h,p,t)}));const l=a.call(o,f,r);return c&&s?s(l):l}function vi(t,e,n,r){const s=Ar(t);let i=n;return s!==t&&(Ne(t)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,t)}):i=function(o,c,a){return n.call(this,o,ce(c),a,t)}),s[e](i,...r)}function Gr(t,e,n){const r=K(t);ue(r,"iterate",Nn);const s=r[e](...n);return(s===-1||s===!1)&&Gs(n[0])?(n[0]=K(n[0]),r[e](...n)):s}function _n(t,e,n=[]){Tt(),$s();const r=K(t)[e].apply(t,n);return Hs(),Rt(),r}const Ol=Ms("__proto__,__v_isRef,__isVue"),ca=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ke));function kl(t){Ke(t)||(t=String(t));const e=K(this);return ue(e,"has",t),e.hasOwnProperty(t)}class la{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Wl:ha:i?da:fa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=U(e);if(!s){let a;if(o&&(a=Al[n]))return a;if(n==="hasOwnProperty")return kl}const c=Reflect.get(e,n,le(e)?e:r);return(Ke(n)?ca.has(n):Ol(n))||(s||ue(e,"get",n),i)?c:le(c)?o&&Us(n)?c:c.value:ne(c)?s?ga(c):Or(c):c}}class ua extends la{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Ft(i);if(!Ne(r)&&!Ft(r)&&(i=K(i),r=K(r)),!U(e)&&le(i)&&!le(r))return a?!1:(i.value=r,!0)}const o=U(e)&&Us(n)?Number(n)<e.length:J(e,n),c=Reflect.set(e,n,r,le(e)?e:s);return e===K(s)&&(o?St(r,i)&&rt(e,"set",n,r):rt(e,"add",n,r)),c}deleteProperty(e,n){const r=J(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ke(n)||!ca.has(n))&&ue(e,"has",n),r}ownKeys(e){return ue(e,"iterate",U(e)?"length":xt),Reflect.ownKeys(e)}}class Nl extends la{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Dl=new ua,Ml=new Nl,xl=new ua(!0);const Ws=t=>t,Pr=t=>Reflect.getPrototypeOf(t);function Qn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(St(e,i)&&ue(s,"get",e),ue(s,"get",i));const{has:o}=Pr(s),c=r?Ws:n?qs:ce;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Zn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(St(t,s)&&ue(r,"has",t),ue(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function er(t,e=!1){return t=t.__v_raw,!e&&ue(K(t),"iterate",xt),Reflect.get(t,"size",t)}function yi(t,e=!1){!e&&!Ne(t)&&!Ft(t)&&(t=K(t));const n=K(this);return Pr(n).has.call(n,t)||(n.add(t),rt(n,"add",t,t)),this}function bi(t,e,n=!1){!n&&!Ne(e)&&!Ft(e)&&(e=K(e));const r=K(this),{has:s,get:i}=Pr(r);let o=s.call(r,t);o||(t=K(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?St(e,c)&&rt(r,"set",t,e):rt(r,"add",t,e),this}function Ei(t){const e=K(this),{has:n,get:r}=Pr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rt(e,"delete",t,void 0),i}function wi(){const t=K(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function tr(t,e){return function(r,s){const i=this,o=i.__v_raw,c=K(o),a=e?Ws:t?qs:ce;return!t&&ue(c,"iterate",xt),o.forEach((f,l)=>r.call(s,a(f),a(l),i))}}function nr(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Xt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,f=s[t](...r),l=n?Ws:e?qs:ce;return!e&&ue(i,"iterate",a?hs:xt),{next(){const{value:h,done:p}=f.next();return p?{value:h,done:p}:{value:c?[l(h[0]),l(h[1])]:l(h),done:p}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ll(){const t={get(i){return Qn(this,i)},get size(){return er(this)},has:Zn,add:yi,set:bi,delete:Ei,clear:wi,forEach:tr(!1,!1)},e={get(i){return Qn(this,i,!1,!0)},get size(){return er(this)},has:Zn,add(i){return yi.call(this,i,!0)},set(i,o){return bi.call(this,i,o,!0)},delete:Ei,clear:wi,forEach:tr(!1,!0)},n={get(i){return Qn(this,i,!0)},get size(){return er(this,!0)},has(i){return Zn.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:tr(!0,!1)},r={get(i){return Qn(this,i,!0,!0)},get size(){return er(this,!0)},has(i){return Zn.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:tr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=nr(i,!1,!1),n[i]=nr(i,!0,!1),e[i]=nr(i,!1,!0),r[i]=nr(i,!0,!0)}),[t,n,e,r]}const[Ul,Fl,Bl,$l]=Ll();function Ks(t,e){const n=e?t?$l:Bl:t?Fl:Ul;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(J(n,s)&&s in r?n:r,s,i)}const Hl={get:Ks(!1,!1)},jl={get:Ks(!1,!0)},Vl={get:Ks(!0,!1)};const fa=new WeakMap,da=new WeakMap,ha=new WeakMap,Wl=new WeakMap;function Kl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zl(t){return t.__v_skip||!Object.isExtensible(t)?0:Kl(pl(t))}function Or(t){return Ft(t)?t:zs(t,!1,Dl,Hl,fa)}function pa(t){return zs(t,!1,xl,jl,da)}function ga(t){return zs(t,!0,Ml,Vl,ha)}function zs(t,e,n,r,s){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=zl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Qt(t){return Ft(t)?Qt(t.__v_raw):!!(t&&t.__v_isReactive)}function Ft(t){return!!(t&&t.__v_isReadonly)}function Ne(t){return!!(t&&t.__v_isShallow)}function Gs(t){return t?!!t.__v_raw:!1}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function ma(t){return Object.isExtensible(t)&&qo(t,"__v_skip",!0),t}const ce=t=>ne(t)?Or(t):t,qs=t=>ne(t)?ga(t):t;function le(t){return t?t.__v_isRef===!0:!1}function _a(t){return va(t,!1)}function Gl(t){return va(t,!0)}function va(t,e){return le(t)?t:new ql(t,e)}class ql{constructor(e,n){this.dep=new Vs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:K(e),this._value=n?e:ce(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ne(e)||Ft(e);e=r?e:K(e),St(e,n)&&(this._rawValue=e,this._value=r?e:ce(e),this.dep.trigger())}}function Lt(t){return le(t)?t.value:t}const Jl={get:(t,e,n)=>e==="__v_raw"?t:Lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ya(t){return Qt(t)?t:new Proxy(t,Jl)}class Yl{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Vs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){this.flags|=16,X!==this&&this.dep.notify()}get value(){const e=this.dep.track();return ia(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xl(t,e,n=!1){let r,s;return H(t)?r=t:(r=t.get,s=t.set),new Yl(r,s,n)}const rr={},pr=new WeakMap;let Dt;function Ql(t,e=!1,n=Dt){if(n){let r=pr.get(n);r||pr.set(n,r=[]),r.push(t)}}function Zl(t,e,n=Z){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,f=O=>s?O:Ne(O)||s===!1||s===0?Qe(O,1):Qe(O);let l,h,p,m,C=!1,P=!1;if(le(t)?(h=()=>t.value,C=Ne(t)):Qt(t)?(h=()=>f(t),C=!0):U(t)?(P=!0,C=t.some(O=>Qt(O)||Ne(O)),h=()=>t.map(O=>{if(le(O))return O.value;if(Qt(O))return f(O);if(H(O))return a?a(O,2):O()})):H(t)?e?h=a?()=>a(t,2):t:h=()=>{if(p){Tt();try{p()}finally{Rt()}}const O=Dt;Dt=l;try{return a?a(t,3,[m]):t(m)}finally{Dt=O}}:h=He,e&&s){const O=h,j=s===!0?1/0:s;h=()=>Qe(O(),j)}const $=Rl(),x=()=>{l.stop(),$&&Ls($.effects,l)};if(i)if(e){const O=e;e=(...j)=>{O(...j),x()}}else{const O=h;h=()=>{O(),x()}}let N=P?new Array(t.length).fill(rr):rr;const M=O=>{if(!(!(l.flags&1)||!l.dirty&&!O))if(e){const j=l.run();if(s||C||(P?j.some((re,ee)=>St(re,N[ee])):St(j,N))){p&&p();const re=Dt;Dt=l;try{const ee=[j,N===rr?void 0:P&&N[0]===rr?[]:N,m];a?a(e,3,ee):e(...ee),N=j}finally{Dt=re}}}else l.run()};return c&&c(M),l=new ta(h),l.scheduler=o?()=>o(M,!1):M,m=O=>Ql(O,!1,l),p=l.onStop=()=>{const O=pr.get(l);if(O){if(a)a(O,4);else for(const j of O)j();pr.delete(l)}},e?r?M(!0):N=l.run():o?o(M.bind(null,!0),!0):l.run(),x.pause=l.pause.bind(l),x.resume=l.resume.bind(l),x.stop=x,x}function Qe(t,e=1/0,n){if(e<=0||!ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,le(t))Qe(t.value,e,n);else if(U(t))for(let r=0;r<t.length;r++)Qe(t[r],e,n);else if(Rr(t)||Xt(t))t.forEach(r=>{Qe(r,e,n)});else if(zo(t)){for(const r in t)Qe(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Qe(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.2
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vn(t,e,n,r){try{return r?t(...r):t()}catch(s){kr(s,e,n)}}function ze(t,e,n,r){if(H(t)){const s=Vn(t,e,n,r);return s&&Wo(s)&&s.catch(i=>{kr(i,e,n)}),s}if(U(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ze(t[i],e,n,r));return s}}function kr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Z;if(e){let c=e.parent;const a=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const l=c.ec;if(l){for(let h=0;h<l.length;h++)if(l[h](t,a,f)===!1)return}c=c.parent}if(i){Tt(),Vn(i,null,10,[t,a,f]),Rt();return}}eu(t,n,s,r,o)}function eu(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let Dn=!1,ps=!1;const he=[];let Be=0;const Zt=[];let ht=null,Gt=0;const ba=Promise.resolve();let Js=null;function Ea(t){const e=Js||ba;return t?e.then(this?t.bind(this):t):e}function tu(t){let e=Dn?Be+1:0,n=he.length;for(;e<n;){const r=e+n>>>1,s=he[r],i=Mn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ys(t){if(!(t.flags&1)){const e=Mn(t),n=he[he.length-1];!n||!(t.flags&2)&&e>=Mn(n)?he.push(t):he.splice(tu(e),0,t),t.flags|=1,wa()}}function wa(){!Dn&&!ps&&(ps=!0,Js=ba.then(Sa))}function nu(t){U(t)?Zt.push(...t):ht&&t.id===-1?ht.splice(Gt+1,0,t):t.flags&1||(Zt.push(t),t.flags|=1),wa()}function Ii(t,e,n=Dn?Be+1:0){for(;n<he.length;n++){const r=he[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;he.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function Ia(t){if(Zt.length){const e=[...new Set(Zt)].sort((n,r)=>Mn(n)-Mn(r));if(Zt.length=0,ht){ht.push(...e);return}for(ht=e,Gt=0;Gt<ht.length;Gt++){const n=ht[Gt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ht=null,Gt=0}}const Mn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sa(t){ps=!1,Dn=!0;try{for(Be=0;Be<he.length;Be++){const e=he[Be];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vn(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;Be<he.length;Be++){const e=he[Be];e&&(e.flags&=-2)}Be=0,he.length=0,Ia(),Dn=!1,Js=null,(he.length||Zt.length)&&Sa()}}let Ae=null,Ta=null;function gr(t){const e=Ae;return Ae=t,Ta=t&&t.type.__scopeId||null,e}function ru(t,e=Ae,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ki(-1);const i=gr(e);let o;try{o=t(...s)}finally{gr(i),r._d&&ki(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xm(t,e){if(Ae===null)return t;const n=Lr(Ae),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=Z]=e[s];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&Qe(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function kt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Tt(),ze(a,n,8,[t.el,c,t,e]),Rt())}}const su=Symbol("_vte"),iu=t=>t.__isTeleport;function Ra(t,e){t.shapeFlag&6&&t.component?Ra(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ca(t,e){return H(t)?ae({name:t.name},e,{setup:t}):t}function Aa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function gs(t,e,n,r,s=!1){if(U(t)){t.forEach((C,P)=>gs(C,e&&(U(e)?e[P]:e),n,r,s));return}if(Tn(r)&&!s)return;const i=r.shapeFlag&4?Lr(r.component):r.el,o=s?null:i,{i:c,r:a}=t,f=e&&e.r,l=c.refs===Z?c.refs={}:c.refs,h=c.setupState,p=K(h),m=h===Z?()=>!1:C=>J(p,C);if(f!=null&&f!==a&&(ie(f)?(l[f]=null,m(f)&&(h[f]=null)):le(f)&&(f.value=null)),H(a))Vn(a,c,12,[o,l]);else{const C=ie(a),P=le(a);if(C||P){const $=()=>{if(t.f){const x=C?m(a)?h[a]:l[a]:a.value;s?U(x)&&Ls(x,i):U(x)?x.includes(i)||x.push(i):C?(l[a]=[i],m(a)&&(h[a]=l[a])):(a.value=[i],t.k&&(l[t.k]=a.value))}else C?(l[a]=o,m(a)&&(h[a]=o)):P&&(a.value=o,t.k&&(l[t.k]=o))};o?($.id=-1,Ee($,n)):$()}}}const Tn=t=>!!t.type.__asyncLoader,Pa=t=>t.type.__isKeepAlive;function ou(t,e){Oa(t,"a",e)}function au(t,e){Oa(t,"da",e)}function Oa(t,e,n=pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Nr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Pa(s.parent.vnode)&&cu(r,e,n,s),s=s.parent}}function cu(t,e,n,r){const s=Nr(e,t,r,!0);ka(()=>{Ls(r[e],s)},n)}function Nr(t,e,n=pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Tt();const c=Wn(n),a=ze(e,n,t,o);return c(),Rt(),a});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=pe)=>{(!xr||t==="sp")&&Nr(t,(...r)=>e(...r),n)},lu=at("bm"),uu=at("m"),fu=at("bu"),du=at("u"),hu=at("bum"),ka=at("um"),pu=at("sp"),gu=at("rtg"),mu=at("rtc");function _u(t,e=pe){Nr("ec",t,e)}const vu=Symbol.for("v-ndc");function Lm(t,e,n,r){let s;const i=n,o=U(t);if(o||ie(t)){const c=o&&Qt(t);c&&(t=Ar(t)),s=new Array(t.length);for(let a=0,f=t.length;a<f;a++)s[a]=e(c?ce(t[a]):t[a],a,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(ne(t))if(t[Symbol.iterator])s=Array.from(t,(c,a)=>e(c,a,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let a=0,f=c.length;a<f;a++){const l=c[a];s[a]=e(t[l],l,a,i)}}else s=[];return s}const ms=t=>t?ec(t)?Lr(t):ms(t.parent):null,Rn=ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ms(t.parent),$root:t=>ms(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Xs(t),$forceUpdate:t=>t.f||(t.f=()=>{Ys(t.update)}),$nextTick:t=>t.n||(t.n=Ea.bind(t.proxy)),$watch:t=>Bu.bind(t)}),qr=(t,e)=>t!==Z&&!t.__isScriptSetup&&J(t,e),yu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let f;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(qr(r,e))return o[e]=1,r[e];if(s!==Z&&J(s,e))return o[e]=2,s[e];if((f=t.propsOptions[0])&&J(f,e))return o[e]=3,i[e];if(n!==Z&&J(n,e))return o[e]=4,n[e];_s&&(o[e]=0)}}const l=Rn[e];let h,p;if(l)return e==="$attrs"&&ue(t.attrs,"get",""),l(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Z&&J(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,J(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return qr(s,e)?(s[e]=n,!0):r!==Z&&J(r,e)?(r[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Z&&J(t,o)||qr(e,o)||(c=i[0])&&J(c,o)||J(r,o)||J(Rn,o)||J(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Si(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _s=!0;function bu(t){const e=Xs(t),n=t.proxy,r=t.ctx;_s=!1,e.beforeCreate&&Ti(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:f,created:l,beforeMount:h,mounted:p,beforeUpdate:m,updated:C,activated:P,deactivated:$,beforeDestroy:x,beforeUnmount:N,destroyed:M,unmounted:O,render:j,renderTracked:re,renderTriggered:ee,errorCaptured:Te,serverPrefetch:_e,expose:Re,inheritAttrs:ct,components:Ot,directives:xe,filters:gn}=e;if(f&&Eu(f,r,null),o)for(const Y in o){const W=o[Y];H(W)&&(r[Y]=W.bind(n))}if(s){const Y=s.call(n,n);ne(Y)&&(t.data=Or(Y))}if(_s=!0,i)for(const Y in i){const W=i[Y],Ge=H(W)?W.bind(n,n):H(W.get)?W.get.bind(n,n):He,lt=!H(W)&&H(W.set)?W.set.bind(n):He,Le=Oe({get:Ge,set:lt});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Le.value,set:me=>Le.value=me})}if(c)for(const Y in c)Na(c[Y],r,n,Y);if(a){const Y=H(a)?a.call(n):a;Reflect.ownKeys(Y).forEach(W=>{or(W,Y[W])})}l&&Ti(l,t,"c");function oe(Y,W){U(W)?W.forEach(Ge=>Y(Ge.bind(n))):W&&Y(W.bind(n))}if(oe(lu,h),oe(uu,p),oe(fu,m),oe(du,C),oe(ou,P),oe(au,$),oe(_u,Te),oe(mu,re),oe(gu,ee),oe(hu,N),oe(ka,O),oe(pu,_e),U(Re))if(Re.length){const Y=t.exposed||(t.exposed={});Re.forEach(W=>{Object.defineProperty(Y,W,{get:()=>n[W],set:Ge=>n[W]=Ge})})}else t.exposed||(t.exposed={});j&&t.render===He&&(t.render=j),ct!=null&&(t.inheritAttrs=ct),Ot&&(t.components=Ot),xe&&(t.directives=xe),_e&&Aa(t)}function Eu(t,e,n=He){U(t)&&(t=vs(t));for(const r in t){const s=t[r];let i;ne(s)?"default"in s?i=je(s.from||r,s.default,!0):i=je(s.from||r):i=je(s),le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ti(t,e,n){ze(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Na(t,e,n,r){let s=r.includes(".")?za(n,r):()=>n[r];if(ie(t)){const i=e[t];H(i)&&ar(s,i)}else if(H(t))ar(s,t.bind(n));else if(ne(t))if(U(t))t.forEach(i=>Na(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&ar(s,i,t)}}function Xs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(f=>mr(a,f,o,!0)),mr(a,e,o)),ne(e)&&i.set(e,a),a}function mr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&mr(t,i,n,!0),s&&s.forEach(o=>mr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=wu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const wu={data:Ri,props:Ci,emits:Ci,methods:bn,computed:bn,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:bn,directives:bn,watch:Su,provide:Ri,inject:Iu};function Ri(t,e){return e?t?function(){return ae(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Iu(t,e){return bn(vs(t),vs(e))}function vs(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function bn(t,e){return t?ae(Object.create(null),t,e):e}function Ci(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:ae(Object.create(null),Si(t),Si(e??{})):e}function Su(t,e){if(!t)return e;if(!e)return t;const n=ae(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function Da(){return{app:null,config:{isNativeTag:dl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tu=0;function Ru(t,e){return function(r,s=null){H(r)||(r=ae({},r)),s!=null&&!ne(s)&&(s=null);const i=Da(),o=new WeakSet,c=[];let a=!1;const f=i.app={_uid:Tu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:af,get config(){return i.config},set config(l){},use(l,...h){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(f,...h)):H(l)&&(o.add(l),l(f,...h))),f},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),f},component(l,h){return h?(i.components[l]=h,f):i.components[l]},directive(l,h){return h?(i.directives[l]=h,f):i.directives[l]},mount(l,h,p){if(!a){const m=f._ceVNode||Se(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(m,l):t(m,l,p),a=!0,f._container=l,l.__vue_app__=f,Lr(m.component)}},onUnmount(l){c.push(l)},unmount(){a&&(ze(c,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(l,h){return i.provides[l]=h,f},runWithContext(l){const h=en;en=f;try{return l()}finally{en=h}}};return f}}let en=null;function or(t,e){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[t]=e}}function je(t,e,n=!1){const r=pe||Ae;if(r||en){const s=en?en._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}const Ma={},xa=()=>Object.create(Ma),La=t=>Object.getPrototypeOf(t)===Ma;function Cu(t,e,n,r=!1){const s={},i=xa();t.propsDefaults=Object.create(null),Ua(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:pa(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Au(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=K(s),[a]=t.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let p=l[h];if(Dr(t.emitsOptions,p))continue;const m=e[p];if(a)if(J(i,p))m!==i[p]&&(i[p]=m,f=!0);else{const C=Ut(p);s[C]=ys(a,c,C,m,t,!1)}else m!==i[p]&&(i[p]=m,f=!0)}}}else{Ua(t,e,s,i)&&(f=!0);let l;for(const h in c)(!e||!J(e,h)&&((l=Ht(h))===h||!J(e,l)))&&(a?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=ys(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!J(e,h))&&(delete i[h],f=!0)}f&&rt(t.attrs,"set","")}function Ua(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(In(a))continue;const f=e[a];let l;s&&J(s,l=Ut(a))?!i||!i.includes(l)?n[l]=f:(c||(c={}))[l]=f:Dr(t.emitsOptions,a)||(!(a in r)||f!==r[a])&&(r[a]=f,o=!0)}if(i){const a=K(n),f=c||Z;for(let l=0;l<i.length;l++){const h=i[l];n[h]=ys(s,a,h,f[h],t,!J(f,h))}}return o}function ys(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=J(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&H(a)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const l=Wn(s);r=f[n]=a.call(null,e),l()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Ht(n))&&(r=!0))}return r}const Pu=new WeakMap;function Fa(t,e,n=!1){const r=n?Pu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!H(t)){const l=h=>{a=!0;const[p,m]=Fa(h,e,!0);ae(o,p),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!a)return ne(t)&&r.set(t,Yt),Yt;if(U(i))for(let l=0;l<i.length;l++){const h=Ut(i[l]);Ai(h)&&(o[h]=Z)}else if(i)for(const l in i){const h=Ut(l);if(Ai(h)){const p=i[l],m=o[h]=U(p)||H(p)?{type:p}:ae({},p),C=m.type;let P=!1,$=!0;if(U(C))for(let x=0;x<C.length;++x){const N=C[x],M=H(N)&&N.name;if(M==="Boolean"){P=!0;break}else M==="String"&&($=!1)}else P=H(C)&&C.name==="Boolean";m[0]=P,m[1]=$,(P||J(m,"default"))&&c.push(h)}}const f=[o,c];return ne(t)&&r.set(t,f),f}function Ai(t){return t[0]!=="$"&&!In(t)}const Ba=t=>t[0]==="_"||t==="$stable",Qs=t=>U(t)?t.map($e):[$e(t)],Ou=(t,e,n)=>{if(e._n)return e;const r=ru((...s)=>Qs(e(...s)),n);return r._c=!1,r},$a=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ba(s))continue;const i=t[s];if(H(i))e[s]=Ou(s,i,r);else if(i!=null){const o=Qs(i);e[s]=()=>o}}},Ha=(t,e)=>{const n=Qs(e);t.slots.default=()=>n},ja=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},ku=(t,e,n)=>{const r=t.slots=xa();if(t.vnode.shapeFlag&32){const s=e._;s?(ja(r,e,n),n&&qo(r,"_",s,!0)):$a(e,r)}else e&&Ha(t,e)},Nu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:ja(s,e,n):(i=!e.$stable,$a(e,s)),o=e}else e&&(Ha(t,e),o={default:1});if(i)for(const c in s)!Ba(c)&&o[c]==null&&delete s[c]},Ee=zu;function Du(t){return Mu(t)}function Mu(t,e){const n=Jo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:f,setElementText:l,parentNode:h,nextSibling:p,setScopeId:m=He,insertStaticContent:C}=t,P=(u,d,g,y=null,_=null,b=null,S=void 0,I=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!vn(u,d)&&(y=v(u),me(u,_,b,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:E,ref:L,shapeFlag:R}=d;switch(E){case Mr:$(u,d,g,y);break;case Bt:x(u,d,g,y);break;case Xr:u==null&&N(d,g,y,S);break;case Xe:Ot(u,d,g,y,_,b,S,I,w);break;default:R&1?j(u,d,g,y,_,b,S,I,w):R&6?xe(u,d,g,y,_,b,S,I,w):(R&64||R&128)&&E.process(u,d,g,y,_,b,S,I,w,k)}L!=null&&_&&gs(L,u&&u.ref,b,d||u,!d)},$=(u,d,g,y)=>{if(u==null)r(d.el=c(d.children),g,y);else{const _=d.el=u.el;d.children!==u.children&&f(_,d.children)}},x=(u,d,g,y)=>{u==null?r(d.el=a(d.children||""),g,y):d.el=u.el},N=(u,d,g,y)=>{[u.el,u.anchor]=C(u.children,d,g,y,u.el,u.anchor)},M=({el:u,anchor:d},g,y)=>{let _;for(;u&&u!==d;)_=p(u),r(u,g,y),u=_;r(d,g,y)},O=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},j=(u,d,g,y,_,b,S,I,w)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),u==null?re(d,g,y,_,b,S,I,w):_e(u,d,_,b,S,I,w)},re=(u,d,g,y,_,b,S,I)=>{let w,E;const{props:L,shapeFlag:R,transition:D,dirs:B}=u;if(w=u.el=o(u.type,b,L&&L.is,L),R&8?l(w,u.children):R&16&&Te(u.children,w,null,y,_,Jr(u,b),S,I),B&&kt(u,null,y,"created"),ee(w,u,u.scopeId,S,y),L){for(const te in L)te!=="value"&&!In(te)&&i(w,te,null,L[te],b,y);"value"in L&&i(w,"value",null,L.value,b),(E=L.onVnodeBeforeMount)&&Fe(E,y,u)}B&&kt(u,null,y,"beforeMount");const V=xu(_,D);V&&D.beforeEnter(w),r(w,d,g),((E=L&&L.onVnodeMounted)||V||B)&&Ee(()=>{E&&Fe(E,y,u),V&&D.enter(w),B&&kt(u,null,y,"mounted")},_)},ee=(u,d,g,y,_)=>{if(g&&m(u,g),y)for(let b=0;b<y.length;b++)m(u,y[b]);if(_){let b=_.subTree;if(d===b||qa(b.type)&&(b.ssContent===d||b.ssFallback===d)){const S=_.vnode;ee(u,S,S.scopeId,S.slotScopeIds,_.parent)}}},Te=(u,d,g,y,_,b,S,I,w=0)=>{for(let E=w;E<u.length;E++){const L=u[E]=I?pt(u[E]):$e(u[E]);P(null,L,d,g,y,_,b,S,I)}},_e=(u,d,g,y,_,b,S)=>{const I=d.el=u.el;let{patchFlag:w,dynamicChildren:E,dirs:L}=d;w|=u.patchFlag&16;const R=u.props||Z,D=d.props||Z;let B;if(g&&Nt(g,!1),(B=D.onVnodeBeforeUpdate)&&Fe(B,g,d,u),L&&kt(d,u,g,"beforeUpdate"),g&&Nt(g,!0),(R.innerHTML&&D.innerHTML==null||R.textContent&&D.textContent==null)&&l(I,""),E?Re(u.dynamicChildren,E,I,g,y,Jr(d,_),b):S||W(u,d,I,null,g,y,Jr(d,_),b,!1),w>0){if(w&16)ct(I,R,D,g,_);else if(w&2&&R.class!==D.class&&i(I,"class",null,D.class,_),w&4&&i(I,"style",R.style,D.style,_),w&8){const V=d.dynamicProps;for(let te=0;te<V.length;te++){const G=V[te],ve=R[G],fe=D[G];(fe!==ve||G==="value")&&i(I,G,ve,fe,_,g)}}w&1&&u.children!==d.children&&l(I,d.children)}else!S&&E==null&&ct(I,R,D,g,_);((B=D.onVnodeUpdated)||L)&&Ee(()=>{B&&Fe(B,g,d,u),L&&kt(d,u,g,"updated")},y)},Re=(u,d,g,y,_,b,S)=>{for(let I=0;I<d.length;I++){const w=u[I],E=d[I],L=w.el&&(w.type===Xe||!vn(w,E)||w.shapeFlag&70)?h(w.el):g;P(w,E,L,null,y,_,b,S,!0)}},ct=(u,d,g,y,_)=>{if(d!==g){if(d!==Z)for(const b in d)!In(b)&&!(b in g)&&i(u,b,d[b],null,_,y);for(const b in g){if(In(b))continue;const S=g[b],I=d[b];S!==I&&b!=="value"&&i(u,b,I,S,_,y)}"value"in g&&i(u,"value",d.value,g.value,_)}},Ot=(u,d,g,y,_,b,S,I,w)=>{const E=d.el=u?u.el:c(""),L=d.anchor=u?u.anchor:c("");let{patchFlag:R,dynamicChildren:D,slotScopeIds:B}=d;B&&(I=I?I.concat(B):B),u==null?(r(E,g,y),r(L,g,y),Te(d.children||[],g,L,_,b,S,I,w)):R>0&&R&64&&D&&u.dynamicChildren?(Re(u.dynamicChildren,D,g,_,b,S,I),(d.key!=null||_&&d===_.subTree)&&Va(u,d,!0)):W(u,d,g,L,_,b,S,I,w)},xe=(u,d,g,y,_,b,S,I,w)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?_.ctx.activate(d,g,y,S,w):gn(d,g,y,_,b,S,w):Vt(u,d,w)},gn=(u,d,g,y,_,b,S)=>{const I=u.component=ef(u,y,_);if(Pa(u)&&(I.ctx.renderer=k),tf(I,!1,S),I.asyncDep){if(_&&_.registerDep(I,oe,S),!u.el){const w=I.subTree=Se(Bt);x(null,w,d,g)}}else oe(I,u,d,g,_,b,S)},Vt=(u,d,g)=>{const y=d.component=u.component;if(Wu(u,d,g))if(y.asyncDep&&!y.asyncResolved){Y(y,d,g);return}else y.next=d,y.update();else d.el=u.el,y.vnode=d},oe=(u,d,g,y,_,b,S)=>{const I=()=>{if(u.isMounted){let{next:R,bu:D,u:B,parent:V,vnode:te}=u;{const ye=Wa(u);if(ye){R&&(R.el=te.el,Y(u,R,S)),ye.asyncDep.then(()=>{u.isUnmounted||I()});return}}let G=R,ve;Nt(u,!1),R?(R.el=te.el,Y(u,R,S)):R=te,D&&ir(D),(ve=R.props&&R.props.onVnodeBeforeUpdate)&&Fe(ve,V,R,te),Nt(u,!0);const fe=Yr(u),Pe=u.subTree;u.subTree=fe,P(Pe,fe,h(Pe.el),v(Pe),u,_,b),R.el=fe.el,G===null&&Ku(u,fe.el),B&&Ee(B,_),(ve=R.props&&R.props.onVnodeUpdated)&&Ee(()=>Fe(ve,V,R,te),_)}else{let R;const{el:D,props:B}=d,{bm:V,m:te,parent:G,root:ve,type:fe}=u,Pe=Tn(d);if(Nt(u,!1),V&&ir(V),!Pe&&(R=B&&B.onVnodeBeforeMount)&&Fe(R,G,d),Nt(u,!0),D&&se){const ye=()=>{u.subTree=Yr(u),se(D,u.subTree,u,_,null)};Pe?fe.__asyncHydrate(D,u,ye):ye()}else{ve.ce&&ve.ce._injectChildStyle(fe);const ye=u.subTree=Yr(u);P(null,ye,g,y,u,_,b),d.el=ye.el}if(te&&Ee(te,_),!Pe&&(R=B&&B.onVnodeMounted)){const ye=d;Ee(()=>Fe(R,G,ye),_)}(d.shapeFlag&256||G&&Tn(G.vnode)&&G.vnode.shapeFlag&256)&&u.a&&Ee(u.a,_),u.isMounted=!0,d=g=y=null}};u.scope.on();const w=u.effect=new ta(I);u.scope.off();const E=u.update=w.run.bind(w),L=u.job=w.runIfDirty.bind(w);L.i=u,L.id=u.uid,w.scheduler=()=>Ys(L),Nt(u,!0),E()},Y=(u,d,g)=>{d.component=u;const y=u.vnode.props;u.vnode=d,u.next=null,Au(u,d.props,y,g),Nu(u,d.children,g),Tt(),Ii(u),Rt()},W=(u,d,g,y,_,b,S,I,w=!1)=>{const E=u&&u.children,L=u?u.shapeFlag:0,R=d.children,{patchFlag:D,shapeFlag:B}=d;if(D>0){if(D&128){lt(E,R,g,y,_,b,S,I,w);return}else if(D&256){Ge(E,R,g,y,_,b,S,I,w);return}}B&8?(L&16&&Ce(E,_,b),R!==E&&l(g,R)):L&16?B&16?lt(E,R,g,y,_,b,S,I,w):Ce(E,_,b,!0):(L&8&&l(g,""),B&16&&Te(R,g,y,_,b,S,I,w))},Ge=(u,d,g,y,_,b,S,I,w)=>{u=u||Yt,d=d||Yt;const E=u.length,L=d.length,R=Math.min(E,L);let D;for(D=0;D<R;D++){const B=d[D]=w?pt(d[D]):$e(d[D]);P(u[D],B,g,null,_,b,S,I,w)}E>L?Ce(u,_,b,!0,!1,R):Te(d,g,y,_,b,S,I,w,R)},lt=(u,d,g,y,_,b,S,I,w)=>{let E=0;const L=d.length;let R=u.length-1,D=L-1;for(;E<=R&&E<=D;){const B=u[E],V=d[E]=w?pt(d[E]):$e(d[E]);if(vn(B,V))P(B,V,g,null,_,b,S,I,w);else break;E++}for(;E<=R&&E<=D;){const B=u[R],V=d[D]=w?pt(d[D]):$e(d[D]);if(vn(B,V))P(B,V,g,null,_,b,S,I,w);else break;R--,D--}if(E>R){if(E<=D){const B=D+1,V=B<L?d[B].el:y;for(;E<=D;)P(null,d[E]=w?pt(d[E]):$e(d[E]),g,V,_,b,S,I,w),E++}}else if(E>D)for(;E<=R;)me(u[E],_,b,!0),E++;else{const B=E,V=E,te=new Map;for(E=V;E<=D;E++){const be=d[E]=w?pt(d[E]):$e(d[E]);be.key!=null&&te.set(be.key,E)}let G,ve=0;const fe=D-V+1;let Pe=!1,ye=0;const mn=new Array(fe);for(E=0;E<fe;E++)mn[E]=0;for(E=B;E<=R;E++){const be=u[E];if(ve>=fe){me(be,_,b,!0);continue}let Ue;if(be.key!=null)Ue=te.get(be.key);else for(G=V;G<=D;G++)if(mn[G-V]===0&&vn(be,d[G])){Ue=G;break}Ue===void 0?me(be,_,b,!0):(mn[Ue-V]=E+1,Ue>=ye?ye=Ue:Pe=!0,P(be,d[Ue],g,null,_,b,S,I,w),ve++)}const hi=Pe?Lu(mn):Yt;for(G=hi.length-1,E=fe-1;E>=0;E--){const be=V+E,Ue=d[be],pi=be+1<L?d[be+1].el:y;mn[E]===0?P(null,Ue,g,pi,_,b,S,I,w):Pe&&(G<0||E!==hi[G]?Le(Ue,g,pi,2):G--)}}},Le=(u,d,g,y,_=null)=>{const{el:b,type:S,transition:I,children:w,shapeFlag:E}=u;if(E&6){Le(u.component.subTree,d,g,y);return}if(E&128){u.suspense.move(d,g,y);return}if(E&64){S.move(u,d,g,k);return}if(S===Xe){r(b,d,g);for(let R=0;R<w.length;R++)Le(w[R],d,g,y);r(u.anchor,d,g);return}if(S===Xr){M(u,d,g);return}if(y!==2&&E&1&&I)if(y===0)I.beforeEnter(b),r(b,d,g),Ee(()=>I.enter(b),_);else{const{leave:R,delayLeave:D,afterLeave:B}=I,V=()=>r(b,d,g),te=()=>{R(b,()=>{V(),B&&B()})};D?D(b,V,te):te()}else r(b,d,g)},me=(u,d,g,y=!1,_=!1)=>{const{type:b,props:S,ref:I,children:w,dynamicChildren:E,shapeFlag:L,patchFlag:R,dirs:D,cacheIndex:B}=u;if(R===-2&&(_=!1),I!=null&&gs(I,null,g,u,!0),B!=null&&(d.renderCache[B]=void 0),L&256){d.ctx.deactivate(u);return}const V=L&1&&D,te=!Tn(u);let G;if(te&&(G=S&&S.onVnodeBeforeUnmount)&&Fe(G,d,u),L&6)Xn(u.component,g,y);else{if(L&128){u.suspense.unmount(g,y);return}V&&kt(u,null,d,"beforeUnmount"),L&64?u.type.remove(u,d,g,k,y):E&&!E.hasOnce&&(b!==Xe||R>0&&R&64)?Ce(E,d,g,!1,!0):(b===Xe&&R&384||!_&&L&16)&&Ce(w,d,g),y&&Wt(u)}(te&&(G=S&&S.onVnodeUnmounted)||V)&&Ee(()=>{G&&Fe(G,d,u),V&&kt(u,null,d,"unmounted")},g)},Wt=u=>{const{type:d,el:g,anchor:y,transition:_}=u;if(d===Xe){Kt(g,y);return}if(d===Xr){O(u);return}const b=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:I}=_,w=()=>S(g,b);I?I(u.el,b,w):w()}else b()},Kt=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},Xn=(u,d,g)=>{const{bum:y,scope:_,job:b,subTree:S,um:I,m:w,a:E}=u;Pi(w),Pi(E),y&&ir(y),_.stop(),b&&(b.flags|=8,me(S,u,d,g)),I&&Ee(I,d),Ee(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ce=(u,d,g,y=!1,_=!1,b=0)=>{for(let S=b;S<u.length;S++)me(u[S],d,g,y,_)},v=u=>{if(u.shapeFlag&6)return v(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const d=p(u.anchor||u.el),g=d&&d[su];return g?p(g):d};let A=!1;const T=(u,d,g)=>{u==null?d._vnode&&me(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,g),d._vnode=u,A||(A=!0,Ii(),Ia(),A=!1)},k={p:P,um:me,m:Le,r:Wt,mt:gn,mc:Te,pc:W,pbc:Re,n:v,o:t};let z,se;return{render:T,hydrate:z,createApp:Ru(T,z)}}function Jr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Nt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function xu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Va(t,e,n=!1){const r=t.children,s=e.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=pt(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Va(o,c)),c.type===Mr&&(c.el=o.el)}}function Lu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<f?i=c+1:o=c;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Wa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wa(e)}function Pi(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Uu=Symbol.for("v-scx"),Fu=()=>je(Uu);function ar(t,e,n){return Ka(t,e,n)}function Ka(t,e,n=Z){const{immediate:r,deep:s,flush:i,once:o}=n,c=ae({},n);let a;if(xr)if(i==="sync"){const p=Fu();a=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||r)c.once=!0;else return{stop:He,resume:He,pause:He};const f=pe;c.call=(p,m,C)=>ze(p,f,m,C);let l=!1;i==="post"?c.scheduler=p=>{Ee(p,f&&f.suspense)}:i!=="sync"&&(l=!0,c.scheduler=(p,m)=>{m?p():Ys(p)}),c.augmentJob=p=>{e&&(p.flags|=4),l&&(p.flags|=2,f&&(p.id=f.uid,p.i=f))};const h=Zl(t,e,c);return a&&a.push(h),h}function Bu(t,e,n){const r=this.proxy,s=ie(t)?t.includes(".")?za(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Wn(this),c=Ka(s,i.bind(r),n);return o(),c}function za(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const $u=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ut(e)}Modifiers`]||t[`${Ht(e)}Modifiers`];function Hu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&$u(r,e.slice(7));o&&(o.trim&&(s=n.map(l=>ie(l)?l.trim():l)),o.number&&(s=n.map(us)));let c,a=r[c=Vr(e)]||r[c=Vr(Ut(e))];!a&&i&&(a=r[c=Vr(Ht(e))]),a&&ze(a,t,6,s);const f=r[c+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,ze(f,t,6,s)}}function Ga(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!H(t)){const a=f=>{const l=Ga(f,e,!0);l&&(c=!0,ae(o,l))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ne(t)&&r.set(t,null),null):(U(i)?i.forEach(a=>o[a]=null):ae(o,i),ne(t)&&r.set(t,o),o)}function Dr(t,e){return!t||!Tr(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,Ht(e))||J(t,e))}function Yr(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:f,renderCache:l,props:h,data:p,setupState:m,ctx:C,inheritAttrs:P,isMounted:$}=t,x=gr(t);let N,M;try{if(n.shapeFlag&4){const j=s||r,re=j;N=$e(f.call(re,j,l,h,m,p,C)),M=c}else{const j=e;N=$e(j.length>1?j(h,{attrs:c,slots:o,emit:a}):j(h,null)),M=e.props?c:ju(c)}}catch(j){Cn.length=0,kr(j,t,1),N=Se(Bt)}let O=N;if(M&&P!==!1){const j=Object.keys(M),{shapeFlag:re}=O;j.length&&re&7&&(i&&j.some(xs)&&(M=Vu(M,i)),O=an(O,M,!1,!0))}return n.dirs&&(O=an(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=$?n.component.subTree.transition:n.transition),N=O,gr(x),N}const ju=t=>{let e;for(const n in t)(n==="class"||n==="style"||Tr(n))&&((e||(e={}))[n]=t[n]);return e},Vu=(t,e)=>{const n={};for(const r in t)(!xs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Wu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Oi(r,o,f):!!o;if(a&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const p=l[h];if(o[p]!==r[p]&&!Dr(f,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Oi(r,o,f):!0:!!o;return!1}function Oi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Dr(n,i))return!0}return!1}function Ku({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const qa=t=>t.__isSuspense;function zu(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):nu(t)}const Xe=Symbol.for("v-fgt"),Mr=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Xr=Symbol.for("v-stc"),Cn=[];let Ie=null;function Ja(t=!1){Cn.push(Ie=t?null:[])}function Gu(){Cn.pop(),Ie=Cn[Cn.length-1]||null}let xn=1;function ki(t){xn+=t,t<0&&Ie&&(Ie.hasOnce=!0)}function Ya(t){return t.dynamicChildren=xn>0?Ie||Yt:null,Gu(),xn>0&&Ie&&Ie.push(t),t}function Um(t,e,n,r,s,i){return Ya(Za(t,e,n,r,s,i,!0))}function Xa(t,e,n,r,s){return Ya(Se(t,e,n,r,s,!0))}function bs(t){return t?t.__v_isVNode===!0:!1}function vn(t,e){return t.type===e.type&&t.key===e.key}const Qa=({key:t})=>t??null,cr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ie(t)||le(t)||H(t)?{i:Ae,r:t,k:e,f:!!n}:t:null);function Za(t,e=null,n=null,r=0,s=null,i=t===Xe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qa(e),ref:e&&cr(e),scopeId:Ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ae};return c?(Zs(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ie(n)?8:16),xn>0&&!o&&Ie&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ie.push(a),a}const Se=qu;function qu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vu)&&(t=Bt),bs(t)){const c=an(t,e,!0);return n&&Zs(c,n),xn>0&&!i&&Ie&&(c.shapeFlag&6?Ie[Ie.indexOf(t)]=c:Ie.push(c)),c.patchFlag=-2,c}if(of(t)&&(t=t.__vccOpts),e){e=Ju(e);let{class:c,style:a}=e;c&&!ie(c)&&(e.class=Bs(c)),ne(a)&&(Gs(a)&&!U(a)&&(a=ae({},a)),e.style=Fs(a))}const o=ie(t)?1:qa(t)?128:iu(t)?64:ne(t)?4:H(t)?2:0;return Za(t,e,n,r,s,o,i,!0)}function Ju(t){return t?Gs(t)||La(t)?ae({},t):t:null}function an(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,f=e?Xu(s||{},e):s,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&Qa(f),ref:e&&e.ref?n&&i?U(i)?i.concat(cr(e)):[i,cr(e)]:cr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&Ra(l,a.clone(l)),l}function Yu(t=" ",e=0){return Se(Mr,null,t,e)}function Fm(t="",e=!1){return e?(Ja(),Xa(Bt,null,t)):Se(Bt,null,t)}function $e(t){return t==null||typeof t=="boolean"?Se(Bt):U(t)?Se(Xe,null,t.slice()):typeof t=="object"?pt(t):Se(Mr,null,String(t))}function pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:an(t)}function Zs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Zs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!La(e)?e._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),r&64?(n=16,e=[Yu(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Bs([e.class,r.class]));else if(s==="style")e.style=Fs([e.style,r.style]);else if(Tr(s)){const i=e[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Fe(t,e,n,r=null){ze(t,e,7,[n,r])}const Qu=Da();let Zu=0;function ef(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Qu,i={uid:Zu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ea(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fa(r,s),emitsOptions:Ga(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Hu.bind(null,i),t.ce&&t.ce(i),i}let pe=null,_r,Es;{const t=Jo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};_r=e("__VUE_INSTANCE_SETTERS__",n=>pe=n),Es=e("__VUE_SSR_SETTERS__",n=>xr=n)}const Wn=t=>{const e=pe;return _r(t),t.scope.on(),()=>{t.scope.off(),_r(e)}},Ni=()=>{pe&&pe.scope.off(),_r(null)};function ec(t){return t.vnode.shapeFlag&4}let xr=!1;function tf(t,e=!1,n=!1){e&&Es(e);const{props:r,children:s}=t.vnode,i=ec(t);Cu(t,r,i,e),ku(t,s,n);const o=i?nf(t,e):void 0;return e&&Es(!1),o}function nf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,yu);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?sf(t):null,i=Wn(t);Tt();const o=Vn(r,t,0,[t.props,s]);if(Rt(),i(),Wo(o)){if(Tn(t)||Aa(t),o.then(Ni,Ni),e)return o.then(c=>{Di(t,c,e)}).catch(c=>{kr(c,t,0)});t.asyncDep=o}else Di(t,o,e)}else tc(t,e)}function Di(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=ya(e)),tc(t,n)}let Mi;function tc(t,e,n){const r=t.type;if(!t.render){if(!e&&Mi&&!r.render){const s=r.template||Xs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,f=ae(ae({isCustomElement:i,delimiters:c},o),a);r.render=Mi(s,f)}}t.render=r.render||He}{const s=Wn(t);Tt();try{bu(t)}finally{Rt(),s()}}}const rf={get(t,e){return ue(t,"get",""),t[e]}};function sf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,rf),slots:t.slots,emit:t.emit,expose:e}}function Lr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ya(ma(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}})):t.proxy}function of(t){return H(t)&&"__vccOpts"in t}const Oe=(t,e)=>Xl(t,e,xr);function nc(t,e,n){const r=arguments.length;return r===2?ne(e)&&!U(e)?bs(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&bs(n)&&(n=[n]),Se(t,e,n))}const af="3.5.2";/**
* @vue/runtime-dom v3.5.2
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ws;const xi=typeof window<"u"&&window.trustedTypes;if(xi)try{ws=xi.createPolicy("vue",{createHTML:t=>t})}catch{}const rc=ws?t=>ws.createHTML(t):t=>t,cf="http://www.w3.org/2000/svg",lf="http://www.w3.org/1998/Math/MathML",Ye=typeof document<"u"?document:null,Li=Ye&&Ye.createElement("template"),uf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ye.createElementNS(cf,t):e==="mathml"?Ye.createElementNS(lf,t):n?Ye.createElement(t,{is:n}):Ye.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ye.createTextNode(t),createComment:t=>Ye.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ye.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Li.innerHTML=rc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Li.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ff=Symbol("_vtc");function df(t,e,n){const r=t[ff];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ui=Symbol("_vod"),hf=Symbol("_vsh"),pf=Symbol(""),gf=/(^|;)\s*display\s*:/;function mf(t,e,n){const r=t.style,s=ie(n);let i=!1;if(n&&!s){if(e)if(ie(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&lr(r,c,"")}else for(const o in e)n[o]==null&&lr(r,o,"");for(const o in n)o==="display"&&(i=!0),lr(r,o,n[o])}else if(s){if(e!==n){const o=r[pf];o&&(n+=";"+o),r.cssText=n,i=gf.test(n)}}else e&&t.removeAttribute("style");Ui in t&&(t[Ui]=i?r.display:"",t[hf]&&(r.display="none"))}const Fi=/\s*!important$/;function lr(t,e,n){if(U(n))n.forEach(r=>lr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_f(t,e);Fi.test(n)?t.setProperty(Ht(r),n.replace(Fi,""),"important"):t[r]=n}}const Bi=["Webkit","Moz","ms"],Qr={};function _f(t,e){const n=Qr[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return Qr[e]=r;r=Go(r);for(let s=0;s<Bi.length;s++){const i=Bi[s]+r;if(i in t)return Qr[e]=i}return e}const $i="http://www.w3.org/1999/xlink";function Hi(t,e,n,r,s,i=wl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($i,e.slice(6,e.length)):t.setAttributeNS($i,e,n):n==null||i&&!Yo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ke(n)?String(n):n)}function vf(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rc(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Yo(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function mt(t,e,n,r){t.addEventListener(e,n,r)}function yf(t,e,n,r){t.removeEventListener(e,n,r)}const ji=Symbol("_vei");function bf(t,e,n,r,s=null){const i=t[ji]||(t[ji]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Ef(e);if(r){const f=i[e]=Sf(r,s);mt(t,c,f,a)}else o&&(yf(t,c,o,a),i[e]=void 0)}}const Vi=/(?:Once|Passive|Capture)$/;function Ef(t){let e;if(Vi.test(t)){e={};let r;for(;r=t.match(Vi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ht(t.slice(2)),e]}let Zr=0;const wf=Promise.resolve(),If=()=>Zr||(wf.then(()=>Zr=0),Zr=Date.now());function Sf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(Tf(r,n.value),e,5,[r])};return n.value=t,n.attached=If(),n}function Tf(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Rf=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?df(t,r,o):e==="style"?mf(t,n,r):Tr(e)?xs(e)||bf(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cf(t,e,r,o))?(vf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hi(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hi(t,e,r,o))};function Cf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wi(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wi(e)&&ie(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!ie(n)))}const cn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>ir(e,n):e};function Af(t){t.target.composing=!0}function Ki(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const st=Symbol("_assign"),Bm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[st]=cn(s);const i=r||s.props&&s.props.type==="number";mt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=us(c)),t[st](c)}),n&&mt(t,"change",()=>{t.value=t.value.trim()}),e||(mt(t,"compositionstart",Af),mt(t,"compositionend",Ki),mt(t,"change",Ki))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[st]=cn(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?us(t.value):t.value,a=e??"";c!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},$m={deep:!0,created(t,e,n){t[st]=cn(n),mt(t,"change",()=>{const r=t._modelValue,s=sc(t),i=t.checked,o=t[st];if(U(r)){const c=Xo(r,s),a=c!==-1;if(i&&!a)o(r.concat(s));else if(!i&&a){const f=[...r];f.splice(c,1),o(f)}}else if(Rr(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(ic(t,i))})},mounted:zi,beforeUpdate(t,e,n){t[st]=cn(n),zi(t,e,n)}};function zi(t,{value:e,oldValue:n},r){t._modelValue=e;let s;U(e)?s=Xo(e,r.props.value)>-1:Rr(e)?s=e.has(r.props.value):s=on(e,ic(t,!0)),t.checked!==s&&(t.checked=s)}const Hm={created(t,{value:e},n){t.checked=on(e,n.props.value),t[st]=cn(n),mt(t,"change",()=>{t[st](sc(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[st]=cn(r),e!==n&&(t.checked=on(e,r.props.value))}};function sc(t){return"_value"in t?t._value:t.value}function ic(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Pf=ae({patchProp:Rf},uf);let Gi;function Of(){return Gi||(Gi=Du(Pf))}const kf=(...t)=>{const e=Of().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Df(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Nf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Nf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Df(t){return ie(t)?document.querySelector(t):t}var Mf=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const xf=Symbol();var qi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qi||(qi={}));function Lf(){const t=Tl(!0),e=t.run(()=>_a({}));let n=[],r=[];const s=ma({install(i){s._a=i,i.provide(xf,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Mf?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Uf={FIREBASE:{config:{apiKey:"AIzaSyBBhqhlBFq19AtOAUMqoJVb1Fdjdez867Q",authDomain:"signin-test01.firebaseapp.com",projectId:"signin-test01",storageBucket:"signin-test01.appspot.com",messagingSenderId:"556463708836",appId:"1:556463708836:web:c3a542c9802e446d63e431",measurementId:"G-PVCMY5S5MH"}},MAPBOXGL:{token:"pk.eyJ1Ijoid25pLXdpdGgiLCJhIjoiY2s1NjMxYm45MTByejNkbndtMjhqdXpzbSJ9.QS-cSJsXgmZfiNnLXr_QsQ"},MAP:{DATA_SOURCE_NAME:"futa-data",LAYER_NAME_SYMBOL:"futa-symbol-layer",LAYER_NAME_CIRCLE:"futa-circle-layer",ICON_SIZES:["interpolate",["linear"],["zoom"],5,.3,16,.4],ICON_IMG_SIZE:150,GEOJSON_URI:"data/pokefuta.geojson"},POPUP:{FILTER_LIST:[{id:1,name:"全て表示"},{id:2,name:"未訪問のみ表示"},{id:3,name:"訪問済みのみ表示"}]}};var Ji={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ff=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,f=a?t[s+2]:0,l=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|f>>6,m=f&63;a||(m=64,o||(p=64)),r.push(n[l],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(oc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ff(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||f==null||h==null)throw new Bf;const p=i<<2|c>>4;if(r.push(p),f!==64){const m=c<<4&240|f>>2;if(r.push(m),h!==64){const C=f<<6&192|h;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $f=function(t){const e=oc(t);return ac.encodeByteArray(e,!0)},cc=function(t){return $f(t).replace(/\./g,"")},lc=function(t){try{return ac.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=()=>Hf().__FIREBASE_DEFAULTS__,Vf=()=>{if(typeof process>"u"||typeof Ji>"u")return;const t=Ji.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lc(t[1]);return e&&JSON.parse(e)},ei=()=>{try{return jf()||Vf()||Wf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kf=t=>{var e,n;return(n=(e=ei())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uc=()=>{var t;return(t=ei())===null||t===void 0?void 0:t.config},fc=t=>{var e;return(e=ei())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function qf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yf(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Xf(){try{return typeof indexedDB=="object"}catch{return!1}}function Qf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Zf,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kn.prototype.create)}}class Kn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ed(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ct(s,c,r)}}function ed(t,e){return t.replace(td,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const td=/\{\$([^}]+)}/g;function nd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Yi(i)&&Yi(o)){if(!vr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Yi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function En(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function wn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rd(t,e){const n=new sd(t,e);return n.subscribe.bind(n)}class sd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");id(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=es),s.error===void 0&&(s.error=es),s.complete===void 0&&(s.complete=es);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function id(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function es(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cd(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ad(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ad(t){return t===Mt?void 0:t}function cd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new od(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const ud={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},fd=Q.INFO,dd={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},hd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=dd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dc{constructor(e){this.name=e,this._logLevel=fd,this._logHandler=hd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ud[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const pd=(t,e)=>e.some(n=>t instanceof n);let Xi,Qi;function gd(){return Xi||(Xi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function md(){return Qi||(Qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hc=new WeakMap,Is=new WeakMap,pc=new WeakMap,ts=new WeakMap,ti=new WeakMap;function _d(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Et(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hc.set(n,t)}).catch(()=>{}),ti.set(e,t),e}function vd(t){if(Is.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Is.set(t,e)}let Ss={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Is.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yd(t){Ss=t(Ss)}function bd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ns(this),e,...n);return pc.set(r,e.sort?e.sort():[e]),Et(r)}:md().includes(t)?function(...e){return t.apply(ns(this),e),Et(hc.get(this))}:function(...e){return Et(t.apply(ns(this),e))}}function Ed(t){return typeof t=="function"?bd(t):(t instanceof IDBTransaction&&vd(t),pd(t,gd())?new Proxy(t,Ss):t)}function Et(t){if(t instanceof IDBRequest)return _d(t);if(ts.has(t))return ts.get(t);const e=Ed(t);return e!==t&&(ts.set(t,e),ti.set(e,t)),e}const ns=t=>ti.get(t);function wd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Et(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Et(o.result),a.oldVersion,a.newVersion,Et(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Id=["get","getKey","getAll","getAllKeys","count"],Sd=["put","add","delete","clear"],rs=new Map;function Zi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rs.get(e))return rs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Sd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Id.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let f=a.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),s&&a.done]))[0]};return rs.set(e,i),i}yd(t=>({...t,get:(e,n,r)=>Zi(e,n)||t.get(e,n,r),has:(e,n)=>!!Zi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Rd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ts="@firebase/app",eo="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new dc("@firebase/app"),Cd="@firebase/app-compat",Ad="@firebase/analytics-compat",Pd="@firebase/analytics",Od="@firebase/app-check-compat",kd="@firebase/app-check",Nd="@firebase/auth",Dd="@firebase/auth-compat",Md="@firebase/database",xd="@firebase/database-compat",Ld="@firebase/functions",Ud="@firebase/functions-compat",Fd="@firebase/installations",Bd="@firebase/installations-compat",$d="@firebase/messaging",Hd="@firebase/messaging-compat",jd="@firebase/performance",Vd="@firebase/performance-compat",Wd="@firebase/remote-config",Kd="@firebase/remote-config-compat",zd="@firebase/storage",Gd="@firebase/storage-compat",qd="@firebase/firestore",Jd="@firebase/vertexai-preview",Yd="@firebase/firestore-compat",Xd="firebase",Qd="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="[DEFAULT]",Zd={[Ts]:"fire-core",[Cd]:"fire-core-compat",[Pd]:"fire-analytics",[Ad]:"fire-analytics-compat",[kd]:"fire-app-check",[Od]:"fire-app-check-compat",[Nd]:"fire-auth",[Dd]:"fire-auth-compat",[Md]:"fire-rtdb",[xd]:"fire-rtdb-compat",[Ld]:"fire-fn",[Ud]:"fire-fn-compat",[Fd]:"fire-iid",[Bd]:"fire-iid-compat",[$d]:"fire-fcm",[Hd]:"fire-fcm-compat",[jd]:"fire-perf",[Vd]:"fire-perf-compat",[Wd]:"fire-rc",[Kd]:"fire-rc-compat",[zd]:"fire-gcs",[Gd]:"fire-gcs-compat",[qd]:"fire-fst",[Yd]:"fire-fst-compat",[Jd]:"fire-vertex","fire-js":"fire-js",[Xd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new Map,eh=new Map,Cs=new Map;function to(t,e){try{t.container.addComponent(e)}catch(n){it.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(Cs.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;Cs.set(e,t);for(const n of yr.values())to(n,t);for(const n of eh.values())to(n,t);return!0}function gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ze(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new Kn("app","Firebase",th);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=Qd;function mc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(n||(n=uc()),!n)throw wt.create("no-options");const i=yr.get(s);if(i){if(vr(n,i.options)&&vr(r,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const o=new ld(s);for(const a of Cs.values())o.addComponent(a);const c=new nh(n,r,o);return yr.set(s,c),c}function rh(t=Rs){const e=yr.get(t);if(!e&&t===Rs&&uc())return mc();if(!e)throw wt.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=Zd[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(c.join(" "));return}Ln(new ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="firebase-heartbeat-database",ih=1,Un="firebase-heartbeat-store";let ss=null;function _c(){return ss||(ss=wd(sh,ih,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Un)}catch(n){console.warn(n)}}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),ss}async function oh(t){try{const n=(await _c()).transaction(Un),r=await n.objectStore(Un).get(vc(t));return await n.done,r}catch(e){if(e instanceof Ct)it.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(n.message)}}}async function no(t,e){try{const r=(await _c()).transaction(Un,"readwrite");await r.objectStore(Un).put(e,vc(t)),await r.done}catch(n){if(n instanceof Ct)it.warn(n.message);else{const r=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});it.warn(r.message)}}}function vc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=1024,ch=30*24*60*60*1e3;class lh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ro();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=ch}),this._storage.overwrite(this._heartbeatsCache))}catch(r){it.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ro(),{heartbeatsToSend:r,unsentEntries:s}=uh(this._heartbeatsCache.heartbeats),i=cc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return it.warn(n),""}}}function ro(){return new Date().toISOString().substring(0,10)}function uh(t,e=ah){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),so(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),so(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xf()?Qf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return no(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return no(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function so(t){return cc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){Ln(new ln("platform-logger",e=>new Td(e),"PRIVATE")),Ln(new ln("heartbeat",e=>new lh(e),"PRIVATE")),tn(Ts,eo,t),tn(Ts,eo,"esm2017"),tn("fire-js","")}dh("");var hh="firebase",ph="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(hh,ph,"app");/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const qt=typeof document<"u";function gh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function is(t,e){const n={};for(const r in e){const s=e[r];n[r]=De(s)?s.map(t):t(s)}return n}const An=()=>{},De=Array.isArray,yc=/#/g,mh=/&/g,_h=/\//g,vh=/=/g,yh=/\?/g,bc=/\+/g,bh=/%5B/g,Eh=/%5D/g,Ec=/%5E/g,wh=/%60/g,wc=/%7B/g,Ih=/%7C/g,Ic=/%7D/g,Sh=/%20/g;function ni(t){return encodeURI(""+t).replace(Ih,"|").replace(bh,"[").replace(Eh,"]")}function Th(t){return ni(t).replace(wc,"{").replace(Ic,"}").replace(Ec,"^")}function As(t){return ni(t).replace(bc,"%2B").replace(Sh,"+").replace(yc,"%23").replace(mh,"%26").replace(wh,"`").replace(wc,"{").replace(Ic,"}").replace(Ec,"^")}function Rh(t){return As(t).replace(vh,"%3D")}function Ch(t){return ni(t).replace(yc,"%23").replace(yh,"%3F")}function Ah(t){return t==null?"":Ch(t).replace(_h,"%2F")}function Fn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ph=/\/$/,Oh=t=>t.replace(Ph,"");function os(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Mh(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Fn(o)}}function kh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function io(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Nh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&un(e.matched[r],n.matched[s])&&Sc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function un(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Dh(t[n],e[n]))return!1;return!0}function Dh(t,e){return De(t)?oo(t,e):De(e)?oo(e,t):t===e}function oo(t,e){return De(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Mh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bn;(function(t){t.pop="pop",t.push="push"})(Bn||(Bn={}));var Pn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pn||(Pn={}));function xh(t){if(!t)if(qt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Oh(t)}const Lh=/^[^#]+#/;function Uh(t,e){return t.replace(Lh,"#")+e}function Fh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ur=()=>({left:window.scrollX,top:window.scrollY});function Bh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Fh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ao(t,e){return(history.state?history.state.position-e:-1)+t}const Ps=new Map;function $h(t,e){Ps.set(t,e)}function Hh(t){const e=Ps.get(t);return Ps.delete(t),e}let jh=()=>location.protocol+"//"+location.host;function Tc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),io(a,"")}return io(n,t)+r+s}function Vh(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const m=Tc(t,location),C=n.value,P=e.value;let $=0;if(p){if(n.value=m,e.value=p,o&&o===C){o=null;return}$=P?p.position-P.position:0}else r(m);s.forEach(x=>{x(n.value,C,{delta:$,type:Bn.pop,direction:$?$>0?Pn.forward:Pn.back:Pn.unknown})})};function a(){o=n.value}function f(p){s.push(p);const m=()=>{const C=s.indexOf(p);C>-1&&s.splice(C,1)};return i.push(m),m}function l(){const{history:p}=window;p.state&&p.replaceState(q({},p.state,{scroll:Ur()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:a,listen:f,destroy:h}}function co(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ur():null}}function Wh(t){const{history:e,location:n}=window,r={value:Tc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,f,l){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:jh()+t+a;try{e[l?"replaceState":"pushState"](f,"",p),s.value=f}catch(m){console.error(m),n[l?"replace":"assign"](p)}}function o(a,f){const l=q({},e.state,co(s.value.back,a,s.value.forward,!0),f,{position:s.value.position});i(a,l,!0),r.value=a}function c(a,f){const l=q({},s.value,e.state,{forward:a,scroll:Ur()});i(l.current,l,!0);const h=q({},co(r.value,a,null),{position:l.position+1},f);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Kh(t){t=xh(t);const e=Wh(t),n=Vh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:Uh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function zh(t){return typeof t=="string"||t&&typeof t=="object"}function Rc(t){return typeof t=="string"||typeof t=="symbol"}const Cc=Symbol("");var lo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lo||(lo={}));function fn(t,e){return q(new Error,{type:t,[Cc]:!0},e)}function Je(t,e){return t instanceof Error&&Cc in t&&(e==null||!!(t.type&e))}const uo="[^/]+?",Gh={sensitive:!1,strict:!1,start:!0,end:!0},qh=/[.+*?^${}()[\]/\\]/g;function Jh(t,e){const n=q({},Gh,e),r=[];let s=n.start?"^":"";const i=[];for(const f of t){const l=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let h=0;h<f.length;h++){const p=f[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(qh,"\\$&"),m+=40;else if(p.type===1){const{value:C,repeatable:P,optional:$,regexp:x}=p;i.push({name:C,repeatable:P,optional:$});const N=x||uo;if(N!==uo){m+=10;try{new RegExp(`(${N})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${C}" (${N}): `+O.message)}}let M=P?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(M=$&&f.length<2?`(?:/${M})`:"/"+M),$&&(M+="?"),s+=M,m+=20,$&&(m+=-8),P&&(m+=-20),N===".*"&&(m+=-50)}l.push(m)}r.push(l)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(f){const l=f.match(o),h={};if(!l)return null;for(let p=1;p<l.length;p++){const m=l[p]||"",C=i[p-1];h[C.name]=m&&C.repeatable?m.split("/"):m}return h}function a(f){let l="",h=!1;for(const p of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const m of p)if(m.type===0)l+=m.value;else if(m.type===1){const{value:C,repeatable:P,optional:$}=m,x=C in f?f[C]:"";if(De(x)&&!P)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const N=De(x)?x.join("/"):x;if(!N)if($)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${C}"`);l+=N}}return l||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Yh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ac(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Yh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fo(r))return 1;if(fo(s))return-1}return s.length-r.length}function fo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Xh={type:0,value:""},Qh=/[a-zA-Z0-9_]/;function Zh(t){if(!t)return[[]];if(t==="/")return[[Xh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,f="",l="";function h(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:l,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),f="")}function p(){f+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(f&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Qh.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),h(),o(),s}function ep(t,e,n){const r=Jh(Zh(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function tp(t,e){const n=[],r=new Map;e=go({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,m){const C=!m,P=np(h);P.aliasOf=m&&m.record;const $=go(e,h),x=[P];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const j of O)x.push(q({},P,{components:m?m.record.components:P.components,path:j,aliasOf:m?m.record:P}))}let N,M;for(const O of x){const{path:j}=O;if(p&&j[0]!=="/"){const re=p.record.path,ee=re[re.length-1]==="/"?"":"/";O.path=p.record.path+(j&&ee+j)}if(N=ep(O,p,$),m?m.alias.push(N):(M=M||N,M!==N&&M.alias.push(N),C&&h.name&&!po(N)&&o(h.name)),Pc(N)&&a(N),P.children){const re=P.children;for(let ee=0;ee<re.length;ee++)i(re[ee],N,m&&m.children[ee])}m=m||N}return M?()=>{o(M)}:An}function o(h){if(Rc(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function a(h){const p=ip(h,n);n.splice(p,0,h),h.record.name&&!po(h)&&r.set(h.record.name,h)}function f(h,p){let m,C={},P,$;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw fn(1,{location:h});$=m.record.name,C=q(ho(p.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&ho(h.params,m.keys.map(M=>M.name))),P=m.stringify(C)}else if(h.path!=null)P=h.path,m=n.find(M=>M.re.test(P)),m&&(C=m.parse(P),$=m.record.name);else{if(m=p.name?r.get(p.name):n.find(M=>M.re.test(p.path)),!m)throw fn(1,{location:h,currentLocation:p});$=m.record.name,C=q({},p.params,h.params),P=m.stringify(C)}const x=[];let N=m;for(;N;)x.unshift(N.record),N=N.parent;return{name:$,path:P,params:C,matched:x,meta:sp(x)}}t.forEach(h=>i(h));function l(){n.length=0,r.clear()}return{addRoute:i,resolve:f,removeRoute:o,clearRoutes:l,getRoutes:c,getRecordMatcher:s}}function ho(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function np(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:rp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function rp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function po(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sp(t){return t.reduce((e,n)=>q(e,n.meta),{})}function go(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ip(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ac(t,e[i])<0?r=i:n=i+1}const s=op(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function op(t){let e=t;for(;e=e.parent;)if(Pc(e)&&Ac(t,e)===0)return e}function Pc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ap(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(bc," "),o=i.indexOf("="),c=Fn(o<0?i:i.slice(0,o)),a=o<0?null:Fn(i.slice(o+1));if(c in e){let f=e[c];De(f)||(f=e[c]=[f]),f.push(a)}else e[c]=a}return e}function mo(t){let e="";for(let n in t){const r=t[n];if(n=Rh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&As(i)):[r&&As(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function cp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=De(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const lp=Symbol(""),_o=Symbol(""),Fr=Symbol(""),Oc=Symbol(""),Os=Symbol("");function yn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const f=p=>{p===!1?a(fn(4,{from:n,to:e})):p instanceof Error?a(p):zh(p)?a(fn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},l=i(()=>t.call(r&&r.instances[s],e,n,f));let h=Promise.resolve(l);t.length<3&&(h=h.then(f)),h.catch(p=>a(p))})}function as(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(up(a)){const l=(a.__vccOpts||a)[e];l&&i.push(gt(l,n,r,o,c,s))}else{let f=a();i.push(()=>f.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const h=gh(l)?l.default:l;o.components[c]=h;const m=(h.__vccOpts||h)[e];return m&&gt(m,n,r,o,c,s)()}))}}return i}function up(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vo(t){const e=je(Fr),n=je(Oc),r=Oe(()=>{const a=Lt(t.to);return e.resolve(a)}),s=Oe(()=>{const{matched:a}=r.value,{length:f}=a,l=a[f-1],h=n.matched;if(!l||!h.length)return-1;const p=h.findIndex(un.bind(null,l));if(p>-1)return p;const m=yo(a[f-2]);return f>1&&yo(l)===m&&h[h.length-1].path!==m?h.findIndex(un.bind(null,a[f-2])):p}),i=Oe(()=>s.value>-1&&pp(n.params,r.value.params)),o=Oe(()=>s.value>-1&&s.value===n.matched.length-1&&Sc(n.params,r.value.params));function c(a={}){return hp(a)?e[Lt(t.replace)?"replace":"push"](Lt(t.to)).catch(An):Promise.resolve()}return{route:r,href:Oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const fp=Ca({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vo,setup(t,{slots:e}){const n=Or(vo(t)),{options:r}=je(Fr),s=Oe(()=>({[bo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[bo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:nc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),dp=fp;function hp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function pp(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!De(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function yo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bo=(t,e,n)=>t??e??n,gp=Ca({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=je(Os),s=Oe(()=>t.route||r.value),i=je(_o,0),o=Oe(()=>{let f=Lt(i);const{matched:l}=s.value;let h;for(;(h=l[f])&&!h.components;)f++;return f}),c=Oe(()=>s.value.matched[o.value]);or(_o,Oe(()=>o.value+1)),or(lp,c),or(Os,s);const a=_a();return ar(()=>[a.value,c.value,t.name],([f,l,h],[p,m,C])=>{l&&(l.instances[h]=f,m&&m!==l&&f&&f===p&&(l.leaveGuards.size||(l.leaveGuards=m.leaveGuards),l.updateGuards.size||(l.updateGuards=m.updateGuards))),f&&l&&(!m||!un(l,m)||!p)&&(l.enterCallbacks[h]||[]).forEach(P=>P(f))},{flush:"post"}),()=>{const f=s.value,l=t.name,h=c.value,p=h&&h.components[l];if(!p)return Eo(n.default,{Component:p,route:f});const m=h.props[l],C=m?m===!0?f.params:typeof m=="function"?m(f):m:null,$=nc(p,q({},C,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[l]=null)},ref:a}));return Eo(n.default,{Component:$,route:f})||$}}});function Eo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kc=gp;function mp(t){const e=tp(t.routes,t),n=t.parseQuery||ap,r=t.stringifyQuery||mo,s=t.history,i=yn(),o=yn(),c=yn(),a=Gl(ft);let f=ft;qt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=is.bind(null,v=>""+v),h=is.bind(null,Ah),p=is.bind(null,Fn);function m(v,A){let T,k;return Rc(v)?(T=e.getRecordMatcher(v),k=A):k=v,e.addRoute(k,T)}function C(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(v=>v.record)}function $(v){return!!e.getRecordMatcher(v)}function x(v,A){if(A=q({},A||a.value),typeof v=="string"){const d=os(n,v,A.path),g=e.resolve({path:d.path},A),y=s.createHref(d.fullPath);return q(d,g,{params:p(g.params),hash:Fn(d.hash),redirectedFrom:void 0,href:y})}let T;if(v.path!=null)T=q({},v,{path:os(n,v.path,A.path).path});else{const d=q({},v.params);for(const g in d)d[g]==null&&delete d[g];T=q({},v,{params:h(d)}),A.params=h(A.params)}const k=e.resolve(T,A),z=v.hash||"";k.params=l(p(k.params));const se=kh(r,q({},v,{hash:Th(z),path:k.path})),u=s.createHref(se);return q({fullPath:se,hash:z,query:r===mo?cp(v.query):v.query||{}},k,{redirectedFrom:void 0,href:u})}function N(v){return typeof v=="string"?os(n,v,a.value.path):q({},v)}function M(v,A){if(f!==v)return fn(8,{from:A,to:v})}function O(v){return ee(v)}function j(v){return O(q(N(v),{replace:!0}))}function re(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let k=typeof T=="function"?T(v):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=N(k):{path:k},k.params={}),q({query:v.query,hash:v.hash,params:k.path!=null?{}:v.params},k)}}function ee(v,A){const T=f=x(v),k=a.value,z=v.state,se=v.force,u=v.replace===!0,d=re(T);if(d)return ee(q(N(d),{state:typeof d=="object"?q({},z,d.state):z,force:se,replace:u}),A||T);const g=T;g.redirectedFrom=A;let y;return!se&&Nh(r,k,T)&&(y=fn(16,{to:g,from:k}),Le(k,k,!0,!1)),(y?Promise.resolve(y):Re(g,k)).catch(_=>Je(_)?Je(_,2)?_:lt(_):W(_,g,k)).then(_=>{if(_){if(Je(_,2))return ee(q({replace:u},N(_.to),{state:typeof _.to=="object"?q({},z,_.to.state):z,force:se}),A||g)}else _=Ot(g,k,!0,u,z);return ct(g,k,_),_})}function Te(v,A){const T=M(v,A);return T?Promise.reject(T):Promise.resolve()}function _e(v){const A=Kt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function Re(v,A){let T;const[k,z,se]=_p(v,A);T=as(k.reverse(),"beforeRouteLeave",v,A);for(const d of k)d.leaveGuards.forEach(g=>{T.push(gt(g,v,A))});const u=Te.bind(null,v,A);return T.push(u),Ce(T).then(()=>{T=[];for(const d of i.list())T.push(gt(d,v,A));return T.push(u),Ce(T)}).then(()=>{T=as(z,"beforeRouteUpdate",v,A);for(const d of z)d.updateGuards.forEach(g=>{T.push(gt(g,v,A))});return T.push(u),Ce(T)}).then(()=>{T=[];for(const d of se)if(d.beforeEnter)if(De(d.beforeEnter))for(const g of d.beforeEnter)T.push(gt(g,v,A));else T.push(gt(d.beforeEnter,v,A));return T.push(u),Ce(T)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),T=as(se,"beforeRouteEnter",v,A,_e),T.push(u),Ce(T))).then(()=>{T=[];for(const d of o.list())T.push(gt(d,v,A));return T.push(u),Ce(T)}).catch(d=>Je(d,8)?d:Promise.reject(d))}function ct(v,A,T){c.list().forEach(k=>_e(()=>k(v,A,T)))}function Ot(v,A,T,k,z){const se=M(v,A);if(se)return se;const u=A===ft,d=qt?history.state:{};T&&(k||u?s.replace(v.fullPath,q({scroll:u&&d&&d.scroll},z)):s.push(v.fullPath,z)),a.value=v,Le(v,A,T,u),lt()}let xe;function gn(){xe||(xe=s.listen((v,A,T)=>{if(!Xn.listening)return;const k=x(v),z=re(k);if(z){ee(q(z,{replace:!0}),k).catch(An);return}f=k;const se=a.value;qt&&$h(ao(se.fullPath,T.delta),Ur()),Re(k,se).catch(u=>Je(u,12)?u:Je(u,2)?(ee(u.to,k).then(d=>{Je(d,20)&&!T.delta&&T.type===Bn.pop&&s.go(-1,!1)}).catch(An),Promise.reject()):(T.delta&&s.go(-T.delta,!1),W(u,k,se))).then(u=>{u=u||Ot(k,se,!1),u&&(T.delta&&!Je(u,8)?s.go(-T.delta,!1):T.type===Bn.pop&&Je(u,20)&&s.go(-1,!1)),ct(k,se,u)}).catch(An)}))}let Vt=yn(),oe=yn(),Y;function W(v,A,T){lt(v);const k=oe.list();return k.length?k.forEach(z=>z(v,A,T)):console.error(v),Promise.reject(v)}function Ge(){return Y&&a.value!==ft?Promise.resolve():new Promise((v,A)=>{Vt.add([v,A])})}function lt(v){return Y||(Y=!v,gn(),Vt.list().forEach(([A,T])=>v?T(v):A()),Vt.reset()),v}function Le(v,A,T,k){const{scrollBehavior:z}=t;if(!qt||!z)return Promise.resolve();const se=!T&&Hh(ao(v.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Ea().then(()=>z(v,A,se)).then(u=>u&&Bh(u)).catch(u=>W(u,v,A))}const me=v=>s.go(v);let Wt;const Kt=new Set,Xn={currentRoute:a,listening:!0,addRoute:m,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:$,getRoutes:P,resolve:x,options:t,push:O,replace:j,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:oe.add,isReady:Ge,install(v){const A=this;v.component("RouterLink",dp),v.component("RouterView",kc),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Lt(a)}),qt&&!Wt&&a.value===ft&&(Wt=!0,O(s.location).catch(z=>{}));const T={};for(const z in ft)Object.defineProperty(T,z,{get:()=>a.value[z],enumerable:!0});v.provide(Fr,A),v.provide(Oc,pa(T)),v.provide(Os,a);const k=v.unmount;Kt.add(v),v.unmount=function(){Kt.delete(v),Kt.size<1&&(f=ft,xe&&xe(),xe=null,a.value=ft,Wt=!1,Y=!1),k()}}};function Ce(v){return v.reduce((A,T)=>A.then(()=>_e(T)),Promise.resolve())}return Xn}function _p(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(f=>un(f,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(f=>un(f,a))||s.push(a))}return[n,r,s]}function jm(){return je(Fr)}const vp=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},yp={__name:"App",setup(t){return(e,n)=>(Ja(),Xa(Lt(kc)))}},bp=vp(yp,[["__scopeId","data-v-0b1ce4d7"]]),Ep="modulepreload",wp=function(t){return"/futamap/"+t},wo={},Io=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=wp(c),c in wo)return;wo[c]=!0;const a=c.endsWith(".css"),f=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":Ep,a||(l.as="script"),l.crossOrigin="",l.href=c,o&&l.setAttribute("nonce",o),document.head.appendChild(l),a)return new Promise((h,p)=>{l.addEventListener("load",h),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};function ri(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Nc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ip=Nc,Dc=new Kn("auth","Firebase",Nc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new dc("@firebase/auth");function Sp(t,...e){br.logLevel<=Q.WARN&&br.warn(`Auth (${Gn}): ${t}`,...e)}function ur(t,...e){br.logLevel<=Q.ERROR&&br.error(`Auth (${Gn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,...e){throw si(t,...e)}function Ve(t,...e){return si(t,...e)}function Mc(t,e,n){const r=Object.assign(Object.assign({},Ip()),{[e]:n});return new Kn("auth","Firebase",r).create(e,{appName:t.name})}function It(t){return Mc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function si(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dc.create(t,...e)}function F(t,e,...n){if(!t)throw si(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ur(e),new Error(e)}function ot(t,e){t||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Tp(){return So()==="http:"||So()==="https:"}function So(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tp()||qf()||"connection"in navigator)?navigator.onLine:!0}function Cp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=Gf()||Jf()}get(){return Rp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=new qn(3e4,6e4);function jt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pt(t,e,n,r,s={}){return Lc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=zn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),xc.fetch()(Uc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Lc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ap),e);try{const s=new kp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw sr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,f]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw sr(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw sr(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw sr(t,"user-disabled",o);const l=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Mc(t,l,f);Me(t,l)}}catch(s){if(s instanceof Ct)throw s;Me(t,"network-request-failed",{message:String(s)})}}async function Br(t,e,n,r,s={}){const i=await Pt(t,e,n,r,s);return"mfaPendingCredential"in i&&Me(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Uc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ii(t.config,s):`${t.config.apiScheme}://${s}`}function Op(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ve(this.auth,"network-request-failed")),Pp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ve(t,e,r);return s.customData._tokenResponse=n,s}function To(t){return t!==void 0&&t.enterprise!==void 0}class Np{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Op(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Dp(t,e){return Pt(t,"GET","/v2/recaptchaConfig",jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mp(t,e){return Pt(t,"POST","/v1/accounts:delete",e)}async function Fc(t,e){return Pt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xp(t,e=!1){const n=At(t),r=await n.getIdToken(e),s=oi(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(cs(s.auth_time)),issuedAtTime:On(cs(s.iat)),expirationTime:On(cs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function cs(t){return Number(t)*1e3}function oi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ur("JWT malformed, contained fewer than 3 sections"),null;try{const s=lc(n);return s?JSON.parse(s):(ur("Failed to decode base64 JWT payload"),null)}catch(s){return ur("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ro(t){const e=oi(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&Lp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Lp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(t){var e;const n=t.auth,r=await t.getIdToken(),s=await $n(t,Fc(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Bc(i.providerUserInfo):[],c=Bp(t.providerData,o),a=t.isAnonymous,f=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),l=a?f:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ns(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Fp(t){const e=At(t);await Er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Bc(t){return t.map(e=>{var{providerId:n}=e,r=ri(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $p(t,e){const n=await Lc(t,{},async()=>{const r=zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Uc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",xc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Hp(t,e){return Pt(t,"POST","/v2/accounts:revokeToken",jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ro(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=Ro(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $p(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new nn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ri(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Up(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ns(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $n(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xp(this,e)}reload(){return Fp(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Er(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await $n(this,Mp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,f,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,$=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,x=(f=n.createdAt)!==null&&f!==void 0?f:void 0,N=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:M,emailVerified:O,isAnonymous:j,providerData:re,stsTokenManager:ee}=n;F(M&&ee,e,"internal-error");const Te=nn.fromJSON(this.name,ee);F(typeof M=="string",e,"internal-error"),dt(h,e.name),dt(p,e.name),F(typeof O=="boolean",e,"internal-error"),F(typeof j=="boolean",e,"internal-error"),dt(m,e.name),dt(C,e.name),dt(P,e.name),dt($,e.name),dt(x,e.name),dt(N,e.name);const _e=new tt({uid:M,auth:e,email:p,emailVerified:O,displayName:h,isAnonymous:j,photoURL:C,phoneNumber:m,tenantId:P,stsTokenManager:Te,createdAt:x,lastLoginAt:N});return re&&Array.isArray(re)&&(_e.providerData=re.map(Re=>Object.assign({},Re))),$&&(_e._redirectEventId=$),_e}static async _fromIdTokenResponse(e,n,r=!1){const s=new nn;s.updateFromServerResponse(n);const i=new tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Er(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Bc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new nn;c.updateFromIdToken(r);const a=new tt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ns(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,f),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map;function nt(t){ot(t instanceof Function,"Expected a class definition");let e=Co.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Co.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$c.type="NONE";const Ao=$c;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e,n){return`firebase:${t}:${e}:${n}`}class rn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fr(this.userKey,s.apiKey,i),this.fullPersistenceKey=fr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rn(nt(Ao),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||nt(Ao);const o=fr(r,e.config.apiKey,e.name);let c=null;for(const f of n)try{const l=await f._get(o);if(l){const h=tt._fromJSON(e,l);f!==i&&(c=h),i=f;break}}catch{}const a=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new rn(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==i)try{await f._remove(o)}catch{}})),new rn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zc(e))return"Blackberry";if(Gc(e))return"Webos";if(jc(e))return"Safari";if((e.includes("chrome/")||Vc(e))&&!e.includes("edge/"))return"Chrome";if(Kc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hc(t=ge()){return/firefox\//i.test(t)}function jc(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vc(t=ge()){return/crios\//i.test(t)}function Wc(t=ge()){return/iemobile/i.test(t)}function Kc(t=ge()){return/android/i.test(t)}function zc(t=ge()){return/blackberry/i.test(t)}function Gc(t=ge()){return/webos/i.test(t)}function ai(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jp(t=ge()){var e;return ai(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vp(){return Yf()&&document.documentMode===10}function qc(t=ge()){return ai(t)||Kc(t)||Gc(t)||zc(t)||/windows phone/i.test(t)||Wc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t,e=[]){let n;switch(t){case"Browser":n=Po(ge());break;case"Worker":n=`${Po(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(t,e={}){return Pt(t,"GET","/v2/passwordPolicy",jt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=6;class Gp{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oo(this),this.idTokenSubscription=new Oo(this),this.beforeStateQueue=new Wp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await rn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fc(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Er(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject(It(this));const n=e?At(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kp(this),n=new Gp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await rn.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Sp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hn(t){return At(t)}class Oo{constructor(e){this.auth=e,this.observer=null,this.addObserver=rd(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $r={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jp(t){$r=t}function Yc(t){return $r.loadJS(t)}function Yp(){return $r.recaptchaEnterpriseScript}function Xp(){return $r.gapiScript}function Qp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Zp="recaptcha-enterprise",eg="NO_RECAPTCHA";class tg{constructor(e){this.type=Zp,this.auth=hn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Dp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new Np(a);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,o(f.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;To(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(f=>{o(f)}).catch(()=>{o(eg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&To(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Yp();a.length!==0&&(a+=c),Yc(a).then(()=>{s(c,i,o)}).catch(f=>{o(f)})}}).catch(c=>{o(c)})})}}async function ko(t,e,n,r=!1){const s=new tg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function No(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ko(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ko(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e){const n=gc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vr(i,e??{}))return s;Me(s,"already-initialized")}return n.initialize({options:e})}function rg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sg(t,e,n){const r=hn(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Xc(e),{host:o,port:c}=ig(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),og()}function Xc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ig(t){const e=Xc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Do(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Do(o)}}}function Do(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function og(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function ag(t,e){return Pt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(t,e){return Br(t,"POST","/v1/accounts:signInWithPassword",jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(t,e){return Br(t,"POST","/v1/accounts:signInWithEmailLink",jt(t,e))}async function ug(t,e){return Br(t,"POST","/v1/accounts:signInWithEmailLink",jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ci{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Hn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return No(e,n,"signInWithPassword",cg);case"emailLink":return lg(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return No(e,r,"signUpPassword",ag);case"emailLink":return ug(e,{idToken:n,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(t,e){return Br(t,"POST","/v1/accounts:signInWithIdp",jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="http://localhost";class $t extends ci{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ri(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $t(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sn(e,n)}buildRequest(){const e={requestUri:fg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hg(t){const e=En(wn(t)).link,n=e?En(wn(e)).deep_link_id:null,r=En(wn(t)).deep_link_id;return(r?En(wn(r)).link:null)||r||n||e||t}class li{constructor(e){var n,r,s,i,o,c;const a=En(wn(e)),f=(n=a.apiKey)!==null&&n!==void 0?n:null,l=(r=a.oobCode)!==null&&r!==void 0?r:null,h=dg((s=a.mode)!==null&&s!==void 0?s:null);F(f&&l&&h,"argument-error"),this.apiKey=f,this.operation=h,this.code=l,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=hg(e);try{return new li(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.providerId=pn.PROVIDER_ID}static credential(e,n){return Hn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=li.parseLink(n);return F(r,"argument-error"),Hn._fromEmailAndCode(e,r.code,r.tenantId)}}pn.PROVIDER_ID="password";pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Qc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Jn{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $t._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Jn{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Jn{constructor(){super("twitter.com")}static credential(e,n){return $t._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tt._fromIdTokenResponse(e,r,s),o=Mo(r);return new dn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mo(r);return new dn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Ct{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new wr(e,n,r,s)}}function Zc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wr._fromErrorAndOperation(t,i,e,r):i})}async function pg(t,e,n=!1){const r=await $n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(t,e,n=!1){const{auth:r}=t;if(Ze(r.app))return Promise.reject(It(r));const s="reauthenticate";try{const i=await $n(t,Zc(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=oi(i.idToken);F(o,r,"internal-error");const{sub:c}=o;return F(t.uid===c,r,"user-mismatch"),dn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(t,e,n=!1){if(Ze(t.app))return Promise.reject(It(t));const r="signIn",s=await Zc(t,r,e),i=await dn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function mg(t,e){return el(hn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(t){const e=hn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Vm(t,e,n){return Ze(t.app)?Promise.reject(It(t)):mg(At(t),pn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_g(t),r})}function vg(t,e,n,r){return At(t).onIdTokenChanged(e,n,r)}function yg(t,e,n){return At(t).beforeAuthStateChanged(e,n)}function bg(t,e,n,r){return At(t).onAuthStateChanged(e,n,r)}const Ir="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ir,"1"),this.storage.removeItem(Ir),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=1e3,wg=10;class nl extends tl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Vp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Eg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nl.type="LOCAL";const Ig=nl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends tl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rl.type="SESSION";const sl=rl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Hr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async f=>f(n.origin,i)),a=await Sg(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const f=ui("",20);s.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===f)switch(p.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return window}function Rg(t){We().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function Cg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ag(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Pg(){return il()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="firebaseLocalStorageDb",Og=1,Sr="firebaseLocalStorage",al="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jr(t,e){return t.transaction([Sr],e?"readwrite":"readonly").objectStore(Sr)}function kg(){const t=indexedDB.deleteDatabase(ol);return new Yn(t).toPromise()}function Ds(){const t=indexedDB.open(ol,Og);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sr,{keyPath:al})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sr)?e(r):(r.close(),await kg(),e(await Ds()))})})}async function xo(t,e,n){const r=jr(t,!0).put({[al]:e,value:n});return new Yn(r).toPromise()}async function Ng(t,e){const n=jr(t,!1).get(e),r=await new Yn(n).toPromise();return r===void 0?null:r.value}function Lo(t,e){const n=jr(t,!0).delete(e);return new Yn(n).toPromise()}const Dg=800,Mg=3;class cl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ds(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Mg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return il()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hr._getInstance(Pg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Cg(),!this.activeServiceWorker)return;this.sender=new Tg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ag()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ds();return await xo(e,Ir,"1"),await Lo(e,Ir),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ng(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=jr(s,!1).getAll();return new Yn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cl.type="LOCAL";const xg=cl;new qn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e){return e?nt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends ci{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ug(t){return el(t.auth,new fi(t),t.bypassAuthState)}function Fg(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),gg(n,new fi(t),t.bypassAuthState)}async function Bg(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),pg(n,new fi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ug;case"linkViaPopup":case"linkViaRedirect":return Bg;case"reauthViaPopup":case"reauthViaRedirect":return Fg;default:Me(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new qn(2e3,1e4);class Jt extends ll{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=ui();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$g.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="pendingRedirect",dr=new Map;class jg extends ll{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dr.get(this.auth._key());if(!e){try{const r=await Vg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dr.set(this.auth._key(),e)}return this.bypassAuthState||dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vg(t,e){const n=zg(e),r=Kg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Wg(t,e){dr.set(t._key(),e)}function Kg(t){return nt(t._redirectPersistence)}function zg(t){return fr(Hg,t.config.apiKey,t.name)}async function Gg(t,e,n=!1){if(Ze(t.app))return Promise.reject(It(t));const r=hn(t),s=Lg(r,e),o=await new jg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=10*60*1e3;class Jg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ul(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ve(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uo(e))}saveEventToCache(e){this.cachedEventUids.add(Uo(e)),this.lastProcessedEventTime=Date.now()}}function Uo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ul({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ul(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(t,e={}){return Pt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zg=/^https?/;async function em(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Xg(t);for(const n of e)try{if(tm(n))return}catch{}Me(t,"unauthorized-domain")}function tm(t){const e=ks(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Zg.test(n))return!1;if(Qg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new qn(3e4,6e4);function Fo(){const t=We().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rm(t){return new Promise((e,n)=>{var r,s,i;function o(){Fo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fo(),n(Ve(t,"network-request-failed"))},timeout:nm.get()})}if(!((s=(r=We().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=We().gapi)===null||i===void 0)&&i.load)o();else{const c=Qp("iframefcb");return We()[c]=()=>{gapi.load?o():n(Ve(t,"network-request-failed"))},Yc(`${Xp()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw hr=null,e})}let hr=null;function sm(t){return hr=hr||rm(t),hr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=new qn(5e3,15e3),om="__/auth/iframe",am="emulator/auth/iframe",cm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function um(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ii(e,am):`https://${t.config.authDomain}/${om}`,r={apiKey:e.apiKey,appName:t.name,v:Gn},s=lm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zn(r).slice(1)}`}async function fm(t){const e=await sm(t),n=We().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:um(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ve(t,"network-request-failed"),c=We().setTimeout(()=>{i(o)},im.get());function a(){We().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hm=500,pm=600,gm="_blank",mm="http://localhost";class Bo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _m(t,e,n,r=hm,s=pm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},dm),{width:r.toString(),height:s.toString(),top:i,left:o}),f=ge().toLowerCase();n&&(c=Vc(f)?gm:n),Hc(f)&&(e=e||mm,a.scrollbars="yes");const l=Object.entries(a).reduce((p,[m,C])=>`${p}${m}=${C},`,"");if(jp(f)&&c!=="_self")return vm(e||"",c),new Bo(null);const h=window.open(e||"",c,l);F(h,t,"popup-blocked");try{h.focus()}catch{}return new Bo(h)}function vm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="__/auth/handler",bm="emulator/auth/handler",Em=encodeURIComponent("fac");async function $o(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gn,eventId:s};if(e instanceof Qc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries({}))o[l]=h}if(e instanceof Jn){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const l of Object.keys(c))c[l]===void 0&&delete c[l];const a=await t._getAppCheckToken(),f=a?`#${Em}=${encodeURIComponent(a)}`:"";return`${wm(t)}?${zn(c).slice(1)}${f}`}function wm({config:t}){return t.emulator?ii(t,bm):`https://${t.authDomain}/${ym}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="webStorageSupport";class Im{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sl,this._completeRedirectFn=Gg,this._overrideRedirectResult=Wg}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $o(e,n,r,ks(),s);return _m(e,o,ui())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $o(e,n,r,ks(),s);return Rg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fm(e),r=new Jg(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ls,{type:ls},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ls];o!==void 0&&n(!!o),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=em(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qc()||jc()||ai()}}const Sm=Im;var Ho="@firebase/auth",jo="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cm(t){Ln(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jc(t)},f=new qp(r,s,i,a);return rg(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new ln("auth-internal",e=>{const n=hn(e.getProvider("auth").getImmediate());return(r=>new Tm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Ho,jo,Rm(t)),tn(Ho,jo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=5*60,Pm=fc("authIdTokenMaxAge")||Am;let Vo=null;const Om=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Pm)return;const s=n==null?void 0:n.token;Vo!==s&&(Vo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function km(t=rh()){const e=gc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ng(t,{popupRedirectResolver:Sm,persistence:[xg,Ig,sl]}),r=fc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Om(i.toString());yg(n,o,()=>o(n.currentUser)),vg(n,c=>o(c))}}const s=Kf("auth");return s&&sg(n,`http://${s}`),n}function Nm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Jp({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ve("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Nm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cm("Browser");const fl=mp({history:Kh("/futamap/"),routes:[{path:"/",name:"map",component:()=>Io(()=>import("./PokeFutaView-Kd2Hqd5X.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0}},{path:"/signin",name:"signin",component:()=>Io(()=>import("./SignIn-CBdiUge4.js"),__vite__mapDeps([2,3]))}]}),Dm=()=>new Promise((t,e)=>{const n=bg(km(),r=>{n(),t(r)},e)});fl.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await Dm()?n():n("/signin"):n()});const di=kf(bp),Mm=Uf.FIREBASE.config;mc(Mm);di.use(Lf());di.use(fl);di.mount("#app");export{Xe as F,vp as _,Ja as a,Za as b,Um as c,Yu as d,Lm as e,Uf as f,ar as g,Bm as h,Hm as i,kf as j,Se as k,Ca as l,km as m,Fm as n,uu as o,jm as p,_a as r,Vm as s,Sl as t,Lt as u,$m as v,xm as w};
