(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const $e={},fs=[],pn=()=>{},Jy=()=>!1,wa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Mc=t=>t.startsWith("onUpdate:"),Pt=Object.assign,xc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yy=Object.prototype.hasOwnProperty,Ve=(t,e)=>Yy.call(t,e),me=Array.isArray,ps=t=>Ta(t)==="[object Map]",pp=t=>Ta(t)==="[object Set]",ve=t=>typeof t=="function",nt=t=>typeof t=="string",qn=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",mp=t=>(ze(t)||ve(t))&&ve(t.then)&&ve(t.catch),gp=Object.prototype.toString,Ta=t=>gp.call(t),Xy=t=>Ta(t).slice(8,-1),_p=t=>Ta(t)==="[object Object]",Lc=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hi=Vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zy=/-(\w)/g,Zt=Ia(t=>t.replace(Zy,(e,n)=>n?n.toUpperCase():"")),ev=/\B([A-Z])/g,Ar=Ia(t=>t.replace(ev,"-$1").toLowerCase()),ba=Ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),wl=Ia(t=>t?`on${ba(t)}`:""),cr=(t,e)=>!Object.is(t,e),Oo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Kl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zh;const Aa=()=>zh||(zh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hn(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=nt(r)?sv(r):Hn(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(nt(t)||ze(t))return t}const tv=/;(?![^(]*\))/g,nv=/:([^]+)/,rv=/\/\*[^]*?\*\//g;function sv(t){const e={};return t.replace(rv,"").split(tv).forEach(n=>{if(n){const r=n.split(nv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function st(t){let e="";if(nt(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const r=st(t[n]);r&&(e+=r+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ov=Vc(iv);function vp(t){return!!t||t===""}const Ep=t=>!!(t&&t.__v_isRef===!0),we=t=>nt(t)?t:t==null?"":me(t)||ze(t)&&(t.toString===gp||!ve(t.toString))?Ep(t)?we(t.value):JSON.stringify(t,wp,2):String(t),wp=(t,e)=>Ep(e)?wp(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Tl(r,i)+" =>"]=s,n),{})}:pp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tl(n))}:qn(e)?Tl(e):ze(e)&&!me(e)&&!_p(e)?String(e):e,Tl=(t,e="")=>{var n;return qn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class Tp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ip(t){return new Tp(t)}function bp(){return Ot}function av(t,e=!1){Ot&&Ot.cleanups.push(t)}let Be;const Il=new WeakSet;class Ap{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Il.has(this)&&(Il.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wh(this),Cp(this);const e=Be,n=rn;Be=this,rn=!0;try{return this.fn()}finally{Pp(this),Be=e,rn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fc(e);this.deps=this.depsTail=void 0,Wh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Il.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gl(this)&&this.run()}get dirty(){return Gl(this)}}let Sp=0,di,fi;function Rp(t,e=!1){if(t.flags|=8,e){t.next=fi,fi=t;return}t.next=di,di=t}function $c(){Sp++}function Uc(){if(--Sp>0)return;if(fi){let e=fi;for(fi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;di;){let e=di;for(di=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Cp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Fc(r),lv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Gl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===bi))return;t.globalVersion=bi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Gl(t)){t.flags&=-3;return}const n=Be,r=rn;Be=t,rn=!0;try{Cp(t);const s=t.fn(t._value);(e.version===0||cr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Be=n,rn=r,Pp(t),t.flags&=-3}}function Fc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Fc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function lv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rn=!0;const Np=[];function Sr(){Np.push(rn),rn=!1}function Rr(){const t=Np.pop();rn=t===void 0?!0:t}function Wh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Be;Be=void 0;try{e()}finally{Be=n}}}let bi=0;class cv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Be||!rn||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new cv(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,Dp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=r)}return n}trigger(e){this.version++,bi++,this.notify(e)}notify(e){$c();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Uc()}}}function Dp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Dp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Go=new WeakMap,jr=Symbol(""),Ql=Symbol(""),Ai=Symbol("");function bt(t,e,n){if(rn&&Be){let r=Go.get(t);r||Go.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Bc),s.map=r,s.key=n),s.track()}}function Pn(t,e,n,r,s,i){const o=Go.get(t);if(!o){bi++;return}const l=c=>{c&&c.trigger()};if($c(),e==="clear")o.forEach(l);else{const c=me(t),u=c&&Lc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ai||!qn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Ai)),e){case"add":c?u&&l(o.get("length")):(l(o.get(jr)),ps(t)&&l(o.get(Ql)));break;case"delete":c||(l(o.get(jr)),ps(t)&&l(o.get(Ql)));break;case"set":ps(t)&&l(o.get(jr));break}}Uc()}function uv(t,e){const n=Go.get(t);return n&&n.get(e)}function ss(t){const e=Ne(t);return e===t?e:(bt(e,"iterate",Ai),Xt(t)?e:e.map(At))}function Sa(t){return bt(t=Ne(t),"iterate",Ai),t}const hv={__proto__:null,[Symbol.iterator](){return bl(this,Symbol.iterator,At)},concat(...t){return ss(this).concat(...t.map(e=>me(e)?ss(e):e))},entries(){return bl(this,"entries",t=>(t[1]=At(t[1]),t))},every(t,e){return Sn(this,"every",t,e,void 0,arguments)},filter(t,e){return Sn(this,"filter",t,e,n=>n.map(At),arguments)},find(t,e){return Sn(this,"find",t,e,At,arguments)},findIndex(t,e){return Sn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Sn(this,"findLast",t,e,At,arguments)},findLastIndex(t,e){return Sn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Sn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Al(this,"includes",t)},indexOf(...t){return Al(this,"indexOf",t)},join(t){return ss(this).join(t)},lastIndexOf(...t){return Al(this,"lastIndexOf",t)},map(t,e){return Sn(this,"map",t,e,void 0,arguments)},pop(){return ri(this,"pop")},push(...t){return ri(this,"push",t)},reduce(t,...e){return Kh(this,"reduce",t,e)},reduceRight(t,...e){return Kh(this,"reduceRight",t,e)},shift(){return ri(this,"shift")},some(t,e){return Sn(this,"some",t,e,void 0,arguments)},splice(...t){return ri(this,"splice",t)},toReversed(){return ss(this).toReversed()},toSorted(t){return ss(this).toSorted(t)},toSpliced(...t){return ss(this).toSpliced(...t)},unshift(...t){return ri(this,"unshift",t)},values(){return bl(this,"values",At)}};function bl(t,e,n){const r=Sa(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const dv=Array.prototype;function Sn(t,e,n,r,s,i){const o=Sa(t),l=o!==t&&!Xt(t),c=o[e];if(c!==dv[e]){const p=c.apply(t,i);return l?At(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,At(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Kh(t,e,n,r){const s=Sa(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,At(l),c,t)}),s[e](i,...r)}function Al(t,e,n){const r=Ne(t);bt(r,"iterate",Ai);const s=r[e](...n);return(s===-1||s===!1)&&Hc(n[0])?(n[0]=Ne(n[0]),r[e](...n)):s}function ri(t,e,n=[]){Sr(),$c();const r=Ne(t)[e].apply(t,n);return Uc(),Rr(),r}const fv=Vc("__proto__,__v_isRef,__isVue"),Op=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qn));function pv(t){qn(t)||(t=String(t));const e=Ne(this);return bt(e,"has",t),e.hasOwnProperty(t)}class Vp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?bv:$p:i?Lp:xp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=me(e);if(!s){let c;if(o&&(c=hv[n]))return c;if(n==="hasOwnProperty")return pv}const l=Reflect.get(e,n,Xe(e)?e:r);return(qn(n)?Op.has(n):fv(n))||(s||bt(e,"get",n),i)?l:Xe(l)?o&&Lc(n)?l:l.value:ze(l)?s?Fp(l):Bi(l):l}}class Mp extends Vp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=zr(i);if(!Xt(r)&&!zr(r)&&(i=Ne(i),r=Ne(r)),!me(e)&&Xe(i)&&!Xe(r))return c?!1:(i.value=r,!0)}const o=me(e)&&Lc(n)?Number(n)<e.length:Ve(e,n),l=Reflect.set(e,n,r,Xe(e)?e:s);return e===Ne(s)&&(o?cr(r,i)&&Pn(e,"set",n,r):Pn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!qn(n)||!Op.has(n))&&bt(e,"has",n),r}ownKeys(e){return bt(e,"iterate",me(e)?"length":jr),Reflect.ownKeys(e)}}class mv extends Vp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gv=new Mp,_v=new mv,yv=new Mp(!0);const Jl=t=>t,bo=t=>Reflect.getPrototypeOf(t);function vv(t,e,n){return function(...r){const s=this.__v_raw,i=Ne(s),o=ps(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Jl:e?Yl:At;return!e&&bt(i,"iterate",c?Ql:jr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ev(t,e){const n={get(s){const i=this.__v_raw,o=Ne(i),l=Ne(s);t||(cr(s,l)&&bt(o,"get",s),bt(o,"get",l));const{has:c}=bo(o),u=e?Jl:t?Yl:At;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&bt(Ne(s),"iterate",jr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ne(i),l=Ne(s);return t||(cr(s,l)&&bt(o,"has",s),bt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ne(l),u=e?Jl:t?Yl:At;return!t&&bt(c,"iterate",jr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return Pt(n,t?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(s){!e&&!Xt(s)&&!zr(s)&&(s=Ne(s));const i=Ne(this);return bo(i).has.call(i,s)||(i.add(s),Pn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!zr(i)&&(i=Ne(i));const o=Ne(this),{has:l,get:c}=bo(o);let u=l.call(o,s);u||(s=Ne(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?cr(i,d)&&Pn(o,"set",s,i):Pn(o,"add",s,i),this},delete(s){const i=Ne(this),{has:o,get:l}=bo(i);let c=o.call(i,s);c||(s=Ne(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Pn(i,"delete",s,void 0),u},clear(){const s=Ne(this),i=s.size!==0,o=s.clear();return i&&Pn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=vv(s,t,e)}),n}function jc(t,e){const n=Ev(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ve(n,s)&&s in r?n:r,s,i)}const wv={get:jc(!1,!1)},Tv={get:jc(!1,!0)},Iv={get:jc(!0,!1)};const xp=new WeakMap,Lp=new WeakMap,$p=new WeakMap,bv=new WeakMap;function Av(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sv(t){return t.__v_skip||!Object.isExtensible(t)?0:Av(Xy(t))}function Bi(t){return zr(t)?t:qc(t,!1,gv,wv,xp)}function Up(t){return qc(t,!1,yv,Tv,Lp)}function Fp(t){return qc(t,!0,_v,Iv,$p)}function qc(t,e,n,r,s){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Sv(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function ur(t){return zr(t)?ur(t.__v_raw):!!(t&&t.__v_isReactive)}function zr(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function Hc(t){return t?!!t.__v_raw:!1}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function zc(t){return!Ve(t,"__v_skip")&&Object.isExtensible(t)&&yp(t,"__v_skip",!0),t}const At=t=>ze(t)?Bi(t):t,Yl=t=>ze(t)?Fp(t):t;function Xe(t){return t?t.__v_isRef===!0:!1}function re(t){return Bp(t,!1)}function Rv(t){return Bp(t,!0)}function Bp(t,e){return Xe(t)?t:new Cv(t,e)}class Cv{constructor(e,n){this.dep=new Bc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ne(e),this._value=n?e:At(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||zr(e);e=r?e:Ne(e),cr(e,n)&&(this._rawValue=e,this._value=r?e:At(e),this.dep.trigger())}}function ms(t){return Xe(t)?t.value:t}const Pv={get:(t,e,n)=>e==="__v_raw"?t:ms(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Xe(s)&&!Xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jp(t){return ur(t)?t:new Proxy(t,Pv)}function kv(t){const e=me(t)?new Array(t.length):{};for(const n in t)e[n]=Dv(t,n);return e}class Nv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return uv(Ne(this._object),this._key)}}function Dv(t,e,n){const r=t[e];return Xe(r)?r:new Nv(t,e,n)}class Ov{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return Rp(this,!0),!0}get value(){const e=this.dep.track();return kp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Vv(t,e,n=!1){let r,s;return ve(t)?r=t:(r=t.get,s=t.set),new Ov(r,s,n)}const So={},Qo=new WeakMap;let $r;function Mv(t,e=!1,n=$r){if(n){let r=Qo.get(n);r||Qo.set(n,r=[]),r.push(t)}}function xv(t,e,n=$e){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=z=>s?z:Xt(z)||s===!1||s===0?kn(z,1):kn(z);let d,p,m,_,R=!1,A=!1;if(Xe(t)?(p=()=>t.value,R=Xt(t)):ur(t)?(p=()=>u(t),R=!0):me(t)?(A=!0,R=t.some(z=>ur(z)||Xt(z)),p=()=>t.map(z=>{if(Xe(z))return z.value;if(ur(z))return u(z);if(ve(z))return c?c(z,2):z()})):ve(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Sr();try{m()}finally{Rr()}}const z=$r;$r=d;try{return c?c(t,3,[_]):t(_)}finally{$r=z}}:p=pn,e&&s){const z=p,Z=s===!0?1/0:s;p=()=>kn(z(),Z)}const P=bp(),D=()=>{d.stop(),P&&P.active&&xc(P.effects,d)};if(i&&e){const z=e;e=(...Z)=>{z(...Z),D()}}let V=A?new Array(t.length).fill(So):So;const M=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const Z=d.run();if(s||R||(A?Z.some((ae,b)=>cr(ae,V[b])):cr(Z,V))){m&&m();const ae=$r;$r=d;try{const b=[Z,V===So?void 0:A&&V[0]===So?[]:V,_];c?c(e,3,b):e(...b),V=Z}finally{$r=ae}}}else d.run()};return l&&l(M),d=new Ap(p),d.scheduler=o?()=>o(M,!1):M,_=z=>Mv(z,!1,d),m=d.onStop=()=>{const z=Qo.get(d);if(z){if(c)c(z,4);else for(const Z of z)Z();Qo.delete(d)}},e?r?M(!0):V=d.run():o?o(M.bind(null,!0),!0):d.run(),D.pause=d.pause.bind(d),D.resume=d.resume.bind(d),D.stop=D,D}function kn(t,e=1/0,n){if(e<=0||!ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Xe(t))kn(t.value,e,n);else if(me(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(pp(t)||ps(t))t.forEach(r=>{kn(r,e,n)});else if(_p(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ji(t,e,n,r){try{return r?t(...r):t()}catch(s){Ra(s,e,n)}}function vn(t,e,n,r){if(ve(t)){const s=ji(t,e,n,r);return s&&mp(s)&&s.catch(i=>{Ra(i,e,n)}),s}if(me(t)){const s=[];for(let i=0;i<t.length;i++)s.push(vn(t[i],e,n,r));return s}}function Ra(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||$e;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Sr(),ji(i,null,10,[t,c,u]),Rr();return}}Lv(t,n,s,r,o)}function Lv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Vt=[];let hn=-1;const gs=[];let nr=null,os=0;const qp=Promise.resolve();let Jo=null;function Wc(t){const e=Jo||qp;return t?e.then(this?t.bind(this):t):e}function $v(t){let e=hn+1,n=Vt.length;for(;e<n;){const r=e+n>>>1,s=Vt[r],i=Si(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Kc(t){if(!(t.flags&1)){const e=Si(t),n=Vt[Vt.length-1];!n||!(t.flags&2)&&e>=Si(n)?Vt.push(t):Vt.splice($v(e),0,t),t.flags|=1,Hp()}}function Hp(){Jo||(Jo=qp.then(Wp))}function Uv(t){me(t)?gs.push(...t):nr&&t.id===-1?nr.splice(os+1,0,t):t.flags&1||(gs.push(t),t.flags|=1),Hp()}function Gh(t,e,n=hn+1){for(;n<Vt.length;n++){const r=Vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zp(t){if(gs.length){const e=[...new Set(gs)].sort((n,r)=>Si(n)-Si(r));if(gs.length=0,nr){nr.push(...e);return}for(nr=e,os=0;os<nr.length;os++){const n=nr[os];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nr=null,os=0}}const Si=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wp(t){try{for(hn=0;hn<Vt.length;hn++){const e=Vt[hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ji(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hn<Vt.length;hn++){const e=Vt[hn];e&&(e.flags&=-2)}hn=-1,Vt.length=0,zp(),Jo=null,(Vt.length||gs.length)&&Wp()}}let lt=null,Kp=null;function Yo(t){const e=lt;return lt=t,Kp=t&&t.type.__scopeId||null,e}function Mn(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&sd(-1);const i=Yo(e);let o;try{o=t(...s)}finally{Yo(i),r._d&&sd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ts(t,e){if(lt===null)return t;const n=Na(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=$e]=e[s];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function xr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Sr(),vn(c,n,8,[t.el,l,t,e]),Rr())}}const Fv=Symbol("_vte"),Bv=t=>t.__isTeleport;function Gc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function De(t,e){return ve(t)?Pt({name:t.name},e,{setup:t}):t}function Gp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Xo(t,e,n,r,s=!1){if(me(t)){t.forEach((R,A)=>Xo(R,e&&(me(e)?e[A]:e),n,r,s));return}if(_s(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Xo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Na(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===$e?l.refs={}:l.refs,p=l.setupState,m=Ne(p),_=p===$e?()=>!1:R=>Ve(m,R);if(u!=null&&u!==c&&(nt(u)?(d[u]=null,_(u)&&(p[u]=null)):Xe(u)&&(u.value=null)),ve(c))ji(c,l,12,[o,d]);else{const R=nt(c),A=Xe(c);if(R||A){const P=()=>{if(t.f){const D=R?_(c)?p[c]:d[c]:c.value;s?me(D)&&xc(D,i):me(D)?D.includes(i)||D.push(i):R?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else R?(d[c]=o,_(c)&&(p[c]=o)):A&&(c.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,qt(P,n)):P()}}}Aa().requestIdleCallback;Aa().cancelIdleCallback;const _s=t=>!!t.type.__asyncLoader,Qp=t=>t.type.__isKeepAlive;function jv(t,e){Jp(t,"a",e)}function qv(t,e){Jp(t,"da",e)}function Jp(t,e,n=mt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ca(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Qp(s.parent.vnode)&&Hv(r,e,n,s),s=s.parent}}function Hv(t,e,n,r){const s=Ca(e,t,r,!0);Qc(()=>{xc(r[e],s)},n)}function Ca(t,e,n=mt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Sr();const l=Hi(n),c=vn(e,n,t,o);return l(),Rr(),c});return r?s.unshift(i):s.push(i),i}}const zn=t=>(e,n=mt)=>{(!Pi||t==="sp")&&Ca(t,(...r)=>e(...r),n)},qi=zn("bm"),Cr=zn("m"),zv=zn("bu"),Wv=zn("u"),Yp=zn("bum"),Qc=zn("um"),Kv=zn("sp"),Gv=zn("rtg"),Qv=zn("rtc");function Jv(t,e=mt){Ca("ec",t,e)}const Yv="components";function _e(t,e){return Zv(Yv,t,!0,e)||t}const Xv=Symbol.for("v-ndc");function Zv(t,e,n=!0,r=!1){const s=lt||mt;if(s){const i=s.type;{const l=B0(i,!1);if(l&&(l===e||l===Zt(e)||l===ba(Zt(e))))return i}const o=Qh(s[t]||i[t],e)||Qh(s.appContext[t],e);return!o&&r?i:o}}function Qh(t,e){return t&&(t[e]||t[Zt(e)]||t[ba(Zt(e))])}function En(t,e,n,r){let s;const i=n,o=me(t);if(o||nt(t)){const l=o&&ur(t);let c=!1;l&&(c=!Xt(t),t=Sa(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?At(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(ze(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function e0(t,e,n={},r,s){if(lt.ce||lt.parent&&_s(lt.parent)&&lt.parent.ce)return n.name=e,q(),qe(Je,null,[pe("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),q();const o=i&&Xp(i(n)),l=n.key||o&&o.key,c=qe(Je,{key:(l&&!qn(l)?l:`_${e}`)+""},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Xp(t){return t.some(e=>Ci(e)?!(e.type===gr||e.type===Je&&!Xp(e.children)):!0)?t:null}const Xl=t=>t?Em(t)?Na(t):Xl(t.parent):null,pi=Pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xl(t.parent),$root:t=>Xl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>em(t),$forceUpdate:t=>t.f||(t.f=()=>{Kc(t.update)}),$nextTick:t=>t.n||(t.n=Wc.bind(t.proxy)),$watch:t=>T0.bind(t)}),Sl=(t,e)=>t!==$e&&!t.__isScriptSetup&&Ve(t,e),t0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Sl(r,e))return o[e]=1,r[e];if(s!==$e&&Ve(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ve(u,e))return o[e]=3,i[e];if(n!==$e&&Ve(n,e))return o[e]=4,n[e];Zl&&(o[e]=0)}}const d=pi[e];let p,m;if(d)return e==="$attrs"&&bt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==$e&&Ve(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ve(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Sl(s,e)?(s[e]=n,!0):r!==$e&&Ve(r,e)?(r[e]=n,!0):Ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==$e&&Ve(t,o)||Sl(e,o)||(l=i[0])&&Ve(l,o)||Ve(r,o)||Ve(pi,o)||Ve(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Jh(t){return me(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zl=!0;function n0(t){const e=em(t),n=t.proxy,r=t.ctx;Zl=!1,e.beforeCreate&&Yh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:R,activated:A,deactivated:P,beforeDestroy:D,beforeUnmount:V,destroyed:M,unmounted:z,render:Z,renderTracked:ae,renderTriggered:b,errorCaptured:y,serverPrefetch:v,expose:I,inheritAttrs:S,components:C,directives:w,filters:rt}=e;if(u&&r0(u,r,null),o)for(const de in o){const Ie=o[de];ve(Ie)&&(r[de]=Ie.bind(n))}if(s){const de=s.call(n,n);ze(de)&&(t.data=Bi(de))}if(Zl=!0,i)for(const de in i){const Ie=i[de],Bt=ve(Ie)?Ie.bind(n,n):ve(Ie.get)?Ie.get.bind(n,n):pn,en=!ve(Ie)&&ve(Ie.set)?Ie.set.bind(n):pn,Qt=Ue({get:Bt,set:en});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:We=>Qt.value=We})}if(l)for(const de in l)Zp(l[de],r,n,de);if(c){const de=ve(c)?c.call(n):c;Reflect.ownKeys(de).forEach(Ie=>{Vo(Ie,de[Ie])})}d&&Yh(d,t,"c");function Fe(de,Ie){me(Ie)?Ie.forEach(Bt=>de(Bt.bind(n))):Ie&&de(Ie.bind(n))}if(Fe(qi,p),Fe(Cr,m),Fe(zv,_),Fe(Wv,R),Fe(jv,A),Fe(qv,P),Fe(Jv,y),Fe(Qv,ae),Fe(Gv,b),Fe(Yp,V),Fe(Qc,z),Fe(Kv,v),me(I))if(I.length){const de=t.exposed||(t.exposed={});I.forEach(Ie=>{Object.defineProperty(de,Ie,{get:()=>n[Ie],set:Bt=>n[Ie]=Bt})})}else t.exposed||(t.exposed={});Z&&t.render===pn&&(t.render=Z),S!=null&&(t.inheritAttrs=S),C&&(t.components=C),w&&(t.directives=w),v&&Gp(t)}function r0(t,e,n=pn){me(t)&&(t=ec(t));for(const r in t){const s=t[r];let i;ze(s)?"default"in s?i=sn(s.from||r,s.default,!0):i=sn(s.from||r):i=sn(s),Xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Yh(t,e,n){vn(me(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zp(t,e,n,r){let s=r.includes(".")?pm(n,r):()=>n[r];if(nt(t)){const i=e[t];ve(i)&&mn(s,i)}else if(ve(t))mn(s,t.bind(n));else if(ze(t))if(me(t))t.forEach(i=>Zp(i,e,n,r));else{const i=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(i)&&mn(s,i,t)}}function em(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Zo(c,u,o,!0)),Zo(c,e,o)),ze(e)&&i.set(e,c),c}function Zo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Zo(t,i,n,!0),s&&s.forEach(o=>Zo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=s0[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const s0={data:Xh,props:Zh,emits:Zh,methods:oi,computed:oi,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:oi,directives:oi,watch:o0,provide:Xh,inject:i0};function Xh(t,e){return e?t?function(){return Pt(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function i0(t,e){return oi(ec(t),ec(e))}function ec(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?Pt(Object.create(null),t,e):e}function Zh(t,e){return t?me(t)&&me(e)?[...new Set([...t,...e])]:Pt(Object.create(null),Jh(t),Jh(e??{})):e}function o0(t,e){if(!t)return e;if(!e)return t;const n=Pt(Object.create(null),t);for(const r in e)n[r]=Dt(t[r],e[r]);return n}function tm(){return{app:null,config:{isNativeTag:Jy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let a0=0;function l0(t,e){return function(r,s=null){ve(r)||(r=Pt({},r)),s!=null&&!ze(s)&&(s=null);const i=tm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:a0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:q0,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ve(d.install)?(o.add(d),d.install(u,...p)):ve(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const _=u._ceVNode||pe(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,d,m),c=!0,u._container=d,d.__vue_app__=u,Na(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(vn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=qr;qr=u;try{return d()}finally{qr=p}}};return u}}let qr=null;function Vo(t,e){if(mt){let n=mt.provides;const r=mt.parent&&mt.parent.provides;r===n&&(n=mt.provides=Object.create(r)),n[t]=e}}function sn(t,e,n=!1){const r=mt||lt;if(r||qr){const s=qr?qr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}function c0(){return!!(mt||lt||qr)}const nm={},rm=()=>Object.create(nm),sm=t=>Object.getPrototypeOf(t)===nm;function u0(t,e,n,r=!1){const s={},i=rm();t.propsDefaults=Object.create(null),im(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Up(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function h0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ne(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Pa(t.emitsOptions,m))continue;const _=e[m];if(c)if(Ve(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const R=Zt(m);s[R]=tc(c,l,R,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{im(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Ve(e,p)&&((d=Ar(p))===p||!Ve(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=tc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ve(e,p))&&(delete i[p],u=!0)}u&&Pn(t.attrs,"set","")}function im(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(hi(c))continue;const u=e[c];let d;s&&Ve(s,d=Zt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Pa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ne(n),u=l||$e;for(let d=0;d<i.length;d++){const p=i[d];n[p]=tc(s,c,p,u[p],t,!Ve(u,p))}}return o}function tc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ve(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ve(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Hi(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Ar(n))&&(r=!0))}return r}const d0=new WeakMap;function om(t,e,n=!1){const r=n?d0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ve(t)){const d=p=>{c=!0;const[m,_]=om(p,e,!0);Pt(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return ze(t)&&r.set(t,fs),fs;if(me(i))for(let d=0;d<i.length;d++){const p=Zt(i[d]);ed(p)&&(o[p]=$e)}else if(i)for(const d in i){const p=Zt(d);if(ed(p)){const m=i[d],_=o[p]=me(m)||ve(m)?{type:m}:Pt({},m),R=_.type;let A=!1,P=!0;if(me(R))for(let D=0;D<R.length;++D){const V=R[D],M=ve(V)&&V.name;if(M==="Boolean"){A=!0;break}else M==="String"&&(P=!1)}else A=ve(R)&&R.name==="Boolean";_[0]=A,_[1]=P,(A||Ve(_,"default"))&&l.push(p)}}const u=[o,l];return ze(t)&&r.set(t,u),u}function ed(t){return t[0]!=="$"&&!hi(t)}const am=t=>t[0]==="_"||t==="$stable",Jc=t=>me(t)?t.map(fn):[fn(t)],f0=(t,e,n)=>{if(e._n)return e;const r=Mn((...s)=>Jc(e(...s)),n);return r._c=!1,r},lm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(am(s))continue;const i=t[s];if(ve(i))e[s]=f0(s,i,r);else if(i!=null){const o=Jc(i);e[s]=()=>o}}},cm=(t,e)=>{const n=Jc(e);t.slots.default=()=>n},um=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},p0=(t,e,n)=>{const r=t.slots=rm();if(t.vnode.shapeFlag&32){const s=e._;s?(um(r,e,n),n&&yp(r,"_",s,!0)):lm(e,r)}else e&&cm(t,e)},m0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=$e;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:um(s,e,n):(i=!e.$stable,lm(e,s)),o=e}else e&&(cm(t,e),o={default:1});if(i)for(const l in s)!am(l)&&o[l]==null&&delete s[l]},qt=P0;function g0(t){return _0(t)}function _0(t,e){const n=Aa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=pn,insertStaticContent:R}=t,A=(E,T,k,L=null,B=null,U=null,J=void 0,K=null,W=!!T.dynamicChildren)=>{if(E===T)return;E&&!si(E,T)&&(L=x(E),We(E,B,U,!0),E=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:H,ref:le,shapeFlag:X}=T;switch(H){case ka:P(E,T,k,L);break;case gr:D(E,T,k,L);break;case Mo:E==null&&V(T,k,L,J);break;case Je:C(E,T,k,L,B,U,J,K,W);break;default:X&1?Z(E,T,k,L,B,U,J,K,W):X&6?w(E,T,k,L,B,U,J,K,W):(X&64||X&128)&&H.process(E,T,k,L,B,U,J,K,W,se)}le!=null&&B&&Xo(le,E&&E.ref,U,T||E,!T)},P=(E,T,k,L)=>{if(E==null)r(T.el=l(T.children),k,L);else{const B=T.el=E.el;T.children!==E.children&&u(B,T.children)}},D=(E,T,k,L)=>{E==null?r(T.el=c(T.children||""),k,L):T.el=E.el},V=(E,T,k,L)=>{[E.el,E.anchor]=R(E.children,T,k,L,E.el,E.anchor)},M=({el:E,anchor:T},k,L)=>{let B;for(;E&&E!==T;)B=m(E),r(E,k,L),E=B;r(T,k,L)},z=({el:E,anchor:T})=>{let k;for(;E&&E!==T;)k=m(E),s(E),E=k;s(T)},Z=(E,T,k,L,B,U,J,K,W)=>{T.type==="svg"?J="svg":T.type==="math"&&(J="mathml"),E==null?ae(T,k,L,B,U,J,K,W):v(E,T,B,U,J,K,W)},ae=(E,T,k,L,B,U,J,K)=>{let W,H;const{props:le,shapeFlag:X,transition:ie,dirs:ue}=E;if(W=E.el=o(E.type,U,le&&le.is,le),X&8?d(W,E.children):X&16&&y(E.children,W,null,L,B,Rl(E,U),J,K),ue&&xr(E,null,L,"created"),b(W,E,E.scopeId,J,L),le){for(const Ee in le)Ee!=="value"&&!hi(Ee)&&i(W,Ee,null,le[Ee],U,L);"value"in le&&i(W,"value",null,le.value,U),(H=le.onVnodeBeforeMount)&&un(H,L,E)}ue&&xr(E,null,L,"beforeMount");const ce=y0(B,ie);ce&&ie.beforeEnter(W),r(W,T,k),((H=le&&le.onVnodeMounted)||ce||ue)&&qt(()=>{H&&un(H,L,E),ce&&ie.enter(W),ue&&xr(E,null,L,"mounted")},B)},b=(E,T,k,L,B)=>{if(k&&_(E,k),L)for(let U=0;U<L.length;U++)_(E,L[U]);if(B){let U=B.subTree;if(T===U||gm(U.type)&&(U.ssContent===T||U.ssFallback===T)){const J=B.vnode;b(E,J,J.scopeId,J.slotScopeIds,B.parent)}}},y=(E,T,k,L,B,U,J,K,W=0)=>{for(let H=W;H<E.length;H++){const le=E[H]=K?rr(E[H]):fn(E[H]);A(null,le,T,k,L,B,U,J,K)}},v=(E,T,k,L,B,U,J)=>{const K=T.el=E.el;let{patchFlag:W,dynamicChildren:H,dirs:le}=T;W|=E.patchFlag&16;const X=E.props||$e,ie=T.props||$e;let ue;if(k&&Lr(k,!1),(ue=ie.onVnodeBeforeUpdate)&&un(ue,k,T,E),le&&xr(T,E,k,"beforeUpdate"),k&&Lr(k,!0),(X.innerHTML&&ie.innerHTML==null||X.textContent&&ie.textContent==null)&&d(K,""),H?I(E.dynamicChildren,H,K,k,L,Rl(T,B),U):J||Ie(E,T,K,null,k,L,Rl(T,B),U,!1),W>0){if(W&16)S(K,X,ie,k,B);else if(W&2&&X.class!==ie.class&&i(K,"class",null,ie.class,B),W&4&&i(K,"style",X.style,ie.style,B),W&8){const ce=T.dynamicProps;for(let Ee=0;Ee<ce.length;Ee++){const Re=ce[Ee],yt=X[Re],ht=ie[Re];(ht!==yt||Re==="value")&&i(K,Re,yt,ht,B,k)}}W&1&&E.children!==T.children&&d(K,T.children)}else!J&&H==null&&S(K,X,ie,k,B);((ue=ie.onVnodeUpdated)||le)&&qt(()=>{ue&&un(ue,k,T,E),le&&xr(T,E,k,"updated")},L)},I=(E,T,k,L,B,U,J)=>{for(let K=0;K<T.length;K++){const W=E[K],H=T[K],le=W.el&&(W.type===Je||!si(W,H)||W.shapeFlag&70)?p(W.el):k;A(W,H,le,null,L,B,U,J,!0)}},S=(E,T,k,L,B)=>{if(T!==k){if(T!==$e)for(const U in T)!hi(U)&&!(U in k)&&i(E,U,T[U],null,B,L);for(const U in k){if(hi(U))continue;const J=k[U],K=T[U];J!==K&&U!=="value"&&i(E,U,K,J,B,L)}"value"in k&&i(E,"value",T.value,k.value,B)}},C=(E,T,k,L,B,U,J,K,W)=>{const H=T.el=E?E.el:l(""),le=T.anchor=E?E.anchor:l("");let{patchFlag:X,dynamicChildren:ie,slotScopeIds:ue}=T;ue&&(K=K?K.concat(ue):ue),E==null?(r(H,k,L),r(le,k,L),y(T.children||[],k,le,B,U,J,K,W)):X>0&&X&64&&ie&&E.dynamicChildren?(I(E.dynamicChildren,ie,k,B,U,J,K),(T.key!=null||B&&T===B.subTree)&&hm(E,T,!0)):Ie(E,T,k,le,B,U,J,K,W)},w=(E,T,k,L,B,U,J,K,W)=>{T.slotScopeIds=K,E==null?T.shapeFlag&512?B.ctx.activate(T,k,L,J,W):rt(T,k,L,B,U,J,W):xt(E,T,W)},rt=(E,T,k,L,B,U,J)=>{const K=E.component=x0(E,L,B);if(Qp(E)&&(K.ctx.renderer=se),L0(K,!1,J),K.asyncDep){if(B&&B.registerDep(K,Fe,J),!E.el){const W=K.subTree=pe(gr);D(null,W,T,k)}}else Fe(K,E,T,k,B,U,J)},xt=(E,T,k)=>{const L=T.component=E.component;if(R0(E,T,k))if(L.asyncDep&&!L.asyncResolved){de(L,T,k);return}else L.next=T,L.update();else T.el=E.el,L.vnode=T},Fe=(E,T,k,L,B,U,J)=>{const K=()=>{if(E.isMounted){let{next:X,bu:ie,u:ue,parent:ce,vnode:Ee}=E;{const vt=dm(E);if(vt){X&&(X.el=Ee.el,de(E,X,J)),vt.asyncDep.then(()=>{E.isUnmounted||K()});return}}let Re=X,yt;Lr(E,!1),X?(X.el=Ee.el,de(E,X,J)):X=Ee,ie&&Oo(ie),(yt=X.props&&X.props.onVnodeBeforeUpdate)&&un(yt,ce,X,Ee),Lr(E,!0);const ht=nd(E),Jt=E.subTree;E.subTree=ht,A(Jt,ht,p(Jt.el),x(Jt),E,B,U),X.el=ht.el,Re===null&&C0(E,ht.el),ue&&qt(ue,B),(yt=X.props&&X.props.onVnodeUpdated)&&qt(()=>un(yt,ce,X,Ee),B)}else{let X;const{el:ie,props:ue}=T,{bm:ce,m:Ee,parent:Re,root:yt,type:ht}=E,Jt=_s(T);Lr(E,!1),ce&&Oo(ce),!Jt&&(X=ue&&ue.onVnodeBeforeMount)&&un(X,Re,T),Lr(E,!0);{yt.ce&&yt.ce._injectChildStyle(ht);const vt=E.subTree=nd(E);A(null,vt,k,L,E,B,U),T.el=vt.el}if(Ee&&qt(Ee,B),!Jt&&(X=ue&&ue.onVnodeMounted)){const vt=T;qt(()=>un(X,Re,vt),B)}(T.shapeFlag&256||Re&&_s(Re.vnode)&&Re.vnode.shapeFlag&256)&&E.a&&qt(E.a,B),E.isMounted=!0,T=k=L=null}};E.scope.on();const W=E.effect=new Ap(K);E.scope.off();const H=E.update=W.run.bind(W),le=E.job=W.runIfDirty.bind(W);le.i=E,le.id=E.uid,W.scheduler=()=>Kc(le),Lr(E,!0),H()},de=(E,T,k)=>{T.component=E;const L=E.vnode.props;E.vnode=T,E.next=null,h0(E,T.props,L,k),m0(E,T.children,k),Sr(),Gh(E),Rr()},Ie=(E,T,k,L,B,U,J,K,W=!1)=>{const H=E&&E.children,le=E?E.shapeFlag:0,X=T.children,{patchFlag:ie,shapeFlag:ue}=T;if(ie>0){if(ie&128){en(H,X,k,L,B,U,J,K,W);return}else if(ie&256){Bt(H,X,k,L,B,U,J,K,W);return}}ue&8?(le&16&&Lt(H,B,U),X!==H&&d(k,X)):le&16?ue&16?en(H,X,k,L,B,U,J,K,W):Lt(H,B,U,!0):(le&8&&d(k,""),ue&16&&y(X,k,L,B,U,J,K,W))},Bt=(E,T,k,L,B,U,J,K,W)=>{E=E||fs,T=T||fs;const H=E.length,le=T.length,X=Math.min(H,le);let ie;for(ie=0;ie<X;ie++){const ue=T[ie]=W?rr(T[ie]):fn(T[ie]);A(E[ie],ue,k,null,B,U,J,K,W)}H>le?Lt(E,B,U,!0,!1,X):y(T,k,L,B,U,J,K,W,X)},en=(E,T,k,L,B,U,J,K,W)=>{let H=0;const le=T.length;let X=E.length-1,ie=le-1;for(;H<=X&&H<=ie;){const ue=E[H],ce=T[H]=W?rr(T[H]):fn(T[H]);if(si(ue,ce))A(ue,ce,k,null,B,U,J,K,W);else break;H++}for(;H<=X&&H<=ie;){const ue=E[X],ce=T[ie]=W?rr(T[ie]):fn(T[ie]);if(si(ue,ce))A(ue,ce,k,null,B,U,J,K,W);else break;X--,ie--}if(H>X){if(H<=ie){const ue=ie+1,ce=ue<le?T[ue].el:L;for(;H<=ie;)A(null,T[H]=W?rr(T[H]):fn(T[H]),k,ce,B,U,J,K,W),H++}}else if(H>ie)for(;H<=X;)We(E[H],B,U,!0),H++;else{const ue=H,ce=H,Ee=new Map;for(H=ce;H<=ie;H++){const dt=T[H]=W?rr(T[H]):fn(T[H]);dt.key!=null&&Ee.set(dt.key,H)}let Re,yt=0;const ht=ie-ce+1;let Jt=!1,vt=0;const Qn=new Array(ht);for(H=0;H<ht;H++)Qn[H]=0;for(H=ue;H<=X;H++){const dt=E[H];if(yt>=ht){We(dt,B,U,!0);continue}let Yt;if(dt.key!=null)Yt=Ee.get(dt.key);else for(Re=ce;Re<=ie;Re++)if(Qn[Re-ce]===0&&si(dt,T[Re])){Yt=Re;break}Yt===void 0?We(dt,B,U,!0):(Qn[Yt-ce]=H+1,Yt>=vt?vt=Yt:Jt=!0,A(dt,T[Yt],k,null,B,U,J,K,W),yt++)}const Hs=Jt?v0(Qn):fs;for(Re=Hs.length-1,H=ht-1;H>=0;H--){const dt=ce+H,Yt=T[dt],ao=dt+1<le?T[dt+1].el:L;Qn[H]===0?A(null,Yt,k,ao,B,U,J,K,W):Jt&&(Re<0||H!==Hs[Re]?Qt(Yt,k,ao,2):Re--)}}},Qt=(E,T,k,L,B=null)=>{const{el:U,type:J,transition:K,children:W,shapeFlag:H}=E;if(H&6){Qt(E.component.subTree,T,k,L);return}if(H&128){E.suspense.move(T,k,L);return}if(H&64){J.move(E,T,k,se);return}if(J===Je){r(U,T,k);for(let X=0;X<W.length;X++)Qt(W[X],T,k,L);r(E.anchor,T,k);return}if(J===Mo){M(E,T,k);return}if(L!==2&&H&1&&K)if(L===0)K.beforeEnter(U),r(U,T,k),qt(()=>K.enter(U),B);else{const{leave:X,delayLeave:ie,afterLeave:ue}=K,ce=()=>r(U,T,k),Ee=()=>{X(U,()=>{ce(),ue&&ue()})};ie?ie(U,ce,Ee):Ee()}else r(U,T,k)},We=(E,T,k,L=!1,B=!1)=>{const{type:U,props:J,ref:K,children:W,dynamicChildren:H,shapeFlag:le,patchFlag:X,dirs:ie,cacheIndex:ue}=E;if(X===-2&&(B=!1),K!=null&&Xo(K,null,k,E,!0),ue!=null&&(T.renderCache[ue]=void 0),le&256){T.ctx.deactivate(E);return}const ce=le&1&&ie,Ee=!_s(E);let Re;if(Ee&&(Re=J&&J.onVnodeBeforeUnmount)&&un(Re,T,E),le&6)cn(E.component,k,L);else{if(le&128){E.suspense.unmount(k,L);return}ce&&xr(E,null,T,"beforeUnmount"),le&64?E.type.remove(E,T,k,se,L):H&&!H.hasOnce&&(U!==Je||X>0&&X&64)?Lt(H,T,k,!1,!0):(U===Je&&X&384||!B&&le&16)&&Lt(W,T,k),L&&Ke(E)}(Ee&&(Re=J&&J.onVnodeUnmounted)||ce)&&qt(()=>{Re&&un(Re,T,E),ce&&xr(E,null,T,"unmounted")},k)},Ke=E=>{const{type:T,el:k,anchor:L,transition:B}=E;if(T===Je){Gn(k,L);return}if(T===Mo){z(E);return}const U=()=>{s(k),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(E.shapeFlag&1&&B&&!B.persisted){const{leave:J,delayLeave:K}=B,W=()=>J(k,U);K?K(E.el,U,W):W()}else U()},Gn=(E,T)=>{let k;for(;E!==T;)k=m(E),s(E),E=k;s(T)},cn=(E,T,k)=>{const{bum:L,scope:B,job:U,subTree:J,um:K,m:W,a:H}=E;td(W),td(H),L&&Oo(L),B.stop(),U&&(U.flags|=8,We(J,E,T,k)),K&&qt(K,T),qt(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Lt=(E,T,k,L=!1,B=!1,U=0)=>{for(let J=U;J<E.length;J++)We(E[J],T,k,L,B)},x=E=>{if(E.shapeFlag&6)return x(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=m(E.anchor||E.el),k=T&&T[Fv];return k?m(k):T};let ee=!1;const Y=(E,T,k)=>{E==null?T._vnode&&We(T._vnode,null,null,!0):A(T._vnode||null,E,T,null,null,null,k),T._vnode=E,ee||(ee=!0,Gh(),zp(),ee=!1)},se={p:A,um:We,m:Qt,r:Ke,mt:rt,mc:y,pc:Ie,pbc:I,n:x,o:t};return{render:Y,hydrate:void 0,createApp:l0(Y)}}function Rl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function y0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function hm(t,e,n=!1){const r=t.children,s=e.children;if(me(r)&&me(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=rr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&hm(o,l)),l.type===ka&&(l.el=o.el)}}function v0(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function dm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dm(e)}function td(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const E0=Symbol.for("v-scx"),w0=()=>sn(E0);function mn(t,e,n){return fm(t,e,n)}function fm(t,e,n=$e){const{immediate:r,deep:s,flush:i,once:o}=n,l=Pt({},n),c=e&&r||!e&&i!=="post";let u;if(Pi){if(i==="sync"){const _=w0();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=pn,_.resume=pn,_.pause=pn,_}}const d=mt;l.call=(_,R,A)=>vn(_,d,R,A);let p=!1;i==="post"?l.scheduler=_=>{qt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,R)=>{R?_():Kc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=xv(t,e,l);return Pi&&(u?u.push(m):c&&m()),m}function T0(t,e,n){const r=this.proxy,s=nt(t)?t.includes(".")?pm(r,t):()=>r[t]:t.bind(r,r);let i;ve(e)?i=e:(i=e.handler,n=e);const o=Hi(this),l=fm(s,i.bind(r),n);return o(),l}function pm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const I0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Zt(e)}Modifiers`]||t[`${Ar(e)}Modifiers`];function b0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||$e;let s=n;const i=e.startsWith("update:"),o=i&&I0(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>nt(d)?d.trim():d)),o.number&&(s=n.map(Kl)));let l,c=r[l=wl(e)]||r[l=wl(Zt(e))];!c&&i&&(c=r[l=wl(Ar(e))]),c&&vn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,vn(u,t,6,s)}}function mm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ve(t)){const c=u=>{const d=mm(u,e,!0);d&&(l=!0,Pt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(ze(t)&&r.set(t,null),null):(me(i)?i.forEach(c=>o[c]=null):Pt(o,i),ze(t)&&r.set(t,o),o)}function Pa(t,e){return!t||!wa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(t,e[0].toLowerCase()+e.slice(1))||Ve(t,Ar(e))||Ve(t,e))}function nd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:R,inheritAttrs:A}=t,P=Yo(t);let D,V;try{if(n.shapeFlag&4){const z=s||r,Z=z;D=fn(u.call(Z,z,d,p,_,m,R)),V=l}else{const z=e;D=fn(z.length>1?z(p,{attrs:l,slots:o,emit:c}):z(p,null)),V=e.props?l:A0(l)}}catch(z){mi.length=0,Ra(z,t,1),D=pe(gr)}let M=D;if(V&&A!==!1){const z=Object.keys(V),{shapeFlag:Z}=M;z.length&&Z&7&&(i&&z.some(Mc)&&(V=S0(V,i)),M=Is(M,V,!1,!0))}return n.dirs&&(M=Is(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Gc(M,n.transition),D=M,Yo(P),D}const A0=t=>{let e;for(const n in t)(n==="class"||n==="style"||wa(n))&&((e||(e={}))[n]=t[n]);return e},S0=(t,e)=>{const n={};for(const r in t)(!Mc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function R0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?rd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Pa(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?rd(r,o,u):!0:!!o;return!1}function rd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Pa(n,i))return!0}return!1}function C0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const gm=t=>t.__isSuspense;function P0(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):Uv(t)}const Je=Symbol.for("v-fgt"),ka=Symbol.for("v-txt"),gr=Symbol.for("v-cmt"),Mo=Symbol.for("v-stc"),mi=[];let zt=null;function q(t=!1){mi.push(zt=t?null:[])}function k0(){mi.pop(),zt=mi[mi.length-1]||null}let Ri=1;function sd(t,e=!1){Ri+=t,t<0&&zt&&e&&(zt.hasOnce=!0)}function _m(t){return t.dynamicChildren=Ri>0?zt||fs:null,k0(),Ri>0&&zt&&zt.push(t),t}function Q(t,e,n,r,s,i){return _m(j(t,e,n,r,s,i,!0))}function qe(t,e,n,r,s){return _m(pe(t,e,n,r,s,!0))}function Ci(t){return t?t.__v_isVNode===!0:!1}function si(t,e){return t.type===e.type&&t.key===e.key}const ym=({key:t})=>t??null,xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||Xe(t)||ve(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,r=0,s=null,i=t===Je?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ym(e),ref:e&&xo(e),scopeId:Kp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return l?(Yc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=nt(n)?8:16),Ri>0&&!o&&zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zt.push(c),c}const pe=N0;function N0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Xv)&&(t=gr),Ci(t)){const l=Is(t,e,!0);return n&&Yc(l,n),Ri>0&&!i&&zt&&(l.shapeFlag&6?zt[zt.indexOf(t)]=l:zt.push(l)),l.patchFlag=-2,l}if(j0(t)&&(t=t.__vccOpts),e){e=D0(e);let{class:l,style:c}=e;l&&!nt(l)&&(e.class=st(l)),ze(c)&&(Hc(c)&&!me(c)&&(c=Pt({},c)),e.style=Hn(c))}const o=nt(t)?1:gm(t)?128:Bv(t)?64:ze(t)?4:ve(t)?2:0;return j(t,e,n,r,s,o,i,!0)}function D0(t){return t?Hc(t)||sm(t)?Pt({},t):t:null}function Is(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?O0(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ym(u),ref:e&&e.ref?n&&i?me(i)?i.concat(xo(e)):[i,xo(e)]:xo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Is(t.ssContent),ssFallback:t.ssFallback&&Is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Gc(d,c.clone(d)),d}function Ht(t=" ",e=0){return pe(ka,null,t,e)}function vm(t,e){const n=pe(Mo,null,t);return n.staticCount=e,n}function Te(t="",e=!1){return e?(q(),qe(gr,null,t)):pe(gr,null,t)}function fn(t){return t==null||typeof t=="boolean"?pe(gr):me(t)?pe(Je,null,t.slice()):Ci(t)?rr(t):pe(ka,null,String(t))}function rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Is(t)}function Yc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Yc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!sm(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[Ht(e)]):n=8);t.children=e,t.shapeFlag|=n}function O0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=st([e.class,r.class]));else if(s==="style")e.style=Hn([e.style,r.style]);else if(wa(s)){const i=e[s],o=r[s];o&&i!==o&&!(me(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function un(t,e,n,r=null){vn(t,e,7,[n,r])}const V0=tm();let M0=0;function x0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||V0,i={uid:M0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:om(r,s),emitsOptions:mm(r,s),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=b0.bind(null,i),t.ce&&t.ce(i),i}let mt=null,ea,nc;{const t=Aa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ea=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),nc=e("__VUE_SSR_SETTERS__",n=>Pi=n)}const Hi=t=>{const e=mt;return ea(t),t.scope.on(),()=>{t.scope.off(),ea(e)}},id=()=>{mt&&mt.scope.off(),ea(null)};function Em(t){return t.vnode.shapeFlag&4}let Pi=!1;function L0(t,e=!1,n=!1){e&&nc(e);const{props:r,children:s}=t.vnode,i=Em(t);u0(t,r,i,e),p0(t,s,n);const o=i?$0(t,e):void 0;return e&&nc(!1),o}function $0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,t0);const{setup:r}=n;if(r){Sr();const s=t.setupContext=r.length>1?F0(t):null,i=Hi(t),o=ji(r,t,0,[t.props,s]),l=mp(o);if(Rr(),i(),(l||t.sp)&&!_s(t)&&Gp(t),l){if(o.then(id,id),e)return o.then(c=>{od(t,c)}).catch(c=>{Ra(c,t,0)});t.asyncDep=o}else od(t,o)}else wm(t)}function od(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=jp(e)),wm(t)}function wm(t,e,n){const r=t.type;t.render||(t.render=r.render||pn);{const s=Hi(t);Sr();try{n0(t)}finally{Rr(),s()}}}const U0={get(t,e){return bt(t,"get",""),t[e]}};function F0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,U0),slots:t.slots,emit:t.emit,expose:e}}function Na(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jp(zc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pi)return pi[n](t)},has(e,n){return n in e||n in pi}})):t.proxy}function B0(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function j0(t){return ve(t)&&"__vccOpts"in t}const Ue=(t,e)=>Vv(t,e,Pi);function Tm(t,e,n){const r=arguments.length;return r===2?ze(e)&&!me(e)?Ci(e)?pe(t,null,[e]):pe(t,e):pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ci(n)&&(n=[n]),pe(t,e,n))}const q0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rc;const ad=typeof window<"u"&&window.trustedTypes;if(ad)try{rc=ad.createPolicy("vue",{createHTML:t=>t})}catch{}const Im=rc?t=>rc.createHTML(t):t=>t,H0="http://www.w3.org/2000/svg",z0="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,ld=Cn&&Cn.createElement("template"),W0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Cn.createElementNS(H0,t):e==="mathml"?Cn.createElementNS(z0,t):n?Cn.createElement(t,{is:n}):Cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ld.innerHTML=Im(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=ld.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},K0=Symbol("_vtc");function G0(t,e,n){const r=t[K0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cd=Symbol("_vod"),Q0=Symbol("_vsh"),J0=Symbol(""),Y0=/(^|;)\s*display\s*:/;function X0(t,e,n){const r=t.style,s=nt(n);let i=!1;if(n&&!s){if(e)if(nt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Lo(r,l,"")}else for(const o in e)n[o]==null&&Lo(r,o,"");for(const o in n)o==="display"&&(i=!0),Lo(r,o,n[o])}else if(s){if(e!==n){const o=r[J0];o&&(n+=";"+o),r.cssText=n,i=Y0.test(n)}}else e&&t.removeAttribute("style");cd in t&&(t[cd]=i?r.display:"",t[Q0]&&(r.display="none"))}const ud=/\s*!important$/;function Lo(t,e,n){if(me(n))n.forEach(r=>Lo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Z0(t,e);ud.test(n)?t.setProperty(Ar(r),n.replace(ud,""),"important"):t[r]=n}}const hd=["Webkit","Moz","ms"],Cl={};function Z0(t,e){const n=Cl[e];if(n)return n;let r=Zt(e);if(r!=="filter"&&r in t)return Cl[e]=r;r=ba(r);for(let s=0;s<hd.length;s++){const i=hd[s]+r;if(i in t)return Cl[e]=i}return e}const dd="http://www.w3.org/1999/xlink";function fd(t,e,n,r,s,i=ov(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(dd,e.slice(6,e.length)):t.setAttributeNS(dd,e,n):n==null||i&&!vp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":qn(n)?String(n):n)}function pd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Im(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=vp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function as(t,e,n,r){t.addEventListener(e,n,r)}function eE(t,e,n,r){t.removeEventListener(e,n,r)}const md=Symbol("_vei");function tE(t,e,n,r,s=null){const i=t[md]||(t[md]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=nE(e);if(r){const u=i[e]=iE(r,s);as(t,l,u,c)}else o&&(eE(t,l,o,c),i[e]=void 0)}}const gd=/(?:Once|Passive|Capture)$/;function nE(t){let e;if(gd.test(t)){e={};let r;for(;r=t.match(gd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ar(t.slice(2)),e]}let Pl=0;const rE=Promise.resolve(),sE=()=>Pl||(rE.then(()=>Pl=0),Pl=Date.now());function iE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;vn(oE(r,n.value),e,5,[r])};return n.value=t,n.attached=sE(),n}function oE(t,e){if(me(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _d=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,aE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?G0(t,r,o):e==="style"?X0(t,n,r):wa(e)?Mc(e)||tE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lE(t,e,r,o))?(pd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!nt(r))?pd(t,Zt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fd(t,e,r,o))};function lE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&_d(e)&&ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _d(e)&&nt(n)?!1:e in t}const yd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return me(e)?n=>Oo(e,n):e};function cE(t){t.target.composing=!0}function vd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kl=Symbol("_assign"),bs={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[kl]=yd(s);const i=r||s.props&&s.props.type==="number";as(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Kl(l)),t[kl](l)}),n&&as(t,"change",()=>{t.value=t.value.trim()}),e||(as(t,"compositionstart",cE),as(t,"compositionend",vd),as(t,"change",vd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[kl]=yd(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Kl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},uE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},hE=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Ar(s.key);if(e.some(o=>o===i||uE[o]===i))return t(s)})},dE=Pt({patchProp:aE},W0);let Ed;function fE(){return Ed||(Ed=g0(dE))}const pE=(...t)=>{const e=fE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=gE(r);if(!s)return;const i=e._component;!ve(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,mE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function mE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function gE(t){return nt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bm;const Da=t=>bm=t,Am=Symbol();function sc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var gi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(gi||(gi={}));function _E(){const t=Ip(!0),e=t.run(()=>re({}));let n=[],r=[];const s=zc({install(i){Da(s),s._a=i,i.provide(Am,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Sm=()=>{};function wd(t,e,n,r=Sm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&bp()&&av(s),s}function is(t,...e){t.slice().forEach(n=>{n(...e)})}const yE=t=>t(),Td=Symbol(),Nl=Symbol();function ic(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];sc(s)&&sc(r)&&t.hasOwnProperty(n)&&!Xe(r)&&!ur(r)?t[n]=ic(s,r):t[n]=r}return t}const vE=Symbol();function EE(t){return!sc(t)||!t.hasOwnProperty(vE)}const{assign:tr}=Object;function wE(t){return!!(Xe(t)&&t.effect)}function TE(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const d=kv(n.state.value[t]);return tr(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=zc(Ue(()=>{Da(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return c=Rm(t,u,e,n,r,!0),c}function Rm(t,e,n={},r,s,i){let o;const l=tr({actions:{}},n),c={deep:!0};let u,d,p=[],m=[],_;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),re({});let A;function P(y){let v;u=d=!1,typeof y=="function"?(y(r.state.value[t]),v={type:gi.patchFunction,storeId:t,events:_}):(ic(r.state.value[t],y),v={type:gi.patchObject,payload:y,storeId:t,events:_});const I=A=Symbol();Wc().then(()=>{A===I&&(u=!0)}),d=!0,is(p,v,r.state.value[t])}const D=i?function(){const{state:v}=n,I=v?v():{};this.$patch(S=>{tr(S,I)})}:Sm;function V(){o.stop(),p=[],m=[],r._s.delete(t)}const M=(y,v="")=>{if(Td in y)return y[Nl]=v,y;const I=function(){Da(r);const S=Array.from(arguments),C=[],w=[];function rt(de){C.push(de)}function xt(de){w.push(de)}is(m,{args:S,name:I[Nl],store:Z,after:rt,onError:xt});let Fe;try{Fe=y.apply(this&&this.$id===t?this:Z,S)}catch(de){throw is(w,de),de}return Fe instanceof Promise?Fe.then(de=>(is(C,de),de)).catch(de=>(is(w,de),Promise.reject(de))):(is(C,Fe),Fe)};return I[Td]=!0,I[Nl]=v,I},z={_p:r,$id:t,$onAction:wd.bind(null,m),$patch:P,$reset:D,$subscribe(y,v={}){const I=wd(p,y,v.detached,()=>S()),S=o.run(()=>mn(()=>r.state.value[t],C=>{(v.flush==="sync"?d:u)&&y({storeId:t,type:gi.direct,events:_},C)},tr({},c,v)));return I},$dispose:V},Z=Bi(z);r._s.set(t,Z);const b=(r._a&&r._a.runWithContext||yE)(()=>r._e.run(()=>(o=Ip()).run(()=>e({action:M}))));for(const y in b){const v=b[y];if(Xe(v)&&!wE(v)||ur(v))i||(R&&EE(v)&&(Xe(v)?v.value=R[y]:ic(v,R[y])),r.state.value[t][y]=v);else if(typeof v=="function"){const I=M(v,y);b[y]=I,l.actions[y]=v}}return tr(Z,b),tr(Ne(Z),b),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:y=>{P(v=>{tr(v,y)})}}),r._p.forEach(y=>{tr(Z,o.run(()=>y({store:Z,app:r._a,pinia:r,options:l})))}),R&&i&&n.hydrate&&n.hydrate(Z.$state,R),u=!0,d=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function zi(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=c0();return o=o||(c?sn(Am,null):null),o&&Da(o),o=bm,o._s.has(t)||(s?Rm(t,e,r,o):TE(t,r,o)),o._s.get(t)}return i.$id=t,i}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ls=typeof document<"u";function Cm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function IE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Cm(t.default)}const Oe=Object.assign;function Dl(t,e){const n={};for(const r in e){const s=e[r];n[r]=an(s)?s.map(t):t(s)}return n}const _i=()=>{},an=Array.isArray,Pm=/#/g,bE=/&/g,AE=/\//g,SE=/=/g,RE=/\?/g,km=/\+/g,CE=/%5B/g,PE=/%5D/g,Nm=/%5E/g,kE=/%60/g,Dm=/%7B/g,NE=/%7C/g,Om=/%7D/g,DE=/%20/g;function Xc(t){return encodeURI(""+t).replace(NE,"|").replace(CE,"[").replace(PE,"]")}function OE(t){return Xc(t).replace(Dm,"{").replace(Om,"}").replace(Nm,"^")}function oc(t){return Xc(t).replace(km,"%2B").replace(DE,"+").replace(Pm,"%23").replace(bE,"%26").replace(kE,"`").replace(Dm,"{").replace(Om,"}").replace(Nm,"^")}function VE(t){return oc(t).replace(SE,"%3D")}function ME(t){return Xc(t).replace(Pm,"%23").replace(RE,"%3F")}function xE(t){return t==null?"":ME(t).replace(AE,"%2F")}function ki(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const LE=/\/$/,$E=t=>t.replace(LE,"");function Ol(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=jE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ki(o)}}function UE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Id(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function FE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&As(e.matched[r],n.matched[s])&&Vm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!BE(t[n],e[n]))return!1;return!0}function BE(t,e){return an(t)?bd(t,e):an(e)?bd(e,t):t===e}function bd(t,e){return an(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ni;(function(t){t.pop="pop",t.push="push"})(Ni||(Ni={}));var yi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yi||(yi={}));function qE(t){if(!t)if(ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$E(t)}const HE=/^[^#]+#/;function zE(t,e){return t.replace(HE,"#")+e}function WE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Oa=()=>({left:window.scrollX,top:window.scrollY});function KE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=WE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ad(t,e){return(history.state?history.state.position-e:-1)+t}const ac=new Map;function GE(t,e){ac.set(t,e)}function QE(t){const e=ac.get(t);return ac.delete(t),e}let JE=()=>location.protocol+"//"+location.host;function Mm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Id(c,"")}return Id(n,t)+r+s}function YE(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=Mm(t,location),R=n.value,A=e.value;let P=0;if(m){if(n.value=_,e.value=m,o&&o===R){o=null;return}P=A?m.position-A.position:0}else r(_);s.forEach(D=>{D(n.value,R,{delta:P,type:Ni.pop,direction:P?P>0?yi.forward:yi.back:yi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const _=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:Oa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Sd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Oa():null}}function XE(t){const{history:e,location:n}=window,r={value:Mm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:JE()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,u){const d=Oe({},e.state,Sd(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=Oe({},s.value,e.state,{forward:c,scroll:Oa()});i(d.current,d,!0);const p=Oe({},Sd(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function ZE(t){t=qE(t);const e=XE(t),n=YE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:zE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ew(t){return typeof t=="string"||t&&typeof t=="object"}function xm(t){return typeof t=="string"||typeof t=="symbol"}const Lm=Symbol("");var Rd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rd||(Rd={}));function Ss(t,e){return Oe(new Error,{type:t,[Lm]:!0},e)}function Rn(t,e){return t instanceof Error&&Lm in t&&(e==null||!!(t.type&e))}const Cd="[^/]+?",tw={sensitive:!1,strict:!1,start:!0,end:!0},nw=/[.+*?^${}()[\]/\\]/g;function rw(t,e){const n=Oe({},tw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(nw,"\\$&"),_+=40;else if(m.type===1){const{value:R,repeatable:A,optional:P,regexp:D}=m;i.push({name:R,repeatable:A,optional:P});const V=D||Cd;if(V!==Cd){_+=10;try{new RegExp(`(${V})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${R}" (${V}): `+z.message)}}let M=A?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;p||(M=P&&u.length<2?`(?:/${M})`:"/"+M),P&&(M+="?"),s+=M,_+=20,P&&(_+=-8),A&&(_+=-20),V===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",R=i[m-1];p[R.name]=_&&R.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:R,repeatable:A,optional:P}=_,D=R in u?u[R]:"";if(an(D)&&!A)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const V=an(D)?D.join("/"):D;if(!V)if(P)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);d+=V}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function sw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $m(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=sw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pd(r))return 1;if(Pd(s))return-1}return s.length-r.length}function Pd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iw={type:0,value:""},ow=/[a-zA-Z0-9_]/;function aw(t){if(!t)return[[]];if(t==="/")return[[iw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:ow.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function lw(t,e,n){const r=rw(aw(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function cw(t,e){const n=[],r=new Map;e=Od({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const R=!_,A=Nd(p);A.aliasOf=_&&_.record;const P=Od(e,p),D=[A];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of z)D.push(Nd(Oe({},A,{components:_?_.record.components:A.components,path:Z,aliasOf:_?_.record:A})))}let V,M;for(const z of D){const{path:Z}=z;if(m&&Z[0]!=="/"){const ae=m.record.path,b=ae[ae.length-1]==="/"?"":"/";z.path=m.record.path+(Z&&b+Z)}if(V=lw(z,m,P),_?_.alias.push(V):(M=M||V,M!==V&&M.alias.push(V),R&&p.name&&!Dd(V)&&o(p.name)),Um(V)&&c(V),A.children){const ae=A.children;for(let b=0;b<ae.length;b++)i(ae[b],V,_&&_.children[b])}_=_||V}return M?()=>{o(M)}:_i}function o(p){if(xm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=dw(p,n);n.splice(m,0,p),p.record.name&&!Dd(p)&&r.set(p.record.name,p)}function u(p,m){let _,R={},A,P;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Ss(1,{location:p});P=_.record.name,R=Oe(kd(m.params,_.keys.filter(M=>!M.optional).concat(_.parent?_.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),p.params&&kd(p.params,_.keys.map(M=>M.name))),A=_.stringify(R)}else if(p.path!=null)A=p.path,_=n.find(M=>M.re.test(A)),_&&(R=_.parse(A),P=_.record.name);else{if(_=m.name?r.get(m.name):n.find(M=>M.re.test(m.path)),!_)throw Ss(1,{location:p,currentLocation:m});P=_.record.name,R=Oe({},m.params,p.params),A=_.stringify(R)}const D=[];let V=_;for(;V;)D.unshift(V.record),V=V.parent;return{name:P,path:A,params:R,matched:D,meta:hw(D)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function kd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Nd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:uw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function uw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Dd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hw(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Od(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function dw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$m(t,e[i])<0?r=i:n=i+1}const s=fw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function fw(t){let e=t;for(;e=e.parent;)if(Um(e)&&$m(t,e)===0)return e}function Um({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function pw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(km," "),o=i.indexOf("="),l=ki(o<0?i:i.slice(0,o)),c=o<0?null:ki(i.slice(o+1));if(l in e){let u=e[l];an(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Vd(t){let e="";for(let n in t){const r=t[n];if(n=VE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(r)?r.map(i=>i&&oc(i)):[r&&oc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function mw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=an(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const gw=Symbol(""),Md=Symbol(""),Va=Symbol(""),Fm=Symbol(""),lc=Symbol("");function ii(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Ss(4,{from:n,to:e})):m instanceof Error?c(m):ew(m)?c(Ss(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Vl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Cm(c)){const d=(c.__vccOpts||c)[e];d&&i.push(sr(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=IE(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&sr(_,n,r,o,l,s)()}))}}return i}function xd(t){const e=sn(Va),n=sn(Fm),r=Ue(()=>{const c=ms(t.to);return e.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(As.bind(null,d));if(m>-1)return m;const _=Ld(c[u-2]);return u>1&&Ld(d)===_&&p[p.length-1].path!==_?p.findIndex(As.bind(null,c[u-2])):m}),i=Ue(()=>s.value>-1&&ww(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&Vm(n.params,r.value.params));function l(c={}){if(Ew(c)){const u=e[ms(t.replace)?"replace":"push"](ms(t.to)).catch(_i);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function _w(t){return t.length===1?t[0]:t}const yw=De({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xd,setup(t,{slots:e}){const n=Bi(xd(t)),{options:r}=sn(Va),s=Ue(()=>({[$d(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$d(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&_w(e.default(n));return t.custom?i:Tm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),vw=yw;function Ew(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ww(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!an(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ld(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $d=(t,e,n)=>t??e??n,Tw=De({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=sn(lc),s=Ue(()=>t.route||r.value),i=sn(Md,0),o=Ue(()=>{let u=ms(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Ue(()=>s.value.matched[o.value]);Vo(Md,Ue(()=>o.value+1)),Vo(gw,l),Vo(lc,s);const c=re();return mn(()=>[c.value,l.value,t.name],([u,d,p],[m,_,R])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!As(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Ud(n.default,{Component:m,route:u});const _=p.props[d],R=_?_===!0?u.params:typeof _=="function"?_(u):_:null,P=Tm(m,Oe({},R,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Ud(n.default,{Component:P,route:u})||P}}});function Ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Iw=Tw;function bw(t){const e=cw(t.routes,t),n=t.parseQuery||pw,r=t.stringifyQuery||Vd,s=t.history,i=ii(),o=ii(),l=ii(),c=Rv(Zn);let u=Zn;ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Dl.bind(null,x=>""+x),p=Dl.bind(null,xE),m=Dl.bind(null,ki);function _(x,ee){let Y,se;return xm(x)?(Y=e.getRecordMatcher(x),se=ee):se=x,e.addRoute(se,Y)}function R(x){const ee=e.getRecordMatcher(x);ee&&e.removeRoute(ee)}function A(){return e.getRoutes().map(x=>x.record)}function P(x){return!!e.getRecordMatcher(x)}function D(x,ee){if(ee=Oe({},ee||c.value),typeof x=="string"){const k=Ol(n,x,ee.path),L=e.resolve({path:k.path},ee),B=s.createHref(k.fullPath);return Oe(k,L,{params:m(L.params),hash:ki(k.hash),redirectedFrom:void 0,href:B})}let Y;if(x.path!=null)Y=Oe({},x,{path:Ol(n,x.path,ee.path).path});else{const k=Oe({},x.params);for(const L in k)k[L]==null&&delete k[L];Y=Oe({},x,{params:p(k)}),ee.params=p(ee.params)}const se=e.resolve(Y,ee),Pe=x.hash||"";se.params=d(m(se.params));const E=UE(r,Oe({},x,{hash:OE(Pe),path:se.path})),T=s.createHref(E);return Oe({fullPath:E,hash:Pe,query:r===Vd?mw(x.query):x.query||{}},se,{redirectedFrom:void 0,href:T})}function V(x){return typeof x=="string"?Ol(n,x,c.value.path):Oe({},x)}function M(x,ee){if(u!==x)return Ss(8,{from:ee,to:x})}function z(x){return b(x)}function Z(x){return z(Oe(V(x),{replace:!0}))}function ae(x){const ee=x.matched[x.matched.length-1];if(ee&&ee.redirect){const{redirect:Y}=ee;let se=typeof Y=="function"?Y(x):Y;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=V(se):{path:se},se.params={}),Oe({query:x.query,hash:x.hash,params:se.path!=null?{}:x.params},se)}}function b(x,ee){const Y=u=D(x),se=c.value,Pe=x.state,E=x.force,T=x.replace===!0,k=ae(Y);if(k)return b(Oe(V(k),{state:typeof k=="object"?Oe({},Pe,k.state):Pe,force:E,replace:T}),ee||Y);const L=Y;L.redirectedFrom=ee;let B;return!E&&FE(r,se,Y)&&(B=Ss(16,{to:L,from:se}),Qt(se,se,!0,!1)),(B?Promise.resolve(B):I(L,se)).catch(U=>Rn(U)?Rn(U,2)?U:en(U):Ie(U,L,se)).then(U=>{if(U){if(Rn(U,2))return b(Oe({replace:T},V(U.to),{state:typeof U.to=="object"?Oe({},Pe,U.to.state):Pe,force:E}),ee||L)}else U=C(L,se,!0,T,Pe);return S(L,se,U),U})}function y(x,ee){const Y=M(x,ee);return Y?Promise.reject(Y):Promise.resolve()}function v(x){const ee=Gn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(x):x()}function I(x,ee){let Y;const[se,Pe,E]=Aw(x,ee);Y=Vl(se.reverse(),"beforeRouteLeave",x,ee);for(const k of se)k.leaveGuards.forEach(L=>{Y.push(sr(L,x,ee))});const T=y.bind(null,x,ee);return Y.push(T),Lt(Y).then(()=>{Y=[];for(const k of i.list())Y.push(sr(k,x,ee));return Y.push(T),Lt(Y)}).then(()=>{Y=Vl(Pe,"beforeRouteUpdate",x,ee);for(const k of Pe)k.updateGuards.forEach(L=>{Y.push(sr(L,x,ee))});return Y.push(T),Lt(Y)}).then(()=>{Y=[];for(const k of E)if(k.beforeEnter)if(an(k.beforeEnter))for(const L of k.beforeEnter)Y.push(sr(L,x,ee));else Y.push(sr(k.beforeEnter,x,ee));return Y.push(T),Lt(Y)}).then(()=>(x.matched.forEach(k=>k.enterCallbacks={}),Y=Vl(E,"beforeRouteEnter",x,ee,v),Y.push(T),Lt(Y))).then(()=>{Y=[];for(const k of o.list())Y.push(sr(k,x,ee));return Y.push(T),Lt(Y)}).catch(k=>Rn(k,8)?k:Promise.reject(k))}function S(x,ee,Y){l.list().forEach(se=>v(()=>se(x,ee,Y)))}function C(x,ee,Y,se,Pe){const E=M(x,ee);if(E)return E;const T=ee===Zn,k=ls?history.state:{};Y&&(se||T?s.replace(x.fullPath,Oe({scroll:T&&k&&k.scroll},Pe)):s.push(x.fullPath,Pe)),c.value=x,Qt(x,ee,Y,T),en()}let w;function rt(){w||(w=s.listen((x,ee,Y)=>{if(!cn.listening)return;const se=D(x),Pe=ae(se);if(Pe){b(Oe(Pe,{replace:!0,force:!0}),se).catch(_i);return}u=se;const E=c.value;ls&&GE(Ad(E.fullPath,Y.delta),Oa()),I(se,E).catch(T=>Rn(T,12)?T:Rn(T,2)?(b(Oe(V(T.to),{force:!0}),se).then(k=>{Rn(k,20)&&!Y.delta&&Y.type===Ni.pop&&s.go(-1,!1)}).catch(_i),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),Ie(T,se,E))).then(T=>{T=T||C(se,E,!1),T&&(Y.delta&&!Rn(T,8)?s.go(-Y.delta,!1):Y.type===Ni.pop&&Rn(T,20)&&s.go(-1,!1)),S(se,E,T)}).catch(_i)}))}let xt=ii(),Fe=ii(),de;function Ie(x,ee,Y){en(x);const se=Fe.list();return se.length?se.forEach(Pe=>Pe(x,ee,Y)):console.error(x),Promise.reject(x)}function Bt(){return de&&c.value!==Zn?Promise.resolve():new Promise((x,ee)=>{xt.add([x,ee])})}function en(x){return de||(de=!x,rt(),xt.list().forEach(([ee,Y])=>x?Y(x):ee()),xt.reset()),x}function Qt(x,ee,Y,se){const{scrollBehavior:Pe}=t;if(!ls||!Pe)return Promise.resolve();const E=!Y&&QE(Ad(x.fullPath,0))||(se||!Y)&&history.state&&history.state.scroll||null;return Wc().then(()=>Pe(x,ee,E)).then(T=>T&&KE(T)).catch(T=>Ie(T,x,ee))}const We=x=>s.go(x);let Ke;const Gn=new Set,cn={currentRoute:c,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:A,resolve:D,options:t,push:z,replace:Z,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Fe.add,isReady:Bt,install(x){const ee=this;x.component("RouterLink",vw),x.component("RouterView",Iw),x.config.globalProperties.$router=ee,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>ms(c)}),ls&&!Ke&&c.value===Zn&&(Ke=!0,z(s.location).catch(Pe=>{}));const Y={};for(const Pe in Zn)Object.defineProperty(Y,Pe,{get:()=>c.value[Pe],enumerable:!0});x.provide(Va,ee),x.provide(Fm,Up(Y)),x.provide(lc,c);const se=x.unmount;Gn.add(x),x.unmount=function(){Gn.delete(x),Gn.size<1&&(u=Zn,w&&w(),w=null,c.value=Zn,Ke=!1,de=!1),se()}}};function Lt(x){return x.reduce((ee,Y)=>ee.then(()=>v(Y)),Promise.resolve())}return cn}function Aw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>As(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>As(u,c))||s.push(c))}return[n,r,s]}function xs(){return sn(Va)}const Sw=De({props:{color:{type:String,default:"white"},text:{type:String,default:""}},setup(t){return{iconHomeStyle:Ue(()=>({"--icon-color":t.color}))}}}),xe=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Rw={key:0,class:"text"};function Cw(t,e,n,r,s,i){return q(),Q("div",{class:"icon-home",style:Hn(t.iconHomeStyle)},[e[0]||(e[0]=j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[j("path",{d:"M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"})],-1)),t.$props.text&&t.$props.text.length>0?(q(),Q("div",Rw,we(t.$props.text),1)):Te("",!0)],4)}const Pw=xe(Sw,[["render",Cw],["__scopeId","data-v-c1df092f"]]),kw=De({props:{color:{type:String,default:"white"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconLightSwitchStyle:Ue(()=>({"--icon-color":t.color,fontSize:t.fontSize}))}}}),Nw={fill:"#000000",viewBox:"0 0 64 64","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},xmlns:"http://www.w3.org/2000/svg"},Dw={key:0,class:"text"};function Ow(t,e,n,r,s,i){return q(),Q("div",{class:"icon-light-switch",style:Hn(t.iconLightSwitchStyle)},[(q(),Q("svg",Nw,e[0]||(e[0]=[vm('<g stroke-width="0" data-v-be2209a6></g><g stroke-linecap="round" stroke-linejoin="round" data-v-be2209a6></g><g data-v-be2209a6><rect x="0" y="-320" width="1280" height="800" style="fill:none;" data-v-be2209a6></rect><g transform="matrix(1.3258707,0,0,1.3751367,-10.338119,-12.63741)" data-v-be2209a6><path d="m 25.022,17.099 c 2.715,-0.012 12.015,0.058 13.952,0 22.08,-0.662 22.961,30.643 0,30.023 -3.488,0.015 -12.792,-0.064 -13.952,0 C 14.663,47.694 7.982,40.3 8.025,31.85 8.067,23.399 15.555,16.13 25.022,17.099 Z M 32.904,32.11 C 33.047,26.747 28.24,22.014 22.889,22.095 c -7.31,0.111 -10.482,6.7 -10.016,10.947 0.625,5.691 5.193,9.06 10.016,9.084 5.536,0.026 9.862,-4.308 10.015,-10.016 z" style="fill-rule:nonzero;" data-v-be2209a6></path></g></g>',3)]))),t.$props.text&&t.$props.text.length>0?(q(),Q("div",Dw,we(t.$props.text),1)):Te("",!0)],4)}const Bm=xe(kw,[["render",Ow],["__scopeId","data-v-be2209a6"]]),Vw=De({props:{color:{type:String,default:"white"},strokeColor:{type:String,default:"black"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconScheduleStyle:Ue(()=>({"--icon-color":t.color,"--icon-stroke-color":t.strokeColor,fontSize:t.fontSize}))}}}),Mw={key:0,class:"text"};function xw(t,e,n,r,s,i){return q(),Q("div",{class:"icon-schedule",style:Hn(t.iconScheduleStyle)},[e[0]||(e[0]=vm('<svg viewBox="0 0 24 24" stroke-width="3" stroke="#000000" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-604fa35c><path d="M 14.020182,21.685362 H 1.8335071 A 1.095136,1.0848345 0 0 1 0.74275167,20.622224 V 3.3169452 A 1.0907555,1.0804951 0 0 1 1.8335071,2.2364501 H 19.285596 a 1.0907555,1.0804951 0 0 1 1.090755,1.0804951 v 9.7201178" style="stroke-width:1.30797;" data-v-604fa35c></path><line x1="0.74275166" y1="7.0097213" x2="20.376347" y2="7.0097213" style="stroke-width:1.30797;" data-v-604fa35c></line><line x1="5.1714816" y1="2.2364504" x2="5.1714816" y2="0.066781186" style="stroke-width:1.30797;" data-v-604fa35c></line><line x1="15.667263" y1="2.2364504" x2="15.667263" y2="0.066781186" style="stroke-width:1.30797;" data-v-604fa35c></line><ellipse cx="17.769928" cy="17.775614" rx="5.4450164" ry="5.3937974" style="stroke-width:1.30797;" data-v-604fa35c></ellipse><polyline points="45.22 36.7 45.22 45.82 49.57 49.16" transform="matrix(0.43805442,0,0,0.43393378,-2.0388941,-1.9423323)" data-v-604fa35c></polyline></svg>',1)),t.$props.text&&t.$props.text.length>0?(q(),Q("div",Mw,we(t.$props.text),1)):Te("",!0)],4)}const jm=xe(Vw,[["render",xw],["__scopeId","data-v-604fa35c"]]),Lw=De({name:"task-bar",components:{IconSchedule:jm,IconLightSwitch:Bm,IconHome:Pw},setup(){const t=xs();Cr(()=>{e("relays")});function e(n){t.push({name:n})}return{}}}),$w={class:"task-bar"};function Uw(t,e,n,r,s,i){const o=_e("icon-home"),l=_e("router-link"),c=_e("icon-light-switch"),u=_e("icon-schedule");return q(),Q("div",$w,[pe(l,{to:"/home",class:"task"},{default:Mn(()=>[pe(o,{text:"Home"})]),_:1}),pe(l,{to:"/relays",class:"task"},{default:Mn(()=>[pe(c,{text:"Relays"})]),_:1}),pe(l,{to:"/schedules",class:"task"},{default:Mn(()=>[pe(u,{text:"Schedules"})]),_:1})])}const Fw=xe(Lw,[["render",Uw],["__scopeId","data-v-a291f81d"]]),Bw=De({props:{spinnerSize:{type:String,default:"30px"},withText:{type:Boolean,default:!1}},setup(){return{}}}),jw={class:"spinner"},qw={key:0,class:"text"};function Hw(t,e,n,r,s,i){return q(),Q("div",jw,[j("div",{class:"spinner-inner",style:Hn({"--spinnerSize":t.spinnerSize})},null,4),t.withText?(q(),Q("div",qw,"Laden...")):Te("",!0)])}const Ma=xe(Bw,[["render",Hw],["__scopeId","data-v-8cb8f775"]]),zw=De({components:{Spinner:Ma},props:{text:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},emits:["onButtonClicked"],setup(t,e){function n(){e.emit("onButtonClicked")}return{onClicked:n}}}),Ww={key:1,class:"button-content"};function Kw(t,e,n,r,s,i){const o=_e("spinner");return q(),Q("div",{class:st(["button-default",{"is-loading":t.isLoading}]),tabindex:"0",onClick:e[0]||(e[0]=(...l)=>t.onClicked&&t.onClicked(...l)),onKeydown:e[1]||(e[1]=hE((...l)=>t.onClicked&&t.onClicked(...l),["enter"]))},[t.isLoading?(q(),qe(o,{key:0,spinnerSize:"20px"})):(q(),Q("div",Ww,[e0(t.$slots,"icon",{},void 0),Ht(" "+we(t.text),1)]))],34)}const Wn=xe(zw,[["render",Kw],["__scopeId","data-v-77c23fe7"]]),qm=zi("user",()=>{const t=re(null);return{user:t,setUser:n=>{t.value=n}}}),Gw=()=>{};var Fd={};/**
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
 */const Hm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Qw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},zm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Jw;const m=i<<2|l>>4;if(r.push(m),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Jw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yw=function(t){const e=Hm(t);return zm.encodeByteArray(e,!0)},ta=function(t){return Yw(t).replace(/\./g,"")},Wm=function(t){try{return zm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zw=()=>Xw().__FIREBASE_DEFAULTS__,eT=()=>{if(typeof process>"u"||typeof Fd>"u")return;const t=Fd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wm(t[1]);return e&&JSON.parse(e)},xa=()=>{try{return Gw()||Zw()||eT()||tT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Km=t=>{var e,n;return(n=(e=xa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nT=t=>{const e=Km(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gm=()=>{var t;return(t=xa())===null||t===void 0?void 0:t.config},Qm=t=>{var e;return(e=xa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function sT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ta(JSON.stringify(n)),ta(JSON.stringify(o)),""].join(".")}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function oT(){var t;const e=(t=xa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uT(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hT(){return!oT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dT(){try{return typeof indexedDB=="object"}catch{return!1}}function fT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const pT="FirebaseError";class Kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pT,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Kn(s,l,r)}}function mT(t,e){return t.replace(gT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gT=/\{\$([^}]+)}/g;function _T(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bd(i)&&Bd(o)){if(!Wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bd(t){return t!==null&&typeof t=="object"}/**
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
 */function Ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yT(t,e){const n=new vT(t,e);return n.subscribe.bind(n)}class vT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ET(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ml),s.error===void 0&&(s.error=Ml),s.complete===void 0&&(s.complete=Ml);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ET(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ml(){}/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class Kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ur="[DEFAULT]";/**
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
 */class wT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IT(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TT(t){return t===Ur?void 0:t}function IT(t){return t.instantiationMode==="EAGER"}/**
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
 */class bT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const AT={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},ST=be.INFO,RT={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},CT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=RT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=ST,this._logHandler=CT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const PT=(t,e)=>e.some(n=>t instanceof n);let jd,qd;function kT(){return jd||(jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NT(){return qd||(qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jm=new WeakMap,cc=new WeakMap,Ym=new WeakMap,xl=new WeakMap,eu=new WeakMap;function DT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jm.set(n,t)}).catch(()=>{}),eu.set(e,t),e}function OT(t){if(cc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cc.set(t,e)}let uc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ym.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VT(t){uc=t(uc)}function MT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ll(this),e,...n);return Ym.set(r,e.sort?e.sort():[e]),hr(r)}:NT().includes(t)?function(...e){return t.apply(Ll(this),e),hr(Jm.get(this))}:function(...e){return hr(t.apply(Ll(this),e))}}function xT(t){return typeof t=="function"?MT(t):(t instanceof IDBTransaction&&OT(t),PT(t,kT())?new Proxy(t,uc):t)}function hr(t){if(t instanceof IDBRequest)return DT(t);if(xl.has(t))return xl.get(t);const e=xT(t);return e!==t&&(xl.set(t,e),eu.set(e,t)),e}const Ll=t=>eu.get(t);function LT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(hr(o.result),c.oldVersion,c.newVersion,hr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const $T=["get","getKey","getAll","getAllKeys","count"],UT=["put","add","delete","clear"],$l=new Map;function Hd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($l.get(e))return $l.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=UT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$T.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return $l.set(e,i),i}VT(t=>({...t,get:(e,n,r)=>Hd(e,n)||t.get(e,n,r),has:(e,n)=>!!Hd(e,n)||t.has(e,n)}));/**
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
 */class FT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hc="@firebase/app",zd="0.11.2";/**
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
 */const $n=new Zc("@firebase/app"),jT="@firebase/app-compat",qT="@firebase/analytics-compat",HT="@firebase/analytics",zT="@firebase/app-check-compat",WT="@firebase/app-check",KT="@firebase/auth",GT="@firebase/auth-compat",QT="@firebase/database",JT="@firebase/data-connect",YT="@firebase/database-compat",XT="@firebase/functions",ZT="@firebase/functions-compat",eI="@firebase/installations",tI="@firebase/installations-compat",nI="@firebase/messaging",rI="@firebase/messaging-compat",sI="@firebase/performance",iI="@firebase/performance-compat",oI="@firebase/remote-config",aI="@firebase/remote-config-compat",lI="@firebase/storage",cI="@firebase/storage-compat",uI="@firebase/firestore",hI="@firebase/vertexai",dI="@firebase/firestore-compat",fI="firebase",pI="11.4.0";/**
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
 */const dc="[DEFAULT]",mI={[hc]:"fire-core",[jT]:"fire-core-compat",[HT]:"fire-analytics",[qT]:"fire-analytics-compat",[WT]:"fire-app-check",[zT]:"fire-app-check-compat",[KT]:"fire-auth",[GT]:"fire-auth-compat",[QT]:"fire-rtdb",[JT]:"fire-data-connect",[YT]:"fire-rtdb-compat",[XT]:"fire-fn",[ZT]:"fire-fn-compat",[eI]:"fire-iid",[tI]:"fire-iid-compat",[nI]:"fire-fcm",[rI]:"fire-fcm-compat",[sI]:"fire-perf",[iI]:"fire-perf-compat",[oI]:"fire-rc",[aI]:"fire-rc-compat",[lI]:"fire-gcs",[cI]:"fire-gcs-compat",[uI]:"fire-fst",[dI]:"fire-fst-compat",[hI]:"fire-vertex","fire-js":"fire-js",[fI]:"fire-js-all"};/**
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
 */const na=new Map,gI=new Map,fc=new Map;function Wd(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rs(t){const e=t.name;if(fc.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;fc.set(e,t);for(const n of na.values())Wd(n,t);for(const n of gI.values())Wd(n,t);return!0}function tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const _I={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new Wi("app","Firebase",_I);/**
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
 */class yI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=pI;function Xm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw dr.create("bad-app-name",{appName:String(s)});if(n||(n=Gm()),!n)throw dr.create("no-options");const i=na.get(s);if(i){if(Wr(n,i.options)&&Wr(r,i.config))return i;throw dr.create("duplicate-app",{appName:s})}const o=new bT(s);for(const c of fc.values())o.addComponent(c);const l=new yI(n,r,o);return na.set(s,l),l}function Zm(t=dc){const e=na.get(t);if(!e&&t===dc&&Gm())return Xm();if(!e)throw dr.create("no-app",{appName:t});return e}function fr(t,e,n){var r;let s=(r=mI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}Rs(new Kr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const vI="firebase-heartbeat-database",EI=1,Di="firebase-heartbeat-store";let Ul=null;function eg(){return Ul||(Ul=LT(vI,EI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Di)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),Ul}async function wI(t){try{const n=(await eg()).transaction(Di),r=await n.objectStore(Di).get(tg(t));return await n.done,r}catch(e){if(e instanceof Kn)$n.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function Kd(t,e){try{const r=(await eg()).transaction(Di,"readwrite");await r.objectStore(Di).put(e,tg(t)),await r.done}catch(n){if(n instanceof Kn)$n.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function tg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TI=1024,II=30;class bI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>II){const o=RI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gd(),{heartbeatsToSend:r,unsentEntries:s}=AI(this._heartbeatsCache.heartbeats),i=ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $n.warn(n),""}}}function Gd(){return new Date().toISOString().substring(0,10)}function AI(t,e=TI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dT()?fT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qd(t){return ta(JSON.stringify({version:2,heartbeats:t})).length}function RI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function CI(t){Rs(new Kr("platform-logger",e=>new FT(e),"PRIVATE")),Rs(new Kr("heartbeat",e=>new bI(e),"PRIVATE")),fr(hc,zd,t),fr(hc,zd,"esm2017"),fr("fire-js","")}CI("");function nu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ng(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PI=ng,rg=new Wi("auth","Firebase",ng());/**
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
 */const ra=new Zc("@firebase/auth");function kI(t,...e){ra.logLevel<=be.WARN&&ra.warn(`Auth (${Ls}): ${t}`,...e)}function $o(t,...e){ra.logLevel<=be.ERROR&&ra.error(`Auth (${Ls}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw su(t,...e)}function on(t,...e){return su(t,...e)}function ru(t,e,n){const r=Object.assign(Object.assign({},PI()),{[e]:n});return new Wi("auth","Firebase",r).create(e,{appName:t.name})}function Hr(t){return ru(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function NI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wn(t,"argument-error"),ru(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function su(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rg.create(t,...e)}function fe(t,e,...n){if(!t)throw su(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $o(e),new Error(e)}function Un(t,e){t||Dn(e)}/**
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
 */function pc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function DI(){return Jd()==="http:"||Jd()==="https:"}function Jd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function OI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DI()||lT()||"connection"in navigator)?navigator.onLine:!0}function VI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=iT()||cT()}get(){return OI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function iu(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xI=new Gi(3e4,6e4);function ou(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $s(t,e,n,r,s={}){return ig(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ki(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return aT()||(u.referrerPolicy="no-referrer"),sg.fetch()(og(t,t.config.apiHost,n,l),u)})}async function ig(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MI),e);try{const s=new $I(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ro(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ro(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ro(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ro(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ru(t,d,u);wn(t,d)}}catch(s){if(s instanceof Kn)throw s;wn(t,"network-request-failed",{message:String(s)})}}async function LI(t,e,n,r,s={}){const i=await $s(t,e,n,r,s);return"mfaPendingCredential"in i&&wn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function og(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?iu(t.config,s):`${t.config.apiScheme}://${s}`}class $I{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),xI.get())})}}function Ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function UI(t,e){return $s(t,"POST","/v1/accounts:delete",e)}async function ag(t,e){return $s(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FI(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=au(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:vi(Fl(s.auth_time)),issuedAtTime:vi(Fl(s.iat)),expirationTime:vi(Fl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fl(t){return Number(t)*1e3}function au(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wm(n);return s?JSON.parse(s):($o("Failed to decode base64 JWT payload"),null)}catch(s){return $o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Yd(t){const e=au(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kn&&BI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vi(this.lastLoginAt),this.creationTime=vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Oi(t,ag(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lg(i.providerUserInfo):[],l=HI(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new mc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function qI(t){const e=ct(t);await sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lg(t){return t.map(e=>{var{providerId:n}=e,r=nu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function zI(t,e){const n=await ig(t,{},async()=>{const r=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=og(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",sg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WI(t,e){return $s(t,"POST","/v2/accounts:revokeToken",ou(t,e))}/**
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
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Yd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ys;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function er(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=nu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FI(this,e)}reload(){return qI(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Hr(this.auth));const e=await this.getIdToken();return await Oi(this,UI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:M,emailVerified:z,isAnonymous:Z,providerData:ae,stsTokenManager:b}=n;fe(M&&b,e,"internal-error");const y=ys.fromJSON(this.name,b);fe(typeof M=="string",e,"internal-error"),er(p,e.name),er(m,e.name),fe(typeof z=="boolean",e,"internal-error"),fe(typeof Z=="boolean",e,"internal-error"),er(_,e.name),er(R,e.name),er(A,e.name),er(P,e.name),er(D,e.name),er(V,e.name);const v=new On({uid:M,auth:e,email:m,emailVerified:z,displayName:p,isAnonymous:Z,photoURL:R,phoneNumber:_,tenantId:A,stsTokenManager:y,createdAt:D,lastLoginAt:V});return ae&&Array.isArray(ae)&&(v.providerData=ae.map(I=>Object.assign({},I))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new ys;s.updateFromServerResponse(n);const i=new On({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await sa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ys;l.updateFromIdToken(r);const c=new On({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new mc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Xd=new Map;function Vn(t){Un(t instanceof Function,"Expected a class definition");let e=Xd.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xd.set(t,e),e)}/**
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
 */class cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cg.type="NONE";const Zd=cg;/**
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
 */function Uo(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Uo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Uo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vs(Vn(Zd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Vn(Zd);const o=Uo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=On._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new vs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new vs(i,e,r))}}/**
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
 */function ef(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ug(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mg(e))return"Blackberry";if(gg(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||dg(e))&&!e.includes("edge/"))return"Chrome";if(pg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ug(t=kt()){return/firefox\//i.test(t)}function hg(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dg(t=kt()){return/crios\//i.test(t)}function fg(t=kt()){return/iemobile/i.test(t)}function pg(t=kt()){return/android/i.test(t)}function mg(t=kt()){return/blackberry/i.test(t)}function gg(t=kt()){return/webos/i.test(t)}function lu(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KI(t=kt()){var e;return lu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GI(){return uT()&&document.documentMode===10}function _g(t=kt()){return lu(t)||pg(t)||gg(t)||mg(t)||/windows phone/i.test(t)||fg(t)}/**
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
 */function yg(t,e=[]){let n;switch(t){case"Browser":n=ef(kt());break;case"Worker":n=`${ef(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
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
 */class QI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function JI(t,e={}){return $s(t,"GET","/v2/passwordPolicy",ou(t,e))}/**
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
 */const YI=6;class XI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:YI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ZI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tf(this),this.idTokenSubscription=new tf(this),this.beforeStateQueue=new QI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ag(this,{idToken:e}),r=await On._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Hr(this));const n=e?ct(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JI(this),n=new XI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await WI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function La(t){return ct(t)}class tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=yT(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let cu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function e1(t){cu=t}function t1(t){return cu.loadJS(t)}function n1(){return cu.gapiScript}function r1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function s1(t,e){const n=tu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wr(i,e??{}))return s;wn(s,"already-initialized")}return n.initialize({options:e})}function i1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function o1(t,e,n){const r=La(t);fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=vg(e),{host:o,port:l}=a1(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){fe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),fe(Wr(u,r.config.emulator)&&Wr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,l1()}function vg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function a1(t){const e=vg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:nf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:nf(o)}}}function nf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function l1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Eg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
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
 */async function Es(t,e){return LI(t,"POST","/v1/accounts:signInWithIdp",ou(t,e))}/**
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
 */const c1="http://localhost";class Gr extends Eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=nu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Gr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:c1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
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
 */class uu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qi extends uu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ir extends Qi{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class or extends Qi{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends Qi{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await On._fromIdTokenResponse(e,r,s),o=rf(r);return new Cs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=rf(r);return new Cs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function rf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ia extends Kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ia.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ia(e,n,r,s)}}function wg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ia._fromErrorAndOperation(t,i,e,r):i})}async function u1(t,e,n=!1){const r=await Oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cs._forOperation(t,"link",r)}/**
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
 */async function h1(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(Hr(r));const s="reauthenticate";try{const i=await Oi(t,wg(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=au(i.idToken);fe(o,r,"internal-error");const{sub:l}=o;return fe(t.uid===l,r,"user-mismatch"),Cs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),i}}/**
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
 */async function d1(t,e,n=!1){if(nn(t.app))return Promise.reject(Hr(t));const r="signIn",s=await wg(t,r,e),i=await Cs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function f1(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function p1(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}const oa="__sak";/**
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
 */class Tg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oa,"1"),this.storage.removeItem(oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const m1=1e3,g1=10;class Ig extends Tg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_g(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);GI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,g1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},m1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ig.type="LOCAL";const _1=Ig;/**
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
 */class bg extends Tg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bg.type="SESSION";const Ag=bg;/**
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
 */function y1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $a(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await y1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$a.receivers=[];/**
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
 */function hu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class v1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=hu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gn(){return window}function E1(t){gn().location.href=t}/**
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
 */function Sg(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function w1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function I1(){return Sg()?self:null}/**
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
 */const Rg="firebaseLocalStorageDb",b1=1,aa="firebaseLocalStorage",Cg="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ua(t,e){return t.transaction([aa],e?"readwrite":"readonly").objectStore(aa)}function A1(){const t=indexedDB.deleteDatabase(Rg);return new Ji(t).toPromise()}function gc(){const t=indexedDB.open(Rg,b1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(aa,{keyPath:Cg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(aa)?e(r):(r.close(),await A1(),e(await gc()))})})}async function sf(t,e,n){const r=Ua(t,!0).put({[Cg]:e,value:n});return new Ji(r).toPromise()}async function S1(t,e){const n=Ua(t,!1).get(e),r=await new Ji(n).toPromise();return r===void 0?null:r.value}function of(t,e){const n=Ua(t,!0).delete(e);return new Ji(n).toPromise()}const R1=800,C1=3;class Pg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>C1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$a._getInstance(I1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await w1(),!this.activeServiceWorker)return;this.sender=new v1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gc();return await sf(e,oa,"1"),await of(e,oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>S1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>of(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ua(s,!1).getAll();return new Ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pg.type="LOCAL";const P1=Pg;new Gi(3e4,6e4);/**
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
 */function kg(t,e){return e?Vn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class du extends Eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function k1(t){return d1(t.auth,new du(t),t.bypassAuthState)}function N1(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),h1(n,new du(t),t.bypassAuthState)}async function D1(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),u1(n,new du(t),t.bypassAuthState)}/**
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
 */class Ng{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return k1;case"linkViaPopup":case"linkViaRedirect":return D1;case"reauthViaPopup":case"reauthViaRedirect":return N1;default:wn(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const O1=new Gi(2e3,1e4);async function V1(t,e,n){if(nn(t.app))return Promise.reject(on(t,"operation-not-supported-in-this-environment"));const r=La(t);NI(t,e,uu);const s=kg(r,n);return new Fr(r,"signInViaPopup",e,s).executeNotNull()}class Fr extends Ng{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,O1.get())};e()}}Fr.currentPopupAction=null;/**
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
 */const M1="pendingRedirect",Fo=new Map;class x1 extends Ng{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fo.get(this.auth._key());if(!e){try{const r=await L1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fo.set(this.auth._key(),e)}return this.bypassAuthState||Fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L1(t,e){const n=F1(e),r=U1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $1(t,e){Fo.set(t._key(),e)}function U1(t){return Vn(t._redirectPersistence)}function F1(t){return Uo(M1,t.config.apiKey,t.name)}async function B1(t,e,n=!1){if(nn(t.app))return Promise.reject(Hr(t));const r=La(t),s=kg(r,e),o=await new x1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const j1=10*60*1e3;class q1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j1&&this.cachedEventUids.clear(),this.cachedEventUids.has(af(e))}saveEventToCache(e){this.cachedEventUids.add(af(e)),this.lastProcessedEventTime=Date.now()}}function af(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dg(t);default:return!1}}/**
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
 */async function z1(t,e={}){return $s(t,"GET","/v1/projects",e)}/**
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
 */const W1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,K1=/^https?/;async function G1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await z1(t);for(const n of e)try{if(Q1(n))return}catch{}wn(t,"unauthorized-domain")}function Q1(t){const e=pc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!K1.test(n))return!1;if(W1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const J1=new Gi(3e4,6e4);function lf(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Y1(t){return new Promise((e,n)=>{var r,s,i;function o(){lf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lf(),n(on(t,"network-request-failed"))},timeout:J1.get()})}if(!((s=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=gn().gapi)===null||i===void 0)&&i.load)o();else{const l=r1("iframefcb");return gn()[l]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},t1(`${n1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Bo=null,e})}let Bo=null;function X1(t){return Bo=Bo||Y1(t),Bo}/**
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
 */const Z1=new Gi(5e3,15e3),eb="__/auth/iframe",tb="emulator/auth/iframe",nb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sb(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?iu(e,tb):`https://${t.config.authDomain}/${eb}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},s=rb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ki(r).slice(1)}`}async function ib(t){const e=await X1(t),n=gn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:sb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=gn().setTimeout(()=>{i(o)},Z1.get());function c(){gn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const ob={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ab=500,lb=600,cb="_blank",ub="http://localhost";class cf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hb(t,e,n,r=ab,s=lb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},ob),{width:r.toString(),height:s.toString(),top:i,left:o}),u=kt().toLowerCase();n&&(l=dg(u)?cb:n),ug(u)&&(e=e||ub,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,R])=>`${m}${_}=${R},`,"");if(KI(u)&&l!=="_self")return db(e||"",l),new cf(null);const p=window.open(e||"",l,d);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new cf(p)}function db(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const fb="__/auth/handler",pb="emulator/auth/handler",mb=encodeURIComponent("fac");async function uf(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:s};if(e instanceof uu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_T(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Qi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${mb}=${encodeURIComponent(c)}`:"";return`${gb(t)}?${Ki(l).slice(1)}${u}`}function gb({config:t}){return t.emulator?iu(t,pb):`https://${t.authDomain}/${fb}`}/**
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
 */const Bl="webStorageSupport";class _b{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ag,this._completeRedirectFn=B1,this._overrideRedirectResult=$1}async _openPopup(e,n,r,s){var i;Un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await uf(e,n,r,pc(),s);return hb(e,o,hu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await uf(e,n,r,pc(),s);return E1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ib(e),r=new q1(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bl,{type:Bl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Bl];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=G1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _g()||hg()||lu()}}const yb=_b;var hf="@firebase/auth",df="1.9.1";/**
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
 */class vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Eb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wb(t){Rs(new Kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yg(t)},u=new ZI(r,s,i,c);return i1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rs(new Kr("auth-internal",e=>{const n=La(e.getProvider("auth").getImmediate());return(r=>new vb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(hf,df,Eb(t)),fr(hf,df,"esm2017")}/**
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
 */const Tb=5*60,Ib=Qm("authIdTokenMaxAge")||Tb;let ff=null;const bb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ib)return;const s=n==null?void 0:n.token;ff!==s&&(ff=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ut(t=Zm()){const e=tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=s1(t,{popupRedirectResolver:yb,persistence:[P1,_1,Ag]}),r=Qm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=bb(i.toString());p1(n,o,()=>o(n.currentUser)),f1(n,l=>o(l))}}const s=Km("auth");return s&&o1(n,`http://${s}`),n}function Ab(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}e1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ab().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wb("Browser");var Sb="firebase",Rb="11.4.0";/**
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
 */fr(Sb,Rb,"app");const Cb={apiKey:"AIzaSyALY2Eu62yzZPuaySeDBI3ONz3DYCq2388",authDomain:"relay-hub.firebaseapp.com",projectId:"relay-hub",storageBucket:"relay-hub.appspot.com",messagingSenderId:"1088994606939",appId:"1:1088994606939:web:17dc0c1330726f959ca47e"},Ze=Xm(Cb),Pb=ut(Ze),kb=async()=>{const t=new Nn;try{return(await V1(Pb,t)).user}catch(e){throw console.error("Error during sign-in:",e),e}},Nb=De({components:{ButtonDefault:Wn},emits:["onButtonClicked"],props:{},setup(){const t=qm(),e=re(!1);async function n(){e.value=!0;try{const r=await kb();t.setUser({uid:r.uid,displayName:r.displayName,email:r.email,photoURL:r.photoURL})}catch(r){t.setUser(null),console.error("Failed to sign in:",r)}}return{isLoading:e,onButtonClicked:n}}}),Db={class:"button-google"};function Ob(t,e,n,r,s,i){const o=_e("ButtonDefault");return q(),Q("div",Db,[pe(o,{text:"Sign in with Google",isLoading:t.isLoading,onOnButtonClicked:t.onButtonClicked},{icon:Mn(()=>e[0]||(e[0]=[j("div",{class:"google-icon"},null,-1)])),_:1},8,["isLoading","onOnButtonClicked"])])}const Vb=xe(Nb,[["render",Ob],["__scopeId","data-v-33e465cd"]]),Mb=De({name:"sign-in",components:{ButtonGoogle:Vb},setup(){return{}}}),xb={class:"sign-in"};function Lb(t,e,n,r,s,i){const o=_e("button-google");return q(),Q("div",xb,[e[0]||(e[0]=j("div",{class:"relay-hub"},"RelayHub",-1)),pe(o)])}const $b=xe(Mb,[["render",Lb],["__scopeId","data-v-9540f920"]]),Ub=De({name:"ToggleButton",props:{modelValue:{type:Boolean,required:!0},isBlocked:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=re(t.modelValue),r=re(!1);return mn(()=>t.modelValue,i=>{n.value=i}),{isActive:n,toggleSwitch:()=>{t.isBlocked||r.value||(n.value=!n.value,r.value=!0,setTimeout(()=>r.value=!1,500),e("update:modelValue",n.value))}}}});function Fb(t,e,n,r,s,i){return q(),Q("div",{class:st(["toggle-switch",{active:t.isActive}]),onClick:e[0]||(e[0]=(...o)=>t.toggleSwitch&&t.toggleSwitch(...o))},e[1]||(e[1]=[j("div",{class:"switch"},null,-1)]),2)}const Bb=xe(Ub,[["render",Fb],["__scopeId","data-v-17dbdf4b"]]);var pf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,Og;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.D=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(I,S,C){for(var w=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)w[rt-2]=arguments[rt];return y.prototype[S].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,v){v||(v=0);var I=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)I[S]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(S=0;16>S;++S)I[S]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],S=b.g[2];var C=b.g[3],w=y+(C^v&(S^C))+I[0]+3614090360&4294967295;y=v+(w<<7&4294967295|w>>>25),w=C+(S^y&(v^S))+I[1]+3905402710&4294967295,C=y+(w<<12&4294967295|w>>>20),w=S+(v^C&(y^v))+I[2]+606105819&4294967295,S=C+(w<<17&4294967295|w>>>15),w=v+(y^S&(C^y))+I[3]+3250441966&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(C^v&(S^C))+I[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(S^y&(v^S))+I[5]+1200080426&4294967295,C=y+(w<<12&4294967295|w>>>20),w=S+(v^C&(y^v))+I[6]+2821735955&4294967295,S=C+(w<<17&4294967295|w>>>15),w=v+(y^S&(C^y))+I[7]+4249261313&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(C^v&(S^C))+I[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(S^y&(v^S))+I[9]+2336552879&4294967295,C=y+(w<<12&4294967295|w>>>20),w=S+(v^C&(y^v))+I[10]+4294925233&4294967295,S=C+(w<<17&4294967295|w>>>15),w=v+(y^S&(C^y))+I[11]+2304563134&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(C^v&(S^C))+I[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(S^y&(v^S))+I[13]+4254626195&4294967295,C=y+(w<<12&4294967295|w>>>20),w=S+(v^C&(y^v))+I[14]+2792965006&4294967295,S=C+(w<<17&4294967295|w>>>15),w=v+(y^S&(C^y))+I[15]+1236535329&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(S^C&(v^S))+I[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^S&(y^v))+I[6]+3225465664&4294967295,C=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(C^y))+I[11]+643717713&4294967295,S=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(S^C))+I[0]+3921069994&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^C&(v^S))+I[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^S&(y^v))+I[10]+38016083&4294967295,C=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(C^y))+I[15]+3634488961&4294967295,S=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(S^C))+I[4]+3889429448&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^C&(v^S))+I[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^S&(y^v))+I[14]+3275163606&4294967295,C=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(C^y))+I[3]+4107603335&4294967295,S=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(S^C))+I[8]+1163531501&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^C&(v^S))+I[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^S&(y^v))+I[2]+4243563512&4294967295,C=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(C^y))+I[7]+1735328473&4294967295,S=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(S^C))+I[12]+2368359562&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(v^S^C)+I[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^S)+I[8]+2272392833&4294967295,C=y+(w<<11&4294967295|w>>>21),w=S+(C^y^v)+I[11]+1839030562&4294967295,S=C+(w<<16&4294967295|w>>>16),w=v+(S^C^y)+I[14]+4259657740&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^C)+I[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^S)+I[4]+1272893353&4294967295,C=y+(w<<11&4294967295|w>>>21),w=S+(C^y^v)+I[7]+4139469664&4294967295,S=C+(w<<16&4294967295|w>>>16),w=v+(S^C^y)+I[10]+3200236656&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^C)+I[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^S)+I[0]+3936430074&4294967295,C=y+(w<<11&4294967295|w>>>21),w=S+(C^y^v)+I[3]+3572445317&4294967295,S=C+(w<<16&4294967295|w>>>16),w=v+(S^C^y)+I[6]+76029189&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^C)+I[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^S)+I[12]+3873151461&4294967295,C=y+(w<<11&4294967295|w>>>21),w=S+(C^y^v)+I[15]+530742520&4294967295,S=C+(w<<16&4294967295|w>>>16),w=v+(S^C^y)+I[2]+3299628645&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(S^(v|~C))+I[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~S))+I[7]+1126891415&4294967295,C=y+(w<<10&4294967295|w>>>22),w=S+(y^(C|~v))+I[14]+2878612391&4294967295,S=C+(w<<15&4294967295|w>>>17),w=v+(C^(S|~y))+I[5]+4237533241&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~C))+I[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~S))+I[3]+2399980690&4294967295,C=y+(w<<10&4294967295|w>>>22),w=S+(y^(C|~v))+I[10]+4293915773&4294967295,S=C+(w<<15&4294967295|w>>>17),w=v+(C^(S|~y))+I[1]+2240044497&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~C))+I[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~S))+I[15]+4264355552&4294967295,C=y+(w<<10&4294967295|w>>>22),w=S+(y^(C|~v))+I[6]+2734768916&4294967295,S=C+(w<<15&4294967295|w>>>17),w=v+(C^(S|~y))+I[13]+1309151649&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~C))+I[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~S))+I[11]+3174756917&4294967295,C=y+(w<<10&4294967295|w>>>22),w=S+(y^(C|~v))+I[2]+718787259&4294967295,S=C+(w<<15&4294967295|w>>>17),w=v+(C^(S|~y))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var v=y-this.blockSize,I=this.B,S=this.h,C=0;C<y;){if(S==0)for(;C<=v;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<y;)if(I[S++]=b.charCodeAt(C++),S==this.blockSize){s(this,I),S=0;break}}else for(;C<y;)if(I[S++]=b[C++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var v=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=v&255,v/=256;for(this.u(b),b=Array(16),y=v=0;4>y;++y)for(var I=0;32>I;I+=8)b[v++]=this.g[y]>>>I&255;return b};function i(b,y){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function o(b,y){this.h=y;for(var v=[],I=!0,S=b.length-1;0<=S;S--){var C=b[S]|0;I&&C==y||(v[S]=C,I=!1)}this.g=v}var l={};function c(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return P(u(-b));for(var y=[],v=1,I=0;b>=v;I++)y[I]=b/v|0,v*=4294967296;return new o(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return P(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),I=p,S=0;S<b.length;S+=8){var C=Math.min(8,b.length-S),w=parseInt(b.substring(S,S+C),y);8>C?(C=u(Math.pow(y,C)),I=I.j(C).add(u(w))):(I=I.j(v),I=I.add(u(w)))}return I}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();for(var b=0,y=1,v=0;v<this.g.length;v++){var I=this.i(v);b+=(0<=I?I:4294967296+I)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(A(this))return"-"+P(this).toString(b);for(var y=u(Math.pow(b,6)),v=this,I="";;){var S=z(v,y).g;v=D(v,S.j(y));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=S,R(v))return C+I;for(;6>C.length;)C="0"+C;I=C+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function A(b){return b.h==-1}t.l=function(b){return b=D(this,b),A(b)?-1:R(b)?0:1};function P(b){for(var y=b.g.length,v=[],I=0;I<y;I++)v[I]=~b.g[I];return new o(v,~b.h).add(m)}t.abs=function(){return A(this)?P(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],I=0,S=0;S<=y;S++){var C=I+(this.i(S)&65535)+(b.i(S)&65535),w=(C>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);I=w>>>16,C&=65535,w&=65535,v[S]=w<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function D(b,y){return b.add(P(y))}t.j=function(b){if(R(this)||R(b))return p;if(A(this))return A(b)?P(this).j(P(b)):P(P(this).j(b));if(A(b))return P(this.j(P(b)));if(0>this.l(_)&&0>b.l(_))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,v=[],I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<b.g.length;S++){var C=this.i(I)>>>16,w=this.i(I)&65535,rt=b.i(S)>>>16,xt=b.i(S)&65535;v[2*I+2*S]+=w*xt,V(v,2*I+2*S),v[2*I+2*S+1]+=C*xt,V(v,2*I+2*S+1),v[2*I+2*S+1]+=w*rt,V(v,2*I+2*S+1),v[2*I+2*S+2]+=C*rt,V(v,2*I+2*S+2)}for(I=0;I<y;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=y;I<2*y;I++)v[I]=0;return new o(v,0)};function V(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function M(b,y){this.g=b,this.h=y}function z(b,y){if(R(y))throw Error("division by zero");if(R(b))return new M(p,p);if(A(b))return y=z(P(b),y),new M(P(y.g),P(y.h));if(A(y))return y=z(b,P(y)),new M(P(y.g),y.h);if(30<b.g.length){if(A(b)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=y;0>=I.l(b);)v=Z(v),I=Z(I);var S=ae(v,1),C=ae(I,1);for(I=ae(I,2),v=ae(v,2);!R(I);){var w=C.add(I);0>=w.l(b)&&(S=S.add(v),C=w),I=ae(I,1),v=ae(v,1)}return y=D(b,S.j(y)),new M(S,y)}for(S=p;0<=b.l(y);){for(v=Math.max(1,Math.floor(b.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),C=u(v),w=C.j(y);A(w)||0<w.l(b);)v-=I,C=u(v),w=C.j(y);R(C)&&(C=m),S=S.add(C),b=D(b,w)}return new M(S,b)}t.A=function(b){return z(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)&b.i(I);return new o(v,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)|b.i(I);return new o(v,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)^b.i(I);return new o(v,this.h^b.h)};function Z(b){for(var y=b.g.length+1,v=[],I=0;I<y;I++)v[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(v,b.h)}function ae(b,y){var v=y>>5;y%=32;for(var I=b.g.length-v,S=[],C=0;C<I;C++)S[C]=0<y?b.i(C+v)>>>y|b.i(C+v+1)<<32-y:b.i(C+v);return new o(S,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Og=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,pr=o}).apply(typeof pf<"u"?pf:typeof self<"u"?self:typeof window<"u"?window:{});var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vg,ai,Mg,jo,_c,xg,Lg,$g;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Co=="object"&&Co];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in f))break e;f=f[N]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,N={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,N,O){for(var G=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)G[Le-2]=arguments[Le];return h.prototype[N].apply(g,G)}}function A(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const N=a.length||0,O=g.length||0;a.length=N+O;for(let G=0;G<O;G++)a[N+G]=g[G]}else a.push(g)}}class D{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var Z=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function ae(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)a[f]=g[f];for(let O=0;O<v.length;O++)f=v[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function S(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Bt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class rt{constructor(){this.h=this.g=null}add(h,f){const g=xt.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var xt=new D(()=>new Fe,a=>a.reset());class Fe{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let de,Ie=!1,Bt=new rt,en=()=>{const a=l.Promise.resolve(void 0);de=()=>{a.then(Qt)}};var Qt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){C(f)}var h=xt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ie=!1};function We(){this.s=this.s,this.C=this.C}We.prototype.s=!1,We.prototype.ma=function(){this.s||(this.s=!0,this.N())},We.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var Gn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function cn(a,h){if(Ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{z(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Lt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}R(cn,Ke);var Lt={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),ee=0;function Y(a,h,f,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=N,this.key=++ee,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pe(a){this.src=a,this.g={},this.h=0}Pe.prototype.add=function(a,h,f,g,N){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var G=T(a,h,g,N);return-1<G?(h=a[G],f||(h.fa=!1)):(h=new Y(h,this.src,O,!!g,N),h.fa=f,a.push(h)),h};function E(a,h){var f=h.type;if(f in a.g){var g=a.g[f],N=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=N)&&Array.prototype.splice.call(g,N,1),O&&(se(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function T(a,h,f,g){for(var N=0;N<a.length;++N){var O=a[N];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return N}return-1}var k="closure_lm_"+(1e6*Math.random()|0),L={};function B(a,h,f,g,N){if(Array.isArray(h)){for(var O=0;O<h.length;O++)B(a,h[O],f,g,N);return null}return f=ue(f),a&&a[x]?a.K(h,f,u(g)?!!g.capture:!1,N):U(a,h,f,!1,g,N)}function U(a,h,f,g,N,O){if(!h)throw Error("Invalid event type");var G=u(N)?!!N.capture:!!N,Le=X(a);if(Le||(a[k]=Le=new Pe(a)),f=Le.add(h,f,g,G,O),f.proxy)return f;if(g=J(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Gn||(N=G),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(H(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function J(){function a(f){return h.call(a.src,a.listener,f)}const h=le;return a}function K(a,h,f,g,N){if(Array.isArray(h))for(var O=0;O<h.length;O++)K(a,h[O],f,g,N);else g=u(g)?!!g.capture:!!g,f=ue(f),a&&a[x]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=T(O,f,g,N),-1<f&&(se(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,f,g,N)),(f=-1<a?h[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[x])E(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(H(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=X(h))?(E(f,a),f.h==0&&(f.src=null,h[k]=null)):se(a)}}}function H(a){return a in L?L[a]:L[a]="on"+a}function le(a,h){if(a.da)a=!0;else{h=new cn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&W(a),a=f.call(g,h)}return a}function X(a){return a=a[k],a instanceof Pe?a:null}var ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[ie]||(a[ie]=function(h){return a.handleEvent(h)}),a[ie])}function ce(){We.call(this),this.i=new Pe(this),this.M=this,this.F=null}R(ce,We),ce.prototype[x]=!0,ce.prototype.removeEventListener=function(a,h,f,g){K(this,a,h,f,g)};function Ee(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ke(h,a);else if(h instanceof Ke)h.target=h.target||a;else{var N=h;h=new Ke(g,a),I(h,N)}if(N=!0,f)for(var O=f.length-1;0<=O;O--){var G=h.g=f[O];N=Re(G,g,!0,h)&&N}if(G=h.g=a,N=Re(G,g,!0,h)&&N,N=Re(G,g,!1,h)&&N,f)for(O=0;O<f.length;O++)G=h.g=f[O],N=Re(G,g,!1,h)&&N}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)se(f[g]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ce.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Re(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,O=0;O<h.length;++O){var G=h[O];if(G&&!G.da&&G.capture==f){var Le=G.listener,ft=G.ha||G.src;G.fa&&E(a.i,G),N=Le.call(ft,g)!==!1&&N}}return N&&!g.defaultPrevented}function yt(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ht(a){a.g=yt(()=>{a.g=null,a.i&&(a.i=!1,ht(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Jt extends We{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ht(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(a){We.call(this),this.h=a,this.g={}}R(vt,We);var Qn=[];function Hs(a){ae(a.g,function(h,f){this.g.hasOwnProperty(f)&&W(h)},a),a.g={}}vt.prototype.N=function(){vt.aa.N.call(this),Hs(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dt=l.JSON.stringify,Yt=l.JSON.parse,ao=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ol(){}ol.prototype.h=null;function eh(a){return a.h||(a.h=a.i())}function th(){}var zs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function al(){Ke.call(this,"d")}R(al,Ke);function ll(){Ke.call(this,"c")}R(ll,Ke);var Dr={},nh=null;function lo(){return nh=nh||new ce}Dr.La="serverreachability";function rh(a){Ke.call(this,Dr.La,a)}R(rh,Ke);function Ws(a){const h=lo();Ee(h,new rh(h))}Dr.STAT_EVENT="statevent";function sh(a,h){Ke.call(this,Dr.STAT_EVENT,a),this.stat=h}R(sh,Ke);function Nt(a){const h=lo();Ee(h,new sh(h,a))}Dr.Ma="timingevent";function ih(a,h){Ke.call(this,Dr.Ma,a),this.size=h}R(ih,Ke);function Ks(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Gs(){this.g=!0}Gs.prototype.xa=function(){this.g=!1};function Ry(a,h,f,g,N,O){a.info(function(){if(a.g)if(O)for(var G="",Le=O.split("&"),ft=0;ft<Le.length;ft++){var ke=Le[ft].split("=");if(1<ke.length){var Et=ke[0];ke=ke[1];var wt=Et.split("_");G=2<=wt.length&&wt[1]=="type"?G+(Et+"="+ke+"&"):G+(Et+"=redacted&")}}else G=null;else G=O;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+f+`
`+G})}function Cy(a,h,f,g,N,O,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+f+`
`+O+" "+G})}function es(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ky(a,f)+(g?" "+g:"")})}function Py(a,h){a.info(function(){return"TIMEOUT: "+h})}Gs.prototype.info=function(){};function ky(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var G=1;G<N.length;G++)N[G]=""}}}}return dt(f)}catch{return h}}var co={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cl;function uo(){}R(uo,ol),uo.prototype.g=function(){return new XMLHttpRequest},uo.prototype.i=function(){return{}},cl=new uo;function Jn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ah}function ah(){this.i=null,this.g="",this.h=!1}var lh={},ul={};function hl(a,h,f){a.L=1,a.v=mo(bn(h)),a.m=f,a.P=!0,ch(a,null)}function ch(a,h){a.F=Date.now(),ho(a),a.A=bn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Ih(f.i,"t",g),a.C=0,f=a.j.J,a.h=new ah,a.g=Bh(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Jt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Qn[0]=N.toString()),N=Qn);for(var O=0;O<N.length;O++){var G=B(f,N[O],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ws(),Ry(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&An(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const wt=An(this.g);var h=this.g.Ba();const rs=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||kh(this.g)))){this.J||wt!=4||h==7||(h==8||0>=rs?Ws(3):Ws(2)),dl(this);var f=this.g.Z();this.X=f;t:if(uh(this)){var g=kh(this.g);a="";var N=g.length,O=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),Qs(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==N-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,Cy(this.i,this.u,this.A,this.l,this.R,wt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,ft=this.g;if((Le=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Le)){var ke=Le;break t}}ke=null}if(f=ke)es(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fl(this,f);else{this.o=!1,this.s=3,Nt(12),Or(this),Qs(this);break e}}if(this.P){f=!0;let tn;for(;!this.J&&this.C<G.length;)if(tn=Ny(this,G),tn==ul){wt==4&&(this.s=4,Nt(14),f=!1),es(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==lh){this.s=4,Nt(15),es(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else es(this.i,this.l,tn,null),fl(this,tn);if(uh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||G.length!=0||this.h.h||(this.s=1,Nt(16),f=!1),this.o=this.o&&f,!f)es(this.i,this.l,G,"[Invalid Chunked Response]"),Or(this),Qs(this);else if(0<G.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),vl(Et),Et.M=!0,Nt(11))}}else es(this.i,this.l,G,null),fl(this,G);wt==4&&Or(this),this.o&&!this.J&&(wt==4?Lh(this.j,this):(this.o=!1,ho(this)))}else Gy(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),Or(this),Qs(this)}}}catch{}finally{}};function uh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ny(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?ul:(f=Number(h.substring(f,g)),isNaN(f)?lh:(g+=1,g+f>h.length?ul:(h=h.slice(g,g+f),a.C=g+f,h)))}Jn.prototype.cancel=function(){this.J=!0,Or(this)};function ho(a){a.S=Date.now()+a.I,hh(a,a.I)}function hh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ks(m(a.ba,a),h)}function dl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Py(this.i,this.A),this.L!=2&&(Ws(),Nt(17)),Or(this),this.s=2,Qs(this)):hh(this,this.S-a)};function Qs(a){a.j.G==0||a.J||Lh(a.j,a)}function Or(a){dl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Hs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function fl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||pl(f.h,a))){if(!a.K&&pl(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)wo(f),vo(f);else break e;yl(f),Nt(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ks(m(f.Za,f),6e3));if(1>=ph(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Mr(f,11)}else if((a.K||f.g==a)&&wo(f),!V(h))for(N=f.Da.g.parse(h),h=0;h<N.length;h++){let ke=N[h];if(f.T=ke[0],ke=ke[1],f.G==2)if(ke[0]=="c"){f.K=ke[1],f.ia=ke[2];const Et=ke[3];Et!=null&&(f.la=Et,f.j.info("VER="+f.la));const wt=ke[4];wt!=null&&(f.Aa=wt,f.j.info("SVER="+f.Aa));const rs=ke[5];rs!=null&&typeof rs=="number"&&0<rs&&(g=1.5*rs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const tn=a.g;if(tn){const Io=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Io){var O=g.h;O.g||Io.indexOf("spdy")==-1&&Io.indexOf("quic")==-1&&Io.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ml(O,O.h),O.h=null))}if(g.D){const El=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;El&&(g.ya=El,je(g.I,g.D,El))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var G=a;if(g.qa=Fh(g,g.J?g.ia:null,g.W),G.K){mh(g.h,G);var Le=G,ft=g.L;ft&&(Le.I=ft),Le.B&&(dl(Le),ho(Le)),g.g=G}else Mh(g);0<f.i.length&&Eo(f)}else ke[0]!="stop"&&ke[0]!="close"||Mr(f,7);else f.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Mr(f,7):_l(f):ke[0]!="noop"&&f.l&&f.l.ta(ke),f.v=0)}}Ws(4)}catch{}}var Dy=class{constructor(a,h){this.g=a,this.map=h}};function dh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ph(a){return a.h?1:a.g?a.g.size:0}function pl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ml(a,h){a.g?a.g.add(h):a.h=h}function mh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}dh.prototype.cancel=function(){if(this.i=gh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return A(a.i)}function Oy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Vy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function _h(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Vy(a),g=Oy(a),N=g.length,O=0;O<N;O++)h.call(void 0,g[O],f&&f[O],a)}var yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function My(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),N=null;if(0<=g){var O=a[f].substring(0,g);N=a[f].substring(g+1)}else O=a[f];h(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vr){this.h=a.h,fo(this,a.j),this.o=a.o,this.g=a.g,po(this,a.s),this.l=a.l;var h=a.i,f=new Xs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),vh(this,f),this.m=a.m}else a&&(h=String(a).match(yh))?(this.h=!1,fo(this,h[1]||"",!0),this.o=Js(h[2]||""),this.g=Js(h[3]||"",!0),po(this,h[4]),this.l=Js(h[5]||"",!0),vh(this,h[6]||"",!0),this.m=Js(h[7]||"")):(this.h=!1,this.i=new Xs(null,this.h))}Vr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ys(h,Eh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ys(h,Eh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ys(f,f.charAt(0)=="/"?$y:Ly,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ys(f,Fy)),a.join("")};function bn(a){return new Vr(a)}function fo(a,h,f){a.j=f?Js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function po(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function vh(a,h,f){h instanceof Xs?(a.i=h,By(a.i,a.h)):(f||(h=Ys(h,Uy)),a.i=new Xs(h,a.h))}function je(a,h,f){a.i.set(h,f)}function mo(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ys(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,xy),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function xy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Eh=/[#\/\?@]/g,Ly=/[#\?:]/g,$y=/[#\?]/g,Uy=/[#\?@]/g,Fy=/#/g;function Xs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yn(a){a.g||(a.g=new Map,a.h=0,a.i&&My(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Xs.prototype,t.add=function(a,h){Yn(this),this.i=null,a=ts(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function wh(a,h){Yn(a),h=ts(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Th(a,h){return Yn(a),h=ts(a,h),a.g.has(h)}t.forEach=function(a,h){Yn(this),this.g.forEach(function(f,g){f.forEach(function(N){a.call(h,N,g,this)},this)},this)},t.na=function(){Yn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const N=a[g];for(let O=0;O<N.length;O++)f.push(h[g])}return f},t.V=function(a){Yn(this);let h=[];if(typeof a=="string")Th(this,a)&&(h=h.concat(this.g.get(ts(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Yn(this),this.i=null,a=ts(this,a),Th(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Ih(a,h,f){wh(a,h),0<f.length&&(a.i=null,a.g.set(ts(a,h),A(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var N=O;G[g]!==""&&(N+="="+encodeURIComponent(String(G[g]))),a.push(N)}}return this.i=a.join("&")};function ts(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function By(a,h){h&&!a.j&&(Yn(a),a.i=null,a.g.forEach(function(f,g){var N=g.toLowerCase();g!=N&&(wh(this,g),Ih(this,N,f))},a)),a.j=h}function jy(a,h){const f=new Gs;if(l.Image){const g=new Image;g.onload=_(Xn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Xn,f,"TestLoadImage: error",!1,h,g),g.onabort=_(Xn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Xn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function qy(a,h){const f=new Gs,g=new AbortController,N=setTimeout(()=>{g.abort(),Xn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(N),O.ok?Xn(f,"TestPingServer: ok",!0,h):Xn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Xn(f,"TestPingServer: error",!1,h)})}function Xn(a,h,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function Hy(){this.g=new ao}function zy(a,h,f){const g=f||"";try{_h(a,function(N,O){let G=N;u(N)&&(G=dt(N)),h.push(g+O+"="+encodeURIComponent(G))})}catch(N){throw h.push(g+"type="+encodeURIComponent("_badmap")),N}}function go(a){this.l=a.Ub||null,this.j=a.eb||!1}R(go,ol),go.prototype.g=function(){return new _o(this.l,this.j)},go.prototype.i=function(a){return function(){return a}}({});function _o(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(_o,ce),t=_o.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ei(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function bh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Zs(this):ei(this),this.readyState==3&&bh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Zs(this))},t.Qa=function(a){this.g&&(this.response=a,Zs(this))},t.ga=function(){this.g&&Zs(this)};function Zs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ei(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ah(a){let h="";return ae(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function gl(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Ah(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):je(a,h,f))}function Qe(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Qe,ce);var Wy=/^https?$/i,Ky=["POST","PUT"];t=Qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cl.g(),this.v=this.o?eh(this.o):eh(cl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Sh(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ky,h,void 0))||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,G]of f)this.g.setRequestHeader(O,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ph(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Sh(this,O)}};function Sh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Rh(a),yo(a)}function Rh(a){a.A||(a.A=!0,Ee(a,"complete"),Ee(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ee(this,"complete"),Ee(this,"abort"),yo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yo(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ch(this):this.bb())},t.bb=function(){Ch(this)};function Ch(a){if(a.h&&typeof o<"u"&&(!a.v[1]||An(a)!=4||a.Z()!=2)){if(a.u&&An(a)==4)yt(a.Ea,0,a);else if(Ee(a,"readystatechange"),An(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=G===0){var N=String(a.D).match(yh)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),g=!Wy.test(N?N.toLowerCase():"")}f=g}if(f)Ee(a,"complete"),Ee(a,"success");else{a.m=6;try{var O=2<An(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Rh(a)}}finally{yo(a)}}}}function yo(a,h){if(a.g){Ph(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ee(a,"ready");try{f.onreadystatechange=g}catch{}}}function Ph(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Yt(h)}};function kh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Gy(a){const h={};a=(a.g&&2<=An(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(V(a[g]))continue;var f=S(a[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[N]||[];h[N]=O,O.push(f)}b(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Nh(a){this.Aa=0,this.i=[],this.j=new Gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ti("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ti("baseRetryDelayMs",5e3,a),this.cb=ti("retryDelaySeedMs",1e4,a),this.Wa=ti("forwardChannelMaxRetries",2,a),this.wa=ti("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new dh(a&&a.concurrentRequestLimit),this.Da=new Hy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){Nt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Fh(this,null,this.W),Eo(this)};function _l(a){if(Dh(a),a.G==3){var h=a.U++,f=bn(a.I);if(je(f,"SID",a.K),je(f,"RID",h),je(f,"TYPE","terminate"),ni(a,f),h=new Jn(a,a.j,h),h.L=2,h.v=mo(bn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Bh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ho(h)}Uh(a)}function vo(a){a.g&&(vl(a),a.g.cancel(),a.g=null)}function Dh(a){vo(a),a.u&&(l.clearTimeout(a.u),a.u=null),wo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Eo(a){if(!fh(a.h)&&!a.s){a.s=!0;var h=a.Ga;de||en(),Ie||(de(),Ie=!0),Bt.add(h,a),a.B=0}}function Qy(a,h){return ph(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ks(m(a.Ga,a,h),$h(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Jn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Vh(this,N,h),f=bn(this.I),je(f,"RID",a),je(f,"CVER",22),this.D&&je(f,"X-HTTP-Session-Id",this.D),ni(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(Ah(O)))+"&"+h:this.m&&gl(f,this.m,O)),ml(this.h,N),this.Ua&&je(f,"TYPE","init"),this.P?(je(f,"$req",h),je(f,"SID","null"),N.T=!0,hl(N,f,null)):hl(N,f,h),this.G=2}}else this.G==3&&(a?Oh(this,a):this.i.length==0||fh(this.h)||Oh(this))};function Oh(a,h){var f;h?f=h.l:f=a.U++;const g=bn(a.I);je(g,"SID",a.K),je(g,"RID",f),je(g,"AID",a.T),ni(a,g),a.m&&a.o&&gl(g,a.m,a.o),f=new Jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Vh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ml(a.h,f),hl(f,g,h)}function ni(a,h){a.H&&ae(a.H,function(f,g){je(h,g,f)}),a.l&&_h({},function(f,g){je(h,g,f)})}function Vh(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var N=a.i;let O=-1;for(;;){const G=["count="+f];O==-1?0<f?(O=N[0].g,G.push("ofs="+O)):O=0:G.push("ofs="+O);let Le=!0;for(let ft=0;ft<f;ft++){let ke=N[ft].g;const Et=N[ft].map;if(ke-=O,0>ke)O=Math.max(0,N[ft].g-100),Le=!1;else try{zy(Et,G,"req"+ke+"_")}catch{g&&g(Et)}}if(Le){g=G.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Mh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;de||en(),Ie||(de(),Ie=!0),Bt.add(h,a),a.v=0}}function yl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ks(m(a.Fa,a),$h(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,xh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ks(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),vo(this),xh(this))};function vl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function xh(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=bn(a.qa);je(h,"RID","rpc"),je(h,"SID",a.K),je(h,"AID",a.T),je(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(h,"TO",a.ja),je(h,"TYPE","xmlhttp"),ni(a,h),a.m&&a.o&&gl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=mo(bn(h)),f.m=null,f.P=!0,ch(f,a)}t.Za=function(){this.C!=null&&(this.C=null,vo(this),yl(this),Nt(19))};function wo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Lh(a,h){var f=null;if(a.g==h){wo(a),vl(a),a.g=null;var g=2}else if(pl(a.h,h))f=h.D,mh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;g=lo(),Ee(g,new ih(g,f)),Eo(a)}else Mh(a);else if(N=h.s,N==3||N==0&&0<h.X||!(g==1&&Qy(a,h)||g==2&&yl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),N){case 1:Mr(a,5);break;case 4:Mr(a,10);break;case 3:Mr(a,6);break;default:Mr(a,2)}}}function $h(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Mr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const N=!g;g=new Vr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||fo(g,"https"),mo(g),N?jy(g.toString(),f):qy(g.toString(),f)}else Nt(2);a.G=0,a.l&&a.l.sa(h),Uh(a),Dh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function Uh(a){if(a.G=0,a.ka=[],a.l){const h=gh(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function Fh(a,h,f){var g=f instanceof Vr?bn(f):new Vr(f);if(g.g!="")h&&(g.g=h+"."+g.g),po(g,g.s);else{var N=l.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var O=new Vr(null);g&&fo(O,g),h&&(O.g=h),N&&po(O,N),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&je(g,f,h),je(g,"VER",a.la),ni(a,g),g}function Bh(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Qe(new go({eb:f})):new Qe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jh(){}t=jh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function To(){}To.prototype.g=function(a,h){return new jt(a,h)};function jt(a,h){ce.call(this),this.g=new Nh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!V(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!V(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ns(this)}R(jt,ce),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){_l(this.g)},jt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=dt(a),a=f);h.i.push(new Dy(h.Ya++,a)),h.G==3&&Eo(h)},jt.prototype.N=function(){this.g.l=null,delete this.j,_l(this.g),delete this.g,jt.aa.N.call(this)};function qh(a){al.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(qh,al);function Hh(){ll.call(this),this.status=1}R(Hh,ll);function ns(a){this.g=a}R(ns,jh),ns.prototype.ua=function(){Ee(this.g,"a")},ns.prototype.ta=function(a){Ee(this.g,new qh(a))},ns.prototype.sa=function(a){Ee(this.g,new Hh)},ns.prototype.ra=function(){Ee(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,$g=function(){return new To},Lg=function(){return lo()},xg=Dr,_c={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},co.NO_ERROR=0,co.TIMEOUT=8,co.HTTP_ERROR=6,jo=co,oh.COMPLETE="complete",Mg=oh,th.EventType=zs,zs.OPEN="a",zs.CLOSE="b",zs.ERROR="c",zs.MESSAGE="d",ce.prototype.listen=ce.prototype.K,ai=th,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Vg=Qe}).apply(typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{});const mf="@firebase/firestore",gf="4.7.9";/**
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
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let Us="11.4.0";/**
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
 */const Qr=new Zc("@firebase/firestore");function cs(){return Qr.logLevel}function te(t,...e){if(Qr.logLevel<=be.DEBUG){const n=e.map(fu);Qr.debug(`Firestore (${Us}): ${t}`,...n)}}function Fn(t,...e){if(Qr.logLevel<=be.ERROR){const n=e.map(fu);Qr.error(`Firestore (${Us}): ${t}`,...n)}}function Ps(t,...e){if(Qr.logLevel<=be.WARN){const n=e.map(fu);Qr.warn(`Firestore (${Us}): ${t}`,...n)}}function fu(t){if(typeof t=="string")return t;try{/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function Me(t,e){t||he()}function ye(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ug{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class qb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Hb{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new Ug(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new It(e)}}class zb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Wb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _f{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kb{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,nn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Me(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new _f(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new _f(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Gb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Fg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Gb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function ks(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const yf=-62135596800,vf=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*vf);return new it(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<yf)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vf}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-yf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new it(0,0))}static max(){return new ge(new it(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ef="__name__";class dn{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return dn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof dn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=dn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=dn.isNumericId(e),s=dn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?dn.extractNumericId(e).compare(dn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pr.fromString(e.substring(4,e.length-2))}}class He extends dn{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const Qb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends dn{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return Qb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ef}static keyField(){return new gt([Ef])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(He.fromString(e))}static fromName(e){return new oe(He.fromString(e).popFirst(5))}static empty(){return new oe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new He(e.slice()))}}/**
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
 */const Vi=-1;function Jb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new _r(s,oe.empty(),e)}function Yb(t){return new _r(t.readTime,t.key,Vi)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(ge.min(),oe.empty(),Vi)}static max(){return new _r(ge.max(),oe.empty(),Vi)}}function Xb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
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
 */const Zb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fs(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==Zb)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function tA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Fa.ae=-1;/**
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
 */const pu=-1;function Ba(t){return t==null}function la(t){return t===0&&1/t==-1/0}function nA(t){return typeof t=="number"&&Number.isInteger(t)&&!la(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Bg="";function rA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=wf(e)),e=sA(t.get(n),e);return wf(e)}function sA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Bg:n+="";break;default:n+=i}}return n}function wf(t){return t+Bg+""}/**
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
 */function Tf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Po(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Po(this.root,e,this.comparator,!1)}getReverseIterator(){return new Po(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Po(this.root,e,this.comparator,!0)}}class Po{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new If(this.data.getIterator())}getIteratorFrom(e){return new If(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class If{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new ot(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qg("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const iA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(Me(!!t),typeof t=="string"){let e=0;const n=iA.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
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
 */const Hg="server_timestamp",zg="__type__",Wg="__previous_value__",Kg="__local_write_time__";function mu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[zg])===null||n===void 0?void 0:n.stringValue)===Hg}function ja(t){const e=t.mapValue.fields[Wg];return mu(e)?ja(e):e}function Mi(t){const e=yr(t.mapValue.fields[Kg].timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class oA{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}const ca="(default)";class xi{constructor(e,n){this.projectId=e,this.database=n||ca}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database===ca}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Gg="__type__",aA="__max__",ko={mapValue:{}},Qg="__vector__",ua="value";function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mu(t)?4:cA(t)?9007199254740991:lA(t)?10:11:he()}function Tn(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mi(t).isEqual(Mi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=yr(s.timestampValue),l=yr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vr(s.bytesValue).isEqual(vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),l=Ye(i.doubleValue);return o===l?la(o)===la(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ks(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Tf(o)!==Tf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Tn(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function Li(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return bf(t.timestampValue,e.timestampValue);case 4:return bf(Mi(t),Mi(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(i,o){const l=vr(i),c=vr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Se(l[u],c[u]);if(d!==0)return d}return Se(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Se(Ye(i.latitude),Ye(o.latitude));return l!==0?l:Se(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Af(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},_=(l=p[ua])===null||l===void 0?void 0:l.arrayValue,R=(c=m[ua])===null||c===void 0?void 0:c.arrayValue,A=Se(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return A!==0?A:Af(_,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ko.mapValue&&o===ko.mapValue)return 0;if(i===ko.mapValue)return 1;if(o===ko.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Se(c[p],d[p]);if(m!==0)return m;const _=Ns(l[c[p]],u[d[p]]);if(_!==0)return _}return Se(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function bf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=yr(t),r=yr(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function Af(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ns(n[s],r[s]);if(i)return i}return Se(n.length,r.length)}function Ds(t){return yc(t)}function yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=yc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${yc(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function qo(t){switch(Er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ja(t);return e?16+qo(e):16;case 5:return 2*t.stringValue.length;case 6:return vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+qo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Pr(r.fields,(i,o)=>{s+=i.length+qo(o)}),s}(t.mapValue);default:throw he()}}function Sf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vc(t){return!!t&&"integerValue"in t}function gu(t){return!!t&&"arrayValue"in t}function Rf(t){return!!t&&"nullValue"in t}function Cf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ho(t){return!!t&&"mapValue"in t}function lA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Gg])===null||n===void 0?void 0:n.stringValue)===Qg}function Ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===aA}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ei(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ei(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ho(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Pr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(Ei(this.value))}}function Jg(t){const e=[];return Pr(t.fields,(n,r)=>{const s=new gt([n]);if(Ho(r)){const i=Jg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
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
 */class St{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new St(e,0,ge.min(),ge.min(),ge.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new St(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new St(e,2,n,ge.min(),ge.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,ge.min(),ge.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ha{constructor(e,n){this.position=e,this.inclusive=n}}function Pf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function kf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class da{constructor(e,n="asc"){this.field=e,this.dir=n}}function uA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yg{}class tt extends Yg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dA(e,n,r):n==="array-contains"?new mA(e,r):n==="in"?new gA(e,r):n==="not-in"?new _A(e,r):n==="array-contains-any"?new yA(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fA(e,r):new pA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ns(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends Yg{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new ln(e,n)}matches(e){return Xg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Xg(t){return t.op==="and"}function Zg(t){return hA(t)&&Xg(t)}function hA(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function Ec(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+Ds(t.value);if(Zg(t))return t.filters.map(e=>Ec(e)).join(",");{const e=t.filters.map(n=>Ec(n)).join(",");return`${t.op}(${e})`}}function e_(t,e){return t instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&e_(o,s.filters[l]),!0):!1}(t,e):void he()}function t_(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ds(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(t_).join(" ,")+"}"}(t):"Filter"}class dA extends tt{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class fA extends tt{constructor(e,n){super(e,"in",n),this.keys=n_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pA extends tt{constructor(e,n){super(e,"not-in",n),this.keys=n_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function n_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class mA extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gu(n)&&Li(n.arrayValue,this.value)}}class gA extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Li(this.value.arrayValue,n)}}class _A extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Li(this.value.arrayValue,n)}}class yA extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Li(this.value.arrayValue,r))}}/**
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
 */class vA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.le=null}}function Nf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new vA(t,e,n,r,s,i,o)}function _u(t){const e=ye(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ec(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ba(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ds(r)).join(",")),e.le=n}return e.le}function yu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!e_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kf(t.startAt,e.startAt)&&kf(t.endAt,e.endAt)}function wc(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Yi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function EA(t,e,n,r,s,i,o,l){return new Yi(t,e,n,r,s,i,o,l)}function qa(t){return new Yi(t)}function Df(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function r_(t){return t.collectionGroup!==null}function wi(t){const e=ye(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ot(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new da(i,r))}),n.has(gt.keyField().canonicalString())||e.he.push(new da(gt.keyField(),r))}return e.he}function _n(t){const e=ye(t);return e.Pe||(e.Pe=wA(e,wi(t))),e.Pe}function wA(t,e){if(t.limitType==="F")return Nf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new da(s.field,i)});const n=t.endAt?new ha(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ha(t.startAt.position,t.startAt.inclusive):null;return Nf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Tc(t,e){const n=t.filters.concat([e]);return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ic(t,e,n){return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ha(t,e){return yu(_n(t),_n(e))&&t.limitType===e.limitType}function s_(t){return`${_u(_n(t))}|lt:${t.limitType}`}function us(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>t_(s)).join(", ")}]`),Ba(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ds(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ds(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of wi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Pf(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,wi(r),s)||r.endAt&&!function(o,l,c){const u=Pf(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,wi(r),s))}(t,e)}function TA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function i_(t){return(e,n)=>{let r=!1;for(const s of wi(t)){const i=IA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function IA(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ns(c,u):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
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
 */class Yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jg(this.inner)}size(){return this.innerSize}}/**
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
 */const bA=new Ge(oe.comparator);function Bn(){return bA}const o_=new Ge(oe.comparator);function li(...t){let e=o_;for(const n of t)e=e.insert(n.key,n);return e}function a_(t){let e=o_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return Ti()}function l_(){return Ti()}function Ti(){return new Yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const AA=new Ge(oe.comparator),SA=new ot(oe.comparator);function Ae(...t){let e=SA;for(const n of t)e=e.add(n);return e}const RA=new ot(Se);function CA(){return RA}/**
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
 */function vu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:la(e)?"-0":e}}function c_(t){return{integerValue:""+t}}function PA(t,e){return nA(e)?c_(e):vu(t,e)}/**
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
 */class Wa{constructor(){this._=void 0}}function kA(t,e,n){return t instanceof $i?function(s,i){const o={fields:{[zg]:{stringValue:Hg},[Kg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mu(i)&&(i=ja(i)),i&&(o.fields[Wg]=i),{mapValue:o}}(n,e):t instanceof Ui?h_(t,e):t instanceof Fi?d_(t,e):function(s,i){const o=u_(s,i),l=Of(o)+Of(s.Ie);return vc(o)&&vc(s.Ie)?c_(l):vu(s.serializer,l)}(t,e)}function NA(t,e,n){return t instanceof Ui?h_(t,e):t instanceof Fi?d_(t,e):n}function u_(t,e){return t instanceof fa?function(r){return vc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class $i extends Wa{}class Ui extends Wa{constructor(e){super(),this.elements=e}}function h_(t,e){const n=f_(e);for(const r of t.elements)n.some(s=>Tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Fi extends Wa{constructor(e){super(),this.elements=e}}function d_(t,e){let n=f_(e);for(const r of t.elements)n=n.filter(s=>!Tn(s,r));return{arrayValue:{values:n}}}class fa extends Wa{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Of(t){return Ye(t.integerValue||t.doubleValue)}function f_(t){return gu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class DA{constructor(e,n){this.field=e,this.transform=n}}function OA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ui&&s instanceof Ui||r instanceof Fi&&s instanceof Fi?ks(r.elements,s.elements,Tn):r instanceof fa&&s instanceof fa?Tn(r.Ie,s.Ie):r instanceof $i&&s instanceof $i}(t.transform,e.transform)}class VA{constructor(e,n){this.version=e,this.transformResults=n}}class Ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ka{}function p_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ga(t.key,Ft.none()):new Xi(t.key,t.data,Ft.none());{const n=t.data,r=Ut.empty();let s=new ot(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new kr(t.key,r,new Wt(s.toArray()),Ft.none())}}function MA(t,e,n){t instanceof Xi?function(s,i,o){const l=s.value.clone(),c=Mf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(s,i,o){if(!zo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Mf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(m_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ii(t,e,n,r){return t instanceof Xi?function(i,o,l,c){if(!zo(i.precondition,o))return l;const u=i.value.clone(),d=xf(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(i,o,l,c){if(!zo(i.precondition,o))return l;const u=xf(i.fieldTransforms,c,o),d=o.data;return d.setAll(m_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return zo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function xA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=u_(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function Vf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ks(r,s,(i,o)=>OA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xi extends Ka{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kr extends Ka{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function m_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mf(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,NA(o,l,n[s]))}return r}function xf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,kA(i,o,e))}return r}class Ga extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LA extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $A{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&MA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ii(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ii(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=l_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=p_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&ks(this.mutations,e.mutations,(n,r)=>Vf(n,r))&&ks(this.baseMutations,e.baseMutations,(n,r)=>Vf(n,r))}}class Eu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length);let s=function(){return AA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Eu(e,n,r,s)}}/**
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
 */class UA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,Ce;function BA(t){switch(t){case $.OK:return he();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return he()}}function g_(t){if(t===void 0)return Fn("GRPC error has no .code"),$.UNKNOWN;switch(t){case et.OK:return $.OK;case et.CANCELLED:return $.CANCELLED;case et.UNKNOWN:return $.UNKNOWN;case et.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case et.INTERNAL:return $.INTERNAL;case et.UNAVAILABLE:return $.UNAVAILABLE;case et.UNAUTHENTICATED:return $.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case et.NOT_FOUND:return $.NOT_FOUND;case et.ALREADY_EXISTS:return $.ALREADY_EXISTS;case et.PERMISSION_DENIED:return $.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case et.ABORTED:return $.ABORTED;case et.OUT_OF_RANGE:return $.OUT_OF_RANGE;case et.UNIMPLEMENTED:return $.UNIMPLEMENTED;case et.DATA_LOSS:return $.DATA_LOSS;default:return he()}}(Ce=et||(et={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jA(){return new TextEncoder}/**
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
 */const qA=new pr([4294967295,4294967295],0);function Lf(t){const e=jA().encode(t),n=new Og;return n.update(e),new Uint8Array(n.digest())}function $f(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new pr([n,r],0),new pr([s,i],0)]}class wu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ci(`Invalid padding: ${n}`);if(r<0)throw new ci(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ci(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ci(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=pr.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(pr.fromNumber(r)));return s.compare(qA)===1&&(s=new pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Lf(e),[r,s]=$f(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new wu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const n=Lf(e),[r,s]=$f(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qa(ge.min(),s,new Ge(Se),Bn(),Ae())}}class Zi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zi(r,n,Ae(),Ae(),Ae())}}/**
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
 */class Wo{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class __{constructor(e,n){this.targetId=e,this.ge=n}}class y_{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Uf{constructor(){this.pe=0,this.ye=Ff(),this.we=_t.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=Ae(),n=Ae(),r=Ae();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Zi(this.we,this.be,e,n,r)}Me(){this.Se=!1,this.ye=Ff()}xe(e,n){this.Se=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Me(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class HA{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Bn(),this.$e=No(),this.Ke=No(),this.Ue=new Ge(Se)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(wc(i))if(r===0){const o=new oe(i.path);this.ze(n,o,St.newNoDocument(o,ge.min()))}else Me(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e),c=l?this.nt(l,e,o):1;if(c!==0){this.Ye(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=vr(r).toUint8Array()}catch(c){if(c instanceof qg)return Ps("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new wu(o,s,i)}catch(c){return Ps(c instanceof ci?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const l=this.Xe(o);if(l){if(i.current&&wc(l.target)){const c=new oe(l.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,St.newNoDocument(c,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=Ae();this.Ke.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new Qa(e,n,this.Ue,this.Qe,r);return this.Qe=Bn(),this.$e=No(),this.Ke=No(),this.Ue=new Ge(Se),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(e)),this.Ke=this.Ke.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Uf,this.qe.set(e,n)),n}ct(e){let n=this.Ke.get(e);return n||(n=new ot(Se),this.Ke=this.Ke.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new ot(Se),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Uf),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function No(){return new Ge(oe.comparator)}function Ff(){return new Ge(oe.comparator)}const zA={asc:"ASCENDING",desc:"DESCENDING"},WA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KA={and:"AND",or:"OR"};class GA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bc(t,e){return t.useProto3Json||Ba(e)?e:{value:e}}function pa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QA(t,e){return pa(t,e.toTimestamp())}function yn(t){return Me(!!t),ge.fromTimestamp(function(n){const r=yr(n);return new it(r.seconds,r.nanos)}(t))}function Tu(t,e){return Ac(t,e).canonicalString()}function Ac(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function E_(t){const e=He.fromString(t);return Me(A_(e)),e}function Sc(t,e){return Tu(t.databaseId,e.path)}function jl(t,e){const n=E_(e);if(n.get(1)!==t.databaseId.projectId)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(T_(n))}function w_(t,e){return Tu(t.databaseId,e)}function JA(t){const e=E_(t);return e.length===4?He.emptyPath():T_(e)}function Rc(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function T_(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bf(t,e,n){return{name:Sc(t,e),fields:n.value.mapValue.fields}}function YA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Me(d===void 0||typeof d=="string"),_t.fromBase64String(d||"")):(Me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),_t.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?$.UNKNOWN:g_(u.code);return new ne(d,u.message||"")}(o);n=new y_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=jl(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):ge.min(),l=new Ut({mapValue:{fields:r.document.fields}}),c=St.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Wo(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=jl(t,r.document),i=r.readTime?yn(r.readTime):ge.min(),o=St.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Wo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=jl(t,r.document),i=r.removedTargetIds||[];n=new Wo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new FA(s,i),l=r.targetId;n=new __(l,o)}}return n}function XA(t,e){let n;if(e instanceof Xi)n={update:Bf(t,e.key,e.value)};else if(e instanceof Ga)n={delete:Sc(t,e.key)};else if(e instanceof kr)n={update:Bf(t,e.key,e.data),updateMask:aS(e.fieldMask)};else{if(!(e instanceof LA))return he();n={verify:Sc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof $i)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fa)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:QA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function ZA(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(ge.min())&&(o=yn(i)),new VA(o,s.transformResults||[])}(n,e))):[]}function eS(t,e){return{documents:[w_(t,e.path)]}}function tS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=w_(t,s);const i=function(u){if(u.length!==0)return b_(ln.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:hs(m.field),direction:sS(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=bc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:s}}function nS(t){let e=JA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=I_(p);return m instanceof ln&&Zg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new da(ds(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Ba(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new ha(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new ha(_,m)}(n.endAt)),EA(e,s,o,i,l,"F",c,u)}function rS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function I_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ds(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ds(n.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ds(n.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ds(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(ds(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>I_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function sS(t){return zA[t]}function iS(t){return WA[t]}function oS(t){return KA[t]}function hs(t){return{fieldPath:t.canonicalString()}}function ds(t){return gt.fromServerFormat(t.fieldPath)}function b_(t){return t instanceof tt?function(n){if(n.op==="=="){if(Cf(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NAN"}};if(Rf(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cf(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NAN"}};if(Rf(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hs(n.field),op:iS(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>b_(s));return r.length===1?r[0]:{compositeFilter:{op:oS(n.op),filters:r}}}(t):he()}function aS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function A_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),l=_t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class lS{constructor(e){this.Tt=e}}function cS(t){const e=nS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ic(e,e.limit,"L"):e}/**
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
 */class uS{constructor(){this.Tn=new hS}addToCollectionParentIndex(e,n){return this.Tn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(_r.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class hS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ot(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ot(He.comparator)).toArray()}}/**
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
 */const jf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},S_=41943040;class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(S_,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
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
 */class Os{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Os(0)}static Un(){return new Os(-1)}}/**
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
 */const qf="LruGarbageCollector",dS=1048576;function Hf([t,e],[n,r]){const s=Se(t,n);return s===0?Se(e,r):s}class fS{constructor(e){this.Hn=e,this.buffer=new ot(Hf),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Hf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class pS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){te(qf,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bs(n)?te(qf,"Ignoring IndexedDB error during garbage collection: ",n):await Fs(n)}await this.er(3e5)})}}class mS{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Fa.ae);const r=new fS(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(jf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jf):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),cs()<=be.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function gS(t,e){return new mS(t,e)}/**
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
 */class _S{constructor(){this.changes=new Yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class vS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ii(r.mutation,s,Wt.empty(),it.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=Br();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=li();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Bn();const o=Ti(),l=function(){return Ti()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof kr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Ii(d.mutation,u,d.mutation.getFieldMask(),it.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new yS(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ti();let s=new Ge((o,l)=>o-l),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Wt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Ae()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=l_();d.forEach(m=>{if(!i.has(m)){const _=p_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):r_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Br());let l=Vi,c=i;return o.next(u=>F.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ae())).next(d=>({batchId:l,changes:a_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=li();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=li();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,c=>{const u=function(p,m){return new Yi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,St.newInvalidDocument(d)))});let l=li();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Ii(d.mutation,u,Wt.empty(),it.now()),za(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class ES{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return F.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:cS(s.bundledQuery),readTime:yn(s.readTime)}}(n)),F.resolve()}}/**
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
 */class wS{constructor(){this.overlays=new Ge(oe.comparator),this.Rr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Br(),i=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Br(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Br(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return F.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UA(n,r));let i=this.Rr.get(n);i===void 0&&(i=Ae(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class TS{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Iu{constructor(){this.Vr=new ot(at.mr),this.gr=new ot(at.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new at(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new at(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new oe(new He([])),r=new at(n,e),s=new at(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new oe(new He([])),r=new at(n,e),s=new at(n,e+1);let i=Ae();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new at(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return oe.comparator(e.key,n.key)||Se(e.Cr,n.Cr)}static pr(e,n){return Se(e.Cr,n.Cr)||oe.comparator(e.key,n.key)}}/**
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
 */class IS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new ot(at.mr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $A(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Mr=this.Mr.add(new at(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?pu:this.Fr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),s=new at(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const l=this.Or(o.Cr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(Se);return n.forEach(s=>{const i=new at(s,0),o=new at(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],l=>{r=r.add(l.Cr)})}),F.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new at(new oe(i),0);let l=new ot(Se);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Cr)),!0)},o),F.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return F.forEach(n.mutations,s=>{const i=new at(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new at(n,0),s=this.Mr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class bS{constructor(e){this.kr=e,this.docs=function(){return new Ge(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,l=new oe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Xb(Yb(d),r)<=0||(s.has(d.key)||za(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}qr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AS(this)}getSize(e){return F.resolve(this.size)}}class AS extends _S{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class SS{constructor(e){this.persistence=e,this.Qr=new Yr(n=>_u(n),yu),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Iu,this.targetCount=0,this.Ur=Os.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),F.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new Os(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.zn(n),F.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Kr.containsKey(n))}}/**
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
 */class R_{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Fa(0),this.zr=!1,this.zr=!0,this.jr=new TS,this.referenceDelegate=e(this),this.Hr=new SS(this),this.indexManager=new uS,this.remoteDocumentCache=function(s){return new bS(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new lS(n),this.Yr=new ES(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new IS(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new RS(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return F.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class RS extends eA{constructor(e){super(),this.currentSequenceNumber=e}}class bu{constructor(e){this.persistence=e,this.ti=new Iu,this.ni=null}static ri(e){return new bu(e)}get ii(){if(this.ni)return this.ni;throw he()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),F.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ii,r=>{const s=oe.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return F.or([()=>F.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class ma{constructor(e,n){this.persistence=e,this.oi=new Yr(r=>rA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=gS(this,n)}static ri(e,n){return new ma(e,n)}Zr(){}Xr(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return F.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ge.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),F.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=qo(e.data.value)),n}ar(e,n,r){return F.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Au{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Au(e,n.fromCache,r,s)}}/**
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
 */class CS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class PS{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return hT()?8:tA(kt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new CS;return this._s(e,n,o).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(cs()<=be.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),F.resolve()):(cs()<=be.DEBUG&&te("QueryEngine","Query:",us(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(cs()<=be.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):F.resolve())}rs(e,n){if(Df(n))return F.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ic(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ae(...i);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(n,l);return this.ls(n,u,o,c.readTime)?this.rs(e,Ic(n,null,"F")):this.hs(e,u,n,c)}))})))}ss(e,n,r,s){return Df(n)||s.isEqual(ge.min())?F.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?F.resolve(null):(cs()<=be.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),us(n)),this.hs(e,o,n,Jb(s,Vi)).next(l=>l))})}cs(e,n){let r=new ot(i_(e));return n.forEach((s,i)=>{za(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return cs()<=be.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",us(n)),this.ns.getDocumentsMatchingQuery(e,n,_r.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Su="LocalStore",kS=3e8;class NS{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Ge(Se),this.Is=new Yr(i=>_u(i),yu),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vS(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function DS(t,e,n,r){return new NS(t,e,n,r)}async function C_(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ae();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:l}))})})}function OS(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let _=F.resolve();return m.forEach(R=>{_=_.next(()=>d.getEntry(c,R)).next(A=>{const P=u.docVersions.get(R);Me(P!==null),A.version.compareTo(P)<0&&(p.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),d.addEntry(A)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ae();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function P_(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function VS(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(_t.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(A,P,D){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=kS?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(m,_,d)&&l.push(n.Hr.updateTargetData(i,_))});let c=Bn(),u=Ae();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(MS(i,o,e.documentUpdates).next(d=>{c=d.Vs,u=d.fs})),!r.isEqual(ge.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ts=s,i))}function MS(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ge.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te(Su,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Vs:o,fs:s}})}function xS(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=pu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LS(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Cc(t,e,n){const r=ye(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Bs(o))throw o;te(Su,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function zf(t,e,n){const r=ye(t);let s=ge.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ye(c),m=p.Is.get(d);return m!==void 0?F.resolve(p.Ts.get(m)):p.Hr.getTargetData(u,d)}(r,o,_n(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Ae())).next(l=>($S(r,TA(e),l),{documents:l,gs:i})))}function $S(t,e,n){let r=t.Es.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Wf{constructor(){this.activeTargetIds=CA()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class US{constructor(){this.ho=new Wf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Wf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FS{To(e){}shutdown(){}}/**
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
 */const Kf="ConnectivityMonitor";class Gf{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){te(Kf,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){te(Kf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Do=null;function Pc(){return Do===null?Do=function(){return 268435456+Math.round(2147483648*Math.random())}():Do++,"0x"+Do.toString(16)}/**
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
 */const ql="RestConnection",BS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class jS{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===ca?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,n,r,s,i){const o=Pc(),l=this.So(e,n.toUriEncodedString());te(ql,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(u=>(te(ql,`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ps(ql,`RPC '${e}' ${o} failed with error: `,u,"url: ",l,"request:",r),u})}Co(e,n,r,s,i,o){return this.bo(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Us}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,n){const r=BS[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class qS{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const Tt="WebChannelConnection";class HS extends jS{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Pc();return new Promise((o,l)=>{const c=new Vg;c.setWithCredentials(!0),c.listenOnce(Mg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case jo.NO_ERROR:const d=c.getResponseJson();te(Tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case jo.TIMEOUT:te(Tt,`RPC '${e}' ${i} timed out`),l(new ne($.DEADLINE_EXCEEDED,"Request time out"));break;case jo.HTTP_ERROR:const p=c.getStatus();if(te(Tt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const R=function(P){const D=P.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(D)>=0?D:$.UNKNOWN}(_.status);l(new ne(R,_.message))}else l(new ne($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ne($.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(Tt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(Tt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Wo(e,n,r){const s=Pc(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$g(),l=Lg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");te(Tt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,_=!1;const R=new qS({Fo:P=>{_?te(Tt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(te(Tt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),te(Tt,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Mo:()=>p.close()}),A=(P,D,V)=>{P.listen(D,M=>{try{V(M)}catch(z){setTimeout(()=>{throw z},0)}})};return A(p,ai.EventType.OPEN,()=>{_||(te(Tt,`RPC '${e}' stream ${s} transport opened.`),R.Qo())}),A(p,ai.EventType.CLOSE,()=>{_||(_=!0,te(Tt,`RPC '${e}' stream ${s} transport closed`),R.Ko())}),A(p,ai.EventType.ERROR,P=>{_||(_=!0,Ps(Tt,`RPC '${e}' stream ${s} transport errored:`,P),R.Ko(new ne($.UNAVAILABLE,"The operation could not be completed")))}),A(p,ai.EventType.MESSAGE,P=>{var D;if(!_){const V=P.data[0];Me(!!V);const M=V,z=(M==null?void 0:M.error)||((D=M[0])===null||D===void 0?void 0:D.error);if(z){te(Tt,`RPC '${e}' stream ${s} received error:`,z);const Z=z.status;let ae=function(v){const I=et[v];if(I!==void 0)return g_(I)}(Z),b=z.message;ae===void 0&&(ae=$.INTERNAL,b="Unknown error status: "+Z+" with message "+z.message),_=!0,R.Ko(new ne(ae,b)),p.close()}else te(Tt,`RPC '${e}' stream ${s} received:`,V),R.Uo(V)}}),A(l,xg.STAT_EVENT,P=>{P.stat===_c.PROXY?te(Tt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===_c.NOPROXY&&te(Tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.$o()},0),R}}function Hl(){return typeof document<"u"?document:null}/**
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
 */function Ja(t){return new GA(t,!0)}/**
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
 */class k_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Qf="PersistentStream";class N_{constructor(e,n,r,s,i,o,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new k_(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new ne($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return te(Qf,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(te(Qf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zS extends N_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=YA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?yn(o.readTime):ge.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Rc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=wc(c)?{documents:eS(i,c)}:{query:tS(i,c).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=v_(i,o.resumeToken);const u=bc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){l.readTime=pa(i,o.snapshotVersion.toTimestamp());const u=bc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=rS(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Rc(this.serializer),n.removeTarget=e,this.I_(n)}}class WS extends N_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=ZA(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Rc(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XA(this.serializer,r))};this.I_(n)}}/**
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
 */class KS{}class GS extends KS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.bo(e,Ac(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne($.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,Ac(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne($.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class QS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Fn(n),this.N_=!1):te("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Jr="RemoteStore";class JS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{Xr(this)&&(te(Jr,"Restarting streams for network reachability change."),await async function(c){const u=ye(c);u.W_.add(4),await eo(u),u.j_.set("Unknown"),u.W_.delete(4),await Ya(u)}(this))})}),this.j_=new QS(r,s)}}async function Ya(t){if(Xr(t))for(const e of t.G_)await e(!0)}async function eo(t){for(const e of t.G_)await e(!1)}function D_(t,e){const n=ye(t);n.U_.has(e.targetId)||(n.U_.set(e.targetId,e),ku(n)?Pu(n):js(n).c_()&&Cu(n,e))}function Ru(t,e){const n=ye(t),r=js(n);n.U_.delete(e),r.c_()&&O_(n,e),n.U_.size===0&&(r.c_()?r.P_():Xr(n)&&n.j_.set("Unknown"))}function Cu(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}js(t).y_(e)}function O_(t,e){t.H_.Ne(e),js(t).w_(e)}function Pu(t){t.H_=new HA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.U_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),js(t).start(),t.j_.B_()}function ku(t){return Xr(t)&&!js(t).u_()&&t.U_.size>0}function Xr(t){return ye(t).W_.size===0}function V_(t){t.H_=void 0}async function YS(t){t.j_.set("Online")}async function XS(t){t.U_.forEach((e,n)=>{Cu(t,e)})}async function ZS(t,e){V_(t),ku(t)?(t.j_.q_(e),Pu(t)):t.j_.set("Unknown")}async function eR(t,e,n){if(t.j_.set("Online"),e instanceof y_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.U_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.U_.delete(l),s.H_.removeTarget(l))}(t,e)}catch(r){te(Jr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ga(t,r)}else if(e instanceof Wo?t.H_.We(e):e instanceof __?t.H_.Ze(e):t.H_.je(e),!n.isEqual(ge.min()))try{const r=await P_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.H_.ot(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.U_.get(u);d&&i.U_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.U_.get(c);if(!d)return;i.U_.set(c,d.withResumeToken(_t.EMPTY_BYTE_STRING,d.snapshotVersion)),O_(i,c);const p=new lr(d.target,c,u,d.sequenceNumber);Cu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te(Jr,"Failed to raise snapshot:",r),await ga(t,r)}}async function ga(t,e,n){if(!Bs(e))throw e;t.W_.add(1),await eo(t),t.j_.set("Offline"),n||(n=()=>P_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Jr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Ya(t)})}function M_(t,e){return e().catch(n=>ga(t,n,e))}async function Xa(t){const e=ye(t),n=wr(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:pu;for(;tR(e);)try{const s=await xS(e.localStore,r);if(s===null){e.K_.length===0&&n.P_();break}r=s.batchId,nR(e,s)}catch(s){await ga(e,s)}x_(e)&&L_(e)}function tR(t){return Xr(t)&&t.K_.length<10}function nR(t,e){t.K_.push(e);const n=wr(t);n.c_()&&n.b_&&n.S_(e.mutations)}function x_(t){return Xr(t)&&!wr(t).u_()&&t.K_.length>0}function L_(t){wr(t).start()}async function rR(t){wr(t).C_()}async function sR(t){const e=wr(t);for(const n of t.K_)e.S_(n.mutations)}async function iR(t,e,n){const r=t.K_.shift(),s=Eu.from(r,e,n);await M_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Xa(t)}async function oR(t,e){e&&wr(t).b_&&await async function(r,s){if(function(o){return BA(o)&&o!==$.ABORTED}(s.code)){const i=r.K_.shift();wr(r).h_(),await M_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xa(r)}}(t,e),x_(t)&&L_(t)}async function Jf(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),te(Jr,"RemoteStore received new credentials");const r=Xr(n);n.W_.add(3),await eo(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Ya(n)}async function aR(t,e){const n=ye(t);e?(n.W_.delete(2),await Ya(n)):e||(n.W_.add(2),await eo(n),n.j_.set("Unknown"))}function js(t){return t.J_||(t.J_=function(n,r,s){const i=ye(n);return i.M_(),new zS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:YS.bind(null,t),No:XS.bind(null,t),Lo:ZS.bind(null,t),p_:eR.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),ku(t)?Pu(t):t.j_.set("Unknown")):(await t.J_.stop(),V_(t))})),t.J_}function wr(t){return t.Y_||(t.Y_=function(n,r,s){const i=ye(n);return i.M_(),new WS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:rR.bind(null,t),Lo:oR.bind(null,t),D_:sR.bind(null,t),v_:iR.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Xa(t)):(await t.Y_.stop(),t.K_.length>0&&(te(Jr,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
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
 */class Nu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Nu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Du(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),Bs(t))return new ne($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ws{static emptySet(e){return new ws(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=li(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Yf{constructor(){this.Z_=new Ge(oe.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):he():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Vs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Vs(e,n,ws.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class lR{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class cR{constructor(){this.queries=Xf(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=Xf(),i.forEach((o,l)=>{for(const c of l.ta)c.onError(r)})})(this,new ne($.ABORTED,"Firestore shutting down"))}}function Xf(){return new Yr(t=>s_(t),Ha)}async function Ou(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new lR,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Du(o,`Initialization of query '${us(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&Mu(n)}async function Vu(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uR(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ta)l.oa(s)&&(r=!0);o.ea=s}}r&&Mu(n)}function hR(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function Mu(t){t.ia.forEach(e=>{e.next()})}var kc,Zf;(Zf=kc||(kc={}))._a="default",Zf.Cache="cache";class xu{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==kc.Cache}}/**
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
 */class $_{constructor(e){this.key=e}}class U_{constructor(e){this.key=e}}class dR{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ae(),this.mutatedKeys=Ae(),this.ya=i_(e),this.wa=new ws(this.ya)}get ba(){return this.fa}Sa(e,n){const r=n?n.Da:new Yf,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=za(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;m&&_?m.data.isEqual(_.data)?R!==A&&(r.track({type:3,doc:_}),P=!0):this.va(m,_)||(r.track({type:2,doc:_}),P=!0,(c&&this.ya(_,c)>0||u&&this.ya(_,u)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),P=!0):m&&!_&&(r.track({type:1,doc:m}),P=!0,(c||u)&&(l=!0)),P&&(_?(o=o.add(_),i=A?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:o,Da:r,ls:l,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,p)=>function(_,R){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return A(_)-A(R)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,u=c!==this.ga;return this.ga=c,o.length!==0||u?{snapshot:new Vs(this.query,e.wa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Yf,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ae(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new U_(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new $_(r))}),n}Oa(e){this.fa=e.gs,this.pa=Ae();const n=this.Sa(e.documents);return this.applyChanges(n,!0)}Na(){return Vs.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Lu="SyncEngine";class fR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pR{constructor(e){this.key=e,this.Ba=!1}}class mR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Yr(l=>s_(l),Ha),this.qa=new Map,this.Qa=new Set,this.$a=new Ge(oe.comparator),this.Ka=new Map,this.Ua=new Iu,this.Wa={},this.Ga=new Map,this.za=Os.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function gR(t,e,n=!0){const r=z_(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await F_(r,e,n,!0),s}async function _R(t,e){const n=z_(t);await F_(n,e,!0,!1)}async function F_(t,e,n,r){const s=await LS(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await yR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&D_(t.remoteStore,s),l}async function yR(t,e,n,r,s){t.Ha=(p,m,_)=>async function(A,P,D,V){let M=P.view.Sa(D);M.ls&&(M=await zf(A.localStore,P.query,!1).then(({documents:b})=>P.view.Sa(b,M)));const z=V&&V.targetChanges.get(P.targetId),Z=V&&V.targetMismatches.get(P.targetId)!=null,ae=P.view.applyChanges(M,A.isPrimaryClient,z,Z);return tp(A,P.targetId,ae.Ma),ae.snapshot}(t,p,m,_);const i=await zf(t.localStore,e,!0),o=new dR(e,i.gs),l=o.Sa(i.documents),c=Zi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);tp(t,n,u.Ma);const d=new fR(e,n,o);return t.ka.set(e,d),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function vR(t,e,n){const r=ye(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!Ha(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ru(r.remoteStore,s.targetId),Nc(r,s.targetId)}).catch(Fs)):(Nc(r,s.targetId),await Cc(r.localStore,s.targetId,!0))}async function ER(t,e){const n=ye(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ru(n.remoteStore,r.targetId))}async function wR(t,e,n){const r=CR(t);try{const s=await function(o,l){const c=ye(o),u=it.now(),d=l.reduce((_,R)=>_.add(R.key),Ae());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=Bn(),A=Ae();return c.ds.getEntries(_,d).next(P=>{R=P,R.forEach((D,V)=>{V.isValidDocument()||(A=A.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,R)).next(P=>{p=P;const D=[];for(const V of l){const M=xA(V,p.get(V.key).overlayedDocument);M!=null&&D.push(new kr(V.key,M,Jg(M.value.mapValue),Ft.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,D,l)}).next(P=>{m=P;const D=P.applyToLocalDocumentSet(p,A);return c.documentOverlayCache.saveOverlays(_,P.batchId,D)})}).then(()=>({batchId:m.batchId,changes:a_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new Ge(Se)),u=u.insert(l,c),o.Wa[o.currentUser.toKey()]=u}(r,s.batchId,n),await to(r,s.changes),await Xa(r.remoteStore)}catch(s){const i=Du(s,"Failed to persist write");n.reject(i)}}async function B_(t,e){const n=ye(t);try{const r=await VS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ka.get(i);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Me(o.Ba):s.removedDocuments.size>0&&(Me(o.Ba),o.Ba=!1))}),await to(n,r,e)}catch(r){await Fs(r)}}function ep(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const l=o.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ye(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.ta)m.sa(l)&&(u=!0)}),u&&Mu(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TR(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ka.get(e),i=s&&s.key;if(i){let o=new Ge(oe.comparator);o=o.insert(i,St.newNoDocument(i,ge.min()));const l=Ae().add(i),c=new Qa(ge.min(),new Map,new Ge(Se),o,l);await B_(r,c),r.$a=r.$a.remove(i),r.Ka.delete(e),$u(r)}else await Cc(r.localStore,e,!1).then(()=>Nc(r,e,n)).catch(Fs)}async function IR(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await OS(n.localStore,e);q_(n,r,null),j_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await to(n,s)}catch(s){await Fs(s)}}async function bR(t,e,n){const r=ye(t);try{const s=await function(o,l){const c=ye(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Me(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);q_(r,e,n),j_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await to(r,s)}catch(s){await Fs(s)}}function j_(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function q_(t,e,n){const r=ye(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function Nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ua.Sr(e).forEach(r=>{t.Ua.containsKey(r)||H_(t,r)})}function H_(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Ru(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ka.delete(n),$u(t))}function tp(t,e,n){for(const r of n)r instanceof $_?(t.Ua.addReference(r.key,e),AR(t,r)):r instanceof U_?(te(Lu,"Document no longer in limbo: "+r.key),t.Ua.removeReference(r.key,e),t.Ua.containsKey(r.key)||H_(t,r.key)):he()}function AR(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(te(Lu,"New document in limbo: "+n),t.Qa.add(r),$u(t))}function $u(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new oe(He.fromString(e)),r=t.za.next();t.Ka.set(r,new pR(n)),t.$a=t.$a.insert(n,r),D_(t.remoteStore,new lr(_n(qa(n.path)),r,"TargetPurposeLimboResolution",Fa.ae))}}async function to(t,e,n){const r=ye(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{o.push(r.Ha(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Au.Yi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(c,u){const d=ye(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(u,m=>F.forEach(m.Hi,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>F.forEach(m.Ji,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Bs(p))throw p;te(Su,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.Ts.get(m),R=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(R);d.Ts=d.Ts.insert(m,A)}}}(r.localStore,i))}async function SR(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){te(Lu,"User change. New user:",e.toKey());const r=await C_(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new ne($.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await to(n,r.Rs)}}function RR(t,e){const n=ye(t),r=n.Ka.get(e);if(r&&r.Ba)return Ae().add(r.key);{let s=Ae();const i=n.qa.get(e);if(!i)return s;for(const o of i){const l=n.ka.get(o);s=s.unionWith(l.view.ba)}return s}}function z_(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=B_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TR.bind(null,e),e.La.p_=uR.bind(null,e.eventManager),e.La.Ja=hR.bind(null,e.eventManager),e}function CR(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bR.bind(null,e),e}class _a{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ja(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return DS(this.persistence,new PS,e.initialUser,this.serializer)}Xa(e){return new R_(bu.ri,this.serializer)}Za(e){return new US}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_a.provider={build:()=>new _a};class PR extends _a{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Me(this.persistence.referenceDelegate instanceof ma);const r=this.persistence.referenceDelegate.garbageCollector;return new pS(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new R_(r=>ma.ri(r,n),this.serializer)}}class Dc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ep(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SR.bind(null,this.syncEngine),await aR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cR}()}createDatastore(e){const n=Ja(e.databaseInfo.databaseId),r=function(i){return new HS(i)}(e.databaseInfo);return function(i,o,l,c){return new GS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new JS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ep(this.syncEngine,n,0),function(){return Gf.D()?new Gf:new FS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new mR(s,i,o,l,c,u);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);te(Jr,"RemoteStore shutting down."),i.W_.add(5),await eo(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Dc.provider={build:()=>new Dc};/**
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
 */class Uu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Tr="FirestoreClient";class kR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=Fg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te(Tr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(Tr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Du(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zl(t,e){t.asyncQueue.verifyOperationInProgress(),te(Tr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await C_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function np(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NR(t);te(Tr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Jf(e.remoteStore,s)),t._onlineComponents=e}async function NR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(Tr,"Using user provided OfflineComponentProvider");try{await zl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ps("Error using user provided cache. Falling back to memory cache: "+n),await zl(t,new _a)}}else te(Tr,"Using default OfflineComponentProvider"),await zl(t,new PR(void 0));return t._offlineComponents}async function W_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(Tr,"Using user provided OnlineComponentProvider"),await np(t,t._uninitializedComponentsProvider._online)):(te(Tr,"Using default OnlineComponentProvider"),await np(t,new Dc))),t._onlineComponents}function DR(t){return W_(t).then(e=>e.syncEngine)}async function ya(t){const e=await W_(t),n=e.eventManager;return n.onListen=gR.bind(null,e.syncEngine),n.onUnlisten=vR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_R.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ER.bind(null,e.syncEngine),n}function OR(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Uu({next:m=>{d.su(),o.enqueueAndForget(()=>Vu(i,p));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new ne($.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new ne($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new xu(qa(l.path),d,{includeMetadataChanges:!0,Ta:!0});return Ou(i,p)}(await ya(t),t.asyncQueue,e,n,r)),r.promise}function VR(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Uu({next:m=>{d.su(),o.enqueueAndForget(()=>Vu(i,p)),m.fromCache&&c.source==="server"?u.reject(new ne($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new xu(l,d,{includeMetadataChanges:!0,Ta:!0});return Ou(i,p)}(await ya(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function K_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const rp=new Map;/**
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
 */function G_(t,e,n){if(!n)throw new ne($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MR(t,e,n,r){if(e===!0&&r===!0)throw new ne($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sp(t){if(!oe.isDocumentKey(t))throw new ne($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ip(t){if(oe.isDocumentKey(t))throw new ne($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Za(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Za(t);throw new ne($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Q_="firestore.googleapis.com",op=!0;class ap{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Q_,this.ssl=op}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:op;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=S_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dS)throw new ne($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=K_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class el{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ap({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ap(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jb;switch(r.type){case"firstParty":return new Wb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=rp.get(n);r&&(te("ComponentProvider","Removing Datastore"),rp.delete(n),r.terminate())}(this),Promise.resolve()}}function xR(t,e,n,r={}){var s;const i=(t=Gt(t,el))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==Q_&&i.host!==l&&Ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Wr(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=It.MOCK_USER;else{u=sT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ne($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new It(p)}t._authCredentials=new qb(new Ug(u,d))}}/**
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
 */class Zr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zr(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class mr extends Zr{constructor(e,n,r){super(e,n,qa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new oe(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function In(t,e,...n){if(t=ct(t),G_("collection","path",e),t instanceof el){const r=He.fromString(e,...n);return ip(r),new mr(t,null,r)}{if(!(t instanceof Mt||t instanceof mr))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return ip(r),new mr(t.firestore,null,r)}}function Ct(t,e,...n){if(t=ct(t),arguments.length===1&&(e=Fg.newId()),G_("doc","path",e),t instanceof el){const r=He.fromString(e,...n);return sp(r),new Mt(t,null,new oe(r))}{if(!(t instanceof Mt||t instanceof mr))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return sp(r),new Mt(t.firestore,t instanceof mr?t.converter:null,new oe(r))}}/**
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
 */const lp="AsyncQueue";class cp{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new k_(this,"async_queue_retry"),this.bu=()=>{const r=Hl();r&&te(lp,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=Hl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Hl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new xn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Bs(e))throw e;te(lp,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=Nu.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&he()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}function up(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class jn extends el{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new cp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cp(e),this._firestoreClient=void 0,await e}}}function Fu(t,e){const n=typeof t=="object"?t:Zm(),r=typeof t=="string"?t:ca,s=tu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nT("firestore");i&&xR(s,...i)}return s}function no(t){if(t._terminated)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LR(t),t._firestoreClient}function LR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new oA(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,K_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new kR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ms(_t.fromBase64String(e))}catch(n){throw new ne($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ms(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ro{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class tl{constructor(e){this._methodName=e}}/**
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
 */class Bu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */class ju{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const $R=/^__.*__$/;class UR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xi(e,this.data,n,this.fieldTransforms)}}class J_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Y_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class qu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return va(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Y_(this.Lu)&&$R.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class FR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ja(e)}ju(e,n,r,s=!1){return new qu({Lu:e,methodName:n,zu:r,path:gt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nl(t){const e=t._freezeSettings(),n=Ja(t._databaseId);return new FR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function X_(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);zu("Data must be an object, but it was:",o,r);const l=ty(r,o);let c,u;if(i.merge)c=new Wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Oc(e,p,n);if(!o.contains(m))throw new ne($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ry(d,m)||d.push(m)}c=new Wt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new UR(new Ut(l),c,u)}class rl extends tl{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rl}}class Hu extends tl{_toFieldTransform(e){return new DA(e.path,new $i)}isEqual(e){return e instanceof Hu}}function Z_(t,e,n,r){const s=t.ju(1,e,n);zu("Data must be an object, but it was:",s,r);const i=[],o=Ut.empty();Pr(r,(c,u)=>{const d=Wu(e,c,n);u=ct(u);const p=s.Ku(d);if(u instanceof rl)i.push(d);else{const m=so(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Wt(i);return new J_(o,l,s.fieldTransforms)}function ey(t,e,n,r,s,i){const o=t.ju(1,e,n),l=[Oc(e,r,n)],c=[s];if(i.length%2!=0)throw new ne($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Oc(e,i[m])),c.push(i[m+1]);const u=[],d=Ut.empty();for(let m=l.length-1;m>=0;--m)if(!ry(u,l[m])){const _=l[m];let R=c[m];R=ct(R);const A=o.Ku(_);if(R instanceof rl)u.push(_);else{const P=so(R,A);P!=null&&(u.push(_),d.set(_,P))}}const p=new Wt(u);return new J_(d,p,o.fieldTransforms)}function BR(t,e,n,r=!1){return so(n,t.ju(r?4:3,e))}function so(t,e){if(ny(t=ct(t)))return zu("Unsupported field value:",e,t),ty(t,e);if(t instanceof tl)return function(r,s){if(!Y_(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=so(l,s.Uu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=it.fromDate(r);return{timestampValue:pa(s.serializer,i)}}if(r instanceof it){const i=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pa(s.serializer,i)}}if(r instanceof Bu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ms)return{bytesValue:v_(s.serializer,r._byteString)};if(r instanceof Mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Tu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ju)return function(o,l){return{mapValue:{fields:{[Gg]:{stringValue:Qg},[ua]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return vu(l.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Za(r)}`)}(t,e)}function ty(t,e){const n={};return jg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(t,(r,s)=>{const i=so(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ny(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof Bu||t instanceof Ms||t instanceof Mt||t instanceof tl||t instanceof ju)}function zu(t,e,n){if(!ny(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Za(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function Oc(t,e,n){if((e=ct(e))instanceof ro)return e._internalPath;if(typeof e=="string")return Wu(t,e);throw va("Field path arguments must be of type string or ",t,!1,void 0,n)}const jR=new RegExp("[~\\*/\\[\\]]");function Wu(t,e,n){if(e.search(jR)>=0)throw va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ro(...e.split("."))._internalPath}catch{throw va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function va(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne($.INVALID_ARGUMENT,l+t+c)}function ry(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class sy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ku("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qR extends sy{data(){return super.data()}}function Ku(t,e){return typeof e=="string"?Wu(t,e):e instanceof ro?e._internalPath:e._delegate._internalPath}/**
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
 */function iy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gu{}class HR extends Gu{}function Ir(t,e,...n){let r=[];e instanceof Gu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Qu).length,l=i.filter(c=>c instanceof sl).length;if(o>1||o>0&&l>0)throw new ne($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class sl extends HR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sl(e,n,r)}_apply(e){const n=this._parse(e);return oy(e._query,n),new Zr(e.firestore,e.converter,Tc(e._query,n))}_parse(e){const n=nl(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ne($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){dp(p,d);const R=[];for(const A of p)R.push(hp(c,i,A));m={arrayValue:{values:R}}}else m=hp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||dp(p,d),m=BR(l,o,p,d==="in"||d==="not-in");return tt.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Kt(t,e,n){const r=e,s=Ku("where",t);return sl._create(s,r,n)}class Qu extends Gu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)oy(o,c),o=Tc(o,c)}(e._query,n),new Zr(e.firestore,e.converter,Tc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function hp(t,e,n){if(typeof(n=ct(n))=="string"){if(n==="")throw new ne($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!r_(e)&&n.indexOf("/")!==-1)throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(He.fromString(n));if(!oe.isDocumentKey(r))throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Sf(t,new oe(r))}if(n instanceof Mt)return Sf(t,n._key);throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Za(n)}.`)}function dp(t,e){if(!Array.isArray(t)||t.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oy(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class zR{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Pr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ua].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new ju(i)}convertGeoPoint(e){return new Bu(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ja(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mi(e));default:return null}}convertTimestamp(e){const n=yr(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Me(A_(r));const s=new xi(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||Fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function ay(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ui{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ly extends sy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ko(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ku("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ko extends ly{data(e={}){return super.data(e)}}class cy{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ui(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ko(this._firestore,this._userDataWriter,r.key,r,new ui(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ko(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ui(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ko(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ui(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:WR(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
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
 */function uy(t){t=Gt(t,Mt);const e=Gt(t.firestore,jn);return OR(no(e),t._key).then(n=>dy(e,t,n))}class Ju extends zR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function br(t){t=Gt(t,Zr);const e=Gt(t.firestore,jn),n=no(e),r=new Ju(e);return iy(t._query),VR(n,t._query).then(s=>new cy(e,r,t,s))}function Yu(t,e,n,...r){t=Gt(t,Mt);const s=Gt(t.firestore,jn),i=nl(s);let o;return o=typeof(e=ct(e))=="string"||e instanceof ro?ey(i,"updateDoc",t._key,e,n,r):Z_(i,"updateDoc",t._key,e),il(s,[o.toMutation(t._key,Ft.exists(!0))])}function KR(t){return il(Gt(t.firestore,jn),[new Ga(t._key,Ft.none())])}function hy(t,e){const n=Gt(t.firestore,jn),r=Ct(t),s=ay(t.converter,e);return il(n,[X_(nl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ft.exists(!1))]).then(()=>r)}function GR(t,...e){var n,r,s;t=ct(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||up(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(up(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof Mt)u=Gt(t.firestore,jn),d=qa(t._key.path),c={next:p=>{e[o]&&e[o](dy(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Gt(t,Zr);u=Gt(p.firestore,jn),d=p._query;const m=new Ju(u);c={next:_=>{e[o]&&e[o](new cy(u,m,p,_))},error:e[o+1],complete:e[o+2]},iy(t._query)}return function(m,_,R,A){const P=new Uu(A),D=new xu(_,P,R);return m.asyncQueue.enqueueAndForget(async()=>Ou(await ya(m),D)),()=>{P.su(),m.asyncQueue.enqueueAndForget(async()=>Vu(await ya(m),D))}}(no(u),d,l,c)}function il(t,e){return function(r,s){const i=new xn;return r.asyncQueue.enqueueAndForget(async()=>wR(await DR(r),s,i)),i.promise}(no(t),e)}function dy(t,e,n){const r=n.docs.get(e._key),s=new Ju(t);return new ly(t,s,e._key,r,new ui(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class QR{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=nl(e)}set(e,n,r){this._verifyNotCommitted();const s=Wl(e,this._firestore),i=ay(s.converter,n,r),o=X_(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ft.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Wl(e,this._firestore);let o;return o=typeof(n=ct(n))=="string"||n instanceof ro?ey(this._dataReader,"WriteBatch.update",i._key,n,r,s):Z_(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Ft.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Wl(e,this._firestore);return this._mutations=this._mutations.concat(new Ga(n._key,Ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ne($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wl(t,e){if((t=ct(t)).firestore!==e)throw new ne($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Ea(){return new Hu("serverTimestamp")}/**
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
 */function io(t){return no(t=Gt(t,jn)),new QR(t,e=>il(t,e))}(function(e,n=!0){(function(s){Us=s})(Ls),Rs(new Kr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new jn(new Hb(r.getProvider("auth-internal")),new Kb(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),fr(mf,gf,e),fr(mf,gf,"esm2017")})();const Ln=Fu(Ze),fy=In(Ln,"relays"),JR=In(Ln,"pinConfigs");async function YR(){const e=ut(Ze).currentUser;if(!e)throw new Error("User is not authenticated");const n=In(Ln,"relays"),r=Ir(n,Kt("uid","==",e.uid));return(await br(r)).docs.map(i=>{const o=i.data();return{id:i.id,uid:o.uid,name:o.name,boardId:o.boardId,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0}})}async function XR(t,e){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");const s=Ct(Ln,"relays",t);await Yu(s,{state:e})}async function ZR(t,e,n){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");const i=Ct(Ln,"relays",t);await Yu(i,{name:e,maxOnTime_s:n})}async function eC(t){const n=ut(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await hy(fy,r)).id,...r}}async function tC(t){const n=ut(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r=io(Ln),s=Ct(Ln,"relays",t),i=Ir(JR,Kt("relayId","==",t),Kt("uid","==",n.uid)),o=await br(i);if(!o.empty){const l=o.docs[0],c=Ct(Ln,"pinConfigs",l.id);r.update(c,{relayId:null,relayName:null,mode:"input"})}r.delete(s),await r.commit()}async function nC(t){const n=ut(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r=Ir(fy,Kt("uid","==",n.uid),Kt("name","==",t));return(await br(r)).empty}function rC(t,e){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");const s=Ct(Ln,"relays",t);return GR(s,i=>{if(i.exists()){const o=i.data(),l={id:i.id,uid:o.uid,name:o.name,boardId:o.boardId,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0};e(l)}else console.error("Relay not found")})}const Nr=zi("relay",()=>{const t=re([]),e=re(),n=re(!1),r=re(null),s=re({}),i=async()=>{n.value=!0,r.value=null;try{t.value=await YR(),t.value.forEach(A=>{_(A.id)})}catch(A){r.value="Failed to load relays",console.error(A)}finally{n.value=!1}},o=async(A,P,D)=>{try{await ZR(A,P,D);const V=t.value.find(M=>M.id===A);V&&(V.name=P,V.maxOnTime_s=D,e.value.id===V.id&&(e.value=V))}catch(V){console.error("Failed to update relay config:",V)}},l=async(A,P)=>{try{await XR(A,P);const D=t.value.find(V=>V.id===A);D&&(D.state=P)}catch(D){console.error("Failed to update relay state:",D)}},c=async A=>{try{const P=await eC(A);return t.value.push(P),_(P.id),P}catch(P){console.error("Failed to add relay:",P)}},u=async A=>{try{R(A),await tC(A),t.value=t.value.filter(P=>P.id!==A),e.value.id===A&&(e.value=null)}catch(P){console.error("Failed to delete relay:",P)}},d=async A=>{try{return await nC(A)}catch(P){return console.error("Failed to check relay name uniqueness:",P),!1}};function p(A){return m(A.maxOnTime_s?A.maxOnTime_s:0)}function m(A){if(isNaN(A)||A<0)return"00:00:00";const P=Math.floor(A/3600),D=Math.floor(A%3600/60),V=A%60,M=String(P).padStart(2,"0"),z=String(D).padStart(2,"0"),Z=String(V).padStart(2,"0");return`${M}:${z}:${Z}`}const _=A=>{R(A),s.value[A]=rC(A,P=>{const D=t.value.findIndex(V=>V.id===A);D!==-1&&(t.value[D]=P)})},R=A=>{s.value[A]&&(s.value[A](),delete s.value[A])};return Qc(()=>{Object.keys(s.value).forEach(A=>{R(A)})}),{relays:t,selectedRelay:e,loading:n,error:r,loadRelays:i,updateRelayConfig:o,updateRelayState:l,addRelay:c,isRelayNameUnique:d,deleteRelay:u,getMaxOnTime:p,secondsToHHMMSS:m}}),qs=zi("page",()=>{const t=re("relays"),e=re(),n={home:"Relay Hub",boards:"Boards",board:"Board",relays:"Relay Control",relay:"Relay",schedules:"Task Schedules"},r=o=>{t.value=o},s=Ue(()=>n[t.value]||"Unknown Page");return{currentPage:t,currentPageTitle:s,navigateBackPage:e,setPage:r,setNavigateBackPage:o=>{e.value=o}}}),sC=De({components:{ToggleButton:Bb},props:{relay:{type:Object,required:!0}},setup(t){const e=qs(),n=xs(),r=Nr(),s=re(0);let i;const o=re(t.relay.turnedOnAt),l=re(!1);qi(async()=>{await u()}),Yp(()=>{clearTimeout(i)});const c=Ue(()=>{let A=t.relay.name;return t.relay.maxOnTime_s&&t.relay.maxOnTime_s>0&&(t.relay.state?A+=" - "+r.secondsToHHMMSS(s.value):A+=" - "+r.getMaxOnTime(t.relay)),A});async function u(){t.relay.maxOnTime_s!==0&&(s.value=p(),s.value!==0&&t.relay.state&&m())}async function d(A){A&&t.relay.maxOnTime_s&&(s.value=t.relay.maxOnTime_s),A?(o.value=t.relay.turnedOnAt,l.value=!0):l.value=!1,await r.updateRelayState(t.relay.id,A),!(!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0)&&(A||(clearTimeout(i),s.value=0))}function p(){if(!t.relay.turnedOnAt||!t.relay.maxOnTime_s)return 0;const A=t.relay.turnedOnAt.getTime()+t.relay.maxOnTime_s*1e3;return Math.max(0,Math.floor((A-Date.now())/1e3))}function m(){!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0||(clearTimeout(i),i=setTimeout(async()=>{s.value--,s.value!==0&&m()},1e3))}function _(){!o.value||!t.relay.turnedOnAt||o.value>=t.relay.turnedOnAt||(l.value=!1,m())}function R(){r.selectedRelay=t.relay,e.setNavigateBackPage("relays"),n.push({name:"relay"})}return mn(()=>t.relay.turnedOnAt,_),{displayName:c,isBlocked:l,onRelayClicked:R,handleToggle:d}}}),iC={class:"relay"};function oC(t,e,n,r,s,i){const o=_e("toggle-button");return q(),Q("div",iC,[j("div",{class:"name",onClick:e[0]||(e[0]=(...l)=>t.onRelayClicked&&t.onRelayClicked(...l))},we(t.displayName),1),pe(o,{modelValue:t.$props.relay.state,isBlocked:t.isBlocked,"onUpdate:modelValue":t.handleToggle},null,8,["modelValue","isBlocked","onUpdate:modelValue"])])}const py=xe(sC,[["render",oC],["__scopeId","data-v-12c7baca"]]),aC=De({components:{ButtonDefault:Wn},emits:["isDone"],props:{allowAdvancedSettings:{type:Boolean,default:!1},existingRelay:{type:Object,default:null}},setup(t,e){const n=Nr(),r=re(""),s=re(""),i=re("");qi(()=>{t.existingRelay&&(r.value=t.existingRelay.name,s.value=n.getMaxOnTime(t.existingRelay))});async function o(){if(!await c()||!u())return;const p=d();t.existingRelay?await n.updateRelayConfig(t.existingRelay.id,r.value.trim(),p):await n.addRelay({name:r.value.trim(),state:!1,maxOnTime_s:p}),r.value="",e.emit("isDone")}function l(){e.emit("isDone")}async function c(){return r.value.trim().length<2?(i.value="Relay name must be at least 2 characters long.",!1):t.existingRelay&&t.existingRelay.name===r.value.trim()?!0:await n.isRelayNameUnique(r.value.trim())?(i.value="",!0):(i.value="Relay name already exists.",!1)}function u(){if(!t.allowAdvancedSettings)return!0;const p=s.value.trim();if(p==="")return!0;const _=/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(p);return _||(i.value="Max on time must be in the format HH:MM:SS."),_}function d(){if(!t.allowAdvancedSettings)return 0;const p=s.value.trim(),[m,_,R]=p.split(":").map(Number);return m*3600+_*60+R}return{newRelayName:r,newMaxOnTime:s,nameError:i,saveRelay:o,abortChanges:l}}}),lC={class:"relay-editable"},cC={key:0,class:"header"},uC={key:1,class:"max-on-time"},hC={class:"action-buttons"},dC={key:2,class:"name-error"};function fC(t,e,n,r,s,i){const o=_e("button-default");return q(),Q("div",lC,[t.$props.allowAdvancedSettings?(q(),Q("div",cC,"Name")):Te("",!0),Ts(j("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.newRelayName=l),type:"text",placeholder:"Relay name",class:"relay-input"},null,512),[[bs,t.newRelayName]]),t.$props.allowAdvancedSettings?(q(),Q("div",uC,[e[2]||(e[2]=j("div",{class:"header"},"Max on time",-1)),Ts(j("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.newMaxOnTime=l),type:"text",placeholder:"HH:MM:SS or keep empty",class:"max-on-time-input"},null,512),[[bs,t.newMaxOnTime]])])):Te("",!0),j("div",hC,[pe(o,{class:"button-save",text:"Save",onClick:t.saveRelay},null,8,["onClick"]),pe(o,{class:"button-cancel",text:"Cancel",onClick:t.abortChanges},null,8,["onClick"])]),t.nameError?(q(),Q("div",dC,we(t.nameError),1)):Te("",!0)])}const pC=xe(aC,[["render",fC],["__scopeId","data-v-476b92f7"]]),Rt=Fu(Ze),mC=In(Rt,"boards"),gC=In(Rt,"pinConfigs");async function _C(){const e=ut(Ze).currentUser;if(!e)throw new Error("User is not authenticated");const n=Ir(mC,Kt("uid","==",e.uid));return(await br(n)).docs.map(s=>{const i=s.data();return{id:s.id,uid:i.uid,model:i.model,name:i.name,updatedAt:i.updatedAt.toDate(),createdAt:i.createdAt.toDate()}})}async function yC(t){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");const r=Ct(Rt,"boards",t),s=await uy(r);if(!s.exists())throw new Error(`Board with ID ${t} does not exist`);const i=s.data();return{id:t,uid:i.uid,name:i.name,model:i.model,createdAt:i.createdAt.toDate(),updatedAt:i.updatedAt.toDate()}}async function vC(t){const n=ut(Ze).currentUser;if(!n)throw new Error("User is not authenticated");try{const r=Ir(gC,Kt("uid","==",n.uid),Kt("boardId","==",t));return(await br(r)).docs.map(i=>{const o=i.data();return{id:i.id,uid:o.uid,mode:o.mode,boardId:o.boardId,pinNumber:o.pinNumber,relayId:o.relayId,relayName:o.relayName}})}catch(r){throw console.error("Error fetching pinConfigs:",r),r}}async function EC(t,e){const n=io(Rt),r=Ct(Rt,"boards",t);n.update(r,{name:e,updatedAt:Ea()}),await n.commit()}async function wC(t,e,n){const s=ut(Ze).currentUser;if(!s)throw new Error("User is not authenticated");if(n<=0)throw new Error("Number of pins must be greater than 0");const i=io(Rt),o=Ct(In(Rt,"boards")),l={uid:s.uid,name:t,model:e,createdAt:Ea(),updatedAt:Ea()};i.set(o,l);for(let d=1;d<=n;d++){const p=Ct(In(Rt,"pinConfigs")),m={uid:s.uid,pinNumber:d,mode:"input",boardId:o.id};i.set(p,m)}await i.commit();const c=await uy(o);if(!c.exists())throw new Error("Failed to retrieve the created board");const u=c.data();return{id:o.id,uid:u.uid,name:u.name,model:u.model,createdAt:u.createdAt.toDate(),updatedAt:u.updatedAt.toDate()}}async function TC(t,e){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");if(!t.id)throw new Error("PinConfig ID is missing");if(!t.boardId)throw new Error("Board ID is missing in PinConfig");const s=Ct(Rt,"pinConfigs",t.id),i=Ct(Rt,"boards",t.boardId),o=io(Rt);o.update(s,{mode:t.mode,relayName:t.relayName??null,relayId:t.relayId??null}),e.forEach(l=>{if(!l.id)throw new Error("Relay ID is missing");const c=Ct(Rt,"relays",l.id);o.update(c,{boardId:l.boardId})}),o.update(i,{updatedAt:Ea()}),await o.commit()}async function IC(t){const n=ut(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r=Ct(Rt,"boards",t),s=Ir(In(Rt,"pinConfigs"),Kt("boardId","==",t),Kt("uid","==",n.uid)),i=Ir(In(Rt,"relays"),Kt("boardId","==",t),Kt("uid","==",n.uid)),o=io(Rt);try{(await br(s)).forEach(u=>{o.delete(u.ref)}),(await br(i)).forEach(u=>{o.update(u.ref,{boardId:null})}),o.delete(r),await o.commit()}catch(l){throw console.error("Error deleting board and associated data:",l),new Error("Failed to delete the board.")}}const oo=zi("board",()=>{const t=re([]),e=re(null),n=re([]),r=re(!1),s=re(!1),i=re(null),o=Nr(),l=async()=>{try{r.value=!0,t.value=await _C()}catch(R){console.error("Failed to fetch boards:",R),i.value="Unable to load boards."}finally{r.value=!1}},c=async(R,A)=>{try{const P=t.value.findIndex(V=>V.id===R);if(P===-1)return;const D=t.value[P];await EC(R,A),t.value[P]={...D,name:A},e.value=t.value[P]}catch(P){console.error("Failed to update board:",P),i.value="Unable to update board."}},u=async(R,A,P)=>{try{P<=0&&console.error("Number of pins must be greater than 0");const D=await wC(R,A,P);t.value.push(D),console.log("Board added successfully with pins:",D)}catch(D){console.error("Failed to add new board:",D),i.value="Unable to add new board."}},d=async()=>{try{if(!e.value)return;s.value=!0;const R=e.value.id;if(e.value){const A=await vC(R);n.value=A.map(P=>{const D=o.relays.find(V=>V.id===P.relayId);return{...P,relayName:D?D.name:""}}).sort((P,D)=>P.pinNumber-D.pinNumber)}}catch(R){console.error("Failed to load board details:",R),i.value="Unable to load board details."}finally{s.value=!1}},p=()=>{e.value=null,n.value=[]};return{boards:t,selectedBoard:e,pinConfigs:n,loadingBoards:r,loadingPinConfigs:s,error:i,loadBoards:l,loadBoardDetails:d,addBoardWithPins:u,updatePinConfigAndRelays:async(R,A)=>{var P;try{await TC(R,A);const D=n.value.findIndex(M=>M.id===R.id);D!==-1&&(n.value[D]={...R});const V=t.value.findIndex(M=>M.id===R.boardId);if(V!==-1){const M=await yC(R.boardId);t.value[V]={...M},((P=e.value)==null?void 0:P.id)===R.boardId&&(e.value={...M})}}catch(D){console.error("Failed to update PinConfig mode:",D),i.value="Unable to update PinConfig."}},clearSelectedBoard:p,updateBoard:c,deleteBoard:async R=>{var A;try{await IC(R);const P=t.value.findIndex(D=>D.id===R);P!==-1&&t.value.splice(P,1),((A=e.value)==null?void 0:A.id)===R&&p()}catch(P){console.error("Failed to delete board:",P)}}}}),bC=De({components:{ButtonDefault:Wn},emits:["relayAdded","cancel"],props:{relay:{type:Object,default:null}},setup(t,{emit:e}){const n=oo(),r=Nr(),s=re(!1),i=re(!0),o=re(""),l=re(""),c=re(null),u=re(null),d=re([]),p=re([]),m=re(!1),_=re(!1),R=re();qi(()=>{t.relay&&(o.value=t.relay.name,s.value=!0,R.value=r.getMaxOnTime(t.relay).trim(),l.value=R.value),d.value=M()});const A=Ue(()=>!s.value||!i.value?!1:t.relay?o.value.trim()!==t.relay.name.trim()||l.value.trim()!==R.value:c.value?!!u.value:!0);async function P(){if(!A.value)return;const S=D();try{if(t.relay)await r.updateRelayConfig(t.relay.id,o.value.trim(),S);else{const C=await r.addRelay({name:o.value.trim(),state:!1,maxOnTime_s:S});c.value&&(C.boardId=c.value.id,u.value.relayId=C.id,u.value.relayName=C.name,await n.updatePinConfigAndRelays(u.value,[C]))}}finally{e("relayAdded")}}function D(){if(l.value.trim()==="")return 0;const S=l.value.trim(),[C,w,rt]=S.split(":").map(Number);return C*3600+w*60+rt}function V(){e("cancel")}function M(){const S=[{value:null,label:"None"}];return S.push(...n.boards.map(C=>({value:C,label:C.name})).sort((C,w)=>C.value.name.localeCompare(w.value.name))),S}function z(){m.value=!0,_.value=!1}async function Z(){await n.loadBoards(),_.value=!0}async function ae(S){if(c.value=S,u.value=null,c.value===null){n.clearSelectedBoard();return}n.selectedBoard=c.value,await n.loadBoardDetails(),p.value=n.pinConfigs.filter(C=>!C.relayId).map(C=>({value:C,label:C.pinNumber}))}async function b(){s.value=await v()}async function y(){i.value=I()}async function v(){return o.value.trim().length<2?!1:t.relay&&t.relay.name===o.value.trim()?!0:await r.isRelayNameUnique(o.value.trim())}function I(){const S=l.value.trim();return S===""?!0:/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(S)}return mn(()=>o.value,b),mn(()=>l.value,y),{name:o,maxOnTime:l,selectedBoard:c,selectedPin:u,canSave:A,showAdvancedSettings:m,showMoreAdvancedSettings:_,availableBoards:d,availablePins:p,onSelectBoard:ae,onShowAdvancedSettings:z,onShowMoreAdvancedSettings:Z,onAdd:P,onCancel:V}}}),AC={class:"popup-add-relay"},SC={class:"popup"},RC={key:2},CC={key:2},PC={class:"options"},kC=["onClick"],NC={key:0},DC={class:"options"},OC=["onClick"],VC={key:0},MC={key:1,class:"options"},xC={class:"buttons"};function LC(t,e,n,r,s,i){const o=_e("button-default");return q(),Q("div",AC,[j("div",SC,[j("h3",null,we(t.$props.relay?"Edit Relay":"Add New Relay"),1),e[11]||(e[11]=j("label",{for:"name"},"Name:",-1)),Ts(j("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.name=l),type:"text",placeholder:"Enter relay name"},null,512),[[bs,t.name]]),!t.$props.relay&&t.showAdvancedSettings?(q(),Q("label",{key:0,class:"settings-toggle",onClick:e[1]||(e[1]=l=>t.showAdvancedSettings=!1)},"Hide advanced settings")):t.$props.relay?Te("",!0):(q(),Q("label",{key:1,class:"settings-toggle",onClick:e[2]||(e[2]=(...l)=>t.onShowAdvancedSettings&&t.onShowAdvancedSettings(...l))},"Show advanced settings")),t.showAdvancedSettings||t.$props.relay?(q(),Q("div",RC,[e[10]||(e[10]=j("label",null,"Max on time:",-1)),Ts(j("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>t.maxOnTime=l),type:"text",placeholder:"HH:MM:SS or keep empty"},null,512),[[bs,t.maxOnTime]]),!t.$props.relay&&t.showAdvancedSettings&&t.showMoreAdvancedSettings?(q(),Q("label",{key:0,class:"settings-toggle",onClick:e[4]||(e[4]=l=>t.showMoreAdvancedSettings=!1)},"Hide more advanced settings")):!t.$props.relay&&t.showAdvancedSettings?(q(),Q("label",{key:1,class:"settings-toggle",onClick:e[5]||(e[5]=(...l)=>t.onShowMoreAdvancedSettings&&t.onShowMoreAdvancedSettings(...l))},"Show more advanced settings")):Te("",!0),!t.$props.relay&&t.showMoreAdvancedSettings?(q(),Q("div",CC,[e[9]||(e[9]=j("label",null,"Board:",-1)),j("div",PC,[(q(!0),Q(Je,null,En(t.availableBoards,l=>{var c;return q(),Q("div",{class:"option",key:(c=l.value)==null?void 0:c.id},[j("div",{class:st(["option-text",{"is-checked":t.selectedBoard===l.value}]),onClick:u=>t.onSelectBoard(l.value)},we(l.label),11,kC)])}),128))]),t.selectedBoard?(q(),Q("div",NC,[e[8]||(e[8]=j("label",null,"Pin:",-1)),j("div",DC,[(q(!0),Q(Je,null,En(t.availablePins,l=>{var c;return q(),Q("div",{class:"option",key:(c=l.value)==null?void 0:c.id},[j("div",{class:st(["option-text",{"is-checked":t.selectedPin===l.value}]),onClick:u=>t.selectedPin=l.value},we(l.value.pinNumber),11,OC)])}),128))]),t.selectedPin?(q(),Q("label",VC,"Pin mode:")):Te("",!0),t.selectedPin?(q(),Q("div",MC,[(q(),Q("div",{class:"option",key:t.selectedPin.id+"in"},[j("div",{class:st(["option-text",{"is-checked":t.selectedPin.mode==="input"}]),onClick:e[6]||(e[6]=l=>t.selectedPin.mode="input")}," Input ",2)])),(q(),Q("div",{class:"option",key:t.selectedPin.id+"out"},[j("div",{class:st(["option-text",{"is-checked":t.selectedPin.mode==="output"}]),onClick:e[7]||(e[7]=l=>t.selectedPin.mode="output")}," Output ",2)]))])):Te("",!0)])):Te("",!0)])):Te("",!0)])):Te("",!0),j("div",xC,[pe(o,{class:st({"can-save":t.canSave}),text:"Save",onClick:t.onAdd},null,8,["class","onClick"]),pe(o,{text:"Cancel",onClick:t.onCancel},null,8,["onClick"])])])])}const my=xe(bC,[["render",LC],["__scopeId","data-v-ba97f4a2"]]),$C=De({components:{PopupAddRelay:my,RelayEditable:pC,ButtonDefault:Wn,Relay:py,Spinner:Ma},emits:["requestScrollToBottom"],setup(t,e){const n=Nr(),r=re(!1),s=re(""),i=re([]),o=re(!1),l=re(""),c=re([]);Cr(async()=>{o.value=!1,await n.loadRelays(),c.value=n.relays,l.value=""});function u(){const p=l.value.trim().toLowerCase();p.length===0?c.value=n.relays:c.value=n.relays.filter(m=>m.name.toLowerCase().includes(p))}function d(){l.value="",u(),o.value=!1}return mn(()=>l.value,u),{ref_relayItems:i,relayStore:n,requestAddNewRelay:o,isAddingNewRelay:r,editableRelayId:s,filterText:l,currentRelays:c,onRelayAdded:d}}}),UC={class:"relays"},FC={key:1};function BC(t,e,n,r,s,i){const o=_e("spinner"),l=_e("relay"),c=_e("button-default"),u=_e("popup-add-relay");return q(),Q("div",UC,[t.relayStore.loading?(q(),qe(o,{key:0,"spinner-size":"20px","with-text":!0})):Te("",!0),!t.relayStore.loading&&!t.relayStore.error?(q(),Q("div",FC,[Ts(j("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.filterText=d),type:"text",placeholder:"Filter",class:"filter"},null,512),[[bs,t.filterText]]),(q(!0),Q(Je,null,En(t.currentRelays,d=>(q(),qe(l,{key:d.id,relay:d},null,8,["relay"]))),128)),pe(c,{text:"Add new relay",onClick:e[1]||(e[1]=d=>t.requestAddNewRelay=!0)})])):Te("",!0),t.requestAddNewRelay?(q(),qe(u,{key:2,onRelayAdded:t.onRelayAdded,onCancel:e[2]||(e[2]=d=>t.requestAddNewRelay=!1)},null,8,["onRelayAdded"])):Te("",!0)])}const gy=xe($C,[["render",BC],["__scopeId","data-v-d07912bb"]]),Xu=Fu(Ze),_y=In(Xu,"schedules");async function jC(){const e=ut(Ze).currentUser;if(!e)throw new Error("User is not authenticated");const n=Ir(_y,Kt("uid","==",e.uid));return(await br(n)).docs.map(s=>{const i=s.data();return{id:s.id,uid:i.uid,name:i.name,timeStart:i.timeStart,duration:i.duration,relays:i.relays||[],days:i.days||[]}})}async function qC(t){const n=ut(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await hy(_y,r)).id,...r}}async function HC(t,e){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");const s=Ct(Xu,"schedules",t);await Yu(s,e)}async function zC(t){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");const r=Ct(Xu,"schedules",t);await KR(r)}const WC=zi("schedule",()=>{const t=re([]),e=re(!1),n=re(null);return{schedules:t,loading:e,error:n,loadSchedules:async()=>{e.value=!0,n.value=null;try{t.value=await jC()}catch(l){n.value="Failed to load schedules",console.error(l)}finally{e.value=!1}},addSchedule:async l=>{try{const c=await qC(l);t.value.push(c)}catch(c){console.error("Failed to add schedule:",c)}},updateSchedule:async(l,c)=>{try{await HC(l,c);const u=t.value.find(d=>d.id===l);u&&Object.assign(u,c)}catch(u){console.error("Failed to update schedule:",u)}},deleteSchedule:async l=>{try{await zC(l),t.value=t.value.filter(c=>c.id!==l)}catch(c){console.error("Failed to delete schedule:",c)}}}}),KC=De({props:{schedule:{type:Object,required:!0}},setup(t){const e=["Mo","Tu","We","Th","Fr","Sa","Su"],n=Ue(()=>{const[s,i,o]=t.schedule.timeStart.split(":").map(Number),[l,c,u]=t.schedule.duration.split(":").map(Number),d=new Date;return d.setHours(s+l),d.setMinutes(i+c),d.setSeconds(o+u),`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`}),r=Ue(()=>t.schedule.days.map(s=>s.slice(0,2)));return{endTime:n,allDays:e,selectedDays:r}}}),GC={class:"schedule-item"},QC={class:"schedule-name"},JC={class:"times"},YC={class:"schedule-time"},XC={class:"duration"},ZC={class:"schedule-days"};function eP(t,e,n,r,s,i){return q(),Q("div",GC,[j("div",QC,we(t.schedule.name),1),j("div",JC,[j("div",YC,we(t.schedule.timeStart)+" - "+we(t.endTime),1),j("div",XC,"("+we(t.schedule.duration)+")",1)]),j("div",ZC,[(q(!0),Q(Je,null,En(t.allDays,o=>(q(),Q("span",{key:o,class:st([{selected:t.selectedDays.includes(o)},"day"])},we(o),3))),128))])])}const tP=xe(KC,[["render",eP],["__scopeId","data-v-58b7d5b4"]]),nP=De({components:{Schedule:tP,Spinner:Ma},setup(){const t=WC();return Cr(async()=>{await t.loadSchedules()}),{scheduleStore:t}}}),rP={class:"schedules"},sP={key:1},iP={key:0};function oP(t,e,n,r,s,i){const o=_e("spinner"),l=_e("Schedule");return q(),Q("div",rP,[t.scheduleStore.loading?(q(),qe(o,{key:0,"spinner-size":"20px","with-text":!0})):Te("",!0),!t.scheduleStore.loading&&!t.scheduleStore.error?(q(),Q("div",sP,[t.scheduleStore.schedules.length?(q(),Q("div",iP,[(q(!0),Q(Je,null,En(t.scheduleStore.schedules,c=>(q(),qe(l,{key:c.id,schedule:c},null,8,["schedule"]))),128))])):Te("",!0)])):Te("",!0)])}const yy=xe(nP,[["render",oP],["__scopeId","data-v-3e0043e6"]]),aP=De({props:{title:{type:String,required:!0}},setup(){return{}}}),lP={class:"page-tite"};function cP(t,e,n,r,s,i){return q(),Q("div",lP,we(t.$props.title),1)}const uP=xe(aP,[["render",cP],["__scopeId","data-v-7de7892e"]]),hP=De({props:{color:{type:String,default:"white"}},setup(t){return{iconBackStyle:Ue(()=>({"--icon-color":t.color}))}}});function dP(t,e,n,r,s,i){return q(),Q("div",{class:"icon-back",style:Hn(t.iconBackStyle)},e[0]||(e[0]=[j("svg",{viewBox:"0 0 24 24",class:"icon",xmlns:"http://www.w3.org/2000/svg"},[j("path",{d:"m 16.962167,22.810082 c 0.297374,0.270339 0.75695,0.243306 1.027288,-0.05406 0.270339,-0.297374 0.243307,-0.75695 -0.05406,-1.027288 L 7.4732599,12.266854 c -0.2703387,-0.243306 -0.2703387,-0.594746 0,-0.83805 L 17.935388,2.2913399 c 0.297374,-0.2703387 0.324406,-0.729915 0.0811,-1.0272884 C 17.746147,0.96667721 17.286569,0.93964454 16.989198,1.1829535 L 6.5270732,10.347447 c -0.9191536,0.811018 -0.9461886,2.162712 -0.027033,3.000764 z",style:{"stroke-width":"0.0337924"}})],-1)]),4)}const fP=xe(hP,[["render",dP],["__scopeId","data-v-0a839df4"]]),pP=De({components:{IconBack:fP,PageTitle:uP},setup(){const t=qs(),e=xs();function n(){t.navigateBackPage&&(e.push({name:t.navigateBackPage}),t.setNavigateBackPage(null))}return{pageStore:t,onNavigateBack:n}}}),mP={class:"top-bar"};function gP(t,e,n,r,s,i){const o=_e("icon-back"),l=_e("PageTitle");return q(),Q("div",mP,[j("div",{class:"icon-back-wrapper",onClick:e[0]||(e[0]=(...c)=>t.onNavigateBack&&t.onNavigateBack(...c))},[t.pageStore.navigateBackPage?(q(),qe(o,{key:0},{default:Mn(()=>e[1]||(e[1]=[Ht(" Back ")])),_:1})):Te("",!0)]),pe(l,{title:t.pageStore.currentPageTitle},null,8,["title"])])}const _P=xe(pP,[["render",gP],["__scopeId","data-v-70cabded"]]),yP=De({props:{color:{type:String,default:"white"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconRaspberryStyle:Ue(()=>({"--icon-color":t.color,fontSize:t.fontSize}))}}}),vP={key:0,class:"text"};function EP(t,e,n,r,s,i){return q(),Q("div",{class:"icon-raspberry",style:Hn(t.iconRaspberryStyle)},[e[0]||(e[0]=j("svg",{fill:"#000000",viewBox:"-2.5 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[j("path",{d:"m 13.656,17.338 c -0.857,0.989 -1.334,2.79 -0.709,3.371 0.6,0.449 2.2,0.391 3.385,-1.23 0.344,-0.487 0.551,-1.093 0.551,-1.747 0,-0.603 -0.175,-1.164 -0.477,-1.637 l 0.007,0.012 c -0.73,-0.555 -1.778,0.164 -2.757,1.243 z m -8.057,0.3 c -0.908,-1.04 -2.088,-1.658 -2.851,-1.2 -0.51,0.382 -0.605,1.685 0.123,2.967 1.078,1.524 2.6,1.679 3.221,1.307 0.659,-0.488 0.3,-2.137 -0.493,-3.075 z m 4.105,3.145 c -1.1,-0.026 -2.8,0.439 -2.776,1.032 -0.018,0.4 1.331,1.572 2.7,1.513 1.326,0.03 2.7,-1.139 2.682,-1.649 -0.018,-0.51 -1.5,-0.927 -2.607,-0.884 z M 9.629,6.839 c -1.275,-0.032 -2.5,0.933 -2.5,1.493 0,0.68 1.008,1.376 2.51,1.394 1.543,0.01 2.518,-0.559 2.532,-1.26 C 12.187,7.672 10.777,6.827 9.653,6.839 Z M 6.558,7.371 C 4.423,7.026 2.645,8.271 2.716,10.563 2.786,11.447 7.346,7.522 6.559,7.386 V 7.371 Z m 9.749,3.251 c 0.071,-2.277 -1.709,-3.521 -3.844,-3.176 -0.787,0.135 3.772,4.061 3.844,3.176 z m 0.364,0.824 c -1.239,-0.329 -0.42,5.049 0.588,4.615 0.551,-0.525 0.894,-1.265 0.894,-2.084 0,-1.077 -0.592,-2.015 -1.468,-2.508 l -0.014,-0.007 v -0.015 z m -14.9,4.675 c 1.007,0.45 1.827,-4.929 0.589,-4.6 -0.891,0.504 -1.483,1.445 -1.483,2.525 0,0.821 0.343,1.563 0.893,2.089 l 10e-4,10e-4 z m 9.415,-5.948 c -0.63,0.49 -1.032,1.249 -1.032,2.101 0,0.624 0.215,1.197 0.575,1.65 l -0.004,-0.005 c 0.492,0.838 1.388,1.392 2.414,1.392 0.467,0 0.908,-0.115 1.295,-0.318 L 14.419,15 c 0.631,-0.49 1.034,-1.248 1.034,-2.101 0,-0.624 -0.215,-1.197 -0.576,-1.65 l 0.004,0.005 c -0.484,-0.835 -1.374,-1.388 -2.393,-1.388 -0.476,0 -0.923,0.121 -1.314,0.333 l 0.015,-0.007 z m -3.1,0.135 C 7.713,10.109 7.27,9.993 6.8,9.993 c -1.02,0 -1.911,0.548 -2.395,1.366 l -0.007,0.013 c -0.357,0.45 -0.572,1.026 -0.572,1.652 0,0.855 0.402,1.616 1.027,2.105 l 0.006,0.004 c 0.376,0.205 0.823,0.325 1.298,0.325 1.019,0 1.909,-0.553 2.386,-1.376 L 8.55,14.069 c 0.352,-0.448 0.564,-1.019 0.564,-1.64 0,-0.853 -0.4,-1.612 -1.024,-2.1 L 8.084,10.325 Z m 4.369,7.162 c -0.077,-1.399 -1.23,-2.504 -2.641,-2.504 -0.049,0 -0.098,0.001 -0.147,0.004 H 9.674 C 9.646,14.969 9.612,14.968 9.579,14.968 c -1.423,0 -2.585,1.119 -2.653,2.526 v 0.006 0.029 c 0.078,1.399 1.232,2.504 2.643,2.504 0.049,0 0.098,-0.001 0.147,-0.004 H 9.709 c 0.035,0.002 0.076,0.003 0.117,0.003 1.413,0 2.566,-1.116 2.625,-2.514 v -0.005 -0.029 l 0.01,-0.015 z M 15.67,2.337 c -1.69,0.771 -3.14,1.756 -4.396,2.945 l 0.007,-0.007 c 0.377,1.5 2.344,1.558 3.063,1.512 C 14.205,6.743 14.093,6.646 14.03,6.521 L 14.029,6.518 C 14.209,6.398 14.85,6.502 15.297,6.263 15.126,6.233 15.045,6.202 14.968,6.063 15.4,5.968 15.781,5.808 16.124,5.591 L 16.109,5.6 C 16.076,5.605 16.039,5.609 16,5.609 c -0.132,0 -0.256,-0.037 -0.361,-0.1 l 0.003,0.002 c 0.419,-0.179 0.779,-0.4 1.103,-0.664 l -0.008,0.006 c -0.2,0 -0.406,0 -0.466,-0.075 0.336,-0.197 0.625,-0.429 0.875,-0.698 l 0.002,-0.002 c -0.272,0.045 -0.39,0.016 -0.454,-0.03 0.295,-0.226 0.544,-0.494 0.742,-0.798 l 0.007,-0.012 c -0.076,0.04 -0.166,0.063 -0.261,0.063 -0.095,0 -0.185,-0.023 -0.264,-0.064 l 0.003,0.002 c 0.091,-0.194 0.47,-0.314 0.69,-0.779 -0.073,0.019 -0.157,0.031 -0.243,0.031 -0.086,0 -0.17,-0.011 -0.25,-0.032 l 0.007,0.002 C 17.218,2.133 17.367,1.848 17.564,1.602 L 17.56,1.607 C 17.465,1.611 17.354,1.613 17.242,1.613 16.961,1.613 16.684,1.6 16.41,1.575 l 0.035,0.003 0.283,-0.285 C 16.604,1.269 16.462,1.255 16.316,1.255 c -0.297,0 -0.58,0.058 -0.839,0.164 l 0.015,-0.005 c -0.149,-0.105 0,-0.255 0.185,-0.4 -0.385,0.05 -0.734,0.138 -1.065,0.262 L 14.645,1.265 C 14.481,1.115 14.745,0.98 14.885,0.829 14.472,0.9 14.104,1.047 13.779,1.256 L 13.791,1.249 C 13.611,1.084 13.776,0.935 13.891,0.8 13.537,0.937 13.234,1.13 12.975,1.37 l 0.002,-0.002 c -0.09,-0.1 -0.209,-0.179 -0.06,-0.449 -0.291,0.162 -0.535,0.373 -0.73,0.624 l -0.004,0.005 c -0.194,-0.134 -0.119,-0.3 -0.119,-0.449 -0.285,0.253 -0.545,0.518 -0.785,0.8 L 11.27,1.91 C 11.209,1.879 11.17,1.76 11.135,1.564 10.356,2.314 9.246,4.187 10.85,4.92 12.21,3.854 13.799,3.001 15.522,2.45 L 15.629,2.42 15.67,2.345 Z m -12.259,0 C 5.242,2.92 6.831,3.778 8.219,4.879 L 8.188,4.855 C 9.788,4.105 8.681,2.232 7.906,1.499 7.865,1.693 7.821,1.828 7.771,1.858 7.522,1.566 7.264,1.301 6.991,1.055 L 6.983,1.048 c 0,0.15 0.077,0.33 -0.117,0.45 C 6.673,1.24 6.432,1.029 6.156,0.874 L 6.145,0.868 C 6.294,1.124 6.17,1.198 6.089,1.317 5.842,1.059 5.542,0.855 5.206,0.723 L 5.189,0.717 c 0.12,0.149 0.3,0.3 0.12,0.465 C 5,0.979 4.636,0.832 4.245,0.765 L 4.228,0.763 c 0.135,0.149 0.4,0.3 0.238,0.45 C 4.165,1.093 3.816,1.002 3.452,0.957 L 3.431,0.955 c 0.181,0.15 0.342,0.289 0.192,0.4 C 3.372,1.245 3.08,1.182 2.774,1.182 2.631,1.182 2.49,1.196 2.355,1.222 L 2.369,1.22 2.653,1.504 C 2.411,1.53 2.13,1.545 1.846,1.545 c -0.11,0 -0.22,-0.002 -0.33,-0.007 l 0.016,10e-4 c 0.199,0.238 0.35,0.525 0.432,0.839 l 0.003,0.015 c -0.045,0.045 -0.27,0.016 -0.483,0 0.225,0.449 0.6,0.57 0.688,0.765 C 2.096,3.199 2.006,3.223 1.911,3.223 1.816,3.223 1.725,3.199 1.647,3.157 L 1.65,3.158 C 1.869,3.465 2.115,3.731 2.391,3.963 L 2.398,3.968 C 2.315,4.007 2.217,4.029 2.115,4.029 2.051,4.029 1.988,4.02 1.929,4.004 l 0.005,0.001 c 0.251,0.269 0.537,0.5 0.851,0.69 l 0.018,0.01 C 2.743,4.775 2.532,4.774 2.324,4.78 2.639,5.04 3,5.263 3.389,5.432 L 3.418,5.443 C 3.316,5.514 3.19,5.556 3.053,5.556 3.018,5.556 2.983,5.553 2.949,5.548 h 0.004 c 0.327,0.21 0.708,0.371 1.116,0.46 L 4.092,6.012 C 4.021,6.13 3.894,6.209 3.748,6.212 4.197,6.466 4.826,6.347 5.006,6.482 4.942,6.61 4.831,6.707 4.696,6.751 L 4.692,6.752 C 5.411,6.797 7.392,6.737 7.764,5.238 6.516,4.061 5.065,3.081 3.472,2.361 L 3.373,2.321 3.413,2.337 Z M 5.145,0.1 C 5.388,0.133 5.608,0.203 5.809,0.305 L 5.797,0.3 C 6.326,0.13 6.447,0.363 6.707,0.459 7.284,0.339 7.459,0.6 7.736,0.878 L 8.058,0.869 C 8.765,1.358 9.283,2.075 9.509,2.913 L 9.515,2.938 C 9.746,2.076 10.264,1.359 10.96,0.881 l 0.012,-0.008 0.321,0.007 c 0.277,-0.28 0.452,-0.539 1.029,-0.418 0.261,-0.1 0.38,-0.33 0.911,-0.166 0.33,-0.1 0.62,-0.375 1.057,-0.045 0.131,-0.076 0.289,-0.121 0.457,-0.121 0.224,0 0.429,0.08 0.589,0.213 L 15.335,0.342 c 0.5,-0.06 0.653,0.061 0.774,0.21 0.108,0 0.809,-0.1 1.132,0.36 0.81,-0.09 1.064,0.464 0.774,0.988 0.114,0.121 0.185,0.284 0.185,0.464 0,0.204 -0.091,0.387 -0.234,0.511 l -0.001,10e-4 c 0.15,0.269 0.062,0.553 -0.27,0.913 0.014,0.055 0.023,0.117 0.023,0.182 0,0.284 -0.159,0.53 -0.393,0.655 l -0.004,0.002 c 0.06,0.51 -0.48,0.81 -0.629,0.914 -0.061,0.3 -0.181,0.584 -0.8,0.734 -0.089,0.449 -0.464,0.523 -0.824,0.614 1.309,0.619 2.199,1.929 2.199,3.446 0,0.1 -0.004,0.2 -0.012,0.298 l 0.001,-0.013 0.181,0.3 c 0.991,0.664 1.634,1.779 1.634,3.045 0,0.953 -0.365,1.821 -0.963,2.472 l 0.002,-0.003 c -0.139,0.635 -0.315,1.186 -0.535,1.713 l 0.024,-0.065 c -0.211,1.48 -1.197,2.687 -2.528,3.209 l -0.027,0.01 c -0.697,0.564 -1.506,1.025 -2.384,1.344 l -0.058,0.019 c -0.745,0.815 -1.809,1.328 -2.993,1.337 H 9.515 C 8.324,23.995 7.253,23.483 6.506,22.67 L 6.503,22.667 C 5.565,22.328 4.755,21.866 4.04,21.289 l 0.016,0.013 C 2.698,20.769 1.71,19.563 1.497,18.105 L 1.494,18.083 C 1.296,17.618 1.118,17.062 0.989,16.488 L 0.976,16.421 C 0.377,15.772 0.01,14.902 0.01,13.946 c 0,-1.265 0.644,-2.38 1.621,-3.036 l 0.013,-0.008 0.172,-0.3 C 1.809,10.517 1.805,10.418 1.805,10.318 1.805,8.801 2.694,7.491 3.981,6.882 L 4.004,6.872 C 3.645,6.782 3.284,6.707 3.181,6.257 2.566,6.107 2.446,5.823 2.381,5.523 2.231,5.418 1.692,5.123 1.752,4.595 1.513,4.465 1.353,4.215 1.353,3.928 1.353,3.861 1.362,3.797 1.378,3.735 L 1.377,3.74 C 1.063,3.394 0.977,3.095 1.107,2.825 0.963,2.702 0.873,2.52 0.873,2.317 0.873,2.136 0.945,1.971 1.062,1.851 0.777,1.326 1.032,0.757 1.841,0.851 2.158,0.386 2.864,0.492 2.967,0.492 3.088,0.342 3.252,0.207 3.746,0.267 3.908,0.134 4.117,0.053 4.345,0.053 4.51,0.053 4.665,0.095 4.8,0.169 L 4.795,0.167 C 4.903,0.07 5.044,0.008 5.2,0.001 h 10e-4 z"})],-1)),t.$props.text&&t.$props.text.length>0?(q(),Q("div",vP,we(t.$props.text),1)):Te("",!0)],4)}const wP=xe(yP,[["render",EP],["__scopeId","data-v-5243a882"]]),TP=De({components:{IconRaspberry:wP,IconSchedule:jm,IconLightSwitch:Bm},setup(){return{}}}),IP={class:"home"};function bP(t,e,n,r,s,i){const o=_e("icon-raspberry"),l=_e("router-link"),c=_e("icon-light-switch"),u=_e("icon-schedule");return q(),Q("div",IP,[pe(l,{to:"/boards",class:"tile boards"},{default:Mn(()=>[j("span",null,[pe(o,{text:"Boards",strokeColor:"deeppink",fontSize:"22px"})])]),_:1}),pe(l,{to:"/relays",class:"tile relays"},{default:Mn(()=>[j("span",null,[pe(c,{text:"Relays",fontSize:"22px"})])]),_:1}),Te("",!0),pe(l,{to:"/schedules",class:"tile schedules"},{default:Mn(()=>[j("span",null,[pe(u,{strokeColor:"orange",text:"Schedules",fontSize:"22px"})])]),_:1}),Te("",!0)])}const vy=xe(TP,[["render",bP],["__scopeId","data-v-37ea29cb"]]),AP=De({props:{options:{type:Array,required:!0},placeholder:{type:String,default:"Select an option"},modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:e}){const n=re(!1),r=re(t.modelValue);function s(){n.value=!n.value}function i(o){r.value=o.value,e("update:modelValue",o.value),n.value=!1}return{isOpen:n,selectedOption:r,toggleDropdown:s,selectOption:i}}}),SP={class:"custom-dropdown"},RP={key:0,class:"dropdown-list"},CP=["onClick"];function PP(t,e,n,r,s,i){return q(),Q("div",SP,[j("div",{class:"dropdown-selected",onClick:e[0]||(e[0]=(...o)=>t.toggleDropdown&&t.toggleDropdown(...o))},[Ht(we(t.selectedOption||t.placeholder)+" ",1),j("span",{class:st(["arrow",{open:t.isOpen}])},"▼",2)]),t.isOpen?(q(),Q("div",RP,[(q(!0),Q(Je,null,En(t.options,o=>(q(),Q("div",{key:o.value,class:st(["dropdown-item",{selected:o.value===t.selectedOption}]),onClick:l=>t.selectOption(o)},we(o.label),11,CP))),128))])):Te("",!0)])}const Ey=xe(AP,[["render",PP],["__scopeId","data-v-20c408dc"]]),fp=[{value:"Raspberry Pi Model B+ V1.2",numGpioPins:27},{value:"Raspberry Pi 2 Model B V1.1",numGpioPins:27},{value:"Raspberry Pi 3 Model B",numGpioPins:27},{value:"Raspberry Pi 4 Model B",numGpioPins:27},{value:"Raspberry Pi Zero",numGpioPins:27},{value:"Raspberry Pi Zero W",numGpioPins:27},{value:"Raspberry Pi 400",numGpioPins:27}],kP=De({components:{ButtonDefault:Wn},emits:["boardAdded","cancel"],props:{boardId:{type:String,default:null}},setup(t,{emit:e}){const n=oo(),r=re(""),s=re(null),i=re(null);qi(()=>{t.boardId&&(i.value=n.boards.find(m=>m.id===t.boardId)),i.value?(r.value=i.value.name,s.value=fp.find(m=>m.value===i.value.model)):l()});const o=Ue(()=>t.boardId&&i.value.name===r.value.trim()&&i.value.model===s.value.value?!1:!!(r.value&&r.value.length>1&&s.value));function l(){r.value="",s.value=null}function c(m){return m&&s.value&&m.value===s.value.value}function u(m){m&&(s.value=m)}async function d(){if(o.value)try{const m=s.value.value,_=s.value.numGpioPins;i.value?await n.updateBoard(i.value.id,r.value):await n.addBoardWithPins(r.value,m,_),l(),e("boardAdded")}catch{console.error("Failed to add the board. Please try again.")}}function p(){l(),e("cancel")}return{name:r,selectedModel:s,canSave:o,raspberryPiModels:fp,isChecked:c,selectModel:u,onAdd:d,onCancel:p}}}),NP={class:"popup-add-board"},DP={class:"popup"},OP={key:0},VP={key:1,class:"options"},MP=["onClick"],xP={class:"buttons"};function LP(t,e,n,r,s,i){const o=_e("button-default");return q(),Q("div",NP,[j("div",DP,[j("h3",null,we(t.$props.boardId?"Edit Board":"Add New Board"),1),e[1]||(e[1]=j("label",{for:"name"},"Name:",-1)),Ts(j("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.name=l),type:"text",placeholder:"Enter board name"},null,512),[[bs,t.name]]),t.$props.boardId?Te("",!0):(q(),Q("label",OP,"Model:")),t.$props.boardId?Te("",!0):(q(),Q("div",VP,[(q(!0),Q(Je,null,En(t.raspberryPiModels,l=>(q(),Q("div",{class:"option",key:l.value},[j("div",{class:st(["option-text",{"is-checked":t.isChecked(l)}]),onClick:c=>t.selectModel(l)},we(l.value),11,MP)]))),128))])),j("div",xP,[pe(o,{class:st({"can-save":t.canSave}),text:"Save",onClick:t.onAdd},null,8,["class","onClick"]),pe(o,{text:"Cancel",onClick:t.onCancel},null,8,["onClick"])])])])}const wy=xe(kP,[["render",LP],["__scopeId","data-v-8c361eb0"]]),$P=De({components:{PopupAddBoard:wy,ButtonDefault:Wn,Spinner:Ma,Dropdown:Ey},setup(){const t=xs(),e=qs(),n=oo(),r=re(!1);Cr(()=>{n.loadBoards(),n.clearSelectedBoard()});function s(i){n.selectedBoard=i,e.setNavigateBackPage("boards"),t.push({name:"board"})}return{requestAddNewBoard:r,boardStore:n,requestBoard:s}}}),UP={class:"boards"},FP={key:1},BP=["onClick"];function jP(t,e,n,r,s,i){const o=_e("spinner"),l=_e("button-default"),c=_e("popup-add-board");return q(),Q("div",UP,[t.boardStore.loadingBoards?(q(),qe(o,{key:0,spinnerSize:"20px",withText:!0})):(q(),Q("div",FP,[(q(!0),Q(Je,null,En(t.boardStore.boards,u=>(q(),Q("div",{class:"board-name-wrapper",key:u.id,onClick:d=>t.requestBoard(u)},we(u.name),9,BP))),128)),pe(l,{text:"Add new board",onClick:e[0]||(e[0]=u=>t.requestAddNewBoard=!0)})])),t.requestAddNewBoard?(q(),qe(c,{key:2,onBoardAdded:e[1]||(e[1]=u=>t.requestAddNewBoard=!1),onCancel:e[2]||(e[2]=u=>t.requestAddNewBoard=!1)})):Te("",!0)])}const Ty=xe($P,[["render",jP],["__scopeId","data-v-6664e91c"]]),qP=De({components:{ButtonDefault:Wn},props:{relayName:{type:String,required:!0},pinNumber:{type:Number,required:!0},initialMode:{type:String,required:!0},initialRelayId:{type:String,default:null}},emits:["save","cancel"],setup(t,{emit:e}){const n=Nr(),r=re(t.initialMode),s=re(t.initialRelayId),i=re([]);Cr(()=>{i.value=l()});const o=Ue(()=>t.initialMode!==r.value||t.initialRelayId!==s.value);function l(){const _=n.relays.filter(({boardId:A})=>!A).map(({id:A,name:P})=>({value:A,label:P})).sort((A,P)=>A.value.localeCompare(P.value)),R={value:null,label:"None"};if(s.value!==null){const A=n.relays.find(P=>P.id===s.value);if(A)return[{value:A.id,label:A.name},R,..._]}return[R,..._]}function c(){r.value="input"}function u(){r.value="output"}function d(_){s.value=_}function p(){o.value&&e("save",r.value,s.value)}function m(){e("cancel")}return{mode:r,changed:o,relayId:s,availableRelays:i,setInput:c,setOutput:u,setRelay:d,onSave:p,onCancel:m}}}),HP={class:"popup-select-relay"},zP={class:"popup"},WP={class:"options"},KP={class:"option"},GP={class:"option"},QP={class:"options"},JP=["onClick"],YP={class:"buttons"};function XP(t,e,n,r,s,i){const o=_e("button-default");return q(),Q("div",HP,[j("div",zP,[j("h3",null,we(t.$props.relayName),1),j("h3",null,"Pin "+we(t.$props.pinNumber),1),e[2]||(e[2]=j("label",{for:"name"},"Mode:",-1)),j("div",WP,[j("div",KP,[j("div",{class:st(["option-text",{"is-checked":t.mode==="input"}]),onClick:e[0]||(e[0]=(...l)=>t.setInput&&t.setInput(...l))}," IN ",2)]),j("div",GP,[j("div",{class:st(["option-text",{"is-checked":t.mode==="output"}]),onClick:e[1]||(e[1]=(...l)=>t.setOutput&&t.setOutput(...l))}," OUT ",2)])]),e[3]||(e[3]=j("label",{for:"name"},"Relay:",-1)),j("div",QP,[(q(!0),Q(Je,null,En(t.availableRelays,l=>(q(),Q("div",{class:"option",key:l.value},[j("div",{class:st(["option-text",{"is-checked":t.relayId===l.value}]),onClick:c=>t.setRelay(l.value)},we(l.label),11,JP)]))),128))]),j("div",YP,[pe(o,{class:st({"can-save":t.changed}),text:"Save",onClick:t.onSave},null,8,["class","onClick"]),pe(o,{text:"Cancel",onClick:t.onCancel},null,8,["onClick"])])])])}const ZP=xe(qP,[["render",XP],["__scopeId","data-v-c64dfe6d"]]),e2=De({components:{ButtonDefault:Wn},props:{text:{type:String,required:!0}},emits:["yes","no"],setup(t,{emit:e}){function n(){e("yes")}function r(){e("no")}return{onYes:n,onNo:r}}}),t2={class:"popup-yes-no"},n2={class:"popup"},r2={for:"name"},s2={class:"buttons"};function i2(t,e,n,r,s,i){const o=_e("button-default");return q(),Q("div",t2,[j("div",n2,[j("label",r2,we(t.$props.text),1),j("div",s2,[pe(o,{text:"Yes",onClick:t.onYes},null,8,["onClick"]),pe(o,{text:"No",onClick:t.onNo},null,8,["onClick"])])])])}const Iy=xe(e2,[["render",i2],["__scopeId","data-v-8208713d"]]),o2=De({components:{ButtonDefault:Wn},props:{text:{type:String,required:!0}},emits:["ok"],setup(t,{emit:e}){function n(){e("ok")}return{onOk:n}}}),a2={class:"popup-info"},l2={class:"popup"},c2={for:"name"},u2={class:"buttons"};function h2(t,e,n,r,s,i){const o=_e("button-default");return q(),Q("div",a2,[j("div",l2,[j("label",c2,we(t.$props.text),1),j("div",u2,[pe(o,{text:"Ok",onClick:t.onOk},null,8,["onClick"])])])])}const d2=xe(o2,[["render",h2],["__scopeId","data-v-30b38fb2"]]),f2=De({components:{PopupInfo:d2,PopupAddBoard:wy,PopupYesNo:Iy,PopupSelectRelay:ZP,DropDown:Ey},props:{},emits:[],setup(t,e){const n=xs(),r=oo(),s=Nr(),i=re(null),o=re(!1),l=re(!1),c=re(null);Cr(async()=>{i.value=null,await r.loadBoardDetails()});const u=Ue(()=>{var D;return p((D=r.selectedBoard)==null?void 0:D.createdAt)}),d=Ue(()=>{var D;return p((D=r.selectedBoard)==null?void 0:D.updatedAt)});function p(D){return D?D.toLocaleString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(","," -").replace(/\//g,"."):""}function m(){r.deleteBoard(r.selectedBoard.id),n.push({name:"boards"}),o.value=!1}function _(D){i.value&&(i.value=null),i.value=D}async function R(D,V){if(!i.value)return;if(!D){A();return}const M=i.value,z=[];if(M.mode=D,!M.relayId&&V){const Z=s.relays.find(ae=>ae.id===V);Z&&(M.relayId=Z.id,M.relayName=Z.name,Z.boardId=M.boardId,z.push(Z))}else if(M.relayId&&V&&M.relayId!==V){const Z=s.relays.find(b=>b.id===M.relayId),ae=s.relays.find(b=>b.id===V);Z&&(Z.boardId=null,z.push(Z)),ae&&(M.relayId=ae.id,M.relayName=ae.name,ae.boardId=M.boardId,z.push(ae))}else if(M.relayId&&!V){const Z=s.relays.find(ae=>ae.id===M.relayId);Z&&(Z.boardId=null,z.push(Z)),M.relayId=null,M.relayName=null}await r.updatePinConfigAndRelays(M,z),i.value=null}function A(){i.value=null}function P(D){navigator.clipboard.writeText(D),c.value="Copied to clipboard!"}return{boardStore:r,createdAt:u,modifiedAt:d,selectedPinConfig:i,requestDeleteBoard:o,requestEditBoard:l,clipboardText:c,requestEditPinConfig:_,deleteBoard:m,onSaveSelectRelay:R,onCancelSelectRelay:A,copyToClipboard:P}}}),p2={class:"board"},m2={class:"board-header"},g2={class:"table-body"},_2={class:"table-cell"},y2={class:"table-cell"},v2=["onClick"],E2={class:"table-row"};function w2(t,e,n,r,s,i){var d,p,m;const o=_e("popup-select-relay"),l=_e("popup-yes-no"),c=_e("popup-info"),u=_e("popup-add-board");return q(),Q("div",p2,[j("div",m2,[j("h3",{onClick:e[0]||(e[0]=_=>t.requestEditBoard=!0)},we((d=t.boardStore.selectedBoard)==null?void 0:d.name),1),j("p",{onClick:e[1]||(e[1]=_=>{var R;return t.copyToClipboard((R=t.boardStore.selectedBoard)==null?void 0:R.id)})},[e[8]||(e[8]=j("strong",null,"Board Id:",-1)),Ht(" "+we((p=t.boardStore.selectedBoard)==null?void 0:p.id),1)]),j("p",{onClick:e[2]||(e[2]=_=>{var R;return t.copyToClipboard((R=t.boardStore.selectedBoard)==null?void 0:R.model)})},[e[9]||(e[9]=j("strong",null,"Model:",-1)),Ht(" "+we((m=t.boardStore.selectedBoard)==null?void 0:m.model),1)]),j("p",null,[e[10]||(e[10]=j("strong",null,"Created:",-1)),Ht(" "+we(t.createdAt),1)]),j("p",null,[e[11]||(e[11]=j("strong",null,"Modified:",-1)),Ht(" "+we(t.modifiedAt),1)])]),e[12]||(e[12]=j("div",{class:"table-header"},[j("div",{class:"table-cell"},"Pin"),j("div",{class:"table-cell"},"Mode"),j("div",{class:"table-cell"},"Relay Name")],-1)),j("div",g2,[(q(!0),Q(Je,null,En(t.boardStore.pinConfigs,_=>(q(),Q("div",{class:"table-row",key:_.pinNumber},[j("div",_2,we(_.pinNumber),1),j("div",y2,we(_.mode==="output"?"OUT":"IN"),1),j("div",{class:"table-cell relay-name",onClick:R=>t.requestEditPinConfig(_)},we(_.relayName?_.relayName:"None"),9,v2)]))),128)),j("div",E2,[j("div",{class:"delete-button",onClick:e[3]||(e[3]=_=>t.requestDeleteBoard=!0)}," Delete ")])]),t.selectedPinConfig?(q(),qe(o,{key:0,relayName:t.boardStore.selectedBoard.name,pinNumber:t.selectedPinConfig.pinNumber,initialMode:t.selectedPinConfig.mode,initialRelayId:t.selectedPinConfig.relayId,onCancel:t.onCancelSelectRelay,onSave:t.onSaveSelectRelay},null,8,["relayName","pinNumber","initialMode","initialRelayId","onCancel","onSave"])):Te("",!0),t.requestDeleteBoard?(q(),qe(l,{key:1,text:`Are you sure you want to delete '${t.boardStore.selectedBoard.name}'?`,onYes:t.deleteBoard,onNo:e[4]||(e[4]=_=>t.requestDeleteBoard=!1)},null,8,["text","onYes"])):Te("",!0),t.clipboardText?(q(),qe(c,{key:2,text:t.clipboardText,onOk:e[5]||(e[5]=_=>t.clipboardText=null)},null,8,["text"])):Te("",!0),t.requestEditBoard?(q(),qe(u,{key:3,boardId:t.boardStore.selectedBoard.id,onBoardAdded:e[6]||(e[6]=_=>t.requestEditBoard=!1),onCancel:e[7]||(e[7]=_=>t.requestEditBoard=!1)},null,8,["boardId"])):Te("",!0)])}const by=xe(f2,[["render",w2]]),T2=De({components:{PopupAddRelay:my,PopupYesNo:Iy},computed:{relay(){return py}},props:{},emits:[],setup(){const t=xs(),e=qs(),n=Nr(),r=oo(),s=re(),i=re(),o=re(),l=re(),c=re();Cr(async()=>{var m;if(!n.selectedRelay){await t.push({name:e.navigateBackPage});return}e.setNavigateBackPage("relays"),i.value=n.getMaxOnTime(n.selectedRelay),await r.loadBoards(),r.selectedBoard=r.boards.find(_=>_.id===n.selectedRelay.boardId),o.value=(m=r.selectedBoard)==null?void 0:m.name,await r.loadBoardDetails(),s.value=r.pinConfigs.find(_=>_.relayId===n.selectedRelay.id)});async function u(){await n.deleteRelay(n.selectedRelay.id),await t.push({name:e.navigateBackPage})}function d(){r.selectedBoard?(e.setNavigateBackPage("relay"),t.push({name:"board"})):t.push({name:"boards"})}function p(){l.value=!1,i.value=n.getMaxOnTime(n.selectedRelay)}return{maxOnTime:i,boardName:o,pinConfig:s,relayStore:n,requestDeleteRelay:c,requestEditRelay:l,deleteRelay:u,onRelayUpdated:p,goToBoard:d}}}),I2={key:0,class:"relay"},b2={class:"relay-header"};function A2(t,e,n,r,s,i){var c;const o=_e("popup-yes-no"),l=_e("popup-add-relay");return t.relayStore.selectedRelay?(q(),Q("div",I2,[j("div",b2,[j("h3",{onClick:e[0]||(e[0]=u=>t.requestEditRelay=!0)},we(t.relayStore.selectedRelay.name),1),j("p",{onClick:e[1]||(e[1]=u=>t.requestEditRelay=!0)},[e[8]||(e[8]=j("strong",null,"Max on time:",-1)),Ht(" "+we(t.maxOnTime),1)]),j("p",{onClick:e[2]||(e[2]=(...u)=>t.goToBoard&&t.goToBoard(...u))},[e[9]||(e[9]=j("strong",null,"Board:",-1)),Ht(" "+we(t.boardName),1)]),j("p",{onClick:e[3]||(e[3]=(...u)=>t.goToBoard&&t.goToBoard(...u))},[e[10]||(e[10]=j("strong",null,"Pin:",-1)),Ht(" "+we((c=t.pinConfig)==null?void 0:c.pinNumber),1)]),j("p",{onClick:e[4]||(e[4]=(...u)=>t.goToBoard&&t.goToBoard(...u))},[e[11]||(e[11]=j("strong",null,"Pin mode:",-1)),Ht(" "+we(t.pinConfig?t.pinConfig.mode==="input"?"Input":"Output":""),1)]),j("p",null,[e[12]||(e[12]=j("strong",null,"Status:",-1)),Ht(" "+we(t.relayStore.selectedRelay.state?"On":"Off"),1)])]),t.relayStore.selectedRelay.state?Te("",!0):(q(),Q("div",{key:0,class:"delete-button",onClick:e[5]||(e[5]=u=>t.requestDeleteRelay=!0)}," Delete ")),t.requestDeleteRelay?(q(),qe(o,{key:1,text:`Are you sure you want to delete '${t.relayStore.selectedRelay.name}'?`,onYes:t.deleteRelay,onNo:e[6]||(e[6]=u=>t.requestDeleteRelay=!1)},null,8,["text","onYes"])):Te("",!0),t.requestEditRelay?(q(),qe(l,{key:2,relay:t.relayStore.selectedRelay,onRelayAdded:t.onRelayUpdated,onCancel:e[7]||(e[7]=u=>t.requestEditRelay=!1)},null,8,["relay","onRelayAdded"])):Te("",!0)])):Te("",!0)}const Ay=xe(T2,[["render",A2],["__scopeId","data-v-399d2245"]]),S2=De({name:"App",components:{Board:by,Boards:Ty,Home:vy,TopBar:_P,Schedules:yy,Relays:gy,Relay:Ay,TaskBar:Fw,SignIn:$b},setup(){const t=qm(),e=qs(),n=re(null),r=Ue(()=>!!t.user);function s(i){n.value&&(i instanceof HTMLElement?i.scrollIntoView({behavior:"smooth",block:"end"}):n.value.scroll({top:n.value.scrollHeight,behavior:"smooth"}))}return{signedIn:r,pageStore:e,ref_body:n,scrollToBottom:s}}}),R2={class:"app"},C2={key:0,class:"signed-in"},P2={class:"body",ref:"ref_body"};function k2(t,e,n,r,s,i){const o=_e("top-bar"),l=_e("home"),c=_e("boards"),u=_e("board"),d=_e("relays"),p=_e("relay"),m=_e("schedules"),_=_e("task-bar"),R=_e("sign-in");return q(),Q("div",R2,[t.signedIn?(q(),Q("div",C2,[pe(o),j("div",P2,[t.pageStore.currentPage==="home"?(q(),qe(l,{key:0})):Te("",!0),t.pageStore.currentPage==="boards"?(q(),qe(c,{key:1})):Te("",!0),t.pageStore.currentPage==="board"?(q(),qe(u,{key:2})):Te("",!0),t.pageStore.currentPage==="relays"?(q(),qe(d,{key:3,onRequestScrollToBottom:t.scrollToBottom},null,8,["onRequestScrollToBottom"])):Te("",!0),t.pageStore.currentPage==="relay"?(q(),qe(p,{key:4})):t.pageStore.currentPage==="schedules"?(q(),qe(m,{key:5,onRequestScrollToBottom:t.scrollToBottom},null,8,["onRequestScrollToBottom"])):Te("",!0)],512),pe(_)])):(q(),qe(R,{key:1}))])}const N2=xe(S2,[["render",k2],["__scopeId","data-v-6428b056"]]),D2=[{path:"/home",name:"home",component:vy},{path:"/boards",name:"boards",component:Ty},{path:"/board/",name:"board",component:by},{path:"/relays",name:"relays",component:gy},{path:"/relay",name:"relay",component:Ay},{path:"/schedules",name:"schedules",component:yy},{path:"/:catchAll(.*)",redirect:"/relays"}],Sy=bw({history:ZE("/RelayHub"),routes:D2});Sy.beforeEach((t,e,n)=>{const r=qs();e.name!==r.navigateBackPage&&(r.navigateBackPage=null),r.setPage(t.name),n()});const Zu=pE(N2),O2=_E();Zu.use(Sy);Zu.use(O2);Zu.mount("#app");
