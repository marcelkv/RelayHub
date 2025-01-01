(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},us=[],dn=()=>{},wy=()=>!1,ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),kc=t=>t.startsWith("onUpdate:"),ct=Object.assign,Dc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ty=Object.prototype.hasOwnProperty,De=(t,e)=>Ty.call(t,e),fe=Array.isArray,hs=t=>da(t)==="[object Map]",Zf=t=>da(t)==="[object Set]",ge=t=>typeof t=="function",rt=t=>typeof t=="string",Bn=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",ep=t=>(We(t)||ge(t))&&ge(t.then)&&ge(t.catch),tp=Object.prototype.toString,da=t=>tp.call(t),Iy=t=>da(t).slice(8,-1),np=t=>da(t)==="[object Object]",Nc=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ii=Pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},by=/-(\w)/g,Jt=fa(t=>t.replace(by,(e,n)=>n?n.toUpperCase():"")),Ay=/\B([A-Z])/g,_r=fa(t=>t.replace(Ay,"-$1").toLowerCase()),pa=fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),pl=fa(t=>t?`on${pa(t)}`:""),ir=(t,e)=>!Object.is(t,e),Io=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},rp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Bl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $h;const ma=()=>$h||($h=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function En(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=rt(r)?Py(r):En(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(rt(t)||We(t))return t}const Ry=/;(?![^(]*\))/g,Sy=/:([^]+)/,Cy=/\/\*[^]*?\*\//g;function Py(t){const e={};return t.replace(Cy,"").split(Ry).forEach(n=>{if(n){const r=n.split(Sy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Mt(t){let e="";if(rt(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=Mt(t[n]);r&&(e+=r+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ky="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dy=Pc(ky);function sp(t){return!!t||t===""}const ip=t=>!!(t&&t.__v_isRef===!0),Ne=t=>rt(t)?t:t==null?"":fe(t)||We(t)&&(t.toString===tp||!ge(t.toString))?ip(t)?Ne(t.value):JSON.stringify(t,op,2):String(t),op=(t,e)=>ip(e)?op(t,e.value):hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ml(r,i)+" =>"]=s,n),{})}:Zf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ml(n))}:Bn(e)?ml(e):We(e)&&!fe(e)&&!np(e)?String(e):e,ml=(t,e="")=>{var n;return Bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class ap{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function lp(t){return new ap(t)}function cp(){return Vt}function Ny(t,e=!1){Vt&&Vt.cleanups.push(t)}let Be;const gl=new WeakSet;class up{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vt&&Vt.active&&Vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gl.has(this)&&(gl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bh(this),fp(this);const e=Be,n=nn;Be=this,nn=!0;try{return this.fn()}finally{pp(this),Be=e,nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mc(e);this.deps=this.depsTail=void 0,Bh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ql(this)&&this.run()}get dirty(){return ql(this)}}let hp=0,oi,ai;function dp(t,e=!1){if(t.flags|=8,e){t.next=ai,ai=t;return}t.next=oi,oi=t}function Vc(){hp++}function Oc(){if(--hp>0)return;if(ai){let e=ai;for(ai=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;oi;){let e=oi;for(oi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function fp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Mc(r),Vy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ql(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function mp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===yi))return;t.globalVersion=yi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ql(t)){t.flags&=-3;return}const n=Be,r=nn;Be=t,nn=!0;try{fp(t);const s=t.fn(t._value);(e.version===0||ir(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Be=n,nn=r,pp(t),t.flags&=-3}}function Mc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Mc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nn=!0;const gp=[];function yr(){gp.push(nn),nn=!1}function vr(){const t=gp.pop();nn=t===void 0?!0:t}function Bh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Be;Be=void 0;try{e()}finally{Be=n}}}let yi=0;class Oy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Be||!nn||Be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Be)n=this.activeLink=new Oy(Be,this),Be.deps?(n.prevDep=Be.depsTail,Be.depsTail.nextDep=n,Be.depsTail=n):Be.deps=Be.depsTail=n,_p(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Be.depsTail,n.nextDep=void 0,Be.depsTail.nextDep=n,Be.depsTail=n,Be.deps===n&&(Be.deps=r)}return n}trigger(e){this.version++,yi++,this.notify(e)}notify(e){Vc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Oc()}}}function _p(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)_p(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Uo=new WeakMap,Vr=Symbol(""),jl=Symbol(""),vi=Symbol("");function At(t,e,n){if(nn&&Be){let r=Uo.get(t);r||Uo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new xc),s.map=r,s.key=n),s.track()}}function Rn(t,e,n,r,s,i){const o=Uo.get(t);if(!o){yi++;return}const l=c=>{c&&c.trigger()};if(Vc(),e==="clear")o.forEach(l);else{const c=fe(t),u=c&&Nc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===vi||!Bn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(vi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Vr)),hs(t)&&l(o.get(jl)));break;case"delete":c||(l(o.get(Vr)),hs(t)&&l(o.get(jl)));break;case"set":hs(t)&&l(o.get(Vr));break}}Oc()}function My(t,e){const n=Uo.get(t);return n&&n.get(e)}function ts(t){const e=Ce(t);return e===t?e:(At(e,"iterate",vi),Xt(t)?e:e.map(Rt))}function ga(t){return At(t=Ce(t),"iterate",vi),t}const xy={__proto__:null,[Symbol.iterator](){return _l(this,Symbol.iterator,Rt)},concat(...t){return ts(this).concat(...t.map(e=>fe(e)?ts(e):e))},entries(){return _l(this,"entries",t=>(t[1]=Rt(t[1]),t))},every(t,e){return In(this,"every",t,e,void 0,arguments)},filter(t,e){return In(this,"filter",t,e,n=>n.map(Rt),arguments)},find(t,e){return In(this,"find",t,e,Rt,arguments)},findIndex(t,e){return In(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return In(this,"findLast",t,e,Rt,arguments)},findLastIndex(t,e){return In(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return In(this,"forEach",t,e,void 0,arguments)},includes(...t){return yl(this,"includes",t)},indexOf(...t){return yl(this,"indexOf",t)},join(t){return ts(this).join(t)},lastIndexOf(...t){return yl(this,"lastIndexOf",t)},map(t,e){return In(this,"map",t,e,void 0,arguments)},pop(){return Xs(this,"pop")},push(...t){return Xs(this,"push",t)},reduce(t,...e){return qh(this,"reduce",t,e)},reduceRight(t,...e){return qh(this,"reduceRight",t,e)},shift(){return Xs(this,"shift")},some(t,e){return In(this,"some",t,e,void 0,arguments)},splice(...t){return Xs(this,"splice",t)},toReversed(){return ts(this).toReversed()},toSorted(t){return ts(this).toSorted(t)},toSpliced(...t){return ts(this).toSpliced(...t)},unshift(...t){return Xs(this,"unshift",t)},values(){return _l(this,"values",Rt)}};function _l(t,e,n){const r=ga(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ly=Array.prototype;function In(t,e,n,r,s,i){const o=ga(t),l=o!==t&&!Xt(t),c=o[e];if(c!==Ly[e]){const p=c.apply(t,i);return l?Rt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,Rt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function qh(t,e,n,r){const s=ga(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Rt(l),c,t)}),s[e](i,...r)}function yl(t,e,n){const r=Ce(t);At(r,"iterate",vi);const s=r[e](...n);return(s===-1||s===!1)&&Uc(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function Xs(t,e,n=[]){yr(),Vc();const r=Ce(t)[e].apply(t,n);return Oc(),vr(),r}const Fy=Pc("__proto__,__v_isRef,__isVue"),yp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bn));function Uy(t){Bn(t)||(t=String(t));const e=Ce(this);return At(e,"has",t),e.hasOwnProperty(t)}class vp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Qy:Ip:i?Tp:wp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let c;if(o&&(c=xy[n]))return c;if(n==="hasOwnProperty")return Uy}const l=Reflect.get(e,n,Je(e)?e:r);return(Bn(n)?yp.has(n):Fy(n))||(s||At(e,"get",n),i)?l:Je(l)?o&&Nc(n)?l:l.value:We(l)?s?Ap(l):Mi(l):l}}class Ep extends vp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Fr(i);if(!Xt(r)&&!Fr(r)&&(i=Ce(i),r=Ce(r)),!fe(e)&&Je(i)&&!Je(r))return c?!1:(i.value=r,!0)}const o=fe(e)&&Nc(n)?Number(n)<e.length:De(e,n),l=Reflect.set(e,n,r,Je(e)?e:s);return e===Ce(s)&&(o?ir(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),l}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Bn(n)||!yp.has(n))&&At(e,"has",n),r}ownKeys(e){return At(e,"iterate",fe(e)?"length":Vr),Reflect.ownKeys(e)}}class $y extends vp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const By=new Ep,qy=new $y,jy=new Ep(!0);const Hl=t=>t,po=t=>Reflect.getPrototypeOf(t);function Hy(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=hs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Hl:e?zl:Rt;return!e&&At(i,"iterate",c?jl:Vr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function mo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function zy(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);t||(ir(s,l)&&At(o,"get",s),At(o,"get",l));const{has:c}=po(o),u=e?Hl:t?zl:Rt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&At(Ce(s),"iterate",Vr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);return t||(ir(s,l)&&At(o,"has",s),At(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ce(l),u=e?Hl:t?zl:Rt;return!t&&At(c,"iterate",Vr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return ct(n,t?{add:mo("add"),set:mo("set"),delete:mo("delete"),clear:mo("clear")}:{add(s){!e&&!Xt(s)&&!Fr(s)&&(s=Ce(s));const i=Ce(this);return po(i).has.call(i,s)||(i.add(s),Rn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!Fr(i)&&(i=Ce(i));const o=Ce(this),{has:l,get:c}=po(o);let u=l.call(o,s);u||(s=Ce(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?ir(i,d)&&Rn(o,"set",s,i):Rn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:l}=po(i);let c=o.call(i,s);c||(s=Ce(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Rn(i,"delete",s,void 0),u},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Hy(s,t,e)}),n}function Lc(t,e){const n=zy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const Wy={get:Lc(!1,!1)},Gy={get:Lc(!1,!0)},Ky={get:Lc(!0,!1)};const wp=new WeakMap,Tp=new WeakMap,Ip=new WeakMap,Qy=new WeakMap;function Yy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xy(t){return t.__v_skip||!Object.isExtensible(t)?0:Yy(Iy(t))}function Mi(t){return Fr(t)?t:Fc(t,!1,By,Wy,wp)}function bp(t){return Fc(t,!1,jy,Gy,Tp)}function Ap(t){return Fc(t,!0,qy,Ky,Ip)}function Fc(t,e,n,r,s){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Xy(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function or(t){return Fr(t)?or(t.__v_raw):!!(t&&t.__v_isReactive)}function Fr(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function Uc(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function $c(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&rp(t,"__v_skip",!0),t}const Rt=t=>We(t)?Mi(t):t,zl=t=>We(t)?Ap(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function le(t){return Rp(t,!1)}function Jy(t){return Rp(t,!0)}function Rp(t,e){return Je(t)?t:new Zy(t,e)}class Zy{constructor(e,n){this.dep=new xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:Rt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||Fr(e);e=r?e:Ce(e),ir(e,n)&&(this._rawValue=e,this._value=r?e:Rt(e),this.dep.trigger())}}function ds(t){return Je(t)?t.value:t}const e0={get:(t,e,n)=>e==="__v_raw"?t:ds(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Sp(t){return or(t)?t:new Proxy(t,e0)}function t0(t){const e=fe(t)?new Array(t.length):{};for(const n in t)e[n]=r0(t,n);return e}class n0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return My(Ce(this._object),this._key)}}function r0(t,e,n){const r=t[e];return Je(r)?r:new n0(t,e,n)}class s0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Be!==this)return dp(this,!0),!0}get value(){const e=this.dep.track();return mp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function i0(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new s0(r,s,n)}const go={},$o=new WeakMap;let Pr;function o0(t,e=!1,n=Pr){if(n){let r=$o.get(n);r||$o.set(n,r=[]),r.push(t)}}function a0(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=B=>s?B:Xt(B)||s===!1||s===0?Sn(B,1):Sn(B);let d,p,m,_,I=!1,S=!1;if(Je(t)?(p=()=>t.value,I=Xt(t)):or(t)?(p=()=>u(t),I=!0):fe(t)?(S=!0,I=t.some(B=>or(B)||Xt(B)),p=()=>t.map(B=>{if(Je(B))return B.value;if(or(B))return u(B);if(ge(B))return c?c(B,2):B()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){yr();try{m()}finally{vr()}}const B=Pr;Pr=d;try{return c?c(t,3,[_]):t(_)}finally{Pr=B}}:p=dn,e&&s){const B=p,ie=s===!0?1/0:s;p=()=>Sn(B(),ie)}const C=cp(),D=()=>{d.stop(),C&&C.active&&Dc(C.effects,d)};if(i&&e){const B=e;e=(...ie)=>{B(...ie),D()}}let x=S?new Array(t.length).fill(go):go;const L=B=>{if(!(!(d.flags&1)||!d.dirty&&!B))if(e){const ie=d.run();if(s||I||(S?ie.some((ye,A)=>ir(ye,x[A])):ir(ie,x))){m&&m();const ye=Pr;Pr=d;try{const A=[ie,x===go?void 0:S&&x[0]===go?[]:x,_];c?c(e,3,A):e(...A),x=ie}finally{Pr=ye}}}else d.run()};return l&&l(L),d=new up(p),d.scheduler=o?()=>o(L,!1):L,_=B=>o0(B,!1,d),m=d.onStop=()=>{const B=$o.get(d);if(B){if(c)c(B,4);else for(const ie of B)ie();$o.delete(d)}},e?r?L(!0):x=d.run():o?o(L.bind(null,!0),!0):d.run(),D.pause=d.pause.bind(d),D.resume=d.resume.bind(d),D.stop=D,D}function Sn(t,e=1/0,n){if(e<=0||!We(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))Sn(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(Zf(t)||hs(t))t.forEach(r=>{Sn(r,e,n)});else if(np(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xi(t,e,n,r){try{return r?t(...r):t()}catch(s){_a(s,e,n)}}function _n(t,e,n,r){if(ge(t)){const s=xi(t,e,n,r);return s&&ep(s)&&s.catch(i=>{_a(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(_n(t[i],e,n,r));return s}}function _a(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){yr(),xi(i,null,10,[t,c,u]),vr();return}}l0(t,n,s,r,o)}function l0(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ot=[];let un=-1;const fs=[];let Jn=null,rs=0;const Cp=Promise.resolve();let Bo=null;function Bc(t){const e=Bo||Cp;return t?e.then(this?t.bind(this):t):e}function c0(t){let e=un+1,n=Ot.length;for(;e<n;){const r=e+n>>>1,s=Ot[r],i=Ei(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function qc(t){if(!(t.flags&1)){const e=Ei(t),n=Ot[Ot.length-1];!n||!(t.flags&2)&&e>=Ei(n)?Ot.push(t):Ot.splice(c0(e),0,t),t.flags|=1,Pp()}}function Pp(){Bo||(Bo=Cp.then(Dp))}function u0(t){fe(t)?fs.push(...t):Jn&&t.id===-1?Jn.splice(rs+1,0,t):t.flags&1||(fs.push(t),t.flags|=1),Pp()}function jh(t,e,n=un+1){for(;n<Ot.length;n++){const r=Ot[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ot.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function kp(t){if(fs.length){const e=[...new Set(fs)].sort((n,r)=>Ei(n)-Ei(r));if(fs.length=0,Jn){Jn.push(...e);return}for(Jn=e,rs=0;rs<Jn.length;rs++){const n=Jn[rs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jn=null,rs=0}}const Ei=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Dp(t){try{for(un=0;un<Ot.length;un++){const e=Ot[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),xi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<Ot.length;un++){const e=Ot[un];e&&(e.flags&=-2)}un=-1,Ot.length=0,kp(),Bo=null,(Ot.length||fs.length)&&Dp()}}let lt=null,Np=null;function qo(t){const e=lt;return lt=t,Np=t&&t.type.__scopeId||null,e}function fn(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Jh(-1);const i=qo(e);let o;try{o=t(...s)}finally{qo(i),r._d&&Jh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Wl(t,e){if(lt===null)return t;const n=Ta(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Fe]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Sr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(yr(),_n(c,n,8,[t.el,l,t,e]),vr())}}const h0=Symbol("_vte"),d0=t=>t.__isTeleport;function jc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Me(t,e){return ge(t)?ct({name:t.name},e,{setup:t}):t}function Vp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function jo(t,e,n,r,s=!1){if(fe(t)){t.forEach((I,S)=>jo(I,e&&(fe(e)?e[S]:e),n,r,s));return}if(ps(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&jo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ta(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Fe?l.refs={}:l.refs,p=l.setupState,m=Ce(p),_=p===Fe?()=>!1:I=>De(m,I);if(u!=null&&u!==c&&(rt(u)?(d[u]=null,_(u)&&(p[u]=null)):Je(u)&&(u.value=null)),ge(c))xi(c,l,12,[o,d]);else{const I=rt(c),S=Je(c);if(I||S){const C=()=>{if(t.f){const D=I?_(c)?p[c]:d[c]:c.value;s?fe(D)&&Dc(D,i):fe(D)?D.includes(i)||D.push(i):I?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else I?(d[c]=o,_(c)&&(p[c]=o)):S&&(c.value=o,t.k&&(d[t.k]=o))};o?(C.id=-1,zt(C,n)):C()}}}ma().requestIdleCallback;ma().cancelIdleCallback;const ps=t=>!!t.type.__asyncLoader,Op=t=>t.type.__isKeepAlive;function f0(t,e){Mp(t,"a",e)}function p0(t,e){Mp(t,"da",e)}function Mp(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ya(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Op(s.parent.vnode)&&m0(r,e,n,s),s=s.parent}}function m0(t,e,n,r){const s=ya(e,t,r,!0);Hc(()=>{Dc(r[e],s)},n)}function ya(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{yr();const l=Li(n),c=_n(e,n,t,o);return l(),vr(),c});return r?s.unshift(i):s.push(i),i}}const qn=t=>(e,n=gt)=>{(!Ii||t==="sp")&&ya(t,(...r)=>e(...r),n)},va=qn("bm"),Hr=qn("m"),g0=qn("bu"),_0=qn("u"),xp=qn("bum"),Hc=qn("um"),y0=qn("sp"),v0=qn("rtg"),E0=qn("rtc");function w0(t,e=gt){ya("ec",t,e)}const T0="components";function ve(t,e){return b0(T0,t,!0,e)||t}const I0=Symbol.for("v-ndc");function b0(t,e,n=!0,r=!1){const s=lt||gt;if(s){const i=s.type;{const l=hv(i,!1);if(l&&(l===e||l===Jt(e)||l===pa(Jt(e))))return i}const o=Hh(s[t]||i[t],e)||Hh(s.appContext[t],e);return!o&&r?i:o}}function Hh(t,e){return t&&(t[e]||t[Jt(e)]||t[pa(Jt(e))])}function Er(t,e,n,r){let s;const i=n,o=fe(t);if(o||rt(t)){const l=o&&or(t);let c=!1;l&&(c=!Xt(t),t=ga(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?Rt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(We(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function bo(t,e,n={},r,s){if(lt.ce||lt.parent&&ps(lt.parent)&&lt.parent.ce)return e!=="default"&&(n.name=e),z(),ze(tt,null,[_e("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),z();const o=i&&Lp(i(n)),l=n.key||o&&o.key,c=ze(tt,{key:(l&&!Bn(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Lp(t){return t.some(e=>Ti(e)?!(e.type===hr||e.type===tt&&!Lp(e.children)):!0)?t:null}const Gl=t=>t?sm(t)?Ta(t):Gl(t.parent):null,li=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gl(t.parent),$root:t=>Gl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zc(t),$forceUpdate:t=>t.f||(t.f=()=>{qc(t.update)}),$nextTick:t=>t.n||(t.n=Bc.bind(t.proxy)),$watch:t=>W0.bind(t)}),vl=(t,e)=>t!==Fe&&!t.__isScriptSetup&&De(t,e),A0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(vl(r,e))return o[e]=1,r[e];if(s!==Fe&&De(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&De(u,e))return o[e]=3,i[e];if(n!==Fe&&De(n,e))return o[e]=4,n[e];Kl&&(o[e]=0)}}const d=li[e];let p,m;if(d)return e==="$attrs"&&At(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Fe&&De(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,De(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return vl(s,e)?(s[e]=n,!0):r!==Fe&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Fe&&De(t,o)||vl(e,o)||(l=i[0])&&De(l,o)||De(r,o)||De(li,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zh(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kl=!0;function R0(t){const e=zc(t),n=t.proxy,r=t.ctx;Kl=!1,e.beforeCreate&&Wh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:I,activated:S,deactivated:C,beforeDestroy:D,beforeUnmount:x,destroyed:L,unmounted:B,render:ie,renderTracked:ye,renderTriggered:A,errorCaptured:y,serverPrefetch:E,expose:b,inheritAttrs:R,components:P,directives:T,filters:dt}=e;if(u&&S0(u,r,null),o)for(const ue in o){const Ee=o[ue];ge(Ee)&&(r[ue]=Ee.bind(n))}if(s){const ue=s.call(n,n);We(ue)&&(t.data=Mi(ue))}if(Kl=!0,i)for(const ue in i){const Ee=i[ue],jt=ge(Ee)?Ee.bind(n,n):ge(Ee.get)?Ee.get.bind(n,n):dn,Zt=!ge(Ee)&&ge(Ee.set)?Ee.set.bind(n):dn,Qt=qe({get:jt,set:Zt});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:Ge=>Qt.value=Ge})}if(l)for(const ue in l)Fp(l[ue],r,n,ue);if(c){const ue=ge(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(Ee=>{Ao(Ee,ue[Ee])})}d&&Wh(d,t,"c");function $e(ue,Ee){fe(Ee)?Ee.forEach(jt=>ue(jt.bind(n))):Ee&&ue(Ee.bind(n))}if($e(va,p),$e(Hr,m),$e(g0,_),$e(_0,I),$e(f0,S),$e(p0,C),$e(w0,y),$e(E0,ye),$e(v0,A),$e(xp,x),$e(Hc,B),$e(y0,E),fe(b))if(b.length){const ue=t.exposed||(t.exposed={});b.forEach(Ee=>{Object.defineProperty(ue,Ee,{get:()=>n[Ee],set:jt=>n[Ee]=jt})})}else t.exposed||(t.exposed={});ie&&t.render===dn&&(t.render=ie),R!=null&&(t.inheritAttrs=R),P&&(t.components=P),T&&(t.directives=T),E&&Vp(t)}function S0(t,e,n=dn){fe(t)&&(t=Ql(t));for(const r in t){const s=t[r];let i;We(s)?"default"in s?i=rn(s.from||r,s.default,!0):i=rn(s.from||r):i=rn(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Wh(t,e,n){_n(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fp(t,e,n,r){let s=r.includes(".")?Jp(n,r):()=>n[r];if(rt(t)){const i=e[t];ge(i)&&Mr(s,i)}else if(ge(t))Mr(s,t.bind(n));else if(We(t))if(fe(t))t.forEach(i=>Fp(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Mr(s,i,t)}}function zc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Ho(c,u,o,!0)),Ho(c,e,o)),We(e)&&i.set(e,c),c}function Ho(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ho(t,i,n,!0),s&&s.forEach(o=>Ho(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=C0[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const C0={data:Gh,props:Kh,emits:Kh,methods:ei,computed:ei,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:ei,directives:ei,watch:k0,provide:Gh,inject:P0};function Gh(t,e){return e?t?function(){return ct(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function P0(t,e){return ei(Ql(t),Ql(e))}function Ql(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Nt(t,e){return t?[...new Set([].concat(t,e))]:e}function ei(t,e){return t?ct(Object.create(null),t,e):e}function Kh(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:ct(Object.create(null),zh(t),zh(e??{})):e}function k0(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=Nt(t[r],e[r]);return n}function Up(){return{app:null,config:{isNativeTag:wy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let D0=0;function N0(t,e){return function(r,s=null){ge(r)||(r=ct({},r)),s!=null&&!We(s)&&(s=null);const i=Up(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:D0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:fv,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ge(d.install)?(o.add(d),d.install(u,...p)):ge(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const _=u._ceVNode||_e(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(_,d):t(_,d,m),c=!0,u._container=d,d.__vue_app__=u,Ta(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(_n(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Or;Or=u;try{return d()}finally{Or=p}}};return u}}let Or=null;function Ao(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function rn(t,e,n=!1){const r=gt||lt;if(r||Or){const s=Or?Or._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function V0(){return!!(gt||lt||Or)}const $p={},Bp=()=>Object.create($p),qp=t=>Object.getPrototypeOf(t)===$p;function O0(t,e,n,r=!1){const s={},i=Bp();t.propsDefaults=Object.create(null),jp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:bp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function M0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ce(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Ea(t.emitsOptions,m))continue;const _=e[m];if(c)if(De(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const I=Jt(m);s[I]=Yl(c,l,I,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{jp(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!De(e,p)&&((d=_r(p))===p||!De(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Yl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!De(e,p))&&(delete i[p],u=!0)}u&&Rn(t.attrs,"set","")}function jp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ii(c))continue;const u=e[c];let d;s&&De(s,d=Jt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ea(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ce(n),u=l||Fe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Yl(s,c,p,u[p],t,!De(u,p))}}return o}function Yl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=De(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Li(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===_r(n))&&(r=!0))}return r}const x0=new WeakMap;function Hp(t,e,n=!1){const r=n?x0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const d=p=>{c=!0;const[m,_]=Hp(p,e,!0);ct(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return We(t)&&r.set(t,us),us;if(fe(i))for(let d=0;d<i.length;d++){const p=Jt(i[d]);Qh(p)&&(o[p]=Fe)}else if(i)for(const d in i){const p=Jt(d);if(Qh(p)){const m=i[d],_=o[p]=fe(m)||ge(m)?{type:m}:ct({},m),I=_.type;let S=!1,C=!0;if(fe(I))for(let D=0;D<I.length;++D){const x=I[D],L=ge(x)&&x.name;if(L==="Boolean"){S=!0;break}else L==="String"&&(C=!1)}else S=ge(I)&&I.name==="Boolean";_[0]=S,_[1]=C,(S||De(_,"default"))&&l.push(p)}}const u=[o,l];return We(t)&&r.set(t,u),u}function Qh(t){return t[0]!=="$"&&!ii(t)}const zp=t=>t[0]==="_"||t==="$stable",Wc=t=>fe(t)?t.map(hn):[hn(t)],L0=(t,e,n)=>{if(e._n)return e;const r=fn((...s)=>Wc(e(...s)),n);return r._c=!1,r},Wp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(zp(s))continue;const i=t[s];if(ge(i))e[s]=L0(s,i,r);else if(i!=null){const o=Wc(i);e[s]=()=>o}}},Gp=(t,e)=>{const n=Wc(e);t.slots.default=()=>n},Kp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},F0=(t,e,n)=>{const r=t.slots=Bp();if(t.vnode.shapeFlag&32){const s=e._;s?(Kp(r,e,n),n&&rp(r,"_",s,!0)):Wp(e,r)}else e&&Gp(t,e)},U0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Kp(s,e,n):(i=!e.$stable,Wp(e,s)),o=e}else e&&(Gp(t,e),o={default:1});if(i)for(const l in s)!zp(l)&&o[l]==null&&delete s[l]},zt=Z0;function $0(t){return B0(t)}function B0(t,e){const n=ma();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=dn,insertStaticContent:I}=t,S=(v,w,N,$=null,O=null,q=null,K=void 0,W=null,H=!!w.dynamicChildren)=>{if(v===w)return;v&&!Js(v,w)&&($=M(v),Ge(v,O,q,!0),v=null),w.patchFlag===-2&&(H=!1,w.dynamicChildren=null);const{type:j,ref:ae,shapeFlag:Y}=w;switch(j){case wa:C(v,w,N,$);break;case hr:D(v,w,N,$);break;case Ro:v==null&&x(w,N,$,K);break;case tt:P(v,w,N,$,O,q,K,W,H);break;default:Y&1?ie(v,w,N,$,O,q,K,W,H):Y&6?T(v,w,N,$,O,q,K,W,H):(Y&64||Y&128)&&j.process(v,w,N,$,O,q,K,W,H,te)}ae!=null&&O&&jo(ae,v&&v.ref,q,w||v,!w)},C=(v,w,N,$)=>{if(v==null)r(w.el=l(w.children),N,$);else{const O=w.el=v.el;w.children!==v.children&&u(O,w.children)}},D=(v,w,N,$)=>{v==null?r(w.el=c(w.children||""),N,$):w.el=v.el},x=(v,w,N,$)=>{[v.el,v.anchor]=I(v.children,w,N,$,v.el,v.anchor)},L=({el:v,anchor:w},N,$)=>{let O;for(;v&&v!==w;)O=m(v),r(v,N,$),v=O;r(w,N,$)},B=({el:v,anchor:w})=>{let N;for(;v&&v!==w;)N=m(v),s(v),v=N;s(w)},ie=(v,w,N,$,O,q,K,W,H)=>{w.type==="svg"?K="svg":w.type==="math"&&(K="mathml"),v==null?ye(w,N,$,O,q,K,W,H):E(v,w,O,q,K,W,H)},ye=(v,w,N,$,O,q,K,W)=>{let H,j;const{props:ae,shapeFlag:Y,transition:se,dirs:ne}=v;if(H=v.el=o(v.type,q,ae&&ae.is,ae),Y&8?d(H,v.children):Y&16&&y(v.children,H,null,$,O,El(v,q),K,W),ne&&Sr(v,null,$,"created"),A(H,v,v.scopeId,K,$),ae){for(const Pe in ae)Pe!=="value"&&!ii(Pe)&&i(H,Pe,null,ae[Pe],q,$);"value"in ae&&i(H,"value",null,ae.value,q),(j=ae.onVnodeBeforeMount)&&cn(j,$,v)}ne&&Sr(v,null,$,"beforeMount");const ce=q0(O,se);ce&&se.beforeEnter(H),r(H,w,N),((j=ae&&ae.onVnodeMounted)||ce||ne)&&zt(()=>{j&&cn(j,$,v),ce&&se.enter(H),ne&&Sr(v,null,$,"mounted")},O)},A=(v,w,N,$,O)=>{if(N&&_(v,N),$)for(let q=0;q<$.length;q++)_(v,$[q]);if(O){let q=O.subTree;if(w===q||em(q.type)&&(q.ssContent===w||q.ssFallback===w)){const K=O.vnode;A(v,K,K.scopeId,K.slotScopeIds,O.parent)}}},y=(v,w,N,$,O,q,K,W,H=0)=>{for(let j=H;j<v.length;j++){const ae=v[j]=W?Zn(v[j]):hn(v[j]);S(null,ae,w,N,$,O,q,K,W)}},E=(v,w,N,$,O,q,K)=>{const W=w.el=v.el;let{patchFlag:H,dynamicChildren:j,dirs:ae}=w;H|=v.patchFlag&16;const Y=v.props||Fe,se=w.props||Fe;let ne;if(N&&Cr(N,!1),(ne=se.onVnodeBeforeUpdate)&&cn(ne,N,w,v),ae&&Sr(w,v,N,"beforeUpdate"),N&&Cr(N,!0),(Y.innerHTML&&se.innerHTML==null||Y.textContent&&se.textContent==null)&&d(W,""),j?b(v.dynamicChildren,j,W,N,$,El(w,O),q):K||Ee(v,w,W,null,N,$,El(w,O),q,!1),H>0){if(H&16)R(W,Y,se,N,O);else if(H&2&&Y.class!==se.class&&i(W,"class",null,se.class,O),H&4&&i(W,"style",Y.style,se.style,O),H&8){const ce=w.dynamicProps;for(let Pe=0;Pe<ce.length;Pe++){const Re=ce[Pe],vt=Y[Re],ot=se[Re];(ot!==vt||Re==="value")&&i(W,Re,vt,ot,O,N)}}H&1&&v.children!==w.children&&d(W,w.children)}else!K&&j==null&&R(W,Y,se,N,O);((ne=se.onVnodeUpdated)||ae)&&zt(()=>{ne&&cn(ne,N,w,v),ae&&Sr(w,v,N,"updated")},$)},b=(v,w,N,$,O,q,K)=>{for(let W=0;W<w.length;W++){const H=v[W],j=w[W],ae=H.el&&(H.type===tt||!Js(H,j)||H.shapeFlag&70)?p(H.el):N;S(H,j,ae,null,$,O,q,K,!0)}},R=(v,w,N,$,O)=>{if(w!==N){if(w!==Fe)for(const q in w)!ii(q)&&!(q in N)&&i(v,q,w[q],null,O,$);for(const q in N){if(ii(q))continue;const K=N[q],W=w[q];K!==W&&q!=="value"&&i(v,q,W,K,O,$)}"value"in N&&i(v,"value",w.value,N.value,O)}},P=(v,w,N,$,O,q,K,W,H)=>{const j=w.el=v?v.el:l(""),ae=w.anchor=v?v.anchor:l("");let{patchFlag:Y,dynamicChildren:se,slotScopeIds:ne}=w;ne&&(W=W?W.concat(ne):ne),v==null?(r(j,N,$),r(ae,N,$),y(w.children||[],N,ae,O,q,K,W,H)):Y>0&&Y&64&&se&&v.dynamicChildren?(b(v.dynamicChildren,se,N,O,q,K,W),(w.key!=null||O&&w===O.subTree)&&Qp(v,w,!0)):Ee(v,w,N,ae,O,q,K,W,H)},T=(v,w,N,$,O,q,K,W,H)=>{w.slotScopeIds=W,v==null?w.shapeFlag&512?O.ctx.activate(w,N,$,K,H):dt(w,N,$,O,q,K,H):Ft(v,w,H)},dt=(v,w,N,$,O,q,K)=>{const W=v.component=ov(v,$,O);if(Op(v)&&(W.ctx.renderer=te),av(W,!1,K),W.asyncDep){if(O&&O.registerDep(W,$e,K),!v.el){const H=W.subTree=_e(hr);D(null,H,w,N)}}else $e(W,v,w,N,O,q,K)},Ft=(v,w,N)=>{const $=w.component=v.component;if(X0(v,w,N))if($.asyncDep&&!$.asyncResolved){ue($,w,N);return}else $.next=w,$.update();else w.el=v.el,$.vnode=w},$e=(v,w,N,$,O,q,K)=>{const W=()=>{if(v.isMounted){let{next:Y,bu:se,u:ne,parent:ce,vnode:Pe}=v;{const Et=Yp(v);if(Et){Y&&(Y.el=Pe.el,ue(v,Y,K)),Et.asyncDep.then(()=>{v.isUnmounted||W()});return}}let Re=Y,vt;Cr(v,!1),Y?(Y.el=Pe.el,ue(v,Y,K)):Y=Pe,se&&Io(se),(vt=Y.props&&Y.props.onVnodeBeforeUpdate)&&cn(vt,ce,Y,Pe),Cr(v,!0);const ot=wl(v),ft=v.subTree;v.subTree=ot,S(ft,ot,p(ft.el),M(ft),v,O,q),Y.el=ot.el,Re===null&&J0(v,ot.el),ne&&zt(ne,O),(vt=Y.props&&Y.props.onVnodeUpdated)&&zt(()=>cn(vt,ce,Y,Pe),O)}else{let Y;const{el:se,props:ne}=w,{bm:ce,m:Pe,parent:Re,root:vt,type:ot}=v,ft=ps(w);if(Cr(v,!1),ce&&Io(ce),!ft&&(Y=ne&&ne.onVnodeBeforeMount)&&cn(Y,Re,w),Cr(v,!0),se&&xe){const Et=()=>{v.subTree=wl(v),xe(se,v.subTree,v,O,null)};ft&&ot.__asyncHydrate?ot.__asyncHydrate(se,v,Et):Et()}else{vt.ce&&vt.ce._injectChildStyle(ot);const Et=v.subTree=wl(v);S(null,Et,N,$,v,O,q),w.el=Et.el}if(Pe&&zt(Pe,O),!ft&&(Y=ne&&ne.onVnodeMounted)){const Et=w;zt(()=>cn(Y,Re,Et),O)}(w.shapeFlag&256||Re&&ps(Re.vnode)&&Re.vnode.shapeFlag&256)&&v.a&&zt(v.a,O),v.isMounted=!0,w=N=$=null}};v.scope.on();const H=v.effect=new up(W);v.scope.off();const j=v.update=H.run.bind(H),ae=v.job=H.runIfDirty.bind(H);ae.i=v,ae.id=v.uid,H.scheduler=()=>qc(ae),Cr(v,!0),j()},ue=(v,w,N)=>{w.component=v;const $=v.vnode.props;v.vnode=w,v.next=null,M0(v,w.props,$,N),U0(v,w.children,N),yr(),jh(v),vr()},Ee=(v,w,N,$,O,q,K,W,H=!1)=>{const j=v&&v.children,ae=v?v.shapeFlag:0,Y=w.children,{patchFlag:se,shapeFlag:ne}=w;if(se>0){if(se&128){Zt(j,Y,N,$,O,q,K,W,H);return}else if(se&256){jt(j,Y,N,$,O,q,K,W,H);return}}ne&8?(ae&16&&Ut(j,O,q),Y!==j&&d(N,Y)):ae&16?ne&16?Zt(j,Y,N,$,O,q,K,W,H):Ut(j,O,q,!0):(ae&8&&d(N,""),ne&16&&y(Y,N,$,O,q,K,W,H))},jt=(v,w,N,$,O,q,K,W,H)=>{v=v||us,w=w||us;const j=v.length,ae=w.length,Y=Math.min(j,ae);let se;for(se=0;se<Y;se++){const ne=w[se]=H?Zn(w[se]):hn(w[se]);S(v[se],ne,N,null,O,q,K,W,H)}j>ae?Ut(v,O,q,!0,!1,Y):y(w,N,$,O,q,K,W,H,Y)},Zt=(v,w,N,$,O,q,K,W,H)=>{let j=0;const ae=w.length;let Y=v.length-1,se=ae-1;for(;j<=Y&&j<=se;){const ne=v[j],ce=w[j]=H?Zn(w[j]):hn(w[j]);if(Js(ne,ce))S(ne,ce,N,null,O,q,K,W,H);else break;j++}for(;j<=Y&&j<=se;){const ne=v[Y],ce=w[se]=H?Zn(w[se]):hn(w[se]);if(Js(ne,ce))S(ne,ce,N,null,O,q,K,W,H);else break;Y--,se--}if(j>Y){if(j<=se){const ne=se+1,ce=ne<ae?w[ne].el:$;for(;j<=se;)S(null,w[j]=H?Zn(w[j]):hn(w[j]),N,ce,O,q,K,W,H),j++}}else if(j>se)for(;j<=Y;)Ge(v[j],O,q,!0),j++;else{const ne=j,ce=j,Pe=new Map;for(j=ce;j<=se;j++){const kt=w[j]=H?Zn(w[j]):hn(w[j]);kt.key!=null&&Pe.set(kt.key,j)}let Re,vt=0;const ot=se-ce+1;let ft=!1,Et=0;const zn=new Array(ot);for(j=0;j<ot;j++)zn[j]=0;for(j=ne;j<=Y;j++){const kt=v[j];if(vt>=ot){Ge(kt,O,q,!0);continue}let Yt;if(kt.key!=null)Yt=Pe.get(kt.key);else for(Re=ce;Re<=se;Re++)if(zn[Re-ce]===0&&Js(kt,w[Re])){Yt=Re;break}Yt===void 0?Ge(kt,O,q,!0):(zn[Yt-ce]=j+1,Yt>=Et?Et=Yt:ft=!0,S(kt,w[Yt],N,null,O,q,K,W,H),vt++)}const Qr=ft?j0(zn):us;for(Re=Qr.length-1,j=ot-1;j>=0;j--){const kt=ce+j,Yt=w[kt],Yr=kt+1<ae?w[kt+1].el:$;zn[j]===0?S(null,Yt,N,Yr,O,q,K,W,H):ft&&(Re<0||j!==Qr[Re]?Qt(Yt,N,Yr,2):Re--)}}},Qt=(v,w,N,$,O=null)=>{const{el:q,type:K,transition:W,children:H,shapeFlag:j}=v;if(j&6){Qt(v.component.subTree,w,N,$);return}if(j&128){v.suspense.move(w,N,$);return}if(j&64){K.move(v,w,N,te);return}if(K===tt){r(q,w,N);for(let Y=0;Y<H.length;Y++)Qt(H[Y],w,N,$);r(v.anchor,w,N);return}if(K===Ro){L(v,w,N);return}if($!==2&&j&1&&W)if($===0)W.beforeEnter(q),r(q,w,N),zt(()=>W.enter(q),O);else{const{leave:Y,delayLeave:se,afterLeave:ne}=W,ce=()=>r(q,w,N),Pe=()=>{Y(q,()=>{ce(),ne&&ne()})};se?se(q,ce,Pe):Pe()}else r(q,w,N)},Ge=(v,w,N,$=!1,O=!1)=>{const{type:q,props:K,ref:W,children:H,dynamicChildren:j,shapeFlag:ae,patchFlag:Y,dirs:se,cacheIndex:ne}=v;if(Y===-2&&(O=!1),W!=null&&jo(W,null,N,v,!0),ne!=null&&(w.renderCache[ne]=void 0),ae&256){w.ctx.deactivate(v);return}const ce=ae&1&&se,Pe=!ps(v);let Re;if(Pe&&(Re=K&&K.onVnodeBeforeUnmount)&&cn(Re,w,v),ae&6)ln(v.component,N,$);else{if(ae&128){v.suspense.unmount(N,$);return}ce&&Sr(v,null,w,"beforeUnmount"),ae&64?v.type.remove(v,w,N,te,$):j&&!j.hasOnce&&(q!==tt||Y>0&&Y&64)?Ut(j,w,N,!1,!0):(q===tt&&Y&384||!O&&ae&16)&&Ut(H,w,N),$&&Ke(v)}(Pe&&(Re=K&&K.onVnodeUnmounted)||ce)&&zt(()=>{Re&&cn(Re,w,v),ce&&Sr(v,null,w,"unmounted")},N)},Ke=v=>{const{type:w,el:N,anchor:$,transition:O}=v;if(w===tt){Hn(N,$);return}if(w===Ro){B(v);return}const q=()=>{s(N),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:K,delayLeave:W}=O,H=()=>K(N,q);W?W(v.el,q,H):H()}else q()},Hn=(v,w)=>{let N;for(;v!==w;)N=m(v),s(v),v=N;s(w)},ln=(v,w,N)=>{const{bum:$,scope:O,job:q,subTree:K,um:W,m:H,a:j}=v;Yh(H),Yh(j),$&&Io($),O.stop(),q&&(q.flags|=8,Ge(K,v,w,N)),W&&zt(W,w),zt(()=>{v.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ut=(v,w,N,$=!1,O=!1,q=0)=>{for(let K=q;K<v.length;K++)Ge(v[K],w,N,$,O)},M=v=>{if(v.shapeFlag&6)return M(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=m(v.anchor||v.el),N=w&&w[h0];return N?m(N):w};let J=!1;const Q=(v,w,N)=>{v==null?w._vnode&&Ge(w._vnode,null,null,!0):S(w._vnode||null,v,w,null,null,null,N),w._vnode=v,J||(J=!0,jh(),kp(),J=!1)},te={p:S,um:Ge,m:Qt,r:Ke,mt:dt,mc:y,pc:Ee,pbc:b,n:M,o:t};let be,xe;return{render:Q,hydrate:be,createApp:N0(Q,be)}}function El({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function q0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qp(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Zn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Qp(o,l)),l.type===wa&&(l.el=o.el)}}function j0(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Yp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yp(e)}function Yh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const H0=Symbol.for("v-scx"),z0=()=>rn(H0);function Mr(t,e,n){return Xp(t,e,n)}function Xp(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,l=ct({},n),c=e&&r||!e&&i!=="post";let u;if(Ii){if(i==="sync"){const _=z0();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=dn,_.resume=dn,_.pause=dn,_}}const d=gt;l.call=(_,I,S)=>_n(_,d,I,S);let p=!1;i==="post"?l.scheduler=_=>{zt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,I)=>{I?_():qc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=a0(t,e,l);return Ii&&(u?u.push(m):c&&m()),m}function W0(t,e,n){const r=this.proxy,s=rt(t)?t.includes(".")?Jp(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=Li(this),l=Xp(s,i.bind(r),n);return o(),l}function Jp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const G0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Jt(e)}Modifiers`]||t[`${_r(e)}Modifiers`];function K0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&G0(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>rt(d)?d.trim():d)),o.number&&(s=n.map(Bl)));let l,c=r[l=pl(e)]||r[l=pl(Jt(e))];!c&&i&&(c=r[l=pl(_r(e))]),c&&_n(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,_n(u,t,6,s)}}function Zp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=u=>{const d=Zp(u,e,!0);d&&(l=!0,ct(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(We(t)&&r.set(t,null),null):(fe(i)?i.forEach(c=>o[c]=null):ct(o,i),We(t)&&r.set(t,o),o)}function Ea(t,e){return!t||!ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,_r(e))||De(t,e))}function wl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:I,inheritAttrs:S}=t,C=qo(t);let D,x;try{if(n.shapeFlag&4){const B=s||r,ie=B;D=hn(u.call(ie,B,d,p,_,m,I)),x=l}else{const B=e;D=hn(B.length>1?B(p,{attrs:l,slots:o,emit:c}):B(p,null)),x=e.props?l:Q0(l)}}catch(B){ci.length=0,_a(B,t,1),D=_e(hr)}let L=D;if(x&&S!==!1){const B=Object.keys(x),{shapeFlag:ie}=L;B.length&&ie&7&&(i&&B.some(kc)&&(x=Y0(x,i)),L=vs(L,x,!1,!0))}return n.dirs&&(L=vs(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&jc(L,n.transition),D=L,qo(C),D}const Q0=t=>{let e;for(const n in t)(n==="class"||n==="style"||ha(n))&&((e||(e={}))[n]=t[n]);return e},Y0=(t,e)=>{const n={};for(const r in t)(!kc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function X0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Xh(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Ea(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Xh(r,o,u):!0:!!o;return!1}function Xh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ea(n,i))return!0}return!1}function J0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const em=t=>t.__isSuspense;function Z0(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):u0(t)}const tt=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),hr=Symbol.for("v-cmt"),Ro=Symbol.for("v-stc"),ci=[];let Wt=null;function z(t=!1){ci.push(Wt=t?null:[])}function ev(){ci.pop(),Wt=ci[ci.length-1]||null}let wi=1;function Jh(t,e=!1){wi+=t,t<0&&Wt&&e&&(Wt.hasOnce=!0)}function tm(t){return t.dynamicChildren=wi>0?Wt||us:null,ev(),wi>0&&Wt&&Wt.push(t),t}function re(t,e,n,r,s,i){return tm(X(t,e,n,r,s,i,!0))}function ze(t,e,n,r,s){return tm(_e(t,e,n,r,s,!0))}function Ti(t){return t?t.__v_isVNode===!0:!1}function Js(t,e){return t.type===e.type&&t.key===e.key}const nm=({key:t})=>t??null,So=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?rt(t)||Je(t)||ge(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function X(t,e=null,n=null,r=0,s=null,i=t===tt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nm(e),ref:e&&So(e),scopeId:Np,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return l?(Gc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=rt(n)?8:16),wi>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const _e=tv;function tv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===I0)&&(t=hr),Ti(t)){const l=vs(t,e,!0);return n&&Gc(l,n),wi>0&&!i&&Wt&&(l.shapeFlag&6?Wt[Wt.indexOf(t)]=l:Wt.push(l)),l.patchFlag=-2,l}if(dv(t)&&(t=t.__vccOpts),e){e=nv(e);let{class:l,style:c}=e;l&&!rt(l)&&(e.class=Mt(l)),We(c)&&(Uc(c)&&!fe(c)&&(c=ct({},c)),e.style=En(c))}const o=rt(t)?1:em(t)?128:d0(t)?64:We(t)?4:ge(t)?2:0;return X(t,e,n,r,s,o,i,!0)}function nv(t){return t?Uc(t)||qp(t)?ct({},t):t:null}function vs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?rv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&nm(u),ref:e&&e.ref?n&&i?fe(i)?i.concat(So(e)):[i,So(e)]:So(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vs(t.ssContent),ssFallback:t.ssFallback&&vs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&jc(d,c.clone(d)),d}function Vn(t=" ",e=0){return _e(wa,null,t,e)}function rm(t,e){const n=_e(Ro,null,t);return n.staticCount=e,n}function Oe(t="",e=!1){return e?(z(),ze(hr,null,t)):_e(hr,null,t)}function hn(t){return t==null||typeof t=="boolean"?_e(hr):fe(t)?_e(tt,null,t.slice()):Ti(t)?Zn(t):_e(wa,null,String(t))}function Zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vs(t)}function Gc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!qp(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[Vn(e)]):n=8);t.children=e,t.shapeFlag|=n}function rv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Mt([e.class,r.class]));else if(s==="style")e.style=En([e.style,r.style]);else if(ha(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function cn(t,e,n,r=null){_n(t,e,7,[n,r])}const sv=Up();let iv=0;function ov(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sv,i={uid:iv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ap(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hp(r,s),emitsOptions:Zp(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=K0.bind(null,i),t.ce&&t.ce(i),i}let gt=null,zo,Xl;{const t=ma(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};zo=e("__VUE_INSTANCE_SETTERS__",n=>gt=n),Xl=e("__VUE_SSR_SETTERS__",n=>Ii=n)}const Li=t=>{const e=gt;return zo(t),t.scope.on(),()=>{t.scope.off(),zo(e)}},Zh=()=>{gt&&gt.scope.off(),zo(null)};function sm(t){return t.vnode.shapeFlag&4}let Ii=!1;function av(t,e=!1,n=!1){e&&Xl(e);const{props:r,children:s}=t.vnode,i=sm(t);O0(t,r,i,e),F0(t,s,n);const o=i?lv(t,e):void 0;return e&&Xl(!1),o}function lv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,A0);const{setup:r}=n;if(r){yr();const s=t.setupContext=r.length>1?uv(t):null,i=Li(t),o=xi(r,t,0,[t.props,s]),l=ep(o);if(vr(),i(),(l||t.sp)&&!ps(t)&&Vp(t),l){if(o.then(Zh,Zh),e)return o.then(c=>{ed(t,c,e)}).catch(c=>{_a(c,t,0)});t.asyncDep=o}else ed(t,o,e)}else im(t,e)}function ed(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=Sp(e)),im(t,n)}let td;function im(t,e,n){const r=t.type;if(!t.render){if(!e&&td&&!r.render){const s=r.template||zc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=ct(ct({isCustomElement:i,delimiters:l},o),c);r.render=td(s,u)}}t.render=r.render||dn}{const s=Li(t);yr();try{R0(t)}finally{vr(),s()}}}const cv={get(t,e){return At(t,"get",""),t[e]}};function uv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cv),slots:t.slots,emit:t.emit,expose:e}}function Ta(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Sp($c(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in li)return li[n](t)},has(e,n){return n in e||n in li}})):t.proxy}function hv(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function dv(t){return ge(t)&&"__vccOpts"in t}const qe=(t,e)=>i0(t,e,Ii);function om(t,e,n){const r=arguments.length;return r===2?We(e)&&!fe(e)?Ti(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ti(n)&&(n=[n]),_e(t,e,n))}const fv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jl;const nd=typeof window<"u"&&window.trustedTypes;if(nd)try{Jl=nd.createPolicy("vue",{createHTML:t=>t})}catch{}const am=Jl?t=>Jl.createHTML(t):t=>t,pv="http://www.w3.org/2000/svg",mv="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,rd=An&&An.createElement("template"),gv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?An.createElementNS(pv,t):e==="mathml"?An.createElementNS(mv,t):n?An.createElement(t,{is:n}):An.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{rd.innerHTML=am(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=rd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_v=Symbol("_vtc");function yv(t,e,n){const r=t[_v];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const sd=Symbol("_vod"),vv=Symbol("_vsh"),Ev=Symbol(""),wv=/(^|;)\s*display\s*:/;function Tv(t,e,n){const r=t.style,s=rt(n);let i=!1;if(n&&!s){if(e)if(rt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Co(r,l,"")}else for(const o in e)n[o]==null&&Co(r,o,"");for(const o in n)o==="display"&&(i=!0),Co(r,o,n[o])}else if(s){if(e!==n){const o=r[Ev];o&&(n+=";"+o),r.cssText=n,i=wv.test(n)}}else e&&t.removeAttribute("style");sd in t&&(t[sd]=i?r.display:"",t[vv]&&(r.display="none"))}const id=/\s*!important$/;function Co(t,e,n){if(fe(n))n.forEach(r=>Co(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Iv(t,e);id.test(n)?t.setProperty(_r(r),n.replace(id,""),"important"):t[r]=n}}const od=["Webkit","Moz","ms"],Tl={};function Iv(t,e){const n=Tl[e];if(n)return n;let r=Jt(e);if(r!=="filter"&&r in t)return Tl[e]=r;r=pa(r);for(let s=0;s<od.length;s++){const i=od[s]+r;if(i in t)return Tl[e]=i}return e}const ad="http://www.w3.org/1999/xlink";function ld(t,e,n,r,s,i=Dy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ad,e.slice(6,e.length)):t.setAttributeNS(ad,e,n):n==null||i&&!sp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Bn(n)?String(n):n)}function cd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?am(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=sp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ss(t,e,n,r){t.addEventListener(e,n,r)}function bv(t,e,n,r){t.removeEventListener(e,n,r)}const ud=Symbol("_vei");function Av(t,e,n,r,s=null){const i=t[ud]||(t[ud]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=Rv(e);if(r){const u=i[e]=Pv(r,s);ss(t,l,u,c)}else o&&(bv(t,l,o,c),i[e]=void 0)}}const hd=/(?:Once|Passive|Capture)$/;function Rv(t){let e;if(hd.test(t)){e={};let r;for(;r=t.match(hd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let Il=0;const Sv=Promise.resolve(),Cv=()=>Il||(Sv.then(()=>Il=0),Il=Date.now());function Pv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;_n(kv(r,n.value),e,5,[r])};return n.value=t,n.attached=Cv(),n}function kv(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const dd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Dv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?yv(t,r,o):e==="style"?Tv(t,n,r):ha(e)?kc(e)||Av(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nv(t,e,r,o))?(cd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ld(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!rt(r))?cd(t,Jt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ld(t,e,r,o))};function Nv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&dd(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return dd(e)&&rt(n)?!1:e in t}const fd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>Io(e,n):e};function Vv(t){t.target.composing=!0}function pd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bl=Symbol("_assign"),Zl={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[bl]=fd(s);const i=r||s.props&&s.props.type==="number";ss(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Bl(l)),t[bl](l)}),n&&ss(t,"change",()=>{t.value=t.value.trim()}),e||(ss(t,"compositionstart",Vv),ss(t,"compositionend",pd),ss(t,"change",pd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[bl]=fd(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Bl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Ov={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Mv=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=_r(s.key);if(e.some(o=>o===i||Ov[o]===i))return t(s)})},xv=ct({patchProp:Dv},gv);let md;function Lv(){return md||(md=$0(xv))}const Fv=(...t)=>{const e=Lv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$v(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Uv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Uv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $v(t){return rt(t)?document.querySelector(t):t}var Bv=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let lm;const Ia=t=>lm=t,cm=Symbol();function ec(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ui;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ui||(ui={}));function qv(){const t=lp(!0),e=t.run(()=>le({}));let n=[],r=[];const s=$c({install(i){Ia(s),s._a=i,i.provide(cm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Bv?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const um=()=>{};function gd(t,e,n,r=um){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&cp()&&Ny(s),s}function ns(t,...e){t.slice().forEach(n=>{n(...e)})}const jv=t=>t(),_d=Symbol(),Al=Symbol();function tc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ec(s)&&ec(r)&&t.hasOwnProperty(n)&&!Je(r)&&!or(r)?t[n]=tc(s,r):t[n]=r}return t}const Hv=Symbol();function zv(t){return!ec(t)||!t.hasOwnProperty(Hv)}const{assign:Xn}=Object;function Wv(t){return!!(Je(t)&&t.effect)}function Gv(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const d=t0(n.state.value[t]);return Xn(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=$c(qe(()=>{Ia(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return c=hm(t,u,e,n,r,!0),c}function hm(t,e,n={},r,s,i){let o;const l=Xn({actions:{}},n),c={deep:!0};let u,d,p=[],m=[],_;const I=r.state.value[t];!i&&!I&&(r.state.value[t]={}),le({});let S;function C(y){let E;u=d=!1,typeof y=="function"?(y(r.state.value[t]),E={type:ui.patchFunction,storeId:t,events:_}):(tc(r.state.value[t],y),E={type:ui.patchObject,payload:y,storeId:t,events:_});const b=S=Symbol();Bc().then(()=>{S===b&&(u=!0)}),d=!0,ns(p,E,r.state.value[t])}const D=i?function(){const{state:E}=n,b=E?E():{};this.$patch(R=>{Xn(R,b)})}:um;function x(){o.stop(),p=[],m=[],r._s.delete(t)}const L=(y,E="")=>{if(_d in y)return y[Al]=E,y;const b=function(){Ia(r);const R=Array.from(arguments),P=[],T=[];function dt(ue){P.push(ue)}function Ft(ue){T.push(ue)}ns(m,{args:R,name:b[Al],store:ie,after:dt,onError:Ft});let $e;try{$e=y.apply(this&&this.$id===t?this:ie,R)}catch(ue){throw ns(T,ue),ue}return $e instanceof Promise?$e.then(ue=>(ns(P,ue),ue)).catch(ue=>(ns(T,ue),Promise.reject(ue))):(ns(P,$e),$e)};return b[_d]=!0,b[Al]=E,b},B={_p:r,$id:t,$onAction:gd.bind(null,m),$patch:C,$reset:D,$subscribe(y,E={}){const b=gd(p,y,E.detached,()=>R()),R=o.run(()=>Mr(()=>r.state.value[t],P=>{(E.flush==="sync"?d:u)&&y({storeId:t,type:ui.direct,events:_},P)},Xn({},c,E)));return b},$dispose:x},ie=Mi(B);r._s.set(t,ie);const A=(r._a&&r._a.runWithContext||jv)(()=>r._e.run(()=>(o=lp()).run(()=>e({action:L}))));for(const y in A){const E=A[y];if(Je(E)&&!Wv(E)||or(E))i||(I&&zv(E)&&(Je(E)?E.value=I[y]:tc(E,I[y])),r.state.value[t][y]=E);else if(typeof E=="function"){const b=L(E,y);A[y]=b,l.actions[y]=E}}return Xn(ie,A),Xn(Ce(ie),A),Object.defineProperty(ie,"$state",{get:()=>r.state.value[t],set:y=>{C(E=>{Xn(E,y)})}}),r._p.forEach(y=>{Xn(ie,o.run(()=>y({store:ie,app:r._a,pinia:r,options:l})))}),I&&i&&n.hydrate&&n.hydrate(ie.$state,I),u=!0,d=!0,ie}/*! #__NO_SIDE_EFFECTS__ */function Fi(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=V0();return l=l||(u?rn(cm,null):null),l&&Ia(l),l=lm,l._s.has(r)||(i?hm(r,e,s,l):Gv(r,s,l)),l._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const is=typeof document<"u";function dm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Kv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&dm(t.default)}const ke=Object.assign;function Rl(t,e){const n={};for(const r in e){const s=e[r];n[r]=on(s)?s.map(t):t(s)}return n}const hi=()=>{},on=Array.isArray,fm=/#/g,Qv=/&/g,Yv=/\//g,Xv=/=/g,Jv=/\?/g,pm=/\+/g,Zv=/%5B/g,eE=/%5D/g,mm=/%5E/g,tE=/%60/g,gm=/%7B/g,nE=/%7C/g,_m=/%7D/g,rE=/%20/g;function Kc(t){return encodeURI(""+t).replace(nE,"|").replace(Zv,"[").replace(eE,"]")}function sE(t){return Kc(t).replace(gm,"{").replace(_m,"}").replace(mm,"^")}function nc(t){return Kc(t).replace(pm,"%2B").replace(rE,"+").replace(fm,"%23").replace(Qv,"%26").replace(tE,"`").replace(gm,"{").replace(_m,"}").replace(mm,"^")}function iE(t){return nc(t).replace(Xv,"%3D")}function oE(t){return Kc(t).replace(fm,"%23").replace(Jv,"%3F")}function aE(t){return t==null?"":oE(t).replace(Yv,"%2F")}function bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const lE=/\/$/,cE=t=>t.replace(lE,"");function Sl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=fE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:bi(o)}}function uE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Es(e.matched[r],n.matched[s])&&ym(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ym(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!dE(t[n],e[n]))return!1;return!0}function dE(t,e){return on(t)?vd(t,e):on(e)?vd(e,t):t===e}function vd(t,e){return on(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function fE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ai;(function(t){t.pop="pop",t.push="push"})(Ai||(Ai={}));var di;(function(t){t.back="back",t.forward="forward",t.unknown=""})(di||(di={}));function pE(t){if(!t)if(is){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cE(t)}const mE=/^[^#]+#/;function gE(t,e){return t.replace(mE,"#")+e}function _E(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ba=()=>({left:window.scrollX,top:window.scrollY});function yE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=_E(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ed(t,e){return(history.state?history.state.position-e:-1)+t}const rc=new Map;function vE(t,e){rc.set(t,e)}function EE(t){const e=rc.get(t);return rc.delete(t),e}let wE=()=>location.protocol+"//"+location.host;function vm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),yd(c,"")}return yd(n,t)+r+s}function TE(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=vm(t,location),I=n.value,S=e.value;let C=0;if(m){if(n.value=_,e.value=m,o&&o===I){o=null;return}C=S?m.position-S.position:0}else r(_);s.forEach(D=>{D(n.value,I,{delta:C,type:Ai.pop,direction:C?C>0?di.forward:di.back:di.unknown})})};function c(){o=n.value}function u(m){s.push(m);const _=()=>{const I=s.indexOf(m);I>-1&&s.splice(I,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(ke({},m.state,{scroll:ba()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function wd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ba():null}}function IE(t){const{history:e,location:n}=window,r={value:vm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:wE()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,u){const d=ke({},e.state,wd(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=ke({},s.value,e.state,{forward:c,scroll:ba()});i(d.current,d,!0);const p=ke({},wd(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function bE(t){t=pE(t);const e=IE(t),n=TE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:gE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function AE(t){return typeof t=="string"||t&&typeof t=="object"}function Em(t){return typeof t=="string"||typeof t=="symbol"}const wm=Symbol("");var Td;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Td||(Td={}));function ws(t,e){return ke(new Error,{type:t,[wm]:!0},e)}function bn(t,e){return t instanceof Error&&wm in t&&(e==null||!!(t.type&e))}const Id="[^/]+?",RE={sensitive:!1,strict:!1,start:!0,end:!0},SE=/[.+*?^${}()[\]/\\]/g;function CE(t,e){const n=ke({},RE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(SE,"\\$&"),_+=40;else if(m.type===1){const{value:I,repeatable:S,optional:C,regexp:D}=m;i.push({name:I,repeatable:S,optional:C});const x=D||Id;if(x!==Id){_+=10;try{new RegExp(`(${x})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${I}" (${x}): `+B.message)}}let L=S?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;p||(L=C&&u.length<2?`(?:/${L})`:"/"+L),C&&(L+="?"),s+=L,_+=20,C&&(_+=-8),S&&(_+=-20),x===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",I=i[m-1];p[I.name]=_&&I.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:I,repeatable:S,optional:C}=_,D=I in u?u[I]:"";if(on(D)&&!S)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const x=on(D)?D.join("/"):D;if(!x)if(C)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${I}"`);d+=x}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function PE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Tm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=PE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(bd(r))return 1;if(bd(s))return-1}return s.length-r.length}function bd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kE={type:0,value:""},DE=/[a-zA-Z0-9_]/;function NE(t){if(!t)return[[]];if(t==="/")return[[kE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:DE.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function VE(t,e,n){const r=CE(NE(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function OE(t,e){const n=[],r=new Map;e=Cd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const I=!_,S=Rd(p);S.aliasOf=_&&_.record;const C=Cd(e,p),D=[S];if("alias"in p){const B=typeof p.alias=="string"?[p.alias]:p.alias;for(const ie of B)D.push(Rd(ke({},S,{components:_?_.record.components:S.components,path:ie,aliasOf:_?_.record:S})))}let x,L;for(const B of D){const{path:ie}=B;if(m&&ie[0]!=="/"){const ye=m.record.path,A=ye[ye.length-1]==="/"?"":"/";B.path=m.record.path+(ie&&A+ie)}if(x=VE(B,m,C),_?_.alias.push(x):(L=L||x,L!==x&&L.alias.push(x),I&&p.name&&!Sd(x)&&o(p.name)),Im(x)&&c(x),S.children){const ye=S.children;for(let A=0;A<ye.length;A++)i(ye[A],x,_&&_.children[A])}_=_||x}return L?()=>{o(L)}:hi}function o(p){if(Em(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=LE(p,n);n.splice(m,0,p),p.record.name&&!Sd(p)&&r.set(p.record.name,p)}function u(p,m){let _,I={},S,C;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ws(1,{location:p});C=_.record.name,I=ke(Ad(m.params,_.keys.filter(L=>!L.optional).concat(_.parent?_.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&Ad(p.params,_.keys.map(L=>L.name))),S=_.stringify(I)}else if(p.path!=null)S=p.path,_=n.find(L=>L.re.test(S)),_&&(I=_.parse(S),C=_.record.name);else{if(_=m.name?r.get(m.name):n.find(L=>L.re.test(m.path)),!_)throw ws(1,{location:p,currentLocation:m});C=_.record.name,I=ke({},m.params,p.params),S=_.stringify(I)}const D=[];let x=_;for(;x;)D.unshift(x.record),x=x.parent;return{name:C,path:S,params:I,matched:D,meta:xE(D)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Ad(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Rd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ME(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ME(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Sd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function xE(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Cd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function LE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Tm(t,e[i])<0?r=i:n=i+1}const s=FE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function FE(t){let e=t;for(;e=e.parent;)if(Im(e)&&Tm(t,e)===0)return e}function Im({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function UE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(pm," "),o=i.indexOf("="),l=bi(o<0?i:i.slice(0,o)),c=o<0?null:bi(i.slice(o+1));if(l in e){let u=e[l];on(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Pd(t){let e="";for(let n in t){const r=t[n];if(n=iE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(r)?r.map(i=>i&&nc(i)):[r&&nc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function $E(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=on(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const BE=Symbol(""),kd=Symbol(""),Aa=Symbol(""),bm=Symbol(""),sc=Symbol("");function Zs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function er(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(ws(4,{from:n,to:e})):m instanceof Error?c(m):AE(m)?c(ws(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Cl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(dm(c)){const d=(c.__vccOpts||c)[e];d&&i.push(er(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Kv(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&er(_,n,r,o,l,s)()}))}}return i}function Dd(t){const e=rn(Aa),n=rn(bm),r=qe(()=>{const c=ds(t.to);return e.resolve(c)}),s=qe(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Es.bind(null,d));if(m>-1)return m;const _=Nd(c[u-2]);return u>1&&Nd(d)===_&&p[p.length-1].path!==_?p.findIndex(Es.bind(null,c[u-2])):m}),i=qe(()=>s.value>-1&&WE(n.params,r.value.params)),o=qe(()=>s.value>-1&&s.value===n.matched.length-1&&ym(n.params,r.value.params));function l(c={}){if(zE(c)){const u=e[ds(t.replace)?"replace":"push"](ds(t.to)).catch(hi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:qe(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function qE(t){return t.length===1?t[0]:t}const jE=Me({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dd,setup(t,{slots:e}){const n=Mi(Dd(t)),{options:r}=rn(Aa),s=qe(()=>({[Vd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&qE(e.default(n));return t.custom?i:om("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),HE=jE;function zE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!on(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Nd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vd=(t,e,n)=>t??e??n,GE=Me({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=rn(sc),s=qe(()=>t.route||r.value),i=rn(kd,0),o=qe(()=>{let u=ds(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=qe(()=>s.value.matched[o.value]);Ao(kd,qe(()=>o.value+1)),Ao(BE,l),Ao(sc,s);const c=le();return Mr(()=>[c.value,l.value,t.name],([u,d,p],[m,_,I])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Es(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Od(n.default,{Component:m,route:u});const _=p.props[d],I=_?_===!0?u.params:typeof _=="function"?_(u):_:null,C=om(m,ke({},I,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Od(n.default,{Component:C,route:u})||C}}});function Od(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const KE=GE;function QE(t){const e=OE(t.routes,t),n=t.parseQuery||UE,r=t.stringifyQuery||Pd,s=t.history,i=Zs(),o=Zs(),l=Zs(),c=Jy(Qn);let u=Qn;is&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Rl.bind(null,M=>""+M),p=Rl.bind(null,aE),m=Rl.bind(null,bi);function _(M,J){let Q,te;return Em(M)?(Q=e.getRecordMatcher(M),te=J):te=M,e.addRoute(te,Q)}function I(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function S(){return e.getRoutes().map(M=>M.record)}function C(M){return!!e.getRecordMatcher(M)}function D(M,J){if(J=ke({},J||c.value),typeof M=="string"){const w=Sl(n,M,J.path),N=e.resolve({path:w.path},J),$=s.createHref(w.fullPath);return ke(w,N,{params:m(N.params),hash:bi(w.hash),redirectedFrom:void 0,href:$})}let Q;if(M.path!=null)Q=ke({},M,{path:Sl(n,M.path,J.path).path});else{const w=ke({},M.params);for(const N in w)w[N]==null&&delete w[N];Q=ke({},M,{params:p(w)}),J.params=p(J.params)}const te=e.resolve(Q,J),be=M.hash||"";te.params=d(m(te.params));const xe=uE(r,ke({},M,{hash:sE(be),path:te.path})),v=s.createHref(xe);return ke({fullPath:xe,hash:be,query:r===Pd?$E(M.query):M.query||{}},te,{redirectedFrom:void 0,href:v})}function x(M){return typeof M=="string"?Sl(n,M,c.value.path):ke({},M)}function L(M,J){if(u!==M)return ws(8,{from:J,to:M})}function B(M){return A(M)}function ie(M){return B(ke(x(M),{replace:!0}))}function ye(M){const J=M.matched[M.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let te=typeof Q=="function"?Q(M):Q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=x(te):{path:te},te.params={}),ke({query:M.query,hash:M.hash,params:te.path!=null?{}:M.params},te)}}function A(M,J){const Q=u=D(M),te=c.value,be=M.state,xe=M.force,v=M.replace===!0,w=ye(Q);if(w)return A(ke(x(w),{state:typeof w=="object"?ke({},be,w.state):be,force:xe,replace:v}),J||Q);const N=Q;N.redirectedFrom=J;let $;return!xe&&hE(r,te,Q)&&($=ws(16,{to:N,from:te}),Qt(te,te,!0,!1)),($?Promise.resolve($):b(N,te)).catch(O=>bn(O)?bn(O,2)?O:Zt(O):Ee(O,N,te)).then(O=>{if(O){if(bn(O,2))return A(ke({replace:v},x(O.to),{state:typeof O.to=="object"?ke({},be,O.to.state):be,force:xe}),J||N)}else O=P(N,te,!0,v,be);return R(N,te,O),O})}function y(M,J){const Q=L(M,J);return Q?Promise.reject(Q):Promise.resolve()}function E(M){const J=Hn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function b(M,J){let Q;const[te,be,xe]=YE(M,J);Q=Cl(te.reverse(),"beforeRouteLeave",M,J);for(const w of te)w.leaveGuards.forEach(N=>{Q.push(er(N,M,J))});const v=y.bind(null,M,J);return Q.push(v),Ut(Q).then(()=>{Q=[];for(const w of i.list())Q.push(er(w,M,J));return Q.push(v),Ut(Q)}).then(()=>{Q=Cl(be,"beforeRouteUpdate",M,J);for(const w of be)w.updateGuards.forEach(N=>{Q.push(er(N,M,J))});return Q.push(v),Ut(Q)}).then(()=>{Q=[];for(const w of xe)if(w.beforeEnter)if(on(w.beforeEnter))for(const N of w.beforeEnter)Q.push(er(N,M,J));else Q.push(er(w.beforeEnter,M,J));return Q.push(v),Ut(Q)}).then(()=>(M.matched.forEach(w=>w.enterCallbacks={}),Q=Cl(xe,"beforeRouteEnter",M,J,E),Q.push(v),Ut(Q))).then(()=>{Q=[];for(const w of o.list())Q.push(er(w,M,J));return Q.push(v),Ut(Q)}).catch(w=>bn(w,8)?w:Promise.reject(w))}function R(M,J,Q){l.list().forEach(te=>E(()=>te(M,J,Q)))}function P(M,J,Q,te,be){const xe=L(M,J);if(xe)return xe;const v=J===Qn,w=is?history.state:{};Q&&(te||v?s.replace(M.fullPath,ke({scroll:v&&w&&w.scroll},be)):s.push(M.fullPath,be)),c.value=M,Qt(M,J,Q,v),Zt()}let T;function dt(){T||(T=s.listen((M,J,Q)=>{if(!ln.listening)return;const te=D(M),be=ye(te);if(be){A(ke(be,{replace:!0,force:!0}),te).catch(hi);return}u=te;const xe=c.value;is&&vE(Ed(xe.fullPath,Q.delta),ba()),b(te,xe).catch(v=>bn(v,12)?v:bn(v,2)?(A(ke(x(v.to),{force:!0}),te).then(w=>{bn(w,20)&&!Q.delta&&Q.type===Ai.pop&&s.go(-1,!1)}).catch(hi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),Ee(v,te,xe))).then(v=>{v=v||P(te,xe,!1),v&&(Q.delta&&!bn(v,8)?s.go(-Q.delta,!1):Q.type===Ai.pop&&bn(v,20)&&s.go(-1,!1)),R(te,xe,v)}).catch(hi)}))}let Ft=Zs(),$e=Zs(),ue;function Ee(M,J,Q){Zt(M);const te=$e.list();return te.length?te.forEach(be=>be(M,J,Q)):console.error(M),Promise.reject(M)}function jt(){return ue&&c.value!==Qn?Promise.resolve():new Promise((M,J)=>{Ft.add([M,J])})}function Zt(M){return ue||(ue=!M,dt(),Ft.list().forEach(([J,Q])=>M?Q(M):J()),Ft.reset()),M}function Qt(M,J,Q,te){const{scrollBehavior:be}=t;if(!is||!be)return Promise.resolve();const xe=!Q&&EE(Ed(M.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return Bc().then(()=>be(M,J,xe)).then(v=>v&&yE(v)).catch(v=>Ee(v,M,J))}const Ge=M=>s.go(M);let Ke;const Hn=new Set,ln={currentRoute:c,listening:!0,addRoute:_,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:S,resolve:D,options:t,push:B,replace:ie,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:$e.add,isReady:jt,install(M){const J=this;M.component("RouterLink",HE),M.component("RouterView",KE),M.config.globalProperties.$router=J,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ds(c)}),is&&!Ke&&c.value===Qn&&(Ke=!0,B(s.location).catch(be=>{}));const Q={};for(const be in Qn)Object.defineProperty(Q,be,{get:()=>c.value[be],enumerable:!0});M.provide(Aa,J),M.provide(bm,bp(Q)),M.provide(sc,c);const te=M.unmount;Hn.add(M),M.unmount=function(){Hn.delete(M),Hn.size<1&&(u=Qn,T&&T(),T=null,c.value=Qn,Ke=!1,ue=!1),te()}}};function Ut(M){return M.reduce((J,Q)=>J.then(()=>E(Q)),Promise.resolve())}return ln}function YE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Es(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Es(u,c))||s.push(c))}return[n,r,s]}function Ra(){return rn(Aa)}const XE=Me({props:{color:{type:String,default:"white"},text:{type:String,default:""}},setup(t){return{iconHomeStyle:qe(()=>({"--icon-color":t.color}))}}}),Ue=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},JE={key:0,class:"text"};function ZE(t,e,n,r,s,i){return z(),re("div",{class:"icon-home",style:En(t.iconHomeStyle)},[e[0]||(e[0]=X("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[X("path",{d:"M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"})],-1)),t.$props.text&&t.$props.text.length>0?(z(),re("div",JE,Ne(t.$props.text),1)):Oe("",!0)],4)}const ew=Ue(XE,[["render",ZE],["__scopeId","data-v-c1df092f"]]),tw=Me({props:{color:{type:String,default:"white"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconLightSwitchStyle:qe(()=>({"--icon-color":t.color,fontSize:t.fontSize}))}}}),nw={fill:"#000000",viewBox:"0 0 64 64","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},xmlns:"http://www.w3.org/2000/svg"},rw={key:0,class:"text"};function sw(t,e,n,r,s,i){return z(),re("div",{class:"icon-light-switch",style:En(t.iconLightSwitchStyle)},[(z(),re("svg",nw,e[0]||(e[0]=[rm('<g stroke-width="0" data-v-be2209a6></g><g stroke-linecap="round" stroke-linejoin="round" data-v-be2209a6></g><g data-v-be2209a6><rect x="0" y="-320" width="1280" height="800" style="fill:none;" data-v-be2209a6></rect><g transform="matrix(1.3258707,0,0,1.3751367,-10.338119,-12.63741)" data-v-be2209a6><path d="m 25.022,17.099 c 2.715,-0.012 12.015,0.058 13.952,0 22.08,-0.662 22.961,30.643 0,30.023 -3.488,0.015 -12.792,-0.064 -13.952,0 C 14.663,47.694 7.982,40.3 8.025,31.85 8.067,23.399 15.555,16.13 25.022,17.099 Z M 32.904,32.11 C 33.047,26.747 28.24,22.014 22.889,22.095 c -7.31,0.111 -10.482,6.7 -10.016,10.947 0.625,5.691 5.193,9.06 10.016,9.084 5.536,0.026 9.862,-4.308 10.015,-10.016 z" style="fill-rule:nonzero;" data-v-be2209a6></path></g></g>',3)]))),t.$props.text&&t.$props.text.length>0?(z(),re("div",rw,Ne(t.$props.text),1)):Oe("",!0)],4)}const Am=Ue(tw,[["render",sw],["__scopeId","data-v-be2209a6"]]),iw=Me({props:{color:{type:String,default:"white"},strokeColor:{type:String,default:"black"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconScheduleStyle:qe(()=>({"--icon-color":t.color,"--icon-stroke-color":t.strokeColor,fontSize:t.fontSize}))}}}),ow={key:0,class:"text"};function aw(t,e,n,r,s,i){return z(),re("div",{class:"icon-schedule",style:En(t.iconScheduleStyle)},[e[0]||(e[0]=rm('<svg viewBox="0 0 24 24" stroke-width="3" stroke="#000000" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-604fa35c><path d="M 14.020182,21.685362 H 1.8335071 A 1.095136,1.0848345 0 0 1 0.74275167,20.622224 V 3.3169452 A 1.0907555,1.0804951 0 0 1 1.8335071,2.2364501 H 19.285596 a 1.0907555,1.0804951 0 0 1 1.090755,1.0804951 v 9.7201178" style="stroke-width:1.30797;" data-v-604fa35c></path><line x1="0.74275166" y1="7.0097213" x2="20.376347" y2="7.0097213" style="stroke-width:1.30797;" data-v-604fa35c></line><line x1="5.1714816" y1="2.2364504" x2="5.1714816" y2="0.066781186" style="stroke-width:1.30797;" data-v-604fa35c></line><line x1="15.667263" y1="2.2364504" x2="15.667263" y2="0.066781186" style="stroke-width:1.30797;" data-v-604fa35c></line><ellipse cx="17.769928" cy="17.775614" rx="5.4450164" ry="5.3937974" style="stroke-width:1.30797;" data-v-604fa35c></ellipse><polyline points="45.22 36.7 45.22 45.82 49.57 49.16" transform="matrix(0.43805442,0,0,0.43393378,-2.0388941,-1.9423323)" data-v-604fa35c></polyline></svg>',1)),t.$props.text&&t.$props.text.length>0?(z(),re("div",ow,Ne(t.$props.text),1)):Oe("",!0)],4)}const Rm=Ue(iw,[["render",aw],["__scopeId","data-v-604fa35c"]]),lw=Me({name:"task-bar",components:{IconSchedule:Rm,IconLightSwitch:Am,IconHome:ew},setup(){const t=Ra();Hr(()=>{e("relays")});function e(n){t.push({name:n})}return{}}}),cw={class:"task-bar"};function uw(t,e,n,r,s,i){const o=ve("icon-home"),l=ve("router-link"),c=ve("icon-light-switch"),u=ve("icon-schedule");return z(),re("div",cw,[_e(l,{to:"/home",class:"task"},{default:fn(()=>[_e(o,{text:"Home"})]),_:1}),_e(l,{to:"/relays",class:"task"},{default:fn(()=>[_e(c,{text:"Relays"})]),_:1}),_e(l,{to:"/schedules",class:"task"},{default:fn(()=>[_e(u,{text:"Schedules"})]),_:1})])}const hw=Ue(lw,[["render",uw],["__scopeId","data-v-a291f81d"]]),dw=Me({props:{spinnerSize:{type:String,default:"30px"},withText:{type:Boolean,default:!1}},setup(){return{}}}),fw={class:"spinner"},pw={key:0,class:"text"};function mw(t,e,n,r,s,i){return z(),re("div",fw,[X("div",{class:"spinner-inner",style:En({"--spinnerSize":t.spinnerSize})},null,4),t.withText?(z(),re("div",pw,"Laden...")):Oe("",!0)])}const Sa=Ue(dw,[["render",mw],["__scopeId","data-v-8cb8f775"]]),gw=Me({components:{Spinner:Sa},props:{text:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},emits:["onButtonClicked"],setup(t,e){function n(){e.emit("onButtonClicked")}return{onClicked:n}}}),_w={key:1,class:"button-content"};function yw(t,e,n,r,s,i){const o=ve("spinner");return z(),re("div",{class:Mt(["button-default",{"is-loading":t.isLoading}]),tabindex:"0",onClick:e[0]||(e[0]=(...l)=>t.onClicked&&t.onClicked(...l)),onKeydown:e[1]||(e[1]=Mv((...l)=>t.onClicked&&t.onClicked(...l),["enter"]))},[t.isLoading?(z(),ze(o,{key:0,spinnerSize:"20px"})):(z(),re("div",_w,[bo(t.$slots,"icon",{},void 0),Vn(" "+Ne(t.text),1)]))],34)}const zr=Ue(gw,[["render",yw],["__scopeId","data-v-77c23fe7"]]),Sm=Fi("user",()=>{const t=le(null);return{user:t,setUser:n=>{t.value=n}}});var Md={};/**
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
 */const Cm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Ew;const m=i<<2|l>>4;if(r.push(m),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const I=u<<6&192|p;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ew extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ww=function(t){const e=Cm(t);return Pm.encodeByteArray(e,!0)},Wo=function(t){return ww(t).replace(/\./g,"")},km=function(t){try{return Pm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Iw=()=>Tw().__FIREBASE_DEFAULTS__,bw=()=>{if(typeof process>"u"||typeof Md>"u")return;const t=Md.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Aw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&km(t[1]);return e&&JSON.parse(e)},Ca=()=>{try{return Iw()||bw()||Aw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dm=t=>{var e,n;return(n=(e=Ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rw=t=>{const e=Dm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nm=()=>{var t;return(t=Ca())===null||t===void 0?void 0:t.config},Vm=t=>{var e;return(e=Ca())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Sw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Cw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wo(JSON.stringify(n)),Wo(JSON.stringify(o)),""].join(".")}/**
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
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function kw(){var t;const e=(t=Ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ow(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mw(){return!kw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Lw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Fw="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Fw,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Uw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new jn(s,l,r)}}function Uw(t,e){return t.replace($w,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $w=/\{\$([^}]+)}/g;function Bw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Go(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(xd(i)&&xd(o)){if(!Go(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function xd(t){return t!==null&&typeof t=="object"}/**
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
 */function $i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qw(t,e){const n=new jw(t,e);return n.subscribe.bind(n)}class jw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Hw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Pl),s.error===void 0&&(s.error=Pl),s.complete===void 0&&(s.complete=Pl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pl(){}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class Ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kr="[DEFAULT]";/**
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
 */class zw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Sw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gw(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ww(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ww(t){return t===kr?void 0:t}function Gw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Kw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const Qw={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},Yw=we.INFO,Xw={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},Jw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Xw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qc{constructor(e){this.name=e,this._logLevel=Yw,this._logHandler=Jw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const Zw=(t,e)=>e.some(n=>t instanceof n);let Ld,Fd;function eT(){return Ld||(Ld=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tT(){return Fd||(Fd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Om=new WeakMap,ic=new WeakMap,Mm=new WeakMap,kl=new WeakMap,Yc=new WeakMap;function nT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ar(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Om.set(n,t)}).catch(()=>{}),Yc.set(e,t),e}function rT(t){if(ic.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ic.set(t,e)}let oc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sT(t){oc=t(oc)}function iT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dl(this),e,...n);return Mm.set(r,e.sort?e.sort():[e]),ar(r)}:tT().includes(t)?function(...e){return t.apply(Dl(this),e),ar(Om.get(this))}:function(...e){return ar(t.apply(Dl(this),e))}}function oT(t){return typeof t=="function"?iT(t):(t instanceof IDBTransaction&&rT(t),Zw(t,eT())?new Proxy(t,oc):t)}function ar(t){if(t instanceof IDBRequest)return nT(t);if(kl.has(t))return kl.get(t);const e=oT(t);return e!==t&&(kl.set(t,e),Yc.set(e,t)),e}const Dl=t=>Yc.get(t);function aT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ar(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ar(o.result),c.oldVersion,c.newVersion,ar(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const lT=["get","getKey","getAll","getAllKeys","count"],cT=["put","add","delete","clear"],Nl=new Map;function Ud(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nl.get(e))return Nl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Nl.set(e,i),i}sT(t=>({...t,get:(e,n,r)=>Ud(e,n)||t.get(e,n,r),has:(e,n)=>!!Ud(e,n)||t.has(e,n)}));/**
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
 */class uT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ac="@firebase/app",$d="0.10.17";/**
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
 */const Mn=new Qc("@firebase/app"),dT="@firebase/app-compat",fT="@firebase/analytics-compat",pT="@firebase/analytics",mT="@firebase/app-check-compat",gT="@firebase/app-check",_T="@firebase/auth",yT="@firebase/auth-compat",vT="@firebase/database",ET="@firebase/data-connect",wT="@firebase/database-compat",TT="@firebase/functions",IT="@firebase/functions-compat",bT="@firebase/installations",AT="@firebase/installations-compat",RT="@firebase/messaging",ST="@firebase/messaging-compat",CT="@firebase/performance",PT="@firebase/performance-compat",kT="@firebase/remote-config",DT="@firebase/remote-config-compat",NT="@firebase/storage",VT="@firebase/storage-compat",OT="@firebase/firestore",MT="@firebase/vertexai",xT="@firebase/firestore-compat",LT="firebase",FT="11.1.0";/**
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
 */const lc="[DEFAULT]",UT={[ac]:"fire-core",[dT]:"fire-core-compat",[pT]:"fire-analytics",[fT]:"fire-analytics-compat",[gT]:"fire-app-check",[mT]:"fire-app-check-compat",[_T]:"fire-auth",[yT]:"fire-auth-compat",[vT]:"fire-rtdb",[ET]:"fire-data-connect",[wT]:"fire-rtdb-compat",[TT]:"fire-fn",[IT]:"fire-fn-compat",[bT]:"fire-iid",[AT]:"fire-iid-compat",[RT]:"fire-fcm",[ST]:"fire-fcm-compat",[CT]:"fire-perf",[PT]:"fire-perf-compat",[kT]:"fire-rc",[DT]:"fire-rc-compat",[NT]:"fire-gcs",[VT]:"fire-gcs-compat",[OT]:"fire-fst",[xT]:"fire-fst-compat",[MT]:"fire-vertex","fire-js":"fire-js",[LT]:"fire-js-all"};/**
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
 */const Ko=new Map,$T=new Map,cc=new Map;function Bd(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ts(t){const e=t.name;if(cc.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;cc.set(e,t);for(const n of Ko.values())Bd(n,t);for(const n of $T.values())Bd(n,t);return!0}function Xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pn(t){return t.settings!==void 0}/**
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
 */const BT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new Ui("app","Firebase",BT);/**
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
 */class qT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ds=FT;function xm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw lr.create("bad-app-name",{appName:String(s)});if(n||(n=Nm()),!n)throw lr.create("no-options");const i=Ko.get(s);if(i){if(Go(n,i.options)&&Go(r,i.config))return i;throw lr.create("duplicate-app",{appName:s})}const o=new Kw(s);for(const c of cc.values())o.addComponent(c);const l=new qT(n,r,o);return Ko.set(s,l),l}function Lm(t=lc){const e=Ko.get(t);if(!e&&t===lc&&Nm())return xm();if(!e)throw lr.create("no-app",{appName:t});return e}function cr(t,e,n){var r;let s=(r=UT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(l.join(" "));return}Ts(new Ur(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jT="firebase-heartbeat-database",HT=1,Ri="firebase-heartbeat-store";let Vl=null;function Fm(){return Vl||(Vl=aT(jT,HT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),Vl}async function zT(t){try{const n=(await Fm()).transaction(Ri),r=await n.objectStore(Ri).get(Um(t));return await n.done,r}catch(e){if(e instanceof jn)Mn.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function qd(t,e){try{const r=(await Fm()).transaction(Ri,"readwrite");await r.objectStore(Ri).put(e,Um(t)),await r.done}catch(n){if(n instanceof jn)Mn.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function Um(t){return`${t.name}!${t.options.appId}`}/**
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
 */const WT=1024,GT=30*24*60*60*1e3;class KT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=GT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jd(),{heartbeatsToSend:r,unsentEntries:s}=QT(this._heartbeatsCache.heartbeats),i=Wo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Mn.warn(n),""}}}function jd(){return new Date().toISOString().substring(0,10)}function QT(t,e=WT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Hd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Hd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xw()?Lw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hd(t){return Wo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XT(t){Ts(new Ur("platform-logger",e=>new uT(e),"PRIVATE")),Ts(new Ur("heartbeat",e=>new KT(e),"PRIVATE")),cr(ac,$d,t),cr(ac,$d,"esm2017"),cr("fire-js","")}XT("");function Jc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JT=$m,Bm=new Ui("auth","Firebase",$m());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new Qc("@firebase/auth");function ZT(t,...e){Qo.logLevel<=we.WARN&&Qo.warn(`Auth (${Ds}): ${t}`,...e)}function Po(t,...e){Qo.logLevel<=we.ERROR&&Qo.error(`Auth (${Ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,...e){throw eu(t,...e)}function sn(t,...e){return eu(t,...e)}function Zc(t,e,n){const r=Object.assign(Object.assign({},JT()),{[e]:n});return new Ui("auth","Firebase",r).create(e,{appName:t.name})}function xr(t){return Zc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&yn(t,"argument-error"),Zc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bm.create(t,...e)}function de(t,e,...n){if(!t)throw eu(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function xn(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tI(){return zd()==="http:"||zd()==="https:"}function zd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tI()||Nw()||"connection"in navigator)?navigator.onLine:!0}function rI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=Pw()||Vw()}get(){return nI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=new Bi(3e4,6e4);function nu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ns(t,e,n,r,s={}){return jm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=$i(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Dw()||(u.referrerPolicy="no-referrer"),qm.fetch()(Hm(t,t.config.apiHost,n,l),u)})}async function jm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sI),e);try{const s=new aI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw _o(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zc(t,d,u);yn(t,d)}}catch(s){if(s instanceof jn)throw s;yn(t,"network-request-failed",{message:String(s)})}}async function oI(t,e,n,r,s={}){const i=await Ns(t,e,n,r,s);return"mfaPendingCredential"in i&&yn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Hm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?tu(t.config,s):`${t.config.apiScheme}://${s}`}class aI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),iI.get())})}}function _o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e){return Ns(t,"POST","/v1/accounts:delete",e)}async function zm(t,e){return Ns(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cI(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=ru(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fi(Ol(s.auth_time)),issuedAtTime:fi(Ol(s.iat)),expirationTime:fi(Ol(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ol(t){return Number(t)*1e3}function ru(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const s=km(n);return s?JSON.parse(s):(Po("Failed to decode base64 JWT payload"),null)}catch(s){return Po("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wd(t){const e=ru(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&uI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Si(t,zm(n,{idToken:r}));de(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Wm(i.providerUserInfo):[],l=fI(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new hc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function dI(t){const e=ut(t);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wm(t){return t.map(e=>{var{providerId:n}=e,r=Jc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(t,e){const n=await jm(t,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Hm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",qm.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mI(t,e){return Ns(t,"POST","/v2/accounts:revokeToken",nu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Wd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ms;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Jc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Si(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cI(this,e)}reload(){return dI(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await Si(this,lI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:B,isAnonymous:ie,providerData:ye,stsTokenManager:A}=n;de(L&&A,e,"internal-error");const y=ms.fromJSON(this.name,A);de(typeof L=="string",e,"internal-error"),Yn(p,e.name),Yn(m,e.name),de(typeof B=="boolean",e,"internal-error"),de(typeof ie=="boolean",e,"internal-error"),Yn(_,e.name),Yn(I,e.name),Yn(S,e.name),Yn(C,e.name),Yn(D,e.name),Yn(x,e.name);const E=new Dn({uid:L,auth:e,email:m,emailVerified:B,displayName:p,isAnonymous:ie,photoURL:I,phoneNumber:_,tenantId:S,stsTokenManager:y,createdAt:D,lastLoginAt:x});return ye&&Array.isArray(ye)&&(E.providerData=ye.map(b=>Object.assign({},b))),C&&(E._redirectEventId=C),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new ms;s.updateFromServerResponse(n);const i=new Dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Wm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ms;l.updateFromIdToken(r);const c=new Dn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new Map;function Nn(t){xn(t instanceof Function,"Expected a class definition");let e=Gd.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gd.set(t,e),e)}/**
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
 */class Gm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gm.type="NONE";const Kd=Gm;/**
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
 */function ko(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ko(this.userKey,s.apiKey,i),this.fullPersistenceKey=ko("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gs(Nn(Kd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Nn(Kd);const o=ko(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Dn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new gs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Km(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zm(e))return"Blackberry";if(eg(e))return"Webos";if(Qm(e))return"Safari";if((e.includes("chrome/")||Ym(e))&&!e.includes("edge/"))return"Chrome";if(Jm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Km(t=Pt()){return/firefox\//i.test(t)}function Qm(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ym(t=Pt()){return/crios\//i.test(t)}function Xm(t=Pt()){return/iemobile/i.test(t)}function Jm(t=Pt()){return/android/i.test(t)}function Zm(t=Pt()){return/blackberry/i.test(t)}function eg(t=Pt()){return/webos/i.test(t)}function su(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gI(t=Pt()){var e;return su(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _I(){return Ow()&&document.documentMode===10}function tg(t=Pt()){return su(t)||Jm(t)||eg(t)||Zm(t)||/windows phone/i.test(t)||Xm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e=[]){let n;switch(t){case"Browser":n=Qd(Pt());break;case"Worker":n=`${Qd(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${r}`}/**
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
 */class yI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vI(t,e={}){return Ns(t,"GET","/v2/passwordPolicy",nu(t,e))}/**
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
 */const EI=6;class wI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:EI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yd(this),this.idTokenSubscription=new Yd(this),this.beforeStateQueue=new yI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zm(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(xr(this));const n=e?ut(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vI(this),n=new wI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ng(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pa(t){return ut(t)}class Yd{constructor(e){this.auth=e,this.observer=null,this.addObserver=qw(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function II(t){iu=t}function bI(t){return iu.loadJS(t)}function AI(){return iu.gapiScript}function RI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t,e){const n=Xc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Go(i,e??{}))return s;yn(s,"already-initialized")}return n.initialize({options:e})}function CI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PI(t,e,n){const r=Pa(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=rg(e),{host:o,port:l}=kI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),DI()}function rg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kI(t){const e=rg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Xd(o)}}}function Xd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e){return oI(t,"POST","/v1/accounts:signInWithIdp",nu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="http://localhost";class $r extends sg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Jc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:NI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qi extends ou{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends qi{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends qi{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends qi{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dn._fromIdTokenResponse(e,r,s),o=Jd(r);return new Is({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Jd(r);return new Is({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Jd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends jn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Xo(e,n,r,s)}}function ig(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xo._fromErrorAndOperation(t,i,e,r):i})}async function VI(t,e,n=!1){const r=await Si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Is._forOperation(t,"link",r)}/**
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
 */async function OI(t,e,n=!1){const{auth:r}=t;if(Pn(r.app))return Promise.reject(xr(r));const s="reauthenticate";try{const i=await Si(t,ig(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=ru(i.idToken);de(o,r,"internal-error");const{sub:l}=o;return de(t.uid===l,r,"user-mismatch"),Is._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&yn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e,n=!1){if(Pn(t.app))return Promise.reject(xr(t));const r="signIn",s=await ig(t,r,e),i=await Is._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function xI(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function LI(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}const Jo="__sak";/**
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
 */class og{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=1e3,UI=10;class ag extends og{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_I()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ag.type="LOCAL";const $I=ag;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg extends og{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lg.type="SESSION";const cg=lg;/**
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
 */function BI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await BI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ka.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=au("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function jI(t){pn().location.href=t}/**
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
 */function ug(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function HI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WI(){return ug()?self:null}/**
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
 */const hg="firebaseLocalStorageDb",GI=1,Zo="firebaseLocalStorage",dg="fbase_key";class ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Da(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function KI(){const t=indexedDB.deleteDatabase(hg);return new ji(t).toPromise()}function dc(){const t=indexedDB.open(hg,GI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zo,{keyPath:dg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zo)?e(r):(r.close(),await KI(),e(await dc()))})})}async function Zd(t,e,n){const r=Da(t,!0).put({[dg]:e,value:n});return new ji(r).toPromise()}async function QI(t,e){const n=Da(t,!1).get(e),r=await new ji(n).toPromise();return r===void 0?null:r.value}function ef(t,e){const n=Da(t,!0).delete(e);return new ji(n).toPromise()}const YI=800,XI=3;class fg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ug()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ka._getInstance(WI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HI(),!this.activeServiceWorker)return;this.sender=new qI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dc();return await Zd(e,Jo,"1"),await ef(e,Jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ef(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Da(s,!1).getAll();return new ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fg.type="LOCAL";const JI=fg;new Bi(3e4,6e4);/**
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
 */function pg(t,e){return e?Nn(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lu extends sg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZI(t){return MI(t.auth,new lu(t),t.bypassAuthState)}function e1(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),OI(n,new lu(t),t.bypassAuthState)}async function t1(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),VI(n,new lu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZI;case"linkViaPopup":case"linkViaRedirect":return t1;case"reauthViaPopup":case"reauthViaRedirect":return e1;default:yn(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=new Bi(2e3,1e4);async function r1(t,e,n){if(Pn(t.app))return Promise.reject(sn(t,"operation-not-supported-in-this-environment"));const r=Pa(t);eI(t,e,ou);const s=pg(r,n);return new Dr(r,"signInViaPopup",e,s).executeNotNull()}class Dr extends mg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n1.get())};e()}}Dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="pendingRedirect",Do=new Map;class i1 extends mg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const r=await o1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o1(t,e){const n=c1(e),r=l1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function a1(t,e){Do.set(t._key(),e)}function l1(t){return Nn(t._redirectPersistence)}function c1(t){return ko(s1,t.config.apiKey,t.name)}async function u1(t,e,n=!1){if(Pn(t.app))return Promise.reject(xr(t));const r=Pa(t),s=pg(r,e),o=await new i1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=10*60*1e3;class d1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h1&&this.cachedEventUids.clear(),this.cachedEventUids.has(tf(e))}saveEventToCache(e){this.cachedEventUids.add(tf(e)),this.lastProcessedEventTime=Date.now()}}function tf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(t,e={}){return Ns(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g1=/^https?/;async function _1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p1(t);for(const n of e)try{if(y1(n))return}catch{}yn(t,"unauthorized-domain")}function y1(t){const e=uc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!g1.test(n))return!1;if(m1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const v1=new Bi(3e4,6e4);function nf(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E1(t){return new Promise((e,n)=>{var r,s,i;function o(){nf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nf(),n(sn(t,"network-request-failed"))},timeout:v1.get()})}if(!((s=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const l=RI("iframefcb");return pn()[l]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},bI(`${AI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw No=null,e})}let No=null;function w1(t){return No=No||E1(t),No}/**
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
 */const T1=new Bi(5e3,15e3),I1="__/auth/iframe",b1="emulator/auth/iframe",A1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S1(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tu(e,b1):`https://${t.config.authDomain}/${I1}`,r={apiKey:e.apiKey,appName:t.name,v:Ds},s=R1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$i(r).slice(1)}`}async function C1(t){const e=await w1(t),n=pn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:S1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=pn().setTimeout(()=>{i(o)},T1.get());function c(){pn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const P1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k1=500,D1=600,N1="_blank",V1="http://localhost";class rf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function O1(t,e,n,r=k1,s=D1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},P1),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Pt().toLowerCase();n&&(l=Ym(u)?N1:n),Km(u)&&(e=e||V1,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,I])=>`${m}${_}=${I},`,"");if(gI(u)&&l!=="_self")return M1(e||"",l),new rf(null);const p=window.open(e||"",l,d);de(p,t,"popup-blocked");try{p.focus()}catch{}return new rf(p)}function M1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const x1="__/auth/handler",L1="emulator/auth/handler",F1=encodeURIComponent("fac");async function sf(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ds,eventId:s};if(e instanceof ou){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof qi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${F1}=${encodeURIComponent(c)}`:"";return`${U1(t)}?${$i(l).slice(1)}${u}`}function U1({config:t}){return t.emulator?tu(t,L1):`https://${t.authDomain}/${x1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="webStorageSupport";class $1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cg,this._completeRedirectFn=u1,this._overrideRedirectResult=a1}async _openPopup(e,n,r,s){var i;xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await sf(e,n,r,uc(),s);return O1(e,o,au())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await sf(e,n,r,uc(),s);return jI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await C1(e),r=new d1(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ml,{type:Ml},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ml];o!==void 0&&n(!!o),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tg()||Qm()||su()}}const B1=$1;var of="@firebase/auth",af="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H1(t){Ts(new Ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ng(t)},u=new TI(r,s,i,c);return CI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ts(new Ur("auth-internal",e=>{const n=Pa(e.getProvider("auth").getImmediate());return(r=>new q1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(of,af,j1(t)),cr(of,af,"esm2017")}/**
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
 */const z1=5*60,W1=Vm("authIdTokenMaxAge")||z1;let lf=null;const G1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W1)return;const s=n==null?void 0:n.token;lf!==s&&(lf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ht(t=Lm()){const e=Xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SI(t,{popupRedirectResolver:B1,persistence:[JI,$I,cg]}),r=Vm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=G1(i.toString());LI(n,o,()=>o(n.currentUser)),xI(n,l=>o(l))}}const s=Dm("auth");return s&&PI(n,`http://${s}`),n}function K1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}II({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",K1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H1("Browser");var Q1="firebase",Y1="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr(Q1,Y1,"app");const X1={apiKey:"AIzaSyALY2Eu62yzZPuaySeDBI3ONz3DYCq2388",authDomain:"relay-hub.firebaseapp.com",projectId:"relay-hub",storageBucket:"relay-hub.appspot.com",messagingSenderId:"1088994606939",appId:"1:1088994606939:web:17dc0c1330726f959ca47e"},Ze=xm(X1),J1=ht(Ze),Z1=async()=>{const t=new Cn;try{return(await r1(J1,t)).user}catch(e){throw console.error("Error during sign-in:",e),e}},eb=Me({components:{ButtonDefault:zr},emits:["onButtonClicked"],props:{},setup(){const t=Sm(),e=le(!1);async function n(){e.value=!0;try{const r=await Z1();t.setUser({uid:r.uid,displayName:r.displayName,email:r.email,photoURL:r.photoURL})}catch(r){t.setUser(null),console.error("Failed to sign in:",r)}}return{isLoading:e,onButtonClicked:n}}}),tb={class:"button-google"};function nb(t,e,n,r,s,i){const o=ve("ButtonDefault");return z(),re("div",tb,[_e(o,{text:"Sign in with Google",isLoading:t.isLoading,onOnButtonClicked:t.onButtonClicked},{icon:fn(()=>e[0]||(e[0]=[X("div",{class:"google-icon"},null,-1)])),_:1},8,["isLoading","onOnButtonClicked"])])}const rb=Ue(eb,[["render",nb],["__scopeId","data-v-e750a2f5"]]),sb=Me({name:"sign-in",components:{ButtonGoogle:rb},setup(){return{}}}),ib={class:"sign-in"};function ob(t,e,n,r,s,i){const o=ve("button-google");return z(),re("div",ib,[e[0]||(e[0]=X("div",{class:"relay-hub"},"RelayHub",-1)),_e(o)])}const ab=Ue(sb,[["render",ob],["__scopeId","data-v-9540f920"]]),lb=Me({name:"ToggleButton",props:{modelValue:{type:Boolean,required:!0},isBlocked:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=le(t.modelValue),r=le(!1);return Mr(()=>t.modelValue,i=>{n.value=i}),{isActive:n,toggleSwitch:()=>{t.isBlocked||r.value||(n.value=!n.value,r.value=!0,setTimeout(()=>r.value=!1,500),e("update:modelValue",n.value))}}}});function cb(t,e,n,r,s,i){return z(),re("div",{class:Mt(["toggle-switch",{active:t.isActive}]),onClick:e[0]||(e[0]=(...o)=>t.toggleSwitch&&t.toggleSwitch(...o))},e[1]||(e[1]=[X("div",{class:"switch"},null,-1)]),2)}const ub=Ue(lb,[["render",cb],["__scopeId","data-v-17dbdf4b"]]);var cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,_g;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function E(){}E.prototype=y.prototype,A.D=y.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(b,R,P){for(var T=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)T[dt-2]=arguments[dt];return y.prototype[R].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,E){E||(E=0);var b=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)b[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;16>R;++R)b[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=A.g[0],E=A.g[1],R=A.g[2];var P=A.g[3],T=y+(P^E&(R^P))+b[0]+3614090360&4294967295;y=E+(T<<7&4294967295|T>>>25),T=P+(R^y&(E^R))+b[1]+3905402710&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(E^P&(y^E))+b[2]+606105819&4294967295,R=P+(T<<17&4294967295|T>>>15),T=E+(y^R&(P^y))+b[3]+3250441966&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(P^E&(R^P))+b[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=P+(R^y&(E^R))+b[5]+1200080426&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(E^P&(y^E))+b[6]+2821735955&4294967295,R=P+(T<<17&4294967295|T>>>15),T=E+(y^R&(P^y))+b[7]+4249261313&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(P^E&(R^P))+b[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=P+(R^y&(E^R))+b[9]+2336552879&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(E^P&(y^E))+b[10]+4294925233&4294967295,R=P+(T<<17&4294967295|T>>>15),T=E+(y^R&(P^y))+b[11]+2304563134&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(P^E&(R^P))+b[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=P+(R^y&(E^R))+b[13]+4254626195&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(E^P&(y^E))+b[14]+2792965006&4294967295,R=P+(T<<17&4294967295|T>>>15),T=E+(y^R&(P^y))+b[15]+1236535329&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(R^P&(E^R))+b[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=P+(E^R&(y^E))+b[6]+3225465664&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(P^y))+b[11]+643717713&4294967295,R=P+(T<<14&4294967295|T>>>18),T=E+(P^y&(R^P))+b[0]+3921069994&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(R^P&(E^R))+b[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=P+(E^R&(y^E))+b[10]+38016083&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(P^y))+b[15]+3634488961&4294967295,R=P+(T<<14&4294967295|T>>>18),T=E+(P^y&(R^P))+b[4]+3889429448&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(R^P&(E^R))+b[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=P+(E^R&(y^E))+b[14]+3275163606&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(P^y))+b[3]+4107603335&4294967295,R=P+(T<<14&4294967295|T>>>18),T=E+(P^y&(R^P))+b[8]+1163531501&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(R^P&(E^R))+b[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=P+(E^R&(y^E))+b[2]+4243563512&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(P^y))+b[7]+1735328473&4294967295,R=P+(T<<14&4294967295|T>>>18),T=E+(P^y&(R^P))+b[12]+2368359562&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(E^R^P)+b[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=P+(y^E^R)+b[8]+2272392833&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^E)+b[11]+1839030562&4294967295,R=P+(T<<16&4294967295|T>>>16),T=E+(R^P^y)+b[14]+4259657740&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(E^R^P)+b[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=P+(y^E^R)+b[4]+1272893353&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^E)+b[7]+4139469664&4294967295,R=P+(T<<16&4294967295|T>>>16),T=E+(R^P^y)+b[10]+3200236656&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(E^R^P)+b[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=P+(y^E^R)+b[0]+3936430074&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^E)+b[3]+3572445317&4294967295,R=P+(T<<16&4294967295|T>>>16),T=E+(R^P^y)+b[6]+76029189&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(E^R^P)+b[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=P+(y^E^R)+b[12]+3873151461&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^E)+b[15]+530742520&4294967295,R=P+(T<<16&4294967295|T>>>16),T=E+(R^P^y)+b[2]+3299628645&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(R^(E|~P))+b[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=P+(E^(y|~R))+b[7]+1126891415&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~E))+b[14]+2878612391&4294967295,R=P+(T<<15&4294967295|T>>>17),T=E+(P^(R|~y))+b[5]+4237533241&4294967295,E=R+(T<<21&4294967295|T>>>11),T=y+(R^(E|~P))+b[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=P+(E^(y|~R))+b[3]+2399980690&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~E))+b[10]+4293915773&4294967295,R=P+(T<<15&4294967295|T>>>17),T=E+(P^(R|~y))+b[1]+2240044497&4294967295,E=R+(T<<21&4294967295|T>>>11),T=y+(R^(E|~P))+b[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=P+(E^(y|~R))+b[15]+4264355552&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~E))+b[6]+2734768916&4294967295,R=P+(T<<15&4294967295|T>>>17),T=E+(P^(R|~y))+b[13]+1309151649&4294967295,E=R+(T<<21&4294967295|T>>>11),T=y+(R^(E|~P))+b[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=P+(E^(y|~R))+b[11]+3174756917&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~E))+b[2]+718787259&4294967295,R=P+(T<<15&4294967295|T>>>17),T=E+(P^(R|~y))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var E=y-this.blockSize,b=this.B,R=this.h,P=0;P<y;){if(R==0)for(;P<=E;)s(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<y;)if(b[R++]=A.charCodeAt(P++),R==this.blockSize){s(this,b),R=0;break}}else for(;P<y;)if(b[R++]=A[P++],R==this.blockSize){s(this,b),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var E=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=E&255,E/=256;for(this.u(A),A=Array(16),y=E=0;4>y;++y)for(var b=0;32>b;b+=8)A[E++]=this.g[y]>>>b&255;return A};function i(A,y){var E=l;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=y(A)}function o(A,y){this.h=y;for(var E=[],b=!0,R=A.length-1;0<=R;R--){var P=A[R]|0;b&&P==y||(E[R]=P,b=!1)}this.g=E}var l={};function c(A){return-128<=A&&128>A?i(A,function(y){return new o([y|0],0>y?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return C(u(-A));for(var y=[],E=1,b=0;A>=E;b++)y[b]=A/E|0,E*=4294967296;return new o(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return C(d(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(y,8)),b=p,R=0;R<A.length;R+=8){var P=Math.min(8,A.length-R),T=parseInt(A.substring(R,R+P),y);8>P?(P=u(Math.pow(y,P)),b=b.j(P).add(u(T))):(b=b.j(E),b=b.add(u(T)))}return b}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(S(this))return-C(this).m();for(var A=0,y=1,E=0;E<this.g.length;E++){var b=this.i(E);A+=(0<=b?b:4294967296+b)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(I(this))return"0";if(S(this))return"-"+C(this).toString(A);for(var y=u(Math.pow(A,6)),E=this,b="";;){var R=B(E,y).g;E=D(E,R.j(y));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=R,I(E))return P+b;for(;6>P.length;)P="0"+P;b=P+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function I(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function S(A){return A.h==-1}t.l=function(A){return A=D(this,A),S(A)?-1:I(A)?0:1};function C(A){for(var y=A.g.length,E=[],b=0;b<y;b++)E[b]=~A.g[b];return new o(E,~A.h).add(m)}t.abs=function(){return S(this)?C(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],b=0,R=0;R<=y;R++){var P=b+(this.i(R)&65535)+(A.i(R)&65535),T=(P>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);b=T>>>16,P&=65535,T&=65535,E[R]=T<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function D(A,y){return A.add(C(y))}t.j=function(A){if(I(this)||I(A))return p;if(S(this))return S(A)?C(this).j(C(A)):C(C(this).j(A));if(S(A))return C(this.j(C(A)));if(0>this.l(_)&&0>A.l(_))return u(this.m()*A.m());for(var y=this.g.length+A.g.length,E=[],b=0;b<2*y;b++)E[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<A.g.length;R++){var P=this.i(b)>>>16,T=this.i(b)&65535,dt=A.i(R)>>>16,Ft=A.i(R)&65535;E[2*b+2*R]+=T*Ft,x(E,2*b+2*R),E[2*b+2*R+1]+=P*Ft,x(E,2*b+2*R+1),E[2*b+2*R+1]+=T*dt,x(E,2*b+2*R+1),E[2*b+2*R+2]+=P*dt,x(E,2*b+2*R+2)}for(b=0;b<y;b++)E[b]=E[2*b+1]<<16|E[2*b];for(b=y;b<2*y;b++)E[b]=0;return new o(E,0)};function x(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function L(A,y){this.g=A,this.h=y}function B(A,y){if(I(y))throw Error("division by zero");if(I(A))return new L(p,p);if(S(A))return y=B(C(A),y),new L(C(y.g),C(y.h));if(S(y))return y=B(A,C(y)),new L(C(y.g),y.h);if(30<A.g.length){if(S(A)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,b=y;0>=b.l(A);)E=ie(E),b=ie(b);var R=ye(E,1),P=ye(b,1);for(b=ye(b,2),E=ye(E,2);!I(b);){var T=P.add(b);0>=T.l(A)&&(R=R.add(E),P=T),b=ye(b,1),E=ye(E,1)}return y=D(A,R.j(y)),new L(R,y)}for(R=p;0<=A.l(y);){for(E=Math.max(1,Math.floor(A.m()/y.m())),b=Math.ceil(Math.log(E)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),P=u(E),T=P.j(y);S(T)||0<T.l(A);)E-=b,P=u(E),T=P.j(y);I(P)&&(P=m),R=R.add(P),A=D(A,T)}return new L(R,A)}t.A=function(A){return B(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)&A.i(b);return new o(E,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)|A.i(b);return new o(E,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)^A.i(b);return new o(E,this.h^A.h)};function ie(A){for(var y=A.g.length+1,E=[],b=0;b<y;b++)E[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(E,A.h)}function ye(A,y){var E=y>>5;y%=32;for(var b=A.g.length-E,R=[],P=0;P<b;P++)R[P]=0<y?A.i(P+E)>>>y|A.i(P+E+1)<<32-y:A.i(P+E);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_g=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Lr=o}).apply(typeof cf<"u"?cf:typeof self<"u"?self:typeof window<"u"?window:{});var yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yg,ti,vg,Vo,fc,Eg,wg,Tg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof yo=="object"&&yo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in f))break e;f=f[k]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,k={next:function(){if(!g&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function I(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,k,V){for(var G=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)G[Le-2]=arguments[Le];return h.prototype[k].apply(g,G)}}function S(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function C(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const k=a.length||0,V=g.length||0;a.length=k+V;for(let G=0;G<V;G++)a[k+G]=g[G]}else a.push(g)}}class D{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function B(a){return B[" "](a),a}B[" "]=function(){};var ie=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function ye(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function A(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,h){let f,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(f in g)a[f]=g[f];for(let V=0;V<E.length;V++)f=E[V],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function P(a){l.setTimeout(()=>{throw a},0)}function T(){var a=jt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class dt{constructor(){this.h=this.g=null}add(h,f){const g=Ft.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ft=new D(()=>new $e,a=>a.reset());class $e{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,Ee=!1,jt=new dt,Zt=()=>{const a=l.Promise.resolve(void 0);ue=()=>{a.then(Qt)}};var Qt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){P(f)}var h=Ft;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var Hn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function ln(a,h){if(Ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ie){e:{try{B(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ut[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ln.aa.h.call(this)}}I(ln,Ke);var Ut={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(a,h,f,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=k,this.key=++J,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function be(a){this.src=a,this.g={},this.h=0}be.prototype.add=function(a,h,f,g,k){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=v(a,h,g,k);return-1<G?(h=a[G],f||(h.fa=!1)):(h=new Q(h,this.src,V,!!g,k),h.fa=f,a.push(h)),h};function xe(a,h){var f=h.type;if(f in a.g){var g=a.g[f],k=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=k)&&Array.prototype.splice.call(g,k,1),V&&(te(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function v(a,h,f,g){for(var k=0;k<a.length;++k){var V=a[k];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==g)return k}return-1}var w="closure_lm_"+(1e6*Math.random()|0),N={};function $(a,h,f,g,k){if(Array.isArray(h)){for(var V=0;V<h.length;V++)$(a,h[V],f,g,k);return null}return f=se(f),a&&a[M]?a.K(h,f,u(g)?!!g.capture:!!g,k):O(a,h,f,!1,g,k)}function O(a,h,f,g,k,V){if(!h)throw Error("Invalid event type");var G=u(k)?!!k.capture:!!k,Le=ae(a);if(Le||(a[w]=Le=new be(a)),f=Le.add(h,f,g,G,V),f.proxy)return f;if(g=q(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Hn||(k=G),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(H(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function a(f){return h.call(a.src,a.listener,f)}const h=j;return a}function K(a,h,f,g,k){if(Array.isArray(h))for(var V=0;V<h.length;V++)K(a,h[V],f,g,k);else g=u(g)?!!g.capture:!!g,f=se(f),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=v(V,f,g,k),-1<f&&(te(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=ae(a))&&(h=a.g[h.toString()],a=-1,h&&(a=v(h,f,g,k)),(f=-1<a?h[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])xe(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(H(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=ae(h))?(xe(f,a),f.h==0&&(f.src=null,h[w]=null)):te(a)}}}function H(a){return a in N?N[a]:N[a]="on"+a}function j(a,h){if(a.da)a=!0;else{h=new ln(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&W(a),a=f.call(g,h)}return a}function ae(a){return a=a[w],a instanceof be?a:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(a){return typeof a=="function"?a:(a[Y]||(a[Y]=function(h){return a.handleEvent(h)}),a[Y])}function ne(){Ge.call(this),this.i=new be(this),this.M=this,this.F=null}I(ne,Ge),ne.prototype[M]=!0,ne.prototype.removeEventListener=function(a,h,f,g){K(this,a,h,f,g)};function ce(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ke(h,a);else if(h instanceof Ke)h.target=h.target||a;else{var k=h;h=new Ke(g,a),b(h,k)}if(k=!0,f)for(var V=f.length-1;0<=V;V--){var G=h.g=f[V];k=Pe(G,g,!0,h)&&k}if(G=h.g=a,k=Pe(G,g,!0,h)&&k,k=Pe(G,g,!1,h)&&k,f)for(V=0;V<f.length;V++)G=h.g=f[V],k=Pe(G,g,!1,h)&&k}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)te(f[g]);delete a.g[h],a.h--}}this.F=null},ne.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ne.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Pe(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,V=0;V<h.length;++V){var G=h[V];if(G&&!G.da&&G.capture==f){var Le=G.listener,pt=G.ha||G.src;G.fa&&xe(a.i,G),k=Le.call(pt,g)!==!1&&k}}return k&&!g.defaultPrevented}function Re(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function vt(a){a.g=Re(()=>{a.g=null,a.i&&(a.i=!1,vt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ot extends Ge{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:vt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){Ge.call(this),this.h=a,this.g={}}I(ft,Ge);var Et=[];function zn(a){ye(a.g,function(h,f){this.g.hasOwnProperty(f)&&W(h)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),zn(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qr=l.JSON.stringify,kt=l.JSON.parse,Yt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Yr(){}Yr.prototype.h=null;function Qu(a){return a.h||(a.h=a.i())}function Yu(){}var Us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function el(){Ke.call(this,"d")}I(el,Ke);function tl(){Ke.call(this,"c")}I(tl,Ke);var Ir={},Xu=null;function Ji(){return Xu=Xu||new ne}Ir.La="serverreachability";function Ju(a){Ke.call(this,Ir.La,a)}I(Ju,Ke);function $s(a){const h=Ji();ce(h,new Ju(h))}Ir.STAT_EVENT="statevent";function Zu(a,h){Ke.call(this,Ir.STAT_EVENT,a),this.stat=h}I(Zu,Ke);function Dt(a){const h=Ji();ce(h,new Zu(h,a))}Ir.Ma="timingevent";function eh(a,h){Ke.call(this,Ir.Ma,a),this.size=h}I(eh,Ke);function Bs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function qs(){this.g=!0}qs.prototype.xa=function(){this.g=!1};function J_(a,h,f,g,k,V){a.info(function(){if(a.g)if(V)for(var G="",Le=V.split("&"),pt=0;pt<Le.length;pt++){var Se=Le[pt].split("=");if(1<Se.length){var wt=Se[0];Se=Se[1];var Tt=wt.split("_");G=2<=Tt.length&&Tt[1]=="type"?G+(wt+"="+Se+"&"):G+(wt+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+f+`
`+G})}function Z_(a,h,f,g,k,V,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+f+`
`+V+" "+G})}function Xr(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ty(a,f)+(g?" "+g:"")})}function ey(a,h){a.info(function(){return"TIMEOUT: "+h})}qs.prototype.info=function(){};function ty(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<k.length;G++)k[G]=""}}}}return Qr(f)}catch{return h}}var Zi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},th={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nl;function eo(){}I(eo,Yr),eo.prototype.g=function(){return new XMLHttpRequest},eo.prototype.i=function(){return{}},nl=new eo;function Wn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nh}function nh(){this.i=null,this.g="",this.h=!1}var rh={},rl={};function sl(a,h,f){a.L=1,a.v=so(wn(h)),a.m=f,a.P=!0,sh(a,null)}function sh(a,h){a.F=Date.now(),to(a),a.A=wn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),yh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new nh,a.g=xh(a.j,f?h:null,!a.m),0<a.O&&(a.M=new ot(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Et[0]=k.toString()),k=Et);for(var V=0;V<k.length;V++){var G=$(f,k[V],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),$s(),J_(a.i,a.u,a.A,a.l,a.R,a.m)}Wn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Tn(a)==3?h.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=Tn(this.g);var h=this.g.Ba();const es=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Ah(this.g)))){this.J||Tt!=4||h==7||(h==8||0>=es?$s(3):$s(2)),il(this);var f=this.g.Z();this.X=f;t:if(ih(this)){var g=Ah(this.g);a="";var k=g.length,V=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){br(this),js(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,Z_(this.i,this.u,this.A,this.l,this.R,Tt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,pt=this.g;if((Le=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Le)){var Se=Le;break t}}Se=null}if(f=Se)Xr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ol(this,f);else{this.o=!1,this.s=3,Dt(12),br(this),js(this);break e}}if(this.P){f=!0;let en;for(;!this.J&&this.C<G.length;)if(en=ny(this,G),en==rl){Tt==4&&(this.s=4,Dt(14),f=!1),Xr(this.i,this.l,null,"[Incomplete Response]");break}else if(en==rh){this.s=4,Dt(15),Xr(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else Xr(this.i,this.l,en,null),ol(this,en);if(ih(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||G.length!=0||this.h.h||(this.s=1,Dt(16),f=!1),this.o=this.o&&f,!f)Xr(this.i,this.l,G,"[Invalid Chunked Response]"),br(this),js(this);else if(0<G.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),dl(wt),wt.M=!0,Dt(11))}}else Xr(this.i,this.l,G,null),ol(this,G);Tt==4&&br(this),this.o&&!this.J&&(Tt==4?Nh(this.j,this):(this.o=!1,to(this)))}else vy(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),br(this),js(this)}}}catch{}finally{}};function ih(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ny(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?rl:(f=Number(h.substring(f,g)),isNaN(f)?rh:(g+=1,g+f>h.length?rl:(h=h.slice(g,g+f),a.C=g+f,h)))}Wn.prototype.cancel=function(){this.J=!0,br(this)};function to(a){a.S=Date.now()+a.I,oh(a,a.I)}function oh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Bs(m(a.ba,a),h)}function il(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ey(this.i,this.A),this.L!=2&&($s(),Dt(17)),br(this),this.s=2,js(this)):oh(this,this.S-a)};function js(a){a.j.G==0||a.J||Nh(a.j,a)}function br(a){il(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,zn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ol(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||al(f.h,a))){if(!a.K&&al(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)uo(f),lo(f);else break e;hl(f),Dt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Bs(m(f.Za,f),6e3));if(1>=ch(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Rr(f,11)}else if((a.K||f.g==a)&&uo(f),!x(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let Se=k[h];if(f.T=Se[0],Se=Se[1],f.G==2)if(Se[0]=="c"){f.K=Se[1],f.ia=Se[2];const wt=Se[3];wt!=null&&(f.la=wt,f.j.info("VER="+f.la));const Tt=Se[4];Tt!=null&&(f.Aa=Tt,f.j.info("SVER="+f.Aa));const es=Se[5];es!=null&&typeof es=="number"&&0<es&&(g=1.5*es,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const en=a.g;if(en){const fo=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fo){var V=g.h;V.g||fo.indexOf("spdy")==-1&&fo.indexOf("quic")==-1&&fo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ll(V,V.h),V.h=null))}if(g.D){const fl=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;fl&&(g.ya=fl,je(g.I,g.D,fl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var G=a;if(g.qa=Mh(g,g.J?g.ia:null,g.W),G.K){uh(g.h,G);var Le=G,pt=g.L;pt&&(Le.I=pt),Le.B&&(il(Le),to(Le)),g.g=G}else kh(g);0<f.i.length&&co(f)}else Se[0]!="stop"&&Se[0]!="close"||Rr(f,7);else f.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Rr(f,7):ul(f):Se[0]!="noop"&&f.l&&f.l.ta(Se),f.v=0)}}$s(4)}catch{}}var ry=class{constructor(a,h){this.g=a,this.map=h}};function ah(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ch(a){return a.h?1:a.g?a.g.size:0}function al(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ll(a,h){a.g?a.g.add(h):a.h=h}function uh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ah.prototype.cancel=function(){if(this.i=hh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function hh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return S(a.i)}function sy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function iy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function dh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=iy(a),g=sy(a),k=g.length,V=0;V<k;V++)h.call(void 0,g[V],f&&f[V],a)}var fh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oy(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),k=null;if(0<=g){var V=a[f].substring(0,g);k=a[f].substring(g+1)}else V=a[f];h(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ar){this.h=a.h,no(this,a.j),this.o=a.o,this.g=a.g,ro(this,a.s),this.l=a.l;var h=a.i,f=new Ws;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),ph(this,f),this.m=a.m}else a&&(h=String(a).match(fh))?(this.h=!1,no(this,h[1]||"",!0),this.o=Hs(h[2]||""),this.g=Hs(h[3]||"",!0),ro(this,h[4]),this.l=Hs(h[5]||"",!0),ph(this,h[6]||"",!0),this.m=Hs(h[7]||"")):(this.h=!1,this.i=new Ws(null,this.h))}Ar.prototype.toString=function(){var a=[],h=this.j;h&&a.push(zs(h,mh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(zs(h,mh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(zs(f,f.charAt(0)=="/"?cy:ly,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",zs(f,hy)),a.join("")};function wn(a){return new Ar(a)}function no(a,h,f){a.j=f?Hs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ro(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function ph(a,h,f){h instanceof Ws?(a.i=h,dy(a.i,a.h)):(f||(h=zs(h,uy)),a.i=new Ws(h,a.h))}function je(a,h,f){a.i.set(h,f)}function so(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Hs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,ay),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ay(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var mh=/[#\/\?@]/g,ly=/[#\?:]/g,cy=/[#\?]/g,uy=/[#\?@]/g,hy=/#/g;function Ws(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&oy(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ws.prototype,t.add=function(a,h){Gn(this),this.i=null,a=Jr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function gh(a,h){Gn(a),h=Jr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function _h(a,h){return Gn(a),h=Jr(a,h),a.g.has(h)}t.forEach=function(a,h){Gn(this),this.g.forEach(function(f,g){f.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const k=a[g];for(let V=0;V<k.length;V++)f.push(h[g])}return f},t.V=function(a){Gn(this);let h=[];if(typeof a=="string")_h(this,a)&&(h=h.concat(this.g.get(Jr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Gn(this),this.i=null,a=Jr(this,a),_h(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function yh(a,h,f){gh(a,h),0<f.length&&(a.i=null,a.g.set(Jr(a,h),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const V=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var k=V;G[g]!==""&&(k+="="+encodeURIComponent(String(G[g]))),a.push(k)}}return this.i=a.join("&")};function Jr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function dy(a,h){h&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(f,g){var k=g.toLowerCase();g!=k&&(gh(this,g),yh(this,k,f))},a)),a.j=h}function fy(a,h){const f=new qs;if(l.Image){const g=new Image;g.onload=_(Kn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Kn,f,"TestLoadImage: error",!1,h,g),g.onabort=_(Kn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Kn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function py(a,h){const f=new qs,g=new AbortController,k=setTimeout(()=>{g.abort(),Kn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(k),V.ok?Kn(f,"TestPingServer: ok",!0,h):Kn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),Kn(f,"TestPingServer: error",!1,h)})}function Kn(a,h,f,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(f)}catch{}}function my(){this.g=new Yt}function gy(a,h,f){const g=f||"";try{dh(a,function(k,V){let G=k;u(k)&&(G=Qr(k)),h.push(g+V+"="+encodeURIComponent(G))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function io(a){this.l=a.Ub||null,this.j=a.eb||!1}I(io,Yr),io.prototype.g=function(){return new oo(this.l,this.j)},io.prototype.i=function(a){return function(){return a}}({});function oo(a,h){ne.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(oo,ne),t=oo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ks(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function vh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Gs(this):Ks(this),this.readyState==3&&vh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Gs(this))},t.Qa=function(a){this.g&&(this.response=a,Gs(this))},t.ga=function(){this.g&&Gs(this)};function Gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ks(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Eh(a){let h="";return ye(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function cl(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Eh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):je(a,h,f))}function Ye(a){ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Ye,ne);var _y=/^https?$/i,yy=["POST","PUT"];t=Ye.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nl.g(),this.v=this.o?Qu(this.o):Qu(nl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){wh(this,V);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)f.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(yy,h,void 0))||g||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of f)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bh(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){wh(this,V)}};function wh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Th(a),ao(a)}function Th(a){a.A||(a.A=!0,ce(a,"complete"),ce(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ce(this,"complete"),ce(this,"abort"),ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ao(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ih(this):this.bb())},t.bb=function(){Ih(this)};function Ih(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)Re(a.Ea,0,a);else if(ce(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=G===0){var k=String(a.D).match(fh)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!_y.test(k?k.toLowerCase():"")}f=g}if(f)ce(a,"complete"),ce(a,"success");else{a.m=6;try{var V=2<Tn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Th(a)}}finally{ao(a)}}}}function ao(a,h){if(a.g){bh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ce(a,"ready");try{f.onreadystatechange=g}catch{}}}function bh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),kt(h)}};function Ah(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function vy(a){const h={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(x(a[g]))continue;var f=R(a[g]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[k]||[];h[k]=V,V.push(f)}A(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Rh(a){this.Aa=0,this.i=[],this.j=new qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,a),this.cb=Qs("retryDelaySeedMs",1e4,a),this.Wa=Qs("forwardChannelMaxRetries",2,a),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ah(a&&a.concurrentRequestLimit),this.Da=new my,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Rh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){Dt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Mh(this,null,this.W),co(this)};function ul(a){if(Sh(a),a.G==3){var h=a.U++,f=wn(a.I);if(je(f,"SID",a.K),je(f,"RID",h),je(f,"TYPE","terminate"),Ys(a,f),h=new Wn(a,a.j,h),h.L=2,h.v=so(wn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=xh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),to(h)}Oh(a)}function lo(a){a.g&&(dl(a),a.g.cancel(),a.g=null)}function Sh(a){lo(a),a.u&&(l.clearTimeout(a.u),a.u=null),uo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function co(a){if(!lh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ue||Zt(),Ee||(ue(),Ee=!0),jt.add(h,a),a.B=0}}function Ey(a,h){return ch(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Bs(m(a.Ga,a,h),Vh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Wn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),b(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ph(this,k,h),f=wn(this.I),je(f,"RID",a),je(f,"CVER",22),this.D&&je(f,"X-HTTP-Session-Id",this.D),Ys(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(Eh(V)))+"&"+h:this.m&&cl(f,this.m,V)),ll(this.h,k),this.Ua&&je(f,"TYPE","init"),this.P?(je(f,"$req",h),je(f,"SID","null"),k.T=!0,sl(k,f,null)):sl(k,f,h),this.G=2}}else this.G==3&&(a?Ch(this,a):this.i.length==0||lh(this.h)||Ch(this))};function Ch(a,h){var f;h?f=h.l:f=a.U++;const g=wn(a.I);je(g,"SID",a.K),je(g,"RID",f),je(g,"AID",a.T),Ys(a,g),a.m&&a.o&&cl(g,a.m,a.o),f=new Wn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Ph(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ll(a.h,f),sl(f,g,h)}function Ys(a,h){a.H&&ye(a.H,function(f,g){je(h,g,f)}),a.l&&dh({},function(f,g){je(h,g,f)})}function Ph(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let V=-1;for(;;){const G=["count="+f];V==-1?0<f?(V=k[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let Le=!0;for(let pt=0;pt<f;pt++){let Se=k[pt].g;const wt=k[pt].map;if(Se-=V,0>Se)V=Math.max(0,k[pt].g-100),Le=!1;else try{gy(wt,G,"req"+Se+"_")}catch{g&&g(wt)}}if(Le){g=G.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function kh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ue||Zt(),Ee||(ue(),Ee=!0),jt.add(h,a),a.v=0}}function hl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Bs(m(a.Fa,a),Vh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Dh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Bs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),lo(this),Dh(this))};function dl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Dh(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);je(h,"RID","rpc"),je(h,"SID",a.K),je(h,"AID",a.T),je(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(h,"TO",a.ja),je(h,"TYPE","xmlhttp"),Ys(a,h),a.m&&a.o&&cl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=so(wn(h)),f.m=null,f.P=!0,sh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,lo(this),hl(this),Dt(19))};function uo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Nh(a,h){var f=null;if(a.g==h){uo(a),dl(a),a.g=null;var g=2}else if(al(a.h,h))f=h.D,uh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=Ji(),ce(g,new eh(g,f)),co(a)}else kh(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&Ey(a,h)||g==2&&hl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function Vh(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Rr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const k=!g;g=new Ar(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||no(g,"https"),so(g),k?fy(g.toString(),f):py(g.toString(),f)}else Dt(2);a.G=0,a.l&&a.l.sa(h),Oh(a),Sh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Oh(a){if(a.G=0,a.ka=[],a.l){const h=hh(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.ra()}}function Mh(a,h,f){var g=f instanceof Ar?wn(f):new Ar(f);if(g.g!="")h&&(g.g=h+"."+g.g),ro(g,g.s);else{var k=l.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var V=new Ar(null);g&&no(V,g),h&&(V.g=h),k&&ro(V,k),f&&(V.l=f),g=V}return f=a.D,h=a.ya,f&&h&&je(g,f,h),je(g,"VER",a.la),Ys(a,g),g}function xh(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ye(new io({eb:f})):new Ye(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lh(){}t=Lh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ho(){}ho.prototype.g=function(a,h){return new Ht(a,h)};function Ht(a,h){ne.call(this),this.g=new Rh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Zr(this)}I(Ht,ne),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){ul(this.g)},Ht.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Qr(a),a=f);h.i.push(new ry(h.Ya++,a)),h.G==3&&co(h)},Ht.prototype.N=function(){this.g.l=null,delete this.j,ul(this.g),delete this.g,Ht.aa.N.call(this)};function Fh(a){el.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}I(Fh,el);function Uh(){tl.call(this),this.status=1}I(Uh,tl);function Zr(a){this.g=a}I(Zr,Lh),Zr.prototype.ua=function(){ce(this.g,"a")},Zr.prototype.ta=function(a){ce(this.g,new Fh(a))},Zr.prototype.sa=function(a){ce(this.g,new Uh)},Zr.prototype.ra=function(){ce(this.g,"b")},ho.prototype.createWebChannel=ho.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Tg=function(){return new ho},wg=function(){return Ji()},Eg=Ir,fc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zi.NO_ERROR=0,Zi.TIMEOUT=8,Zi.HTTP_ERROR=6,Vo=Zi,th.COMPLETE="complete",vg=th,Yu.EventType=Us,Us.OPEN="a",Us.CLOSE="b",Us.ERROR="c",Us.MESSAGE="d",ne.prototype.listen=ne.prototype.K,ti=Yu,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,yg=Ye}).apply(typeof yo<"u"?yo:typeof self<"u"?self:typeof window<"u"?window:{});const uf="@firebase/firestore";/**
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
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
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
 */let Vs="11.0.2";/**
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
 */const Br=new Qc("@firebase/firestore");function os(){return Br.logLevel}function Z(t,...e){if(Br.logLevel<=we.DEBUG){const n=e.map(cu);Br.debug(`Firestore (${Vs}): ${t}`,...n)}}function Ln(t,...e){if(Br.logLevel<=we.ERROR){const n=e.map(cu);Br.error(`Firestore (${Vs}): ${t}`,...n)}}function bs(t,...e){if(Br.logLevel<=we.WARN){const n=e.map(cu);Br.warn(`Firestore (${Vs}): ${t}`,...n)}}function cu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function Ve(t,e){t||he()}function me(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ig{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class db{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fb{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new On;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new On,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new Ig(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new bt(e)}}class pb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class mb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new pb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _b{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ve(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new gb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class bg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=yb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ee(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new st(0,0))}static max(){return new pe(new st(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ci{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends Ci{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const vb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Ci{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return vb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ee(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ee(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(He.fromString(e))}static fromName(e){return new oe(He.fromString(e).popFirst(5))}static empty(){return new oe(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new He(e.slice()))}}function Eb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new dr(s,oe.empty(),e)}function wb(t){return new dr(t.readTime,t.key,-1)}class dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dr(pe.min(),oe.empty(),-1)}static max(){return new dr(pe.max(),oe.empty(),-1)}}function Tb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Os(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==Ib)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ab(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ms(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Na{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Na.oe=-1;function Va(t){return t==null}function ea(t){return t===0&&1/t==-1/0}function Rb(t){return typeof t=="number"&&Number.isInteger(t)&&!ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Sb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=hf(e)),e=Cb(t.get(n),e);return hf(e)}function Cb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function hf(t){return t+""}/**
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
 */function df(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ag(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vo(this.root,e,this.comparator,!0)}}class vo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??mt.RED,this.left=s??mt.EMPTY,this.right=i??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new mt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ff(this.data.getIterator())}getIteratorFrom(e){return new ff(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class ff{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new it(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Rg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Rg("Invalid base64 string: "+i):i}}(e);return new yt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const Pb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=Pb.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pr(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Oa(t){const e=t.mapValue.fields.__previous_value__;return uu(e)?Oa(e):e}function Pi(t){const e=fr(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
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
 */class kb{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class ki{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ki("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ki&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uu(t)?4:Nb(t)?9007199254740991:Db(t)?10:11:he()}function vn(t,e){if(t===e)return!0;const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pi(t).isEqual(Pi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fr(s.timestampValue),l=fr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return pr(s.bytesValue).isEqual(pr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Xe(s.doubleValue),l=Xe(i.doubleValue);return o===l?ea(o)===ea(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(df(o)!==df(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!vn(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function Di(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=mr(t),r=mr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Xe(i.integerValue||i.doubleValue),c=Xe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return pf(t.timestampValue,e.timestampValue);case 4:return pf(Pi(t),Pi(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const l=pr(i),c=pr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Ie(l[u],c[u]);if(d!==0)return d}return Ie(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ie(Xe(i.latitude),Xe(o.latitude));return l!==0?l:Ie(Xe(i.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return mf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,I=(c=m.value)===null||c===void 0?void 0:c.arrayValue,S=Ie(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0);return S!==0?S:mf(_,I)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Eo.mapValue&&o===Eo.mapValue)return 0;if(i===Eo.mapValue)return 1;if(o===Eo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Ie(c[p],d[p]);if(m!==0)return m;const _=Rs(l[c[p]],u[d[p]]);if(_!==0)return _}return Ie(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function pf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=fr(t),r=fr(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function mf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Rs(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function Ss(t){return pc(t)}function pc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=pc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${pc(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function Oo(t){switch(mr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oa(t);return e?16+Oo(e):16;case 5:return 2*t.stringValue.length;case 6:return pr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Oo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return wr(r.fields,(i,o)=>{s+=i.length+Oo(o)}),s}(t.mapValue);default:throw he()}}function gf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mc(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function _f(t){return!!t&&"nullValue"in t}function yf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mo(t){return!!t&&"mapValue"in t}function Db(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function pi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=pi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Nb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pi(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=pi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){wr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Bt(pi(this.value))}}function Sg(t){const e=[];return wr(t.fields,(n,r)=>{const s=new _t([n]);if(Mo(r)){const i=Sg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gt(e)}/**
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
 */class St{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new St(e,0,pe.min(),pe.min(),pe.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,s){return new St(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new St(e,2,n,pe.min(),pe.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,pe.min(),pe.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ta{constructor(e,n){this.position=e,this.inclusive=n}}function vf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ef(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class na{constructor(e,n="asc"){this.field=e,this.dir=n}}function Vb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Cg{}class nt extends Cg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Mb(e,n,r):n==="array-contains"?new Fb(e,r):n==="in"?new Ub(e,r):n==="not-in"?new $b(e,r):n==="array-contains-any"?new Bb(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xb(e,r):new Lb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends Cg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new an(e,n)}matches(e){return Pg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Pg(t){return t.op==="and"}function kg(t){return Ob(t)&&Pg(t)}function Ob(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function gc(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(kg(t))return t.filters.map(e=>gc(e)).join(",");{const e=t.filters.map(n=>gc(n)).join(",");return`${t.op}(${e})`}}function Dg(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(t,e):t instanceof an?function(r,s){return s instanceof an&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Dg(o,s.filters[l]),!0):!1}(t,e):void he()}function Ng(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(Ng).join(" ,")+"}"}(t):"Filter"}class Mb extends nt{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class xb extends nt{constructor(e,n){super(e,"in",n),this.keys=Vg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Lb extends nt{constructor(e,n){super(e,"not-in",n),this.keys=Vg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class Fb extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&Di(n.arrayValue,this.value)}}class Ub extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Di(this.value.arrayValue,n)}}class $b extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Di(this.value.arrayValue,n)}}class Bb extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Di(this.value.arrayValue,r))}}/**
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
 */class qb{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function wf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new qb(t,e,n,r,s,i,o)}function du(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.ue=n}return e.ue}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Vb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Dg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ef(t.startAt,e.startAt)&&Ef(t.endAt,e.endAt)}function _c(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Hi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jb(t,e,n,r,s,i,o,l){return new Hi(t,e,n,r,s,i,o,l)}function Ma(t){return new Hi(t)}function Tf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Og(t){return t.collectionGroup!==null}function mi(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new it(_t.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new na(i,r))}),n.has(_t.keyField().canonicalString())||e.ce.push(new na(_t.keyField(),r))}return e.ce}function mn(t){const e=me(t);return e.le||(e.le=Hb(e,mi(t))),e.le}function Hb(t,e){if(t.limitType==="F")return wf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new na(s.field,i)});const n=t.endAt?new ta(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ta(t.startAt.position,t.startAt.inclusive):null;return wf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yc(t,e){const n=t.filters.concat([e]);return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function vc(t,e,n){return new Hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xa(t,e){return fu(mn(t),mn(e))&&t.limitType===e.limitType}function Mg(t){return`${du(mn(t))}|lt:${t.limitType}`}function as(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Ng(s)).join(", ")}]`),Va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ss(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function La(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of mi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=vf(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,mi(r),s)||r.endAt&&!function(o,l,c){const u=vf(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,mi(r),s))}(t,e)}function zb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xg(t){return(e,n)=>{let r=!1;for(const s of mi(t)){const i=Wb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Wb(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Rs(c,u):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
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
 */class Wr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ag(this.inner)}size(){return this.innerSize}}/**
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
 */const Gb=new Qe(oe.comparator);function Fn(){return Gb}const Lg=new Qe(oe.comparator);function ni(...t){let e=Lg;for(const n of t)e=e.insert(n.key,n);return e}function Fg(t){let e=Lg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nr(){return gi()}function Ug(){return gi()}function gi(){return new Wr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Kb=new Qe(oe.comparator),Qb=new it(oe.comparator);function Te(...t){let e=Qb;for(const n of t)e=e.add(n);return e}const Yb=new it(Ie);function Xb(){return Yb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(e)?"-0":e}}function $g(t){return{integerValue:""+t}}function Jb(t,e){return Rb(e)?$g(e):pu(t,e)}/**
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
 */class Fa{constructor(){this._=void 0}}function Zb(t,e,n){return t instanceof Ni?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&uu(i)&&(i=Oa(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Vi?qg(t,e):t instanceof Oi?jg(t,e):function(s,i){const o=Bg(s,i),l=If(o)+If(s.Pe);return mc(o)&&mc(s.Pe)?$g(l):pu(s.serializer,l)}(t,e)}function eA(t,e,n){return t instanceof Vi?qg(t,e):t instanceof Oi?jg(t,e):n}function Bg(t,e){return t instanceof ra?function(r){return mc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ni extends Fa{}class Vi extends Fa{constructor(e){super(),this.elements=e}}function qg(t,e){const n=Hg(e);for(const r of t.elements)n.some(s=>vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Oi extends Fa{constructor(e){super(),this.elements=e}}function jg(t,e){let n=Hg(e);for(const r of t.elements)n=n.filter(s=>!vn(s,r));return{arrayValue:{values:n}}}class ra extends Fa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function If(t){return Xe(t.integerValue||t.doubleValue)}function Hg(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class tA{constructor(e,n){this.field=e,this.transform=n}}function nA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Vi&&s instanceof Vi||r instanceof Oi&&s instanceof Oi?As(r.elements,s.elements,vn):r instanceof ra&&s instanceof ra?vn(r.Pe,s.Pe):r instanceof Ni&&s instanceof Ni}(t.transform,e.transform)}class rA{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ua{}function zg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $a(t.key,qt.none()):new zi(t.key,t.data,qt.none());{const n=t.data,r=Bt.empty();let s=new it(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Tr(t.key,r,new Gt(s.toArray()),qt.none())}}function sA(t,e,n){t instanceof zi?function(s,i,o){const l=s.value.clone(),c=Af(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Tr?function(s,i,o){if(!xo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Af(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Wg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _i(t,e,n,r){return t instanceof zi?function(i,o,l,c){if(!xo(i.precondition,o))return l;const u=i.value.clone(),d=Rf(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Tr?function(i,o,l,c){if(!xo(i.precondition,o))return l;const u=Rf(i.fieldTransforms,c,o),d=o.data;return d.setAll(Wg(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return xo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function iA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Bg(r.transform,s||null);i!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,i))}return n||null}function bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&As(r,s,(i,o)=>nA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zi extends Ua{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Tr extends Ua{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Af(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,eA(o,l,n[s]))}return r}function Rf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Zb(i,o,e))}return r}class $a extends Ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oA extends Ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_i(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_i(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ug();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=zg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>bf(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>bf(n,r))}}class mu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return Kb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mu(e,n,r,s)}}/**
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
 */class lA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,Ae;function uA(t){switch(t){default:return he();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function Gg(t){if(t===void 0)return Ln("GRPC error has no .code"),F.UNKNOWN;switch(t){case et.OK:return F.OK;case et.CANCELLED:return F.CANCELLED;case et.UNKNOWN:return F.UNKNOWN;case et.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case et.INTERNAL:return F.INTERNAL;case et.UNAVAILABLE:return F.UNAVAILABLE;case et.UNAUTHENTICATED:return F.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case et.NOT_FOUND:return F.NOT_FOUND;case et.ALREADY_EXISTS:return F.ALREADY_EXISTS;case et.PERMISSION_DENIED:return F.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case et.ABORTED:return F.ABORTED;case et.OUT_OF_RANGE:return F.OUT_OF_RANGE;case et.UNIMPLEMENTED:return F.UNIMPLEMENTED;case et.DATA_LOSS:return F.DATA_LOSS;default:return he()}}(Ae=et||(et={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hA(){return new TextEncoder}/**
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
 */const dA=new Lr([4294967295,4294967295],0);function Sf(t){const e=hA().encode(t),n=new _g;return n.update(e),new Uint8Array(n.digest())}function Cf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Lr([n,r],0),new Lr([s,i],0)]}class gu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ri(`Invalid padding: ${n}`);if(r<0)throw new ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ri(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ri(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Lr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Lr.fromNumber(r)));return s.compare(dA)===1&&(s=new Lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Sf(e),[r,s]=Cf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Sf(e),[r,s]=Cf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ba{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Wi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ba(pe.min(),s,new Qe(Ie),Fn(),Te())}}class Wi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wi(r,n,Te(),Te(),Te())}}/**
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
 */class Lo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Kg{constructor(e,n){this.targetId=e,this.me=n}}class Qg{constructor(e,n,r=yt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Pf{constructor(){this.fe=0,this.ge=kf(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Te(),n=Te(),r=Te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Wi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=kf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fn(),this.qe=wo(),this.Qe=wo(),this.Ke=new Qe(Ie)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(_c(i))if(r===0){const o=new oe(i.path);this.We(n,o,St.newNoDocument(o,pe.min()))}else Ve(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=pr(r).toUint8Array()}catch(c){if(c instanceof Rg)return bs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new gu(o,s,i)}catch(c){return bs(c instanceof ri?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&_c(l.target)){const c=new oe(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,St.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Te();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ba(e,n,this.Ke,this.ke,r);return this.ke=Fn(),this.qe=wo(),this.Qe=wo(),this.Ke=new Qe(Ie),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Pf,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new it(Ie),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new it(Ie),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Pf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wo(){return new Qe(oe.comparator)}function kf(){return new Qe(oe.comparator)}const pA={asc:"ASCENDING",desc:"DESCENDING"},mA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gA={and:"AND",or:"OR"};class _A{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ec(t,e){return t.useProto3Json||Va(e)?e:{value:e}}function sa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yA(t,e){return sa(t,e.toTimestamp())}function gn(t){return Ve(!!t),pe.fromTimestamp(function(n){const r=fr(n);return new st(r.seconds,r.nanos)}(t))}function _u(t,e){return wc(t,e).canonicalString()}function wc(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Xg(t){const e=He.fromString(t);return Ve(n_(e)),e}function Tc(t,e){return _u(t.databaseId,e.path)}function xl(t,e){const n=Xg(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(Zg(n))}function Jg(t,e){return _u(t.databaseId,e)}function vA(t){const e=Xg(t);return e.length===4?He.emptyPath():Zg(e)}function Ic(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zg(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Df(t,e,n){return{name:Tc(t,e),fields:n.value.mapValue.fields}}function EA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ve(d===void 0||typeof d=="string"),yt.fromBase64String(d||"")):(Ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array),yt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?F.UNKNOWN:Gg(u.code);return new ee(d,u.message||"")}(o);n=new Qg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xl(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):pe.min(),l=new Bt({mapValue:{fields:r.document.fields}}),c=St.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Lo(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xl(t,r.document),i=r.readTime?gn(r.readTime):pe.min(),o=St.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Lo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xl(t,r.document),i=r.removedTargetIds||[];n=new Lo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new cA(s,i),l=r.targetId;n=new Kg(l,o)}}return n}function wA(t,e){let n;if(e instanceof zi)n={update:Df(t,e.key,e.value)};else if(e instanceof $a)n={delete:Tc(t,e.key)};else if(e instanceof Tr)n={update:Df(t,e.key,e.data),updateMask:kA(e.fieldMask)};else{if(!(e instanceof oA))return he();n={verify:Tc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ni)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Vi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:yA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function TA(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(pe.min())&&(o=gn(i)),new rA(o,s.transformResults||[])}(n,e))):[]}function IA(t,e){return{documents:[Jg(t,e.path)]}}function bA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Jg(t,s);const i=function(u){if(u.length!==0)return t_(an.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:ls(m.field),direction:SA(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ec(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function AA(t){let e=vA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=e_(p);return m instanceof an&&kg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(I){return new na(cs(I.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Va(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new ta(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new ta(_,m)}(n.endAt)),jb(e,s,o,i,l,"F",c,u)}function RA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function e_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=cs(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cs(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cs(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cs(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(cs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>e_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function SA(t){return pA[t]}function CA(t){return mA[t]}function PA(t){return gA[t]}function ls(t){return{fieldPath:t.canonicalString()}}function cs(t){return _t.fromServerFormat(t.fieldPath)}function t_(t){return t instanceof nt?function(n){if(n.op==="=="){if(yf(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(_f(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yf(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(_f(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:CA(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(s=>t_(s));return r.length===1?r[0]:{compositeFilter:{op:PA(n.op),filters:r}}}(t):he()}function kA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function n_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class sr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=yt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DA{constructor(e){this.ht=e}}function NA(t){const e=AA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vc(e,e.limit,"L"):e}/**
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
 */class VA{constructor(){this.ln=new OA}addToCollectionParentIndex(e,n){return this.ln.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(dr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(dr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class OA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(He.comparator)).toArray()}}/**
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
 */const Nf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(41943040,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
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
 */class Cs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Cs(0)}static Qn(){return new Cs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf([t,e],[n,r]){const s=Ie(t,n);return s===0?Ie(e,r):s}class MA{constructor(e){this.Gn=e,this.buffer=new it(Vf),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ms(n)?Z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Os(n)}await this.Yn(3e5)})}}class LA{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(Na.oe);const r=new MA(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(Nf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nf):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),os()<=we.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function FA(t,e){return new LA(t,e)}/**
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
 */class UA{constructor(){this.changes=new Wr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&_i(r.mutation,s,Gt.empty(),st.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=Nr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ni();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Fn();const o=gi(),l=function(){return gi()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Tr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),_i(d.mutation,u,d.mutation.getFieldMask(),st.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new $A(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=gi();let s=new Qe((o,l)=>o-l),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Gt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Ug();d.forEach(m=>{if(!i.has(m)){const _=zg(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Og(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Nr());let l=-1,c=i;return o.next(u=>U.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(d=>({batchId:l,changes:Fg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=ni();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ni();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const u=function(p,m){return new Hi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,St.newInvalidDocument(d)))});let l=ni();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&_i(d.mutation,u,Gt.empty(),st.now()),La(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return U.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:NA(s.bundledQuery),readTime:gn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class jA{constructor(){this.overlays=new Qe(oe.comparator),this.Er=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Nr(),i=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Qe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Nr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Nr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return U.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lA(n,r));let i=this.Er.get(n);i===void 0&&(i=Te(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class HA{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class yu{constructor(){this.dr=new it(at.Ar),this.Rr=new it(at.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new at(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new at(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new oe(new He([])),r=new at(n,e),s=new at(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new oe(new He([])),r=new at(n,e),s=new at(n,e+1);let i=Te();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new at(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return oe.comparator(e.key,n.key)||Ie(e.br,n.br)}static Vr(e,n){return Ie(e.br,n.br)||oe.comparator(e.key,n.key)}}/**
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
 */class zA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new it(at.Ar)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new at(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),s=new at(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(Ie);return n.forEach(s=>{const i=new at(s,0),o=new at(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),U.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new at(new oe(i),0);let l=new it(Ie);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),U.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return U.forEach(n.mutations,s=>{const i=new at(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new at(n,0),s=this.vr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class WA{constructor(e){this.Nr=e,this.docs=function(){return new Qe(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Fn();const o=n.path,l=new oe(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Tb(wb(d),r)<=0||(s.has(d.key)||La(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Lr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GA(this)}getSize(e){return U.resolve(this.size)}}class GA extends UA{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class KA{constructor(e){this.persistence=e,this.Br=new Wr(n=>du(n),fu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.kr=0,this.qr=new yu,this.targetCount=0,this.Qr=Cs.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),U.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Un(n),U.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.qr.containsKey(n))}}/**
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
 */class r_{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Na(0),this.Ur=!1,this.Ur=!0,this.Wr=new HA,this.referenceDelegate=e(this),this.Gr=new KA(this),this.indexManager=new VA,this.remoteDocumentCache=function(s){return new WA(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new DA(n),this.jr=new qA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new zA(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new QA(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return U.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class QA extends bb{constructor(e){super(),this.currentSequenceNumber=e}}class vu{constructor(e){this.persistence=e,this.Zr=new yu,this.Xr=null}static ei(e){return new vu(e)}get ti(){if(this.Xr)return this.Xr;throw he()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),U.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.ti,r=>{const s=oe.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return U.or([()=>U.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class ia{constructor(e,n){this.persistence=e,this.ri=new Wr(r=>Sb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=FA(this,n)}static ei(e,n){return new ia(e,n)}Hr(){}Jr(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return U.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),U.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Oo(e.data.value)),n}ir(e,n,r){return U.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Eu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Eu(e,n.fromCache,r,s)}}/**
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
 */class XA{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Mw()?8:Ab(Pt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new YA;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(os()<=we.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",as(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),U.resolve()):(os()<=we.DEBUG&&Z("QueryEngine","Query:",as(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(os()<=we.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",as(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):U.resolve())}Xi(e,n){if(Tf(n))return U.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=vc(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,vc(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return Tf(n)||s.isEqual(pe.min())?U.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?U.resolve(null):(os()<=we.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),as(n)),this.os(e,o,n,Eb(s,-1)).next(l=>l))})}rs(e,n){let r=new it(xg(e));return n.forEach((s,i)=>{La(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return os()<=we.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",as(n)),this.Zi.getDocumentsMatchingQuery(e,n,dr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Qe(Ie),this.cs=new Wr(i=>du(i),fu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BA(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function ZA(t,e,n,r){return new JA(t,e,n,r)}async function s_(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Te();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function eR(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let _=U.resolve();return m.forEach(I=>{_=_.next(()=>d.getEntry(c,I)).next(S=>{const C=u.docVersions.get(I);Ve(C!==null),S.version.compareTo(C)<0&&(p.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),d.addEntry(S)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Te();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function i_(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function tR(t,e){const n=me(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(yt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(S,C,D){return S.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(m,_,d)&&l.push(n.Gr.updateTargetData(i,_))});let c=Fn(),u=Te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(nR(i,o,e.documentUpdates).next(d=>{c=d.Is,u=d.Es})),!r.isEqual(pe.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function nR(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Fn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function rR(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sR(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function bc(t,e,n){const r=me(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ms(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Of(t,e,n){const r=me(t);let s=pe.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=me(c),m=p.cs.get(d);return m!==void 0?U.resolve(p.us.get(m)):p.Gr.getTargetData(u,d)}(r,o,mn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Te())).next(l=>(iR(r,zb(e),l),{documents:l,ds:i})))}function iR(t,e,n){let r=t.ls.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Mf{constructor(){this.activeTargetIds=Xb()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oR{constructor(){this._o=new Mf,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Mf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aR{uo(e){}shutdown(){}}/**
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
 */class xf{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let To=null;function Ll(){return To===null?To=function(){return 268435456+Math.round(2147483648*Math.random())}():To++,"0x"+To.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cR{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const It="WebChannelConnection";class uR extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=Ll(),c=this.No(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(d=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw bs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=lR[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=Ll();return new Promise((o,l)=>{const c=new yg;c.setWithCredentials(!0),c.listenOnce(vg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Vo.NO_ERROR:const d=c.getResponseJson();Z(It,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Vo.TIMEOUT:Z(It,`RPC '${e}' ${i} timed out`),l(new ee(F.DEADLINE_EXCEEDED,"Request time out"));break;case Vo.HTTP_ERROR:const p=c.getStatus();if(Z(It,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const I=function(C){const D=C.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(D)>=0?D:F.UNKNOWN}(_.status);l(new ee(I,_.message))}else l(new ee(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ee(F.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{Z(It,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);Z(It,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=Ll(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Tg(),l=wg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Z(It,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,_=!1;const I=new cR({Eo:C=>{_?Z(It,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(m||(Z(It,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(It,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},Ao:()=>p.close()}),S=(C,D,x)=>{C.listen(D,L=>{try{x(L)}catch(B){setTimeout(()=>{throw B},0)}})};return S(p,ti.EventType.OPEN,()=>{_||(Z(It,`RPC '${e}' stream ${s} transport opened.`),I.So())}),S(p,ti.EventType.CLOSE,()=>{_||(_=!0,Z(It,`RPC '${e}' stream ${s} transport closed`),I.Do())}),S(p,ti.EventType.ERROR,C=>{_||(_=!0,bs(It,`RPC '${e}' stream ${s} transport errored:`,C),I.Do(new ee(F.UNAVAILABLE,"The operation could not be completed")))}),S(p,ti.EventType.MESSAGE,C=>{var D;if(!_){const x=C.data[0];Ve(!!x);const L=x,B=(L==null?void 0:L.error)||((D=L[0])===null||D===void 0?void 0:D.error);if(B){Z(It,`RPC '${e}' stream ${s} received error:`,B);const ie=B.status;let ye=function(E){const b=et[E];if(b!==void 0)return Gg(b)}(ie),A=B.message;ye===void 0&&(ye=F.INTERNAL,A="Unknown error status: "+ie+" with message "+B.message),_=!0,I.Do(new ee(ye,A)),p.close()}else Z(It,`RPC '${e}' stream ${s} received:`,x),I.vo(x)}}),S(l,Eg.STAT_EVENT,C=>{C.stat===fc.PROXY?Z(It,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===fc.NOPROXY&&Z(It,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.bo()},0),I}}function Fl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t){return new _A(t,!0)}/**
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
 */class o_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class a_{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new o_(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ee(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hR extends a_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=EA(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?gn(o.readTime):pe.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Ic(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=_c(c)?{documents:IA(i,c)}:{query:bA(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Yg(i,o.resumeToken);const u=Ec(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=sa(i,o.snapshotVersion.toTimestamp());const u=Ec(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=RA(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Ic(this.serializer),n.removeTarget=e,this.c_(n)}}class dR extends a_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=TA(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Ic(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wA(this.serializer,r))};this.c_(n)}}/**
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
 */class fR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ee(F.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,wc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(F.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,wc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(F.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class pR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ln(n),this.C_=!1):Z("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class mR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=me(c);u.k_.add(4),await Gi(u),u.K_.set("Unknown"),u.k_.delete(4),await ja(u)}(this))})}),this.K_=new pR(r,s)}}async function ja(t){if(Gr(t))for(const e of t.q_)await e(!0)}async function Gi(t){for(const e of t.q_)await e(!1)}function l_(t,e){const n=me(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),bu(n)?Iu(n):xs(n).s_()&&Tu(n,e))}function wu(t,e){const n=me(t),r=xs(n);n.B_.delete(e),r.s_()&&c_(n,e),n.B_.size===0&&(r.s_()?r.a_():Gr(n)&&n.K_.set("Unknown"))}function Tu(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).V_(e)}function c_(t,e){t.U_.xe(e),xs(t).m_(e)}function Iu(t){t.U_=new fA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.K_.F_()}function bu(t){return Gr(t)&&!xs(t).i_()&&t.B_.size>0}function Gr(t){return me(t).k_.size===0}function u_(t){t.U_=void 0}async function gR(t){t.K_.set("Online")}async function _R(t){t.B_.forEach((e,n)=>{Tu(t,e)})}async function yR(t,e){u_(t),bu(t)?(t.K_.O_(e),Iu(t)):t.K_.set("Unknown")}async function vR(t,e,n){if(t.K_.set("Online"),e instanceof Qg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oa(t,r)}else if(e instanceof Lo?t.U_.$e(e):e instanceof Kg?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(pe.min()))try{const r=await i_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(u);d&&i.B_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(yt.EMPTY_BYTE_STRING,d.snapshotVersion)),c_(i,c);const p=new sr(d.target,c,u,d.sequenceNumber);Tu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await oa(t,r)}}async function oa(t,e,n){if(!Ms(e))throw e;t.k_.add(1),await Gi(t),t.K_.set("Offline"),n||(n=()=>i_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await ja(t)})}function h_(t,e){return e().catch(n=>oa(t,n,e))}async function Ha(t){const e=me(t),n=gr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;ER(e);)try{const s=await rR(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,wR(e,s)}catch(s){await oa(e,s)}d_(e)&&f_(e)}function ER(t){return Gr(t)&&t.L_.length<10}function wR(t,e){t.L_.push(e);const n=gr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function d_(t){return Gr(t)&&!gr(t).i_()&&t.L_.length>0}function f_(t){gr(t).start()}async function TR(t){gr(t).w_()}async function IR(t){const e=gr(t);for(const n of t.L_)e.g_(n.mutations)}async function bR(t,e,n){const r=t.L_.shift(),s=mu.from(r,e,n);await h_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ha(t)}async function AR(t,e){e&&gr(t).f_&&await async function(r,s){if(function(o){return uA(o)&&o!==F.ABORTED}(s.code)){const i=r.L_.shift();gr(r).__(),await h_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ha(r)}}(t,e),d_(t)&&f_(t)}async function Lf(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Gr(n);n.k_.add(3),await Gi(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await ja(n)}async function RR(t,e){const n=me(t);e?(n.k_.delete(2),await ja(n)):e||(n.k_.add(2),await Gi(n),n.K_.set("Unknown"))}function xs(t){return t.W_||(t.W_=function(n,r,s){const i=me(n);return i.b_(),new hR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:gR.bind(null,t),mo:_R.bind(null,t),po:yR.bind(null,t),R_:vR.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),bu(t)?Iu(t):t.K_.set("Unknown")):(await t.W_.stop(),u_(t))})),t.W_}function gr(t){return t.G_||(t.G_=function(n,r,s){const i=me(n);return i.b_(),new dR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:TR.bind(null,t),po:AR.bind(null,t),p_:IR.bind(null,t),y_:bR.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Ha(t)):(await t.G_.stop(),t.L_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class Au{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Au(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ru(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Ms(t))return new ee(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ys{static emptySet(e){return new ys(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=ni(),this.sortedSet=new Qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ff{constructor(){this.z_=new Qe(oe.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):he():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ps(e,n,ys.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class SR{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class CR{constructor(){this.queries=Uf(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=Uf(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new ee(F.ABORTED,"Firestore shutting down"))}}function Uf(){return new Wr(t=>Mg(t),xa)}async function Su(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new SR,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Ru(o,`Initialization of query '${as(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Pu(n)}async function Cu(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function PR(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&Pu(n)}function kR(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Pu(t){t.X_.forEach(e=>{e.next()})}var Ac,$f;($f=Ac||(Ac={})).na="default",$f.Cache="cache";class ku{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Ac.Cache}}/**
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
 */class p_{constructor(e){this.key=e}}class m_{constructor(e){this.key=e}}class DR{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Te(),this.mutatedKeys=Te(),this.Va=xg(e),this.ma=new ys(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Ff,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=La(this.query,p)?p:null,I=!!m&&this.mutatedKeys.has(m.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;m&&_?m.data.isEqual(_.data)?I!==S&&(r.track({type:3,doc:_}),C=!0):this.ya(m,_)||(r.track({type:2,doc:_}),C=!0,(c&&this.Va(_,c)>0||u&&this.Va(_,u)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),C=!0):m&&!_&&(r.track({type:1,doc:m}),C=!0,(c||u)&&(l=!0)),C&&(_?(o=o.add(_),i=S?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(_,I){const S=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return S(_)-S(I)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Ps(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ff,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Te(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new m_(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new p_(r))}),n}va(e){this.da=e.ds,this.Ra=Te();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Ps.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class NR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VR{constructor(e){this.key=e,this.Fa=!1}}class OR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Wr(l=>Mg(l),xa),this.Oa=new Map,this.Na=new Set,this.La=new Qe(oe.comparator),this.Ba=new Map,this.ka=new yu,this.qa={},this.Qa=new Map,this.Ka=Cs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function MR(t,e,n=!0){const r=w_(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await g_(r,e,n,!0),s}async function xR(t,e){const n=w_(t);await g_(n,e,!0,!1)}async function g_(t,e,n,r){const s=await sR(t.localStore,mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await LR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&l_(t.remoteStore,s),l}async function LR(t,e,n,r,s){t.Ua=(p,m,_)=>async function(S,C,D,x){let L=C.view.ga(D);L.ss&&(L=await Of(S.localStore,C.query,!1).then(({documents:A})=>C.view.ga(A,L)));const B=x&&x.targetChanges.get(C.targetId),ie=x&&x.targetMismatches.get(C.targetId)!=null,ye=C.view.applyChanges(L,S.isPrimaryClient,B,ie);return qf(S,C.targetId,ye.ba),ye.snapshot}(t,p,m,_);const i=await Of(t.localStore,e,!0),o=new DR(e,i.ds),l=o.ga(i.documents),c=Wi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);qf(t,n,u.ba);const d=new NR(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function FR(t,e,n){const r=me(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!xa(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&wu(r.remoteStore,s.targetId),Rc(r,s.targetId)}).catch(Os)):(Rc(r,s.targetId),await bc(r.localStore,s.targetId,!0))}async function UR(t,e){const n=me(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wu(n.remoteStore,r.targetId))}async function $R(t,e,n){const r=GR(t);try{const s=await function(o,l){const c=me(o),u=st.now(),d=l.reduce((_,I)=>_.add(I.key),Te());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let I=Fn(),S=Te();return c.hs.getEntries(_,d).next(C=>{I=C,I.forEach((D,x)=>{x.isValidDocument()||(S=S.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,I)).next(C=>{p=C;const D=[];for(const x of l){const L=iA(x,p.get(x.key).overlayedDocument);L!=null&&D.push(new Tr(x.key,L,Sg(L.value.mapValue),qt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,D,l)}).next(C=>{m=C;const D=C.applyToLocalDocumentSet(p,S);return c.documentOverlayCache.saveOverlays(_,C.batchId,D)})}).then(()=>({batchId:m.batchId,changes:Fg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Qe(Ie)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ki(r,s.changes),await Ha(r.remoteStore)}catch(s){const i=Ru(s,"Failed to persist write");n.reject(i)}}async function __(t,e){const n=me(t);try{const r=await tR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ve(o.Fa):s.removedDocuments.size>0&&(Ve(o.Fa),o.Fa=!1))}),await Ki(n,r,e)}catch(r){await Os(r)}}function Bf(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=me(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(u=!0)}),u&&Pu(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BR(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Qe(oe.comparator);o=o.insert(i,St.newNoDocument(i,pe.min()));const l=Te().add(i),c=new Ba(pe.min(),new Map,new Qe(Ie),o,l);await __(r,c),r.La=r.La.remove(i),r.Ba.delete(e),Du(r)}else await bc(r.localStore,e,!1).then(()=>Rc(r,e,n)).catch(Os)}async function qR(t,e){const n=me(t),r=e.batch.batchId;try{const s=await eR(n.localStore,e);v_(n,r,null),y_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ki(n,s)}catch(s){await Os(s)}}async function jR(t,e,n){const r=me(t);try{const s=await function(o,l){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ve(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);v_(r,e,n),y_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ki(r,s)}catch(s){await Os(s)}}function y_(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function v_(t,e,n){const r=me(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Rc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||E_(t,r)})}function E_(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(wu(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Du(t))}function qf(t,e,n){for(const r of n)r instanceof p_?(t.ka.addReference(r.key,e),HR(t,r)):r instanceof m_?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||E_(t,r.key)):he()}function HR(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.Na.add(r),Du(t))}function Du(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new oe(He.fromString(e)),r=t.Ka.next();t.Ba.set(r,new VR(n)),t.La=t.La.insert(n,r),l_(t.remoteStore,new sr(mn(Ma(n.path)),r,"TargetPurposeLimboResolution",Na.oe))}}async function Ki(t,e,n){const r=me(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Eu.zi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const d=me(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(u,m=>U.forEach(m.Wi,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>U.forEach(m.Gi,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Ms(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.us.get(m),I=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(I);d.us=d.us.insert(m,S)}}}(r.localStore,i))}async function zR(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await s_(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new ee(F.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ki(n,r.Ts)}}function WR(t,e){const n=me(t),r=n.Ba.get(e);if(r&&r.Fa)return Te().add(r.key);{let s=Te();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function w_(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=__.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BR.bind(null,e),e.Ma.R_=PR.bind(null,e.eventManager),e.Ma.Wa=kR.bind(null,e.eventManager),e}function GR(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jR.bind(null,e),e}class aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qa(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return ZA(this.persistence,new XA,e.initialUser,this.serializer)}ja(e){return new r_(vu.ei,this.serializer)}za(e){return new oR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}aa.provider={build:()=>new aa};class KR extends aa{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ve(this.persistence.referenceDelegate instanceof ia);const r=this.persistence.referenceDelegate.garbageCollector;return new xA(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new r_(r=>ia.ei(r,n),this.serializer)}}class Sc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zR.bind(null,this.syncEngine),await RR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CR}()}createDatastore(e){const n=qa(e.databaseInfo.databaseId),r=function(i){return new uR(i)}(e.databaseInfo);return function(i,o,l,c){return new fR(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new mR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Bf(this.syncEngine,n,0),function(){return xf.p()?new xf:new aR}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new OR(s,i,o,l,c,u);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);Z("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Gi(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Sc.provider={build:()=>new Sc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class QR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=bt.UNAUTHENTICATED,this.clientId=bg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ru(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ul(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await s_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YR(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Lf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Lf(e.remoteStore,s)),t._onlineComponents=e}async function YR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;bs("Error using user provided cache. Falling back to memory cache: "+n),await Ul(t,new aa)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Ul(t,new KR(void 0));return t._offlineComponents}async function T_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await jf(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await jf(t,new Sc))),t._onlineComponents}function XR(t){return T_(t).then(e=>e.syncEngine)}async function la(t){const e=await T_(t),n=e.eventManager;return n.onListen=MR.bind(null,e.syncEngine),n.onUnlisten=FR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=UR.bind(null,e.syncEngine),n}function JR(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Nu({next:m=>{d.eu(),o.enqueueAndForget(()=>Cu(i,p));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new ee(F.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new ee(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ku(Ma(l.path),d,{includeMetadataChanges:!0,ua:!0});return Su(i,p)}(await la(t),t.asyncQueue,e,n,r)),r.promise}function ZR(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Nu({next:m=>{d.eu(),o.enqueueAndForget(()=>Cu(i,p)),m.fromCache&&c.source==="server"?u.reject(new ee(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ku(l,d,{includeMetadataChanges:!0,ua:!0});return Su(i,p)}(await la(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function I_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new Map;/**
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
 */function b_(t,e,n){if(!n)throw new ee(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eS(t,e,n,r){if(e===!0&&r===!0)throw new ee(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zf(t){if(!oe.isDocumentKey(t))throw new ee(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wf(t){if(oe.isDocumentKey(t))throw new ee(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function za(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=za(t);throw new ee(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=I_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hb;switch(r.type){case"firstParty":return new mb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hf.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Hf.delete(n),r.terminate())}(this),Promise.resolve()}}function tS(t,e,n,r={}){var s;const i=(t=Kt(t,Wa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=bt.MOCK_USER;else{l=Cw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ee(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new bt(u)}t._authCredentials=new db(new Ig(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kr(this.firestore,e,this._query)}}class xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class ur extends Kr{constructor(e,n,r){super(e,n,Ma(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new oe(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function Un(t,e,...n){if(t=ut(t),b_("collection","path",e),t instanceof Wa){const r=He.fromString(e,...n);return Wf(r),new ur(t,null,r)}{if(!(t instanceof xt||t instanceof ur))throw new ee(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return Wf(r),new ur(t.firestore,null,r)}}function Lt(t,e,...n){if(t=ut(t),arguments.length===1&&(e=bg.newId()),b_("doc","path",e),t instanceof Wa){const r=He.fromString(e,...n);return zf(r),new xt(t,null,new oe(r))}{if(!(t instanceof xt||t instanceof ur))throw new ee(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return zf(r),new xt(t.firestore,t instanceof ur?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new o_(this,"async_queue_retry"),this.fu=()=>{const r=Fl();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Fl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new On;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ms(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Au.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&he()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Qf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class $n extends Wa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Kf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kf(e),this._firestoreClient=void 0,await e}}}function Vu(t,e){const n=typeof t=="object"?t:Lm(),r=typeof t=="string"?t:"(default)",s=Xc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Rw("firestore");i&&tS(s,...i)}return s}function Qi(t){if(t._terminated)throw new ee(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||nS(t),t._firestoreClient}function nS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new kb(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,I_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new QR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(yt.fromBase64String(e))}catch(n){throw new ee(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this._methodName=e}}/**
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
 */class Ou{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */class Mu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const rS=/^__.*__$/;class sS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new zi(e,this.data,n,this.fieldTransforms)}}class A_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function R_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class xu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new xu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ca(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(R_(this.Mu)&&rS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class iS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qa(e)}$u(e,n,r,s=!1){return new xu({Mu:e,methodName:n,Ku:r,path:_t.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ka(t){const e=t._freezeSettings(),n=qa(t._databaseId);return new iS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function S_(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Fu("Data must be an object, but it was:",o,r);const l=k_(r,o);let c,u;if(i.merge)c=new Gt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Cc(e,p,n);if(!o.contains(m))throw new ee(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);N_(d,m)||d.push(m)}c=new Gt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new sS(new Bt(l),c,u)}class Qa extends Ga{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qa}}class Lu extends Ga{_toFieldTransform(e){return new tA(e.path,new Ni)}isEqual(e){return e instanceof Lu}}function C_(t,e,n,r){const s=t.$u(1,e,n);Fu("Data must be an object, but it was:",s,r);const i=[],o=Bt.empty();wr(r,(c,u)=>{const d=Uu(e,c,n);u=ut(u);const p=s.Bu(d);if(u instanceof Qa)i.push(d);else{const m=Xi(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Gt(i);return new A_(o,l,s.fieldTransforms)}function P_(t,e,n,r,s,i){const o=t.$u(1,e,n),l=[Cc(e,r,n)],c=[s];if(i.length%2!=0)throw new ee(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Cc(e,i[m])),c.push(i[m+1]);const u=[],d=Bt.empty();for(let m=l.length-1;m>=0;--m)if(!N_(u,l[m])){const _=l[m];let I=c[m];I=ut(I);const S=o.Bu(_);if(I instanceof Qa)u.push(_);else{const C=Xi(I,S);C!=null&&(u.push(_),d.set(_,C))}}const p=new Gt(u);return new A_(d,p,o.fieldTransforms)}function oS(t,e,n,r=!1){return Xi(n,t.$u(r?4:3,e))}function Xi(t,e){if(D_(t=ut(t)))return Fu("Unsupported field value:",e,t),k_(t,e);if(t instanceof Ga)return function(r,s){if(!R_(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Xi(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Jb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=st.fromDate(r);return{timestampValue:sa(s.serializer,i)}}if(r instanceof st){const i=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sa(s.serializer,i)}}if(r instanceof Ou)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ks)return{bytesValue:Yg(s.serializer,r._byteString)};if(r instanceof xt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_u(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Mu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return pu(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${za(r)}`)}(t,e)}function k_(t,e){const n={};return Ag(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,(r,s)=>{const i=Xi(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function D_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Ou||t instanceof ks||t instanceof xt||t instanceof Ga||t instanceof Mu)}function Fu(t,e,n){if(!D_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=za(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function Cc(t,e,n){if((e=ut(e))instanceof Yi)return e._internalPath;if(typeof e=="string")return Uu(t,e);throw ca("Field path arguments must be of type string or ",t,!1,void 0,n)}const aS=new RegExp("[~\\*/\\[\\]]");function Uu(t,e,n){if(e.search(aS)>=0)throw ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yi(...e.split("."))._internalPath}catch{throw ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ca(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ee(F.INVALID_ARGUMENT,l+t+c)}function N_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($u("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lS extends V_{data(){return super.data()}}function $u(t,e){return typeof e=="string"?Uu(t,e):e instanceof Yi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bu{}class cS extends Bu{}function qr(t,e,...n){let r=[];e instanceof Bu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof qu).length,l=i.filter(c=>c instanceof Ya).length;if(o>1||o>0&&l>0)throw new ee(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ya extends cS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ya(e,n,r)}_apply(e){const n=this._parse(e);return M_(e._query,n),new Kr(e.firestore,e.converter,yc(e._query,n))}_parse(e){const n=Ka(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ee(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Xf(p,d);const _=[];for(const I of p)_.push(Yf(c,i,I));m={arrayValue:{values:_}}}else m=Yf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Xf(p,d),m=oS(l,o,p,d==="in"||d==="not-in");return nt.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tn(t,e,n){const r=e,s=$u("where",t);return Ya._create(s,r,n)}class qu extends Bu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new qu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:an.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)M_(o,c),o=yc(o,c)}(e._query,n),new Kr(e.firestore,e.converter,yc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Yf(t,e,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new ee(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Og(e)&&n.indexOf("/")!==-1)throw new ee(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(He.fromString(n));if(!oe.isDocumentKey(r))throw new ee(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gf(t,new oe(r))}if(n instanceof xt)return gf(t,n._key);throw new ee(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${za(n)}.`)}function Xf(t,e){if(!Array.isArray(t)||t.length===0)throw new ee(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function M_(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ee(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class uS{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Xe(o.doubleValue));return new Mu(i)}convertGeoPoint(e){return new Ou(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Oa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Pi(e));default:return null}}convertTimestamp(e){const n=fr(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Ve(n_(r));const s=new ki(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class L_ extends V_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($u("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fo extends L_{data(e={}){return super.data(e)}}class F_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new si(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fo(this._firestore,this._userDataWriter,r.key,r,new si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new si(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new si(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:hS(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t){t=Kt(t,xt);const e=Kt(t.firestore,$n);return JR(Qi(e),t._key).then(n=>q_(e,t,n))}class ju extends uS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function jr(t){t=Kt(t,Kr);const e=Kt(t.firestore,$n),n=Qi(e),r=new ju(e);return O_(t._query),ZR(n,t._query).then(s=>new F_(e,r,t,s))}function Hu(t,e,n,...r){t=Kt(t,xt);const s=Kt(t.firestore,$n),i=Ka(s);let o;return o=typeof(e=ut(e))=="string"||e instanceof Yi?P_(i,"updateDoc",t._key,e,n,r):C_(i,"updateDoc",t._key,e),Xa(s,[o.toMutation(t._key,qt.exists(!0))])}function $_(t){return Xa(Kt(t.firestore,$n),[new $a(t._key,qt.none())])}function B_(t,e){const n=Kt(t.firestore,$n),r=Lt(t),s=x_(t.converter,e);return Xa(n,[S_(Ka(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function dS(t,...e){var n,r,s;t=ut(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Qf(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Qf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof xt)u=Kt(t.firestore,$n),d=Ma(t._key.path),c={next:p=>{e[o]&&e[o](q_(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Kt(t,Kr);u=Kt(p.firestore,$n),d=p._query;const m=new ju(u);c={next:_=>{e[o]&&e[o](new F_(u,m,p,_))},error:e[o+1],complete:e[o+2]},O_(t._query)}return function(m,_,I,S){const C=new Nu(S),D=new ku(_,C,I);return m.asyncQueue.enqueueAndForget(async()=>Su(await la(m),D)),()=>{C.eu(),m.asyncQueue.enqueueAndForget(async()=>Cu(await la(m),D))}}(Qi(u),d,l,c)}function Xa(t,e){return function(r,s){const i=new On;return r.asyncQueue.enqueueAndForget(async()=>$R(await XR(r),s,i)),i.promise}(Qi(t),e)}function q_(t,e,n){const r=n.docs.get(e._key),s=new ju(t);return new L_(t,s,e._key,r,new si(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ka(e)}set(e,n,r){this._verifyNotCommitted();const s=$l(e,this._firestore),i=x_(s.converter,n,r),o=S_(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,qt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=$l(e,this._firestore);let o;return o=typeof(n=ut(n))=="string"||n instanceof Yi?P_(this._dataReader,"WriteBatch.update",i._key,n,r,s):C_(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,qt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=$l(e,this._firestore);return this._mutations=this._mutations.concat(new $a(n._key,qt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(F.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $l(t,e){if((t=ut(t)).firestore!==e)throw new ee(F.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function ua(){return new Lu("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return Qi(t=Kt(t,$n)),new fS(t,e=>Xa(t,e))}(function(e,n=!0){(function(s){Vs=s})(Ds),Ts(new Ur("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new $n(new fb(r.getProvider("auth-internal")),new _b(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ki(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),cr(uf,"4.7.5",e),cr(uf,"4.7.5","esm2017")})();const Ls=Vu(Ze),j_=Un(Ls,"relays");async function pS(){const e=ht(Ze).currentUser;if(!e)throw new Error("User is not authenticated");const n=Un(Ls,"relays"),r=qr(n,tn("uid","==",e.uid));return(await jr(r)).docs.map(i=>{const o=i.data();return{id:i.id,uid:o.uid,name:o.name,boardId:o.boardId,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0}})}async function mS(t,e){if(!ht(Ze).currentUser)throw new Error("User is not authenticated");const s=Lt(Ls,"relays",t);await Hu(s,{state:e})}async function gS(t,e,n){if(!ht(Ze).currentUser)throw new Error("User is not authenticated");const i=Lt(Ls,"relays",t);await Hu(i,{name:e,maxOnTime_s:n})}async function _S(t){const n=ht(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await B_(j_,r)).id,...r}}async function yS(t){if(!ht(Ze).currentUser)throw new Error("User is not authenticated");const r=Lt(Ls,"relays",t);await $_(r)}async function vS(t){const n=ht(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r=qr(j_,tn("uid","==",n.uid),tn("name","==",t));return(await jr(r)).empty}function ES(t,e){if(!ht(Ze).currentUser)throw new Error("User is not authenticated");const s=Lt(Ls,"relays",t);return dS(s,i=>{if(i.exists()){const o=i.data(),l={id:i.id,uid:o.uid,name:o.name,boardId:o.boardId,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0};e(l)}else console.error("Relay not found")})}const Fs=Fi("relay",()=>{const t=le([]),e=le(!1),n=le(null),r=le({}),s=async()=>{e.value=!0,n.value=null;try{t.value=await pS(),t.value.forEach(I=>{m(I.id)})}catch(I){n.value="Failed to load relays",console.error(I)}finally{e.value=!1}},i=async(I,S,C)=>{try{await gS(I,S,C);const D=t.value.find(x=>x.id===I);D&&(D.name=S,D.maxOnTime_s=C)}catch(D){console.error("Failed to update relay config:",D)}},o=async(I,S)=>{try{await mS(I,S);const C=t.value.find(D=>D.id===I);C&&(C.state=S)}catch(C){console.error("Failed to update relay state:",C)}},l=async I=>{try{const S=await _S(I);t.value.push(S),m(S.id)}catch(S){console.error("Failed to add relay:",S)}},c=async I=>{try{await yS(I),t.value=t.value.filter(S=>S.id!==I),_(I)}catch(S){console.error("Failed to delete relay:",S)}},u=async I=>{try{return await vS(I)}catch(S){return console.error("Failed to check relay name uniqueness:",S),!1}};function d(I){return p(I.maxOnTime_s?I.maxOnTime_s:0)}function p(I){if(isNaN(I)||I<0)return"00:00:00";const S=Math.floor(I/3600),C=Math.floor(I%3600/60),D=I%60,x=String(S).padStart(2,"0"),L=String(C).padStart(2,"0"),B=String(D).padStart(2,"0");return`${x}:${L}:${B}`}const m=I=>{_(I),r.value[I]=ES(I,S=>{const C=t.value.findIndex(D=>D.id===I);C!==-1&&(t.value[C]=S)})},_=I=>{r.value[I]&&(r.value[I](),delete r.value[I])};return Hc(()=>{Object.keys(r.value).forEach(I=>{_(I)})}),{relays:t,loading:e,error:n,loadRelays:s,updateRelayConfig:i,updateRelayState:o,addRelay:l,isRelayNameUnique:u,deleteRelay:c,getMaxOnTime:d,secondsToHHMMSS:p}}),wS=Me({components:{ToggleButton:ub},props:{relay:{type:Object,required:!0}},setup(t){const e=Fs(),n=le(0);let r;const s=le(t.relay.turnedOnAt),i=le(!1);va(async()=>{await l()}),xp(()=>{clearTimeout(r)});const o=qe(()=>{let m=t.relay.name;return t.relay.maxOnTime_s&&t.relay.maxOnTime_s>0&&(t.relay.state?m+=" - "+e.secondsToHHMMSS(n.value):m+=" - "+e.getMaxOnTime(t.relay)),m});async function l(){t.relay.maxOnTime_s!==0&&(n.value=u(),n.value!==0&&t.relay.state&&d())}async function c(m){m&&t.relay.maxOnTime_s&&(n.value=t.relay.maxOnTime_s),m?(s.value=t.relay.turnedOnAt,i.value=!0):i.value=!1,await e.updateRelayState(t.relay.id,m),!(!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0)&&(m||(clearTimeout(r),n.value=0))}function u(){if(!t.relay.turnedOnAt||!t.relay.maxOnTime_s)return 0;const m=t.relay.turnedOnAt.getTime()+t.relay.maxOnTime_s*1e3;return Math.max(0,Math.floor((m-Date.now())/1e3))}function d(){!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0||(clearTimeout(r),r=setTimeout(async()=>{n.value--,n.value!==0&&d()},1e3))}function p(){!s.value||!t.relay.turnedOnAt||s.value>=t.relay.turnedOnAt||(i.value=!1,d())}return Mr(()=>t.relay.turnedOnAt,p),{displayName:o,isBlocked:i,handleToggle:c}}}),TS={class:"relay"},IS={class:"name"};function bS(t,e,n,r,s,i){const o=ve("toggle-button");return z(),re("div",TS,[X("div",IS,Ne(t.displayName),1),_e(o,{modelValue:t.$props.relay.state,isBlocked:t.isBlocked,"onUpdate:modelValue":t.handleToggle},null,8,["modelValue","isBlocked","onUpdate:modelValue"])])}const AS=Ue(wS,[["render",bS],["__scopeId","data-v-5dc99cd3"]]),RS=Me({name:"SwipeableListItem",emits:["left-action","right-action"],props:{blockSwipe:{type:Boolean,default:!1}},setup(t,{emit:e}){const n=le(0),r=le(0),s=le(0),i=le(0),o=le(!1),l=le(!1);let c=100,u=le(!1),d=le(!1);const p=D=>{t.blockSwipe||(n.value=D.touches[0].clientX,r.value=D.touches[0].clientY,c=D.currentTarget.clientWidth/4,i.value=Date.now(),u.value=!1,d.value=!1)},m=D=>{if(t.blockSwipe)return;const x=D.touches[0].clientX,L=D.touches[0].clientY,B=x-n.value,ie=L-r.value;if(d.value&&u.value){_(B);return}d.value||(Math.abs(B)>Math.abs(ie)?(u.value=!0,d.value=!0,_(B)):(u.value=!1,d.value=!0))},_=D=>{s.value=D,Math.abs(s.value)>c*2?l.value=!0:Math.abs(s.value)>c?(l.value=!1,o.value=!0):(l.value=!1,o.value=!1)},I=()=>{if(t.blockSwipe||!u.value)return;const D=Date.now()-i.value;l.value&&D>1e3&&(s.value<0?C():S()),s.value=0,l.value=!1,o.value=!1},S=()=>{e("left-action")},C=()=>{e("right-action")};return{onTouchStart:p,onTouchMove:m,onTouchEnd:I,onLeftAction:S,onRightAction:C,translateX:s,thresholdOneHit:o}}}),SS={class:"actions actions-left"},CS={class:"actions actions-right"};function PS(t,e,n,r,s,i){return z(),re("div",{class:"swipeable-list-item",onTouchstart:e[0]||(e[0]=(...o)=>t.onTouchStart&&t.onTouchStart(...o)),onTouchmove:e[1]||(e[1]=(...o)=>t.onTouchMove&&t.onTouchMove(...o)),onTouchend:e[2]||(e[2]=(...o)=>t.onTouchEnd&&t.onTouchEnd(...o))},[X("div",{class:Mt(["buttons",{"direction-left":t.translateX>0,"direction-right":t.translateX<0,"threshold-one-hit":t.thresholdOneHit}])},[X("div",SS,[bo(t.$slots,"left-action",{},()=>[e[3]||(e[3]=Vn("Edit"))])]),X("div",CS,[bo(t.$slots,"right-action",{},()=>[e[4]||(e[4]=Vn("Delete"))])])],2),X("div",{class:"content",style:En({transform:`translateX(${t.translateX}px)`})},[bo(t.$slots,"default",{},void 0)],4)],32)}const kS=Ue(RS,[["render",PS],["__scopeId","data-v-b07fba68"]]),DS=Me({components:{ButtonDefault:zr},emits:["isDone"],props:{allowAdvancedSettings:{type:Boolean,default:!1},existingRelay:{type:Object,default:null}},setup(t,e){const n=Fs(),r=le(""),s=le(""),i=le("");va(()=>{t.existingRelay&&(r.value=t.existingRelay.name,s.value=n.getMaxOnTime(t.existingRelay))});async function o(){if(!await c()||!u())return;const p=d();t.existingRelay?await n.updateRelayConfig(t.existingRelay.id,r.value.trim(),p):await n.addRelay({name:r.value.trim(),state:!1,maxOnTime_s:p}),r.value="",e.emit("isDone")}function l(){e.emit("isDone")}async function c(){return r.value.trim().length<2?(i.value="Relay name must be at least 2 characters long.",!1):t.existingRelay&&t.existingRelay.name===r.value.trim()?!0:await n.isRelayNameUnique(r.value.trim())?(i.value="",!0):(i.value="Relay name already exists.",!1)}function u(){if(!t.allowAdvancedSettings)return!0;const p=s.value.trim();if(p==="")return!0;const _=/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(p);return _||(i.value="Max on time must be in the format HH:MM:SS."),_}function d(){if(!t.allowAdvancedSettings)return 0;const p=s.value.trim(),[m,_,I]=p.split(":").map(Number);return m*3600+_*60+I}return{newRelayName:r,newMaxOnTime:s,nameError:i,saveRelay:o,abortChanges:l}}}),NS={class:"relay-editable"},VS={key:0,class:"header"},OS={key:1,class:"max-on-time"},MS={class:"action-buttons"},xS={key:2,class:"name-error"};function LS(t,e,n,r,s,i){const o=ve("button-default");return z(),re("div",NS,[t.$props.allowAdvancedSettings?(z(),re("div",VS,"Name")):Oe("",!0),Wl(X("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.newRelayName=l),type:"text",placeholder:"Relay name",class:"relay-input"},null,512),[[Zl,t.newRelayName]]),t.$props.allowAdvancedSettings?(z(),re("div",OS,[e[2]||(e[2]=X("div",{class:"header"},"Max on time",-1)),Wl(X("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.newMaxOnTime=l),type:"text",placeholder:"HH:MM:SS or keep empty",class:"max-on-time-input"},null,512),[[Zl,t.newMaxOnTime]])])):Oe("",!0),X("div",MS,[_e(o,{class:"button-save",text:"Save",onClick:t.saveRelay},null,8,["onClick"]),_e(o,{class:"button-cancel",text:"Cancel",onClick:t.abortChanges},null,8,["onClick"])]),t.nameError?(z(),re("div",xS,Ne(t.nameError),1)):Oe("",!0)])}const FS=Ue(DS,[["render",LS],["__scopeId","data-v-5c52aaf5"]]),US=Me({components:{RelayEditable:FS,SwipeableListItem:kS,ButtonDefault:zr,Relay:AS,Spinner:Sa},emits:["requestScrollToBottom"],setup(t,e){const n=Fs(),r=le(!1),s=le(""),i=le(!1),o=le([]);let l=0,c=0;Hr(()=>{n.loadRelays()});const u=C=>{if(i.value)return;const D=C.touches[0];l=D.clientY,c=D.clientX},d=C=>{if(i.value)return;const D=C.touches[0],x=Math.abs(D.clientX-c),L=Math.abs(D.clientY-l);L<=x||L<=40||(i.value=!0,setTimeout(()=>e.emit("requestScrollToBottom")))};function p(){r.value=!0,setTimeout(()=>e.emit("requestScrollToBottom"))}function m(C){s.value=C;const D=n.relays.findIndex(x=>x.id===C);!o.value||!o.value[D]||setTimeout(()=>{var x;return e.emit("requestScrollToBottom",(x=o.value[D])==null?void 0:x.$el)})}async function _(C){await n.deleteRelay(C)}function I(){s.value=""}function S(){r.value=!1}return{ref_relayItems:o,relayStore:n,isAddingNewRelay:r,editableRelayId:s,isVerticallySwiped:i,startAddingRelay:p,requestEdit:m,requestDelete:_,onEditArrayDone:I,onAddNewArrayDone:S,onTouchStart:u,onTouchMove:d}}}),$S={key:1};function BS(t,e,n,r,s,i){const o=ve("spinner"),l=ve("relay-editable"),c=ve("relay"),u=ve("swipeable-list-item"),d=ve("button-default");return z(),re("div",{class:"relays",onTouchstart:e[0]||(e[0]=(...p)=>t.onTouchStart&&t.onTouchStart(...p)),onTouchmove:e[1]||(e[1]=(...p)=>t.onTouchMove&&t.onTouchMove(...p))},[t.relayStore.loading?(z(),ze(o,{key:0,"spinner-size":"20px","with-text":!0})):Oe("",!0),!t.relayStore.loading&&!t.relayStore.error?(z(),re("div",$S,[(z(!0),re(tt,null,Er(t.relayStore.relays,p=>(z(),ze(u,{ref_for:!0,ref:"ref_relayItems",key:p.id,blockSwipe:t.editableRelayId.length>0||p.state||t.isAddingNewRelay,onLeftAction:m=>t.requestEdit(p.id),onRightAction:m=>t.requestDelete(p.id)},{default:fn(()=>[t.editableRelayId&&t.editableRelayId===p.id?(z(),ze(l,{key:p.id,allowAdvancedSettings:!0,existingRelay:p,onIsDone:t.onEditArrayDone},null,8,["existingRelay","onIsDone"])):(z(),ze(c,{key:p.id,relay:p},null,8,["relay"]))]),_:2},1032,["blockSwipe","onLeftAction","onRightAction"]))),128))])):Oe("",!0),!t.isAddingNewRelay&&t.isVerticallySwiped&&t.editableRelayId.length===0?(z(),ze(d,{key:2,text:"Add new Relay",onOnButtonClicked:t.startAddingRelay},null,8,["onOnButtonClicked"])):Oe("",!0),t.isAddingNewRelay&&t.isVerticallySwiped&&t.editableRelayId.length===0?(z(),ze(l,{key:3,onIsDone:t.onAddNewArrayDone},null,8,["onIsDone"])):Oe("",!0)],32)}const H_=Ue(US,[["render",BS],["__scopeId","data-v-bdf8a35d"]]),zu=Vu(Ze),z_=Un(zu,"schedules");async function qS(){const e=ht(Ze).currentUser;if(!e)throw new Error("User is not authenticated");const n=qr(z_,tn("uid","==",e.uid));return(await jr(n)).docs.map(s=>{const i=s.data();return{id:s.id,uid:i.uid,name:i.name,timeStart:i.timeStart,duration:i.duration,relays:i.relays||[],days:i.days||[]}})}async function jS(t){const n=ht(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await B_(z_,r)).id,...r}}async function HS(t,e){if(!ht(Ze).currentUser)throw new Error("User is not authenticated");const s=Lt(zu,"schedules",t);await Hu(s,e)}async function zS(t){if(!ht(Ze).currentUser)throw new Error("User is not authenticated");const r=Lt(zu,"schedules",t);await $_(r)}const WS=Fi("schedule",()=>{const t=le([]),e=le(!1),n=le(null);return{schedules:t,loading:e,error:n,loadSchedules:async()=>{e.value=!0,n.value=null;try{t.value=await qS()}catch(l){n.value="Failed to load schedules",console.error(l)}finally{e.value=!1}},addSchedule:async l=>{try{const c=await jS(l);t.value.push(c)}catch(c){console.error("Failed to add schedule:",c)}},updateSchedule:async(l,c)=>{try{await HS(l,c);const u=t.value.find(d=>d.id===l);u&&Object.assign(u,c)}catch(u){console.error("Failed to update schedule:",u)}},deleteSchedule:async l=>{try{await zS(l),t.value=t.value.filter(c=>c.id!==l)}catch(c){console.error("Failed to delete schedule:",c)}}}}),GS=Me({props:{schedule:{type:Object,required:!0}},setup(t){const e=["Mo","Tu","We","Th","Fr","Sa","Su"],n=qe(()=>{const[s,i,o]=t.schedule.timeStart.split(":").map(Number),[l,c,u]=t.schedule.duration.split(":").map(Number),d=new Date;return d.setHours(s+l),d.setMinutes(i+c),d.setSeconds(o+u),`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`}),r=qe(()=>t.schedule.days.map(s=>s.slice(0,2)));return{endTime:n,allDays:e,selectedDays:r}}}),KS={class:"schedule-item"},QS={class:"schedule-name"},YS={class:"times"},XS={class:"schedule-time"},JS={class:"duration"},ZS={class:"schedule-days"};function eC(t,e,n,r,s,i){return z(),re("div",KS,[X("div",QS,Ne(t.schedule.name),1),X("div",YS,[X("div",XS,Ne(t.schedule.timeStart)+" - "+Ne(t.endTime),1),X("div",JS,"("+Ne(t.schedule.duration)+")",1)]),X("div",ZS,[(z(!0),re(tt,null,Er(t.allDays,o=>(z(),re("span",{key:o,class:Mt([{selected:t.selectedDays.includes(o)},"day"])},Ne(o),3))),128))])])}const tC=Ue(GS,[["render",eC],["__scopeId","data-v-f470525b"]]),nC=Me({components:{Schedule:tC,Spinner:Sa},setup(){const t=WS();return Hr(async()=>{await t.loadSchedules()}),{scheduleStore:t}}}),rC={class:"schedules"},sC={key:1},iC={key:0};function oC(t,e,n,r,s,i){const o=ve("spinner"),l=ve("Schedule");return z(),re("div",rC,[t.scheduleStore.loading?(z(),ze(o,{key:0,"spinner-size":"20px","with-text":!0})):Oe("",!0),!t.scheduleStore.loading&&!t.scheduleStore.error?(z(),re("div",sC,[t.scheduleStore.schedules.length?(z(),re("div",iC,[(z(!0),re(tt,null,Er(t.scheduleStore.schedules,c=>(z(),ze(l,{key:c.id,schedule:c},null,8,["schedule"]))),128))])):Oe("",!0)])):Oe("",!0)])}const W_=Ue(nC,[["render",oC],["__scopeId","data-v-acbf9593"]]),Za=Fi("page",()=>{const t=le("relays"),e=le(),n={home:"Relay Hub",boards:"Boards",board:"Board",relays:"Relay Control",schedules:"Task Schedules"},r=o=>{t.value=o},s=qe(()=>n[t.value]||"Unknown Page");return{currentPage:t,currentPageTitle:s,navigateBackPage:e,setPage:r,setNavigateBackPage:o=>{e.value=o}}}),aC=Me({props:{title:{type:String,required:!0}},setup(){return{}}}),lC={class:"page-tite"};function cC(t,e,n,r,s,i){return z(),re("div",lC,Ne(t.$props.title),1)}const uC=Ue(aC,[["render",cC],["__scopeId","data-v-7de7892e"]]),hC=Me({props:{color:{type:String,default:"white"}},setup(t){return{iconBackStyle:qe(()=>({"--icon-color":t.color}))}}});function dC(t,e,n,r,s,i){return z(),re("div",{class:"icon-back",style:En(t.iconBackStyle)},e[0]||(e[0]=[X("svg",{viewBox:"0 0 24 24",class:"icon",xmlns:"http://www.w3.org/2000/svg"},[X("path",{d:"m 16.962167,22.810082 c 0.297374,0.270339 0.75695,0.243306 1.027288,-0.05406 0.270339,-0.297374 0.243307,-0.75695 -0.05406,-1.027288 L 7.4732599,12.266854 c -0.2703387,-0.243306 -0.2703387,-0.594746 0,-0.83805 L 17.935388,2.2913399 c 0.297374,-0.2703387 0.324406,-0.729915 0.0811,-1.0272884 C 17.746147,0.96667721 17.286569,0.93964454 16.989198,1.1829535 L 6.5270732,10.347447 c -0.9191536,0.811018 -0.9461886,2.162712 -0.027033,3.000764 z",style:{"stroke-width":"0.0337924"}})],-1)]),4)}const fC=Ue(hC,[["render",dC],["__scopeId","data-v-0a839df4"]]),pC=Me({components:{IconBack:fC,PageTitle:uC},setup(){const t=Za(),e=Ra();function n(){t.navigateBackPage&&(e.push({name:t.navigateBackPage}),t.setNavigateBackPage(null))}return{pageStore:t,onNavigateBack:n}}}),mC={class:"top-bar"};function gC(t,e,n,r,s,i){const o=ve("icon-back"),l=ve("PageTitle");return z(),re("div",mC,[X("div",{class:"icon-back-wrapper",onClick:e[0]||(e[0]=(...c)=>t.onNavigateBack&&t.onNavigateBack(...c))},[t.pageStore.navigateBackPage?(z(),ze(o,{key:0},{default:fn(()=>e[1]||(e[1]=[Vn(" Back ")])),_:1})):Oe("",!0)]),_e(l,{title:t.pageStore.currentPageTitle},null,8,["title"])])}const _C=Ue(pC,[["render",gC],["__scopeId","data-v-7fb2cb61"]]),yC=Me({props:{color:{type:String,default:"white"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconRaspberryStyle:qe(()=>({"--icon-color":t.color,fontSize:t.fontSize}))}}}),vC={key:0,class:"text"};function EC(t,e,n,r,s,i){return z(),re("div",{class:"icon-raspberry",style:En(t.iconRaspberryStyle)},[e[0]||(e[0]=X("svg",{fill:"#000000",viewBox:"-2.5 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[X("path",{d:"m 13.656,17.338 c -0.857,0.989 -1.334,2.79 -0.709,3.371 0.6,0.449 2.2,0.391 3.385,-1.23 0.344,-0.487 0.551,-1.093 0.551,-1.747 0,-0.603 -0.175,-1.164 -0.477,-1.637 l 0.007,0.012 c -0.73,-0.555 -1.778,0.164 -2.757,1.243 z m -8.057,0.3 c -0.908,-1.04 -2.088,-1.658 -2.851,-1.2 -0.51,0.382 -0.605,1.685 0.123,2.967 1.078,1.524 2.6,1.679 3.221,1.307 0.659,-0.488 0.3,-2.137 -0.493,-3.075 z m 4.105,3.145 c -1.1,-0.026 -2.8,0.439 -2.776,1.032 -0.018,0.4 1.331,1.572 2.7,1.513 1.326,0.03 2.7,-1.139 2.682,-1.649 -0.018,-0.51 -1.5,-0.927 -2.607,-0.884 z M 9.629,6.839 c -1.275,-0.032 -2.5,0.933 -2.5,1.493 0,0.68 1.008,1.376 2.51,1.394 1.543,0.01 2.518,-0.559 2.532,-1.26 C 12.187,7.672 10.777,6.827 9.653,6.839 Z M 6.558,7.371 C 4.423,7.026 2.645,8.271 2.716,10.563 2.786,11.447 7.346,7.522 6.559,7.386 V 7.371 Z m 9.749,3.251 c 0.071,-2.277 -1.709,-3.521 -3.844,-3.176 -0.787,0.135 3.772,4.061 3.844,3.176 z m 0.364,0.824 c -1.239,-0.329 -0.42,5.049 0.588,4.615 0.551,-0.525 0.894,-1.265 0.894,-2.084 0,-1.077 -0.592,-2.015 -1.468,-2.508 l -0.014,-0.007 v -0.015 z m -14.9,4.675 c 1.007,0.45 1.827,-4.929 0.589,-4.6 -0.891,0.504 -1.483,1.445 -1.483,2.525 0,0.821 0.343,1.563 0.893,2.089 l 10e-4,10e-4 z m 9.415,-5.948 c -0.63,0.49 -1.032,1.249 -1.032,2.101 0,0.624 0.215,1.197 0.575,1.65 l -0.004,-0.005 c 0.492,0.838 1.388,1.392 2.414,1.392 0.467,0 0.908,-0.115 1.295,-0.318 L 14.419,15 c 0.631,-0.49 1.034,-1.248 1.034,-2.101 0,-0.624 -0.215,-1.197 -0.576,-1.65 l 0.004,0.005 c -0.484,-0.835 -1.374,-1.388 -2.393,-1.388 -0.476,0 -0.923,0.121 -1.314,0.333 l 0.015,-0.007 z m -3.1,0.135 C 7.713,10.109 7.27,9.993 6.8,9.993 c -1.02,0 -1.911,0.548 -2.395,1.366 l -0.007,0.013 c -0.357,0.45 -0.572,1.026 -0.572,1.652 0,0.855 0.402,1.616 1.027,2.105 l 0.006,0.004 c 0.376,0.205 0.823,0.325 1.298,0.325 1.019,0 1.909,-0.553 2.386,-1.376 L 8.55,14.069 c 0.352,-0.448 0.564,-1.019 0.564,-1.64 0,-0.853 -0.4,-1.612 -1.024,-2.1 L 8.084,10.325 Z m 4.369,7.162 c -0.077,-1.399 -1.23,-2.504 -2.641,-2.504 -0.049,0 -0.098,0.001 -0.147,0.004 H 9.674 C 9.646,14.969 9.612,14.968 9.579,14.968 c -1.423,0 -2.585,1.119 -2.653,2.526 v 0.006 0.029 c 0.078,1.399 1.232,2.504 2.643,2.504 0.049,0 0.098,-0.001 0.147,-0.004 H 9.709 c 0.035,0.002 0.076,0.003 0.117,0.003 1.413,0 2.566,-1.116 2.625,-2.514 v -0.005 -0.029 l 0.01,-0.015 z M 15.67,2.337 c -1.69,0.771 -3.14,1.756 -4.396,2.945 l 0.007,-0.007 c 0.377,1.5 2.344,1.558 3.063,1.512 C 14.205,6.743 14.093,6.646 14.03,6.521 L 14.029,6.518 C 14.209,6.398 14.85,6.502 15.297,6.263 15.126,6.233 15.045,6.202 14.968,6.063 15.4,5.968 15.781,5.808 16.124,5.591 L 16.109,5.6 C 16.076,5.605 16.039,5.609 16,5.609 c -0.132,0 -0.256,-0.037 -0.361,-0.1 l 0.003,0.002 c 0.419,-0.179 0.779,-0.4 1.103,-0.664 l -0.008,0.006 c -0.2,0 -0.406,0 -0.466,-0.075 0.336,-0.197 0.625,-0.429 0.875,-0.698 l 0.002,-0.002 c -0.272,0.045 -0.39,0.016 -0.454,-0.03 0.295,-0.226 0.544,-0.494 0.742,-0.798 l 0.007,-0.012 c -0.076,0.04 -0.166,0.063 -0.261,0.063 -0.095,0 -0.185,-0.023 -0.264,-0.064 l 0.003,0.002 c 0.091,-0.194 0.47,-0.314 0.69,-0.779 -0.073,0.019 -0.157,0.031 -0.243,0.031 -0.086,0 -0.17,-0.011 -0.25,-0.032 l 0.007,0.002 C 17.218,2.133 17.367,1.848 17.564,1.602 L 17.56,1.607 C 17.465,1.611 17.354,1.613 17.242,1.613 16.961,1.613 16.684,1.6 16.41,1.575 l 0.035,0.003 0.283,-0.285 C 16.604,1.269 16.462,1.255 16.316,1.255 c -0.297,0 -0.58,0.058 -0.839,0.164 l 0.015,-0.005 c -0.149,-0.105 0,-0.255 0.185,-0.4 -0.385,0.05 -0.734,0.138 -1.065,0.262 L 14.645,1.265 C 14.481,1.115 14.745,0.98 14.885,0.829 14.472,0.9 14.104,1.047 13.779,1.256 L 13.791,1.249 C 13.611,1.084 13.776,0.935 13.891,0.8 13.537,0.937 13.234,1.13 12.975,1.37 l 0.002,-0.002 c -0.09,-0.1 -0.209,-0.179 -0.06,-0.449 -0.291,0.162 -0.535,0.373 -0.73,0.624 l -0.004,0.005 c -0.194,-0.134 -0.119,-0.3 -0.119,-0.449 -0.285,0.253 -0.545,0.518 -0.785,0.8 L 11.27,1.91 C 11.209,1.879 11.17,1.76 11.135,1.564 10.356,2.314 9.246,4.187 10.85,4.92 12.21,3.854 13.799,3.001 15.522,2.45 L 15.629,2.42 15.67,2.345 Z m -12.259,0 C 5.242,2.92 6.831,3.778 8.219,4.879 L 8.188,4.855 C 9.788,4.105 8.681,2.232 7.906,1.499 7.865,1.693 7.821,1.828 7.771,1.858 7.522,1.566 7.264,1.301 6.991,1.055 L 6.983,1.048 c 0,0.15 0.077,0.33 -0.117,0.45 C 6.673,1.24 6.432,1.029 6.156,0.874 L 6.145,0.868 C 6.294,1.124 6.17,1.198 6.089,1.317 5.842,1.059 5.542,0.855 5.206,0.723 L 5.189,0.717 c 0.12,0.149 0.3,0.3 0.12,0.465 C 5,0.979 4.636,0.832 4.245,0.765 L 4.228,0.763 c 0.135,0.149 0.4,0.3 0.238,0.45 C 4.165,1.093 3.816,1.002 3.452,0.957 L 3.431,0.955 c 0.181,0.15 0.342,0.289 0.192,0.4 C 3.372,1.245 3.08,1.182 2.774,1.182 2.631,1.182 2.49,1.196 2.355,1.222 L 2.369,1.22 2.653,1.504 C 2.411,1.53 2.13,1.545 1.846,1.545 c -0.11,0 -0.22,-0.002 -0.33,-0.007 l 0.016,10e-4 c 0.199,0.238 0.35,0.525 0.432,0.839 l 0.003,0.015 c -0.045,0.045 -0.27,0.016 -0.483,0 0.225,0.449 0.6,0.57 0.688,0.765 C 2.096,3.199 2.006,3.223 1.911,3.223 1.816,3.223 1.725,3.199 1.647,3.157 L 1.65,3.158 C 1.869,3.465 2.115,3.731 2.391,3.963 L 2.398,3.968 C 2.315,4.007 2.217,4.029 2.115,4.029 2.051,4.029 1.988,4.02 1.929,4.004 l 0.005,0.001 c 0.251,0.269 0.537,0.5 0.851,0.69 l 0.018,0.01 C 2.743,4.775 2.532,4.774 2.324,4.78 2.639,5.04 3,5.263 3.389,5.432 L 3.418,5.443 C 3.316,5.514 3.19,5.556 3.053,5.556 3.018,5.556 2.983,5.553 2.949,5.548 h 0.004 c 0.327,0.21 0.708,0.371 1.116,0.46 L 4.092,6.012 C 4.021,6.13 3.894,6.209 3.748,6.212 4.197,6.466 4.826,6.347 5.006,6.482 4.942,6.61 4.831,6.707 4.696,6.751 L 4.692,6.752 C 5.411,6.797 7.392,6.737 7.764,5.238 6.516,4.061 5.065,3.081 3.472,2.361 L 3.373,2.321 3.413,2.337 Z M 5.145,0.1 C 5.388,0.133 5.608,0.203 5.809,0.305 L 5.797,0.3 C 6.326,0.13 6.447,0.363 6.707,0.459 7.284,0.339 7.459,0.6 7.736,0.878 L 8.058,0.869 C 8.765,1.358 9.283,2.075 9.509,2.913 L 9.515,2.938 C 9.746,2.076 10.264,1.359 10.96,0.881 l 0.012,-0.008 0.321,0.007 c 0.277,-0.28 0.452,-0.539 1.029,-0.418 0.261,-0.1 0.38,-0.33 0.911,-0.166 0.33,-0.1 0.62,-0.375 1.057,-0.045 0.131,-0.076 0.289,-0.121 0.457,-0.121 0.224,0 0.429,0.08 0.589,0.213 L 15.335,0.342 c 0.5,-0.06 0.653,0.061 0.774,0.21 0.108,0 0.809,-0.1 1.132,0.36 0.81,-0.09 1.064,0.464 0.774,0.988 0.114,0.121 0.185,0.284 0.185,0.464 0,0.204 -0.091,0.387 -0.234,0.511 l -0.001,10e-4 c 0.15,0.269 0.062,0.553 -0.27,0.913 0.014,0.055 0.023,0.117 0.023,0.182 0,0.284 -0.159,0.53 -0.393,0.655 l -0.004,0.002 c 0.06,0.51 -0.48,0.81 -0.629,0.914 -0.061,0.3 -0.181,0.584 -0.8,0.734 -0.089,0.449 -0.464,0.523 -0.824,0.614 1.309,0.619 2.199,1.929 2.199,3.446 0,0.1 -0.004,0.2 -0.012,0.298 l 0.001,-0.013 0.181,0.3 c 0.991,0.664 1.634,1.779 1.634,3.045 0,0.953 -0.365,1.821 -0.963,2.472 l 0.002,-0.003 c -0.139,0.635 -0.315,1.186 -0.535,1.713 l 0.024,-0.065 c -0.211,1.48 -1.197,2.687 -2.528,3.209 l -0.027,0.01 c -0.697,0.564 -1.506,1.025 -2.384,1.344 l -0.058,0.019 c -0.745,0.815 -1.809,1.328 -2.993,1.337 H 9.515 C 8.324,23.995 7.253,23.483 6.506,22.67 L 6.503,22.667 C 5.565,22.328 4.755,21.866 4.04,21.289 l 0.016,0.013 C 2.698,20.769 1.71,19.563 1.497,18.105 L 1.494,18.083 C 1.296,17.618 1.118,17.062 0.989,16.488 L 0.976,16.421 C 0.377,15.772 0.01,14.902 0.01,13.946 c 0,-1.265 0.644,-2.38 1.621,-3.036 l 0.013,-0.008 0.172,-0.3 C 1.809,10.517 1.805,10.418 1.805,10.318 1.805,8.801 2.694,7.491 3.981,6.882 L 4.004,6.872 C 3.645,6.782 3.284,6.707 3.181,6.257 2.566,6.107 2.446,5.823 2.381,5.523 2.231,5.418 1.692,5.123 1.752,4.595 1.513,4.465 1.353,4.215 1.353,3.928 1.353,3.861 1.362,3.797 1.378,3.735 L 1.377,3.74 C 1.063,3.394 0.977,3.095 1.107,2.825 0.963,2.702 0.873,2.52 0.873,2.317 0.873,2.136 0.945,1.971 1.062,1.851 0.777,1.326 1.032,0.757 1.841,0.851 2.158,0.386 2.864,0.492 2.967,0.492 3.088,0.342 3.252,0.207 3.746,0.267 3.908,0.134 4.117,0.053 4.345,0.053 4.51,0.053 4.665,0.095 4.8,0.169 L 4.795,0.167 C 4.903,0.07 5.044,0.008 5.2,0.001 h 10e-4 z"})],-1)),t.$props.text&&t.$props.text.length>0?(z(),re("div",vC,Ne(t.$props.text),1)):Oe("",!0)],4)}const wC=Ue(yC,[["render",EC],["__scopeId","data-v-5243a882"]]),TC=Me({components:{IconRaspberry:wC,IconSchedule:Rm,IconLightSwitch:Am},setup(){return{}}}),IC={class:"home"};function bC(t,e,n,r,s,i){const o=ve("icon-raspberry"),l=ve("router-link"),c=ve("icon-light-switch"),u=ve("icon-schedule");return z(),re("div",IC,[_e(l,{to:"/boards",class:"tile boards"},{default:fn(()=>[X("span",null,[_e(o,{text:"Boards",strokeColor:"deeppink",fontSize:"22px"})])]),_:1}),_e(l,{to:"/relays",class:"tile relays"},{default:fn(()=>[X("span",null,[_e(c,{text:"Relays",fontSize:"22px"})])]),_:1}),Oe("",!0),_e(l,{to:"/schedules",class:"tile schedules"},{default:fn(()=>[X("span",null,[_e(u,{strokeColor:"orange",text:"Schedules",fontSize:"22px"})])]),_:1}),Oe("",!0)])}const G_=Ue(TC,[["render",bC],["__scopeId","data-v-37ea29cb"]]),Ct=Vu(Ze),AC=Un(Ct,"boards"),RC=Un(Ct,"pinConfigs");async function SC(){const e=ht(Ze).currentUser;if(!e)throw new Error("User is not authenticated");const n=qr(AC,tn("uid","==",e.uid));return(await jr(n)).docs.map(s=>{const i=s.data();return{id:s.id,uid:i.uid,model:i.model,name:i.name,updatedAt:i.updatedAt.toDate(),createdAt:i.createdAt.toDate()}})}async function CC(t){if(!ht(Ze).currentUser)throw new Error("User is not authenticated");const r=Lt(Ct,"boards",t),s=await U_(r);if(!s.exists())throw new Error(`Board with ID ${t} does not exist`);const i=s.data();return{id:t,uid:i.uid,name:i.name,model:i.model,createdAt:i.createdAt.toDate(),updatedAt:i.updatedAt.toDate()}}async function PC(t){const n=ht(Ze).currentUser;if(!n)throw new Error("User is not authenticated");try{const r=qr(RC,tn("uid","==",n.uid),tn("boardId","==",t));return(await jr(r)).docs.map(i=>{const o=i.data();return{id:i.id,uid:o.uid,mode:o.mode,boardId:o.boardId,pinNumber:o.pinNumber,relayId:o.relayId,relayName:o.relayName}})}catch(r){throw console.error("Error fetching pinConfigs:",r),r}}async function kC(t,e){const n=Ja(Ct),r=Lt(Ct,"boards",t);n.update(r,{name:e,updatedAt:ua()}),await n.commit()}async function DC(t,e,n){const s=ht(Ze).currentUser;if(!s)throw new Error("User is not authenticated");if(n<=0)throw new Error("Number of pins must be greater than 0");const i=Ja(Ct),o=Lt(Un(Ct,"boards")),l={uid:s.uid,name:t,model:e,createdAt:ua(),updatedAt:ua()};i.set(o,l);for(let d=1;d<=n;d++){const p=Lt(Un(Ct,"pinConfigs")),m={uid:s.uid,pinNumber:d,mode:"input",boardId:o.id};i.set(p,m)}await i.commit();const c=await U_(o);if(!c.exists())throw new Error("Failed to retrieve the created board");const u=c.data();return{id:o.id,uid:u.uid,name:u.name,model:u.model,createdAt:u.createdAt.toDate(),updatedAt:u.updatedAt.toDate()}}async function NC(t,e){if(!ht(Ze).currentUser)throw new Error("User is not authenticated");if(!t.id)throw new Error("PinConfig ID is missing");if(!t.boardId)throw new Error("Board ID is missing in PinConfig");const s=Lt(Ct,"pinConfigs",t.id),i=Lt(Ct,"boards",t.boardId),o=Ja(Ct);o.update(s,{mode:t.mode,relayName:t.relayName,relayId:t.relayId}),e.forEach(l=>{if(!l.id)throw new Error("Relay ID is missing");const c=Lt(Ct,"relays",l.id);o.update(c,{boardId:l.boardId})}),o.update(i,{updatedAt:ua()}),await o.commit()}async function VC(t){const n=ht(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r=Lt(Ct,"boards",t),s=qr(Un(Ct,"pinConfigs"),tn("boardId","==",t),tn("uid","==",n.uid)),i=qr(Un(Ct,"relays"),tn("boardId","==",t),tn("uid","==",n.uid)),o=Ja(Ct);try{(await jr(s)).forEach(u=>{o.delete(u.ref)}),(await jr(i)).forEach(u=>{o.update(u.ref,{boardId:null})}),o.delete(r),await o.commit()}catch(l){throw console.error("Error deleting board and associated data:",l),new Error("Failed to delete the board.")}}const Wu=Fi("board",()=>{const t=le([]),e=le(null),n=le([]),r=le(!1),s=le(!1),i=le(null),o=Fs(),l=async()=>{try{r.value=!0,t.value=await SC()}catch(I){console.error("Failed to fetch boards:",I),i.value="Unable to load boards."}finally{r.value=!1}},c=async(I,S)=>{try{const C=t.value.findIndex(x=>x.id===I);if(C===-1)return;const D=t.value[C];await kC(I,S),t.value[C]={...D,name:S},e.value=t.value[C]}catch(C){console.error("Failed to update board:",C),i.value="Unable to update board."}},u=async(I,S,C)=>{try{C<=0&&console.error("Number of pins must be greater than 0");const D=await DC(I,S,C);t.value.push(D),console.log("Board added successfully with pins:",D)}catch(D){console.error("Failed to add new board:",D),i.value="Unable to add new board."}},d=async()=>{try{if(!e.value)return;s.value=!0;const I=e.value.id;if(e.value){const S=await PC(I);n.value=S.map(C=>{const D=o.relays.find(x=>x.id===C.relayId);return{...C,relayName:D?D.name:""}}).sort((C,D)=>C.pinNumber-D.pinNumber)}}catch(I){console.error("Failed to load board details:",I),i.value="Unable to load board details."}finally{s.value=!1}},p=()=>{e.value=null,n.value=[]};return{boards:t,selectedBoard:e,pinConfigs:n,loadingBoards:r,loadingPinConfigs:s,error:i,loadBoards:l,loadBoardDetails:d,addBoardWithPins:u,updatePinConfigAndRelays:async(I,S)=>{var C;try{await NC(I,S);const D=n.value.findIndex(L=>L.id===I.id);D!==-1&&(n.value[D]={...I});const x=t.value.findIndex(L=>L.id===I.boardId);if(x!==-1){const L=await CC(I.boardId);t.value[x]={...L},((C=e.value)==null?void 0:C.id)===I.boardId&&(e.value={...L})}}catch(D){console.error("Failed to update PinConfig mode:",D),i.value="Unable to update PinConfig."}},clearSelectedBoard:p,updateBoard:c,deleteBoard:async I=>{var S;try{await VC(I);const C=t.value.findIndex(D=>D.id===I);C!==-1&&t.value.splice(C,1),((S=e.value)==null?void 0:S.id)===I&&p()}catch(C){console.error("Failed to delete board:",C),C.value="Unable to delete board."}}}}),OC=Me({props:{options:{type:Array,required:!0},placeholder:{type:String,default:"Select an option"},modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:e}){const n=le(!1),r=le(t.modelValue);function s(){n.value=!n.value}function i(o){r.value=o.value,e("update:modelValue",o.value),n.value=!1}return{isOpen:n,selectedOption:r,toggleDropdown:s,selectOption:i}}}),MC={class:"custom-dropdown"},xC={key:0,class:"dropdown-list"},LC=["onClick"];function FC(t,e,n,r,s,i){return z(),re("div",MC,[X("div",{class:"dropdown-selected",onClick:e[0]||(e[0]=(...o)=>t.toggleDropdown&&t.toggleDropdown(...o))},[Vn(Ne(t.selectedOption||t.placeholder)+" ",1),X("span",{class:Mt(["arrow",{open:t.isOpen}])},"▼",2)]),t.isOpen?(z(),re("div",xC,[(z(!0),re(tt,null,Er(t.options,o=>(z(),re("div",{key:o.value,class:Mt(["dropdown-item",{selected:o.value===t.selectedOption}]),onClick:l=>t.selectOption(o)},Ne(o.label),11,LC))),128))])):Oe("",!0)])}const Gu=Ue(OC,[["render",FC],["__scopeId","data-v-20c408dc"]]),Jf=[{value:"Raspberry Pi Model B+ V1.2",numGpioPins:27},{value:"Raspberry Pi 2 Model B V1.1",numGpioPins:27},{value:"Raspberry Pi 3 Model B",numGpioPins:27},{value:"Raspberry Pi 4 Model B",numGpioPins:27},{value:"Raspberry Pi Zero",numGpioPins:27},{value:"Raspberry Pi Zero W",numGpioPins:27},{value:"Raspberry Pi 400",numGpioPins:27}],UC=Me({components:{Dropdown:Gu,ButtonDefault:zr},emits:["boardAdded","cancel"],props:{boardId:{type:String,default:null}},setup(t,{emit:e}){const n=Wu(),r=le(""),s=le(null),i=le(null);va(()=>{t.boardId&&(i.value=n.boards.find(m=>m.id===t.boardId)),i.value?(r.value=i.value.name,s.value=Jf.find(m=>m.value===i.value.model)):l()});const o=qe(()=>t.boardId&&i.value.name===r.value.trim()&&i.value.model===s.value.value?!1:r.value&&r.value.length>1&&s.value);function l(){r.value="",s.value=null}function c(m){return m&&s.value&&m.value===s.value.value}function u(m){m&&(s.value=m)}async function d(){if(o.value)try{const m=s.value.value,_=s.value.numGpioPins;i.value?await n.updateBoard(i.value.id,r.value):await n.addBoardWithPins(r.value,m,_),l(),e("boardAdded")}catch{errorMessage.value="Failed to add the board. Please try again."}}function p(){l(),e("cancel")}return{name:r,selectedModel:s,canSave:o,raspberryPiModels:Jf,isChecked:c,selectModel:u,onAdd:d,onCancel:p}}}),$C={class:"popup-add-board"},BC={class:"popup"},qC={key:0},jC={key:1,class:"options"},HC=["onClick"],zC={class:"buttons"};function WC(t,e,n,r,s,i){const o=ve("button-default");return z(),re("div",$C,[X("div",BC,[X("h3",null,Ne(t.$props.boardId?"Edit Board":"Add New Board"),1),e[1]||(e[1]=X("label",{for:"name"},"Name:",-1)),Wl(X("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.name=l),type:"text",placeholder:"Enter board name"},null,512),[[Zl,t.name]]),t.$props.boardId?Oe("",!0):(z(),re("label",qC,"Model:")),t.$props.boardId?Oe("",!0):(z(),re("div",jC,[(z(!0),re(tt,null,Er(t.raspberryPiModels,l=>(z(),re("div",{class:"option",key:l.value},[X("div",{class:Mt(["option-text",{"is-checked":t.isChecked(l)}]),onClick:c=>t.selectModel(l)},Ne(l.value),11,HC)]))),128))])),X("div",zC,[_e(o,{class:Mt({"can-save":t.canSave}),text:t.$props.boardId?"Save":"Add",onClick:t.onAdd},null,8,["class","text","onClick"]),_e(o,{text:"Cancel",onClick:t.onCancel},null,8,["onClick"])])])])}const K_=Ue(UC,[["render",WC],["__scopeId","data-v-71375cc5"]]),GC=Me({components:{PopupAddBoard:K_,ButtonDefault:zr,Spinner:Sa,Dropdown:Gu},setup(){const t=Ra(),e=Za(),n=Wu(),r=le(!1);Hr(()=>{n.loadBoards(),n.clearSelectedBoard()});function s(i){n.selectedBoard=i,e.setNavigateBackPage("boards"),t.push({name:"board"})}return{requestAddNewBoard:r,boardStore:n,requestBoard:s}}}),KC={class:"boards"},QC={key:1},YC=["onClick"];function XC(t,e,n,r,s,i){const o=ve("spinner"),l=ve("button-default"),c=ve("popup-add-board");return z(),re("div",KC,[t.boardStore.loadingBoards?(z(),ze(o,{key:0,spinnerSize:"20px",withText:!0})):(z(),re("div",QC,[(z(!0),re(tt,null,Er(t.boardStore.boards,u=>(z(),re("div",{class:"board-name-wrapper",key:u.id,onClick:d=>t.requestBoard(u)},Ne(u.name),9,YC))),128)),_e(l,{text:"Add new board",onClick:e[0]||(e[0]=u=>t.requestAddNewBoard=!0)})])),t.requestAddNewBoard?(z(),ze(c,{key:2,onBoardAdded:e[1]||(e[1]=u=>t.requestAddNewBoard=!1),onCancel:e[2]||(e[2]=u=>t.requestAddNewBoard=!1)})):Oe("",!0)])}const Q_=Ue(GC,[["render",XC],["__scopeId","data-v-e84ce0c5"]]),JC=Me({components:{ButtonDefault:zr},props:{relayName:{type:String,required:!0},pinNumber:{type:Number,required:!0},initialMode:{type:String,required:!0},initialRelayId:{type:String,default:null}},emits:["save","cancel"],setup(t,{emit:e}){const n=Fs(),r=le(t.initialMode),s=le(t.initialRelayId),i=le([]);Hr(()=>{i.value=l()});const o=qe(()=>t.initialMode!==r.value||t.initialRelayId!==s.value);function l(){const _=n.relays.filter(({boardId:S})=>!S).map(({id:S,name:C})=>({value:S,label:C})).sort((S,C)=>S.value.localeCompare(C.value)),I={value:null,label:"None"};if(s.value!==null){const S=n.relays.find(C=>C.id===s.value);if(S)return[{value:S.id,label:S.name},I,..._]}return[I,..._]}function c(){r.value="input"}function u(){r.value="output"}function d(_){s.value=_}function p(){o.value&&e("save",r.value,s.value)}function m(){e("cancel")}return{mode:r,changed:o,relayId:s,availableRelays:i,setInput:c,setOutput:u,setRelay:d,onSave:p,onCancel:m}}}),ZC={class:"popup-select-relay"},eP={class:"popup"},tP={class:"options"},nP={class:"option"},rP={class:"option"},sP={class:"options"},iP=["onClick"],oP={class:"buttons"};function aP(t,e,n,r,s,i){const o=ve("button-default");return z(),re("div",ZC,[X("div",eP,[X("h3",null,Ne(t.$props.relayName),1),X("h3",null,"Pin "+Ne(t.$props.pinNumber),1),e[2]||(e[2]=X("label",{for:"name"},"Mode:",-1)),X("div",tP,[X("div",nP,[X("div",{class:Mt(["option-text",{"is-checked":t.mode==="input"}]),onClick:e[0]||(e[0]=(...l)=>t.setInput&&t.setInput(...l))}," IN ",2)]),X("div",rP,[X("div",{class:Mt(["option-text",{"is-checked":t.mode==="output"}]),onClick:e[1]||(e[1]=(...l)=>t.setOutput&&t.setOutput(...l))}," OUT ",2)])]),e[3]||(e[3]=X("label",{for:"name"},"Relay:",-1)),X("div",sP,[(z(!0),re(tt,null,Er(t.availableRelays,l=>(z(),re("div",{class:"option",key:l.value},[X("div",{class:Mt(["option-text",{"is-checked":t.relayId===l.value}]),onClick:c=>t.setRelay(l.value)},Ne(l.label),11,iP)]))),128))]),X("div",oP,[_e(o,{class:Mt({"can-save":t.changed}),text:"Save",onClick:t.onSave},null,8,["class","onClick"]),_e(o,{text:"Cancel",onClick:t.onCancel},null,8,["onClick"])])])])}const lP=Ue(JC,[["render",aP],["__scopeId","data-v-1e768b63"]]),cP=Me({components:{ButtonDefault:zr},props:{text:{type:String,required:!0}},emits:["yes","no"],setup(t,{emit:e}){function n(){e("yes")}function r(){e("no")}return{onYes:n,onNo:r}}}),uP={class:"popup-yes-no"},hP={class:"popup"},dP={for:"name"},fP={class:"buttons"};function pP(t,e,n,r,s,i){const o=ve("button-default");return z(),re("div",uP,[X("div",hP,[X("label",dP,Ne(t.$props.text),1),X("div",fP,[_e(o,{text:"Yes",onClick:t.onYes},null,8,["onClick"]),_e(o,{text:"No",onClick:t.onNo},null,8,["onClick"])])])])}const mP=Ue(cP,[["render",pP],["__scopeId","data-v-8208713d"]]),gP=Me({components:{PopupAddBoard:K_,PopupYesNo:mP,PopupSelectRelay:lP,DropDown:Gu},props:{},emits:[],setup(t,e){const n=Ra(),r=Wu(),s=Fs(),i=le(null),o=le(!1),l=le(!1);Hr(async()=>{i.value=null,await r.loadBoardDetails()});const c=qe(()=>{var S;return d((S=r.selectedBoard)==null?void 0:S.createdAt)}),u=qe(()=>{var S;return d((S=r.selectedBoard)==null?void 0:S.updatedAt)});function d(S){return S?S.toLocaleString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(","," -").replace(/\//g,"."):""}function p(){r.deleteBoard(r.selectedBoard.id),n.push({name:"boards"}),o.value=!1}function m(S){i.value&&(i.value=null),i.value=S}async function _(S,C){if(!i.value)return;if(!S){I();return}const D=i.value,x=[];if(D.mode=S,!D.relayId&&C){const L=s.relays.find(B=>B.id===C);L&&(D.relayId=L.id,D.relayName=L.name,L.boardId=D.id,x.push(L))}else if(D.relayId&&C&&D.relayId!==C){const L=s.relays.find(ie=>ie.id===D.relayId),B=s.relays.find(ie=>ie.id===C);L&&(L.boardId=null,x.push(L)),B&&(D.relayId=B.id,D.relayName=B.name,B.boardId=D.id,x.push(B))}else if(D.relayId&&!C){const L=s.relays.find(B=>B.id===D.relayId);L&&(L.boardId=null,x.push(L)),D.relayId=null,D.relayName=null}await r.updatePinConfigAndRelays(D,x),i.value=null}function I(){i.value=null}return{boardStore:r,createdAt:c,modifiedAt:u,selectedPinConfig:i,requestDeleteBoard:o,requestEditBoard:l,requestEditPinConfig:m,deleteBoard:p,onSaveSelectRelay:_,onCancelSelectRelay:I}}}),_P={class:"board"},yP={class:"board-header"},vP={class:"table-body"},EP={class:"table-cell"},wP={class:"table-cell"},TP=["onClick"],IP={class:"table-row"};function bP(t,e,n,r,s,i){var u,d;const o=ve("popup-select-relay"),l=ve("popup-yes-no"),c=ve("popup-add-board");return z(),re("div",_P,[X("div",yP,[X("h3",{onClick:e[0]||(e[0]=p=>t.requestEditBoard=!0)},Ne((u=t.boardStore.selectedBoard)==null?void 0:u.name),1),X("p",null,[e[5]||(e[5]=X("strong",null,"Model:",-1)),Vn(" "+Ne((d=t.boardStore.selectedBoard)==null?void 0:d.model),1)]),X("p",null,[e[6]||(e[6]=X("strong",null,"Created:",-1)),Vn(" "+Ne(t.createdAt),1)]),X("p",null,[e[7]||(e[7]=X("strong",null,"Modified:",-1)),Vn(" "+Ne(t.modifiedAt),1)])]),e[8]||(e[8]=X("div",{class:"table-header"},[X("div",{class:"table-cell"},"Pin"),X("div",{class:"table-cell"},"Mode"),X("div",{class:"table-cell"},"Relay Name")],-1)),X("div",vP,[(z(!0),re(tt,null,Er(t.boardStore.pinConfigs,p=>(z(),re("div",{class:"table-row",key:p.pinNumber},[X("div",EP,Ne(p.pinNumber),1),X("div",wP,Ne(p.mode==="output"?"OUT":"IN"),1),X("div",{class:"table-cell relay-name",onClick:m=>t.requestEditPinConfig(p)},Ne(p.relayName?p.relayName:"None"),9,TP)]))),128)),X("div",IP,[X("div",{class:"delete-button",onClick:e[1]||(e[1]=p=>t.requestDeleteBoard=!0)}," Delete ")])]),t.selectedPinConfig?(z(),ze(o,{key:0,relayName:t.boardStore.selectedBoard.name,pinNumber:t.selectedPinConfig.pinNumber,initialMode:t.selectedPinConfig.mode,initialRelayId:t.selectedPinConfig.relayId,onCancel:t.onCancelSelectRelay,onSave:t.onSaveSelectRelay},null,8,["relayName","pinNumber","initialMode","initialRelayId","onCancel","onSave"])):Oe("",!0),t.requestDeleteBoard?(z(),ze(l,{key:1,text:`Are you sure you want to delete '${t.boardStore.selectedBoard.name}'?`,onYes:t.deleteBoard,onNo:e[2]||(e[2]=p=>t.requestDeleteBoard=!1)},null,8,["text","onYes"])):Oe("",!0),t.requestEditBoard?(z(),ze(c,{key:2,boardId:t.boardStore.selectedBoard.id,onBoardAdded:e[3]||(e[3]=p=>t.requestEditBoard=!1),onCancel:e[4]||(e[4]=p=>t.requestEditBoard=!1)},null,8,["boardId"])):Oe("",!0)])}const Y_=Ue(gP,[["render",bP]]),AP=Me({name:"App",components:{Board:Y_,Boards:Q_,Home:G_,TopBar:_C,Schedules:W_,Relays:H_,TaskBar:hw,SignIn:ab},setup(){const t=Sm(),e=Za(),n=le(null),r=qe(()=>!!t.user);function s(i){n.value&&(i instanceof HTMLElement?i.scrollIntoView({behavior:"smooth",block:"end"}):n.value.scroll({top:n.value.scrollHeight,behavior:"smooth"}))}return{signedIn:r,pageStore:e,ref_body:n,scrollToBottom:s}}}),RP={class:"app"},SP={key:0,class:"signed-in"},CP={class:"body",ref:"ref_body"};function PP(t,e,n,r,s,i){const o=ve("top-bar"),l=ve("home"),c=ve("boards"),u=ve("board"),d=ve("relays"),p=ve("schedules"),m=ve("task-bar"),_=ve("sign-in");return z(),re("div",RP,[t.signedIn?(z(),re("div",SP,[_e(o),X("div",CP,[t.pageStore.currentPage==="home"?(z(),ze(l,{key:0})):Oe("",!0),t.pageStore.currentPage==="boards"?(z(),ze(c,{key:1})):Oe("",!0),t.pageStore.currentPage==="board"?(z(),ze(u,{key:2})):Oe("",!0),t.pageStore.currentPage==="relays"?(z(),ze(d,{key:3,onRequestScrollToBottom:t.scrollToBottom},null,8,["onRequestScrollToBottom"])):t.pageStore.currentPage==="schedules"?(z(),ze(p,{key:4,onRequestScrollToBottom:t.scrollToBottom},null,8,["onRequestScrollToBottom"])):Oe("",!0)],512),_e(m)])):(z(),ze(_,{key:1}))])}const kP=Ue(AP,[["render",PP],["__scopeId","data-v-b6119b4d"]]),DP=[{path:"/home",name:"home",component:G_},{path:"/boards",name:"boards",component:Q_},{path:"/board/",name:"board",component:Y_},{path:"/relays",name:"relays",component:H_},{path:"/schedules",name:"schedules",component:W_},{path:"/:catchAll(.*)",redirect:"/relays"}],X_=QE({history:bE("/RelayHub"),routes:DP});X_.beforeEach((t,e,n)=>{const r=Za();e.name!==r.navigateBackPage&&(r.navigateBackPage=null),r.setPage(t.name),n()});const Ku=Fv(kP),NP=qv();Ku.use(X_);Ku.use(NP);Ku.mount("#app");
