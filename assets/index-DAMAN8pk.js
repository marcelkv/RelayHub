(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},cs=[],dn=()=>{},Ty=()=>!1,ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pc=t=>t.startsWith("onUpdate:"),Pt=Object.assign,kc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Iy=Object.prototype.hasOwnProperty,Ve=(t,e)=>Iy.call(t,e),me=Array.isArray,us=t=>_a(t)==="[object Map]",Qf=t=>_a(t)==="[object Set]",ve=t=>typeof t=="function",nt=t=>typeof t=="string",qn=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",Jf=t=>(ze(t)||ve(t))&&ve(t.then)&&ve(t.catch),Yf=Object.prototype.toString,_a=t=>Yf.call(t),by=t=>_a(t).slice(8,-1),Xf=t=>_a(t)==="[object Object]",Dc=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ai=Cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ya=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ay=/-(\w)/g,Zt=ya(t=>t.replace(Ay,(e,n)=>n?n.toUpperCase():"")),Ry=/\B([A-Z])/g,Tr=ya(t=>t.replace(Ry,"-$1").toLowerCase()),va=ya(t=>t.charAt(0).toUpperCase()+t.slice(1)),gl=ya(t=>t?`on${va(t)}`:""),lr=(t,e)=>!Object.is(t,e),Po=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Zf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ql=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xh;const Ea=()=>xh||(xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jn(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=nt(r)?ky(r):jn(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(nt(t)||ze(t))return t}const Sy=/;(?![^(]*\))/g,Cy=/:([^]+)/,Py=/\/\*[^]*?\*\//g;function ky(t){const e={};return t.replace(Py,"").split(Sy).forEach(n=>{if(n){const r=n.split(Cy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function st(t){let e="";if(nt(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const r=st(t[n]);r&&(e+=r+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Dy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ny=Cc(Dy);function ep(t){return!!t||t===""}const tp=t=>!!(t&&t.__v_isRef===!0),we=t=>nt(t)?t:t==null?"":me(t)||ze(t)&&(t.toString===Yf||!ve(t.toString))?tp(t)?we(t.value):JSON.stringify(t,np,2):String(t),np=(t,e)=>tp(e)?np(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[_l(r,i)+" =>"]=s,n),{})}:Qf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_l(n))}:qn(e)?_l(e):ze(e)&&!me(e)&&!Xf(e)?String(e):e,_l=(t,e="")=>{var n;return qn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class rp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function sp(t){return new rp(t)}function ip(){return Ot}function Oy(t,e=!1){Ot&&Ot.cleanups.push(t)}let Be;const yl=new WeakSet;class op{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yl.has(this)&&(yl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lh(this),cp(this);const e=Be,n=nn;Be=this,nn=!0;try{return this.fn()}finally{up(this),Be=e,nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vc(e);this.deps=this.depsTail=void 0,Lh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jl(this)&&this.run()}get dirty(){return jl(this)}}let ap=0,li,ci;function lp(t,e=!1){if(t.flags|=8,e){t.next=ci,ci=t;return}t.next=li,li=t}function Nc(){ap++}function Oc(){if(--ap>0)return;if(ci){let e=ci;for(ci=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;li;){let e=li;for(li=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function cp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function up(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Vc(r),Vy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function jl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(hp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function hp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ei))return;t.globalVersion=Ei;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!jl(t)){t.flags&=-3;return}const n=Be,r=nn;Be=t,nn=!0;try{cp(t);const s=t.fn(t._value);(e.version===0||lr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Be=n,nn=r,up(t),t.flags&=-3}}function Vc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nn=!0;const dp=[];function Ir(){dp.push(nn),nn=!1}function br(){const t=dp.pop();nn=t===void 0?!0:t}function Lh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Be;Be=void 0;try{e()}finally{Be=n}}}let Ei=0;class My{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Be||!nn||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new My(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,fp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=r)}return n}trigger(e){this.version++,Ei++,this.notify(e)}notify(e){Nc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Oc()}}}function fp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)fp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ho=new WeakMap,Ur=Symbol(""),Hl=Symbol(""),wi=Symbol("");function bt(t,e,n){if(nn&&Be){let r=Ho.get(t);r||Ho.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Mc),s.map=r,s.key=n),s.track()}}function Sn(t,e,n,r,s,i){const o=Ho.get(t);if(!o){Ei++;return}const l=c=>{c&&c.trigger()};if(Nc(),e==="clear")o.forEach(l);else{const c=me(t),u=c&&Dc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===wi||!qn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(wi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Ur)),us(t)&&l(o.get(Hl)));break;case"delete":c||(l(o.get(Ur)),us(t)&&l(o.get(Hl)));break;case"set":us(t)&&l(o.get(Ur));break}}Oc()}function xy(t,e){const n=Ho.get(t);return n&&n.get(e)}function es(t){const e=De(t);return e===t?e:(bt(e,"iterate",wi),Xt(t)?e:e.map(At))}function wa(t){return bt(t=De(t),"iterate",wi),t}const Ly={__proto__:null,[Symbol.iterator](){return vl(this,Symbol.iterator,At)},concat(...t){return es(this).concat(...t.map(e=>me(e)?es(e):e))},entries(){return vl(this,"entries",t=>(t[1]=At(t[1]),t))},every(t,e){return bn(this,"every",t,e,void 0,arguments)},filter(t,e){return bn(this,"filter",t,e,n=>n.map(At),arguments)},find(t,e){return bn(this,"find",t,e,At,arguments)},findIndex(t,e){return bn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return bn(this,"findLast",t,e,At,arguments)},findLastIndex(t,e){return bn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return bn(this,"forEach",t,e,void 0,arguments)},includes(...t){return El(this,"includes",t)},indexOf(...t){return El(this,"indexOf",t)},join(t){return es(this).join(t)},lastIndexOf(...t){return El(this,"lastIndexOf",t)},map(t,e){return bn(this,"map",t,e,void 0,arguments)},pop(){return Zs(this,"pop")},push(...t){return Zs(this,"push",t)},reduce(t,...e){return Fh(this,"reduce",t,e)},reduceRight(t,...e){return Fh(this,"reduceRight",t,e)},shift(){return Zs(this,"shift")},some(t,e){return bn(this,"some",t,e,void 0,arguments)},splice(...t){return Zs(this,"splice",t)},toReversed(){return es(this).toReversed()},toSorted(t){return es(this).toSorted(t)},toSpliced(...t){return es(this).toSpliced(...t)},unshift(...t){return Zs(this,"unshift",t)},values(){return vl(this,"values",At)}};function vl(t,e,n){const r=wa(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Fy=Array.prototype;function bn(t,e,n,r,s,i){const o=wa(t),l=o!==t&&!Xt(t),c=o[e];if(c!==Fy[e]){const p=c.apply(t,i);return l?At(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,At(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Fh(t,e,n,r){const s=wa(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,At(l),c,t)}),s[e](i,...r)}function El(t,e,n){const r=De(t);bt(r,"iterate",wi);const s=r[e](...n);return(s===-1||s===!1)&&Fc(n[0])?(n[0]=De(n[0]),r[e](...n)):s}function Zs(t,e,n=[]){Ir(),Nc();const r=De(t)[e].apply(t,n);return Oc(),br(),r}const Uy=Cc("__proto__,__v_isRef,__isVue"),pp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qn));function $y(t){qn(t)||(t=String(t));const e=De(this);return bt(e,"has",t),e.hasOwnProperty(t)}class mp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Jy:vp:i?yp:_p).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=me(e);if(!s){let c;if(o&&(c=Ly[n]))return c;if(n==="hasOwnProperty")return $y}const l=Reflect.get(e,n,Xe(e)?e:r);return(qn(n)?pp.has(n):Uy(n))||(s||bt(e,"get",n),i)?l:Xe(l)?o&&Dc(n)?l:l.value:ze(l)?s?wp(l):Li(l):l}}class gp extends mp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=jr(i);if(!Xt(r)&&!jr(r)&&(i=De(i),r=De(r)),!me(e)&&Xe(i)&&!Xe(r))return c?!1:(i.value=r,!0)}const o=me(e)&&Dc(n)?Number(n)<e.length:Ve(e,n),l=Reflect.set(e,n,r,Xe(e)?e:s);return e===De(s)&&(o?lr(r,i)&&Sn(e,"set",n,r):Sn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Sn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!qn(n)||!pp.has(n))&&bt(e,"has",n),r}ownKeys(e){return bt(e,"iterate",me(e)?"length":Ur),Reflect.ownKeys(e)}}class By extends mp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const qy=new gp,jy=new By,Hy=new gp(!0);const zl=t=>t,Eo=t=>Reflect.getPrototypeOf(t);function zy(t,e,n){return function(...r){const s=this.__v_raw,i=De(s),o=us(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?zl:e?Wl:At;return!e&&bt(i,"iterate",c?Hl:Ur),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function wo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Wy(t,e){const n={get(s){const i=this.__v_raw,o=De(i),l=De(s);t||(lr(s,l)&&bt(o,"get",s),bt(o,"get",l));const{has:c}=Eo(o),u=e?zl:t?Wl:At;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&bt(De(s),"iterate",Ur),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=De(i),l=De(s);return t||(lr(s,l)&&bt(o,"has",s),bt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=De(l),u=e?zl:t?Wl:At;return!t&&bt(c,"iterate",Ur),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return Pt(n,t?{add:wo("add"),set:wo("set"),delete:wo("delete"),clear:wo("clear")}:{add(s){!e&&!Xt(s)&&!jr(s)&&(s=De(s));const i=De(this);return Eo(i).has.call(i,s)||(i.add(s),Sn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!jr(i)&&(i=De(i));const o=De(this),{has:l,get:c}=Eo(o);let u=l.call(o,s);u||(s=De(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?lr(i,d)&&Sn(o,"set",s,i):Sn(o,"add",s,i),this},delete(s){const i=De(this),{has:o,get:l}=Eo(i);let c=o.call(i,s);c||(s=De(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Sn(i,"delete",s,void 0),u},clear(){const s=De(this),i=s.size!==0,o=s.clear();return i&&Sn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=zy(s,t,e)}),n}function xc(t,e){const n=Wy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ve(n,s)&&s in r?n:r,s,i)}const Gy={get:xc(!1,!1)},Ky={get:xc(!1,!0)},Qy={get:xc(!0,!1)};const _p=new WeakMap,yp=new WeakMap,vp=new WeakMap,Jy=new WeakMap;function Yy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xy(t){return t.__v_skip||!Object.isExtensible(t)?0:Yy(by(t))}function Li(t){return jr(t)?t:Lc(t,!1,qy,Gy,_p)}function Ep(t){return Lc(t,!1,Hy,Ky,yp)}function wp(t){return Lc(t,!0,jy,Qy,vp)}function Lc(t,e,n,r,s){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Xy(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function cr(t){return jr(t)?cr(t.__v_raw):!!(t&&t.__v_isReactive)}function jr(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function Fc(t){return t?!!t.__v_raw:!1}function De(t){const e=t&&t.__v_raw;return e?De(e):t}function Uc(t){return!Ve(t,"__v_skip")&&Object.isExtensible(t)&&Zf(t,"__v_skip",!0),t}const At=t=>ze(t)?Li(t):t,Wl=t=>ze(t)?wp(t):t;function Xe(t){return t?t.__v_isRef===!0:!1}function re(t){return Tp(t,!1)}function Zy(t){return Tp(t,!0)}function Tp(t,e){return Xe(t)?t:new ev(t,e)}class ev{constructor(e,n){this.dep=new Mc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:De(e),this._value=n?e:At(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||jr(e);e=r?e:De(e),lr(e,n)&&(this._rawValue=e,this._value=r?e:At(e),this.dep.trigger())}}function hs(t){return Xe(t)?t.value:t}const tv={get:(t,e,n)=>e==="__v_raw"?t:hs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Xe(s)&&!Xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ip(t){return cr(t)?t:new Proxy(t,tv)}function nv(t){const e=me(t)?new Array(t.length):{};for(const n in t)e[n]=sv(t,n);return e}class rv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return xy(De(this._object),this._key)}}function sv(t,e,n){const r=t[e];return Xe(r)?r:new rv(t,e,n)}class iv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ei-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return lp(this,!0),!0}get value(){const e=this.dep.track();return hp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ov(t,e,n=!1){let r,s;return ve(t)?r=t:(r=t.get,s=t.set),new iv(r,s,n)}const To={},zo=new WeakMap;let Mr;function av(t,e=!1,n=Mr){if(n){let r=zo.get(n);r||zo.set(n,r=[]),r.push(t)}}function lv(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=z=>s?z:Xt(z)||s===!1||s===0?Cn(z,1):Cn(z);let d,p,m,_,S=!1,A=!1;if(Xe(t)?(p=()=>t.value,S=Xt(t)):cr(t)?(p=()=>u(t),S=!0):me(t)?(A=!0,S=t.some(z=>cr(z)||Xt(z)),p=()=>t.map(z=>{if(Xe(z))return z.value;if(cr(z))return u(z);if(ve(z))return c?c(z,2):z()})):ve(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Ir();try{m()}finally{br()}}const z=Mr;Mr=d;try{return c?c(t,3,[_]):t(_)}finally{Mr=z}}:p=dn,e&&s){const z=p,Z=s===!0?1/0:s;p=()=>Cn(z(),Z)}const P=ip(),N=()=>{d.stop(),P&&P.active&&kc(P.effects,d)};if(i&&e){const z=e;e=(...Z)=>{z(...Z),N()}}let V=A?new Array(t.length).fill(To):To;const L=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const Z=d.run();if(s||S||(A?Z.some((ae,b)=>lr(ae,V[b])):lr(Z,V))){m&&m();const ae=Mr;Mr=d;try{const b=[Z,V===To?void 0:A&&V[0]===To?[]:V,_];c?c(e,3,b):e(...b),V=Z}finally{Mr=ae}}}else d.run()};return l&&l(L),d=new op(p),d.scheduler=o?()=>o(L,!1):L,_=z=>av(z,!1,d),m=d.onStop=()=>{const z=zo.get(d);if(z){if(c)c(z,4);else for(const Z of z)Z();zo.delete(d)}},e?r?L(!0):V=d.run():o?o(L.bind(null,!0),!0):d.run(),N.pause=d.pause.bind(d),N.resume=d.resume.bind(d),N.stop=N,N}function Cn(t,e=1/0,n){if(e<=0||!ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Xe(t))Cn(t.value,e,n);else if(me(t))for(let r=0;r<t.length;r++)Cn(t[r],e,n);else if(Qf(t)||us(t))t.forEach(r=>{Cn(r,e,n)});else if(Xf(t)){for(const r in t)Cn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Cn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ta(s,e,n)}}function _n(t,e,n,r){if(ve(t)){const s=Fi(t,e,n,r);return s&&Jf(s)&&s.catch(i=>{Ta(i,e,n)}),s}if(me(t)){const s=[];for(let i=0;i<t.length;i++)s.push(_n(t[i],e,n,r));return s}}function Ta(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Ir(),Fi(i,null,10,[t,c,u]),br();return}}cv(t,n,s,r,o)}function cv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Vt=[];let un=-1;const ds=[];let tr=null,ns=0;const bp=Promise.resolve();let Wo=null;function $c(t){const e=Wo||bp;return t?e.then(this?t.bind(this):t):e}function uv(t){let e=un+1,n=Vt.length;for(;e<n;){const r=e+n>>>1,s=Vt[r],i=Ti(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bc(t){if(!(t.flags&1)){const e=Ti(t),n=Vt[Vt.length-1];!n||!(t.flags&2)&&e>=Ti(n)?Vt.push(t):Vt.splice(uv(e),0,t),t.flags|=1,Ap()}}function Ap(){Wo||(Wo=bp.then(Sp))}function hv(t){me(t)?ds.push(...t):tr&&t.id===-1?tr.splice(ns+1,0,t):t.flags&1||(ds.push(t),t.flags|=1),Ap()}function Uh(t,e,n=un+1){for(;n<Vt.length;n++){const r=Vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rp(t){if(ds.length){const e=[...new Set(ds)].sort((n,r)=>Ti(n)-Ti(r));if(ds.length=0,tr){tr.push(...e);return}for(tr=e,ns=0;ns<tr.length;ns++){const n=tr[ns];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}tr=null,ns=0}}const Ti=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sp(t){try{for(un=0;un<Vt.length;un++){const e=Vt[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<Vt.length;un++){const e=Vt[un];e&&(e.flags&=-2)}un=-1,Vt.length=0,Rp(),Wo=null,(Vt.length||ds.length)&&Sp()}}let lt=null,Cp=null;function Go(t){const e=lt;return lt=t,Cp=t&&t.type.__scopeId||null,e}function Vn(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qh(-1);const i=Go(e);let o;try{o=t(...s)}finally{Go(i),r._d&&Qh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ys(t,e){if(lt===null)return t;const n=Ra(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Fe]=e[s];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&Cn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Or(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Ir(),_n(c,n,8,[t.el,l,t,e]),br())}}const dv=Symbol("_vte"),fv=t=>t.__isTeleport;function qc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,qc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ne(t,e){return ve(t)?Pt({name:t.name},e,{setup:t}):t}function Pp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ko(t,e,n,r,s=!1){if(me(t)){t.forEach((S,A)=>Ko(S,e&&(me(e)?e[A]:e),n,r,s));return}if(fs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ko(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ra(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Fe?l.refs={}:l.refs,p=l.setupState,m=De(p),_=p===Fe?()=>!1:S=>Ve(m,S);if(u!=null&&u!==c&&(nt(u)?(d[u]=null,_(u)&&(p[u]=null)):Xe(u)&&(u.value=null)),ve(c))Fi(c,l,12,[o,d]);else{const S=nt(c),A=Xe(c);if(S||A){const P=()=>{if(t.f){const N=S?_(c)?p[c]:d[c]:c.value;s?me(N)&&kc(N,i):me(N)?N.includes(i)||N.push(i):S?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else S?(d[c]=o,_(c)&&(p[c]=o)):A&&(c.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,jt(P,n)):P()}}}Ea().requestIdleCallback;Ea().cancelIdleCallback;const fs=t=>!!t.type.__asyncLoader,kp=t=>t.type.__isKeepAlive;function pv(t,e){Dp(t,"a",e)}function mv(t,e){Dp(t,"da",e)}function Dp(t,e,n=mt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ia(e,r,n),n){let s=n.parent;for(;s&&s.parent;)kp(s.parent.vnode)&&gv(r,e,n,s),s=s.parent}}function gv(t,e,n,r){const s=Ia(e,t,r,!0);jc(()=>{kc(r[e],s)},n)}function Ia(t,e,n=mt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ir();const l=$i(n),c=_n(e,n,t,o);return l(),br(),c});return r?s.unshift(i):s.push(i),i}}const Hn=t=>(e,n=mt)=>{(!Ai||t==="sp")&&Ia(t,(...r)=>e(...r),n)},Ui=Hn("bm"),Ar=Hn("m"),_v=Hn("bu"),yv=Hn("u"),Np=Hn("bum"),jc=Hn("um"),vv=Hn("sp"),Ev=Hn("rtg"),wv=Hn("rtc");function Tv(t,e=mt){Ia("ec",t,e)}const Iv="components";function _e(t,e){return Av(Iv,t,!0,e)||t}const bv=Symbol.for("v-ndc");function Av(t,e,n=!0,r=!1){const s=lt||mt;if(s){const i=s.type;{const l=f0(i,!1);if(l&&(l===e||l===Zt(e)||l===va(Zt(e))))return i}const o=$h(s[t]||i[t],e)||$h(s.appContext[t],e);return!o&&r?i:o}}function $h(t,e){return t&&(t[e]||t[Zt(e)]||t[va(Zt(e))])}function yn(t,e,n,r){let s;const i=n,o=me(t);if(o||nt(t)){const l=o&&cr(t);let c=!1;l&&(c=!Xt(t),t=wa(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?At(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(ze(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function Rv(t,e,n={},r,s){if(lt.ce||lt.parent&&fs(lt.parent)&&lt.parent.ce)return n.name=e,j(),je(Je,null,[pe("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),j();const o=i&&Op(i(n)),l=n.key||o&&o.key,c=je(Je,{key:(l&&!qn(l)?l:`_${e}`)+""},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Op(t){return t.some(e=>bi(e)?!(e.type===pr||e.type===Je&&!Op(e.children)):!0)?t:null}const Gl=t=>t?tm(t)?Ra(t):Gl(t.parent):null,ui=Pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gl(t.parent),$root:t=>Gl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Mp(t),$forceUpdate:t=>t.f||(t.f=()=>{Bc(t.update)}),$nextTick:t=>t.n||(t.n=$c.bind(t.proxy)),$watch:t=>Kv.bind(t)}),wl=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Ve(t,e),Sv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(wl(r,e))return o[e]=1,r[e];if(s!==Fe&&Ve(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ve(u,e))return o[e]=3,i[e];if(n!==Fe&&Ve(n,e))return o[e]=4,n[e];Kl&&(o[e]=0)}}const d=ui[e];let p,m;if(d)return e==="$attrs"&&bt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Fe&&Ve(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ve(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return wl(s,e)?(s[e]=n,!0):r!==Fe&&Ve(r,e)?(r[e]=n,!0):Ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Fe&&Ve(t,o)||wl(e,o)||(l=i[0])&&Ve(l,o)||Ve(r,o)||Ve(ui,o)||Ve(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bh(t){return me(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kl=!0;function Cv(t){const e=Mp(t),n=t.proxy,r=t.ctx;Kl=!1,e.beforeCreate&&qh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:S,activated:A,deactivated:P,beforeDestroy:N,beforeUnmount:V,destroyed:L,unmounted:z,render:Z,renderTracked:ae,renderTriggered:b,errorCaptured:y,serverPrefetch:v,expose:I,inheritAttrs:R,components:C,directives:w,filters:rt}=e;if(u&&Pv(u,r,null),o)for(const he in o){const Ie=o[he];ve(Ie)&&(r[he]=Ie.bind(n))}if(s){const he=s.call(n,n);ze(he)&&(t.data=Li(he))}if(Kl=!0,i)for(const he in i){const Ie=i[he],Bt=ve(Ie)?Ie.bind(n,n):ve(Ie.get)?Ie.get.bind(n,n):dn,en=!ve(Ie)&&ve(Ie.set)?Ie.set.bind(n):dn,Qt=Ue({get:Bt,set:en});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:We=>Qt.value=We})}if(l)for(const he in l)Vp(l[he],r,n,he);if(c){const he=ve(c)?c.call(n):c;Reflect.ownKeys(he).forEach(Ie=>{ko(Ie,he[Ie])})}d&&qh(d,t,"c");function $e(he,Ie){me(Ie)?Ie.forEach(Bt=>he(Bt.bind(n))):Ie&&he(Ie.bind(n))}if($e(Ui,p),$e(Ar,m),$e(_v,_),$e(yv,S),$e(pv,A),$e(mv,P),$e(Tv,y),$e(wv,ae),$e(Ev,b),$e(Np,V),$e(jc,z),$e(vv,v),me(I))if(I.length){const he=t.exposed||(t.exposed={});I.forEach(Ie=>{Object.defineProperty(he,Ie,{get:()=>n[Ie],set:Bt=>n[Ie]=Bt})})}else t.exposed||(t.exposed={});Z&&t.render===dn&&(t.render=Z),R!=null&&(t.inheritAttrs=R),C&&(t.components=C),w&&(t.directives=w),v&&Pp(t)}function Pv(t,e,n=dn){me(t)&&(t=Ql(t));for(const r in t){const s=t[r];let i;ze(s)?"default"in s?i=rn(s.from||r,s.default,!0):i=rn(s.from||r):i=rn(s),Xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function qh(t,e,n){_n(me(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vp(t,e,n,r){let s=r.includes(".")?Qp(n,r):()=>n[r];if(nt(t)){const i=e[t];ve(i)&&fn(s,i)}else if(ve(t))fn(s,t.bind(n));else if(ze(t))if(me(t))t.forEach(i=>Vp(i,e,n,r));else{const i=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(i)&&fn(s,i,t)}}function Mp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Qo(c,u,o,!0)),Qo(c,e,o)),ze(e)&&i.set(e,c),c}function Qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qo(t,i,n,!0),s&&s.forEach(o=>Qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=kv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const kv={data:jh,props:Hh,emits:Hh,methods:ni,computed:ni,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:ni,directives:ni,watch:Nv,provide:jh,inject:Dv};function jh(t,e){return e?t?function(){return Pt(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function Dv(t,e){return ni(Ql(t),Ql(e))}function Ql(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Nt(t,e){return t?[...new Set([].concat(t,e))]:e}function ni(t,e){return t?Pt(Object.create(null),t,e):e}function Hh(t,e){return t?me(t)&&me(e)?[...new Set([...t,...e])]:Pt(Object.create(null),Bh(t),Bh(e??{})):e}function Nv(t,e){if(!t)return e;if(!e)return t;const n=Pt(Object.create(null),t);for(const r in e)n[r]=Nt(t[r],e[r]);return n}function xp(){return{app:null,config:{isNativeTag:Ty,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ov=0;function Vv(t,e){return function(r,s=null){ve(r)||(r=Pt({},r)),s!=null&&!ze(s)&&(s=null);const i=xp(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:Ov++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:m0,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ve(d.install)?(o.add(d),d.install(u,...p)):ve(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const _=u._ceVNode||pe(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,d,m),c=!0,u._container=d,d.__vue_app__=u,Ra(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(_n(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=$r;$r=u;try{return d()}finally{$r=p}}};return u}}let $r=null;function ko(t,e){if(mt){let n=mt.provides;const r=mt.parent&&mt.parent.provides;r===n&&(n=mt.provides=Object.create(r)),n[t]=e}}function rn(t,e,n=!1){const r=mt||lt;if(r||$r){const s=$r?$r._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}function Mv(){return!!(mt||lt||$r)}const Lp={},Fp=()=>Object.create(Lp),Up=t=>Object.getPrototypeOf(t)===Lp;function xv(t,e,n,r=!1){const s={},i=Fp();t.propsDefaults=Object.create(null),$p(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ep(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Lv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=De(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(ba(t.emitsOptions,m))continue;const _=e[m];if(c)if(Ve(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const S=Zt(m);s[S]=Jl(c,l,S,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{$p(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Ve(e,p)&&((d=Tr(p))===p||!Ve(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Jl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ve(e,p))&&(delete i[p],u=!0)}u&&Sn(t.attrs,"set","")}function $p(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ai(c))continue;const u=e[c];let d;s&&Ve(s,d=Zt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:ba(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=De(n),u=l||Fe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Jl(s,c,p,u[p],t,!Ve(u,p))}}return o}function Jl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ve(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ve(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=$i(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Tr(n))&&(r=!0))}return r}const Fv=new WeakMap;function Bp(t,e,n=!1){const r=n?Fv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ve(t)){const d=p=>{c=!0;const[m,_]=Bp(p,e,!0);Pt(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return ze(t)&&r.set(t,cs),cs;if(me(i))for(let d=0;d<i.length;d++){const p=Zt(i[d]);zh(p)&&(o[p]=Fe)}else if(i)for(const d in i){const p=Zt(d);if(zh(p)){const m=i[d],_=o[p]=me(m)||ve(m)?{type:m}:Pt({},m),S=_.type;let A=!1,P=!0;if(me(S))for(let N=0;N<S.length;++N){const V=S[N],L=ve(V)&&V.name;if(L==="Boolean"){A=!0;break}else L==="String"&&(P=!1)}else A=ve(S)&&S.name==="Boolean";_[0]=A,_[1]=P,(A||Ve(_,"default"))&&l.push(p)}}const u=[o,l];return ze(t)&&r.set(t,u),u}function zh(t){return t[0]!=="$"&&!ai(t)}const qp=t=>t[0]==="_"||t==="$stable",Hc=t=>me(t)?t.map(hn):[hn(t)],Uv=(t,e,n)=>{if(e._n)return e;const r=Vn((...s)=>Hc(e(...s)),n);return r._c=!1,r},jp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qp(s))continue;const i=t[s];if(ve(i))e[s]=Uv(s,i,r);else if(i!=null){const o=Hc(i);e[s]=()=>o}}},Hp=(t,e)=>{const n=Hc(e);t.slots.default=()=>n},zp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},$v=(t,e,n)=>{const r=t.slots=Fp();if(t.vnode.shapeFlag&32){const s=e._;s?(zp(r,e,n),n&&Zf(r,"_",s,!0)):jp(e,r)}else e&&Hp(t,e)},Bv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:zp(s,e,n):(i=!e.$stable,jp(e,s)),o=e}else e&&(Hp(t,e),o={default:1});if(i)for(const l in s)!qp(l)&&o[l]==null&&delete s[l]},jt=t0;function qv(t){return jv(t)}function jv(t,e){const n=Ea();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=dn,insertStaticContent:S}=t,A=(E,T,k,x=null,B=null,F=null,J=void 0,G=null,W=!!T.dynamicChildren)=>{if(E===T)return;E&&!ei(E,T)&&(x=M(E),We(E,B,F,!0),E=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:H,ref:le,shapeFlag:X}=T;switch(H){case Aa:P(E,T,k,x);break;case pr:N(E,T,k,x);break;case Do:E==null&&V(T,k,x,J);break;case Je:C(E,T,k,x,B,F,J,G,W);break;default:X&1?Z(E,T,k,x,B,F,J,G,W):X&6?w(E,T,k,x,B,F,J,G,W):(X&64||X&128)&&H.process(E,T,k,x,B,F,J,G,W,se)}le!=null&&B&&Ko(le,E&&E.ref,F,T||E,!T)},P=(E,T,k,x)=>{if(E==null)r(T.el=l(T.children),k,x);else{const B=T.el=E.el;T.children!==E.children&&u(B,T.children)}},N=(E,T,k,x)=>{E==null?r(T.el=c(T.children||""),k,x):T.el=E.el},V=(E,T,k,x)=>{[E.el,E.anchor]=S(E.children,T,k,x,E.el,E.anchor)},L=({el:E,anchor:T},k,x)=>{let B;for(;E&&E!==T;)B=m(E),r(E,k,x),E=B;r(T,k,x)},z=({el:E,anchor:T})=>{let k;for(;E&&E!==T;)k=m(E),s(E),E=k;s(T)},Z=(E,T,k,x,B,F,J,G,W)=>{T.type==="svg"?J="svg":T.type==="math"&&(J="mathml"),E==null?ae(T,k,x,B,F,J,G,W):v(E,T,B,F,J,G,W)},ae=(E,T,k,x,B,F,J,G)=>{let W,H;const{props:le,shapeFlag:X,transition:ie,dirs:ue}=E;if(W=E.el=o(E.type,F,le&&le.is,le),X&8?d(W,E.children):X&16&&y(E.children,W,null,x,B,Tl(E,F),J,G),ue&&Or(E,null,x,"created"),b(W,E,E.scopeId,J,x),le){for(const Ee in le)Ee!=="value"&&!ai(Ee)&&i(W,Ee,null,le[Ee],F,x);"value"in le&&i(W,"value",null,le.value,F),(H=le.onVnodeBeforeMount)&&cn(H,x,E)}ue&&Or(E,null,x,"beforeMount");const ce=Hv(B,ie);ce&&ie.beforeEnter(W),r(W,T,k),((H=le&&le.onVnodeMounted)||ce||ue)&&jt(()=>{H&&cn(H,x,E),ce&&ie.enter(W),ue&&Or(E,null,x,"mounted")},B)},b=(E,T,k,x,B)=>{if(k&&_(E,k),x)for(let F=0;F<x.length;F++)_(E,x[F]);if(B){let F=B.subTree;if(T===F||Yp(F.type)&&(F.ssContent===T||F.ssFallback===T)){const J=B.vnode;b(E,J,J.scopeId,J.slotScopeIds,B.parent)}}},y=(E,T,k,x,B,F,J,G,W=0)=>{for(let H=W;H<E.length;H++){const le=E[H]=G?nr(E[H]):hn(E[H]);A(null,le,T,k,x,B,F,J,G)}},v=(E,T,k,x,B,F,J)=>{const G=T.el=E.el;let{patchFlag:W,dynamicChildren:H,dirs:le}=T;W|=E.patchFlag&16;const X=E.props||Fe,ie=T.props||Fe;let ue;if(k&&Vr(k,!1),(ue=ie.onVnodeBeforeUpdate)&&cn(ue,k,T,E),le&&Or(T,E,k,"beforeUpdate"),k&&Vr(k,!0),(X.innerHTML&&ie.innerHTML==null||X.textContent&&ie.textContent==null)&&d(G,""),H?I(E.dynamicChildren,H,G,k,x,Tl(T,B),F):J||Ie(E,T,G,null,k,x,Tl(T,B),F,!1),W>0){if(W&16)R(G,X,ie,k,B);else if(W&2&&X.class!==ie.class&&i(G,"class",null,ie.class,B),W&4&&i(G,"style",X.style,ie.style,B),W&8){const ce=T.dynamicProps;for(let Ee=0;Ee<ce.length;Ee++){const Se=ce[Ee],yt=X[Se],ht=ie[Se];(ht!==yt||Se==="value")&&i(G,Se,yt,ht,B,k)}}W&1&&E.children!==T.children&&d(G,T.children)}else!J&&H==null&&R(G,X,ie,k,B);((ue=ie.onVnodeUpdated)||le)&&jt(()=>{ue&&cn(ue,k,T,E),le&&Or(T,E,k,"updated")},x)},I=(E,T,k,x,B,F,J)=>{for(let G=0;G<T.length;G++){const W=E[G],H=T[G],le=W.el&&(W.type===Je||!ei(W,H)||W.shapeFlag&70)?p(W.el):k;A(W,H,le,null,x,B,F,J,!0)}},R=(E,T,k,x,B)=>{if(T!==k){if(T!==Fe)for(const F in T)!ai(F)&&!(F in k)&&i(E,F,T[F],null,B,x);for(const F in k){if(ai(F))continue;const J=k[F],G=T[F];J!==G&&F!=="value"&&i(E,F,G,J,B,x)}"value"in k&&i(E,"value",T.value,k.value,B)}},C=(E,T,k,x,B,F,J,G,W)=>{const H=T.el=E?E.el:l(""),le=T.anchor=E?E.anchor:l("");let{patchFlag:X,dynamicChildren:ie,slotScopeIds:ue}=T;ue&&(G=G?G.concat(ue):ue),E==null?(r(H,k,x),r(le,k,x),y(T.children||[],k,le,B,F,J,G,W)):X>0&&X&64&&ie&&E.dynamicChildren?(I(E.dynamicChildren,ie,k,B,F,J,G),(T.key!=null||B&&T===B.subTree)&&Wp(E,T,!0)):Ie(E,T,k,le,B,F,J,G,W)},w=(E,T,k,x,B,F,J,G,W)=>{T.slotScopeIds=G,E==null?T.shapeFlag&512?B.ctx.activate(T,k,x,J,W):rt(T,k,x,B,F,J,W):xt(E,T,W)},rt=(E,T,k,x,B,F,J)=>{const G=E.component=l0(E,x,B);if(kp(E)&&(G.ctx.renderer=se),c0(G,!1,J),G.asyncDep){if(B&&B.registerDep(G,$e,J),!E.el){const W=G.subTree=pe(pr);N(null,W,T,k)}}else $e(G,E,T,k,B,F,J)},xt=(E,T,k)=>{const x=T.component=E.component;if(Zv(E,T,k))if(x.asyncDep&&!x.asyncResolved){he(x,T,k);return}else x.next=T,x.update();else T.el=E.el,x.vnode=T},$e=(E,T,k,x,B,F,J)=>{const G=()=>{if(E.isMounted){let{next:X,bu:ie,u:ue,parent:ce,vnode:Ee}=E;{const vt=Gp(E);if(vt){X&&(X.el=Ee.el,he(E,X,J)),vt.asyncDep.then(()=>{E.isUnmounted||G()});return}}let Se=X,yt;Vr(E,!1),X?(X.el=Ee.el,he(E,X,J)):X=Ee,ie&&Po(ie),(yt=X.props&&X.props.onVnodeBeforeUpdate)&&cn(yt,ce,X,Ee),Vr(E,!0);const ht=Gh(E),Jt=E.subTree;E.subTree=ht,A(Jt,ht,p(Jt.el),M(Jt),E,B,F),X.el=ht.el,Se===null&&e0(E,ht.el),ue&&jt(ue,B),(yt=X.props&&X.props.onVnodeUpdated)&&jt(()=>cn(yt,ce,X,Ee),B)}else{let X;const{el:ie,props:ue}=T,{bm:ce,m:Ee,parent:Se,root:yt,type:ht}=E,Jt=fs(T);Vr(E,!1),ce&&Po(ce),!Jt&&(X=ue&&ue.onVnodeBeforeMount)&&cn(X,Se,T),Vr(E,!0);{yt.ce&&yt.ce._injectChildStyle(ht);const vt=E.subTree=Gh(E);A(null,vt,k,x,E,B,F),T.el=vt.el}if(Ee&&jt(Ee,B),!Jt&&(X=ue&&ue.onVnodeMounted)){const vt=T;jt(()=>cn(X,Se,vt),B)}(T.shapeFlag&256||Se&&fs(Se.vnode)&&Se.vnode.shapeFlag&256)&&E.a&&jt(E.a,B),E.isMounted=!0,T=k=x=null}};E.scope.on();const W=E.effect=new op(G);E.scope.off();const H=E.update=W.run.bind(W),le=E.job=W.runIfDirty.bind(W);le.i=E,le.id=E.uid,W.scheduler=()=>Bc(le),Vr(E,!0),H()},he=(E,T,k)=>{T.component=E;const x=E.vnode.props;E.vnode=T,E.next=null,Lv(E,T.props,x,k),Bv(E,T.children,k),Ir(),Uh(E),br()},Ie=(E,T,k,x,B,F,J,G,W=!1)=>{const H=E&&E.children,le=E?E.shapeFlag:0,X=T.children,{patchFlag:ie,shapeFlag:ue}=T;if(ie>0){if(ie&128){en(H,X,k,x,B,F,J,G,W);return}else if(ie&256){Bt(H,X,k,x,B,F,J,G,W);return}}ue&8?(le&16&&Lt(H,B,F),X!==H&&d(k,X)):le&16?ue&16?en(H,X,k,x,B,F,J,G,W):Lt(H,B,F,!0):(le&8&&d(k,""),ue&16&&y(X,k,x,B,F,J,G,W))},Bt=(E,T,k,x,B,F,J,G,W)=>{E=E||cs,T=T||cs;const H=E.length,le=T.length,X=Math.min(H,le);let ie;for(ie=0;ie<X;ie++){const ue=T[ie]=W?nr(T[ie]):hn(T[ie]);A(E[ie],ue,k,null,B,F,J,G,W)}H>le?Lt(E,B,F,!0,!1,X):y(T,k,x,B,F,J,G,W,X)},en=(E,T,k,x,B,F,J,G,W)=>{let H=0;const le=T.length;let X=E.length-1,ie=le-1;for(;H<=X&&H<=ie;){const ue=E[H],ce=T[H]=W?nr(T[H]):hn(T[H]);if(ei(ue,ce))A(ue,ce,k,null,B,F,J,G,W);else break;H++}for(;H<=X&&H<=ie;){const ue=E[X],ce=T[ie]=W?nr(T[ie]):hn(T[ie]);if(ei(ue,ce))A(ue,ce,k,null,B,F,J,G,W);else break;X--,ie--}if(H>X){if(H<=ie){const ue=ie+1,ce=ue<le?T[ue].el:x;for(;H<=ie;)A(null,T[H]=W?nr(T[H]):hn(T[H]),k,ce,B,F,J,G,W),H++}}else if(H>ie)for(;H<=X;)We(E[H],B,F,!0),H++;else{const ue=H,ce=H,Ee=new Map;for(H=ce;H<=ie;H++){const dt=T[H]=W?nr(T[H]):hn(T[H]);dt.key!=null&&Ee.set(dt.key,H)}let Se,yt=0;const ht=ie-ce+1;let Jt=!1,vt=0;const Kn=new Array(ht);for(H=0;H<ht;H++)Kn[H]=0;for(H=ue;H<=X;H++){const dt=E[H];if(yt>=ht){We(dt,B,F,!0);continue}let Yt;if(dt.key!=null)Yt=Ee.get(dt.key);else for(Se=ce;Se<=ie;Se++)if(Kn[Se-ce]===0&&ei(dt,T[Se])){Yt=Se;break}Yt===void 0?We(dt,B,F,!0):(Kn[Yt-ce]=H+1,Yt>=vt?vt=Yt:Jt=!0,A(dt,T[Yt],k,null,B,F,J,G,W),yt++)}const $s=Jt?zv(Kn):cs;for(Se=$s.length-1,H=ht-1;H>=0;H--){const dt=ce+H,Yt=T[dt],ro=dt+1<le?T[dt+1].el:x;Kn[H]===0?A(null,Yt,k,ro,B,F,J,G,W):Jt&&(Se<0||H!==$s[Se]?Qt(Yt,k,ro,2):Se--)}}},Qt=(E,T,k,x,B=null)=>{const{el:F,type:J,transition:G,children:W,shapeFlag:H}=E;if(H&6){Qt(E.component.subTree,T,k,x);return}if(H&128){E.suspense.move(T,k,x);return}if(H&64){J.move(E,T,k,se);return}if(J===Je){r(F,T,k);for(let X=0;X<W.length;X++)Qt(W[X],T,k,x);r(E.anchor,T,k);return}if(J===Do){L(E,T,k);return}if(x!==2&&H&1&&G)if(x===0)G.beforeEnter(F),r(F,T,k),jt(()=>G.enter(F),B);else{const{leave:X,delayLeave:ie,afterLeave:ue}=G,ce=()=>r(F,T,k),Ee=()=>{X(F,()=>{ce(),ue&&ue()})};ie?ie(F,ce,Ee):Ee()}else r(F,T,k)},We=(E,T,k,x=!1,B=!1)=>{const{type:F,props:J,ref:G,children:W,dynamicChildren:H,shapeFlag:le,patchFlag:X,dirs:ie,cacheIndex:ue}=E;if(X===-2&&(B=!1),G!=null&&Ko(G,null,k,E,!0),ue!=null&&(T.renderCache[ue]=void 0),le&256){T.ctx.deactivate(E);return}const ce=le&1&&ie,Ee=!fs(E);let Se;if(Ee&&(Se=J&&J.onVnodeBeforeUnmount)&&cn(Se,T,E),le&6)ln(E.component,k,x);else{if(le&128){E.suspense.unmount(k,x);return}ce&&Or(E,null,T,"beforeUnmount"),le&64?E.type.remove(E,T,k,se,x):H&&!H.hasOnce&&(F!==Je||X>0&&X&64)?Lt(H,T,k,!1,!0):(F===Je&&X&384||!B&&le&16)&&Lt(W,T,k),x&&Ge(E)}(Ee&&(Se=J&&J.onVnodeUnmounted)||ce)&&jt(()=>{Se&&cn(Se,T,E),ce&&Or(E,null,T,"unmounted")},k)},Ge=E=>{const{type:T,el:k,anchor:x,transition:B}=E;if(T===Je){Gn(k,x);return}if(T===Do){z(E);return}const F=()=>{s(k),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(E.shapeFlag&1&&B&&!B.persisted){const{leave:J,delayLeave:G}=B,W=()=>J(k,F);G?G(E.el,F,W):W()}else F()},Gn=(E,T)=>{let k;for(;E!==T;)k=m(E),s(E),E=k;s(T)},ln=(E,T,k)=>{const{bum:x,scope:B,job:F,subTree:J,um:G,m:W,a:H}=E;Wh(W),Wh(H),x&&Po(x),B.stop(),F&&(F.flags|=8,We(J,E,T,k)),G&&jt(G,T),jt(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Lt=(E,T,k,x=!1,B=!1,F=0)=>{for(let J=F;J<E.length;J++)We(E[J],T,k,x,B)},M=E=>{if(E.shapeFlag&6)return M(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=m(E.anchor||E.el),k=T&&T[dv];return k?m(k):T};let ee=!1;const Y=(E,T,k)=>{E==null?T._vnode&&We(T._vnode,null,null,!0):A(T._vnode||null,E,T,null,null,null,k),T._vnode=E,ee||(ee=!0,Uh(),Rp(),ee=!1)},se={p:A,um:We,m:Qt,r:Ge,mt:rt,mc:y,pc:Ie,pbc:I,n:M,o:t};return{render:Y,hydrate:void 0,createApp:Vv(Y)}}function Tl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Hv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wp(t,e,n=!1){const r=t.children,s=e.children;if(me(r)&&me(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=nr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Wp(o,l)),l.type===Aa&&(l.el=o.el)}}function zv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Gp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gp(e)}function Wh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Wv=Symbol.for("v-scx"),Gv=()=>rn(Wv);function fn(t,e,n){return Kp(t,e,n)}function Kp(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,l=Pt({},n),c=e&&r||!e&&i!=="post";let u;if(Ai){if(i==="sync"){const _=Gv();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=dn,_.resume=dn,_.pause=dn,_}}const d=mt;l.call=(_,S,A)=>_n(_,d,S,A);let p=!1;i==="post"?l.scheduler=_=>{jt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,S)=>{S?_():Bc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=lv(t,e,l);return Ai&&(u?u.push(m):c&&m()),m}function Kv(t,e,n){const r=this.proxy,s=nt(t)?t.includes(".")?Qp(r,t):()=>r[t]:t.bind(r,r);let i;ve(e)?i=e:(i=e.handler,n=e);const o=$i(this),l=Kp(s,i.bind(r),n);return o(),l}function Qp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Qv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Zt(e)}Modifiers`]||t[`${Tr(e)}Modifiers`];function Jv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&Qv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>nt(d)?d.trim():d)),o.number&&(s=n.map(ql)));let l,c=r[l=gl(e)]||r[l=gl(Zt(e))];!c&&i&&(c=r[l=gl(Tr(e))]),c&&_n(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,_n(u,t,6,s)}}function Jp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ve(t)){const c=u=>{const d=Jp(u,e,!0);d&&(l=!0,Pt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(ze(t)&&r.set(t,null),null):(me(i)?i.forEach(c=>o[c]=null):Pt(o,i),ze(t)&&r.set(t,o),o)}function ba(t,e){return!t||!ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(t,e[0].toLowerCase()+e.slice(1))||Ve(t,Tr(e))||Ve(t,e))}function Gh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:S,inheritAttrs:A}=t,P=Go(t);let N,V;try{if(n.shapeFlag&4){const z=s||r,Z=z;N=hn(u.call(Z,z,d,p,_,m,S)),V=l}else{const z=e;N=hn(z.length>1?z(p,{attrs:l,slots:o,emit:c}):z(p,null)),V=e.props?l:Yv(l)}}catch(z){hi.length=0,Ta(z,t,1),N=pe(pr)}let L=N;if(V&&A!==!1){const z=Object.keys(V),{shapeFlag:Z}=L;z.length&&Z&7&&(i&&z.some(Pc)&&(V=Xv(V,i)),L=vs(L,V,!1,!0))}return n.dirs&&(L=vs(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&qc(L,n.transition),N=L,Go(P),N}const Yv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ga(n))&&((e||(e={}))[n]=t[n]);return e},Xv=(t,e)=>{const n={};for(const r in t)(!Pc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Kh(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!ba(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Kh(r,o,u):!0:!!o;return!1}function Kh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ba(n,i))return!0}return!1}function e0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Yp=t=>t.__isSuspense;function t0(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):hv(t)}const Je=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),pr=Symbol.for("v-cmt"),Do=Symbol.for("v-stc"),hi=[];let zt=null;function j(t=!1){hi.push(zt=t?null:[])}function n0(){hi.pop(),zt=hi[hi.length-1]||null}let Ii=1;function Qh(t,e=!1){Ii+=t,t<0&&zt&&e&&(zt.hasOnce=!0)}function Xp(t){return t.dynamicChildren=Ii>0?zt||cs:null,n0(),Ii>0&&zt&&zt.push(t),t}function Q(t,e,n,r,s,i){return Xp(q(t,e,n,r,s,i,!0))}function je(t,e,n,r,s){return Xp(pe(t,e,n,r,s,!0))}function bi(t){return t?t.__v_isVNode===!0:!1}function ei(t,e){return t.type===e.type&&t.key===e.key}const Zp=({key:t})=>t??null,No=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||Xe(t)||ve(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function q(t,e=null,n=null,r=0,s=null,i=t===Je?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zp(e),ref:e&&No(e),scopeId:Cp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return l?(zc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=nt(n)?8:16),Ii>0&&!o&&zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zt.push(c),c}const pe=r0;function r0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===bv)&&(t=pr),bi(t)){const l=vs(t,e,!0);return n&&zc(l,n),Ii>0&&!i&&zt&&(l.shapeFlag&6?zt[zt.indexOf(t)]=l:zt.push(l)),l.patchFlag=-2,l}if(p0(t)&&(t=t.__vccOpts),e){e=s0(e);let{class:l,style:c}=e;l&&!nt(l)&&(e.class=st(l)),ze(c)&&(Fc(c)&&!me(c)&&(c=Pt({},c)),e.style=jn(c))}const o=nt(t)?1:Yp(t)?128:fv(t)?64:ze(t)?4:ve(t)?2:0;return q(t,e,n,r,s,o,i,!0)}function s0(t){return t?Fc(t)||Up(t)?Pt({},t):t:null}function vs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?i0(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Zp(u),ref:e&&e.ref?n&&i?me(i)?i.concat(No(e)):[i,No(e)]:No(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vs(t.ssContent),ssFallback:t.ssFallback&&vs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&qc(d,c.clone(d)),d}function Ht(t=" ",e=0){return pe(Aa,null,t,e)}function em(t,e){const n=pe(Do,null,t);return n.staticCount=e,n}function Te(t="",e=!1){return e?(j(),je(pr,null,t)):pe(pr,null,t)}function hn(t){return t==null||typeof t=="boolean"?pe(pr):me(t)?pe(Je,null,t.slice()):bi(t)?nr(t):pe(Aa,null,String(t))}function nr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vs(t)}function zc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Up(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[Ht(e)]):n=8);t.children=e,t.shapeFlag|=n}function i0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=st([e.class,r.class]));else if(s==="style")e.style=jn([e.style,r.style]);else if(ga(s)){const i=e[s],o=r[s];o&&i!==o&&!(me(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function cn(t,e,n,r=null){_n(t,e,7,[n,r])}const o0=xp();let a0=0;function l0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||o0,i={uid:a0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bp(r,s),emitsOptions:Jp(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jv.bind(null,i),t.ce&&t.ce(i),i}let mt=null,Jo,Yl;{const t=Ea(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Jo=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),Yl=e("__VUE_SSR_SETTERS__",n=>Ai=n)}const $i=t=>{const e=mt;return Jo(t),t.scope.on(),()=>{t.scope.off(),Jo(e)}},Jh=()=>{mt&&mt.scope.off(),Jo(null)};function tm(t){return t.vnode.shapeFlag&4}let Ai=!1;function c0(t,e=!1,n=!1){e&&Yl(e);const{props:r,children:s}=t.vnode,i=tm(t);xv(t,r,i,e),$v(t,s,n);const o=i?u0(t,e):void 0;return e&&Yl(!1),o}function u0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Sv);const{setup:r}=n;if(r){Ir();const s=t.setupContext=r.length>1?d0(t):null,i=$i(t),o=Fi(r,t,0,[t.props,s]),l=Jf(o);if(br(),i(),(l||t.sp)&&!fs(t)&&Pp(t),l){if(o.then(Jh,Jh),e)return o.then(c=>{Yh(t,c)}).catch(c=>{Ta(c,t,0)});t.asyncDep=o}else Yh(t,o)}else nm(t)}function Yh(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=Ip(e)),nm(t)}function nm(t,e,n){const r=t.type;t.render||(t.render=r.render||dn);{const s=$i(t);Ir();try{Cv(t)}finally{br(),s()}}}const h0={get(t,e){return bt(t,"get",""),t[e]}};function d0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,h0),slots:t.slots,emit:t.emit,expose:e}}function Ra(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ip(Uc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ui)return ui[n](t)},has(e,n){return n in e||n in ui}})):t.proxy}function f0(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function p0(t){return ve(t)&&"__vccOpts"in t}const Ue=(t,e)=>ov(t,e,Ai);function rm(t,e,n){const r=arguments.length;return r===2?ze(e)&&!me(e)?bi(e)?pe(t,null,[e]):pe(t,e):pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&bi(n)&&(n=[n]),pe(t,e,n))}const m0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xl;const Xh=typeof window<"u"&&window.trustedTypes;if(Xh)try{Xl=Xh.createPolicy("vue",{createHTML:t=>t})}catch{}const sm=Xl?t=>Xl.createHTML(t):t=>t,g0="http://www.w3.org/2000/svg",_0="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,Zh=Rn&&Rn.createElement("template"),y0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Rn.createElementNS(g0,t):e==="mathml"?Rn.createElementNS(_0,t):n?Rn.createElement(t,{is:n}):Rn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zh.innerHTML=sm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Zh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},v0=Symbol("_vtc");function E0(t,e,n){const r=t[v0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ed=Symbol("_vod"),w0=Symbol("_vsh"),T0=Symbol(""),I0=/(^|;)\s*display\s*:/;function b0(t,e,n){const r=t.style,s=nt(n);let i=!1;if(n&&!s){if(e)if(nt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Oo(r,l,"")}else for(const o in e)n[o]==null&&Oo(r,o,"");for(const o in n)o==="display"&&(i=!0),Oo(r,o,n[o])}else if(s){if(e!==n){const o=r[T0];o&&(n+=";"+o),r.cssText=n,i=I0.test(n)}}else e&&t.removeAttribute("style");ed in t&&(t[ed]=i?r.display:"",t[w0]&&(r.display="none"))}const td=/\s*!important$/;function Oo(t,e,n){if(me(n))n.forEach(r=>Oo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=A0(t,e);td.test(n)?t.setProperty(Tr(r),n.replace(td,""),"important"):t[r]=n}}const nd=["Webkit","Moz","ms"],Il={};function A0(t,e){const n=Il[e];if(n)return n;let r=Zt(e);if(r!=="filter"&&r in t)return Il[e]=r;r=va(r);for(let s=0;s<nd.length;s++){const i=nd[s]+r;if(i in t)return Il[e]=i}return e}const rd="http://www.w3.org/1999/xlink";function sd(t,e,n,r,s,i=Ny(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rd,e.slice(6,e.length)):t.setAttributeNS(rd,e,n):n==null||i&&!ep(n)?t.removeAttribute(e):t.setAttribute(e,i?"":qn(n)?String(n):n)}function id(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?sm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ep(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function rs(t,e,n,r){t.addEventListener(e,n,r)}function R0(t,e,n,r){t.removeEventListener(e,n,r)}const od=Symbol("_vei");function S0(t,e,n,r,s=null){const i=t[od]||(t[od]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=C0(e);if(r){const u=i[e]=D0(r,s);rs(t,l,u,c)}else o&&(R0(t,l,o,c),i[e]=void 0)}}const ad=/(?:Once|Passive|Capture)$/;function C0(t){let e;if(ad.test(t)){e={};let r;for(;r=t.match(ad);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Tr(t.slice(2)),e]}let bl=0;const P0=Promise.resolve(),k0=()=>bl||(P0.then(()=>bl=0),bl=Date.now());function D0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;_n(N0(r,n.value),e,5,[r])};return n.value=t,n.attached=k0(),n}function N0(t,e){if(me(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ld=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,O0=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?E0(t,r,o):e==="style"?b0(t,n,r):ga(e)?Pc(e)||S0(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):V0(t,e,r,o))?(id(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!nt(r))?id(t,Zt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sd(t,e,r,o))};function V0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ld(e)&&ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ld(e)&&nt(n)?!1:e in t}const cd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return me(e)?n=>Po(e,n):e};function M0(t){t.target.composing=!0}function ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Al=Symbol("_assign"),Es={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Al]=cd(s);const i=r||s.props&&s.props.type==="number";rs(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ql(l)),t[Al](l)}),n&&rs(t,"change",()=>{t.value=t.value.trim()}),e||(rs(t,"compositionstart",M0),rs(t,"compositionend",ud),rs(t,"change",ud))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Al]=cd(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ql(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},x0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},L0=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Tr(s.key);if(e.some(o=>o===i||x0[o]===i))return t(s)})},F0=Pt({patchProp:O0},y0);let hd;function U0(){return hd||(hd=qv(F0))}const $0=(...t)=>{const e=U0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=q0(r);if(!s)return;const i=e._component;!ve(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,B0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function B0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function q0(t){return nt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let im;const Sa=t=>im=t,om=Symbol();function Zl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var di;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(di||(di={}));function j0(){const t=sp(!0),e=t.run(()=>re({}));let n=[],r=[];const s=Uc({install(i){Sa(s),s._a=i,i.provide(om,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const am=()=>{};function dd(t,e,n,r=am){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ip()&&Oy(s),s}function ts(t,...e){t.slice().forEach(n=>{n(...e)})}const H0=t=>t(),fd=Symbol(),Rl=Symbol();function ec(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Zl(s)&&Zl(r)&&t.hasOwnProperty(n)&&!Xe(r)&&!cr(r)?t[n]=ec(s,r):t[n]=r}return t}const z0=Symbol();function W0(t){return!Zl(t)||!t.hasOwnProperty(z0)}const{assign:er}=Object;function G0(t){return!!(Xe(t)&&t.effect)}function K0(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const d=nv(n.state.value[t]);return er(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Uc(Ue(()=>{Sa(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return c=lm(t,u,e,n,r,!0),c}function lm(t,e,n={},r,s,i){let o;const l=er({actions:{}},n),c={deep:!0};let u,d,p=[],m=[],_;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),re({});let A;function P(y){let v;u=d=!1,typeof y=="function"?(y(r.state.value[t]),v={type:di.patchFunction,storeId:t,events:_}):(ec(r.state.value[t],y),v={type:di.patchObject,payload:y,storeId:t,events:_});const I=A=Symbol();$c().then(()=>{A===I&&(u=!0)}),d=!0,ts(p,v,r.state.value[t])}const N=i?function(){const{state:v}=n,I=v?v():{};this.$patch(R=>{er(R,I)})}:am;function V(){o.stop(),p=[],m=[],r._s.delete(t)}const L=(y,v="")=>{if(fd in y)return y[Rl]=v,y;const I=function(){Sa(r);const R=Array.from(arguments),C=[],w=[];function rt(he){C.push(he)}function xt(he){w.push(he)}ts(m,{args:R,name:I[Rl],store:Z,after:rt,onError:xt});let $e;try{$e=y.apply(this&&this.$id===t?this:Z,R)}catch(he){throw ts(w,he),he}return $e instanceof Promise?$e.then(he=>(ts(C,he),he)).catch(he=>(ts(w,he),Promise.reject(he))):(ts(C,$e),$e)};return I[fd]=!0,I[Rl]=v,I},z={_p:r,$id:t,$onAction:dd.bind(null,m),$patch:P,$reset:N,$subscribe(y,v={}){const I=dd(p,y,v.detached,()=>R()),R=o.run(()=>fn(()=>r.state.value[t],C=>{(v.flush==="sync"?d:u)&&y({storeId:t,type:di.direct,events:_},C)},er({},c,v)));return I},$dispose:V},Z=Li(z);r._s.set(t,Z);const b=(r._a&&r._a.runWithContext||H0)(()=>r._e.run(()=>(o=sp()).run(()=>e({action:L}))));for(const y in b){const v=b[y];if(Xe(v)&&!G0(v)||cr(v))i||(S&&W0(v)&&(Xe(v)?v.value=S[y]:ec(v,S[y])),r.state.value[t][y]=v);else if(typeof v=="function"){const I=L(v,y);b[y]=I,l.actions[y]=v}}return er(Z,b),er(De(Z),b),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:y=>{P(v=>{er(v,y)})}}),r._p.forEach(y=>{er(Z,o.run(()=>y({store:Z,app:r._a,pinia:r,options:l})))}),S&&i&&n.hydrate&&n.hydrate(Z.$state,S),u=!0,d=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function Bi(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=Mv();return l=l||(u?rn(om,null):null),l&&Sa(l),l=im,l._s.has(r)||(i?lm(r,e,s,l):K0(r,s,l)),l._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ss=typeof document<"u";function cm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Q0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cm(t.default)}const Oe=Object.assign;function Sl(t,e){const n={};for(const r in e){const s=e[r];n[r]=on(s)?s.map(t):t(s)}return n}const fi=()=>{},on=Array.isArray,um=/#/g,J0=/&/g,Y0=/\//g,X0=/=/g,Z0=/\?/g,hm=/\+/g,eE=/%5B/g,tE=/%5D/g,dm=/%5E/g,nE=/%60/g,fm=/%7B/g,rE=/%7C/g,pm=/%7D/g,sE=/%20/g;function Wc(t){return encodeURI(""+t).replace(rE,"|").replace(eE,"[").replace(tE,"]")}function iE(t){return Wc(t).replace(fm,"{").replace(pm,"}").replace(dm,"^")}function tc(t){return Wc(t).replace(hm,"%2B").replace(sE,"+").replace(um,"%23").replace(J0,"%26").replace(nE,"`").replace(fm,"{").replace(pm,"}").replace(dm,"^")}function oE(t){return tc(t).replace(X0,"%3D")}function aE(t){return Wc(t).replace(um,"%23").replace(Z0,"%3F")}function lE(t){return t==null?"":aE(t).replace(Y0,"%2F")}function Ri(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const cE=/\/$/,uE=t=>t.replace(cE,"");function Cl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=pE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ri(o)}}function hE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ws(e.matched[r],n.matched[s])&&mm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fE(t[n],e[n]))return!1;return!0}function fE(t,e){return on(t)?md(t,e):on(e)?md(e,t):t===e}function md(t,e){return on(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function pE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Si;(function(t){t.pop="pop",t.push="push"})(Si||(Si={}));var pi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pi||(pi={}));function mE(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uE(t)}const gE=/^[^#]+#/;function _E(t,e){return t.replace(gE,"#")+e}function yE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ca=()=>({left:window.scrollX,top:window.scrollY});function vE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=yE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function gd(t,e){return(history.state?history.state.position-e:-1)+t}const nc=new Map;function EE(t,e){nc.set(t,e)}function wE(t){const e=nc.get(t);return nc.delete(t),e}let TE=()=>location.protocol+"//"+location.host;function gm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),pd(c,"")}return pd(n,t)+r+s}function IE(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=gm(t,location),S=n.value,A=e.value;let P=0;if(m){if(n.value=_,e.value=m,o&&o===S){o=null;return}P=A?m.position-A.position:0}else r(_);s.forEach(N=>{N(n.value,S,{delta:P,type:Si.pop,direction:P?P>0?pi.forward:pi.back:pi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const _=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:Ca()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function _d(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ca():null}}function bE(t){const{history:e,location:n}=window,r={value:gm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:TE()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,u){const d=Oe({},e.state,_d(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=Oe({},s.value,e.state,{forward:c,scroll:Ca()});i(d.current,d,!0);const p=Oe({},_d(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function AE(t){t=mE(t);const e=bE(t),n=IE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:_E.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function RE(t){return typeof t=="string"||t&&typeof t=="object"}function _m(t){return typeof t=="string"||typeof t=="symbol"}const ym=Symbol("");var yd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yd||(yd={}));function Ts(t,e){return Oe(new Error,{type:t,[ym]:!0},e)}function An(t,e){return t instanceof Error&&ym in t&&(e==null||!!(t.type&e))}const vd="[^/]+?",SE={sensitive:!1,strict:!1,start:!0,end:!0},CE=/[.+*?^${}()[\]/\\]/g;function PE(t,e){const n=Oe({},SE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(CE,"\\$&"),_+=40;else if(m.type===1){const{value:S,repeatable:A,optional:P,regexp:N}=m;i.push({name:S,repeatable:A,optional:P});const V=N||vd;if(V!==vd){_+=10;try{new RegExp(`(${V})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${V}): `+z.message)}}let L=A?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;p||(L=P&&u.length<2?`(?:/${L})`:"/"+L),P&&(L+="?"),s+=L,_+=20,P&&(_+=-8),A&&(_+=-20),V===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",S=i[m-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:S,repeatable:A,optional:P}=_,N=S in u?u[S]:"";if(on(N)&&!A)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const V=on(N)?N.join("/"):N;if(!V)if(P)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=V}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function kE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=kE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ed(r))return 1;if(Ed(s))return-1}return s.length-r.length}function Ed(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const DE={type:0,value:""},NE=/[a-zA-Z0-9_]/;function OE(t){if(!t)return[[]];if(t==="/")return[[DE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:NE.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function VE(t,e,n){const r=PE(OE(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ME(t,e){const n=[],r=new Map;e=bd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const S=!_,A=Td(p);A.aliasOf=_&&_.record;const P=bd(e,p),N=[A];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of z)N.push(Td(Oe({},A,{components:_?_.record.components:A.components,path:Z,aliasOf:_?_.record:A})))}let V,L;for(const z of N){const{path:Z}=z;if(m&&Z[0]!=="/"){const ae=m.record.path,b=ae[ae.length-1]==="/"?"":"/";z.path=m.record.path+(Z&&b+Z)}if(V=VE(z,m,P),_?_.alias.push(V):(L=L||V,L!==V&&L.alias.push(V),S&&p.name&&!Id(V)&&o(p.name)),Em(V)&&c(V),A.children){const ae=A.children;for(let b=0;b<ae.length;b++)i(ae[b],V,_&&_.children[b])}_=_||V}return L?()=>{o(L)}:fi}function o(p){if(_m(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=FE(p,n);n.splice(m,0,p),p.record.name&&!Id(p)&&r.set(p.record.name,p)}function u(p,m){let _,S={},A,P;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Ts(1,{location:p});P=_.record.name,S=Oe(wd(m.params,_.keys.filter(L=>!L.optional).concat(_.parent?_.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&wd(p.params,_.keys.map(L=>L.name))),A=_.stringify(S)}else if(p.path!=null)A=p.path,_=n.find(L=>L.re.test(A)),_&&(S=_.parse(A),P=_.record.name);else{if(_=m.name?r.get(m.name):n.find(L=>L.re.test(m.path)),!_)throw Ts(1,{location:p,currentLocation:m});P=_.record.name,S=Oe({},m.params,p.params),A=_.stringify(S)}const N=[];let V=_;for(;V;)N.unshift(V.record),V=V.parent;return{name:P,path:A,params:S,matched:N,meta:LE(N)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function wd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Td(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:xE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Id(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function LE(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function bd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function FE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;vm(t,e[i])<0?r=i:n=i+1}const s=UE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function UE(t){let e=t;for(;e=e.parent;)if(Em(e)&&vm(t,e)===0)return e}function Em({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function $E(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(hm," "),o=i.indexOf("="),l=Ri(o<0?i:i.slice(0,o)),c=o<0?null:Ri(i.slice(o+1));if(l in e){let u=e[l];on(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Ad(t){let e="";for(let n in t){const r=t[n];if(n=oE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(r)?r.map(i=>i&&tc(i)):[r&&tc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function BE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=on(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const qE=Symbol(""),Rd=Symbol(""),Pa=Symbol(""),wm=Symbol(""),rc=Symbol("");function ti(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function rr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Ts(4,{from:n,to:e})):m instanceof Error?c(m):RE(m)?c(Ts(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Pl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(cm(c)){const d=(c.__vccOpts||c)[e];d&&i.push(rr(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Q0(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&rr(_,n,r,o,l,s)()}))}}return i}function Sd(t){const e=rn(Pa),n=rn(wm),r=Ue(()=>{const c=hs(t.to);return e.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(ws.bind(null,d));if(m>-1)return m;const _=Cd(c[u-2]);return u>1&&Cd(d)===_&&p[p.length-1].path!==_?p.findIndex(ws.bind(null,c[u-2])):m}),i=Ue(()=>s.value>-1&&GE(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&mm(n.params,r.value.params));function l(c={}){if(WE(c)){const u=e[hs(t.replace)?"replace":"push"](hs(t.to)).catch(fi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function jE(t){return t.length===1?t[0]:t}const HE=Ne({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sd,setup(t,{slots:e}){const n=Li(Sd(t)),{options:r}=rn(Pa),s=Ue(()=>({[Pd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Pd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&jE(e.default(n));return t.custom?i:rm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zE=HE;function WE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!on(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Cd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pd=(t,e,n)=>t??e??n,KE=Ne({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=rn(rc),s=Ue(()=>t.route||r.value),i=rn(Rd,0),o=Ue(()=>{let u=hs(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Ue(()=>s.value.matched[o.value]);ko(Rd,Ue(()=>o.value+1)),ko(qE,l),ko(rc,s);const c=re();return fn(()=>[c.value,l.value,t.name],([u,d,p],[m,_,S])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!ws(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return kd(n.default,{Component:m,route:u});const _=p.props[d],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,P=rm(m,Oe({},S,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return kd(n.default,{Component:P,route:u})||P}}});function kd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const QE=KE;function JE(t){const e=ME(t.routes,t),n=t.parseQuery||$E,r=t.stringifyQuery||Ad,s=t.history,i=ti(),o=ti(),l=ti(),c=Zy(Xn);let u=Xn;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Sl.bind(null,M=>""+M),p=Sl.bind(null,lE),m=Sl.bind(null,Ri);function _(M,ee){let Y,se;return _m(M)?(Y=e.getRecordMatcher(M),se=ee):se=M,e.addRoute(se,Y)}function S(M){const ee=e.getRecordMatcher(M);ee&&e.removeRoute(ee)}function A(){return e.getRoutes().map(M=>M.record)}function P(M){return!!e.getRecordMatcher(M)}function N(M,ee){if(ee=Oe({},ee||c.value),typeof M=="string"){const k=Cl(n,M,ee.path),x=e.resolve({path:k.path},ee),B=s.createHref(k.fullPath);return Oe(k,x,{params:m(x.params),hash:Ri(k.hash),redirectedFrom:void 0,href:B})}let Y;if(M.path!=null)Y=Oe({},M,{path:Cl(n,M.path,ee.path).path});else{const k=Oe({},M.params);for(const x in k)k[x]==null&&delete k[x];Y=Oe({},M,{params:p(k)}),ee.params=p(ee.params)}const se=e.resolve(Y,ee),Pe=M.hash||"";se.params=d(m(se.params));const E=hE(r,Oe({},M,{hash:iE(Pe),path:se.path})),T=s.createHref(E);return Oe({fullPath:E,hash:Pe,query:r===Ad?BE(M.query):M.query||{}},se,{redirectedFrom:void 0,href:T})}function V(M){return typeof M=="string"?Cl(n,M,c.value.path):Oe({},M)}function L(M,ee){if(u!==M)return Ts(8,{from:ee,to:M})}function z(M){return b(M)}function Z(M){return z(Oe(V(M),{replace:!0}))}function ae(M){const ee=M.matched[M.matched.length-1];if(ee&&ee.redirect){const{redirect:Y}=ee;let se=typeof Y=="function"?Y(M):Y;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=V(se):{path:se},se.params={}),Oe({query:M.query,hash:M.hash,params:se.path!=null?{}:M.params},se)}}function b(M,ee){const Y=u=N(M),se=c.value,Pe=M.state,E=M.force,T=M.replace===!0,k=ae(Y);if(k)return b(Oe(V(k),{state:typeof k=="object"?Oe({},Pe,k.state):Pe,force:E,replace:T}),ee||Y);const x=Y;x.redirectedFrom=ee;let B;return!E&&dE(r,se,Y)&&(B=Ts(16,{to:x,from:se}),Qt(se,se,!0,!1)),(B?Promise.resolve(B):I(x,se)).catch(F=>An(F)?An(F,2)?F:en(F):Ie(F,x,se)).then(F=>{if(F){if(An(F,2))return b(Oe({replace:T},V(F.to),{state:typeof F.to=="object"?Oe({},Pe,F.to.state):Pe,force:E}),ee||x)}else F=C(x,se,!0,T,Pe);return R(x,se,F),F})}function y(M,ee){const Y=L(M,ee);return Y?Promise.reject(Y):Promise.resolve()}function v(M){const ee=Gn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(M):M()}function I(M,ee){let Y;const[se,Pe,E]=YE(M,ee);Y=Pl(se.reverse(),"beforeRouteLeave",M,ee);for(const k of se)k.leaveGuards.forEach(x=>{Y.push(rr(x,M,ee))});const T=y.bind(null,M,ee);return Y.push(T),Lt(Y).then(()=>{Y=[];for(const k of i.list())Y.push(rr(k,M,ee));return Y.push(T),Lt(Y)}).then(()=>{Y=Pl(Pe,"beforeRouteUpdate",M,ee);for(const k of Pe)k.updateGuards.forEach(x=>{Y.push(rr(x,M,ee))});return Y.push(T),Lt(Y)}).then(()=>{Y=[];for(const k of E)if(k.beforeEnter)if(on(k.beforeEnter))for(const x of k.beforeEnter)Y.push(rr(x,M,ee));else Y.push(rr(k.beforeEnter,M,ee));return Y.push(T),Lt(Y)}).then(()=>(M.matched.forEach(k=>k.enterCallbacks={}),Y=Pl(E,"beforeRouteEnter",M,ee,v),Y.push(T),Lt(Y))).then(()=>{Y=[];for(const k of o.list())Y.push(rr(k,M,ee));return Y.push(T),Lt(Y)}).catch(k=>An(k,8)?k:Promise.reject(k))}function R(M,ee,Y){l.list().forEach(se=>v(()=>se(M,ee,Y)))}function C(M,ee,Y,se,Pe){const E=L(M,ee);if(E)return E;const T=ee===Xn,k=ss?history.state:{};Y&&(se||T?s.replace(M.fullPath,Oe({scroll:T&&k&&k.scroll},Pe)):s.push(M.fullPath,Pe)),c.value=M,Qt(M,ee,Y,T),en()}let w;function rt(){w||(w=s.listen((M,ee,Y)=>{if(!ln.listening)return;const se=N(M),Pe=ae(se);if(Pe){b(Oe(Pe,{replace:!0,force:!0}),se).catch(fi);return}u=se;const E=c.value;ss&&EE(gd(E.fullPath,Y.delta),Ca()),I(se,E).catch(T=>An(T,12)?T:An(T,2)?(b(Oe(V(T.to),{force:!0}),se).then(k=>{An(k,20)&&!Y.delta&&Y.type===Si.pop&&s.go(-1,!1)}).catch(fi),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),Ie(T,se,E))).then(T=>{T=T||C(se,E,!1),T&&(Y.delta&&!An(T,8)?s.go(-Y.delta,!1):Y.type===Si.pop&&An(T,20)&&s.go(-1,!1)),R(se,E,T)}).catch(fi)}))}let xt=ti(),$e=ti(),he;function Ie(M,ee,Y){en(M);const se=$e.list();return se.length?se.forEach(Pe=>Pe(M,ee,Y)):console.error(M),Promise.reject(M)}function Bt(){return he&&c.value!==Xn?Promise.resolve():new Promise((M,ee)=>{xt.add([M,ee])})}function en(M){return he||(he=!M,rt(),xt.list().forEach(([ee,Y])=>M?Y(M):ee()),xt.reset()),M}function Qt(M,ee,Y,se){const{scrollBehavior:Pe}=t;if(!ss||!Pe)return Promise.resolve();const E=!Y&&wE(gd(M.fullPath,0))||(se||!Y)&&history.state&&history.state.scroll||null;return $c().then(()=>Pe(M,ee,E)).then(T=>T&&vE(T)).catch(T=>Ie(T,M,ee))}const We=M=>s.go(M);let Ge;const Gn=new Set,ln={currentRoute:c,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:A,resolve:N,options:t,push:z,replace:Z,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:$e.add,isReady:Bt,install(M){const ee=this;M.component("RouterLink",zE),M.component("RouterView",QE),M.config.globalProperties.$router=ee,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>hs(c)}),ss&&!Ge&&c.value===Xn&&(Ge=!0,z(s.location).catch(Pe=>{}));const Y={};for(const Pe in Xn)Object.defineProperty(Y,Pe,{get:()=>c.value[Pe],enumerable:!0});M.provide(Pa,ee),M.provide(wm,Ep(Y)),M.provide(rc,c);const se=M.unmount;Gn.add(M),M.unmount=function(){Gn.delete(M),Gn.size<1&&(u=Xn,w&&w(),w=null,c.value=Xn,Ge=!1,he=!1),se()}}};function Lt(M){return M.reduce((ee,Y)=>ee.then(()=>v(Y)),Promise.resolve())}return ln}function YE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>ws(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>ws(u,c))||s.push(c))}return[n,r,s]}function Ns(){return rn(Pa)}const XE=Ne({props:{color:{type:String,default:"white"},text:{type:String,default:""}},setup(t){return{iconHomeStyle:Ue(()=>({"--icon-color":t.color}))}}}),xe=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ZE={key:0,class:"text"};function ew(t,e,n,r,s,i){return j(),Q("div",{class:"icon-home",style:jn(t.iconHomeStyle)},[e[0]||(e[0]=q("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[q("path",{d:"M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"})],-1)),t.$props.text&&t.$props.text.length>0?(j(),Q("div",ZE,we(t.$props.text),1)):Te("",!0)],4)}const tw=xe(XE,[["render",ew],["__scopeId","data-v-c1df092f"]]),nw=Ne({props:{color:{type:String,default:"white"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconLightSwitchStyle:Ue(()=>({"--icon-color":t.color,fontSize:t.fontSize}))}}}),rw={fill:"#000000",viewBox:"0 0 64 64","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},xmlns:"http://www.w3.org/2000/svg"},sw={key:0,class:"text"};function iw(t,e,n,r,s,i){return j(),Q("div",{class:"icon-light-switch",style:jn(t.iconLightSwitchStyle)},[(j(),Q("svg",rw,e[0]||(e[0]=[em('<g stroke-width="0" data-v-be2209a6></g><g stroke-linecap="round" stroke-linejoin="round" data-v-be2209a6></g><g data-v-be2209a6><rect x="0" y="-320" width="1280" height="800" style="fill:none;" data-v-be2209a6></rect><g transform="matrix(1.3258707,0,0,1.3751367,-10.338119,-12.63741)" data-v-be2209a6><path d="m 25.022,17.099 c 2.715,-0.012 12.015,0.058 13.952,0 22.08,-0.662 22.961,30.643 0,30.023 -3.488,0.015 -12.792,-0.064 -13.952,0 C 14.663,47.694 7.982,40.3 8.025,31.85 8.067,23.399 15.555,16.13 25.022,17.099 Z M 32.904,32.11 C 33.047,26.747 28.24,22.014 22.889,22.095 c -7.31,0.111 -10.482,6.7 -10.016,10.947 0.625,5.691 5.193,9.06 10.016,9.084 5.536,0.026 9.862,-4.308 10.015,-10.016 z" style="fill-rule:nonzero;" data-v-be2209a6></path></g></g>',3)]))),t.$props.text&&t.$props.text.length>0?(j(),Q("div",sw,we(t.$props.text),1)):Te("",!0)],4)}const Tm=xe(nw,[["render",iw],["__scopeId","data-v-be2209a6"]]),ow=Ne({props:{color:{type:String,default:"white"},strokeColor:{type:String,default:"black"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconScheduleStyle:Ue(()=>({"--icon-color":t.color,"--icon-stroke-color":t.strokeColor,fontSize:t.fontSize}))}}}),aw={key:0,class:"text"};function lw(t,e,n,r,s,i){return j(),Q("div",{class:"icon-schedule",style:jn(t.iconScheduleStyle)},[e[0]||(e[0]=em('<svg viewBox="0 0 24 24" stroke-width="3" stroke="#000000" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-604fa35c><path d="M 14.020182,21.685362 H 1.8335071 A 1.095136,1.0848345 0 0 1 0.74275167,20.622224 V 3.3169452 A 1.0907555,1.0804951 0 0 1 1.8335071,2.2364501 H 19.285596 a 1.0907555,1.0804951 0 0 1 1.090755,1.0804951 v 9.7201178" style="stroke-width:1.30797;" data-v-604fa35c></path><line x1="0.74275166" y1="7.0097213" x2="20.376347" y2="7.0097213" style="stroke-width:1.30797;" data-v-604fa35c></line><line x1="5.1714816" y1="2.2364504" x2="5.1714816" y2="0.066781186" style="stroke-width:1.30797;" data-v-604fa35c></line><line x1="15.667263" y1="2.2364504" x2="15.667263" y2="0.066781186" style="stroke-width:1.30797;" data-v-604fa35c></line><ellipse cx="17.769928" cy="17.775614" rx="5.4450164" ry="5.3937974" style="stroke-width:1.30797;" data-v-604fa35c></ellipse><polyline points="45.22 36.7 45.22 45.82 49.57 49.16" transform="matrix(0.43805442,0,0,0.43393378,-2.0388941,-1.9423323)" data-v-604fa35c></polyline></svg>',1)),t.$props.text&&t.$props.text.length>0?(j(),Q("div",aw,we(t.$props.text),1)):Te("",!0)],4)}const Im=xe(ow,[["render",lw],["__scopeId","data-v-604fa35c"]]),cw=Ne({name:"task-bar",components:{IconSchedule:Im,IconLightSwitch:Tm,IconHome:tw},setup(){const t=Ns();Ar(()=>{e("relays")});function e(n){t.push({name:n})}return{}}}),uw={class:"task-bar"};function hw(t,e,n,r,s,i){const o=_e("icon-home"),l=_e("router-link"),c=_e("icon-light-switch"),u=_e("icon-schedule");return j(),Q("div",uw,[pe(l,{to:"/home",class:"task"},{default:Vn(()=>[pe(o,{text:"Home"})]),_:1}),pe(l,{to:"/relays",class:"task"},{default:Vn(()=>[pe(c,{text:"Relays"})]),_:1}),pe(l,{to:"/schedules",class:"task"},{default:Vn(()=>[pe(u,{text:"Schedules"})]),_:1})])}const dw=xe(cw,[["render",hw],["__scopeId","data-v-a291f81d"]]),fw=Ne({props:{spinnerSize:{type:String,default:"30px"},withText:{type:Boolean,default:!1}},setup(){return{}}}),pw={class:"spinner"},mw={key:0,class:"text"};function gw(t,e,n,r,s,i){return j(),Q("div",pw,[q("div",{class:"spinner-inner",style:jn({"--spinnerSize":t.spinnerSize})},null,4),t.withText?(j(),Q("div",mw,"Laden...")):Te("",!0)])}const ka=xe(fw,[["render",gw],["__scopeId","data-v-8cb8f775"]]),_w=Ne({components:{Spinner:ka},props:{text:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},emits:["onButtonClicked"],setup(t,e){function n(){e.emit("onButtonClicked")}return{onClicked:n}}}),yw={key:1,class:"button-content"};function vw(t,e,n,r,s,i){const o=_e("spinner");return j(),Q("div",{class:st(["button-default",{"is-loading":t.isLoading}]),tabindex:"0",onClick:e[0]||(e[0]=(...l)=>t.onClicked&&t.onClicked(...l)),onKeydown:e[1]||(e[1]=L0((...l)=>t.onClicked&&t.onClicked(...l),["enter"]))},[t.isLoading?(j(),je(o,{key:0,spinnerSize:"20px"})):(j(),Q("div",yw,[Rv(t.$slots,"icon",{},void 0),Ht(" "+we(t.text),1)]))],34)}const zn=xe(_w,[["render",vw],["__scopeId","data-v-77c23fe7"]]),bm=Bi("user",()=>{const t=re(null);return{user:t,setUser:n=>{t.value=n}}});var Dd={};/**
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
 */const Am=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ew=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Rm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Am(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ew(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new ww;const m=i<<2|l>>4;if(r.push(m),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ww extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tw=function(t){const e=Am(t);return Rm.encodeByteArray(e,!0)},Yo=function(t){return Tw(t).replace(/\./g,"")},Sm=function(t){try{return Rm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bw=()=>Iw().__FIREBASE_DEFAULTS__,Aw=()=>{if(typeof process>"u"||typeof Dd>"u")return;const t=Dd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sm(t[1]);return e&&JSON.parse(e)},Da=()=>{try{return bw()||Aw()||Rw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cm=t=>{var e,n;return(n=(e=Da())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sw=t=>{const e=Cm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pm=()=>{var t;return(t=Da())===null||t===void 0?void 0:t.config},km=t=>{var e;return(e=Da())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Cw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Pw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yo(JSON.stringify(n)),Yo(JSON.stringify(o)),""].join(".")}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function Dw(){var t;const e=(t=Da())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ow(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mw(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xw(){return!Dw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lw(){try{return typeof indexedDB=="object"}catch{return!1}}function Fw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Uw="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Uw,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qi.prototype.create)}}class qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$w(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Wn(s,l,r)}}function $w(t,e){return t.replace(Bw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Bw=/\{\$([^}]+)}/g;function qw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Nd(i)&&Nd(o)){if(!Xo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nd(t){return t!==null&&typeof t=="object"}/**
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
 */function ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jw(t,e){const n=new Hw(t,e);return n.subscribe.bind(n)}class Hw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=kl),s.error===void 0&&(s.error=kl),s.complete===void 0&&(s.complete=kl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kl(){}/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xr="[DEFAULT]";/**
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
 */class Ww{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kw(e))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xr){return this.instances.has(e)}getOptions(e=xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xr){return this.component?this.component.multipleInstances?e:xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gw(t){return t===xr?void 0:t}function Kw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Qw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ww(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const Jw={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},Yw=be.INFO,Xw={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},Zw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Xw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gc{constructor(e){this.name=e,this._logLevel=Yw,this._logHandler=Zw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const eT=(t,e)=>e.some(n=>t instanceof n);let Od,Vd;function tT(){return Od||(Od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nT(){return Vd||(Vd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dm=new WeakMap,sc=new WeakMap,Nm=new WeakMap,Dl=new WeakMap,Kc=new WeakMap;function rT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dm.set(n,t)}).catch(()=>{}),Kc.set(e,t),e}function sT(t){if(sc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});sc.set(t,e)}let ic={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iT(t){ic=t(ic)}function oT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nl(this),e,...n);return Nm.set(r,e.sort?e.sort():[e]),ur(r)}:nT().includes(t)?function(...e){return t.apply(Nl(this),e),ur(Dm.get(this))}:function(...e){return ur(t.apply(Nl(this),e))}}function aT(t){return typeof t=="function"?oT(t):(t instanceof IDBTransaction&&sT(t),eT(t,tT())?new Proxy(t,ic):t)}function ur(t){if(t instanceof IDBRequest)return rT(t);if(Dl.has(t))return Dl.get(t);const e=aT(t);return e!==t&&(Dl.set(t,e),Kc.set(e,t)),e}const Nl=t=>Kc.get(t);function lT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ur(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ur(o.result),c.oldVersion,c.newVersion,ur(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const cT=["get","getKey","getAll","getAllKeys","count"],uT=["put","add","delete","clear"],Ol=new Map;function Md(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ol.get(e))return Ol.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=uT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Ol.set(e,i),i}iT(t=>({...t,get:(e,n,r)=>Md(e,n)||t.get(e,n,r),has:(e,n)=>!!Md(e,n)||t.has(e,n)}));/**
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
 */class hT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oc="@firebase/app",xd="0.10.17";/**
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
 */const Ln=new Gc("@firebase/app"),fT="@firebase/app-compat",pT="@firebase/analytics-compat",mT="@firebase/analytics",gT="@firebase/app-check-compat",_T="@firebase/app-check",yT="@firebase/auth",vT="@firebase/auth-compat",ET="@firebase/database",wT="@firebase/data-connect",TT="@firebase/database-compat",IT="@firebase/functions",bT="@firebase/functions-compat",AT="@firebase/installations",RT="@firebase/installations-compat",ST="@firebase/messaging",CT="@firebase/messaging-compat",PT="@firebase/performance",kT="@firebase/performance-compat",DT="@firebase/remote-config",NT="@firebase/remote-config-compat",OT="@firebase/storage",VT="@firebase/storage-compat",MT="@firebase/firestore",xT="@firebase/vertexai",LT="@firebase/firestore-compat",FT="firebase",UT="11.1.0";/**
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
 */const ac="[DEFAULT]",$T={[oc]:"fire-core",[fT]:"fire-core-compat",[mT]:"fire-analytics",[pT]:"fire-analytics-compat",[_T]:"fire-app-check",[gT]:"fire-app-check-compat",[yT]:"fire-auth",[vT]:"fire-auth-compat",[ET]:"fire-rtdb",[wT]:"fire-data-connect",[TT]:"fire-rtdb-compat",[IT]:"fire-fn",[bT]:"fire-fn-compat",[AT]:"fire-iid",[RT]:"fire-iid-compat",[ST]:"fire-fcm",[CT]:"fire-fcm-compat",[PT]:"fire-perf",[kT]:"fire-perf-compat",[DT]:"fire-rc",[NT]:"fire-rc-compat",[OT]:"fire-gcs",[VT]:"fire-gcs-compat",[MT]:"fire-fst",[LT]:"fire-fst-compat",[xT]:"fire-vertex","fire-js":"fire-js",[FT]:"fire-js-all"};/**
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
 */const Zo=new Map,BT=new Map,lc=new Map;function Ld(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Is(t){const e=t.name;if(lc.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;lc.set(e,t);for(const n of Zo.values())Ld(n,t);for(const n of BT.values())Ld(n,t);return!0}function Qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kn(t){return t.settings!==void 0}/**
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
 */const qT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new qi("app","Firebase",qT);/**
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
 */class jT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Os=UT;function Om(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ac,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw hr.create("bad-app-name",{appName:String(s)});if(n||(n=Pm()),!n)throw hr.create("no-options");const i=Zo.get(s);if(i){if(Xo(n,i.options)&&Xo(r,i.config))return i;throw hr.create("duplicate-app",{appName:s})}const o=new Qw(s);for(const c of lc.values())o.addComponent(c);const l=new jT(n,r,o);return Zo.set(s,l),l}function Vm(t=ac){const e=Zo.get(t);if(!e&&t===ac&&Pm())return Om();if(!e)throw hr.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let s=(r=$T[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}Is(new Hr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const HT="firebase-heartbeat-database",zT=1,Ci="firebase-heartbeat-store";let Vl=null;function Mm(){return Vl||(Vl=lT(HT,zT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),Vl}async function WT(t){try{const n=(await Mm()).transaction(Ci),r=await n.objectStore(Ci).get(xm(t));return await n.done,r}catch(e){if(e instanceof Wn)Ln.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function Fd(t,e){try{const r=(await Mm()).transaction(Ci,"readwrite");await r.objectStore(Ci).put(e,xm(t)),await r.done}catch(n){if(n instanceof Wn)Ln.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function xm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const GT=1024,KT=30*24*60*60*1e3;class QT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ud();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=KT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ud(),{heartbeatsToSend:r,unsentEntries:s}=JT(this._heartbeatsCache.heartbeats),i=Yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Ln.warn(n),""}}}function Ud(){return new Date().toISOString().substring(0,10)}function JT(t,e=GT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$d(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$d(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lw()?Fw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $d(t){return Yo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XT(t){Is(new Hr("platform-logger",e=>new hT(e),"PRIVATE")),Is(new Hr("heartbeat",e=>new QT(e),"PRIVATE")),dr(oc,xd,t),dr(oc,xd,"esm2017"),dr("fire-js","")}XT("");function Jc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Lm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZT=Lm,Fm=new qi("auth","Firebase",Lm());/**
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
 */const ea=new Gc("@firebase/auth");function eI(t,...e){ea.logLevel<=be.WARN&&ea.warn(`Auth (${Os}): ${t}`,...e)}function Vo(t,...e){ea.logLevel<=be.ERROR&&ea.error(`Auth (${Os}): ${t}`,...e)}/**
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
 */function vn(t,...e){throw Xc(t,...e)}function sn(t,...e){return Xc(t,...e)}function Yc(t,e,n){const r=Object.assign(Object.assign({},ZT()),{[e]:n});return new qi("auth","Firebase",r).create(e,{appName:t.name})}function Br(t){return Yc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(t,"argument-error"),Yc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fm.create(t,...e)}function fe(t,e,...n){if(!t)throw Xc(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vo(e),new Error(e)}function Fn(t,e){t||Dn(e)}/**
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
 */function cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nI(){return Bd()==="http:"||Bd()==="https:"}function Bd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nI()||Ow()||"connection"in navigator)?navigator.onLine:!0}function sI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=kw()||Vw()}get(){return rI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zc(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Um{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oI=new Hi(3e4,6e4);function eu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vs(t,e,n,r,s={}){return $m(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ji(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Nw()||(u.referrerPolicy="no-referrer"),Um.fetch()(Bm(t,t.config.apiHost,n,l),u)})}async function $m(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iI),e);try{const s=new lI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Io(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Io(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yc(t,d,u);vn(t,d)}}catch(s){if(s instanceof Wn)throw s;vn(t,"network-request-failed",{message:String(s)})}}async function aI(t,e,n,r,s={}){const i=await Vs(t,e,n,r,s);return"mfaPendingCredential"in i&&vn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Bm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Zc(t.config,s):`${t.config.apiScheme}://${s}`}class lI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),oI.get())})}}function Io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function cI(t,e){return Vs(t,"POST","/v1/accounts:delete",e)}async function qm(t,e){return Vs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uI(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=tu(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:mi(Ml(s.auth_time)),issuedAtTime:mi(Ml(s.iat)),expirationTime:mi(Ml(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ml(t){return Number(t)*1e3}function tu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Sm(n);return s?JSON.parse(s):(Vo("Failed to decode base64 JWT payload"),null)}catch(s){return Vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qd(t){const e=tu(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&hI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class uc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mi(this.lastLoginAt),this.creationTime=mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ta(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Pi(t,qm(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jm(i.providerUserInfo):[],l=pI(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new uc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function fI(t){const e=ct(t);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jm(t){return t.map(e=>{var{providerId:n}=e,r=Jc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mI(t,e){const n=await $m(t,{},async()=>{const r=ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Bm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Um.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gI(t,e){return Vs(t,"POST","/v2/accounts:revokeToken",eu(t,e))}/**
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
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=qd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await mI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ps;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function Zn(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Jc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new uc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uI(this,e)}reload(){return fI(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(Br(this.auth));const e=await this.getIdToken();return await Pi(this,cI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:z,isAnonymous:Z,providerData:ae,stsTokenManager:b}=n;fe(L&&b,e,"internal-error");const y=ps.fromJSON(this.name,b);fe(typeof L=="string",e,"internal-error"),Zn(p,e.name),Zn(m,e.name),fe(typeof z=="boolean",e,"internal-error"),fe(typeof Z=="boolean",e,"internal-error"),Zn(_,e.name),Zn(S,e.name),Zn(A,e.name),Zn(P,e.name),Zn(N,e.name),Zn(V,e.name);const v=new Nn({uid:L,auth:e,email:m,emailVerified:z,displayName:p,isAnonymous:Z,photoURL:S,phoneNumber:_,tenantId:A,stsTokenManager:y,createdAt:N,lastLoginAt:V});return ae&&Array.isArray(ae)&&(v.providerData=ae.map(I=>Object.assign({},I))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new ps;s.updateFromServerResponse(n);const i=new Nn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ta(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ps;l.updateFromIdToken(r);const c=new Nn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new uc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const jd=new Map;function On(t){Fn(t instanceof Function,"Expected a class definition");let e=jd.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jd.set(t,e),e)}/**
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
 */class Hm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hm.type="NONE";const Hd=Hm;/**
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
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ms(On(Hd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||On(Hd);const o=Mo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Nn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ms(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ms(i,e,r))}}/**
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
 */function zd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Km(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jm(e))return"Blackberry";if(Ym(e))return"Webos";if(Wm(e))return"Safari";if((e.includes("chrome/")||Gm(e))&&!e.includes("edge/"))return"Chrome";if(Qm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zm(t=kt()){return/firefox\//i.test(t)}function Wm(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gm(t=kt()){return/crios\//i.test(t)}function Km(t=kt()){return/iemobile/i.test(t)}function Qm(t=kt()){return/android/i.test(t)}function Jm(t=kt()){return/blackberry/i.test(t)}function Ym(t=kt()){return/webos/i.test(t)}function nu(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _I(t=kt()){var e;return nu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yI(){return Mw()&&document.documentMode===10}function Xm(t=kt()){return nu(t)||Qm(t)||Ym(t)||Jm(t)||/windows phone/i.test(t)||Km(t)}/**
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
 */function Zm(t,e=[]){let n;switch(t){case"Browser":n=zd(kt());break;case"Worker":n=`${zd(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
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
 */class vI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function EI(t,e={}){return Vs(t,"GET","/v2/passwordPolicy",eu(t,e))}/**
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
 */const wI=6;class TI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class II{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wd(this),this.idTokenSubscription=new Wd(this),this.beforeStateQueue=new vI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qm(this,{idToken:e}),r=await Nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(kn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(Br(this));const n=e?ct(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(Br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(Br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EI(this),n=new TI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Na(t){return ct(t)}class Wd{constructor(e){this.auth=e,this.observer=null,this.addObserver=jw(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ru={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bI(t){ru=t}function AI(t){return ru.loadJS(t)}function RI(){return ru.gapiScript}function SI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function CI(t,e){const n=Qc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xo(i,e??{}))return s;vn(s,"already-initialized")}return n.initialize({options:e})}function PI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kI(t,e,n){const r=Na(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=eg(e),{host:o,port:l}=DI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),NI()}function eg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DI(t){const e=eg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gd(o)}}}function Gd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class tg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
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
 */async function gs(t,e){return aI(t,"POST","/v1/accounts:signInWithIdp",eu(t,e))}/**
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
 */const OI="http://localhost";class zr extends tg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Jc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new zr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:OI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ji(n)}return e}}/**
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
 */class su{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zi extends su{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends zi{constructor(){super("facebook.com")}static credential(e){return zr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class Pn extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
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
 */class ir extends zi{constructor(){super("github.com")}static credential(e){return zr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class or extends zi{constructor(){super("twitter.com")}static credential(e,n){return zr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
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
 */class bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Nn._fromIdTokenResponse(e,r,s),o=Kd(r);return new bs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Kd(r);return new bs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Kd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class na extends Wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new na(e,n,r,s)}}function ng(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(t,i,e,r):i})}async function VI(t,e,n=!1){const r=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bs._forOperation(t,"link",r)}/**
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
 */async function MI(t,e,n=!1){const{auth:r}=t;if(kn(r.app))return Promise.reject(Br(r));const s="reauthenticate";try{const i=await Pi(t,ng(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=tu(i.idToken);fe(o,r,"internal-error");const{sub:l}=o;return fe(t.uid===l,r,"user-mismatch"),bs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),i}}/**
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
 */async function xI(t,e,n=!1){if(kn(t.app))return Promise.reject(Br(t));const r="signIn",s=await ng(t,r,e),i=await bs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function LI(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function FI(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}const ra="__sak";/**
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
 */class rg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const UI=1e3,$I=10;class sg extends rg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$I):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sg.type="LOCAL";const BI=sg;/**
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
 */class ig extends rg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ig.type="SESSION";const og=ig;/**
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
 */function qI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Oa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await qI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oa.receivers=[];/**
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
 */function iu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class jI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=iu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function HI(t){pn().location.href=t}/**
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
 */function ag(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function zI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GI(){return ag()?self:null}/**
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
 */const lg="firebaseLocalStorageDb",KI=1,sa="firebaseLocalStorage",cg="fbase_key";class Wi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Va(t,e){return t.transaction([sa],e?"readwrite":"readonly").objectStore(sa)}function QI(){const t=indexedDB.deleteDatabase(lg);return new Wi(t).toPromise()}function hc(){const t=indexedDB.open(lg,KI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sa,{keyPath:cg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sa)?e(r):(r.close(),await QI(),e(await hc()))})})}async function Qd(t,e,n){const r=Va(t,!0).put({[cg]:e,value:n});return new Wi(r).toPromise()}async function JI(t,e){const n=Va(t,!1).get(e),r=await new Wi(n).toPromise();return r===void 0?null:r.value}function Jd(t,e){const n=Va(t,!0).delete(e);return new Wi(n).toPromise()}const YI=800,XI=3;class ug{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ag()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oa._getInstance(GI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zI(),!this.activeServiceWorker)return;this.sender=new jI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hc();return await Qd(e,ra,"1"),await Jd(e,ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Va(s,!1).getAll();return new Wi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ug.type="LOCAL";const ZI=ug;new Hi(3e4,6e4);/**
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
 */function hg(t,e){return e?On(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ou extends tg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function e1(t){return xI(t.auth,new ou(t),t.bypassAuthState)}function t1(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),MI(n,new ou(t),t.bypassAuthState)}async function n1(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),VI(n,new ou(t),t.bypassAuthState)}/**
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
 */class dg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e1;case"linkViaPopup":case"linkViaRedirect":return n1;case"reauthViaPopup":case"reauthViaRedirect":return t1;default:vn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const r1=new Hi(2e3,1e4);async function s1(t,e,n){if(kn(t.app))return Promise.reject(sn(t,"operation-not-supported-in-this-environment"));const r=Na(t);tI(t,e,su);const s=hg(r,n);return new Lr(r,"signInViaPopup",e,s).executeNotNull()}class Lr extends dg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=iu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r1.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const i1="pendingRedirect",xo=new Map;class o1 extends dg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const r=await a1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a1(t,e){const n=u1(e),r=c1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function l1(t,e){xo.set(t._key(),e)}function c1(t){return On(t._redirectPersistence)}function u1(t){return Mo(i1,t.config.apiKey,t.name)}async function h1(t,e,n=!1){if(kn(t.app))return Promise.reject(Br(t));const r=Na(t),s=hg(r,e),o=await new o1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const d1=10*60*1e3;class f1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yd(e))}saveEventToCache(e){this.cachedEventUids.add(Yd(e)),this.lastProcessedEventTime=Date.now()}}function Yd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function p1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fg(t);default:return!1}}/**
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
 */async function m1(t,e={}){return Vs(t,"GET","/v1/projects",e)}/**
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
 */const g1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_1=/^https?/;async function y1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await m1(t);for(const n of e)try{if(v1(n))return}catch{}vn(t,"unauthorized-domain")}function v1(t){const e=cc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_1.test(n))return!1;if(g1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const E1=new Hi(3e4,6e4);function Xd(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function w1(t){return new Promise((e,n)=>{var r,s,i;function o(){Xd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xd(),n(sn(t,"network-request-failed"))},timeout:E1.get()})}if(!((s=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const l=SI("iframefcb");return pn()[l]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},AI(`${RI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function T1(t){return Lo=Lo||w1(t),Lo}/**
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
 */const I1=new Hi(5e3,15e3),b1="__/auth/iframe",A1="emulator/auth/iframe",R1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C1(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zc(e,A1):`https://${t.config.authDomain}/${b1}`,r={apiKey:e.apiKey,appName:t.name,v:Os},s=S1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ji(r).slice(1)}`}async function P1(t){const e=await T1(t),n=pn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:C1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=pn().setTimeout(()=>{i(o)},I1.get());function c(){pn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const k1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D1=500,N1=600,O1="_blank",V1="http://localhost";class Zd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M1(t,e,n,r=D1,s=N1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},k1),{width:r.toString(),height:s.toString(),top:i,left:o}),u=kt().toLowerCase();n&&(l=Gm(u)?O1:n),zm(u)&&(e=e||V1,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(_I(u)&&l!=="_self")return x1(e||"",l),new Zd(null);const p=window.open(e||"",l,d);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new Zd(p)}function x1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const L1="__/auth/handler",F1="emulator/auth/handler",U1=encodeURIComponent("fac");async function ef(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:s};if(e instanceof su){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof zi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${U1}=${encodeURIComponent(c)}`:"";return`${$1(t)}?${ji(l).slice(1)}${u}`}function $1({config:t}){return t.emulator?Zc(t,F1):`https://${t.authDomain}/${L1}`}/**
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
 */const xl="webStorageSupport";class B1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=og,this._completeRedirectFn=h1,this._overrideRedirectResult=l1}async _openPopup(e,n,r,s){var i;Fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ef(e,n,r,cc(),s);return M1(e,o,iu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ef(e,n,r,cc(),s);return HI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P1(e),r=new f1(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xl,{type:xl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[xl];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xm()||Wm()||nu()}}const q1=B1;var tf="@firebase/auth",nf="1.8.1";/**
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
 */class j1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function H1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function z1(t){Is(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zm(t)},u=new II(r,s,i,c);return PI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Is(new Hr("auth-internal",e=>{const n=Na(e.getProvider("auth").getImmediate());return(r=>new j1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(tf,nf,H1(t)),dr(tf,nf,"esm2017")}/**
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
 */const W1=5*60,G1=km("authIdTokenMaxAge")||W1;let rf=null;const K1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>G1)return;const s=n==null?void 0:n.token;rf!==s&&(rf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ut(t=Vm()){const e=Qc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CI(t,{popupRedirectResolver:q1,persistence:[ZI,BI,og]}),r=km("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=K1(i.toString());FI(n,o,()=>o(n.currentUser)),LI(n,l=>o(l))}}const s=Cm("auth");return s&&kI(n,`http://${s}`),n}function Q1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Q1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});z1("Browser");var J1="firebase",Y1="11.1.0";/**
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
 */dr(J1,Y1,"app");const X1={apiKey:"AIzaSyALY2Eu62yzZPuaySeDBI3ONz3DYCq2388",authDomain:"relay-hub.firebaseapp.com",projectId:"relay-hub",storageBucket:"relay-hub.appspot.com",messagingSenderId:"1088994606939",appId:"1:1088994606939:web:17dc0c1330726f959ca47e"},Ze=Om(X1),Z1=ut(Ze),eb=async()=>{const t=new Pn;try{return(await s1(Z1,t)).user}catch(e){throw console.error("Error during sign-in:",e),e}},tb=Ne({components:{ButtonDefault:zn},emits:["onButtonClicked"],props:{},setup(){const t=bm(),e=re(!1);async function n(){e.value=!0;try{const r=await eb();t.setUser({uid:r.uid,displayName:r.displayName,email:r.email,photoURL:r.photoURL})}catch(r){t.setUser(null),console.error("Failed to sign in:",r)}}return{isLoading:e,onButtonClicked:n}}}),nb={class:"button-google"};function rb(t,e,n,r,s,i){const o=_e("ButtonDefault");return j(),Q("div",nb,[pe(o,{text:"Sign in with Google",isLoading:t.isLoading,onOnButtonClicked:t.onButtonClicked},{icon:Vn(()=>e[0]||(e[0]=[q("div",{class:"google-icon"},null,-1)])),_:1},8,["isLoading","onOnButtonClicked"])])}const sb=xe(tb,[["render",rb],["__scopeId","data-v-33e465cd"]]),ib=Ne({name:"sign-in",components:{ButtonGoogle:sb},setup(){return{}}}),ob={class:"sign-in"};function ab(t,e,n,r,s,i){const o=_e("button-google");return j(),Q("div",ob,[e[0]||(e[0]=q("div",{class:"relay-hub"},"RelayHub",-1)),pe(o)])}const lb=xe(ib,[["render",ab],["__scopeId","data-v-9540f920"]]),cb=Ne({name:"ToggleButton",props:{modelValue:{type:Boolean,required:!0},isBlocked:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=re(t.modelValue),r=re(!1);return fn(()=>t.modelValue,i=>{n.value=i}),{isActive:n,toggleSwitch:()=>{t.isBlocked||r.value||(n.value=!n.value,r.value=!0,setTimeout(()=>r.value=!1,500),e("update:modelValue",n.value))}}}});function ub(t,e,n,r,s,i){return j(),Q("div",{class:st(["toggle-switch",{active:t.isActive}]),onClick:e[0]||(e[0]=(...o)=>t.toggleSwitch&&t.toggleSwitch(...o))},e[1]||(e[1]=[q("div",{class:"switch"},null,-1)]),2)}const hb=xe(cb,[["render",ub],["__scopeId","data-v-17dbdf4b"]]);var sf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,pg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.D=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(I,R,C){for(var w=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)w[rt-2]=arguments[rt];return y.prototype[R].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,v){v||(v=0);var I=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)I[R]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(R=0;16>R;++R)I[R]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],R=b.g[2];var C=b.g[3],w=y+(C^v&(R^C))+I[0]+3614090360&4294967295;y=v+(w<<7&4294967295|w>>>25),w=C+(R^y&(v^R))+I[1]+3905402710&4294967295,C=y+(w<<12&4294967295|w>>>20),w=R+(v^C&(y^v))+I[2]+606105819&4294967295,R=C+(w<<17&4294967295|w>>>15),w=v+(y^R&(C^y))+I[3]+3250441966&4294967295,v=R+(w<<22&4294967295|w>>>10),w=y+(C^v&(R^C))+I[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(R^y&(v^R))+I[5]+1200080426&4294967295,C=y+(w<<12&4294967295|w>>>20),w=R+(v^C&(y^v))+I[6]+2821735955&4294967295,R=C+(w<<17&4294967295|w>>>15),w=v+(y^R&(C^y))+I[7]+4249261313&4294967295,v=R+(w<<22&4294967295|w>>>10),w=y+(C^v&(R^C))+I[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(R^y&(v^R))+I[9]+2336552879&4294967295,C=y+(w<<12&4294967295|w>>>20),w=R+(v^C&(y^v))+I[10]+4294925233&4294967295,R=C+(w<<17&4294967295|w>>>15),w=v+(y^R&(C^y))+I[11]+2304563134&4294967295,v=R+(w<<22&4294967295|w>>>10),w=y+(C^v&(R^C))+I[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(R^y&(v^R))+I[13]+4254626195&4294967295,C=y+(w<<12&4294967295|w>>>20),w=R+(v^C&(y^v))+I[14]+2792965006&4294967295,R=C+(w<<17&4294967295|w>>>15),w=v+(y^R&(C^y))+I[15]+1236535329&4294967295,v=R+(w<<22&4294967295|w>>>10),w=y+(R^C&(v^R))+I[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^R&(y^v))+I[6]+3225465664&4294967295,C=y+(w<<9&4294967295|w>>>23),w=R+(y^v&(C^y))+I[11]+643717713&4294967295,R=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(R^C))+I[0]+3921069994&4294967295,v=R+(w<<20&4294967295|w>>>12),w=y+(R^C&(v^R))+I[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^R&(y^v))+I[10]+38016083&4294967295,C=y+(w<<9&4294967295|w>>>23),w=R+(y^v&(C^y))+I[15]+3634488961&4294967295,R=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(R^C))+I[4]+3889429448&4294967295,v=R+(w<<20&4294967295|w>>>12),w=y+(R^C&(v^R))+I[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^R&(y^v))+I[14]+3275163606&4294967295,C=y+(w<<9&4294967295|w>>>23),w=R+(y^v&(C^y))+I[3]+4107603335&4294967295,R=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(R^C))+I[8]+1163531501&4294967295,v=R+(w<<20&4294967295|w>>>12),w=y+(R^C&(v^R))+I[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^R&(y^v))+I[2]+4243563512&4294967295,C=y+(w<<9&4294967295|w>>>23),w=R+(y^v&(C^y))+I[7]+1735328473&4294967295,R=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(R^C))+I[12]+2368359562&4294967295,v=R+(w<<20&4294967295|w>>>12),w=y+(v^R^C)+I[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^R)+I[8]+2272392833&4294967295,C=y+(w<<11&4294967295|w>>>21),w=R+(C^y^v)+I[11]+1839030562&4294967295,R=C+(w<<16&4294967295|w>>>16),w=v+(R^C^y)+I[14]+4259657740&4294967295,v=R+(w<<23&4294967295|w>>>9),w=y+(v^R^C)+I[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^R)+I[4]+1272893353&4294967295,C=y+(w<<11&4294967295|w>>>21),w=R+(C^y^v)+I[7]+4139469664&4294967295,R=C+(w<<16&4294967295|w>>>16),w=v+(R^C^y)+I[10]+3200236656&4294967295,v=R+(w<<23&4294967295|w>>>9),w=y+(v^R^C)+I[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^R)+I[0]+3936430074&4294967295,C=y+(w<<11&4294967295|w>>>21),w=R+(C^y^v)+I[3]+3572445317&4294967295,R=C+(w<<16&4294967295|w>>>16),w=v+(R^C^y)+I[6]+76029189&4294967295,v=R+(w<<23&4294967295|w>>>9),w=y+(v^R^C)+I[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^R)+I[12]+3873151461&4294967295,C=y+(w<<11&4294967295|w>>>21),w=R+(C^y^v)+I[15]+530742520&4294967295,R=C+(w<<16&4294967295|w>>>16),w=v+(R^C^y)+I[2]+3299628645&4294967295,v=R+(w<<23&4294967295|w>>>9),w=y+(R^(v|~C))+I[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~R))+I[7]+1126891415&4294967295,C=y+(w<<10&4294967295|w>>>22),w=R+(y^(C|~v))+I[14]+2878612391&4294967295,R=C+(w<<15&4294967295|w>>>17),w=v+(C^(R|~y))+I[5]+4237533241&4294967295,v=R+(w<<21&4294967295|w>>>11),w=y+(R^(v|~C))+I[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~R))+I[3]+2399980690&4294967295,C=y+(w<<10&4294967295|w>>>22),w=R+(y^(C|~v))+I[10]+4293915773&4294967295,R=C+(w<<15&4294967295|w>>>17),w=v+(C^(R|~y))+I[1]+2240044497&4294967295,v=R+(w<<21&4294967295|w>>>11),w=y+(R^(v|~C))+I[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~R))+I[15]+4264355552&4294967295,C=y+(w<<10&4294967295|w>>>22),w=R+(y^(C|~v))+I[6]+2734768916&4294967295,R=C+(w<<15&4294967295|w>>>17),w=v+(C^(R|~y))+I[13]+1309151649&4294967295,v=R+(w<<21&4294967295|w>>>11),w=y+(R^(v|~C))+I[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~R))+I[11]+3174756917&4294967295,C=y+(w<<10&4294967295|w>>>22),w=R+(y^(C|~v))+I[2]+718787259&4294967295,R=C+(w<<15&4294967295|w>>>17),w=v+(C^(R|~y))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var v=y-this.blockSize,I=this.B,R=this.h,C=0;C<y;){if(R==0)for(;C<=v;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<y;)if(I[R++]=b.charCodeAt(C++),R==this.blockSize){s(this,I),R=0;break}}else for(;C<y;)if(I[R++]=b[C++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var v=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=v&255,v/=256;for(this.u(b),b=Array(16),y=v=0;4>y;++y)for(var I=0;32>I;I+=8)b[v++]=this.g[y]>>>I&255;return b};function i(b,y){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function o(b,y){this.h=y;for(var v=[],I=!0,R=b.length-1;0<=R;R--){var C=b[R]|0;I&&C==y||(v[R]=C,I=!1)}this.g=v}var l={};function c(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return P(u(-b));for(var y=[],v=1,I=0;b>=v;I++)y[I]=b/v|0,v*=4294967296;return new o(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return P(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),I=p,R=0;R<b.length;R+=8){var C=Math.min(8,b.length-R),w=parseInt(b.substring(R,R+C),y);8>C?(C=u(Math.pow(y,C)),I=I.j(C).add(u(w))):(I=I.j(v),I=I.add(u(w)))}return I}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();for(var b=0,y=1,v=0;v<this.g.length;v++){var I=this.i(v);b+=(0<=I?I:4294967296+I)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(A(this))return"-"+P(this).toString(b);for(var y=u(Math.pow(b,6)),v=this,I="";;){var R=z(v,y).g;v=N(v,R.j(y));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=R,S(v))return C+I;for(;6>C.length;)C="0"+C;I=C+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function A(b){return b.h==-1}t.l=function(b){return b=N(this,b),A(b)?-1:S(b)?0:1};function P(b){for(var y=b.g.length,v=[],I=0;I<y;I++)v[I]=~b.g[I];return new o(v,~b.h).add(m)}t.abs=function(){return A(this)?P(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],I=0,R=0;R<=y;R++){var C=I+(this.i(R)&65535)+(b.i(R)&65535),w=(C>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);I=w>>>16,C&=65535,w&=65535,v[R]=w<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function N(b,y){return b.add(P(y))}t.j=function(b){if(S(this)||S(b))return p;if(A(this))return A(b)?P(this).j(P(b)):P(P(this).j(b));if(A(b))return P(this.j(P(b)));if(0>this.l(_)&&0>b.l(_))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,v=[],I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<b.g.length;R++){var C=this.i(I)>>>16,w=this.i(I)&65535,rt=b.i(R)>>>16,xt=b.i(R)&65535;v[2*I+2*R]+=w*xt,V(v,2*I+2*R),v[2*I+2*R+1]+=C*xt,V(v,2*I+2*R+1),v[2*I+2*R+1]+=w*rt,V(v,2*I+2*R+1),v[2*I+2*R+2]+=C*rt,V(v,2*I+2*R+2)}for(I=0;I<y;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=y;I<2*y;I++)v[I]=0;return new o(v,0)};function V(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function L(b,y){this.g=b,this.h=y}function z(b,y){if(S(y))throw Error("division by zero");if(S(b))return new L(p,p);if(A(b))return y=z(P(b),y),new L(P(y.g),P(y.h));if(A(y))return y=z(b,P(y)),new L(P(y.g),y.h);if(30<b.g.length){if(A(b)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=y;0>=I.l(b);)v=Z(v),I=Z(I);var R=ae(v,1),C=ae(I,1);for(I=ae(I,2),v=ae(v,2);!S(I);){var w=C.add(I);0>=w.l(b)&&(R=R.add(v),C=w),I=ae(I,1),v=ae(v,1)}return y=N(b,R.j(y)),new L(R,y)}for(R=p;0<=b.l(y);){for(v=Math.max(1,Math.floor(b.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),C=u(v),w=C.j(y);A(w)||0<w.l(b);)v-=I,C=u(v),w=C.j(y);S(C)&&(C=m),R=R.add(C),b=N(b,w)}return new L(R,b)}t.A=function(b){return z(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)&b.i(I);return new o(v,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)|b.i(I);return new o(v,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)^b.i(I);return new o(v,this.h^b.h)};function Z(b){for(var y=b.g.length+1,v=[],I=0;I<y;I++)v[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(v,b.h)}function ae(b,y){var v=y>>5;y%=32;for(var I=b.g.length-v,R=[],C=0;C<I;C++)R[C]=0<y?b.i(C+v)>>>y|b.i(C+v+1)<<32-y:b.i(C+v);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,qr=o}).apply(typeof sf<"u"?sf:typeof self<"u"?self:typeof window<"u"?window:{});var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mg,ri,gg,Fo,dc,_g,yg,vg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof bo=="object"&&bo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var D=a[g];if(!(D in f))break e;f=f[D]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,D={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,g),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,D,O){for(var K=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)K[Le-2]=arguments[Le];return h.prototype[D].apply(g,K)}}function A(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const D=a.length||0,O=g.length||0;a.length=D+O;for(let K=0;K<O;K++)a[D+K]=g[K]}else a.push(g)}}class N{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var Z=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function ae(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(f in g)a[f]=g[f];for(let O=0;O<v.length;O++)f=v[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Bt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class rt{constructor(){this.h=this.g=null}add(h,f){const g=xt.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var xt=new N(()=>new $e,a=>a.reset());class $e{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let he,Ie=!1,Bt=new rt,en=()=>{const a=l.Promise.resolve(void 0);he=()=>{a.then(Qt)}};var Qt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){C(f)}var h=xt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ie=!1};function We(){this.s=this.s,this.C=this.C}We.prototype.s=!1,We.prototype.ma=function(){this.s||(this.s=!0,this.N())},We.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var Gn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function ln(a,h){if(Ge.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{z(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Lt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ln.aa.h.call(this)}}S(ln,Ge);var Lt={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),ee=0;function Y(a,h,f,g,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=D,this.key=++ee,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pe(a){this.src=a,this.g={},this.h=0}Pe.prototype.add=function(a,h,f,g,D){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var K=T(a,h,g,D);return-1<K?(h=a[K],f||(h.fa=!1)):(h=new Y(h,this.src,O,!!g,D),h.fa=f,a.push(h)),h};function E(a,h){var f=h.type;if(f in a.g){var g=a.g[f],D=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=D)&&Array.prototype.splice.call(g,D,1),O&&(se(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function T(a,h,f,g){for(var D=0;D<a.length;++D){var O=a[D];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return D}return-1}var k="closure_lm_"+(1e6*Math.random()|0),x={};function B(a,h,f,g,D){if(Array.isArray(h)){for(var O=0;O<h.length;O++)B(a,h[O],f,g,D);return null}return f=ue(f),a&&a[M]?a.K(h,f,u(g)?!!g.capture:!1,D):F(a,h,f,!1,g,D)}function F(a,h,f,g,D,O){if(!h)throw Error("Invalid event type");var K=u(D)?!!D.capture:!!D,Le=X(a);if(Le||(a[k]=Le=new Pe(a)),f=Le.add(h,f,g,K,O),f.proxy)return f;if(g=J(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Gn||(D=K),D===void 0&&(D=!1),a.addEventListener(h.toString(),g,D);else if(a.attachEvent)a.attachEvent(H(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function J(){function a(f){return h.call(a.src,a.listener,f)}const h=le;return a}function G(a,h,f,g,D){if(Array.isArray(h))for(var O=0;O<h.length;O++)G(a,h[O],f,g,D);else g=u(g)?!!g.capture:!!g,f=ue(f),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=T(O,f,g,D),-1<f&&(se(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,f,g,D)),(f=-1<a?h[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])E(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(H(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=X(h))?(E(f,a),f.h==0&&(f.src=null,h[k]=null)):se(a)}}}function H(a){return a in x?x[a]:x[a]="on"+a}function le(a,h){if(a.da)a=!0;else{h=new ln(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&W(a),a=f.call(g,h)}return a}function X(a){return a=a[k],a instanceof Pe?a:null}var ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[ie]||(a[ie]=function(h){return a.handleEvent(h)}),a[ie])}function ce(){We.call(this),this.i=new Pe(this),this.M=this,this.F=null}S(ce,We),ce.prototype[M]=!0,ce.prototype.removeEventListener=function(a,h,f,g){G(this,a,h,f,g)};function Ee(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ge(h,a);else if(h instanceof Ge)h.target=h.target||a;else{var D=h;h=new Ge(g,a),I(h,D)}if(D=!0,f)for(var O=f.length-1;0<=O;O--){var K=h.g=f[O];D=Se(K,g,!0,h)&&D}if(K=h.g=a,D=Se(K,g,!0,h)&&D,D=Se(K,g,!1,h)&&D,f)for(O=0;O<f.length;O++)K=h.g=f[O],D=Se(K,g,!1,h)&&D}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)se(f[g]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ce.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Se(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,O=0;O<h.length;++O){var K=h[O];if(K&&!K.da&&K.capture==f){var Le=K.listener,ft=K.ha||K.src;K.fa&&E(a.i,K),D=Le.call(ft,g)!==!1&&D}}return D&&!g.defaultPrevented}function yt(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ht(a){a.g=yt(()=>{a.g=null,a.i&&(a.i=!1,ht(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Jt extends We{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ht(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(a){We.call(this),this.h=a,this.g={}}S(vt,We);var Kn=[];function $s(a){ae(a.g,function(h,f){this.g.hasOwnProperty(f)&&W(h)},a),a.g={}}vt.prototype.N=function(){vt.aa.N.call(this),$s(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dt=l.JSON.stringify,Yt=l.JSON.parse,ro=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function tl(){}tl.prototype.h=null;function zu(a){return a.h||(a.h=a.i())}function Wu(){}var Bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nl(){Ge.call(this,"d")}S(nl,Ge);function rl(){Ge.call(this,"c")}S(rl,Ge);var Pr={},Gu=null;function so(){return Gu=Gu||new ce}Pr.La="serverreachability";function Ku(a){Ge.call(this,Pr.La,a)}S(Ku,Ge);function qs(a){const h=so();Ee(h,new Ku(h))}Pr.STAT_EVENT="statevent";function Qu(a,h){Ge.call(this,Pr.STAT_EVENT,a),this.stat=h}S(Qu,Ge);function Dt(a){const h=so();Ee(h,new Qu(h,a))}Pr.Ma="timingevent";function Ju(a,h){Ge.call(this,Pr.Ma,a),this.size=h}S(Ju,Ge);function js(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Hs(){this.g=!0}Hs.prototype.xa=function(){this.g=!1};function Z_(a,h,f,g,D,O){a.info(function(){if(a.g)if(O)for(var K="",Le=O.split("&"),ft=0;ft<Le.length;ft++){var ke=Le[ft].split("=");if(1<ke.length){var Et=ke[0];ke=ke[1];var wt=Et.split("_");K=2<=wt.length&&wt[1]=="type"?K+(Et+"="+ke+"&"):K+(Et+"=redacted&")}}else K=null;else K=O;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+h+`
`+f+`
`+K})}function ey(a,h,f,g,D,O,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+h+`
`+f+`
`+O+" "+K})}function Jr(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ny(a,f)+(g?" "+g:"")})}function ty(a,h){a.info(function(){return"TIMEOUT: "+h})}Hs.prototype.info=function(){};function ny(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var D=g[1];if(Array.isArray(D)&&!(1>D.length)){var O=D[0];if(O!="noop"&&O!="stop"&&O!="close")for(var K=1;K<D.length;K++)D[K]=""}}}}return dt(f)}catch{return h}}var io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sl;function oo(){}S(oo,tl),oo.prototype.g=function(){return new XMLHttpRequest},oo.prototype.i=function(){return{}},sl=new oo;function Qn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xu}function Xu(){this.i=null,this.g="",this.h=!1}var Zu={},il={};function ol(a,h,f){a.L=1,a.v=uo(Tn(h)),a.m=f,a.P=!0,eh(a,null)}function eh(a,h){a.F=Date.now(),ao(a),a.A=Tn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),ph(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Xu,a.g=Nh(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Jt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(Kn[0]=D.toString()),D=Kn);for(var O=0;O<D.length;O++){var K=B(f,D[O],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),qs(),Z_(a.i,a.u,a.A,a.l,a.R,a.m)}Qn.prototype.ca=function(a){a=a.target;const h=this.M;h&&In(a)==3?h.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const wt=In(this.g);var h=this.g.Ba();const Zr=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||wh(this.g)))){this.J||wt!=4||h==7||(h==8||0>=Zr?qs(3):qs(2)),al(this);var f=this.g.Z();this.X=f;t:if(th(this)){var g=wh(this.g);a="";var D=g.length,O=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),zs(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==D-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,ey(this.i,this.u,this.A,this.l,this.R,wt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,ft=this.g;if((Le=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Le)){var ke=Le;break t}}ke=null}if(f=ke)Jr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ll(this,f);else{this.o=!1,this.s=3,Dt(12),kr(this),zs(this);break e}}if(this.P){f=!0;let tn;for(;!this.J&&this.C<K.length;)if(tn=ry(this,K),tn==il){wt==4&&(this.s=4,Dt(14),f=!1),Jr(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Zu){this.s=4,Dt(15),Jr(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else Jr(this.i,this.l,tn,null),ll(this,tn);if(th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||K.length!=0||this.h.h||(this.s=1,Dt(16),f=!1),this.o=this.o&&f,!f)Jr(this.i,this.l,K,"[Invalid Chunked Response]"),kr(this),zs(this);else if(0<K.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),pl(Et),Et.M=!0,Dt(11))}}else Jr(this.i,this.l,K,null),ll(this,K);wt==4&&kr(this),this.o&&!this.J&&(wt==4?Ch(this.j,this):(this.o=!1,ao(this)))}else Ey(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),kr(this),zs(this)}}}catch{}finally{}};function th(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ry(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?il:(f=Number(h.substring(f,g)),isNaN(f)?Zu:(g+=1,g+f>h.length?il:(h=h.slice(g,g+f),a.C=g+f,h)))}Qn.prototype.cancel=function(){this.J=!0,kr(this)};function ao(a){a.S=Date.now()+a.I,nh(a,a.I)}function nh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=js(m(a.ba,a),h)}function al(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ty(this.i,this.A),this.L!=2&&(qs(),Dt(17)),kr(this),this.s=2,zs(this)):nh(this,this.S-a)};function zs(a){a.j.G==0||a.J||Ch(a.j,a)}function kr(a){al(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,$s(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ll(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||cl(f.h,a))){if(!a.K&&cl(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)_o(f),mo(f);else break e;fl(f),Dt(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=js(m(f.Za,f),6e3));if(1>=ih(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Nr(f,11)}else if((a.K||f.g==a)&&_o(f),!V(h))for(D=f.Da.g.parse(h),h=0;h<D.length;h++){let ke=D[h];if(f.T=ke[0],ke=ke[1],f.G==2)if(ke[0]=="c"){f.K=ke[1],f.ia=ke[2];const Et=ke[3];Et!=null&&(f.la=Et,f.j.info("VER="+f.la));const wt=ke[4];wt!=null&&(f.Aa=wt,f.j.info("SVER="+f.Aa));const Zr=ke[5];Zr!=null&&typeof Zr=="number"&&0<Zr&&(g=1.5*Zr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const tn=a.g;if(tn){const vo=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vo){var O=g.h;O.g||vo.indexOf("spdy")==-1&&vo.indexOf("quic")==-1&&vo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ul(O,O.h),O.h=null))}if(g.D){const ml=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;ml&&(g.ya=ml,qe(g.I,g.D,ml))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var K=a;if(g.qa=Dh(g,g.J?g.ia:null,g.W),K.K){oh(g.h,K);var Le=K,ft=g.L;ft&&(Le.I=ft),Le.B&&(al(Le),ao(Le)),g.g=K}else Rh(g);0<f.i.length&&go(f)}else ke[0]!="stop"&&ke[0]!="close"||Nr(f,7);else f.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Nr(f,7):dl(f):ke[0]!="noop"&&f.l&&f.l.ta(ke),f.v=0)}}qs(4)}catch{}}var sy=class{constructor(a,h){this.g=a,this.map=h}};function rh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ih(a){return a.h?1:a.g?a.g.size:0}function cl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ul(a,h){a.g?a.g.add(h):a.h=h}function oh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}rh.prototype.cancel=function(){if(this.i=ah(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ah(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return A(a.i)}function iy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function oy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function lh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=oy(a),g=iy(a),D=g.length,O=0;O<D;O++)h.call(void 0,g[O],f&&f[O],a)}var ch=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ay(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),D=null;if(0<=g){var O=a[f].substring(0,g);D=a[f].substring(g+1)}else O=a[f];h(O,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Dr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Dr){this.h=a.h,lo(this,a.j),this.o=a.o,this.g=a.g,co(this,a.s),this.l=a.l;var h=a.i,f=new Ks;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),uh(this,f),this.m=a.m}else a&&(h=String(a).match(ch))?(this.h=!1,lo(this,h[1]||"",!0),this.o=Ws(h[2]||""),this.g=Ws(h[3]||"",!0),co(this,h[4]),this.l=Ws(h[5]||"",!0),uh(this,h[6]||"",!0),this.m=Ws(h[7]||"")):(this.h=!1,this.i=new Ks(null,this.h))}Dr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Gs(h,hh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Gs(h,hh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Gs(f,f.charAt(0)=="/"?uy:cy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Gs(f,dy)),a.join("")};function Tn(a){return new Dr(a)}function lo(a,h,f){a.j=f?Ws(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function co(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function uh(a,h,f){h instanceof Ks?(a.i=h,fy(a.i,a.h)):(f||(h=Gs(h,hy)),a.i=new Ks(h,a.h))}function qe(a,h,f){a.i.set(h,f)}function uo(a){return qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ws(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Gs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,ly),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ly(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hh=/[#\/\?@]/g,cy=/[#\?:]/g,uy=/[#\?]/g,hy=/[#\?@]/g,dy=/#/g;function Ks(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Jn(a){a.g||(a.g=new Map,a.h=0,a.i&&ay(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ks.prototype,t.add=function(a,h){Jn(this),this.i=null,a=Yr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function dh(a,h){Jn(a),h=Yr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function fh(a,h){return Jn(a),h=Yr(a,h),a.g.has(h)}t.forEach=function(a,h){Jn(this),this.g.forEach(function(f,g){f.forEach(function(D){a.call(h,D,g,this)},this)},this)},t.na=function(){Jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const D=a[g];for(let O=0;O<D.length;O++)f.push(h[g])}return f},t.V=function(a){Jn(this);let h=[];if(typeof a=="string")fh(this,a)&&(h=h.concat(this.g.get(Yr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Jn(this),this.i=null,a=Yr(this,a),fh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function ph(a,h,f){dh(a,h),0<f.length&&(a.i=null,a.g.set(Yr(a,h),A(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var D=O;K[g]!==""&&(D+="="+encodeURIComponent(String(K[g]))),a.push(D)}}return this.i=a.join("&")};function Yr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function fy(a,h){h&&!a.j&&(Jn(a),a.i=null,a.g.forEach(function(f,g){var D=g.toLowerCase();g!=D&&(dh(this,g),ph(this,D,f))},a)),a.j=h}function py(a,h){const f=new Hs;if(l.Image){const g=new Image;g.onload=_(Yn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Yn,f,"TestLoadImage: error",!1,h,g),g.onabort=_(Yn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Yn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function my(a,h){const f=new Hs,g=new AbortController,D=setTimeout(()=>{g.abort(),Yn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(D),O.ok?Yn(f,"TestPingServer: ok",!0,h):Yn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Yn(f,"TestPingServer: error",!1,h)})}function Yn(a,h,f,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(f)}catch{}}function gy(){this.g=new ro}function _y(a,h,f){const g=f||"";try{lh(a,function(D,O){let K=D;u(D)&&(K=dt(D)),h.push(g+O+"="+encodeURIComponent(K))})}catch(D){throw h.push(g+"type="+encodeURIComponent("_badmap")),D}}function ho(a){this.l=a.Ub||null,this.j=a.eb||!1}S(ho,tl),ho.prototype.g=function(){return new fo(this.l,this.j)},ho.prototype.i=function(a){return function(){return a}}({});function fo(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(fo,ce),t=fo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Js(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Js(this)),this.g&&(this.readyState=3,Js(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function mh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qs(this):Js(this),this.readyState==3&&mh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Qs(this))},t.Qa=function(a){this.g&&(this.response=a,Qs(this))},t.ga=function(){this.g&&Qs(this)};function Qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Js(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Js(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gh(a){let h="";return ae(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function hl(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=gh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):qe(a,h,f))}function Qe(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Qe,ce);var yy=/^https?$/i,vy=["POST","PUT"];t=Qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sl.g(),this.v=this.o?zu(this.o):zu(sl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){_h(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)f.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(vy,h,void 0))||g||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,K]of f)this.g.setRequestHeader(O,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Eh(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){_h(this,O)}};function _h(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,yh(a),po(a)}function yh(a){a.A||(a.A=!0,Ee(a,"complete"),Ee(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ee(this,"complete"),Ee(this,"abort"),po(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),po(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vh(this):this.bb())},t.bb=function(){vh(this)};function vh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)yt(a.Ea,0,a);else if(Ee(a,"readystatechange"),In(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=K===0){var D=String(a.D).match(ch)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),g=!yy.test(D?D.toLowerCase():"")}f=g}if(f)Ee(a,"complete"),Ee(a,"success");else{a.m=6;try{var O=2<In(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",yh(a)}}finally{po(a)}}}}function po(a,h){if(a.g){Eh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ee(a,"ready");try{f.onreadystatechange=g}catch{}}}function Eh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Yt(h)}};function wh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ey(a){const h={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(V(a[g]))continue;var f=R(a[g]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[D]||[];h[D]=O,O.push(f)}b(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ys(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Th(a){this.Aa=0,this.i=[],this.j=new Hs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ys("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ys("baseRetryDelayMs",5e3,a),this.cb=Ys("retryDelaySeedMs",1e4,a),this.Wa=Ys("forwardChannelMaxRetries",2,a),this.wa=Ys("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rh(a&&a.concurrentRequestLimit),this.Da=new gy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Th.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){Dt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Dh(this,null,this.W),go(this)};function dl(a){if(Ih(a),a.G==3){var h=a.U++,f=Tn(a.I);if(qe(f,"SID",a.K),qe(f,"RID",h),qe(f,"TYPE","terminate"),Xs(a,f),h=new Qn(a,a.j,h),h.L=2,h.v=uo(Tn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Nh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ao(h)}kh(a)}function mo(a){a.g&&(pl(a),a.g.cancel(),a.g=null)}function Ih(a){mo(a),a.u&&(l.clearTimeout(a.u),a.u=null),_o(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function go(a){if(!sh(a.h)&&!a.s){a.s=!0;var h=a.Ga;he||en(),Ie||(he(),Ie=!0),Bt.add(h,a),a.B=0}}function wy(a,h){return ih(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=js(m(a.Ga,a,h),Ph(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new Qn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(D.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ah(this,D,h),f=Tn(this.I),qe(f,"RID",a),qe(f,"CVER",22),this.D&&qe(f,"X-HTTP-Session-Id",this.D),Xs(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(gh(O)))+"&"+h:this.m&&hl(f,this.m,O)),ul(this.h,D),this.Ua&&qe(f,"TYPE","init"),this.P?(qe(f,"$req",h),qe(f,"SID","null"),D.T=!0,ol(D,f,null)):ol(D,f,h),this.G=2}}else this.G==3&&(a?bh(this,a):this.i.length==0||sh(this.h)||bh(this))};function bh(a,h){var f;h?f=h.l:f=a.U++;const g=Tn(a.I);qe(g,"SID",a.K),qe(g,"RID",f),qe(g,"AID",a.T),Xs(a,g),a.m&&a.o&&hl(g,a.m,a.o),f=new Qn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Ah(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ul(a.h,f),ol(f,g,h)}function Xs(a,h){a.H&&ae(a.H,function(f,g){qe(h,g,f)}),a.l&&lh({},function(f,g){qe(h,g,f)})}function Ah(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let O=-1;for(;;){const K=["count="+f];O==-1?0<f?(O=D[0].g,K.push("ofs="+O)):O=0:K.push("ofs="+O);let Le=!0;for(let ft=0;ft<f;ft++){let ke=D[ft].g;const Et=D[ft].map;if(ke-=O,0>ke)O=Math.max(0,D[ft].g-100),Le=!1;else try{_y(Et,K,"req"+ke+"_")}catch{g&&g(Et)}}if(Le){g=K.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Rh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;he||en(),Ie||(he(),Ie=!0),Bt.add(h,a),a.v=0}}function fl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=js(m(a.Fa,a),Ph(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Sh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=js(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),mo(this),Sh(this))};function pl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Sh(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Tn(a.qa);qe(h,"RID","rpc"),qe(h,"SID",a.K),qe(h,"AID",a.T),qe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&qe(h,"TO",a.ja),qe(h,"TYPE","xmlhttp"),Xs(a,h),a.m&&a.o&&hl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=uo(Tn(h)),f.m=null,f.P=!0,eh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,mo(this),fl(this),Dt(19))};function _o(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ch(a,h){var f=null;if(a.g==h){_o(a),pl(a),a.g=null;var g=2}else if(cl(a.h,h))f=h.D,oh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;g=so(),Ee(g,new Ju(g,f)),go(a)}else Rh(a);else if(D=h.s,D==3||D==0&&0<h.X||!(g==1&&wy(a,h)||g==2&&fl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),D){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function Ph(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Nr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const D=!g;g=new Dr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||lo(g,"https"),uo(g),D?py(g.toString(),f):my(g.toString(),f)}else Dt(2);a.G=0,a.l&&a.l.sa(h),kh(a),Ih(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function kh(a){if(a.G=0,a.ka=[],a.l){const h=ah(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function Dh(a,h,f){var g=f instanceof Dr?Tn(f):new Dr(f);if(g.g!="")h&&(g.g=h+"."+g.g),co(g,g.s);else{var D=l.location;g=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var O=new Dr(null);g&&lo(O,g),h&&(O.g=h),D&&co(O,D),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&qe(g,f,h),qe(g,"VER",a.la),Xs(a,g),g}function Nh(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Qe(new ho({eb:f})):new Qe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oh(){}t=Oh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function yo(){}yo.prototype.g=function(a,h){return new qt(a,h)};function qt(a,h){ce.call(this),this.g=new Th(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!V(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!V(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Xr(this)}S(qt,ce),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){dl(this.g)},qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=dt(a),a=f);h.i.push(new sy(h.Ya++,a)),h.G==3&&go(h)},qt.prototype.N=function(){this.g.l=null,delete this.j,dl(this.g),delete this.g,qt.aa.N.call(this)};function Vh(a){nl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(Vh,nl);function Mh(){rl.call(this),this.status=1}S(Mh,rl);function Xr(a){this.g=a}S(Xr,Oh),Xr.prototype.ua=function(){Ee(this.g,"a")},Xr.prototype.ta=function(a){Ee(this.g,new Vh(a))},Xr.prototype.sa=function(a){Ee(this.g,new Mh)},Xr.prototype.ra=function(){Ee(this.g,"b")},yo.prototype.createWebChannel=yo.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,vg=function(){return new yo},yg=function(){return so()},_g=Pr,dc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},io.NO_ERROR=0,io.TIMEOUT=8,io.HTTP_ERROR=6,Fo=io,Yu.COMPLETE="complete",gg=Yu,Wu.EventType=Bs,Bs.OPEN="a",Bs.CLOSE="b",Bs.ERROR="c",Bs.MESSAGE="d",ce.prototype.listen=ce.prototype.K,ri=Wu,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,mg=Qe}).apply(typeof bo<"u"?bo:typeof self<"u"?self:typeof window<"u"?window:{});const of="@firebase/firestore";/**
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
 */let Ms="11.0.2";/**
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
 */const Wr=new Gc("@firebase/firestore");function is(){return Wr.logLevel}function te(t,...e){if(Wr.logLevel<=be.DEBUG){const n=e.map(au);Wr.debug(`Firestore (${Ms}): ${t}`,...n)}}function Un(t,...e){if(Wr.logLevel<=be.ERROR){const n=e.map(au);Wr.error(`Firestore (${Ms}): ${t}`,...n)}}function As(t,...e){if(Wr.logLevel<=be.WARN){const n=e.map(au);Wr.warn(`Firestore (${Ms}): ${t}`,...n)}}function au(t){if(typeof t=="string")return t;try{/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw Un(e),new Error(e)}function Me(t,e){t||de()}function ye(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Eg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class db{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class fb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pb{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new Eg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new It(e)}}class mb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class gb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new mb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _b{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Me(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new _b(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function vb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class wg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=vb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function Rs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ki{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ki.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ki?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends ki{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const Eb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends ki{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return Eb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(He.fromString(e))}static fromName(e){return new oe(He.fromString(e).popFirst(5))}static empty(){return new oe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new He(e.slice()))}}function wb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new mr(s,oe.empty(),e)}function Tb(t){return new mr(t.readTime,t.key,-1)}class mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mr(ge.min(),oe.empty(),-1)}static max(){return new mr(ge.max(),oe.empty(),-1)}}function Ib(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
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
 */const bb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ab{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xs(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==bb)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Rb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ls(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ma{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ma.oe=-1;function xa(t){return t==null}function ia(t){return t===0&&1/t==-1/0}function Sb(t){return typeof t=="number"&&Number.isInteger(t)&&!ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Cb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=af(e)),e=Pb(t.get(n),e);return af(e)}function Pb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function af(t){return t+""}/**
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
 */function lf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ao(this.root,e,this.comparator,!0)}}class Ao{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cf(this.data.getIterator())}getIteratorFrom(e){return new cf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class cf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new ot(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ig extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ig("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(Me(!!t),typeof t=="string"){let e=0;const n=kb.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
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
 */function lu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function La(t){const e=t.mapValue.fields.__previous_value__;return lu(e)?La(e):e}function Di(t){const e=gr(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class Db{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ni&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ro={mapValue:{}};function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lu(t)?4:Ob(t)?9007199254740991:Nb(t)?10:11:de()}function En(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Di(t).isEqual(Di(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gr(s.timestampValue),l=gr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return _r(s.bytesValue).isEqual(_r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),l=Ye(i.doubleValue);return o===l?ia(o)===ia(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Rs(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(lf(o)!==lf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!En(o[c],l[c])))return!1;return!0}(t,e);default:return de()}}function Oi(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Ss(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return uf(t.timestampValue,e.timestampValue);case 4:return uf(Di(t),Di(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,o){const l=_r(i),c=_r(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Re(l[u],c[u]);if(d!==0)return d}return Re(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Re(Ye(i.latitude),Ye(o.latitude));return l!==0?l:Re(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return hf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=m.value)===null||c===void 0?void 0:c.arrayValue,A=Re(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return A!==0?A:hf(_,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ro.mapValue&&o===Ro.mapValue)return 0;if(i===Ro.mapValue)return 1;if(o===Ro.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Re(c[p],d[p]);if(m!==0)return m;const _=Ss(l[c[p]],u[d[p]]);if(_!==0)return _}return Re(c.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function uf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=gr(t),r=gr(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function hf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ss(n[s],r[s]);if(i)return i}return Re(n.length,r.length)}function Cs(t){return fc(t)}function fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=fc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${fc(n.fields[o])}`;return s+"}"}(t.mapValue):de()}function Uo(t){switch(yr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=La(t);return e?16+Uo(e):16;case 5:return 2*t.stringValue.length;case 6:return _r(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Uo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Rr(r.fields,(i,o)=>{s+=i.length+Uo(o)}),s}(t.mapValue);default:throw de()}}function df(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pc(t){return!!t&&"integerValue"in t}function cu(t){return!!t&&"arrayValue"in t}function ff(t){return!!t&&"nullValue"in t}function pf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $o(t){return!!t&&"mapValue"in t}function Nb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function gi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ob(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=gi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$o(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(gi(this.value))}}function bg(t){const e=[];return Rr(t.fields,(n,r)=>{const s=new gt([n]);if($o(r)){const i=bg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
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
 */class Rt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Rt(e,0,ge.min(),ge.min(),ge.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new Rt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new Rt(e,2,n,ge.min(),ge.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,ge.min(),ge.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oa{constructor(e,n){this.position=e,this.inclusive=n}}function mf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=Ss(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class aa{constructor(e,n="asc"){this.field=e,this.dir=n}}function Vb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ag{}class tt extends Ag{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xb(e,n,r):n==="array-contains"?new Ub(e,r):n==="in"?new $b(e,r):n==="not-in"?new Bb(e,r):n==="array-contains-any"?new qb(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Lb(e,r):new Fb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ss(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(Ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends Ag{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new an(e,n)}matches(e){return Rg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Rg(t){return t.op==="and"}function Sg(t){return Mb(t)&&Rg(t)}function Mb(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function mc(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(Sg(t))return t.filters.map(e=>mc(e)).join(",");{const e=t.filters.map(n=>mc(n)).join(",");return`${t.op}(${e})`}}function Cg(t,e){return t instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&En(r.value,s.value)}(t,e):t instanceof an?function(r,s){return s instanceof an&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Cg(o,s.filters[l]),!0):!1}(t,e):void de()}function Pg(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${Cs(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(Pg).join(" ,")+"}"}(t):"Filter"}class xb extends tt{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class Lb extends tt{constructor(e,n){super(e,"in",n),this.keys=kg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Fb extends tt{constructor(e,n){super(e,"not-in",n),this.keys=kg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class Ub extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cu(n)&&Oi(n.arrayValue,this.value)}}class $b extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oi(this.value.arrayValue,n)}}class Bb extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Oi(this.value.arrayValue,n)}}class qb extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Oi(this.value.arrayValue,r))}}/**
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
 */class jb{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function _f(t,e=null,n=[],r=[],s=null,i=null,o=null){return new jb(t,e,n,r,s,i,o)}function uu(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.ue=n}return e.ue}function hu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Vb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gf(t.startAt,e.startAt)&&gf(t.endAt,e.endAt)}function gc(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Gi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Hb(t,e,n,r,s,i,o,l){return new Gi(t,e,n,r,s,i,o,l)}function Fa(t){return new Gi(t)}function yf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Dg(t){return t.collectionGroup!==null}function _i(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ot(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new aa(i,r))}),n.has(gt.keyField().canonicalString())||e.ce.push(new aa(gt.keyField(),r))}return e.ce}function mn(t){const e=ye(t);return e.le||(e.le=zb(e,_i(t))),e.le}function zb(t,e){if(t.limitType==="F")return _f(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new aa(s.field,i)});const n=t.endAt?new oa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oa(t.startAt.position,t.startAt.inclusive):null;return _f(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _c(t,e){const n=t.filters.concat([e]);return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yc(t,e,n){return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ua(t,e){return hu(mn(t),mn(e))&&t.limitType===e.limitType}function Ng(t){return`${uu(mn(t))}|lt:${t.limitType}`}function os(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Pg(s)).join(", ")}]`),xa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Cs(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function $a(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of _i(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=mf(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,_i(r),s)||r.endAt&&!function(o,l,c){const u=mf(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,_i(r),s))}(t,e)}function Wb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Og(t){return(e,n)=>{let r=!1;for(const s of _i(t)){const i=Gb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Gb(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ss(c,u):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
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
 */class Gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Tg(this.inner)}size(){return this.innerSize}}/**
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
 */const Kb=new Ke(oe.comparator);function $n(){return Kb}const Vg=new Ke(oe.comparator);function si(...t){let e=Vg;for(const n of t)e=e.insert(n.key,n);return e}function Mg(t){let e=Vg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return yi()}function xg(){return yi()}function yi(){return new Gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Qb=new Ke(oe.comparator),Jb=new ot(oe.comparator);function Ae(...t){let e=Jb;for(const n of t)e=e.add(n);return e}const Yb=new ot(Re);function Xb(){return Yb}/**
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
 */function du(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(e)?"-0":e}}function Lg(t){return{integerValue:""+t}}function Zb(t,e){return Sb(e)?Lg(e):du(t,e)}/**
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
 */class Ba{constructor(){this._=void 0}}function eA(t,e,n){return t instanceof Vi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lu(i)&&(i=La(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Mi?Ug(t,e):t instanceof xi?$g(t,e):function(s,i){const o=Fg(s,i),l=vf(o)+vf(s.Pe);return pc(o)&&pc(s.Pe)?Lg(l):du(s.serializer,l)}(t,e)}function tA(t,e,n){return t instanceof Mi?Ug(t,e):t instanceof xi?$g(t,e):n}function Fg(t,e){return t instanceof la?function(r){return pc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Vi extends Ba{}class Mi extends Ba{constructor(e){super(),this.elements=e}}function Ug(t,e){const n=Bg(e);for(const r of t.elements)n.some(s=>En(s,r))||n.push(r);return{arrayValue:{values:n}}}class xi extends Ba{constructor(e){super(),this.elements=e}}function $g(t,e){let n=Bg(e);for(const r of t.elements)n=n.filter(s=>!En(s,r));return{arrayValue:{values:n}}}class la extends Ba{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function vf(t){return Ye(t.integerValue||t.doubleValue)}function Bg(t){return cu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class nA{constructor(e,n){this.field=e,this.transform=n}}function rA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Mi&&s instanceof Mi||r instanceof xi&&s instanceof xi?Rs(r.elements,s.elements,En):r instanceof la&&s instanceof la?En(r.Pe,s.Pe):r instanceof Vi&&s instanceof Vi}(t.transform,e.transform)}class sA{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qa{}function qg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ja(t.key,$t.none()):new Ki(t.key,t.data,$t.none());{const n=t.data,r=Ut.empty();let s=new ot(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new Wt(s.toArray()),$t.none())}}function iA(t,e,n){t instanceof Ki?function(s,i,o){const l=s.value.clone(),c=wf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,o){if(!Bo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=wf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(jg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vi(t,e,n,r){return t instanceof Ki?function(i,o,l,c){if(!Bo(i.precondition,o))return l;const u=i.value.clone(),d=Tf(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,o,l,c){if(!Bo(i.precondition,o))return l;const u=Tf(i.fieldTransforms,c,o),d=o.data;return d.setAll(jg(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function oA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Fg(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function Ef(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rs(r,s,(i,o)=>rA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ki extends qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wf(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,tA(o,l,n[s]))}return r}function Tf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,eA(i,o,e))}return r}class ja extends qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aA extends qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=qg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Rs(this.mutations,e.mutations,(n,r)=>Ef(n,r))&&Rs(this.baseMutations,e.baseMutations,(n,r)=>Ef(n,r))}}class fu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length);let s=function(){return Qb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new fu(e,n,r,s)}}/**
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
 */class cA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,Ce;function hA(t){switch(t){default:return de();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function Hg(t){if(t===void 0)return Un("GRPC error has no .code"),U.UNKNOWN;switch(t){case et.OK:return U.OK;case et.CANCELLED:return U.CANCELLED;case et.UNKNOWN:return U.UNKNOWN;case et.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case et.INTERNAL:return U.INTERNAL;case et.UNAVAILABLE:return U.UNAVAILABLE;case et.UNAUTHENTICATED:return U.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case et.NOT_FOUND:return U.NOT_FOUND;case et.ALREADY_EXISTS:return U.ALREADY_EXISTS;case et.PERMISSION_DENIED:return U.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case et.ABORTED:return U.ABORTED;case et.OUT_OF_RANGE:return U.OUT_OF_RANGE;case et.UNIMPLEMENTED:return U.UNIMPLEMENTED;case et.DATA_LOSS:return U.DATA_LOSS;default:return de()}}(Ce=et||(et={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function dA(){return new TextEncoder}/**
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
 */const fA=new qr([4294967295,4294967295],0);function If(t){const e=dA().encode(t),n=new pg;return n.update(e),new Uint8Array(n.digest())}function bf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qr([n,r],0),new qr([s,i],0)]}class pu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ii(`Invalid padding: ${n}`);if(r<0)throw new ii(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ii(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ii(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=qr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(qr.fromNumber(r)));return s.compare(fA)===1&&(s=new qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=If(e),[r,s]=bf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new pu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=If(e),[r,s]=bf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ha{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ha(ge.min(),s,new Ke(Re),$n(),Ae())}}class Qi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qi(r,n,Ae(),Ae(),Ae())}}/**
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
 */class qo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class zg{constructor(e,n){this.targetId=e,this.me=n}}class Wg{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Af{constructor(){this.fe=0,this.ge=Rf(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ae(),n=Ae(),r=Ae();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de()}}),new Qi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Rf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pA{constructor(e){this.Le=e,this.Be=new Map,this.ke=$n(),this.qe=So(),this.Qe=So(),this.Ke=new Ke(Re)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(gc(i))if(r===0){const o=new oe(i.path);this.We(n,o,Rt.newNoDocument(o,ge.min()))}else Me(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=_r(r).toUint8Array()}catch(c){if(c instanceof Ig)return As("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new pu(o,s,i)}catch(c){return As(c instanceof ii?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&gc(l.target)){const c=new oe(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Rt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ae();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ha(e,n,this.Ke,this.ke,r);return this.ke=$n(),this.qe=So(),this.Qe=So(),this.Ke=new Ke(Re),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Af,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ot(Re),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(Re),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Af),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function So(){return new Ke(oe.comparator)}function Rf(){return new Ke(oe.comparator)}const mA={asc:"ASCENDING",desc:"DESCENDING"},gA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_A={and:"AND",or:"OR"};class yA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vc(t,e){return t.useProto3Json||xa(e)?e:{value:e}}function ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vA(t,e){return ca(t,e.toTimestamp())}function gn(t){return Me(!!t),ge.fromTimestamp(function(n){const r=gr(n);return new it(r.seconds,r.nanos)}(t))}function mu(t,e){return Ec(t,e).canonicalString()}function Ec(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Kg(t){const e=He.fromString(t);return Me(Zg(e)),e}function wc(t,e){return mu(t.databaseId,e.path)}function Ll(t,e){const n=Kg(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(Jg(n))}function Qg(t,e){return mu(t.databaseId,e)}function EA(t){const e=Kg(t);return e.length===4?He.emptyPath():Jg(e)}function Tc(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jg(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sf(t,e,n){return{name:wc(t,e),fields:n.value.mapValue.fields}}function wA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Me(d===void 0||typeof d=="string"),_t.fromBase64String(d||"")):(Me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),_t.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?U.UNKNOWN:Hg(u.code);return new ne(d,u.message||"")}(o);n=new Wg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ll(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):ge.min(),l=new Ut({mapValue:{fields:r.document.fields}}),c=Rt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new qo(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ll(t,r.document),i=r.readTime?gn(r.readTime):ge.min(),o=Rt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new qo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ll(t,r.document),i=r.removedTargetIds||[];n=new qo([],i,s,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new uA(s,i),l=r.targetId;n=new zg(l,o)}}return n}function TA(t,e){let n;if(e instanceof Ki)n={update:Sf(t,e.key,e.value)};else if(e instanceof ja)n={delete:wc(t,e.key)};else if(e instanceof Sr)n={update:Sf(t,e.key,e.data),updateMask:DA(e.fieldMask)};else{if(!(e instanceof aA))return de();n={verify:wc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Vi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof xi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof la)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function IA(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(ge.min())&&(o=gn(i)),new sA(o,s.transformResults||[])}(n,e))):[]}function bA(t,e){return{documents:[Qg(t,e.path)]}}function AA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Qg(t,s);const i=function(u){if(u.length!==0)return Xg(an.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:as(m.field),direction:CA(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=vc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function RA(t){let e=EA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Yg(p);return m instanceof an&&Sg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new aa(ls(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,xa(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new oa(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new oa(_,m)}(n.endAt)),Hb(e,s,o,i,l,"F",c,u)}function SA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ls(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ls(n.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ls(n.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ls(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(ls(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>Yg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function CA(t){return mA[t]}function PA(t){return gA[t]}function kA(t){return _A[t]}function as(t){return{fieldPath:t.canonicalString()}}function ls(t){return gt.fromServerFormat(t.fieldPath)}function Xg(t){return t instanceof tt?function(n){if(n.op==="=="){if(pf(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NAN"}};if(ff(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pf(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NAN"}};if(ff(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(n.field),op:PA(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(s=>Xg(s));return r.length===1?r[0]:{compositeFilter:{op:kA(n.op),filters:r}}}(t):de()}function DA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ar{constructor(e,n,r,s,i=ge.min(),o=ge.min(),l=_t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class NA{constructor(e){this.ht=e}}function OA(t){const e=RA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yc(e,e.limit,"L"):e}/**
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
 */class VA{constructor(){this.ln=new MA}addToCollectionParentIndex(e,n){return this.ln.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(mr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class MA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ot(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ot(He.comparator)).toArray()}}/**
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
 */const Cf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ft{static withCacheSize(e){return new Ft(e,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ft.DEFAULT_COLLECTION_PERCENTILE=10,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ft.DEFAULT=new Ft(41943040,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ft.DISABLED=new Ft(-1,0,0);/**
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
 */class Ps{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ps(0)}static Qn(){return new Ps(-1)}}/**
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
 */function Pf([t,e],[n,r]){const s=Re(t,n);return s===0?Re(e,r):s}class xA{constructor(e){this.Gn=e,this.buffer=new ot(Pf),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Pf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ls(n)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await xs(n)}await this.Yn(3e5)})}}class FA{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Ma.oe);const r=new xA(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Cf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cf):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),is()<=be.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function UA(t,e){return new FA(t,e)}/**
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
 */class $A{constructor(){this.changes=new Gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class qA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&vi(r.mutation,s,Wt.empty(),it.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=Fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=si();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=$n();const o=yi(),l=function(){return yi()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Sr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),vi(d.mutation,u,d.mutation.getFieldMask(),it.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new BA(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=yi();let s=new Ke((o,l)=>o-l),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Wt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Ae()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=xg();d.forEach(m=>{if(!i.has(m)){const _=qg(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Fr());let l=-1,c=i;return o.next(u=>$.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ae())).next(d=>({batchId:l,changes:Mg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=si();return this.indexManager.getCollectionParents(e,i).next(l=>$.forEach(l,c=>{const u=function(p,m){return new Gi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Rt.newInvalidDocument(d)))});let l=si();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&vi(d.mutation,u,Wt.empty(),it.now()),$a(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class jA{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return $.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:OA(s.bundledQuery),readTime:gn(s.readTime)}}(n)),$.resolve()}}/**
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
 */class HA{constructor(){this.overlays=new Ke(oe.comparator),this.Er=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Fr(),i=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Fr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Fr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return $.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cA(n,r));let i=this.Er.get(n);i===void 0&&(i=Ae(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class zA{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class gu{constructor(){this.dr=new ot(at.Ar),this.Rr=new ot(at.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new at(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new at(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new oe(new He([])),r=new at(n,e),s=new at(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new oe(new He([])),r=new at(n,e),s=new at(n,e+1);let i=Ae();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new at(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return oe.comparator(e.key,n.key)||Re(e.br,n.br)}static Vr(e,n){return Re(e.br,n.br)||oe.comparator(e.key,n.key)}}/**
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
 */class WA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ot(at.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new at(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),s=new at(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(Re);return n.forEach(s=>{const i=new at(s,0),o=new at(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),$.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new at(new oe(i),0);let l=new ot(Re);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),$.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return $.forEach(n.mutations,s=>{const i=new at(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new at(n,0),s=this.vr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GA{constructor(e){this.Nr=e,this.docs=function(){return new Ke(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Rt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=$n();const o=n.path,l=new oe(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ib(Tb(d),r)<=0||(s.has(d.key)||$a(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}Lr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KA(this)}getSize(e){return $.resolve(this.size)}}class KA extends $A{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class QA{constructor(e){this.persistence=e,this.Br=new Gr(n=>uu(n),hu),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.kr=0,this.qr=new gu,this.targetCount=0,this.Qr=Ps.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),$.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Un(n),$.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.qr.containsKey(n))}}/**
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
 */class e_{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Ma(0),this.Ur=!1,this.Ur=!0,this.Wr=new zA,this.referenceDelegate=e(this),this.Gr=new QA(this),this.indexManager=new VA,this.remoteDocumentCache=function(s){return new GA(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new NA(n),this.jr=new jA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new WA(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new JA(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return $.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class JA extends Ab{constructor(e){super(),this.currentSequenceNumber=e}}class _u{constructor(e){this.persistence=e,this.Zr=new gu,this.Xr=null}static ei(e){return new _u(e)}get ti(){if(this.Xr)return this.Xr;throw de()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),$.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,r=>{const s=oe.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return $.or([()=>$.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class ua{constructor(e,n){this.persistence=e,this.ri=new Gr(r=>Cb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=UA(this,n)}static ei(e,n){return new ua(e,n)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return $.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?$.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ge.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Uo(e.data.value)),n}ir(e,n,r){return $.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class yu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yu(e,n.fromCache,r,s)}}/**
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
 */class YA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class XA{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return xw()?8:Rb(kt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new YA;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(is()<=be.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(is()<=be.DEBUG&&te("QueryEngine","Query:",os(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(is()<=be.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):$.resolve())}Xi(e,n){if(yf(n))return $.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=yc(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ae(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,yc(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return yf(n)||s.isEqual(ge.min())?$.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?$.resolve(null):(is()<=be.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),os(n)),this.os(e,o,n,wb(s,-1)).next(l=>l))})}rs(e,n){let r=new ot(Og(e));return n.forEach((s,i)=>{$a(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return is()<=be.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",os(n)),this.Zi.getDocumentsMatchingQuery(e,n,mr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class ZA{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ke(Re),this.cs=new Gr(i=>uu(i),hu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qA(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function eR(t,e,n,r){return new ZA(t,e,n,r)}async function t_(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ae();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function tR(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let _=$.resolve();return m.forEach(S=>{_=_.next(()=>d.getEntry(c,S)).next(A=>{const P=u.docVersions.get(S);Me(P!==null),A.version.compareTo(P)<0&&(p.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),d.addEntry(A)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ae();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function n_(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function nR(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(_t.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(A,P,N){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,_,d)&&l.push(n.Gr.updateTargetData(i,_))});let c=$n(),u=Ae();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(rR(i,o,e.documentUpdates).next(d=>{c=d.Is,u=d.Es})),!r.isEqual(ge.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return $.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function rR(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=$n();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ge.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function sR(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iR(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Ic(t,e,n){const r=ye(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ls(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function kf(t,e,n){const r=ye(t);let s=ge.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ye(c),m=p.cs.get(d);return m!==void 0?$.resolve(p.us.get(m)):p.Gr.getTargetData(u,d)}(r,o,mn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Ae())).next(l=>(oR(r,Wb(e),l),{documents:l,ds:i})))}function oR(t,e,n){let r=t.ls.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Df{constructor(){this.activeTargetIds=Xb()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aR{constructor(){this._o=new Df,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Df,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lR{uo(e){}shutdown(){}}/**
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
 */class Nf{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Co=null;function Fl(){return Co===null?Co=function(){return 268435456+Math.round(2147483648*Math.random())}():Co++,"0x"+Co.toString(16)}/**
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
 */const cR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class uR{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Tt="WebChannelConnection";class hR extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=Fl(),c=this.No(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(d=>(te("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw As("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=cR[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=Fl();return new Promise((o,l)=>{const c=new mg;c.setWithCredentials(!0),c.listenOnce(gg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fo.NO_ERROR:const d=c.getResponseJson();te(Tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Fo.TIMEOUT:te(Tt,`RPC '${e}' ${i} timed out`),l(new ne(U.DEADLINE_EXCEEDED,"Request time out"));break;case Fo.HTTP_ERROR:const p=c.getStatus();if(te(Tt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const S=function(P){const N=P.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(N)>=0?N:U.UNKNOWN}(_.status);l(new ne(S,_.message))}else l(new ne(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ne(U.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{te(Tt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(Tt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=Fl(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vg(),l=yg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");te(Tt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,_=!1;const S=new uR({Eo:P=>{_?te(Tt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(te(Tt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),te(Tt,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Ao:()=>p.close()}),A=(P,N,V)=>{P.listen(N,L=>{try{V(L)}catch(z){setTimeout(()=>{throw z},0)}})};return A(p,ri.EventType.OPEN,()=>{_||(te(Tt,`RPC '${e}' stream ${s} transport opened.`),S.So())}),A(p,ri.EventType.CLOSE,()=>{_||(_=!0,te(Tt,`RPC '${e}' stream ${s} transport closed`),S.Do())}),A(p,ri.EventType.ERROR,P=>{_||(_=!0,As(Tt,`RPC '${e}' stream ${s} transport errored:`,P),S.Do(new ne(U.UNAVAILABLE,"The operation could not be completed")))}),A(p,ri.EventType.MESSAGE,P=>{var N;if(!_){const V=P.data[0];Me(!!V);const L=V,z=(L==null?void 0:L.error)||((N=L[0])===null||N===void 0?void 0:N.error);if(z){te(Tt,`RPC '${e}' stream ${s} received error:`,z);const Z=z.status;let ae=function(v){const I=et[v];if(I!==void 0)return Hg(I)}(Z),b=z.message;ae===void 0&&(ae=U.INTERNAL,b="Unknown error status: "+Z+" with message "+z.message),_=!0,S.Do(new ne(ae,b)),p.close()}else te(Tt,`RPC '${e}' stream ${s} received:`,V),S.vo(V)}}),A(l,_g.STAT_EVENT,P=>{P.stat===dc.PROXY?te(Tt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===dc.NOPROXY&&te(Tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.bo()},0),S}}function Ul(){return typeof document<"u"?document:null}/**
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
 */function za(t){return new yA(t,!0)}/**
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
 */class r_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class s_{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new r_(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ne(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dR extends s_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=wA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?gn(o.readTime):ge.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Tc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=gc(c)?{documents:bA(i,c)}:{query:AA(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Gg(i,o.resumeToken);const u=vc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){l.readTime=ca(i,o.snapshotVersion.toTimestamp());const u=vc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=SA(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Tc(this.serializer),n.removeTarget=e,this.c_(n)}}class fR extends s_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=IA(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Tc(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TA(this.serializer,r))};this.c_(n)}}/**
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
 */class pR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Ec(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(U.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,Ec(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(U.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class mR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Un(n),this.C_=!1):te("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class gR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Kr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ye(c);u.k_.add(4),await Ji(u),u.K_.set("Unknown"),u.k_.delete(4),await Wa(u)}(this))})}),this.K_=new mR(r,s)}}async function Wa(t){if(Kr(t))for(const e of t.q_)await e(!0)}async function Ji(t){for(const e of t.q_)await e(!1)}function i_(t,e){const n=ye(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Tu(n)?wu(n):Fs(n).s_()&&Eu(n,e))}function vu(t,e){const n=ye(t),r=Fs(n);n.B_.delete(e),r.s_()&&o_(n,e),n.B_.size===0&&(r.s_()?r.a_():Kr(n)&&n.K_.set("Unknown"))}function Eu(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fs(t).V_(e)}function o_(t,e){t.U_.xe(e),Fs(t).m_(e)}function wu(t){t.U_=new pA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Fs(t).start(),t.K_.F_()}function Tu(t){return Kr(t)&&!Fs(t).i_()&&t.B_.size>0}function Kr(t){return ye(t).k_.size===0}function a_(t){t.U_=void 0}async function _R(t){t.K_.set("Online")}async function yR(t){t.B_.forEach((e,n)=>{Eu(t,e)})}async function vR(t,e){a_(t),Tu(t)?(t.K_.O_(e),wu(t)):t.K_.set("Unknown")}async function ER(t,e,n){if(t.K_.set("Online"),e instanceof Wg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ha(t,r)}else if(e instanceof qo?t.U_.$e(e):e instanceof zg?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ge.min()))try{const r=await n_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(u);d&&i.B_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(_t.EMPTY_BYTE_STRING,d.snapshotVersion)),o_(i,c);const p=new ar(d.target,c,u,d.sequenceNumber);Eu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await ha(t,r)}}async function ha(t,e,n){if(!Ls(e))throw e;t.k_.add(1),await Ji(t),t.K_.set("Offline"),n||(n=()=>n_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Wa(t)})}function l_(t,e){return e().catch(n=>ha(t,n,e))}async function Ga(t){const e=ye(t),n=vr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;wR(e);)try{const s=await sR(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,TR(e,s)}catch(s){await ha(e,s)}c_(e)&&u_(e)}function wR(t){return Kr(t)&&t.L_.length<10}function TR(t,e){t.L_.push(e);const n=vr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function c_(t){return Kr(t)&&!vr(t).i_()&&t.L_.length>0}function u_(t){vr(t).start()}async function IR(t){vr(t).w_()}async function bR(t){const e=vr(t);for(const n of t.L_)e.g_(n.mutations)}async function AR(t,e,n){const r=t.L_.shift(),s=fu.from(r,e,n);await l_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ga(t)}async function RR(t,e){e&&vr(t).f_&&await async function(r,s){if(function(o){return hA(o)&&o!==U.ABORTED}(s.code)){const i=r.L_.shift();vr(r).__(),await l_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ga(r)}}(t,e),c_(t)&&u_(t)}async function Of(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Kr(n);n.k_.add(3),await Ji(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Wa(n)}async function SR(t,e){const n=ye(t);e?(n.k_.delete(2),await Wa(n)):e||(n.k_.add(2),await Ji(n),n.K_.set("Unknown"))}function Fs(t){return t.W_||(t.W_=function(n,r,s){const i=ye(n);return i.b_(),new dR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:_R.bind(null,t),mo:yR.bind(null,t),po:vR.bind(null,t),R_:ER.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Tu(t)?wu(t):t.K_.set("Unknown")):(await t.W_.stop(),a_(t))})),t.W_}function vr(t){return t.G_||(t.G_=function(n,r,s){const i=ye(n);return i.b_(),new fR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:IR.bind(null,t),po:RR.bind(null,t),p_:bR.bind(null,t),y_:AR.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Ga(t)):(await t.G_.stop(),t.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class Iu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Iu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bu(t,e){if(Un("AsyncQueue",`${e}: ${t}`),Ls(t))return new ne(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class _s{static emptySet(e){return new _s(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=si(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Vf{constructor(){this.z_=new Ke(oe.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):de():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ks{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ks(e,n,_s.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class CR{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class PR{constructor(){this.queries=Mf(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=Mf(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new ne(U.ABORTED,"Firestore shutting down"))}}function Mf(){return new Gr(t=>Ng(t),Ua)}async function Au(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new CR,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=bu(o,`Initialization of query '${os(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Su(n)}async function Ru(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kR(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&Su(n)}function DR(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Su(t){t.X_.forEach(e=>{e.next()})}var bc,xf;(xf=bc||(bc={})).na="default",xf.Cache="cache";class Cu{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==bc.Cache}}/**
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
 */class h_{constructor(e){this.key=e}}class d_{constructor(e){this.key=e}}class NR{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ae(),this.mutatedKeys=Ae(),this.Va=Og(e),this.ma=new _s(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Vf,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=$a(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;m&&_?m.data.isEqual(_.data)?S!==A&&(r.track({type:3,doc:_}),P=!0):this.ya(m,_)||(r.track({type:2,doc:_}),P=!0,(c&&this.Va(_,c)>0||u&&this.Va(_,u)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),P=!0):m&&!_&&(r.track({type:1,doc:m}),P=!0,(c||u)&&(l=!0)),P&&(_?(o=o.add(_),i=A?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(_,S){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return A(_)-A(S)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new ks(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Vf,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ae(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new d_(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new h_(r))}),n}va(e){this.da=e.ds,this.Ra=Ae();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return ks.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class OR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VR{constructor(e){this.key=e,this.Fa=!1}}class MR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Gr(l=>Ng(l),Ua),this.Oa=new Map,this.Na=new Set,this.La=new Ke(oe.comparator),this.Ba=new Map,this.ka=new gu,this.qa={},this.Qa=new Map,this.Ka=Ps.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function xR(t,e,n=!0){const r=y_(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await f_(r,e,n,!0),s}async function LR(t,e){const n=y_(t);await f_(n,e,!0,!1)}async function f_(t,e,n,r){const s=await iR(t.localStore,mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await FR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&i_(t.remoteStore,s),l}async function FR(t,e,n,r,s){t.Ua=(p,m,_)=>async function(A,P,N,V){let L=P.view.ga(N);L.ss&&(L=await kf(A.localStore,P.query,!1).then(({documents:b})=>P.view.ga(b,L)));const z=V&&V.targetChanges.get(P.targetId),Z=V&&V.targetMismatches.get(P.targetId)!=null,ae=P.view.applyChanges(L,A.isPrimaryClient,z,Z);return Ff(A,P.targetId,ae.ba),ae.snapshot}(t,p,m,_);const i=await kf(t.localStore,e,!0),o=new NR(e,i.ds),l=o.ga(i.documents),c=Qi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Ff(t,n,u.ba);const d=new OR(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function UR(t,e,n){const r=ye(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Ua(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ic(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&vu(r.remoteStore,s.targetId),Ac(r,s.targetId)}).catch(xs)):(Ac(r,s.targetId),await Ic(r.localStore,s.targetId,!0))}async function $R(t,e){const n=ye(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vu(n.remoteStore,r.targetId))}async function BR(t,e,n){const r=KR(t);try{const s=await function(o,l){const c=ye(o),u=it.now(),d=l.reduce((_,S)=>_.add(S.key),Ae());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=$n(),A=Ae();return c.hs.getEntries(_,d).next(P=>{S=P,S.forEach((N,V)=>{V.isValidDocument()||(A=A.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,S)).next(P=>{p=P;const N=[];for(const V of l){const L=oA(V,p.get(V.key).overlayedDocument);L!=null&&N.push(new Sr(V.key,L,bg(L.value.mapValue),$t.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,N,l)}).next(P=>{m=P;const N=P.applyToLocalDocumentSet(p,A);return c.documentOverlayCache.saveOverlays(_,P.batchId,N)})}).then(()=>({batchId:m.batchId,changes:Mg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ke(Re)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Yi(r,s.changes),await Ga(r.remoteStore)}catch(s){const i=bu(s,"Failed to persist write");n.reject(i)}}async function p_(t,e){const n=ye(t);try{const r=await nR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Me(o.Fa):s.removedDocuments.size>0&&(Me(o.Fa),o.Fa=!1))}),await Yi(n,r,e)}catch(r){await xs(r)}}function Lf(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ye(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(u=!0)}),u&&Su(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qR(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ke(oe.comparator);o=o.insert(i,Rt.newNoDocument(i,ge.min()));const l=Ae().add(i),c=new Ha(ge.min(),new Map,new Ke(Re),o,l);await p_(r,c),r.La=r.La.remove(i),r.Ba.delete(e),Pu(r)}else await Ic(r.localStore,e,!1).then(()=>Ac(r,e,n)).catch(xs)}async function jR(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await tR(n.localStore,e);g_(n,r,null),m_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yi(n,s)}catch(s){await xs(s)}}async function HR(t,e,n){const r=ye(t);try{const s=await function(o,l){const c=ye(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Me(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);g_(r,e,n),m_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yi(r,s)}catch(s){await xs(s)}}function m_(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function g_(t,e,n){const r=ye(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Ac(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||__(t,r)})}function __(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(vu(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Pu(t))}function Ff(t,e,n){for(const r of n)r instanceof h_?(t.ka.addReference(r.key,e),zR(t,r)):r instanceof d_?(te("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||__(t,r.key)):de()}function zR(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(te("SyncEngine","New document in limbo: "+n),t.Na.add(r),Pu(t))}function Pu(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new oe(He.fromString(e)),r=t.Ka.next();t.Ba.set(r,new VR(n)),t.La=t.La.insert(n,r),i_(t.remoteStore,new ar(mn(Fa(n.path)),r,"TargetPurposeLimboResolution",Ma.oe))}}async function Yi(t,e,n){const r=ye(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=yu.zi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const d=ye(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(u,m=>$.forEach(m.Wi,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>$.forEach(m.Gi,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Ls(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.us.get(m),S=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(S);d.us=d.us.insert(m,A)}}}(r.localStore,i))}async function WR(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await t_(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new ne(U.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yi(n,r.Ts)}}function GR(t,e){const n=ye(t),r=n.Ba.get(e);if(r&&r.Fa)return Ae().add(r.key);{let s=Ae();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function y_(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=p_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qR.bind(null,e),e.Ma.R_=kR.bind(null,e.eventManager),e.Ma.Wa=DR.bind(null,e.eventManager),e}function KR(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HR.bind(null,e),e}class da{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=za(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return eR(this.persistence,new XA,e.initialUser,this.serializer)}ja(e){return new e_(_u.ei,this.serializer)}za(e){return new aR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}da.provider={build:()=>new da};class QR extends da{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Me(this.persistence.referenceDelegate instanceof ua);const r=this.persistence.referenceDelegate.garbageCollector;return new LA(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new e_(r=>ua.ei(r,n),this.serializer)}}class Rc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WR.bind(null,this.syncEngine),await SR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PR}()}createDatastore(e){const n=za(e.databaseInfo.databaseId),r=function(i){return new hR(i)}(e.databaseInfo);return function(i,o,l,c){return new pR(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new gR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Lf(this.syncEngine,n,0),function(){return Nf.p()?new Nf:new lR}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new MR(s,i,o,l,c,u);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);te("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Ji(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Rc.provider={build:()=>new Rc};/**
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
 */class ku{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class JR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=wg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $l(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await t_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Uf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YR(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Of(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Of(e.remoteStore,s)),t._onlineComponents=e}async function YR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await $l(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;As("Error using user provided cache. Falling back to memory cache: "+n),await $l(t,new da)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await $l(t,new QR(void 0));return t._offlineComponents}async function v_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Uf(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Uf(t,new Rc))),t._onlineComponents}function XR(t){return v_(t).then(e=>e.syncEngine)}async function fa(t){const e=await v_(t),n=e.eventManager;return n.onListen=xR.bind(null,e.syncEngine),n.onUnlisten=UR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=LR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$R.bind(null,e.syncEngine),n}function ZR(t,e,n={}){const r=new Mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new ku({next:m=>{d.eu(),o.enqueueAndForget(()=>Ru(i,p));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new ne(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new ne(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Cu(Fa(l.path),d,{includeMetadataChanges:!0,ua:!0});return Au(i,p)}(await fa(t),t.asyncQueue,e,n,r)),r.promise}function eS(t,e,n={}){const r=new Mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new ku({next:m=>{d.eu(),o.enqueueAndForget(()=>Ru(i,p)),m.fromCache&&c.source==="server"?u.reject(new ne(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Cu(l,d,{includeMetadataChanges:!0,ua:!0});return Au(i,p)}(await fa(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function E_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const $f=new Map;/**
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
 */function w_(t,e,n){if(!n)throw new ne(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tS(t,e,n,r){if(e===!0&&r===!0)throw new ne(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bf(t){if(!oe.isDocumentKey(t))throw new ne(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qf(t){if(oe.isDocumentKey(t))throw new ne(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ka(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ka(t);throw new ne(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class jf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=E_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new db;switch(r.type){case"firstParty":return new gb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$f.get(n);r&&(te("ComponentProvider","Removing Datastore"),$f.delete(n),r.terminate())}(this),Promise.resolve()}}function nS(t,e,n,r={}){var s;const i=(t=Kt(t,Qa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&As("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=It.MOCK_USER;else{l=Pw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ne(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new It(u)}t._authCredentials=new fb(new Eg(l,c))}}/**
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
 */class Qr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qr(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class fr extends Qr{constructor(e,n,r){super(e,n,Fa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new oe(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function wn(t,e,...n){if(t=ct(t),w_("collection","path",e),t instanceof Qa){const r=He.fromString(e,...n);return qf(r),new fr(t,null,r)}{if(!(t instanceof Mt||t instanceof fr))throw new ne(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return qf(r),new fr(t.firestore,null,r)}}function Ct(t,e,...n){if(t=ct(t),arguments.length===1&&(e=wg.newId()),w_("doc","path",e),t instanceof Qa){const r=He.fromString(e,...n);return Bf(r),new Mt(t,null,new oe(r))}{if(!(t instanceof Mt||t instanceof fr))throw new ne(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return Bf(r),new Mt(t.firestore,t instanceof fr?t.converter:null,new oe(r))}}/**
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
 */class Hf{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new r_(this,"async_queue_retry"),this.fu=()=>{const r=Ul();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Ul();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Ul();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Mn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ls(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Iu.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&de()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function zf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Bn extends Qa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Hf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hf(e),this._firestoreClient=void 0,await e}}}function Du(t,e){const n=typeof t=="object"?t:Vm(),r=typeof t=="string"?t:"(default)",s=Qc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Sw("firestore");i&&nS(s,...i)}return s}function Xi(t){if(t._terminated)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rS(t),t._firestoreClient}function rS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new Db(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,E_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new JR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ds(_t.fromBase64String(e))}catch(n){throw new ne(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ds(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Zi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ja{constructor(e){this._methodName=e}}/**
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
 */class Nu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
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
 */class Ou{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const sS=/^__.*__$/;class iS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ki(e,this.data,n,this.fieldTransforms)}}class T_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function I_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Vu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Vu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return pa(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(I_(this.Mu)&&sS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class oS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||za(e)}$u(e,n,r,s=!1){return new Vu({Mu:e,methodName:n,Ku:r,path:gt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ya(t){const e=t._freezeSettings(),n=za(t._databaseId);return new oS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function b_(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);xu("Data must be an object, but it was:",o,r);const l=S_(r,o);let c,u;if(i.merge)c=new Wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Sc(e,p,n);if(!o.contains(m))throw new ne(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);P_(d,m)||d.push(m)}c=new Wt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new iS(new Ut(l),c,u)}class Xa extends Ja{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xa}}class Mu extends Ja{_toFieldTransform(e){return new nA(e.path,new Vi)}isEqual(e){return e instanceof Mu}}function A_(t,e,n,r){const s=t.$u(1,e,n);xu("Data must be an object, but it was:",s,r);const i=[],o=Ut.empty();Rr(r,(c,u)=>{const d=Lu(e,c,n);u=ct(u);const p=s.Bu(d);if(u instanceof Xa)i.push(d);else{const m=eo(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Wt(i);return new T_(o,l,s.fieldTransforms)}function R_(t,e,n,r,s,i){const o=t.$u(1,e,n),l=[Sc(e,r,n)],c=[s];if(i.length%2!=0)throw new ne(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Sc(e,i[m])),c.push(i[m+1]);const u=[],d=Ut.empty();for(let m=l.length-1;m>=0;--m)if(!P_(u,l[m])){const _=l[m];let S=c[m];S=ct(S);const A=o.Bu(_);if(S instanceof Xa)u.push(_);else{const P=eo(S,A);P!=null&&(u.push(_),d.set(_,P))}}const p=new Wt(u);return new T_(d,p,o.fieldTransforms)}function aS(t,e,n,r=!1){return eo(n,t.$u(r?4:3,e))}function eo(t,e){if(C_(t=ct(t)))return xu("Unsupported field value:",e,t),S_(t,e);if(t instanceof Ja)return function(r,s){if(!I_(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=eo(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Zb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=it.fromDate(r);return{timestampValue:ca(s.serializer,i)}}if(r instanceof it){const i=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ca(s.serializer,i)}}if(r instanceof Nu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ds)return{bytesValue:Gg(s.serializer,r._byteString)};if(r instanceof Mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ou)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return du(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Ka(r)}`)}(t,e)}function S_(t,e){const n={};return Tg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,s)=>{const i=eo(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function C_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof Nu||t instanceof Ds||t instanceof Mt||t instanceof Ja||t instanceof Ou)}function xu(t,e,n){if(!C_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ka(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function Sc(t,e,n){if((e=ct(e))instanceof Zi)return e._internalPath;if(typeof e=="string")return Lu(t,e);throw pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const lS=new RegExp("[~\\*/\\[\\]]");function Lu(t,e,n){if(e.search(lS)>=0)throw pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zi(...e.split("."))._internalPath}catch{throw pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(U.INVALID_ARGUMENT,l+t+c)}function P_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class k_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cS extends k_{data(){return super.data()}}function Fu(t,e){return typeof e=="string"?Lu(t,e):e instanceof Zi?e._internalPath:e._delegate._internalPath}/**
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
 */function D_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uu{}class uS extends Uu{}function Er(t,e,...n){let r=[];e instanceof Uu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof $u).length,l=i.filter(c=>c instanceof Za).length;if(o>1||o>0&&l>0)throw new ne(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Za extends uS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Za(e,n,r)}_apply(e){const n=this._parse(e);return N_(e._query,n),new Qr(e.firestore,e.converter,_c(e._query,n))}_parse(e){const n=Ya(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ne(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Gf(p,d);const _=[];for(const S of p)_.push(Wf(c,i,S));m={arrayValue:{values:_}}}else m=Wf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Gf(p,d),m=aS(l,o,p,d==="in"||d==="not-in");return tt.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Gt(t,e,n){const r=e,s=Fu("where",t);return Za._create(s,r,n)}class $u extends Uu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $u(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:an.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)N_(o,c),o=_c(o,c)}(e._query,n),new Qr(e.firestore,e.converter,_c(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Wf(t,e,n){if(typeof(n=ct(n))=="string"){if(n==="")throw new ne(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dg(e)&&n.indexOf("/")!==-1)throw new ne(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(He.fromString(n));if(!oe.isDocumentKey(r))throw new ne(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return df(t,new oe(r))}if(n instanceof Mt)return df(t,n._key);throw new ne(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ka(n)}.`)}function Gf(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function N_(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class hS{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new Ou(i)}convertGeoPoint(e){return new Nu(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=La(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){const n=gr(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Me(Zg(r));const s=new Ni(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||Un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function O_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class V_ extends k_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class jo extends V_{data(e={}){return super.data(e)}}class M_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new oi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new jo(this._firestore,this._userDataWriter,r.key,r,new oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new jo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new oi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new jo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new oi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:dS(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
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
 */function x_(t){t=Kt(t,Mt);const e=Kt(t.firestore,Bn);return ZR(Xi(e),t._key).then(n=>F_(e,t,n))}class Bu extends hS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function wr(t){t=Kt(t,Qr);const e=Kt(t.firestore,Bn),n=Xi(e),r=new Bu(e);return D_(t._query),eS(n,t._query).then(s=>new M_(e,r,t,s))}function qu(t,e,n,...r){t=Kt(t,Mt);const s=Kt(t.firestore,Bn),i=Ya(s);let o;return o=typeof(e=ct(e))=="string"||e instanceof Zi?R_(i,"updateDoc",t._key,e,n,r):A_(i,"updateDoc",t._key,e),el(s,[o.toMutation(t._key,$t.exists(!0))])}function fS(t){return el(Kt(t.firestore,Bn),[new ja(t._key,$t.none())])}function L_(t,e){const n=Kt(t.firestore,Bn),r=Ct(t),s=O_(t.converter,e);return el(n,[b_(Ya(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function pS(t,...e){var n,r,s;t=ct(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||zf(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(zf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof Mt)u=Kt(t.firestore,Bn),d=Fa(t._key.path),c={next:p=>{e[o]&&e[o](F_(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Kt(t,Qr);u=Kt(p.firestore,Bn),d=p._query;const m=new Bu(u);c={next:_=>{e[o]&&e[o](new M_(u,m,p,_))},error:e[o+1],complete:e[o+2]},D_(t._query)}return function(m,_,S,A){const P=new ku(A),N=new Cu(_,P,S);return m.asyncQueue.enqueueAndForget(async()=>Au(await fa(m),N)),()=>{P.eu(),m.asyncQueue.enqueueAndForget(async()=>Ru(await fa(m),N))}}(Xi(u),d,l,c)}function el(t,e){return function(r,s){const i=new Mn;return r.asyncQueue.enqueueAndForget(async()=>BR(await XR(r),s,i)),i.promise}(Xi(t),e)}function F_(t,e,n){const r=n.docs.get(e._key),s=new Bu(t);return new V_(t,s,e._key,r,new oi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class mS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ya(e)}set(e,n,r){this._verifyNotCommitted();const s=Bl(e,this._firestore),i=O_(s.converter,n,r),o=b_(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,$t.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Bl(e,this._firestore);let o;return o=typeof(n=ct(n))=="string"||n instanceof Zi?R_(this._dataReader,"WriteBatch.update",i._key,n,r,s):A_(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,$t.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Bl(e,this._firestore);return this._mutations=this._mutations.concat(new ja(n._key,$t.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ne(U.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Bl(t,e){if((t=ct(t)).firestore!==e)throw new ne(U.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function ma(){return new Mu("serverTimestamp")}/**
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
 */function to(t){return Xi(t=Kt(t,Bn)),new mS(t,e=>el(t,e))}(function(e,n=!0){(function(s){Ms=s})(Os),Is(new Hr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Bn(new pb(r.getProvider("auth-internal")),new yb(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),dr(of,"4.7.5",e),dr(of,"4.7.5","esm2017")})();const xn=Du(Ze),U_=wn(xn,"relays"),gS=wn(xn,"pinConfigs");async function _S(){const e=ut(Ze).currentUser;if(!e)throw new Error("User is not authenticated");const n=wn(xn,"relays"),r=Er(n,Gt("uid","==",e.uid));return(await wr(r)).docs.map(i=>{const o=i.data();return{id:i.id,uid:o.uid,name:o.name,boardId:o.boardId,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0}})}async function yS(t,e){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");const s=Ct(xn,"relays",t);await qu(s,{state:e})}async function vS(t,e,n){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");const i=Ct(xn,"relays",t);await qu(i,{name:e,maxOnTime_s:n})}async function ES(t){const n=ut(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await L_(U_,r)).id,...r}}async function wS(t){const n=ut(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r=to(xn),s=Ct(xn,"relays",t),i=Er(gS,Gt("relayId","==",t),Gt("uid","==",n.uid)),o=await wr(i);if(!o.empty){const l=o.docs[0],c=Ct(xn,"pinConfigs",l.id);r.update(c,{relayId:null,relayName:null,mode:"input"})}r.delete(s),await r.commit()}async function TS(t){const n=ut(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r=Er(U_,Gt("uid","==",n.uid),Gt("name","==",t));return(await wr(r)).empty}function IS(t,e){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");const s=Ct(xn,"relays",t);return pS(s,i=>{if(i.exists()){const o=i.data(),l={id:i.id,uid:o.uid,name:o.name,boardId:o.boardId,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0};e(l)}else console.error("Relay not found")})}const Cr=Bi("relay",()=>{const t=re([]),e=re(),n=re(!1),r=re(null),s=re({}),i=async()=>{n.value=!0,r.value=null;try{t.value=await _S(),t.value.forEach(A=>{_(A.id)})}catch(A){r.value="Failed to load relays",console.error(A)}finally{n.value=!1}},o=async(A,P,N)=>{try{await vS(A,P,N);const V=t.value.find(L=>L.id===A);V&&(V.name=P,V.maxOnTime_s=N,e.value.id===V.id&&(e.value=V))}catch(V){console.error("Failed to update relay config:",V)}},l=async(A,P)=>{try{await yS(A,P);const N=t.value.find(V=>V.id===A);N&&(N.state=P)}catch(N){console.error("Failed to update relay state:",N)}},c=async A=>{try{const P=await ES(A);return t.value.push(P),_(P.id),P}catch(P){console.error("Failed to add relay:",P)}},u=async A=>{try{S(A),await wS(A),t.value=t.value.filter(P=>P.id!==A),e.value.id===A&&(e.value=null)}catch(P){console.error("Failed to delete relay:",P)}},d=async A=>{try{return await TS(A)}catch(P){return console.error("Failed to check relay name uniqueness:",P),!1}};function p(A){return m(A.maxOnTime_s?A.maxOnTime_s:0)}function m(A){if(isNaN(A)||A<0)return"00:00:00";const P=Math.floor(A/3600),N=Math.floor(A%3600/60),V=A%60,L=String(P).padStart(2,"0"),z=String(N).padStart(2,"0"),Z=String(V).padStart(2,"0");return`${L}:${z}:${Z}`}const _=A=>{S(A),s.value[A]=IS(A,P=>{const N=t.value.findIndex(V=>V.id===A);N!==-1&&(t.value[N]=P)})},S=A=>{s.value[A]&&(s.value[A](),delete s.value[A])};return jc(()=>{Object.keys(s.value).forEach(A=>{S(A)})}),{relays:t,selectedRelay:e,loading:n,error:r,loadRelays:i,updateRelayConfig:o,updateRelayState:l,addRelay:c,isRelayNameUnique:d,deleteRelay:u,getMaxOnTime:p,secondsToHHMMSS:m}}),Us=Bi("page",()=>{const t=re("relays"),e=re(),n={home:"Relay Hub",boards:"Boards",board:"Board",relays:"Relay Control",relay:"Relay",schedules:"Task Schedules"},r=o=>{t.value=o},s=Ue(()=>n[t.value]||"Unknown Page");return{currentPage:t,currentPageTitle:s,navigateBackPage:e,setPage:r,setNavigateBackPage:o=>{e.value=o}}}),bS=Ne({components:{ToggleButton:hb},props:{relay:{type:Object,required:!0}},setup(t){const e=Us(),n=Ns(),r=Cr(),s=re(0);let i;const o=re(t.relay.turnedOnAt),l=re(!1);Ui(async()=>{await u()}),Np(()=>{clearTimeout(i)});const c=Ue(()=>{let A=t.relay.name;return t.relay.maxOnTime_s&&t.relay.maxOnTime_s>0&&(t.relay.state?A+=" - "+r.secondsToHHMMSS(s.value):A+=" - "+r.getMaxOnTime(t.relay)),A});async function u(){t.relay.maxOnTime_s!==0&&(s.value=p(),s.value!==0&&t.relay.state&&m())}async function d(A){A&&t.relay.maxOnTime_s&&(s.value=t.relay.maxOnTime_s),A?(o.value=t.relay.turnedOnAt,l.value=!0):l.value=!1,await r.updateRelayState(t.relay.id,A),!(!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0)&&(A||(clearTimeout(i),s.value=0))}function p(){if(!t.relay.turnedOnAt||!t.relay.maxOnTime_s)return 0;const A=t.relay.turnedOnAt.getTime()+t.relay.maxOnTime_s*1e3;return Math.max(0,Math.floor((A-Date.now())/1e3))}function m(){!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0||(clearTimeout(i),i=setTimeout(async()=>{s.value--,s.value!==0&&m()},1e3))}function _(){!o.value||!t.relay.turnedOnAt||o.value>=t.relay.turnedOnAt||(l.value=!1,m())}function S(){r.selectedRelay=t.relay,e.setNavigateBackPage("relays"),n.push({name:"relay"})}return fn(()=>t.relay.turnedOnAt,_),{displayName:c,isBlocked:l,onRelayClicked:S,handleToggle:d}}}),AS={class:"relay"};function RS(t,e,n,r,s,i){const o=_e("toggle-button");return j(),Q("div",AS,[q("div",{class:"name",onClick:e[0]||(e[0]=(...l)=>t.onRelayClicked&&t.onRelayClicked(...l))},we(t.displayName),1),pe(o,{modelValue:t.$props.relay.state,isBlocked:t.isBlocked,"onUpdate:modelValue":t.handleToggle},null,8,["modelValue","isBlocked","onUpdate:modelValue"])])}const $_=xe(bS,[["render",RS],["__scopeId","data-v-12c7baca"]]),SS=Ne({components:{ButtonDefault:zn},emits:["isDone"],props:{allowAdvancedSettings:{type:Boolean,default:!1},existingRelay:{type:Object,default:null}},setup(t,e){const n=Cr(),r=re(""),s=re(""),i=re("");Ui(()=>{t.existingRelay&&(r.value=t.existingRelay.name,s.value=n.getMaxOnTime(t.existingRelay))});async function o(){if(!await c()||!u())return;const p=d();t.existingRelay?await n.updateRelayConfig(t.existingRelay.id,r.value.trim(),p):await n.addRelay({name:r.value.trim(),state:!1,maxOnTime_s:p}),r.value="",e.emit("isDone")}function l(){e.emit("isDone")}async function c(){return r.value.trim().length<2?(i.value="Relay name must be at least 2 characters long.",!1):t.existingRelay&&t.existingRelay.name===r.value.trim()?!0:await n.isRelayNameUnique(r.value.trim())?(i.value="",!0):(i.value="Relay name already exists.",!1)}function u(){if(!t.allowAdvancedSettings)return!0;const p=s.value.trim();if(p==="")return!0;const _=/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(p);return _||(i.value="Max on time must be in the format HH:MM:SS."),_}function d(){if(!t.allowAdvancedSettings)return 0;const p=s.value.trim(),[m,_,S]=p.split(":").map(Number);return m*3600+_*60+S}return{newRelayName:r,newMaxOnTime:s,nameError:i,saveRelay:o,abortChanges:l}}}),CS={class:"relay-editable"},PS={key:0,class:"header"},kS={key:1,class:"max-on-time"},DS={class:"action-buttons"},NS={key:2,class:"name-error"};function OS(t,e,n,r,s,i){const o=_e("button-default");return j(),Q("div",CS,[t.$props.allowAdvancedSettings?(j(),Q("div",PS,"Name")):Te("",!0),ys(q("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.newRelayName=l),type:"text",placeholder:"Relay name",class:"relay-input"},null,512),[[Es,t.newRelayName]]),t.$props.allowAdvancedSettings?(j(),Q("div",kS,[e[2]||(e[2]=q("div",{class:"header"},"Max on time",-1)),ys(q("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.newMaxOnTime=l),type:"text",placeholder:"HH:MM:SS or keep empty",class:"max-on-time-input"},null,512),[[Es,t.newMaxOnTime]])])):Te("",!0),q("div",DS,[pe(o,{class:"button-save",text:"Save",onClick:t.saveRelay},null,8,["onClick"]),pe(o,{class:"button-cancel",text:"Cancel",onClick:t.abortChanges},null,8,["onClick"])]),t.nameError?(j(),Q("div",NS,we(t.nameError),1)):Te("",!0)])}const VS=xe(SS,[["render",OS],["__scopeId","data-v-476b92f7"]]),St=Du(Ze),MS=wn(St,"boards"),xS=wn(St,"pinConfigs");async function LS(){const e=ut(Ze).currentUser;if(!e)throw new Error("User is not authenticated");const n=Er(MS,Gt("uid","==",e.uid));return(await wr(n)).docs.map(s=>{const i=s.data();return{id:s.id,uid:i.uid,model:i.model,name:i.name,updatedAt:i.updatedAt.toDate(),createdAt:i.createdAt.toDate()}})}async function FS(t){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");const r=Ct(St,"boards",t),s=await x_(r);if(!s.exists())throw new Error(`Board with ID ${t} does not exist`);const i=s.data();return{id:t,uid:i.uid,name:i.name,model:i.model,createdAt:i.createdAt.toDate(),updatedAt:i.updatedAt.toDate()}}async function US(t){const n=ut(Ze).currentUser;if(!n)throw new Error("User is not authenticated");try{const r=Er(xS,Gt("uid","==",n.uid),Gt("boardId","==",t));return(await wr(r)).docs.map(i=>{const o=i.data();return{id:i.id,uid:o.uid,mode:o.mode,boardId:o.boardId,pinNumber:o.pinNumber,relayId:o.relayId,relayName:o.relayName}})}catch(r){throw console.error("Error fetching pinConfigs:",r),r}}async function $S(t,e){const n=to(St),r=Ct(St,"boards",t);n.update(r,{name:e,updatedAt:ma()}),await n.commit()}async function BS(t,e,n){const s=ut(Ze).currentUser;if(!s)throw new Error("User is not authenticated");if(n<=0)throw new Error("Number of pins must be greater than 0");const i=to(St),o=Ct(wn(St,"boards")),l={uid:s.uid,name:t,model:e,createdAt:ma(),updatedAt:ma()};i.set(o,l);for(let d=1;d<=n;d++){const p=Ct(wn(St,"pinConfigs")),m={uid:s.uid,pinNumber:d,mode:"input",boardId:o.id};i.set(p,m)}await i.commit();const c=await x_(o);if(!c.exists())throw new Error("Failed to retrieve the created board");const u=c.data();return{id:o.id,uid:u.uid,name:u.name,model:u.model,createdAt:u.createdAt.toDate(),updatedAt:u.updatedAt.toDate()}}async function qS(t,e){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");if(!t.id)throw new Error("PinConfig ID is missing");if(!t.boardId)throw new Error("Board ID is missing in PinConfig");const s=Ct(St,"pinConfigs",t.id),i=Ct(St,"boards",t.boardId),o=to(St);o.update(s,{mode:t.mode,relayName:t.relayName??null,relayId:t.relayId??null}),e.forEach(l=>{if(!l.id)throw new Error("Relay ID is missing");const c=Ct(St,"relays",l.id);o.update(c,{boardId:l.boardId})}),o.update(i,{updatedAt:ma()}),await o.commit()}async function jS(t){const n=ut(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r=Ct(St,"boards",t),s=Er(wn(St,"pinConfigs"),Gt("boardId","==",t),Gt("uid","==",n.uid)),i=Er(wn(St,"relays"),Gt("boardId","==",t),Gt("uid","==",n.uid)),o=to(St);try{(await wr(s)).forEach(u=>{o.delete(u.ref)}),(await wr(i)).forEach(u=>{o.update(u.ref,{boardId:null})}),o.delete(r),await o.commit()}catch(l){throw console.error("Error deleting board and associated data:",l),new Error("Failed to delete the board.")}}const no=Bi("board",()=>{const t=re([]),e=re(null),n=re([]),r=re(!1),s=re(!1),i=re(null),o=Cr(),l=async()=>{try{r.value=!0,t.value=await LS()}catch(S){console.error("Failed to fetch boards:",S),i.value="Unable to load boards."}finally{r.value=!1}},c=async(S,A)=>{try{const P=t.value.findIndex(V=>V.id===S);if(P===-1)return;const N=t.value[P];await $S(S,A),t.value[P]={...N,name:A},e.value=t.value[P]}catch(P){console.error("Failed to update board:",P),i.value="Unable to update board."}},u=async(S,A,P)=>{try{P<=0&&console.error("Number of pins must be greater than 0");const N=await BS(S,A,P);t.value.push(N),console.log("Board added successfully with pins:",N)}catch(N){console.error("Failed to add new board:",N),i.value="Unable to add new board."}},d=async()=>{try{if(!e.value)return;s.value=!0;const S=e.value.id;if(e.value){const A=await US(S);n.value=A.map(P=>{const N=o.relays.find(V=>V.id===P.relayId);return{...P,relayName:N?N.name:""}}).sort((P,N)=>P.pinNumber-N.pinNumber)}}catch(S){console.error("Failed to load board details:",S),i.value="Unable to load board details."}finally{s.value=!1}},p=()=>{e.value=null,n.value=[]};return{boards:t,selectedBoard:e,pinConfigs:n,loadingBoards:r,loadingPinConfigs:s,error:i,loadBoards:l,loadBoardDetails:d,addBoardWithPins:u,updatePinConfigAndRelays:async(S,A)=>{var P;try{await qS(S,A);const N=n.value.findIndex(L=>L.id===S.id);N!==-1&&(n.value[N]={...S});const V=t.value.findIndex(L=>L.id===S.boardId);if(V!==-1){const L=await FS(S.boardId);t.value[V]={...L},((P=e.value)==null?void 0:P.id)===S.boardId&&(e.value={...L})}}catch(N){console.error("Failed to update PinConfig mode:",N),i.value="Unable to update PinConfig."}},clearSelectedBoard:p,updateBoard:c,deleteBoard:async S=>{var A;try{await jS(S);const P=t.value.findIndex(N=>N.id===S);P!==-1&&t.value.splice(P,1),((A=e.value)==null?void 0:A.id)===S&&p()}catch(P){console.error("Failed to delete board:",P)}}}}),HS=Ne({components:{ButtonDefault:zn},emits:["relayAdded","cancel"],props:{relay:{type:Object,default:null}},setup(t,{emit:e}){const n=no(),r=Cr(),s=re(!1),i=re(!0),o=re(""),l=re(""),c=re(null),u=re(null),d=re([]),p=re([]),m=re(!1),_=re(!1),S=re();Ui(()=>{t.relay&&(o.value=t.relay.name,s.value=!0,S.value=r.getMaxOnTime(t.relay).trim(),l.value=S.value),d.value=L()});const A=Ue(()=>!s.value||!i.value?!1:t.relay?o.value.trim()!==t.relay.name.trim()||l.value.trim()!==S.value:c.value?!!u.value:!0);async function P(){if(!A.value)return;const R=N();try{if(t.relay)await r.updateRelayConfig(t.relay.id,o.value.trim(),R);else{const C=await r.addRelay({name:o.value.trim(),state:!1,maxOnTime_s:R});c.value&&(C.boardId=c.value.id,u.value.relayId=C.id,u.value.relayName=C.name,await n.updatePinConfigAndRelays(u.value,[C]))}}finally{e("relayAdded")}}function N(){if(l.value.trim()==="")return 0;const R=l.value.trim(),[C,w,rt]=R.split(":").map(Number);return C*3600+w*60+rt}function V(){e("cancel")}function L(){const R=[{value:null,label:"None"}];return R.push(...n.boards.map(C=>({value:C,label:C.name})).sort((C,w)=>C.value.name.localeCompare(w.value.name))),R}function z(){m.value=!0,_.value=!1}async function Z(){await n.loadBoards(),_.value=!0}async function ae(R){if(c.value=R,u.value=null,c.value===null){n.clearSelectedBoard();return}n.selectedBoard=c.value,await n.loadBoardDetails(),p.value=n.pinConfigs.filter(C=>!C.relayId).map(C=>({value:C,label:C.pinNumber}))}async function b(){s.value=await v()}async function y(){i.value=I()}async function v(){return o.value.trim().length<2?!1:t.relay&&t.relay.name===o.value.trim()?!0:await r.isRelayNameUnique(o.value.trim())}function I(){const R=l.value.trim();return R===""?!0:/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(R)}return fn(()=>o.value,b),fn(()=>l.value,y),{name:o,maxOnTime:l,selectedBoard:c,selectedPin:u,canSave:A,showAdvancedSettings:m,showMoreAdvancedSettings:_,availableBoards:d,availablePins:p,onSelectBoard:ae,onShowAdvancedSettings:z,onShowMoreAdvancedSettings:Z,onAdd:P,onCancel:V}}}),zS={class:"popup-add-relay"},WS={class:"popup"},GS={key:2},KS={key:2},QS={class:"options"},JS=["onClick"],YS={key:0},XS={class:"options"},ZS=["onClick"],eC={key:0},tC={key:1,class:"options"},nC={class:"buttons"};function rC(t,e,n,r,s,i){const o=_e("button-default");return j(),Q("div",zS,[q("div",WS,[q("h3",null,we(t.$props.relay?"Edit Relay":"Add New Relay"),1),e[11]||(e[11]=q("label",{for:"name"},"Name:",-1)),ys(q("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.name=l),type:"text",placeholder:"Enter relay name"},null,512),[[Es,t.name]]),!t.$props.relay&&t.showAdvancedSettings?(j(),Q("label",{key:0,class:"settings-toggle",onClick:e[1]||(e[1]=l=>t.showAdvancedSettings=!1)},"Hide advanced settings")):t.$props.relay?Te("",!0):(j(),Q("label",{key:1,class:"settings-toggle",onClick:e[2]||(e[2]=(...l)=>t.onShowAdvancedSettings&&t.onShowAdvancedSettings(...l))},"Show advanced settings")),t.showAdvancedSettings||t.$props.relay?(j(),Q("div",GS,[e[10]||(e[10]=q("label",null,"Max on time:",-1)),ys(q("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>t.maxOnTime=l),type:"text",placeholder:"HH:MM:SS or keep empty"},null,512),[[Es,t.maxOnTime]]),!t.$props.relay&&t.showAdvancedSettings&&t.showMoreAdvancedSettings?(j(),Q("label",{key:0,class:"settings-toggle",onClick:e[4]||(e[4]=l=>t.showMoreAdvancedSettings=!1)},"Hide more advanced settings")):!t.$props.relay&&t.showAdvancedSettings?(j(),Q("label",{key:1,class:"settings-toggle",onClick:e[5]||(e[5]=(...l)=>t.onShowMoreAdvancedSettings&&t.onShowMoreAdvancedSettings(...l))},"Show more advanced settings")):Te("",!0),!t.$props.relay&&t.showMoreAdvancedSettings?(j(),Q("div",KS,[e[9]||(e[9]=q("label",null,"Board:",-1)),q("div",QS,[(j(!0),Q(Je,null,yn(t.availableBoards,l=>{var c;return j(),Q("div",{class:"option",key:(c=l.value)==null?void 0:c.id},[q("div",{class:st(["option-text",{"is-checked":t.selectedBoard===l.value}]),onClick:u=>t.onSelectBoard(l.value)},we(l.label),11,JS)])}),128))]),t.selectedBoard?(j(),Q("div",YS,[e[8]||(e[8]=q("label",null,"Pin:",-1)),q("div",XS,[(j(!0),Q(Je,null,yn(t.availablePins,l=>{var c;return j(),Q("div",{class:"option",key:(c=l.value)==null?void 0:c.id},[q("div",{class:st(["option-text",{"is-checked":t.selectedPin===l.value}]),onClick:u=>t.selectedPin=l.value},we(l.value.pinNumber),11,ZS)])}),128))]),t.selectedPin?(j(),Q("label",eC,"Pin mode:")):Te("",!0),t.selectedPin?(j(),Q("div",tC,[(j(),Q("div",{class:"option",key:t.selectedPin.id+"in"},[q("div",{class:st(["option-text",{"is-checked":t.selectedPin.mode==="input"}]),onClick:e[6]||(e[6]=l=>t.selectedPin.mode="input")}," Input ",2)])),(j(),Q("div",{class:"option",key:t.selectedPin.id+"out"},[q("div",{class:st(["option-text",{"is-checked":t.selectedPin.mode==="output"}]),onClick:e[7]||(e[7]=l=>t.selectedPin.mode="output")}," Output ",2)]))])):Te("",!0)])):Te("",!0)])):Te("",!0)])):Te("",!0),q("div",nC,[pe(o,{class:st({"can-save":t.canSave}),text:"Save",onClick:t.onAdd},null,8,["class","onClick"]),pe(o,{text:"Cancel",onClick:t.onCancel},null,8,["onClick"])])])])}const B_=xe(HS,[["render",rC],["__scopeId","data-v-ba97f4a2"]]),sC=Ne({components:{PopupAddRelay:B_,RelayEditable:VS,ButtonDefault:zn,Relay:$_,Spinner:ka},emits:["requestScrollToBottom"],setup(t,e){const n=Cr(),r=re(!1),s=re(""),i=re([]),o=re(!1),l=re(""),c=re([]);Ar(async()=>{o.value=!1,await n.loadRelays(),c.value=n.relays,l.value=""});function u(){const p=l.value.trim().toLowerCase();p.length===0?c.value=n.relays:c.value=n.relays.filter(m=>m.name.toLowerCase().includes(p))}function d(){l.value="",u(),o.value=!1}return fn(()=>l.value,u),{ref_relayItems:i,relayStore:n,requestAddNewRelay:o,isAddingNewRelay:r,editableRelayId:s,filterText:l,currentRelays:c,onRelayAdded:d}}}),iC={class:"relays"},oC={key:1};function aC(t,e,n,r,s,i){const o=_e("spinner"),l=_e("relay"),c=_e("button-default"),u=_e("popup-add-relay");return j(),Q("div",iC,[t.relayStore.loading?(j(),je(o,{key:0,"spinner-size":"20px","with-text":!0})):Te("",!0),!t.relayStore.loading&&!t.relayStore.error?(j(),Q("div",oC,[ys(q("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.filterText=d),type:"text",placeholder:"Filter",class:"filter"},null,512),[[Es,t.filterText]]),(j(!0),Q(Je,null,yn(t.currentRelays,d=>(j(),je(l,{key:d.id,relay:d},null,8,["relay"]))),128)),pe(c,{text:"Add new relay",onClick:e[1]||(e[1]=d=>t.requestAddNewRelay=!0)})])):Te("",!0),t.requestAddNewRelay?(j(),je(u,{key:2,onRelayAdded:t.onRelayAdded,onCancel:e[2]||(e[2]=d=>t.requestAddNewRelay=!1)},null,8,["onRelayAdded"])):Te("",!0)])}const q_=xe(sC,[["render",aC],["__scopeId","data-v-d07912bb"]]),ju=Du(Ze),j_=wn(ju,"schedules");async function lC(){const e=ut(Ze).currentUser;if(!e)throw new Error("User is not authenticated");const n=Er(j_,Gt("uid","==",e.uid));return(await wr(n)).docs.map(s=>{const i=s.data();return{id:s.id,uid:i.uid,name:i.name,timeStart:i.timeStart,duration:i.duration,relays:i.relays||[],days:i.days||[]}})}async function cC(t){const n=ut(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await L_(j_,r)).id,...r}}async function uC(t,e){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");const s=Ct(ju,"schedules",t);await qu(s,e)}async function hC(t){if(!ut(Ze).currentUser)throw new Error("User is not authenticated");const r=Ct(ju,"schedules",t);await fS(r)}const dC=Bi("schedule",()=>{const t=re([]),e=re(!1),n=re(null);return{schedules:t,loading:e,error:n,loadSchedules:async()=>{e.value=!0,n.value=null;try{t.value=await lC()}catch(l){n.value="Failed to load schedules",console.error(l)}finally{e.value=!1}},addSchedule:async l=>{try{const c=await cC(l);t.value.push(c)}catch(c){console.error("Failed to add schedule:",c)}},updateSchedule:async(l,c)=>{try{await uC(l,c);const u=t.value.find(d=>d.id===l);u&&Object.assign(u,c)}catch(u){console.error("Failed to update schedule:",u)}},deleteSchedule:async l=>{try{await hC(l),t.value=t.value.filter(c=>c.id!==l)}catch(c){console.error("Failed to delete schedule:",c)}}}}),fC=Ne({props:{schedule:{type:Object,required:!0}},setup(t){const e=["Mo","Tu","We","Th","Fr","Sa","Su"],n=Ue(()=>{const[s,i,o]=t.schedule.timeStart.split(":").map(Number),[l,c,u]=t.schedule.duration.split(":").map(Number),d=new Date;return d.setHours(s+l),d.setMinutes(i+c),d.setSeconds(o+u),`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`}),r=Ue(()=>t.schedule.days.map(s=>s.slice(0,2)));return{endTime:n,allDays:e,selectedDays:r}}}),pC={class:"schedule-item"},mC={class:"schedule-name"},gC={class:"times"},_C={class:"schedule-time"},yC={class:"duration"},vC={class:"schedule-days"};function EC(t,e,n,r,s,i){return j(),Q("div",pC,[q("div",mC,we(t.schedule.name),1),q("div",gC,[q("div",_C,we(t.schedule.timeStart)+" - "+we(t.endTime),1),q("div",yC,"("+we(t.schedule.duration)+")",1)]),q("div",vC,[(j(!0),Q(Je,null,yn(t.allDays,o=>(j(),Q("span",{key:o,class:st([{selected:t.selectedDays.includes(o)},"day"])},we(o),3))),128))])])}const wC=xe(fC,[["render",EC],["__scopeId","data-v-58b7d5b4"]]),TC=Ne({components:{Schedule:wC,Spinner:ka},setup(){const t=dC();return Ar(async()=>{await t.loadSchedules()}),{scheduleStore:t}}}),IC={class:"schedules"},bC={key:1},AC={key:0};function RC(t,e,n,r,s,i){const o=_e("spinner"),l=_e("Schedule");return j(),Q("div",IC,[t.scheduleStore.loading?(j(),je(o,{key:0,"spinner-size":"20px","with-text":!0})):Te("",!0),!t.scheduleStore.loading&&!t.scheduleStore.error?(j(),Q("div",bC,[t.scheduleStore.schedules.length?(j(),Q("div",AC,[(j(!0),Q(Je,null,yn(t.scheduleStore.schedules,c=>(j(),je(l,{key:c.id,schedule:c},null,8,["schedule"]))),128))])):Te("",!0)])):Te("",!0)])}const H_=xe(TC,[["render",RC],["__scopeId","data-v-3e0043e6"]]),SC=Ne({props:{title:{type:String,required:!0}},setup(){return{}}}),CC={class:"page-tite"};function PC(t,e,n,r,s,i){return j(),Q("div",CC,we(t.$props.title),1)}const kC=xe(SC,[["render",PC],["__scopeId","data-v-7de7892e"]]),DC=Ne({props:{color:{type:String,default:"white"}},setup(t){return{iconBackStyle:Ue(()=>({"--icon-color":t.color}))}}});function NC(t,e,n,r,s,i){return j(),Q("div",{class:"icon-back",style:jn(t.iconBackStyle)},e[0]||(e[0]=[q("svg",{viewBox:"0 0 24 24",class:"icon",xmlns:"http://www.w3.org/2000/svg"},[q("path",{d:"m 16.962167,22.810082 c 0.297374,0.270339 0.75695,0.243306 1.027288,-0.05406 0.270339,-0.297374 0.243307,-0.75695 -0.05406,-1.027288 L 7.4732599,12.266854 c -0.2703387,-0.243306 -0.2703387,-0.594746 0,-0.83805 L 17.935388,2.2913399 c 0.297374,-0.2703387 0.324406,-0.729915 0.0811,-1.0272884 C 17.746147,0.96667721 17.286569,0.93964454 16.989198,1.1829535 L 6.5270732,10.347447 c -0.9191536,0.811018 -0.9461886,2.162712 -0.027033,3.000764 z",style:{"stroke-width":"0.0337924"}})],-1)]),4)}const OC=xe(DC,[["render",NC],["__scopeId","data-v-0a839df4"]]),VC=Ne({components:{IconBack:OC,PageTitle:kC},setup(){const t=Us(),e=Ns();function n(){t.navigateBackPage&&(e.push({name:t.navigateBackPage}),t.setNavigateBackPage(null))}return{pageStore:t,onNavigateBack:n}}}),MC={class:"top-bar"};function xC(t,e,n,r,s,i){const o=_e("icon-back"),l=_e("PageTitle");return j(),Q("div",MC,[q("div",{class:"icon-back-wrapper",onClick:e[0]||(e[0]=(...c)=>t.onNavigateBack&&t.onNavigateBack(...c))},[t.pageStore.navigateBackPage?(j(),je(o,{key:0},{default:Vn(()=>e[1]||(e[1]=[Ht(" Back ")])),_:1})):Te("",!0)]),pe(l,{title:t.pageStore.currentPageTitle},null,8,["title"])])}const LC=xe(VC,[["render",xC],["__scopeId","data-v-70cabded"]]),FC=Ne({props:{color:{type:String,default:"white"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconRaspberryStyle:Ue(()=>({"--icon-color":t.color,fontSize:t.fontSize}))}}}),UC={key:0,class:"text"};function $C(t,e,n,r,s,i){return j(),Q("div",{class:"icon-raspberry",style:jn(t.iconRaspberryStyle)},[e[0]||(e[0]=q("svg",{fill:"#000000",viewBox:"-2.5 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[q("path",{d:"m 13.656,17.338 c -0.857,0.989 -1.334,2.79 -0.709,3.371 0.6,0.449 2.2,0.391 3.385,-1.23 0.344,-0.487 0.551,-1.093 0.551,-1.747 0,-0.603 -0.175,-1.164 -0.477,-1.637 l 0.007,0.012 c -0.73,-0.555 -1.778,0.164 -2.757,1.243 z m -8.057,0.3 c -0.908,-1.04 -2.088,-1.658 -2.851,-1.2 -0.51,0.382 -0.605,1.685 0.123,2.967 1.078,1.524 2.6,1.679 3.221,1.307 0.659,-0.488 0.3,-2.137 -0.493,-3.075 z m 4.105,3.145 c -1.1,-0.026 -2.8,0.439 -2.776,1.032 -0.018,0.4 1.331,1.572 2.7,1.513 1.326,0.03 2.7,-1.139 2.682,-1.649 -0.018,-0.51 -1.5,-0.927 -2.607,-0.884 z M 9.629,6.839 c -1.275,-0.032 -2.5,0.933 -2.5,1.493 0,0.68 1.008,1.376 2.51,1.394 1.543,0.01 2.518,-0.559 2.532,-1.26 C 12.187,7.672 10.777,6.827 9.653,6.839 Z M 6.558,7.371 C 4.423,7.026 2.645,8.271 2.716,10.563 2.786,11.447 7.346,7.522 6.559,7.386 V 7.371 Z m 9.749,3.251 c 0.071,-2.277 -1.709,-3.521 -3.844,-3.176 -0.787,0.135 3.772,4.061 3.844,3.176 z m 0.364,0.824 c -1.239,-0.329 -0.42,5.049 0.588,4.615 0.551,-0.525 0.894,-1.265 0.894,-2.084 0,-1.077 -0.592,-2.015 -1.468,-2.508 l -0.014,-0.007 v -0.015 z m -14.9,4.675 c 1.007,0.45 1.827,-4.929 0.589,-4.6 -0.891,0.504 -1.483,1.445 -1.483,2.525 0,0.821 0.343,1.563 0.893,2.089 l 10e-4,10e-4 z m 9.415,-5.948 c -0.63,0.49 -1.032,1.249 -1.032,2.101 0,0.624 0.215,1.197 0.575,1.65 l -0.004,-0.005 c 0.492,0.838 1.388,1.392 2.414,1.392 0.467,0 0.908,-0.115 1.295,-0.318 L 14.419,15 c 0.631,-0.49 1.034,-1.248 1.034,-2.101 0,-0.624 -0.215,-1.197 -0.576,-1.65 l 0.004,0.005 c -0.484,-0.835 -1.374,-1.388 -2.393,-1.388 -0.476,0 -0.923,0.121 -1.314,0.333 l 0.015,-0.007 z m -3.1,0.135 C 7.713,10.109 7.27,9.993 6.8,9.993 c -1.02,0 -1.911,0.548 -2.395,1.366 l -0.007,0.013 c -0.357,0.45 -0.572,1.026 -0.572,1.652 0,0.855 0.402,1.616 1.027,2.105 l 0.006,0.004 c 0.376,0.205 0.823,0.325 1.298,0.325 1.019,0 1.909,-0.553 2.386,-1.376 L 8.55,14.069 c 0.352,-0.448 0.564,-1.019 0.564,-1.64 0,-0.853 -0.4,-1.612 -1.024,-2.1 L 8.084,10.325 Z m 4.369,7.162 c -0.077,-1.399 -1.23,-2.504 -2.641,-2.504 -0.049,0 -0.098,0.001 -0.147,0.004 H 9.674 C 9.646,14.969 9.612,14.968 9.579,14.968 c -1.423,0 -2.585,1.119 -2.653,2.526 v 0.006 0.029 c 0.078,1.399 1.232,2.504 2.643,2.504 0.049,0 0.098,-0.001 0.147,-0.004 H 9.709 c 0.035,0.002 0.076,0.003 0.117,0.003 1.413,0 2.566,-1.116 2.625,-2.514 v -0.005 -0.029 l 0.01,-0.015 z M 15.67,2.337 c -1.69,0.771 -3.14,1.756 -4.396,2.945 l 0.007,-0.007 c 0.377,1.5 2.344,1.558 3.063,1.512 C 14.205,6.743 14.093,6.646 14.03,6.521 L 14.029,6.518 C 14.209,6.398 14.85,6.502 15.297,6.263 15.126,6.233 15.045,6.202 14.968,6.063 15.4,5.968 15.781,5.808 16.124,5.591 L 16.109,5.6 C 16.076,5.605 16.039,5.609 16,5.609 c -0.132,0 -0.256,-0.037 -0.361,-0.1 l 0.003,0.002 c 0.419,-0.179 0.779,-0.4 1.103,-0.664 l -0.008,0.006 c -0.2,0 -0.406,0 -0.466,-0.075 0.336,-0.197 0.625,-0.429 0.875,-0.698 l 0.002,-0.002 c -0.272,0.045 -0.39,0.016 -0.454,-0.03 0.295,-0.226 0.544,-0.494 0.742,-0.798 l 0.007,-0.012 c -0.076,0.04 -0.166,0.063 -0.261,0.063 -0.095,0 -0.185,-0.023 -0.264,-0.064 l 0.003,0.002 c 0.091,-0.194 0.47,-0.314 0.69,-0.779 -0.073,0.019 -0.157,0.031 -0.243,0.031 -0.086,0 -0.17,-0.011 -0.25,-0.032 l 0.007,0.002 C 17.218,2.133 17.367,1.848 17.564,1.602 L 17.56,1.607 C 17.465,1.611 17.354,1.613 17.242,1.613 16.961,1.613 16.684,1.6 16.41,1.575 l 0.035,0.003 0.283,-0.285 C 16.604,1.269 16.462,1.255 16.316,1.255 c -0.297,0 -0.58,0.058 -0.839,0.164 l 0.015,-0.005 c -0.149,-0.105 0,-0.255 0.185,-0.4 -0.385,0.05 -0.734,0.138 -1.065,0.262 L 14.645,1.265 C 14.481,1.115 14.745,0.98 14.885,0.829 14.472,0.9 14.104,1.047 13.779,1.256 L 13.791,1.249 C 13.611,1.084 13.776,0.935 13.891,0.8 13.537,0.937 13.234,1.13 12.975,1.37 l 0.002,-0.002 c -0.09,-0.1 -0.209,-0.179 -0.06,-0.449 -0.291,0.162 -0.535,0.373 -0.73,0.624 l -0.004,0.005 c -0.194,-0.134 -0.119,-0.3 -0.119,-0.449 -0.285,0.253 -0.545,0.518 -0.785,0.8 L 11.27,1.91 C 11.209,1.879 11.17,1.76 11.135,1.564 10.356,2.314 9.246,4.187 10.85,4.92 12.21,3.854 13.799,3.001 15.522,2.45 L 15.629,2.42 15.67,2.345 Z m -12.259,0 C 5.242,2.92 6.831,3.778 8.219,4.879 L 8.188,4.855 C 9.788,4.105 8.681,2.232 7.906,1.499 7.865,1.693 7.821,1.828 7.771,1.858 7.522,1.566 7.264,1.301 6.991,1.055 L 6.983,1.048 c 0,0.15 0.077,0.33 -0.117,0.45 C 6.673,1.24 6.432,1.029 6.156,0.874 L 6.145,0.868 C 6.294,1.124 6.17,1.198 6.089,1.317 5.842,1.059 5.542,0.855 5.206,0.723 L 5.189,0.717 c 0.12,0.149 0.3,0.3 0.12,0.465 C 5,0.979 4.636,0.832 4.245,0.765 L 4.228,0.763 c 0.135,0.149 0.4,0.3 0.238,0.45 C 4.165,1.093 3.816,1.002 3.452,0.957 L 3.431,0.955 c 0.181,0.15 0.342,0.289 0.192,0.4 C 3.372,1.245 3.08,1.182 2.774,1.182 2.631,1.182 2.49,1.196 2.355,1.222 L 2.369,1.22 2.653,1.504 C 2.411,1.53 2.13,1.545 1.846,1.545 c -0.11,0 -0.22,-0.002 -0.33,-0.007 l 0.016,10e-4 c 0.199,0.238 0.35,0.525 0.432,0.839 l 0.003,0.015 c -0.045,0.045 -0.27,0.016 -0.483,0 0.225,0.449 0.6,0.57 0.688,0.765 C 2.096,3.199 2.006,3.223 1.911,3.223 1.816,3.223 1.725,3.199 1.647,3.157 L 1.65,3.158 C 1.869,3.465 2.115,3.731 2.391,3.963 L 2.398,3.968 C 2.315,4.007 2.217,4.029 2.115,4.029 2.051,4.029 1.988,4.02 1.929,4.004 l 0.005,0.001 c 0.251,0.269 0.537,0.5 0.851,0.69 l 0.018,0.01 C 2.743,4.775 2.532,4.774 2.324,4.78 2.639,5.04 3,5.263 3.389,5.432 L 3.418,5.443 C 3.316,5.514 3.19,5.556 3.053,5.556 3.018,5.556 2.983,5.553 2.949,5.548 h 0.004 c 0.327,0.21 0.708,0.371 1.116,0.46 L 4.092,6.012 C 4.021,6.13 3.894,6.209 3.748,6.212 4.197,6.466 4.826,6.347 5.006,6.482 4.942,6.61 4.831,6.707 4.696,6.751 L 4.692,6.752 C 5.411,6.797 7.392,6.737 7.764,5.238 6.516,4.061 5.065,3.081 3.472,2.361 L 3.373,2.321 3.413,2.337 Z M 5.145,0.1 C 5.388,0.133 5.608,0.203 5.809,0.305 L 5.797,0.3 C 6.326,0.13 6.447,0.363 6.707,0.459 7.284,0.339 7.459,0.6 7.736,0.878 L 8.058,0.869 C 8.765,1.358 9.283,2.075 9.509,2.913 L 9.515,2.938 C 9.746,2.076 10.264,1.359 10.96,0.881 l 0.012,-0.008 0.321,0.007 c 0.277,-0.28 0.452,-0.539 1.029,-0.418 0.261,-0.1 0.38,-0.33 0.911,-0.166 0.33,-0.1 0.62,-0.375 1.057,-0.045 0.131,-0.076 0.289,-0.121 0.457,-0.121 0.224,0 0.429,0.08 0.589,0.213 L 15.335,0.342 c 0.5,-0.06 0.653,0.061 0.774,0.21 0.108,0 0.809,-0.1 1.132,0.36 0.81,-0.09 1.064,0.464 0.774,0.988 0.114,0.121 0.185,0.284 0.185,0.464 0,0.204 -0.091,0.387 -0.234,0.511 l -0.001,10e-4 c 0.15,0.269 0.062,0.553 -0.27,0.913 0.014,0.055 0.023,0.117 0.023,0.182 0,0.284 -0.159,0.53 -0.393,0.655 l -0.004,0.002 c 0.06,0.51 -0.48,0.81 -0.629,0.914 -0.061,0.3 -0.181,0.584 -0.8,0.734 -0.089,0.449 -0.464,0.523 -0.824,0.614 1.309,0.619 2.199,1.929 2.199,3.446 0,0.1 -0.004,0.2 -0.012,0.298 l 0.001,-0.013 0.181,0.3 c 0.991,0.664 1.634,1.779 1.634,3.045 0,0.953 -0.365,1.821 -0.963,2.472 l 0.002,-0.003 c -0.139,0.635 -0.315,1.186 -0.535,1.713 l 0.024,-0.065 c -0.211,1.48 -1.197,2.687 -2.528,3.209 l -0.027,0.01 c -0.697,0.564 -1.506,1.025 -2.384,1.344 l -0.058,0.019 c -0.745,0.815 -1.809,1.328 -2.993,1.337 H 9.515 C 8.324,23.995 7.253,23.483 6.506,22.67 L 6.503,22.667 C 5.565,22.328 4.755,21.866 4.04,21.289 l 0.016,0.013 C 2.698,20.769 1.71,19.563 1.497,18.105 L 1.494,18.083 C 1.296,17.618 1.118,17.062 0.989,16.488 L 0.976,16.421 C 0.377,15.772 0.01,14.902 0.01,13.946 c 0,-1.265 0.644,-2.38 1.621,-3.036 l 0.013,-0.008 0.172,-0.3 C 1.809,10.517 1.805,10.418 1.805,10.318 1.805,8.801 2.694,7.491 3.981,6.882 L 4.004,6.872 C 3.645,6.782 3.284,6.707 3.181,6.257 2.566,6.107 2.446,5.823 2.381,5.523 2.231,5.418 1.692,5.123 1.752,4.595 1.513,4.465 1.353,4.215 1.353,3.928 1.353,3.861 1.362,3.797 1.378,3.735 L 1.377,3.74 C 1.063,3.394 0.977,3.095 1.107,2.825 0.963,2.702 0.873,2.52 0.873,2.317 0.873,2.136 0.945,1.971 1.062,1.851 0.777,1.326 1.032,0.757 1.841,0.851 2.158,0.386 2.864,0.492 2.967,0.492 3.088,0.342 3.252,0.207 3.746,0.267 3.908,0.134 4.117,0.053 4.345,0.053 4.51,0.053 4.665,0.095 4.8,0.169 L 4.795,0.167 C 4.903,0.07 5.044,0.008 5.2,0.001 h 10e-4 z"})],-1)),t.$props.text&&t.$props.text.length>0?(j(),Q("div",UC,we(t.$props.text),1)):Te("",!0)],4)}const BC=xe(FC,[["render",$C],["__scopeId","data-v-5243a882"]]),qC=Ne({components:{IconRaspberry:BC,IconSchedule:Im,IconLightSwitch:Tm},setup(){return{}}}),jC={class:"home"};function HC(t,e,n,r,s,i){const o=_e("icon-raspberry"),l=_e("router-link"),c=_e("icon-light-switch"),u=_e("icon-schedule");return j(),Q("div",jC,[pe(l,{to:"/boards",class:"tile boards"},{default:Vn(()=>[q("span",null,[pe(o,{text:"Boards",strokeColor:"deeppink",fontSize:"22px"})])]),_:1}),pe(l,{to:"/relays",class:"tile relays"},{default:Vn(()=>[q("span",null,[pe(c,{text:"Relays",fontSize:"22px"})])]),_:1}),Te("",!0),pe(l,{to:"/schedules",class:"tile schedules"},{default:Vn(()=>[q("span",null,[pe(u,{strokeColor:"orange",text:"Schedules",fontSize:"22px"})])]),_:1}),Te("",!0)])}const z_=xe(qC,[["render",HC],["__scopeId","data-v-37ea29cb"]]),zC=Ne({props:{options:{type:Array,required:!0},placeholder:{type:String,default:"Select an option"},modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:e}){const n=re(!1),r=re(t.modelValue);function s(){n.value=!n.value}function i(o){r.value=o.value,e("update:modelValue",o.value),n.value=!1}return{isOpen:n,selectedOption:r,toggleDropdown:s,selectOption:i}}}),WC={class:"custom-dropdown"},GC={key:0,class:"dropdown-list"},KC=["onClick"];function QC(t,e,n,r,s,i){return j(),Q("div",WC,[q("div",{class:"dropdown-selected",onClick:e[0]||(e[0]=(...o)=>t.toggleDropdown&&t.toggleDropdown(...o))},[Ht(we(t.selectedOption||t.placeholder)+" ",1),q("span",{class:st(["arrow",{open:t.isOpen}])},"▼",2)]),t.isOpen?(j(),Q("div",GC,[(j(!0),Q(Je,null,yn(t.options,o=>(j(),Q("div",{key:o.value,class:st(["dropdown-item",{selected:o.value===t.selectedOption}]),onClick:l=>t.selectOption(o)},we(o.label),11,KC))),128))])):Te("",!0)])}const W_=xe(zC,[["render",QC],["__scopeId","data-v-20c408dc"]]),Kf=[{value:"Raspberry Pi Model B+ V1.2",numGpioPins:27},{value:"Raspberry Pi 2 Model B V1.1",numGpioPins:27},{value:"Raspberry Pi 3 Model B",numGpioPins:27},{value:"Raspberry Pi 4 Model B",numGpioPins:27},{value:"Raspberry Pi Zero",numGpioPins:27},{value:"Raspberry Pi Zero W",numGpioPins:27},{value:"Raspberry Pi 400",numGpioPins:27}],JC=Ne({components:{ButtonDefault:zn},emits:["boardAdded","cancel"],props:{boardId:{type:String,default:null}},setup(t,{emit:e}){const n=no(),r=re(""),s=re(null),i=re(null);Ui(()=>{t.boardId&&(i.value=n.boards.find(m=>m.id===t.boardId)),i.value?(r.value=i.value.name,s.value=Kf.find(m=>m.value===i.value.model)):l()});const o=Ue(()=>t.boardId&&i.value.name===r.value.trim()&&i.value.model===s.value.value?!1:!!(r.value&&r.value.length>1&&s.value));function l(){r.value="",s.value=null}function c(m){return m&&s.value&&m.value===s.value.value}function u(m){m&&(s.value=m)}async function d(){if(o.value)try{const m=s.value.value,_=s.value.numGpioPins;i.value?await n.updateBoard(i.value.id,r.value):await n.addBoardWithPins(r.value,m,_),l(),e("boardAdded")}catch{console.error("Failed to add the board. Please try again.")}}function p(){l(),e("cancel")}return{name:r,selectedModel:s,canSave:o,raspberryPiModels:Kf,isChecked:c,selectModel:u,onAdd:d,onCancel:p}}}),YC={class:"popup-add-board"},XC={class:"popup"},ZC={key:0},eP={key:1,class:"options"},tP=["onClick"],nP={class:"buttons"};function rP(t,e,n,r,s,i){const o=_e("button-default");return j(),Q("div",YC,[q("div",XC,[q("h3",null,we(t.$props.boardId?"Edit Board":"Add New Board"),1),e[1]||(e[1]=q("label",{for:"name"},"Name:",-1)),ys(q("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.name=l),type:"text",placeholder:"Enter board name"},null,512),[[Es,t.name]]),t.$props.boardId?Te("",!0):(j(),Q("label",ZC,"Model:")),t.$props.boardId?Te("",!0):(j(),Q("div",eP,[(j(!0),Q(Je,null,yn(t.raspberryPiModels,l=>(j(),Q("div",{class:"option",key:l.value},[q("div",{class:st(["option-text",{"is-checked":t.isChecked(l)}]),onClick:c=>t.selectModel(l)},we(l.value),11,tP)]))),128))])),q("div",nP,[pe(o,{class:st({"can-save":t.canSave}),text:"Save",onClick:t.onAdd},null,8,["class","onClick"]),pe(o,{text:"Cancel",onClick:t.onCancel},null,8,["onClick"])])])])}const G_=xe(JC,[["render",rP],["__scopeId","data-v-8c361eb0"]]),sP=Ne({components:{PopupAddBoard:G_,ButtonDefault:zn,Spinner:ka,Dropdown:W_},setup(){const t=Ns(),e=Us(),n=no(),r=re(!1);Ar(()=>{n.loadBoards(),n.clearSelectedBoard()});function s(i){n.selectedBoard=i,e.setNavigateBackPage("boards"),t.push({name:"board"})}return{requestAddNewBoard:r,boardStore:n,requestBoard:s}}}),iP={class:"boards"},oP={key:1},aP=["onClick"];function lP(t,e,n,r,s,i){const o=_e("spinner"),l=_e("button-default"),c=_e("popup-add-board");return j(),Q("div",iP,[t.boardStore.loadingBoards?(j(),je(o,{key:0,spinnerSize:"20px",withText:!0})):(j(),Q("div",oP,[(j(!0),Q(Je,null,yn(t.boardStore.boards,u=>(j(),Q("div",{class:"board-name-wrapper",key:u.id,onClick:d=>t.requestBoard(u)},we(u.name),9,aP))),128)),pe(l,{text:"Add new board",onClick:e[0]||(e[0]=u=>t.requestAddNewBoard=!0)})])),t.requestAddNewBoard?(j(),je(c,{key:2,onBoardAdded:e[1]||(e[1]=u=>t.requestAddNewBoard=!1),onCancel:e[2]||(e[2]=u=>t.requestAddNewBoard=!1)})):Te("",!0)])}const K_=xe(sP,[["render",lP],["__scopeId","data-v-6664e91c"]]),cP=Ne({components:{ButtonDefault:zn},props:{relayName:{type:String,required:!0},pinNumber:{type:Number,required:!0},initialMode:{type:String,required:!0},initialRelayId:{type:String,default:null}},emits:["save","cancel"],setup(t,{emit:e}){const n=Cr(),r=re(t.initialMode),s=re(t.initialRelayId),i=re([]);Ar(()=>{i.value=l()});const o=Ue(()=>t.initialMode!==r.value||t.initialRelayId!==s.value);function l(){const _=n.relays.filter(({boardId:A})=>!A).map(({id:A,name:P})=>({value:A,label:P})).sort((A,P)=>A.value.localeCompare(P.value)),S={value:null,label:"None"};if(s.value!==null){const A=n.relays.find(P=>P.id===s.value);if(A)return[{value:A.id,label:A.name},S,..._]}return[S,..._]}function c(){r.value="input"}function u(){r.value="output"}function d(_){s.value=_}function p(){o.value&&e("save",r.value,s.value)}function m(){e("cancel")}return{mode:r,changed:o,relayId:s,availableRelays:i,setInput:c,setOutput:u,setRelay:d,onSave:p,onCancel:m}}}),uP={class:"popup-select-relay"},hP={class:"popup"},dP={class:"options"},fP={class:"option"},pP={class:"option"},mP={class:"options"},gP=["onClick"],_P={class:"buttons"};function yP(t,e,n,r,s,i){const o=_e("button-default");return j(),Q("div",uP,[q("div",hP,[q("h3",null,we(t.$props.relayName),1),q("h3",null,"Pin "+we(t.$props.pinNumber),1),e[2]||(e[2]=q("label",{for:"name"},"Mode:",-1)),q("div",dP,[q("div",fP,[q("div",{class:st(["option-text",{"is-checked":t.mode==="input"}]),onClick:e[0]||(e[0]=(...l)=>t.setInput&&t.setInput(...l))}," IN ",2)]),q("div",pP,[q("div",{class:st(["option-text",{"is-checked":t.mode==="output"}]),onClick:e[1]||(e[1]=(...l)=>t.setOutput&&t.setOutput(...l))}," OUT ",2)])]),e[3]||(e[3]=q("label",{for:"name"},"Relay:",-1)),q("div",mP,[(j(!0),Q(Je,null,yn(t.availableRelays,l=>(j(),Q("div",{class:"option",key:l.value},[q("div",{class:st(["option-text",{"is-checked":t.relayId===l.value}]),onClick:c=>t.setRelay(l.value)},we(l.label),11,gP)]))),128))]),q("div",_P,[pe(o,{class:st({"can-save":t.changed}),text:"Save",onClick:t.onSave},null,8,["class","onClick"]),pe(o,{text:"Cancel",onClick:t.onCancel},null,8,["onClick"])])])])}const vP=xe(cP,[["render",yP],["__scopeId","data-v-c64dfe6d"]]),EP=Ne({components:{ButtonDefault:zn},props:{text:{type:String,required:!0}},emits:["yes","no"],setup(t,{emit:e}){function n(){e("yes")}function r(){e("no")}return{onYes:n,onNo:r}}}),wP={class:"popup-yes-no"},TP={class:"popup"},IP={for:"name"},bP={class:"buttons"};function AP(t,e,n,r,s,i){const o=_e("button-default");return j(),Q("div",wP,[q("div",TP,[q("label",IP,we(t.$props.text),1),q("div",bP,[pe(o,{text:"Yes",onClick:t.onYes},null,8,["onClick"]),pe(o,{text:"No",onClick:t.onNo},null,8,["onClick"])])])])}const Q_=xe(EP,[["render",AP],["__scopeId","data-v-8208713d"]]),RP=Ne({components:{ButtonDefault:zn},props:{text:{type:String,required:!0}},emits:["ok"],setup(t,{emit:e}){function n(){e("ok")}return{onOk:n}}}),SP={class:"popup-info"},CP={class:"popup"},PP={for:"name"},kP={class:"buttons"};function DP(t,e,n,r,s,i){const o=_e("button-default");return j(),Q("div",SP,[q("div",CP,[q("label",PP,we(t.$props.text),1),q("div",kP,[pe(o,{text:"Ok",onClick:t.onOk},null,8,["onClick"])])])])}const NP=xe(RP,[["render",DP],["__scopeId","data-v-30b38fb2"]]),OP=Ne({components:{PopupInfo:NP,PopupAddBoard:G_,PopupYesNo:Q_,PopupSelectRelay:vP,DropDown:W_},props:{},emits:[],setup(t,e){const n=Ns(),r=no(),s=Cr(),i=re(null),o=re(!1),l=re(!1),c=re(null);Ar(async()=>{i.value=null,await r.loadBoardDetails()});const u=Ue(()=>{var N;return p((N=r.selectedBoard)==null?void 0:N.createdAt)}),d=Ue(()=>{var N;return p((N=r.selectedBoard)==null?void 0:N.updatedAt)});function p(N){return N?N.toLocaleString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(","," -").replace(/\//g,"."):""}function m(){r.deleteBoard(r.selectedBoard.id),n.push({name:"boards"}),o.value=!1}function _(N){i.value&&(i.value=null),i.value=N}async function S(N,V){if(!i.value)return;if(!N){A();return}const L=i.value,z=[];if(L.mode=N,!L.relayId&&V){const Z=s.relays.find(ae=>ae.id===V);Z&&(L.relayId=Z.id,L.relayName=Z.name,Z.boardId=L.boardId,z.push(Z))}else if(L.relayId&&V&&L.relayId!==V){const Z=s.relays.find(b=>b.id===L.relayId),ae=s.relays.find(b=>b.id===V);Z&&(Z.boardId=null,z.push(Z)),ae&&(L.relayId=ae.id,L.relayName=ae.name,ae.boardId=L.boardId,z.push(ae))}else if(L.relayId&&!V){const Z=s.relays.find(ae=>ae.id===L.relayId);Z&&(Z.boardId=null,z.push(Z)),L.relayId=null,L.relayName=null}await r.updatePinConfigAndRelays(L,z),i.value=null}function A(){i.value=null}function P(N){navigator.clipboard.writeText(N),c.value="Copied to clipboard!"}return{boardStore:r,createdAt:u,modifiedAt:d,selectedPinConfig:i,requestDeleteBoard:o,requestEditBoard:l,clipboardText:c,requestEditPinConfig:_,deleteBoard:m,onSaveSelectRelay:S,onCancelSelectRelay:A,copyToClipboard:P}}}),VP={class:"board"},MP={class:"board-header"},xP={class:"table-body"},LP={class:"table-cell"},FP={class:"table-cell"},UP=["onClick"],$P={class:"table-row"};function BP(t,e,n,r,s,i){var d,p,m;const o=_e("popup-select-relay"),l=_e("popup-yes-no"),c=_e("popup-info"),u=_e("popup-add-board");return j(),Q("div",VP,[q("div",MP,[q("h3",{onClick:e[0]||(e[0]=_=>t.requestEditBoard=!0)},we((d=t.boardStore.selectedBoard)==null?void 0:d.name),1),q("p",{onClick:e[1]||(e[1]=_=>{var S;return t.copyToClipboard((S=t.boardStore.selectedBoard)==null?void 0:S.id)})},[e[8]||(e[8]=q("strong",null,"Board Id:",-1)),Ht(" "+we((p=t.boardStore.selectedBoard)==null?void 0:p.id),1)]),q("p",{onClick:e[2]||(e[2]=_=>{var S;return t.copyToClipboard((S=t.boardStore.selectedBoard)==null?void 0:S.model)})},[e[9]||(e[9]=q("strong",null,"Model:",-1)),Ht(" "+we((m=t.boardStore.selectedBoard)==null?void 0:m.model),1)]),q("p",null,[e[10]||(e[10]=q("strong",null,"Created:",-1)),Ht(" "+we(t.createdAt),1)]),q("p",null,[e[11]||(e[11]=q("strong",null,"Modified:",-1)),Ht(" "+we(t.modifiedAt),1)])]),e[12]||(e[12]=q("div",{class:"table-header"},[q("div",{class:"table-cell"},"Pin"),q("div",{class:"table-cell"},"Mode"),q("div",{class:"table-cell"},"Relay Name")],-1)),q("div",xP,[(j(!0),Q(Je,null,yn(t.boardStore.pinConfigs,_=>(j(),Q("div",{class:"table-row",key:_.pinNumber},[q("div",LP,we(_.pinNumber),1),q("div",FP,we(_.mode==="output"?"OUT":"IN"),1),q("div",{class:"table-cell relay-name",onClick:S=>t.requestEditPinConfig(_)},we(_.relayName?_.relayName:"None"),9,UP)]))),128)),q("div",$P,[q("div",{class:"delete-button",onClick:e[3]||(e[3]=_=>t.requestDeleteBoard=!0)}," Delete ")])]),t.selectedPinConfig?(j(),je(o,{key:0,relayName:t.boardStore.selectedBoard.name,pinNumber:t.selectedPinConfig.pinNumber,initialMode:t.selectedPinConfig.mode,initialRelayId:t.selectedPinConfig.relayId,onCancel:t.onCancelSelectRelay,onSave:t.onSaveSelectRelay},null,8,["relayName","pinNumber","initialMode","initialRelayId","onCancel","onSave"])):Te("",!0),t.requestDeleteBoard?(j(),je(l,{key:1,text:`Are you sure you want to delete '${t.boardStore.selectedBoard.name}'?`,onYes:t.deleteBoard,onNo:e[4]||(e[4]=_=>t.requestDeleteBoard=!1)},null,8,["text","onYes"])):Te("",!0),t.clipboardText?(j(),je(c,{key:2,text:t.clipboardText,onOk:e[5]||(e[5]=_=>t.clipboardText=null)},null,8,["text"])):Te("",!0),t.requestEditBoard?(j(),je(u,{key:3,boardId:t.boardStore.selectedBoard.id,onBoardAdded:e[6]||(e[6]=_=>t.requestEditBoard=!1),onCancel:e[7]||(e[7]=_=>t.requestEditBoard=!1)},null,8,["boardId"])):Te("",!0)])}const J_=xe(OP,[["render",BP]]),qP=Ne({components:{PopupAddRelay:B_,PopupYesNo:Q_},computed:{relay(){return $_}},props:{},emits:[],setup(){const t=Ns(),e=Us(),n=Cr(),r=no(),s=re(),i=re(),o=re(),l=re(),c=re();Ar(async()=>{var m;if(!n.selectedRelay){await t.push({name:e.navigateBackPage});return}e.setNavigateBackPage("relays"),i.value=n.getMaxOnTime(n.selectedRelay),await r.loadBoards(),r.selectedBoard=r.boards.find(_=>_.id===n.selectedRelay.boardId),o.value=(m=r.selectedBoard)==null?void 0:m.name,await r.loadBoardDetails(),s.value=r.pinConfigs.find(_=>_.relayId===n.selectedRelay.id)});async function u(){await n.deleteRelay(n.selectedRelay.id),await t.push({name:e.navigateBackPage})}function d(){r.selectedBoard?(e.setNavigateBackPage("relay"),t.push({name:"board"})):t.push({name:"boards"})}function p(){l.value=!1,i.value=n.getMaxOnTime(n.selectedRelay)}return{maxOnTime:i,boardName:o,pinConfig:s,relayStore:n,requestDeleteRelay:c,requestEditRelay:l,deleteRelay:u,onRelayUpdated:p,goToBoard:d}}}),jP={key:0,class:"relay"},HP={class:"relay-header"};function zP(t,e,n,r,s,i){var c;const o=_e("popup-yes-no"),l=_e("popup-add-relay");return t.relayStore.selectedRelay?(j(),Q("div",jP,[q("div",HP,[q("h3",{onClick:e[0]||(e[0]=u=>t.requestEditRelay=!0)},we(t.relayStore.selectedRelay.name),1),q("p",{onClick:e[1]||(e[1]=u=>t.requestEditRelay=!0)},[e[8]||(e[8]=q("strong",null,"Max on time:",-1)),Ht(" "+we(t.maxOnTime),1)]),q("p",{onClick:e[2]||(e[2]=(...u)=>t.goToBoard&&t.goToBoard(...u))},[e[9]||(e[9]=q("strong",null,"Board:",-1)),Ht(" "+we(t.boardName),1)]),q("p",{onClick:e[3]||(e[3]=(...u)=>t.goToBoard&&t.goToBoard(...u))},[e[10]||(e[10]=q("strong",null,"Pin:",-1)),Ht(" "+we((c=t.pinConfig)==null?void 0:c.pinNumber),1)]),q("p",{onClick:e[4]||(e[4]=(...u)=>t.goToBoard&&t.goToBoard(...u))},[e[11]||(e[11]=q("strong",null,"Pin mode:",-1)),Ht(" "+we(t.pinConfig?t.pinConfig.mode==="input"?"Input":"Output":""),1)]),q("p",null,[e[12]||(e[12]=q("strong",null,"Status:",-1)),Ht(" "+we(t.relayStore.selectedRelay.state?"On":"Off"),1)])]),t.relayStore.selectedRelay.state?Te("",!0):(j(),Q("div",{key:0,class:"delete-button",onClick:e[5]||(e[5]=u=>t.requestDeleteRelay=!0)}," Delete ")),t.requestDeleteRelay?(j(),je(o,{key:1,text:`Are you sure you want to delete '${t.relayStore.selectedRelay.name}'?`,onYes:t.deleteRelay,onNo:e[6]||(e[6]=u=>t.requestDeleteRelay=!1)},null,8,["text","onYes"])):Te("",!0),t.requestEditRelay?(j(),je(l,{key:2,relay:t.relayStore.selectedRelay,onRelayAdded:t.onRelayUpdated,onCancel:e[7]||(e[7]=u=>t.requestEditRelay=!1)},null,8,["relay","onRelayAdded"])):Te("",!0)])):Te("",!0)}const Y_=xe(qP,[["render",zP],["__scopeId","data-v-399d2245"]]),WP=Ne({name:"App",components:{Board:J_,Boards:K_,Home:z_,TopBar:LC,Schedules:H_,Relays:q_,Relay:Y_,TaskBar:dw,SignIn:lb},setup(){const t=bm(),e=Us(),n=re(null),r=Ue(()=>!!t.user);function s(i){n.value&&(i instanceof HTMLElement?i.scrollIntoView({behavior:"smooth",block:"end"}):n.value.scroll({top:n.value.scrollHeight,behavior:"smooth"}))}return{signedIn:r,pageStore:e,ref_body:n,scrollToBottom:s}}}),GP={class:"app"},KP={key:0,class:"signed-in"},QP={class:"body",ref:"ref_body"};function JP(t,e,n,r,s,i){const o=_e("top-bar"),l=_e("home"),c=_e("boards"),u=_e("board"),d=_e("relays"),p=_e("relay"),m=_e("schedules"),_=_e("task-bar"),S=_e("sign-in");return j(),Q("div",GP,[t.signedIn?(j(),Q("div",KP,[pe(o),q("div",QP,[t.pageStore.currentPage==="home"?(j(),je(l,{key:0})):Te("",!0),t.pageStore.currentPage==="boards"?(j(),je(c,{key:1})):Te("",!0),t.pageStore.currentPage==="board"?(j(),je(u,{key:2})):Te("",!0),t.pageStore.currentPage==="relays"?(j(),je(d,{key:3,onRequestScrollToBottom:t.scrollToBottom},null,8,["onRequestScrollToBottom"])):Te("",!0),t.pageStore.currentPage==="relay"?(j(),je(p,{key:4})):t.pageStore.currentPage==="schedules"?(j(),je(m,{key:5,onRequestScrollToBottom:t.scrollToBottom},null,8,["onRequestScrollToBottom"])):Te("",!0)],512),pe(_)])):(j(),je(S,{key:1}))])}const YP=xe(WP,[["render",JP],["__scopeId","data-v-6428b056"]]),XP=[{path:"/home",name:"home",component:z_},{path:"/boards",name:"boards",component:K_},{path:"/board/",name:"board",component:J_},{path:"/relays",name:"relays",component:q_},{path:"/relay",name:"relay",component:Y_},{path:"/schedules",name:"schedules",component:H_},{path:"/:catchAll(.*)",redirect:"/relays"}],X_=JE({history:AE("/RelayHub"),routes:XP});X_.beforeEach((t,e,n)=>{const r=Us();e.name!==r.navigateBackPage&&(r.navigateBackPage=null),r.setPage(t.name),n()});const Hu=$0(YP),ZP=j0();Hu.use(X_);Hu.use(ZP);Hu.mount("#app");
