(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ic(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ie={},Dr=[],Bt=()=>{},Cm=()=>!1,Eo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),wc=t=>t.startsWith("onUpdate:"),Je=Object.assign,Ac=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},km=Object.prototype.hasOwnProperty,ve=(t,e)=>km.call(t,e),re=Array.isArray,Nr=t=>To(t)==="[object Map]",Ad=t=>To(t)==="[object Set]",ae=t=>typeof t=="function",xe=t=>typeof t=="string",Un=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Rd=t=>(Pe(t)||ae(t))&&ae(t.then)&&ae(t.catch),bd=Object.prototype.toString,To=t=>bd.call(t),Vm=t=>To(t).slice(8,-1),Sd=t=>To(t)==="[object Object]",Rc=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Rs=Ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Io=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Dm=/-(\w)/g,bt=Io(t=>t.replace(Dm,(e,n)=>n?n.toUpperCase():"")),Nm=/\B([A-Z])/g,Bn=Io(t=>t.replace(Nm,"-$1").toLowerCase()),wo=Io(t=>t.charAt(0).toUpperCase()+t.slice(1)),ga=Io(t=>t?`on${wo(t)}`:""),On=(t,e)=>!Object.is(t,e),Bi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Pd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ua=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cu;const Cd=()=>Cu||(Cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ao(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xe(r)?Lm(r):Ao(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(xe(t)||Pe(t))return t}const Om=/;(?![^(]*\))/g,xm=/:([^]+)/,Mm=/\/\*[^]*?\*\//g;function Lm(t){const e={};return t.replace(Mm,"").split(Om).forEach(n=>{if(n){const r=n.split(xm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Qs(t){let e="";if(xe(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Qs(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Um=Ic(Fm);function kd(t){return!!t||t===""}const Vd=t=>!!(t&&t.__v_isRef===!0),Js=t=>xe(t)?t:t==null?"":re(t)||Pe(t)&&(t.toString===bd||!ae(t.toString))?Vd(t)?Js(t.value):JSON.stringify(t,Dd,2):String(t),Dd=(t,e)=>Vd(e)?Dd(t,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ma(r,i)+" =>"]=s,n),{})}:Ad(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ma(n))}:Un(e)?ma(e):Pe(e)&&!re(e)&&!Sd(e)?String(e):e,ma=(t,e="")=>{var n;return Un(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dt;class Nd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=dt,!e&&dt&&(this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){dt=this}off(){dt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Od(t){return new Nd(t)}function xd(){return dt}function Bm(t,e=!1){dt&&dt.cleanups.push(t)}let Ae;const _a=new WeakSet;class Md{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dt&&dt.active&&dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_a.has(this)&&(_a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ku(this),Ud(this);const e=Ae,n=kt;Ae=this,kt=!0;try{return this.fn()}finally{Bd(this),Ae=e,kt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pc(e);this.deps=this.depsTail=void 0,ku(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ba(this)&&this.run()}get dirty(){return Ba(this)}}let Ld=0,Vr;function Fd(t){t.flags|=8,t.next=Vr,Vr=t}function bc(){Ld++}function Sc(){if(--Ld>0)return;let t;for(;Vr;){let e=Vr,n;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Vr,Vr=void 0;e;){if(n=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ud(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Pc(r),$m(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ba(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($d(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $d(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ms))return;t.globalVersion=Ms;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ba(t)){t.flags&=-3;return}const n=Ae,r=kt;Ae=t,kt=!0;try{Ud(t);const s=t.fn(t._value);(e.version===0||On(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ae=n,kt=r,Bd(t),t.flags&=-3}}function Pc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Pc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function $m(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let kt=!0;const jd=[];function $n(){jd.push(kt),kt=!1}function jn(){const t=jd.pop();kt=t===void 0?!0:t}function ku(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ae;Ae=void 0;try{e()}finally{Ae=n}}}let Ms=0;class jm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ae||!kt||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new jm(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,qd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=r)}return n}trigger(e){this.version++,Ms++,this.notify(e)}notify(e){bc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Sc()}}}function qd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)qd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xi=new WeakMap,ir=Symbol(""),$a=Symbol(""),Ls=Symbol("");function ot(t,e,n){if(kt&&Ae){let r=Xi.get(t);r||Xi.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Cc),s.target=t,s.map=r,s.key=n),s.track()}}function cn(t,e,n,r,s,i){const a=Xi.get(t);if(!a){Ms++;return}const c=l=>{l&&l.trigger()};if(bc(),e==="clear")a.forEach(c);else{const l=re(t),d=l&&Rc(n);if(l&&n==="length"){const f=Number(r);a.forEach((g,y)=>{(y==="length"||y===Ls||!Un(y)&&y>=f)&&c(g)})}else switch(n!==void 0&&c(a.get(n)),d&&c(a.get(Ls)),e){case"add":l?d&&c(a.get("length")):(c(a.get(ir)),Nr(t)&&c(a.get($a)));break;case"delete":l||(c(a.get(ir)),Nr(t)&&c(a.get($a)));break;case"set":Nr(t)&&c(a.get(ir));break}}Sc()}function qm(t,e){const n=Xi.get(t);return n&&n.get(e)}function Ar(t){const e=me(t);return e===t?e:(ot(e,"iterate",Ls),At(t)?e:e.map(st))}function Ro(t){return ot(t=me(t),"iterate",Ls),t}const Hm={__proto__:null,[Symbol.iterator](){return ya(this,Symbol.iterator,st)},concat(...t){return Ar(this).concat(...t.map(e=>re(e)?Ar(e):e))},entries(){return ya(this,"entries",t=>(t[1]=st(t[1]),t))},every(t,e){return Zt(this,"every",t,e,void 0,arguments)},filter(t,e){return Zt(this,"filter",t,e,n=>n.map(st),arguments)},find(t,e){return Zt(this,"find",t,e,st,arguments)},findIndex(t,e){return Zt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Zt(this,"findLast",t,e,st,arguments)},findLastIndex(t,e){return Zt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Zt(this,"forEach",t,e,void 0,arguments)},includes(...t){return va(this,"includes",t)},indexOf(...t){return va(this,"indexOf",t)},join(t){return Ar(this).join(t)},lastIndexOf(...t){return va(this,"lastIndexOf",t)},map(t,e){return Zt(this,"map",t,e,void 0,arguments)},pop(){return ys(this,"pop")},push(...t){return ys(this,"push",t)},reduce(t,...e){return Vu(this,"reduce",t,e)},reduceRight(t,...e){return Vu(this,"reduceRight",t,e)},shift(){return ys(this,"shift")},some(t,e){return Zt(this,"some",t,e,void 0,arguments)},splice(...t){return ys(this,"splice",t)},toReversed(){return Ar(this).toReversed()},toSorted(t){return Ar(this).toSorted(t)},toSpliced(...t){return Ar(this).toSpliced(...t)},unshift(...t){return ys(this,"unshift",t)},values(){return ya(this,"values",st)}};function ya(t,e,n){const r=Ro(t),s=r[e]();return r!==t&&!At(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Wm=Array.prototype;function Zt(t,e,n,r,s,i){const a=Ro(t),c=a!==t&&!At(t),l=a[e];if(l!==Wm[e]){const g=l.apply(t,i);return c?st(g):g}let d=n;a!==t&&(c?d=function(g,y){return n.call(this,st(g),y,t)}:n.length>2&&(d=function(g,y){return n.call(this,g,y,t)}));const f=l.call(a,d,r);return c&&s?s(f):f}function Vu(t,e,n,r){const s=Ro(t);let i=n;return s!==t&&(At(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,st(c),l,t)}),s[e](i,...r)}function va(t,e,n){const r=me(t);ot(r,"iterate",Ls);const s=r[e](...n);return(s===-1||s===!1)&&Nc(n[0])?(n[0]=me(n[0]),r[e](...n)):s}function ys(t,e,n=[]){$n(),bc();const r=me(t)[e].apply(t,n);return Sc(),jn(),r}const zm=Ic("__proto__,__v_isRef,__isVue"),Hd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Un));function Km(t){Un(t)||(t=String(t));const e=me(this);return ot(e,"has",t),e.hasOwnProperty(t)}class Wd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?o_:Qd:i?Gd:Kd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=Hm[n]))return l;if(n==="hasOwnProperty")return Km}const c=Reflect.get(e,n,De(e)?e:r);return(Un(n)?Hd.has(n):zm(n))||(s||ot(e,"get",n),i)?c:De(c)?a&&Rc(n)?c:c.value:Pe(c)?s?Jd(c):So(c):c}}class zd extends Wd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=lr(i);if(!At(r)&&!lr(r)&&(i=me(i),r=me(r)),!re(e)&&De(i)&&!De(r))return l?!1:(i.value=r,!0)}const a=re(e)&&Rc(n)?Number(n)<e.length:ve(e,n),c=Reflect.set(e,n,r,De(e)?e:s);return e===me(s)&&(a?On(r,i)&&cn(e,"set",n,r):cn(e,"add",n,r)),c}deleteProperty(e,n){const r=ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Un(n)||!Hd.has(n))&&ot(e,"has",n),r}ownKeys(e){return ot(e,"iterate",re(e)?"length":ir),Reflect.ownKeys(e)}}class Gm extends Wd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Qm=new zd,Jm=new Gm,Ym=new zd(!0);const kc=t=>t,bo=t=>Reflect.getPrototypeOf(t);function Pi(t,e,n=!1,r=!1){t=t.__v_raw;const s=me(t),i=me(e);n||(On(e,i)&&ot(s,"get",e),ot(s,"get",i));const{has:a}=bo(s),c=r?kc:n?xc:st;if(a.call(s,e))return c(t.get(e));if(a.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Ci(t,e=!1){const n=this.__v_raw,r=me(n),s=me(t);return e||(On(t,s)&&ot(r,"has",t),ot(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ki(t,e=!1){return t=t.__v_raw,!e&&ot(me(t),"iterate",ir),Reflect.get(t,"size",t)}function Du(t,e=!1){!e&&!At(t)&&!lr(t)&&(t=me(t));const n=me(this);return bo(n).has.call(n,t)||(n.add(t),cn(n,"add",t,t)),this}function Nu(t,e,n=!1){!n&&!At(e)&&!lr(e)&&(e=me(e));const r=me(this),{has:s,get:i}=bo(r);let a=s.call(r,t);a||(t=me(t),a=s.call(r,t));const c=i.call(r,t);return r.set(t,e),a?On(e,c)&&cn(r,"set",t,e):cn(r,"add",t,e),this}function Ou(t){const e=me(this),{has:n,get:r}=bo(e);let s=n.call(e,t);s||(t=me(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&cn(e,"delete",t,void 0),i}function xu(){const t=me(this),e=t.size!==0,n=t.clear();return e&&cn(t,"clear",void 0,void 0),n}function Vi(t,e){return function(r,s){const i=this,a=i.__v_raw,c=me(a),l=e?kc:t?xc:st;return!t&&ot(c,"iterate",ir),a.forEach((d,f)=>r.call(s,l(d),l(f),i))}}function Di(t,e,n){return function(...r){const s=this.__v_raw,i=me(s),a=Nr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,d=s[t](...r),f=n?kc:e?xc:st;return!e&&ot(i,"iterate",l?$a:ir),{next(){const{value:g,done:y}=d.next();return y?{value:g,done:y}:{value:c?[f(g[0]),f(g[1])]:f(g),done:y}},[Symbol.iterator](){return this}}}}function vn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xm(){const t={get(i){return Pi(this,i)},get size(){return ki(this)},has:Ci,add:Du,set:Nu,delete:Ou,clear:xu,forEach:Vi(!1,!1)},e={get(i){return Pi(this,i,!1,!0)},get size(){return ki(this)},has:Ci,add(i){return Du.call(this,i,!0)},set(i,a){return Nu.call(this,i,a,!0)},delete:Ou,clear:xu,forEach:Vi(!1,!0)},n={get(i){return Pi(this,i,!0)},get size(){return ki(this,!0)},has(i){return Ci.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Vi(!0,!1)},r={get(i){return Pi(this,i,!0,!0)},get size(){return ki(this,!0)},has(i){return Ci.call(this,i,!0)},add:vn("add"),set:vn("set"),delete:vn("delete"),clear:vn("clear"),forEach:Vi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Di(i,!1,!1),n[i]=Di(i,!0,!1),e[i]=Di(i,!1,!0),r[i]=Di(i,!0,!0)}),[t,n,e,r]}const[Zm,e_,t_,n_]=Xm();function Vc(t,e){const n=e?t?n_:t_:t?e_:Zm;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ve(n,s)&&s in r?n:r,s,i)}const r_={get:Vc(!1,!1)},s_={get:Vc(!1,!0)},i_={get:Vc(!0,!1)};const Kd=new WeakMap,Gd=new WeakMap,Qd=new WeakMap,o_=new WeakMap;function a_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function c_(t){return t.__v_skip||!Object.isExtensible(t)?0:a_(Vm(t))}function So(t){return lr(t)?t:Dc(t,!1,Qm,r_,Kd)}function l_(t){return Dc(t,!1,Ym,s_,Gd)}function Jd(t){return Dc(t,!0,Jm,i_,Qd)}function Dc(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=c_(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function Pn(t){return lr(t)?Pn(t.__v_raw):!!(t&&t.__v_isReactive)}function lr(t){return!!(t&&t.__v_isReadonly)}function At(t){return!!(t&&t.__v_isShallow)}function Nc(t){return t?!!t.__v_raw:!1}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Oc(t){return!ve(t,"__v_skip")&&Object.isExtensible(t)&&Pd(t,"__v_skip",!0),t}const st=t=>Pe(t)?So(t):t,xc=t=>Pe(t)?Jd(t):t;function De(t){return t?t.__v_isRef===!0:!1}function Rt(t){return u_(t,!1)}function u_(t,e){return De(t)?t:new h_(t,e)}class h_{constructor(e,n){this.dep=new Cc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:me(e),this._value=n?e:st(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||At(e)||lr(e);e=r?e:me(e),On(e,n)&&(this._rawValue=e,this._value=r?e:st(e),this.dep.trigger())}}function d_(t){return De(t)?t.value:t}const f_={get:(t,e,n)=>e==="__v_raw"?t:d_(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return De(s)&&!De(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Yd(t){return Pn(t)?t:new Proxy(t,f_)}function p_(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=m_(t,n);return e}class g_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return qm(me(this._object),this._key)}}function m_(t,e,n){const r=t[e];return De(r)?r:new g_(t,e,n)}class __{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Cc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return Fd(this),!0}get value(){const e=this.dep.track();return $d(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function y_(t,e,n=!1){let r,s;return ae(t)?r=t:(r=t.get,s=t.set),new __(r,s,n)}const Ni={},Zi=new WeakMap;let er;function v_(t,e=!1,n=er){if(n){let r=Zi.get(n);r||Zi.set(n,r=[]),r.push(t)}}function E_(t,e,n=Ie){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,d=H=>s?H:At(H)||s===!1||s===0?tn(H,1):tn(H);let f,g,y,S,k=!1,L=!1;if(De(t)?(g=()=>t.value,k=At(t)):Pn(t)?(g=()=>d(t),k=!0):re(t)?(L=!0,k=t.some(H=>Pn(H)||At(H)),g=()=>t.map(H=>{if(De(H))return H.value;if(Pn(H))return d(H);if(ae(H))return l?l(H,2):H()})):ae(t)?e?g=l?()=>l(t,2):t:g=()=>{if(y){$n();try{y()}finally{jn()}}const H=er;er=f;try{return l?l(t,3,[S]):t(S)}finally{er=H}}:g=Bt,e&&s){const H=g,oe=s===!0?1/0:s;g=()=>tn(H(),oe)}const F=xd(),G=()=>{f.stop(),F&&Ac(F.effects,f)};if(i&&e){const H=e;e=(...oe)=>{H(...oe),G()}}let J=L?new Array(t.length).fill(Ni):Ni;const Y=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const oe=f.run();if(s||k||(L?oe.some((_e,w)=>On(_e,J[w])):On(oe,J))){y&&y();const _e=er;er=f;try{const w=[oe,J===Ni?void 0:L&&J[0]===Ni?[]:J,S];l?l(e,3,w):e(...w),J=oe}finally{er=_e}}}else f.run()};return c&&c(Y),f=new Md(g),f.scheduler=a?()=>a(Y,!1):Y,S=H=>v_(H,!1,f),y=f.onStop=()=>{const H=Zi.get(f);if(H){if(l)l(H,4);else for(const oe of H)oe();Zi.delete(f)}},e?r?Y(!0):J=f.run():a?a(Y.bind(null,!0),!0):f.run(),G.pause=f.pause.bind(f),G.resume=f.resume.bind(f),G.stop=G,G}function tn(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,De(t))tn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)tn(t[r],e,n);else if(Ad(t)||Nr(t))t.forEach(r=>{tn(r,e,n)});else if(Sd(t)){for(const r in t)tn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&tn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ys(t,e,n,r){try{return r?t(...r):t()}catch(s){Po(s,e,n)}}function zt(t,e,n,r){if(ae(t)){const s=Ys(t,e,n,r);return s&&Rd(s)&&s.catch(i=>{Po(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(zt(t[i],e,n,r));return s}}function Po(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let c=e.parent;const l=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](t,l,d)===!1)return}c=c.parent}if(i){$n(),Ys(i,null,10,[t,l,d]),jn();return}}T_(t,n,s,r,a)}function T_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let Fs=!1,ja=!1;const ft=[];let Ft=0;const Or=[];let In=null,br=0;const Xd=Promise.resolve();let Mc=null;function Zd(t){const e=Mc||Xd;return t?e.then(this?t.bind(this):t):e}function I_(t){let e=Fs?Ft+1:0,n=ft.length;for(;e<n;){const r=e+n>>>1,s=ft[r],i=Us(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Lc(t){if(!(t.flags&1)){const e=Us(t),n=ft[ft.length-1];!n||!(t.flags&2)&&e>=Us(n)?ft.push(t):ft.splice(I_(e),0,t),t.flags|=1,ef()}}function ef(){!Fs&&!ja&&(ja=!0,Mc=Xd.then(nf))}function w_(t){re(t)?Or.push(...t):In&&t.id===-1?In.splice(br+1,0,t):t.flags&1||(Or.push(t),t.flags|=1),ef()}function Mu(t,e,n=Fs?Ft+1:0){for(;n<ft.length;n++){const r=ft[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ft.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function tf(t){if(Or.length){const e=[...new Set(Or)].sort((n,r)=>Us(n)-Us(r));if(Or.length=0,In){In.push(...e);return}for(In=e,br=0;br<In.length;br++){const n=In[br];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}In=null,br=0}}const Us=t=>t.id==null?t.flags&2?-1:1/0:t.id;function nf(t){ja=!1,Fs=!0;try{for(Ft=0;Ft<ft.length;Ft++){const e=ft[Ft];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ys(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ft<ft.length;Ft++){const e=ft[Ft];e&&(e.flags&=-2)}Ft=0,ft.length=0,tf(),Fs=!1,Mc=null,(ft.length||Or.length)&&nf()}}let je=null,rf=null;function eo(t){const e=je;return je=t,rf=t&&t.type.__scopeId||null,e}function sf(t,e=je,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Wu(-1);const i=eo(e);let a;try{a=t(...s)}finally{eo(i),r._d&&Wu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function A_(t,e){if(je===null)return t;const n=No(je),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Ie]=e[s];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&tn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Xn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&($n(),zt(l,n,8,[t.el,c,t,e]),jn())}}const R_=Symbol("_vte"),b_=t=>t.__isTeleport;function Fc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Fc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Nt(t,e){return ae(t)?Je({name:t.name},e,{setup:t}):t}function of(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function qa(t,e,n,r,s=!1){if(re(t)){t.forEach((k,L)=>qa(k,e&&(re(e)?e[L]:e),n,r,s));return}if(xr(r)&&!s)return;const i=r.shapeFlag&4?No(r.component):r.el,a=s?null:i,{i:c,r:l}=t,d=e&&e.r,f=c.refs===Ie?c.refs={}:c.refs,g=c.setupState,y=me(g),S=g===Ie?()=>!1:k=>ve(y,k);if(d!=null&&d!==l&&(xe(d)?(f[d]=null,S(d)&&(g[d]=null)):De(d)&&(d.value=null)),ae(l))Ys(l,c,12,[a,f]);else{const k=xe(l),L=De(l);if(k||L){const F=()=>{if(t.f){const G=k?S(l)?g[l]:f[l]:l.value;s?re(G)&&Ac(G,i):re(G)?G.includes(i)||G.push(i):k?(f[l]=[i],S(l)&&(g[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else k?(f[l]=a,S(l)&&(g[l]=a)):L&&(l.value=a,t.k&&(f[t.k]=a))};a?(F.id=-1,_t(F,n)):F()}}}const xr=t=>!!t.type.__asyncLoader,af=t=>t.type.__isKeepAlive;function S_(t,e){cf(t,"a",e)}function P_(t,e){cf(t,"da",e)}function cf(t,e,n=Ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Co(e,r,n),n){let s=n.parent;for(;s&&s.parent;)af(s.parent.vnode)&&C_(r,e,n,s),s=s.parent}}function C_(t,e,n,r){const s=Co(e,t,r,!0);uf(()=>{Ac(r[e],s)},n)}function Co(t,e,n=Ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{$n();const c=Xs(n),l=zt(e,n,t,a);return c(),jn(),l});return r?s.unshift(i):s.push(i),i}}const fn=t=>(e,n=Ke)=>{(!Do||t==="sp")&&Co(t,(...r)=>e(...r),n)},k_=fn("bm"),lf=fn("m"),V_=fn("bu"),D_=fn("u"),N_=fn("bum"),uf=fn("um"),O_=fn("sp"),x_=fn("rtg"),M_=fn("rtc");function L_(t,e=Ke){Co("ec",t,e)}const F_="components";function vt(t,e){return B_(F_,t,!0,e)||t}const U_=Symbol.for("v-ndc");function B_(t,e,n=!0,r=!1){const s=je||Ke;if(s){const i=s.type;{const c=ky(i,!1);if(c&&(c===e||c===bt(e)||c===wo(bt(e))))return i}const a=Lu(s[t]||i[t],e)||Lu(s.appContext[t],e);return!a&&r?i:a}}function Lu(t,e){return t&&(t[e]||t[bt(e)]||t[wo(bt(e))])}function $_(t,e,n,r){let s;const i=n,a=re(t);if(a||xe(t)){const c=a&&Pn(t);let l=!1;c&&(l=!At(t),t=Ro(t)),s=new Array(t.length);for(let d=0,f=t.length;d<f;d++)s[d]=e(l?st(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Pe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,d=c.length;l<d;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function j_(t,e,n={},r,s){if(je.ce||je.parent&&xr(je.parent)&&je.parent.ce)return n.name=e,Ee(),$t(yt,null,[qe("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Ee();const a=i&&hf(i(n)),c=$t(yt,{key:(n.key||a&&a.key||`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function hf(t){return t.some(e=>$c(e)?!(e.type===xn||e.type===yt&&!hf(e.children)):!0)?t:null}const Ha=t=>t?Df(t)?No(t):Ha(t.parent):null,bs=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ha(t.parent),$root:t=>Ha(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Uc(t),$forceUpdate:t=>t.f||(t.f=()=>{Lc(t.update)}),$nextTick:t=>t.n||(t.n=Zd.bind(t.proxy)),$watch:t=>hy.bind(t)}),Ea=(t,e)=>t!==Ie&&!t.__isScriptSetup&&ve(t,e),q_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let d;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ea(r,e))return a[e]=1,r[e];if(s!==Ie&&ve(s,e))return a[e]=2,s[e];if((d=t.propsOptions[0])&&ve(d,e))return a[e]=3,i[e];if(n!==Ie&&ve(n,e))return a[e]=4,n[e];Wa&&(a[e]=0)}}const f=bs[e];let g,y;if(f)return e==="$attrs"&&ot(t.attrs,"get",""),f(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==Ie&&ve(n,e))return a[e]=4,n[e];if(y=l.config.globalProperties,ve(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ea(s,e)?(s[e]=n,!0):r!==Ie&&ve(r,e)?(r[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||t!==Ie&&ve(t,a)||Ea(e,a)||(c=i[0])&&ve(c,a)||ve(r,a)||ve(bs,a)||ve(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fu(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wa=!0;function H_(t){const e=Uc(t),n=t.proxy,r=t.ctx;Wa=!1,e.beforeCreate&&Uu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:d,created:f,beforeMount:g,mounted:y,beforeUpdate:S,updated:k,activated:L,deactivated:F,beforeDestroy:G,beforeUnmount:J,destroyed:Y,unmounted:H,render:oe,renderTracked:_e,renderTriggered:w,errorCaptured:m,serverPrefetch:_,expose:T,inheritAttrs:A,components:R,directives:E,filters:ct}=e;if(d&&W_(d,r,null),a)for(const ce in a){const de=a[ce];ae(de)&&(r[ce]=de.bind(n))}if(s){const ce=s.call(n,n);Pe(ce)&&(t.data=So(ce))}if(Wa=!0,i)for(const ce in i){const de=i[ce],Pt=ae(de)?de.bind(n,n):ae(de.get)?de.get.bind(n,n):Bt,Hn=!ae(de)&&ae(de.set)?de.set.bind(n):Bt,Qt=qc({get:Pt,set:Hn});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:Me=>Qt.value=Me})}if(c)for(const ce in c)df(c[ce],r,n,ce);if(l){const ce=ae(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(de=>{Y_(de,ce[de])})}f&&Uu(f,t,"c");function Se(ce,de){re(de)?de.forEach(Pt=>ce(Pt.bind(n))):de&&ce(de.bind(n))}if(Se(k_,g),Se(lf,y),Se(V_,S),Se(D_,k),Se(S_,L),Se(P_,F),Se(L_,m),Se(M_,_e),Se(x_,w),Se(N_,J),Se(uf,H),Se(O_,_),re(T))if(T.length){const ce=t.exposed||(t.exposed={});T.forEach(de=>{Object.defineProperty(ce,de,{get:()=>n[de],set:Pt=>n[de]=Pt})})}else t.exposed||(t.exposed={});oe&&t.render===Bt&&(t.render=oe),A!=null&&(t.inheritAttrs=A),R&&(t.components=R),E&&(t.directives=E),_&&of(t)}function W_(t,e,n=Bt){re(t)&&(t=za(t));for(const r in t){const s=t[r];let i;Pe(s)?"default"in s?i=Ss(s.from||r,s.default,!0):i=Ss(s.from||r):i=Ss(s),De(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Uu(t,e,n){zt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function df(t,e,n,r){let s=r.includes(".")?bf(n,r):()=>n[r];if(xe(t)){const i=e[t];ae(i)&&Ps(s,i)}else if(ae(t))Ps(s,t.bind(n));else if(Pe(t))if(re(t))t.forEach(i=>df(i,e,n,r));else{const i=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(i)&&Ps(s,i,t)}}function Uc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(d=>to(l,d,a,!0)),to(l,e,a)),Pe(e)&&i.set(e,l),l}function to(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&to(t,i,n,!0),s&&s.forEach(a=>to(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=z_[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const z_={data:Bu,props:$u,emits:$u,methods:Ts,computed:Ts,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Ts,directives:Ts,watch:G_,provide:Bu,inject:K_};function Bu(t,e){return e?t?function(){return Je(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function K_(t,e){return Ts(za(t),za(e))}function za(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Ts(t,e){return t?Je(Object.create(null),t,e):e}function $u(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Je(Object.create(null),Fu(t),Fu(e??{})):e}function G_(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=ht(t[r],e[r]);return n}function ff(){return{app:null,config:{isNativeTag:Cm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Q_=0;function J_(t,e){return function(r,s=null){ae(r)||(r=Je({},r)),s!=null&&!Pe(s)&&(s=null);const i=ff(),a=new WeakSet,c=[];let l=!1;const d=i.app={_uid:Q_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Dy,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&ae(f.install)?(a.add(f),f.install(d,...g)):ae(f)&&(a.add(f),f(d,...g))),d},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),d},component(f,g){return g?(i.components[f]=g,d):i.components[f]},directive(f,g){return g?(i.directives[f]=g,d):i.directives[f]},mount(f,g,y){if(!l){const S=d._ceVNode||qe(r,s);return S.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),g&&e?e(S,f):t(S,f,y),l=!0,d._container=f,f.__vue_app__=d,No(S.component)}},onUnmount(f){c.push(f)},unmount(){l&&(zt(c,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(f,g){return i.provides[f]=g,d},runWithContext(f){const g=or;or=d;try{return f()}finally{or=g}}};return d}}let or=null;function Y_(t,e){if(Ke){let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[t]=e}}function Ss(t,e,n=!1){const r=Ke||je;if(r||or){const s=or?or._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ae(e)?e.call(r&&r.proxy):e}}function X_(){return!!(Ke||je||or)}const pf={},gf=()=>Object.create(pf),mf=t=>Object.getPrototypeOf(t)===pf;function Z_(t,e,n,r=!1){const s={},i=gf();t.propsDefaults=Object.create(null),_f(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:l_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ey(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=me(s),[l]=t.propsOptions;let d=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let g=0;g<f.length;g++){let y=f[g];if(ko(t.emitsOptions,y))continue;const S=e[y];if(l)if(ve(i,y))S!==i[y]&&(i[y]=S,d=!0);else{const k=bt(y);s[k]=Ka(l,c,k,S,t,!1)}else S!==i[y]&&(i[y]=S,d=!0)}}}else{_f(t,e,s,i)&&(d=!0);let f;for(const g in c)(!e||!ve(e,g)&&((f=Bn(g))===g||!ve(e,f)))&&(l?n&&(n[g]!==void 0||n[f]!==void 0)&&(s[g]=Ka(l,c,g,void 0,t,!0)):delete s[g]);if(i!==c)for(const g in i)(!e||!ve(e,g))&&(delete i[g],d=!0)}d&&cn(t.attrs,"set","")}function _f(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(Rs(l))continue;const d=e[l];let f;s&&ve(s,f=bt(l))?!i||!i.includes(f)?n[f]=d:(c||(c={}))[f]=d:ko(t.emitsOptions,l)||(!(l in r)||d!==r[l])&&(r[l]=d,a=!0)}if(i){const l=me(n),d=c||Ie;for(let f=0;f<i.length;f++){const g=i[f];n[g]=Ka(s,l,g,d[g],t,!ve(d,g))}}return a}function Ka(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=ve(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ae(l)){const{propsDefaults:d}=s;if(n in d)r=d[n];else{const f=Xs(s);r=d[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Bn(n))&&(r=!0))}return r}const ty=new WeakMap;function yf(t,e,n=!1){const r=n?ty:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!ae(t)){const f=g=>{l=!0;const[y,S]=yf(g,e,!0);Je(a,y),S&&c.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Pe(t)&&r.set(t,Dr),Dr;if(re(i))for(let f=0;f<i.length;f++){const g=bt(i[f]);ju(g)&&(a[g]=Ie)}else if(i)for(const f in i){const g=bt(f);if(ju(g)){const y=i[f],S=a[g]=re(y)||ae(y)?{type:y}:Je({},y),k=S.type;let L=!1,F=!0;if(re(k))for(let G=0;G<k.length;++G){const J=k[G],Y=ae(J)&&J.name;if(Y==="Boolean"){L=!0;break}else Y==="String"&&(F=!1)}else L=ae(k)&&k.name==="Boolean";S[0]=L,S[1]=F,(L||ve(S,"default"))&&c.push(g)}}const d=[a,c];return Pe(t)&&r.set(t,d),d}function ju(t){return t[0]!=="$"&&!Rs(t)}const vf=t=>t[0]==="_"||t==="$stable",Bc=t=>re(t)?t.map(Ut):[Ut(t)],ny=(t,e,n)=>{if(e._n)return e;const r=sf((...s)=>Bc(e(...s)),n);return r._c=!1,r},Ef=(t,e,n)=>{const r=t._ctx;for(const s in t){if(vf(s))continue;const i=t[s];if(ae(i))e[s]=ny(s,i,r);else if(i!=null){const a=Bc(i);e[s]=()=>a}}},Tf=(t,e)=>{const n=Bc(e);t.slots.default=()=>n},If=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},ry=(t,e,n)=>{const r=t.slots=gf();if(t.vnode.shapeFlag&32){const s=e._;s?(If(r,e,n),n&&Pd(r,"_",s,!0)):Ef(e,r)}else e&&Tf(t,e)},sy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ie;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:If(s,e,n):(i=!e.$stable,Ef(e,s)),a=e}else e&&(Tf(t,e),a={default:1});if(i)for(const c in s)!vf(c)&&a[c]==null&&delete s[c]},_t=yy;function iy(t){return oy(t)}function oy(t,e){const n=Cd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:d,setElementText:f,parentNode:g,nextSibling:y,setScopeId:S=Bt,insertStaticContent:k}=t,L=(v,I,C,x=null,D=null,O=null,j=void 0,B=null,U=!!I.dynamicChildren)=>{if(v===I)return;v&&!vs(v,I)&&(x=Jt(v),Me(v,D,O,!0),v=null),I.patchFlag===-2&&(U=!1,I.dynamicChildren=null);const{type:M,ref:Z,shapeFlag:q}=I;switch(M){case Vo:F(v,I,C,x);break;case xn:G(v,I,C,x);break;case wa:v==null&&J(I,C,x,j);break;case yt:R(v,I,C,x,D,O,j,B,U);break;default:q&1?oe(v,I,C,x,D,O,j,B,U):q&6?E(v,I,C,x,D,O,j,B,U):(q&64||q&128)&&M.process(v,I,C,x,D,O,j,B,U,Mt)}Z!=null&&D&&qa(Z,v&&v.ref,O,I||v,!I)},F=(v,I,C,x)=>{if(v==null)r(I.el=c(I.children),C,x);else{const D=I.el=v.el;I.children!==v.children&&d(D,I.children)}},G=(v,I,C,x)=>{v==null?r(I.el=l(I.children||""),C,x):I.el=v.el},J=(v,I,C,x)=>{[v.el,v.anchor]=k(v.children,I,C,x,v.el,v.anchor)},Y=({el:v,anchor:I},C,x)=>{let D;for(;v&&v!==I;)D=y(v),r(v,C,x),v=D;r(I,C,x)},H=({el:v,anchor:I})=>{let C;for(;v&&v!==I;)C=y(v),s(v),v=C;s(I)},oe=(v,I,C,x,D,O,j,B,U)=>{I.type==="svg"?j="svg":I.type==="math"&&(j="mathml"),v==null?_e(I,C,x,D,O,j,B,U):_(v,I,D,O,j,B,U)},_e=(v,I,C,x,D,O,j,B)=>{let U,M;const{props:Z,shapeFlag:q,transition:Q,dirs:z}=v;if(U=v.el=a(v.type,O,Z&&Z.is,Z),q&8?f(U,v.children):q&16&&m(v.children,U,null,x,D,Ta(v,O),j,B),z&&Xn(v,null,x,"created"),w(U,v,v.scopeId,j,x),Z){for(const ye in Z)ye!=="value"&&!Rs(ye)&&i(U,ye,null,Z[ye],O,x);"value"in Z&&i(U,"value",null,Z.value,O),(M=Z.onVnodeBeforeMount)&&Lt(M,x,v)}z&&Xn(v,null,x,"beforeMount");const ee=ay(D,Q);ee&&Q.beforeEnter(U),r(U,I,C),((M=Z&&Z.onVnodeMounted)||ee||z)&&_t(()=>{M&&Lt(M,x,v),ee&&Q.enter(U),z&&Xn(v,null,x,"mounted")},D)},w=(v,I,C,x,D)=>{if(C&&S(v,C),x)for(let O=0;O<x.length;O++)S(v,x[O]);if(D){let O=D.subTree;if(I===O||Pf(O.type)&&(O.ssContent===I||O.ssFallback===I)){const j=D.vnode;w(v,j,j.scopeId,j.slotScopeIds,D.parent)}}},m=(v,I,C,x,D,O,j,B,U=0)=>{for(let M=U;M<v.length;M++){const Z=v[M]=B?wn(v[M]):Ut(v[M]);L(null,Z,I,C,x,D,O,j,B)}},_=(v,I,C,x,D,O,j)=>{const B=I.el=v.el;let{patchFlag:U,dynamicChildren:M,dirs:Z}=I;U|=v.patchFlag&16;const q=v.props||Ie,Q=I.props||Ie;let z;if(C&&Zn(C,!1),(z=Q.onVnodeBeforeUpdate)&&Lt(z,C,I,v),Z&&Xn(I,v,C,"beforeUpdate"),C&&Zn(C,!0),(q.innerHTML&&Q.innerHTML==null||q.textContent&&Q.textContent==null)&&f(B,""),M?T(v.dynamicChildren,M,B,C,x,Ta(I,D),O):j||de(v,I,B,null,C,x,Ta(I,D),O,!1),U>0){if(U&16)A(B,q,Q,C,D);else if(U&2&&q.class!==Q.class&&i(B,"class",null,Q.class,D),U&4&&i(B,"style",q.style,Q.style,D),U&8){const ee=I.dynamicProps;for(let ye=0;ye<ee.length;ye++){const fe=ee[ye],Xe=q[fe],Ue=Q[fe];(Ue!==Xe||fe==="value")&&i(B,fe,Xe,Ue,D,C)}}U&1&&v.children!==I.children&&f(B,I.children)}else!j&&M==null&&A(B,q,Q,C,D);((z=Q.onVnodeUpdated)||Z)&&_t(()=>{z&&Lt(z,C,I,v),Z&&Xn(I,v,C,"updated")},x)},T=(v,I,C,x,D,O,j)=>{for(let B=0;B<I.length;B++){const U=v[B],M=I[B],Z=U.el&&(U.type===yt||!vs(U,M)||U.shapeFlag&70)?g(U.el):C;L(U,M,Z,null,x,D,O,j,!0)}},A=(v,I,C,x,D)=>{if(I!==C){if(I!==Ie)for(const O in I)!Rs(O)&&!(O in C)&&i(v,O,I[O],null,D,x);for(const O in C){if(Rs(O))continue;const j=C[O],B=I[O];j!==B&&O!=="value"&&i(v,O,B,j,D,x)}"value"in C&&i(v,"value",I.value,C.value,D)}},R=(v,I,C,x,D,O,j,B,U)=>{const M=I.el=v?v.el:c(""),Z=I.anchor=v?v.anchor:c("");let{patchFlag:q,dynamicChildren:Q,slotScopeIds:z}=I;z&&(B=B?B.concat(z):z),v==null?(r(M,C,x),r(Z,C,x),m(I.children||[],C,Z,D,O,j,B,U)):q>0&&q&64&&Q&&v.dynamicChildren?(T(v.dynamicChildren,Q,C,D,O,j,B),(I.key!=null||D&&I===D.subTree)&&wf(v,I,!0)):de(v,I,C,Z,D,O,j,B,U)},E=(v,I,C,x,D,O,j,B,U)=>{I.slotScopeIds=B,v==null?I.shapeFlag&512?D.ctx.activate(I,C,x,j,U):ct(I,C,x,D,O,j,U):xt(v,I,U)},ct=(v,I,C,x,D,O,j)=>{const B=v.component=Ry(v,x,D);if(af(v)&&(B.ctx.renderer=Mt),by(B,!1,j),B.asyncDep){if(D&&D.registerDep(B,Se,j),!v.el){const U=B.subTree=qe(xn);G(null,U,I,C)}}else Se(B,v,I,C,D,O,j)},xt=(v,I,C)=>{const x=I.component=v.component;if(my(v,I,C))if(x.asyncDep&&!x.asyncResolved){ce(x,I,C);return}else x.next=I,x.update();else I.el=v.el,x.vnode=I},Se=(v,I,C,x,D,O,j)=>{const B=()=>{if(v.isMounted){let{next:q,bu:Q,u:z,parent:ee,vnode:ye}=v;{const Ze=Af(v);if(Ze){q&&(q.el=ye.el,ce(v,q,j)),Ze.asyncDep.then(()=>{v.isUnmounted||B()});return}}let fe=q,Xe;Zn(v,!1),q?(q.el=ye.el,ce(v,q,j)):q=ye,Q&&Bi(Q),(Xe=q.props&&q.props.onVnodeBeforeUpdate)&&Lt(Xe,ee,q,ye),Zn(v,!0);const Ue=Ia(v),He=v.subTree;v.subTree=Ue,L(He,Ue,g(He.el),Jt(He),v,D,O),q.el=Ue.el,fe===null&&_y(v,Ue.el),z&&_t(z,D),(Xe=q.props&&q.props.onVnodeUpdated)&&_t(()=>Lt(Xe,ee,q,ye),D)}else{let q;const{el:Q,props:z}=I,{bm:ee,m:ye,parent:fe,root:Xe,type:Ue}=v,He=xr(I);if(Zn(v,!1),ee&&Bi(ee),!He&&(q=z&&z.onVnodeBeforeMount)&&Lt(q,fe,I),Zn(v,!0),Q&&_r){const Ze=()=>{v.subTree=Ia(v),_r(Q,v.subTree,v,D,null)};He&&Ue.__asyncHydrate?Ue.__asyncHydrate(Q,v,Ze):Ze()}else{Xe.ce&&Xe.ce._injectChildStyle(Ue);const Ze=v.subTree=Ia(v);L(null,Ze,C,x,v,D,O),I.el=Ze.el}if(ye&&_t(ye,D),!He&&(q=z&&z.onVnodeMounted)){const Ze=I;_t(()=>Lt(q,fe,Ze),D)}(I.shapeFlag&256||fe&&xr(fe.vnode)&&fe.vnode.shapeFlag&256)&&v.a&&_t(v.a,D),v.isMounted=!0,I=C=x=null}};v.scope.on();const U=v.effect=new Md(B);v.scope.off();const M=v.update=U.run.bind(U),Z=v.job=U.runIfDirty.bind(U);Z.i=v,Z.id=v.uid,U.scheduler=()=>Lc(Z),Zn(v,!0),M()},ce=(v,I,C)=>{I.component=v;const x=v.vnode.props;v.vnode=I,v.next=null,ey(v,I.props,x,C),sy(v,I.children,C),$n(),Mu(v),jn()},de=(v,I,C,x,D,O,j,B,U=!1)=>{const M=v&&v.children,Z=v?v.shapeFlag:0,q=I.children,{patchFlag:Q,shapeFlag:z}=I;if(Q>0){if(Q&128){Hn(M,q,C,x,D,O,j,B,U);return}else if(Q&256){Pt(M,q,C,x,D,O,j,B,U);return}}z&8?(Z&16&&zn(M,D,O),q!==M&&f(C,q)):Z&16?z&16?Hn(M,q,C,x,D,O,j,B,U):zn(M,D,O,!0):(Z&8&&f(C,""),z&16&&m(q,C,x,D,O,j,B,U))},Pt=(v,I,C,x,D,O,j,B,U)=>{v=v||Dr,I=I||Dr;const M=v.length,Z=I.length,q=Math.min(M,Z);let Q;for(Q=0;Q<q;Q++){const z=I[Q]=U?wn(I[Q]):Ut(I[Q]);L(v[Q],z,C,null,D,O,j,B,U)}M>Z?zn(v,D,O,!0,!1,q):m(I,C,x,D,O,j,B,U,q)},Hn=(v,I,C,x,D,O,j,B,U)=>{let M=0;const Z=I.length;let q=v.length-1,Q=Z-1;for(;M<=q&&M<=Q;){const z=v[M],ee=I[M]=U?wn(I[M]):Ut(I[M]);if(vs(z,ee))L(z,ee,C,null,D,O,j,B,U);else break;M++}for(;M<=q&&M<=Q;){const z=v[q],ee=I[Q]=U?wn(I[Q]):Ut(I[Q]);if(vs(z,ee))L(z,ee,C,null,D,O,j,B,U);else break;q--,Q--}if(M>q){if(M<=Q){const z=Q+1,ee=z<Z?I[z].el:x;for(;M<=Q;)L(null,I[M]=U?wn(I[M]):Ut(I[M]),C,ee,D,O,j,B,U),M++}}else if(M>Q)for(;M<=q;)Me(v[M],D,O,!0),M++;else{const z=M,ee=M,ye=new Map;for(M=ee;M<=Q;M++){const lt=I[M]=U?wn(I[M]):Ut(I[M]);lt.key!=null&&ye.set(lt.key,M)}let fe,Xe=0;const Ue=Q-ee+1;let He=!1,Ze=0;const gn=new Array(Ue);for(M=0;M<Ue;M++)gn[M]=0;for(M=z;M<=q;M++){const lt=v[M];if(Xe>=Ue){Me(lt,D,O,!0);continue}let wt;if(lt.key!=null)wt=ye.get(lt.key);else for(fe=ee;fe<=Q;fe++)if(gn[fe-ee]===0&&vs(lt,I[fe])){wt=fe;break}wt===void 0?Me(lt,D,O,!0):(gn[wt-ee]=M+1,wt>=Ze?Ze=wt:He=!0,L(lt,I[wt],C,null,D,O,j,B,U),Xe++)}const yr=He?cy(gn):Dr;for(fe=yr.length-1,M=Ue-1;M>=0;M--){const lt=ee+M,wt=I[lt],vr=lt+1<Z?I[lt+1].el:x;gn[M]===0?L(null,wt,C,vr,D,O,j,B,U):He&&(fe<0||M!==yr[fe]?Qt(wt,C,vr,2):fe--)}}},Qt=(v,I,C,x,D=null)=>{const{el:O,type:j,transition:B,children:U,shapeFlag:M}=v;if(M&6){Qt(v.component.subTree,I,C,x);return}if(M&128){v.suspense.move(I,C,x);return}if(M&64){j.move(v,I,C,Mt);return}if(j===yt){r(O,I,C);for(let q=0;q<U.length;q++)Qt(U[q],I,C,x);r(v.anchor,I,C);return}if(j===wa){Y(v,I,C);return}if(x!==2&&M&1&&B)if(x===0)B.beforeEnter(O),r(O,I,C),_t(()=>B.enter(O),D);else{const{leave:q,delayLeave:Q,afterLeave:z}=B,ee=()=>r(O,I,C),ye=()=>{q(O,()=>{ee(),z&&z()})};Q?Q(O,ee,ye):ye()}else r(O,I,C)},Me=(v,I,C,x=!1,D=!1)=>{const{type:O,props:j,ref:B,children:U,dynamicChildren:M,shapeFlag:Z,patchFlag:q,dirs:Q,cacheIndex:z}=v;if(q===-2&&(D=!1),B!=null&&qa(B,null,C,v,!0),z!=null&&(I.renderCache[z]=void 0),Z&256){I.ctx.deactivate(v);return}const ee=Z&1&&Q,ye=!xr(v);let fe;if(ye&&(fe=j&&j.onVnodeBeforeUnmount)&&Lt(fe,I,v),Z&6)Wn(v.component,C,x);else{if(Z&128){v.suspense.unmount(C,x);return}ee&&Xn(v,null,I,"beforeUnmount"),Z&64?v.type.remove(v,I,C,Mt,x):M&&!M.hasOnce&&(O!==yt||q>0&&q&64)?zn(M,I,C,!1,!0):(O===yt&&q&384||!D&&Z&16)&&zn(U,I,C),x&&Le(v)}(ye&&(fe=j&&j.onVnodeUnmounted)||ee)&&_t(()=>{fe&&Lt(fe,I,v),ee&&Xn(v,null,I,"unmounted")},C)},Le=v=>{const{type:I,el:C,anchor:x,transition:D}=v;if(I===yt){ea(C,x);return}if(I===wa){H(v);return}const O=()=>{s(C),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(v.shapeFlag&1&&D&&!D.persisted){const{leave:j,delayLeave:B}=D,U=()=>j(C,O);B?B(v.el,O,U):U()}else O()},ea=(v,I)=>{let C;for(;v!==I;)C=y(v),s(v),v=C;s(I)},Wn=(v,I,C)=>{const{bum:x,scope:D,job:O,subTree:j,um:B,m:U,a:M}=v;qu(U),qu(M),x&&Bi(x),D.stop(),O&&(O.flags|=8,Me(j,v,I,C)),B&&_t(B,I),_t(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},zn=(v,I,C,x=!1,D=!1,O=0)=>{for(let j=O;j<v.length;j++)Me(v[j],I,C,x,D)},Jt=v=>{if(v.shapeFlag&6)return Jt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=y(v.anchor||v.el),C=I&&I[R_];return C?y(C):I};let ss=!1;const fi=(v,I,C)=>{v==null?I._vnode&&Me(I._vnode,null,null,!0):L(I._vnode||null,v,I,null,null,null,C),I._vnode=v,ss||(ss=!0,Mu(),tf(),ss=!1)},Mt={p:L,um:Me,m:Qt,r:Le,mt:ct,mc:m,pc:de,pbc:T,n:Jt,o:t};let Kn,_r;return{render:fi,hydrate:Kn,createApp:J_(fi,Kn)}}function Ta({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Zn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ay(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wf(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=wn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&wf(a,c)),c.type===Vo&&(c.el=a.el)}}function cy(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const d=t[r];if(d!==0){if(s=n[n.length-1],t[s]<d){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<d?i=c+1:a=c;d<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Af(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Af(e)}function qu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ly=Symbol.for("v-scx"),uy=()=>Ss(ly);function Ps(t,e,n){return Rf(t,e,n)}function Rf(t,e,n=Ie){const{immediate:r,deep:s,flush:i,once:a}=n,c=Je({},n);let l;if(Do)if(i==="sync"){const y=uy();l=y.__watcherHandles||(y.__watcherHandles=[])}else if(!e||r)c.once=!0;else{const y=()=>{};return y.stop=Bt,y.resume=Bt,y.pause=Bt,y}const d=Ke;c.call=(y,S,k)=>zt(y,d,S,k);let f=!1;i==="post"?c.scheduler=y=>{_t(y,d&&d.suspense)}:i!=="sync"&&(f=!0,c.scheduler=(y,S)=>{S?y():Lc(y)}),c.augmentJob=y=>{e&&(y.flags|=4),f&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const g=E_(t,e,c);return l&&l.push(g),g}function hy(t,e,n){const r=this.proxy,s=xe(t)?t.includes(".")?bf(r,t):()=>r[t]:t.bind(r,r);let i;ae(e)?i=e:(i=e.handler,n=e);const a=Xs(this),c=Rf(s,i.bind(r),n);return a(),c}function bf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const dy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bt(e)}Modifiers`]||t[`${Bn(e)}Modifiers`];function fy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),a=i&&dy(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>xe(f)?f.trim():f)),a.number&&(s=n.map(Ua)));let c,l=r[c=ga(e)]||r[c=ga(bt(e))];!l&&i&&(l=r[c=ga(Bn(e))]),l&&zt(l,t,6,s);const d=r[c+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,zt(d,t,6,s)}}function Sf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!ae(t)){const l=d=>{const f=Sf(d,e,!0);f&&(c=!0,Je(a,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Pe(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>a[l]=null):Je(a,i),Pe(t)&&r.set(t,a),a)}function ko(t,e){return!t||!Eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,Bn(e))||ve(t,e))}function Ia(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:d,renderCache:f,props:g,data:y,setupState:S,ctx:k,inheritAttrs:L}=t,F=eo(t);let G,J;try{if(n.shapeFlag&4){const H=s||r,oe=H;G=Ut(d.call(oe,H,f,g,S,y,k)),J=c}else{const H=e;G=Ut(H.length>1?H(g,{attrs:c,slots:a,emit:l}):H(g,null)),J=e.props?c:py(c)}}catch(H){Cs.length=0,Po(H,t,1),G=qe(xn)}let Y=G;if(J&&L!==!1){const H=Object.keys(J),{shapeFlag:oe}=Y;H.length&&oe&7&&(i&&H.some(wc)&&(J=gy(J,i)),Y=Br(Y,J,!1,!0))}return n.dirs&&(Y=Br(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&Fc(Y,n.transition),G=Y,eo(F),G}const py=t=>{let e;for(const n in t)(n==="class"||n==="style"||Eo(n))&&((e||(e={}))[n]=t[n]);return e},gy=(t,e)=>{const n={};for(const r in t)(!wc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function my(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Hu(r,a,d):!!a;if(l&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const y=f[g];if(a[y]!==r[y]&&!ko(d,y))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Hu(r,a,d):!0:!!a;return!1}function Hu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ko(n,i))return!0}return!1}function _y({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Pf=t=>t.__isSuspense;function yy(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):w_(t)}const yt=Symbol.for("v-fgt"),Vo=Symbol.for("v-txt"),xn=Symbol.for("v-cmt"),wa=Symbol.for("v-stc"),Cs=[];let Et=null;function Ee(t=!1){Cs.push(Et=t?null:[])}function vy(){Cs.pop(),Et=Cs[Cs.length-1]||null}let Bs=1;function Wu(t){Bs+=t,t<0&&Et&&(Et.hasOnce=!0)}function Cf(t){return t.dynamicChildren=Bs>0?Et||Dr:null,vy(),Bs>0&&Et&&Et.push(t),t}function $e(t,e,n,r,s,i){return Cf(St(t,e,n,r,s,i,!0))}function $t(t,e,n,r,s){return Cf(qe(t,e,n,r,s,!0))}function $c(t){return t?t.__v_isVNode===!0:!1}function vs(t,e){return t.type===e.type&&t.key===e.key}const kf=({key:t})=>t??null,$i=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||De(t)||ae(t)?{i:je,r:t,k:e,f:!!n}:t:null);function St(t,e=null,n=null,r=0,s=null,i=t===yt?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&kf(e),ref:e&&$i(e),scopeId:rf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:je};return c?(jc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),Bs>0&&!a&&Et&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Et.push(l),l}const qe=Ey;function Ey(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===U_)&&(t=xn),$c(t)){const c=Br(t,e,!0);return n&&jc(c,n),Bs>0&&!i&&Et&&(c.shapeFlag&6?Et[Et.indexOf(t)]=c:Et.push(c)),c.patchFlag=-2,c}if(Vy(t)&&(t=t.__vccOpts),e){e=Ty(e);let{class:c,style:l}=e;c&&!xe(c)&&(e.class=Qs(c)),Pe(l)&&(Nc(l)&&!re(l)&&(l=Je({},l)),e.style=Ao(l))}const a=xe(t)?1:Pf(t)?128:b_(t)?64:Pe(t)?4:ae(t)?2:0;return St(t,e,n,r,s,a,i,!0)}function Ty(t){return t?Nc(t)||mf(t)?Je({},t):t:null}function Br(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,d=e?Iy(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&kf(d),ref:e&&e.ref?n&&i?re(i)?i.concat($i(e)):[i,$i(e)]:$i(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Br(t.ssContent),ssFallback:t.ssFallback&&Br(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Fc(f,l.clone(f)),f}function Vf(t=" ",e=0){return qe(Vo,null,t,e)}function nr(t="",e=!1){return e?(Ee(),$t(xn,null,t)):qe(xn,null,t)}function Ut(t){return t==null||typeof t=="boolean"?qe(xn):re(t)?qe(yt,null,t.slice()):$c(t)?wn(t):qe(Vo,null,String(t))}function wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Br(t)}function jc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),jc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!mf(e)?e._ctx=je:s===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:je},n=32):(e=String(e),r&64?(n=16,e=[Vf(e)]):n=8);t.children=e,t.shapeFlag|=n}function Iy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Qs([e.class,r.class]));else if(s==="style")e.style=Ao([e.style,r.style]);else if(Eo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Lt(t,e,n,r=null){zt(t,e,7,[n,r])}const wy=ff();let Ay=0;function Ry(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wy,i={uid:Ay++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yf(r,s),emitsOptions:Sf(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fy.bind(null,i),t.ce&&t.ce(i),i}let Ke=null,no,Ga;{const t=Cd(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};no=e("__VUE_INSTANCE_SETTERS__",n=>Ke=n),Ga=e("__VUE_SSR_SETTERS__",n=>Do=n)}const Xs=t=>{const e=Ke;return no(t),t.scope.on(),()=>{t.scope.off(),no(e)}},zu=()=>{Ke&&Ke.scope.off(),no(null)};function Df(t){return t.vnode.shapeFlag&4}let Do=!1;function by(t,e=!1,n=!1){e&&Ga(e);const{props:r,children:s}=t.vnode,i=Df(t);Z_(t,r,i,e),ry(t,s,n);const a=i?Sy(t,e):void 0;return e&&Ga(!1),a}function Sy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,q_);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Cy(t):null,i=Xs(t);$n();const a=Ys(r,t,0,[t.props,s]);if(jn(),i(),Rd(a)){if(xr(t)||of(t),a.then(zu,zu),e)return a.then(c=>{Ku(t,c,e)}).catch(c=>{Po(c,t,0)});t.asyncDep=a}else Ku(t,a,e)}else Nf(t,e)}function Ku(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=Yd(e)),Nf(t,n)}let Gu;function Nf(t,e,n){const r=t.type;if(!t.render){if(!e&&Gu&&!r.render){const s=r.template||Uc(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,d=Je(Je({isCustomElement:i,delimiters:c},a),l);r.render=Gu(s,d)}}t.render=r.render||Bt}{const s=Xs(t);$n();try{H_(t)}finally{jn(),s()}}}const Py={get(t,e){return ot(t,"get",""),t[e]}};function Cy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Py),slots:t.slots,emit:t.emit,expose:e}}function No(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Yd(Oc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bs)return bs[n](t)},has(e,n){return n in e||n in bs}})):t.proxy}function ky(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function Vy(t){return ae(t)&&"__vccOpts"in t}const qc=(t,e)=>y_(t,e,Do),Dy="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qa;const Qu=typeof window<"u"&&window.trustedTypes;if(Qu)try{Qa=Qu.createPolicy("vue",{createHTML:t=>t})}catch{}const Of=Qa?t=>Qa.createHTML(t):t=>t,Ny="http://www.w3.org/2000/svg",Oy="http://www.w3.org/1998/Math/MathML",en=typeof document<"u"?document:null,Ju=en&&en.createElement("template"),xy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?en.createElementNS(Ny,t):e==="mathml"?en.createElementNS(Oy,t):n?en.createElement(t,{is:n}):en.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>en.createTextNode(t),createComment:t=>en.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>en.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ju.innerHTML=Of(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Ju.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},My=Symbol("_vtc");function Ly(t,e,n){const r=t[My];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Yu=Symbol("_vod"),Fy=Symbol("_vsh"),Uy=Symbol(""),By=/(^|;)\s*display\s*:/;function $y(t,e,n){const r=t.style,s=xe(n);let i=!1;if(n&&!s){if(e)if(xe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&ji(r,c,"")}else for(const a in e)n[a]==null&&ji(r,a,"");for(const a in n)a==="display"&&(i=!0),ji(r,a,n[a])}else if(s){if(e!==n){const a=r[Uy];a&&(n+=";"+a),r.cssText=n,i=By.test(n)}}else e&&t.removeAttribute("style");Yu in t&&(t[Yu]=i?r.display:"",t[Fy]&&(r.display="none"))}const Xu=/\s*!important$/;function ji(t,e,n){if(re(n))n.forEach(r=>ji(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=jy(t,e);Xu.test(n)?t.setProperty(Bn(r),n.replace(Xu,""),"important"):t[r]=n}}const Zu=["Webkit","Moz","ms"],Aa={};function jy(t,e){const n=Aa[e];if(n)return n;let r=bt(e);if(r!=="filter"&&r in t)return Aa[e]=r;r=wo(r);for(let s=0;s<Zu.length;s++){const i=Zu[s]+r;if(i in t)return Aa[e]=i}return e}const eh="http://www.w3.org/1999/xlink";function th(t,e,n,r,s,i=Um(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(eh,e.slice(6,e.length)):t.setAttributeNS(eh,e,n):n==null||i&&!kd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Un(n)?String(n):n)}function nh(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Of(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=kd(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Sr(t,e,n,r){t.addEventListener(e,n,r)}function qy(t,e,n,r){t.removeEventListener(e,n,r)}const rh=Symbol("_vei");function Hy(t,e,n,r,s=null){const i=t[rh]||(t[rh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Wy(e);if(r){const d=i[e]=Gy(r,s);Sr(t,c,d,l)}else a&&(qy(t,c,a,l),i[e]=void 0)}}const sh=/(?:Once|Passive|Capture)$/;function Wy(t){let e;if(sh.test(t)){e={};let r;for(;r=t.match(sh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bn(t.slice(2)),e]}let Ra=0;const zy=Promise.resolve(),Ky=()=>Ra||(zy.then(()=>Ra=0),Ra=Date.now());function Gy(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;zt(Qy(r,n.value),e,5,[r])};return n.value=t,n.attached=Ky(),n}function Qy(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ih=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Jy=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Ly(t,r,a):e==="style"?$y(t,n,r):Eo(e)?wc(e)||Hy(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yy(t,e,r,a))?(nh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&th(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!xe(r))?nh(t,bt(e),r):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),th(t,e,r,a))};function Yy(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ih(e)&&ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ih(e)&&xe(n)?!1:e in t}const oh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>Bi(e,n):e};function Xy(t){t.target.composing=!0}function ah(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ba=Symbol("_assign"),Zy={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ba]=oh(s);const i=r||s.props&&s.props.type==="number";Sr(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Ua(c)),t[ba](c)}),n&&Sr(t,"change",()=>{t.value=t.value.trim()}),e||(Sr(t,"compositionstart",Xy),Sr(t,"compositionend",ah),Sr(t,"change",ah))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[ba]=oh(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ua(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},ev={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tv=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Bn(s.key);if(e.some(a=>a===i||ev[a]===i))return t(s)})},nv=Je({patchProp:Jy},xy);let ch;function rv(){return ch||(ch=iy(nv))}const sv=(...t)=>{const e=rv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ov(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,iv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function iv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ov(t){return xe(t)?document.querySelector(t):t}var av=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let xf;const Oo=t=>xf=t,Mf=Symbol();function Ja(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ks;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ks||(ks={}));function cv(){const t=Od(!0),e=t.run(()=>Rt({}));let n=[],r=[];const s=Oc({install(i){Oo(s),s._a=i,i.provide(Mf,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return!this._a&&!av?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Lf=()=>{};function lh(t,e,n,r=Lf){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&xd()&&Bm(s),s}function Rr(t,...e){t.slice().forEach(n=>{n(...e)})}const lv=t=>t(),uh=Symbol(),Sa=Symbol();function Ya(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ja(s)&&Ja(r)&&t.hasOwnProperty(n)&&!De(r)&&!Pn(r)?t[n]=Ya(s,r):t[n]=r}return t}const uv=Symbol();function hv(t){return!Ja(t)||!t.hasOwnProperty(uv)}const{assign:Tn}=Object;function dv(t){return!!(De(t)&&t.effect)}function fv(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function d(){c||(n.state.value[t]=s?s():{});const f=p_(n.state.value[t]);return Tn(f,i,Object.keys(a||{}).reduce((g,y)=>(g[y]=Oc(qc(()=>{Oo(n);const S=n._s.get(t);return a[y].call(S,S)})),g),{}))}return l=Ff(t,d,e,n,r,!0),l}function Ff(t,e,n={},r,s,i){let a;const c=Tn({actions:{}},n),l={deep:!0};let d,f,g=[],y=[],S;const k=r.state.value[t];!i&&!k&&(r.state.value[t]={}),Rt({});let L;function F(m){let _;d=f=!1,typeof m=="function"?(m(r.state.value[t]),_={type:ks.patchFunction,storeId:t,events:S}):(Ya(r.state.value[t],m),_={type:ks.patchObject,payload:m,storeId:t,events:S});const T=L=Symbol();Zd().then(()=>{L===T&&(d=!0)}),f=!0,Rr(g,_,r.state.value[t])}const G=i?function(){const{state:_}=n,T=_?_():{};this.$patch(A=>{Tn(A,T)})}:Lf;function J(){a.stop(),g=[],y=[],r._s.delete(t)}const Y=(m,_="")=>{if(uh in m)return m[Sa]=_,m;const T=function(){Oo(r);const A=Array.from(arguments),R=[],E=[];function ct(ce){R.push(ce)}function xt(ce){E.push(ce)}Rr(y,{args:A,name:T[Sa],store:oe,after:ct,onError:xt});let Se;try{Se=m.apply(this&&this.$id===t?this:oe,A)}catch(ce){throw Rr(E,ce),ce}return Se instanceof Promise?Se.then(ce=>(Rr(R,ce),ce)).catch(ce=>(Rr(E,ce),Promise.reject(ce))):(Rr(R,Se),Se)};return T[uh]=!0,T[Sa]=_,T},H={_p:r,$id:t,$onAction:lh.bind(null,y),$patch:F,$reset:G,$subscribe(m,_={}){const T=lh(g,m,_.detached,()=>A()),A=a.run(()=>Ps(()=>r.state.value[t],R=>{(_.flush==="sync"?f:d)&&m({storeId:t,type:ks.direct,events:S},R)},Tn({},l,_)));return T},$dispose:J},oe=So(H);r._s.set(t,oe);const w=(r._a&&r._a.runWithContext||lv)(()=>r._e.run(()=>(a=Od()).run(()=>e({action:Y}))));for(const m in w){const _=w[m];if(De(_)&&!dv(_)||Pn(_))i||(k&&hv(_)&&(De(_)?_.value=k[m]:Ya(_,k[m])),r.state.value[t][m]=_);else if(typeof _=="function"){const T=Y(_,m);w[m]=T,c.actions[m]=_}}return Tn(oe,w),Tn(me(oe),w),Object.defineProperty(oe,"$state",{get:()=>r.state.value[t],set:m=>{F(_=>{Tn(_,m)})}}),r._p.forEach(m=>{Tn(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:c})))}),k&&i&&n.hydrate&&n.hydrate(oe.$state,k),d=!0,f=!0,oe}function Hc(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function a(c,l){const d=X_();return c=c||(d?Ss(Mf,null):null),c&&Oo(c),c=xf,c._s.has(r)||(i?Ff(r,e,s,c):fv(r,s,c)),c._s.get(r)}return a.$id=r,a}const Uf=Hc("page",()=>{const t=Rt("relays");return{currentPage:t,setPage:n=>{t.value=n}}}),pv=Nt({name:"task-bar",setup(){const t=Uf();function e(n){t.setPage(n)}return{selectPage:e}}}),Ot=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},gv={class:"task-bar"};function mv(t,e,n,r,s,i){return Ee(),$e("div",gv,[St("div",{class:"task",onClick:e[0]||(e[0]=a=>t.selectPage("schedules"))},"Schedules"),St("div",{class:"task",onClick:e[1]||(e[1]=a=>t.selectPage("relays"))},"Relays")])}const _v=Ot(pv,[["render",mv],["__scopeId","data-v-db314ecb"]]),yv=Nt({props:{spinnerSize:{type:String,default:"30px"},withText:{type:Boolean,default:!1}},setup(){return{}}}),vv={class:"spinner"},Ev={key:0,class:"text"};function Tv(t,e,n,r,s,i){return Ee(),$e("div",vv,[St("div",{class:"spinner-inner",style:Ao({"--spinnerSize":t.spinnerSize})},null,4),t.withText?(Ee(),$e("div",Ev,"Laden...")):nr("",!0)])}const Bf=Ot(yv,[["render",Tv],["__scopeId","data-v-8cb8f775"]]),Iv=Nt({components:{Spinner:Bf},props:{text:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},emits:["onButtonClicked"],setup(t,e){function n(){e.emit("onButtonClicked")}return{onClicked:n}}}),wv={key:1,class:"button-content"};function Av(t,e,n,r,s,i){const a=vt("spinner");return Ee(),$e("div",{class:Qs(["button-default",{"is-loading":t.isLoading}]),tabindex:"0",onClick:e[0]||(e[0]=(...c)=>t.onClicked&&t.onClicked(...c)),onKeydown:e[1]||(e[1]=tv((...c)=>t.onClicked&&t.onClicked(...c),["enter"]))},[t.isLoading?(Ee(),$t(a,{key:0,spinnerSize:"20px"})):(Ee(),$e("div",wv,[j_(t.$slots,"icon",{},void 0),Vf(" "+Js(t.text),1)]))],34)}const $f=Ot(Iv,[["render",Av],["__scopeId","data-v-5dad5cd0"]]),jf=Hc("user",()=>{const t=Rt(null);return{user:t,setUser:n=>{t.value=n}}});var hh={};/**
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
 */const qf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Rv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Hf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,d=l?t[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let y=(c&15)<<2|d>>6,S=d&63;l||(S=64,a||(y=64)),r.push(n[f],n[g],n[y],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Rv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new bv;const y=i<<2|c>>4;if(r.push(y),d!==64){const S=c<<4&240|d>>2;if(r.push(S),g!==64){const k=d<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sv=function(t){const e=qf(t);return Hf.encodeByteArray(e,!0)},ro=function(t){return Sv(t).replace(/\./g,"")},Wf=function(t){try{return Hf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cv=()=>Pv().__FIREBASE_DEFAULTS__,kv=()=>{if(typeof process>"u"||typeof hh>"u")return;const t=hh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wf(t[1]);return e&&JSON.parse(e)},xo=()=>{try{return Cv()||kv()||Vv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zf=t=>{var e,n;return(n=(e=xo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Dv=t=>{const e=zf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kf=()=>{var t;return(t=xo())===null||t===void 0?void 0:t.config},Gf=t=>{var e;return(e=xo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Nv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ov(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ro(JSON.stringify(n)),ro(JSON.stringify(a)),""].join(".")}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function Mv(){var t;const e=(t=xo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bv(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $v(){return!Mv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jv(){try{return typeof indexedDB=="object"}catch{return!1}}function qv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Hv="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hv,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Wv(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new pn(s,c,r)}}function Wv(t,e){return t.replace(zv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zv=/\{\$([^}]+)}/g;function Kv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function so(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(dh(i)&&dh(a)){if(!so(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function dh(t){return t!==null&&typeof t=="object"}/**
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
 */function ei(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gv(t,e){const n=new Qv(t,e);return n.subscribe.bind(n)}class Qv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Jv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Pa),s.error===void 0&&(s.error=Pa),s.complete===void 0&&(s.complete=Pa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pa(){}/**
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
 */function pt(t){return t&&t._delegate?t._delegate:t}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tr="[DEFAULT]";/**
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
 */class Yv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Nv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zv(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xv(t){return t===tr?void 0:t}function Zv(t){return t.instantiationMode==="EAGER"}/**
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
 */class eE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const tE={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},nE=ue.INFO,rE={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},sE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wc{constructor(e){this.name=e,this._logLevel=nE,this._logHandler=sE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const iE=(t,e)=>e.some(n=>t instanceof n);let fh,ph;function oE(){return fh||(fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aE(){return ph||(ph=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qf=new WeakMap,Xa=new WeakMap,Jf=new WeakMap,Ca=new WeakMap,zc=new WeakMap;function cE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Cn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Qf.set(n,t)}).catch(()=>{}),zc.set(e,t),e}function lE(t){if(Xa.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Xa.set(t,e)}let Za={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uE(t){Za=t(Za)}function hE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ka(this),e,...n);return Jf.set(r,e.sort?e.sort():[e]),Cn(r)}:aE().includes(t)?function(...e){return t.apply(ka(this),e),Cn(Qf.get(this))}:function(...e){return Cn(t.apply(ka(this),e))}}function dE(t){return typeof t=="function"?hE(t):(t instanceof IDBTransaction&&lE(t),iE(t,oE())?new Proxy(t,Za):t)}function Cn(t){if(t instanceof IDBRequest)return cE(t);if(Ca.has(t))return Ca.get(t);const e=dE(t);return e!==t&&(Ca.set(t,e),zc.set(e,t)),e}const ka=t=>zc.get(t);function fE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Cn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Cn(a.result),l.oldVersion,l.newVersion,Cn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const pE=["get","getKey","getAll","getAllKeys","count"],gE=["put","add","delete","clear"],Va=new Map;function gh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Va.get(e))return Va.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=gE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pE.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),s&&l.done]))[0]};return Va.set(e,i),i}uE(t=>({...t,get:(e,n,r)=>gh(e,n)||t.get(e,n,r),has:(e,n)=>!!gh(e,n)||t.has(e,n)}));/**
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
 */class mE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_E(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _E(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ec="@firebase/app",mh="0.10.11";/**
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
 */const ln=new Wc("@firebase/app"),yE="@firebase/app-compat",vE="@firebase/analytics-compat",EE="@firebase/analytics",TE="@firebase/app-check-compat",IE="@firebase/app-check",wE="@firebase/auth",AE="@firebase/auth-compat",RE="@firebase/database",bE="@firebase/database-compat",SE="@firebase/functions",PE="@firebase/functions-compat",CE="@firebase/installations",kE="@firebase/installations-compat",VE="@firebase/messaging",DE="@firebase/messaging-compat",NE="@firebase/performance",OE="@firebase/performance-compat",xE="@firebase/remote-config",ME="@firebase/remote-config-compat",LE="@firebase/storage",FE="@firebase/storage-compat",UE="@firebase/firestore",BE="@firebase/vertexai-preview",$E="@firebase/firestore-compat",jE="firebase",qE="10.13.2";/**
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
 */const tc="[DEFAULT]",HE={[ec]:"fire-core",[yE]:"fire-core-compat",[EE]:"fire-analytics",[vE]:"fire-analytics-compat",[IE]:"fire-app-check",[TE]:"fire-app-check-compat",[wE]:"fire-auth",[AE]:"fire-auth-compat",[RE]:"fire-rtdb",[bE]:"fire-rtdb-compat",[SE]:"fire-fn",[PE]:"fire-fn-compat",[CE]:"fire-iid",[kE]:"fire-iid-compat",[VE]:"fire-fcm",[DE]:"fire-fcm-compat",[NE]:"fire-perf",[OE]:"fire-perf-compat",[xE]:"fire-rc",[ME]:"fire-rc-compat",[LE]:"fire-gcs",[FE]:"fire-gcs-compat",[UE]:"fire-fst",[$E]:"fire-fst-compat",[BE]:"fire-vertex","fire-js":"fire-js",[jE]:"fire-js-all"};/**
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
 */const io=new Map,WE=new Map,nc=new Map;function _h(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $r(t){const e=t.name;if(nc.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;nc.set(e,t);for(const n of io.values())_h(n,t);for(const n of WE.values())_h(n,t);return!0}function Kc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rn(t){return t.settings!==void 0}/**
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
 */const zE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kn=new Zs("app","Firebase",zE);/**
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
 */class KE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */const Yr=qE;function Yf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw kn.create("bad-app-name",{appName:String(s)});if(n||(n=Kf()),!n)throw kn.create("no-options");const i=io.get(s);if(i){if(so(n,i.options)&&so(r,i.config))return i;throw kn.create("duplicate-app",{appName:s})}const a=new eE(s);for(const l of nc.values())a.addComponent(l);const c=new KE(n,r,a);return io.set(s,c),c}function Xf(t=tc){const e=io.get(t);if(!e&&t===tc&&Kf())return Yf();if(!e)throw kn.create("no-app",{appName:t});return e}function Vn(t,e,n){var r;let s=(r=HE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(c.join(" "));return}$r(new ur(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const GE="firebase-heartbeat-database",QE=1,$s="firebase-heartbeat-store";let Da=null;function Zf(){return Da||(Da=fE(GE,QE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($s)}catch(n){console.warn(n)}}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),Da}async function JE(t){try{const n=(await Zf()).transaction($s),r=await n.objectStore($s).get(ep(t));return await n.done,r}catch(e){if(e instanceof pn)ln.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(n.message)}}}async function yh(t,e){try{const r=(await Zf()).transaction($s,"readwrite");await r.objectStore($s).put(e,ep(t)),await r.done}catch(n){if(n instanceof pn)ln.warn(n.message);else{const r=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}}function ep(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YE=1024,XE=30*24*60*60*1e3;class ZE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=XE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vh(),{heartbeatsToSend:r,unsentEntries:s}=eT(this._heartbeatsCache.heartbeats),i=ro(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ln.warn(n),""}}}function vh(){return new Date().toISOString().substring(0,10)}function eT(t,e=YE){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Eh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Eh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jv()?qv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Eh(t){return ro(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nT(t){$r(new ur("platform-logger",e=>new mE(e),"PRIVATE")),$r(new ur("heartbeat",e=>new ZE(e),"PRIVATE")),Vn(ec,mh,t),Vn(ec,mh,"esm2017"),Vn("fire-js","")}nT("");function Gc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function tp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rT=tp,np=new Zs("auth","Firebase",tp());/**
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
 */const oo=new Wc("@firebase/auth");function sT(t,...e){oo.logLevel<=ue.WARN&&oo.warn(`Auth (${Yr}): ${t}`,...e)}function qi(t,...e){oo.logLevel<=ue.ERROR&&oo.error(`Auth (${Yr}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw Jc(t,...e)}function Vt(t,...e){return Jc(t,...e)}function Qc(t,e,n){const r=Object.assign(Object.assign({},rT()),{[e]:n});return new Zs("auth","Firebase",r).create(e,{appName:t.name})}function ar(t){return Qc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Kt(t,"argument-error"),Qc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return np.create(t,...e)}function te(t,e,...n){if(!t)throw Jc(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qi(e),new Error(e)}function un(t,e){t||sn(e)}/**
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
 */function rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oT(){return Th()==="http:"||Th()==="https:"}function Th(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function aT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oT()||Fv()||"connection"in navigator)?navigator.onLine:!0}function cT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,un(n>e,"Short delay should be less than long delay!"),this.isMobile=xv()||Uv()}get(){return aT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yc(t,e){un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class rp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uT=new ti(3e4,6e4);function Xc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xr(t,e,n,r,s={}){return sp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ei(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:l},i);return Lv()||(d.referrerPolicy="no-referrer"),rp.fetch()(ip(t,t.config.apiHost,n,c),d)})}async function sp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lT),e);try{const s=new dT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Oi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Oi(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Oi(t,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Qc(t,f,d);Kt(t,f)}}catch(s){if(s instanceof pn)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function hT(t,e,n,r,s={}){const i=await Xr(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ip(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Yc(t.config,s):`${t.config.apiScheme}://${s}`}class dT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vt(this.auth,"network-request-failed")),uT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Vt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function fT(t,e){return Xr(t,"POST","/v1/accounts:delete",e)}async function op(t,e){return Xr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pT(t,e=!1){const n=pt(t),r=await n.getIdToken(e),s=Zc(r);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Vs(Na(s.auth_time)),issuedAtTime:Vs(Na(s.iat)),expirationTime:Vs(Na(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Na(t){return Number(t)*1e3}function Zc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wf(n);return s?JSON.parse(s):(qi("Failed to decode base64 JWT payload"),null)}catch(s){return qi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ih(t){const e=Zc(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&gT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ao(t){var e;const n=t.auth,r=await t.getIdToken(),s=await js(t,op(n,{idToken:r}));te(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ap(i.providerUserInfo):[],c=yT(t.providerData,a),l=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new sc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function _T(t){const e=pt(t);await ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ap(t){return t.map(e=>{var{providerId:n}=e,r=Gc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vT(t,e){const n=await sp(t,{},async()=>{const r=ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=ip(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",rp.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ET(t,e){return Xr(t,"POST","/v2/accounts:revokeToken",Xc(t,e))}/**
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
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ih(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Ih(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Mr;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
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
 */function En(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Gc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await js(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pT(this,e)}reload(){return _T(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rn(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await js(this,fT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,d,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,L=(c=n.tenantId)!==null&&c!==void 0?c:void 0,F=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,G=(d=n.createdAt)!==null&&d!==void 0?d:void 0,J=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Y,emailVerified:H,isAnonymous:oe,providerData:_e,stsTokenManager:w}=n;te(Y&&w,e,"internal-error");const m=Mr.fromJSON(this.name,w);te(typeof Y=="string",e,"internal-error"),En(g,e.name),En(y,e.name),te(typeof H=="boolean",e,"internal-error"),te(typeof oe=="boolean",e,"internal-error"),En(S,e.name),En(k,e.name),En(L,e.name),En(F,e.name),En(G,e.name),En(J,e.name);const _=new on({uid:Y,auth:e,email:y,emailVerified:H,displayName:g,isAnonymous:oe,photoURL:k,phoneNumber:S,tenantId:L,stsTokenManager:m,createdAt:G,lastLoginAt:J});return _e&&Array.isArray(_e)&&(_.providerData=_e.map(T=>Object.assign({},T))),F&&(_._redirectEventId=F),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Mr;s.updateFromServerResponse(n);const i=new on({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ao(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ap(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Mr;c.updateFromIdToken(r);const l=new on({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new sc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
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
 */const wh=new Map;function an(t){un(t instanceof Function,"Expected a class definition");let e=wh.get(t);return e?(un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wh.set(t,e),e)}/**
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
 */class cp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cp.type="NONE";const Ah=cp;/**
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
 */function Hi(t,e,n){return`firebase:${t}:${e}:${n}`}class Lr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Hi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Hi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?on._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Lr(an(Ah),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||an(Ah);const a=Hi(r,e.config.apiKey,e.name);let c=null;for(const d of n)try{const f=await d._get(a);if(f){const g=on._fromJSON(e,f);d!==i&&(c=g),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Lr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Lr(i,e,r))}}/**
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
 */function Rh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pp(e))return"Blackberry";if(gp(e))return"Webos";if(up(e))return"Safari";if((e.includes("chrome/")||hp(e))&&!e.includes("edge/"))return"Chrome";if(fp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lp(t=at()){return/firefox\//i.test(t)}function up(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hp(t=at()){return/crios\//i.test(t)}function dp(t=at()){return/iemobile/i.test(t)}function fp(t=at()){return/android/i.test(t)}function pp(t=at()){return/blackberry/i.test(t)}function gp(t=at()){return/webos/i.test(t)}function el(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TT(t=at()){var e;return el(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IT(){return Bv()&&document.documentMode===10}function mp(t=at()){return el(t)||fp(t)||gp(t)||pp(t)||/windows phone/i.test(t)||dp(t)}/**
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
 */function _p(t,e=[]){let n;switch(t){case"Browser":n=Rh(at());break;case"Worker":n=`${Rh(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${r}`}/**
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
 */class wT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function AT(t,e={}){return Xr(t,"GET","/v2/passwordPolicy",Xc(t,e))}/**
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
 */const RT=6;class bT{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:RT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ST{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bh(this),this.idTokenSubscription=new bh(this),this.beforeStateQueue=new wT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=np,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await op(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ao(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rn(this.app))return Promise.reject(ar(this));const n=e?pt(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rn(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rn(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AT(this),n=new bT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ET(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_p(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mo(t){return pt(t)}class bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gv(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PT(t){tl=t}function CT(t){return tl.loadJS(t)}function kT(){return tl.gapiScript}function VT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function DT(t,e){const n=Kc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(so(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function NT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OT(t,e,n){const r=Mo(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=yp(e),{host:a,port:c}=xT(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),MT()}function yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xT(t){const e=yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Sh(a)}}}function Sh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}/**
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
 */async function Fr(t,e){return hT(t,"POST","/v1/accounts:signInWithIdp",Xc(t,e))}/**
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
 */const LT="http://localhost";class hr extends vp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Gc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new hr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:LT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ei(n)}return e}}/**
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
 */class nl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ni extends nl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class An extends ni{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com";An.PROVIDER_ID="facebook.com";/**
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
 */class nn extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
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
 */class Rn extends ni{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
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
 */class bn extends ni{constructor(){super("twitter.com")}static credential(e,n){return hr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
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
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await on._fromIdTokenResponse(e,r,s),a=Ph(r);return new jr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ph(r);return new jr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ph(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class co extends pn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,co.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new co(e,n,r,s)}}function Ep(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?co._fromErrorAndOperation(t,i,e,r):i})}async function FT(t,e,n=!1){const r=await js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
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
 */async function UT(t,e,n=!1){const{auth:r}=t;if(rn(r.app))return Promise.reject(ar(r));const s="reauthenticate";try{const i=await js(t,Ep(r,s,e,t),n);te(i.idToken,r,"internal-error");const a=Zc(i.idToken);te(a,r,"internal-error");const{sub:c}=a;return te(t.uid===c,r,"user-mismatch"),jr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
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
 */async function BT(t,e,n=!1){if(rn(t.app))return Promise.reject(ar(t));const r="signIn",s=await Ep(t,r,e),i=await jr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function $T(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function jT(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}const lo="__sak";/**
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
 */class Tp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lo,"1"),this.storage.removeItem(lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qT=1e3,HT=10;class Ip extends Tp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);IT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ip.type="LOCAL";const WT=Ip;/**
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
 */class wp extends Tp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wp.type="SESSION";const Ap=wp;/**
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
 */function zT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Lo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(n.origin,i)),l=await zT(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lo.receivers=[];/**
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
 */function rl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=rl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const y=g;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function jt(){return window}function GT(t){jt().location.href=t}/**
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
 */function Rp(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function QT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YT(){return Rp()?self:null}/**
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
 */const bp="firebaseLocalStorageDb",XT=1,uo="firebaseLocalStorage",Sp="fbase_key";class ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fo(t,e){return t.transaction([uo],e?"readwrite":"readonly").objectStore(uo)}function ZT(){const t=indexedDB.deleteDatabase(bp);return new ri(t).toPromise()}function ic(){const t=indexedDB.open(bp,XT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uo,{keyPath:Sp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uo)?e(r):(r.close(),await ZT(),e(await ic()))})})}async function Ch(t,e,n){const r=Fo(t,!0).put({[Sp]:e,value:n});return new ri(r).toPromise()}async function eI(t,e){const n=Fo(t,!1).get(e),r=await new ri(n).toPromise();return r===void 0?null:r.value}function kh(t,e){const n=Fo(t,!0).delete(e);return new ri(n).toPromise()}const tI=800,nI=3;class Pp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lo._getInstance(YT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QT(),!this.activeServiceWorker)return;this.sender=new KT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ic();return await Ch(e,lo,"1"),await kh(e,lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ch(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fo(s,!1).getAll();return new ri(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pp.type="LOCAL";const rI=Pp;new ti(3e4,6e4);/**
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
 */function Cp(t,e){return e?an(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sl extends vp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sI(t){return BT(t.auth,new sl(t),t.bypassAuthState)}function iI(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),UT(n,new sl(t),t.bypassAuthState)}async function oI(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),FT(n,new sl(t),t.bypassAuthState)}/**
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
 */class kp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sI;case"linkViaPopup":case"linkViaRedirect":return oI;case"reauthViaPopup":case"reauthViaRedirect":return iI;default:Kt(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aI=new ti(2e3,1e4);async function cI(t,e,n){if(rn(t.app))return Promise.reject(Vt(t,"operation-not-supported-in-this-environment"));const r=Mo(t);iT(t,e,nl);const s=Cp(r,n);return new rr(r,"signInViaPopup",e,s).executeNotNull()}class rr extends kp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aI.get())};e()}}rr.currentPopupAction=null;/**
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
 */const lI="pendingRedirect",Wi=new Map;class uI extends kp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wi.get(this.auth._key());if(!e){try{const r=await hI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wi.set(this.auth._key(),e)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hI(t,e){const n=pI(e),r=fI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function dI(t,e){Wi.set(t._key(),e)}function fI(t){return an(t._redirectPersistence)}function pI(t){return Hi(lI,t.config.apiKey,t.name)}async function gI(t,e,n=!1){if(rn(t.app))return Promise.reject(ar(t));const r=Mo(t),s=Cp(r,e),a=await new uI(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const mI=10*60*1e3;class _I{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vh(e))}saveEventToCache(e){this.cachedEventUids.add(Vh(e)),this.lastProcessedEventTime=Date.now()}}function Vh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vp(t);default:return!1}}/**
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
 */async function vI(t,e={}){return Xr(t,"GET","/v1/projects",e)}/**
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
 */const EI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TI=/^https?/;async function II(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vI(t);for(const n of e)try{if(wI(n))return}catch{}Kt(t,"unauthorized-domain")}function wI(t){const e=rc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!TI.test(n))return!1;if(EI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const AI=new ti(3e4,6e4);function Dh(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RI(t){return new Promise((e,n)=>{var r,s,i;function a(){Dh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dh(),n(Vt(t,"network-request-failed"))},timeout:AI.get()})}if(!((s=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=jt().gapi)===null||i===void 0)&&i.load)a();else{const c=VT("iframefcb");return jt()[c]=()=>{gapi.load?a():n(Vt(t,"network-request-failed"))},CT(`${kT()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw zi=null,e})}let zi=null;function bI(t){return zi=zi||RI(t),zi}/**
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
 */const SI=new ti(5e3,15e3),PI="__/auth/iframe",CI="emulator/auth/iframe",kI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DI(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yc(e,CI):`https://${t.config.authDomain}/${PI}`,r={apiKey:e.apiKey,appName:t.name,v:Yr},s=VI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ei(r).slice(1)}`}async function NI(t){const e=await bI(t),n=jt().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:DI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Vt(t,"network-request-failed"),c=jt().setTimeout(()=>{i(a)},SI.get());function l(){jt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const OI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xI=500,MI=600,LI="_blank",FI="http://localhost";class Nh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UI(t,e,n,r=xI,s=MI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},OI),{width:r.toString(),height:s.toString(),top:i,left:a}),d=at().toLowerCase();n&&(c=hp(d)?LI:n),lp(d)&&(e=e||FI,l.scrollbars="yes");const f=Object.entries(l).reduce((y,[S,k])=>`${y}${S}=${k},`,"");if(TT(d)&&c!=="_self")return BI(e||"",c),new Nh(null);const g=window.open(e||"",c,f);te(g,t,"popup-blocked");try{g.focus()}catch{}return new Nh(g)}function BI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $I="__/auth/handler",jI="emulator/auth/handler",qI=encodeURIComponent("fac");async function Oh(t,e,n,r,s,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yr,eventId:s};if(e instanceof nl){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Kv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof ni){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),d=l?`#${qI}=${encodeURIComponent(l)}`:"";return`${HI(t)}?${ei(c).slice(1)}${d}`}function HI({config:t}){return t.emulator?Yc(t,jI):`https://${t.authDomain}/${$I}`}/**
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
 */const Oa="webStorageSupport";class WI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ap,this._completeRedirectFn=gI,this._overrideRedirectResult=dI}async _openPopup(e,n,r,s){var i;un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Oh(e,n,r,rc(),s);return UI(e,a,rl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Oh(e,n,r,rc(),s);return GT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NI(e),r=new _I(e);return n.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oa,{type:Oa},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oa];a!==void 0&&n(!!a),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=II(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mp()||up()||el()}}const zI=WI;var xh="@firebase/auth",Mh="1.7.9";/**
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
 */class KI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QI(t){$r(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_p(t)},d=new ST(r,s,i,l);return NT(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$r(new ur("auth-internal",e=>{const n=Mo(e.getProvider("auth").getImmediate());return(r=>new KI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(xh,Mh,GI(t)),Vn(xh,Mh,"esm2017")}/**
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
 */const JI=5*60,YI=Gf("authIdTokenMaxAge")||JI;let Lh=null;const XI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>YI)return;const s=n==null?void 0:n.token;Lh!==s&&(Lh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function si(t=Xf()){const e=Kc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DT(t,{popupRedirectResolver:zI,persistence:[rI,WT,Ap]}),r=Gf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=XI(i.toString());jT(n,a,()=>a(n.currentUser)),$T(n,c=>a(c))}}const s=zf("auth");return s&&OT(n,`http://${s}`),n}function ZI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}PT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Vt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ZI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QI("Browser");var ew="firebase",tw="10.13.2";/**
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
 */Vn(ew,tw,"app");const nw={apiKey:"AIzaSyALY2Eu62yzZPuaySeDBI3ONz3DYCq2388",authDomain:"relay-hub.firebaseapp.com",projectId:"relay-hub",storageBucket:"relay-hub.appspot.com",messagingSenderId:"1088994606939",appId:"1:1088994606939:web:17dc0c1330726f959ca47e"},Zr=Yf(nw),rw=si(Zr),sw=async()=>{const t=new nn;try{return(await cI(rw,t)).user}catch(e){throw console.error("Error during sign-in:",e),e}},iw=Nt({components:{ButtonDefault:$f},emits:["onButtonClicked"],props:{},setup(){const t=jf(),e=Rt(!1);async function n(){e.value=!0;try{const r=await sw();t.setUser({uid:r.uid,displayName:r.displayName,email:r.email,photoURL:r.photoURL})}catch(r){t.setUser(null),console.error("Failed to sign in:",r)}}return{isLoading:e,onButtonClicked:n}}}),ow={class:"button-google"};function aw(t,e,n,r,s,i){const a=vt("ButtonDefault");return Ee(),$e("div",ow,[qe(a,{text:"Sign in with Google",isLoading:t.isLoading,onOnButtonClicked:t.onButtonClicked},{icon:sf(()=>e[0]||(e[0]=[St("div",{class:"google-icon"},null,-1)])),_:1},8,["isLoading","onOnButtonClicked"])])}const cw=Ot(iw,[["render",aw],["__scopeId","data-v-e750a2f5"]]),lw=Nt({name:"sign-in",components:{ButtonGoogle:cw},setup(){return{}}}),uw={class:"sign-in"};function hw(t,e,n,r,s,i){const a=vt("button-google");return Ee(),$e("div",uw,[e[0]||(e[0]=St("div",{class:"relay-hub"},"RelayHub",-1)),qe(a)])}const dw=Ot(lw,[["render",hw],["__scopeId","data-v-9540f920"]]),fw=Nt({props:{title:{type:String,required:!0}},setup(){return{}}}),pw={class:"page-tite"};function gw(t,e,n,r,s,i){return Ee(),$e("div",pw,Js(t.$props.title),1)}const Dp=Ot(fw,[["render",gw],["__scopeId","data-v-7de7892e"]]),mw=Nt({name:"ToggleButton",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=Rt(t.modelValue);return Ps(()=>t.modelValue,s=>{n.value=s}),{isActive:n,toggleSwitch:()=>{n.value=!n.value,e("update:modelValue",n.value)}}}});function _w(t,e,n,r,s,i){return Ee(),$e("div",{class:Qs(["toggle-switch",{active:t.isActive}]),onClick:e[0]||(e[0]=(...a)=>t.toggleSwitch&&t.toggleSwitch(...a))},e[1]||(e[1]=[St("div",{class:"switch"},null,-1)]),2)}const yw=Ot(mw,[["render",_w],["__scopeId","data-v-27553030"]]);var Fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cr,Np;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(T,A,R){for(var E=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)E[ct-2]=arguments[ct];return m.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(A=0;16>A;++A)T[A]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],A=w.g[2];var R=w.g[3],E=m+(R^_&(A^R))+T[0]+3614090360&4294967295;m=_+(E<<7&4294967295|E>>>25),E=R+(A^m&(_^A))+T[1]+3905402710&4294967295,R=m+(E<<12&4294967295|E>>>20),E=A+(_^R&(m^_))+T[2]+606105819&4294967295,A=R+(E<<17&4294967295|E>>>15),E=_+(m^A&(R^m))+T[3]+3250441966&4294967295,_=A+(E<<22&4294967295|E>>>10),E=m+(R^_&(A^R))+T[4]+4118548399&4294967295,m=_+(E<<7&4294967295|E>>>25),E=R+(A^m&(_^A))+T[5]+1200080426&4294967295,R=m+(E<<12&4294967295|E>>>20),E=A+(_^R&(m^_))+T[6]+2821735955&4294967295,A=R+(E<<17&4294967295|E>>>15),E=_+(m^A&(R^m))+T[7]+4249261313&4294967295,_=A+(E<<22&4294967295|E>>>10),E=m+(R^_&(A^R))+T[8]+1770035416&4294967295,m=_+(E<<7&4294967295|E>>>25),E=R+(A^m&(_^A))+T[9]+2336552879&4294967295,R=m+(E<<12&4294967295|E>>>20),E=A+(_^R&(m^_))+T[10]+4294925233&4294967295,A=R+(E<<17&4294967295|E>>>15),E=_+(m^A&(R^m))+T[11]+2304563134&4294967295,_=A+(E<<22&4294967295|E>>>10),E=m+(R^_&(A^R))+T[12]+1804603682&4294967295,m=_+(E<<7&4294967295|E>>>25),E=R+(A^m&(_^A))+T[13]+4254626195&4294967295,R=m+(E<<12&4294967295|E>>>20),E=A+(_^R&(m^_))+T[14]+2792965006&4294967295,A=R+(E<<17&4294967295|E>>>15),E=_+(m^A&(R^m))+T[15]+1236535329&4294967295,_=A+(E<<22&4294967295|E>>>10),E=m+(A^R&(_^A))+T[1]+4129170786&4294967295,m=_+(E<<5&4294967295|E>>>27),E=R+(_^A&(m^_))+T[6]+3225465664&4294967295,R=m+(E<<9&4294967295|E>>>23),E=A+(m^_&(R^m))+T[11]+643717713&4294967295,A=R+(E<<14&4294967295|E>>>18),E=_+(R^m&(A^R))+T[0]+3921069994&4294967295,_=A+(E<<20&4294967295|E>>>12),E=m+(A^R&(_^A))+T[5]+3593408605&4294967295,m=_+(E<<5&4294967295|E>>>27),E=R+(_^A&(m^_))+T[10]+38016083&4294967295,R=m+(E<<9&4294967295|E>>>23),E=A+(m^_&(R^m))+T[15]+3634488961&4294967295,A=R+(E<<14&4294967295|E>>>18),E=_+(R^m&(A^R))+T[4]+3889429448&4294967295,_=A+(E<<20&4294967295|E>>>12),E=m+(A^R&(_^A))+T[9]+568446438&4294967295,m=_+(E<<5&4294967295|E>>>27),E=R+(_^A&(m^_))+T[14]+3275163606&4294967295,R=m+(E<<9&4294967295|E>>>23),E=A+(m^_&(R^m))+T[3]+4107603335&4294967295,A=R+(E<<14&4294967295|E>>>18),E=_+(R^m&(A^R))+T[8]+1163531501&4294967295,_=A+(E<<20&4294967295|E>>>12),E=m+(A^R&(_^A))+T[13]+2850285829&4294967295,m=_+(E<<5&4294967295|E>>>27),E=R+(_^A&(m^_))+T[2]+4243563512&4294967295,R=m+(E<<9&4294967295|E>>>23),E=A+(m^_&(R^m))+T[7]+1735328473&4294967295,A=R+(E<<14&4294967295|E>>>18),E=_+(R^m&(A^R))+T[12]+2368359562&4294967295,_=A+(E<<20&4294967295|E>>>12),E=m+(_^A^R)+T[5]+4294588738&4294967295,m=_+(E<<4&4294967295|E>>>28),E=R+(m^_^A)+T[8]+2272392833&4294967295,R=m+(E<<11&4294967295|E>>>21),E=A+(R^m^_)+T[11]+1839030562&4294967295,A=R+(E<<16&4294967295|E>>>16),E=_+(A^R^m)+T[14]+4259657740&4294967295,_=A+(E<<23&4294967295|E>>>9),E=m+(_^A^R)+T[1]+2763975236&4294967295,m=_+(E<<4&4294967295|E>>>28),E=R+(m^_^A)+T[4]+1272893353&4294967295,R=m+(E<<11&4294967295|E>>>21),E=A+(R^m^_)+T[7]+4139469664&4294967295,A=R+(E<<16&4294967295|E>>>16),E=_+(A^R^m)+T[10]+3200236656&4294967295,_=A+(E<<23&4294967295|E>>>9),E=m+(_^A^R)+T[13]+681279174&4294967295,m=_+(E<<4&4294967295|E>>>28),E=R+(m^_^A)+T[0]+3936430074&4294967295,R=m+(E<<11&4294967295|E>>>21),E=A+(R^m^_)+T[3]+3572445317&4294967295,A=R+(E<<16&4294967295|E>>>16),E=_+(A^R^m)+T[6]+76029189&4294967295,_=A+(E<<23&4294967295|E>>>9),E=m+(_^A^R)+T[9]+3654602809&4294967295,m=_+(E<<4&4294967295|E>>>28),E=R+(m^_^A)+T[12]+3873151461&4294967295,R=m+(E<<11&4294967295|E>>>21),E=A+(R^m^_)+T[15]+530742520&4294967295,A=R+(E<<16&4294967295|E>>>16),E=_+(A^R^m)+T[2]+3299628645&4294967295,_=A+(E<<23&4294967295|E>>>9),E=m+(A^(_|~R))+T[0]+4096336452&4294967295,m=_+(E<<6&4294967295|E>>>26),E=R+(_^(m|~A))+T[7]+1126891415&4294967295,R=m+(E<<10&4294967295|E>>>22),E=A+(m^(R|~_))+T[14]+2878612391&4294967295,A=R+(E<<15&4294967295|E>>>17),E=_+(R^(A|~m))+T[5]+4237533241&4294967295,_=A+(E<<21&4294967295|E>>>11),E=m+(A^(_|~R))+T[12]+1700485571&4294967295,m=_+(E<<6&4294967295|E>>>26),E=R+(_^(m|~A))+T[3]+2399980690&4294967295,R=m+(E<<10&4294967295|E>>>22),E=A+(m^(R|~_))+T[10]+4293915773&4294967295,A=R+(E<<15&4294967295|E>>>17),E=_+(R^(A|~m))+T[1]+2240044497&4294967295,_=A+(E<<21&4294967295|E>>>11),E=m+(A^(_|~R))+T[8]+1873313359&4294967295,m=_+(E<<6&4294967295|E>>>26),E=R+(_^(m|~A))+T[15]+4264355552&4294967295,R=m+(E<<10&4294967295|E>>>22),E=A+(m^(R|~_))+T[6]+2734768916&4294967295,A=R+(E<<15&4294967295|E>>>17),E=_+(R^(A|~m))+T[13]+1309151649&4294967295,_=A+(E<<21&4294967295|E>>>11),E=m+(A^(_|~R))+T[4]+4149444226&4294967295,m=_+(E<<6&4294967295|E>>>26),E=R+(_^(m|~A))+T[11]+3174756917&4294967295,R=m+(E<<10&4294967295|E>>>22),E=A+(m^(R|~_))+T[2]+718787259&4294967295,A=R+(E<<15&4294967295|E>>>17),E=_+(R^(A|~m))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,T=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=_;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<m;)if(T[A++]=w.charCodeAt(R++),A==this.blockSize){s(this,T),A=0;break}}else for(;R<m;)if(T[A++]=w[R++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)w[_++]=this.g[m]>>>T&255;return w};function i(w,m){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;for(var _=[],T=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;T&&R==m||(_[A]=R,T=!1)}this.g=_}var c={};function l(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return F(d(-w));for(var m=[],_=1,T=0;w>=_;T++)m[T]=w/_|0,_*=4294967296;return new a(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return F(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),T=g,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),E=parseInt(w.substring(A,A+R),m);8>R?(R=d(Math.pow(m,R)),T=T.j(R).add(d(E))):(T=T.j(_),T=T.add(d(E)))}return T}var g=l(0),y=l(1),S=l(16777216);t=a.prototype,t.m=function(){if(L(this))return-F(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);w+=(0<=T?T:4294967296+T)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(L(this))return"-"+F(this).toString(w);for(var m=d(Math.pow(w,6)),_=this,T="";;){var A=H(_,m).g;_=G(_,A.j(m));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=A,k(_))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function L(w){return w.h==-1}t.l=function(w){return w=G(this,w),L(w)?-1:k(w)?0:1};function F(w){for(var m=w.g.length,_=[],T=0;T<m;T++)_[T]=~w.g[T];return new a(_,~w.h).add(y)}t.abs=function(){return L(this)?F(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0,A=0;A<=m;A++){var R=T+(this.i(A)&65535)+(w.i(A)&65535),E=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);T=E>>>16,R&=65535,E&=65535,_[A]=E<<16|R}return new a(_,_[_.length-1]&-2147483648?-1:0)};function G(w,m){return w.add(F(m))}t.j=function(w){if(k(this)||k(w))return g;if(L(this))return L(w)?F(this).j(F(w)):F(F(this).j(w));if(L(w))return F(this.j(F(w)));if(0>this.l(S)&&0>w.l(S))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<w.g.length;A++){var R=this.i(T)>>>16,E=this.i(T)&65535,ct=w.i(A)>>>16,xt=w.i(A)&65535;_[2*T+2*A]+=E*xt,J(_,2*T+2*A),_[2*T+2*A+1]+=R*xt,J(_,2*T+2*A+1),_[2*T+2*A+1]+=E*ct,J(_,2*T+2*A+1),_[2*T+2*A+2]+=R*ct,J(_,2*T+2*A+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function J(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function Y(w,m){this.g=w,this.h=m}function H(w,m){if(k(m))throw Error("division by zero");if(k(w))return new Y(g,g);if(L(w))return m=H(F(w),m),new Y(F(m.g),F(m.h));if(L(m))return m=H(w,F(m)),new Y(F(m.g),m.h);if(30<w.g.length){if(L(w)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var _=y,T=m;0>=T.l(w);)_=oe(_),T=oe(T);var A=_e(_,1),R=_e(T,1);for(T=_e(T,2),_=_e(_,2);!k(T);){var E=R.add(T);0>=E.l(w)&&(A=A.add(_),R=E),T=_e(T,1),_=_e(_,1)}return m=G(w,A.j(m)),new Y(A,m)}for(A=g;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=d(_),E=R.j(m);L(E)||0<E.l(w);)_-=T,R=d(_),E=R.j(m);k(R)&&(R=y),A=A.add(R),w=G(w,E)}return new Y(A,w)}t.A=function(w){return H(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&w.i(T);return new a(_,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|w.i(T);return new a(_,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^w.i(T);return new a(_,this.h^w.h)};function oe(w){for(var m=w.g.length+1,_=[],T=0;T<m;T++)_[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(_,w.h)}function _e(w,m){var _=m>>5;m%=32;for(var T=w.g.length-_,A=[],R=0;R<T;R++)A[R]=0<m?w.i(R+_)>>>m|w.i(R+_+1)<<32-m:w.i(R+_);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Np=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,cr=a}).apply(typeof Fh<"u"?Fh:typeof self<"u"?self:typeof window<"u"?window:{});var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Op,xp,Is,Mp,Ki,oc,Lp,Fp,Up;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof xi=="object"&&xi];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var P=h++;return{value:u(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,h){return o.call.apply(o.bind,arguments)}function g(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(u,b)}}return function(){return o.apply(u,arguments)}}function y(o,u,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function S(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function k(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,P){for(var $=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)$[Te-2]=arguments[Te];return u.prototype[b].apply(p,$)}}function L(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function F(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(l(p)){const b=o.length||0,P=p.length||0;o.length=b+P;for(let $=0;$<P;$++)o[b+$]=p[$]}else o.push(p)}}class G{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function J(o){return/^[\s\xa0]*$/.test(o)}function Y(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var oe=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function _e(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function w(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function m(o){const u={};for(const h in o)u[h]=o[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let P=0;P<_.length;P++)h=_[P],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function A(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function R(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Pt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ct{constructor(){this.h=this.g=null}add(u,h){const p=xt.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var xt=new G(()=>new Se,o=>o.reset());class Se{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,de=!1,Pt=new ct,Hn=()=>{const o=c.Promise.resolve(void 0);ce=()=>{o.then(Qt)}};var Qt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(h){R(h)}var u=xt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}de=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var ea=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Wn(o,u){if(Le.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{H(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:zn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Wn.aa.h.call(this)}}k(Wn,Le);var zn={2:"touch",3:"pen",4:"mouse"};Wn.prototype.h=function(){Wn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Jt="closure_listenable_"+(1e6*Math.random()|0),ss=0;function fi(o,u,h,p,b){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=b,this.key=++ss,this.da=this.fa=!1}function Mt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Kn(o){this.src=o,this.g={},this.h=0}Kn.prototype.add=function(o,u,h,p,b){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var $=v(o,u,p,b);return-1<$?(u=o[$],h||(u.fa=!1)):(u=new fi(u,this.src,P,!!p,b),u.fa=h,o.push(u)),u};function _r(o,u){var h=u.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,u,void 0),P;(P=0<=b)&&Array.prototype.splice.call(p,b,1),P&&(Mt(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function v(o,u,h,p){for(var b=0;b<o.length;++b){var P=o[b];if(!P.da&&P.listener==u&&P.capture==!!h&&P.ha==p)return b}return-1}var I="closure_lm_"+(1e6*Math.random()|0),C={};function x(o,u,h,p,b){if(Array.isArray(u)){for(var P=0;P<u.length;P++)x(o,u[P],h,p,b);return null}return h=Q(h),o&&o[Jt]?o.K(u,h,d(p)?!!p.capture:!!p,b):D(o,u,h,!1,p,b)}function D(o,u,h,p,b,P){if(!u)throw Error("Invalid event type");var $=d(b)?!!b.capture:!!b,Te=Z(o);if(Te||(o[I]=Te=new Kn(o)),h=Te.add(u,h,p,$,P),h.proxy)return h;if(p=O(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)ea||(b=$),b===void 0&&(b=!1),o.addEventListener(u.toString(),p,b);else if(o.attachEvent)o.attachEvent(U(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function O(){function o(h){return u.call(o.src,o.listener,h)}const u=M;return o}function j(o,u,h,p,b){if(Array.isArray(u))for(var P=0;P<u.length;P++)j(o,u[P],h,p,b);else p=d(p)?!!p.capture:!!p,h=Q(h),o&&o[Jt]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],h=v(P,h,p,b),-1<h&&(Mt(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=Z(o))&&(u=o.g[u.toString()],o=-1,u&&(o=v(u,h,p,b)),(h=-1<o?u[o]:null)&&B(h))}function B(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Jt])_r(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(U(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=Z(u))?(_r(h,o),h.h==0&&(h.src=null,u[I]=null)):Mt(o)}}}function U(o){return o in C?C[o]:C[o]="on"+o}function M(o,u){if(o.da)o=!0;else{u=new Wn(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&B(o),o=h.call(p,u)}return o}function Z(o){return o=o[I],o instanceof Kn?o:null}var q="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(o){return typeof o=="function"?o:(o[q]||(o[q]=function(u){return o.handleEvent(u)}),o[q])}function z(){Me.call(this),this.i=new Kn(this),this.M=this,this.F=null}k(z,Me),z.prototype[Jt]=!0,z.prototype.removeEventListener=function(o,u,h,p){j(this,o,u,h,p)};function ee(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Le(u,o);else if(u instanceof Le)u.target=u.target||o;else{var b=u;u=new Le(p,o),T(u,b)}if(b=!0,h)for(var P=h.length-1;0<=P;P--){var $=u.g=h[P];b=ye($,p,!0,u)&&b}if($=u.g=o,b=ye($,p,!0,u)&&b,b=ye($,p,!1,u)&&b,h)for(P=0;P<h.length;P++)$=u.g=h[P],b=ye($,p,!1,u)&&b}z.prototype.N=function(){if(z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)Mt(h[p]);delete o.g[u],o.h--}}this.F=null},z.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},z.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function ye(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,P=0;P<u.length;++P){var $=u[P];if($&&!$.da&&$.capture==h){var Te=$.listener,We=$.ha||$.src;$.fa&&_r(o.i,$),b=Te.call(We,p)!==!1&&b}}return b&&!p.defaultPrevented}function fe(o,u,h){if(typeof o=="function")h&&(o=y(o,h));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Xe(o){o.g=fe(()=>{o.g=null,o.i&&(o.i=!1,Xe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ue extends Me{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Xe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(o){Me.call(this),this.h=o,this.g={}}k(He,Me);var Ze=[];function gn(o){_e(o.g,function(u,h){this.g.hasOwnProperty(h)&&B(u)},o),o.g={}}He.prototype.N=function(){He.aa.N.call(this),gn(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yr=c.JSON.stringify,lt=c.JSON.parse,wt=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function vr(){}vr.prototype.h=null;function Fl(o){return o.h||(o.h=o.i())}function Ul(){}var is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ta(){Le.call(this,"d")}k(ta,Le);function na(){Le.call(this,"c")}k(na,Le);var Gn={},Bl=null;function pi(){return Bl=Bl||new z}Gn.La="serverreachability";function $l(o){Le.call(this,Gn.La,o)}k($l,Le);function os(o){const u=pi();ee(u,new $l(u))}Gn.STAT_EVENT="statevent";function jl(o,u){Le.call(this,Gn.STAT_EVENT,o),this.stat=u}k(jl,Le);function ut(o){const u=pi();ee(u,new jl(u,o))}Gn.Ma="timingevent";function ql(o,u){Le.call(this,Gn.Ma,o),this.size=u}k(ql,Le);function as(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function cs(){this.g=!0}cs.prototype.xa=function(){this.g=!1};function om(o,u,h,p,b,P){o.info(function(){if(o.g)if(P)for(var $="",Te=P.split("&"),We=0;We<Te.length;We++){var pe=Te[We].split("=");if(1<pe.length){var et=pe[0];pe=pe[1];var tt=et.split("_");$=2<=tt.length&&tt[1]=="type"?$+(et+"="+pe+"&"):$+(et+"=redacted&")}}else $=null;else $=P;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+u+`
`+h+`
`+$})}function am(o,u,h,p,b,P,$){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+u+`
`+h+`
`+P+" "+$})}function Er(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+lm(o,h)+(p?" "+p:"")})}function cm(o,u){o.info(function(){return"TIMEOUT: "+u})}cs.prototype.info=function(){};function lm(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return yr(h)}catch{return u}}var gi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ra;function mi(){}k(mi,vr),mi.prototype.g=function(){return new XMLHttpRequest},mi.prototype.i=function(){return{}},ra=new mi;function mn(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new He(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wl}function Wl(){this.i=null,this.g="",this.h=!1}var zl={},sa={};function ia(o,u,h){o.L=1,o.v=Ei(Yt(u)),o.m=h,o.P=!0,Kl(o,null)}function Kl(o,u){o.F=Date.now(),_i(o),o.A=Yt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),au(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Wl,o.g=Ru(o.j,h?u:null,!o.m),0<o.O&&(o.M=new Ue(y(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(Ze[0]=b.toString()),b=Ze);for(var P=0;P<b.length;P++){var $=x(h,b[P],p||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),os(),om(o.i,o.u,o.A,o.l,o.R,o.m)}mn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Xt(o)==3?u.j():this.Y(o)},mn.prototype.Y=function(o){try{if(o==this.g)e:{const tt=Xt(this.g);var u=this.g.Ba();const wr=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||pu(this.g)))){this.J||tt!=4||u==7||(u==8||0>=wr?os(3):os(2)),oa(this);var h=this.g.Z();this.X=h;t:if(Gl(this)){var p=pu(this.g);o="";var b=p.length,P=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qn(this),ls(this);var $="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(P&&u==b-1)});p.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=h==200,am(this.i,this.u,this.A,this.l,this.R,tt,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,We=this.g;if((Te=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(Te)){var pe=Te;break t}}pe=null}if(h=pe)Er(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,aa(this,h);else{this.o=!1,this.s=3,ut(12),Qn(this),ls(this);break e}}if(this.P){h=!0;let Ct;for(;!this.J&&this.C<$.length;)if(Ct=um(this,$),Ct==sa){tt==4&&(this.s=4,ut(14),h=!1),Er(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==zl){this.s=4,ut(15),Er(this.i,this.l,$,"[Invalid Chunk]"),h=!1;break}else Er(this.i,this.l,Ct,null),aa(this,Ct);if(Gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||$.length!=0||this.h.h||(this.s=1,ut(16),h=!1),this.o=this.o&&h,!h)Er(this.i,this.l,$,"[Invalid Chunked Response]"),Qn(this),ls(this);else if(0<$.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),fa(et),et.M=!0,ut(11))}}else Er(this.i,this.l,$,null),aa(this,$);tt==4&&Qn(this),this.o&&!this.J&&(tt==4?Tu(this.j,this):(this.o=!1,_i(this)))}else Sm(this.g),h==400&&0<$.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Qn(this),ls(this)}}}catch{}finally{}};function Gl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function um(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?sa:(h=Number(u.substring(h,p)),isNaN(h)?zl:(p+=1,p+h>u.length?sa:(u=u.slice(p,p+h),o.C=p+h,u)))}mn.prototype.cancel=function(){this.J=!0,Qn(this)};function _i(o){o.S=Date.now()+o.I,Ql(o,o.I)}function Ql(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=as(y(o.ba,o),u)}function oa(o){o.B&&(c.clearTimeout(o.B),o.B=null)}mn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(cm(this.i,this.A),this.L!=2&&(os(),ut(17)),Qn(this),this.s=2,ls(this)):Ql(this,this.S-o)};function ls(o){o.j.G==0||o.J||Tu(o.j,o)}function Qn(o){oa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,gn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function aa(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||ca(h.h,o))){if(!o.K&&ca(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ri(h),wi(h);else break e;da(h),ut(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=as(y(h.Za,h),6e3));if(1>=Xl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Yn(h,11)}else if((o.K||h.g==o)&&Ri(h),!J(u))for(b=h.Da.g.parse(u),u=0;u<b.length;u++){let pe=b[u];if(h.T=pe[0],pe=pe[1],h.G==2)if(pe[0]=="c"){h.K=pe[1],h.ia=pe[2];const et=pe[3];et!=null&&(h.la=et,h.j.info("VER="+h.la));const tt=pe[4];tt!=null&&(h.Aa=tt,h.j.info("SVER="+h.Aa));const wr=pe[5];wr!=null&&typeof wr=="number"&&0<wr&&(p=1.5*wr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Ct=o.g;if(Ct){const Si=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Si){var P=p.h;P.g||Si.indexOf("spdy")==-1&&Si.indexOf("quic")==-1&&Si.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(la(P,P.h),P.h=null))}if(p.D){const pa=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;pa&&(p.ya=pa,Re(p.I,p.D,pa))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var $=o;if(p.qa=Au(p,p.J?p.ia:null,p.W),$.K){Zl(p.h,$);var Te=$,We=p.L;We&&(Te.I=We),Te.B&&(oa(Te),_i(Te)),p.g=$}else vu(p);0<h.i.length&&Ai(h)}else pe[0]!="stop"&&pe[0]!="close"||Yn(h,7);else h.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Yn(h,7):ha(h):pe[0]!="noop"&&h.l&&h.l.ta(pe),h.v=0)}}os(4)}catch{}}var hm=class{constructor(o,u){this.g=o,this.map=u}};function Jl(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Xl(o){return o.h?1:o.g?o.g.size:0}function ca(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function la(o,u){o.g?o.g.add(u):o.h=u}function Zl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Jl.prototype.cancel=function(){if(this.i=eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function eu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return L(o.i)}function dm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function fm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function tu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=fm(o),p=dm(o),b=p.length,P=0;P<b;P++)u.call(void 0,p[P],h&&h[P],o)}var nu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pm(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var P=o[h].substring(0,p);b=o[h].substring(p+1)}else P=o[h];u(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Jn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Jn){this.h=o.h,yi(this,o.j),this.o=o.o,this.g=o.g,vi(this,o.s),this.l=o.l;var u=o.i,h=new ds;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),ru(this,h),this.m=o.m}else o&&(u=String(o).match(nu))?(this.h=!1,yi(this,u[1]||"",!0),this.o=us(u[2]||""),this.g=us(u[3]||"",!0),vi(this,u[4]),this.l=us(u[5]||"",!0),ru(this,u[6]||"",!0),this.m=us(u[7]||"")):(this.h=!1,this.i=new ds(null,this.h))}Jn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(hs(u,su,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(hs(u,su,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(hs(h,h.charAt(0)=="/"?_m:mm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",hs(h,vm)),o.join("")};function Yt(o){return new Jn(o)}function yi(o,u,h){o.j=h?us(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function vi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function ru(o,u,h){u instanceof ds?(o.i=u,Em(o.i,o.h)):(h||(u=hs(u,ym)),o.i=new ds(u,o.h))}function Re(o,u,h){o.i.set(u,h)}function Ei(o){return Re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function us(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function hs(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,gm),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function gm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var su=/[#\/\?@]/g,mm=/[#\?:]/g,_m=/[#\?]/g,ym=/[#\?@]/g,vm=/#/g;function ds(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function _n(o){o.g||(o.g=new Map,o.h=0,o.i&&pm(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}t=ds.prototype,t.add=function(o,u){_n(this),this.i=null,o=Tr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function iu(o,u){_n(o),u=Tr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ou(o,u){return _n(o),u=Tr(o,u),o.g.has(u)}t.forEach=function(o,u){_n(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(u,b,p,this)},this)},this)},t.na=function(){_n(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const b=o[p];for(let P=0;P<b.length;P++)h.push(u[p])}return h},t.V=function(o){_n(this);let u=[];if(typeof o=="string")ou(this,o)&&(u=u.concat(this.g.get(Tr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},t.set=function(o,u){return _n(this),this.i=null,o=Tr(this,o),ou(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function au(o,u,h){iu(o,u),0<h.length&&(o.i=null,o.g.set(Tr(o,u),L(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const P=encodeURIComponent(String(p)),$=this.V(p);for(p=0;p<$.length;p++){var b=P;$[p]!==""&&(b+="="+encodeURIComponent(String($[p]))),o.push(b)}}return this.i=o.join("&")};function Tr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Em(o,u){u&&!o.j&&(_n(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(iu(this,p),au(this,b,h))},o)),o.j=u}function Tm(o,u){const h=new cs;if(c.Image){const p=new Image;p.onload=S(yn,h,"TestLoadImage: loaded",!0,u,p),p.onerror=S(yn,h,"TestLoadImage: error",!1,u,p),p.onabort=S(yn,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=S(yn,h,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Im(o,u){const h=new cs,p=new AbortController,b=setTimeout(()=>{p.abort(),yn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(b),P.ok?yn(h,"TestPingServer: ok",!0,u):yn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),yn(h,"TestPingServer: error",!1,u)})}function yn(o,u,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function wm(){this.g=new wt}function Am(o,u,h){const p=h||"";try{tu(o,function(b,P){let $=b;d(b)&&($=yr(b)),u.push(p+P+"="+encodeURIComponent($))})}catch(b){throw u.push(p+"type="+encodeURIComponent("_badmap")),b}}function fs(o){this.l=o.Ub||null,this.j=o.eb||!1}k(fs,vr),fs.prototype.g=function(){return new Ti(this.l,this.j)},fs.prototype.i=function(o){return function(){return o}}({});function Ti(o,u){z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ti,z),t=Ti.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,gs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function cu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ps(this):gs(this),this.readyState==3&&cu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ps(this))},t.Qa=function(o){this.g&&(this.response=o,ps(this))},t.ga=function(){this.g&&ps(this)};function ps(o){o.readyState=4,o.l=null,o.j=null,o.v=null,gs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function gs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function lu(o){let u="";return _e(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function ua(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=lu(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Re(o,u,h))}function ke(o){z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ke,z);var Rm=/^https?$/i,bm=["POST","PUT"];t=ke.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ra.g(),this.v=this.o?Fl(this.o):Fl(ra),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){uu(this,P);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(bm,u,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,$]of h)this.g.setRequestHeader(P,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){uu(this,P)}};function uu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,hu(o),Ii(o)}function hu(o){o.A||(o.A=!0,ee(o,"complete"),ee(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ee(this,"complete"),ee(this,"abort"),Ii(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ii(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?du(this):this.bb())},t.bb=function(){du(this)};function du(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Xt(o)!=4||o.Z()!=2)){if(o.u&&Xt(o)==4)fe(o.Ea,0,o);else if(ee(o,"readystatechange"),Xt(o)==4){o.h=!1;try{const $=o.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=$===0){var b=String(o.D).match(nu)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),p=!Rm.test(b?b.toLowerCase():"")}h=p}if(h)ee(o,"complete"),ee(o,"success");else{o.m=6;try{var P=2<Xt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",hu(o)}}finally{Ii(o)}}}}function Ii(o,u){if(o.g){fu(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ee(o,"ready");try{h.onreadystatechange=p}catch{}}}function fu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Xt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),lt(u)}};function pu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Sm(o){const u={};o=(o.g&&2<=Xt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(J(o[p]))continue;var h=A(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=u[b]||[];u[b]=P,P.push(h)}w(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function gu(o){this.Aa=0,this.i=[],this.j=new cs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ms("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ms("baseRetryDelayMs",5e3,o),this.cb=ms("retryDelaySeedMs",1e4,o),this.Wa=ms("forwardChannelMaxRetries",2,o),this.wa=ms("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Jl(o&&o.concurrentRequestLimit),this.Da=new wm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=gu.prototype,t.la=8,t.G=1,t.connect=function(o,u,h,p){ut(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Au(this,null,this.W),Ai(this)};function ha(o){if(mu(o),o.G==3){var u=o.U++,h=Yt(o.I);if(Re(h,"SID",o.K),Re(h,"RID",u),Re(h,"TYPE","terminate"),_s(o,h),u=new mn(o,o.j,u),u.L=2,u.v=Ei(Yt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Ru(u.j,null),u.g.ea(u.v)),u.F=Date.now(),_i(u)}wu(o)}function wi(o){o.g&&(fa(o),o.g.cancel(),o.g=null)}function mu(o){wi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ri(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ai(o){if(!Yl(o.h)&&!o.s){o.s=!0;var u=o.Ga;ce||Hn(),de||(ce(),de=!0),Pt.add(u,o),o.B=0}}function Pm(o,u){return Xl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=as(y(o.Ga,o,u),Iu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new mn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=yu(this,b,u),h=Yt(this.I),Re(h,"RID",o),Re(h,"CVER",22),this.D&&Re(h,"X-HTTP-Session-Id",this.D),_s(this,h),P&&(this.O?u="headers="+encodeURIComponent(String(lu(P)))+"&"+u:this.m&&ua(h,this.m,P)),la(this.h,b),this.Ua&&Re(h,"TYPE","init"),this.P?(Re(h,"$req",u),Re(h,"SID","null"),b.T=!0,ia(b,h,null)):ia(b,h,u),this.G=2}}else this.G==3&&(o?_u(this,o):this.i.length==0||Yl(this.h)||_u(this))};function _u(o,u){var h;u?h=u.l:h=o.U++;const p=Yt(o.I);Re(p,"SID",o.K),Re(p,"RID",h),Re(p,"AID",o.T),_s(o,p),o.m&&o.o&&ua(p,o.m,o.o),h=new mn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=yu(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),la(o.h,h),ia(h,p,u)}function _s(o,u){o.H&&_e(o.H,function(h,p){Re(u,p,h)}),o.l&&tu({},function(h,p){Re(u,p,h)})}function yu(o,u,h){h=Math.min(o.i.length,h);var p=o.l?y(o.l.Na,o.l,o):null;e:{var b=o.i;let P=-1;for(;;){const $=["count="+h];P==-1?0<h?(P=b[0].g,$.push("ofs="+P)):P=0:$.push("ofs="+P);let Te=!0;for(let We=0;We<h;We++){let pe=b[We].g;const et=b[We].map;if(pe-=P,0>pe)P=Math.max(0,b[We].g-100),Te=!1;else try{Am(et,$,"req"+pe+"_")}catch{p&&p(et)}}if(Te){p=$.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function vu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ce||Hn(),de||(ce(),de=!0),Pt.add(u,o),o.v=0}}function da(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=as(y(o.Fa,o),Iu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Eu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=as(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),wi(this),Eu(this))};function fa(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Eu(o){o.g=new mn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Yt(o.qa);Re(u,"RID","rpc"),Re(u,"SID",o.K),Re(u,"AID",o.T),Re(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Re(u,"TO",o.ja),Re(u,"TYPE","xmlhttp"),_s(o,u),o.m&&o.o&&ua(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Ei(Yt(u)),h.m=null,h.P=!0,Kl(h,o)}t.Za=function(){this.C!=null&&(this.C=null,wi(this),da(this),ut(19))};function Ri(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Tu(o,u){var h=null;if(o.g==u){Ri(o),fa(o),o.g=null;var p=2}else if(ca(o.h,u))h=u.D,Zl(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var b=o.B;p=pi(),ee(p,new ql(p,h)),Ai(o)}else vu(o);else if(b=u.s,b==3||b==0&&0<u.X||!(p==1&&Pm(o,u)||p==2&&da(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),b){case 1:Yn(o,5);break;case 4:Yn(o,10);break;case 3:Yn(o,6);break;default:Yn(o,2)}}}function Iu(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Yn(o,u){if(o.j.info("Error code "+u),u==2){var h=y(o.fb,o),p=o.Xa;const b=!p;p=new Jn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||yi(p,"https"),Ei(p),b?Tm(p.toString(),h):Im(p.toString(),h)}else ut(2);o.G=0,o.l&&o.l.sa(u),wu(o),mu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function wu(o){if(o.G=0,o.ka=[],o.l){const u=eu(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function Au(o,u,h){var p=h instanceof Jn?Yt(h):new Jn(h);if(p.g!="")u&&(p.g=u+"."+p.g),vi(p,p.s);else{var b=c.location;p=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var P=new Jn(null);p&&yi(P,p),u&&(P.g=u),b&&vi(P,b),h&&(P.l=h),p=P}return h=o.D,u=o.ya,h&&u&&Re(p,h,u),Re(p,"VER",o.la),_s(o,p),p}function Ru(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ke(new fs({eb:h})):new ke(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function bu(){}t=bu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function bi(){}bi.prototype.g=function(o,u){return new mt(o,u)};function mt(o,u){z.call(this),this.g=new gu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!J(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!J(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ir(this)}k(mt,z),mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){ha(this.g)},mt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=yr(o),o=h);u.i.push(new hm(u.Ya++,o)),u.G==3&&Ai(u)},mt.prototype.N=function(){this.g.l=null,delete this.j,ha(this.g),delete this.g,mt.aa.N.call(this)};function Su(o){ta.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Su,ta);function Pu(){na.call(this),this.status=1}k(Pu,na);function Ir(o){this.g=o}k(Ir,bu),Ir.prototype.ua=function(){ee(this.g,"a")},Ir.prototype.ta=function(o){ee(this.g,new Su(o))},Ir.prototype.sa=function(o){ee(this.g,new Pu)},Ir.prototype.ra=function(){ee(this.g,"b")},bi.prototype.createWebChannel=bi.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,Up=function(){return new bi},Fp=function(){return pi()},Lp=Gn,oc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gi.NO_ERROR=0,gi.TIMEOUT=8,gi.HTTP_ERROR=6,Ki=gi,Hl.COMPLETE="complete",Mp=Hl,Ul.EventType=is,is.OPEN="a",is.CLOSE="b",is.ERROR="c",is.MESSAGE="d",z.prototype.listen=z.prototype.K,Is=Ul,xp=fs,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,Op=ke}).apply(typeof xi<"u"?xi:typeof self<"u"?self:typeof window<"u"?window:{});const Uh="@firebase/firestore";/**
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
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
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
 */let es="10.13.2";/**
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
 */const dr=new Wc("@firebase/firestore");function Es(){return dr.logLevel}function K(t,...e){if(dr.logLevel<=ue.DEBUG){const n=e.map(il);dr.debug(`Firestore (${es}): ${t}`,...n)}}function hn(t,...e){if(dr.logLevel<=ue.ERROR){const n=e.map(il);dr.error(`Firestore (${es}): ${t}`,...n)}}function qr(t,...e){if(dr.logLevel<=ue.WARN){const n=e.map(il);dr.warn(`Firestore (${es}): ${t}`,...n)}}function il(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+t;throw hn(e),new Error(e)}function we(t,e){t||ne()}function ie(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Bp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class Ew{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Tw{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new Bp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new rt(e)}}class Iw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ww{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Iw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Aw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new Aw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function bw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class $p{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=bw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Hr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new Fe(0,0))}static max(){return new se(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class qs{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends qs{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const Sw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends qs{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return Sw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(be.fromString(e))}static fromName(e){return new X(be.fromString(e).popFirst(5))}static empty(){return new X(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new be(e.slice()))}}function Pw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Mn(s,X.empty(),e)}function Cw(t){return new Mn(t.readTime,t.key,-1)}class Mn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mn(se.min(),X.empty(),-1)}static max(){return new Mn(se.max(),X.empty(),-1)}}function kw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const Vw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ii(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==Vw)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(s=>s?N.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new N((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;n(e[d]).next(f=>{a[d]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new N((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Nw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function oi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ol{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ol.oe=-1;function Uo(t){return t==null}function ho(t){return t===0&&1/t==-1/0}function Ow(t){return typeof t=="number"&&Number.isInteger(t)&&!ho(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Bh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mi(this.root,e,this.comparator,!0)}}class Mi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $h(this.data.getIterator())}getIteratorFrom(e){return new $h(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class $h{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new Qe(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qp("Invalid base64 string: "+i):i}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const xw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(t){if(we(!!t),typeof t=="string"){let e=0;const n=xw.exec(t);if(we(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */function al(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cl(t){const e=t.mapValue.fields.__previous_value__;return al(e)?cl(e):e}function Hs(t){const e=Ln(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class Mw{constructor(e,n,r,s,i,a,c,l,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class Ws{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ws("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ws&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?al(t)?4:Fw(t)?9007199254740991:Lw(t)?10:11:ne()}function Gt(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hs(t).isEqual(Hs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ln(s.timestampValue),c=Ln(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return fr(s.bytesValue).isEqual(fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ve(s.doubleValue),c=Ve(i.doubleValue);return a===c?ho(a)===ho(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return Hr(t.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Bh(a)!==Bh(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Gt(a[l],c[l])))return!1;return!0}(t,e);default:return ne()}}function zs(t,e){return(t.values||[]).find(n=>Gt(n,e))!==void 0}function Wr(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Ve(i.integerValue||i.doubleValue),l=Ve(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return jh(t.timestampValue,e.timestampValue);case 4:return jh(Hs(t),Hs(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,a){const c=fr(i),l=fr(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const f=ge(c[d],l[d]);if(f!==0)return f}return ge(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ge(Ve(i.latitude),Ve(a.latitude));return c!==0?c:ge(Ve(i.longitude),Ve(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qh(t.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,d,f;const g=i.fields||{},y=a.fields||{},S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,k=(l=y.value)===null||l===void 0?void 0:l.arrayValue,L=ge(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:qh(S,k)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===Li.mapValue&&a===Li.mapValue)return 0;if(i===Li.mapValue)return 1;if(a===Li.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const y=ge(l[g],f[g]);if(y!==0)return y;const S=Wr(c[l[g]],d[f[g]]);if(S!==0)return S}return ge(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ne()}}function jh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Ln(t),r=Ln(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function qh(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Wr(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function zr(t){return ac(t)}function ac(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ln(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ac(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ac(n.fields[a])}`;return s+"}"}(t.mapValue):ne()}function Hh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cc(t){return!!t&&"integerValue"in t}function ll(t){return!!t&&"arrayValue"in t}function Wh(t){return!!t&&"nullValue"in t}function zh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gi(t){return!!t&&"mapValue"in t}function Lw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Fw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=Ds(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Gi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){gr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new gt(Ds(this.value))}}function Hp(t){const e=[];return gr(t.fields,(n,r)=>{const s=new Ge([n]);if(Gi(r)){const i=Hp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Tt(e)}/**
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
 */class it{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new it(e,0,se.min(),se.min(),se.min(),gt.empty(),0)}static newFoundDocument(e,n,r,s){return new it(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new it(e,2,n,se.min(),se.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,se.min(),se.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fo{constructor(e,n){this.position=e,this.inclusive=n}}function Kh(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),n.key):r=Wr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class po{constructor(e,n="asc"){this.field=e,this.dir=n}}function Uw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Wp{}class Oe extends Wp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $w(e,n,r):n==="array-contains"?new Hw(e,r):n==="in"?new Ww(e,r):n==="not-in"?new zw(e,r):n==="array-contains-any"?new Kw(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jw(e,r):new qw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wr(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(Wr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends Wp{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Dt(e,n)}matches(e){return zp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zp(t){return t.op==="and"}function Kp(t){return Bw(t)&&zp(t)}function Bw(t){for(const e of t.filters)if(e instanceof Dt)return!1;return!0}function lc(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+zr(t.value);if(Kp(t))return t.filters.map(e=>lc(e)).join(",");{const e=t.filters.map(n=>lc(n)).join(",");return`${t.op}(${e})`}}function Gp(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&Gt(r.value,s.value)}(t,e):t instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Gp(a,s.filters[c]),!0):!1}(t,e):void ne()}function Qp(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${zr(n.value)}`}(t):t instanceof Dt?function(n){return n.op.toString()+" {"+n.getFilters().map(Qp).join(" ,")+"}"}(t):"Filter"}class $w extends Oe{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class jw extends Oe{constructor(e,n){super(e,"in",n),this.keys=Jp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qw extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=Jp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class Hw extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ll(n)&&zs(n.arrayValue,this.value)}}class Ww extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zs(this.value.arrayValue,n)}}class zw extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zs(this.value.arrayValue,n)}}class Kw extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ll(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zs(this.value.arrayValue,r))}}/**
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
 */class Gw{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Qh(t,e=null,n=[],r=[],s=null,i=null,a=null){return new Gw(t,e,n,r,s,i,a)}function ul(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Uo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zr(r)).join(",")),e.ue=n}return e.ue}function hl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Uw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Gp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gh(t.startAt,e.startAt)&&Gh(t.endAt,e.endAt)}function uc(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ai{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Qw(t,e,n,r,s,i,a,c){return new ai(t,e,n,r,s,i,a,c)}function Yp(t){return new ai(t)}function Jh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xp(t){return t.collectionGroup!==null}function Ns(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Qe(Ge.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new po(i,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new po(Ge.keyField(),r))}return e.ce}function qt(t){const e=ie(t);return e.le||(e.le=Jw(e,Ns(t))),e.le}function Jw(t,e){if(t.limitType==="F")return Qh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new po(s.field,i)});const n=t.endAt?new fo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fo(t.startAt.position,t.startAt.inclusive):null;return Qh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hc(t,e){const n=t.filters.concat([e]);return new ai(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dc(t,e,n){return new ai(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bo(t,e){return hl(qt(t),qt(e))&&t.limitType===e.limitType}function Zp(t){return`${ul(qt(t))}|lt:${t.limitType}`}function Pr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Qp(s)).join(", ")}]`),Uo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>zr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>zr(s)).join(",")),`Target(${r})`}(qt(t))}; limitType=${t.limitType})`}function $o(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ns(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const d=Kh(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,Ns(r),s)||r.endAt&&!function(a,c,l){const d=Kh(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,Ns(r),s))}(t,e)}function Yw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function eg(t){return(e,n)=>{let r=!1;for(const s of Ns(t)){const i=Xw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Xw(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),d=c.data.field(i);return l!==null&&d!==null?Wr(l,d):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
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
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){gr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jp(this.inner)}size(){return this.innerSize}}/**
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
 */const Zw=new Ce(X.comparator);function dn(){return Zw}const tg=new Ce(X.comparator);function ws(...t){let e=tg;for(const n of t)e=e.insert(n.key,n);return e}function ng(t){let e=tg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function sr(){return Os()}function rg(){return Os()}function Os(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const eA=new Ce(X.comparator),tA=new Qe(X.comparator);function le(...t){let e=tA;for(const n of t)e=e.add(n);return e}const nA=new Qe(ge);function rA(){return nA}/**
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
 */function dl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ho(e)?"-0":e}}function sg(t){return{integerValue:""+t}}function sA(t,e){return Ow(e)?sg(e):dl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class jo{constructor(){this._=void 0}}function iA(t,e,n){return t instanceof go?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&al(i)&&(i=cl(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof Ks?og(t,e):t instanceof Gs?ag(t,e):function(s,i){const a=ig(s,i),c=Yh(a)+Yh(s.Pe);return cc(a)&&cc(s.Pe)?sg(c):dl(s.serializer,c)}(t,e)}function oA(t,e,n){return t instanceof Ks?og(t,e):t instanceof Gs?ag(t,e):n}function ig(t,e){return t instanceof mo?function(r){return cc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class go extends jo{}class Ks extends jo{constructor(e){super(),this.elements=e}}function og(t,e){const n=cg(e);for(const r of t.elements)n.some(s=>Gt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Gs extends jo{constructor(e){super(),this.elements=e}}function ag(t,e){let n=cg(e);for(const r of t.elements)n=n.filter(s=>!Gt(s,r));return{arrayValue:{values:n}}}class mo extends jo{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Yh(t){return Ve(t.integerValue||t.doubleValue)}function cg(t){return ll(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ks&&s instanceof Ks||r instanceof Gs&&s instanceof Gs?Hr(r.elements,s.elements,Gt):r instanceof mo&&s instanceof mo?Gt(r.Pe,s.Pe):r instanceof go&&s instanceof go}(t.transform,e.transform)}class cA{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qo{}function lg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hg(t.key,Ht.none()):new ci(t.key,t.data,Ht.none());{const n=t.data,r=gt.empty();let s=new Qe(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new qn(t.key,r,new Tt(s.toArray()),Ht.none())}}function lA(t,e,n){t instanceof ci?function(s,i,a){const c=s.value.clone(),l=Zh(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof qn?function(s,i,a){if(!Qi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Zh(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(ug(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function xs(t,e,n,r){return t instanceof ci?function(i,a,c,l){if(!Qi(i.precondition,a))return c;const d=i.value.clone(),f=ed(i.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof qn?function(i,a,c,l){if(!Qi(i.precondition,a))return c;const d=ed(i.fieldTransforms,l,a),f=a.data;return f.setAll(ug(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,a,c){return Qi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function uA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ig(r.transform,s||null);i!=null&&(n===null&&(n=gt.empty()),n.set(r.field,i))}return n||null}function Xh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hr(r,s,(i,a)=>aA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ci extends qo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qn extends qo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ug(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zh(t,e,n){const r=new Map;we(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,oA(a,c,n[s]))}return r}function ed(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,iA(i,a,e))}return r}class hg extends qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hA extends qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=lg(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,(n,r)=>Xh(n,r))&&Hr(this.baseMutations,e.baseMutations,(n,r)=>Xh(n,r))}}class fl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){we(e.mutations.length===r.length);let s=function(){return eA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new fl(e,n,r,s)}}/**
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
 */class fA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class pA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ne,he;function gA(t){switch(t){default:return ne();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function dg(t){if(t===void 0)return hn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ne.OK:return V.OK;case Ne.CANCELLED:return V.CANCELLED;case Ne.UNKNOWN:return V.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return V.INTERNAL;case Ne.UNAVAILABLE:return V.UNAVAILABLE;case Ne.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ne.NOT_FOUND:return V.NOT_FOUND;case Ne.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ne.ABORTED:return V.ABORTED;case Ne.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ne.DATA_LOSS:return V.DATA_LOSS;default:return ne()}}(he=Ne||(Ne={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mA(){return new TextEncoder}/**
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
 */const _A=new cr([4294967295,4294967295],0);function td(t){const e=mA().encode(t),n=new Np;return n.update(e),new Uint8Array(n.digest())}function nd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cr([n,r],0),new cr([s,i],0)]}class pl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new As(`Invalid padding: ${n}`);if(r<0)throw new As(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new As(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new As(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=cr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(cr.fromNumber(r)));return s.compare(_A)===1&&(s=new cr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=td(e),[r,s]=nd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new pl(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const n=td(e),[r,s]=nd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class As extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ho{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,li.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ho(se.min(),s,new Ce(ge),dn(),le())}}class li{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new li(r,n,le(),le(),le())}}/**
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
 */class Ji{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class fg{constructor(e,n){this.targetId=e,this.me=n}}class pg{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class rd{constructor(){this.fe=0,this.ge=id(),this.pe=Ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),n=le(),r=le();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ne()}}),new li(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=id()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yA{constructor(e){this.Le=e,this.Be=new Map,this.ke=dn(),this.qe=sd(),this.Qe=new Ce(ge)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(uc(i))if(r===0){const a=new X(i.path);this.Ue(n,a,it.newNoDocument(a,se.min()))}else we(r===1);else{const a=this.Ye(n);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(n);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=fr(r).toUint8Array()}catch(l){if(l instanceof qp)return qr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new pl(a,s,i)}catch(l){return qr(l instanceof As?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&uc(c.target)){const l=new X(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,it.newNoDocument(l,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=le();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Ho(e,n,this.Qe,this.ke,r);return this.ke=dn(),this.qe=sd(),this.Qe=new Ce(ge),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new rd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Qe(ge),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new rd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function sd(){return new Ce(X.comparator)}function id(){return new Ce(X.comparator)}const vA={asc:"ASCENDING",desc:"DESCENDING"},EA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TA={and:"AND",or:"OR"};class IA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fc(t,e){return t.useProto3Json||Uo(e)?e:{value:e}}function _o(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wA(t,e){return _o(t,e.toTimestamp())}function Wt(t){return we(!!t),se.fromTimestamp(function(n){const r=Ln(n);return new Fe(r.seconds,r.nanos)}(t))}function gl(t,e){return pc(t,e).canonicalString()}function pc(t,e){const n=function(s){return new be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function mg(t){const e=be.fromString(t);return we(Tg(e)),e}function gc(t,e){return gl(t.databaseId,e.path)}function xa(t,e){const n=mg(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(yg(n))}function _g(t,e){return gl(t.databaseId,e)}function AA(t){const e=mg(t);return e.length===4?be.emptyPath():yg(e)}function mc(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yg(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function od(t,e,n){return{name:gc(t,e),fields:n.value.mapValue.fields}}function RA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(we(f===void 0||typeof f=="string"),Ye.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ye.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?V.UNKNOWN:dg(d.code);return new W(f,d.message||"")}(a);n=new pg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xa(t,r.document.name),i=Wt(r.document.updateTime),a=r.document.createTime?Wt(r.document.createTime):se.min(),c=new gt({mapValue:{fields:r.document.fields}}),l=it.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Ji(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xa(t,r.document),i=r.readTime?Wt(r.readTime):se.min(),a=it.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ji([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xa(t,r.document),i=r.removedTargetIds||[];n=new Ji([],i,s,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new pA(s,i),c=r.targetId;n=new fg(c,a)}}return n}function bA(t,e){let n;if(e instanceof ci)n={update:od(t,e.key,e.value)};else if(e instanceof hg)n={delete:gc(t,e.key)};else if(e instanceof qn)n={update:od(t,e.key,e.data),updateMask:xA(e.fieldMask)};else{if(!(e instanceof hA))return ne();n={verify:gc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof go)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ks)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Gs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof mo)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(t,e.precondition)),n}function SA(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?Wt(s.updateTime):Wt(i);return a.isEqual(se.min())&&(a=Wt(i)),new cA(a,s.transformResults||[])}(n,e))):[]}function PA(t,e){return{documents:[_g(t,e.path)]}}function CA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_g(t,s);const i=function(d){if(d.length!==0)return Eg(Dt.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(y){return{field:Cr(y.field),direction:DA(y.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=fc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function kA(t){let e=AA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){we(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const y=vg(g);return y instanceof Dt&&Kp(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(y=>function(k){return new po(kr(k.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(n.orderBy));let c=null;n.limit&&(c=function(g){let y;return y=typeof g=="object"?g.value:g,Uo(y)?null:y}(n.limit));let l=null;n.startAt&&(l=function(g){const y=!!g.before,S=g.values||[];return new fo(S,y)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const y=!g.before,S=g.values||[];return new fo(S,y)}(n.endAt)),Qw(e,s,a,i,c,"F",l,d)}function VA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=kr(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=kr(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=kr(n.unaryFilter.field);return Oe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(kr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dt.create(n.compositeFilter.filters.map(r=>vg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function DA(t){return vA[t]}function NA(t){return EA[t]}function OA(t){return TA[t]}function Cr(t){return{fieldPath:t.canonicalString()}}function kr(t){return Ge.fromServerFormat(t.fieldPath)}function Eg(t){return t instanceof Oe?function(n){if(n.op==="=="){if(zh(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NAN"}};if(Wh(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(zh(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NOT_NAN"}};if(Wh(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cr(n.field),op:NA(n.op),value:n.value}}}(t):t instanceof Dt?function(n){const r=n.getFilters().map(s=>Eg(s));return r.length===1?r[0]:{compositeFilter:{op:OA(n.op),filters:r}}}(t):ne()}function xA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Tg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Sn{constructor(e,n,r,s,i=se.min(),a=se.min(),c=Ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MA{constructor(e){this.ct=e}}function LA(t){const e=kA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dc(e,e.limit,"L"):e}/**
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
 */class FA{constructor(){this.un=new UA}addToCollectionParentIndex(e,n){return this.un.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Mn.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Mn.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class UA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(be.comparator)).toArray()}}/**
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
 */class Kr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Kr(0)}static kn(){return new Kr(-1)}}/**
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
 */class BA{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class $A{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&xs(r.mutation,s,Tt.empty(),Fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=sr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=ws();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,s){let i=dn();const a=Os(),c=function(){return Os()}();return n.forEach((l,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof qn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),xs(f.mutation,d,f.mutation.getFieldMask(),Fe.now())):a.set(d.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,f)=>a.set(d,f)),n.forEach((d,f)=>{var g;return c.set(d,new $A(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Os();let s=new Ce((a,c)=>a-c),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=n.get(l);if(d===null)return;let f=r.get(l)||Tt.empty();f=c.applyToLocalView(d,f),r.set(l,f);const g=(s.get(c.batchId)||le()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,f=l.value,g=rg();f.forEach(y=>{if(!i.has(y)){const S=lg(n.get(y),r.get(y));S!==null&&g.set(y,S),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Xp(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):N.resolve(sr());let c=-1,l=i;return a.next(d=>N.forEach(d,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{l=l.insert(f,y)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,le())).next(f=>({batchId:c,changes:ng(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=ws();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=ws();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,l=>{const d=function(g,y){return new ai(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((g,y)=>{a=a.insert(g,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,it.newInvalidDocument(f)))});let c=ws();return a.forEach((l,d)=>{const f=i.get(l);f!==void 0&&xs(f.mutation,d,Tt.empty(),Fe.now()),$o(n,d)&&(c=c.insert(l,d))}),c})}}/**
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
 */class qA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return N.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:LA(s.bundledQuery),readTime:Wt(s.readTime)}}(n)),N.resolve()}}/**
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
 */class HA{constructor(){this.overlays=new Ce(X.comparator),this.Ir=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=sr();return N.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const s=sr(),i=n.length+1,a=new X(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=sr(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=sr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return N.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new fA(n,r));let i=this.Ir.get(n);i===void 0&&(i=le(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class WA{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,N.resolve()}}/**
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
 */class ml{constructor(){this.Tr=new Qe(Be.Er),this.dr=new Qe(Be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Be(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new be([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new be([])),r=new Be(n,e),s=new Be(n,e+1);let i=le();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Be(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||ge(e.wr,n.wr)}static Ar(e,n){return ge(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
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
 */class zA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Qe(Be.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new dA(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new Be(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,n){return N.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(ge);return n.forEach(s=>{const i=new Be(s,0),a=new Be(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),N.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new Be(new X(i),0);let c=new Qe(ge);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.wr)),!0)},a),N.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return N.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Be(n,0),s=this.br.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class KA{constructor(e){this.Mr=e,this.docs=function(){return new Ce(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=dn();const a=n.path,c=new X(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||kw(Cw(f),r)<=0||(s.has(f.key)||$o(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ne()}Or(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GA(this)}getSize(e){return N.resolve(this.size)}}class GA extends BA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class QA{constructor(e){this.persistence=e,this.Nr=new ts(n=>ul(n),hl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ml,this.targetCount=0,this.kr=Kr.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),N.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Kr(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Kn(n),N.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Br.containsKey(n))}}/**
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
 */class JA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ol(0),this.Kr=!1,this.Kr=!0,this.$r=new WA,this.referenceDelegate=e(this),this.Ur=new QA(this),this.indexManager=new FA,this.remoteDocumentCache=function(s){return new KA(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new MA(n),this.Gr=new qA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new zA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new YA(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return N.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class YA extends Dw{constructor(e){super(),this.currentSequenceNumber=e}}class _l{constructor(e){this.persistence=e,this.Jr=new ml,this.Yr=null}static Zr(e){return new _l(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),N.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,r=>{const s=X.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return N.or([()=>N.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class yl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yl(e,n.fromCache,r,s)}}/**
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
 */class XA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ZA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return $v()?8:Nw(at())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new XA;return this.Xi(e,n,a).next(c=>{if(i.result=c,this.zi)return this.es(e,n,a,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Es()<=ue.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Pr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(Es()<=ue.DEBUG&&K("QueryEngine","Query:",Pr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Es()<=ue.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Pr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(n))):N.resolve())}Yi(e,n){if(Jh(n))return N.resolve(null);let r=qt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=dc(n,null,"F"),r=qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=le(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(n,c);return this.ns(n,d,a,l.readTime)?this.Yi(e,dc(n,null,"F")):this.rs(e,d,n,l)}))})))}Zi(e,n,r,s){return Jh(n)||s.isEqual(se.min())?N.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(n,i);return this.ns(n,a,r,s)?N.resolve(null):(Es()<=ue.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pr(n)),this.rs(e,a,n,Pw(s,-1)).next(c=>c))})}ts(e,n){let r=new Qe(eg(e));return n.forEach((s,i)=>{$o(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Es()<=ue.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Pr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Mn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class e0{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ce(ge),this._s=new ts(i=>ul(i),hl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function t0(t,e,n,r){return new e0(t,e,n,r)}async function Ig(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=le();for(const d of s){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function n0(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,f){const g=d.batch,y=g.keys();let S=N.resolve();return y.forEach(k=>{S=S.next(()=>f.getEntry(l,k)).next(L=>{const F=d.docVersions.get(k);we(F!==null),L.version.compareTo(F)<0&&(g.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),f.addEntry(L)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=le();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function wg(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function r0(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,g)=>{const y=s.get(g);if(!y)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,g)));let S=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(Ye.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(g,S),function(L,F,G){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(y,S,f)&&c.push(n.Ur.updateTargetData(i,S))});let l=dn(),d=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(s0(i,a,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(se.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(g=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return N.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(n.os=s,i))}function s0(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=dn();return n.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):K("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function i0(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function o0(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):n.Ur.allocateTargetId(r).next(a=>(s=new Sn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function _c(t,e,n){const r=ie(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!oi(a))throw a;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ad(t,e,n){const r=ie(t);let s=se.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){const g=ie(l),y=g._s.get(f);return y!==void 0?N.resolve(g.os.get(y)):g.Ur.getTargetData(d,f)}(r,a,qt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?s:se.min(),n?i:le())).next(c=>(a0(r,Yw(e),c),{documents:c,Ts:i})))}function a0(t,e,n){let r=t.us.get(e)||se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class cd{constructor(){this.activeTargetIds=rA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class c0{constructor(){this.so=new cd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new cd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class l0{_o(e){}shutdown(){}}/**
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
 */class ld{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Fi=null;function Ma(){return Fi===null?Fi=function(){return 268435456+Math.round(2147483648*Math.random())}():Fi++,"0x"+Fi.toString(16)}/**
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
 */const u0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class h0{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const nt="WebChannelConnection";class d0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,a){const c=Ma(),l=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(n,l,d,s).then(f=>(K("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw qr("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,a,c){return this.Mo(n,r,s,i,a)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}xo(n,r){const s=u0[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Ma();return new Promise((a,c)=>{const l=new Op;l.setWithCredentials(!0),l.listenOnce(Mp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ki.NO_ERROR:const f=l.getResponseJson();K(nt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Ki.TIMEOUT:K(nt,`RPC '${e}' ${i} timed out`),c(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ki.HTTP_ERROR:const g=l.getStatus();if(K(nt,`RPC '${e}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let y=l.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y==null?void 0:y.error;if(S&&S.status&&S.message){const k=function(F){const G=F.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(G)>=0?G:V.UNKNOWN}(S.status);c(new W(k,S.message))}else c(new W(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new W(V.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{K(nt,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);K(nt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=Ma(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Up(),c=Fp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.xmlHttpFactory=new xp({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");K(nt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const g=a.createWebChannel(f,l);let y=!1,S=!1;const k=new h0({Io:F=>{S?K(nt,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(y||(K(nt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),y=!0),K(nt,`RPC '${e}' stream ${s} sending:`,F),g.send(F))},To:()=>g.close()}),L=(F,G,J)=>{F.listen(G,Y=>{try{J(Y)}catch(H){setTimeout(()=>{throw H},0)}})};return L(g,Is.EventType.OPEN,()=>{S||(K(nt,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),L(g,Is.EventType.CLOSE,()=>{S||(S=!0,K(nt,`RPC '${e}' stream ${s} transport closed`),k.So())}),L(g,Is.EventType.ERROR,F=>{S||(S=!0,qr(nt,`RPC '${e}' stream ${s} transport errored:`,F),k.So(new W(V.UNAVAILABLE,"The operation could not be completed")))}),L(g,Is.EventType.MESSAGE,F=>{var G;if(!S){const J=F.data[0];we(!!J);const Y=J,H=Y.error||((G=Y[0])===null||G===void 0?void 0:G.error);if(H){K(nt,`RPC '${e}' stream ${s} received error:`,H);const oe=H.status;let _e=function(_){const T=Ne[_];if(T!==void 0)return dg(T)}(oe),w=H.message;_e===void 0&&(_e=V.INTERNAL,w="Unknown error status: "+oe+" with message "+H.message),S=!0,k.So(new W(_e,w)),g.close()}else K(nt,`RPC '${e}' stream ${s} received:`,J),k.bo(J)}}),L(c,Lp.STAT_EVENT,F=>{F.stat===oc.PROXY?K(nt,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===oc.NOPROXY&&K(nt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function La(){return typeof document<"u"?document:null}/**
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
 */function Wo(t){return new IA(t,!0)}/**
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
 */class Ag{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Rg{constructor(e,n,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ag(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(hn(n.toString()),hn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class f0 extends Rg{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=RA(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Wt(a.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=mc(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=uc(l)?{documents:PA(i,l)}:{query:CA(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=gg(i,a.resumeToken);const d=fc(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=_o(i,a.snapshotVersion.toTimestamp());const d=fc(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=VA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=mc(this.serializer),n.removeTarget=e,this.a_(n)}}class p0 extends Rg{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=SA(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=mc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bA(this.serializer,r))};this.a_(n)}}/**
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
 */class g0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,pc(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(V.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,pc(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(V.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class m0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(hn(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{mr(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=ie(l);d.L_.add(4),await ui(d),d.q_.set("Unknown"),d.L_.delete(4),await zo(d)}(this))})}),this.q_=new m0(r,s)}}async function zo(t){if(mr(t))for(const e of t.B_)await e(!0)}async function ui(t){for(const e of t.B_)await e(!1)}function bg(t,e){const n=ie(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Il(n)?Tl(n):ns(n).r_()&&El(n,e))}function vl(t,e){const n=ie(t),r=ns(n);n.N_.delete(e),r.r_()&&Sg(n,e),n.N_.size===0&&(r.r_()?r.o_():mr(n)&&n.q_.set("Unknown"))}function El(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ns(t).A_(e)}function Sg(t,e){t.Q_.xe(e),ns(t).R_(e)}function Tl(t){t.Q_=new yA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ns(t).start(),t.q_.v_()}function Il(t){return mr(t)&&!ns(t).n_()&&t.N_.size>0}function mr(t){return ie(t).L_.size===0}function Pg(t){t.Q_=void 0}async function y0(t){t.q_.set("Online")}async function v0(t){t.N_.forEach((e,n)=>{El(t,e)})}async function E0(t,e){Pg(t),Il(t)?(t.q_.M_(e),Tl(t)):t.q_.set("Unknown")}async function T0(t,e,n){if(t.q_.set("Online"),e instanceof pg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yo(t,r)}else if(e instanceof Ji?t.Q_.Ke(e):e instanceof fg?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await wg(t.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(Ye.EMPTY_BYTE_STRING,f.snapshotVersion)),Sg(i,l);const g=new Sn(f.target,l,d,f.sequenceNumber);El(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await yo(t,r)}}async function yo(t,e,n){if(!oi(e))throw e;t.L_.add(1),await ui(t),t.q_.set("Offline"),n||(n=()=>wg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await zo(t)})}function Cg(t,e){return e().catch(n=>yo(t,n,e))}async function Ko(t){const e=ie(t),n=Fn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;I0(e);)try{const s=await i0(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,w0(e,s)}catch(s){await yo(e,s)}kg(e)&&Vg(e)}function I0(t){return mr(t)&&t.O_.length<10}function w0(t,e){t.O_.push(e);const n=Fn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function kg(t){return mr(t)&&!Fn(t).n_()&&t.O_.length>0}function Vg(t){Fn(t).start()}async function A0(t){Fn(t).p_()}async function R0(t){const e=Fn(t);for(const n of t.O_)e.m_(n.mutations)}async function b0(t,e,n){const r=t.O_.shift(),s=fl.from(r,e,n);await Cg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ko(t)}async function S0(t,e){e&&Fn(t).V_&&await async function(r,s){if(function(a){return gA(a)&&a!==V.ABORTED}(s.code)){const i=r.O_.shift();Fn(r).s_(),await Cg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ko(r)}}(t,e),kg(t)&&Vg(t)}async function ud(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=mr(n);n.L_.add(3),await ui(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await zo(n)}async function P0(t,e){const n=ie(t);e?(n.L_.delete(2),await zo(n)):e||(n.L_.add(2),await ui(n),n.q_.set("Unknown"))}function ns(t){return t.K_||(t.K_=function(n,r,s){const i=ie(n);return i.w_(),new f0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:y0.bind(null,t),Ro:v0.bind(null,t),mo:E0.bind(null,t),d_:T0.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Il(t)?Tl(t):t.q_.set("Unknown")):(await t.K_.stop(),Pg(t))})),t.K_}function Fn(t){return t.U_||(t.U_=function(n,r,s){const i=ie(n);return i.w_(),new p0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:A0.bind(null,t),mo:S0.bind(null,t),f_:R0.bind(null,t),g_:b0.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ko(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class wl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new wl(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Al(t,e){if(hn("AsyncQueue",`${e}: ${t}`),oi(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ur{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=ws(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Ur(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ur)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class hd{constructor(){this.W_=new Ce(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gr{constructor(e,n,r,s,i,a,c,l,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new Gr(e,n,Ur.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class C0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class k0{constructor(){this.queries=dd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ie(n),i=s.queries;s.queries=dd(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function dd(){return new ts(t=>Zp(t),Bo)}async function V0(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new C0,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Al(a,`Initialization of query '${Pr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Rl(n)}async function D0(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function N0(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Rl(n)}function O0(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Rl(t){t.Y_.forEach(e=>{e.next()})}var yc,fd;(fd=yc||(yc={})).ea="default",fd.Cache="cache";class x0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==yc.Cache}}/**
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
 */class Dg{constructor(e){this.key=e}}class Ng{constructor(e){this.key=e}}class M0{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=eg(e),this.Ra=new Ur(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new hd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const y=s.get(f),S=$o(this.query,g)?g:null,k=!!y&&this.mutatedKeys.has(y.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let F=!1;y&&S?y.data.isEqual(S.data)?k!==L&&(r.track({type:3,doc:S}),F=!0):this.ga(y,S)||(r.track({type:2,doc:S}),F=!0,(l&&this.Aa(S,l)>0||d&&this.Aa(S,d)<0)&&(c=!0)):!y&&S?(r.track({type:0,doc:S}),F=!0):y&&!S&&(r.track({type:1,doc:y}),F=!0,(l||d)&&(c=!0)),F&&(S?(a=a.add(S),i=L?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(S,k){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return L(S)-L(k)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,d=l!==this.Ea;return this.Ea=l,a.length!==0||d?{snapshot:new Gr(this.query,e.Ra,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new hd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Ng(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Dg(r))}),n}ba(e){this.Ta=e.Ts,this.da=le();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Gr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class L0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class F0{constructor(e){this.key=e,this.va=!1}}class U0{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ts(c=>Zp(c),Bo),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(X.comparator),this.Na=new Map,this.La=new ml,this.Ba={},this.ka=new Map,this.qa=Kr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function B0(t,e,n=!0){const r=Ug(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Og(r,e,n,!0),s}async function $0(t,e){const n=Ug(t);await Og(n,e,!0,!1)}async function Og(t,e,n,r){const s=await o0(t.localStore,qt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await j0(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&bg(t.remoteStore,s),c}async function j0(t,e,n,r,s){t.Ka=(g,y,S)=>async function(L,F,G,J){let Y=F.view.ma(G);Y.ns&&(Y=await ad(L.localStore,F.query,!1).then(({documents:w})=>F.view.ma(w,Y)));const H=J&&J.targetChanges.get(F.targetId),oe=J&&J.targetMismatches.get(F.targetId)!=null,_e=F.view.applyChanges(Y,L.isPrimaryClient,H,oe);return gd(L,F.targetId,_e.wa),_e.snapshot}(t,g,y,S);const i=await ad(t.localStore,e,!0),a=new M0(e,i.Ts),c=a.ma(i.documents),l=li.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=a.applyChanges(c,t.isPrimaryClient,l);gd(t,n,d.wa);const f=new L0(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function q0(t,e,n){const r=ie(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Bo(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _c(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&vl(r.remoteStore,s.targetId),vc(r,s.targetId)}).catch(ii)):(vc(r,s.targetId),await _c(r.localStore,s.targetId,!0))}async function H0(t,e){const n=ie(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vl(n.remoteStore,r.targetId))}async function W0(t,e,n){const r=X0(t);try{const s=await function(a,c){const l=ie(a),d=Fe.now(),f=c.reduce((S,k)=>S.add(k.key),le());let g,y;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=dn(),L=le();return l.cs.getEntries(S,f).next(F=>{k=F,k.forEach((G,J)=>{J.isValidDocument()||(L=L.add(G))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,k)).next(F=>{g=F;const G=[];for(const J of c){const Y=uA(J,g.get(J.key).overlayedDocument);Y!=null&&G.push(new qn(J.key,Y,Hp(Y.value.mapValue),Ht.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,G,c)}).next(F=>{y=F;const G=F.applyToLocalDocumentSet(g,L);return l.documentOverlayCache.saveOverlays(S,F.batchId,G)})}).then(()=>({batchId:y.batchId,changes:ng(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let d=a.Ba[a.currentUser.toKey()];d||(d=new Ce(ge)),d=d.insert(c,l),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,n),await hi(r,s.changes),await Ko(r.remoteStore)}catch(s){const i=Al(s,"Failed to persist write");n.reject(i)}}async function xg(t,e){const n=ie(t);try{const r=await r0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Na.get(i);a&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?we(a.va):s.removedDocuments.size>0&&(we(a.va),a.va=!1))}),await hi(n,r,e)}catch(r){await ii(r)}}function pd(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=ie(a);l.onlineState=c;let d=!1;l.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(c)&&(d=!0)}),d&&Rl(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function z0(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Ce(X.comparator);a=a.insert(i,it.newNoDocument(i,se.min()));const c=le().add(i),l=new Ho(se.min(),new Map,new Ce(ge),a,c);await xg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),bl(r)}else await _c(r.localStore,e,!1).then(()=>vc(r,e,n)).catch(ii)}async function K0(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await n0(n.localStore,e);Lg(n,r,null),Mg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hi(n,s)}catch(s){await ii(s)}}async function G0(t,e,n){const r=ie(t);try{const s=await function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,c).next(g=>(we(g!==null),f=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);Lg(r,e,n),Mg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await hi(r,s)}catch(s){await ii(s)}}function Mg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Lg(t,e,n){const r=ie(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function vc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Fg(t,r)})}function Fg(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(vl(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),bl(t))}function gd(t,e,n){for(const r of n)r instanceof Dg?(t.La.addReference(r.key,e),Q0(t,r)):r instanceof Ng?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Fg(t,r.key)):ne()}function Q0(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),bl(t))}function bl(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(be.fromString(e)),r=t.qa.next();t.Na.set(r,new F0(n)),t.Oa=t.Oa.insert(n,r),bg(t.remoteStore,new Sn(qt(Yp(n.path)),r,"TargetPurposeLimboResolution",ol.oe))}}async function hi(t,e,n){const r=ie(t),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=yl.Wi(l.targetId,d);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,d){const f=ie(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>N.forEach(d,y=>N.forEach(y.$i,S=>f.persistence.referenceDelegate.addReference(g,y.targetId,S)).next(()=>N.forEach(y.Ui,S=>f.persistence.referenceDelegate.removeReference(g,y.targetId,S)))))}catch(g){if(!oi(g))throw g;K("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const y=g.targetId;if(!g.fromCache){const S=f.os.get(y),k=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(y,L)}}}(r.localStore,i))}async function J0(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await Ig(n.localStore,e);n.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new W(V.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hi(n,r.hs)}}function Y0(t,e){const n=ie(t),r=n.Na.get(e);if(r&&r.va)return le().add(r.key);{let s=le();const i=n.Ma.get(e);if(!i)return s;for(const a of i){const c=n.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Ug(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Y0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=z0.bind(null,e),e.Ca.d_=N0.bind(null,e.eventManager),e.Ca.$a=O0.bind(null,e.eventManager),e}function X0(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=K0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=G0.bind(null,e),e}class md{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Wo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return t0(this.persistence,new ZA,e.initialUser,this.serializer)}createPersistence(e){return new JA(_l.Zr,this.serializer)}createSharedClientState(e){return new c0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Z0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=J0.bind(null,this.syncEngine),await P0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new k0}()}createDatastore(e){const n=Wo(e.databaseInfo.databaseId),r=function(i){return new d0(i)}(e.databaseInfo);return function(i,a,c,l){return new g0(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,c){return new _0(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>pd(this.syncEngine,n,0),function(){return ld.D()?new ld:new l0}())}createSyncEngine(e,n){return function(s,i,a,c,l,d,f){const g=new U0(s,i,a,c,l,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ie(s);K("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ui(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 *//**
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
 */class eR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):hn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class tR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=$p.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{K("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(K("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Al(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fa(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ig(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _d(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rR(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ud(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ud(e.remoteStore,s)),t._onlineComponents=e}function nR(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function rR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!nR(n))throw n;qr("Error using user provided cache. Falling back to memory cache: "+n),await Fa(t,new md)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Fa(t,new md);return t._offlineComponents}async function Bg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await _d(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await _d(t,new Z0))),t._onlineComponents}function sR(t){return Bg(t).then(e=>e.syncEngine)}async function iR(t){const e=await Bg(t),n=e.eventManager;return n.onListen=B0.bind(null,e.syncEngine),n.onUnlisten=q0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=H0.bind(null,e.syncEngine),n}function oR(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const f=new eR({next:y=>{a.enqueueAndForget(()=>D0(i,g)),y.fromCache&&l.source==="server"?d.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),g=new x0(c,f,{includeMetadataChanges:!0,_a:!0});return V0(i,g)}(await iR(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function $g(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const yd=new Map;/**
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
 */function jg(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aR(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vd(t){if(!X.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ed(t){if(X.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Go(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Qr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Go(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Td{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$g((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qo{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Td({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Td(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vw;switch(r.type){case"firstParty":return new ww(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yd.get(n);r&&(K("ComponentProvider","Removing Datastore"),yd.delete(n),r.terminate())}(this),Promise.resolve()}}function cR(t,e,n,r={}){var s;const i=(t=Qr(t,Qo))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=rt.MOCK_USER;else{c=Ov(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new rt(d)}t._authCredentials=new Ew(new Bp(c,l))}}/**
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
 */class rs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rs(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class Nn extends rs{constructor(e,n,r){super(e,n,Yp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new X(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}function qg(t,e,...n){if(t=pt(t),jg("collection","path",e),t instanceof Qo){const r=be.fromString(e,...n);return Ed(r),new Nn(t,null,r)}{if(!(t instanceof It||t instanceof Nn))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Ed(r),new Nn(t.firestore,null,r)}}function Hg(t,e,...n){if(t=pt(t),arguments.length===1&&(e=$p.newId()),jg("doc","path",e),t instanceof Qo){const r=be.fromString(e,...n);return vd(r),new It(t,null,new X(r))}{if(!(t instanceof It||t instanceof Nn))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return vd(r),new It(t.firestore,t instanceof Nn?t.converter:null,new X(r))}}/**
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
 */class lR{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Ag(this,"async_queue_retry"),this.Eu=()=>{const n=La();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=La();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=La();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Dn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!oi(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw hn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=wl.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&ne()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Jo extends Qo{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new lR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zg(this),this._firestoreClient.terminate()}}function uR(t,e){const n=typeof t=="object"?t:Xf(),r=typeof t=="string"?t:"(default)",s=Kc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dv("firestore");i&&cR(s,...i)}return s}function Wg(t){return t._firestoreClient||zg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zg(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,d,f){return new Mw(c,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,$g(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new tR(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Jr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jr(Ye.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jr(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Yo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sl{constructor(e){this._methodName=e}}/**
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
 */class Pl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Cl{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const hR=/^__.*__$/;class dR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new qn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ci(e,this.data,n,this.fieldTransforms)}}class Kg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new qn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Gg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class kl{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new kl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return vo(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Gg(this.wu)&&hR.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class fR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wo(e)}Nu(e,n,r,s=!1){return new kl({wu:e,methodName:n,Ou:r,path:Ge.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vl(t){const e=t._freezeSettings(),n=Wo(t._databaseId);return new fR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pR(t,e,n,r,s,i={}){const a=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);Dl("Data must be an object, but it was:",a,r);const c=Qg(r,a);let l,d;if(i.merge)l=new Tt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const y=Ec(e,g,n);if(!a.contains(y))throw new W(V.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Yg(f,y)||f.push(y)}l=new Tt(f),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new dR(new gt(c),l,d)}class Xo extends Sl{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xo}}function gR(t,e,n,r){const s=t.Nu(1,e,n);Dl("Data must be an object, but it was:",s,r);const i=[],a=gt.empty();gr(r,(l,d)=>{const f=Nl(e,l,n);d=pt(d);const g=s.Cu(f);if(d instanceof Xo)i.push(f);else{const y=di(d,g);y!=null&&(i.push(f),a.set(f,y))}});const c=new Tt(i);return new Kg(a,c,s.fieldTransforms)}function mR(t,e,n,r,s,i){const a=t.Nu(1,e,n),c=[Ec(e,r,n)],l=[s];if(i.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)c.push(Ec(e,i[y])),l.push(i[y+1]);const d=[],f=gt.empty();for(let y=c.length-1;y>=0;--y)if(!Yg(d,c[y])){const S=c[y];let k=l[y];k=pt(k);const L=a.Cu(S);if(k instanceof Xo)d.push(S);else{const F=di(k,L);F!=null&&(d.push(S),f.set(S,F))}}const g=new Tt(d);return new Kg(f,g,a.fieldTransforms)}function _R(t,e,n,r=!1){return di(n,t.Nu(r?4:3,e))}function di(t,e){if(Jg(t=pt(t)))return Dl("Unsupported field value:",e,t),Qg(t,e);if(t instanceof Sl)return function(r,s){if(!Gg(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=di(c,s.Fu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:_o(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_o(s.serializer,i)}}if(r instanceof Pl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jr)return{bytesValue:gg(s.serializer,r._byteString)};if(r instanceof It){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Cl)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Mu("VectorValues must only contain numeric values.");return dl(c.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Go(r)}`)}(t,e)}function Qg(t,e){const n={};return jp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gr(t,(r,s)=>{const i=di(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Jg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Pl||t instanceof Jr||t instanceof It||t instanceof Sl||t instanceof Cl)}function Dl(t,e,n){if(!Jg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Go(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Ec(t,e,n){if((e=pt(e))instanceof Yo)return e._internalPath;if(typeof e=="string")return Nl(t,e);throw vo("Field path arguments must be of type string or ",t,!1,void 0,n)}const yR=new RegExp("[~\\*/\\[\\]]");function Nl(t,e,n){if(e.search(yR)>=0)throw vo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yo(...e.split("."))._internalPath}catch{throw vo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new W(V.INVALID_ARGUMENT,c+t+l)}function Yg(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Xg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ol("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vR extends Xg{data(){return super.data()}}function Ol(t,e){return typeof e=="string"?Nl(t,e):e instanceof Yo?e._internalPath:e._delegate._internalPath}/**
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
 */function ER(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xl{}class TR extends xl{}function Zg(t,e,...n){let r=[];e instanceof xl&&r.push(e),r=r.concat(n),function(i){const a=i.filter(l=>l instanceof Ml).length,c=i.filter(l=>l instanceof Zo).length;if(a>1||a>0&&c>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Zo extends TR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zo(e,n,r)}_apply(e){const n=this._parse(e);return em(e._query,n),new rs(e.firestore,e.converter,hc(e._query,n))}_parse(e){const n=Vl(e.firestore);return function(i,a,c,l,d,f,g){let y;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){wd(g,f);const S=[];for(const k of g)S.push(Id(l,i,k));y={arrayValue:{values:S}}}else y=Id(l,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||wd(g,f),y=_R(c,a,g,f==="in"||f==="not-in");return Oe.create(d,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Tc(t,e,n){const r=e,s=Ol("where",t);return Zo._create(s,r,n)}class Ml extends xl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ml(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)em(a,l),a=hc(a,l)}(e._query,n),new rs(e.firestore,e.converter,hc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Id(t,e,n){if(typeof(n=pt(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xp(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!X.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hh(t,new X(r))}if(n instanceof It)return Hh(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Go(n)}.`)}function wd(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function em(t,e){const n=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class IR{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ve(a.doubleValue));return new Cl(i)}convertGeoPoint(e){return new Pl(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hs(e));default:return null}}convertTimestamp(e){const n=Ln(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);we(Tg(r));const s=new Ws(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function wR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Ui{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class AR extends Xg{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ol("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yi extends AR{data(e={}){return super.data(e)}}class RR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ui(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yi(this._firestore,this._userDataWriter,r.key,r,new Ui(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Yi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ui(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Yi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ui(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:bR(c.type),doc:l,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}class SR extends IR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function tm(t){t=Qr(t,rs);const e=Qr(t.firestore,Jo),n=Wg(e),r=new SR(e);return ER(t._query),oR(n,t._query).then(s=>new RR(e,r,t,s))}function PR(t,e,n,...r){t=Qr(t,It);const s=Qr(t.firestore,Jo),i=Vl(s);let a;return a=typeof(e=pt(e))=="string"||e instanceof Yo?mR(i,"updateDoc",t._key,e,n,r):gR(i,"updateDoc",t._key,e),nm(s,[a.toMutation(t._key,Ht.exists(!0))])}function CR(t,e){const n=Qr(t.firestore,Jo),r=Hg(t),s=wR(t.converter,e);return nm(n,[pR(Vl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function nm(t,e){return function(r,s){const i=new Dn;return r.asyncQueue.enqueueAndForget(async()=>W0(await sR(r),s,i)),i.promise}(Wg(t),e)}(function(e,n=!0){(function(s){es=s})(Yr),$r(new ur("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Jo(new Tw(r.getProvider("auth-internal")),new Rw(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ws(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Vn(Uh,"4.7.2",e),Vn(Uh,"4.7.2","esm2017")})();const Ll=uR(Zr),rm=qg(Ll,"relays");async function kR(){const e=si(Zr).currentUser;if(!e)throw new Error("User is not authenticated");const n=qg(Ll,"relays"),r=Zg(n,Tc("uid","==",e.uid));return(await tm(r)).docs.map(i=>({id:i.id,...i.data(),state:i.data().state===!0||i.data().state==="true"}))}async function VR(t,e){if(!si(Zr).currentUser)throw new Error("User is not authenticated");const s=Hg(Ll,"relays",t);await PR(s,{state:e})}async function DR(t){const n=si(Zr).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await CR(rm,r)).id,...r}}async function NR(t){const n=si(Zr).currentUser;if(!n)throw new Error("User is not authenticated");const r=Zg(rm,Tc("uid","==",n.uid),Tc("name","==",t));return(await tm(r)).empty}const sm=Hc("relay",()=>{const t=Rt([]),e=Rt(!1),n=Rt(null);return{relays:t,loading:e,error:n,loadRelays:async()=>{e.value=!0,n.value=null;try{t.value=await kR()}catch(c){n.value="Failed to load relays",console.error(c)}finally{e.value=!1}},updateRelay:async(c,l)=>{try{await VR(c,l);const d=t.value.find(f=>f.id===c);d&&(d.state=l)}catch(d){console.error("Failed to update relay state:",d)}},addRelay:async c=>{try{const l=await DR(c);t.value.push(l)}catch(l){console.error("Failed to add relay:",l)}},isRelayNameUnique:async c=>{try{return await NR(c)}catch(l){return console.error("Failed to check relay name uniqueness:",l),!1}}}}),OR=Nt({components:{ToggleButton:yw},props:{relay:{type:Object,required:!0}},setup(t){const e=sm();return{handleToggle:r=>{e.updateRelay(t.relay.id,r)}}}}),xR={class:"relay"},MR={class:"name"};function LR(t,e,n,r,s,i){const a=vt("toggle-button");return Ee(),$e("div",xR,[St("div",MR,Js(t.$props.relay.name),1),qe(a,{modelValue:t.$props.relay.state,"onUpdate:modelValue":t.handleToggle},null,8,["modelValue","onUpdate:modelValue"])])}const FR=Ot(OR,[["render",LR],["__scopeId","data-v-3abc1fbf"]]),UR=Nt({components:{ButtonDefault:$f,Relay:FR,Spinner:Bf,PageTitle:Dp},setup(){const t=sm(),e=Rt(!1),n=Rt(""),r=Rt("");lf(()=>{t.loadRelays()});function s(){e.value=!0,r.value=""}const i=async()=>{await c()&&(await t.addRelay({name:n.value.trim(),state:!1}),n.value="",e.value=!1)},a=()=>{e.value=!1,n.value=""},c=async()=>n.value.trim().length<2?(r.value="Relay name must be at least 2 characters long.",!1):await t.isRelayNameUnique(n.value.trim())?(r.value="",!0):(r.value="Relay name already exists.",!1);return{relayStore:t,isAddingNewRelay:e,newRelayName:n,nameError:r,startAddingRelay:s,saveNewRelay:i,cancelAddingRelay:a}}}),BR={class:"relays"},$R={key:1},jR={key:3,class:"new-relay-form"},qR={class:"action-buttons"},HR={key:0,class:"name-error"};function WR(t,e,n,r,s,i){const a=vt("page-title"),c=vt("spinner"),l=vt("relay"),d=vt("button-default");return Ee(),$e("div",BR,[qe(a,{title:"Relays"}),t.relayStore.loading?(Ee(),$t(c,{key:0,"spinner-size":"20px","with-text":!0})):nr("",!0),!t.relayStore.loading&&!t.relayStore.error?(Ee(),$e("div",$R,[(Ee(!0),$e(yt,null,$_(t.relayStore.relays,f=>(Ee(),$t(l,{key:f.id,relay:f},null,8,["relay"]))),128))])):nr("",!0),t.isAddingNewRelay?nr("",!0):(Ee(),$t(d,{key:2,text:"Add new Relay",onOnButtonClicked:t.startAddingRelay},null,8,["onOnButtonClicked"])),t.isAddingNewRelay?(Ee(),$e("div",jR,[A_(St("input",{"onUpdate:modelValue":e[0]||(e[0]=f=>t.newRelayName=f),type:"text",placeholder:"Enter relay name",class:"relay-input"},null,512),[[Zy,t.newRelayName]]),St("div",qR,[qe(d,{class:"button-save",text:"Save",onClick:t.saveNewRelay},null,8,["onClick"]),qe(d,{class:"button-cancel",text:"Cancel",onClick:t.cancelAddingRelay},null,8,["onClick"])]),t.nameError?(Ee(),$e("div",HR,Js(t.nameError),1)):nr("",!0)])):nr("",!0)])}const zR=Ot(UR,[["render",WR],["__scopeId","data-v-0ea1ff03"]]),KR=Nt({components:{PageTitle:Dp},setup(){return{}}}),GR={class:"schedules"};function QR(t,e,n,r,s,i){const a=vt("page-title");return Ee(),$e("div",GR,[qe(a,{title:"Schedules"})])}const JR=Ot(KR,[["render",QR],["__scopeId","data-v-b769630a"]]),YR=Nt({name:"App",components:{Schedules:JR,Relays:zR,TaskBar:_v,SignIn:dw},setup(){const t=jf(),e=Uf();return{signedIn:qc(()=>!!t.user),pageStore:e}}}),XR={class:"app"},ZR={key:0,class:"signed-in"},eb={class:"body"};function tb(t,e,n,r,s,i){const a=vt("relays"),c=vt("schedules"),l=vt("task-bar"),d=vt("sign-in");return Ee(),$e("div",XR,[t.signedIn?(Ee(),$e("div",ZR,[St("div",eb,[t.pageStore.currentPage==="relays"?(Ee(),$t(a,{key:0})):t.pageStore.currentPage==="schedules"?(Ee(),$t(c,{key:1})):nr("",!0)]),qe(l)])):(Ee(),$t(d,{key:1}))])}const nb=Ot(YR,[["render",tb],["__scopeId","data-v-b43dde52"]]),im=sv(nb),rb=cv();im.use(rb);im.mount("#app");
