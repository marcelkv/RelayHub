(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ue={},ds=[],fn=()=>{},Iy=()=>!1,_a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),kc=t=>t.startsWith("onUpdate:"),ht=Object.assign,Dc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},by=Object.prototype.hasOwnProperty,Ve=(t,e)=>by.call(t,e),me=Array.isArray,fs=t=>ya(t)==="[object Map]",Yf=t=>ya(t)==="[object Set]",ve=t=>typeof t=="function",rt=t=>typeof t=="string",jn=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",Xf=t=>(We(t)||ve(t))&&ve(t.then)&&ve(t.catch),Zf=Object.prototype.toString,ya=t=>Zf.call(t),Ay=t=>ya(t).slice(8,-1),ep=t=>ya(t)==="[object Object]",Nc=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ci=Pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ry=/-(\w)/g,en=va(t=>t.replace(Ry,(e,n)=>n?n.toUpperCase():"")),Sy=/\B([A-Z])/g,Ir=va(t=>t.replace(Sy,"-$1").toLowerCase()),Ea=va(t=>t.charAt(0).toUpperCase()+t.slice(1)),gl=va(t=>t?`on${Ea(t)}`:""),cr=(t,e)=>!Object.is(t,e),ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},tp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},jl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fh;const wa=()=>Fh||(Fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hn(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=rt(r)?Dy(r):Hn(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(rt(t)||We(t))return t}const Cy=/;(?![^(]*\))/g,Py=/:([^]+)/,ky=/\/\*[^]*?\*\//g;function Dy(t){const e={};return t.replace(ky,"").split(Cy).forEach(n=>{if(n){const r=n.split(Py);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function it(t){let e="";if(rt(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const r=it(t[n]);r&&(e+=r+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ny="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Oy=Pc(Ny);function np(t){return!!t||t===""}const rp=t=>!!(t&&t.__v_isRef===!0),Ee=t=>rt(t)?t:t==null?"":me(t)||We(t)&&(t.toString===Zf||!ve(t.toString))?rp(t)?Ee(t.value):JSON.stringify(t,sp,2):String(t),sp=(t,e)=>rp(e)?sp(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[_l(r,i)+" =>"]=s,n),{})}:Yf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_l(n))}:jn(e)?_l(e):We(e)&&!me(e)&&!ep(e)?String(e):e,_l=(t,e="")=>{var n;return jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;class ip{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){Mt=this}off(){Mt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function op(t){return new ip(t)}function ap(){return Mt}function Vy(t,e=!1){Mt&&Mt.cleanups.push(t)}let qe;const yl=new WeakSet;class lp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mt&&Mt.active&&Mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yl.has(this)&&(yl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||up(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Uh(this),hp(this);const e=qe,n=rn;qe=this,rn=!0;try{return this.fn()}finally{dp(this),qe=e,rn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mc(e);this.deps=this.depsTail=void 0,Uh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hl(this)&&this.run()}get dirty(){return Hl(this)}}let cp=0,ui,hi;function up(t,e=!1){if(t.flags|=8,e){t.next=hi,hi=t;return}t.next=ui,ui=t}function Oc(){cp++}function Vc(){if(--cp>0)return;if(hi){let e=hi;for(hi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ui;){let e=ui;for(ui=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function hp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function dp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Mc(r),My(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Hl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ti))return;t.globalVersion=Ti;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Hl(t)){t.flags&=-3;return}const n=qe,r=rn;qe=t,rn=!0;try{hp(t);const s=t.fn(t._value);(e.version===0||cr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{qe=n,rn=r,dp(t),t.flags&=-3}}function Mc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Mc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function My(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rn=!0;const pp=[];function br(){pp.push(rn),rn=!1}function Ar(){const t=pp.pop();rn=t===void 0?!0:t}function Uh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=qe;qe=void 0;try{e()}finally{qe=n}}}let Ti=0;class xy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!qe||!rn||qe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==qe)n=this.activeLink=new xy(qe,this),qe.deps?(n.prevDep=qe.depsTail,qe.depsTail.nextDep=n,qe.depsTail=n):qe.deps=qe.depsTail=n,mp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=qe.depsTail,n.nextDep=void 0,qe.depsTail.nextDep=n,qe.depsTail=n,qe.deps===n&&(qe.deps=r)}return n}trigger(e){this.version++,Ti++,this.notify(e)}notify(e){Oc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vc()}}}function mp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)mp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zo=new WeakMap,$r=Symbol(""),zl=Symbol(""),Ii=Symbol("");function Rt(t,e,n){if(rn&&qe){let r=zo.get(t);r||zo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new xc),s.map=r,s.key=n),s.track()}}function Cn(t,e,n,r,s,i){const o=zo.get(t);if(!o){Ti++;return}const l=c=>{c&&c.trigger()};if(Oc(),e==="clear")o.forEach(l);else{const c=me(t),u=c&&Nc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ii||!jn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Ii)),e){case"add":c?u&&l(o.get("length")):(l(o.get($r)),fs(t)&&l(o.get(zl)));break;case"delete":c||(l(o.get($r)),fs(t)&&l(o.get(zl)));break;case"set":fs(t)&&l(o.get($r));break}}Vc()}function Ly(t,e){const n=zo.get(t);return n&&n.get(e)}function rs(t){const e=ke(t);return e===t?e:(Rt(e,"iterate",Ii),Zt(t)?e:e.map(St))}function Ta(t){return Rt(t=ke(t),"iterate",Ii),t}const Fy={__proto__:null,[Symbol.iterator](){return vl(this,Symbol.iterator,St)},concat(...t){return rs(this).concat(...t.map(e=>me(e)?rs(e):e))},entries(){return vl(this,"entries",t=>(t[1]=St(t[1]),t))},every(t,e){return An(this,"every",t,e,void 0,arguments)},filter(t,e){return An(this,"filter",t,e,n=>n.map(St),arguments)},find(t,e){return An(this,"find",t,e,St,arguments)},findIndex(t,e){return An(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return An(this,"findLast",t,e,St,arguments)},findLastIndex(t,e){return An(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return An(this,"forEach",t,e,void 0,arguments)},includes(...t){return El(this,"includes",t)},indexOf(...t){return El(this,"indexOf",t)},join(t){return rs(this).join(t)},lastIndexOf(...t){return El(this,"lastIndexOf",t)},map(t,e){return An(this,"map",t,e,void 0,arguments)},pop(){return ti(this,"pop")},push(...t){return ti(this,"push",t)},reduce(t,...e){return $h(this,"reduce",t,e)},reduceRight(t,...e){return $h(this,"reduceRight",t,e)},shift(){return ti(this,"shift")},some(t,e){return An(this,"some",t,e,void 0,arguments)},splice(...t){return ti(this,"splice",t)},toReversed(){return rs(this).toReversed()},toSorted(t){return rs(this).toSorted(t)},toSpliced(...t){return rs(this).toSpliced(...t)},unshift(...t){return ti(this,"unshift",t)},values(){return vl(this,"values",St)}};function vl(t,e,n){const r=Ta(t),s=r[e]();return r!==t&&!Zt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Uy=Array.prototype;function An(t,e,n,r,s,i){const o=Ta(t),l=o!==t&&!Zt(t),c=o[e];if(c!==Uy[e]){const p=c.apply(t,i);return l?St(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,St(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function $h(t,e,n,r){const s=Ta(t);let i=n;return s!==t&&(Zt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,St(l),c,t)}),s[e](i,...r)}function El(t,e,n){const r=ke(t);Rt(r,"iterate",Ii);const s=r[e](...n);return(s===-1||s===!1)&&Uc(n[0])?(n[0]=ke(n[0]),r[e](...n)):s}function ti(t,e,n=[]){br(),Oc();const r=ke(t)[e].apply(t,n);return Vc(),Ar(),r}const $y=Pc("__proto__,__v_isRef,__isVue"),gp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn));function By(t){jn(t)||(t=String(t));const e=ke(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class _p{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Yy:wp:i?Ep:vp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=me(e);if(!s){let c;if(o&&(c=Fy[n]))return c;if(n==="hasOwnProperty")return By}const l=Reflect.get(e,n,Ze(e)?e:r);return(jn(n)?gp.has(n):$y(n))||(s||Rt(e,"get",n),i)?l:Ze(l)?o&&Nc(n)?l:l.value:We(l)?s?Ip(l):Ui(l):l}}class yp extends _p{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Hr(i);if(!Zt(r)&&!Hr(r)&&(i=ke(i),r=ke(r)),!me(e)&&Ze(i)&&!Ze(r))return c?!1:(i.value=r,!0)}const o=me(e)&&Nc(n)?Number(n)<e.length:Ve(e,n),l=Reflect.set(e,n,r,Ze(e)?e:s);return e===ke(s)&&(o?cr(r,i)&&Cn(e,"set",n,r):Cn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!jn(n)||!gp.has(n))&&Rt(e,"has",n),r}ownKeys(e){return Rt(e,"iterate",me(e)?"length":$r),Reflect.ownKeys(e)}}class qy extends _p{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const jy=new yp,Hy=new qy,zy=new yp(!0);const Wl=t=>t,wo=t=>Reflect.getPrototypeOf(t);function Wy(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=fs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Wl:e?Gl:St;return!e&&Rt(i,"iterate",c?zl:$r),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function To(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Gy(t,e){const n={get(s){const i=this.__v_raw,o=ke(i),l=ke(s);t||(cr(s,l)&&Rt(o,"get",s),Rt(o,"get",l));const{has:c}=wo(o),u=e?Wl:t?Gl:St;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Rt(ke(s),"iterate",$r),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ke(i),l=ke(s);return t||(cr(s,l)&&Rt(o,"has",s),Rt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=ke(l),u=e?Wl:t?Gl:St;return!t&&Rt(c,"iterate",$r),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return ht(n,t?{add:To("add"),set:To("set"),delete:To("delete"),clear:To("clear")}:{add(s){!e&&!Zt(s)&&!Hr(s)&&(s=ke(s));const i=ke(this);return wo(i).has.call(i,s)||(i.add(s),Cn(i,"add",s,s)),this},set(s,i){!e&&!Zt(i)&&!Hr(i)&&(i=ke(i));const o=ke(this),{has:l,get:c}=wo(o);let u=l.call(o,s);u||(s=ke(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?cr(i,d)&&Cn(o,"set",s,i):Cn(o,"add",s,i),this},delete(s){const i=ke(this),{has:o,get:l}=wo(i);let c=o.call(i,s);c||(s=ke(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Cn(i,"delete",s,void 0),u},clear(){const s=ke(this),i=s.size!==0,o=s.clear();return i&&Cn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Wy(s,t,e)}),n}function Lc(t,e){const n=Gy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ve(n,s)&&s in r?n:r,s,i)}const Ky={get:Lc(!1,!1)},Qy={get:Lc(!1,!0)},Jy={get:Lc(!0,!1)};const vp=new WeakMap,Ep=new WeakMap,wp=new WeakMap,Yy=new WeakMap;function Xy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zy(t){return t.__v_skip||!Object.isExtensible(t)?0:Xy(Ay(t))}function Ui(t){return Hr(t)?t:Fc(t,!1,jy,Ky,vp)}function Tp(t){return Fc(t,!1,zy,Qy,Ep)}function Ip(t){return Fc(t,!0,Hy,Jy,wp)}function Fc(t,e,n,r,s){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Zy(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function ur(t){return Hr(t)?ur(t.__v_raw):!!(t&&t.__v_isReactive)}function Hr(t){return!!(t&&t.__v_isReadonly)}function Zt(t){return!!(t&&t.__v_isShallow)}function Uc(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function $c(t){return!Ve(t,"__v_skip")&&Object.isExtensible(t)&&tp(t,"__v_skip",!0),t}const St=t=>We(t)?Ui(t):t,Gl=t=>We(t)?Ip(t):t;function Ze(t){return t?t.__v_isRef===!0:!1}function re(t){return bp(t,!1)}function e0(t){return bp(t,!0)}function bp(t,e){return Ze(t)?t:new t0(t,e)}class t0{constructor(e,n){this.dep=new xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:St(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Zt(e)||Hr(e);e=r?e:ke(e),cr(e,n)&&(this._rawValue=e,this._value=r?e:St(e),this.dep.trigger())}}function ps(t){return Ze(t)?t.value:t}const n0={get:(t,e,n)=>e==="__v_raw"?t:ps(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ze(s)&&!Ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ap(t){return ur(t)?t:new Proxy(t,n0)}function r0(t){const e=me(t)?new Array(t.length):{};for(const n in t)e[n]=i0(t,n);return e}class s0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ly(ke(this._object),this._key)}}function i0(t,e,n){const r=t[e];return Ze(r)?r:new s0(t,e,n)}class o0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ti-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return up(this,!0),!0}get value(){const e=this.dep.track();return fp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function a0(t,e,n=!1){let r,s;return ve(t)?r=t:(r=t.get,s=t.set),new o0(r,s,n)}const Io={},Wo=new WeakMap;let xr;function l0(t,e=!1,n=xr){if(n){let r=Wo.get(n);r||Wo.set(n,r=[]),r.push(t)}}function c0(t,e,n=Ue){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=z=>s?z:Zt(z)||s===!1||s===0?Pn(z,1):Pn(z);let d,p,m,_,S=!1,A=!1;if(Ze(t)?(p=()=>t.value,S=Zt(t)):ur(t)?(p=()=>u(t),S=!0):me(t)?(A=!0,S=t.some(z=>ur(z)||Zt(z)),p=()=>t.map(z=>{if(Ze(z))return z.value;if(ur(z))return u(z);if(ve(z))return c?c(z,2):z()})):ve(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){br();try{m()}finally{Ar()}}const z=xr;xr=d;try{return c?c(t,3,[_]):t(_)}finally{xr=z}}:p=fn,e&&s){const z=p,Z=s===!0?1/0:s;p=()=>Pn(z(),Z)}const P=ap(),N=()=>{d.stop(),P&&P.active&&Dc(P.effects,d)};if(i&&e){const z=e;e=(...Z)=>{z(...Z),N()}}let V=A?new Array(t.length).fill(Io):Io;const L=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const Z=d.run();if(s||S||(A?Z.some((ce,b)=>cr(ce,V[b])):cr(Z,V))){m&&m();const ce=xr;xr=d;try{const b=[Z,V===Io?void 0:A&&V[0]===Io?[]:V,_];c?c(e,3,b):e(...b),V=Z}finally{xr=ce}}}else d.run()};return l&&l(L),d=new lp(p),d.scheduler=o?()=>o(L,!1):L,_=z=>l0(z,!1,d),m=d.onStop=()=>{const z=Wo.get(d);if(z){if(c)c(z,4);else for(const Z of z)Z();Wo.delete(d)}},e?r?L(!0):V=d.run():o?o(L.bind(null,!0),!0):d.run(),N.pause=d.pause.bind(d),N.resume=d.resume.bind(d),N.stop=N,N}function Pn(t,e=1/0,n){if(e<=0||!We(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ze(t))Pn(t.value,e,n);else if(me(t))for(let r=0;r<t.length;r++)Pn(t[r],e,n);else if(Yf(t)||fs(t))t.forEach(r=>{Pn(r,e,n)});else if(ep(t)){for(const r in t)Pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $i(t,e,n,r){try{return r?t(...r):t()}catch(s){Ia(s,e,n)}}function yn(t,e,n,r){if(ve(t)){const s=$i(t,e,n,r);return s&&Xf(s)&&s.catch(i=>{Ia(i,e,n)}),s}if(me(t)){const s=[];for(let i=0;i<t.length;i++)s.push(yn(t[i],e,n,r));return s}}function Ia(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ue;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){br(),$i(i,null,10,[t,c,u]),Ar();return}}u0(t,n,s,r,o)}function u0(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const xt=[];let hn=-1;const ms=[];let nr=null,is=0;const Rp=Promise.resolve();let Go=null;function Bc(t){const e=Go||Rp;return t?e.then(this?t.bind(this):t):e}function h0(t){let e=hn+1,n=xt.length;for(;e<n;){const r=e+n>>>1,s=xt[r],i=bi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function qc(t){if(!(t.flags&1)){const e=bi(t),n=xt[xt.length-1];!n||!(t.flags&2)&&e>=bi(n)?xt.push(t):xt.splice(h0(e),0,t),t.flags|=1,Sp()}}function Sp(){Go||(Go=Rp.then(Pp))}function d0(t){me(t)?ms.push(...t):nr&&t.id===-1?nr.splice(is+1,0,t):t.flags&1||(ms.push(t),t.flags|=1),Sp()}function Bh(t,e,n=hn+1){for(;n<xt.length;n++){const r=xt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;xt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Cp(t){if(ms.length){const e=[...new Set(ms)].sort((n,r)=>bi(n)-bi(r));if(ms.length=0,nr){nr.push(...e);return}for(nr=e,is=0;is<nr.length;is++){const n=nr[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nr=null,is=0}}const bi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Pp(t){try{for(hn=0;hn<xt.length;hn++){const e=xt[hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$i(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hn<xt.length;hn++){const e=xt[hn];e&&(e.flags&=-2)}hn=-1,xt.length=0,Cp(),Go=null,(xt.length||ms.length)&&Pp()}}let ut=null,kp=null;function Ko(t){const e=ut;return ut=t,kp=t&&t.type.__scopeId||null,e}function Mn(t,e=ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Jh(-1);const i=Ko(e);let o;try{o=t(...s)}finally{Ko(i),r._d&&Jh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ws(t,e){if(ut===null)return t;const n=Sa(ut),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ue]=e[s];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&Pn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Vr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(br(),yn(c,n,8,[t.el,l,t,e]),Ar())}}const f0=Symbol("_vte"),p0=t=>t.__isTeleport;function jc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ne(t,e){return ve(t)?ht({name:t.name},e,{setup:t}):t}function Dp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qo(t,e,n,r,s=!1){if(me(t)){t.forEach((S,A)=>Qo(S,e&&(me(e)?e[A]:e),n,r,s));return}if(gs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Sa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Ue?l.refs={}:l.refs,p=l.setupState,m=ke(p),_=p===Ue?()=>!1:S=>Ve(m,S);if(u!=null&&u!==c&&(rt(u)?(d[u]=null,_(u)&&(p[u]=null)):Ze(u)&&(u.value=null)),ve(c))$i(c,l,12,[o,d]);else{const S=rt(c),A=Ze(c);if(S||A){const P=()=>{if(t.f){const N=S?_(c)?p[c]:d[c]:c.value;s?me(N)&&Dc(N,i):me(N)?N.includes(i)||N.push(i):S?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else S?(d[c]=o,_(c)&&(p[c]=o)):A&&(c.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,zt(P,n)):P()}}}wa().requestIdleCallback;wa().cancelIdleCallback;const gs=t=>!!t.type.__asyncLoader,Np=t=>t.type.__isKeepAlive;function m0(t,e){Op(t,"a",e)}function g0(t,e){Op(t,"da",e)}function Op(t,e,n=_t){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ba(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Np(s.parent.vnode)&&_0(r,e,n,s),s=s.parent}}function _0(t,e,n,r){const s=ba(e,t,r,!0);Hc(()=>{Dc(r[e],s)},n)}function ba(t,e,n=_t,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{br();const l=qi(n),c=yn(e,n,t,o);return l(),Ar(),c});return r?s.unshift(i):s.push(i),i}}const zn=t=>(e,n=_t)=>{(!Si||t==="sp")&&ba(t,(...r)=>e(...r),n)},Bi=zn("bm"),Rr=zn("m"),y0=zn("bu"),v0=zn("u"),Vp=zn("bum"),Hc=zn("um"),E0=zn("sp"),w0=zn("rtg"),T0=zn("rtc");function I0(t,e=_t){ba("ec",t,e)}const b0="components";function _e(t,e){return R0(b0,t,!0,e)||t}const A0=Symbol.for("v-ndc");function R0(t,e,n=!0,r=!1){const s=ut||_t;if(s){const i=s.type;{const l=pv(i,!1);if(l&&(l===e||l===en(e)||l===Ea(en(e))))return i}const o=qh(s[t]||i[t],e)||qh(s.appContext[t],e);return!o&&r?i:o}}function qh(t,e){return t&&(t[e]||t[en(e)]||t[Ea(en(e))])}function vn(t,e,n,r){let s;const i=n,o=me(t);if(o||rt(t)){const l=o&&ur(t);let c=!1;l&&(c=!Zt(t),t=Ta(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?St(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(We(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function S0(t,e,n={},r,s){if(ut.ce||ut.parent&&gs(ut.parent)&&ut.parent.ce)return n.name=e,q(),He(Ye,null,[pe("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),q();const o=i&&Mp(i(n)),l=n.key||o&&o.key,c=He(Ye,{key:(l&&!jn(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Mp(t){return t.some(e=>Ri(e)?!(e.type===mr||e.type===Ye&&!Mp(e.children)):!0)?t:null}const Kl=t=>t?nm(t)?Sa(t):Kl(t.parent):null,di=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kl(t.parent),$root:t=>Kl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zc(t),$forceUpdate:t=>t.f||(t.f=()=>{qc(t.update)}),$nextTick:t=>t.n||(t.n=Bc.bind(t.proxy)),$watch:t=>Q0.bind(t)}),wl=(t,e)=>t!==Ue&&!t.__isScriptSetup&&Ve(t,e),C0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(wl(r,e))return o[e]=1,r[e];if(s!==Ue&&Ve(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ve(u,e))return o[e]=3,i[e];if(n!==Ue&&Ve(n,e))return o[e]=4,n[e];Ql&&(o[e]=0)}}const d=di[e];let p,m;if(d)return e==="$attrs"&&Rt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ue&&Ve(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ve(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return wl(s,e)?(s[e]=n,!0):r!==Ue&&Ve(r,e)?(r[e]=n,!0):Ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ue&&Ve(t,o)||wl(e,o)||(l=i[0])&&Ve(l,o)||Ve(r,o)||Ve(di,o)||Ve(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jh(t){return me(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ql=!0;function P0(t){const e=zc(t),n=t.proxy,r=t.ctx;Ql=!1,e.beforeCreate&&Hh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:S,activated:A,deactivated:P,beforeDestroy:N,beforeUnmount:V,destroyed:L,unmounted:z,render:Z,renderTracked:ce,renderTriggered:b,errorCaptured:y,serverPrefetch:E,expose:I,inheritAttrs:R,components:C,directives:w,filters:st}=e;if(u&&k0(u,r,null),o)for(const he in o){const Te=o[he];ve(Te)&&(r[he]=Te.bind(n))}if(s){const he=s.call(n,n);We(he)&&(t.data=Ui(he))}if(Ql=!0,i)for(const he in i){const Te=i[he],jt=ve(Te)?Te.bind(n,n):ve(Te.get)?Te.get.bind(n,n):fn,tn=!ve(Te)&&ve(Te.set)?Te.set.bind(n):fn,Yt=$e({get:jt,set:tn});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>Yt.value,set:Ge=>Yt.value=Ge})}if(l)for(const he in l)xp(l[he],r,n,he);if(c){const he=ve(c)?c.call(n):c;Reflect.ownKeys(he).forEach(Te=>{Do(Te,he[Te])})}d&&Hh(d,t,"c");function Be(he,Te){me(Te)?Te.forEach(jt=>he(jt.bind(n))):Te&&he(Te.bind(n))}if(Be(Bi,p),Be(Rr,m),Be(y0,_),Be(v0,S),Be(m0,A),Be(g0,P),Be(I0,y),Be(T0,ce),Be(w0,b),Be(Vp,V),Be(Hc,z),Be(E0,E),me(I))if(I.length){const he=t.exposed||(t.exposed={});I.forEach(Te=>{Object.defineProperty(he,Te,{get:()=>n[Te],set:jt=>n[Te]=jt})})}else t.exposed||(t.exposed={});Z&&t.render===fn&&(t.render=Z),R!=null&&(t.inheritAttrs=R),C&&(t.components=C),w&&(t.directives=w),E&&Dp(t)}function k0(t,e,n=fn){me(t)&&(t=Jl(t));for(const r in t){const s=t[r];let i;We(s)?"default"in s?i=sn(s.from||r,s.default,!0):i=sn(s.from||r):i=sn(s),Ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Hh(t,e,n){yn(me(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xp(t,e,n,r){let s=r.includes(".")?Jp(n,r):()=>n[r];if(rt(t)){const i=e[t];ve(i)&&pn(s,i)}else if(ve(t))pn(s,t.bind(n));else if(We(t))if(me(t))t.forEach(i=>xp(i,e,n,r));else{const i=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(i)&&pn(s,i,t)}}function zc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Jo(c,u,o,!0)),Jo(c,e,o)),We(e)&&i.set(e,c),c}function Jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Jo(t,i,n,!0),s&&s.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=D0[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const D0={data:zh,props:Wh,emits:Wh,methods:si,computed:si,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:si,directives:si,watch:O0,provide:zh,inject:N0};function zh(t,e){return e?t?function(){return ht(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function N0(t,e){return si(Jl(t),Jl(e))}function Jl(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function si(t,e){return t?ht(Object.create(null),t,e):e}function Wh(t,e){return t?me(t)&&me(e)?[...new Set([...t,...e])]:ht(Object.create(null),jh(t),jh(e??{})):e}function O0(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const r in e)n[r]=Vt(t[r],e[r]);return n}function Lp(){return{app:null,config:{isNativeTag:Iy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let V0=0;function M0(t,e){return function(r,s=null){ve(r)||(r=ht({},r)),s!=null&&!We(s)&&(s=null);const i=Lp(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:V0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:gv,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ve(d.install)?(o.add(d),d.install(u,...p)):ve(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const _=u._ceVNode||pe(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(_,d):t(_,d,m),c=!0,u._container=d,d.__vue_app__=u,Sa(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(yn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Br;Br=u;try{return d()}finally{Br=p}}};return u}}let Br=null;function Do(t,e){if(_t){let n=_t.provides;const r=_t.parent&&_t.parent.provides;r===n&&(n=_t.provides=Object.create(r)),n[t]=e}}function sn(t,e,n=!1){const r=_t||ut;if(r||Br){const s=Br?Br._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}function x0(){return!!(_t||ut||Br)}const Fp={},Up=()=>Object.create(Fp),$p=t=>Object.getPrototypeOf(t)===Fp;function L0(t,e,n,r=!1){const s={},i=Up();t.propsDefaults=Object.create(null),Bp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Tp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function F0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=ke(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Aa(t.emitsOptions,m))continue;const _=e[m];if(c)if(Ve(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const S=en(m);s[S]=Yl(c,l,S,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Bp(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Ve(e,p)&&((d=Ir(p))===p||!Ve(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Yl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ve(e,p))&&(delete i[p],u=!0)}u&&Cn(t.attrs,"set","")}function Bp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ci(c))continue;const u=e[c];let d;s&&Ve(s,d=en(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Aa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ke(n),u=l||Ue;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Yl(s,c,p,u[p],t,!Ve(u,p))}}return o}function Yl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ve(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ve(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=qi(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Ir(n))&&(r=!0))}return r}const U0=new WeakMap;function qp(t,e,n=!1){const r=n?U0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ve(t)){const d=p=>{c=!0;const[m,_]=qp(p,e,!0);ht(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return We(t)&&r.set(t,ds),ds;if(me(i))for(let d=0;d<i.length;d++){const p=en(i[d]);Gh(p)&&(o[p]=Ue)}else if(i)for(const d in i){const p=en(d);if(Gh(p)){const m=i[d],_=o[p]=me(m)||ve(m)?{type:m}:ht({},m),S=_.type;let A=!1,P=!0;if(me(S))for(let N=0;N<S.length;++N){const V=S[N],L=ve(V)&&V.name;if(L==="Boolean"){A=!0;break}else L==="String"&&(P=!1)}else A=ve(S)&&S.name==="Boolean";_[0]=A,_[1]=P,(A||Ve(_,"default"))&&l.push(p)}}const u=[o,l];return We(t)&&r.set(t,u),u}function Gh(t){return t[0]!=="$"&&!ci(t)}const jp=t=>t[0]==="_"||t==="$stable",Wc=t=>me(t)?t.map(dn):[dn(t)],$0=(t,e,n)=>{if(e._n)return e;const r=Mn((...s)=>Wc(e(...s)),n);return r._c=!1,r},Hp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(jp(s))continue;const i=t[s];if(ve(i))e[s]=$0(s,i,r);else if(i!=null){const o=Wc(i);e[s]=()=>o}}},zp=(t,e)=>{const n=Wc(e);t.slots.default=()=>n},Wp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},B0=(t,e,n)=>{const r=t.slots=Up();if(t.vnode.shapeFlag&32){const s=e._;s?(Wp(r,e,n),n&&tp(r,"_",s,!0)):Hp(e,r)}else e&&zp(t,e)},q0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ue;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Wp(s,e,n):(i=!e.$stable,Hp(e,s)),o=e}else e&&(zp(t,e),o={default:1});if(i)for(const l in s)!jp(l)&&o[l]==null&&delete s[l]},zt=nv;function j0(t){return H0(t)}function H0(t,e){const n=wa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=fn,insertStaticContent:S}=t,A=(v,T,D,B=null,M=null,j=null,Q=void 0,G=null,W=!!T.dynamicChildren)=>{if(v===T)return;v&&!ni(v,T)&&(B=x(v),Ge(v,M,j,!0),v=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:H,ref:le,shapeFlag:X}=T;switch(H){case Ra:P(v,T,D,B);break;case mr:N(v,T,D,B);break;case No:v==null&&V(T,D,B,Q);break;case Ye:C(v,T,D,B,M,j,Q,G,W);break;default:X&1?Z(v,T,D,B,M,j,Q,G,W):X&6?w(v,T,D,B,M,j,Q,G,W):(X&64||X&128)&&H.process(v,T,D,B,M,j,Q,G,W,se)}le!=null&&M&&Qo(le,v&&v.ref,j,T||v,!T)},P=(v,T,D,B)=>{if(v==null)r(T.el=l(T.children),D,B);else{const M=T.el=v.el;T.children!==v.children&&u(M,T.children)}},N=(v,T,D,B)=>{v==null?r(T.el=c(T.children||""),D,B):T.el=v.el},V=(v,T,D,B)=>{[v.el,v.anchor]=S(v.children,T,D,B,v.el,v.anchor)},L=({el:v,anchor:T},D,B)=>{let M;for(;v&&v!==T;)M=m(v),r(v,D,B),v=M;r(T,D,B)},z=({el:v,anchor:T})=>{let D;for(;v&&v!==T;)D=m(v),s(v),v=D;s(T)},Z=(v,T,D,B,M,j,Q,G,W)=>{T.type==="svg"?Q="svg":T.type==="math"&&(Q="mathml"),v==null?ce(T,D,B,M,j,Q,G,W):E(v,T,M,j,Q,G,W)},ce=(v,T,D,B,M,j,Q,G)=>{let W,H;const{props:le,shapeFlag:X,transition:oe,dirs:ie}=v;if(W=v.el=o(v.type,j,le&&le.is,le),X&8?d(W,v.children):X&16&&y(v.children,W,null,B,M,Tl(v,j),Q,G),ie&&Vr(v,null,B,"created"),b(W,v,v.scopeId,Q,B),le){for(const De in le)De!=="value"&&!ci(De)&&i(W,De,null,le[De],j,B);"value"in le&&i(W,"value",null,le.value,j),(H=le.onVnodeBeforeMount)&&un(H,B,v)}ie&&Vr(v,null,B,"beforeMount");const ue=z0(M,oe);ue&&oe.beforeEnter(W),r(W,T,D),((H=le&&le.onVnodeMounted)||ue||ie)&&zt(()=>{H&&un(H,B,v),ue&&oe.enter(W),ie&&Vr(v,null,B,"mounted")},M)},b=(v,T,D,B,M)=>{if(D&&_(v,D),B)for(let j=0;j<B.length;j++)_(v,B[j]);if(M){let j=M.subTree;if(T===j||Xp(j.type)&&(j.ssContent===T||j.ssFallback===T)){const Q=M.vnode;b(v,Q,Q.scopeId,Q.slotScopeIds,M.parent)}}},y=(v,T,D,B,M,j,Q,G,W=0)=>{for(let H=W;H<v.length;H++){const le=v[H]=G?rr(v[H]):dn(v[H]);A(null,le,T,D,B,M,j,Q,G)}},E=(v,T,D,B,M,j,Q)=>{const G=T.el=v.el;let{patchFlag:W,dynamicChildren:H,dirs:le}=T;W|=v.patchFlag&16;const X=v.props||Ue,oe=T.props||Ue;let ie;if(D&&Mr(D,!1),(ie=oe.onVnodeBeforeUpdate)&&un(ie,D,T,v),le&&Vr(T,v,D,"beforeUpdate"),D&&Mr(D,!0),(X.innerHTML&&oe.innerHTML==null||X.textContent&&oe.textContent==null)&&d(G,""),H?I(v.dynamicChildren,H,G,D,B,Tl(T,M),j):Q||Te(v,T,G,null,D,B,Tl(T,M),j,!1),W>0){if(W&16)R(G,X,oe,D,M);else if(W&2&&X.class!==oe.class&&i(G,"class",null,oe.class,M),W&4&&i(G,"style",X.style,oe.style,M),W&8){const ue=T.dynamicProps;for(let De=0;De<ue.length;De++){const Ce=ue[De],Et=X[Ce],lt=oe[Ce];(lt!==Et||Ce==="value")&&i(G,Ce,Et,lt,M,D)}}W&1&&v.children!==T.children&&d(G,T.children)}else!Q&&H==null&&R(G,X,oe,D,M);((ie=oe.onVnodeUpdated)||le)&&zt(()=>{ie&&un(ie,D,T,v),le&&Vr(T,v,D,"updated")},B)},I=(v,T,D,B,M,j,Q)=>{for(let G=0;G<T.length;G++){const W=v[G],H=T[G],le=W.el&&(W.type===Ye||!ni(W,H)||W.shapeFlag&70)?p(W.el):D;A(W,H,le,null,B,M,j,Q,!0)}},R=(v,T,D,B,M)=>{if(T!==D){if(T!==Ue)for(const j in T)!ci(j)&&!(j in D)&&i(v,j,T[j],null,M,B);for(const j in D){if(ci(j))continue;const Q=D[j],G=T[j];Q!==G&&j!=="value"&&i(v,j,G,Q,M,B)}"value"in D&&i(v,"value",T.value,D.value,M)}},C=(v,T,D,B,M,j,Q,G,W)=>{const H=T.el=v?v.el:l(""),le=T.anchor=v?v.anchor:l("");let{patchFlag:X,dynamicChildren:oe,slotScopeIds:ie}=T;ie&&(G=G?G.concat(ie):ie),v==null?(r(H,D,B),r(le,D,B),y(T.children||[],D,le,M,j,Q,G,W)):X>0&&X&64&&oe&&v.dynamicChildren?(I(v.dynamicChildren,oe,D,M,j,Q,G),(T.key!=null||M&&T===M.subTree)&&Gp(v,T,!0)):Te(v,T,D,le,M,j,Q,G,W)},w=(v,T,D,B,M,j,Q,G,W)=>{T.slotScopeIds=G,v==null?T.shapeFlag&512?M.ctx.activate(T,D,B,Q,W):st(T,D,B,M,j,Q,W):Ft(v,T,W)},st=(v,T,D,B,M,j,Q)=>{const G=v.component=cv(v,B,M);if(Np(v)&&(G.ctx.renderer=se),uv(G,!1,Q),G.asyncDep){if(M&&M.registerDep(G,Be,Q),!v.el){const W=G.subTree=pe(mr);N(null,W,T,D)}}else Be(G,v,T,D,M,j,Q)},Ft=(v,T,D)=>{const B=T.component=v.component;if(ev(v,T,D))if(B.asyncDep&&!B.asyncResolved){he(B,T,D);return}else B.next=T,B.update();else T.el=v.el,B.vnode=T},Be=(v,T,D,B,M,j,Q)=>{const G=()=>{if(v.isMounted){let{next:X,bu:oe,u:ie,parent:ue,vnode:De}=v;{const wt=Kp(v);if(wt){X&&(X.el=De.el,he(v,X,Q)),wt.asyncDep.then(()=>{v.isUnmounted||G()});return}}let Ce=X,Et;Mr(v,!1),X?(X.el=De.el,he(v,X,Q)):X=De,oe&&ko(oe),(Et=X.props&&X.props.onVnodeBeforeUpdate)&&un(Et,ue,X,De),Mr(v,!0);const lt=Il(v),pt=v.subTree;v.subTree=lt,A(pt,lt,p(pt.el),x(pt),v,M,j),X.el=lt.el,Ce===null&&tv(v,lt.el),ie&&zt(ie,M),(Et=X.props&&X.props.onVnodeUpdated)&&zt(()=>un(Et,ue,X,De),M)}else{let X;const{el:oe,props:ie}=T,{bm:ue,m:De,parent:Ce,root:Et,type:lt}=v,pt=gs(T);if(Mr(v,!1),ue&&ko(ue),!pt&&(X=ie&&ie.onVnodeBeforeMount)&&un(X,Ce,T),Mr(v,!0),oe&&Le){const wt=()=>{v.subTree=Il(v),Le(oe,v.subTree,v,M,null)};pt&&lt.__asyncHydrate?lt.__asyncHydrate(oe,v,wt):wt()}else{Et.ce&&Et.ce._injectChildStyle(lt);const wt=v.subTree=Il(v);A(null,wt,D,B,v,M,j),T.el=wt.el}if(De&&zt(De,M),!pt&&(X=ie&&ie.onVnodeMounted)){const wt=T;zt(()=>un(X,Ce,wt),M)}(T.shapeFlag&256||Ce&&gs(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&v.a&&zt(v.a,M),v.isMounted=!0,T=D=B=null}};v.scope.on();const W=v.effect=new lp(G);v.scope.off();const H=v.update=W.run.bind(W),le=v.job=W.runIfDirty.bind(W);le.i=v,le.id=v.uid,W.scheduler=()=>qc(le),Mr(v,!0),H()},he=(v,T,D)=>{T.component=v;const B=v.vnode.props;v.vnode=T,v.next=null,F0(v,T.props,B,D),q0(v,T.children,D),br(),Bh(v),Ar()},Te=(v,T,D,B,M,j,Q,G,W=!1)=>{const H=v&&v.children,le=v?v.shapeFlag:0,X=T.children,{patchFlag:oe,shapeFlag:ie}=T;if(oe>0){if(oe&128){tn(H,X,D,B,M,j,Q,G,W);return}else if(oe&256){jt(H,X,D,B,M,j,Q,G,W);return}}ie&8?(le&16&&Ut(H,M,j),X!==H&&d(D,X)):le&16?ie&16?tn(H,X,D,B,M,j,Q,G,W):Ut(H,M,j,!0):(le&8&&d(D,""),ie&16&&y(X,D,B,M,j,Q,G,W))},jt=(v,T,D,B,M,j,Q,G,W)=>{v=v||ds,T=T||ds;const H=v.length,le=T.length,X=Math.min(H,le);let oe;for(oe=0;oe<X;oe++){const ie=T[oe]=W?rr(T[oe]):dn(T[oe]);A(v[oe],ie,D,null,M,j,Q,G,W)}H>le?Ut(v,M,j,!0,!1,X):y(T,D,B,M,j,Q,G,W,X)},tn=(v,T,D,B,M,j,Q,G,W)=>{let H=0;const le=T.length;let X=v.length-1,oe=le-1;for(;H<=X&&H<=oe;){const ie=v[H],ue=T[H]=W?rr(T[H]):dn(T[H]);if(ni(ie,ue))A(ie,ue,D,null,M,j,Q,G,W);else break;H++}for(;H<=X&&H<=oe;){const ie=v[X],ue=T[oe]=W?rr(T[oe]):dn(T[oe]);if(ni(ie,ue))A(ie,ue,D,null,M,j,Q,G,W);else break;X--,oe--}if(H>X){if(H<=oe){const ie=oe+1,ue=ie<le?T[ie].el:B;for(;H<=oe;)A(null,T[H]=W?rr(T[H]):dn(T[H]),D,ue,M,j,Q,G,W),H++}}else if(H>oe)for(;H<=X;)Ge(v[H],M,j,!0),H++;else{const ie=H,ue=H,De=new Map;for(H=ue;H<=oe;H++){const Nt=T[H]=W?rr(T[H]):dn(T[H]);Nt.key!=null&&De.set(Nt.key,H)}let Ce,Et=0;const lt=oe-ue+1;let pt=!1,wt=0;const Qn=new Array(lt);for(H=0;H<lt;H++)Qn[H]=0;for(H=ie;H<=X;H++){const Nt=v[H];if(Et>=lt){Ge(Nt,M,j,!0);continue}let Xt;if(Nt.key!=null)Xt=De.get(Nt.key);else for(Ce=ue;Ce<=oe;Ce++)if(Qn[Ce-ue]===0&&ni(Nt,T[Ce])){Xt=Ce;break}Xt===void 0?Ge(Nt,M,j,!0):(Qn[Xt-ue]=H+1,Xt>=wt?wt=Xt:pt=!0,A(Nt,T[Xt],D,null,M,j,Q,G,W),Et++)}const Yr=pt?W0(Qn):ds;for(Ce=Yr.length-1,H=lt-1;H>=0;H--){const Nt=ue+H,Xt=T[Nt],Xr=Nt+1<le?T[Nt+1].el:B;Qn[H]===0?A(null,Xt,D,Xr,M,j,Q,G,W):pt&&(Ce<0||H!==Yr[Ce]?Yt(Xt,D,Xr,2):Ce--)}}},Yt=(v,T,D,B,M=null)=>{const{el:j,type:Q,transition:G,children:W,shapeFlag:H}=v;if(H&6){Yt(v.component.subTree,T,D,B);return}if(H&128){v.suspense.move(T,D,B);return}if(H&64){Q.move(v,T,D,se);return}if(Q===Ye){r(j,T,D);for(let X=0;X<W.length;X++)Yt(W[X],T,D,B);r(v.anchor,T,D);return}if(Q===No){L(v,T,D);return}if(B!==2&&H&1&&G)if(B===0)G.beforeEnter(j),r(j,T,D),zt(()=>G.enter(j),M);else{const{leave:X,delayLeave:oe,afterLeave:ie}=G,ue=()=>r(j,T,D),De=()=>{X(j,()=>{ue(),ie&&ie()})};oe?oe(j,ue,De):De()}else r(j,T,D)},Ge=(v,T,D,B=!1,M=!1)=>{const{type:j,props:Q,ref:G,children:W,dynamicChildren:H,shapeFlag:le,patchFlag:X,dirs:oe,cacheIndex:ie}=v;if(X===-2&&(M=!1),G!=null&&Qo(G,null,D,v,!0),ie!=null&&(T.renderCache[ie]=void 0),le&256){T.ctx.deactivate(v);return}const ue=le&1&&oe,De=!gs(v);let Ce;if(De&&(Ce=Q&&Q.onVnodeBeforeUnmount)&&un(Ce,T,v),le&6)cn(v.component,D,B);else{if(le&128){v.suspense.unmount(D,B);return}ue&&Vr(v,null,T,"beforeUnmount"),le&64?v.type.remove(v,T,D,se,B):H&&!H.hasOnce&&(j!==Ye||X>0&&X&64)?Ut(H,T,D,!1,!0):(j===Ye&&X&384||!M&&le&16)&&Ut(W,T,D),B&&Ke(v)}(De&&(Ce=Q&&Q.onVnodeUnmounted)||ue)&&zt(()=>{Ce&&un(Ce,T,v),ue&&Vr(v,null,T,"unmounted")},D)},Ke=v=>{const{type:T,el:D,anchor:B,transition:M}=v;if(T===Ye){Kn(D,B);return}if(T===No){z(v);return}const j=()=>{s(D),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(v.shapeFlag&1&&M&&!M.persisted){const{leave:Q,delayLeave:G}=M,W=()=>Q(D,j);G?G(v.el,j,W):W()}else j()},Kn=(v,T)=>{let D;for(;v!==T;)D=m(v),s(v),v=D;s(T)},cn=(v,T,D)=>{const{bum:B,scope:M,job:j,subTree:Q,um:G,m:W,a:H}=v;Kh(W),Kh(H),B&&ko(B),M.stop(),j&&(j.flags|=8,Ge(Q,v,T,D)),G&&zt(G,T),zt(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Ut=(v,T,D,B=!1,M=!1,j=0)=>{for(let Q=j;Q<v.length;Q++)Ge(v[Q],T,D,B,M)},x=v=>{if(v.shapeFlag&6)return x(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=m(v.anchor||v.el),D=T&&T[f0];return D?m(D):T};let ee=!1;const Y=(v,T,D)=>{v==null?T._vnode&&Ge(T._vnode,null,null,!0):A(T._vnode||null,v,T,null,null,null,D),T._vnode=v,ee||(ee=!0,Bh(),Cp(),ee=!1)},se={p:A,um:Ge,m:Yt,r:Ke,mt:st,mc:y,pc:Te,pbc:I,n:x,o:t};let Re,Le;return{render:Y,hydrate:Re,createApp:M0(Y,Re)}}function Tl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function z0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gp(t,e,n=!1){const r=t.children,s=e.children;if(me(r)&&me(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=rr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Gp(o,l)),l.type===Ra&&(l.el=o.el)}}function W0(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Kp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kp(e)}function Kh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const G0=Symbol.for("v-scx"),K0=()=>sn(G0);function pn(t,e,n){return Qp(t,e,n)}function Qp(t,e,n=Ue){const{immediate:r,deep:s,flush:i,once:o}=n,l=ht({},n),c=e&&r||!e&&i!=="post";let u;if(Si){if(i==="sync"){const _=K0();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=fn,_.resume=fn,_.pause=fn,_}}const d=_t;l.call=(_,S,A)=>yn(_,d,S,A);let p=!1;i==="post"?l.scheduler=_=>{zt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,S)=>{S?_():qc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=c0(t,e,l);return Si&&(u?u.push(m):c&&m()),m}function Q0(t,e,n){const r=this.proxy,s=rt(t)?t.includes(".")?Jp(r,t):()=>r[t]:t.bind(r,r);let i;ve(e)?i=e:(i=e.handler,n=e);const o=qi(this),l=Qp(s,i.bind(r),n);return o(),l}function Jp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const J0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${en(e)}Modifiers`]||t[`${Ir(e)}Modifiers`];function Y0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ue;let s=n;const i=e.startsWith("update:"),o=i&&J0(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>rt(d)?d.trim():d)),o.number&&(s=n.map(jl)));let l,c=r[l=gl(e)]||r[l=gl(en(e))];!c&&i&&(c=r[l=gl(Ir(e))]),c&&yn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,yn(u,t,6,s)}}function Yp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ve(t)){const c=u=>{const d=Yp(u,e,!0);d&&(l=!0,ht(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(We(t)&&r.set(t,null),null):(me(i)?i.forEach(c=>o[c]=null):ht(o,i),We(t)&&r.set(t,o),o)}function Aa(t,e){return!t||!_a(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(t,e[0].toLowerCase()+e.slice(1))||Ve(t,Ir(e))||Ve(t,e))}function Il(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:S,inheritAttrs:A}=t,P=Ko(t);let N,V;try{if(n.shapeFlag&4){const z=s||r,Z=z;N=dn(u.call(Z,z,d,p,_,m,S)),V=l}else{const z=e;N=dn(z.length>1?z(p,{attrs:l,slots:o,emit:c}):z(p,null)),V=e.props?l:X0(l)}}catch(z){fi.length=0,Ia(z,t,1),N=pe(mr)}let L=N;if(V&&A!==!1){const z=Object.keys(V),{shapeFlag:Z}=L;z.length&&Z&7&&(i&&z.some(kc)&&(V=Z0(V,i)),L=Ts(L,V,!1,!0))}return n.dirs&&(L=Ts(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&jc(L,n.transition),N=L,Ko(P),N}const X0=t=>{let e;for(const n in t)(n==="class"||n==="style"||_a(n))&&((e||(e={}))[n]=t[n]);return e},Z0=(t,e)=>{const n={};for(const r in t)(!kc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ev(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Qh(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Aa(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Qh(r,o,u):!0:!!o;return!1}function Qh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Aa(n,i))return!0}return!1}function tv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xp=t=>t.__isSuspense;function nv(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):d0(t)}const Ye=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),mr=Symbol.for("v-cmt"),No=Symbol.for("v-stc"),fi=[];let Gt=null;function q(t=!1){fi.push(Gt=t?null:[])}function rv(){fi.pop(),Gt=fi[fi.length-1]||null}let Ai=1;function Jh(t,e=!1){Ai+=t,t<0&&Gt&&e&&(Gt.hasOnce=!0)}function Zp(t){return t.dynamicChildren=Ai>0?Gt||ds:null,rv(),Ai>0&&Gt&&Gt.push(t),t}function J(t,e,n,r,s,i){return Zp($(t,e,n,r,s,i,!0))}function He(t,e,n,r,s){return Zp(pe(t,e,n,r,s,!0))}function Ri(t){return t?t.__v_isVNode===!0:!1}function ni(t,e){return t.type===e.type&&t.key===e.key}const em=({key:t})=>t??null,Oo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?rt(t)||Ze(t)||ve(t)?{i:ut,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,r=0,s=null,i=t===Ye?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&em(e),ref:e&&Oo(e),scopeId:kp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ut};return l?(Gc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=rt(n)?8:16),Ai>0&&!o&&Gt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Gt.push(c),c}const pe=sv;function sv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===A0)&&(t=mr),Ri(t)){const l=Ts(t,e,!0);return n&&Gc(l,n),Ai>0&&!i&&Gt&&(l.shapeFlag&6?Gt[Gt.indexOf(t)]=l:Gt.push(l)),l.patchFlag=-2,l}if(mv(t)&&(t=t.__vccOpts),e){e=iv(e);let{class:l,style:c}=e;l&&!rt(l)&&(e.class=it(l)),We(c)&&(Uc(c)&&!me(c)&&(c=ht({},c)),e.style=Hn(c))}const o=rt(t)?1:Xp(t)?128:p0(t)?64:We(t)?4:ve(t)?2:0;return $(t,e,n,r,s,o,i,!0)}function iv(t){return t?Uc(t)||$p(t)?ht({},t):t:null}function Ts(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?ov(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&em(u),ref:e&&e.ref?n&&i?me(i)?i.concat(Oo(e)):[i,Oo(e)]:Oo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ts(t.ssContent),ssFallback:t.ssFallback&&Ts(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&jc(d,c.clone(d)),d}function Wt(t=" ",e=0){return pe(Ra,null,t,e)}function tm(t,e){const n=pe(No,null,t);return n.staticCount=e,n}function we(t="",e=!1){return e?(q(),He(mr,null,t)):pe(mr,null,t)}function dn(t){return t==null||typeof t=="boolean"?pe(mr):me(t)?pe(Ye,null,t.slice()):Ri(t)?rr(t):pe(Ra,null,String(t))}function rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ts(t)}function Gc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!$p(e)?e._ctx=ut:s===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),r&64?(n=16,e=[Wt(e)]):n=8);t.children=e,t.shapeFlag|=n}function ov(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=it([e.class,r.class]));else if(s==="style")e.style=Hn([e.style,r.style]);else if(_a(s)){const i=e[s],o=r[s];o&&i!==o&&!(me(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function un(t,e,n,r=null){yn(t,e,7,[n,r])}const av=Lp();let lv=0;function cv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||av,i={uid:lv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qp(r,s),emitsOptions:Yp(r,s),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Y0.bind(null,i),t.ce&&t.ce(i),i}let _t=null,Yo,Xl;{const t=wa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Yo=e("__VUE_INSTANCE_SETTERS__",n=>_t=n),Xl=e("__VUE_SSR_SETTERS__",n=>Si=n)}const qi=t=>{const e=_t;return Yo(t),t.scope.on(),()=>{t.scope.off(),Yo(e)}},Yh=()=>{_t&&_t.scope.off(),Yo(null)};function nm(t){return t.vnode.shapeFlag&4}let Si=!1;function uv(t,e=!1,n=!1){e&&Xl(e);const{props:r,children:s}=t.vnode,i=nm(t);L0(t,r,i,e),B0(t,s,n);const o=i?hv(t,e):void 0;return e&&Xl(!1),o}function hv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,C0);const{setup:r}=n;if(r){br();const s=t.setupContext=r.length>1?fv(t):null,i=qi(t),o=$i(r,t,0,[t.props,s]),l=Xf(o);if(Ar(),i(),(l||t.sp)&&!gs(t)&&Dp(t),l){if(o.then(Yh,Yh),e)return o.then(c=>{Xh(t,c,e)}).catch(c=>{Ia(c,t,0)});t.asyncDep=o}else Xh(t,o,e)}else rm(t,e)}function Xh(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=Ap(e)),rm(t,n)}let Zh;function rm(t,e,n){const r=t.type;if(!t.render){if(!e&&Zh&&!r.render){const s=r.template||zc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=ht(ht({isCustomElement:i,delimiters:l},o),c);r.render=Zh(s,u)}}t.render=r.render||fn}{const s=qi(t);br();try{P0(t)}finally{Ar(),s()}}}const dv={get(t,e){return Rt(t,"get",""),t[e]}};function fv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,dv),slots:t.slots,emit:t.emit,expose:e}}function Sa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ap($c(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in di)return di[n](t)},has(e,n){return n in e||n in di}})):t.proxy}function pv(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function mv(t){return ve(t)&&"__vccOpts"in t}const $e=(t,e)=>a0(t,e,Si);function sm(t,e,n){const r=arguments.length;return r===2?We(e)&&!me(e)?Ri(e)?pe(t,null,[e]):pe(t,e):pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ri(n)&&(n=[n]),pe(t,e,n))}const gv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zl;const ed=typeof window<"u"&&window.trustedTypes;if(ed)try{Zl=ed.createPolicy("vue",{createHTML:t=>t})}catch{}const im=Zl?t=>Zl.createHTML(t):t=>t,_v="http://www.w3.org/2000/svg",yv="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,td=Sn&&Sn.createElement("template"),vv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Sn.createElementNS(_v,t):e==="mathml"?Sn.createElementNS(yv,t):n?Sn.createElement(t,{is:n}):Sn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{td.innerHTML=im(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=td.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ev=Symbol("_vtc");function wv(t,e,n){const r=t[Ev];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nd=Symbol("_vod"),Tv=Symbol("_vsh"),Iv=Symbol(""),bv=/(^|;)\s*display\s*:/;function Av(t,e,n){const r=t.style,s=rt(n);let i=!1;if(n&&!s){if(e)if(rt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Vo(r,l,"")}else for(const o in e)n[o]==null&&Vo(r,o,"");for(const o in n)o==="display"&&(i=!0),Vo(r,o,n[o])}else if(s){if(e!==n){const o=r[Iv];o&&(n+=";"+o),r.cssText=n,i=bv.test(n)}}else e&&t.removeAttribute("style");nd in t&&(t[nd]=i?r.display:"",t[Tv]&&(r.display="none"))}const rd=/\s*!important$/;function Vo(t,e,n){if(me(n))n.forEach(r=>Vo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Rv(t,e);rd.test(n)?t.setProperty(Ir(r),n.replace(rd,""),"important"):t[r]=n}}const sd=["Webkit","Moz","ms"],bl={};function Rv(t,e){const n=bl[e];if(n)return n;let r=en(e);if(r!=="filter"&&r in t)return bl[e]=r;r=Ea(r);for(let s=0;s<sd.length;s++){const i=sd[s]+r;if(i in t)return bl[e]=i}return e}const id="http://www.w3.org/1999/xlink";function od(t,e,n,r,s,i=Oy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(id,e.slice(6,e.length)):t.setAttributeNS(id,e,n):n==null||i&&!np(n)?t.removeAttribute(e):t.setAttribute(e,i?"":jn(n)?String(n):n)}function ad(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?im(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=np(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function os(t,e,n,r){t.addEventListener(e,n,r)}function Sv(t,e,n,r){t.removeEventListener(e,n,r)}const ld=Symbol("_vei");function Cv(t,e,n,r,s=null){const i=t[ld]||(t[ld]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=Pv(e);if(r){const u=i[e]=Nv(r,s);os(t,l,u,c)}else o&&(Sv(t,l,o,c),i[e]=void 0)}}const cd=/(?:Once|Passive|Capture)$/;function Pv(t){let e;if(cd.test(t)){e={};let r;for(;r=t.match(cd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ir(t.slice(2)),e]}let Al=0;const kv=Promise.resolve(),Dv=()=>Al||(kv.then(()=>Al=0),Al=Date.now());function Nv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;yn(Ov(r,n.value),e,5,[r])};return n.value=t,n.attached=Dv(),n}function Ov(t,e){if(me(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ud=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Vv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?wv(t,r,o):e==="style"?Av(t,n,r):_a(e)?kc(e)||Cv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mv(t,e,r,o))?(ad(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&od(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!rt(r))?ad(t,en(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),od(t,e,r,o))};function Mv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ud(e)&&ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ud(e)&&rt(n)?!1:e in t}const hd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return me(e)?n=>ko(e,n):e};function xv(t){t.target.composing=!0}function dd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Rl=Symbol("_assign"),Is={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Rl]=hd(s);const i=r||s.props&&s.props.type==="number";os(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=jl(l)),t[Rl](l)}),n&&os(t,"change",()=>{t.value=t.value.trim()}),e||(os(t,"compositionstart",xv),os(t,"compositionend",dd),os(t,"change",dd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Rl]=hd(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?jl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Lv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Fv=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Ir(s.key);if(e.some(o=>o===i||Lv[o]===i))return t(s)})},Uv=ht({patchProp:Vv},vv);let fd;function $v(){return fd||(fd=j0(Uv))}const Bv=(...t)=>{const e=$v().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=jv(r);if(!s)return;const i=e._component;!ve(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,qv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function jv(t){return rt(t)?document.querySelector(t):t}var Hv=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let om;const Ca=t=>om=t,am=Symbol();function ec(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var pi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(pi||(pi={}));function zv(){const t=op(!0),e=t.run(()=>re({}));let n=[],r=[];const s=$c({install(i){Ca(s),s._a=i,i.provide(am,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Hv?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const lm=()=>{};function pd(t,e,n,r=lm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ap()&&Vy(s),s}function ss(t,...e){t.slice().forEach(n=>{n(...e)})}const Wv=t=>t(),md=Symbol(),Sl=Symbol();function tc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ec(s)&&ec(r)&&t.hasOwnProperty(n)&&!Ze(r)&&!ur(r)?t[n]=tc(s,r):t[n]=r}return t}const Gv=Symbol();function Kv(t){return!ec(t)||!t.hasOwnProperty(Gv)}const{assign:tr}=Object;function Qv(t){return!!(Ze(t)&&t.effect)}function Jv(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const d=r0(n.state.value[t]);return tr(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=$c($e(()=>{Ca(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return c=cm(t,u,e,n,r,!0),c}function cm(t,e,n={},r,s,i){let o;const l=tr({actions:{}},n),c={deep:!0};let u,d,p=[],m=[],_;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),re({});let A;function P(y){let E;u=d=!1,typeof y=="function"?(y(r.state.value[t]),E={type:pi.patchFunction,storeId:t,events:_}):(tc(r.state.value[t],y),E={type:pi.patchObject,payload:y,storeId:t,events:_});const I=A=Symbol();Bc().then(()=>{A===I&&(u=!0)}),d=!0,ss(p,E,r.state.value[t])}const N=i?function(){const{state:E}=n,I=E?E():{};this.$patch(R=>{tr(R,I)})}:lm;function V(){o.stop(),p=[],m=[],r._s.delete(t)}const L=(y,E="")=>{if(md in y)return y[Sl]=E,y;const I=function(){Ca(r);const R=Array.from(arguments),C=[],w=[];function st(he){C.push(he)}function Ft(he){w.push(he)}ss(m,{args:R,name:I[Sl],store:Z,after:st,onError:Ft});let Be;try{Be=y.apply(this&&this.$id===t?this:Z,R)}catch(he){throw ss(w,he),he}return Be instanceof Promise?Be.then(he=>(ss(C,he),he)).catch(he=>(ss(w,he),Promise.reject(he))):(ss(C,Be),Be)};return I[md]=!0,I[Sl]=E,I},z={_p:r,$id:t,$onAction:pd.bind(null,m),$patch:P,$reset:N,$subscribe(y,E={}){const I=pd(p,y,E.detached,()=>R()),R=o.run(()=>pn(()=>r.state.value[t],C=>{(E.flush==="sync"?d:u)&&y({storeId:t,type:pi.direct,events:_},C)},tr({},c,E)));return I},$dispose:V},Z=Ui(z);r._s.set(t,Z);const b=(r._a&&r._a.runWithContext||Wv)(()=>r._e.run(()=>(o=op()).run(()=>e({action:L}))));for(const y in b){const E=b[y];if(Ze(E)&&!Qv(E)||ur(E))i||(S&&Kv(E)&&(Ze(E)?E.value=S[y]:tc(E,S[y])),r.state.value[t][y]=E);else if(typeof E=="function"){const I=L(E,y);b[y]=I,l.actions[y]=E}}return tr(Z,b),tr(ke(Z),b),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:y=>{P(E=>{tr(E,y)})}}),r._p.forEach(y=>{tr(Z,o.run(()=>y({store:Z,app:r._a,pinia:r,options:l})))}),S&&i&&n.hydrate&&n.hydrate(Z.$state,S),u=!0,d=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function ji(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const u=x0();return l=l||(u?sn(am,null):null),l&&Ca(l),l=om,l._s.has(r)||(i?cm(r,e,s,l):Jv(r,s,l)),l._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const as=typeof document<"u";function um(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&um(t.default)}const Oe=Object.assign;function Cl(t,e){const n={};for(const r in e){const s=e[r];n[r]=an(s)?s.map(t):t(s)}return n}const mi=()=>{},an=Array.isArray,hm=/#/g,Xv=/&/g,Zv=/\//g,eE=/=/g,tE=/\?/g,dm=/\+/g,nE=/%5B/g,rE=/%5D/g,fm=/%5E/g,sE=/%60/g,pm=/%7B/g,iE=/%7C/g,mm=/%7D/g,oE=/%20/g;function Kc(t){return encodeURI(""+t).replace(iE,"|").replace(nE,"[").replace(rE,"]")}function aE(t){return Kc(t).replace(pm,"{").replace(mm,"}").replace(fm,"^")}function nc(t){return Kc(t).replace(dm,"%2B").replace(oE,"+").replace(hm,"%23").replace(Xv,"%26").replace(sE,"`").replace(pm,"{").replace(mm,"}").replace(fm,"^")}function lE(t){return nc(t).replace(eE,"%3D")}function cE(t){return Kc(t).replace(hm,"%23").replace(tE,"%3F")}function uE(t){return t==null?"":cE(t).replace(Zv,"%2F")}function Ci(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const hE=/\/$/,dE=t=>t.replace(hE,"");function Pl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=gE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ci(o)}}function fE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function gd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bs(e.matched[r],n.matched[s])&&gm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mE(t[n],e[n]))return!1;return!0}function mE(t,e){return an(t)?_d(t,e):an(e)?_d(e,t):t===e}function _d(t,e){return an(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Pi;(function(t){t.pop="pop",t.push="push"})(Pi||(Pi={}));var gi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(gi||(gi={}));function _E(t){if(!t)if(as){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dE(t)}const yE=/^[^#]+#/;function vE(t,e){return t.replace(yE,"#")+e}function EE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Pa=()=>({left:window.scrollX,top:window.scrollY});function wE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=EE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function yd(t,e){return(history.state?history.state.position-e:-1)+t}const rc=new Map;function TE(t,e){rc.set(t,e)}function IE(t){const e=rc.get(t);return rc.delete(t),e}let bE=()=>location.protocol+"//"+location.host;function _m(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),gd(c,"")}return gd(n,t)+r+s}function AE(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=_m(t,location),S=n.value,A=e.value;let P=0;if(m){if(n.value=_,e.value=m,o&&o===S){o=null;return}P=A?m.position-A.position:0}else r(_);s.forEach(N=>{N(n.value,S,{delta:P,type:Pi.pop,direction:P?P>0?gi.forward:gi.back:gi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const _=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:Pa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function vd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Pa():null}}function RE(t){const{history:e,location:n}=window,r={value:_m(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:bE()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,u){const d=Oe({},e.state,vd(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=Oe({},s.value,e.state,{forward:c,scroll:Pa()});i(d.current,d,!0);const p=Oe({},vd(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function SE(t){t=_E(t);const e=RE(t),n=AE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:vE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function CE(t){return typeof t=="string"||t&&typeof t=="object"}function ym(t){return typeof t=="string"||typeof t=="symbol"}const vm=Symbol("");var Ed;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ed||(Ed={}));function As(t,e){return Oe(new Error,{type:t,[vm]:!0},e)}function Rn(t,e){return t instanceof Error&&vm in t&&(e==null||!!(t.type&e))}const wd="[^/]+?",PE={sensitive:!1,strict:!1,start:!0,end:!0},kE=/[.+*?^${}()[\]/\\]/g;function DE(t,e){const n=Oe({},PE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(kE,"\\$&"),_+=40;else if(m.type===1){const{value:S,repeatable:A,optional:P,regexp:N}=m;i.push({name:S,repeatable:A,optional:P});const V=N||wd;if(V!==wd){_+=10;try{new RegExp(`(${V})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${V}): `+z.message)}}let L=A?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;p||(L=P&&u.length<2?`(?:/${L})`:"/"+L),P&&(L+="?"),s+=L,_+=20,P&&(_+=-8),A&&(_+=-20),V===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",S=i[m-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:S,repeatable:A,optional:P}=_,N=S in u?u[S]:"";if(an(N)&&!A)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const V=an(N)?N.join("/"):N;if(!V)if(P)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=V}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function NE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Em(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=NE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Td(r))return 1;if(Td(s))return-1}return s.length-r.length}function Td(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const OE={type:0,value:""},VE=/[a-zA-Z0-9_]/;function ME(t){if(!t)return[[]];if(t==="/")return[[OE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:VE.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function xE(t,e,n){const r=DE(ME(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function LE(t,e){const n=[],r=new Map;e=Rd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const S=!_,A=bd(p);A.aliasOf=_&&_.record;const P=Rd(e,p),N=[A];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of z)N.push(bd(Oe({},A,{components:_?_.record.components:A.components,path:Z,aliasOf:_?_.record:A})))}let V,L;for(const z of N){const{path:Z}=z;if(m&&Z[0]!=="/"){const ce=m.record.path,b=ce[ce.length-1]==="/"?"":"/";z.path=m.record.path+(Z&&b+Z)}if(V=xE(z,m,P),_?_.alias.push(V):(L=L||V,L!==V&&L.alias.push(V),S&&p.name&&!Ad(V)&&o(p.name)),wm(V)&&c(V),A.children){const ce=A.children;for(let b=0;b<ce.length;b++)i(ce[b],V,_&&_.children[b])}_=_||V}return L?()=>{o(L)}:mi}function o(p){if(ym(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=$E(p,n);n.splice(m,0,p),p.record.name&&!Ad(p)&&r.set(p.record.name,p)}function u(p,m){let _,S={},A,P;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw As(1,{location:p});P=_.record.name,S=Oe(Id(m.params,_.keys.filter(L=>!L.optional).concat(_.parent?_.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&Id(p.params,_.keys.map(L=>L.name))),A=_.stringify(S)}else if(p.path!=null)A=p.path,_=n.find(L=>L.re.test(A)),_&&(S=_.parse(A),P=_.record.name);else{if(_=m.name?r.get(m.name):n.find(L=>L.re.test(m.path)),!_)throw As(1,{location:p,currentLocation:m});P=_.record.name,S=Oe({},m.params,p.params),A=_.stringify(S)}const N=[];let V=_;for(;V;)N.unshift(V.record),V=V.parent;return{name:P,path:A,params:S,matched:N,meta:UE(N)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Id(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function bd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:FE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function FE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ad(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function UE(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Rd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $E(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Em(t,e[i])<0?r=i:n=i+1}const s=BE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function BE(t){let e=t;for(;e=e.parent;)if(wm(e)&&Em(t,e)===0)return e}function wm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function qE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(dm," "),o=i.indexOf("="),l=Ci(o<0?i:i.slice(0,o)),c=o<0?null:Ci(i.slice(o+1));if(l in e){let u=e[l];an(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Sd(t){let e="";for(let n in t){const r=t[n];if(n=lE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(r)?r.map(i=>i&&nc(i)):[r&&nc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function jE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=an(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const HE=Symbol(""),Cd=Symbol(""),ka=Symbol(""),Tm=Symbol(""),sc=Symbol("");function ri(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(As(4,{from:n,to:e})):m instanceof Error?c(m):CE(m)?c(As(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function kl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(um(c)){const d=(c.__vccOpts||c)[e];d&&i.push(sr(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Yv(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&sr(_,n,r,o,l,s)()}))}}return i}function Pd(t){const e=sn(ka),n=sn(Tm),r=$e(()=>{const c=ps(t.to);return e.resolve(c)}),s=$e(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(bs.bind(null,d));if(m>-1)return m;const _=kd(c[u-2]);return u>1&&kd(d)===_&&p[p.length-1].path!==_?p.findIndex(bs.bind(null,c[u-2])):m}),i=$e(()=>s.value>-1&&QE(n.params,r.value.params)),o=$e(()=>s.value>-1&&s.value===n.matched.length-1&&gm(n.params,r.value.params));function l(c={}){if(KE(c)){const u=e[ps(t.replace)?"replace":"push"](ps(t.to)).catch(mi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function zE(t){return t.length===1?t[0]:t}const WE=Ne({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pd,setup(t,{slots:e}){const n=Ui(Pd(t)),{options:r}=sn(ka),s=$e(()=>({[Dd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Dd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&zE(e.default(n));return t.custom?i:sm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),GE=WE;function KE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!an(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function kd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Dd=(t,e,n)=>t??e??n,JE=Ne({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=sn(sc),s=$e(()=>t.route||r.value),i=sn(Cd,0),o=$e(()=>{let u=ps(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=$e(()=>s.value.matched[o.value]);Do(Cd,$e(()=>o.value+1)),Do(HE,l),Do(sc,s);const c=re();return pn(()=>[c.value,l.value,t.name],([u,d,p],[m,_,S])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!bs(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Nd(n.default,{Component:m,route:u});const _=p.props[d],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,P=sm(m,Oe({},S,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Nd(n.default,{Component:P,route:u})||P}}});function Nd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YE=JE;function XE(t){const e=LE(t.routes,t),n=t.parseQuery||qE,r=t.stringifyQuery||Sd,s=t.history,i=ri(),o=ri(),l=ri(),c=e0(Zn);let u=Zn;as&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Cl.bind(null,x=>""+x),p=Cl.bind(null,uE),m=Cl.bind(null,Ci);function _(x,ee){let Y,se;return ym(x)?(Y=e.getRecordMatcher(x),se=ee):se=x,e.addRoute(se,Y)}function S(x){const ee=e.getRecordMatcher(x);ee&&e.removeRoute(ee)}function A(){return e.getRoutes().map(x=>x.record)}function P(x){return!!e.getRecordMatcher(x)}function N(x,ee){if(ee=Oe({},ee||c.value),typeof x=="string"){const T=Pl(n,x,ee.path),D=e.resolve({path:T.path},ee),B=s.createHref(T.fullPath);return Oe(T,D,{params:m(D.params),hash:Ci(T.hash),redirectedFrom:void 0,href:B})}let Y;if(x.path!=null)Y=Oe({},x,{path:Pl(n,x.path,ee.path).path});else{const T=Oe({},x.params);for(const D in T)T[D]==null&&delete T[D];Y=Oe({},x,{params:p(T)}),ee.params=p(ee.params)}const se=e.resolve(Y,ee),Re=x.hash||"";se.params=d(m(se.params));const Le=fE(r,Oe({},x,{hash:aE(Re),path:se.path})),v=s.createHref(Le);return Oe({fullPath:Le,hash:Re,query:r===Sd?jE(x.query):x.query||{}},se,{redirectedFrom:void 0,href:v})}function V(x){return typeof x=="string"?Pl(n,x,c.value.path):Oe({},x)}function L(x,ee){if(u!==x)return As(8,{from:ee,to:x})}function z(x){return b(x)}function Z(x){return z(Oe(V(x),{replace:!0}))}function ce(x){const ee=x.matched[x.matched.length-1];if(ee&&ee.redirect){const{redirect:Y}=ee;let se=typeof Y=="function"?Y(x):Y;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=V(se):{path:se},se.params={}),Oe({query:x.query,hash:x.hash,params:se.path!=null?{}:x.params},se)}}function b(x,ee){const Y=u=N(x),se=c.value,Re=x.state,Le=x.force,v=x.replace===!0,T=ce(Y);if(T)return b(Oe(V(T),{state:typeof T=="object"?Oe({},Re,T.state):Re,force:Le,replace:v}),ee||Y);const D=Y;D.redirectedFrom=ee;let B;return!Le&&pE(r,se,Y)&&(B=As(16,{to:D,from:se}),Yt(se,se,!0,!1)),(B?Promise.resolve(B):I(D,se)).catch(M=>Rn(M)?Rn(M,2)?M:tn(M):Te(M,D,se)).then(M=>{if(M){if(Rn(M,2))return b(Oe({replace:v},V(M.to),{state:typeof M.to=="object"?Oe({},Re,M.to.state):Re,force:Le}),ee||D)}else M=C(D,se,!0,v,Re);return R(D,se,M),M})}function y(x,ee){const Y=L(x,ee);return Y?Promise.reject(Y):Promise.resolve()}function E(x){const ee=Kn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(x):x()}function I(x,ee){let Y;const[se,Re,Le]=ZE(x,ee);Y=kl(se.reverse(),"beforeRouteLeave",x,ee);for(const T of se)T.leaveGuards.forEach(D=>{Y.push(sr(D,x,ee))});const v=y.bind(null,x,ee);return Y.push(v),Ut(Y).then(()=>{Y=[];for(const T of i.list())Y.push(sr(T,x,ee));return Y.push(v),Ut(Y)}).then(()=>{Y=kl(Re,"beforeRouteUpdate",x,ee);for(const T of Re)T.updateGuards.forEach(D=>{Y.push(sr(D,x,ee))});return Y.push(v),Ut(Y)}).then(()=>{Y=[];for(const T of Le)if(T.beforeEnter)if(an(T.beforeEnter))for(const D of T.beforeEnter)Y.push(sr(D,x,ee));else Y.push(sr(T.beforeEnter,x,ee));return Y.push(v),Ut(Y)}).then(()=>(x.matched.forEach(T=>T.enterCallbacks={}),Y=kl(Le,"beforeRouteEnter",x,ee,E),Y.push(v),Ut(Y))).then(()=>{Y=[];for(const T of o.list())Y.push(sr(T,x,ee));return Y.push(v),Ut(Y)}).catch(T=>Rn(T,8)?T:Promise.reject(T))}function R(x,ee,Y){l.list().forEach(se=>E(()=>se(x,ee,Y)))}function C(x,ee,Y,se,Re){const Le=L(x,ee);if(Le)return Le;const v=ee===Zn,T=as?history.state:{};Y&&(se||v?s.replace(x.fullPath,Oe({scroll:v&&T&&T.scroll},Re)):s.push(x.fullPath,Re)),c.value=x,Yt(x,ee,Y,v),tn()}let w;function st(){w||(w=s.listen((x,ee,Y)=>{if(!cn.listening)return;const se=N(x),Re=ce(se);if(Re){b(Oe(Re,{replace:!0,force:!0}),se).catch(mi);return}u=se;const Le=c.value;as&&TE(yd(Le.fullPath,Y.delta),Pa()),I(se,Le).catch(v=>Rn(v,12)?v:Rn(v,2)?(b(Oe(V(v.to),{force:!0}),se).then(T=>{Rn(T,20)&&!Y.delta&&Y.type===Pi.pop&&s.go(-1,!1)}).catch(mi),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),Te(v,se,Le))).then(v=>{v=v||C(se,Le,!1),v&&(Y.delta&&!Rn(v,8)?s.go(-Y.delta,!1):Y.type===Pi.pop&&Rn(v,20)&&s.go(-1,!1)),R(se,Le,v)}).catch(mi)}))}let Ft=ri(),Be=ri(),he;function Te(x,ee,Y){tn(x);const se=Be.list();return se.length?se.forEach(Re=>Re(x,ee,Y)):console.error(x),Promise.reject(x)}function jt(){return he&&c.value!==Zn?Promise.resolve():new Promise((x,ee)=>{Ft.add([x,ee])})}function tn(x){return he||(he=!x,st(),Ft.list().forEach(([ee,Y])=>x?Y(x):ee()),Ft.reset()),x}function Yt(x,ee,Y,se){const{scrollBehavior:Re}=t;if(!as||!Re)return Promise.resolve();const Le=!Y&&IE(yd(x.fullPath,0))||(se||!Y)&&history.state&&history.state.scroll||null;return Bc().then(()=>Re(x,ee,Le)).then(v=>v&&wE(v)).catch(v=>Te(v,x,ee))}const Ge=x=>s.go(x);let Ke;const Kn=new Set,cn={currentRoute:c,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:A,resolve:N,options:t,push:z,replace:Z,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Be.add,isReady:jt,install(x){const ee=this;x.component("RouterLink",GE),x.component("RouterView",YE),x.config.globalProperties.$router=ee,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>ps(c)}),as&&!Ke&&c.value===Zn&&(Ke=!0,z(s.location).catch(Re=>{}));const Y={};for(const Re in Zn)Object.defineProperty(Y,Re,{get:()=>c.value[Re],enumerable:!0});x.provide(ka,ee),x.provide(Tm,Tp(Y)),x.provide(sc,c);const se=x.unmount;Kn.add(x),x.unmount=function(){Kn.delete(x),Kn.size<1&&(u=Zn,w&&w(),w=null,c.value=Zn,Ke=!1,he=!1),se()}}};function Ut(x){return x.reduce((ee,Y)=>ee.then(()=>E(Y)),Promise.resolve())}return cn}function ZE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>bs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>bs(u,c))||s.push(c))}return[n,r,s]}function Ms(){return sn(ka)}const ew=Ne({props:{color:{type:String,default:"white"},text:{type:String,default:""}},setup(t){return{iconHomeStyle:$e(()=>({"--icon-color":t.color}))}}}),xe=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},tw={key:0,class:"text"};function nw(t,e,n,r,s,i){return q(),J("div",{class:"icon-home",style:Hn(t.iconHomeStyle)},[e[0]||(e[0]=$("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[$("path",{d:"M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"})],-1)),t.$props.text&&t.$props.text.length>0?(q(),J("div",tw,Ee(t.$props.text),1)):we("",!0)],4)}const rw=xe(ew,[["render",nw],["__scopeId","data-v-c1df092f"]]),sw=Ne({props:{color:{type:String,default:"white"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconLightSwitchStyle:$e(()=>({"--icon-color":t.color,fontSize:t.fontSize}))}}}),iw={fill:"#000000",viewBox:"0 0 64 64","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},xmlns:"http://www.w3.org/2000/svg"},ow={key:0,class:"text"};function aw(t,e,n,r,s,i){return q(),J("div",{class:"icon-light-switch",style:Hn(t.iconLightSwitchStyle)},[(q(),J("svg",iw,e[0]||(e[0]=[tm('<g stroke-width="0" data-v-be2209a6></g><g stroke-linecap="round" stroke-linejoin="round" data-v-be2209a6></g><g data-v-be2209a6><rect x="0" y="-320" width="1280" height="800" style="fill:none;" data-v-be2209a6></rect><g transform="matrix(1.3258707,0,0,1.3751367,-10.338119,-12.63741)" data-v-be2209a6><path d="m 25.022,17.099 c 2.715,-0.012 12.015,0.058 13.952,0 22.08,-0.662 22.961,30.643 0,30.023 -3.488,0.015 -12.792,-0.064 -13.952,0 C 14.663,47.694 7.982,40.3 8.025,31.85 8.067,23.399 15.555,16.13 25.022,17.099 Z M 32.904,32.11 C 33.047,26.747 28.24,22.014 22.889,22.095 c -7.31,0.111 -10.482,6.7 -10.016,10.947 0.625,5.691 5.193,9.06 10.016,9.084 5.536,0.026 9.862,-4.308 10.015,-10.016 z" style="fill-rule:nonzero;" data-v-be2209a6></path></g></g>',3)]))),t.$props.text&&t.$props.text.length>0?(q(),J("div",ow,Ee(t.$props.text),1)):we("",!0)],4)}const Im=xe(sw,[["render",aw],["__scopeId","data-v-be2209a6"]]),lw=Ne({props:{color:{type:String,default:"white"},strokeColor:{type:String,default:"black"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconScheduleStyle:$e(()=>({"--icon-color":t.color,"--icon-stroke-color":t.strokeColor,fontSize:t.fontSize}))}}}),cw={key:0,class:"text"};function uw(t,e,n,r,s,i){return q(),J("div",{class:"icon-schedule",style:Hn(t.iconScheduleStyle)},[e[0]||(e[0]=tm('<svg viewBox="0 0 24 24" stroke-width="3" stroke="#000000" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-604fa35c><path d="M 14.020182,21.685362 H 1.8335071 A 1.095136,1.0848345 0 0 1 0.74275167,20.622224 V 3.3169452 A 1.0907555,1.0804951 0 0 1 1.8335071,2.2364501 H 19.285596 a 1.0907555,1.0804951 0 0 1 1.090755,1.0804951 v 9.7201178" style="stroke-width:1.30797;" data-v-604fa35c></path><line x1="0.74275166" y1="7.0097213" x2="20.376347" y2="7.0097213" style="stroke-width:1.30797;" data-v-604fa35c></line><line x1="5.1714816" y1="2.2364504" x2="5.1714816" y2="0.066781186" style="stroke-width:1.30797;" data-v-604fa35c></line><line x1="15.667263" y1="2.2364504" x2="15.667263" y2="0.066781186" style="stroke-width:1.30797;" data-v-604fa35c></line><ellipse cx="17.769928" cy="17.775614" rx="5.4450164" ry="5.3937974" style="stroke-width:1.30797;" data-v-604fa35c></ellipse><polyline points="45.22 36.7 45.22 45.82 49.57 49.16" transform="matrix(0.43805442,0,0,0.43393378,-2.0388941,-1.9423323)" data-v-604fa35c></polyline></svg>',1)),t.$props.text&&t.$props.text.length>0?(q(),J("div",cw,Ee(t.$props.text),1)):we("",!0)],4)}const bm=xe(lw,[["render",uw],["__scopeId","data-v-604fa35c"]]),hw=Ne({name:"task-bar",components:{IconSchedule:bm,IconLightSwitch:Im,IconHome:rw},setup(){const t=Ms();Rr(()=>{e("relays")});function e(n){t.push({name:n})}return{}}}),dw={class:"task-bar"};function fw(t,e,n,r,s,i){const o=_e("icon-home"),l=_e("router-link"),c=_e("icon-light-switch"),u=_e("icon-schedule");return q(),J("div",dw,[pe(l,{to:"/home",class:"task"},{default:Mn(()=>[pe(o,{text:"Home"})]),_:1}),pe(l,{to:"/relays",class:"task"},{default:Mn(()=>[pe(c,{text:"Relays"})]),_:1}),pe(l,{to:"/schedules",class:"task"},{default:Mn(()=>[pe(u,{text:"Schedules"})]),_:1})])}const pw=xe(hw,[["render",fw],["__scopeId","data-v-a291f81d"]]),mw=Ne({props:{spinnerSize:{type:String,default:"30px"},withText:{type:Boolean,default:!1}},setup(){return{}}}),gw={class:"spinner"},_w={key:0,class:"text"};function yw(t,e,n,r,s,i){return q(),J("div",gw,[$("div",{class:"spinner-inner",style:Hn({"--spinnerSize":t.spinnerSize})},null,4),t.withText?(q(),J("div",_w,"Laden...")):we("",!0)])}const Da=xe(mw,[["render",yw],["__scopeId","data-v-8cb8f775"]]),vw=Ne({components:{Spinner:Da},props:{text:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},emits:["onButtonClicked"],setup(t,e){function n(){e.emit("onButtonClicked")}return{onClicked:n}}}),Ew={key:1,class:"button-content"};function ww(t,e,n,r,s,i){const o=_e("spinner");return q(),J("div",{class:it(["button-default",{"is-loading":t.isLoading}]),tabindex:"0",onClick:e[0]||(e[0]=(...l)=>t.onClicked&&t.onClicked(...l)),onKeydown:e[1]||(e[1]=Fv((...l)=>t.onClicked&&t.onClicked(...l),["enter"]))},[t.isLoading?(q(),He(o,{key:0,spinnerSize:"20px"})):(q(),J("div",Ew,[S0(t.$slots,"icon",{},void 0),Wt(" "+Ee(t.text),1)]))],34)}const Wn=xe(vw,[["render",ww],["__scopeId","data-v-77c23fe7"]]),Am=ji("user",()=>{const t=re(null);return{user:t,setUser:n=>{t.value=n}}});var Od={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Tw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Tw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Iw;const m=i<<2|l>>4;if(r.push(m),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Iw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bw=function(t){const e=Rm(t);return Sm.encodeByteArray(e,!0)},Xo=function(t){return bw(t).replace(/\./g,"")},Cm=function(t){try{return Sm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Aw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rw=()=>Aw().__FIREBASE_DEFAULTS__,Sw=()=>{if(typeof process>"u"||typeof Od>"u")return;const t=Od.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Cw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cm(t[1]);return e&&JSON.parse(e)},Na=()=>{try{return Rw()||Sw()||Cw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pm=t=>{var e,n;return(n=(e=Na())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Pw=t=>{const e=Pm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},km=()=>{var t;return(t=Na())===null||t===void 0?void 0:t.config},Dm=t=>{var e;return(e=Na())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Dw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Xo(JSON.stringify(n)),Xo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function Ow(){var t;const e=(t=Na())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lw(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fw(){return!Ow()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uw(){try{return typeof indexedDB=="object"}catch{return!1}}function $w(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bw,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?qw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Gn(s,l,r)}}function qw(t,e){return t.replace(jw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jw=/\{\$([^}]+)}/g;function Hw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Vd(i)&&Vd(o)){if(!Zo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zw(t,e){const n=new Ww(t,e);return n.subscribe.bind(n)}class Ww{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Dl),s.error===void 0&&(s.error=Dl),s.complete===void 0&&(s.complete=Dl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dl(){}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lr="[DEFAULT]";/**
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
 */class Kw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jw(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qw(t){return t===Lr?void 0:t}function Jw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Yw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const Xw={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},Zw=Ie.INFO,eT={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},tT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=eT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qc{constructor(e){this.name=e,this._logLevel=Zw,this._logHandler=tT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const nT=(t,e)=>e.some(n=>t instanceof n);let Md,xd;function rT(){return Md||(Md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sT(){return xd||(xd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nm=new WeakMap,ic=new WeakMap,Om=new WeakMap,Nl=new WeakMap,Jc=new WeakMap;function iT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nm.set(n,t)}).catch(()=>{}),Jc.set(e,t),e}function oT(t){if(ic.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ic.set(t,e)}let oc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Om.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aT(t){oc=t(oc)}function lT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ol(this),e,...n);return Om.set(r,e.sort?e.sort():[e]),hr(r)}:sT().includes(t)?function(...e){return t.apply(Ol(this),e),hr(Nm.get(this))}:function(...e){return hr(t.apply(Ol(this),e))}}function cT(t){return typeof t=="function"?lT(t):(t instanceof IDBTransaction&&oT(t),nT(t,rT())?new Proxy(t,oc):t)}function hr(t){if(t instanceof IDBRequest)return iT(t);if(Nl.has(t))return Nl.get(t);const e=cT(t);return e!==t&&(Nl.set(t,e),Jc.set(e,t)),e}const Ol=t=>Jc.get(t);function uT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(hr(o.result),c.oldVersion,c.newVersion,hr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const hT=["get","getKey","getAll","getAllKeys","count"],dT=["put","add","delete","clear"],Vl=new Map;function Ld(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vl.get(e))return Vl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=dT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Vl.set(e,i),i}aT(t=>({...t,get:(e,n,r)=>Ld(e,n)||t.get(e,n,r),has:(e,n)=>!!Ld(e,n)||t.has(e,n)}));/**
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
 */class fT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ac="@firebase/app",Fd="0.10.17";/**
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
 */const Fn=new Qc("@firebase/app"),mT="@firebase/app-compat",gT="@firebase/analytics-compat",_T="@firebase/analytics",yT="@firebase/app-check-compat",vT="@firebase/app-check",ET="@firebase/auth",wT="@firebase/auth-compat",TT="@firebase/database",IT="@firebase/data-connect",bT="@firebase/database-compat",AT="@firebase/functions",RT="@firebase/functions-compat",ST="@firebase/installations",CT="@firebase/installations-compat",PT="@firebase/messaging",kT="@firebase/messaging-compat",DT="@firebase/performance",NT="@firebase/performance-compat",OT="@firebase/remote-config",VT="@firebase/remote-config-compat",MT="@firebase/storage",xT="@firebase/storage-compat",LT="@firebase/firestore",FT="@firebase/vertexai",UT="@firebase/firestore-compat",$T="firebase",BT="11.1.0";/**
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
 */const lc="[DEFAULT]",qT={[ac]:"fire-core",[mT]:"fire-core-compat",[_T]:"fire-analytics",[gT]:"fire-analytics-compat",[vT]:"fire-app-check",[yT]:"fire-app-check-compat",[ET]:"fire-auth",[wT]:"fire-auth-compat",[TT]:"fire-rtdb",[IT]:"fire-data-connect",[bT]:"fire-rtdb-compat",[AT]:"fire-fn",[RT]:"fire-fn-compat",[ST]:"fire-iid",[CT]:"fire-iid-compat",[PT]:"fire-fcm",[kT]:"fire-fcm-compat",[DT]:"fire-perf",[NT]:"fire-perf-compat",[OT]:"fire-rc",[VT]:"fire-rc-compat",[MT]:"fire-gcs",[xT]:"fire-gcs-compat",[LT]:"fire-fst",[UT]:"fire-fst-compat",[FT]:"fire-vertex","fire-js":"fire-js",[$T]:"fire-js-all"};/**
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
 */const ea=new Map,jT=new Map,cc=new Map;function Ud(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rs(t){const e=t.name;if(cc.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;cc.set(e,t);for(const n of ea.values())Ud(n,t);for(const n of jT.values())Ud(n,t);return!0}function Yc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dn(t){return t.settings!==void 0}/**
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
 */const HT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new Hi("app","Firebase",HT);/**
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
 */class zT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=BT;function Vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw dr.create("bad-app-name",{appName:String(s)});if(n||(n=km()),!n)throw dr.create("no-options");const i=ea.get(s);if(i){if(Zo(n,i.options)&&Zo(r,i.config))return i;throw dr.create("duplicate-app",{appName:s})}const o=new Yw(s);for(const c of cc.values())o.addComponent(c);const l=new zT(n,r,o);return ea.set(s,l),l}function Mm(t=lc){const e=ea.get(t);if(!e&&t===lc&&km())return Vm();if(!e)throw dr.create("no-app",{appName:t});return e}function fr(t,e,n){var r;let s=(r=qT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(l.join(" "));return}Rs(new zr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const WT="firebase-heartbeat-database",GT=1,ki="firebase-heartbeat-store";let Ml=null;function xm(){return Ml||(Ml=uT(WT,GT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),Ml}async function KT(t){try{const n=(await xm()).transaction(ki),r=await n.objectStore(ki).get(Lm(t));return await n.done,r}catch(e){if(e instanceof Gn)Fn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function $d(t,e){try{const r=(await xm()).transaction(ki,"readwrite");await r.objectStore(ki).put(e,Lm(t)),await r.done}catch(n){if(n instanceof Gn)Fn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function Lm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const QT=1024,JT=30*24*60*60*1e3;class YT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=JT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bd(),{heartbeatsToSend:r,unsentEntries:s}=XT(this._heartbeatsCache.heartbeats),i=Xo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Fn.warn(n),""}}}function Bd(){return new Date().toISOString().substring(0,10)}function XT(t,e=QT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uw()?$w().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await KT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qd(t){return Xo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function e1(t){Rs(new zr("platform-logger",e=>new fT(e),"PRIVATE")),Rs(new zr("heartbeat",e=>new YT(e),"PRIVATE")),fr(ac,Fd,t),fr(ac,Fd,"esm2017"),fr("fire-js","")}e1("");function Xc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Fm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const t1=Fm,Um=new Hi("auth","Firebase",Fm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Qc("@firebase/auth");function n1(t,...e){ta.logLevel<=Ie.WARN&&ta.warn(`Auth (${xs}): ${t}`,...e)}function Mo(t,...e){ta.logLevel<=Ie.ERROR&&ta.error(`Auth (${xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw eu(t,...e)}function on(t,...e){return eu(t,...e)}function Zc(t,e,n){const r=Object.assign(Object.assign({},t1()),{[e]:n});return new Hi("auth","Firebase",r).create(e,{appName:t.name})}function qr(t){return Zc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function r1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&En(t,"argument-error"),Zc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Um.create(t,...e)}function fe(t,e,...n){if(!t)throw eu(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mo(e),new Error(e)}function Un(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function s1(){return jd()==="http:"||jd()==="https:"}function jd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s1()||Mw()||"connection"in navigator)?navigator.onLine:!0}function o1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=Nw()||xw()}get(){return i1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=new Wi(3e4,6e4);function nu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ls(t,e,n,r,s={}){return Bm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=zi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Vw()||(u.referrerPolicy="no-referrer"),$m.fetch()(qm(t,t.config.apiHost,n,l),u)})}async function Bm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},a1),e);try{const s=new u1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw bo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw bo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zc(t,d,u);En(t,d)}}catch(s){if(s instanceof Gn)throw s;En(t,"network-request-failed",{message:String(s)})}}async function c1(t,e,n,r,s={}){const i=await Ls(t,e,n,r,s);return"mfaPendingCredential"in i&&En(t,"multi-factor-auth-required",{_serverResponse:i}),i}function qm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?tu(t.config,s):`${t.config.apiScheme}://${s}`}class u1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),l1.get())})}}function bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(t,e){return Ls(t,"POST","/v1/accounts:delete",e)}async function jm(t,e){return Ls(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function d1(t,e=!1){const n=dt(t),r=await n.getIdToken(e),s=ru(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_i(xl(s.auth_time)),issuedAtTime:_i(xl(s.iat)),expirationTime:_i(xl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xl(t){return Number(t)*1e3}function ru(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cm(n);return s?JSON.parse(s):(Mo("Failed to decode base64 JWT payload"),null)}catch(s){return Mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hd(t){const e=ru(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&f1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function f1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function na(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Di(t,jm(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Hm(i.providerUserInfo):[],l=g1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new hc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function m1(t){const e=dt(t);await na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function g1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Hm(t){return t.map(e=>{var{providerId:n}=e,r=Xc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(t,e){const n=await Bm(t,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=qm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",$m.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function y1(t,e){return Ls(t,"POST","/v2/accounts:revokeToken",nu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Hd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await _1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _s;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new p1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Di(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return d1(this,e)}reload(){return m1(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(qr(this.auth));const e=await this.getIdToken();return await Di(this,h1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:z,isAnonymous:Z,providerData:ce,stsTokenManager:b}=n;fe(L&&b,e,"internal-error");const y=_s.fromJSON(this.name,b);fe(typeof L=="string",e,"internal-error"),er(p,e.name),er(m,e.name),fe(typeof z=="boolean",e,"internal-error"),fe(typeof Z=="boolean",e,"internal-error"),er(_,e.name),er(S,e.name),er(A,e.name),er(P,e.name),er(N,e.name),er(V,e.name);const E=new On({uid:L,auth:e,email:m,emailVerified:z,displayName:p,isAnonymous:Z,photoURL:S,phoneNumber:_,tenantId:A,stsTokenManager:y,createdAt:N,lastLoginAt:V});return ce&&Array.isArray(ce)&&(E.providerData=ce.map(I=>Object.assign({},I))),P&&(E._redirectEventId=P),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new _s;s.updateFromServerResponse(n);const i=new On({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await na(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Hm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new _s;l.updateFromIdToken(r);const c=new On({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new Map;function Vn(t){Un(t instanceof Function,"Expected a class definition");let e=zd.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zd.set(t,e),e)}/**
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
 */class zm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zm.type="NONE";const Wd=zm;/**
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
 */function xo(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xo(this.userKey,s.apiKey,i),this.fullPersistenceKey=xo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ys(Vn(Wd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Vn(Wd);const o=xo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=On._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ys(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ys(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ym(e))return"Blackberry";if(Xm(e))return"Webos";if(Gm(e))return"Safari";if((e.includes("chrome/")||Km(e))&&!e.includes("edge/"))return"Chrome";if(Jm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wm(t=Dt()){return/firefox\//i.test(t)}function Gm(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Km(t=Dt()){return/crios\//i.test(t)}function Qm(t=Dt()){return/iemobile/i.test(t)}function Jm(t=Dt()){return/android/i.test(t)}function Ym(t=Dt()){return/blackberry/i.test(t)}function Xm(t=Dt()){return/webos/i.test(t)}function su(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function v1(t=Dt()){var e;return su(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function E1(){return Lw()&&document.documentMode===10}function Zm(t=Dt()){return su(t)||Jm(t)||Xm(t)||Ym(t)||/windows phone/i.test(t)||Qm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t,e=[]){let n;switch(t){case"Browser":n=Gd(Dt());break;case"Worker":n=`${Gd(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
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
 */class w1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function T1(t,e={}){return Ls(t,"GET","/v2/passwordPolicy",nu(t,e))}/**
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
 */const I1=6;class b1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:I1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kd(this),this.idTokenSubscription=new Kd(this),this.beforeStateQueue=new w1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Um,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await jm(this,{idToken:e}),r=await On._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=o1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(qr(this));const n=e?dt(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await T1(this),n=new b1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await y1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&n1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Oa(t){return dt(t)}class Kd{constructor(e){this.auth=e,this.observer=null,this.addObserver=zw(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function R1(t){iu=t}function S1(t){return iu.loadJS(t)}function C1(){return iu.gapiScript}function P1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t,e){const n=Yc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zo(i,e??{}))return s;En(s,"already-initialized")}return n.initialize({options:e})}function D1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function N1(t,e,n){const r=Oa(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=tg(e),{host:o,port:l}=O1(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),V1()}function tg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function O1(t){const e=tg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Qd(o)}}}function Qd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function V1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e){return c1(t,"POST","/v1/accounts:signInWithIdp",nu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="http://localhost";class Wr extends ng{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Xc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:M1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gi extends ou{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Gi{constructor(){super("facebook.com")}static credential(e){return Wr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Gi{constructor(){super("github.com")}static credential(e){return Wr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Gi{constructor(){super("twitter.com")}static credential(e,n){return Wr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await On._fromIdTokenResponse(e,r,s),o=Jd(r);return new Ss({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Jd(r);return new Ss({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Jd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends Gn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ra.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ra(e,n,r,s)}}function rg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ra._fromErrorAndOperation(t,i,e,r):i})}async function x1(t,e,n=!1){const r=await Di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ss._forOperation(t,"link",r)}/**
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
 */async function L1(t,e,n=!1){const{auth:r}=t;if(Dn(r.app))return Promise.reject(qr(r));const s="reauthenticate";try{const i=await Di(t,rg(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=ru(i.idToken);fe(o,r,"internal-error");const{sub:l}=o;return fe(t.uid===l,r,"user-mismatch"),Ss._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(t,e,n=!1){if(Dn(t.app))return Promise.reject(qr(t));const r="signIn",s=await rg(t,r,e),i=await Ss._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function U1(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function $1(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}const sa="__sak";/**
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
 */class sg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=1e3,q1=10;class ig extends sg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);E1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,q1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},B1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ig.type="LOCAL";const j1=ig;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og extends sg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}og.type="SESSION";const ag=og;/**
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
 */function H1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await H1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class z1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=au("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function W1(t){mn().location.href=t}/**
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
 */function lg(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function G1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Q1(){return lg()?self:null}/**
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
 */const cg="firebaseLocalStorageDb",J1=1,ia="firebaseLocalStorage",ug="fbase_key";class Ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ma(t,e){return t.transaction([ia],e?"readwrite":"readonly").objectStore(ia)}function Y1(){const t=indexedDB.deleteDatabase(cg);return new Ki(t).toPromise()}function dc(){const t=indexedDB.open(cg,J1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ia,{keyPath:ug})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ia)?e(r):(r.close(),await Y1(),e(await dc()))})})}async function Yd(t,e,n){const r=Ma(t,!0).put({[ug]:e,value:n});return new Ki(r).toPromise()}async function X1(t,e){const n=Ma(t,!1).get(e),r=await new Ki(n).toPromise();return r===void 0?null:r.value}function Xd(t,e){const n=Ma(t,!0).delete(e);return new Ki(n).toPromise()}const Z1=800,eI=3;class hg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Va._getInstance(Q1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await G1(),!this.activeServiceWorker)return;this.sender=new z1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||K1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dc();return await Yd(e,sa,"1"),await Xd(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>X1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ma(s,!1).getAll();return new Ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hg.type="LOCAL";const tI=hg;new Wi(3e4,6e4);/**
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
 */function dg(t,e){return e?Vn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lu extends ng{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nI(t){return F1(t.auth,new lu(t),t.bypassAuthState)}function rI(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),L1(n,new lu(t),t.bypassAuthState)}async function sI(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),x1(n,new lu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nI;case"linkViaPopup":case"linkViaRedirect":return sI;case"reauthViaPopup":case"reauthViaRedirect":return rI;default:En(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=new Wi(2e3,1e4);async function oI(t,e,n){if(Dn(t.app))return Promise.reject(on(t,"operation-not-supported-in-this-environment"));const r=Oa(t);r1(t,e,ou);const s=dg(r,n);return new Fr(r,"signInViaPopup",e,s).executeNotNull()}class Fr extends fg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iI.get())};e()}}Fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="pendingRedirect",Lo=new Map;class lI extends fg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Lo.get(this.auth._key());if(!e){try{const r=await cI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cI(t,e){const n=dI(e),r=hI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uI(t,e){Lo.set(t._key(),e)}function hI(t){return Vn(t._redirectPersistence)}function dI(t){return xo(aI,t.config.apiKey,t.name)}async function fI(t,e,n=!1){if(Dn(t.app))return Promise.reject(qr(t));const r=Oa(t),s=dg(r,e),o=await new lI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=10*60*1e3;class mI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zd(e))}saveEventToCache(e){this.cachedEventUids.add(Zd(e)),this.lastProcessedEventTime=Date.now()}}function Zd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(t,e={}){return Ls(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vI=/^https?/;async function EI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _I(t);for(const n of e)try{if(wI(n))return}catch{}En(t,"unauthorized-domain")}function wI(t){const e=uc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vI.test(n))return!1;if(yI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const TI=new Wi(3e4,6e4);function ef(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function II(t){return new Promise((e,n)=>{var r,s,i;function o(){ef(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ef(),n(on(t,"network-request-failed"))},timeout:TI.get()})}if(!((s=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mn().gapi)===null||i===void 0)&&i.load)o();else{const l=P1("iframefcb");return mn()[l]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},S1(`${C1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function bI(t){return Fo=Fo||II(t),Fo}/**
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
 */const AI=new Wi(5e3,15e3),RI="__/auth/iframe",SI="emulator/auth/iframe",CI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kI(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tu(e,SI):`https://${t.config.authDomain}/${RI}`,r={apiKey:e.apiKey,appName:t.name,v:xs},s=PI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zi(r).slice(1)}`}async function DI(t){const e=await bI(t),n=mn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:kI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=mn().setTimeout(()=>{i(o)},AI.get());function c(){mn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const NI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OI=500,VI=600,MI="_blank",xI="http://localhost";class tf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LI(t,e,n,r=OI,s=VI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},NI),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Dt().toLowerCase();n&&(l=Km(u)?MI:n),Wm(u)&&(e=e||xI,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(v1(u)&&l!=="_self")return FI(e||"",l),new tf(null);const p=window.open(e||"",l,d);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new tf(p)}function FI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const UI="__/auth/handler",$I="emulator/auth/handler",BI=encodeURIComponent("fac");async function nf(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:s};if(e instanceof ou){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Gi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${BI}=${encodeURIComponent(c)}`:"";return`${qI(t)}?${zi(l).slice(1)}${u}`}function qI({config:t}){return t.emulator?tu(t,$I):`https://${t.authDomain}/${UI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="webStorageSupport";class jI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ag,this._completeRedirectFn=fI,this._overrideRedirectResult=uI}async _openPopup(e,n,r,s){var i;Un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await nf(e,n,r,uc(),s);return LI(e,o,au())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await nf(e,n,r,uc(),s);return W1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DI(e),r=new mI(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ll,{type:Ll},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ll];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zm()||Gm()||su()}}const HI=jI;var rf="@firebase/auth",sf="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GI(t){Rs(new zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eg(t)},u=new A1(r,s,i,c);return D1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rs(new zr("auth-internal",e=>{const n=Oa(e.getProvider("auth").getImmediate());return(r=>new zI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(rf,sf,WI(t)),fr(rf,sf,"esm2017")}/**
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
 */const KI=5*60,QI=Dm("authIdTokenMaxAge")||KI;let of=null;const JI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QI)return;const s=n==null?void 0:n.token;of!==s&&(of=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ft(t=Mm()){const e=Yc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=k1(t,{popupRedirectResolver:HI,persistence:[tI,j1,ag]}),r=Dm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=JI(i.toString());$1(n,o,()=>o(n.currentUser)),U1(n,l=>o(l))}}const s=Pm("auth");return s&&N1(n,`http://${s}`),n}function YI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}R1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",YI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GI("Browser");var XI="firebase",ZI="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(XI,ZI,"app");const eb={apiKey:"AIzaSyALY2Eu62yzZPuaySeDBI3ONz3DYCq2388",authDomain:"relay-hub.firebaseapp.com",projectId:"relay-hub",storageBucket:"relay-hub.appspot.com",messagingSenderId:"1088994606939",appId:"1:1088994606939:web:17dc0c1330726f959ca47e"},et=Vm(eb),tb=ft(et),nb=async()=>{const t=new kn;try{return(await oI(tb,t)).user}catch(e){throw console.error("Error during sign-in:",e),e}},rb=Ne({components:{ButtonDefault:Wn},emits:["onButtonClicked"],props:{},setup(){const t=Am(),e=re(!1);async function n(){e.value=!0;try{const r=await nb();t.setUser({uid:r.uid,displayName:r.displayName,email:r.email,photoURL:r.photoURL})}catch(r){t.setUser(null),console.error("Failed to sign in:",r)}}return{isLoading:e,onButtonClicked:n}}}),sb={class:"button-google"};function ib(t,e,n,r,s,i){const o=_e("ButtonDefault");return q(),J("div",sb,[pe(o,{text:"Sign in with Google",isLoading:t.isLoading,onOnButtonClicked:t.onButtonClicked},{icon:Mn(()=>e[0]||(e[0]=[$("div",{class:"google-icon"},null,-1)])),_:1},8,["isLoading","onOnButtonClicked"])])}const ob=xe(rb,[["render",ib],["__scopeId","data-v-33e465cd"]]),ab=Ne({name:"sign-in",components:{ButtonGoogle:ob},setup(){return{}}}),lb={class:"sign-in"};function cb(t,e,n,r,s,i){const o=_e("button-google");return q(),J("div",lb,[e[0]||(e[0]=$("div",{class:"relay-hub"},"RelayHub",-1)),pe(o)])}const ub=xe(ab,[["render",cb],["__scopeId","data-v-9540f920"]]),hb=Ne({name:"ToggleButton",props:{modelValue:{type:Boolean,required:!0},isBlocked:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=re(t.modelValue),r=re(!1);return pn(()=>t.modelValue,i=>{n.value=i}),{isActive:n,toggleSwitch:()=>{t.isBlocked||r.value||(n.value=!n.value,r.value=!0,setTimeout(()=>r.value=!1,500),e("update:modelValue",n.value))}}}});function db(t,e,n,r,s,i){return q(),J("div",{class:it(["toggle-switch",{active:t.isActive}]),onClick:e[0]||(e[0]=(...o)=>t.toggleSwitch&&t.toggleSwitch(...o))},e[1]||(e[1]=[$("div",{class:"switch"},null,-1)]),2)}const fb=xe(hb,[["render",db],["__scopeId","data-v-17dbdf4b"]]);var af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,mg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function E(){}E.prototype=y.prototype,b.D=y.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(I,R,C){for(var w=Array(arguments.length-2),st=2;st<arguments.length;st++)w[st-2]=arguments[st];return y.prototype[R].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,E){E||(E=0);var I=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)I[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;16>R;++R)I[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=b.g[0],E=b.g[1],R=b.g[2];var C=b.g[3],w=y+(C^E&(R^C))+I[0]+3614090360&4294967295;y=E+(w<<7&4294967295|w>>>25),w=C+(R^y&(E^R))+I[1]+3905402710&4294967295,C=y+(w<<12&4294967295|w>>>20),w=R+(E^C&(y^E))+I[2]+606105819&4294967295,R=C+(w<<17&4294967295|w>>>15),w=E+(y^R&(C^y))+I[3]+3250441966&4294967295,E=R+(w<<22&4294967295|w>>>10),w=y+(C^E&(R^C))+I[4]+4118548399&4294967295,y=E+(w<<7&4294967295|w>>>25),w=C+(R^y&(E^R))+I[5]+1200080426&4294967295,C=y+(w<<12&4294967295|w>>>20),w=R+(E^C&(y^E))+I[6]+2821735955&4294967295,R=C+(w<<17&4294967295|w>>>15),w=E+(y^R&(C^y))+I[7]+4249261313&4294967295,E=R+(w<<22&4294967295|w>>>10),w=y+(C^E&(R^C))+I[8]+1770035416&4294967295,y=E+(w<<7&4294967295|w>>>25),w=C+(R^y&(E^R))+I[9]+2336552879&4294967295,C=y+(w<<12&4294967295|w>>>20),w=R+(E^C&(y^E))+I[10]+4294925233&4294967295,R=C+(w<<17&4294967295|w>>>15),w=E+(y^R&(C^y))+I[11]+2304563134&4294967295,E=R+(w<<22&4294967295|w>>>10),w=y+(C^E&(R^C))+I[12]+1804603682&4294967295,y=E+(w<<7&4294967295|w>>>25),w=C+(R^y&(E^R))+I[13]+4254626195&4294967295,C=y+(w<<12&4294967295|w>>>20),w=R+(E^C&(y^E))+I[14]+2792965006&4294967295,R=C+(w<<17&4294967295|w>>>15),w=E+(y^R&(C^y))+I[15]+1236535329&4294967295,E=R+(w<<22&4294967295|w>>>10),w=y+(R^C&(E^R))+I[1]+4129170786&4294967295,y=E+(w<<5&4294967295|w>>>27),w=C+(E^R&(y^E))+I[6]+3225465664&4294967295,C=y+(w<<9&4294967295|w>>>23),w=R+(y^E&(C^y))+I[11]+643717713&4294967295,R=C+(w<<14&4294967295|w>>>18),w=E+(C^y&(R^C))+I[0]+3921069994&4294967295,E=R+(w<<20&4294967295|w>>>12),w=y+(R^C&(E^R))+I[5]+3593408605&4294967295,y=E+(w<<5&4294967295|w>>>27),w=C+(E^R&(y^E))+I[10]+38016083&4294967295,C=y+(w<<9&4294967295|w>>>23),w=R+(y^E&(C^y))+I[15]+3634488961&4294967295,R=C+(w<<14&4294967295|w>>>18),w=E+(C^y&(R^C))+I[4]+3889429448&4294967295,E=R+(w<<20&4294967295|w>>>12),w=y+(R^C&(E^R))+I[9]+568446438&4294967295,y=E+(w<<5&4294967295|w>>>27),w=C+(E^R&(y^E))+I[14]+3275163606&4294967295,C=y+(w<<9&4294967295|w>>>23),w=R+(y^E&(C^y))+I[3]+4107603335&4294967295,R=C+(w<<14&4294967295|w>>>18),w=E+(C^y&(R^C))+I[8]+1163531501&4294967295,E=R+(w<<20&4294967295|w>>>12),w=y+(R^C&(E^R))+I[13]+2850285829&4294967295,y=E+(w<<5&4294967295|w>>>27),w=C+(E^R&(y^E))+I[2]+4243563512&4294967295,C=y+(w<<9&4294967295|w>>>23),w=R+(y^E&(C^y))+I[7]+1735328473&4294967295,R=C+(w<<14&4294967295|w>>>18),w=E+(C^y&(R^C))+I[12]+2368359562&4294967295,E=R+(w<<20&4294967295|w>>>12),w=y+(E^R^C)+I[5]+4294588738&4294967295,y=E+(w<<4&4294967295|w>>>28),w=C+(y^E^R)+I[8]+2272392833&4294967295,C=y+(w<<11&4294967295|w>>>21),w=R+(C^y^E)+I[11]+1839030562&4294967295,R=C+(w<<16&4294967295|w>>>16),w=E+(R^C^y)+I[14]+4259657740&4294967295,E=R+(w<<23&4294967295|w>>>9),w=y+(E^R^C)+I[1]+2763975236&4294967295,y=E+(w<<4&4294967295|w>>>28),w=C+(y^E^R)+I[4]+1272893353&4294967295,C=y+(w<<11&4294967295|w>>>21),w=R+(C^y^E)+I[7]+4139469664&4294967295,R=C+(w<<16&4294967295|w>>>16),w=E+(R^C^y)+I[10]+3200236656&4294967295,E=R+(w<<23&4294967295|w>>>9),w=y+(E^R^C)+I[13]+681279174&4294967295,y=E+(w<<4&4294967295|w>>>28),w=C+(y^E^R)+I[0]+3936430074&4294967295,C=y+(w<<11&4294967295|w>>>21),w=R+(C^y^E)+I[3]+3572445317&4294967295,R=C+(w<<16&4294967295|w>>>16),w=E+(R^C^y)+I[6]+76029189&4294967295,E=R+(w<<23&4294967295|w>>>9),w=y+(E^R^C)+I[9]+3654602809&4294967295,y=E+(w<<4&4294967295|w>>>28),w=C+(y^E^R)+I[12]+3873151461&4294967295,C=y+(w<<11&4294967295|w>>>21),w=R+(C^y^E)+I[15]+530742520&4294967295,R=C+(w<<16&4294967295|w>>>16),w=E+(R^C^y)+I[2]+3299628645&4294967295,E=R+(w<<23&4294967295|w>>>9),w=y+(R^(E|~C))+I[0]+4096336452&4294967295,y=E+(w<<6&4294967295|w>>>26),w=C+(E^(y|~R))+I[7]+1126891415&4294967295,C=y+(w<<10&4294967295|w>>>22),w=R+(y^(C|~E))+I[14]+2878612391&4294967295,R=C+(w<<15&4294967295|w>>>17),w=E+(C^(R|~y))+I[5]+4237533241&4294967295,E=R+(w<<21&4294967295|w>>>11),w=y+(R^(E|~C))+I[12]+1700485571&4294967295,y=E+(w<<6&4294967295|w>>>26),w=C+(E^(y|~R))+I[3]+2399980690&4294967295,C=y+(w<<10&4294967295|w>>>22),w=R+(y^(C|~E))+I[10]+4293915773&4294967295,R=C+(w<<15&4294967295|w>>>17),w=E+(C^(R|~y))+I[1]+2240044497&4294967295,E=R+(w<<21&4294967295|w>>>11),w=y+(R^(E|~C))+I[8]+1873313359&4294967295,y=E+(w<<6&4294967295|w>>>26),w=C+(E^(y|~R))+I[15]+4264355552&4294967295,C=y+(w<<10&4294967295|w>>>22),w=R+(y^(C|~E))+I[6]+2734768916&4294967295,R=C+(w<<15&4294967295|w>>>17),w=E+(C^(R|~y))+I[13]+1309151649&4294967295,E=R+(w<<21&4294967295|w>>>11),w=y+(R^(E|~C))+I[4]+4149444226&4294967295,y=E+(w<<6&4294967295|w>>>26),w=C+(E^(y|~R))+I[11]+3174756917&4294967295,C=y+(w<<10&4294967295|w>>>22),w=R+(y^(C|~E))+I[2]+718787259&4294967295,R=C+(w<<15&4294967295|w>>>17),w=E+(C^(R|~y))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var E=y-this.blockSize,I=this.B,R=this.h,C=0;C<y;){if(R==0)for(;C<=E;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<y;)if(I[R++]=b.charCodeAt(C++),R==this.blockSize){s(this,I),R=0;break}}else for(;C<y;)if(I[R++]=b[C++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var E=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=E&255,E/=256;for(this.u(b),b=Array(16),y=E=0;4>y;++y)for(var I=0;32>I;I+=8)b[E++]=this.g[y]>>>I&255;return b};function i(b,y){var E=l;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=y(b)}function o(b,y){this.h=y;for(var E=[],I=!0,R=b.length-1;0<=R;R--){var C=b[R]|0;I&&C==y||(E[R]=C,I=!1)}this.g=E}var l={};function c(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return P(u(-b));for(var y=[],E=1,I=0;b>=E;I++)y[I]=b/E|0,E*=4294967296;return new o(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return P(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(y,8)),I=p,R=0;R<b.length;R+=8){var C=Math.min(8,b.length-R),w=parseInt(b.substring(R,R+C),y);8>C?(C=u(Math.pow(y,C)),I=I.j(C).add(u(w))):(I=I.j(E),I=I.add(u(w)))}return I}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();for(var b=0,y=1,E=0;E<this.g.length;E++){var I=this.i(E);b+=(0<=I?I:4294967296+I)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(A(this))return"-"+P(this).toString(b);for(var y=u(Math.pow(b,6)),E=this,I="";;){var R=z(E,y).g;E=N(E,R.j(y));var C=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=R,S(E))return C+I;for(;6>C.length;)C="0"+C;I=C+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function A(b){return b.h==-1}t.l=function(b){return b=N(this,b),A(b)?-1:S(b)?0:1};function P(b){for(var y=b.g.length,E=[],I=0;I<y;I++)E[I]=~b.g[I];return new o(E,~b.h).add(m)}t.abs=function(){return A(this)?P(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),E=[],I=0,R=0;R<=y;R++){var C=I+(this.i(R)&65535)+(b.i(R)&65535),w=(C>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);I=w>>>16,C&=65535,w&=65535,E[R]=w<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function N(b,y){return b.add(P(y))}t.j=function(b){if(S(this)||S(b))return p;if(A(this))return A(b)?P(this).j(P(b)):P(P(this).j(b));if(A(b))return P(this.j(P(b)));if(0>this.l(_)&&0>b.l(_))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,E=[],I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<b.g.length;R++){var C=this.i(I)>>>16,w=this.i(I)&65535,st=b.i(R)>>>16,Ft=b.i(R)&65535;E[2*I+2*R]+=w*Ft,V(E,2*I+2*R),E[2*I+2*R+1]+=C*Ft,V(E,2*I+2*R+1),E[2*I+2*R+1]+=w*st,V(E,2*I+2*R+1),E[2*I+2*R+2]+=C*st,V(E,2*I+2*R+2)}for(I=0;I<y;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=y;I<2*y;I++)E[I]=0;return new o(E,0)};function V(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function L(b,y){this.g=b,this.h=y}function z(b,y){if(S(y))throw Error("division by zero");if(S(b))return new L(p,p);if(A(b))return y=z(P(b),y),new L(P(y.g),P(y.h));if(A(y))return y=z(b,P(y)),new L(P(y.g),y.h);if(30<b.g.length){if(A(b)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=y;0>=I.l(b);)E=Z(E),I=Z(I);var R=ce(E,1),C=ce(I,1);for(I=ce(I,2),E=ce(E,2);!S(I);){var w=C.add(I);0>=w.l(b)&&(R=R.add(E),C=w),I=ce(I,1),E=ce(E,1)}return y=N(b,R.j(y)),new L(R,y)}for(R=p;0<=b.l(y);){for(E=Math.max(1,Math.floor(b.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),C=u(E),w=C.j(y);A(w)||0<w.l(b);)E-=I,C=u(E),w=C.j(y);S(C)&&(C=m),R=R.add(C),b=N(b,w)}return new L(R,b)}t.A=function(b){return z(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)&b.i(I);return new o(E,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)|b.i(I);return new o(E,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)^b.i(I);return new o(E,this.h^b.h)};function Z(b){for(var y=b.g.length+1,E=[],I=0;I<y;I++)E[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(E,b.h)}function ce(b,y){var E=y>>5;y%=32;for(var I=b.g.length-E,R=[],C=0;C<I;C++)R[C]=0<y?b.i(C+E)>>>y|b.i(C+E+1)<<32-y:b.i(C+E);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,jr=o}).apply(typeof af<"u"?af:typeof self<"u"?self:typeof window<"u"?window:{});var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gg,ii,_g,Uo,fc,yg,vg,Eg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in f))break e;f=f[k]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,k={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,k,O){for(var K=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)K[Fe-2]=arguments[Fe];return h.prototype[k].apply(g,K)}}function A(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const k=a.length||0,O=g.length||0;a.length=k+O;for(let K=0;K<O;K++)a[k+K]=g[K]}else a.push(g)}}class N{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var Z=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function ce(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(f in g)a[f]=g[f];for(let O=0;O<E.length;O++)f=E[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function w(){var a=jt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class st{constructor(){this.h=this.g=null}add(h,f){const g=Ft.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ft=new N(()=>new Be,a=>a.reset());class Be{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let he,Te=!1,jt=new st,tn=()=>{const a=l.Promise.resolve(void 0);he=()=>{a.then(Yt)}};var Yt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){C(f)}var h=Ft;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Te=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var Kn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function cn(a,h){if(Ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{z(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ut[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}S(cn,Ke);var Ut={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),ee=0;function Y(a,h,f,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=k,this.key=++ee,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,f,g,k){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var K=v(a,h,g,k);return-1<K?(h=a[K],f||(h.fa=!1)):(h=new Y(h,this.src,O,!!g,k),h.fa=f,a.push(h)),h};function Le(a,h){var f=h.type;if(f in a.g){var g=a.g[f],k=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=k)&&Array.prototype.splice.call(g,k,1),O&&(se(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function v(a,h,f,g){for(var k=0;k<a.length;++k){var O=a[k];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return k}return-1}var T="closure_lm_"+(1e6*Math.random()|0),D={};function B(a,h,f,g,k){if(Array.isArray(h)){for(var O=0;O<h.length;O++)B(a,h[O],f,g,k);return null}return f=oe(f),a&&a[x]?a.K(h,f,u(g)?!!g.capture:!!g,k):M(a,h,f,!1,g,k)}function M(a,h,f,g,k,O){if(!h)throw Error("Invalid event type");var K=u(k)?!!k.capture:!!k,Fe=le(a);if(Fe||(a[T]=Fe=new Re(a)),f=Fe.add(h,f,g,K,O),f.proxy)return f;if(g=j(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Kn||(k=K),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(W(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function j(){function a(f){return h.call(a.src,a.listener,f)}const h=H;return a}function Q(a,h,f,g,k){if(Array.isArray(h))for(var O=0;O<h.length;O++)Q(a,h[O],f,g,k);else g=u(g)?!!g.capture:!!g,f=oe(f),a&&a[x]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=v(O,f,g,k),-1<f&&(se(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=le(a))&&(h=a.g[h.toString()],a=-1,h&&(a=v(h,f,g,k)),(f=-1<a?h[a]:null)&&G(f))}function G(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[x])Le(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(W(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=le(h))?(Le(f,a),f.h==0&&(f.src=null,h[T]=null)):se(a)}}}function W(a){return a in D?D[a]:D[a]="on"+a}function H(a,h){if(a.da)a=!0;else{h=new cn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&G(a),a=f.call(g,h)}return a}function le(a){return a=a[T],a instanceof Re?a:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(a){return typeof a=="function"?a:(a[X]||(a[X]=function(h){return a.handleEvent(h)}),a[X])}function ie(){Ge.call(this),this.i=new Re(this),this.M=this,this.F=null}S(ie,Ge),ie.prototype[x]=!0,ie.prototype.removeEventListener=function(a,h,f,g){Q(this,a,h,f,g)};function ue(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ke(h,a);else if(h instanceof Ke)h.target=h.target||a;else{var k=h;h=new Ke(g,a),I(h,k)}if(k=!0,f)for(var O=f.length-1;0<=O;O--){var K=h.g=f[O];k=De(K,g,!0,h)&&k}if(K=h.g=a,k=De(K,g,!0,h)&&k,k=De(K,g,!1,h)&&k,f)for(O=0;O<f.length;O++)K=h.g=f[O],k=De(K,g,!1,h)&&k}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)se(f[g]);delete a.g[h],a.h--}}this.F=null},ie.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ie.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function De(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,O=0;O<h.length;++O){var K=h[O];if(K&&!K.da&&K.capture==f){var Fe=K.listener,mt=K.ha||K.src;K.fa&&Le(a.i,K),k=Fe.call(mt,g)!==!1&&k}}return k&&!g.defaultPrevented}function Ce(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Et(a){a.g=Ce(()=>{a.g=null,a.i&&(a.i=!1,Et(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class lt extends Ge{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Et(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(a){Ge.call(this),this.h=a,this.g={}}S(pt,Ge);var wt=[];function Qn(a){ce(a.g,function(h,f){this.g.hasOwnProperty(f)&&G(h)},a),a.g={}}pt.prototype.N=function(){pt.aa.N.call(this),Qn(this)},pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yr=l.JSON.stringify,Nt=l.JSON.parse,Xt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Xr(){}Xr.prototype.h=null;function Gu(a){return a.h||(a.h=a.i())}function Ku(){}var js={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nl(){Ke.call(this,"d")}S(nl,Ke);function rl(){Ke.call(this,"c")}S(rl,Ke);var kr={},Qu=null;function io(){return Qu=Qu||new ie}kr.La="serverreachability";function Ju(a){Ke.call(this,kr.La,a)}S(Ju,Ke);function Hs(a){const h=io();ue(h,new Ju(h))}kr.STAT_EVENT="statevent";function Yu(a,h){Ke.call(this,kr.STAT_EVENT,a),this.stat=h}S(Yu,Ke);function Ot(a){const h=io();ue(h,new Yu(h,a))}kr.Ma="timingevent";function Xu(a,h){Ke.call(this,kr.Ma,a),this.size=h}S(Xu,Ke);function zs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ws(){this.g=!0}Ws.prototype.xa=function(){this.g=!1};function ey(a,h,f,g,k,O){a.info(function(){if(a.g)if(O)for(var K="",Fe=O.split("&"),mt=0;mt<Fe.length;mt++){var Pe=Fe[mt].split("=");if(1<Pe.length){var Tt=Pe[0];Pe=Pe[1];var It=Tt.split("_");K=2<=It.length&&It[1]=="type"?K+(Tt+"="+Pe+"&"):K+(Tt+"=redacted&")}}else K=null;else K=O;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+f+`
`+K})}function ty(a,h,f,g,k,O,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+f+`
`+O+" "+K})}function Zr(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ry(a,f)+(g?" "+g:"")})}function ny(a,h){a.info(function(){return"TIMEOUT: "+h})}Ws.prototype.info=function(){};function ry(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var K=1;K<k.length;K++)k[K]=""}}}}return Yr(f)}catch{return h}}var oo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sl;function ao(){}S(ao,Xr),ao.prototype.g=function(){return new XMLHttpRequest},ao.prototype.i=function(){return{}},sl=new ao;function Jn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eh}function eh(){this.i=null,this.g="",this.h=!1}var th={},il={};function ol(a,h,f){a.L=1,a.v=ho(In(h)),a.m=f,a.P=!0,nh(a,null)}function nh(a,h){a.F=Date.now(),lo(a),a.A=In(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),gh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new eh,a.g=Vh(a.j,f?h:null,!a.m),0<a.O&&(a.M=new lt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(wt[0]=k.toString()),k=wt);for(var O=0;O<k.length;O++){var K=B(f,k[O],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Hs(),ey(a.i,a.u,a.A,a.l,a.R,a.m)}Jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&bn(a)==3?h.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const It=bn(this.g);var h=this.g.Ba();const ns=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||Ih(this.g)))){this.J||It!=4||h==7||(h==8||0>=ns?Hs(3):Hs(2)),al(this);var f=this.g.Z();this.X=f;t:if(rh(this)){var g=Ih(this.g);a="";var k=g.length,O=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),Gs(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,ty(this.i,this.u,this.A,this.l,this.R,It,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,mt=this.g;if((Fe=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Fe)){var Pe=Fe;break t}}Pe=null}if(f=Pe)Zr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ll(this,f);else{this.o=!1,this.s=3,Ot(12),Dr(this),Gs(this);break e}}if(this.P){f=!0;let nn;for(;!this.J&&this.C<K.length;)if(nn=sy(this,K),nn==il){It==4&&(this.s=4,Ot(14),f=!1),Zr(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==th){this.s=4,Ot(15),Zr(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else Zr(this.i,this.l,nn,null),ll(this,nn);if(rh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||K.length!=0||this.h.h||(this.s=1,Ot(16),f=!1),this.o=this.o&&f,!f)Zr(this.i,this.l,K,"[Invalid Chunked Response]"),Dr(this),Gs(this);else if(0<K.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),pl(Tt),Tt.M=!0,Ot(11))}}else Zr(this.i,this.l,K,null),ll(this,K);It==4&&Dr(this),this.o&&!this.J&&(It==4?kh(this.j,this):(this.o=!1,lo(this)))}else wy(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Dr(this),Gs(this)}}}catch{}finally{}};function rh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function sy(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?il:(f=Number(h.substring(f,g)),isNaN(f)?th:(g+=1,g+f>h.length?il:(h=h.slice(g,g+f),a.C=g+f,h)))}Jn.prototype.cancel=function(){this.J=!0,Dr(this)};function lo(a){a.S=Date.now()+a.I,sh(a,a.I)}function sh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zs(m(a.ba,a),h)}function al(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ny(this.i,this.A),this.L!=2&&(Hs(),Ot(17)),Dr(this),this.s=2,Gs(this)):sh(this,this.S-a)};function Gs(a){a.j.G==0||a.J||kh(a.j,a)}function Dr(a){al(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Qn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ll(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||cl(f.h,a))){if(!a.K&&cl(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)yo(f),go(f);else break e;fl(f),Ot(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=zs(m(f.Za,f),6e3));if(1>=ah(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Or(f,11)}else if((a.K||f.g==a)&&yo(f),!V(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let Pe=k[h];if(f.T=Pe[0],Pe=Pe[1],f.G==2)if(Pe[0]=="c"){f.K=Pe[1],f.ia=Pe[2];const Tt=Pe[3];Tt!=null&&(f.la=Tt,f.j.info("VER="+f.la));const It=Pe[4];It!=null&&(f.Aa=It,f.j.info("SVER="+f.Aa));const ns=Pe[5];ns!=null&&typeof ns=="number"&&0<ns&&(g=1.5*ns,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const nn=a.g;if(nn){const Eo=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Eo){var O=g.h;O.g||Eo.indexOf("spdy")==-1&&Eo.indexOf("quic")==-1&&Eo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ul(O,O.h),O.h=null))}if(g.D){const ml=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;ml&&(g.ya=ml,je(g.I,g.D,ml))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var K=a;if(g.qa=Oh(g,g.J?g.ia:null,g.W),K.K){lh(g.h,K);var Fe=K,mt=g.L;mt&&(Fe.I=mt),Fe.B&&(al(Fe),lo(Fe)),g.g=K}else Ch(g);0<f.i.length&&_o(f)}else Pe[0]!="stop"&&Pe[0]!="close"||Or(f,7);else f.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Or(f,7):dl(f):Pe[0]!="noop"&&f.l&&f.l.ta(Pe),f.v=0)}}Hs(4)}catch{}}var iy=class{constructor(a,h){this.g=a,this.map=h}};function ih(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ah(a){return a.h?1:a.g?a.g.size:0}function cl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ul(a,h){a.g?a.g.add(h):a.h=h}function lh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ih.prototype.cancel=function(){if(this.i=ch(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ch(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return A(a.i)}function oy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function ay(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function uh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=ay(a),g=oy(a),k=g.length,O=0;O<k;O++)h.call(void 0,g[O],f&&f[O],a)}var hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ly(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),k=null;if(0<=g){var O=a[f].substring(0,g);k=a[f].substring(g+1)}else O=a[f];h(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Nr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Nr){this.h=a.h,co(this,a.j),this.o=a.o,this.g=a.g,uo(this,a.s),this.l=a.l;var h=a.i,f=new Js;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),dh(this,f),this.m=a.m}else a&&(h=String(a).match(hh))?(this.h=!1,co(this,h[1]||"",!0),this.o=Ks(h[2]||""),this.g=Ks(h[3]||"",!0),uo(this,h[4]),this.l=Ks(h[5]||"",!0),dh(this,h[6]||"",!0),this.m=Ks(h[7]||"")):(this.h=!1,this.i=new Js(null,this.h))}Nr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Qs(h,fh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Qs(h,fh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Qs(f,f.charAt(0)=="/"?hy:uy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Qs(f,fy)),a.join("")};function In(a){return new Nr(a)}function co(a,h,f){a.j=f?Ks(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function uo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function dh(a,h,f){h instanceof Js?(a.i=h,py(a.i,a.h)):(f||(h=Qs(h,dy)),a.i=new Js(h,a.h))}function je(a,h,f){a.i.set(h,f)}function ho(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ks(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,cy),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function cy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var fh=/[#\/\?@]/g,uy=/[#\?:]/g,hy=/[#\?]/g,dy=/[#\?@]/g,fy=/#/g;function Js(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yn(a){a.g||(a.g=new Map,a.h=0,a.i&&ly(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Js.prototype,t.add=function(a,h){Yn(this),this.i=null,a=es(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ph(a,h){Yn(a),h=es(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function mh(a,h){return Yn(a),h=es(a,h),a.g.has(h)}t.forEach=function(a,h){Yn(this),this.g.forEach(function(f,g){f.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){Yn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const k=a[g];for(let O=0;O<k.length;O++)f.push(h[g])}return f},t.V=function(a){Yn(this);let h=[];if(typeof a=="string")mh(this,a)&&(h=h.concat(this.g.get(es(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Yn(this),this.i=null,a=es(this,a),mh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function gh(a,h,f){ph(a,h),0<f.length&&(a.i=null,a.g.set(es(a,h),A(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var k=O;K[g]!==""&&(k+="="+encodeURIComponent(String(K[g]))),a.push(k)}}return this.i=a.join("&")};function es(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function py(a,h){h&&!a.j&&(Yn(a),a.i=null,a.g.forEach(function(f,g){var k=g.toLowerCase();g!=k&&(ph(this,g),gh(this,k,f))},a)),a.j=h}function my(a,h){const f=new Ws;if(l.Image){const g=new Image;g.onload=_(Xn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Xn,f,"TestLoadImage: error",!1,h,g),g.onabort=_(Xn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Xn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function gy(a,h){const f=new Ws,g=new AbortController,k=setTimeout(()=>{g.abort(),Xn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(k),O.ok?Xn(f,"TestPingServer: ok",!0,h):Xn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),Xn(f,"TestPingServer: error",!1,h)})}function Xn(a,h,f,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(f)}catch{}}function _y(){this.g=new Xt}function yy(a,h,f){const g=f||"";try{uh(a,function(k,O){let K=k;u(k)&&(K=Yr(k)),h.push(g+O+"="+encodeURIComponent(K))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function fo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(fo,Xr),fo.prototype.g=function(){return new po(this.l,this.j)},fo.prototype.i=function(a){return function(){return a}}({});function po(a,h){ie.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(po,ie),t=po.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ys(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_h(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function _h(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ys(this):Xs(this),this.readyState==3&&_h(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ys(this))},t.Qa=function(a){this.g&&(this.response=a,Ys(this))},t.ga=function(){this.g&&Ys(this)};function Ys(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Xs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function yh(a){let h="";return ce(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function hl(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=yh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):je(a,h,f))}function Je(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Je,ie);var vy=/^https?$/i,Ey=["POST","PUT"];t=Je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sl.g(),this.v=this.o?Gu(this.o):Gu(sl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){vh(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)f.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ey,h,void 0))||g||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,K]of f)this.g.setRequestHeader(O,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Th(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){vh(this,O)}};function vh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Eh(a),mo(a)}function Eh(a){a.A||(a.A=!0,ue(a,"complete"),ue(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ue(this,"complete"),ue(this,"abort"),mo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mo(this,!0)),Je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wh(this):this.bb())},t.bb=function(){wh(this)};function wh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||bn(a)!=4||a.Z()!=2)){if(a.u&&bn(a)==4)Ce(a.Ea,0,a);else if(ue(a,"readystatechange"),bn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=K===0){var k=String(a.D).match(hh)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!vy.test(k?k.toLowerCase():"")}f=g}if(f)ue(a,"complete"),ue(a,"success");else{a.m=6;try{var O=2<bn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Eh(a)}}finally{mo(a)}}}}function mo(a,h){if(a.g){Th(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ue(a,"ready");try{f.onreadystatechange=g}catch{}}}function Th(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Nt(h)}};function Ih(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function wy(a){const h={};a=(a.g&&2<=bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(V(a[g]))continue;var f=R(a[g]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[k]||[];h[k]=O,O.push(f)}b(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function bh(a){this.Aa=0,this.i=[],this.j=new Ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zs("baseRetryDelayMs",5e3,a),this.cb=Zs("retryDelaySeedMs",1e4,a),this.Wa=Zs("forwardChannelMaxRetries",2,a),this.wa=Zs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ih(a&&a.concurrentRequestLimit),this.Da=new _y,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=bh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){Ot(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Oh(this,null,this.W),_o(this)};function dl(a){if(Ah(a),a.G==3){var h=a.U++,f=In(a.I);if(je(f,"SID",a.K),je(f,"RID",h),je(f,"TYPE","terminate"),ei(a,f),h=new Jn(a,a.j,h),h.L=2,h.v=ho(In(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Vh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),lo(h)}Nh(a)}function go(a){a.g&&(pl(a),a.g.cancel(),a.g=null)}function Ah(a){go(a),a.u&&(l.clearTimeout(a.u),a.u=null),yo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function _o(a){if(!oh(a.h)&&!a.s){a.s=!0;var h=a.Ga;he||tn(),Te||(he(),Te=!0),jt.add(h,a),a.B=0}}function Ty(a,h){return ah(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zs(m(a.Ga,a,h),Dh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Jn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Sh(this,k,h),f=In(this.I),je(f,"RID",a),je(f,"CVER",22),this.D&&je(f,"X-HTTP-Session-Id",this.D),ei(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(yh(O)))+"&"+h:this.m&&hl(f,this.m,O)),ul(this.h,k),this.Ua&&je(f,"TYPE","init"),this.P?(je(f,"$req",h),je(f,"SID","null"),k.T=!0,ol(k,f,null)):ol(k,f,h),this.G=2}}else this.G==3&&(a?Rh(this,a):this.i.length==0||oh(this.h)||Rh(this))};function Rh(a,h){var f;h?f=h.l:f=a.U++;const g=In(a.I);je(g,"SID",a.K),je(g,"RID",f),je(g,"AID",a.T),ei(a,g),a.m&&a.o&&hl(g,a.m,a.o),f=new Jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Sh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ul(a.h,f),ol(f,g,h)}function ei(a,h){a.H&&ce(a.H,function(f,g){je(h,g,f)}),a.l&&uh({},function(f,g){je(h,g,f)})}function Sh(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let O=-1;for(;;){const K=["count="+f];O==-1?0<f?(O=k[0].g,K.push("ofs="+O)):O=0:K.push("ofs="+O);let Fe=!0;for(let mt=0;mt<f;mt++){let Pe=k[mt].g;const Tt=k[mt].map;if(Pe-=O,0>Pe)O=Math.max(0,k[mt].g-100),Fe=!1;else try{yy(Tt,K,"req"+Pe+"_")}catch{g&&g(Tt)}}if(Fe){g=K.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Ch(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;he||tn(),Te||(he(),Te=!0),jt.add(h,a),a.v=0}}function fl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zs(m(a.Fa,a),Dh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ph(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),go(this),Ph(this))};function pl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ph(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=In(a.qa);je(h,"RID","rpc"),je(h,"SID",a.K),je(h,"AID",a.T),je(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(h,"TO",a.ja),je(h,"TYPE","xmlhttp"),ei(a,h),a.m&&a.o&&hl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ho(In(h)),f.m=null,f.P=!0,nh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,go(this),fl(this),Ot(19))};function yo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function kh(a,h){var f=null;if(a.g==h){yo(a),pl(a),a.g=null;var g=2}else if(cl(a.h,h))f=h.D,lh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=io(),ue(g,new Xu(g,f)),_o(a)}else Ch(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&Ty(a,h)||g==2&&fl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function Dh(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Or(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const k=!g;g=new Nr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||co(g,"https"),ho(g),k?my(g.toString(),f):gy(g.toString(),f)}else Ot(2);a.G=0,a.l&&a.l.sa(h),Nh(a),Ah(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function Nh(a){if(a.G=0,a.ka=[],a.l){const h=ch(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function Oh(a,h,f){var g=f instanceof Nr?In(f):new Nr(f);if(g.g!="")h&&(g.g=h+"."+g.g),uo(g,g.s);else{var k=l.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var O=new Nr(null);g&&co(O,g),h&&(O.g=h),k&&uo(O,k),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&je(g,f,h),je(g,"VER",a.la),ei(a,g),g}function Vh(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Je(new fo({eb:f})):new Je(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mh(){}t=Mh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function vo(){}vo.prototype.g=function(a,h){return new Ht(a,h)};function Ht(a,h){ie.call(this),this.g=new bh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!V(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!V(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ts(this)}S(Ht,ie),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){dl(this.g)},Ht.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Yr(a),a=f);h.i.push(new iy(h.Ya++,a)),h.G==3&&_o(h)},Ht.prototype.N=function(){this.g.l=null,delete this.j,dl(this.g),delete this.g,Ht.aa.N.call(this)};function xh(a){nl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(xh,nl);function Lh(){rl.call(this),this.status=1}S(Lh,rl);function ts(a){this.g=a}S(ts,Mh),ts.prototype.ua=function(){ue(this.g,"a")},ts.prototype.ta=function(a){ue(this.g,new xh(a))},ts.prototype.sa=function(a){ue(this.g,new Lh)},ts.prototype.ra=function(){ue(this.g,"b")},vo.prototype.createWebChannel=vo.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Eg=function(){return new vo},vg=function(){return io()},yg=kr,fc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oo.NO_ERROR=0,oo.TIMEOUT=8,oo.HTTP_ERROR=6,Uo=oo,Zu.COMPLETE="complete",_g=Zu,Ku.EventType=js,js.OPEN="a",js.CLOSE="b",js.ERROR="c",js.MESSAGE="d",ie.prototype.listen=ie.prototype.K,ii=Ku,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,gg=Je}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});const lf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new Qc("@firebase/firestore");function ls(){return Gr.logLevel}function te(t,...e){if(Gr.logLevel<=Ie.DEBUG){const n=e.map(cu);Gr.debug(`Firestore (${Fs}): ${t}`,...n)}}function $n(t,...e){if(Gr.logLevel<=Ie.ERROR){const n=e.map(cu);Gr.error(`Firestore (${Fs}): ${t}`,...n)}}function Cs(t,...e){if(Gr.logLevel<=Ie.WARN){const n=e.map(cu);Gr.warn(`Firestore (${Fs}): ${t}`,...n)}}function cu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Fs}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function Me(t,e){t||de()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class mb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gb{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new wg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new At(e)}}class _b{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class yb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _b(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Eb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Me(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new vb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=wb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Ps(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new ot(0,0))}static max(){return new ge(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ni.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ni?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ze extends Ni{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const Tb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Ni{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return Tb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(ze.fromString(e))}static fromName(e){return new ae(ze.fromString(e).popFirst(5))}static empty(){return new ae(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new ze(e.slice()))}}function Ib(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new gr(s,ae.empty(),e)}function bb(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(ge.min(),ae.empty(),-1)}static max(){return new gr(ge.max(),ae.empty(),-1)}}function Ab(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==Rb)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Cb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $s(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class xa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xa.oe=-1;function La(t){return t==null}function oa(t){return t===0&&1/t==-1/0}function Pb(t){return typeof t=="number"&&Number.isInteger(t)&&!oa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=cf(e)),e=Db(t.get(n),e);return cf(e)}function Db(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function cf(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ig(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ro(this.root,e,this.comparator,!0)}}class Ro{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??gt.RED,this.left=s??gt.EMPTY,this.right=i??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new gt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hf(this.data.getIterator())}getIteratorFrom(e){return new hf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class hf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new at(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class bg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bg("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const Nb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(Me(!!t),typeof t=="string"){let e=0;const n=Nb.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fa(t){const e=t.mapValue.fields.__previous_value__;return uu(e)?Fa(e):e}function Oi(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Vi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uu(t)?4:Mb(t)?9007199254740991:Vb(t)?10:11:de()}function wn(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oi(t).isEqual(Oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_r(s.timestampValue),l=_r(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return yr(s.bytesValue).isEqual(yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Xe(s.doubleValue),l=Xe(i.doubleValue);return o===l?oa(o)===oa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(uf(o)!==uf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!wn(o[c],l[c])))return!1;return!0}(t,e);default:return de()}}function Mi(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function ks(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Xe(i.integerValue||i.doubleValue),c=Xe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return df(t.timestampValue,e.timestampValue);case 4:return df(Oi(t),Oi(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const l=yr(i),c=yr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Ae(l[u],c[u]);if(d!==0)return d}return Ae(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ae(Xe(i.latitude),Xe(o.latitude));return l!==0?l:Ae(Xe(i.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ff(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=m.value)===null||c===void 0?void 0:c.arrayValue,A=Ae(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return A!==0?A:ff(_,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===So.mapValue&&o===So.mapValue)return 0;if(i===So.mapValue)return 1;if(o===So.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Ae(c[p],d[p]);if(m!==0)return m;const _=ks(l[c[p]],u[d[p]]);if(_!==0)return _}return Ae(c.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function df(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=_r(t),r=_r(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function ff(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ks(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function Ds(t){return pc(t)}function pc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=pc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${pc(n.fields[o])}`;return s+"}"}(t.mapValue):de()}function $o(t){switch(vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fa(t);return e?16+$o(e):16;case 5:return 2*t.stringValue.length;case 6:return yr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+$o(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Sr(r.fields,(i,o)=>{s+=i.length+$o(o)}),s}(t.mapValue);default:throw de()}}function pf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mc(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function mf(t){return!!t&&"nullValue"in t}function gf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bo(t){return!!t&&"mapValue"in t}function Vb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Sr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=yi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Bo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Sr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Bt(yi(this.value))}}function Ag(t){const e=[];return Sr(t.fields,(n,r)=>{const s=new yt([n]);if(Bo(r)){const i=Ag(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ct(e,0,ge.min(),ge.min(),ge.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ct(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new Ct(e,2,n,ge.min(),ge.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,ge.min(),ge.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class aa{constructor(e,n){this.position=e,this.inclusive=n}}function _f(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=ks(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function yf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class la{constructor(e,n="asc"){this.field=e,this.dir=n}}function xb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Rg{}class nt extends Rg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Fb(e,n,r):n==="array-contains"?new Bb(e,r):n==="in"?new qb(e,r):n==="not-in"?new jb(e,r):n==="array-contains-any"?new Hb(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ub(e,r):new $b(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ks(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.matchesComparison(ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends Rg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return Sg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sg(t){return t.op==="and"}function Cg(t){return Lb(t)&&Sg(t)}function Lb(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function gc(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Ds(t.value);if(Cg(t))return t.filters.map(e=>gc(e)).join(",");{const e=t.filters.map(n=>gc(n)).join(",");return`${t.op}(${e})`}}function Pg(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&wn(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Pg(o,s.filters[l]),!0):!1}(t,e):void de()}function kg(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ds(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(kg).join(" ,")+"}"}(t):"Filter"}class Fb extends nt{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ub extends nt{constructor(e,n){super(e,"in",n),this.keys=Dg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $b extends nt{constructor(e,n){super(e,"not-in",n),this.keys=Dg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class Bb extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&Mi(n.arrayValue,this.value)}}class qb extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mi(this.value.arrayValue,n)}}class jb extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mi(this.value.arrayValue,n)}}class Hb extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mi(this.value.arrayValue,r))}}/**
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
 */class zb{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function vf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new zb(t,e,n,r,s,i,o)}function du(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),La(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ds(r)).join(",")),e.ue=n}return e.ue}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Pg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yf(t.startAt,e.startAt)&&yf(t.endAt,e.endAt)}function _c(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wb(t,e,n,r,s,i,o,l){return new Qi(t,e,n,r,s,i,o,l)}function Ua(t){return new Qi(t)}function Ef(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ng(t){return t.collectionGroup!==null}function vi(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(yt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new la(i,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new la(yt.keyField(),r))}return e.ce}function gn(t){const e=ye(t);return e.le||(e.le=Gb(e,vi(t))),e.le}function Gb(t,e){if(t.limitType==="F")return vf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new la(s.field,i)});const n=t.endAt?new aa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new aa(t.startAt.position,t.startAt.inclusive):null;return vf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yc(t,e){const n=t.filters.concat([e]);return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function vc(t,e,n){return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $a(t,e){return fu(gn(t),gn(e))&&t.limitType===e.limitType}function Og(t){return`${du(gn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>kg(s)).join(", ")}]`),La(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ds(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ds(s)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function Ba(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of vi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=_f(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,vi(r),s)||r.endAt&&!function(o,l,c){const u=_f(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,vi(r),s))}(t,e)}function Kb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Vg(t){return(e,n)=>{let r=!1;for(const s of vi(t)){const i=Qb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Qb(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?ks(c,u):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ig(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new Qe(ae.comparator);function Bn(){return Jb}const Mg=new Qe(ae.comparator);function oi(...t){let e=Mg;for(const n of t)e=e.insert(n.key,n);return e}function xg(t){let e=Mg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return Ei()}function Lg(){return Ei()}function Ei(){return new Kr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Yb=new Qe(ae.comparator),Xb=new at(ae.comparator);function be(...t){let e=Xb;for(const n of t)e=e.add(n);return e}const Zb=new at(Ae);function eA(){return Zb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oa(e)?"-0":e}}function Fg(t){return{integerValue:""+t}}function tA(t,e){return Pb(e)?Fg(e):pu(t,e)}/**
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
 */class qa{constructor(){this._=void 0}}function nA(t,e,n){return t instanceof xi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&uu(i)&&(i=Fa(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Li?$g(t,e):t instanceof Fi?Bg(t,e):function(s,i){const o=Ug(s,i),l=wf(o)+wf(s.Pe);return mc(o)&&mc(s.Pe)?Fg(l):pu(s.serializer,l)}(t,e)}function rA(t,e,n){return t instanceof Li?$g(t,e):t instanceof Fi?Bg(t,e):n}function Ug(t,e){return t instanceof ca?function(r){return mc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class xi extends qa{}class Li extends qa{constructor(e){super(),this.elements=e}}function $g(t,e){const n=qg(e);for(const r of t.elements)n.some(s=>wn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Fi extends qa{constructor(e){super(),this.elements=e}}function Bg(t,e){let n=qg(e);for(const r of t.elements)n=n.filter(s=>!wn(s,r));return{arrayValue:{values:n}}}class ca extends qa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function wf(t){return Xe(t.integerValue||t.doubleValue)}function qg(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n){this.field=e,this.transform=n}}function iA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Li&&s instanceof Li||r instanceof Fi&&s instanceof Fi?Ps(r.elements,s.elements,wn):r instanceof ca&&s instanceof ca?wn(r.Pe,s.Pe):r instanceof xi&&s instanceof xi}(t.transform,e.transform)}class oA{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ja{}function jg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ha(t.key,qt.none()):new Ji(t.key,t.data,qt.none());{const n=t.data,r=Bt.empty();let s=new at(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Cr(t.key,r,new Kt(s.toArray()),qt.none())}}function aA(t,e,n){t instanceof Ji?function(s,i,o){const l=s.value.clone(),c=If(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(s,i,o){if(!qo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=If(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Hg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wi(t,e,n,r){return t instanceof Ji?function(i,o,l,c){if(!qo(i.precondition,o))return l;const u=i.value.clone(),d=bf(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(i,o,l,c){if(!qo(i.precondition,o))return l;const u=bf(i.fieldTransforms,c,o),d=o.data;return d.setAll(Hg(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return qo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function lA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ug(r.transform,s||null);i!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,i))}return n||null}function Tf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ps(r,s,(i,o)=>iA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ji extends ja{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends ja{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function If(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,rA(o,l,n[s]))}return r}function bf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,nA(i,o,e))}return r}class Ha extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cA extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&aA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Lg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=jg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(n,r)=>Tf(n,r))&&Ps(this.baseMutations,e.baseMutations,(n,r)=>Tf(n,r))}}class mu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length);let s=function(){return Yb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mu(e,n,r,s)}}/**
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
 */class hA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,Se;function fA(t){switch(t){default:return de();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function zg(t){if(t===void 0)return $n("GRPC error has no .code"),F.UNKNOWN;switch(t){case tt.OK:return F.OK;case tt.CANCELLED:return F.CANCELLED;case tt.UNKNOWN:return F.UNKNOWN;case tt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case tt.INTERNAL:return F.INTERNAL;case tt.UNAVAILABLE:return F.UNAVAILABLE;case tt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case tt.NOT_FOUND:return F.NOT_FOUND;case tt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case tt.ABORTED:return F.ABORTED;case tt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case tt.DATA_LOSS:return F.DATA_LOSS;default:return de()}}(Se=tt||(tt={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pA(){return new TextEncoder}/**
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
 */const mA=new jr([4294967295,4294967295],0);function Af(t){const e=pA().encode(t),n=new mg;return n.update(e),new Uint8Array(n.digest())}function Rf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jr([n,r],0),new jr([s,i],0)]}class gu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ai(`Invalid padding: ${n}`);if(r<0)throw new ai(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ai(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ai(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=jr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(jr.fromNumber(r)));return s.compare(mA)===1&&(s=new jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Af(e),[r,s]=Rf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Af(e),[r,s]=Rf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ai extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Yi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new za(ge.min(),s,new Qe(Ae),Bn(),be())}}class Yi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Yi(r,n,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Wg{constructor(e,n){this.targetId=e,this.me=n}}class Gg{constructor(e,n,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Sf{constructor(){this.fe=0,this.ge=Cf(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),n=be(),r=be();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de()}}),new Yi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Cf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=Co(),this.Qe=Co(),this.Ke=new Qe(Ae)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(_c(i))if(r===0){const o=new ae(i.path);this.We(n,o,Ct.newNoDocument(o,ge.min()))}else Me(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=yr(r).toUint8Array()}catch(c){if(c instanceof bg)return Cs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new gu(o,s,i)}catch(c){return Cs(c instanceof ai?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&_c(l.target)){const c=new ae(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Ct.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=be();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new za(e,n,this.Ke,this.ke,r);return this.ke=Bn(),this.qe=Co(),this.Qe=Co(),this.Ke=new Qe(Ae),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Sf,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new at(Ae),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(Ae),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Sf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Co(){return new Qe(ae.comparator)}function Cf(){return new Qe(ae.comparator)}const _A={asc:"ASCENDING",desc:"DESCENDING"},yA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vA={and:"AND",or:"OR"};class EA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ec(t,e){return t.useProto3Json||La(e)?e:{value:e}}function ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wA(t,e){return ua(t,e.toTimestamp())}function _n(t){return Me(!!t),ge.fromTimestamp(function(n){const r=_r(n);return new ot(r.seconds,r.nanos)}(t))}function _u(t,e){return wc(t,e).canonicalString()}function wc(t,e){const n=function(s){return new ze(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Qg(t){const e=ze.fromString(t);return Me(e_(e)),e}function Tc(t,e){return _u(t.databaseId,e.path)}function Fl(t,e){const n=Qg(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(Yg(n))}function Jg(t,e){return _u(t.databaseId,e)}function TA(t){const e=Qg(t);return e.length===4?ze.emptyPath():Yg(e)}function Ic(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yg(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Pf(t,e,n){return{name:Tc(t,e),fields:n.value.mapValue.fields}}function IA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Me(d===void 0||typeof d=="string"),vt.fromBase64String(d||"")):(Me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),vt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?F.UNKNOWN:zg(u.code);return new ne(d,u.message||"")}(o);n=new Gg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fl(t,r.document.name),i=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):ge.min(),l=new Bt({mapValue:{fields:r.document.fields}}),c=Ct.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new jo(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Fl(t,r.document),i=r.readTime?_n(r.readTime):ge.min(),o=Ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new jo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Fl(t,r.document),i=r.removedTargetIds||[];n=new jo([],i,s,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new dA(s,i),l=r.targetId;n=new Wg(l,o)}}return n}function bA(t,e){let n;if(e instanceof Ji)n={update:Pf(t,e.key,e.value)};else if(e instanceof Ha)n={delete:Tc(t,e.key)};else if(e instanceof Cr)n={update:Pf(t,e.key,e.data),updateMask:OA(e.fieldMask)};else{if(!(e instanceof cA))return de();n={verify:Tc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof xi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Li)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ca)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function AA(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?_n(s.updateTime):_n(i);return o.isEqual(ge.min())&&(o=_n(i)),new oA(o,s.transformResults||[])}(n,e))):[]}function RA(t,e){return{documents:[Jg(t,e.path)]}}function SA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Jg(t,s);const i=function(u){if(u.length!==0)return Zg(ln.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:us(m.field),direction:kA(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ec(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function CA(t){let e=TA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Xg(p);return m instanceof ln&&Cg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new la(hs(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,La(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new aa(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new aa(_,m)}(n.endAt)),Wb(e,s,o,i,l,"F",c,u)}function PA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hs(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hs(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hs(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hs(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(hs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>Xg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function kA(t){return _A[t]}function DA(t){return yA[t]}function NA(t){return vA[t]}function us(t){return{fieldPath:t.canonicalString()}}function hs(t){return yt.fromServerFormat(t.fieldPath)}function Zg(t){return t instanceof nt?function(n){if(n.op==="=="){if(gf(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NAN"}};if(mf(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(gf(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NAN"}};if(mf(n.value))return{unaryFilter:{field:us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:us(n.field),op:DA(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>Zg(s));return r.length===1?r[0]:{compositeFilter:{op:NA(n.op),filters:r}}}(t):de()}function OA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function e_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),l=vt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.ht=e}}function MA(t){const e=CA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vc(e,e.limit,"L"):e}/**
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
 */class xA{constructor(){this.ln=new LA}addToCollectionParentIndex(e,n){return this.ln.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(gr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class LA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(ze.comparator)).toArray()}}/**
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
 */const kf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ns{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ns(0)}static Qn(){return new Ns(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df([t,e],[n,r]){const s=Ae(t,n);return s===0?Ae(e,r):s}class FA{constructor(e){this.Gn=e,this.buffer=new at(Df),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Df(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class UA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){$s(n)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Us(n)}await this.Yn(3e5)})}}class $A{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(xa.oe);const r=new FA(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(kf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kf):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ls()<=Ie.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function BA(t,e){return new $A(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.changes=new Kr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&wi(r.mutation,s,Kt.empty(),ot.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=be()){const s=Ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=oi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,be()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Bn();const o=Ei(),l=function(){return Ei()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Cr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),wi(d.mutation,u,d.mutation.getFieldMask(),ot.now())):o.set(u.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new jA(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ei();let s=new Qe((o,l)=>o-l),i=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Kt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||be()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Lg();d.forEach(m=>{if(!i.has(m)){const _=jg(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ng(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Ur());let l=-1,c=i;return o.next(u=>U.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,be())).next(d=>({batchId:l,changes:xg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let s=oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=oi();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const u=function(p,m){return new Qi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Ct.newInvalidDocument(d)))});let l=oi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&wi(d.mutation,u,Kt.empty(),ot.now()),Ba(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return U.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:_n(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:MA(s.bundledQuery),readTime:_n(s.readTime)}}(n)),U.resolve()}}/**
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
 */class WA{constructor(){this.overlays=new Qe(ae.comparator),this.Er=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Ur(),i=n.length+1,o=new ae(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Qe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Ur(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return U.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hA(n,r));let i=this.Er.get(n);i===void 0&&(i=be(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class GA{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.dr=new at(ct.Ar),this.Rr=new at(ct.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ct(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ae(new ze([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ae(new ze([])),r=new ct(n,e),s=new ct(n,e+1);let i=be();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ae.comparator(e.key,n.key)||Ae(e.br,n.br)}static Vr(e,n){return Ae(e.br,n.br)||ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new at(ct.Ar)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new ct(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Ae);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),U.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const o=new ct(new ae(i),0);let l=new at(Ae);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),U.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return U.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ct(n,0),s=this.vr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.Nr=e,this.docs=function(){return new Qe(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ct.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,l=new ae(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ab(bb(d),r)<=0||(s.has(d.key)||Ba(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}Lr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new JA(this)}getSize(e){return U.resolve(this.size)}}class JA extends qA{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.persistence=e,this.Br=new Kr(n=>du(n),fu),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.kr=0,this.qr=new yu,this.targetCount=0,this.Qr=Ns.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),U.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Un(n),U.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n){this.Kr={},this.overlays={},this.$r=new xa(0),this.Ur=!1,this.Ur=!0,this.Wr=new GA,this.referenceDelegate=e(this),this.Gr=new YA(this),this.indexManager=new xA,this.remoteDocumentCache=function(s){return new QA(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new VA(n),this.jr=new zA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new KA(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new XA(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return U.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class XA extends Sb{constructor(e){super(),this.currentSequenceNumber=e}}class vu{constructor(e){this.persistence=e,this.Zr=new yu,this.Xr=null}static ei(e){return new vu(e)}get ti(){if(this.Xr)return this.Xr;throw de()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),U.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.ti,r=>{const s=ae.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return U.or([()=>U.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class ha{constructor(e,n){this.persistence=e,this.ri=new Kr(r=>kb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=BA(this,n)}static ei(e,n){return new ha(e,n)}Hr(){}Jr(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return U.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ge.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),U.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=$o(e.data.value)),n}ir(e,n,r){return U.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=be(),s=be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Eu(e,n.fromCache,r,s)}}/**
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
 */class ZA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eR{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Fw()?8:Cb(Dt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ZA;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(ls()<=Ie.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),U.resolve()):(ls()<=Ie.DEBUG&&te("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(ls()<=Ie.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):U.resolve())}Xi(e,n){if(Ef(n))return U.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=vc(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=be(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,vc(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return Ef(n)||s.isEqual(ge.min())?U.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?U.resolve(null):(ls()<=Ie.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cs(n)),this.os(e,o,n,Ib(s,-1)).next(l=>l))})}rs(e,n){let r=new at(Vg(e));return n.forEach((s,i)=>{Ba(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return ls()<=Ie.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",cs(n)),this.Zi.getDocumentsMatchingQuery(e,n,gr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Qe(Ae),this.cs=new Kr(i=>du(i),fu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HA(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function nR(t,e,n,r){return new tR(t,e,n,r)}async function n_(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=be();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function rR(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let _=U.resolve();return m.forEach(S=>{_=_.next(()=>d.getEntry(c,S)).next(A=>{const P=u.docVersions.get(S);Me(P!==null),A.version.compareTo(P)<0&&(p.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),d.addEntry(A)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=be();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function r_(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function sR(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(vt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(A,P,N){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,_,d)&&l.push(n.Gr.updateTargetData(i,_))});let c=Bn(),u=be();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(iR(i,o,e.documentUpdates).next(d=>{c=d.Is,u=d.Es})),!r.isEqual(ge.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function iR(t,e,n){let r=be(),s=be();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ge.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function oR(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aR(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function bc(t,e,n){const r=ye(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!$s(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Nf(t,e,n){const r=ye(t);let s=ge.min(),i=be();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ye(c),m=p.cs.get(d);return m!==void 0?U.resolve(p.us.get(m)):p.Gr.getTargetData(u,d)}(r,o,gn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:be())).next(l=>(lR(r,Kb(e),l),{documents:l,ds:i})))}function lR(t,e,n){let r=t.ls.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Of{constructor(){this.activeTargetIds=eA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cR{constructor(){this._o=new Of,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Of,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uR{uo(e){}shutdown(){}}/**
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
 */class Vf{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Po=null;function Ul(){return Po===null?Po=function(){return 268435456+Math.round(2147483648*Math.random())}():Po++,"0x"+Po.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class fR extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=Ul(),c=this.No(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(d=>(te("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Cs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=hR[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=Ul();return new Promise((o,l)=>{const c=new gg;c.setWithCredentials(!0),c.listenOnce(_g.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Uo.NO_ERROR:const d=c.getResponseJson();te(bt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Uo.TIMEOUT:te(bt,`RPC '${e}' ${i} timed out`),l(new ne(F.DEADLINE_EXCEEDED,"Request time out"));break;case Uo.HTTP_ERROR:const p=c.getStatus();if(te(bt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const S=function(P){const N=P.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(N)>=0?N:F.UNKNOWN}(_.status);l(new ne(S,_.message))}else l(new ne(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ne(F.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{te(bt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(bt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=Ul(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Eg(),l=vg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");te(bt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,_=!1;const S=new dR({Eo:P=>{_?te(bt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(te(bt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),te(bt,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Ao:()=>p.close()}),A=(P,N,V)=>{P.listen(N,L=>{try{V(L)}catch(z){setTimeout(()=>{throw z},0)}})};return A(p,ii.EventType.OPEN,()=>{_||(te(bt,`RPC '${e}' stream ${s} transport opened.`),S.So())}),A(p,ii.EventType.CLOSE,()=>{_||(_=!0,te(bt,`RPC '${e}' stream ${s} transport closed`),S.Do())}),A(p,ii.EventType.ERROR,P=>{_||(_=!0,Cs(bt,`RPC '${e}' stream ${s} transport errored:`,P),S.Do(new ne(F.UNAVAILABLE,"The operation could not be completed")))}),A(p,ii.EventType.MESSAGE,P=>{var N;if(!_){const V=P.data[0];Me(!!V);const L=V,z=(L==null?void 0:L.error)||((N=L[0])===null||N===void 0?void 0:N.error);if(z){te(bt,`RPC '${e}' stream ${s} received error:`,z);const Z=z.status;let ce=function(E){const I=tt[E];if(I!==void 0)return zg(I)}(Z),b=z.message;ce===void 0&&(ce=F.INTERNAL,b="Unknown error status: "+Z+" with message "+z.message),_=!0,S.Do(new ne(ce,b)),p.close()}else te(bt,`RPC '${e}' stream ${s} received:`,V),S.vo(V)}}),A(l,yg.STAT_EVENT,P=>{P.stat===fc.PROXY?te(bt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===fc.NOPROXY&&te(bt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.bo()},0),S}}function $l(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t){return new EA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new s_(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ne(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pR extends i_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=IA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?_n(o.readTime):ge.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Ic(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=_c(c)?{documents:RA(i,c)}:{query:SA(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Kg(i,o.resumeToken);const u=Ec(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){l.readTime=ua(i,o.snapshotVersion.toTimestamp());const u=Ec(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=PA(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Ic(this.serializer),n.removeTarget=e,this.c_(n)}}class mR extends i_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=AA(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Ic(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bA(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ne(F.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,wc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(F.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,wc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(F.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class _R{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?($n(n),this.C_=!1):te("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Qr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ye(c);u.k_.add(4),await Xi(u),u.K_.set("Unknown"),u.k_.delete(4),await Ga(u)}(this))})}),this.K_=new _R(r,s)}}async function Ga(t){if(Qr(t))for(const e of t.q_)await e(!0)}async function Xi(t){for(const e of t.q_)await e(!1)}function o_(t,e){const n=ye(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),bu(n)?Iu(n):Bs(n).s_()&&Tu(n,e))}function wu(t,e){const n=ye(t),r=Bs(n);n.B_.delete(e),r.s_()&&a_(n,e),n.B_.size===0&&(r.s_()?r.a_():Qr(n)&&n.K_.set("Unknown"))}function Tu(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bs(t).V_(e)}function a_(t,e){t.U_.xe(e),Bs(t).m_(e)}function Iu(t){t.U_=new gA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Bs(t).start(),t.K_.F_()}function bu(t){return Qr(t)&&!Bs(t).i_()&&t.B_.size>0}function Qr(t){return ye(t).k_.size===0}function l_(t){t.U_=void 0}async function vR(t){t.K_.set("Online")}async function ER(t){t.B_.forEach((e,n)=>{Tu(t,e)})}async function wR(t,e){l_(t),bu(t)?(t.K_.O_(e),Iu(t)):t.K_.set("Unknown")}async function TR(t,e,n){if(t.K_.set("Online"),e instanceof Gg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await da(t,r)}else if(e instanceof jo?t.U_.$e(e):e instanceof Wg?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ge.min()))try{const r=await r_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(u);d&&i.B_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(vt.EMPTY_BYTE_STRING,d.snapshotVersion)),a_(i,c);const p=new lr(d.target,c,u,d.sequenceNumber);Tu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await da(t,r)}}async function da(t,e,n){if(!$s(e))throw e;t.k_.add(1),await Xi(t),t.K_.set("Offline"),n||(n=()=>r_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Ga(t)})}function c_(t,e){return e().catch(n=>da(t,n,e))}async function Ka(t){const e=ye(t),n=Er(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;IR(e);)try{const s=await oR(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,bR(e,s)}catch(s){await da(e,s)}u_(e)&&h_(e)}function IR(t){return Qr(t)&&t.L_.length<10}function bR(t,e){t.L_.push(e);const n=Er(t);n.s_()&&n.f_&&n.g_(e.mutations)}function u_(t){return Qr(t)&&!Er(t).i_()&&t.L_.length>0}function h_(t){Er(t).start()}async function AR(t){Er(t).w_()}async function RR(t){const e=Er(t);for(const n of t.L_)e.g_(n.mutations)}async function SR(t,e,n){const r=t.L_.shift(),s=mu.from(r,e,n);await c_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ka(t)}async function CR(t,e){e&&Er(t).f_&&await async function(r,s){if(function(o){return fA(o)&&o!==F.ABORTED}(s.code)){const i=r.L_.shift();Er(r).__(),await c_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ka(r)}}(t,e),u_(t)&&h_(t)}async function Mf(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Qr(n);n.k_.add(3),await Xi(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Ga(n)}async function PR(t,e){const n=ye(t);e?(n.k_.delete(2),await Ga(n)):e||(n.k_.add(2),await Xi(n),n.K_.set("Unknown"))}function Bs(t){return t.W_||(t.W_=function(n,r,s){const i=ye(n);return i.b_(),new pR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:vR.bind(null,t),mo:ER.bind(null,t),po:wR.bind(null,t),R_:TR.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),bu(t)?Iu(t):t.K_.set("Unknown")):(await t.W_.stop(),l_(t))})),t.W_}function Er(t){return t.G_||(t.G_=function(n,r,s){const i=ye(n);return i.b_(),new mR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:AR.bind(null,t),po:CR.bind(null,t),p_:RR.bind(null,t),y_:SR.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Ka(t)):(await t.G_.stop(),t.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Au(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ru(t,e){if($n("AsyncQueue",`${e}: ${t}`),$s(t))return new ne(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{static emptySet(e){return new Es(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=oi(),this.sortedSet=new Qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.z_=new Qe(ae.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):de():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Os{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Os(e,n,Es.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class DR{constructor(){this.queries=Lf(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=Lf(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new ne(F.ABORTED,"Firestore shutting down"))}}function Lf(){return new Kr(t=>Og(t),$a)}async function Su(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new kR,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Ru(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Pu(n)}async function Cu(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NR(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&Pu(n)}function OR(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Pu(t){t.X_.forEach(e=>{e.next()})}var Ac,Ff;(Ff=Ac||(Ac={})).na="default",Ff.Cache="cache";class ku{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Ac.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.key=e}}class f_{constructor(e){this.key=e}}class VR{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=be(),this.mutatedKeys=be(),this.Va=Vg(e),this.ma=new Es(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new xf,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=Ba(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;m&&_?m.data.isEqual(_.data)?S!==A&&(r.track({type:3,doc:_}),P=!0):this.ya(m,_)||(r.track({type:2,doc:_}),P=!0,(c&&this.Va(_,c)>0||u&&this.Va(_,u)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),P=!0):m&&!_&&(r.track({type:1,doc:m}),P=!0,(c||u)&&(l=!0)),P&&(_?(o=o.add(_),i=A?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(_,S){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return A(_)-A(S)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Os(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new xf,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=be(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new f_(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new d_(r))}),n}va(e){this.da=e.ds,this.Ra=be();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Os.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class MR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xR{constructor(e){this.key=e,this.Fa=!1}}class LR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Kr(l=>Og(l),$a),this.Oa=new Map,this.Na=new Set,this.La=new Qe(ae.comparator),this.Ba=new Map,this.ka=new yu,this.qa={},this.Qa=new Map,this.Ka=Ns.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function FR(t,e,n=!0){const r=v_(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await p_(r,e,n,!0),s}async function UR(t,e){const n=v_(t);await p_(n,e,!0,!1)}async function p_(t,e,n,r){const s=await aR(t.localStore,gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await $R(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&o_(t.remoteStore,s),l}async function $R(t,e,n,r,s){t.Ua=(p,m,_)=>async function(A,P,N,V){let L=P.view.ga(N);L.ss&&(L=await Nf(A.localStore,P.query,!1).then(({documents:b})=>P.view.ga(b,L)));const z=V&&V.targetChanges.get(P.targetId),Z=V&&V.targetMismatches.get(P.targetId)!=null,ce=P.view.applyChanges(L,A.isPrimaryClient,z,Z);return $f(A,P.targetId,ce.ba),ce.snapshot}(t,p,m,_);const i=await Nf(t.localStore,e,!0),o=new VR(e,i.ds),l=o.ga(i.documents),c=Yi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);$f(t,n,u.ba);const d=new MR(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function BR(t,e,n){const r=ye(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!$a(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&wu(r.remoteStore,s.targetId),Rc(r,s.targetId)}).catch(Us)):(Rc(r,s.targetId),await bc(r.localStore,s.targetId,!0))}async function qR(t,e){const n=ye(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wu(n.remoteStore,r.targetId))}async function jR(t,e,n){const r=JR(t);try{const s=await function(o,l){const c=ye(o),u=ot.now(),d=l.reduce((_,S)=>_.add(S.key),be());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=Bn(),A=be();return c.hs.getEntries(_,d).next(P=>{S=P,S.forEach((N,V)=>{V.isValidDocument()||(A=A.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,S)).next(P=>{p=P;const N=[];for(const V of l){const L=lA(V,p.get(V.key).overlayedDocument);L!=null&&N.push(new Cr(V.key,L,Ag(L.value.mapValue),qt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,N,l)}).next(P=>{m=P;const N=P.applyToLocalDocumentSet(p,A);return c.documentOverlayCache.saveOverlays(_,P.batchId,N)})}).then(()=>({batchId:m.batchId,changes:xg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Qe(Ae)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Zi(r,s.changes),await Ka(r.remoteStore)}catch(s){const i=Ru(s,"Failed to persist write");n.reject(i)}}async function m_(t,e){const n=ye(t);try{const r=await sR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Me(o.Fa):s.removedDocuments.size>0&&(Me(o.Fa),o.Fa=!1))}),await Zi(n,r,e)}catch(r){await Us(r)}}function Uf(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ye(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(u=!0)}),u&&Pu(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HR(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Qe(ae.comparator);o=o.insert(i,Ct.newNoDocument(i,ge.min()));const l=be().add(i),c=new za(ge.min(),new Map,new Qe(Ae),o,l);await m_(r,c),r.La=r.La.remove(i),r.Ba.delete(e),Du(r)}else await bc(r.localStore,e,!1).then(()=>Rc(r,e,n)).catch(Us)}async function zR(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await rR(n.localStore,e);__(n,r,null),g_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zi(n,s)}catch(s){await Us(s)}}async function WR(t,e,n){const r=ye(t);try{const s=await function(o,l){const c=ye(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Me(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);__(r,e,n),g_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zi(r,s)}catch(s){await Us(s)}}function g_(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function __(t,e,n){const r=ye(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Rc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||y_(t,r)})}function y_(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(wu(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Du(t))}function $f(t,e,n){for(const r of n)r instanceof d_?(t.ka.addReference(r.key,e),GR(t,r)):r instanceof f_?(te("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||y_(t,r.key)):de()}function GR(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(te("SyncEngine","New document in limbo: "+n),t.Na.add(r),Du(t))}function Du(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ae(ze.fromString(e)),r=t.Ka.next();t.Ba.set(r,new xR(n)),t.La=t.La.insert(n,r),o_(t.remoteStore,new lr(gn(Ua(n.path)),r,"TargetPurposeLimboResolution",xa.oe))}}async function Zi(t,e,n){const r=ye(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Eu.zi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const d=ye(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(u,m=>U.forEach(m.Wi,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>U.forEach(m.Gi,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!$s(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.us.get(m),S=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(S);d.us=d.us.insert(m,A)}}}(r.localStore,i))}async function KR(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await n_(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new ne(F.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zi(n,r.Ts)}}function QR(t,e){const n=ye(t),r=n.Ba.get(e);if(r&&r.Fa)return be().add(r.key);{let s=be();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function v_(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=m_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HR.bind(null,e),e.Ma.R_=NR.bind(null,e.eventManager),e.Ma.Wa=OR.bind(null,e.eventManager),e}function JR(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WR.bind(null,e),e}class fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wa(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return nR(this.persistence,new eR,e.initialUser,this.serializer)}ja(e){return new t_(vu.ei,this.serializer)}za(e){return new cR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fa.provider={build:()=>new fa};class YR extends fa{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Me(this.persistence.referenceDelegate instanceof ha);const r=this.persistence.referenceDelegate.garbageCollector;return new UA(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new t_(r=>ha.ei(r,n),this.serializer)}}class Sc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KR.bind(null,this.syncEngine),await PR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DR}()}createDatastore(e){const n=Wa(e.databaseInfo.databaseId),r=function(i){return new fR(i)}(e.databaseInfo);return function(i,o,l,c){return new gR(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new yR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Uf(this.syncEngine,n,0),function(){return Vf.p()?new Vf:new uR}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new LR(s,i,o,l,c,u);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);te("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Xi(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Sc.provider={build:()=>new Sc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=Tg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ru(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bl(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await n_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Bf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZR(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Mf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Mf(e.remoteStore,s)),t._onlineComponents=e}async function ZR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Cs("Error using user provided cache. Falling back to memory cache: "+n),await Bl(t,new fa)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Bl(t,new YR(void 0));return t._offlineComponents}async function E_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Bf(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Bf(t,new Sc))),t._onlineComponents}function eS(t){return E_(t).then(e=>e.syncEngine)}async function pa(t){const e=await E_(t),n=e.eventManager;return n.onListen=FR.bind(null,e.syncEngine),n.onUnlisten=BR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=UR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qR.bind(null,e.syncEngine),n}function tS(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Nu({next:m=>{d.eu(),o.enqueueAndForget(()=>Cu(i,p));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new ne(F.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new ne(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ku(Ua(l.path),d,{includeMetadataChanges:!0,ua:!0});return Su(i,p)}(await pa(t),t.asyncQueue,e,n,r)),r.promise}function nS(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Nu({next:m=>{d.eu(),o.enqueueAndForget(()=>Cu(i,p)),m.fromCache&&c.source==="server"?u.reject(new ne(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ku(l,d,{includeMetadataChanges:!0,ua:!0});return Su(i,p)}(await pa(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function w_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t,e,n){if(!n)throw new ne(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rS(t,e,n,r){if(e===!0&&r===!0)throw new ne(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jf(t){if(!ae.isDocumentKey(t))throw new ne(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hf(t){if(ae.isDocumentKey(t))throw new ne(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qa(t);throw new ne(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=w_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ja{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pb;switch(r.type){case"firstParty":return new yb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qf.get(n);r&&(te("ComponentProvider","Removing Datastore"),qf.delete(n),r.terminate())}(this),Promise.resolve()}}function sS(t,e,n,r={}){var s;const i=(t=Jt(t,Ja))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=At.MOCK_USER;else{l=Dw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ne(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new At(u)}t._authCredentials=new mb(new wg(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jr(this.firestore,e,this._query)}}class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class pr extends Jr{constructor(e,n,r){super(e,n,Ua(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new ae(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function Tn(t,e,...n){if(t=dt(t),T_("collection","path",e),t instanceof Ja){const r=ze.fromString(e,...n);return Hf(r),new pr(t,null,r)}{if(!(t instanceof Lt||t instanceof pr))throw new ne(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return Hf(r),new pr(t.firestore,null,r)}}function kt(t,e,...n){if(t=dt(t),arguments.length===1&&(e=Tg.newId()),T_("doc","path",e),t instanceof Ja){const r=ze.fromString(e,...n);return jf(r),new Lt(t,null,new ae(r))}{if(!(t instanceof Lt||t instanceof pr))throw new ne(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return jf(r),new Lt(t.firestore,t instanceof pr?t.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new s_(this,"async_queue_retry"),this.fu=()=>{const r=$l();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=$l();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=$l();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new xn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!$s(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw $n("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Au.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&de()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Gf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class qn extends Ja{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Wf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wf(e),this._firestoreClient=void 0,await e}}}function Ou(t,e){const n=typeof t=="object"?t:Mm(),r=typeof t=="string"?t:"(default)",s=Yc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Pw("firestore");i&&sS(s,...i)}return s}function eo(t){if(t._terminated)throw new ne(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||iS(t),t._firestoreClient}function iS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new Ob(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,w_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new XR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vs(vt.fromBase64String(e))}catch(n){throw new ne(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vs(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
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
 */const oS=/^__.*__$/;class aS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ji(e,this.data,n,this.fieldTransforms)}}class I_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function b_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class xu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new xu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ma(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(b_(this.Mu)&&oS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class lS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wa(e)}$u(e,n,r,s=!1){return new xu({Mu:e,methodName:n,Ku:r,path:yt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xa(t){const e=t._freezeSettings(),n=Wa(t._databaseId);return new lS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function A_(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Fu("Data must be an object, but it was:",o,r);const l=C_(r,o);let c,u;if(i.merge)c=new Kt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Cc(e,p,n);if(!o.contains(m))throw new ne(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);k_(d,m)||d.push(m)}c=new Kt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new aS(new Bt(l),c,u)}class Za extends Ya{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Za}}class Lu extends Ya{_toFieldTransform(e){return new sA(e.path,new xi)}isEqual(e){return e instanceof Lu}}function R_(t,e,n,r){const s=t.$u(1,e,n);Fu("Data must be an object, but it was:",s,r);const i=[],o=Bt.empty();Sr(r,(c,u)=>{const d=Uu(e,c,n);u=dt(u);const p=s.Bu(d);if(u instanceof Za)i.push(d);else{const m=no(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Kt(i);return new I_(o,l,s.fieldTransforms)}function S_(t,e,n,r,s,i){const o=t.$u(1,e,n),l=[Cc(e,r,n)],c=[s];if(i.length%2!=0)throw new ne(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Cc(e,i[m])),c.push(i[m+1]);const u=[],d=Bt.empty();for(let m=l.length-1;m>=0;--m)if(!k_(u,l[m])){const _=l[m];let S=c[m];S=dt(S);const A=o.Bu(_);if(S instanceof Za)u.push(_);else{const P=no(S,A);P!=null&&(u.push(_),d.set(_,P))}}const p=new Kt(u);return new I_(d,p,o.fieldTransforms)}function cS(t,e,n,r=!1){return no(n,t.$u(r?4:3,e))}function no(t,e){if(P_(t=dt(t)))return Fu("Unsupported field value:",e,t),C_(t,e);if(t instanceof Ya)return function(r,s){if(!b_(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=no(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:ua(s.serializer,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ua(s.serializer,i)}}if(r instanceof Vu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vs)return{bytesValue:Kg(s.serializer,r._byteString)};if(r instanceof Lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_u(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Mu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return pu(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Qa(r)}`)}(t,e)}function C_(t,e){const n={};return Ig(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(t,(r,s)=>{const i=no(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function P_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof Vu||t instanceof Vs||t instanceof Lt||t instanceof Ya||t instanceof Mu)}function Fu(t,e,n){if(!P_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Qa(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function Cc(t,e,n){if((e=dt(e))instanceof to)return e._internalPath;if(typeof e=="string")return Uu(t,e);throw ma("Field path arguments must be of type string or ",t,!1,void 0,n)}const uS=new RegExp("[~\\*/\\[\\]]");function Uu(t,e,n){if(e.search(uS)>=0)throw ma(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new to(...e.split("."))._internalPath}catch{throw ma(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ma(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(F.INVALID_ARGUMENT,l+t+c)}function k_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($u("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hS extends D_{data(){return super.data()}}function $u(t,e){return typeof e=="string"?Uu(t,e):e instanceof to?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bu{}class dS extends Bu{}function wr(t,e,...n){let r=[];e instanceof Bu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof qu).length,l=i.filter(c=>c instanceof el).length;if(o>1||o>0&&l>0)throw new ne(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class el extends dS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new el(e,n,r)}_apply(e){const n=this._parse(e);return O_(e._query,n),new Jr(e.firestore,e.converter,yc(e._query,n))}_parse(e){const n=Xa(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ne(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Qf(p,d);const _=[];for(const S of p)_.push(Kf(c,i,S));m={arrayValue:{values:_}}}else m=Kf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Qf(p,d),m=cS(l,o,p,d==="in"||d==="not-in");return nt.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Qt(t,e,n){const r=e,s=$u("where",t);return el._create(s,r,n)}class qu extends Bu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new qu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)O_(o,c),o=yc(o,c)}(e._query,n),new Jr(e.firestore,e.converter,yc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Kf(t,e,n){if(typeof(n=dt(n))=="string"){if(n==="")throw new ne(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ng(e)&&n.indexOf("/")!==-1)throw new ne(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ze.fromString(n));if(!ae.isDocumentKey(r))throw new ne(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pf(t,new ae(r))}if(n instanceof Lt)return pf(t,n._key);throw new ne(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qa(n)}.`)}function Qf(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function O_(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class fS{convertValue(e,n="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Sr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Xe(o.doubleValue));return new Mu(i)}convertGeoPoint(e){return new Vu(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const n=_r(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);Me(e_(r));const s=new Vi(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||$n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class M_ extends D_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($u("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ho extends M_{data(e={}){return super.data(e)}}class x_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new li(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ho(this._firestore,this._userDataWriter,r.key,r,new li(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ho(s._firestore,s._userDataWriter,l.doc.key,l.doc,new li(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ho(s._firestore,s._userDataWriter,l.doc.key,l.doc,new li(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:pS(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){t=Jt(t,Lt);const e=Jt(t.firestore,qn);return tS(eo(e),t._key).then(n=>U_(e,t,n))}class ju extends fS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function Tr(t){t=Jt(t,Jr);const e=Jt(t.firestore,qn),n=eo(e),r=new ju(e);return N_(t._query),nS(n,t._query).then(s=>new x_(e,r,t,s))}function Hu(t,e,n,...r){t=Jt(t,Lt);const s=Jt(t.firestore,qn),i=Xa(s);let o;return o=typeof(e=dt(e))=="string"||e instanceof to?S_(i,"updateDoc",t._key,e,n,r):R_(i,"updateDoc",t._key,e),tl(s,[o.toMutation(t._key,qt.exists(!0))])}function mS(t){return tl(Jt(t.firestore,qn),[new Ha(t._key,qt.none())])}function F_(t,e){const n=Jt(t.firestore,qn),r=kt(t),s=V_(t.converter,e);return tl(n,[A_(Xa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function gS(t,...e){var n,r,s;t=dt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Gf(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Gf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof Lt)u=Jt(t.firestore,qn),d=Ua(t._key.path),c={next:p=>{e[o]&&e[o](U_(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Jt(t,Jr);u=Jt(p.firestore,qn),d=p._query;const m=new ju(u);c={next:_=>{e[o]&&e[o](new x_(u,m,p,_))},error:e[o+1],complete:e[o+2]},N_(t._query)}return function(m,_,S,A){const P=new Nu(A),N=new ku(_,P,S);return m.asyncQueue.enqueueAndForget(async()=>Su(await pa(m),N)),()=>{P.eu(),m.asyncQueue.enqueueAndForget(async()=>Cu(await pa(m),N))}}(eo(u),d,l,c)}function tl(t,e){return function(r,s){const i=new xn;return r.asyncQueue.enqueueAndForget(async()=>jR(await eS(r),s,i)),i.promise}(eo(t),e)}function U_(t,e,n){const r=n.docs.get(e._key),s=new ju(t);return new M_(t,s,e._key,r,new li(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Xa(e)}set(e,n,r){this._verifyNotCommitted();const s=ql(e,this._firestore),i=V_(s.converter,n,r),o=A_(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,qt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=ql(e,this._firestore);let o;return o=typeof(n=dt(n))=="string"||n instanceof to?S_(this._dataReader,"WriteBatch.update",i._key,n,r,s):R_(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,qt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ql(e,this._firestore);return this._mutations=this._mutations.concat(new Ha(n._key,qt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ne(F.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ql(t,e){if((t=dt(t)).firestore!==e)throw new ne(F.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function ga(){return new Lu("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){return eo(t=Jt(t,qn)),new _S(t,e=>tl(t,e))}(function(e,n=!0){(function(s){Fs=s})(xs),Rs(new zr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new qn(new gb(r.getProvider("auth-internal")),new Eb(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),fr(lf,"4.7.5",e),fr(lf,"4.7.5","esm2017")})();const Ln=Ou(et),$_=Tn(Ln,"relays"),yS=Tn(Ln,"pinConfigs");async function vS(){const e=ft(et).currentUser;if(!e)throw new Error("User is not authenticated");const n=Tn(Ln,"relays"),r=wr(n,Qt("uid","==",e.uid));return(await Tr(r)).docs.map(i=>{const o=i.data();return{id:i.id,uid:o.uid,name:o.name,boardId:o.boardId,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0}})}async function ES(t,e){if(!ft(et).currentUser)throw new Error("User is not authenticated");const s=kt(Ln,"relays",t);await Hu(s,{state:e})}async function wS(t,e,n){if(!ft(et).currentUser)throw new Error("User is not authenticated");const i=kt(Ln,"relays",t);await Hu(i,{name:e,maxOnTime_s:n})}async function TS(t){const n=ft(et).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await F_($_,r)).id,...r}}async function IS(t){const n=ft(et).currentUser;if(!n)throw new Error("User is not authenticated");const r=ro(Ln),s=kt(Ln,"relays",t),i=wr(yS,Qt("relayId","==",t),Qt("uid","==",n.uid)),o=await Tr(i);if(!o.empty){const l=o.docs[0],c=kt(Ln,"pinConfigs",l.id);r.update(c,{relayId:null,relayName:null,mode:"input"})}r.delete(s),await r.commit()}async function bS(t){const n=ft(et).currentUser;if(!n)throw new Error("User is not authenticated");const r=wr($_,Qt("uid","==",n.uid),Qt("name","==",t));return(await Tr(r)).empty}function AS(t,e){if(!ft(et).currentUser)throw new Error("User is not authenticated");const s=kt(Ln,"relays",t);return gS(s,i=>{if(i.exists()){const o=i.data(),l={id:i.id,uid:o.uid,name:o.name,boardId:o.boardId,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0};e(l)}else console.error("Relay not found")})}const Pr=ji("relay",()=>{const t=re([]),e=re(),n=re(!1),r=re(null),s=re({}),i=async()=>{n.value=!0,r.value=null;try{t.value=await vS(),t.value.forEach(A=>{_(A.id)})}catch(A){r.value="Failed to load relays",console.error(A)}finally{n.value=!1}},o=async(A,P,N)=>{try{await wS(A,P,N);const V=t.value.find(L=>L.id===A);V&&(V.name=P,V.maxOnTime_s=N,e.value.id===V.id&&(e.value=V))}catch(V){console.error("Failed to update relay config:",V)}},l=async(A,P)=>{try{await ES(A,P);const N=t.value.find(V=>V.id===A);N&&(N.state=P)}catch(N){console.error("Failed to update relay state:",N)}},c=async A=>{try{const P=await TS(A);return t.value.push(P),_(P.id),P}catch(P){console.error("Failed to add relay:",P)}},u=async A=>{try{S(A),await IS(A),t.value=t.value.filter(P=>P.id!==A),e.value.id===A&&(e.value=null)}catch(P){console.error("Failed to delete relay:",P)}},d=async A=>{try{return await bS(A)}catch(P){return console.error("Failed to check relay name uniqueness:",P),!1}};function p(A){return m(A.maxOnTime_s?A.maxOnTime_s:0)}function m(A){if(isNaN(A)||A<0)return"00:00:00";const P=Math.floor(A/3600),N=Math.floor(A%3600/60),V=A%60,L=String(P).padStart(2,"0"),z=String(N).padStart(2,"0"),Z=String(V).padStart(2,"0");return`${L}:${z}:${Z}`}const _=A=>{S(A),s.value[A]=AS(A,P=>{const N=t.value.findIndex(V=>V.id===A);N!==-1&&(t.value[N]=P)})},S=A=>{s.value[A]&&(s.value[A](),delete s.value[A])};return Hc(()=>{Object.keys(s.value).forEach(A=>{S(A)})}),{relays:t,selectedRelay:e,loading:n,error:r,loadRelays:i,updateRelayConfig:o,updateRelayState:l,addRelay:c,isRelayNameUnique:d,deleteRelay:u,getMaxOnTime:p,secondsToHHMMSS:m}}),qs=ji("page",()=>{const t=re("relays"),e=re(),n={home:"Relay Hub",boards:"Boards",board:"Board",relays:"Relay Control",relay:"Relay",schedules:"Task Schedules"},r=o=>{t.value=o},s=$e(()=>n[t.value]||"Unknown Page");return{currentPage:t,currentPageTitle:s,navigateBackPage:e,setPage:r,setNavigateBackPage:o=>{e.value=o}}}),RS=Ne({components:{ToggleButton:fb},props:{relay:{type:Object,required:!0}},setup(t){const e=qs(),n=Ms(),r=Pr(),s=re(0);let i;const o=re(t.relay.turnedOnAt),l=re(!1);Bi(async()=>{await u()}),Vp(()=>{clearTimeout(i)});const c=$e(()=>{let A=t.relay.name;return t.relay.maxOnTime_s&&t.relay.maxOnTime_s>0&&(t.relay.state?A+=" - "+r.secondsToHHMMSS(s.value):A+=" - "+r.getMaxOnTime(t.relay)),A});async function u(){t.relay.maxOnTime_s!==0&&(s.value=p(),s.value!==0&&t.relay.state&&m())}async function d(A){A&&t.relay.maxOnTime_s&&(s.value=t.relay.maxOnTime_s),A?(o.value=t.relay.turnedOnAt,l.value=!0):l.value=!1,await r.updateRelayState(t.relay.id,A),!(!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0)&&(A||(clearTimeout(i),s.value=0))}function p(){if(!t.relay.turnedOnAt||!t.relay.maxOnTime_s)return 0;const A=t.relay.turnedOnAt.getTime()+t.relay.maxOnTime_s*1e3;return Math.max(0,Math.floor((A-Date.now())/1e3))}function m(){!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0||(clearTimeout(i),i=setTimeout(async()=>{s.value--,s.value!==0&&m()},1e3))}function _(){!o.value||!t.relay.turnedOnAt||o.value>=t.relay.turnedOnAt||(l.value=!1,m())}function S(){r.selectedRelay=t.relay,e.setNavigateBackPage("relays"),n.push({name:"relay"})}return pn(()=>t.relay.turnedOnAt,_),{displayName:c,isBlocked:l,onRelayClicked:S,handleToggle:d}}}),SS={class:"relay"};function CS(t,e,n,r,s,i){const o=_e("toggle-button");return q(),J("div",SS,[$("div",{class:"name",onClick:e[0]||(e[0]=(...l)=>t.onRelayClicked&&t.onRelayClicked(...l))},Ee(t.displayName),1),pe(o,{modelValue:t.$props.relay.state,isBlocked:t.isBlocked,"onUpdate:modelValue":t.handleToggle},null,8,["modelValue","isBlocked","onUpdate:modelValue"])])}const B_=xe(RS,[["render",CS],["__scopeId","data-v-12c7baca"]]),PS=Ne({components:{ButtonDefault:Wn},emits:["isDone"],props:{allowAdvancedSettings:{type:Boolean,default:!1},existingRelay:{type:Object,default:null}},setup(t,e){const n=Pr(),r=re(""),s=re(""),i=re("");Bi(()=>{t.existingRelay&&(r.value=t.existingRelay.name,s.value=n.getMaxOnTime(t.existingRelay))});async function o(){if(!await c()||!u())return;const p=d();t.existingRelay?await n.updateRelayConfig(t.existingRelay.id,r.value.trim(),p):await n.addRelay({name:r.value.trim(),state:!1,maxOnTime_s:p}),r.value="",e.emit("isDone")}function l(){e.emit("isDone")}async function c(){return r.value.trim().length<2?(i.value="Relay name must be at least 2 characters long.",!1):t.existingRelay&&t.existingRelay.name===r.value.trim()?!0:await n.isRelayNameUnique(r.value.trim())?(i.value="",!0):(i.value="Relay name already exists.",!1)}function u(){if(!t.allowAdvancedSettings)return!0;const p=s.value.trim();if(p==="")return!0;const _=/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(p);return _||(i.value="Max on time must be in the format HH:MM:SS."),_}function d(){if(!t.allowAdvancedSettings)return 0;const p=s.value.trim(),[m,_,S]=p.split(":").map(Number);return m*3600+_*60+S}return{newRelayName:r,newMaxOnTime:s,nameError:i,saveRelay:o,abortChanges:l}}}),kS={class:"relay-editable"},DS={key:0,class:"header"},NS={key:1,class:"max-on-time"},OS={class:"action-buttons"},VS={key:2,class:"name-error"};function MS(t,e,n,r,s,i){const o=_e("button-default");return q(),J("div",kS,[t.$props.allowAdvancedSettings?(q(),J("div",DS,"Name")):we("",!0),ws($("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.newRelayName=l),type:"text",placeholder:"Relay name",class:"relay-input"},null,512),[[Is,t.newRelayName]]),t.$props.allowAdvancedSettings?(q(),J("div",NS,[e[2]||(e[2]=$("div",{class:"header"},"Max on time",-1)),ws($("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.newMaxOnTime=l),type:"text",placeholder:"HH:MM:SS or keep empty",class:"max-on-time-input"},null,512),[[Is,t.newMaxOnTime]])])):we("",!0),$("div",OS,[pe(o,{class:"button-save",text:"Save",onClick:t.saveRelay},null,8,["onClick"]),pe(o,{class:"button-cancel",text:"Cancel",onClick:t.abortChanges},null,8,["onClick"])]),t.nameError?(q(),J("div",VS,Ee(t.nameError),1)):we("",!0)])}const xS=xe(PS,[["render",MS],["__scopeId","data-v-476b92f7"]]),Pt=Ou(et),LS=Tn(Pt,"boards"),FS=Tn(Pt,"pinConfigs");async function US(){const e=ft(et).currentUser;if(!e)throw new Error("User is not authenticated");const n=wr(LS,Qt("uid","==",e.uid));return(await Tr(n)).docs.map(s=>{const i=s.data();return{id:s.id,uid:i.uid,model:i.model,name:i.name,updatedAt:i.updatedAt.toDate(),createdAt:i.createdAt.toDate()}})}async function $S(t){if(!ft(et).currentUser)throw new Error("User is not authenticated");const r=kt(Pt,"boards",t),s=await L_(r);if(!s.exists())throw new Error(`Board with ID ${t} does not exist`);const i=s.data();return{id:t,uid:i.uid,name:i.name,model:i.model,createdAt:i.createdAt.toDate(),updatedAt:i.updatedAt.toDate()}}async function BS(t){const n=ft(et).currentUser;if(!n)throw new Error("User is not authenticated");try{const r=wr(FS,Qt("uid","==",n.uid),Qt("boardId","==",t));return(await Tr(r)).docs.map(i=>{const o=i.data();return{id:i.id,uid:o.uid,mode:o.mode,boardId:o.boardId,pinNumber:o.pinNumber,relayId:o.relayId,relayName:o.relayName}})}catch(r){throw console.error("Error fetching pinConfigs:",r),r}}async function qS(t,e){const n=ro(Pt),r=kt(Pt,"boards",t);n.update(r,{name:e,updatedAt:ga()}),await n.commit()}async function jS(t,e,n){const s=ft(et).currentUser;if(!s)throw new Error("User is not authenticated");if(n<=0)throw new Error("Number of pins must be greater than 0");const i=ro(Pt),o=kt(Tn(Pt,"boards")),l={uid:s.uid,name:t,model:e,createdAt:ga(),updatedAt:ga()};i.set(o,l);for(let d=1;d<=n;d++){const p=kt(Tn(Pt,"pinConfigs")),m={uid:s.uid,pinNumber:d,mode:"input",boardId:o.id};i.set(p,m)}await i.commit();const c=await L_(o);if(!c.exists())throw new Error("Failed to retrieve the created board");const u=c.data();return{id:o.id,uid:u.uid,name:u.name,model:u.model,createdAt:u.createdAt.toDate(),updatedAt:u.updatedAt.toDate()}}async function HS(t,e){if(!ft(et).currentUser)throw new Error("User is not authenticated");if(!t.id)throw new Error("PinConfig ID is missing");if(!t.boardId)throw new Error("Board ID is missing in PinConfig");const s=kt(Pt,"pinConfigs",t.id),i=kt(Pt,"boards",t.boardId),o=ro(Pt);o.update(s,{mode:t.mode,relayName:t.relayName??null,relayId:t.relayId??null}),e.forEach(l=>{if(!l.id)throw new Error("Relay ID is missing");const c=kt(Pt,"relays",l.id);o.update(c,{boardId:l.boardId})}),o.update(i,{updatedAt:ga()}),await o.commit()}async function zS(t){const n=ft(et).currentUser;if(!n)throw new Error("User is not authenticated");const r=kt(Pt,"boards",t),s=wr(Tn(Pt,"pinConfigs"),Qt("boardId","==",t),Qt("uid","==",n.uid)),i=wr(Tn(Pt,"relays"),Qt("boardId","==",t),Qt("uid","==",n.uid)),o=ro(Pt);try{(await Tr(s)).forEach(u=>{o.delete(u.ref)}),(await Tr(i)).forEach(u=>{o.update(u.ref,{boardId:null})}),o.delete(r),await o.commit()}catch(l){throw console.error("Error deleting board and associated data:",l),new Error("Failed to delete the board.")}}const so=ji("board",()=>{const t=re([]),e=re(null),n=re([]),r=re(!1),s=re(!1),i=re(null),o=Pr(),l=async()=>{try{r.value=!0,t.value=await US()}catch(S){console.error("Failed to fetch boards:",S),i.value="Unable to load boards."}finally{r.value=!1}},c=async(S,A)=>{try{const P=t.value.findIndex(V=>V.id===S);if(P===-1)return;const N=t.value[P];await qS(S,A),t.value[P]={...N,name:A},e.value=t.value[P]}catch(P){console.error("Failed to update board:",P),i.value="Unable to update board."}},u=async(S,A,P)=>{try{P<=0&&console.error("Number of pins must be greater than 0");const N=await jS(S,A,P);t.value.push(N),console.log("Board added successfully with pins:",N)}catch(N){console.error("Failed to add new board:",N),i.value="Unable to add new board."}},d=async()=>{try{if(!e.value)return;s.value=!0;const S=e.value.id;if(e.value){const A=await BS(S);n.value=A.map(P=>{const N=o.relays.find(V=>V.id===P.relayId);return{...P,relayName:N?N.name:""}}).sort((P,N)=>P.pinNumber-N.pinNumber)}}catch(S){console.error("Failed to load board details:",S),i.value="Unable to load board details."}finally{s.value=!1}},p=()=>{e.value=null,n.value=[]};return{boards:t,selectedBoard:e,pinConfigs:n,loadingBoards:r,loadingPinConfigs:s,error:i,loadBoards:l,loadBoardDetails:d,addBoardWithPins:u,updatePinConfigAndRelays:async(S,A)=>{var P;try{await HS(S,A);const N=n.value.findIndex(L=>L.id===S.id);N!==-1&&(n.value[N]={...S});const V=t.value.findIndex(L=>L.id===S.boardId);if(V!==-1){const L=await $S(S.boardId);t.value[V]={...L},((P=e.value)==null?void 0:P.id)===S.boardId&&(e.value={...L})}}catch(N){console.error("Failed to update PinConfig mode:",N),i.value="Unable to update PinConfig."}},clearSelectedBoard:p,updateBoard:c,deleteBoard:async S=>{var A;try{await zS(S);const P=t.value.findIndex(N=>N.id===S);P!==-1&&t.value.splice(P,1),((A=e.value)==null?void 0:A.id)===S&&p()}catch(P){console.error("Failed to delete board:",P)}}}}),WS=Ne({components:{ButtonDefault:Wn},emits:["relayAdded","cancel"],props:{relay:{type:Object,default:null}},setup(t,{emit:e}){const n=so(),r=Pr(),s=re(!1),i=re(!0),o=re(""),l=re(""),c=re(null),u=re(null),d=re([]),p=re([]),m=re(!1),_=re(!1),S=re();Bi(()=>{t.relay&&(o.value=t.relay.name,s.value=!0,S.value=r.getMaxOnTime(t.relay).trim(),l.value=S.value),d.value=L()});const A=$e(()=>!s.value||!i.value?!1:t.relay?o.value.trim()!==t.relay.name.trim()||l.value.trim()!==S.value:c.value?!!u.value:!0);async function P(){if(!A.value)return;const R=N();try{if(t.relay)await r.updateRelayConfig(t.relay.id,o.value.trim(),R);else{const C=await r.addRelay({name:o.value.trim(),state:!1,maxOnTime_s:R});c.value&&(C.boardId=c.value.id,u.value.relayId=C.id,u.value.relayName=C.name,await n.updatePinConfigAndRelays(u.value,[C]))}}finally{e("relayAdded")}}function N(){if(l.value.trim()==="")return 0;const R=l.value.trim(),[C,w,st]=R.split(":").map(Number);return C*3600+w*60+st}function V(){e("cancel")}function L(){const R=[{value:null,label:"None"}];return R.push(...n.boards.map(C=>({value:C,label:C.name})).sort((C,w)=>C.value.name.localeCompare(w.value.name))),R}function z(){m.value=!0,_.value=!1}async function Z(){await n.loadBoards(),_.value=!0}async function ce(R){if(c.value=R,u.value=null,c.value===null){n.clearSelectedBoard();return}n.selectedBoard=c.value,await n.loadBoardDetails(),p.value=n.pinConfigs.filter(C=>!C.relayId).map(C=>({value:C,label:C.pinNumber}))}async function b(){s.value=await E()}async function y(){i.value=I()}async function E(){return o.value.trim().length<2?!1:t.relay&&t.relay.name===o.value.trim()?!0:await r.isRelayNameUnique(o.value.trim())}function I(){const R=l.value.trim();return R===""?!0:/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(R)}return pn(()=>o.value,b),pn(()=>l.value,y),{name:o,maxOnTime:l,selectedBoard:c,selectedPin:u,canSave:A,showAdvancedSettings:m,showMoreAdvancedSettings:_,availableBoards:d,availablePins:p,onSelectBoard:ce,onShowAdvancedSettings:z,onShowMoreAdvancedSettings:Z,onAdd:P,onCancel:V}}}),GS={class:"popup-add-relay"},KS={class:"popup"},QS={key:2},JS={key:2},YS={class:"options"},XS=["onClick"],ZS={key:0},eC={class:"options"},tC=["onClick"],nC={key:0},rC={key:1,class:"options"},sC={class:"buttons"};function iC(t,e,n,r,s,i){const o=_e("button-default");return q(),J("div",GS,[$("div",KS,[$("h3",null,Ee(t.$props.relay?"Edit Relay":"Add New Relay"),1),e[11]||(e[11]=$("label",{for:"name"},"Name:",-1)),ws($("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.name=l),type:"text",placeholder:"Enter relay name"},null,512),[[Is,t.name]]),!t.$props.relay&&t.showAdvancedSettings?(q(),J("label",{key:0,class:"settings-toggle",onClick:e[1]||(e[1]=l=>t.showAdvancedSettings=!1)},"Hide advanced settings")):t.$props.relay?we("",!0):(q(),J("label",{key:1,class:"settings-toggle",onClick:e[2]||(e[2]=(...l)=>t.onShowAdvancedSettings&&t.onShowAdvancedSettings(...l))},"Show advanced settings")),t.showAdvancedSettings||t.$props.relay?(q(),J("div",QS,[e[10]||(e[10]=$("label",null,"Max on time:",-1)),ws($("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>t.maxOnTime=l),type:"text",placeholder:"HH:MM:SS or keep empty"},null,512),[[Is,t.maxOnTime]]),!t.$props.relay&&t.showAdvancedSettings&&t.showMoreAdvancedSettings?(q(),J("label",{key:0,class:"settings-toggle",onClick:e[4]||(e[4]=l=>t.showMoreAdvancedSettings=!1)},"Hide more advanced settings")):!t.$props.relay&&t.showAdvancedSettings?(q(),J("label",{key:1,class:"settings-toggle",onClick:e[5]||(e[5]=(...l)=>t.onShowMoreAdvancedSettings&&t.onShowMoreAdvancedSettings(...l))},"Show more advanced settings")):we("",!0),!t.$props.relay&&t.showMoreAdvancedSettings?(q(),J("div",JS,[e[9]||(e[9]=$("label",null,"Board:",-1)),$("div",YS,[(q(!0),J(Ye,null,vn(t.availableBoards,l=>{var c;return q(),J("div",{class:"option",key:(c=l.value)==null?void 0:c.id},[$("div",{class:it(["option-text",{"is-checked":t.selectedBoard===l.value}]),onClick:u=>t.onSelectBoard(l.value)},Ee(l.label),11,XS)])}),128))]),t.selectedBoard?(q(),J("div",ZS,[e[8]||(e[8]=$("label",null,"Pin:",-1)),$("div",eC,[(q(!0),J(Ye,null,vn(t.availablePins,l=>{var c;return q(),J("div",{class:"option",key:(c=l.value)==null?void 0:c.id},[$("div",{class:it(["option-text",{"is-checked":t.selectedPin===l.value}]),onClick:u=>t.selectedPin=l.value},Ee(l.value.pinNumber),11,tC)])}),128))]),t.selectedPin?(q(),J("label",nC,"Pin mode:")):we("",!0),t.selectedPin?(q(),J("div",rC,[(q(),J("div",{class:"option",key:t.selectedPin.id+"in"},[$("div",{class:it(["option-text",{"is-checked":t.selectedPin.mode==="input"}]),onClick:e[6]||(e[6]=l=>t.selectedPin.mode="input")}," Input ",2)])),(q(),J("div",{class:"option",key:t.selectedPin.id+"out"},[$("div",{class:it(["option-text",{"is-checked":t.selectedPin.mode==="output"}]),onClick:e[7]||(e[7]=l=>t.selectedPin.mode="output")}," Output ",2)]))])):we("",!0)])):we("",!0)])):we("",!0)])):we("",!0),$("div",sC,[pe(o,{class:it({"can-save":t.canSave}),text:"Save",onClick:t.onAdd},null,8,["class","onClick"]),pe(o,{text:"Cancel",onClick:t.onCancel},null,8,["onClick"])])])])}const q_=xe(WS,[["render",iC],["__scopeId","data-v-ba97f4a2"]]),oC=Ne({components:{PopupAddRelay:q_,RelayEditable:xS,ButtonDefault:Wn,Relay:B_,Spinner:Da},emits:["requestScrollToBottom"],setup(t,e){const n=Pr(),r=re(!1),s=re(""),i=re([]),o=re(!1),l=re(""),c=re([]);Rr(()=>{o.value=!1,n.loadRelays(),c.value=n.relays,l.value=""});function u(){const p=l.value.trim().toLowerCase();p.length===0?c.value=n.relays:c.value=n.relays.filter(m=>m.name.toLowerCase().includes(p))}function d(){l.value="",u(),o.value=!1}return pn(()=>l.value,u),{ref_relayItems:i,relayStore:n,requestAddNewRelay:o,isAddingNewRelay:r,editableRelayId:s,filterText:l,currentRelays:c,onRelayAdded:d}}}),aC={class:"relays"},lC={key:1};function cC(t,e,n,r,s,i){const o=_e("spinner"),l=_e("relay"),c=_e("button-default"),u=_e("popup-add-relay");return q(),J("div",aC,[t.relayStore.loading?(q(),He(o,{key:0,"spinner-size":"20px","with-text":!0})):we("",!0),!t.relayStore.loading&&!t.relayStore.error?(q(),J("div",lC,[ws($("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>t.filterText=d),type:"text",placeholder:"Filter",class:"filter"},null,512),[[Is,t.filterText]]),(q(!0),J(Ye,null,vn(t.currentRelays,d=>(q(),He(l,{key:d.id,relay:d},null,8,["relay"]))),128)),pe(c,{text:"Add new relay",onClick:e[1]||(e[1]=d=>t.requestAddNewRelay=!0)})])):we("",!0),t.requestAddNewRelay?(q(),He(u,{key:2,onRelayAdded:t.onRelayAdded,onCancel:e[2]||(e[2]=d=>t.requestAddNewRelay=!1)},null,8,["onRelayAdded"])):we("",!0)])}const j_=xe(oC,[["render",cC],["__scopeId","data-v-4959629b"]]),zu=Ou(et),H_=Tn(zu,"schedules");async function uC(){const e=ft(et).currentUser;if(!e)throw new Error("User is not authenticated");const n=wr(H_,Qt("uid","==",e.uid));return(await Tr(n)).docs.map(s=>{const i=s.data();return{id:s.id,uid:i.uid,name:i.name,timeStart:i.timeStart,duration:i.duration,relays:i.relays||[],days:i.days||[]}})}async function hC(t){const n=ft(et).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await F_(H_,r)).id,...r}}async function dC(t,e){if(!ft(et).currentUser)throw new Error("User is not authenticated");const s=kt(zu,"schedules",t);await Hu(s,e)}async function fC(t){if(!ft(et).currentUser)throw new Error("User is not authenticated");const r=kt(zu,"schedules",t);await mS(r)}const pC=ji("schedule",()=>{const t=re([]),e=re(!1),n=re(null);return{schedules:t,loading:e,error:n,loadSchedules:async()=>{e.value=!0,n.value=null;try{t.value=await uC()}catch(l){n.value="Failed to load schedules",console.error(l)}finally{e.value=!1}},addSchedule:async l=>{try{const c=await hC(l);t.value.push(c)}catch(c){console.error("Failed to add schedule:",c)}},updateSchedule:async(l,c)=>{try{await dC(l,c);const u=t.value.find(d=>d.id===l);u&&Object.assign(u,c)}catch(u){console.error("Failed to update schedule:",u)}},deleteSchedule:async l=>{try{await fC(l),t.value=t.value.filter(c=>c.id!==l)}catch(c){console.error("Failed to delete schedule:",c)}}}}),mC=Ne({props:{schedule:{type:Object,required:!0}},setup(t){const e=["Mo","Tu","We","Th","Fr","Sa","Su"],n=$e(()=>{const[s,i,o]=t.schedule.timeStart.split(":").map(Number),[l,c,u]=t.schedule.duration.split(":").map(Number),d=new Date;return d.setHours(s+l),d.setMinutes(i+c),d.setSeconds(o+u),`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`}),r=$e(()=>t.schedule.days.map(s=>s.slice(0,2)));return{endTime:n,allDays:e,selectedDays:r}}}),gC={class:"schedule-item"},_C={class:"schedule-name"},yC={class:"times"},vC={class:"schedule-time"},EC={class:"duration"},wC={class:"schedule-days"};function TC(t,e,n,r,s,i){return q(),J("div",gC,[$("div",_C,Ee(t.schedule.name),1),$("div",yC,[$("div",vC,Ee(t.schedule.timeStart)+" - "+Ee(t.endTime),1),$("div",EC,"("+Ee(t.schedule.duration)+")",1)]),$("div",wC,[(q(!0),J(Ye,null,vn(t.allDays,o=>(q(),J("span",{key:o,class:it([{selected:t.selectedDays.includes(o)},"day"])},Ee(o),3))),128))])])}const IC=xe(mC,[["render",TC],["__scopeId","data-v-58b7d5b4"]]),bC=Ne({components:{Schedule:IC,Spinner:Da},setup(){const t=pC();return Rr(async()=>{await t.loadSchedules()}),{scheduleStore:t}}}),AC={class:"schedules"},RC={key:1},SC={key:0};function CC(t,e,n,r,s,i){const o=_e("spinner"),l=_e("Schedule");return q(),J("div",AC,[t.scheduleStore.loading?(q(),He(o,{key:0,"spinner-size":"20px","with-text":!0})):we("",!0),!t.scheduleStore.loading&&!t.scheduleStore.error?(q(),J("div",RC,[t.scheduleStore.schedules.length?(q(),J("div",SC,[(q(!0),J(Ye,null,vn(t.scheduleStore.schedules,c=>(q(),He(l,{key:c.id,schedule:c},null,8,["schedule"]))),128))])):we("",!0)])):we("",!0)])}const z_=xe(bC,[["render",CC],["__scopeId","data-v-3e0043e6"]]),PC=Ne({props:{title:{type:String,required:!0}},setup(){return{}}}),kC={class:"page-tite"};function DC(t,e,n,r,s,i){return q(),J("div",kC,Ee(t.$props.title),1)}const NC=xe(PC,[["render",DC],["__scopeId","data-v-7de7892e"]]),OC=Ne({props:{color:{type:String,default:"white"}},setup(t){return{iconBackStyle:$e(()=>({"--icon-color":t.color}))}}});function VC(t,e,n,r,s,i){return q(),J("div",{class:"icon-back",style:Hn(t.iconBackStyle)},e[0]||(e[0]=[$("svg",{viewBox:"0 0 24 24",class:"icon",xmlns:"http://www.w3.org/2000/svg"},[$("path",{d:"m 16.962167,22.810082 c 0.297374,0.270339 0.75695,0.243306 1.027288,-0.05406 0.270339,-0.297374 0.243307,-0.75695 -0.05406,-1.027288 L 7.4732599,12.266854 c -0.2703387,-0.243306 -0.2703387,-0.594746 0,-0.83805 L 17.935388,2.2913399 c 0.297374,-0.2703387 0.324406,-0.729915 0.0811,-1.0272884 C 17.746147,0.96667721 17.286569,0.93964454 16.989198,1.1829535 L 6.5270732,10.347447 c -0.9191536,0.811018 -0.9461886,2.162712 -0.027033,3.000764 z",style:{"stroke-width":"0.0337924"}})],-1)]),4)}const MC=xe(OC,[["render",VC],["__scopeId","data-v-0a839df4"]]),xC=Ne({components:{IconBack:MC,PageTitle:NC},setup(){const t=qs(),e=Ms();function n(){t.navigateBackPage&&(e.push({name:t.navigateBackPage}),t.setNavigateBackPage(null))}return{pageStore:t,onNavigateBack:n}}}),LC={class:"top-bar"};function FC(t,e,n,r,s,i){const o=_e("icon-back"),l=_e("PageTitle");return q(),J("div",LC,[$("div",{class:"icon-back-wrapper",onClick:e[0]||(e[0]=(...c)=>t.onNavigateBack&&t.onNavigateBack(...c))},[t.pageStore.navigateBackPage?(q(),He(o,{key:0},{default:Mn(()=>e[1]||(e[1]=[Wt(" Back ")])),_:1})):we("",!0)]),pe(l,{title:t.pageStore.currentPageTitle},null,8,["title"])])}const UC=xe(xC,[["render",FC],["__scopeId","data-v-70cabded"]]),$C=Ne({props:{color:{type:String,default:"white"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconRaspberryStyle:$e(()=>({"--icon-color":t.color,fontSize:t.fontSize}))}}}),BC={key:0,class:"text"};function qC(t,e,n,r,s,i){return q(),J("div",{class:"icon-raspberry",style:Hn(t.iconRaspberryStyle)},[e[0]||(e[0]=$("svg",{fill:"#000000",viewBox:"-2.5 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[$("path",{d:"m 13.656,17.338 c -0.857,0.989 -1.334,2.79 -0.709,3.371 0.6,0.449 2.2,0.391 3.385,-1.23 0.344,-0.487 0.551,-1.093 0.551,-1.747 0,-0.603 -0.175,-1.164 -0.477,-1.637 l 0.007,0.012 c -0.73,-0.555 -1.778,0.164 -2.757,1.243 z m -8.057,0.3 c -0.908,-1.04 -2.088,-1.658 -2.851,-1.2 -0.51,0.382 -0.605,1.685 0.123,2.967 1.078,1.524 2.6,1.679 3.221,1.307 0.659,-0.488 0.3,-2.137 -0.493,-3.075 z m 4.105,3.145 c -1.1,-0.026 -2.8,0.439 -2.776,1.032 -0.018,0.4 1.331,1.572 2.7,1.513 1.326,0.03 2.7,-1.139 2.682,-1.649 -0.018,-0.51 -1.5,-0.927 -2.607,-0.884 z M 9.629,6.839 c -1.275,-0.032 -2.5,0.933 -2.5,1.493 0,0.68 1.008,1.376 2.51,1.394 1.543,0.01 2.518,-0.559 2.532,-1.26 C 12.187,7.672 10.777,6.827 9.653,6.839 Z M 6.558,7.371 C 4.423,7.026 2.645,8.271 2.716,10.563 2.786,11.447 7.346,7.522 6.559,7.386 V 7.371 Z m 9.749,3.251 c 0.071,-2.277 -1.709,-3.521 -3.844,-3.176 -0.787,0.135 3.772,4.061 3.844,3.176 z m 0.364,0.824 c -1.239,-0.329 -0.42,5.049 0.588,4.615 0.551,-0.525 0.894,-1.265 0.894,-2.084 0,-1.077 -0.592,-2.015 -1.468,-2.508 l -0.014,-0.007 v -0.015 z m -14.9,4.675 c 1.007,0.45 1.827,-4.929 0.589,-4.6 -0.891,0.504 -1.483,1.445 -1.483,2.525 0,0.821 0.343,1.563 0.893,2.089 l 10e-4,10e-4 z m 9.415,-5.948 c -0.63,0.49 -1.032,1.249 -1.032,2.101 0,0.624 0.215,1.197 0.575,1.65 l -0.004,-0.005 c 0.492,0.838 1.388,1.392 2.414,1.392 0.467,0 0.908,-0.115 1.295,-0.318 L 14.419,15 c 0.631,-0.49 1.034,-1.248 1.034,-2.101 0,-0.624 -0.215,-1.197 -0.576,-1.65 l 0.004,0.005 c -0.484,-0.835 -1.374,-1.388 -2.393,-1.388 -0.476,0 -0.923,0.121 -1.314,0.333 l 0.015,-0.007 z m -3.1,0.135 C 7.713,10.109 7.27,9.993 6.8,9.993 c -1.02,0 -1.911,0.548 -2.395,1.366 l -0.007,0.013 c -0.357,0.45 -0.572,1.026 -0.572,1.652 0,0.855 0.402,1.616 1.027,2.105 l 0.006,0.004 c 0.376,0.205 0.823,0.325 1.298,0.325 1.019,0 1.909,-0.553 2.386,-1.376 L 8.55,14.069 c 0.352,-0.448 0.564,-1.019 0.564,-1.64 0,-0.853 -0.4,-1.612 -1.024,-2.1 L 8.084,10.325 Z m 4.369,7.162 c -0.077,-1.399 -1.23,-2.504 -2.641,-2.504 -0.049,0 -0.098,0.001 -0.147,0.004 H 9.674 C 9.646,14.969 9.612,14.968 9.579,14.968 c -1.423,0 -2.585,1.119 -2.653,2.526 v 0.006 0.029 c 0.078,1.399 1.232,2.504 2.643,2.504 0.049,0 0.098,-0.001 0.147,-0.004 H 9.709 c 0.035,0.002 0.076,0.003 0.117,0.003 1.413,0 2.566,-1.116 2.625,-2.514 v -0.005 -0.029 l 0.01,-0.015 z M 15.67,2.337 c -1.69,0.771 -3.14,1.756 -4.396,2.945 l 0.007,-0.007 c 0.377,1.5 2.344,1.558 3.063,1.512 C 14.205,6.743 14.093,6.646 14.03,6.521 L 14.029,6.518 C 14.209,6.398 14.85,6.502 15.297,6.263 15.126,6.233 15.045,6.202 14.968,6.063 15.4,5.968 15.781,5.808 16.124,5.591 L 16.109,5.6 C 16.076,5.605 16.039,5.609 16,5.609 c -0.132,0 -0.256,-0.037 -0.361,-0.1 l 0.003,0.002 c 0.419,-0.179 0.779,-0.4 1.103,-0.664 l -0.008,0.006 c -0.2,0 -0.406,0 -0.466,-0.075 0.336,-0.197 0.625,-0.429 0.875,-0.698 l 0.002,-0.002 c -0.272,0.045 -0.39,0.016 -0.454,-0.03 0.295,-0.226 0.544,-0.494 0.742,-0.798 l 0.007,-0.012 c -0.076,0.04 -0.166,0.063 -0.261,0.063 -0.095,0 -0.185,-0.023 -0.264,-0.064 l 0.003,0.002 c 0.091,-0.194 0.47,-0.314 0.69,-0.779 -0.073,0.019 -0.157,0.031 -0.243,0.031 -0.086,0 -0.17,-0.011 -0.25,-0.032 l 0.007,0.002 C 17.218,2.133 17.367,1.848 17.564,1.602 L 17.56,1.607 C 17.465,1.611 17.354,1.613 17.242,1.613 16.961,1.613 16.684,1.6 16.41,1.575 l 0.035,0.003 0.283,-0.285 C 16.604,1.269 16.462,1.255 16.316,1.255 c -0.297,0 -0.58,0.058 -0.839,0.164 l 0.015,-0.005 c -0.149,-0.105 0,-0.255 0.185,-0.4 -0.385,0.05 -0.734,0.138 -1.065,0.262 L 14.645,1.265 C 14.481,1.115 14.745,0.98 14.885,0.829 14.472,0.9 14.104,1.047 13.779,1.256 L 13.791,1.249 C 13.611,1.084 13.776,0.935 13.891,0.8 13.537,0.937 13.234,1.13 12.975,1.37 l 0.002,-0.002 c -0.09,-0.1 -0.209,-0.179 -0.06,-0.449 -0.291,0.162 -0.535,0.373 -0.73,0.624 l -0.004,0.005 c -0.194,-0.134 -0.119,-0.3 -0.119,-0.449 -0.285,0.253 -0.545,0.518 -0.785,0.8 L 11.27,1.91 C 11.209,1.879 11.17,1.76 11.135,1.564 10.356,2.314 9.246,4.187 10.85,4.92 12.21,3.854 13.799,3.001 15.522,2.45 L 15.629,2.42 15.67,2.345 Z m -12.259,0 C 5.242,2.92 6.831,3.778 8.219,4.879 L 8.188,4.855 C 9.788,4.105 8.681,2.232 7.906,1.499 7.865,1.693 7.821,1.828 7.771,1.858 7.522,1.566 7.264,1.301 6.991,1.055 L 6.983,1.048 c 0,0.15 0.077,0.33 -0.117,0.45 C 6.673,1.24 6.432,1.029 6.156,0.874 L 6.145,0.868 C 6.294,1.124 6.17,1.198 6.089,1.317 5.842,1.059 5.542,0.855 5.206,0.723 L 5.189,0.717 c 0.12,0.149 0.3,0.3 0.12,0.465 C 5,0.979 4.636,0.832 4.245,0.765 L 4.228,0.763 c 0.135,0.149 0.4,0.3 0.238,0.45 C 4.165,1.093 3.816,1.002 3.452,0.957 L 3.431,0.955 c 0.181,0.15 0.342,0.289 0.192,0.4 C 3.372,1.245 3.08,1.182 2.774,1.182 2.631,1.182 2.49,1.196 2.355,1.222 L 2.369,1.22 2.653,1.504 C 2.411,1.53 2.13,1.545 1.846,1.545 c -0.11,0 -0.22,-0.002 -0.33,-0.007 l 0.016,10e-4 c 0.199,0.238 0.35,0.525 0.432,0.839 l 0.003,0.015 c -0.045,0.045 -0.27,0.016 -0.483,0 0.225,0.449 0.6,0.57 0.688,0.765 C 2.096,3.199 2.006,3.223 1.911,3.223 1.816,3.223 1.725,3.199 1.647,3.157 L 1.65,3.158 C 1.869,3.465 2.115,3.731 2.391,3.963 L 2.398,3.968 C 2.315,4.007 2.217,4.029 2.115,4.029 2.051,4.029 1.988,4.02 1.929,4.004 l 0.005,0.001 c 0.251,0.269 0.537,0.5 0.851,0.69 l 0.018,0.01 C 2.743,4.775 2.532,4.774 2.324,4.78 2.639,5.04 3,5.263 3.389,5.432 L 3.418,5.443 C 3.316,5.514 3.19,5.556 3.053,5.556 3.018,5.556 2.983,5.553 2.949,5.548 h 0.004 c 0.327,0.21 0.708,0.371 1.116,0.46 L 4.092,6.012 C 4.021,6.13 3.894,6.209 3.748,6.212 4.197,6.466 4.826,6.347 5.006,6.482 4.942,6.61 4.831,6.707 4.696,6.751 L 4.692,6.752 C 5.411,6.797 7.392,6.737 7.764,5.238 6.516,4.061 5.065,3.081 3.472,2.361 L 3.373,2.321 3.413,2.337 Z M 5.145,0.1 C 5.388,0.133 5.608,0.203 5.809,0.305 L 5.797,0.3 C 6.326,0.13 6.447,0.363 6.707,0.459 7.284,0.339 7.459,0.6 7.736,0.878 L 8.058,0.869 C 8.765,1.358 9.283,2.075 9.509,2.913 L 9.515,2.938 C 9.746,2.076 10.264,1.359 10.96,0.881 l 0.012,-0.008 0.321,0.007 c 0.277,-0.28 0.452,-0.539 1.029,-0.418 0.261,-0.1 0.38,-0.33 0.911,-0.166 0.33,-0.1 0.62,-0.375 1.057,-0.045 0.131,-0.076 0.289,-0.121 0.457,-0.121 0.224,0 0.429,0.08 0.589,0.213 L 15.335,0.342 c 0.5,-0.06 0.653,0.061 0.774,0.21 0.108,0 0.809,-0.1 1.132,0.36 0.81,-0.09 1.064,0.464 0.774,0.988 0.114,0.121 0.185,0.284 0.185,0.464 0,0.204 -0.091,0.387 -0.234,0.511 l -0.001,10e-4 c 0.15,0.269 0.062,0.553 -0.27,0.913 0.014,0.055 0.023,0.117 0.023,0.182 0,0.284 -0.159,0.53 -0.393,0.655 l -0.004,0.002 c 0.06,0.51 -0.48,0.81 -0.629,0.914 -0.061,0.3 -0.181,0.584 -0.8,0.734 -0.089,0.449 -0.464,0.523 -0.824,0.614 1.309,0.619 2.199,1.929 2.199,3.446 0,0.1 -0.004,0.2 -0.012,0.298 l 0.001,-0.013 0.181,0.3 c 0.991,0.664 1.634,1.779 1.634,3.045 0,0.953 -0.365,1.821 -0.963,2.472 l 0.002,-0.003 c -0.139,0.635 -0.315,1.186 -0.535,1.713 l 0.024,-0.065 c -0.211,1.48 -1.197,2.687 -2.528,3.209 l -0.027,0.01 c -0.697,0.564 -1.506,1.025 -2.384,1.344 l -0.058,0.019 c -0.745,0.815 -1.809,1.328 -2.993,1.337 H 9.515 C 8.324,23.995 7.253,23.483 6.506,22.67 L 6.503,22.667 C 5.565,22.328 4.755,21.866 4.04,21.289 l 0.016,0.013 C 2.698,20.769 1.71,19.563 1.497,18.105 L 1.494,18.083 C 1.296,17.618 1.118,17.062 0.989,16.488 L 0.976,16.421 C 0.377,15.772 0.01,14.902 0.01,13.946 c 0,-1.265 0.644,-2.38 1.621,-3.036 l 0.013,-0.008 0.172,-0.3 C 1.809,10.517 1.805,10.418 1.805,10.318 1.805,8.801 2.694,7.491 3.981,6.882 L 4.004,6.872 C 3.645,6.782 3.284,6.707 3.181,6.257 2.566,6.107 2.446,5.823 2.381,5.523 2.231,5.418 1.692,5.123 1.752,4.595 1.513,4.465 1.353,4.215 1.353,3.928 1.353,3.861 1.362,3.797 1.378,3.735 L 1.377,3.74 C 1.063,3.394 0.977,3.095 1.107,2.825 0.963,2.702 0.873,2.52 0.873,2.317 0.873,2.136 0.945,1.971 1.062,1.851 0.777,1.326 1.032,0.757 1.841,0.851 2.158,0.386 2.864,0.492 2.967,0.492 3.088,0.342 3.252,0.207 3.746,0.267 3.908,0.134 4.117,0.053 4.345,0.053 4.51,0.053 4.665,0.095 4.8,0.169 L 4.795,0.167 C 4.903,0.07 5.044,0.008 5.2,0.001 h 10e-4 z"})],-1)),t.$props.text&&t.$props.text.length>0?(q(),J("div",BC,Ee(t.$props.text),1)):we("",!0)],4)}const jC=xe($C,[["render",qC],["__scopeId","data-v-5243a882"]]),HC=Ne({components:{IconRaspberry:jC,IconSchedule:bm,IconLightSwitch:Im},setup(){return{}}}),zC={class:"home"};function WC(t,e,n,r,s,i){const o=_e("icon-raspberry"),l=_e("router-link"),c=_e("icon-light-switch"),u=_e("icon-schedule");return q(),J("div",zC,[pe(l,{to:"/boards",class:"tile boards"},{default:Mn(()=>[$("span",null,[pe(o,{text:"Boards",strokeColor:"deeppink",fontSize:"22px"})])]),_:1}),pe(l,{to:"/relays",class:"tile relays"},{default:Mn(()=>[$("span",null,[pe(c,{text:"Relays",fontSize:"22px"})])]),_:1}),we("",!0),pe(l,{to:"/schedules",class:"tile schedules"},{default:Mn(()=>[$("span",null,[pe(u,{strokeColor:"orange",text:"Schedules",fontSize:"22px"})])]),_:1}),we("",!0)])}const W_=xe(HC,[["render",WC],["__scopeId","data-v-37ea29cb"]]),GC=Ne({props:{options:{type:Array,required:!0},placeholder:{type:String,default:"Select an option"},modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:e}){const n=re(!1),r=re(t.modelValue);function s(){n.value=!n.value}function i(o){r.value=o.value,e("update:modelValue",o.value),n.value=!1}return{isOpen:n,selectedOption:r,toggleDropdown:s,selectOption:i}}}),KC={class:"custom-dropdown"},QC={key:0,class:"dropdown-list"},JC=["onClick"];function YC(t,e,n,r,s,i){return q(),J("div",KC,[$("div",{class:"dropdown-selected",onClick:e[0]||(e[0]=(...o)=>t.toggleDropdown&&t.toggleDropdown(...o))},[Wt(Ee(t.selectedOption||t.placeholder)+" ",1),$("span",{class:it(["arrow",{open:t.isOpen}])},"▼",2)]),t.isOpen?(q(),J("div",QC,[(q(!0),J(Ye,null,vn(t.options,o=>(q(),J("div",{key:o.value,class:it(["dropdown-item",{selected:o.value===t.selectedOption}]),onClick:l=>t.selectOption(o)},Ee(o.label),11,JC))),128))])):we("",!0)])}const G_=xe(GC,[["render",YC],["__scopeId","data-v-20c408dc"]]),Jf=[{value:"Raspberry Pi Model B+ V1.2",numGpioPins:27},{value:"Raspberry Pi 2 Model B V1.1",numGpioPins:27},{value:"Raspberry Pi 3 Model B",numGpioPins:27},{value:"Raspberry Pi 4 Model B",numGpioPins:27},{value:"Raspberry Pi Zero",numGpioPins:27},{value:"Raspberry Pi Zero W",numGpioPins:27},{value:"Raspberry Pi 400",numGpioPins:27}],XC=Ne({components:{ButtonDefault:Wn},emits:["boardAdded","cancel"],props:{boardId:{type:String,default:null}},setup(t,{emit:e}){const n=so(),r=re(""),s=re(null),i=re(null);Bi(()=>{t.boardId&&(i.value=n.boards.find(m=>m.id===t.boardId)),i.value?(r.value=i.value.name,s.value=Jf.find(m=>m.value===i.value.model)):l()});const o=$e(()=>t.boardId&&i.value.name===r.value.trim()&&i.value.model===s.value.value?!1:!!(r.value&&r.value.length>1&&s.value));function l(){r.value="",s.value=null}function c(m){return m&&s.value&&m.value===s.value.value}function u(m){m&&(s.value=m)}async function d(){if(o.value)try{const m=s.value.value,_=s.value.numGpioPins;i.value?await n.updateBoard(i.value.id,r.value):await n.addBoardWithPins(r.value,m,_),l(),e("boardAdded")}catch{console.error("Failed to add the board. Please try again.")}}function p(){l(),e("cancel")}return{name:r,selectedModel:s,canSave:o,raspberryPiModels:Jf,isChecked:c,selectModel:u,onAdd:d,onCancel:p}}}),ZC={class:"popup-add-board"},eP={class:"popup"},tP={key:0},nP={key:1,class:"options"},rP=["onClick"],sP={class:"buttons"};function iP(t,e,n,r,s,i){const o=_e("button-default");return q(),J("div",ZC,[$("div",eP,[$("h3",null,Ee(t.$props.boardId?"Edit Board":"Add New Board"),1),e[1]||(e[1]=$("label",{for:"name"},"Name:",-1)),ws($("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.name=l),type:"text",placeholder:"Enter board name"},null,512),[[Is,t.name]]),t.$props.boardId?we("",!0):(q(),J("label",tP,"Model:")),t.$props.boardId?we("",!0):(q(),J("div",nP,[(q(!0),J(Ye,null,vn(t.raspberryPiModels,l=>(q(),J("div",{class:"option",key:l.value},[$("div",{class:it(["option-text",{"is-checked":t.isChecked(l)}]),onClick:c=>t.selectModel(l)},Ee(l.value),11,rP)]))),128))])),$("div",sP,[pe(o,{class:it({"can-save":t.canSave}),text:"Save",onClick:t.onAdd},null,8,["class","onClick"]),pe(o,{text:"Cancel",onClick:t.onCancel},null,8,["onClick"])])])])}const K_=xe(XC,[["render",iP],["__scopeId","data-v-8c361eb0"]]),oP=Ne({components:{PopupAddBoard:K_,ButtonDefault:Wn,Spinner:Da,Dropdown:G_},setup(){const t=Ms(),e=qs(),n=so(),r=re(!1);Rr(()=>{n.loadBoards(),n.clearSelectedBoard()});function s(i){n.selectedBoard=i,e.setNavigateBackPage("boards"),t.push({name:"board"})}return{requestAddNewBoard:r,boardStore:n,requestBoard:s}}}),aP={class:"boards"},lP={key:1},cP=["onClick"];function uP(t,e,n,r,s,i){const o=_e("spinner"),l=_e("button-default"),c=_e("popup-add-board");return q(),J("div",aP,[t.boardStore.loadingBoards?(q(),He(o,{key:0,spinnerSize:"20px",withText:!0})):(q(),J("div",lP,[(q(!0),J(Ye,null,vn(t.boardStore.boards,u=>(q(),J("div",{class:"board-name-wrapper",key:u.id,onClick:d=>t.requestBoard(u)},Ee(u.name),9,cP))),128)),pe(l,{text:"Add new board",onClick:e[0]||(e[0]=u=>t.requestAddNewBoard=!0)})])),t.requestAddNewBoard?(q(),He(c,{key:2,onBoardAdded:e[1]||(e[1]=u=>t.requestAddNewBoard=!1),onCancel:e[2]||(e[2]=u=>t.requestAddNewBoard=!1)})):we("",!0)])}const Q_=xe(oP,[["render",uP],["__scopeId","data-v-6664e91c"]]),hP=Ne({components:{ButtonDefault:Wn},props:{relayName:{type:String,required:!0},pinNumber:{type:Number,required:!0},initialMode:{type:String,required:!0},initialRelayId:{type:String,default:null}},emits:["save","cancel"],setup(t,{emit:e}){const n=Pr(),r=re(t.initialMode),s=re(t.initialRelayId),i=re([]);Rr(()=>{i.value=l()});const o=$e(()=>t.initialMode!==r.value||t.initialRelayId!==s.value);function l(){const _=n.relays.filter(({boardId:A})=>!A).map(({id:A,name:P})=>({value:A,label:P})).sort((A,P)=>A.value.localeCompare(P.value)),S={value:null,label:"None"};if(s.value!==null){const A=n.relays.find(P=>P.id===s.value);if(A)return[{value:A.id,label:A.name},S,..._]}return[S,..._]}function c(){r.value="input"}function u(){r.value="output"}function d(_){s.value=_}function p(){o.value&&e("save",r.value,s.value)}function m(){e("cancel")}return{mode:r,changed:o,relayId:s,availableRelays:i,setInput:c,setOutput:u,setRelay:d,onSave:p,onCancel:m}}}),dP={class:"popup-select-relay"},fP={class:"popup"},pP={class:"options"},mP={class:"option"},gP={class:"option"},_P={class:"options"},yP=["onClick"],vP={class:"buttons"};function EP(t,e,n,r,s,i){const o=_e("button-default");return q(),J("div",dP,[$("div",fP,[$("h3",null,Ee(t.$props.relayName),1),$("h3",null,"Pin "+Ee(t.$props.pinNumber),1),e[2]||(e[2]=$("label",{for:"name"},"Mode:",-1)),$("div",pP,[$("div",mP,[$("div",{class:it(["option-text",{"is-checked":t.mode==="input"}]),onClick:e[0]||(e[0]=(...l)=>t.setInput&&t.setInput(...l))}," IN ",2)]),$("div",gP,[$("div",{class:it(["option-text",{"is-checked":t.mode==="output"}]),onClick:e[1]||(e[1]=(...l)=>t.setOutput&&t.setOutput(...l))}," OUT ",2)])]),e[3]||(e[3]=$("label",{for:"name"},"Relay:",-1)),$("div",_P,[(q(!0),J(Ye,null,vn(t.availableRelays,l=>(q(),J("div",{class:"option",key:l.value},[$("div",{class:it(["option-text",{"is-checked":t.relayId===l.value}]),onClick:c=>t.setRelay(l.value)},Ee(l.label),11,yP)]))),128))]),$("div",vP,[pe(o,{class:it({"can-save":t.changed}),text:"Save",onClick:t.onSave},null,8,["class","onClick"]),pe(o,{text:"Cancel",onClick:t.onCancel},null,8,["onClick"])])])])}const wP=xe(hP,[["render",EP],["__scopeId","data-v-c64dfe6d"]]),TP=Ne({components:{ButtonDefault:Wn},props:{text:{type:String,required:!0}},emits:["yes","no"],setup(t,{emit:e}){function n(){e("yes")}function r(){e("no")}return{onYes:n,onNo:r}}}),IP={class:"popup-yes-no"},bP={class:"popup"},AP={for:"name"},RP={class:"buttons"};function SP(t,e,n,r,s,i){const o=_e("button-default");return q(),J("div",IP,[$("div",bP,[$("label",AP,Ee(t.$props.text),1),$("div",RP,[pe(o,{text:"Yes",onClick:t.onYes},null,8,["onClick"]),pe(o,{text:"No",onClick:t.onNo},null,8,["onClick"])])])])}const J_=xe(TP,[["render",SP],["__scopeId","data-v-8208713d"]]),CP=Ne({components:{ButtonDefault:Wn},props:{text:{type:String,required:!0}},emits:["ok"],setup(t,{emit:e}){function n(){e("ok")}return{onOk:n}}}),PP={class:"popup-info"},kP={class:"popup"},DP={for:"name"},NP={class:"buttons"};function OP(t,e,n,r,s,i){const o=_e("button-default");return q(),J("div",PP,[$("div",kP,[$("label",DP,Ee(t.$props.text),1),$("div",NP,[pe(o,{text:"Ok",onClick:t.onOk},null,8,["onClick"])])])])}const VP=xe(CP,[["render",OP],["__scopeId","data-v-30b38fb2"]]),MP=Ne({components:{PopupInfo:VP,PopupAddBoard:K_,PopupYesNo:J_,PopupSelectRelay:wP,DropDown:G_},props:{},emits:[],setup(t,e){const n=Ms(),r=so(),s=Pr(),i=re(null),o=re(!1),l=re(!1),c=re(null);Rr(async()=>{i.value=null,await r.loadBoardDetails()});const u=$e(()=>{var N;return p((N=r.selectedBoard)==null?void 0:N.createdAt)}),d=$e(()=>{var N;return p((N=r.selectedBoard)==null?void 0:N.updatedAt)});function p(N){return N?N.toLocaleString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(","," -").replace(/\//g,"."):""}function m(){r.deleteBoard(r.selectedBoard.id),n.push({name:"boards"}),o.value=!1}function _(N){i.value&&(i.value=null),i.value=N}async function S(N,V){if(!i.value)return;if(!N){A();return}const L=i.value,z=[];if(L.mode=N,!L.relayId&&V){const Z=s.relays.find(ce=>ce.id===V);Z&&(L.relayId=Z.id,L.relayName=Z.name,Z.boardId=L.boardId,z.push(Z))}else if(L.relayId&&V&&L.relayId!==V){const Z=s.relays.find(b=>b.id===L.relayId),ce=s.relays.find(b=>b.id===V);Z&&(Z.boardId=null,z.push(Z)),ce&&(L.relayId=ce.id,L.relayName=ce.name,ce.boardId=L.boardId,z.push(ce))}else if(L.relayId&&!V){const Z=s.relays.find(ce=>ce.id===L.relayId);Z&&(Z.boardId=null,z.push(Z)),L.relayId=null,L.relayName=null}await r.updatePinConfigAndRelays(L,z),i.value=null}function A(){i.value=null}function P(N){navigator.clipboard.writeText(N),c.value="Copied to clipboard!"}return{boardStore:r,createdAt:u,modifiedAt:d,selectedPinConfig:i,requestDeleteBoard:o,requestEditBoard:l,clipboardText:c,requestEditPinConfig:_,deleteBoard:m,onSaveSelectRelay:S,onCancelSelectRelay:A,copyToClipboard:P}}}),xP={class:"board"},LP={class:"board-header"},FP={class:"table-body"},UP={class:"table-cell"},$P={class:"table-cell"},BP=["onClick"],qP={class:"table-row"};function jP(t,e,n,r,s,i){var d,p,m;const o=_e("popup-select-relay"),l=_e("popup-yes-no"),c=_e("popup-info"),u=_e("popup-add-board");return q(),J("div",xP,[$("div",LP,[$("h3",{onClick:e[0]||(e[0]=_=>t.requestEditBoard=!0)},Ee((d=t.boardStore.selectedBoard)==null?void 0:d.name),1),$("p",{onClick:e[1]||(e[1]=_=>{var S;return t.copyToClipboard((S=t.boardStore.selectedBoard)==null?void 0:S.id)})},[e[8]||(e[8]=$("strong",null,"Board Id:",-1)),Wt(" "+Ee((p=t.boardStore.selectedBoard)==null?void 0:p.id),1)]),$("p",{onClick:e[2]||(e[2]=_=>{var S;return t.copyToClipboard((S=t.boardStore.selectedBoard)==null?void 0:S.model)})},[e[9]||(e[9]=$("strong",null,"Model:",-1)),Wt(" "+Ee((m=t.boardStore.selectedBoard)==null?void 0:m.model),1)]),$("p",null,[e[10]||(e[10]=$("strong",null,"Created:",-1)),Wt(" "+Ee(t.createdAt),1)]),$("p",null,[e[11]||(e[11]=$("strong",null,"Modified:",-1)),Wt(" "+Ee(t.modifiedAt),1)])]),e[12]||(e[12]=$("div",{class:"table-header"},[$("div",{class:"table-cell"},"Pin"),$("div",{class:"table-cell"},"Mode"),$("div",{class:"table-cell"},"Relay Name")],-1)),$("div",FP,[(q(!0),J(Ye,null,vn(t.boardStore.pinConfigs,_=>(q(),J("div",{class:"table-row",key:_.pinNumber},[$("div",UP,Ee(_.pinNumber),1),$("div",$P,Ee(_.mode==="output"?"OUT":"IN"),1),$("div",{class:"table-cell relay-name",onClick:S=>t.requestEditPinConfig(_)},Ee(_.relayName?_.relayName:"None"),9,BP)]))),128)),$("div",qP,[$("div",{class:"delete-button",onClick:e[3]||(e[3]=_=>t.requestDeleteBoard=!0)}," Delete ")])]),t.selectedPinConfig?(q(),He(o,{key:0,relayName:t.boardStore.selectedBoard.name,pinNumber:t.selectedPinConfig.pinNumber,initialMode:t.selectedPinConfig.mode,initialRelayId:t.selectedPinConfig.relayId,onCancel:t.onCancelSelectRelay,onSave:t.onSaveSelectRelay},null,8,["relayName","pinNumber","initialMode","initialRelayId","onCancel","onSave"])):we("",!0),t.requestDeleteBoard?(q(),He(l,{key:1,text:`Are you sure you want to delete '${t.boardStore.selectedBoard.name}'?`,onYes:t.deleteBoard,onNo:e[4]||(e[4]=_=>t.requestDeleteBoard=!1)},null,8,["text","onYes"])):we("",!0),t.clipboardText?(q(),He(c,{key:2,text:t.clipboardText,onOk:e[5]||(e[5]=_=>t.clipboardText=null)},null,8,["text"])):we("",!0),t.requestEditBoard?(q(),He(u,{key:3,boardId:t.boardStore.selectedBoard.id,onBoardAdded:e[6]||(e[6]=_=>t.requestEditBoard=!1),onCancel:e[7]||(e[7]=_=>t.requestEditBoard=!1)},null,8,["boardId"])):we("",!0)])}const Y_=xe(MP,[["render",jP]]),HP=Ne({components:{PopupAddRelay:q_,PopupYesNo:J_},computed:{relay(){return B_}},props:{},emits:[],setup(){const t=Ms(),e=qs(),n=Pr(),r=so(),s=re(),i=re(),o=re(),l=re(),c=re();Rr(async()=>{var m;if(!n.selectedRelay){await t.push({name:e.navigateBackPage});return}e.setNavigateBackPage("relays"),i.value=n.getMaxOnTime(n.selectedRelay),await r.loadBoards(),r.selectedBoard=r.boards.find(_=>_.id===n.selectedRelay.boardId),o.value=(m=r.selectedBoard)==null?void 0:m.name,await r.loadBoardDetails(),s.value=r.pinConfigs.find(_=>_.relayId===n.selectedRelay.id)});async function u(){await n.deleteRelay(n.selectedRelay.id),await t.push({name:e.navigateBackPage})}function d(){r.selectedBoard?(e.setNavigateBackPage("relay"),t.push({name:"board"})):t.push({name:"boards"})}function p(){l.value=!1,i.value=n.getMaxOnTime(n.selectedRelay)}return{maxOnTime:i,boardName:o,pinConfig:s,relayStore:n,requestDeleteRelay:c,requestEditRelay:l,deleteRelay:u,onRelayUpdated:p,goToBoard:d}}}),zP={key:0,class:"relay"},WP={class:"relay-header"};function GP(t,e,n,r,s,i){var c;const o=_e("popup-yes-no"),l=_e("popup-add-relay");return t.relayStore.selectedRelay?(q(),J("div",zP,[$("div",WP,[$("h3",{onClick:e[0]||(e[0]=u=>t.requestEditRelay=!0)},Ee(t.relayStore.selectedRelay.name),1),$("p",{onClick:e[1]||(e[1]=u=>t.requestEditRelay=!0)},[e[8]||(e[8]=$("strong",null,"Max on time:",-1)),Wt(" "+Ee(t.maxOnTime),1)]),$("p",{onClick:e[2]||(e[2]=(...u)=>t.goToBoard&&t.goToBoard(...u))},[e[9]||(e[9]=$("strong",null,"Board:",-1)),Wt(" "+Ee(t.boardName),1)]),$("p",{onClick:e[3]||(e[3]=(...u)=>t.goToBoard&&t.goToBoard(...u))},[e[10]||(e[10]=$("strong",null,"Pin:",-1)),Wt(" "+Ee((c=t.pinConfig)==null?void 0:c.pinNumber),1)]),$("p",{onClick:e[4]||(e[4]=(...u)=>t.goToBoard&&t.goToBoard(...u))},[e[11]||(e[11]=$("strong",null,"Pin mode:",-1)),Wt(" "+Ee(t.pinConfig?t.pinConfig.mode==="input"?"Input":"Output":""),1)]),$("p",null,[e[12]||(e[12]=$("strong",null,"Status:",-1)),Wt(" "+Ee(t.relayStore.selectedRelay.state?"On":"Off"),1)])]),$("div",{class:"delete-button",onClick:e[5]||(e[5]=u=>t.requestDeleteRelay=!0)}," Delete "),t.requestDeleteRelay?(q(),He(o,{key:0,text:`Are you sure you want to delete '${t.relayStore.selectedRelay.name}'?`,onYes:t.deleteRelay,onNo:e[6]||(e[6]=u=>t.requestDeleteRelay=!1)},null,8,["text","onYes"])):we("",!0),t.requestEditRelay?(q(),He(l,{key:1,relay:t.relayStore.selectedRelay,onRelayAdded:t.onRelayUpdated,onCancel:e[7]||(e[7]=u=>t.requestEditRelay=!1)},null,8,["relay","onRelayAdded"])):we("",!0)])):we("",!0)}const X_=xe(HP,[["render",GP],["__scopeId","data-v-07b7c18a"]]),KP=Ne({name:"App",components:{Board:Y_,Boards:Q_,Home:W_,TopBar:UC,Schedules:z_,Relays:j_,Relay:X_,TaskBar:pw,SignIn:ub},setup(){const t=Am(),e=qs(),n=re(null),r=$e(()=>!!t.user);function s(i){n.value&&(i instanceof HTMLElement?i.scrollIntoView({behavior:"smooth",block:"end"}):n.value.scroll({top:n.value.scrollHeight,behavior:"smooth"}))}return{signedIn:r,pageStore:e,ref_body:n,scrollToBottom:s}}}),QP={class:"app"},JP={key:0,class:"signed-in"},YP={class:"body",ref:"ref_body"};function XP(t,e,n,r,s,i){const o=_e("top-bar"),l=_e("home"),c=_e("boards"),u=_e("board"),d=_e("relays"),p=_e("relay"),m=_e("schedules"),_=_e("task-bar"),S=_e("sign-in");return q(),J("div",QP,[t.signedIn?(q(),J("div",JP,[pe(o),$("div",YP,[t.pageStore.currentPage==="home"?(q(),He(l,{key:0})):we("",!0),t.pageStore.currentPage==="boards"?(q(),He(c,{key:1})):we("",!0),t.pageStore.currentPage==="board"?(q(),He(u,{key:2})):we("",!0),t.pageStore.currentPage==="relays"?(q(),He(d,{key:3,onRequestScrollToBottom:t.scrollToBottom},null,8,["onRequestScrollToBottom"])):we("",!0),t.pageStore.currentPage==="relay"?(q(),He(p,{key:4})):t.pageStore.currentPage==="schedules"?(q(),He(m,{key:5,onRequestScrollToBottom:t.scrollToBottom},null,8,["onRequestScrollToBottom"])):we("",!0)],512),pe(_)])):(q(),He(S,{key:1}))])}const ZP=xe(KP,[["render",XP],["__scopeId","data-v-6428b056"]]),e2=[{path:"/home",name:"home",component:W_},{path:"/boards",name:"boards",component:Q_},{path:"/board/",name:"board",component:Y_},{path:"/relays",name:"relays",component:j_},{path:"/relay",name:"relay",component:X_},{path:"/schedules",name:"schedules",component:z_},{path:"/:catchAll(.*)",redirect:"/relays"}],Z_=XE({history:SE("/RelayHub"),routes:e2});Z_.beforeEach((t,e,n)=>{const r=qs();e.name!==r.navigateBackPage&&(r.navigateBackPage=null),r.setPage(t.name),n()});const Wu=Bv(ZP),t2=zv();Wu.use(Z_);Wu.use(t2);Wu.mount("#app");
