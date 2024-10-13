(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function el(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},Gr=[],en=()=>{},W_=()=>!1,Wo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tl=t=>t.startsWith("onUpdate:"),ct=Object.assign,nl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},G_=Object.prototype.hasOwnProperty,Se=(t,e)=>G_.call(t,e),le=Array.isArray,Qr=t=>Go(t)==="[object Map]",Dd=t=>Go(t)==="[object Set]",de=t=>typeof t=="function",Qe=t=>typeof t=="string",tr=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",Od=t=>(Ue(t)||de(t))&&de(t.then)&&de(t.catch),Vd=Object.prototype.toString,Go=t=>Vd.call(t),Q_=t=>Go(t).slice(8,-1),Nd=t=>Go(t)==="[object Object]",rl=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=el(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},X_=/-(\w)/g,qt=Qo(t=>t.replace(X_,(e,n)=>n?n.toUpperCase():"")),Y_=/\B([A-Z])/g,nr=Qo(t=>t.replace(Y_,"-$1").toLowerCase()),Xo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),$a=Qo(t=>t?`on${Xo(t)}`:""),Xn=(t,e)=>!Object.is(t,e),uo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},xd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},dc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yh;const Md=()=>yh||(yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ei(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?ty(r):Ei(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Qe(t)||Ue(t))return t}const J_=/;(?![^(]*\))/g,Z_=/:([^]+)/,ey=/\/\*[^]*?\*\//g;function ty(t){const e={};return t.replace(ey,"").split(J_).forEach(n=>{if(n){const r=n.split(Z_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ms(t){let e="";if(Qe(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=ms(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ny="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ry=el(ny);function Ld(t){return!!t||t===""}const Fd=t=>!!(t&&t.__v_isRef===!0),Ti=t=>Qe(t)?t:t==null?"":le(t)||Ue(t)&&(t.toString===Vd||!de(t.toString))?Fd(t)?Ti(t.value):JSON.stringify(t,Ud,2):String(t),Ud=(t,e)=>Fd(e)?Ud(t,e.value):Qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ba(r,i)+" =>"]=s,n),{})}:Dd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ba(n))}:tr(e)?Ba(e):Ue(e)&&!le(e)&&!Nd(e)?String(e):e,Ba=(t,e="")=>{var n;return tr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class $d{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=St;try{return St=this,e()}finally{St=n}}}on(){St=this}off(){St=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Bd(t){return new $d(t)}function jd(){return St}function sy(t,e=!1){St&&St.cleanups.push(t)}let xe;const ja=new WeakSet;class qd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,St&&St.active&&St.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ja.has(this)&&(ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vh(this),Kd(this);const e=xe,n=zt;xe=this,zt=!0;try{return this.fn()}finally{Wd(this),xe=e,zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ol(e);this.deps=this.depsTail=void 0,vh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pc(this)&&this.run()}get dirty(){return pc(this)}}let Hd=0,Wr;function zd(t){t.flags|=8,t.next=Wr,Wr=t}function sl(){Hd++}function il(){if(--Hd>0)return;let t;for(;Wr;){let e=Wr,n;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Wr,Wr=void 0;e;){if(n=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Kd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ol(r),iy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function pc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Gd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===si))return;t.globalVersion=si;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!pc(t)){t.flags&=-3;return}const n=xe,r=zt;xe=t,zt=!0;try{Kd(t);const s=t.fn(t._value);(e.version===0||Xn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{xe=n,zt=r,Wd(t),t.flags&=-3}}function ol(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ol(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function iy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let zt=!0;const Qd=[];function rr(){Qd.push(zt),zt=!1}function sr(){const t=Qd.pop();zt=t===void 0?!0:t}function vh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xe;xe=void 0;try{e()}finally{xe=n}}}let si=0;class oy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class al{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!xe||!zt||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new oy(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,Xd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=r)}return n}trigger(e){this.version++,si++,this.notify(e)}notify(e){sl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{il()}}}function Xd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Xd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ro=new WeakMap,_r=Symbol(""),mc=Symbol(""),ii=Symbol("");function vt(t,e,n){if(zt&&xe){let r=Ro.get(t);r||Ro.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new al),s.target=t,s.map=r,s.key=n),s.track()}}function En(t,e,n,r,s,i){const o=Ro.get(t);if(!o){si++;return}const c=l=>{l&&l.trigger()};if(sl(),e==="clear")o.forEach(c);else{const l=le(t),h=l&&rl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===ii||!tr(m)&&m>=f)&&c(p)})}else switch(n!==void 0&&c(o.get(n)),h&&c(o.get(ii)),e){case"add":l?h&&c(o.get("length")):(c(o.get(_r)),Qr(t)&&c(o.get(mc)));break;case"delete":l||(c(o.get(_r)),Qr(t)&&c(o.get(mc)));break;case"set":Qr(t)&&c(o.get(_r));break}}il()}function ay(t,e){const n=Ro.get(t);return n&&n.get(e)}function Fr(t){const e=Ae(t);return e===t?e:(vt(e,"iterate",ii),jt(t)?e:e.map(gt))}function Yo(t){return vt(t=Ae(t),"iterate",ii),t}const cy={__proto__:null,[Symbol.iterator](){return qa(this,Symbol.iterator,gt)},concat(...t){return Fr(this).concat(...t.map(e=>le(e)?Fr(e):e))},entries(){return qa(this,"entries",t=>(t[1]=gt(t[1]),t))},every(t,e){return hn(this,"every",t,e,void 0,arguments)},filter(t,e){return hn(this,"filter",t,e,n=>n.map(gt),arguments)},find(t,e){return hn(this,"find",t,e,gt,arguments)},findIndex(t,e){return hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return hn(this,"findLast",t,e,gt,arguments)},findLastIndex(t,e){return hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ha(this,"includes",t)},indexOf(...t){return Ha(this,"indexOf",t)},join(t){return Fr(this).join(t)},lastIndexOf(...t){return Ha(this,"lastIndexOf",t)},map(t,e){return hn(this,"map",t,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...t){return Ls(this,"push",t)},reduce(t,...e){return Eh(this,"reduce",t,e)},reduceRight(t,...e){return Eh(this,"reduceRight",t,e)},shift(){return Ls(this,"shift")},some(t,e){return hn(this,"some",t,e,void 0,arguments)},splice(...t){return Ls(this,"splice",t)},toReversed(){return Fr(this).toReversed()},toSorted(t){return Fr(this).toSorted(t)},toSpliced(...t){return Fr(this).toSpliced(...t)},unshift(...t){return Ls(this,"unshift",t)},values(){return qa(this,"values",gt)}};function qa(t,e,n){const r=Yo(t),s=r[e]();return r!==t&&!jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const ly=Array.prototype;function hn(t,e,n,r,s,i){const o=Yo(t),c=o!==t&&!jt(t),l=o[e];if(l!==ly[e]){const p=l.apply(t,i);return c?gt(p):p}let h=n;o!==t&&(c?h=function(p,m){return n.call(this,gt(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function Eh(t,e,n,r){const s=Yo(t);let i=n;return s!==t&&(jt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,gt(c),l,t)}),s[e](i,...r)}function Ha(t,e,n){const r=Ae(t);vt(r,"iterate",ii);const s=r[e](...n);return(s===-1||s===!1)&&hl(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Ls(t,e,n=[]){rr(),sl();const r=Ae(t)[e].apply(t,n);return il(),sr(),r}const uy=el("__proto__,__v_isRef,__isVue"),Yd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(tr));function hy(t){tr(t)||(t=String(t));const e=Ae(this);return vt(e,"has",t),e.hasOwnProperty(t)}class Jd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ay:np:i?tp:ep).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=cy[n]))return l;if(n==="hasOwnProperty")return hy}const c=Reflect.get(e,n,Ke(e)?e:r);return(tr(n)?Yd.has(n):uy(n))||(s||vt(e,"get",n),i)?c:Ke(c)?o&&rl(n)?c:c.value:Ue(c)?s?rp(c):gs(c):c}}class Zd extends Jd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=wr(i);if(!jt(r)&&!wr(r)&&(i=Ae(i),r=Ae(r)),!le(e)&&Ke(i)&&!Ke(r))return l?!1:(i.value=r,!0)}const o=le(e)&&rl(n)?Number(n)<e.length:Se(e,n),c=Reflect.set(e,n,r,Ke(e)?e:s);return e===Ae(s)&&(o?Xn(r,i)&&En(e,"set",n,r):En(e,"add",n,r)),c}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&En(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!tr(n)||!Yd.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",le(e)?"length":_r),Reflect.ownKeys(e)}}class fy extends Jd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const dy=new Zd,py=new fy,my=new Zd(!0);const cl=t=>t,Jo=t=>Reflect.getPrototypeOf(t);function Zi(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ae(t),i=Ae(e);n||(Xn(e,i)&&vt(s,"get",e),vt(s,"get",i));const{has:o}=Jo(s),c=r?cl:n?dl:gt;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function eo(t,e=!1){const n=this.__v_raw,r=Ae(n),s=Ae(t);return e||(Xn(t,s)&&vt(r,"has",t),vt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function to(t,e=!1){return t=t.__v_raw,!e&&vt(Ae(t),"iterate",_r),Reflect.get(t,"size",t)}function Th(t,e=!1){!e&&!jt(t)&&!wr(t)&&(t=Ae(t));const n=Ae(this);return Jo(n).has.call(n,t)||(n.add(t),En(n,"add",t,t)),this}function wh(t,e,n=!1){!n&&!jt(e)&&!wr(e)&&(e=Ae(e));const r=Ae(this),{has:s,get:i}=Jo(r);let o=s.call(r,t);o||(t=Ae(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?Xn(e,c)&&En(r,"set",t,e):En(r,"add",t,e),this}function Ih(t){const e=Ae(this),{has:n,get:r}=Jo(e);let s=n.call(e,t);s||(t=Ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&En(e,"delete",t,void 0),i}function Ah(){const t=Ae(this),e=t.size!==0,n=t.clear();return e&&En(t,"clear",void 0,void 0),n}function no(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Ae(o),l=e?cl:t?dl:gt;return!t&&vt(c,"iterate",_r),o.forEach((h,f)=>r.call(s,l(h),l(f),i))}}function ro(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Qr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?cl:e?dl:gt;return!e&&vt(i,"iterate",l?mc:_r),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function On(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function gy(){const t={get(i){return Zi(this,i)},get size(){return to(this)},has:eo,add:Th,set:wh,delete:Ih,clear:Ah,forEach:no(!1,!1)},e={get(i){return Zi(this,i,!1,!0)},get size(){return to(this)},has:eo,add(i){return Th.call(this,i,!0)},set(i,o){return wh.call(this,i,o,!0)},delete:Ih,clear:Ah,forEach:no(!1,!0)},n={get(i){return Zi(this,i,!0)},get size(){return to(this,!0)},has(i){return eo.call(this,i,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:no(!0,!1)},r={get(i){return Zi(this,i,!0,!0)},get size(){return to(this,!0)},has(i){return eo.call(this,i,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:no(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ro(i,!1,!1),n[i]=ro(i,!0,!1),e[i]=ro(i,!1,!0),r[i]=ro(i,!0,!0)}),[t,n,e,r]}const[_y,yy,vy,Ey]=gy();function ll(t,e){const n=e?t?Ey:vy:t?yy:_y;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const Ty={get:ll(!1,!1)},wy={get:ll(!1,!0)},Iy={get:ll(!0,!1)};const ep=new WeakMap,tp=new WeakMap,np=new WeakMap,Ay=new WeakMap;function Ry(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function by(t){return t.__v_skip||!Object.isExtensible(t)?0:Ry(Q_(t))}function gs(t){return wr(t)?t:ul(t,!1,dy,Ty,ep)}function Sy(t){return ul(t,!1,my,wy,tp)}function rp(t){return ul(t,!0,py,Iy,np)}function ul(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=by(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Hn(t){return wr(t)?Hn(t.__v_raw):!!(t&&t.__v_isReactive)}function wr(t){return!!(t&&t.__v_isReadonly)}function jt(t){return!!(t&&t.__v_isShallow)}function hl(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function fl(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&xd(t,"__v_skip",!0),t}const gt=t=>Ue(t)?gs(t):t,dl=t=>Ue(t)?rp(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function ke(t){return sp(t,!1)}function Py(t){return sp(t,!0)}function sp(t,e){return Ke(t)?t:new Cy(t,e)}class Cy{constructor(e,n){this.dep=new al,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||jt(e)||wr(e);e=r?e:Ae(e),Xn(e,n)&&(this._rawValue=e,this._value=r?e:gt(e),this.dep.trigger())}}function Ws(t){return Ke(t)?t.value:t}const ky={get:(t,e,n)=>e==="__v_raw"?t:Ws(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ip(t){return Hn(t)?t:new Proxy(t,ky)}function Dy(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=Vy(t,n);return e}class Oy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ay(Ae(this._object),this._key)}}function Vy(t,e,n){const r=t[e];return Ke(r)?r:new Oy(t,e,n)}class Ny{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new al(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return zd(this),!0}get value(){const e=this.dep.track();return Gd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xy(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new Ny(r,s,n)}const so={},bo=new WeakMap;let dr;function My(t,e=!1,n=dr){if(n){let r=bo.get(n);r||bo.set(n,r=[]),r.push(t)}}function Ly(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=j=>s?j:jt(j)||s===!1||s===0?dn(j,1):dn(j);let f,p,m,T,R=!1,k=!1;if(Ke(t)?(p=()=>t.value,R=jt(t)):Hn(t)?(p=()=>h(t),R=!0):le(t)?(k=!0,R=t.some(j=>Hn(j)||jt(j)),p=()=>t.map(j=>{if(Ke(j))return j.value;if(Hn(j))return h(j);if(de(j))return l?l(j,2):j()})):de(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){rr();try{m()}finally{sr()}}const j=dr;dr=f;try{return l?l(t,3,[T]):t(T)}finally{dr=j}}:p=en,e&&s){const j=p,re=s===!0?1/0:s;p=()=>dn(j(),re)}const O=jd(),V=()=>{f.stop(),O&&nl(O.effects,f)};if(i&&e){const j=e;e=(...re)=>{j(...re),V()}}let B=k?new Array(t.length).fill(so):so;const G=j=>{if(!(!(f.flags&1)||!f.dirty&&!j))if(e){const re=f.run();if(s||R||(k?re.some((pe,A)=>Xn(pe,B[A])):Xn(re,B))){m&&m();const pe=dr;dr=f;try{const A=[re,B===so?void 0:k&&B[0]===so?[]:B,T];l?l(e,3,A):e(...A),B=re}finally{dr=pe}}}else f.run()};return c&&c(G),f=new qd(p),f.scheduler=o?()=>o(G,!1):G,T=j=>My(j,!1,f),m=f.onStop=()=>{const j=bo.get(f);if(j){if(l)l(j,4);else for(const re of j)re();bo.delete(f)}},e?r?G(!0):B=f.run():o?o(G.bind(null,!0),!0):f.run(),V.pause=f.pause.bind(f),V.resume=f.resume.bind(f),V.stop=V,V}function dn(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ke(t))dn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)dn(t[r],e,n);else if(Dd(t)||Qr(t))t.forEach(r=>{dn(r,e,n)});else if(Nd(t)){for(const r in t)dn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&dn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wi(t,e,n,r){try{return r?t(...r):t()}catch(s){Zo(s,e,n)}}function on(t,e,n,r){if(de(t)){const s=wi(t,e,n,r);return s&&Od(s)&&s.catch(i=>{Zo(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(on(t[i],e,n,r));return s}}function Zo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){rr(),wi(i,null,10,[t,l,h]),sr();return}}Fy(t,n,s,r,o)}function Fy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let oi=!1,gc=!1;const Pt=[];let Jt=0;const Xr=[];let Ln=null,Br=0;const op=Promise.resolve();let pl=null;function ml(t){const e=pl||op;return t?e.then(this?t.bind(this):t):e}function Uy(t){let e=oi?Jt+1:0,n=Pt.length;for(;e<n;){const r=e+n>>>1,s=Pt[r],i=ai(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function gl(t){if(!(t.flags&1)){const e=ai(t),n=Pt[Pt.length-1];!n||!(t.flags&2)&&e>=ai(n)?Pt.push(t):Pt.splice(Uy(e),0,t),t.flags|=1,ap()}}function ap(){!oi&&!gc&&(gc=!0,pl=op.then(lp))}function $y(t){le(t)?Xr.push(...t):Ln&&t.id===-1?Ln.splice(Br+1,0,t):t.flags&1||(Xr.push(t),t.flags|=1),ap()}function Rh(t,e,n=oi?Jt+1:0){for(;n<Pt.length;n++){const r=Pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function cp(t){if(Xr.length){const e=[...new Set(Xr)].sort((n,r)=>ai(n)-ai(r));if(Xr.length=0,Ln){Ln.push(...e);return}for(Ln=e,Br=0;Br<Ln.length;Br++){const n=Ln[Br];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ln=null,Br=0}}const ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function lp(t){gc=!1,oi=!0;try{for(Jt=0;Jt<Pt.length;Jt++){const e=Pt[Jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jt<Pt.length;Jt++){const e=Pt[Jt];e&&(e.flags&=-2)}Jt=0,Pt.length=0,cp(),oi=!1,pl=null,(Pt.length||Xr.length)&&lp()}}let tt=null,up=null;function So(t){const e=tt;return tt=t,up=t&&t.type.__scopeId||null,e}function ci(t,e=tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xh(-1);const i=So(e);let o;try{o=t(...s)}finally{So(i),r._d&&xh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function bh(t,e){if(tt===null)return t;const n=sa(tt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ve]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&dn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function hr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(rr(),on(l,n,8,[t.el,c,t,e]),sr())}}const By=Symbol("_vte"),jy=t=>t.__isTeleport;function _l(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_l(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function wt(t,e){return de(t)?ct({name:t.name},e,{setup:t}):t}function hp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function _c(t,e,n,r,s=!1){if(le(t)){t.forEach((R,k)=>_c(R,e&&(le(e)?e[k]:e),n,r,s));return}if(Yr(r)&&!s)return;const i=r.shapeFlag&4?sa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ve?c.refs={}:c.refs,p=c.setupState,m=Ae(p),T=p===Ve?()=>!1:R=>Se(m,R);if(h!=null&&h!==l&&(Qe(h)?(f[h]=null,T(h)&&(p[h]=null)):Ke(h)&&(h.value=null)),de(l))wi(l,c,12,[o,f]);else{const R=Qe(l),k=Ke(l);if(R||k){const O=()=>{if(t.f){const V=R?T(l)?p[l]:f[l]:l.value;s?le(V)&&nl(V,i):le(V)?V.includes(i)||V.push(i):R?(f[l]=[i],T(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else R?(f[l]=o,T(l)&&(p[l]=o)):k&&(l.value=o,t.k&&(f[t.k]=o))};o?(O.id=-1,Mt(O,n)):O()}}}const Yr=t=>!!t.type.__asyncLoader,fp=t=>t.type.__isKeepAlive;function qy(t,e){dp(t,"a",e)}function Hy(t,e){dp(t,"da",e)}function dp(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ea(e,r,n),n){let s=n.parent;for(;s&&s.parent;)fp(s.parent.vnode)&&zy(r,e,n,s),s=s.parent}}function zy(t,e,n,r){const s=ea(e,t,r,!0);El(()=>{nl(r[e],s)},n)}function ea(t,e,n=it,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{rr();const c=Ii(n),l=on(e,n,t,o);return c(),sr(),l});return r?s.unshift(i):s.push(i),i}}const Rn=t=>(e,n=it)=>{(!ra||t==="sp")&&ea(t,(...r)=>e(...r),n)},yl=Rn("bm"),vl=Rn("m"),Ky=Rn("bu"),Wy=Rn("u"),pp=Rn("bum"),El=Rn("um"),Gy=Rn("sp"),Qy=Rn("rtg"),Xy=Rn("rtc");function Yy(t,e=it){ea("ec",t,e)}const Jy="components";function et(t,e){return ev(Jy,t,!0,e)||t}const Zy=Symbol.for("v-ndc");function ev(t,e,n=!0,r=!1){const s=tt||it;if(s){const i=s.type;{const c=jv(i,!1);if(c&&(c===e||c===qt(e)||c===Xo(qt(e))))return i}const o=Sh(s[t]||i[t],e)||Sh(s.appContext[t],e);return!o&&r?i:o}}function Sh(t,e){return t&&(t[e]||t[qt(e)]||t[Xo(qt(e))])}function tv(t,e,n,r){let s;const i=n,o=le(t);if(o||Qe(t)){const c=o&&Hn(t);let l=!1;c&&(l=!jt(t),t=Yo(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(l?gt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function ho(t,e,n={},r,s){if(tt.ce||tt.parent&&Yr(tt.parent)&&tt.parent.ce)return e!=="default"&&(n.name=e),ye(),Ft(Lt,null,[Fe("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),ye();const o=i&&mp(i(n)),c=Ft(Lt,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function mp(t){return t.some(e=>ui(e)?!(e.type===Yn||e.type===Lt&&!mp(e.children)):!0)?t:null}const yc=t=>t?xp(t)?sa(t):yc(t.parent):null,Gs=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yc(t.parent),$root:t=>yc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Tl(t),$forceUpdate:t=>t.f||(t.f=()=>{gl(t.update)}),$nextTick:t=>t.n||(t.n=ml.bind(t.proxy)),$watch:t=>Iv.bind(t)}),za=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Se(t,e),nv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const T=o[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(za(r,e))return o[e]=1,r[e];if(s!==Ve&&Se(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Se(h,e))return o[e]=3,i[e];if(n!==Ve&&Se(n,e))return o[e]=4,n[e];vc&&(o[e]=0)}}const f=Gs[e];let p,m;if(f)return e==="$attrs"&&vt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ve&&Se(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Se(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return za(s,e)?(s[e]=n,!0):r!==Ve&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ve&&Se(t,o)||za(e,o)||(c=i[0])&&Se(c,o)||Se(r,o)||Se(Gs,o)||Se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ph(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vc=!0;function rv(t){const e=Tl(t),n=t.proxy,r=t.ctx;vc=!1,e.beforeCreate&&Ch(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:T,updated:R,activated:k,deactivated:O,beforeDestroy:V,beforeUnmount:B,destroyed:G,unmounted:j,render:re,renderTracked:pe,renderTriggered:A,errorCaptured:_,serverPrefetch:y,expose:w,inheritAttrs:b,components:S,directives:E,filters:Xe}=e;if(h&&sv(h,r,null),o)for(const oe in o){const ve=o[oe];de(ve)&&(r[oe]=ve.bind(n))}if(s){const oe=s.call(n,n);Ue(oe)&&(t.data=gs(oe))}if(vc=!0,i)for(const oe in i){const ve=i[oe],It=de(ve)?ve.bind(n,n):de(ve.get)?ve.get.bind(n,n):en,Xt=!de(ve)&&de(ve.set)?ve.set.bind(n):en,Nt=Ct({get:It,set:Xt});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:$e=>Nt.value=$e})}if(c)for(const oe in c)gp(c[oe],r,n,oe);if(l){const oe=de(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(ve=>{fo(ve,oe[ve])})}f&&Ch(f,t,"c");function Ce(oe,ve){le(ve)?ve.forEach(It=>oe(It.bind(n))):ve&&oe(ve.bind(n))}if(Ce(yl,p),Ce(vl,m),Ce(Ky,T),Ce(Wy,R),Ce(qy,k),Ce(Hy,O),Ce(Yy,_),Ce(Xy,pe),Ce(Qy,A),Ce(pp,B),Ce(El,j),Ce(Gy,y),le(w))if(w.length){const oe=t.exposed||(t.exposed={});w.forEach(ve=>{Object.defineProperty(oe,ve,{get:()=>n[ve],set:It=>n[ve]=It})})}else t.exposed||(t.exposed={});re&&t.render===en&&(t.render=re),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),E&&(t.directives=E),y&&hp(t)}function sv(t,e,n=en){le(t)&&(t=Ec(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ch(t,e,n){on(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function gp(t,e,n,r){let s=r.includes(".")?kp(n,r):()=>n[r];if(Qe(t)){const i=e[t];de(i)&&vr(s,i)}else if(de(t))vr(s,t.bind(n));else if(Ue(t))if(le(t))t.forEach(i=>gp(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&vr(s,i,t)}}function Tl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Po(l,h,o,!0)),Po(l,e,o)),Ue(e)&&i.set(e,l),l}function Po(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Po(t,i,n,!0),s&&s.forEach(o=>Po(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=iv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const iv={data:kh,props:Dh,emits:Dh,methods:Bs,computed:Bs,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Bs,directives:Bs,watch:av,provide:kh,inject:ov};function kh(t,e){return e?t?function(){return ct(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function ov(t,e){return Bs(Ec(t),Ec(e))}function Ec(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?ct(Object.create(null),t,e):e}function Dh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:ct(Object.create(null),Ph(t),Ph(e??{})):e}function av(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function _p(){return{app:null,config:{isNativeTag:W_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cv=0;function lv(t,e){return function(r,s=null){de(r)||(r=ct({},r)),s!=null&&!Ue(s)&&(s=null);const i=_p(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:cv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&de(f.install)?(o.add(f),f.install(h,...p)):de(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!l){const T=h._ceVNode||Fe(r,s);return T.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(T,f):t(T,f,m),l=!0,h._container=f,f.__vue_app__=h,sa(T.component)}},onUnmount(f){c.push(f)},unmount(){l&&(on(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=yr;yr=h;try{return f()}finally{yr=p}}};return h}}let yr=null;function fo(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=it||tt;if(r||yr){const s=yr?yr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function uv(){return!!(it||tt||yr)}const yp={},vp=()=>Object.create(yp),Ep=t=>Object.getPrototypeOf(t)===yp;function hv(t,e,n,r=!1){const s={},i=vp();t.propsDefaults=Object.create(null),Tp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Sy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function fv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(ta(t.emitsOptions,m))continue;const T=e[m];if(l)if(Se(i,m))T!==i[m]&&(i[m]=T,h=!0);else{const R=qt(m);s[R]=Tc(l,c,R,T,t,!1)}else T!==i[m]&&(i[m]=T,h=!0)}}}else{Tp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Se(e,p)&&((f=nr(p))===p||!Se(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Tc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Se(e,p))&&(delete i[p],h=!0)}h&&En(t.attrs,"set","")}function Tp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ks(l))continue;const h=e[l];let f;s&&Se(s,f=qt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:ta(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ae(n),h=c||Ve;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Tc(s,l,p,h[p],t,!Se(h,p))}}return o}function Tc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Se(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Ii(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===nr(n))&&(r=!0))}return r}const dv=new WeakMap;function wp(t,e,n=!1){const r=n?dv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const f=p=>{l=!0;const[m,T]=wp(p,e,!0);ct(o,m),T&&c.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ue(t)&&r.set(t,Gr),Gr;if(le(i))for(let f=0;f<i.length;f++){const p=qt(i[f]);Oh(p)&&(o[p]=Ve)}else if(i)for(const f in i){const p=qt(f);if(Oh(p)){const m=i[f],T=o[p]=le(m)||de(m)?{type:m}:ct({},m),R=T.type;let k=!1,O=!0;if(le(R))for(let V=0;V<R.length;++V){const B=R[V],G=de(B)&&B.name;if(G==="Boolean"){k=!0;break}else G==="String"&&(O=!1)}else k=de(R)&&R.name==="Boolean";T[0]=k,T[1]=O,(k||Se(T,"default"))&&c.push(p)}}const h=[o,c];return Ue(t)&&r.set(t,h),h}function Oh(t){return t[0]!=="$"&&!Ks(t)}const Ip=t=>t[0]==="_"||t==="$stable",wl=t=>le(t)?t.map(Zt):[Zt(t)],pv=(t,e,n)=>{if(e._n)return e;const r=ci((...s)=>wl(e(...s)),n);return r._c=!1,r},Ap=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ip(s))continue;const i=t[s];if(de(i))e[s]=pv(s,i,r);else if(i!=null){const o=wl(i);e[s]=()=>o}}},Rp=(t,e)=>{const n=wl(e);t.slots.default=()=>n},bp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},mv=(t,e,n)=>{const r=t.slots=vp();if(t.vnode.shapeFlag&32){const s=e._;s?(bp(r,e,n),n&&xd(r,"_",s,!0)):Ap(e,r)}else e&&Rp(t,e)},gv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:bp(s,e,n):(i=!e.$stable,Ap(e,s)),o=e}else e&&(Rp(t,e),o={default:1});if(i)for(const c in s)!Ip(c)&&o[c]==null&&delete s[c]},Mt=kv;function _v(t){return yv(t)}function yv(t,e){const n=Md();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:T=en,insertStaticContent:R}=t,k=(v,I,C,U=null,M=null,F=null,W=void 0,H=null,q=!!I.dynamicChildren)=>{if(v===I)return;v&&!Fs(v,I)&&(U=K(v),$e(v,M,F,!0),v=null),I.patchFlag===-2&&(q=!1,I.dynamicChildren=null);const{type:$,ref:se,shapeFlag:Q}=I;switch($){case na:O(v,I,C,U);break;case Yn:V(v,I,C,U);break;case Ga:v==null&&B(I,C,U,W);break;case Lt:S(v,I,C,U,M,F,W,H,q);break;default:Q&1?re(v,I,C,U,M,F,W,H,q):Q&6?E(v,I,C,U,M,F,W,H,q):(Q&64||Q&128)&&$.process(v,I,C,U,M,F,W,H,q,be)}se!=null&&M&&_c(se,v&&v.ref,F,I||v,!I)},O=(v,I,C,U)=>{if(v==null)r(I.el=c(I.children),C,U);else{const M=I.el=v.el;I.children!==v.children&&h(M,I.children)}},V=(v,I,C,U)=>{v==null?r(I.el=l(I.children||""),C,U):I.el=v.el},B=(v,I,C,U)=>{[v.el,v.anchor]=R(v.children,I,C,U,v.el,v.anchor)},G=({el:v,anchor:I},C,U)=>{let M;for(;v&&v!==I;)M=m(v),r(v,C,U),v=M;r(I,C,U)},j=({el:v,anchor:I})=>{let C;for(;v&&v!==I;)C=m(v),s(v),v=C;s(I)},re=(v,I,C,U,M,F,W,H,q)=>{I.type==="svg"?W="svg":I.type==="math"&&(W="mathml"),v==null?pe(I,C,U,M,F,W,H,q):y(v,I,M,F,W,H,q)},pe=(v,I,C,U,M,F,W,H)=>{let q,$;const{props:se,shapeFlag:Q,transition:ee,dirs:J}=v;if(q=v.el=o(v.type,F,se&&se.is,se),Q&8?f(q,v.children):Q&16&&_(v.children,q,null,U,M,Ka(v,F),W,H),J&&hr(v,null,U,"created"),A(q,v,v.scopeId,W,U),se){for(const Re in se)Re!=="value"&&!Ks(Re)&&i(q,Re,null,se[Re],F,U);"value"in se&&i(q,"value",null,se.value,F),($=se.onVnodeBeforeMount)&&Yt($,U,v)}J&&hr(v,null,U,"beforeMount");const ie=vv(M,ee);ie&&ee.beforeEnter(q),r(q,I,C),(($=se&&se.onVnodeMounted)||ie||J)&&Mt(()=>{$&&Yt($,U,v),ie&&ee.enter(q),J&&hr(v,null,U,"mounted")},M)},A=(v,I,C,U,M)=>{if(C&&T(v,C),U)for(let F=0;F<U.length;F++)T(v,U[F]);if(M){let F=M.subTree;if(I===F||Op(F.type)&&(F.ssContent===I||F.ssFallback===I)){const W=M.vnode;A(v,W,W.scopeId,W.slotScopeIds,M.parent)}}},_=(v,I,C,U,M,F,W,H,q=0)=>{for(let $=q;$<v.length;$++){const se=v[$]=H?Fn(v[$]):Zt(v[$]);k(null,se,I,C,U,M,F,W,H)}},y=(v,I,C,U,M,F,W)=>{const H=I.el=v.el;let{patchFlag:q,dynamicChildren:$,dirs:se}=I;q|=v.patchFlag&16;const Q=v.props||Ve,ee=I.props||Ve;let J;if(C&&fr(C,!1),(J=ee.onVnodeBeforeUpdate)&&Yt(J,C,I,v),se&&hr(I,v,C,"beforeUpdate"),C&&fr(C,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(H,""),$?w(v.dynamicChildren,$,H,C,U,Ka(I,M),F):W||ve(v,I,H,null,C,U,Ka(I,M),F,!1),q>0){if(q&16)b(H,Q,ee,C,M);else if(q&2&&Q.class!==ee.class&&i(H,"class",null,ee.class,M),q&4&&i(H,"style",Q.style,ee.style,M),q&8){const ie=I.dynamicProps;for(let Re=0;Re<ie.length;Re++){const Te=ie[Re],ut=Q[Te],Je=ee[Te];(Je!==ut||Te==="value")&&i(H,Te,ut,Je,M,C)}}q&1&&v.children!==I.children&&f(H,I.children)}else!W&&$==null&&b(H,Q,ee,C,M);((J=ee.onVnodeUpdated)||se)&&Mt(()=>{J&&Yt(J,C,I,v),se&&hr(I,v,C,"updated")},U)},w=(v,I,C,U,M,F,W)=>{for(let H=0;H<I.length;H++){const q=v[H],$=I[H],se=q.el&&(q.type===Lt||!Fs(q,$)||q.shapeFlag&70)?p(q.el):C;k(q,$,se,null,U,M,F,W,!0)}},b=(v,I,C,U,M)=>{if(I!==C){if(I!==Ve)for(const F in I)!Ks(F)&&!(F in C)&&i(v,F,I[F],null,M,U);for(const F in C){if(Ks(F))continue;const W=C[F],H=I[F];W!==H&&F!=="value"&&i(v,F,H,W,M,U)}"value"in C&&i(v,"value",I.value,C.value,M)}},S=(v,I,C,U,M,F,W,H,q)=>{const $=I.el=v?v.el:c(""),se=I.anchor=v?v.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:J}=I;J&&(H=H?H.concat(J):J),v==null?(r($,C,U),r(se,C,U),_(I.children||[],C,se,M,F,W,H,q)):Q>0&&Q&64&&ee&&v.dynamicChildren?(w(v.dynamicChildren,ee,C,M,F,W,H),(I.key!=null||M&&I===M.subTree)&&Sp(v,I,!0)):ve(v,I,C,se,M,F,W,H,q)},E=(v,I,C,U,M,F,W,H,q)=>{I.slotScopeIds=H,v==null?I.shapeFlag&512?M.ctx.activate(I,C,U,W,q):Xe(I,C,U,M,F,W,q):Vt(v,I,q)},Xe=(v,I,C,U,M,F,W)=>{const H=v.component=Lv(v,U,M);if(fp(v)&&(H.ctx.renderer=be),Fv(H,!1,W),H.asyncDep){if(M&&M.registerDep(H,Ce,W),!v.el){const q=H.subTree=Fe(Yn);V(null,q,I,C)}}else Ce(H,v,I,C,M,F,W)},Vt=(v,I,C)=>{const U=I.component=v.component;if(Pv(v,I,C))if(U.asyncDep&&!U.asyncResolved){oe(U,I,C);return}else U.next=I,U.update();else I.el=v.el,U.vnode=I},Ce=(v,I,C,U,M,F,W)=>{const H=()=>{if(v.isMounted){let{next:Q,bu:ee,u:J,parent:ie,vnode:Re}=v;{const ht=Pp(v);if(ht){Q&&(Q.el=Re.el,oe(v,Q,W)),ht.asyncDep.then(()=>{v.isUnmounted||H()});return}}let Te=Q,ut;fr(v,!1),Q?(Q.el=Re.el,oe(v,Q,W)):Q=Re,ee&&uo(ee),(ut=Q.props&&Q.props.onVnodeBeforeUpdate)&&Yt(ut,ie,Q,Re),fr(v,!0);const Je=Wa(v),nt=v.subTree;v.subTree=Je,k(nt,Je,p(nt.el),K(nt),v,M,F),Q.el=Je.el,Te===null&&Cv(v,Je.el),J&&Mt(J,M),(ut=Q.props&&Q.props.onVnodeUpdated)&&Mt(()=>Yt(ut,ie,Q,Re),M)}else{let Q;const{el:ee,props:J}=I,{bm:ie,m:Re,parent:Te,root:ut,type:Je}=v,nt=Yr(I);if(fr(v,!1),ie&&uo(ie),!nt&&(Q=J&&J.onVnodeBeforeMount)&&Yt(Q,Te,I),fr(v,!0),ee&&fe){const ht=()=>{v.subTree=Wa(v),fe(ee,v.subTree,v,M,null)};nt&&Je.__asyncHydrate?Je.__asyncHydrate(ee,v,ht):ht()}else{ut.ce&&ut.ce._injectChildStyle(Je);const ht=v.subTree=Wa(v);k(null,ht,C,U,v,M,F),I.el=ht.el}if(Re&&Mt(Re,M),!nt&&(Q=J&&J.onVnodeMounted)){const ht=I;Mt(()=>Yt(Q,Te,ht),M)}(I.shapeFlag&256||Te&&Yr(Te.vnode)&&Te.vnode.shapeFlag&256)&&v.a&&Mt(v.a,M),v.isMounted=!0,I=C=U=null}};v.scope.on();const q=v.effect=new qd(H);v.scope.off();const $=v.update=q.run.bind(q),se=v.job=q.runIfDirty.bind(q);se.i=v,se.id=v.uid,q.scheduler=()=>gl(se),fr(v,!0),$()},oe=(v,I,C)=>{I.component=v;const U=v.vnode.props;v.vnode=I,v.next=null,fv(v,I.props,U,C),gv(v,I.children,C),rr(),Rh(v),sr()},ve=(v,I,C,U,M,F,W,H,q=!1)=>{const $=v&&v.children,se=v?v.shapeFlag:0,Q=I.children,{patchFlag:ee,shapeFlag:J}=I;if(ee>0){if(ee&128){Xt($,Q,C,U,M,F,W,H,q);return}else if(ee&256){It($,Q,C,U,M,F,W,H,q);return}}J&8?(se&16&&X($,M,F),Q!==$&&f(C,Q)):se&16?J&16?Xt($,Q,C,U,M,F,W,H,q):X($,M,F,!0):(se&8&&f(C,""),J&16&&_(Q,C,U,M,F,W,H,q))},It=(v,I,C,U,M,F,W,H,q)=>{v=v||Gr,I=I||Gr;const $=v.length,se=I.length,Q=Math.min($,se);let ee;for(ee=0;ee<Q;ee++){const J=I[ee]=q?Fn(I[ee]):Zt(I[ee]);k(v[ee],J,C,null,M,F,W,H,q)}$>se?X(v,M,F,!0,!1,Q):_(I,C,U,M,F,W,H,q,Q)},Xt=(v,I,C,U,M,F,W,H,q)=>{let $=0;const se=I.length;let Q=v.length-1,ee=se-1;for(;$<=Q&&$<=ee;){const J=v[$],ie=I[$]=q?Fn(I[$]):Zt(I[$]);if(Fs(J,ie))k(J,ie,C,null,M,F,W,H,q);else break;$++}for(;$<=Q&&$<=ee;){const J=v[Q],ie=I[ee]=q?Fn(I[ee]):Zt(I[ee]);if(Fs(J,ie))k(J,ie,C,null,M,F,W,H,q);else break;Q--,ee--}if($>Q){if($<=ee){const J=ee+1,ie=J<se?I[J].el:U;for(;$<=ee;)k(null,I[$]=q?Fn(I[$]):Zt(I[$]),C,ie,M,F,W,H,q),$++}}else if($>ee)for(;$<=Q;)$e(v[$],M,F,!0),$++;else{const J=$,ie=$,Re=new Map;for($=ie;$<=ee;$++){const At=I[$]=q?Fn(I[$]):Zt(I[$]);At.key!=null&&Re.set(At.key,$)}let Te,ut=0;const Je=ee-ie+1;let nt=!1,ht=0;const Pn=new Array(Je);for($=0;$<Je;$++)Pn[$]=0;for($=J;$<=Q;$++){const At=v[$];if(ut>=Je){$e(At,M,F,!0);continue}let Bt;if(At.key!=null)Bt=Re.get(At.key);else for(Te=ie;Te<=ee;Te++)if(Pn[Te-ie]===0&&Fs(At,I[Te])){Bt=Te;break}Bt===void 0?$e(At,M,F,!0):(Pn[Bt-ie]=$+1,Bt>=ht?ht=Bt:nt=!0,k(At,I[Bt],C,null,M,F,W,H,q),ut++)}const Or=nt?Ev(Pn):Gr;for(Te=Or.length-1,$=Je-1;$>=0;$--){const At=ie+$,Bt=I[At],Vr=At+1<se?I[At+1].el:U;Pn[$]===0?k(null,Bt,C,Vr,M,F,W,H,q):nt&&(Te<0||$!==Or[Te]?Nt(Bt,C,Vr,2):Te--)}}},Nt=(v,I,C,U,M=null)=>{const{el:F,type:W,transition:H,children:q,shapeFlag:$}=v;if($&6){Nt(v.component.subTree,I,C,U);return}if($&128){v.suspense.move(I,C,U);return}if($&64){W.move(v,I,C,be);return}if(W===Lt){r(F,I,C);for(let Q=0;Q<q.length;Q++)Nt(q[Q],I,C,U);r(v.anchor,I,C);return}if(W===Ga){G(v,I,C);return}if(U!==2&&$&1&&H)if(U===0)H.beforeEnter(F),r(F,I,C),Mt(()=>H.enter(F),M);else{const{leave:Q,delayLeave:ee,afterLeave:J}=H,ie=()=>r(F,I,C),Re=()=>{Q(F,()=>{ie(),J&&J()})};ee?ee(F,ie,Re):Re()}else r(F,I,C)},$e=(v,I,C,U=!1,M=!1)=>{const{type:F,props:W,ref:H,children:q,dynamicChildren:$,shapeFlag:se,patchFlag:Q,dirs:ee,cacheIndex:J}=v;if(Q===-2&&(M=!1),H!=null&&_c(H,null,C,v,!0),J!=null&&(I.renderCache[J]=void 0),se&256){I.ctx.deactivate(v);return}const ie=se&1&&ee,Re=!Yr(v);let Te;if(Re&&(Te=W&&W.onVnodeBeforeUnmount)&&Yt(Te,I,v),se&6)N(v.component,C,U);else{if(se&128){v.suspense.unmount(C,U);return}ie&&hr(v,null,I,"beforeUnmount"),se&64?v.type.remove(v,I,C,be,U):$&&!$.hasOnce&&(F!==Lt||Q>0&&Q&64)?X($,I,C,!1,!0):(F===Lt&&Q&384||!M&&se&16)&&X(q,I,C),U&&Be(v)}(Re&&(Te=W&&W.onVnodeUnmounted)||ie)&&Mt(()=>{Te&&Yt(Te,I,v),ie&&hr(v,null,I,"unmounted")},C)},Be=v=>{const{type:I,el:C,anchor:U,transition:M}=v;if(I===Lt){Fi(C,U);return}if(I===Ga){j(v);return}const F=()=>{s(C),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(v.shapeFlag&1&&M&&!M.persisted){const{leave:W,delayLeave:H}=M,q=()=>W(C,F);H?H(v.el,F,q):q()}else F()},Fi=(v,I)=>{let C;for(;v!==I;)C=m(v),s(v),v=C;s(I)},N=(v,I,C)=>{const{bum:U,scope:M,job:F,subTree:W,um:H,m:q,a:$}=v;Vh(q),Vh($),U&&uo(U),M.stop(),F&&(F.flags|=8,$e(W,v,I,C)),H&&Mt(H,I),Mt(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},X=(v,I,C,U=!1,M=!1,F=0)=>{for(let W=F;W<v.length;W++)$e(v[W],I,C,U,M)},K=v=>{if(v.shapeFlag&6)return K(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=m(v.anchor||v.el),C=I&&I[By];return C?m(C):I};let te=!1;const Pe=(v,I,C)=>{v==null?I._vnode&&$e(I._vnode,null,null,!0):k(I._vnode||null,v,I,null,null,null,C),I._vnode=v,te||(te=!0,Rh(),cp(),te=!1)},be={p:k,um:$e,m:Nt,r:Be,mt:Xe,mc:_,pc:ve,pbc:w,n:K,o:t};let me,fe;return{render:Pe,hydrate:me,createApp:lv(Pe,me)}}function Ka({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function fr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sp(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Fn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Sp(o,c)),c.type===na&&(c.el=o.el)}}function Ev(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Pp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pp(e)}function Vh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Tv=Symbol.for("v-scx"),wv=()=>Kt(Tv);function vr(t,e,n){return Cp(t,e,n)}function Cp(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,c=ct({},n);let l;if(ra)if(i==="sync"){const m=wv();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!e||r)c.once=!0;else{const m=()=>{};return m.stop=en,m.resume=en,m.pause=en,m}const h=it;c.call=(m,T,R)=>on(m,h,T,R);let f=!1;i==="post"?c.scheduler=m=>{Mt(m,h&&h.suspense)}:i!=="sync"&&(f=!0,c.scheduler=(m,T)=>{T?m():gl(m)}),c.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=Ly(t,e,c);return l&&l.push(p),p}function Iv(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?kp(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Ii(this),c=Cp(s,i.bind(r),n);return o(),c}function kp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Av=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qt(e)}Modifiers`]||t[`${nr(e)}Modifiers`];function Rv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&Av(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Qe(f)?f.trim():f)),o.number&&(s=n.map(dc)));let c,l=r[c=$a(e)]||r[c=$a(qt(e))];!l&&i&&(l=r[c=$a(nr(e))]),l&&on(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,on(h,t,6,s)}}function Dp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=h=>{const f=Dp(h,e,!0);f&&(c=!0,ct(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ue(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):ct(o,i),Ue(t)&&r.set(t,o),o)}function ta(t,e){return!t||!Wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,nr(e))||Se(t,e))}function Wa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:m,setupState:T,ctx:R,inheritAttrs:k}=t,O=So(t);let V,B;try{if(n.shapeFlag&4){const j=s||r,re=j;V=Zt(h.call(re,j,f,p,T,m,R)),B=c}else{const j=e;V=Zt(j.length>1?j(p,{attrs:c,slots:o,emit:l}):j(p,null)),B=e.props?c:bv(c)}}catch(j){Qs.length=0,Zo(j,t,1),V=Fe(Yn)}let G=V;if(B&&k!==!1){const j=Object.keys(B),{shapeFlag:re}=G;j.length&&re&7&&(i&&j.some(tl)&&(B=Sv(B,i)),G=ns(G,B,!1,!0))}return n.dirs&&(G=ns(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&_l(G,n.transition),V=G,So(O),V}const bv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wo(n))&&((e||(e={}))[n]=t[n]);return e},Sv=(t,e)=>{const n={};for(const r in t)(!tl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Pv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Nh(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!ta(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Nh(r,o,h):!0:!!o;return!1}function Nh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ta(n,i))return!0}return!1}function Cv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Op=t=>t.__isSuspense;function kv(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):$y(t)}const Lt=Symbol.for("v-fgt"),na=Symbol.for("v-txt"),Yn=Symbol.for("v-cmt"),Ga=Symbol.for("v-stc"),Qs=[];let Ut=null;function ye(t=!1){Qs.push(Ut=t?null:[])}function Dv(){Qs.pop(),Ut=Qs[Qs.length-1]||null}let li=1;function xh(t){li+=t,t<0&&Ut&&(Ut.hasOnce=!0)}function Vp(t){return t.dynamicChildren=li>0?Ut||Gr:null,Dv(),li>0&&Ut&&Ut.push(t),t}function He(t,e,n,r,s,i){return Vp(yt(t,e,n,r,s,i,!0))}function Ft(t,e,n,r,s){return Vp(Fe(t,e,n,r,s,!0))}function ui(t){return t?t.__v_isVNode===!0:!1}function Fs(t,e){return t.type===e.type&&t.key===e.key}const Np=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||Ke(t)||de(t)?{i:tt,r:t,k:e,f:!!n}:t:null);function yt(t,e=null,n=null,r=0,s=null,i=t===Lt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Np(e),ref:e&&po(e),scopeId:up,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tt};return c?(Il(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Qe(n)?8:16),li>0&&!o&&Ut&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ut.push(l),l}const Fe=Ov;function Ov(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Zy)&&(t=Yn),ui(t)){const c=ns(t,e,!0);return n&&Il(c,n),li>0&&!i&&Ut&&(c.shapeFlag&6?Ut[Ut.indexOf(t)]=c:Ut.push(c)),c.patchFlag=-2,c}if(qv(t)&&(t=t.__vccOpts),e){e=Vv(e);let{class:c,style:l}=e;c&&!Qe(c)&&(e.class=ms(c)),Ue(l)&&(hl(l)&&!le(l)&&(l=ct({},l)),e.style=Ei(l))}const o=Qe(t)?1:Op(t)?128:jy(t)?64:Ue(t)?4:de(t)?2:0;return yt(t,e,n,r,s,o,i,!0)}function Vv(t){return t?hl(t)||Ep(t)?ct({},t):t:null}function ns(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Nv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Np(h),ref:e&&e.ref?n&&i?le(i)?i.concat(po(e)):[i,po(e)]:po(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ns(t.ssContent),ssFallback:t.ssFallback&&ns(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&_l(f,l.clone(f)),f}function rs(t=" ",e=0){return Fe(na,null,t,e)}function mn(t="",e=!1){return e?(ye(),Ft(Yn,null,t)):Fe(Yn,null,t)}function Zt(t){return t==null||typeof t=="boolean"?Fe(Yn):le(t)?Fe(Lt,null,t.slice()):ui(t)?Fn(t):Fe(na,null,String(t))}function Fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ns(t)}function Il(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Il(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ep(e)?e._ctx=tt:s===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),r&64?(n=16,e=[rs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Nv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ms([e.class,r.class]));else if(s==="style")e.style=Ei([e.style,r.style]);else if(Wo(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Yt(t,e,n,r=null){on(t,e,7,[n,r])}const xv=_p();let Mv=0;function Lv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||xv,i={uid:Mv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $d(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wp(r,s),emitsOptions:Dp(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Rv.bind(null,i),t.ce&&t.ce(i),i}let it=null,Co,wc;{const t=Md(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Co=e("__VUE_INSTANCE_SETTERS__",n=>it=n),wc=e("__VUE_SSR_SETTERS__",n=>ra=n)}const Ii=t=>{const e=it;return Co(t),t.scope.on(),()=>{t.scope.off(),Co(e)}},Mh=()=>{it&&it.scope.off(),Co(null)};function xp(t){return t.vnode.shapeFlag&4}let ra=!1;function Fv(t,e=!1,n=!1){e&&wc(e);const{props:r,children:s}=t.vnode,i=xp(t);hv(t,r,i,e),mv(t,s,n);const o=i?Uv(t,e):void 0;return e&&wc(!1),o}function Uv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,nv);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Bv(t):null,i=Ii(t);rr();const o=wi(r,t,0,[t.props,s]);if(sr(),i(),Od(o)){if(Yr(t)||hp(t),o.then(Mh,Mh),e)return o.then(c=>{Lh(t,c,e)}).catch(c=>{Zo(c,t,0)});t.asyncDep=o}else Lh(t,o,e)}else Mp(t,e)}function Lh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=ip(e)),Mp(t,n)}let Fh;function Mp(t,e,n){const r=t.type;if(!t.render){if(!e&&Fh&&!r.render){const s=r.template||Tl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=ct(ct({isCustomElement:i,delimiters:c},o),l);r.render=Fh(s,h)}}t.render=r.render||en}{const s=Ii(t);rr();try{rv(t)}finally{sr(),s()}}}const $v={get(t,e){return vt(t,"get",""),t[e]}};function Bv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$v),slots:t.slots,emit:t.emit,expose:e}}function sa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ip(fl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}})):t.proxy}function jv(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function qv(t){return de(t)&&"__vccOpts"in t}const Ct=(t,e)=>xy(t,e,ra);function Lp(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!le(e)?ui(e)?Fe(t,null,[e]):Fe(t,e):Fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ui(n)&&(n=[n]),Fe(t,e,n))}const Hv="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ic;const Uh=typeof window<"u"&&window.trustedTypes;if(Uh)try{Ic=Uh.createPolicy("vue",{createHTML:t=>t})}catch{}const Fp=Ic?t=>Ic.createHTML(t):t=>t,zv="http://www.w3.org/2000/svg",Kv="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,$h=fn&&fn.createElement("template"),Wv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?fn.createElementNS(zv,t):e==="mathml"?fn.createElementNS(Kv,t):n?fn.createElement(t,{is:n}):fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$h.innerHTML=Fp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=$h.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Gv=Symbol("_vtc");function Qv(t,e,n){const r=t[Gv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bh=Symbol("_vod"),Xv=Symbol("_vsh"),Yv=Symbol(""),Jv=/(^|;)\s*display\s*:/;function Zv(t,e,n){const r=t.style,s=Qe(n);let i=!1;if(n&&!s){if(e)if(Qe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&mo(r,c,"")}else for(const o in e)n[o]==null&&mo(r,o,"");for(const o in n)o==="display"&&(i=!0),mo(r,o,n[o])}else if(s){if(e!==n){const o=r[Yv];o&&(n+=";"+o),r.cssText=n,i=Jv.test(n)}}else e&&t.removeAttribute("style");Bh in t&&(t[Bh]=i?r.display:"",t[Xv]&&(r.display="none"))}const jh=/\s*!important$/;function mo(t,e,n){if(le(n))n.forEach(r=>mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=eE(t,e);jh.test(n)?t.setProperty(nr(r),n.replace(jh,""),"important"):t[r]=n}}const qh=["Webkit","Moz","ms"],Qa={};function eE(t,e){const n=Qa[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return Qa[e]=r;r=Xo(r);for(let s=0;s<qh.length;s++){const i=qh[s]+r;if(i in t)return Qa[e]=i}return e}const Hh="http://www.w3.org/1999/xlink";function zh(t,e,n,r,s,i=ry(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hh,e.slice(6,e.length)):t.setAttributeNS(Hh,e,n):n==null||i&&!Ld(n)?t.removeAttribute(e):t.setAttribute(e,i?"":tr(n)?String(n):n)}function Kh(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Fp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Ld(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function jr(t,e,n,r){t.addEventListener(e,n,r)}function tE(t,e,n,r){t.removeEventListener(e,n,r)}const Wh=Symbol("_vei");function nE(t,e,n,r,s=null){const i=t[Wh]||(t[Wh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=rE(e);if(r){const h=i[e]=oE(r,s);jr(t,c,h,l)}else o&&(tE(t,c,o,l),i[e]=void 0)}}const Gh=/(?:Once|Passive|Capture)$/;function rE(t){let e;if(Gh.test(t)){e={};let r;for(;r=t.match(Gh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nr(t.slice(2)),e]}let Xa=0;const sE=Promise.resolve(),iE=()=>Xa||(sE.then(()=>Xa=0),Xa=Date.now());function oE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;on(aE(r,n.value),e,5,[r])};return n.value=t,n.attached=iE(),n}function aE(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Qv(t,r,o):e==="style"?Zv(t,n,r):Wo(e)?tl(e)||nE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lE(t,e,r,o))?(Kh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Qe(r))?Kh(t,qt(e),r):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zh(t,e,r,o))};function lE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qh(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qh(e)&&Qe(n)?!1:e in t}const Xh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>uo(e,n):e};function uE(t){t.target.composing=!0}function Yh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ya=Symbol("_assign"),Jh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ya]=Xh(s);const i=r||s.props&&s.props.type==="number";jr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=dc(c)),t[Ya](c)}),n&&jr(t,"change",()=>{t.value=t.value.trim()}),e||(jr(t,"compositionstart",uE),jr(t,"compositionend",Yh),jr(t,"change",Yh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ya]=Xh(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?dc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},hE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},fE=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=nr(s.key);if(e.some(o=>o===i||hE[o]===i))return t(s)})},dE=ct({patchProp:cE},Wv);let Zh;function pE(){return Zh||(Zh=_v(dE))}const mE=(...t)=>{const e=pE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_E(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,gE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _E(t){return Qe(t)?document.querySelector(t):t}var yE=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Up;const ia=t=>Up=t,$p=Symbol();function Ac(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Xs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Xs||(Xs={}));function vE(){const t=Bd(!0),e=t.run(()=>ke({}));let n=[],r=[];const s=fl({install(i){ia(s),s._a=i,i.provide($p,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!yE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Bp=()=>{};function ef(t,e,n,r=Bp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&jd()&&sy(s),s}function Ur(t,...e){t.slice().forEach(n=>{n(...e)})}const EE=t=>t(),tf=Symbol(),Ja=Symbol();function Rc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ac(s)&&Ac(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!Hn(r)?t[n]=Rc(s,r):t[n]=r}return t}const TE=Symbol();function wE(t){return!Ac(t)||!t.hasOwnProperty(TE)}const{assign:Mn}=Object;function IE(t){return!!(Ke(t)&&t.effect)}function AE(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const f=Dy(n.state.value[t]);return Mn(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=fl(Ct(()=>{ia(n);const T=n._s.get(t);return o[m].call(T,T)})),p),{}))}return l=jp(t,h,e,n,r,!0),l}function jp(t,e,n={},r,s,i){let o;const c=Mn({actions:{}},n),l={deep:!0};let h,f,p=[],m=[],T;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),ke({});let k;function O(_){let y;h=f=!1,typeof _=="function"?(_(r.state.value[t]),y={type:Xs.patchFunction,storeId:t,events:T}):(Rc(r.state.value[t],_),y={type:Xs.patchObject,payload:_,storeId:t,events:T});const w=k=Symbol();ml().then(()=>{k===w&&(h=!0)}),f=!0,Ur(p,y,r.state.value[t])}const V=i?function(){const{state:y}=n,w=y?y():{};this.$patch(b=>{Mn(b,w)})}:Bp;function B(){o.stop(),p=[],m=[],r._s.delete(t)}const G=(_,y="")=>{if(tf in _)return _[Ja]=y,_;const w=function(){ia(r);const b=Array.from(arguments),S=[],E=[];function Xe(oe){S.push(oe)}function Vt(oe){E.push(oe)}Ur(m,{args:b,name:w[Ja],store:re,after:Xe,onError:Vt});let Ce;try{Ce=_.apply(this&&this.$id===t?this:re,b)}catch(oe){throw Ur(E,oe),oe}return Ce instanceof Promise?Ce.then(oe=>(Ur(S,oe),oe)).catch(oe=>(Ur(E,oe),Promise.reject(oe))):(Ur(S,Ce),Ce)};return w[tf]=!0,w[Ja]=y,w},j={_p:r,$id:t,$onAction:ef.bind(null,m),$patch:O,$reset:V,$subscribe(_,y={}){const w=ef(p,_,y.detached,()=>b()),b=o.run(()=>vr(()=>r.state.value[t],S=>{(y.flush==="sync"?f:h)&&_({storeId:t,type:Xs.direct,events:T},S)},Mn({},l,y)));return w},$dispose:B},re=gs(j);r._s.set(t,re);const A=(r._a&&r._a.runWithContext||EE)(()=>r._e.run(()=>(o=Bd()).run(()=>e({action:G}))));for(const _ in A){const y=A[_];if(Ke(y)&&!IE(y)||Hn(y))i||(R&&wE(y)&&(Ke(y)?y.value=R[_]:Rc(y,R[_])),r.state.value[t][_]=y);else if(typeof y=="function"){const w=G(y,_);A[_]=w,c.actions[_]=y}}return Mn(re,A),Mn(Ae(re),A),Object.defineProperty(re,"$state",{get:()=>r.state.value[t],set:_=>{O(y=>{Mn(y,_)})}}),r._p.forEach(_=>{Mn(re,o.run(()=>_({store:re,app:r._a,pinia:r,options:c})))}),R&&i&&n.hydrate&&n.hydrate(re.$state,R),h=!0,f=!0,re}function Al(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,l){const h=uv();return c=c||(h?Kt($p,null):null),c&&ia(c),c=Up,c._s.has(r)||(i?jp(r,e,s,c):AE(r,s,c)),c._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const qp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",_s=t=>qp?Symbol(t):"_vr_"+t,RE=_s("rvlm"),nf=_s("rvd"),oa=_s("r"),Hp=_s("rl"),bc=_s("rvl"),qr=typeof window<"u";function bE(t){return t.__esModule||qp&&t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Za(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Ys=()=>{},SE=/\/$/,PE=t=>t.replace(SE,"");function ec(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("?"),l=e.indexOf("#",c>-1?c:0);return c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=OE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function CE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ss(e.matched[r],n.matched[s])&&zp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!DE(t[n],e[n]))return!1;return!0}function DE(t,e){return Array.isArray(t)?sf(t,e):Array.isArray(e)?sf(e,t):t===e}function sf(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function OE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var hi;(function(t){t.pop="pop",t.push="push"})(hi||(hi={}));var Js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Js||(Js={}));function VE(t){if(!t)if(qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),PE(t)}const NE=/^[^#]+#/;function xE(t,e){return t.replace(NE,"#")+e}function ME(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const aa=()=>({left:window.pageXOffset,top:window.pageYOffset});function LE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ME(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function of(t,e){return(history.state?history.state.position-e:-1)+t}const Sc=new Map;function FE(t,e){Sc.set(t,e)}function UE(t){const e=Sc.get(t);return Sc.delete(t),e}let $E=()=>location.protocol+"//"+location.host;function Kp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),rf(l,"")}return rf(n,t)+r+s}function BE(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const T=Kp(t,location),R=n.value,k=e.value;let O=0;if(m){if(n.value=T,e.value=m,o&&o===R){o=null;return}O=k?m.position-k.position:0}else r(T);s.forEach(V=>{V(n.value,R,{delta:O,type:hi.pop,direction:O?O>0?Js.forward:Js.back:Js.unknown})})};function l(){o=n.value}function h(m){s.push(m);const T=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(T),T}function f(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:aa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:h,destroy:p}}function af(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?aa():null}}function jE(t){const{history:e,location:n}=window,r={value:Kp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:$E()+t+l;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(T){console.error(T),n[f?"replace":"assign"](m)}}function o(l,h){const f=Oe({},e.state,af(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=Oe({},s.value,e.state,{forward:l,scroll:aa()});i(f.current,f,!0);const p=Oe({},af(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function qE(t){t=VE(t);const e=jE(t),n=BE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:xE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function HE(t){return typeof t=="string"||t&&typeof t=="object"}function Wp(t){return typeof t=="string"||typeof t=="symbol"}const Vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gp=_s("nf");var cf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cf||(cf={}));function is(t,e){return Oe(new Error,{type:t,[Gp]:!0},e)}function Nn(t,e){return t instanceof Error&&Gp in t&&(e==null||!!(t.type&e))}const lf="[^/]+?",zE={sensitive:!1,strict:!1,start:!0,end:!0},KE=/[.+*?^${}()[\]/\\]/g;function WE(t,e){const n=Oe({},zE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let T=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(KE,"\\$&"),T+=40;else if(m.type===1){const{value:R,repeatable:k,optional:O,regexp:V}=m;i.push({name:R,repeatable:k,optional:O});const B=V||lf;if(B!==lf){T+=10;try{new RegExp(`(${B})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${R}" (${B}): `+j.message)}}let G=k?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(G=O&&h.length<2?`(?:/${G})`:"/"+G),O&&(G+="?"),s+=G,T+=20,O&&(T+=-8),k&&(T+=-20),B===".*"&&(T+=-50)}f.push(T)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const T=f[m]||"",R=i[m-1];p[R.name]=T&&R.repeatable?T.split("/"):T}return p}function l(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const T of m)if(T.type===0)f+=T.value;else if(T.type===1){const{value:R,repeatable:k,optional:O}=T,V=R in h?h[R]:"";if(Array.isArray(V)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const B=Array.isArray(V)?V.join("/"):V;if(!B)if(O)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=B}}return f}return{re:o,score:r,keys:i,parse:c,stringify:l}}function GE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function QE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=GE(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const XE={type:0,value:""},YE=/[a-zA-Z0-9_]/;function JE(t){if(!t)return[[]];if(t==="/")return[[XE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${h}": ${T}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:YE.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function ZE(t,e,n){const r=WE(JE(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function eT(t,e){const n=[],r=new Map;e=hf({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,m){const T=!m,R=nT(f);R.aliasOf=m&&m.record;const k=hf(e,f),O=[R];if("alias"in f){const G=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of G)O.push(Oe({},R,{components:m?m.record.components:R.components,path:j,aliasOf:m?m.record:R}))}let V,B;for(const G of O){const{path:j}=G;if(p&&j[0]!=="/"){const re=p.record.path,pe=re[re.length-1]==="/"?"":"/";G.path=p.record.path+(j&&pe+j)}if(V=ZE(G,p,k),m?m.alias.push(V):(B=B||V,B!==V&&B.alias.push(V),T&&f.name&&!uf(V)&&o(f.name)),"children"in R){const re=R.children;for(let pe=0;pe<re.length;pe++)i(re[pe],V,m&&m.children[pe])}m=m||V,l(V)}return B?()=>{o(B)}:Ys}function o(f){if(Wp(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function l(f){let p=0;for(;p<n.length&&QE(f,n[p])>=0&&(f.record.path!==n[p].record.path||!Qp(f,n[p]));)p++;n.splice(p,0,f),f.record.name&&!uf(f)&&r.set(f.record.name,f)}function h(f,p){let m,T={},R,k;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw is(1,{location:f});k=m.record.name,T=Oe(tT(p.params,m.keys.filter(B=>!B.optional).map(B=>B.name)),f.params),R=m.stringify(T)}else if("path"in f)R=f.path,m=n.find(B=>B.re.test(R)),m&&(T=m.parse(R),k=m.record.name);else{if(m=p.name?r.get(p.name):n.find(B=>B.re.test(p.path)),!m)throw is(1,{location:f,currentLocation:p});k=m.record.name,T=Oe({},p.params,f.params),R=m.stringify(T)}const O=[];let V=m;for(;V;)O.unshift(V.record),V=V.parent;return{name:k,path:R,params:T,matched:O,meta:sT(O)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function tT(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function nT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:rT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function rT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function uf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sT(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function hf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Qp(t,e){return e.children.some(n=>n===t||Qp(t,n))}const Xp=/#/g,iT=/&/g,oT=/\//g,aT=/=/g,cT=/\?/g,Yp=/\+/g,lT=/%5B/g,uT=/%5D/g,Jp=/%5E/g,hT=/%60/g,Zp=/%7B/g,fT=/%7C/g,em=/%7D/g,dT=/%20/g;function Rl(t){return encodeURI(""+t).replace(fT,"|").replace(lT,"[").replace(uT,"]")}function pT(t){return Rl(t).replace(Zp,"{").replace(em,"}").replace(Jp,"^")}function Pc(t){return Rl(t).replace(Yp,"%2B").replace(dT,"+").replace(Xp,"%23").replace(iT,"%26").replace(hT,"`").replace(Zp,"{").replace(em,"}").replace(Jp,"^")}function mT(t){return Pc(t).replace(aT,"%3D")}function gT(t){return Rl(t).replace(Xp,"%23").replace(cT,"%3F")}function _T(t){return t==null?"":gT(t).replace(oT,"%2F")}function ko(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function yT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Yp," "),o=i.indexOf("="),c=ko(o<0?i:i.slice(0,o)),l=o<0?null:ko(i.slice(o+1));if(c in e){let h=e[c];Array.isArray(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function ff(t){let e="";for(let n in t){const r=t[n];if(n=mT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Pc(i)):[r&&Pc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function vT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Us(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Un(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const l=p=>{p===!1?c(is(4,{from:n,to:e})):p instanceof Error?c(p):HE(p)?c(is(2,{from:e,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),o())},h=t.call(r&&r.instances[s],e,n,l);let f=Promise.resolve(h);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function tc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ET(c)){const h=(c.__vccOpts||c)[e];h&&s.push(Un(h,n,r,i,o))}else{let l=c();s.push(()=>l.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=bE(h)?h.default:h;i.components[o]=f;const m=(f.__vccOpts||f)[e];return m&&Un(m,n,r,i,o)()}))}}return s}function ET(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function df(t){const e=Kt(oa),n=Kt(Hp),r=Ct(()=>e.resolve(Ws(t.to))),s=Ct(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(ss.bind(null,f));if(m>-1)return m;const T=pf(l[h-2]);return h>1&&pf(f)===T&&p[p.length-1].path!==T?p.findIndex(ss.bind(null,l[h-2])):m}),i=Ct(()=>s.value>-1&&AT(n.params,r.value.params)),o=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&zp(n.params,r.value.params));function c(l={}){return IT(l)?e[Ws(t.replace)?"replace":"push"](Ws(t.to)).catch(Ys):Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const TT=wt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:df,setup(t,{slots:e}){const n=gs(df(t)),{options:r}=Kt(oa),s=Ct(()=>({[mf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Lp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),wT=TT;function IT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function AT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function pf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mf=(t,e,n)=>t??e??n,RT=wt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Kt(bc),s=Ct(()=>t.route||r.value),i=Kt(nf,0),o=Ct(()=>s.value.matched[i]);fo(nf,i+1),fo(RE,o),fo(bc,s);const c=ke();return vr(()=>[c.value,o.value,t.name],([l,h,f],[p,m,T])=>{h&&(h.instances[f]=l,m&&m!==h&&l&&l===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),l&&h&&(!m||!ss(h,m)||!p)&&(h.enterCallbacks[f]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,h=o.value,f=h&&h.components[t.name],p=t.name;if(!f)return gf(n.default,{Component:f,route:l});const m=h.props[t.name],T=m?m===!0?l.params:typeof m=="function"?m(l):m:null,k=Lp(f,Oe({},T,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[p]=null)},ref:c}));return gf(n.default,{Component:k,route:l})||k}}});function gf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bT=RT;function ST(t){const e=eT(t.routes,t),n=t.parseQuery||yT,r=t.stringifyQuery||ff,s=t.history,i=Us(),o=Us(),c=Us(),l=Py(Vn);let h=Vn;qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Za.bind(null,N=>""+N),p=Za.bind(null,_T),m=Za.bind(null,ko);function T(N,X){let K,te;return Wp(N)?(K=e.getRecordMatcher(N),te=X):te=N,e.addRoute(te,K)}function R(N){const X=e.getRecordMatcher(N);X&&e.removeRoute(X)}function k(){return e.getRoutes().map(N=>N.record)}function O(N){return!!e.getRecordMatcher(N)}function V(N,X){if(X=Oe({},X||l.value),typeof N=="string"){const fe=ec(n,N,X.path),v=e.resolve({path:fe.path},X),I=s.createHref(fe.fullPath);return Oe(fe,v,{params:m(v.params),hash:ko(fe.hash),redirectedFrom:void 0,href:I})}let K;if("path"in N)K=Oe({},N,{path:ec(n,N.path,X.path).path});else{const fe=Oe({},N.params);for(const v in fe)fe[v]==null&&delete fe[v];K=Oe({},N,{params:p(N.params)}),X.params=p(X.params)}const te=e.resolve(K,X),Pe=N.hash||"";te.params=f(m(te.params));const be=CE(r,Oe({},N,{hash:pT(Pe),path:te.path})),me=s.createHref(be);return Oe({fullPath:be,hash:Pe,query:r===ff?vT(N.query):N.query||{}},te,{redirectedFrom:void 0,href:me})}function B(N){return typeof N=="string"?ec(n,N,l.value.path):Oe({},N)}function G(N,X){if(h!==N)return is(8,{from:X,to:N})}function j(N){return A(N)}function re(N){return j(Oe(B(N),{replace:!0}))}function pe(N){const X=N.matched[N.matched.length-1];if(X&&X.redirect){const{redirect:K}=X;let te=typeof K=="function"?K(N):K;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=B(te):{path:te},te.params={}),Oe({query:N.query,hash:N.hash,params:N.params},te)}}function A(N,X){const K=h=V(N),te=l.value,Pe=N.state,be=N.force,me=N.replace===!0,fe=pe(K);if(fe)return A(Oe(B(fe),{state:Pe,force:be,replace:me}),X||K);const v=K;v.redirectedFrom=X;let I;return!be&&kE(r,te,K)&&(I=is(16,{to:v,from:te}),Xt(te,te,!0,!1)),(I?Promise.resolve(I):y(v,te)).catch(C=>Nn(C)?Nn(C,2)?C:It(C):oe(C,v,te)).then(C=>{if(C){if(Nn(C,2))return A(Oe(B(C.to),{state:Pe,force:be,replace:me}),X||v)}else C=b(v,te,!0,me,Pe);return w(v,te,C),C})}function _(N,X){const K=G(N,X);return K?Promise.reject(K):Promise.resolve()}function y(N,X){let K;const[te,Pe,be]=PT(N,X);K=tc(te.reverse(),"beforeRouteLeave",N,X);for(const fe of te)fe.leaveGuards.forEach(v=>{K.push(Un(v,N,X))});const me=_.bind(null,N,X);return K.push(me),$r(K).then(()=>{K=[];for(const fe of i.list())K.push(Un(fe,N,X));return K.push(me),$r(K)}).then(()=>{K=tc(Pe,"beforeRouteUpdate",N,X);for(const fe of Pe)fe.updateGuards.forEach(v=>{K.push(Un(v,N,X))});return K.push(me),$r(K)}).then(()=>{K=[];for(const fe of N.matched)if(fe.beforeEnter&&!X.matched.includes(fe))if(Array.isArray(fe.beforeEnter))for(const v of fe.beforeEnter)K.push(Un(v,N,X));else K.push(Un(fe.beforeEnter,N,X));return K.push(me),$r(K)}).then(()=>(N.matched.forEach(fe=>fe.enterCallbacks={}),K=tc(be,"beforeRouteEnter",N,X),K.push(me),$r(K))).then(()=>{K=[];for(const fe of o.list())K.push(Un(fe,N,X));return K.push(me),$r(K)}).catch(fe=>Nn(fe,8)?fe:Promise.reject(fe))}function w(N,X,K){for(const te of c.list())te(N,X,K)}function b(N,X,K,te,Pe){const be=G(N,X);if(be)return be;const me=X===Vn,fe=qr?history.state:{};K&&(te||me?s.replace(N.fullPath,Oe({scroll:me&&fe&&fe.scroll},Pe)):s.push(N.fullPath,Pe)),l.value=N,Xt(N,X,K,me),It()}let S;function E(){S=s.listen((N,X,K)=>{const te=V(N),Pe=pe(te);if(Pe){A(Oe(Pe,{replace:!0}),te).catch(Ys);return}h=te;const be=l.value;qr&&FE(of(be.fullPath,K.delta),aa()),y(te,be).catch(me=>Nn(me,12)?me:Nn(me,2)?(A(me.to,te).then(fe=>{Nn(fe,20)&&!K.delta&&K.type===hi.pop&&s.go(-1,!1)}).catch(Ys),Promise.reject()):(K.delta&&s.go(-K.delta,!1),oe(me,te,be))).then(me=>{me=me||b(te,be,!1),me&&(K.delta?s.go(-K.delta,!1):K.type===hi.pop&&Nn(me,20)&&s.go(-1,!1)),w(te,be,me)}).catch(Ys)})}let Xe=Us(),Vt=Us(),Ce;function oe(N,X,K){It(N);const te=Vt.list();return te.length?te.forEach(Pe=>Pe(N,X,K)):console.error(N),Promise.reject(N)}function ve(){return Ce&&l.value!==Vn?Promise.resolve():new Promise((N,X)=>{Xe.add([N,X])})}function It(N){return Ce||(Ce=!N,E(),Xe.list().forEach(([X,K])=>N?K(N):X()),Xe.reset()),N}function Xt(N,X,K,te){const{scrollBehavior:Pe}=t;if(!qr||!Pe)return Promise.resolve();const be=!K&&UE(of(N.fullPath,0))||(te||!K)&&history.state&&history.state.scroll||null;return ml().then(()=>Pe(N,X,be)).then(me=>me&&LE(me)).catch(me=>oe(me,N,X))}const Nt=N=>s.go(N);let $e;const Be=new Set;return{currentRoute:l,addRoute:T,removeRoute:R,hasRoute:O,getRoutes:k,resolve:V,options:t,push:j,replace:re,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Vt.add,isReady:ve,install(N){const X=this;N.component("RouterLink",wT),N.component("RouterView",bT),N.config.globalProperties.$router=X,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Ws(l)}),qr&&!$e&&l.value===Vn&&($e=!0,j(s.location).catch(Pe=>{}));const K={};for(const Pe in Vn)K[Pe]=Ct(()=>l.value[Pe]);N.provide(oa,X),N.provide(Hp,gs(K)),N.provide(bc,l);const te=N.unmount;Be.add(N),N.unmount=function(){Be.delete(N),Be.size<1&&(h=Vn,S&&S(),l.value=Vn,$e=!1,Ce=!1),te()}}}}function $r(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function PT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>ss(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>ss(h,l))||s.push(l))}return[n,r,s]}function CT(){return Kt(oa)}const kT=wt({name:"task-bar",setup(){const t=CT();vl(()=>{e("relays")});function e(n){t.push({name:n})}return{}}}),Ot=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},DT={class:"task-bar"};function OT(t,e,n,r,s,i){const o=et("router-link");return ye(),He("div",DT,[Fe(o,{class:"task",to:"/schedules"},{default:ci(()=>e[0]||(e[0]=[rs("Schedules")])),_:1}),Fe(o,{class:"task",to:"/relays"},{default:ci(()=>e[1]||(e[1]=[rs("Relays")])),_:1})])}const VT=Ot(kT,[["render",OT],["__scopeId","data-v-d7db671c"]]),NT=wt({props:{spinnerSize:{type:String,default:"30px"},withText:{type:Boolean,default:!1}},setup(){return{}}}),xT={class:"spinner"},MT={key:0,class:"text"};function LT(t,e,n,r,s,i){return ye(),He("div",xT,[yt("div",{class:"spinner-inner",style:Ei({"--spinnerSize":t.spinnerSize})},null,4),t.withText?(ye(),He("div",MT,"Laden...")):mn("",!0)])}const tm=Ot(NT,[["render",LT],["__scopeId","data-v-8cb8f775"]]),FT=wt({components:{Spinner:tm},props:{text:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},emits:["onButtonClicked"],setup(t,e){function n(){e.emit("onButtonClicked")}return{onClicked:n}}}),UT={key:1,class:"button-content"};function $T(t,e,n,r,s,i){const o=et("spinner");return ye(),He("div",{class:ms(["button-default",{"is-loading":t.isLoading}]),tabindex:"0",onClick:e[0]||(e[0]=(...c)=>t.onClicked&&t.onClicked(...c)),onKeydown:e[1]||(e[1]=fE((...c)=>t.onClicked&&t.onClicked(...c),["enter"]))},[t.isLoading?(ye(),Ft(o,{key:0,spinnerSize:"20px"})):(ye(),He("div",UT,[ho(t.$slots,"icon",{},void 0),rs(" "+Ti(t.text),1)]))],34)}const bl=Ot(FT,[["render",$T],["__scopeId","data-v-5dad5cd0"]]),nm=Al("user",()=>{const t=ke(null);return{user:t,setUser:n=>{t.value=n}}});var _f={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},BT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,T=h&63;l||(T=64,o||(m=64)),r.push(n[f],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new jT;const m=i<<2|c>>4;if(r.push(m),h!==64){const T=c<<4&240|h>>2;if(r.push(T),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qT=function(t){const e=rm(t);return sm.encodeByteArray(e,!0)},Do=function(t){return qT(t).replace(/\./g,"")},im=function(t){try{return sm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function HT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zT=()=>HT().__FIREBASE_DEFAULTS__,KT=()=>{if(typeof process>"u"||typeof _f>"u")return;const t=_f.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&im(t[1]);return e&&JSON.parse(e)},ca=()=>{try{return zT()||KT()||WT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},om=t=>{var e,n;return(n=(e=ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},GT=t=>{const e=om(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},am=()=>{var t;return(t=ca())===null||t===void 0?void 0:t.config},cm=t=>{var e;return(e=ca())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function XT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Do(JSON.stringify(n)),Do(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function JT(){var t;const e=(t=ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ew(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nw(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rw(){return!JT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sw(){try{return typeof indexedDB=="object"}catch{return!1}}function iw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ow,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ai.prototype.create)}}class Ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?aw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new bn(s,c,r)}}function aw(t,e){return t.replace(cw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const cw=/\{\$([^}]+)}/g;function lw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(yf(i)&&yf(o)){if(!Oo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uw(t,e){const n=new hw(t,e);return n.subscribe.bind(n)}class hw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nc),s.error===void 0&&(s.error=nc),s.complete===void 0&&(s.complete=nc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nc(){}/**
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
 */function Tt(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pr="[DEFAULT]";/**
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
 */class dw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mw(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pw(t){return t===pr?void 0:t}function mw(t){return t.instantiationMode==="EAGER"}/**
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
 */class gw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const _w={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},yw=_e.INFO,vw={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},Ew=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sl{constructor(e){this.name=e,this._logLevel=yw,this._logHandler=Ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_w[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const Tw=(t,e)=>e.some(n=>t instanceof n);let vf,Ef;function ww(){return vf||(vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iw(){return Ef||(Ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lm=new WeakMap,Cc=new WeakMap,um=new WeakMap,rc=new WeakMap,Pl=new WeakMap;function Aw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(zn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lm.set(n,t)}).catch(()=>{}),Pl.set(e,t),e}function Rw(t){if(Cc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Cc.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||um.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bw(t){kc=t(kc)}function Sw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sc(this),e,...n);return um.set(r,e.sort?e.sort():[e]),zn(r)}:Iw().includes(t)?function(...e){return t.apply(sc(this),e),zn(lm.get(this))}:function(...e){return zn(t.apply(sc(this),e))}}function Pw(t){return typeof t=="function"?Sw(t):(t instanceof IDBTransaction&&Rw(t),Tw(t,ww())?new Proxy(t,kc):t)}function zn(t){if(t instanceof IDBRequest)return Aw(t);if(rc.has(t))return rc.get(t);const e=Pw(t);return e!==t&&(rc.set(t,e),Pl.set(e,t)),e}const sc=t=>Pl.get(t);function Cw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(zn(o.result),l.oldVersion,l.newVersion,zn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const kw=["get","getKey","getAll","getAllKeys","count"],Dw=["put","add","delete","clear"],ic=new Map;function Tf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ic.get(e))return ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Dw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return ic.set(e,i),i}bw(t=>({...t,get:(e,n,r)=>Tf(e,n)||t.get(e,n,r),has:(e,n)=>!!Tf(e,n)||t.has(e,n)}));/**
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
 */class Ow{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dc="@firebase/app",wf="0.10.11";/**
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
 */const Tn=new Sl("@firebase/app"),Nw="@firebase/app-compat",xw="@firebase/analytics-compat",Mw="@firebase/analytics",Lw="@firebase/app-check-compat",Fw="@firebase/app-check",Uw="@firebase/auth",$w="@firebase/auth-compat",Bw="@firebase/database",jw="@firebase/database-compat",qw="@firebase/functions",Hw="@firebase/functions-compat",zw="@firebase/installations",Kw="@firebase/installations-compat",Ww="@firebase/messaging",Gw="@firebase/messaging-compat",Qw="@firebase/performance",Xw="@firebase/performance-compat",Yw="@firebase/remote-config",Jw="@firebase/remote-config-compat",Zw="@firebase/storage",eI="@firebase/storage-compat",tI="@firebase/firestore",nI="@firebase/vertexai-preview",rI="@firebase/firestore-compat",sI="firebase",iI="10.13.2";/**
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
 */const Oc="[DEFAULT]",oI={[Dc]:"fire-core",[Nw]:"fire-core-compat",[Mw]:"fire-analytics",[xw]:"fire-analytics-compat",[Fw]:"fire-app-check",[Lw]:"fire-app-check-compat",[Uw]:"fire-auth",[$w]:"fire-auth-compat",[Bw]:"fire-rtdb",[jw]:"fire-rtdb-compat",[qw]:"fire-fn",[Hw]:"fire-fn-compat",[zw]:"fire-iid",[Kw]:"fire-iid-compat",[Ww]:"fire-fcm",[Gw]:"fire-fcm-compat",[Qw]:"fire-perf",[Xw]:"fire-perf-compat",[Yw]:"fire-rc",[Jw]:"fire-rc-compat",[Zw]:"fire-gcs",[eI]:"fire-gcs-compat",[tI]:"fire-fst",[rI]:"fire-fst-compat",[nI]:"fire-vertex","fire-js":"fire-js",[sI]:"fire-js-all"};/**
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
 */const Vo=new Map,aI=new Map,Vc=new Map;function If(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(Vc.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Vc.set(e,t);for(const n of Vo.values())If(n,t);for(const n of aI.values())If(n,t);return!0}function Cl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t.settings!==void 0}/**
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
 */const cI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new Ai("app","Firebase",cI);/**
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
 */class lI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const ys=iI;function hm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(n||(n=am()),!n)throw Kn.create("no-options");const i=Vo.get(s);if(i){if(Oo(n,i.options)&&Oo(r,i.config))return i;throw Kn.create("duplicate-app",{appName:s})}const o=new gw(s);for(const l of Vc.values())o.addComponent(l);const c=new lI(n,r,o);return Vo.set(s,c),c}function fm(t=Oc){const e=Vo.get(t);if(!e&&t===Oc&&am())return hm();if(!e)throw Kn.create("no-app",{appName:t});return e}function Wn(t,e,n){var r;let s=(r=oI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(c.join(" "));return}os(new Ir(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const uI="firebase-heartbeat-database",hI=1,fi="firebase-heartbeat-store";let oc=null;function dm(){return oc||(oc=Cw(uI,hI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),oc}async function fI(t){try{const n=(await dm()).transaction(fi),r=await n.objectStore(fi).get(pm(t));return await n.done,r}catch(e){if(e instanceof bn)Tn.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function Af(t,e){try{const r=(await dm()).transaction(fi,"readwrite");await r.objectStore(fi).put(e,pm(t)),await r.done}catch(n){if(n instanceof bn)Tn.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function pm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dI=1024,pI=30*24*60*60*1e3;class mI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _I(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=pI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rf(),{heartbeatsToSend:r,unsentEntries:s}=gI(this._heartbeatsCache.heartbeats),i=Do(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Tn.warn(n),""}}}function Rf(){return new Date().toISOString().substring(0,10)}function gI(t,e=dI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sw()?iw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bf(t){return Do(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function yI(t){os(new Ir("platform-logger",e=>new Ow(e),"PRIVATE")),os(new Ir("heartbeat",e=>new mI(e),"PRIVATE")),Wn(Dc,wf,t),Wn(Dc,wf,"esm2017"),Wn("fire-js","")}yI("");function kl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function mm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vI=mm,gm=new Ai("auth","Firebase",mm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Sl("@firebase/auth");function EI(t,...e){No.logLevel<=_e.WARN&&No.warn(`Auth (${ys}): ${t}`,...e)}function go(t,...e){No.logLevel<=_e.ERROR&&No.error(`Auth (${ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw Ol(t,...e)}function Wt(t,...e){return Ol(t,...e)}function Dl(t,e,n){const r=Object.assign(Object.assign({},vI()),{[e]:n});return new Ai("auth","Firebase",r).create(e,{appName:t.name})}function Er(t){return Dl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function TI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&an(t,"argument-error"),Dl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ol(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gm.create(t,...e)}function ae(t,e,...n){if(!t)throw Ol(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function wn(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wI(){return Sf()==="http:"||Sf()==="https:"}function Sf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wI()||ew()||"connection"in navigator)?navigator.onLine:!0}function AI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=YT()||tw()}get(){return II()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=new bi(3e4,6e4);function Nl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vs(t,e,n,r,s={}){return ym(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ri(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return ZT()||(h.referrerPolicy="no-referrer"),_m.fetch()(vm(t,t.config.apiHost,n,c),h)})}async function ym(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RI),e);try{const s=new PI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw io(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Dl(t,f,h);an(t,f)}}catch(s){if(s instanceof bn)throw s;an(t,"network-request-failed",{message:String(s)})}}async function SI(t,e,n,r,s={}){const i=await vs(t,e,n,r,s);return"mfaPendingCredential"in i&&an(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Vl(t.config,s):`${t.config.apiScheme}://${s}`}class PI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wt(this.auth,"network-request-failed")),bI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Wt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e){return vs(t,"POST","/v1/accounts:delete",e)}async function Em(t,e){return vs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kI(t,e=!1){const n=Tt(t),r=await n.getIdToken(e),s=xl(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zs(ac(s.auth_time)),issuedAtTime:Zs(ac(s.iat)),expirationTime:Zs(ac(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ac(t){return Number(t)*1e3}function xl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const s=im(n);return s?JSON.parse(s):(go("Failed to decode base64 JWT payload"),null)}catch(s){return go("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Pf(t){const e=xl(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&DI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await di(t,Em(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Tm(i.providerUserInfo):[],c=NI(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new xc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function VI(t){const e=Tt(t);await xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tm(t){return t.map(e=>{var{providerId:n}=e,r=kl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(t,e){const n=await ym(t,{},async()=>{const r=Ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=vm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",_m.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MI(t,e){return vs(t,"POST","/v2/accounts:revokeToken",Nl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Pf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jr;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=kl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kI(this,e)}reload(){return VI(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(Er(this.auth));const e=await this.getIdToken();return await di(this,CI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,V=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:G,emailVerified:j,isAnonymous:re,providerData:pe,stsTokenManager:A}=n;ae(G&&A,e,"internal-error");const _=Jr.fromJSON(this.name,A);ae(typeof G=="string",e,"internal-error"),xn(p,e.name),xn(m,e.name),ae(typeof j=="boolean",e,"internal-error"),ae(typeof re=="boolean",e,"internal-error"),xn(T,e.name),xn(R,e.name),xn(k,e.name),xn(O,e.name),xn(V,e.name),xn(B,e.name);const y=new yn({uid:G,auth:e,email:m,emailVerified:j,displayName:p,isAnonymous:re,photoURL:R,phoneNumber:T,tenantId:k,stsTokenManager:_,createdAt:V,lastLoginAt:B});return pe&&Array.isArray(pe)&&(y.providerData=pe.map(w=>Object.assign({},w))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jr;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Tm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Jr;c.updateFromIdToken(r);const l=new yn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=new Map;function vn(t){wn(t instanceof Function,"Expected a class definition");let e=Cf.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cf.set(t,e),e)}/**
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
 */class wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wm.type="NONE";const kf=wm;/**
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
 */function _o(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_o(this.userKey,s.apiKey,i),this.fullPersistenceKey=_o("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(vn(kf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||vn(kf);const o=_o(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){const p=yn._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Zr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Im(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pm(e))return"Blackberry";if(Cm(e))return"Webos";if(Am(e))return"Safari";if((e.includes("chrome/")||Rm(e))&&!e.includes("edge/"))return"Chrome";if(Sm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Im(t=Et()){return/firefox\//i.test(t)}function Am(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rm(t=Et()){return/crios\//i.test(t)}function bm(t=Et()){return/iemobile/i.test(t)}function Sm(t=Et()){return/android/i.test(t)}function Pm(t=Et()){return/blackberry/i.test(t)}function Cm(t=Et()){return/webos/i.test(t)}function Ml(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LI(t=Et()){var e;return Ml(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FI(){return nw()&&document.documentMode===10}function km(t=Et()){return Ml(t)||Sm(t)||Cm(t)||Pm(t)||/windows phone/i.test(t)||bm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t,e=[]){let n;switch(t){case"Browser":n=Df(Et());break;case"Worker":n=`${Df(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${r}`}/**
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
 */class UI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $I(t,e={}){return vs(t,"GET","/v2/passwordPolicy",Nl(t,e))}/**
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
 */const BI=6;class jI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:BI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Of(this),this.idTokenSubscription=new Of(this),this.beforeStateQueue=new UI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Em(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(Er(this));const n=e?Tt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(Er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(Er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $I(this),n=new jI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&EI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function la(t){return Tt(t)}class Of{constructor(e){this.auth=e,this.observer=null,this.addObserver=uw(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ll={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HI(t){Ll=t}function zI(t){return Ll.loadJS(t)}function KI(){return Ll.gapiScript}function WI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t,e){const n=Cl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Oo(i,e??{}))return s;an(s,"already-initialized")}return n.initialize({options:e})}function QI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XI(t,e,n){const r=la(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Om(e),{host:o,port:c}=YI(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),JI()}function Om(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YI(t){const e=Om(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Vf(o)}}}function Vf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e){return SI(t,"POST","/v1/accounts:signInWithIdp",Nl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="http://localhost";class Ar extends Vm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=kl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ar(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,es(e,n)}buildRequest(){const e={requestUri:ZI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ri(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Si extends Fl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Si{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Si{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Si{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yn._fromIdTokenResponse(e,r,s),o=Nf(r);return new as({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Nf(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Nf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Mo(e,n,r,s)}}function Nm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(t,i,e,r):i})}async function e0(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
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
 */async function t0(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(Er(r));const s="reauthenticate";try{const i=await di(t,Nm(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=xl(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),as._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t,e,n=!1){if(gn(t.app))return Promise.reject(Er(t));const r="signIn",s=await Nm(t,r,e),i=await as._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function r0(t,e,n,r){return Tt(t).onIdTokenChanged(e,n,r)}function s0(t,e,n){return Tt(t).beforeAuthStateChanged(e,n)}const Lo="__sak";/**
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
 */class xm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lo,"1"),this.storage.removeItem(Lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=1e3,o0=10;class Mm extends xm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=km(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);FI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,o0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},i0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mm.type="LOCAL";const a0=Mm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends xm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lm.type="SESSION";const Fm=Lm;/**
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
 */function c0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await c0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class l0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Ul("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function u0(t){tn().location.href=t}/**
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
 */function Um(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function h0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function d0(){return Um()?self:null}/**
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
 */const $m="firebaseLocalStorageDb",p0=1,Fo="firebaseLocalStorage",Bm="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ha(t,e){return t.transaction([Fo],e?"readwrite":"readonly").objectStore(Fo)}function m0(){const t=indexedDB.deleteDatabase($m);return new Pi(t).toPromise()}function Mc(){const t=indexedDB.open($m,p0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fo,{keyPath:Bm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fo)?e(r):(r.close(),await m0(),e(await Mc()))})})}async function xf(t,e,n){const r=ha(t,!0).put({[Bm]:e,value:n});return new Pi(r).toPromise()}async function g0(t,e){const n=ha(t,!1).get(e),r=await new Pi(n).toPromise();return r===void 0?null:r.value}function Mf(t,e){const n=ha(t,!0).delete(e);return new Pi(n).toPromise()}const _0=800,y0=3;class jm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>y0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Um()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(d0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await h0(),!this.activeServiceWorker)return;this.sender=new l0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mc();return await xf(e,Lo,"1"),await Mf(e,Lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>g0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ha(s,!1).getAll();return new Pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jm.type="LOCAL";const v0=jm;new bi(3e4,6e4);/**
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
 */function qm(t,e){return e?vn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $l extends Vm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function E0(t){return n0(t.auth,new $l(t),t.bypassAuthState)}function T0(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),t0(n,new $l(t),t.bypassAuthState)}async function w0(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),e0(n,new $l(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E0;case"linkViaPopup":case"linkViaRedirect":return w0;case"reauthViaPopup":case"reauthViaRedirect":return T0;default:an(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new bi(2e3,1e4);async function A0(t,e,n){if(gn(t.app))return Promise.reject(Wt(t,"operation-not-supported-in-this-environment"));const r=la(t);TI(t,e,Fl);const s=qm(r,n);return new mr(r,"signInViaPopup",e,s).executeNotNull()}class mr extends Hm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Ul();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I0.get())};e()}}mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="pendingRedirect",yo=new Map;class b0 extends Hm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yo.get(this.auth._key());if(!e){try{const r=await S0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yo.set(this.auth._key(),e)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S0(t,e){const n=k0(e),r=C0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function P0(t,e){yo.set(t._key(),e)}function C0(t){return vn(t._redirectPersistence)}function k0(t){return _o(R0,t.config.apiKey,t.name)}async function D0(t,e,n=!1){if(gn(t.app))return Promise.reject(Er(t));const r=la(t),s=qm(r,e),o=await new b0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=10*60*1e3;class V0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!N0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=O0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lf(e))}saveEventToCache(e){this.cachedEventUids.add(Lf(e)),this.lastProcessedEventTime=Date.now()}}function Lf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function N0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(t,e={}){return vs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L0=/^https?/;async function F0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await x0(t);for(const n of e)try{if(U0(n))return}catch{}an(t,"unauthorized-domain")}function U0(t){const e=Nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!L0.test(n))return!1;if(M0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const $0=new bi(3e4,6e4);function Ff(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function B0(t){return new Promise((e,n)=>{var r,s,i;function o(){Ff(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ff(),n(Wt(t,"network-request-failed"))},timeout:$0.get()})}if(!((s=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tn().gapi)===null||i===void 0)&&i.load)o();else{const c=WI("iframefcb");return tn()[c]=()=>{gapi.load?o():n(Wt(t,"network-request-failed"))},zI(`${KI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw vo=null,e})}let vo=null;function j0(t){return vo=vo||B0(t),vo}/**
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
 */const q0=new bi(5e3,15e3),H0="__/auth/iframe",z0="emulator/auth/iframe",K0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G0(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vl(e,z0):`https://${t.config.authDomain}/${H0}`,r={apiKey:e.apiKey,appName:t.name,v:ys},s=W0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ri(r).slice(1)}`}async function Q0(t){const e=await j0(t),n=tn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:G0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:K0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),c=tn().setTimeout(()=>{i(o)},q0.get());function l(){tn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const X0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y0=500,J0=600,Z0="_blank",eA="http://localhost";class Uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tA(t,e,n,r=Y0,s=J0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},X0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Et().toLowerCase();n&&(c=Rm(h)?Z0:n),Im(h)&&(e=e||eA,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[T,R])=>`${m}${T}=${R},`,"");if(LI(h)&&c!=="_self")return nA(e||"",c),new Uf(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Uf(p)}function nA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rA="__/auth/handler",sA="emulator/auth/handler",iA=encodeURIComponent("fac");async function $f(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ys,eventId:s};if(e instanceof Fl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Si){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${iA}=${encodeURIComponent(l)}`:"";return`${oA(t)}?${Ri(c).slice(1)}${h}`}function oA({config:t}){return t.emulator?Vl(t,sA):`https://${t.authDomain}/${rA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="webStorageSupport";class aA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fm,this._completeRedirectFn=D0,this._overrideRedirectResult=P0}async _openPopup(e,n,r,s){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $f(e,n,r,Nc(),s);return tA(e,o,Ul())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $f(e,n,r,Nc(),s);return u0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Q0(e),r=new V0(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cc,{type:cc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[cc];o!==void 0&&n(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=F0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return km()||Am()||Ml()}}const cA=aA;var Bf="@firebase/auth",jf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hA(t){os(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dm(t)},h=new qI(r,s,i,l);return QI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new Ir("auth-internal",e=>{const n=la(e.getProvider("auth").getImmediate());return(r=>new lA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(Bf,jf,uA(t)),Wn(Bf,jf,"esm2017")}/**
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
 */const fA=5*60,dA=cm("authIdTokenMaxAge")||fA;let qf=null;const pA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dA)return;const s=n==null?void 0:n.token;qf!==s&&(qf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ir(t=fm()){const e=Cl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GI(t,{popupRedirectResolver:cA,persistence:[v0,a0,Fm]}),r=cm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=pA(i.toString());s0(n,o,()=>o(n.currentUser)),r0(n,c=>o(c))}}const s=om("auth");return s&&XI(n,`http://${s}`),n}function mA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}HI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Wt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hA("Browser");var gA="firebase",_A="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn(gA,_A,"app");const yA={apiKey:"AIzaSyALY2Eu62yzZPuaySeDBI3ONz3DYCq2388",authDomain:"relay-hub.firebaseapp.com",projectId:"relay-hub",storageBucket:"relay-hub.appspot.com",messagingSenderId:"1088994606939",appId:"1:1088994606939:web:17dc0c1330726f959ca47e"},Sn=hm(yA),vA=ir(Sn),EA=async()=>{const t=new pn;try{return(await A0(vA,t)).user}catch(e){throw console.error("Error during sign-in:",e),e}},TA=wt({components:{ButtonDefault:bl},emits:["onButtonClicked"],props:{},setup(){const t=nm(),e=ke(!1);async function n(){e.value=!0;try{const r=await EA();t.setUser({uid:r.uid,displayName:r.displayName,email:r.email,photoURL:r.photoURL})}catch(r){t.setUser(null),console.error("Failed to sign in:",r)}}return{isLoading:e,onButtonClicked:n}}}),wA={class:"button-google"};function IA(t,e,n,r,s,i){const o=et("ButtonDefault");return ye(),He("div",wA,[Fe(o,{text:"Sign in with Google",isLoading:t.isLoading,onOnButtonClicked:t.onButtonClicked},{icon:ci(()=>e[0]||(e[0]=[yt("div",{class:"google-icon"},null,-1)])),_:1},8,["isLoading","onOnButtonClicked"])])}const AA=Ot(TA,[["render",IA],["__scopeId","data-v-e750a2f5"]]),RA=wt({name:"sign-in",components:{ButtonGoogle:AA},setup(){return{}}}),bA={class:"sign-in"};function SA(t,e,n,r,s,i){const o=et("button-google");return ye(),He("div",bA,[e[0]||(e[0]=yt("div",{class:"relay-hub"},"RelayHub",-1)),Fe(o)])}const PA=Ot(RA,[["render",SA],["__scopeId","data-v-9540f920"]]),CA=wt({name:"ToggleButton",props:{modelValue:{type:Boolean,required:!0},isBlocked:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=ke(t.modelValue),r=ke(!1);return vr(()=>t.modelValue,i=>{n.value=i}),{isActive:n,toggleSwitch:()=>{t.isBlocked||r.value||(n.value=!n.value,r.value=!0,setTimeout(()=>r.value=!1,500),e("update:modelValue",n.value))}}}});function kA(t,e,n,r,s,i){return ye(),He("div",{class:ms(["toggle-switch",{active:t.isActive}]),onClick:e[0]||(e[0]=(...o)=>t.toggleSwitch&&t.toggleSwitch(...o))},e[1]||(e[1]=[yt("div",{class:"switch"},null,-1)]),2)}const DA=Ot(CA,[["render",kA],["__scopeId","data-v-17dbdf4b"]]);var Hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,Km;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function y(){}y.prototype=_.prototype,A.D=_.prototype,A.prototype=new y,A.prototype.constructor=A,A.C=function(w,b,S){for(var E=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)E[Xe-2]=arguments[Xe];return _.prototype[b].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,y){y||(y=0);var w=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)w[b]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(b=0;16>b;++b)w[b]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=A.g[0],y=A.g[1],b=A.g[2];var S=A.g[3],E=_+(S^y&(b^S))+w[0]+3614090360&4294967295;_=y+(E<<7&4294967295|E>>>25),E=S+(b^_&(y^b))+w[1]+3905402710&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(y^S&(_^y))+w[2]+606105819&4294967295,b=S+(E<<17&4294967295|E>>>15),E=y+(_^b&(S^_))+w[3]+3250441966&4294967295,y=b+(E<<22&4294967295|E>>>10),E=_+(S^y&(b^S))+w[4]+4118548399&4294967295,_=y+(E<<7&4294967295|E>>>25),E=S+(b^_&(y^b))+w[5]+1200080426&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(y^S&(_^y))+w[6]+2821735955&4294967295,b=S+(E<<17&4294967295|E>>>15),E=y+(_^b&(S^_))+w[7]+4249261313&4294967295,y=b+(E<<22&4294967295|E>>>10),E=_+(S^y&(b^S))+w[8]+1770035416&4294967295,_=y+(E<<7&4294967295|E>>>25),E=S+(b^_&(y^b))+w[9]+2336552879&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(y^S&(_^y))+w[10]+4294925233&4294967295,b=S+(E<<17&4294967295|E>>>15),E=y+(_^b&(S^_))+w[11]+2304563134&4294967295,y=b+(E<<22&4294967295|E>>>10),E=_+(S^y&(b^S))+w[12]+1804603682&4294967295,_=y+(E<<7&4294967295|E>>>25),E=S+(b^_&(y^b))+w[13]+4254626195&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(y^S&(_^y))+w[14]+2792965006&4294967295,b=S+(E<<17&4294967295|E>>>15),E=y+(_^b&(S^_))+w[15]+1236535329&4294967295,y=b+(E<<22&4294967295|E>>>10),E=_+(b^S&(y^b))+w[1]+4129170786&4294967295,_=y+(E<<5&4294967295|E>>>27),E=S+(y^b&(_^y))+w[6]+3225465664&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^y&(S^_))+w[11]+643717713&4294967295,b=S+(E<<14&4294967295|E>>>18),E=y+(S^_&(b^S))+w[0]+3921069994&4294967295,y=b+(E<<20&4294967295|E>>>12),E=_+(b^S&(y^b))+w[5]+3593408605&4294967295,_=y+(E<<5&4294967295|E>>>27),E=S+(y^b&(_^y))+w[10]+38016083&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^y&(S^_))+w[15]+3634488961&4294967295,b=S+(E<<14&4294967295|E>>>18),E=y+(S^_&(b^S))+w[4]+3889429448&4294967295,y=b+(E<<20&4294967295|E>>>12),E=_+(b^S&(y^b))+w[9]+568446438&4294967295,_=y+(E<<5&4294967295|E>>>27),E=S+(y^b&(_^y))+w[14]+3275163606&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^y&(S^_))+w[3]+4107603335&4294967295,b=S+(E<<14&4294967295|E>>>18),E=y+(S^_&(b^S))+w[8]+1163531501&4294967295,y=b+(E<<20&4294967295|E>>>12),E=_+(b^S&(y^b))+w[13]+2850285829&4294967295,_=y+(E<<5&4294967295|E>>>27),E=S+(y^b&(_^y))+w[2]+4243563512&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^y&(S^_))+w[7]+1735328473&4294967295,b=S+(E<<14&4294967295|E>>>18),E=y+(S^_&(b^S))+w[12]+2368359562&4294967295,y=b+(E<<20&4294967295|E>>>12),E=_+(y^b^S)+w[5]+4294588738&4294967295,_=y+(E<<4&4294967295|E>>>28),E=S+(_^y^b)+w[8]+2272392833&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^y)+w[11]+1839030562&4294967295,b=S+(E<<16&4294967295|E>>>16),E=y+(b^S^_)+w[14]+4259657740&4294967295,y=b+(E<<23&4294967295|E>>>9),E=_+(y^b^S)+w[1]+2763975236&4294967295,_=y+(E<<4&4294967295|E>>>28),E=S+(_^y^b)+w[4]+1272893353&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^y)+w[7]+4139469664&4294967295,b=S+(E<<16&4294967295|E>>>16),E=y+(b^S^_)+w[10]+3200236656&4294967295,y=b+(E<<23&4294967295|E>>>9),E=_+(y^b^S)+w[13]+681279174&4294967295,_=y+(E<<4&4294967295|E>>>28),E=S+(_^y^b)+w[0]+3936430074&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^y)+w[3]+3572445317&4294967295,b=S+(E<<16&4294967295|E>>>16),E=y+(b^S^_)+w[6]+76029189&4294967295,y=b+(E<<23&4294967295|E>>>9),E=_+(y^b^S)+w[9]+3654602809&4294967295,_=y+(E<<4&4294967295|E>>>28),E=S+(_^y^b)+w[12]+3873151461&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^y)+w[15]+530742520&4294967295,b=S+(E<<16&4294967295|E>>>16),E=y+(b^S^_)+w[2]+3299628645&4294967295,y=b+(E<<23&4294967295|E>>>9),E=_+(b^(y|~S))+w[0]+4096336452&4294967295,_=y+(E<<6&4294967295|E>>>26),E=S+(y^(_|~b))+w[7]+1126891415&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~y))+w[14]+2878612391&4294967295,b=S+(E<<15&4294967295|E>>>17),E=y+(S^(b|~_))+w[5]+4237533241&4294967295,y=b+(E<<21&4294967295|E>>>11),E=_+(b^(y|~S))+w[12]+1700485571&4294967295,_=y+(E<<6&4294967295|E>>>26),E=S+(y^(_|~b))+w[3]+2399980690&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~y))+w[10]+4293915773&4294967295,b=S+(E<<15&4294967295|E>>>17),E=y+(S^(b|~_))+w[1]+2240044497&4294967295,y=b+(E<<21&4294967295|E>>>11),E=_+(b^(y|~S))+w[8]+1873313359&4294967295,_=y+(E<<6&4294967295|E>>>26),E=S+(y^(_|~b))+w[15]+4264355552&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~y))+w[6]+2734768916&4294967295,b=S+(E<<15&4294967295|E>>>17),E=y+(S^(b|~_))+w[13]+1309151649&4294967295,y=b+(E<<21&4294967295|E>>>11),E=_+(b^(y|~S))+w[4]+4149444226&4294967295,_=y+(E<<6&4294967295|E>>>26),E=S+(y^(_|~b))+w[11]+3174756917&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~y))+w[2]+718787259&4294967295,b=S+(E<<15&4294967295|E>>>17),E=y+(S^(b|~_))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+S&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var y=_-this.blockSize,w=this.B,b=this.h,S=0;S<_;){if(b==0)for(;S<=y;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<_;)if(w[b++]=A.charCodeAt(S++),b==this.blockSize){s(this,w),b=0;break}}else for(;S<_;)if(w[b++]=A[S++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var y=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=y&255,y/=256;for(this.u(A),A=Array(16),_=y=0;4>_;++_)for(var w=0;32>w;w+=8)A[y++]=this.g[_]>>>w&255;return A};function i(A,_){var y=c;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=_(A)}function o(A,_){this.h=_;for(var y=[],w=!0,b=A.length-1;0<=b;b--){var S=A[b]|0;w&&S==_||(y[b]=S,w=!1)}this.g=y}var c={};function l(A){return-128<=A&&128>A?i(A,function(_){return new o([_|0],0>_?-1:0)}):new o([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return O(h(-A));for(var _=[],y=1,w=0;A>=y;w++)_[w]=A/y|0,y*=4294967296;return new o(_,0)}function f(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return O(f(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(_,8)),w=p,b=0;b<A.length;b+=8){var S=Math.min(8,A.length-b),E=parseInt(A.substring(b,b+S),_);8>S?(S=h(Math.pow(_,S)),w=w.j(S).add(h(E))):(w=w.j(y),w=w.add(h(E)))}return w}var p=l(0),m=l(1),T=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var A=0,_=1,y=0;y<this.g.length;y++){var w=this.i(y);A+=(0<=w?w:4294967296+w)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(k(this))return"-"+O(this).toString(A);for(var _=h(Math.pow(A,6)),y=this,w="";;){var b=j(y,_).g;y=V(y,b.j(_));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(A);if(y=b,R(y))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function k(A){return A.h==-1}t.l=function(A){return A=V(this,A),k(A)?-1:R(A)?0:1};function O(A){for(var _=A.g.length,y=[],w=0;w<_;w++)y[w]=~A.g[w];return new o(y,~A.h).add(m)}t.abs=function(){return k(this)?O(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0,b=0;b<=_;b++){var S=w+(this.i(b)&65535)+(A.i(b)&65535),E=(S>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);w=E>>>16,S&=65535,E&=65535,y[b]=E<<16|S}return new o(y,y[y.length-1]&-2147483648?-1:0)};function V(A,_){return A.add(O(_))}t.j=function(A){if(R(this)||R(A))return p;if(k(this))return k(A)?O(this).j(O(A)):O(O(this).j(A));if(k(A))return O(this.j(O(A)));if(0>this.l(T)&&0>A.l(T))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,y=[],w=0;w<2*_;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<A.g.length;b++){var S=this.i(w)>>>16,E=this.i(w)&65535,Xe=A.i(b)>>>16,Vt=A.i(b)&65535;y[2*w+2*b]+=E*Vt,B(y,2*w+2*b),y[2*w+2*b+1]+=S*Vt,B(y,2*w+2*b+1),y[2*w+2*b+1]+=E*Xe,B(y,2*w+2*b+1),y[2*w+2*b+2]+=S*Xe,B(y,2*w+2*b+2)}for(w=0;w<_;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=_;w<2*_;w++)y[w]=0;return new o(y,0)};function B(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function G(A,_){this.g=A,this.h=_}function j(A,_){if(R(_))throw Error("division by zero");if(R(A))return new G(p,p);if(k(A))return _=j(O(A),_),new G(O(_.g),O(_.h));if(k(_))return _=j(A,O(_)),new G(O(_.g),_.h);if(30<A.g.length){if(k(A)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var y=m,w=_;0>=w.l(A);)y=re(y),w=re(w);var b=pe(y,1),S=pe(w,1);for(w=pe(w,2),y=pe(y,2);!R(w);){var E=S.add(w);0>=E.l(A)&&(b=b.add(y),S=E),w=pe(w,1),y=pe(y,1)}return _=V(A,b.j(_)),new G(b,_)}for(b=p;0<=A.l(_);){for(y=Math.max(1,Math.floor(A.m()/_.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=h(y),E=S.j(_);k(E)||0<E.l(A);)y-=w,S=h(y),E=S.j(_);R(S)&&(S=m),b=b.add(S),A=V(A,E)}return new G(b,A)}t.A=function(A){return j(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)&A.i(w);return new o(y,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)|A.i(w);return new o(y,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],w=0;w<_;w++)y[w]=this.i(w)^A.i(w);return new o(y,this.h^A.h)};function re(A){for(var _=A.g.length+1,y=[],w=0;w<_;w++)y[w]=A.i(w)<<1|A.i(w-1)>>>31;return new o(y,A.h)}function pe(A,_){var y=_>>5;_%=32;for(var w=A.g.length-y,b=[],S=0;S<w;S++)b[S]=0<_?A.i(S+y)>>>_|A.i(S+y+1)<<32-_:A.i(S+y);return new o(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Km=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Tr=o}).apply(typeof Hf<"u"?Hf:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wm,Gm,js,Qm,Eo,Lc,Xm,Ym,Jm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var D=d++;return{value:u(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function m(a,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function T(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,D){for(var z=Array(arguments.length-2),De=2;De<arguments.length;De++)z[De-2]=arguments[De];return u.prototype[P].apply(g,z)}}function k(a){const u=a.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function O(a,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const P=a.length||0,D=g.length||0;a.length=P+D;for(let z=0;z<D;z++)a[P+z]=g[z]}else a.push(g)}}class V{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function G(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function j(a){return j[" "](a),a}j[" "]=function(){};var re=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function pe(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function A(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function _(a){const u={};for(const d in a)u[d]=a[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let D=0;D<y.length;D++)d=y[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function b(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function E(){var a=It;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Xe{constructor(){this.h=this.g=null}add(u,d){const g=Vt.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Vt=new V(()=>new Ce,a=>a.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,ve=!1,It=new Xe,Xt=()=>{const a=c.Promise.resolve(void 0);oe=()=>{a.then(Nt)}};var Nt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){S(d)}var u=Vt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ve=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var Fi=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function N(a,u){if(Be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(re){e:{try{j(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:X[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&N.aa.h.call(this)}}R(N,Be);var X={2:"touch",3:"pen",4:"mouse"};N.prototype.h=function(){N.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),te=0;function Pe(a,u,d,g,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=P,this.key=++te,this.da=this.fa=!1}function be(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,u,d,g,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=v(a,u,g,P);return-1<z?(u=a[z],d||(u.fa=!1)):(u=new Pe(u,this.src,D,!!g,P),u.fa=d,a.push(u)),u};function fe(a,u){var d=u.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,u,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(be(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function v(a,u,d,g){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==u&&D.capture==!!d&&D.ha==g)return P}return-1}var I="closure_lm_"+(1e6*Math.random()|0),C={};function U(a,u,d,g,P){if(Array.isArray(u)){for(var D=0;D<u.length;D++)U(a,u[D],d,g,P);return null}return d=ee(d),a&&a[K]?a.K(u,d,h(g)?!!g.capture:!!g,P):M(a,u,d,!1,g,P)}function M(a,u,d,g,P,D){if(!u)throw Error("Invalid event type");var z=h(P)?!!P.capture:!!P,De=se(a);if(De||(a[I]=De=new me(a)),d=De.add(u,d,g,z,D),d.proxy)return d;if(g=F(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Fi||(P=z),P===void 0&&(P=!1),a.addEventListener(u.toString(),g,P);else if(a.attachEvent)a.attachEvent(q(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function F(){function a(d){return u.call(a.src,a.listener,d)}const u=$;return a}function W(a,u,d,g,P){if(Array.isArray(u))for(var D=0;D<u.length;D++)W(a,u[D],d,g,P);else g=h(g)?!!g.capture:!!g,d=ee(d),a&&a[K]?(a=a.i,u=String(u).toString(),u in a.g&&(D=a.g[u],d=v(D,d,g,P),-1<d&&(be(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[u],a.h--)))):a&&(a=se(a))&&(u=a.g[u.toString()],a=-1,u&&(a=v(u,d,g,P)),(d=-1<a?u[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[K])fe(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(q(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=se(u))?(fe(d,a),d.h==0&&(d.src=null,u[I]=null)):be(a)}}}function q(a){return a in C?C[a]:C[a]="on"+a}function $(a,u){if(a.da)a=!0;else{u=new N(u,this);var d=a.listener,g=a.ha||a.src;a.fa&&H(a),a=d.call(g,u)}return a}function se(a){return a=a[I],a instanceof me?a:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(a){return typeof a=="function"?a:(a[Q]||(a[Q]=function(u){return a.handleEvent(u)}),a[Q])}function J(){$e.call(this),this.i=new me(this),this.M=this,this.F=null}R(J,$e),J.prototype[K]=!0,J.prototype.removeEventListener=function(a,u,d,g){W(this,a,u,d,g)};function ie(a,u){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Be(u,a);else if(u instanceof Be)u.target=u.target||a;else{var P=u;u=new Be(g,a),w(u,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var z=u.g=d[D];P=Re(z,g,!0,u)&&P}if(z=u.g=a,P=Re(z,g,!0,u)&&P,P=Re(z,g,!1,u)&&P,d)for(D=0;D<d.length;D++)z=u.g=d[D],P=Re(z,g,!1,u)&&P}J.prototype.N=function(){if(J.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],g=0;g<d.length;g++)be(d[g]);delete a.g[u],a.h--}}this.F=null},J.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},J.prototype.L=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function Re(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,D=0;D<u.length;++D){var z=u[D];if(z&&!z.da&&z.capture==d){var De=z.listener,rt=z.ha||z.src;z.fa&&fe(a.i,z),P=De.call(rt,g)!==!1&&P}}return P&&!g.defaultPrevented}function Te(a,u,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function ut(a){a.g=Te(()=>{a.g=null,a.i&&(a.i=!1,ut(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Je extends $e{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ut(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(a){$e.call(this),this.h=a,this.g={}}R(nt,$e);var ht=[];function Pn(a){pe(a.g,function(u,d){this.g.hasOwnProperty(d)&&H(u)},a),a.g={}}nt.prototype.N=function(){nt.aa.N.call(this),Pn(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Or=c.JSON.stringify,At=c.JSON.parse,Bt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Vr(){}Vr.prototype.h=null;function Su(a){return a.h||(a.h=a.i())}function Pu(){}var As={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ba(){Be.call(this,"d")}R(ba,Be);function Sa(){Be.call(this,"c")}R(Sa,Be);var ar={},Cu=null;function Ui(){return Cu=Cu||new J}ar.La="serverreachability";function ku(a){Be.call(this,ar.La,a)}R(ku,Be);function Rs(a){const u=Ui();ie(u,new ku(u))}ar.STAT_EVENT="statevent";function Du(a,u){Be.call(this,ar.STAT_EVENT,a),this.stat=u}R(Du,Be);function Rt(a){const u=Ui();ie(u,new Du(u,a))}ar.Ma="timingevent";function Ou(a,u){Be.call(this,ar.Ma,a),this.size=u}R(Ou,Be);function bs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Ss(){this.g=!0}Ss.prototype.xa=function(){this.g=!1};function A_(a,u,d,g,P,D){a.info(function(){if(a.g)if(D)for(var z="",De=D.split("&"),rt=0;rt<De.length;rt++){var we=De[rt].split("=");if(1<we.length){var ft=we[0];we=we[1];var dt=ft.split("_");z=2<=dt.length&&dt[1]=="type"?z+(ft+"="+we+"&"):z+(ft+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+d+`
`+z})}function R_(a,u,d,g,P,D,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+d+`
`+D+" "+z})}function Nr(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+S_(a,d)+(g?" "+g:"")})}function b_(a,u){a.info(function(){return"TIMEOUT: "+u})}Ss.prototype.info=function(){};function S_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return Or(d)}catch{return u}}var $i={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pa;function Bi(){}R(Bi,Vr),Bi.prototype.g=function(){return new XMLHttpRequest},Bi.prototype.i=function(){return{}},Pa=new Bi;function Cn(a,u,d,g){this.j=a,this.i=u,this.l=d,this.R=g||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nu}function Nu(){this.i=null,this.g="",this.h=!1}var xu={},Ca={};function ka(a,u,d){a.L=1,a.v=zi(ln(u)),a.m=d,a.P=!0,Mu(a,null)}function Mu(a,u){a.F=Date.now(),ji(a),a.A=ln(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Xu(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Nu,a.g=ph(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Je(m(a.Y,a,a.g),a.O)),u=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(ht[0]=P.toString()),P=ht);for(var D=0;D<P.length;D++){var z=U(d,P[D],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Rs(),A_(a.i,a.u,a.A,a.l,a.R,a.m)}Cn.prototype.ca=function(a){a=a.target;const u=this.M;u&&un(a)==3?u.j():this.Y(a)},Cn.prototype.Y=function(a){try{if(a==this.g)e:{const dt=un(this.g);var u=this.g.Ba();const Lr=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||rh(this.g)))){this.J||dt!=4||u==7||(u==8||0>=Lr?Rs(3):Rs(2)),Da(this);var d=this.g.Z();this.X=d;t:if(Lu(this)){var g=rh(this.g);a="";var P=g.length,D=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),Ps(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(D&&u==P-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,R_(this.i,this.u,this.A,this.l,this.R,dt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var De,rt=this.g;if((De=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(De)){var we=De;break t}}we=null}if(d=we)Nr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oa(this,d);else{this.o=!1,this.s=3,Rt(12),cr(this),Ps(this);break e}}if(this.P){d=!0;let Ht;for(;!this.J&&this.C<z.length;)if(Ht=P_(this,z),Ht==Ca){dt==4&&(this.s=4,Rt(14),d=!1),Nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==xu){this.s=4,Rt(15),Nr(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Nr(this.i,this.l,Ht,null),Oa(this,Ht);if(Lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||z.length!=0||this.h.h||(this.s=1,Rt(16),d=!1),this.o=this.o&&d,!d)Nr(this.i,this.l,z,"[Invalid Chunked Response]"),cr(this),Ps(this);else if(0<z.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Fa(ft),ft.M=!0,Rt(11))}}else Nr(this.i,this.l,z,null),Oa(this,z);dt==4&&cr(this),this.o&&!this.J&&(dt==4?uh(this.j,this):(this.o=!1,ji(this)))}else z_(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),cr(this),Ps(this)}}}catch{}finally{}};function Lu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function P_(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?Ca:(d=Number(u.substring(d,g)),isNaN(d)?xu:(g+=1,g+d>u.length?Ca:(u=u.slice(g,g+d),a.C=g+d,u)))}Cn.prototype.cancel=function(){this.J=!0,cr(this)};function ji(a){a.S=Date.now()+a.I,Fu(a,a.I)}function Fu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=bs(m(a.ba,a),u)}function Da(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Cn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(b_(this.i,this.A),this.L!=2&&(Rs(),Rt(17)),cr(this),this.s=2,Ps(this)):Fu(this,this.S-a)};function Ps(a){a.j.G==0||a.J||uh(a.j,a)}function cr(a){Da(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Pn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Oa(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Va(d.h,a))){if(!a.K&&Va(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Xi(d),Gi(d);else break e;La(d),Rt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=bs(m(d.Za,d),6e3));if(1>=Bu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ur(d,11)}else if((a.K||d.g==a)&&Xi(d),!B(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let we=P[u];if(d.T=we[0],we=we[1],d.G==2)if(we[0]=="c"){d.K=we[1],d.ia=we[2];const ft=we[3];ft!=null&&(d.la=ft,d.j.info("VER="+d.la));const dt=we[4];dt!=null&&(d.Aa=dt,d.j.info("SVER="+d.Aa));const Lr=we[5];Lr!=null&&typeof Lr=="number"&&0<Lr&&(g=1.5*Lr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ht=a.g;if(Ht){const Ji=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var D=g.h;D.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Na(D,D.h),D.h=null))}if(g.D){const Ua=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Ua&&(g.ya=Ua,Me(g.I,g.D,Ua))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=a;if(g.qa=dh(g,g.J?g.ia:null,g.W),z.K){ju(g.h,z);var De=z,rt=g.L;rt&&(De.I=rt),De.B&&(Da(De),ji(De)),g.g=z}else ch(g);0<d.i.length&&Qi(d)}else we[0]!="stop"&&we[0]!="close"||ur(d,7);else d.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?ur(d,7):Ma(d):we[0]!="noop"&&d.l&&d.l.ta(we),d.v=0)}}Rs(4)}catch{}}var C_=class{constructor(a,u){this.g=a,this.map=u}};function Uu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $u(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Bu(a){return a.h?1:a.g?a.g.size:0}function Va(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Na(a,u){a.g?a.g.add(u):a.h=u}function ju(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Uu.prototype.cancel=function(){if(this.i=qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return k(a.i)}function k_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,g=0;g<d;g++)u.push(a[g]);return u}u=[],d=0;for(g in a)u[d++]=a[g];return u}function D_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const g in a)u[d++]=g;return u}}}function Hu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=D_(a),g=k_(a),P=g.length,D=0;D<P;D++)u.call(void 0,g[D],d&&d[D],a)}var zu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function O_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var D=a[d].substring(0,g);P=a[d].substring(g+1)}else D=a[d];u(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof lr){this.h=a.h,qi(this,a.j),this.o=a.o,this.g=a.g,Hi(this,a.s),this.l=a.l;var u=a.i,d=new Ds;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Ku(this,d),this.m=a.m}else a&&(u=String(a).match(zu))?(this.h=!1,qi(this,u[1]||"",!0),this.o=Cs(u[2]||""),this.g=Cs(u[3]||"",!0),Hi(this,u[4]),this.l=Cs(u[5]||"",!0),Ku(this,u[6]||"",!0),this.m=Cs(u[7]||"")):(this.h=!1,this.i=new Ds(null,this.h))}lr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(ks(u,Wu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ks(u,Wu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ks(d,d.charAt(0)=="/"?x_:N_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ks(d,L_)),a.join("")};function ln(a){return new lr(a)}function qi(a,u,d){a.j=d?Cs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Hi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Ku(a,u,d){u instanceof Ds?(a.i=u,F_(a.i,a.h)):(d||(u=ks(u,M_)),a.i=new Ds(u,a.h))}function Me(a,u,d){a.i.set(u,d)}function zi(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Cs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ks(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,V_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function V_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wu=/[#\/\?@]/g,N_=/[#\?:]/g,x_=/[#\?]/g,M_=/[#\?@]/g,L_=/#/g;function Ds(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function kn(a){a.g||(a.g=new Map,a.h=0,a.i&&O_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Ds.prototype,t.add=function(a,u){kn(this),this.i=null,a=xr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Gu(a,u){kn(a),u=xr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Qu(a,u){return kn(a),u=xr(a,u),a.g.has(u)}t.forEach=function(a,u){kn(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(u,P,g,this)},this)},this)},t.na=function(){kn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const P=a[g];for(let D=0;D<P.length;D++)d.push(u[g])}return d},t.V=function(a){kn(this);let u=[];if(typeof a=="string")Qu(this,a)&&(u=u.concat(this.g.get(xr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return kn(this),this.i=null,a=xr(this,a),Qu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Xu(a,u,d){Gu(a,u),0<d.length&&(a.i=null,a.g.set(xr(a,u),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const D=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var P=D;z[g]!==""&&(P+="="+encodeURIComponent(String(z[g]))),a.push(P)}}return this.i=a.join("&")};function xr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function F_(a,u){u&&!a.j&&(kn(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(Gu(this,g),Xu(this,P,d))},a)),a.j=u}function U_(a,u){const d=new Ss;if(c.Image){const g=new Image;g.onload=T(Dn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=T(Dn,d,"TestLoadImage: error",!1,u,g),g.onabort=T(Dn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=T(Dn,d,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function $_(a,u){const d=new Ss,g=new AbortController,P=setTimeout(()=>{g.abort(),Dn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?Dn(d,"TestPingServer: ok",!0,u):Dn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Dn(d,"TestPingServer: error",!1,u)})}function Dn(a,u,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function B_(){this.g=new Bt}function j_(a,u,d){const g=d||"";try{Hu(a,function(P,D){let z=P;h(P)&&(z=Or(P)),u.push(g+D+"="+encodeURIComponent(z))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function Os(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Os,Vr),Os.prototype.g=function(){return new Ki(this.l,this.j)},Os.prototype.i=function(a){return function(){return a}}({});function Ki(a,u){J.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ki,J),t=Ki.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Vs(this):Ns(this),this.readyState==3&&Yu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Vs(this))},t.Qa=function(a){this.g&&(this.response=a,Vs(this))},t.ga=function(){this.g&&Vs(this)};function Vs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ns(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ju(a){let u="";return pe(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function xa(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ju(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Me(a,u,d))}function qe(a){J.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(qe,J);var q_=/^https?$/i,H_=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pa.g(),this.v=this.o?Su(this.o):Su(Pa),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(D){Zu(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(H_,u,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nh(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Zu(this,D)}};function Zu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,eh(a),Wi(a)}function eh(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),Wi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wi(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?th(this):this.bb())},t.bb=function(){th(this)};function th(a){if(a.h&&typeof o<"u"&&(!a.v[1]||un(a)!=4||a.Z()!=2)){if(a.u&&un(a)==4)Te(a.Ea,0,a);else if(ie(a,"readystatechange"),un(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=z===0){var P=String(a.D).match(zu)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),g=!q_.test(P?P.toLowerCase():"")}d=g}if(d)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var D=2<un(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",eh(a)}}finally{Wi(a)}}}}function Wi(a,u){if(a.g){nh(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ie(a,"ready");try{d.onreadystatechange=g}catch{}}}function nh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),At(u)}};function rh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function z_(a){const u={};a=(a.g&&2<=un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var d=b(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=u[P]||[];u[P]=D,D.push(d)}A(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function sh(a){this.Aa=0,this.i=[],this.j=new Ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xs("baseRetryDelayMs",5e3,a),this.cb=xs("retryDelaySeedMs",1e4,a),this.Wa=xs("forwardChannelMaxRetries",2,a),this.wa=xs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Uu(a&&a.concurrentRequestLimit),this.Da=new B_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=sh.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,g){Rt(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=dh(this,null,this.W),Qi(this)};function Ma(a){if(ih(a),a.G==3){var u=a.U++,d=ln(a.I);if(Me(d,"SID",a.K),Me(d,"RID",u),Me(d,"TYPE","terminate"),Ms(a,d),u=new Cn(a,a.j,u),u.L=2,u.v=zi(ln(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=ph(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ji(u)}fh(a)}function Gi(a){a.g&&(Fa(a),a.g.cancel(),a.g=null)}function ih(a){Gi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Xi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Qi(a){if(!$u(a.h)&&!a.s){a.s=!0;var u=a.Ga;oe||Xt(),ve||(oe(),ve=!0),It.add(u,a),a.B=0}}function K_(a,u){return Bu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=bs(m(a.Ga,a,u),hh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Cn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=_(D),w(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=ah(this,P,u),d=ln(this.I),Me(d,"RID",a),Me(d,"CVER",22),this.D&&Me(d,"X-HTTP-Session-Id",this.D),Ms(this,d),D&&(this.O?u="headers="+encodeURIComponent(String(Ju(D)))+"&"+u:this.m&&xa(d,this.m,D)),Na(this.h,P),this.Ua&&Me(d,"TYPE","init"),this.P?(Me(d,"$req",u),Me(d,"SID","null"),P.T=!0,ka(P,d,null)):ka(P,d,u),this.G=2}}else this.G==3&&(a?oh(this,a):this.i.length==0||$u(this.h)||oh(this))};function oh(a,u){var d;u?d=u.l:d=a.U++;const g=ln(a.I);Me(g,"SID",a.K),Me(g,"RID",d),Me(g,"AID",a.T),Ms(a,g),a.m&&a.o&&xa(g,a.m,a.o),d=new Cn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=ah(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Na(a.h,d),ka(d,g,u)}function Ms(a,u){a.H&&pe(a.H,function(d,g){Me(u,g,d)}),a.l&&Hu({},function(d,g){Me(u,g,d)})}function ah(a,u,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const z=["count="+d];D==-1?0<d?(D=P[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let De=!0;for(let rt=0;rt<d;rt++){let we=P[rt].g;const ft=P[rt].map;if(we-=D,0>we)D=Math.max(0,P[rt].g-100),De=!1;else try{j_(ft,z,"req"+we+"_")}catch{g&&g(ft)}}if(De){g=z.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,g}function ch(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;oe||Xt(),ve||(oe(),ve=!0),It.add(u,a),a.v=0}}function La(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=bs(m(a.Fa,a),hh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,lh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=bs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),Gi(this),lh(this))};function Fa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function lh(a){a.g=new Cn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ln(a.qa);Me(u,"RID","rpc"),Me(u,"SID",a.K),Me(u,"AID",a.T),Me(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(u,"TO",a.ja),Me(u,"TYPE","xmlhttp"),Ms(a,u),a.m&&a.o&&xa(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=zi(ln(u)),d.m=null,d.P=!0,Mu(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Gi(this),La(this),Rt(19))};function Xi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function uh(a,u){var d=null;if(a.g==u){Xi(a),Fa(a),a.g=null;var g=2}else if(Va(a.h,u))d=u.D,ju(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;g=Ui(),ie(g,new Ou(g,d)),Qi(a)}else ch(a);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&K_(a,u)||g==2&&La(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:ur(a,5);break;case 4:ur(a,10);break;case 3:ur(a,6);break;default:ur(a,2)}}}function hh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function ur(a,u){if(a.j.info("Error code "+u),u==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new lr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||qi(g,"https"),zi(g),P?U_(g.toString(),d):$_(g.toString(),d)}else Rt(2);a.G=0,a.l&&a.l.sa(u),fh(a),ih(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function fh(a){if(a.G=0,a.ka=[],a.l){const u=qu(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function dh(a,u,d){var g=d instanceof lr?ln(d):new lr(d);if(g.g!="")u&&(g.g=u+"."+g.g),Hi(g,g.s);else{var P=c.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var D=new lr(null);g&&qi(D,g),u&&(D.g=u),P&&Hi(D,P),d&&(D.l=d),g=D}return d=a.D,u=a.ya,d&&u&&Me(g,d,u),Me(g,"VER",a.la),Ms(a,g),g}function ph(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new qe(new Os({eb:d})):new qe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mh(){}t=mh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yi(){}Yi.prototype.g=function(a,u){return new xt(a,u)};function xt(a,u){J.call(this),this.g=new sh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Mr(this)}R(xt,J),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Ma(this.g)},xt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Or(a),a=d);u.i.push(new C_(u.Ya++,a)),u.G==3&&Qi(u)},xt.prototype.N=function(){this.g.l=null,delete this.j,Ma(this.g),delete this.g,xt.aa.N.call(this)};function gh(a){ba.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}R(gh,ba);function _h(){Sa.call(this),this.status=1}R(_h,Sa);function Mr(a){this.g=a}R(Mr,mh),Mr.prototype.ua=function(){ie(this.g,"a")},Mr.prototype.ta=function(a){ie(this.g,new gh(a))},Mr.prototype.sa=function(a){ie(this.g,new _h)},Mr.prototype.ra=function(){ie(this.g,"b")},Yi.prototype.createWebChannel=Yi.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Jm=function(){return new Yi},Ym=function(){return Ui()},Xm=ar,Lc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$i.NO_ERROR=0,$i.TIMEOUT=8,$i.HTTP_ERROR=6,Eo=$i,Vu.COMPLETE="complete",Qm=Vu,Pu.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",J.prototype.listen=J.prototype.K,js=Pu,Gm=Os,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,Wm=qe}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});const zf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Sl("@firebase/firestore");function $s(){return Rr.logLevel}function Z(t,...e){if(Rr.logLevel<=_e.DEBUG){const n=e.map(Bl);Rr.debug(`Firestore (${Es}): ${t}`,...n)}}function In(t,...e){if(Rr.logLevel<=_e.ERROR){const n=e.map(Bl);Rr.error(`Firestore (${Es}): ${t}`,...n)}}function cs(t,...e){if(Rr.logLevel<=_e.WARN){const n=e.map(Bl);Rr.warn(`Firestore (${Es}): ${t}`,...n)}}function Bl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function Ne(t,e){t||ce()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class VA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NA{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new Zm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new mt(e)}}class xA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new LA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=UA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function ls(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ye(0,0))}static max(){return new ue(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(),r===void 0?r=e.length-n:r>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends pi{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const $A=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends pi{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return $A.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Y(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Le.fromString(e))}static fromName(e){return new ne(Le.fromString(e).popFirst(5))}static empty(){return new ne(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Le(e.slice()))}}function BA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Jn(s,ne.empty(),e)}function jA(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(ue.min(),ne.empty(),-1)}static max(){return new Jn(ue.max(),ne.empty(),-1)}}function qA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==HA)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function KA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ki(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class jl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jl.oe=-1;function fa(t){return t==null}function Uo(t){return t===0&&1/t==-1/0}function WA(t){return typeof t=="number"&&Number.isInteger(t)&&!Uo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??st.RED,this.left=s??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new st(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return st.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,n,r,s,i){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wf(this.data.getIterator())}getIteratorFrom(e){return new Wf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Wf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new $t([])}unionWith(e){let n=new at(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ng extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ng("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const GA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=GA.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hl(t){const e=t.mapValue.fields.__previous_value__;return ql(e)?Hl(e):e}function mi(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ql(t)?4:YA(t)?9007199254740991:XA(t)?10:11:ce()}function cn(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mi(t).isEqual(mi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Zn(s.timestampValue),c=Zn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return br(s.bytesValue).isEqual(br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),c=ze(i.doubleValue);return o===c?Uo(o)===Uo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ls(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Kf(o)!==Kf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!cn(o[l],c[l])))return!1;return!0}(t,e);default:return ce()}}function _i(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function us(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Gf(t.timestampValue,e.timestampValue);case 4:return Gf(mi(t),mi(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const c=br(i),l=br(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Ie(c[h],l[h]);if(f!==0)return f}return Ie(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ie(ze(i.latitude),ze(o.latitude));return c!==0?c:Ie(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Qf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},m=o.fields||{},T=(c=p.value)===null||c===void 0?void 0:c.arrayValue,R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,k=Ie(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Qf(T,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===co.mapValue&&o===co.mapValue)return 0;if(i===co.mapValue)return 1;if(o===co.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Ie(l[p],f[p]);if(m!==0)return m;const T=us(c[l[p]],h[f[p]]);if(T!==0)return T}return Ie(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ce()}}function Gf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Zn(t),r=Zn(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function Qf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=us(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function hs(t){return Fc(t)}function Fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fc(n.fields[o])}`;return s+"}"}(t.mapValue):ce()}function Xf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uc(t){return!!t&&"integerValue"in t}function zl(t){return!!t&&"arrayValue"in t}function Yf(t){return!!t&&"nullValue"in t}function Jf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function To(t){return!!t&&"mapValue"in t}function XA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!To(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ei(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());To(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];To(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(ei(this.value))}}function rg(t){const e=[];return Cr(t.fields,(n,r)=>{const s=new ot([n]);if(To(r)){const i=rg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new _t(e,0,ue.min(),ue.min(),ue.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,ue.min(),ue.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ue.min(),ue.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $o{constructor(e,n){this.position=e,this.inclusive=n}}function Zf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=us(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ed(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Bo{constructor(e,n="asc"){this.field=e,this.dir=n}}function JA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sg{}class Ge extends sg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eR(e,n,r):n==="array-contains"?new rR(e,r):n==="in"?new sR(e,r):n==="not-in"?new iR(e,r):n==="array-contains-any"?new oR(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tR(e,r):new nR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(us(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.matchesComparison(us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends sg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Qt(e,n)}matches(e){return ig(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ig(t){return t.op==="and"}function og(t){return ZA(t)&&ig(t)}function ZA(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function $c(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(og(t))return t.filters.map(e=>$c(e)).join(",");{const e=t.filters.map(n=>$c(n)).join(",");return`${t.op}(${e})`}}function ag(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof Qt?function(r,s){return s instanceof Qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&ag(o,s.filters[c]),!0):!1}(t,e):void ce()}function cg(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${hs(n.value)}`}(t):t instanceof Qt?function(n){return n.op.toString()+" {"+n.getFilters().map(cg).join(" ,")+"}"}(t):"Filter"}class eR extends Ge{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class tR extends Ge{constructor(e,n){super(e,"in",n),this.keys=lg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nR extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=lg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class rR extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zl(n)&&_i(n.arrayValue,this.value)}}class sR extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_i(this.value.arrayValue,n)}}class iR extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_i(this.value.arrayValue,n)}}class oR extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}/**
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
 */class aR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function td(t,e=null,n=[],r=[],s=null,i=null,o=null){return new aR(t,e,n,r,s,i,o)}function Kl(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$c(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),fa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>hs(r)).join(",")),e.ue=n}return e.ue}function Wl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ag(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ed(t.startAt,e.startAt)&&ed(t.endAt,e.endAt)}function Bc(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cR(t,e,n,r,s,i,o,c){return new Di(t,e,n,r,s,i,o,c)}function Gl(t){return new Di(t)}function nd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ug(t){return t.collectionGroup!==null}function ti(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new at(ot.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Bo(i,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new Bo(ot.keyField(),r))}return e.ce}function nn(t){const e=he(t);return e.le||(e.le=lR(e,ti(t))),e.le}function lR(t,e){if(t.limitType==="F")return td(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Bo(s.field,i)});const n=t.endAt?new $o(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $o(t.startAt.position,t.startAt.inclusive):null;return td(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jc(t,e){const n=t.filters.concat([e]);return new Di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qc(t,e,n){return new Di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function da(t,e){return Wl(nn(t),nn(e))&&t.limitType===e.limitType}function hg(t){return`${Kl(nn(t))}|lt:${t.limitType}`}function Hr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>cg(s)).join(", ")}]`),fa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>hs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>hs(s)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function pa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Zf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,ti(r),s)||r.endAt&&!function(o,c,l){const h=Zf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,ti(r),s))}(t,e)}function uR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fg(t){return(e,n)=>{let r=!1;for(const s of ti(t)){const i=hR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function hR(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?us(l,h):ce()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return tg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new je(ne.comparator);function An(){return fR}const dg=new je(ne.comparator);function qs(...t){let e=dg;for(const n of t)e=e.insert(n.key,n);return e}function pg(t){let e=dg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gr(){return ni()}function mg(){return ni()}function ni(){return new Ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const dR=new je(ne.comparator),pR=new at(ne.comparator);function ge(...t){let e=pR;for(const n of t)e=e.add(n);return e}const mR=new at(Ie);function gR(){return mR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uo(e)?"-0":e}}function gg(t){return{integerValue:""+t}}function _R(t,e){return WA(e)?gg(e):Ql(t,e)}/**
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
 */class ma{constructor(){this._=void 0}}function yR(t,e,n){return t instanceof jo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ql(i)&&(i=Hl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof yi?yg(t,e):t instanceof vi?vg(t,e):function(s,i){const o=_g(s,i),c=rd(o)+rd(s.Pe);return Uc(o)&&Uc(s.Pe)?gg(c):Ql(s.serializer,c)}(t,e)}function vR(t,e,n){return t instanceof yi?yg(t,e):t instanceof vi?vg(t,e):n}function _g(t,e){return t instanceof qo?function(r){return Uc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class jo extends ma{}class yi extends ma{constructor(e){super(),this.elements=e}}function yg(t,e){const n=Eg(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class vi extends ma{constructor(e){super(),this.elements=e}}function vg(t,e){let n=Eg(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class qo extends ma{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function rd(t){return ze(t.integerValue||t.doubleValue)}function Eg(t){return zl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ER(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof yi&&s instanceof yi||r instanceof vi&&s instanceof vi?ls(r.elements,s.elements,cn):r instanceof qo&&s instanceof qo?cn(r.Pe,s.Pe):r instanceof jo&&s instanceof jo}(t.transform,e.transform)}class TR{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ga{}function Tg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xl(t.key,Gt.none()):new Oi(t.key,t.data,Gt.none());{const n=t.data,r=kt.empty();let s=new at(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new or(t.key,r,new $t(s.toArray()),Gt.none())}}function wR(t,e,n){t instanceof Oi?function(s,i,o){const c=s.value.clone(),l=id(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof or?function(s,i,o){if(!wo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=id(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(wg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ri(t,e,n,r){return t instanceof Oi?function(i,o,c,l){if(!wo(i.precondition,o))return c;const h=i.value.clone(),f=od(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof or?function(i,o,c,l){if(!wo(i.precondition,o))return c;const h=od(i.fieldTransforms,l,o),f=o.data;return f.setAll(wg(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return wo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function IR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=_g(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function sd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ls(r,s,(i,o)=>ER(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oi extends ga{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class or extends ga{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function id(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,vR(o,c,n[s]))}return r}function od(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,yR(i,o,e))}return r}class Xl extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AR extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Tg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&ls(this.mutations,e.mutations,(n,r)=>sd(n,r))&&ls(this.baseMutations,e.baseMutations,(n,r)=>sd(n,r))}}class Yl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return dR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yl(e,n,r,s)}}/**
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
 */class bR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class SR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,Ee;function PR(t){switch(t){default:return ce();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Ig(t){if(t===void 0)return In("GRPC error has no .code"),x.UNKNOWN;switch(t){case We.OK:return x.OK;case We.CANCELLED:return x.CANCELLED;case We.UNKNOWN:return x.UNKNOWN;case We.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case We.INTERNAL:return x.INTERNAL;case We.UNAVAILABLE:return x.UNAVAILABLE;case We.UNAUTHENTICATED:return x.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case We.NOT_FOUND:return x.NOT_FOUND;case We.ALREADY_EXISTS:return x.ALREADY_EXISTS;case We.PERMISSION_DENIED:return x.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case We.ABORTED:return x.ABORTED;case We.OUT_OF_RANGE:return x.OUT_OF_RANGE;case We.UNIMPLEMENTED:return x.UNIMPLEMENTED;case We.DATA_LOSS:return x.DATA_LOSS;default:return ce()}}(Ee=We||(We={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CR(){return new TextEncoder}/**
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
 */const kR=new Tr([4294967295,4294967295],0);function ad(t){const e=CR().encode(t),n=new Km;return n.update(e),new Uint8Array(n.digest())}function cd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([s,i],0)]}class Jl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hs(`Invalid padding: ${n}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Tr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Tr.fromNumber(r)));return s.compare(kR)===1&&(s=new Tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ad(e),[r,s]=cd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Jl(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=ad(e),[r,s]=cd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Vi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _a(ue.min(),s,new je(Ie),An(),ge())}}class Vi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vi(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Ag{constructor(e,n){this.targetId=e,this.me=n}}class Rg{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ld{constructor(){this.fe=0,this.ge=hd(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new Vi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=hd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class DR{constructor(e){this.Le=e,this.Be=new Map,this.ke=An(),this.qe=ud(),this.Qe=new je(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Bc(i))if(r===0){const o=new ne(i.path);this.Ue(n,o,_t.newNoDocument(o,ue.min()))}else Ne(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=br(r).toUint8Array()}catch(l){if(l instanceof ng)return cs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Jl(o,s,i)}catch(l){return cs(l instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Bc(c.target)){const l=new ne(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,_t.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new _a(e,n,this.Qe,this.ke,r);return this.ke=An(),this.qe=ud(),this.Qe=new je(Ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ld,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ld),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ud(){return new je(ne.comparator)}function hd(){return new je(ne.comparator)}const OR={asc:"ASCENDING",desc:"DESCENDING"},VR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NR={and:"AND",or:"OR"};class xR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hc(t,e){return t.useProto3Json||fa(e)?e:{value:e}}function Ho(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MR(t,e){return Ho(t,e.toTimestamp())}function rn(t){return Ne(!!t),ue.fromTimestamp(function(n){const r=Zn(n);return new Ye(r.seconds,r.nanos)}(t))}function Zl(t,e){return zc(t,e).canonicalString()}function zc(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Sg(t){const e=Le.fromString(t);return Ne(Og(e)),e}function Kc(t,e){return Zl(t.databaseId,e.path)}function lc(t,e){const n=Sg(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(Cg(n))}function Pg(t,e){return Zl(t.databaseId,e)}function LR(t){const e=Sg(t);return e.length===4?Le.emptyPath():Cg(e)}function Wc(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Cg(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fd(t,e,n){return{name:Kc(t,e),fields:n.value.mapValue.fields}}function FR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ne(f===void 0||typeof f=="string"),lt.fromBase64String(f||"")):(Ne(f===void 0||f instanceof Buffer||f instanceof Uint8Array),lt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?x.UNKNOWN:Ig(h.code);return new Y(f,h.message||"")}(o);n=new Rg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=lc(t,r.document.name),i=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):ue.min(),c=new kt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Io(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=lc(t,r.document),i=r.readTime?rn(r.readTime):ue.min(),o=_t.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Io([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=lc(t,r.document),i=r.removedTargetIds||[];n=new Io([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new SR(s,i),c=r.targetId;n=new Ag(c,o)}}return n}function UR(t,e){let n;if(e instanceof Oi)n={update:fd(t,e.key,e.value)};else if(e instanceof Xl)n={delete:Kc(t,e.key)};else if(e instanceof or)n={update:fd(t,e.key,e.data),updateMask:GR(e.fieldMask)};else{if(!(e instanceof AR))return ce();n={verify:Kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof jo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof yi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof qo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ce()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:MR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(t,e.precondition)),n}function $R(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?rn(s.updateTime):rn(i);return o.isEqual(ue.min())&&(o=rn(i)),new TR(o,s.transformResults||[])}(n,e))):[]}function BR(t,e){return{documents:[Pg(t,e.path)]}}function jR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Pg(t,s);const i=function(h){if(h.length!==0)return Dg(Qt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:zr(m.field),direction:zR(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Hc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function qR(t){let e=LR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=kg(p);return m instanceof Qt&&og(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Bo(Kr(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,fa(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,T=p.values||[];return new $o(T,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,T=p.values||[];return new $o(T,m)}(n.endAt)),cR(e,s,o,i,c,"F",l,h)}function HR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Kr(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Kr(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Kr(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Kr(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(Kr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qt.create(n.compositeFilter.filters.map(r=>kg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(n.compositeFilter.op))}(t):ce()}function zR(t){return OR[t]}function KR(t){return VR[t]}function WR(t){return NR[t]}function zr(t){return{fieldPath:t.canonicalString()}}function Kr(t){return ot.fromServerFormat(t.fieldPath)}function Dg(t){return t instanceof Ge?function(n){if(n.op==="=="){if(Jf(n.value))return{unaryFilter:{field:zr(n.field),op:"IS_NAN"}};if(Yf(n.value))return{unaryFilter:{field:zr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Jf(n.value))return{unaryFilter:{field:zr(n.field),op:"IS_NOT_NAN"}};if(Yf(n.value))return{unaryFilter:{field:zr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zr(n.field),op:KR(n.op),value:n.value}}}(t):t instanceof Qt?function(n){const r=n.getFilters().map(s=>Dg(s));return r.length===1?r[0]:{compositeFilter:{op:WR(n.op),filters:r}}}(t):ce()}function GR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Og(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,s,i=ue.min(),o=ue.min(),c=lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.ct=e}}function XR(t){const e=qR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qc(e,e.limit,"L"):e}/**
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
 */class YR{constructor(){this.un=new JR}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Jn.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class JR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new fs(0)}static kn(){return new fs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.changes=new Ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ri(r.mutation,s,$t.empty(),Ye.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=gr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=An();const o=ni(),c=function(){return ni()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof or)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ri(f.mutation,h,f.mutation.getFieldMask(),Ye.now())):o.set(h.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new eb(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ni();let s=new je((o,c)=>o-c),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||$t.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||ge()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=mg();f.forEach(m=>{if(!i.has(m)){const T=Tg(n.get(m),r.get(m));T!==null&&p.set(m,T),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ug(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(gr());let c=-1,l=i;return o.next(h=>L.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ge())).next(f=>({batchId:c,changes:pg(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const h=function(p,m){return new Di(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,_t.newInvalidDocument(f)))});let c=qs();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ri(f.mutation,h,$t.empty(),Ye.now()),pa(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:XR(s.bundledQuery),readTime:rn(s.readTime)}}(n)),L.resolve()}}/**
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
 */class rb{constructor(){this.overlays=new je(ne.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=gr(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=gr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=gr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return L.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bR(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class sb{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this.Tr=new at(Ze.Er),this.dr=new at(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ne(new Le([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ne(new Le([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ne.comparator(e.key,n.key)||Ie(e.wr,n.wr)}static Ar(e,n){return Ie(e.wr,n.wr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(Ze.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new RR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Ie);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new ne(i),0);let c=new at(Ie);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),L.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ze(n,0),s=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.Mr=e,this.docs=function(){return new je(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=An();const o=n.path,c=new ne(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||qA(jA(f),r)<=0||(s.has(f.key)||pa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ab(this)}getSize(e){return L.resolve(this.size)}}class ab extends ZR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.persistence=e,this.Nr=new Ts(n=>Kl(n),Wl),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new eu,this.targetCount=0,this.kr=fs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new fs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new jl(0),this.Kr=!1,this.Kr=!0,this.$r=new sb,this.referenceDelegate=e(this),this.Ur=new cb(this),this.indexManager=new YR,this.remoteDocumentCache=function(s){return new ob(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new QR(n),this.Gr=new nb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new ib(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new ub(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ub extends zA{constructor(e){super(),this.currentSequenceNumber=e}}class tu{constructor(e){this.persistence=e,this.Jr=new eu,this.Yr=null}static Zr(e){return new tu(e)}get Xr(){if(this.Yr)return this.Yr;throw ce()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const s=ne.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nu(e,n.fromCache,r,s)}}/**
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
 */class hb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class fb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return rw()?8:KA(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new hb;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?($s()<=_e.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Hr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):($s()<=_e.DEBUG&&Z("QueryEngine","Query:",Hr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?($s()<=_e.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Hr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):L.resolve())}Yi(e,n){if(nd(n))return L.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qc(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,o,l.readTime)?this.Yi(e,qc(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return nd(n)||s.isEqual(ue.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?L.resolve(null):($s()<=_e.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hr(n)),this.rs(e,o,n,BA(s,-1)).next(c=>c))})}ts(e,n){let r=new at(fg(e));return n.forEach((s,i)=>{pa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return $s()<=_e.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Hr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Jn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new je(Ie),this._s=new Ts(i=>Kl(i),Wl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function pb(t,e,n,r){return new db(t,e,n,r)}async function Vg(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ge();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function mb(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,m=p.keys();let T=L.resolve();return m.forEach(R=>{T=T.next(()=>f.getEntry(l,R)).next(k=>{const O=h.docVersions.get(R);Ne(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ge();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ng(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function gb(t,e){const n=he(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let T=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(lt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),s=s.insert(p,T),function(k,O,V){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(m,T,f)&&c.push(n.Ur.updateTargetData(i,T))});let l=An(),h=ge();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(_b(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(ue.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return L.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function _b(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=An();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function yb(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vb(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Gc(t,e,n){const r=he(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ki(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function dd(t,e,n){const r=he(t);let s=ue.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=he(l),m=p._s.get(f);return m!==void 0?L.resolve(p.os.get(m)):p.Ur.getTargetData(h,f)}(r,o,nn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:ge())).next(c=>(Eb(r,uR(e),c),{documents:c,Ts:i})))}function Eb(t,e,n){let r=t.us.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class pd{constructor(){this.activeTargetIds=gR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tb{constructor(){this.so=new pd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new pd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wb{_o(e){}shutdown(){}}/**
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
 */class md{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lo=null;function uc(){return lo===null?lo=function(){return 268435456+Math.round(2147483648*Math.random())}():lo++,"0x"+lo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Rb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=uc(),l=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(f=>(Z("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw cs("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Es}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=Ib[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=uc();return new Promise((o,c)=>{const l=new Wm;l.setWithCredentials(!0),l.listenOnce(Qm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Eo.NO_ERROR:const f=l.getResponseJson();Z(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Eo.TIMEOUT:Z(pt,`RPC '${e}' ${i} timed out`),c(new Y(x.DEADLINE_EXCEEDED,"Request time out"));break;case Eo.HTTP_ERROR:const p=l.getStatus();if(Z(pt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const R=function(O){const V=O.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(V)>=0?V:x.UNKNOWN}(T.status);c(new Y(R,T.message))}else c(new Y(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Y(x.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{Z(pt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Z(pt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=uc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Jm(),c=Ym(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Gm({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(pt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let m=!1,T=!1;const R=new Ab({Io:O=>{T?Z(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(Z(pt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(pt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),k=(O,V,B)=>{O.listen(V,G=>{try{B(G)}catch(j){setTimeout(()=>{throw j},0)}})};return k(p,js.EventType.OPEN,()=>{T||(Z(pt,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),k(p,js.EventType.CLOSE,()=>{T||(T=!0,Z(pt,`RPC '${e}' stream ${s} transport closed`),R.So())}),k(p,js.EventType.ERROR,O=>{T||(T=!0,cs(pt,`RPC '${e}' stream ${s} transport errored:`,O),R.So(new Y(x.UNAVAILABLE,"The operation could not be completed")))}),k(p,js.EventType.MESSAGE,O=>{var V;if(!T){const B=O.data[0];Ne(!!B);const G=B,j=G.error||((V=G[0])===null||V===void 0?void 0:V.error);if(j){Z(pt,`RPC '${e}' stream ${s} received error:`,j);const re=j.status;let pe=function(y){const w=We[y];if(w!==void 0)return Ig(w)}(re),A=j.message;pe===void 0&&(pe=x.INTERNAL,A="Unknown error status: "+re+" with message "+j.message),T=!0,R.So(new Y(pe,A)),p.close()}else Z(pt,`RPC '${e}' stream ${s} received:`,B),R.bo(B)}}),k(c,Xm.STAT_EVENT,O=>{O.stat===Lc.PROXY?Z(pt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Lc.NOPROXY&&Z(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function hc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){return new xR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new xg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Y(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bb extends Mg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=FR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?rn(o.readTime):ue.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Wc(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Bc(l)?{documents:BR(i,l)}:{query:jR(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=bg(i,o.resumeToken);const h=Hc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=Ho(i,o.snapshotVersion.toTimestamp());const h=Hc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=HR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Wc(this.serializer),n.removeTarget=e,this.a_(n)}}class Sb extends Mg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=$R(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Wc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Y(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,zc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(x.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,zc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(x.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Cb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(In(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{kr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=he(l);h.L_.add(4),await Ni(h),h.q_.set("Unknown"),h.L_.delete(4),await va(h)}(this))})}),this.q_=new Cb(r,s)}}async function va(t){if(kr(t))for(const e of t.B_)await e(!0)}async function Ni(t){for(const e of t.B_)await e(!1)}function Lg(t,e){const n=he(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ou(n)?iu(n):ws(n).r_()&&su(n,e))}function ru(t,e){const n=he(t),r=ws(n);n.N_.delete(e),r.r_()&&Fg(n,e),n.N_.size===0&&(r.r_()?r.o_():kr(n)&&n.q_.set("Unknown"))}function su(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).A_(e)}function Fg(t,e){t.Q_.xe(e),ws(t).R_(e)}function iu(t){t.Q_=new DR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.q_.v_()}function ou(t){return kr(t)&&!ws(t).n_()&&t.N_.size>0}function kr(t){return he(t).L_.size===0}function Ug(t){t.Q_=void 0}async function Db(t){t.q_.set("Online")}async function Ob(t){t.N_.forEach((e,n)=>{su(t,e)})}async function Vb(t,e){Ug(t),ou(t)?(t.q_.M_(e),iu(t)):t.q_.set("Unknown")}async function Nb(t,e,n){if(t.q_.set("Online"),e instanceof Rg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zo(t,r)}else if(e instanceof Io?t.Q_.Ke(e):e instanceof Ag?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ue.min()))try{const r=await Ng(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),Fg(i,l);const p=new qn(f.target,l,h,f.sequenceNumber);su(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await zo(t,r)}}async function zo(t,e,n){if(!ki(e))throw e;t.L_.add(1),await Ni(t),t.q_.set("Offline"),n||(n=()=>Ng(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await va(t)})}function $g(t,e){return e().catch(n=>zo(t,n,e))}async function Ea(t){const e=he(t),n=er(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;xb(e);)try{const s=await yb(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Mb(e,s)}catch(s){await zo(e,s)}Bg(e)&&jg(e)}function xb(t){return kr(t)&&t.O_.length<10}function Mb(t,e){t.O_.push(e);const n=er(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Bg(t){return kr(t)&&!er(t).n_()&&t.O_.length>0}function jg(t){er(t).start()}async function Lb(t){er(t).p_()}async function Fb(t){const e=er(t);for(const n of t.O_)e.m_(n.mutations)}async function Ub(t,e,n){const r=t.O_.shift(),s=Yl.from(r,e,n);await $g(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ea(t)}async function $b(t,e){e&&er(t).V_&&await async function(r,s){if(function(o){return PR(o)&&o!==x.ABORTED}(s.code)){const i=r.O_.shift();er(r).s_(),await $g(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ea(r)}}(t,e),Bg(t)&&jg(t)}async function gd(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=kr(n);n.L_.add(3),await Ni(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await va(n)}async function Bb(t,e){const n=he(t);e?(n.L_.delete(2),await va(n)):e||(n.L_.add(2),await Ni(n),n.q_.set("Unknown"))}function ws(t){return t.K_||(t.K_=function(n,r,s){const i=he(n);return i.w_(),new bb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:Db.bind(null,t),Ro:Ob.bind(null,t),mo:Vb.bind(null,t),d_:Nb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ou(t)?iu(t):t.q_.set("Unknown")):(await t.K_.stop(),Ug(t))})),t.K_}function er(t){return t.U_||(t.U_=function(n,r,s){const i=he(n);return i.w_(),new Sb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Lb.bind(null,t),mo:$b.bind(null,t),f_:Fb.bind(null,t),g_:Ub.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ea(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new au(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cu(t,e){if(In("AsyncQueue",`${e}: ${t}`),ki(t))return new Y(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.W_=new je(ne.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ce():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ds{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ds(e,n,ts.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class qb{constructor(){this.queries=yd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=yd(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new Y(x.ABORTED,"Firestore shutting down"))}}function yd(){return new Ts(t=>hg(t),da)}async function qg(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new jb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=cu(o,`Initialization of query '${Hr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&lu(n)}async function Hg(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Hb(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&lu(n)}function zb(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function lu(t){t.Y_.forEach(e=>{e.next()})}var Qc,vd;(vd=Qc||(Qc={})).ea="default",vd.Cache="cache";class zg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Qc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.key=e}}class Wg{constructor(e){this.key=e}}class Kb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=fg(e),this.Ra=new ts(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new _d,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),T=pa(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let O=!1;m&&T?m.data.isEqual(T.data)?R!==k&&(r.track({type:3,doc:T}),O=!0):this.ga(m,T)||(r.track({type:2,doc:T}),O=!0,(l&&this.Aa(T,l)>0||h&&this.Aa(T,h)<0)&&(c=!0)):!m&&T?(r.track({type:0,doc:T}),O=!0):m&&!T&&(r.track({type:1,doc:m}),O=!0,(l||h)&&(c=!0)),O&&(T?(o=o.add(T),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(T,R){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return k(T)-k(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new ds(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new _d,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Wg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Kg(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ds.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Wb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Gb{constructor(e){this.key=e,this.va=!1}}class Qb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ts(c=>hg(c),da),this.Ma=new Map,this.xa=new Set,this.Oa=new je(ne.comparator),this.Na=new Map,this.La=new eu,this.Ba={},this.ka=new Map,this.qa=fs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Xb(t,e,n=!0){const r=Zg(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Gg(r,e,n,!0),s}async function Yb(t,e){const n=Zg(t);await Gg(n,e,!0,!1)}async function Gg(t,e,n,r){const s=await vb(t.localStore,nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await Jb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Lg(t.remoteStore,s),c}async function Jb(t,e,n,r,s){t.Ka=(p,m,T)=>async function(k,O,V,B){let G=O.view.ma(V);G.ns&&(G=await dd(k.localStore,O.query,!1).then(({documents:A})=>O.view.ma(A,G)));const j=B&&B.targetChanges.get(O.targetId),re=B&&B.targetMismatches.get(O.targetId)!=null,pe=O.view.applyChanges(G,k.isPrimaryClient,j,re);return Td(k,O.targetId,pe.wa),pe.snapshot}(t,p,m,T);const i=await dd(t.localStore,e,!0),o=new Kb(e,i.Ts),c=o.ma(i.documents),l=Vi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Td(t,n,h.wa);const f=new Wb(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function Zb(t,e,n){const r=he(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!da(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Gc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ru(r.remoteStore,s.targetId),Xc(r,s.targetId)}).catch(Ci)):(Xc(r,s.targetId),await Gc(r.localStore,s.targetId,!0))}async function eS(t,e){const n=he(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ru(n.remoteStore,r.targetId))}async function tS(t,e,n){const r=cS(t);try{const s=await function(o,c){const l=he(o),h=Ye.now(),f=c.reduce((T,R)=>T.add(R.key),ge());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=An(),k=ge();return l.cs.getEntries(T,f).next(O=>{R=O,R.forEach((V,B)=>{B.isValidDocument()||(k=k.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,R)).next(O=>{p=O;const V=[];for(const B of c){const G=IR(B,p.get(B.key).overlayedDocument);G!=null&&V.push(new or(B.key,G,rg(G.value.mapValue),Gt.exists(!0)))}return l.mutationQueue.addMutationBatch(T,h,V,c)}).next(O=>{m=O;const V=O.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(T,O.batchId,V)})}).then(()=>({batchId:m.batchId,changes:pg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new je(Ie)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await xi(r,s.changes),await Ea(r.remoteStore)}catch(s){const i=cu(s,"Failed to persist write");n.reject(i)}}async function Qg(t,e){const n=he(t);try{const r=await gb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ne(o.va):s.removedDocuments.size>0&&(Ne(o.va),o.va=!1))}),await xi(n,r,e)}catch(r){await Ci(r)}}function Ed(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=he(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(c)&&(h=!0)}),h&&lu(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nS(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new je(ne.comparator);o=o.insert(i,_t.newNoDocument(i,ue.min()));const c=ge().add(i),l=new _a(ue.min(),new Map,new je(Ie),o,c);await Qg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),uu(r)}else await Gc(r.localStore,e,!1).then(()=>Xc(r,e,n)).catch(Ci)}async function rS(t,e){const n=he(t),r=e.batch.batchId;try{const s=await mb(n.localStore,e);Yg(n,r,null),Xg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xi(n,s)}catch(s){await Ci(s)}}async function sS(t,e,n){const r=he(t);try{const s=await function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ne(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Yg(r,e,n),Xg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xi(r,s)}catch(s){await Ci(s)}}function Xg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Yg(t,e,n){const r=he(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Xc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Jg(t,r)})}function Jg(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(ru(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),uu(t))}function Td(t,e,n){for(const r of n)r instanceof Kg?(t.La.addReference(r.key,e),iS(t,r)):r instanceof Wg?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Jg(t,r.key)):ce()}function iS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),uu(t))}function uu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ne(Le.fromString(e)),r=t.qa.next();t.Na.set(r,new Gb(n)),t.Oa=t.Oa.insert(n,r),Lg(t.remoteStore,new qn(nn(Gl(n.path)),r,"TargetPurposeLimboResolution",jl.oe))}}async function xi(t,e,n){const r=he(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=nu.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const f=he(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,m=>L.forEach(m.$i,T=>f.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>L.forEach(m.Ui,T=>f.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!ki(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const T=f.os.get(m),R=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(m,k)}}}(r.localStore,i))}async function oS(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await Vg(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new Y(x.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xi(n,r.hs)}}function aS(t,e){const n=he(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function Zg(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nS.bind(null,e),e.Ca.d_=Hb.bind(null,e.eventManager),e.Ca.$a=zb.bind(null,e.eventManager),e}function cS(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sS.bind(null,e),e}class wd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ya(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return pb(this.persistence,new fb,e.initialUser,this.serializer)}createPersistence(e){return new lb(tu.Zr,this.serializer)}createSharedClientState(e){return new Tb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ed(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oS.bind(null,this.syncEngine),await Bb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qb}()}createDatastore(e){const n=ya(e.databaseInfo.databaseId),r=function(i){return new Rb(i)}(e.databaseInfo);return function(i,o,c,l){return new Pb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new kb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Ed(this.syncEngine,n,0),function(){return md.D()?new md:new wb}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new Qb(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ni(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class e_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=eg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{Z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(Z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fc(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Vg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Id(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fS(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>gd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>gd(e.remoteStore,s)),t._onlineComponents=e}function hS(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function fS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await fc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hS(n))throw n;cs("Error using user provided cache. Falling back to memory cache: "+n),await fc(t,new wd)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await fc(t,new wd);return t._offlineComponents}async function t_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Id(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Id(t,new lS))),t._onlineComponents}function dS(t){return t_(t).then(e=>e.syncEngine)}async function Yc(t){const e=await t_(t),n=e.eventManager;return n.onListen=Xb.bind(null,e.syncEngine),n.onUnlisten=Zb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Yb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eS.bind(null,e.syncEngine),n}function pS(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new e_({next:m=>{o.enqueueAndForget(()=>Hg(i,p)),m.fromCache&&l.source==="server"?h.reject(new Y(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new zg(c,f,{includeMetadataChanges:!0,_a:!0});return qg(i,p)}(await Yc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function n_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t,e,n){if(!n)throw new Y(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mS(t,e,n,r){if(e===!0&&r===!0)throw new Y(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rd(t){if(!ne.isDocumentKey(t))throw new Y(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bd(t){if(ne.isDocumentKey(t))throw new Y(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ta(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ta(t);throw new Y(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=n_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new OA;switch(r.type){case"firstParty":return new MA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ad.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Ad.delete(n),r.terminate())}(this),Promise.resolve()}}function gS(t,e,n,r={}){var s;const i=(t=sn(t,wa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=mt.MOCK_USER;else{c=XT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Y(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(h)}t._authCredentials=new VA(new Zm(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dr(this.firestore,e,this._query)}}class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Qn extends Dr{constructor(e,n,r){super(e,n,Gl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new ne(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function s_(t,e,...n){if(t=Tt(t),r_("collection","path",e),t instanceof wa){const r=Le.fromString(e,...n);return bd(r),new Qn(t,null,r)}{if(!(t instanceof Dt||t instanceof Qn))throw new Y(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return bd(r),new Qn(t.firestore,null,r)}}function Mi(t,e,...n){if(t=Tt(t),arguments.length===1&&(e=eg.newId()),r_("doc","path",e),t instanceof wa){const r=Le.fromString(e,...n);return Rd(r),new Dt(t,null,new ne(r))}{if(!(t instanceof Dt||t instanceof Qn))throw new Y(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Rd(r),new Dt(t.firestore,t instanceof Qn?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new xg(this,"async_queue_retry"),this.Eu=()=>{const n=hc();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=hc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new Gn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ki(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw In("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=au.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&ce()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function Pd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Pr extends wa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new _S}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||i_(this),this._firestoreClient.terminate()}}function yS(t,e){const n=typeof t=="object"?t:fm(),r=typeof t=="string"?t:"(default)",s=Cl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=GT("firestore");i&&gS(s,...i)}return s}function hu(t){return t._firestoreClient||i_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function i_(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new QA(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,n_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new uS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ps(lt.fromBase64String(e))}catch(n){throw new Y(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ps(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */class pu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=/^__.*__$/;class ES{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new or(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oi(e,this.data,n,this.fieldTransforms)}}class o_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function a_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class mu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new mu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Ko(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(a_(this.wu)&&vS.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class TS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ya(e)}Nu(e,n,r,s=!1){return new mu({wu:e,methodName:n,Ou:r,path:ot.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gu(t){const e=t._freezeSettings(),n=ya(t._databaseId);return new TS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wS(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);_u("Data must be an object, but it was:",o,r);const c=c_(r,o);let l,h;if(i.merge)l=new $t(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Jc(e,p,n);if(!o.contains(m))throw new Y(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);u_(f,m)||f.push(m)}l=new $t(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new ES(new kt(c),l,h)}class Aa extends fu{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Aa}}function IS(t,e,n,r){const s=t.Nu(1,e,n);_u("Data must be an object, but it was:",s,r);const i=[],o=kt.empty();Cr(r,(l,h)=>{const f=yu(e,l,n);h=Tt(h);const p=s.Cu(f);if(h instanceof Aa)i.push(f);else{const m=Li(h,p);m!=null&&(i.push(f),o.set(f,m))}});const c=new $t(i);return new o_(o,c,s.fieldTransforms)}function AS(t,e,n,r,s,i){const o=t.Nu(1,e,n),c=[Jc(e,r,n)],l=[s];if(i.length%2!=0)throw new Y(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Jc(e,i[m])),l.push(i[m+1]);const h=[],f=kt.empty();for(let m=c.length-1;m>=0;--m)if(!u_(h,c[m])){const T=c[m];let R=l[m];R=Tt(R);const k=o.Cu(T);if(R instanceof Aa)h.push(T);else{const O=Li(R,k);O!=null&&(h.push(T),f.set(T,O))}}const p=new $t(h);return new o_(f,p,o.fieldTransforms)}function RS(t,e,n,r=!1){return Li(n,t.Nu(r?4:3,e))}function Li(t,e){if(l_(t=Tt(t)))return _u("Unsupported field value:",e,t),c_(t,e);if(t instanceof fu)return function(r,s){if(!a_(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Li(c,s.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _R(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ye.fromDate(r);return{timestampValue:Ho(s.serializer,i)}}if(r instanceof Ye){const i=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ho(s.serializer,i)}}if(r instanceof du)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ps)return{bytesValue:bg(s.serializer,r._byteString)};if(r instanceof Dt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof pu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Mu("VectorValues must only contain numeric values.");return Ql(c.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Ta(r)}`)}(t,e)}function c_(t,e){const n={};return tg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,(r,s)=>{const i=Li(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function l_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof du||t instanceof ps||t instanceof Dt||t instanceof fu||t instanceof pu)}function _u(t,e,n){if(!l_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ta(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Jc(t,e,n){if((e=Tt(e))instanceof Ia)return e._internalPath;if(typeof e=="string")return yu(t,e);throw Ko("Field path arguments must be of type string or ",t,!1,void 0,n)}const bS=new RegExp("[~\\*/\\[\\]]");function yu(t,e,n){if(e.search(bS)>=0)throw Ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ia(...e.split("."))._internalPath}catch{throw Ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ko(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Y(x.INVALID_ARGUMENT,c+t+l)}function u_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SS extends h_{data(){return super.data()}}function vu(t,e){return typeof e=="string"?yu(t,e):e instanceof Ia?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Eu{}class PS extends Eu{}function d_(t,e,...n){let r=[];e instanceof Eu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Tu).length,c=i.filter(l=>l instanceof Ra).length;if(o>1||o>0&&c>0)throw new Y(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ra extends PS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ra(e,n,r)}_apply(e){const n=this._parse(e);return p_(e._query,n),new Dr(e.firestore,e.converter,jc(e._query,n))}_parse(e){const n=gu(e.firestore);return function(i,o,c,l,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){kd(p,f);const T=[];for(const R of p)T.push(Cd(l,i,R));m={arrayValue:{values:T}}}else m=Cd(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||kd(p,f),m=RS(c,o,p,f==="in"||f==="not-in");return Ge.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Zc(t,e,n){const r=e,s=vu("where",t);return Ra._create(s,r,n)}class Tu extends Eu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Tu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)p_(o,l),o=jc(o,l)}(e._query,n),new Dr(e.firestore,e.converter,jc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Cd(t,e,n){if(typeof(n=Tt(n))=="string"){if(n==="")throw new Y(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ug(e)&&n.indexOf("/")!==-1)throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!ne.isDocumentKey(r))throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xf(t,new ne(r))}if(n instanceof Dt)return Xf(t,n._key);throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ta(n)}.`)}function kd(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function p_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class CS{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ze(o.doubleValue));return new pu(i)}convertGeoPoint(e){return new du(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(mi(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Ne(Og(r));const s=new gi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class m_ extends h_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ao extends m_{data(e={}){return super.data(e)}}class g_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ao(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ao(s._firestore,s._userDataWriter,c.doc.key,c.doc,new zs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ao(s._firestore,s._userDataWriter,c.doc.key,c.doc,new zs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:DS(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}class wu extends CS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function __(t){t=sn(t,Dr);const e=sn(t.firestore,Pr),n=hu(e),r=new wu(e);return f_(t._query),pS(n,t._query).then(s=>new g_(e,r,t,s))}function y_(t,e,n,...r){t=sn(t,Dt);const s=sn(t.firestore,Pr),i=gu(s);let o;return o=typeof(e=Tt(e))=="string"||e instanceof Ia?AS(i,"updateDoc",t._key,e,n,r):IS(i,"updateDoc",t._key,e),Iu(s,[o.toMutation(t._key,Gt.exists(!0))])}function OS(t){return Iu(sn(t.firestore,Pr),[new Xl(t._key,Gt.none())])}function VS(t,e){const n=sn(t.firestore,Pr),r=Mi(t),s=kS(t.converter,e);return Iu(n,[wS(gu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Gt.exists(!1))]).then(()=>r)}function NS(t,...e){var n,r,s;t=Tt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Pd(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Pd(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,f;if(t instanceof Dt)h=sn(t.firestore,Pr),f=Gl(t._key.path),l={next:p=>{e[o]&&e[o](xS(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=sn(t,Dr);h=sn(p.firestore,Pr),f=p._query;const m=new wu(h);l={next:T=>{e[o]&&e[o](new g_(h,m,p,T))},error:e[o+1],complete:e[o+2]},f_(t._query)}return function(m,T,R,k){const O=new e_(k),V=new zg(T,O,R);return m.asyncQueue.enqueueAndForget(async()=>qg(await Yc(m),V)),()=>{O.za(),m.asyncQueue.enqueueAndForget(async()=>Hg(await Yc(m),V))}}(hu(h),f,c,l)}function Iu(t,e){return function(r,s){const i=new Gn;return r.asyncQueue.enqueueAndForget(async()=>tS(await dS(r),s,i)),i.promise}(hu(t),e)}function xS(t,e,n){const r=n.docs.get(e._key),s=new wu(t);return new m_(t,s,e._key,r,new zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Es=s})(ys),os(new Ir("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Pr(new NA(r.getProvider("auth-internal")),new FA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gi(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Wn(zf,"4.7.2",e),Wn(zf,"4.7.2","esm2017")})();const Is=yS(Sn),v_=s_(Is,"relays");async function MS(){const e=ir(Sn).currentUser;if(!e)throw new Error("User is not authenticated");const n=s_(Is,"relays"),r=d_(n,Zc("uid","==",e.uid));return(await __(r)).docs.map(i=>{const o=i.data();return{id:i.id,uid:o.uid,name:o.name,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0}})}async function LS(t,e){if(!ir(Sn).currentUser)throw new Error("User is not authenticated");const s=Mi(Is,"relays",t);await y_(s,{state:e})}async function FS(t,e,n){if(!ir(Sn).currentUser)throw new Error("User is not authenticated");const i=Mi(Is,"relays",t);await y_(i,{name:e,maxOnTime_s:n})}async function US(t){const n=ir(Sn).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await VS(v_,r)).id,...r}}async function $S(t){if(!ir(Sn).currentUser)throw new Error("User is not authenticated");const r=Mi(Is,"relays",t);await OS(r)}async function BS(t){const n=ir(Sn).currentUser;if(!n)throw new Error("User is not authenticated");const r=d_(v_,Zc("uid","==",n.uid),Zc("name","==",t));return(await __(r)).empty}function jS(t,e){if(!ir(Sn).currentUser)throw new Error("User is not authenticated");const s=Mi(Is,"relays",t);return NS(s,i=>{if(i.exists()){const o=i.data(),c={id:i.id,uid:o.uid,name:o.name,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0};e(c)}else console.error("Relay not found")})}const Au=Al("relay",()=>{const t=ke([]),e=ke(!1),n=ke(null),r=ke({}),s=async()=>{e.value=!0,n.value=null;try{t.value=await MS(),t.value.forEach(R=>{m(R.id)})}catch(R){n.value="Failed to load relays",console.error(R)}finally{e.value=!1}},i=async(R,k,O)=>{try{await FS(R,k,O);const V=t.value.find(B=>B.id===R);V&&(V.name=k,V.maxOnTime_s=O)}catch(V){console.error("Failed to update relay config:",V)}},o=async(R,k)=>{try{await LS(R,k);const O=t.value.find(V=>V.id===R);O&&(O.state=k)}catch(O){console.error("Failed to update relay state:",O)}},c=async R=>{try{const k=await US(R);t.value.push(k),m(k.id)}catch(k){console.error("Failed to add relay:",k)}},l=async R=>{try{await $S(R),t.value=t.value.filter(k=>k.id!==R),T(R)}catch(k){console.error("Failed to delete relay:",k)}},h=async R=>{try{return await BS(R)}catch(k){return console.error("Failed to check relay name uniqueness:",k),!1}};function f(R){return p(R.maxOnTime_s?R.maxOnTime_s:0)}function p(R){if(isNaN(R)||R<0)return"00:00:00";const k=Math.floor(R/3600),O=Math.floor(R%3600/60),V=R%60,B=String(k).padStart(2,"0"),G=String(O).padStart(2,"0"),j=String(V).padStart(2,"0");return`${B}:${G}:${j}`}const m=R=>{T(R),r.value[R]=jS(R,k=>{const O=t.value.findIndex(V=>V.id===R);O!==-1&&(t.value[O]=k)})},T=R=>{r.value[R]&&(r.value[R](),delete r.value[R])};return El(()=>{Object.keys(r.value).forEach(R=>{T(R)})}),{relays:t,loading:e,error:n,loadRelays:s,updateRelayConfig:i,updateRelayState:o,addRelay:c,isRelayNameUnique:h,deleteRelay:l,getMaxOnTime:f,secondsToHHMMSS:p}}),qS=wt({components:{ToggleButton:DA},props:{relay:{type:Object,required:!0}},setup(t){const e=Au(),n=ke(0);let r;const s=ke(t.relay.turnedOnAt),i=ke(!1);yl(async()=>{await c()}),pp(()=>{clearTimeout(r)});const o=Ct(()=>{let m=t.relay.name;return t.relay.maxOnTime_s&&t.relay.maxOnTime_s>0&&(t.relay.state?m+=" - "+e.secondsToHHMMSS(n.value):m+=" - "+e.getMaxOnTime(t.relay)),m});async function c(){t.relay.maxOnTime_s!==0&&(n.value=h(),n.value!==0&&t.relay.state&&f())}async function l(m){m&&t.relay.maxOnTime_s&&(n.value=t.relay.maxOnTime_s),m?(s.value=t.relay.turnedOnAt,i.value=!0):i.value=!1,await e.updateRelayState(t.relay.id,m),!(!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0)&&(m||(clearTimeout(r),n.value=0))}function h(){if(!t.relay.turnedOnAt||!t.relay.maxOnTime_s)return 0;const m=t.relay.turnedOnAt.getTime()+t.relay.maxOnTime_s*1e3;return Math.max(0,Math.floor((m-Date.now())/1e3))}function f(){!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0||(clearTimeout(r),r=setTimeout(async()=>{n.value--,n.value!==0&&f()},1e3))}function p(){!s.value||!t.relay.turnedOnAt||s.value>=t.relay.turnedOnAt||(i.value=!1,f())}return vr(()=>t.relay.turnedOnAt,p),{displayName:o,isBlocked:i,handleToggle:l}}}),HS={class:"relay"},zS={class:"name"};function KS(t,e,n,r,s,i){const o=et("toggle-button");return ye(),He("div",HS,[yt("div",zS,Ti(t.displayName),1),Fe(o,{modelValue:t.$props.relay.state,isBlocked:t.isBlocked,"onUpdate:modelValue":t.handleToggle},null,8,["modelValue","isBlocked","onUpdate:modelValue"])])}const WS=Ot(qS,[["render",KS],["__scopeId","data-v-5dc99cd3"]]),GS=wt({name:"SwipeableListItem",emits:["left-action","right-action"],props:{blockSwipe:{type:Boolean,default:!1}},setup(t,{emit:e}){const n=ke(0),r=ke(0),s=ke(0),i=ke(0),o=ke(!1),c=ke(!1);let l=100,h=ke(!1),f=ke(!1);const p=V=>{t.blockSwipe||(n.value=V.touches[0].clientX,r.value=V.touches[0].clientY,l=V.currentTarget.clientWidth/4,i.value=Date.now(),h.value=!1,f.value=!1)},m=V=>{if(t.blockSwipe)return;const B=V.touches[0].clientX,G=V.touches[0].clientY,j=B-n.value,re=G-r.value;if(f.value&&h.value){T(j);return}f.value||(Math.abs(j)>Math.abs(re)?(h.value=!0,f.value=!0,T(j)):(h.value=!1,f.value=!0))},T=V=>{s.value=V,Math.abs(s.value)>l*2?c.value=!0:Math.abs(s.value)>l?(c.value=!1,o.value=!0):(c.value=!1,o.value=!1)},R=()=>{if(t.blockSwipe||!h.value)return;const V=Date.now()-i.value;c.value&&V>1e3&&(s.value<0?O():k()),s.value=0,c.value=!1,o.value=!1},k=()=>{e("left-action")},O=()=>{e("right-action")};return{onTouchStart:p,onTouchMove:m,onTouchEnd:R,onLeftAction:k,onRightAction:O,translateX:s,thresholdOneHit:o}}}),QS={class:"actions actions-left"},XS={class:"actions actions-right"};function YS(t,e,n,r,s,i){return ye(),He("div",{class:"swipeable-list-item",onTouchstart:e[0]||(e[0]=(...o)=>t.onTouchStart&&t.onTouchStart(...o)),onTouchmove:e[1]||(e[1]=(...o)=>t.onTouchMove&&t.onTouchMove(...o)),onTouchend:e[2]||(e[2]=(...o)=>t.onTouchEnd&&t.onTouchEnd(...o))},[yt("div",{class:ms(["buttons",{"direction-left":t.translateX>0,"direction-right":t.translateX<0,"threshold-one-hit":t.thresholdOneHit}])},[yt("div",QS,[ho(t.$slots,"left-action",{},()=>[e[3]||(e[3]=rs("Edit"))])]),yt("div",XS,[ho(t.$slots,"right-action",{},()=>[e[4]||(e[4]=rs("Delete"))])])],2),yt("div",{class:"content",style:Ei({transform:`translateX(${t.translateX}px)`})},[ho(t.$slots,"default",{},void 0)],4)],32)}const JS=Ot(GS,[["render",YS],["__scopeId","data-v-b07fba68"]]),ZS=wt({components:{ButtonDefault:bl},emits:["isDone"],props:{allowAdvancedSettings:{type:Boolean,default:!1},existingRelay:{type:Object,default:null}},setup(t,e){const n=Au(),r=ke(""),s=ke(""),i=ke("");yl(()=>{t.existingRelay&&(r.value=t.existingRelay.name,s.value=n.getMaxOnTime(t.existingRelay))});async function o(){if(!await l()||!h())return;const p=f();t.existingRelay?await n.updateRelayConfig(t.existingRelay.id,r.value.trim(),p):await n.addRelay({name:r.value.trim(),state:!1,maxOnTime_s:p}),r.value="",e.emit("isDone")}function c(){e.emit("isDone")}async function l(){return r.value.trim().length<2?(i.value="Relay name must be at least 2 characters long.",!1):t.existingRelay&&t.existingRelay.name===r.value.trim()?!0:await n.isRelayNameUnique(r.value.trim())?(i.value="",!0):(i.value="Relay name already exists.",!1)}function h(){if(!t.allowAdvancedSettings)return!0;const p=s.value.trim();if(p==="")return!0;const T=/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(p);return T||(i.value="Max on time must be in the format HH:MM:SS."),T}function f(){if(!t.allowAdvancedSettings)return 0;const p=s.value.trim(),[m,T,R]=p.split(":").map(Number);return m*3600+T*60+R}return{newRelayName:r,newMaxOnTime:s,nameError:i,saveRelay:o,abortChanges:c}}}),eP={class:"relay-editable"},tP={key:0,class:"header"},nP={key:1,class:"max-on-time"},rP={class:"action-buttons"},sP={key:2,class:"name-error"};function iP(t,e,n,r,s,i){const o=et("button-default");return ye(),He("div",eP,[t.$props.allowAdvancedSettings?(ye(),He("div",tP,"Name")):mn("",!0),bh(yt("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>t.newRelayName=c),type:"text",placeholder:"Relay name",class:"relay-input"},null,512),[[Jh,t.newRelayName]]),t.$props.allowAdvancedSettings?(ye(),He("div",nP,[e[2]||(e[2]=yt("div",{class:"header"},"Max on time",-1)),bh(yt("input",{"onUpdate:modelValue":e[1]||(e[1]=c=>t.newMaxOnTime=c),type:"text",placeholder:"HH:MM:SS or keep empty",class:"max-on-time-input"},null,512),[[Jh,t.newMaxOnTime]])])):mn("",!0),yt("div",rP,[Fe(o,{class:"button-save",text:"Save",onClick:t.saveRelay},null,8,["onClick"]),Fe(o,{class:"button-cancel",text:"Cancel",onClick:t.abortChanges},null,8,["onClick"])]),t.nameError?(ye(),He("div",sP,Ti(t.nameError),1)):mn("",!0)])}const oP=Ot(ZS,[["render",iP],["__scopeId","data-v-5c52aaf5"]]),aP=wt({components:{RelayEditable:oP,SwipeableListItem:JS,ButtonDefault:bl,Relay:WS,Spinner:tm},setup(){const t=Au(),e=ke(!1),n=ke("");vl(()=>{t.loadRelays()});function r(){e.value=!0}function s(l){n.value=l}async function i(l){await t.deleteRelay(l)}function o(){n.value=""}function c(){e.value=!1}return{relayStore:t,isAddingNewRelay:e,editableRelayId:n,startAddingRelay:r,requestEdit:s,requestDelete:i,onEditArrayDone:o,onAddNewArrayDone:c}}}),cP={class:"relays"},lP={key:1};function uP(t,e,n,r,s,i){const o=et("spinner"),c=et("relay-editable"),l=et("relay"),h=et("swipeable-list-item"),f=et("button-default");return ye(),He("div",cP,[t.relayStore.loading?(ye(),Ft(o,{key:0,"spinner-size":"20px","with-text":!0})):mn("",!0),!t.relayStore.loading&&!t.relayStore.error?(ye(),He("div",lP,[(ye(!0),He(Lt,null,tv(t.relayStore.relays,p=>(ye(),Ft(h,{blockSwipe:t.editableRelayId.length>0||p.state,onLeftAction:m=>t.requestEdit(p.id),onRightAction:m=>t.requestDelete(p.id)},{default:ci(()=>[t.editableRelayId&&t.editableRelayId===p.id?(ye(),Ft(c,{key:p.id,allowAdvancedSettings:!0,existingRelay:p,onIsDone:t.onEditArrayDone},null,8,["existingRelay","onIsDone"])):(ye(),Ft(l,{key:p.id,relay:p},null,8,["relay"]))]),_:2},1032,["blockSwipe","onLeftAction","onRightAction"]))),256))])):mn("",!0),t.isAddingNewRelay?mn("",!0):(ye(),Ft(f,{key:2,text:"Add new Relay",onOnButtonClicked:t.startAddingRelay},null,8,["onOnButtonClicked"])),t.isAddingNewRelay?(ye(),Ft(c,{key:3,onIsDone:t.onAddNewArrayDone},null,8,["onIsDone"])):mn("",!0)])}const E_=Ot(aP,[["render",uP],["__scopeId","data-v-3eaba20d"]]),hP=wt({props:{title:{type:String,required:!0}},setup(){return{}}}),fP={class:"page-tite"};function dP(t,e,n,r,s,i){return ye(),He("div",fP,Ti(t.$props.title),1)}const T_=Ot(hP,[["render",dP],["__scopeId","data-v-7de7892e"]]),pP=wt({components:{PageTitle:T_},setup(){return{}}}),mP={class:"schedules"};function gP(t,e,n,r,s,i){const o=et("page-title");return ye(),He("div",mP,[Fe(o,{title:"Schedules"})])}const w_=Ot(pP,[["render",gP],["__scopeId","data-v-b769630a"]]),Ru=Al("page",()=>{const t=ke("relays"),e={relays:"Relay Control",schedules:"Task Schedule"},n=s=>{t.value=s},r=Ct(()=>e[t.value]||"Unknown Page");return{currentPage:t,setPage:n,currentPageTitle:r}}),_P=wt({components:{PageTitle:T_},setup(){return{pageStore:Ru()}}}),yP={class:"top-bar"};function vP(t,e,n,r,s,i){const o=et("PageTitle");return ye(),He("div",yP,[Fe(o,{title:t.pageStore.currentPageTitle},null,8,["title"])])}const EP=Ot(_P,[["render",vP],["__scopeId","data-v-12269120"]]),TP=wt({name:"App",components:{TopBar:EP,Schedules:w_,Relays:E_,TaskBar:VT,SignIn:PA},setup(){const t=nm(),e=Ru();return{signedIn:Ct(()=>!!t.user),pageStore:e}}}),wP={class:"app"},IP={key:0,class:"signed-in"},AP={class:"body"};function RP(t,e,n,r,s,i){const o=et("top-bar"),c=et("relays"),l=et("schedules"),h=et("task-bar"),f=et("sign-in");return ye(),He("div",wP,[t.signedIn?(ye(),He("div",IP,[Fe(o),yt("div",AP,[t.pageStore.currentPage==="relays"?(ye(),Ft(c,{key:0})):t.pageStore.currentPage==="schedules"?(ye(),Ft(l,{key:1})):mn("",!0)]),Fe(h)])):(ye(),Ft(f,{key:1}))])}const bP=Ot(TP,[["render",RP],["__scopeId","data-v-9d9b317d"]]),SP=[{path:"/relays",name:"relays",component:E_},{path:"/schedules",name:"schedules",component:w_},{path:"/:catchAll(.*)",redirect:"/relays"}],I_=ST({history:qE("/RelayHub"),routes:SP});I_.beforeEach((t,e,n)=>{Ru().setPage(t.name),n()});const bu=mE(bP),PP=vE();bu.use(I_);bu.use(PP);bu.mount("#app");
