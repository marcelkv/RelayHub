(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function al(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},ts=[],an=()=>{},sy=()=>!1,Jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),cl=t=>t.startsWith("onUpdate:"),it=Object.assign,ll=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iy=Object.prototype.hasOwnProperty,Pe=(t,e)=>iy.call(t,e),ue=Array.isArray,ns=t=>Zo(t)==="[object Map]",Uf=t=>Zo(t)==="[object Set]",fe=t=>typeof t=="function",Ze=t=>typeof t=="string",Vn=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",$f=t=>($e(t)||fe(t))&&fe(t.then)&&fe(t.catch),Bf=Object.prototype.toString,Zo=t=>Bf.call(t),oy=t=>Zo(t).slice(8,-1),jf=t=>Zo(t)==="[object Object]",ul=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qs=al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ay=/-(\w)/g,Wt=ea(t=>t.replace(ay,(e,n)=>n?n.toUpperCase():"")),cy=/\B([A-Z])/g,ur=ea(t=>t.replace(cy,"-$1").toLowerCase()),ta=ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ga=ea(t=>t?`on${ta(t)}`:""),Yn=(t,e)=>!Object.is(t,e),co=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},qf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ec=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bh;const na=()=>bh||(bh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function On(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?dy(r):On(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ze(t)||$e(t))return t}const ly=/;(?![^(]*\))/g,uy=/:([^]+)/,hy=/\/\*[^]*?\*\//g;function dy(t){const e={};return t.replace(hy,"").split(ly).forEach(n=>{if(n){const r=n.split(uy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xr(t){let e="";if(Ze(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=xr(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",py=al(fy);function Hf(t){return!!t||t===""}const zf=t=>!!(t&&t.__v_isRef===!0),Nt=t=>Ze(t)?t:t==null?"":ue(t)||$e(t)&&(t.toString===Bf||!fe(t.toString))?zf(t)?Nt(t.value):JSON.stringify(t,Wf,2):String(t),Wf=(t,e)=>zf(e)?Wf(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Qa(r,i)+" =>"]=s,n),{})}:Uf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Qa(n))}:Vn(e)?Qa(e):$e(e)&&!ue(e)&&!jf(e)?String(e):e,Qa=(t,e="")=>{var n;return Vn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class Kf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Gf(t){return new Kf(t)}function Qf(){return Ct}function my(t,e=!1){Ct&&Ct.cleanups.push(t)}let Le;const Xa=new WeakSet;class Xf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xa.has(this)&&(Xa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rh(this),Zf(this);const e=Le,n=Xt;Le=this,Xt=!0;try{return this.fn()}finally{ep(this),Le=e,Xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fl(e);this.deps=this.depsTail=void 0,Rh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tc(this)&&this.run()}get dirty(){return Tc(this)}}let Yf=0,Xs,Ys;function Jf(t,e=!1){if(t.flags|=8,e){t.next=Ys,Ys=t;return}t.next=Xs,Xs=t}function hl(){Yf++}function dl(){if(--Yf>0)return;if(Ys){let e=Ys;for(Ys=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Zf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ep(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),fl(r),gy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Tc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(tp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function tp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ci))return;t.globalVersion=ci;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Tc(t)){t.flags&=-3;return}const n=Le,r=Xt;Le=t,Xt=!0;try{Zf(t);const s=t.fn(t._value);(e.version===0||Yn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,Xt=r,ep(t),t.flags&=-3}}function fl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)fl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function gy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xt=!0;const np=[];function hr(){np.push(Xt),Xt=!1}function dr(){const t=np.pop();Xt=t===void 0?!0:t}function Rh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let ci=0;class _y{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Le||!Xt||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new _y(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,rp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,ci++,this.notify(e)}notify(e){hl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{dl()}}}function rp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)rp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const bo=new WeakMap,br=Symbol(""),wc=Symbol(""),li=Symbol("");function Et(t,e,n){if(Xt&&Le){let r=bo.get(t);r||bo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new pl),s.map=r,s.key=n),s.track()}}function En(t,e,n,r,s,i){const o=bo.get(t);if(!o){ci++;return}const c=l=>{l&&l.trigger()};if(hl(),e==="clear")o.forEach(c);else{const l=ue(t),h=l&&ul(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===li||!Vn(m)&&m>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(li)),e){case"add":l?h&&c(o.get("length")):(c(o.get(br)),ns(t)&&c(o.get(wc)));break;case"delete":l||(c(o.get(br)),ns(t)&&c(o.get(wc)));break;case"set":ns(t)&&c(o.get(br));break}}dl()}function yy(t,e){const n=bo.get(t);return n&&n.get(e)}function Wr(t){const e=Re(t);return e===t?e:(Et(e,"iterate",li),zt(t)?e:e.map(Tt))}function ra(t){return Et(t=Re(t),"iterate",li),t}const vy={__proto__:null,[Symbol.iterator](){return Ya(this,Symbol.iterator,Tt)},concat(...t){return Wr(this).concat(...t.map(e=>ue(e)?Wr(e):e))},entries(){return Ya(this,"entries",t=>(t[1]=Tt(t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(Tt),arguments)},find(t,e){return _n(this,"find",t,e,Tt,arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,Tt,arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ja(this,"includes",t)},indexOf(...t){return Ja(this,"indexOf",t)},join(t){return Wr(this).join(t)},lastIndexOf(...t){return Ja(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return Bs(this,"pop")},push(...t){return Bs(this,"push",t)},reduce(t,...e){return Sh(this,"reduce",t,e)},reduceRight(t,...e){return Sh(this,"reduceRight",t,e)},shift(){return Bs(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return Bs(this,"splice",t)},toReversed(){return Wr(this).toReversed()},toSorted(t){return Wr(this).toSorted(t)},toSpliced(...t){return Wr(this).toSpliced(...t)},unshift(...t){return Bs(this,"unshift",t)},values(){return Ya(this,"values",Tt)}};function Ya(t,e,n){const r=ra(t),s=r[e]();return r!==t&&!zt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ey=Array.prototype;function _n(t,e,n,r,s,i){const o=ra(t),c=o!==t&&!zt(t),l=o[e];if(l!==Ey[e]){const p=l.apply(t,i);return c?Tt(p):p}let h=n;o!==t&&(c?h=function(p,m){return n.call(this,Tt(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=l.call(o,h,r);return c&&s?s(d):d}function Sh(t,e,n,r){const s=ra(t);let i=n;return s!==t&&(zt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,Tt(c),l,t)}),s[e](i,...r)}function Ja(t,e,n){const r=Re(t);Et(r,"iterate",li);const s=r[e](...n);return(s===-1||s===!1)&&_l(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function Bs(t,e,n=[]){hr(),hl();const r=Re(t)[e].apply(t,n);return dl(),dr(),r}const Ty=al("__proto__,__v_isRef,__isVue"),sp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vn));function wy(t){Vn(t)||(t=String(t));const e=Re(this);return Et(e,"has",t),e.hasOwnProperty(t)}class ip{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Vy:lp:i?cp:ap).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=vy[n]))return l;if(n==="hasOwnProperty")return wy}const c=Reflect.get(e,n,Ge(e)?e:r);return(Vn(n)?sp.has(n):Ty(n))||(s||Et(e,"get",n),i)?c:Ge(c)?o&&ul(n)?c:c.value:$e(c)?s?hp(c):Ai(c):c}}class op extends ip{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=kr(i);if(!zt(r)&&!kr(r)&&(i=Re(i),r=Re(r)),!ue(e)&&Ge(i)&&!Ge(r))return l?!1:(i.value=r,!0)}const o=ue(e)&&ul(n)?Number(n)<e.length:Pe(e,n),c=Reflect.set(e,n,r,Ge(e)?e:s);return e===Re(s)&&(o?Yn(r,i)&&En(e,"set",n,r):En(e,"add",n,r)),c}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&En(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Vn(n)||!sp.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ue(e)?"length":br),Reflect.ownKeys(e)}}class Iy extends ip{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ay=new op,by=new Iy,Ry=new op(!0);const Ic=t=>t,Zi=t=>Reflect.getPrototypeOf(t);function Sy(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=ns(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?Ic:e?Ac:Tt;return!e&&Et(i,"iterate",l?wc:br),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cy(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),c=Re(s);t||(Yn(s,c)&&Et(o,"get",s),Et(o,"get",c));const{has:l}=Zi(o),h=e?Ic:t?Ac:Tt;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Re(s),"iterate",br),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),c=Re(s);return t||(Yn(s,c)&&Et(o,"has",s),Et(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Re(c),h=e?Ic:t?Ac:Tt;return!t&&Et(l,"iterate",br),c.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return it(n,t?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(s){!e&&!zt(s)&&!kr(s)&&(s=Re(s));const i=Re(this);return Zi(i).has.call(i,s)||(i.add(s),En(i,"add",s,s)),this},set(s,i){!e&&!zt(i)&&!kr(i)&&(i=Re(i));const o=Re(this),{has:c,get:l}=Zi(o);let h=c.call(o,s);h||(s=Re(s),h=c.call(o,s));const d=l.call(o,s);return o.set(s,i),h?Yn(i,d)&&En(o,"set",s,i):En(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:c}=Zi(i);let l=o.call(i,s);l||(s=Re(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&En(i,"delete",s,void 0),h},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&En(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Sy(s,t,e)}),n}function ml(t,e){const n=Cy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const Py={get:ml(!1,!1)},ky={get:ml(!1,!0)},Dy={get:ml(!0,!1)};const ap=new WeakMap,cp=new WeakMap,lp=new WeakMap,Vy=new WeakMap;function Oy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ny(t){return t.__v_skip||!Object.isExtensible(t)?0:Oy(oy(t))}function Ai(t){return kr(t)?t:gl(t,!1,Ay,Py,ap)}function up(t){return gl(t,!1,Ry,ky,cp)}function hp(t){return gl(t,!0,by,Dy,lp)}function gl(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ny(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Jn(t){return kr(t)?Jn(t.__v_raw):!!(t&&t.__v_isReactive)}function kr(t){return!!(t&&t.__v_isReadonly)}function zt(t){return!!(t&&t.__v_isShallow)}function _l(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function yl(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&qf(t,"__v_skip",!0),t}const Tt=t=>$e(t)?Ai(t):t,Ac=t=>$e(t)?hp(t):t;function Ge(t){return t?t.__v_isRef===!0:!1}function Ie(t){return dp(t,!1)}function xy(t){return dp(t,!0)}function dp(t,e){return Ge(t)?t:new My(t,e)}class My{constructor(e,n){this.dep=new pl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:Tt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||zt(e)||kr(e);e=r?e:Re(e),Yn(e,n)&&(this._rawValue=e,this._value=r?e:Tt(e),this.dep.trigger())}}function rs(t){return Ge(t)?t.value:t}const Ly={get:(t,e,n)=>e==="__v_raw"?t:rs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ge(s)&&!Ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function fp(t){return Jn(t)?t:new Proxy(t,Ly)}function Fy(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=$y(t,n);return e}class Uy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return yy(Re(this._object),this._key)}}function $y(t,e,n){const r=t[e];return Ge(r)?r:new Uy(t,e,n)}class By{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ci-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return Jf(this,!0),!0}get value(){const e=this.dep.track();return tp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function jy(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new By(r,s,n)}const to={},Ro=new WeakMap;let Tr;function qy(t,e=!1,n=Tr){if(n){let r=Ro.get(n);r||Ro.set(n,r=[]),r.push(t)}}function Hy(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=q=>s?q:zt(q)||s===!1||s===0?Tn(q,1):Tn(q);let d,p,m,y,b=!1,P=!1;if(Ge(t)?(p=()=>t.value,b=zt(t)):Jn(t)?(p=()=>h(t),b=!0):ue(t)?(P=!0,b=t.some(q=>Jn(q)||zt(q)),p=()=>t.map(q=>{if(Ge(q))return q.value;if(Jn(q))return h(q);if(fe(q))return l?l(q,2):q()})):fe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){hr();try{m()}finally{dr()}}const q=Tr;Tr=d;try{return l?l(t,3,[y]):t(y)}finally{Tr=q}}:p=an,e&&s){const q=p,se=s===!0?1/0:s;p=()=>Tn(q(),se)}const D=Qf(),O=()=>{d.stop(),D&&D.active&&ll(D.effects,d)};if(i&&e){const q=e;e=(...se)=>{q(...se),O()}}let F=P?new Array(t.length).fill(to):to;const j=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const se=d.run();if(s||b||(P?se.some((pe,A)=>Yn(pe,F[A])):Yn(se,F))){m&&m();const pe=Tr;Tr=d;try{const A=[se,F===to?void 0:P&&F[0]===to?[]:F,y];l?l(e,3,A):e(...A),F=se}finally{Tr=pe}}}else d.run()};return c&&c(j),d=new Xf(p),d.scheduler=o?()=>o(j,!1):j,y=q=>qy(q,!1,d),m=d.onStop=()=>{const q=Ro.get(d);if(q){if(l)l(q,4);else for(const se of q)se();Ro.delete(d)}},e?r?j(!0):F=d.run():o?o(j.bind(null,!0),!0):d.run(),O.pause=d.pause.bind(d),O.resume=d.resume.bind(d),O.stop=O,O}function Tn(t,e=1/0,n){if(e<=0||!$e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ge(t))Tn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Tn(t[r],e,n);else if(Uf(t)||ns(t))t.forEach(r=>{Tn(r,e,n)});else if(jf(t)){for(const r in t)Tn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bi(t,e,n,r){try{return r?t(...r):t()}catch(s){sa(s,e,n)}}function dn(t,e,n,r){if(fe(t)){const s=bi(t,e,n,r);return s&&$f(s)&&s.catch(i=>{sa(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(dn(t[i],e,n,r));return s}}function sa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(i){hr(),bi(i,null,10,[t,l,h]),dr();return}}zy(t,n,s,r,o)}function zy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Pt=[];let sn=-1;const ss=[];let Hn=null,Gr=0;const pp=Promise.resolve();let So=null;function vl(t){const e=So||pp;return t?e.then(this?t.bind(this):t):e}function Wy(t){let e=sn+1,n=Pt.length;for(;e<n;){const r=e+n>>>1,s=Pt[r],i=ui(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function El(t){if(!(t.flags&1)){const e=ui(t),n=Pt[Pt.length-1];!n||!(t.flags&2)&&e>=ui(n)?Pt.push(t):Pt.splice(Wy(e),0,t),t.flags|=1,mp()}}function mp(){So||(So=pp.then(_p))}function Ky(t){ue(t)?ss.push(...t):Hn&&t.id===-1?Hn.splice(Gr+1,0,t):t.flags&1||(ss.push(t),t.flags|=1),mp()}function Ch(t,e,n=sn+1){for(;n<Pt.length;n++){const r=Pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function gp(t){if(ss.length){const e=[...new Set(ss)].sort((n,r)=>ui(n)-ui(r));if(ss.length=0,Hn){Hn.push(...e);return}for(Hn=e,Gr=0;Gr<Hn.length;Gr++){const n=Hn[Gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Hn=null,Gr=0}}const ui=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _p(t){try{for(sn=0;sn<Pt.length;sn++){const e=Pt[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<Pt.length;sn++){const e=Pt[sn];e&&(e.flags&=-2)}sn=-1,Pt.length=0,gp(),So=null,(Pt.length||ss.length)&&_p()}}let st=null,yp=null;function Co(t){const e=st;return st=t,yp=t&&t.type.__scopeId||null,e}function Sn(t,e=st,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fh(-1);const i=Co(e);let o;try{o=t(...s)}finally{Co(i),r._d&&Fh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ph(t,e){if(st===null)return t;const n=la(st),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=xe]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Tn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function vr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(hr(),dn(l,n,8,[t.el,c,t,e]),dr())}}const Gy=Symbol("_vte"),Qy=t=>t.__isTeleport;function Tl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Tl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function He(t,e){return fe(t)?it({name:t.name},e,{setup:t}):t}function vp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Po(t,e,n,r,s=!1){if(ue(t)){t.forEach((b,P)=>Po(b,e&&(ue(e)?e[P]:e),n,r,s));return}if(is(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Po(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?la(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===xe?c.refs={}:c.refs,p=c.setupState,m=Re(p),y=p===xe?()=>!1:b=>Pe(m,b);if(h!=null&&h!==l&&(Ze(h)?(d[h]=null,y(h)&&(p[h]=null)):Ge(h)&&(h.value=null)),fe(l))bi(l,c,12,[o,d]);else{const b=Ze(l),P=Ge(l);if(b||P){const D=()=>{if(t.f){const O=b?y(l)?p[l]:d[l]:l.value;s?ue(O)&&ll(O,i):ue(O)?O.includes(i)||O.push(i):b?(d[l]=[i],y(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else b?(d[l]=o,y(l)&&(p[l]=o)):P&&(l.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,$t(D,n)):D()}}}na().requestIdleCallback;na().cancelIdleCallback;const is=t=>!!t.type.__asyncLoader,Ep=t=>t.type.__isKeepAlive;function Xy(t,e){Tp(t,"a",e)}function Yy(t,e){Tp(t,"da",e)}function Tp(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ia(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ep(s.parent.vnode)&&Jy(r,e,n,s),s=s.parent}}function Jy(t,e,n,r){const s=ia(e,t,r,!0);Il(()=>{ll(r[e],s)},n)}function ia(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{hr();const c=Ri(n),l=dn(e,n,t,o);return c(),dr(),l});return r?s.unshift(i):s.push(i),i}}const Nn=t=>(e,n=ht)=>{(!fi||t==="sp")&&ia(t,(...r)=>e(...r),n)},wl=Nn("bm"),oa=Nn("m"),Zy=Nn("bu"),e0=Nn("u"),wp=Nn("bum"),Il=Nn("um"),t0=Nn("sp"),n0=Nn("rtg"),r0=Nn("rtc");function s0(t,e=ht){ia("ec",t,e)}const i0="components";function De(t,e){return a0(i0,t,!0,e)||t}const o0=Symbol.for("v-ndc");function a0(t,e,n=!0,r=!1){const s=st||ht;if(s){const i=s.type;{const c=G0(i,!1);if(c&&(c===e||c===Wt(e)||c===ta(Wt(e))))return i}const o=kh(s[t]||i[t],e)||kh(s.appContext[t],e);return!o&&r?i:o}}function kh(t,e){return t&&(t[e]||t[Wt(e)]||t[ta(Wt(e))])}function Al(t,e,n,r){let s;const i=n,o=ue(t);if(o||Ze(t)){const c=o&&Jn(t);let l=!1;c&&(l=!zt(t),t=ra(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?Tt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}function lo(t,e,n={},r,s){if(st.ce||st.parent&&is(st.parent)&&st.parent.ce)return e!=="default"&&(n.name=e),ne(),ut(kt,null,[Ee("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),ne();const o=i&&Ip(i(n)),c=n.key||o&&o.key,l=ut(kt,{key:(c&&!Vn(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function Ip(t){return t.some(e=>di(e)?!(e.type===sr||e.type===kt&&!Ip(e.children)):!0)?t:null}const bc=t=>t?Hp(t)?la(t):bc(t.parent):null,Js=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bc(t.parent),$root:t=>bc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bl(t),$forceUpdate:t=>t.f||(t.f=()=>{El(t.update)}),$nextTick:t=>t.n||(t.n=vl.bind(t.proxy)),$watch:t=>P0.bind(t)}),Za=(t,e)=>t!==xe&&!t.__isScriptSetup&&Pe(t,e),c0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Za(r,e))return o[e]=1,r[e];if(s!==xe&&Pe(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Pe(h,e))return o[e]=3,i[e];if(n!==xe&&Pe(n,e))return o[e]=4,n[e];Rc&&(o[e]=0)}}const d=Js[e];let p,m;if(d)return e==="$attrs"&&Et(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==xe&&Pe(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Pe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Za(s,e)?(s[e]=n,!0):r!==xe&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==xe&&Pe(t,o)||Za(e,o)||(c=i[0])&&Pe(c,o)||Pe(r,o)||Pe(Js,o)||Pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Dh(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rc=!0;function l0(t){const e=bl(t),n=t.proxy,r=t.ctx;Rc=!1,e.beforeCreate&&Vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:y,updated:b,activated:P,deactivated:D,beforeDestroy:O,beforeUnmount:F,destroyed:j,unmounted:q,render:se,renderTracked:pe,renderTriggered:A,errorCaptured:_,serverPrefetch:E,expose:I,inheritAttrs:R,components:S,directives:w,filters:ot}=e;if(h&&u0(h,r,null),o)for(const ae in o){const ge=o[ae];fe(ge)&&(r[ae]=ge.bind(n))}if(s){const ae=s.call(n,n);$e(ae)&&(t.data=Ai(ae))}if(Rc=!0,i)for(const ae in i){const ge=i[ae],Ft=fe(ge)?ge.bind(n,n):fe(ge.get)?ge.get.bind(n,n):an,Gt=!fe(ge)&&fe(ge.set)?ge.set.bind(n):an,qt=Ke({get:Ft,set:Gt});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>qt.value,set:Be=>qt.value=Be})}if(c)for(const ae in c)Ap(c[ae],r,n,ae);if(l){const ae=fe(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(ge=>{uo(ge,ae[ge])})}d&&Vh(d,t,"c");function Me(ae,ge){ue(ge)?ge.forEach(Ft=>ae(Ft.bind(n))):ge&&ae(ge.bind(n))}if(Me(wl,p),Me(oa,m),Me(Zy,y),Me(e0,b),Me(Xy,P),Me(Yy,D),Me(s0,_),Me(r0,pe),Me(n0,A),Me(wp,F),Me(Il,q),Me(t0,E),ue(I))if(I.length){const ae=t.exposed||(t.exposed={});I.forEach(ge=>{Object.defineProperty(ae,ge,{get:()=>n[ge],set:Ft=>n[ge]=Ft})})}else t.exposed||(t.exposed={});se&&t.render===an&&(t.render=se),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),w&&(t.directives=w),E&&vp(t)}function u0(t,e,n=an){ue(t)&&(t=Sc(t));for(const r in t){const s=t[r];let i;$e(s)?"default"in s?i=Yt(s.from||r,s.default,!0):i=Yt(s.from||r):i=Yt(s),Ge(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Vh(t,e,n){dn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ap(t,e,n,r){let s=r.includes(".")?Fp(n,r):()=>n[r];if(Ze(t)){const i=e[t];fe(i)&&Sr(s,i)}else if(fe(t))Sr(s,t.bind(n));else if($e(t))if(ue(t))t.forEach(i=>Ap(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Sr(s,i,t)}}function bl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>ko(l,h,o,!0)),ko(l,e,o)),$e(e)&&i.set(e,l),l}function ko(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ko(t,i,n,!0),s&&s.forEach(o=>ko(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=h0[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const h0={data:Oh,props:Nh,emits:Nh,methods:Hs,computed:Hs,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Hs,directives:Hs,watch:f0,provide:Oh,inject:d0};function Oh(t,e){return e?t?function(){return it(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function d0(t,e){return Hs(Sc(t),Sc(e))}function Sc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Hs(t,e){return t?it(Object.create(null),t,e):e}function Nh(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:it(Object.create(null),Dh(t),Dh(e??{})):e}function f0(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function bp(){return{app:null,config:{isNativeTag:sy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let p0=0;function m0(t,e){return function(r,s=null){fe(r)||(r=it({},r)),s!=null&&!$e(s)&&(s=null);const i=bp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:p0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:X0,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&fe(d.install)?(o.add(d),d.install(h,...p)):fe(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!l){const y=h._ceVNode||Ee(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(y,d):t(y,d,m),l=!0,h._container=d,d.__vue_app__=h,la(y.component)}},onUnmount(d){c.push(d)},unmount(){l&&(dn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Rr;Rr=h;try{return d()}finally{Rr=p}}};return h}}let Rr=null;function uo(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function Yt(t,e,n=!1){const r=ht||st;if(r||Rr){const s=Rr?Rr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function g0(){return!!(ht||st||Rr)}const Rp={},Sp=()=>Object.create(Rp),Cp=t=>Object.getPrototypeOf(t)===Rp;function _0(t,e,n,r=!1){const s={},i=Sp();t.propsDefaults=Object.create(null),Pp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:up(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function y0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Re(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(aa(t.emitsOptions,m))continue;const y=e[m];if(l)if(Pe(i,m))y!==i[m]&&(i[m]=y,h=!0);else{const b=Wt(m);s[b]=Cc(l,c,b,y,t,!1)}else y!==i[m]&&(i[m]=y,h=!0)}}}else{Pp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Pe(e,p)&&((d=ur(p))===p||!Pe(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Cc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],h=!0)}h&&En(t.attrs,"set","")}function Pp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Qs(l))continue;const h=e[l];let d;s&&Pe(s,d=Wt(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:aa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Re(n),h=c||xe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Cc(s,l,p,h[p],t,!Pe(h,p))}}return o}function Cc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Pe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ri(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===ur(n))&&(r=!0))}return r}const v0=new WeakMap;function kp(t,e,n=!1){const r=n?v0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const d=p=>{l=!0;const[m,y]=kp(p,e,!0);it(o,m),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return $e(t)&&r.set(t,ts),ts;if(ue(i))for(let d=0;d<i.length;d++){const p=Wt(i[d]);xh(p)&&(o[p]=xe)}else if(i)for(const d in i){const p=Wt(d);if(xh(p)){const m=i[d],y=o[p]=ue(m)||fe(m)?{type:m}:it({},m),b=y.type;let P=!1,D=!0;if(ue(b))for(let O=0;O<b.length;++O){const F=b[O],j=fe(F)&&F.name;if(j==="Boolean"){P=!0;break}else j==="String"&&(D=!1)}else P=fe(b)&&b.name==="Boolean";y[0]=P,y[1]=D,(P||Pe(y,"default"))&&c.push(p)}}const h=[o,c];return $e(t)&&r.set(t,h),h}function xh(t){return t[0]!=="$"&&!Qs(t)}const Dp=t=>t[0]==="_"||t==="$stable",Rl=t=>ue(t)?t.map(on):[on(t)],E0=(t,e,n)=>{if(e._n)return e;const r=Sn((...s)=>Rl(e(...s)),n);return r._c=!1,r},Vp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Dp(s))continue;const i=t[s];if(fe(i))e[s]=E0(s,i,r);else if(i!=null){const o=Rl(i);e[s]=()=>o}}},Op=(t,e)=>{const n=Rl(e);t.slots.default=()=>n},Np=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},T0=(t,e,n)=>{const r=t.slots=Sp();if(t.vnode.shapeFlag&32){const s=e._;s?(Np(r,e,n),n&&qf(r,"_",s,!0)):Vp(e,r)}else e&&Op(t,e)},w0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Np(s,e,n):(i=!e.$stable,Vp(e,s)),o=e}else e&&(Op(t,e),o={default:1});if(i)for(const c in s)!Dp(c)&&o[c]==null&&delete s[c]},$t=M0;function I0(t){return A0(t)}function A0(t,e){const n=na();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:y=an,insertStaticContent:b}=t,P=(v,T,k,U=null,N=null,$=null,K=void 0,z=null,H=!!T.dynamicChildren)=>{if(v===T)return;v&&!js(v,T)&&(U=x(v),Be(v,N,$,!0),v=null),T.patchFlag===-2&&(H=!1,T.dynamicChildren=null);const{type:B,ref:ie,shapeFlag:Q}=T;switch(B){case ca:D(v,T,k,U);break;case sr:O(v,T,k,U);break;case ho:v==null&&F(T,k,U,K);break;case kt:S(v,T,k,U,N,$,K,z,H);break;default:Q&1?se(v,T,k,U,N,$,K,z,H):Q&6?w(v,T,k,U,N,$,K,z,H):(Q&64||Q&128)&&B.process(v,T,k,U,N,$,K,z,H,Z)}ie!=null&&N&&Po(ie,v&&v.ref,$,T||v,!T)},D=(v,T,k,U)=>{if(v==null)r(T.el=c(T.children),k,U);else{const N=T.el=v.el;T.children!==v.children&&h(N,T.children)}},O=(v,T,k,U)=>{v==null?r(T.el=l(T.children||""),k,U):T.el=v.el},F=(v,T,k,U)=>{[v.el,v.anchor]=b(v.children,T,k,U,v.el,v.anchor)},j=({el:v,anchor:T},k,U)=>{let N;for(;v&&v!==T;)N=m(v),r(v,k,U),v=N;r(T,k,U)},q=({el:v,anchor:T})=>{let k;for(;v&&v!==T;)k=m(v),s(v),v=k;s(T)},se=(v,T,k,U,N,$,K,z,H)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),v==null?pe(T,k,U,N,$,K,z,H):E(v,T,N,$,K,z,H)},pe=(v,T,k,U,N,$,K,z)=>{let H,B;const{props:ie,shapeFlag:Q,transition:te,dirs:ee}=v;if(H=v.el=o(v.type,$,ie&&ie.is,ie),Q&8?d(H,v.children):Q&16&&_(v.children,H,null,U,N,ec(v,$),K,z),ee&&vr(v,null,U,"created"),A(H,v,v.scopeId,K,U),ie){for(const Se in ie)Se!=="value"&&!Qs(Se)&&i(H,Se,null,ie[Se],$,U);"value"in ie&&i(H,"value",null,ie.value,$),(B=ie.onVnodeBeforeMount)&&rn(B,U,v)}ee&&vr(v,null,U,"beforeMount");const oe=b0(N,te);oe&&te.beforeEnter(H),r(H,T,k),((B=ie&&ie.onVnodeMounted)||oe||ee)&&$t(()=>{B&&rn(B,U,v),oe&&te.enter(H),ee&&vr(v,null,U,"mounted")},N)},A=(v,T,k,U,N)=>{if(k&&y(v,k),U)for(let $=0;$<U.length;$++)y(v,U[$]);if(N){let $=N.subTree;if(T===$||$p($.type)&&($.ssContent===T||$.ssFallback===T)){const K=N.vnode;A(v,K,K.scopeId,K.slotScopeIds,N.parent)}}},_=(v,T,k,U,N,$,K,z,H=0)=>{for(let B=H;B<v.length;B++){const ie=v[B]=z?zn(v[B]):on(v[B]);P(null,ie,T,k,U,N,$,K,z)}},E=(v,T,k,U,N,$,K)=>{const z=T.el=v.el;let{patchFlag:H,dynamicChildren:B,dirs:ie}=T;H|=v.patchFlag&16;const Q=v.props||xe,te=T.props||xe;let ee;if(k&&Er(k,!1),(ee=te.onVnodeBeforeUpdate)&&rn(ee,k,T,v),ie&&vr(T,v,k,"beforeUpdate"),k&&Er(k,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&d(z,""),B?I(v.dynamicChildren,B,z,k,U,ec(T,N),$):K||ge(v,T,z,null,k,U,ec(T,N),$,!1),H>0){if(H&16)R(z,Q,te,k,N);else if(H&2&&Q.class!==te.class&&i(z,"class",null,te.class,N),H&4&&i(z,"style",Q.style,te.style,N),H&8){const oe=T.dynamicProps;for(let Se=0;Se<oe.length;Se++){const Ae=oe[Se],pt=Q[Ae],nt=te[Ae];(nt!==pt||Ae==="value")&&i(z,Ae,pt,nt,N,k)}}H&1&&v.children!==T.children&&d(z,T.children)}else!K&&B==null&&R(z,Q,te,k,N);((ee=te.onVnodeUpdated)||ie)&&$t(()=>{ee&&rn(ee,k,T,v),ie&&vr(T,v,k,"updated")},U)},I=(v,T,k,U,N,$,K)=>{for(let z=0;z<T.length;z++){const H=v[z],B=T[z],ie=H.el&&(H.type===kt||!js(H,B)||H.shapeFlag&70)?p(H.el):k;P(H,B,ie,null,U,N,$,K,!0)}},R=(v,T,k,U,N)=>{if(T!==k){if(T!==xe)for(const $ in T)!Qs($)&&!($ in k)&&i(v,$,T[$],null,N,U);for(const $ in k){if(Qs($))continue;const K=k[$],z=T[$];K!==z&&$!=="value"&&i(v,$,z,K,N,U)}"value"in k&&i(v,"value",T.value,k.value,N)}},S=(v,T,k,U,N,$,K,z,H)=>{const B=T.el=v?v.el:c(""),ie=T.anchor=v?v.anchor:c("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ee}=T;ee&&(z=z?z.concat(ee):ee),v==null?(r(B,k,U),r(ie,k,U),_(T.children||[],k,ie,N,$,K,z,H)):Q>0&&Q&64&&te&&v.dynamicChildren?(I(v.dynamicChildren,te,k,N,$,K,z),(T.key!=null||N&&T===N.subTree)&&xp(v,T,!0)):ge(v,T,k,ie,N,$,K,z,H)},w=(v,T,k,U,N,$,K,z,H)=>{T.slotScopeIds=z,v==null?T.shapeFlag&512?N.ctx.activate(T,k,U,K,H):ot(T,k,U,N,$,K,H):Dt(v,T,H)},ot=(v,T,k,U,N,$,K)=>{const z=v.component=q0(v,U,N);if(Ep(v)&&(z.ctx.renderer=Z),H0(z,!1,K),z.asyncDep){if(N&&N.registerDep(z,Me,K),!v.el){const H=z.subTree=Ee(sr);O(null,H,T,k)}}else Me(z,v,T,k,N,$,K)},Dt=(v,T,k)=>{const U=T.component=v.component;if(N0(v,T,k))if(U.asyncDep&&!U.asyncResolved){ae(U,T,k);return}else U.next=T,U.update();else T.el=v.el,U.vnode=T},Me=(v,T,k,U,N,$,K)=>{const z=()=>{if(v.isMounted){let{next:Q,bu:te,u:ee,parent:oe,vnode:Se}=v;{const mt=Mp(v);if(mt){Q&&(Q.el=Se.el,ae(v,Q,K)),mt.asyncDep.then(()=>{v.isUnmounted||z()});return}}let Ae=Q,pt;Er(v,!1),Q?(Q.el=Se.el,ae(v,Q,K)):Q=Se,te&&co(te),(pt=Q.props&&Q.props.onVnodeBeforeUpdate)&&rn(pt,oe,Q,Se),Er(v,!0);const nt=tc(v),at=v.subTree;v.subTree=nt,P(at,nt,p(at.el),x(at),v,N,$),Q.el=nt.el,Ae===null&&x0(v,nt.el),ee&&$t(ee,N),(pt=Q.props&&Q.props.onVnodeUpdated)&&$t(()=>rn(pt,oe,Q,Se),N)}else{let Q;const{el:te,props:ee}=T,{bm:oe,m:Se,parent:Ae,root:pt,type:nt}=v,at=is(T);if(Er(v,!1),oe&&co(oe),!at&&(Q=ee&&ee.onVnodeBeforeMount)&&rn(Q,Ae,T),Er(v,!0),te&&Oe){const mt=()=>{v.subTree=tc(v),Oe(te,v.subTree,v,N,null)};at&&nt.__asyncHydrate?nt.__asyncHydrate(te,v,mt):mt()}else{pt.ce&&pt.ce._injectChildStyle(nt);const mt=v.subTree=tc(v);P(null,mt,k,U,v,N,$),T.el=mt.el}if(Se&&$t(Se,N),!at&&(Q=ee&&ee.onVnodeMounted)){const mt=T;$t(()=>rn(Q,Ae,mt),N)}(T.shapeFlag&256||Ae&&is(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&v.a&&$t(v.a,N),v.isMounted=!0,T=k=U=null}};v.scope.on();const H=v.effect=new Xf(z);v.scope.off();const B=v.update=H.run.bind(H),ie=v.job=H.runIfDirty.bind(H);ie.i=v,ie.id=v.uid,H.scheduler=()=>El(ie),Er(v,!0),B()},ae=(v,T,k)=>{T.component=v;const U=v.vnode.props;v.vnode=T,v.next=null,y0(v,T.props,U,k),w0(v,T.children,k),hr(),Ch(v),dr()},ge=(v,T,k,U,N,$,K,z,H=!1)=>{const B=v&&v.children,ie=v?v.shapeFlag:0,Q=T.children,{patchFlag:te,shapeFlag:ee}=T;if(te>0){if(te&128){Gt(B,Q,k,U,N,$,K,z,H);return}else if(te&256){Ft(B,Q,k,U,N,$,K,z,H);return}}ee&8?(ie&16&&Vt(B,N,$),Q!==B&&d(k,Q)):ie&16?ee&16?Gt(B,Q,k,U,N,$,K,z,H):Vt(B,N,$,!0):(ie&8&&d(k,""),ee&16&&_(Q,k,U,N,$,K,z,H))},Ft=(v,T,k,U,N,$,K,z,H)=>{v=v||ts,T=T||ts;const B=v.length,ie=T.length,Q=Math.min(B,ie);let te;for(te=0;te<Q;te++){const ee=T[te]=H?zn(T[te]):on(T[te]);P(v[te],ee,k,null,N,$,K,z,H)}B>ie?Vt(v,N,$,!0,!1,Q):_(T,k,U,N,$,K,z,H,Q)},Gt=(v,T,k,U,N,$,K,z,H)=>{let B=0;const ie=T.length;let Q=v.length-1,te=ie-1;for(;B<=Q&&B<=te;){const ee=v[B],oe=T[B]=H?zn(T[B]):on(T[B]);if(js(ee,oe))P(ee,oe,k,null,N,$,K,z,H);else break;B++}for(;B<=Q&&B<=te;){const ee=v[Q],oe=T[te]=H?zn(T[te]):on(T[te]);if(js(ee,oe))P(ee,oe,k,null,N,$,K,z,H);else break;Q--,te--}if(B>Q){if(B<=te){const ee=te+1,oe=ee<ie?T[ee].el:U;for(;B<=te;)P(null,T[B]=H?zn(T[B]):on(T[B]),k,oe,N,$,K,z,H),B++}}else if(B>te)for(;B<=Q;)Be(v[B],N,$,!0),B++;else{const ee=B,oe=B,Se=new Map;for(B=oe;B<=te;B++){const bt=T[B]=H?zn(T[B]):on(T[B]);bt.key!=null&&Se.set(bt.key,B)}let Ae,pt=0;const nt=te-oe+1;let at=!1,mt=0;const Ln=new Array(nt);for(B=0;B<nt;B++)Ln[B]=0;for(B=ee;B<=Q;B++){const bt=v[B];if(pt>=nt){Be(bt,N,$,!0);continue}let Ht;if(bt.key!=null)Ht=Se.get(bt.key);else for(Ae=oe;Ae<=te;Ae++)if(Ln[Ae-oe]===0&&js(bt,T[Ae])){Ht=Ae;break}Ht===void 0?Be(bt,N,$,!0):(Ln[Ht-oe]=B+1,Ht>=mt?mt=Ht:at=!0,P(bt,T[Ht],k,null,N,$,K,z,H),pt++)}const $r=at?R0(Ln):ts;for(Ae=$r.length-1,B=nt-1;B>=0;B--){const bt=oe+B,Ht=T[bt],Br=bt+1<ie?T[bt+1].el:U;Ln[B]===0?P(null,Ht,k,Br,N,$,K,z,H):at&&(Ae<0||B!==$r[Ae]?qt(Ht,k,Br,2):Ae--)}}},qt=(v,T,k,U,N=null)=>{const{el:$,type:K,transition:z,children:H,shapeFlag:B}=v;if(B&6){qt(v.component.subTree,T,k,U);return}if(B&128){v.suspense.move(T,k,U);return}if(B&64){K.move(v,T,k,Z);return}if(K===kt){r($,T,k);for(let Q=0;Q<H.length;Q++)qt(H[Q],T,k,U);r(v.anchor,T,k);return}if(K===ho){j(v,T,k);return}if(U!==2&&B&1&&z)if(U===0)z.beforeEnter($),r($,T,k),$t(()=>z.enter($),N);else{const{leave:Q,delayLeave:te,afterLeave:ee}=z,oe=()=>r($,T,k),Se=()=>{Q($,()=>{oe(),ee&&ee()})};te?te($,oe,Se):Se()}else r($,T,k)},Be=(v,T,k,U=!1,N=!1)=>{const{type:$,props:K,ref:z,children:H,dynamicChildren:B,shapeFlag:ie,patchFlag:Q,dirs:te,cacheIndex:ee}=v;if(Q===-2&&(N=!1),z!=null&&Po(z,null,k,v,!0),ee!=null&&(T.renderCache[ee]=void 0),ie&256){T.ctx.deactivate(v);return}const oe=ie&1&&te,Se=!is(v);let Ae;if(Se&&(Ae=K&&K.onVnodeBeforeUnmount)&&rn(Ae,T,v),ie&6)nn(v.component,k,U);else{if(ie&128){v.suspense.unmount(k,U);return}oe&&vr(v,null,T,"beforeUnmount"),ie&64?v.type.remove(v,T,k,Z,U):B&&!B.hasOnce&&($!==kt||Q>0&&Q&64)?Vt(B,T,k,!1,!0):($===kt&&Q&384||!N&&ie&16)&&Vt(H,T,k),U&&je(v)}(Se&&(Ae=K&&K.onVnodeUnmounted)||oe)&&$t(()=>{Ae&&rn(Ae,T,v),oe&&vr(v,null,T,"unmounted")},k)},je=v=>{const{type:T,el:k,anchor:U,transition:N}=v;if(T===kt){Mn(k,U);return}if(T===ho){q(v);return}const $=()=>{s(k),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(v.shapeFlag&1&&N&&!N.persisted){const{leave:K,delayLeave:z}=N,H=()=>K(k,$);z?z(v.el,$,H):H()}else $()},Mn=(v,T)=>{let k;for(;v!==T;)k=m(v),s(v),v=k;s(T)},nn=(v,T,k)=>{const{bum:U,scope:N,job:$,subTree:K,um:z,m:H,a:B}=v;Mh(H),Mh(B),U&&co(U),N.stop(),$&&($.flags|=8,Be(K,v,T,k)),z&&$t(z,T),$t(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Vt=(v,T,k,U=!1,N=!1,$=0)=>{for(let K=$;K<v.length;K++)Be(v[K],T,k,U,N)},x=v=>{if(v.shapeFlag&6)return x(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=m(v.anchor||v.el),k=T&&T[Gy];return k?m(k):T};let X=!1;const G=(v,T,k)=>{v==null?T._vnode&&Be(T._vnode,null,null,!0):P(T._vnode||null,v,T,null,null,null,k),T._vnode=v,X||(X=!0,Ch(),gp(),X=!1)},Z={p:P,um:Be,m:qt,r:je,mt:ot,mc:_,pc:ge,pbc:I,n:x,o:t};let Te,Oe;return{render:G,hydrate:Te,createApp:m0(G,Te)}}function ec({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Er({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function b0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xp(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=zn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&xp(o,c)),c.type===ca&&(c.el=o.el)}}function R0(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Mp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mp(e)}function Mh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const S0=Symbol.for("v-scx"),C0=()=>Yt(S0);function Sr(t,e,n){return Lp(t,e,n)}function Lp(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,c=it({},n),l=e&&r||!e&&i!=="post";let h;if(fi){if(i==="sync"){const y=C0();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=an,y.resume=an,y.pause=an,y}}const d=ht;c.call=(y,b,P)=>dn(y,d,b,P);let p=!1;i==="post"?c.scheduler=y=>{$t(y,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,b)=>{b?y():El(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const m=Hy(t,e,c);return fi&&(h?h.push(m):l&&m()),m}function P0(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?Fp(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Ri(this),c=Lp(s,i.bind(r),n);return o(),c}function Fp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const k0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Wt(e)}Modifiers`]||t[`${ur(e)}Modifiers`];function D0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&k0(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ze(d)?d.trim():d)),o.number&&(s=n.map(Ec)));let c,l=r[c=Ga(e)]||r[c=Ga(Wt(e))];!l&&i&&(l=r[c=Ga(ur(e))]),l&&dn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,dn(h,t,6,s)}}function Up(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=h=>{const d=Up(h,e,!0);d&&(c=!0,it(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?($e(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):it(o,i),$e(t)&&r.set(t,o),o)}function aa(t,e){return!t||!Jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,ur(e))||Pe(t,e))}function tc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:m,setupState:y,ctx:b,inheritAttrs:P}=t,D=Co(t);let O,F;try{if(n.shapeFlag&4){const q=s||r,se=q;O=on(h.call(se,q,d,p,y,m,b)),F=c}else{const q=e;O=on(q.length>1?q(p,{attrs:c,slots:o,emit:l}):q(p,null)),F=e.props?c:V0(c)}}catch(q){Zs.length=0,sa(q,t,1),O=Ee(sr)}let j=O;if(F&&P!==!1){const q=Object.keys(F),{shapeFlag:se}=j;q.length&&se&7&&(i&&q.some(cl)&&(F=O0(F,i)),j=us(j,F,!1,!0))}return n.dirs&&(j=us(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Tl(j,n.transition),O=j,Co(D),O}const V0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jo(n))&&((e||(e={}))[n]=t[n]);return e},O0=(t,e)=>{const n={};for(const r in t)(!cl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function N0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Lh(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!aa(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Lh(r,o,h):!0:!!o;return!1}function Lh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!aa(n,i))return!0}return!1}function x0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const $p=t=>t.__isSuspense;function M0(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):Ky(t)}const kt=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),sr=Symbol.for("v-cmt"),ho=Symbol.for("v-stc"),Zs=[];let Bt=null;function ne(t=!1){Zs.push(Bt=t?null:[])}function L0(){Zs.pop(),Bt=Zs[Zs.length-1]||null}let hi=1;function Fh(t,e=!1){hi+=t,t<0&&Bt&&e&&(Bt.hasOnce=!0)}function Bp(t){return t.dynamicChildren=hi>0?Bt||ts:null,L0(),hi>0&&Bt&&Bt.push(t),t}function me(t,e,n,r,s,i){return Bp(Ve(t,e,n,r,s,i,!0))}function ut(t,e,n,r,s){return Bp(Ee(t,e,n,r,s,!0))}function di(t){return t?t.__v_isVNode===!0:!1}function js(t,e){return t.type===e.type&&t.key===e.key}const jp=({key:t})=>t??null,fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||Ge(t)||fe(t)?{i:st,r:t,k:e,f:!!n}:t:null);function Ve(t,e=null,n=null,r=0,s=null,i=t===kt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jp(e),ref:e&&fo(e),scopeId:yp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:st};return c?(Sl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ze(n)?8:16),hi>0&&!o&&Bt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Bt.push(l),l}const Ee=F0;function F0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===o0)&&(t=sr),di(t)){const c=us(t,e,!0);return n&&Sl(c,n),hi>0&&!i&&Bt&&(c.shapeFlag&6?Bt[Bt.indexOf(t)]=c:Bt.push(c)),c.patchFlag=-2,c}if(Q0(t)&&(t=t.__vccOpts),e){e=U0(e);let{class:c,style:l}=e;c&&!Ze(c)&&(e.class=xr(c)),$e(l)&&(_l(l)&&!ue(l)&&(l=it({},l)),e.style=On(l))}const o=Ze(t)?1:$p(t)?128:Qy(t)?64:$e(t)?4:fe(t)?2:0;return Ve(t,e,n,r,s,o,i,!0)}function U0(t){return t?_l(t)||Cp(t)?it({},t):t:null}function us(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?$0(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&jp(h),ref:e&&e.ref?n&&i?ue(i)?i.concat(fo(e)):[i,fo(e)]:fo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&us(t.ssContent),ssFallback:t.ssFallback&&us(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Tl(d,l.clone(d)),d}function Do(t=" ",e=0){return Ee(ca,null,t,e)}function qp(t,e){const n=Ee(ho,null,t);return n.staticCount=e,n}function Je(t="",e=!1){return e?(ne(),ut(sr,null,t)):Ee(sr,null,t)}function on(t){return t==null||typeof t=="boolean"?Ee(sr):ue(t)?Ee(kt,null,t.slice()):di(t)?zn(t):Ee(ca,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:us(t)}function Sl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Sl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Cp(e)?e._ctx=st:s===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:st},n=32):(e=String(e),r&64?(n=16,e=[Do(e)]):n=8);t.children=e,t.shapeFlag|=n}function $0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xr([e.class,r.class]));else if(s==="style")e.style=On([e.style,r.style]);else if(Jo(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){dn(t,e,7,[n,r])}const B0=bp();let j0=0;function q0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||B0,i={uid:j0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kp(r,s),emitsOptions:Up(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=D0.bind(null,i),t.ce&&t.ce(i),i}let ht=null,Vo,Pc;{const t=na(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Vo=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),Pc=e("__VUE_SSR_SETTERS__",n=>fi=n)}const Ri=t=>{const e=ht;return Vo(t),t.scope.on(),()=>{t.scope.off(),Vo(e)}},Uh=()=>{ht&&ht.scope.off(),Vo(null)};function Hp(t){return t.vnode.shapeFlag&4}let fi=!1;function H0(t,e=!1,n=!1){e&&Pc(e);const{props:r,children:s}=t.vnode,i=Hp(t);_0(t,r,i,e),T0(t,s,n);const o=i?z0(t,e):void 0;return e&&Pc(!1),o}function z0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,c0);const{setup:r}=n;if(r){hr();const s=t.setupContext=r.length>1?K0(t):null,i=Ri(t),o=bi(r,t,0,[t.props,s]),c=$f(o);if(dr(),i(),(c||t.sp)&&!is(t)&&vp(t),c){if(o.then(Uh,Uh),e)return o.then(l=>{$h(t,l,e)}).catch(l=>{sa(l,t,0)});t.asyncDep=o}else $h(t,o,e)}else zp(t,e)}function $h(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=fp(e)),zp(t,n)}let Bh;function zp(t,e,n){const r=t.type;if(!t.render){if(!e&&Bh&&!r.render){const s=r.template||bl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=it(it({isCustomElement:i,delimiters:c},o),l);r.render=Bh(s,h)}}t.render=r.render||an}{const s=Ri(t);hr();try{l0(t)}finally{dr(),s()}}}const W0={get(t,e){return Et(t,"get",""),t[e]}};function K0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,W0),slots:t.slots,emit:t.emit,expose:e}}function la(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(fp(yl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Js)return Js[n](t)},has(e,n){return n in e||n in Js}})):t.proxy}function G0(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function Q0(t){return fe(t)&&"__vccOpts"in t}const Ke=(t,e)=>jy(t,e,fi);function Wp(t,e,n){const r=arguments.length;return r===2?$e(e)&&!ue(e)?di(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&di(n)&&(n=[n]),Ee(t,e,n))}const X0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kc;const jh=typeof window<"u"&&window.trustedTypes;if(jh)try{kc=jh.createPolicy("vue",{createHTML:t=>t})}catch{}const Kp=kc?t=>kc.createHTML(t):t=>t,Y0="http://www.w3.org/2000/svg",J0="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,qh=vn&&vn.createElement("template"),Z0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?vn.createElementNS(Y0,t):e==="mathml"?vn.createElementNS(J0,t):n?vn.createElement(t,{is:n}):vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vn.createTextNode(t),createComment:t=>vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qh.innerHTML=Kp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=qh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ev=Symbol("_vtc");function tv(t,e,n){const r=t[ev];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Hh=Symbol("_vod"),nv=Symbol("_vsh"),rv=Symbol(""),sv=/(^|;)\s*display\s*:/;function iv(t,e,n){const r=t.style,s=Ze(n);let i=!1;if(n&&!s){if(e)if(Ze(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&po(r,c,"")}else for(const o in e)n[o]==null&&po(r,o,"");for(const o in n)o==="display"&&(i=!0),po(r,o,n[o])}else if(s){if(e!==n){const o=r[rv];o&&(n+=";"+o),r.cssText=n,i=sv.test(n)}}else e&&t.removeAttribute("style");Hh in t&&(t[Hh]=i?r.display:"",t[nv]&&(r.display="none"))}const zh=/\s*!important$/;function po(t,e,n){if(ue(n))n.forEach(r=>po(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ov(t,e);zh.test(n)?t.setProperty(ur(r),n.replace(zh,""),"important"):t[r]=n}}const Wh=["Webkit","Moz","ms"],nc={};function ov(t,e){const n=nc[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return nc[e]=r;r=ta(r);for(let s=0;s<Wh.length;s++){const i=Wh[s]+r;if(i in t)return nc[e]=i}return e}const Kh="http://www.w3.org/1999/xlink";function Gh(t,e,n,r,s,i=py(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Kh,e.slice(6,e.length)):t.setAttributeNS(Kh,e,n):n==null||i&&!Hf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Vn(n)?String(n):n)}function Qh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Hf(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Qr(t,e,n,r){t.addEventListener(e,n,r)}function av(t,e,n,r){t.removeEventListener(e,n,r)}const Xh=Symbol("_vei");function cv(t,e,n,r,s=null){const i=t[Xh]||(t[Xh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=lv(e);if(r){const h=i[e]=dv(r,s);Qr(t,c,h,l)}else o&&(av(t,c,o,l),i[e]=void 0)}}const Yh=/(?:Once|Passive|Capture)$/;function lv(t){let e;if(Yh.test(t)){e={};let r;for(;r=t.match(Yh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ur(t.slice(2)),e]}let rc=0;const uv=Promise.resolve(),hv=()=>rc||(uv.then(()=>rc=0),rc=Date.now());function dv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;dn(fv(r,n.value),e,5,[r])};return n.value=t,n.attached=hv(),n}function fv(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Jh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?tv(t,r,o):e==="style"?iv(t,n,r):Jo(e)?cl(e)||cv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mv(t,e,r,o))?(Qh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ze(r))?Qh(t,Wt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Gh(t,e,r,o))};function mv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Jh(e)&&Ze(n)?!1:e in t}const Zh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>co(e,n):e};function gv(t){t.target.composing=!0}function ed(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sc=Symbol("_assign"),td={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[sc]=Zh(s);const i=r||s.props&&s.props.type==="number";Qr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Ec(c)),t[sc](c)}),n&&Qr(t,"change",()=>{t.value=t.value.trim()}),e||(Qr(t,"compositionstart",gv),Qr(t,"compositionend",ed),Qr(t,"change",ed))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[sc]=Zh(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ec(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},_v={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yv=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=ur(s.key);if(e.some(o=>o===i||_v[o]===i))return t(s)})},vv=it({patchProp:pv},Z0);let nd;function Ev(){return nd||(nd=I0(vv))}const Tv=(...t)=>{const e=Ev().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Iv(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,wv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function wv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Iv(t){return Ze(t)?document.querySelector(t):t}var Av=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Gp;const ua=t=>Gp=t,Qp=Symbol();function Dc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ei;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ei||(ei={}));function bv(){const t=Gf(!0),e=t.run(()=>Ie({}));let n=[],r=[];const s=yl({install(i){ua(s),s._a=i,i.provide(Qp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Av?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Xp=()=>{};function rd(t,e,n,r=Xp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qf()&&my(s),s}function Kr(t,...e){t.slice().forEach(n=>{n(...e)})}const Rv=t=>t(),sd=Symbol(),ic=Symbol();function Vc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Dc(s)&&Dc(r)&&t.hasOwnProperty(n)&&!Ge(r)&&!Jn(r)?t[n]=Vc(s,r):t[n]=r}return t}const Sv=Symbol();function Cv(t){return!Dc(t)||!t.hasOwnProperty(Sv)}const{assign:qn}=Object;function Pv(t){return!!(Ge(t)&&t.effect)}function kv(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const d=Fy(n.state.value[t]);return qn(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=yl(Ke(()=>{ua(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return l=Yp(t,h,e,n,r,!0),l}function Yp(t,e,n={},r,s,i){let o;const c=qn({actions:{}},n),l={deep:!0};let h,d,p=[],m=[],y;const b=r.state.value[t];!i&&!b&&(r.state.value[t]={}),Ie({});let P;function D(_){let E;h=d=!1,typeof _=="function"?(_(r.state.value[t]),E={type:ei.patchFunction,storeId:t,events:y}):(Vc(r.state.value[t],_),E={type:ei.patchObject,payload:_,storeId:t,events:y});const I=P=Symbol();vl().then(()=>{P===I&&(h=!0)}),d=!0,Kr(p,E,r.state.value[t])}const O=i?function(){const{state:E}=n,I=E?E():{};this.$patch(R=>{qn(R,I)})}:Xp;function F(){o.stop(),p=[],m=[],r._s.delete(t)}const j=(_,E="")=>{if(sd in _)return _[ic]=E,_;const I=function(){ua(r);const R=Array.from(arguments),S=[],w=[];function ot(ae){S.push(ae)}function Dt(ae){w.push(ae)}Kr(m,{args:R,name:I[ic],store:se,after:ot,onError:Dt});let Me;try{Me=_.apply(this&&this.$id===t?this:se,R)}catch(ae){throw Kr(w,ae),ae}return Me instanceof Promise?Me.then(ae=>(Kr(S,ae),ae)).catch(ae=>(Kr(w,ae),Promise.reject(ae))):(Kr(S,Me),Me)};return I[sd]=!0,I[ic]=E,I},q={_p:r,$id:t,$onAction:rd.bind(null,m),$patch:D,$reset:O,$subscribe(_,E={}){const I=rd(p,_,E.detached,()=>R()),R=o.run(()=>Sr(()=>r.state.value[t],S=>{(E.flush==="sync"?d:h)&&_({storeId:t,type:ei.direct,events:y},S)},qn({},l,E)));return I},$dispose:F},se=Ai(q);r._s.set(t,se);const A=(r._a&&r._a.runWithContext||Rv)(()=>r._e.run(()=>(o=Gf()).run(()=>e({action:j}))));for(const _ in A){const E=A[_];if(Ge(E)&&!Pv(E)||Jn(E))i||(b&&Cv(E)&&(Ge(E)?E.value=b[_]:Vc(E,b[_])),r.state.value[t][_]=E);else if(typeof E=="function"){const I=j(E,_);A[_]=I,c.actions[_]=E}}return qn(se,A),qn(Re(se),A),Object.defineProperty(se,"$state",{get:()=>r.state.value[t],set:_=>{D(E=>{qn(E,_)})}}),r._p.forEach(_=>{qn(se,o.run(()=>_({store:se,app:r._a,pinia:r,options:c})))}),b&&i&&n.hydrate&&n.hydrate(se.$state,b),h=!0,d=!0,se}/*! #__NO_SIDE_EFFECTS__ */function ha(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,l){const h=g0();return c=c||(h?Yt(Qp,null):null),c&&ua(c),c=Gp,c._s.has(r)||(i?Yp(r,e,s,c):kv(r,s,c)),c._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Xr=typeof document<"u";function Jp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Dv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Jp(t.default)}const Ce=Object.assign;function oc(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const ti=()=>{},en=Array.isArray,Zp=/#/g,Vv=/&/g,Ov=/\//g,Nv=/=/g,xv=/\?/g,em=/\+/g,Mv=/%5B/g,Lv=/%5D/g,tm=/%5E/g,Fv=/%60/g,nm=/%7B/g,Uv=/%7C/g,rm=/%7D/g,$v=/%20/g;function Cl(t){return encodeURI(""+t).replace(Uv,"|").replace(Mv,"[").replace(Lv,"]")}function Bv(t){return Cl(t).replace(nm,"{").replace(rm,"}").replace(tm,"^")}function Oc(t){return Cl(t).replace(em,"%2B").replace($v,"+").replace(Zp,"%23").replace(Vv,"%26").replace(Fv,"`").replace(nm,"{").replace(rm,"}").replace(tm,"^")}function jv(t){return Oc(t).replace(Nv,"%3D")}function qv(t){return Cl(t).replace(Zp,"%23").replace(xv,"%3F")}function Hv(t){return t==null?"":qv(t).replace(Ov,"%2F")}function pi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const zv=/\/$/,Wv=t=>t.replace(zv,"");function ac(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Xv(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:pi(o)}}function Kv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function id(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Gv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hs(e.matched[r],n.matched[s])&&sm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Qv(t[n],e[n]))return!1;return!0}function Qv(t,e){return en(t)?od(t,e):en(e)?od(e,t):t===e}function od(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Xv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mi;(function(t){t.pop="pop",t.push="push"})(mi||(mi={}));var ni;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ni||(ni={}));function Yv(t){if(!t)if(Xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wv(t)}const Jv=/^[^#]+#/;function Zv(t,e){return t.replace(Jv,"#")+e}function eE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const da=()=>({left:window.scrollX,top:window.scrollY});function tE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=eE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ad(t,e){return(history.state?history.state.position-e:-1)+t}const Nc=new Map;function nE(t,e){Nc.set(t,e)}function rE(t){const e=Nc.get(t);return Nc.delete(t),e}let sE=()=>location.protocol+"//"+location.host;function im(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),id(l,"")}return id(n,t)+r+s}function iE(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const y=im(t,location),b=n.value,P=e.value;let D=0;if(m){if(n.value=y,e.value=m,o&&o===b){o=null;return}D=P?m.position-P.position:0}else r(y);s.forEach(O=>{O(n.value,b,{delta:D,type:mi.pop,direction:D?D>0?ni.forward:ni.back:ni.unknown})})};function l(){o=n.value}function h(m){s.push(m);const y=()=>{const b=s.indexOf(m);b>-1&&s.splice(b,1)};return i.push(y),y}function d(){const{history:m}=window;m.state&&m.replaceState(Ce({},m.state,{scroll:da()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function cd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?da():null}}function oE(t){const{history:e,location:n}=window,r={value:im(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:sE()+t+l;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(y){console.error(y),n[d?"replace":"assign"](m)}}function o(l,h){const d=Ce({},e.state,cd(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=Ce({},s.value,e.state,{forward:l,scroll:da()});i(d.current,d,!0);const p=Ce({},cd(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function aE(t){t=Yv(t);const e=oE(t),n=iE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ce({location:"",base:t,go:r,createHref:Zv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function cE(t){return typeof t=="string"||t&&typeof t=="object"}function om(t){return typeof t=="string"||typeof t=="symbol"}const am=Symbol("");var ld;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ld||(ld={}));function ds(t,e){return Ce(new Error,{type:t,[am]:!0},e)}function yn(t,e){return t instanceof Error&&am in t&&(e==null||!!(t.type&e))}const ud="[^/]+?",lE={sensitive:!1,strict:!1,start:!0,end:!0},uE=/[.+*?^${}()[\]/\\]/g;function hE(t,e){const n=Ce({},lE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(uE,"\\$&"),y+=40;else if(m.type===1){const{value:b,repeatable:P,optional:D,regexp:O}=m;i.push({name:b,repeatable:P,optional:D});const F=O||ud;if(F!==ud){y+=10;try{new RegExp(`(${F})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${b}" (${F}): `+q.message)}}let j=P?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(j=D&&h.length<2?`(?:/${j})`:"/"+j),D&&(j+="?"),s+=j,y+=20,D&&(y+=-8),P&&(y+=-20),F===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const y=d[m]||"",b=i[m-1];p[b.name]=y&&b.repeatable?y.split("/"):y}return p}function l(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of m)if(y.type===0)d+=y.value;else if(y.type===1){const{value:b,repeatable:P,optional:D}=y,O=b in h?h[b]:"";if(en(O)&&!P)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const F=en(O)?O.join("/"):O;if(!F)if(D)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);d+=F}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function dE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function cm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=dE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(hd(r))return 1;if(hd(s))return-1}return s.length-r.length}function hd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const fE={type:0,value:""},pE=/[a-zA-Z0-9_]/;function mE(t){if(!t)return[[]];if(t==="/")return[[fE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:pE.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function gE(t,e,n){const r=hE(mE(t.path),n),s=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function _E(t,e){const n=[],r=new Map;e=md({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,y){const b=!y,P=fd(p);P.aliasOf=y&&y.record;const D=md(e,p),O=[P];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const se of q)O.push(fd(Ce({},P,{components:y?y.record.components:P.components,path:se,aliasOf:y?y.record:P})))}let F,j;for(const q of O){const{path:se}=q;if(m&&se[0]!=="/"){const pe=m.record.path,A=pe[pe.length-1]==="/"?"":"/";q.path=m.record.path+(se&&A+se)}if(F=gE(q,m,D),y?y.alias.push(F):(j=j||F,j!==F&&j.alias.push(F),b&&p.name&&!pd(F)&&o(p.name)),lm(F)&&l(F),P.children){const pe=P.children;for(let A=0;A<pe.length;A++)i(pe[A],F,y&&y.children[A])}y=y||F}return j?()=>{o(j)}:ti}function o(p){if(om(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=EE(p,n);n.splice(m,0,p),p.record.name&&!pd(p)&&r.set(p.record.name,p)}function h(p,m){let y,b={},P,D;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw ds(1,{location:p});D=y.record.name,b=Ce(dd(m.params,y.keys.filter(j=>!j.optional).concat(y.parent?y.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&dd(p.params,y.keys.map(j=>j.name))),P=y.stringify(b)}else if(p.path!=null)P=p.path,y=n.find(j=>j.re.test(P)),y&&(b=y.parse(P),D=y.record.name);else{if(y=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!y)throw ds(1,{location:p,currentLocation:m});D=y.record.name,b=Ce({},m.params,p.params),P=y.stringify(b)}const O=[];let F=y;for(;F;)O.unshift(F.record),F=F.parent;return{name:D,path:P,params:b,matched:O,meta:vE(O)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function dd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function fd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:yE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function yE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function pd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function vE(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function md(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function EE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;cm(t,e[i])<0?r=i:n=i+1}const s=TE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function TE(t){let e=t;for(;e=e.parent;)if(lm(e)&&cm(t,e)===0)return e}function lm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function wE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(em," "),o=i.indexOf("="),c=pi(o<0?i:i.slice(0,o)),l=o<0?null:pi(i.slice(o+1));if(c in e){let h=e[c];en(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function gd(t){let e="";for(let n in t){const r=t[n];if(n=jv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(i=>i&&Oc(i)):[r&&Oc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function IE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const AE=Symbol(""),_d=Symbol(""),fa=Symbol(""),um=Symbol(""),xc=Symbol("");function qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Wn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(ds(4,{from:n,to:e})):m instanceof Error?l(m):cE(m)?l(ds(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function cc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Jp(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Wn(d,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=Dv(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const y=(p.__vccOpts||p)[e];return y&&Wn(y,n,r,o,c,s)()}))}}return i}function yd(t){const e=Yt(fa),n=Yt(um),r=Ke(()=>{const l=rs(t.to);return e.resolve(l)}),s=Ke(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(hs.bind(null,d));if(m>-1)return m;const y=vd(l[h-2]);return h>1&&vd(d)===y&&p[p.length-1].path!==y?p.findIndex(hs.bind(null,l[h-2])):m}),i=Ke(()=>s.value>-1&&PE(n.params,r.value.params)),o=Ke(()=>s.value>-1&&s.value===n.matched.length-1&&sm(n.params,r.value.params));function c(l={}){if(CE(l)){const h=e[rs(t.replace)?"replace":"push"](rs(t.to)).catch(ti);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function bE(t){return t.length===1?t[0]:t}const RE=He({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yd,setup(t,{slots:e}){const n=Ai(yd(t)),{options:r}=Yt(fa),s=Ke(()=>({[Ed(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ed(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&bE(e.default(n));return t.custom?i:Wp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),SE=RE;function CE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function PE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function vd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ed=(t,e,n)=>t??e??n,kE=He({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Yt(xc),s=Ke(()=>t.route||r.value),i=Yt(_d,0),o=Ke(()=>{let h=rs(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=Ke(()=>s.value.matched[o.value]);uo(_d,Ke(()=>o.value+1)),uo(AE,c),uo(xc,s);const l=Ie();return Sr(()=>[l.value,c.value,t.name],([h,d,p],[m,y,b])=>{d&&(d.instances[p]=h,y&&y!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),h&&d&&(!y||!hs(d,y)||!m)&&(d.enterCallbacks[p]||[]).forEach(P=>P(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=c.value,m=p&&p.components[d];if(!m)return Td(n.default,{Component:m,route:h});const y=p.props[d],b=y?y===!0?h.params:typeof y=="function"?y(h):y:null,D=Wp(m,Ce({},b,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Td(n.default,{Component:D,route:h})||D}}});function Td(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const DE=kE;function VE(t){const e=_E(t.routes,t),n=t.parseQuery||wE,r=t.stringifyQuery||gd,s=t.history,i=qs(),o=qs(),c=qs(),l=xy(Bn);let h=Bn;Xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=oc.bind(null,x=>""+x),p=oc.bind(null,Hv),m=oc.bind(null,pi);function y(x,X){let G,Z;return om(x)?(G=e.getRecordMatcher(x),Z=X):Z=x,e.addRoute(Z,G)}function b(x){const X=e.getRecordMatcher(x);X&&e.removeRoute(X)}function P(){return e.getRoutes().map(x=>x.record)}function D(x){return!!e.getRecordMatcher(x)}function O(x,X){if(X=Ce({},X||l.value),typeof x=="string"){const T=ac(n,x,X.path),k=e.resolve({path:T.path},X),U=s.createHref(T.fullPath);return Ce(T,k,{params:m(k.params),hash:pi(T.hash),redirectedFrom:void 0,href:U})}let G;if(x.path!=null)G=Ce({},x,{path:ac(n,x.path,X.path).path});else{const T=Ce({},x.params);for(const k in T)T[k]==null&&delete T[k];G=Ce({},x,{params:p(T)}),X.params=p(X.params)}const Z=e.resolve(G,X),Te=x.hash||"";Z.params=d(m(Z.params));const Oe=Kv(r,Ce({},x,{hash:Bv(Te),path:Z.path})),v=s.createHref(Oe);return Ce({fullPath:Oe,hash:Te,query:r===gd?IE(x.query):x.query||{}},Z,{redirectedFrom:void 0,href:v})}function F(x){return typeof x=="string"?ac(n,x,l.value.path):Ce({},x)}function j(x,X){if(h!==x)return ds(8,{from:X,to:x})}function q(x){return A(x)}function se(x){return q(Ce(F(x),{replace:!0}))}function pe(x){const X=x.matched[x.matched.length-1];if(X&&X.redirect){const{redirect:G}=X;let Z=typeof G=="function"?G(x):G;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=F(Z):{path:Z},Z.params={}),Ce({query:x.query,hash:x.hash,params:Z.path!=null?{}:x.params},Z)}}function A(x,X){const G=h=O(x),Z=l.value,Te=x.state,Oe=x.force,v=x.replace===!0,T=pe(G);if(T)return A(Ce(F(T),{state:typeof T=="object"?Ce({},Te,T.state):Te,force:Oe,replace:v}),X||G);const k=G;k.redirectedFrom=X;let U;return!Oe&&Gv(r,Z,G)&&(U=ds(16,{to:k,from:Z}),qt(Z,Z,!0,!1)),(U?Promise.resolve(U):I(k,Z)).catch(N=>yn(N)?yn(N,2)?N:Gt(N):ge(N,k,Z)).then(N=>{if(N){if(yn(N,2))return A(Ce({replace:v},F(N.to),{state:typeof N.to=="object"?Ce({},Te,N.to.state):Te,force:Oe}),X||k)}else N=S(k,Z,!0,v,Te);return R(k,Z,N),N})}function _(x,X){const G=j(x,X);return G?Promise.reject(G):Promise.resolve()}function E(x){const X=Mn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(x):x()}function I(x,X){let G;const[Z,Te,Oe]=OE(x,X);G=cc(Z.reverse(),"beforeRouteLeave",x,X);for(const T of Z)T.leaveGuards.forEach(k=>{G.push(Wn(k,x,X))});const v=_.bind(null,x,X);return G.push(v),Vt(G).then(()=>{G=[];for(const T of i.list())G.push(Wn(T,x,X));return G.push(v),Vt(G)}).then(()=>{G=cc(Te,"beforeRouteUpdate",x,X);for(const T of Te)T.updateGuards.forEach(k=>{G.push(Wn(k,x,X))});return G.push(v),Vt(G)}).then(()=>{G=[];for(const T of Oe)if(T.beforeEnter)if(en(T.beforeEnter))for(const k of T.beforeEnter)G.push(Wn(k,x,X));else G.push(Wn(T.beforeEnter,x,X));return G.push(v),Vt(G)}).then(()=>(x.matched.forEach(T=>T.enterCallbacks={}),G=cc(Oe,"beforeRouteEnter",x,X,E),G.push(v),Vt(G))).then(()=>{G=[];for(const T of o.list())G.push(Wn(T,x,X));return G.push(v),Vt(G)}).catch(T=>yn(T,8)?T:Promise.reject(T))}function R(x,X,G){c.list().forEach(Z=>E(()=>Z(x,X,G)))}function S(x,X,G,Z,Te){const Oe=j(x,X);if(Oe)return Oe;const v=X===Bn,T=Xr?history.state:{};G&&(Z||v?s.replace(x.fullPath,Ce({scroll:v&&T&&T.scroll},Te)):s.push(x.fullPath,Te)),l.value=x,qt(x,X,G,v),Gt()}let w;function ot(){w||(w=s.listen((x,X,G)=>{if(!nn.listening)return;const Z=O(x),Te=pe(Z);if(Te){A(Ce(Te,{replace:!0,force:!0}),Z).catch(ti);return}h=Z;const Oe=l.value;Xr&&nE(ad(Oe.fullPath,G.delta),da()),I(Z,Oe).catch(v=>yn(v,12)?v:yn(v,2)?(A(Ce(F(v.to),{force:!0}),Z).then(T=>{yn(T,20)&&!G.delta&&G.type===mi.pop&&s.go(-1,!1)}).catch(ti),Promise.reject()):(G.delta&&s.go(-G.delta,!1),ge(v,Z,Oe))).then(v=>{v=v||S(Z,Oe,!1),v&&(G.delta&&!yn(v,8)?s.go(-G.delta,!1):G.type===mi.pop&&yn(v,20)&&s.go(-1,!1)),R(Z,Oe,v)}).catch(ti)}))}let Dt=qs(),Me=qs(),ae;function ge(x,X,G){Gt(x);const Z=Me.list();return Z.length?Z.forEach(Te=>Te(x,X,G)):console.error(x),Promise.reject(x)}function Ft(){return ae&&l.value!==Bn?Promise.resolve():new Promise((x,X)=>{Dt.add([x,X])})}function Gt(x){return ae||(ae=!x,ot(),Dt.list().forEach(([X,G])=>x?G(x):X()),Dt.reset()),x}function qt(x,X,G,Z){const{scrollBehavior:Te}=t;if(!Xr||!Te)return Promise.resolve();const Oe=!G&&rE(ad(x.fullPath,0))||(Z||!G)&&history.state&&history.state.scroll||null;return vl().then(()=>Te(x,X,Oe)).then(v=>v&&tE(v)).catch(v=>ge(v,x,X))}const Be=x=>s.go(x);let je;const Mn=new Set,nn={currentRoute:l,listening:!0,addRoute:y,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:P,resolve:O,options:t,push:q,replace:se,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Me.add,isReady:Ft,install(x){const X=this;x.component("RouterLink",SE),x.component("RouterView",DE),x.config.globalProperties.$router=X,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>rs(l)}),Xr&&!je&&l.value===Bn&&(je=!0,q(s.location).catch(Te=>{}));const G={};for(const Te in Bn)Object.defineProperty(G,Te,{get:()=>l.value[Te],enumerable:!0});x.provide(fa,X),x.provide(um,up(G)),x.provide(xc,l);const Z=x.unmount;Mn.add(x),x.unmount=function(){Mn.delete(x),Mn.size<1&&(h=Bn,w&&w(),w=null,l.value=Bn,je=!1,ae=!1),Z()}}};function Vt(x){return x.reduce((X,G)=>X.then(()=>E(G)),Promise.resolve())}return nn}function OE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>hs(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>hs(h,l))||s.push(l))}return[n,r,s]}function NE(){return Yt(fa)}const xE=He({props:{color:{type:String,default:"white"},text:{type:String,default:""}},setup(t){return{iconHomeStyle:Ke(()=>({"--icon-color":t.color}))}}}),Qe=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ME={key:0,class:"text"};function LE(t,e,n,r,s,i){return ne(),me("div",{class:"icon-home",style:On(t.iconHomeStyle)},[e[0]||(e[0]=Ve("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[Ve("path",{d:"M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"})],-1)),t.$props.text&&t.$props.text.length>0?(ne(),me("div",ME,Nt(t.$props.text),1)):Je("",!0)],4)}const FE=Qe(xE,[["render",LE],["__scopeId","data-v-c1df092f"]]),UE=He({props:{color:{type:String,default:"white"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconLightSwitchStyle:Ke(()=>({"--icon-color":t.color,fontSize:t.fontSize}))}}}),$E={fill:"#000000",viewBox:"0 0 64 64","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},xmlns:"http://www.w3.org/2000/svg"},BE={key:0,class:"text"};function jE(t,e,n,r,s,i){return ne(),me("div",{class:"icon-light-switch",style:On(t.iconLightSwitchStyle)},[(ne(),me("svg",$E,e[0]||(e[0]=[qp('<g stroke-width="0" data-v-be2209a6></g><g stroke-linecap="round" stroke-linejoin="round" data-v-be2209a6></g><g data-v-be2209a6><rect x="0" y="-320" width="1280" height="800" style="fill:none;" data-v-be2209a6></rect><g transform="matrix(1.3258707,0,0,1.3751367,-10.338119,-12.63741)" data-v-be2209a6><path d="m 25.022,17.099 c 2.715,-0.012 12.015,0.058 13.952,0 22.08,-0.662 22.961,30.643 0,30.023 -3.488,0.015 -12.792,-0.064 -13.952,0 C 14.663,47.694 7.982,40.3 8.025,31.85 8.067,23.399 15.555,16.13 25.022,17.099 Z M 32.904,32.11 C 33.047,26.747 28.24,22.014 22.889,22.095 c -7.31,0.111 -10.482,6.7 -10.016,10.947 0.625,5.691 5.193,9.06 10.016,9.084 5.536,0.026 9.862,-4.308 10.015,-10.016 z" style="fill-rule:nonzero;" data-v-be2209a6></path></g></g>',3)]))),t.$props.text&&t.$props.text.length>0?(ne(),me("div",BE,Nt(t.$props.text),1)):Je("",!0)],4)}const hm=Qe(UE,[["render",jE],["__scopeId","data-v-be2209a6"]]),qE=He({props:{color:{type:String,default:"white"},strokeColor:{type:String,default:"black"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconScheduleStyle:Ke(()=>({"--icon-color":t.color,"--icon-stroke-color":t.strokeColor,fontSize:t.fontSize}))}}}),HE={key:0,class:"text"};function zE(t,e,n,r,s,i){return ne(),me("div",{class:"icon-schedule",style:On(t.iconScheduleStyle)},[e[0]||(e[0]=qp('<svg viewBox="0 0 24 24" stroke-width="3" stroke="#000000" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-604fa35c><path d="M 14.020182,21.685362 H 1.8335071 A 1.095136,1.0848345 0 0 1 0.74275167,20.622224 V 3.3169452 A 1.0907555,1.0804951 0 0 1 1.8335071,2.2364501 H 19.285596 a 1.0907555,1.0804951 0 0 1 1.090755,1.0804951 v 9.7201178" style="stroke-width:1.30797;" data-v-604fa35c></path><line x1="0.74275166" y1="7.0097213" x2="20.376347" y2="7.0097213" style="stroke-width:1.30797;" data-v-604fa35c></line><line x1="5.1714816" y1="2.2364504" x2="5.1714816" y2="0.066781186" style="stroke-width:1.30797;" data-v-604fa35c></line><line x1="15.667263" y1="2.2364504" x2="15.667263" y2="0.066781186" style="stroke-width:1.30797;" data-v-604fa35c></line><ellipse cx="17.769928" cy="17.775614" rx="5.4450164" ry="5.3937974" style="stroke-width:1.30797;" data-v-604fa35c></ellipse><polyline points="45.22 36.7 45.22 45.82 49.57 49.16" transform="matrix(0.43805442,0,0,0.43393378,-2.0388941,-1.9423323)" data-v-604fa35c></polyline></svg>',1)),t.$props.text&&t.$props.text.length>0?(ne(),me("div",HE,Nt(t.$props.text),1)):Je("",!0)],4)}const dm=Qe(qE,[["render",zE],["__scopeId","data-v-604fa35c"]]),WE=He({name:"task-bar",components:{IconSchedule:dm,IconLightSwitch:hm,IconHome:FE},setup(){const t=NE();oa(()=>{e("relays")});function e(n){t.push({name:n})}return{}}}),KE={class:"task-bar"};function GE(t,e,n,r,s,i){const o=De("icon-home"),c=De("router-link"),l=De("icon-light-switch"),h=De("icon-schedule");return ne(),me("div",KE,[Ee(c,{to:"/home",class:"task"},{default:Sn(()=>[Ee(o,{text:"Home"})]),_:1}),Ee(c,{to:"/relays",class:"task"},{default:Sn(()=>[Ee(l,{text:"Relays"})]),_:1}),Ee(c,{to:"/schedules",class:"task"},{default:Sn(()=>[Ee(h,{text:"Schedules"})]),_:1})])}const QE=Qe(WE,[["render",GE],["__scopeId","data-v-a291f81d"]]),XE=He({props:{spinnerSize:{type:String,default:"30px"},withText:{type:Boolean,default:!1}},setup(){return{}}}),YE={class:"spinner"},JE={key:0,class:"text"};function ZE(t,e,n,r,s,i){return ne(),me("div",YE,[Ve("div",{class:"spinner-inner",style:On({"--spinnerSize":t.spinnerSize})},null,4),t.withText?(ne(),me("div",JE,"Laden...")):Je("",!0)])}const Pl=Qe(XE,[["render",ZE],["__scopeId","data-v-8cb8f775"]]),eT=He({components:{Spinner:Pl},props:{text:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},emits:["onButtonClicked"],setup(t,e){function n(){e.emit("onButtonClicked")}return{onClicked:n}}}),tT={key:1,class:"button-content"};function nT(t,e,n,r,s,i){const o=De("spinner");return ne(),me("div",{class:xr(["button-default",{"is-loading":t.isLoading}]),tabindex:"0",onClick:e[0]||(e[0]=(...c)=>t.onClicked&&t.onClicked(...c)),onKeydown:e[1]||(e[1]=yv((...c)=>t.onClicked&&t.onClicked(...c),["enter"]))},[t.isLoading?(ne(),ut(o,{key:0,spinnerSize:"20px"})):(ne(),me("div",tT,[lo(t.$slots,"icon",{},void 0),Do(" "+Nt(t.text),1)]))],34)}const kl=Qe(eT,[["render",nT],["__scopeId","data-v-5dad5cd0"]]),fm=ha("user",()=>{const t=Ie(null);return{user:t,setUser:n=>{t.value=n}}});var wd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},mm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,y=h&63;l||(y=64,o||(m=64)),r.push(n[d],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new sT;const m=i<<2|c>>4;if(r.push(m),h!==64){const y=c<<4&240|h>>2;if(r.push(y),p!==64){const b=h<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iT=function(t){const e=pm(t);return mm.encodeByteArray(e,!0)},Oo=function(t){return iT(t).replace(/\./g,"")},gm=function(t){try{return mm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aT=()=>oT().__FIREBASE_DEFAULTS__,cT=()=>{if(typeof process>"u"||typeof wd>"u")return;const t=wd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gm(t[1]);return e&&JSON.parse(e)},pa=()=>{try{return aT()||cT()||lT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_m=t=>{var e,n;return(n=(e=pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uT=t=>{const e=_m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ym=()=>{var t;return(t=pa())===null||t===void 0?void 0:t.config},vm=t=>{var e;return(e=pa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Oo(JSON.stringify(n)),Oo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function pT(){var t;const e=(t=pa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _T(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yT(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vT(){return!pT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ET(){try{return typeof indexedDB=="object"}catch{return!1}}function TT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wT,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?IT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new xn(s,c,r)}}function IT(t,e){return t.replace(AT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const AT=/\{\$([^}]+)}/g;function bT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Id(i)&&Id(o)){if(!No(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Id(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function RT(t,e){const n=new ST(t,e);return n.subscribe.bind(n)}class ST{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=lc),s.error===void 0&&(s.error=lc),s.complete===void 0&&(s.complete=lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lc(){}/**
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
 */function At(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wr="[DEFAULT]";/**
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
 */class PT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DT(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kT(t){return t===wr?void 0:t}function DT(t){return t.instantiationMode==="EAGER"}/**
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
 */class VT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const OT={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},NT=_e.INFO,xT={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},MT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dl{constructor(e){this.name=e,this._logLevel=NT,this._logHandler=MT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const LT=(t,e)=>e.some(n=>t instanceof n);let Ad,bd;function FT(){return Ad||(Ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UT(){return bd||(bd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Em=new WeakMap,Mc=new WeakMap,Tm=new WeakMap,uc=new WeakMap,Vl=new WeakMap;function $T(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Zn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Em.set(n,t)}).catch(()=>{}),Vl.set(e,t),e}function BT(t){if(Mc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Mc.set(t,e)}let Lc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jT(t){Lc=t(Lc)}function qT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hc(this),e,...n);return Tm.set(r,e.sort?e.sort():[e]),Zn(r)}:UT().includes(t)?function(...e){return t.apply(hc(this),e),Zn(Em.get(this))}:function(...e){return Zn(t.apply(hc(this),e))}}function HT(t){return typeof t=="function"?qT(t):(t instanceof IDBTransaction&&BT(t),LT(t,FT())?new Proxy(t,Lc):t)}function Zn(t){if(t instanceof IDBRequest)return $T(t);if(uc.has(t))return uc.get(t);const e=HT(t);return e!==t&&(uc.set(t,e),Vl.set(e,t)),e}const hc=t=>Vl.get(t);function zT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zn(o.result),l.oldVersion,l.newVersion,Zn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const WT=["get","getKey","getAll","getAllKeys","count"],KT=["put","add","delete","clear"],dc=new Map;function Rd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dc.get(e))return dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=KT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||WT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return dc.set(e,i),i}jT(t=>({...t,get:(e,n,r)=>Rd(e,n)||t.get(e,n,r),has:(e,n)=>!!Rd(e,n)||t.has(e,n)}));/**
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
 */class GT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fc="@firebase/app",Sd="0.10.17";/**
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
 */const Cn=new Dl("@firebase/app"),XT="@firebase/app-compat",YT="@firebase/analytics-compat",JT="@firebase/analytics",ZT="@firebase/app-check-compat",ew="@firebase/app-check",tw="@firebase/auth",nw="@firebase/auth-compat",rw="@firebase/database",sw="@firebase/data-connect",iw="@firebase/database-compat",ow="@firebase/functions",aw="@firebase/functions-compat",cw="@firebase/installations",lw="@firebase/installations-compat",uw="@firebase/messaging",hw="@firebase/messaging-compat",dw="@firebase/performance",fw="@firebase/performance-compat",pw="@firebase/remote-config",mw="@firebase/remote-config-compat",gw="@firebase/storage",_w="@firebase/storage-compat",yw="@firebase/firestore",vw="@firebase/vertexai",Ew="@firebase/firestore-compat",Tw="firebase",ww="11.1.0";/**
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
 */const Uc="[DEFAULT]",Iw={[Fc]:"fire-core",[XT]:"fire-core-compat",[JT]:"fire-analytics",[YT]:"fire-analytics-compat",[ew]:"fire-app-check",[ZT]:"fire-app-check-compat",[tw]:"fire-auth",[nw]:"fire-auth-compat",[rw]:"fire-rtdb",[sw]:"fire-data-connect",[iw]:"fire-rtdb-compat",[ow]:"fire-fn",[aw]:"fire-fn-compat",[cw]:"fire-iid",[lw]:"fire-iid-compat",[uw]:"fire-fcm",[hw]:"fire-fcm-compat",[dw]:"fire-perf",[fw]:"fire-perf-compat",[pw]:"fire-rc",[mw]:"fire-rc-compat",[gw]:"fire-gcs",[_w]:"fire-gcs-compat",[yw]:"fire-fst",[Ew]:"fire-fst-compat",[vw]:"fire-vertex","fire-js":"fire-js",[Tw]:"fire-js-all"};/**
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
 */const xo=new Map,Aw=new Map,$c=new Map;function Cd(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if($c.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;$c.set(e,t);for(const n of xo.values())Cd(n,t);for(const n of Aw.values())Cd(n,t);return!0}function Ol(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function In(t){return t.settings!==void 0}/**
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
 */const bw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new Si("app","Firebase",bw);/**
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
 */class Rw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
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
 */const ws=ww;function wm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw er.create("bad-app-name",{appName:String(s)});if(n||(n=ym()),!n)throw er.create("no-options");const i=xo.get(s);if(i){if(No(n,i.options)&&No(r,i.config))return i;throw er.create("duplicate-app",{appName:s})}const o=new VT(s);for(const l of $c.values())o.addComponent(l);const c=new Rw(n,r,o);return xo.set(s,c),c}function Im(t=Uc){const e=xo.get(t);if(!e&&t===Uc&&ym())return wm();if(!e)throw er.create("no-app",{appName:t});return e}function tr(t,e,n){var r;let s=(r=Iw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(c.join(" "));return}fs(new Dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Sw="firebase-heartbeat-database",Cw=1,gi="firebase-heartbeat-store";let fc=null;function Am(){return fc||(fc=zT(Sw,Cw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gi)}catch(n){console.warn(n)}}}}).catch(t=>{throw er.create("idb-open",{originalErrorMessage:t.message})})),fc}async function Pw(t){try{const n=(await Am()).transaction(gi),r=await n.objectStore(gi).get(bm(t));return await n.done,r}catch(e){if(e instanceof xn)Cn.warn(e.message);else{const n=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Pd(t,e){try{const r=(await Am()).transaction(gi,"readwrite");await r.objectStore(gi).put(e,bm(t)),await r.done}catch(n){if(n instanceof xn)Cn.warn(n.message);else{const r=er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function bm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kw=1024,Dw=30*24*60*60*1e3;class Vw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Dw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kd(),{heartbeatsToSend:r,unsentEntries:s}=Ow(this._heartbeatsCache.heartbeats),i=Oo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Cn.warn(n),""}}}function kd(){return new Date().toISOString().substring(0,10)}function Ow(t,e=kw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Dd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Dd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ET()?TT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dd(t){return Oo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xw(t){fs(new Dr("platform-logger",e=>new GT(e),"PRIVATE")),fs(new Dr("heartbeat",e=>new Vw(e),"PRIVATE")),tr(Fc,Sd,t),tr(Fc,Sd,"esm2017"),tr("fire-js","")}xw("");function Nl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Rm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mw=Rm,Sm=new Si("auth","Firebase",Rm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Dl("@firebase/auth");function Lw(t,...e){Mo.logLevel<=_e.WARN&&Mo.warn(`Auth (${ws}): ${t}`,...e)}function mo(t,...e){Mo.logLevel<=_e.ERROR&&Mo.error(`Auth (${ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw Ml(t,...e)}function Jt(t,...e){return Ml(t,...e)}function xl(t,e,n){const r=Object.assign(Object.assign({},Mw()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function Cr(t){return xl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&fn(t,"argument-error"),xl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ml(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sm.create(t,...e)}function le(t,e,...n){if(!t)throw Ml(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function Pn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Uw(){return Vd()==="http:"||Vd()==="https:"}function Vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uw()||gT()||"connection"in navigator)?navigator.onLine:!0}function Bw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=fT()||_T()}get(){return $w()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=new Pi(3e4,6e4);function Fl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Is(t,e,n,r,s={}){return Pm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ci(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return mT()||(h.referrerPolicy="no-referrer"),Cm.fetch()(km(t,t.config.apiHost,n,c),h)})}async function Pm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jw),e);try{const s=new zw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw no(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw xl(t,d,h);fn(t,d)}}catch(s){if(s instanceof xn)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function Hw(t,e,n,r,s={}){const i=await Is(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function km(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ll(t.config,s):`${t.config.apiScheme}://${s}`}class zw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),qw.get())})}}function no(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ww(t,e){return Is(t,"POST","/v1/accounts:delete",e)}async function Dm(t,e){return Is(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kw(t,e=!1){const n=At(t),r=await n.getIdToken(e),s=Ul(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ri(pc(s.auth_time)),issuedAtTime:ri(pc(s.iat)),expirationTime:ri(pc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pc(t){return Number(t)*1e3}function Ul(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=gm(n);return s?JSON.parse(s):(mo("Failed to decode base64 JWT payload"),null)}catch(s){return mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Od(t){const e=Ul(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&Gw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await _i(t,Dm(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Vm(i.providerUserInfo):[],c=Yw(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new jc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Xw(t){const e=At(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Vm(t){return t.map(e=>{var{providerId:n}=e,r=Nl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t,e){const n=await Pm(t,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=km(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Cm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zw(t,e){return Is(t,"POST","/v2/accounts:revokeToken",Fl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Od(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Od(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Jw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new os;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Nl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _i(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Kw(this,e)}reload(){return Xw(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await _i(this,Ww(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(h=n.createdAt)!==null&&h!==void 0?h:void 0,F=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:q,isAnonymous:se,providerData:pe,stsTokenManager:A}=n;le(j&&A,e,"internal-error");const _=os.fromJSON(this.name,A);le(typeof j=="string",e,"internal-error"),jn(p,e.name),jn(m,e.name),le(typeof q=="boolean",e,"internal-error"),le(typeof se=="boolean",e,"internal-error"),jn(y,e.name),jn(b,e.name),jn(P,e.name),jn(D,e.name),jn(O,e.name),jn(F,e.name);const E=new bn({uid:j,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:se,photoURL:b,phoneNumber:y,tenantId:P,stsTokenManager:_,createdAt:O,lastLoginAt:F});return pe&&Array.isArray(pe)&&(E.providerData=pe.map(I=>Object.assign({},I))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new os;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Lo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Vm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new os;c.updateFromIdToken(r);const l=new bn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new Map;function Rn(t){Pn(t instanceof Function,"Expected a class definition");let e=Nd.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nd.set(t,e),e)}/**
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
 */class Om{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Om.type="NONE";const xd=Om;/**
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
 */function go(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=go(this.userKey,s.apiKey,i),this.fullPersistenceKey=go("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as(Rn(xd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Rn(xd);const o=go(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){const p=bn._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new as(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new as(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Um(e))return"Blackberry";if($m(e))return"Webos";if(xm(e))return"Safari";if((e.includes("chrome/")||Mm(e))&&!e.includes("edge/"))return"Chrome";if(Fm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nm(t=It()){return/firefox\//i.test(t)}function xm(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mm(t=It()){return/crios\//i.test(t)}function Lm(t=It()){return/iemobile/i.test(t)}function Fm(t=It()){return/android/i.test(t)}function Um(t=It()){return/blackberry/i.test(t)}function $m(t=It()){return/webos/i.test(t)}function $l(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eI(t=It()){var e;return $l(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tI(){return yT()&&document.documentMode===10}function Bm(t=It()){return $l(t)||Fm(t)||$m(t)||Um(t)||/windows phone/i.test(t)||Lm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t,e=[]){let n;switch(t){case"Browser":n=Md(It());break;case"Worker":n=`${Md(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}/**
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
 */class nI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rI(t,e={}){return Is(t,"GET","/v2/passwordPolicy",Fl(t,e))}/**
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
 */const sI=6;class iI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ld(this),this.idTokenSubscription=new Ld(this),this.beforeStateQueue=new nI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dm(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(In(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(Cr(this));const n=e?At(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rI(this),n=new iI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Zw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Lw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ma(t){return At(t)}class Ld{constructor(e){this.auth=e,this.observer=null,this.addObserver=RT(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aI(t){Bl=t}function cI(t){return Bl.loadJS(t)}function lI(){return Bl.gapiScript}function uI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t,e){const n=Ol(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(No(i,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function dI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fI(t,e,n){const r=ma(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qm(e),{host:o,port:c}=pI(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),mI()}function qm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pI(t){const e=qm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Fd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Fd(o)}}}function Fd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e){return Hw(t,"POST","/v1/accounts:signInWithIdp",Fl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="http://localhost";class Vr extends Hm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Nl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:gI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ki extends jl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ki{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ki{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ki{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),o=Ud(r);return new ps({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ud(r);return new ps({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ud(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends xn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fo(e,n,r,s)}}function zm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(t,i,e,r):i})}async function _I(t,e,n=!1){const r=await _i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ps._forOperation(t,"link",r)}/**
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
 */async function yI(t,e,n=!1){const{auth:r}=t;if(In(r.app))return Promise.reject(Cr(r));const s="reauthenticate";try{const i=await _i(t,zm(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=Ul(i.idToken);le(o,r,"internal-error");const{sub:c}=o;return le(t.uid===c,r,"user-mismatch"),ps._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(t,e,n=!1){if(In(t.app))return Promise.reject(Cr(t));const r="signIn",s=await zm(t,r,e),i=await ps._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function EI(t,e,n,r){return At(t).onIdTokenChanged(e,n,r)}function TI(t,e,n){return At(t).beforeAuthStateChanged(e,n)}const Uo="__sak";/**
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
 */class Wm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=1e3,II=10;class Km extends Wm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,II):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Km.type="LOCAL";const AI=Km;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm extends Wm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gm.type="SESSION";const Qm=Gm;/**
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
 */function bI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ga(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await bI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ga.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=ql("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function SI(t){cn().location.href=t}/**
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
 */function Xm(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function CI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kI(){return Xm()?self:null}/**
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
 */const Ym="firebaseLocalStorageDb",DI=1,$o="firebaseLocalStorage",Jm="fbase_key";class Di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _a(t,e){return t.transaction([$o],e?"readwrite":"readonly").objectStore($o)}function VI(){const t=indexedDB.deleteDatabase(Ym);return new Di(t).toPromise()}function qc(){const t=indexedDB.open(Ym,DI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($o,{keyPath:Jm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($o)?e(r):(r.close(),await VI(),e(await qc()))})})}async function $d(t,e,n){const r=_a(t,!0).put({[Jm]:e,value:n});return new Di(r).toPromise()}async function OI(t,e){const n=_a(t,!1).get(e),r=await new Di(n).toPromise();return r===void 0?null:r.value}function Bd(t,e){const n=_a(t,!0).delete(e);return new Di(n).toPromise()}const NI=800,xI=3;class Zm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ga._getInstance(kI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CI(),!this.activeServiceWorker)return;this.sender=new RI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qc();return await $d(e,Uo,"1"),await Bd(e,Uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$d(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_a(s,!1).getAll();return new Di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zm.type="LOCAL";const MI=Zm;new Pi(3e4,6e4);/**
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
 */function eg(t,e){return e?Rn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hl extends Hm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LI(t){return vI(t.auth,new Hl(t),t.bypassAuthState)}function FI(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),yI(n,new Hl(t),t.bypassAuthState)}async function UI(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),_I(n,new Hl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LI;case"linkViaPopup":case"linkViaRedirect":return UI;case"reauthViaPopup":case"reauthViaRedirect":return FI;default:fn(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=new Pi(2e3,1e4);async function BI(t,e,n){if(In(t.app))return Promise.reject(Jt(t,"operation-not-supported-in-this-environment"));const r=ma(t);Fw(t,e,jl);const s=eg(r,n);return new Ir(r,"signInViaPopup",e,s).executeNotNull()}class Ir extends tg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$I.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="pendingRedirect",_o=new Map;class qI extends tg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await HI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HI(t,e){const n=KI(e),r=WI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zI(t,e){_o.set(t._key(),e)}function WI(t){return Rn(t._redirectPersistence)}function KI(t){return go(jI,t.config.apiKey,t.name)}async function GI(t,e,n=!1){if(In(t.app))return Promise.reject(Cr(t));const r=ma(t),s=eg(r,e),o=await new qI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=10*60*1e3;class XI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ng(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QI&&this.cachedEventUids.clear(),this.cachedEventUids.has(jd(e))}saveEventToCache(e){this.cachedEventUids.add(jd(e)),this.lastProcessedEventTime=Date.now()}}function jd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ng({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ng(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(t,e={}){return Is(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,e1=/^https?/;async function t1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JI(t);for(const n of e)try{if(n1(n))return}catch{}fn(t,"unauthorized-domain")}function n1(t){const e=Bc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!e1.test(n))return!1;if(ZI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const r1=new Pi(3e4,6e4);function qd(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function s1(t){return new Promise((e,n)=>{var r,s,i;function o(){qd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qd(),n(Jt(t,"network-request-failed"))},timeout:r1.get()})}if(!((s=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=cn().gapi)===null||i===void 0)&&i.load)o();else{const c=uI("iframefcb");return cn()[c]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},cI(`${lI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw yo=null,e})}let yo=null;function i1(t){return yo=yo||s1(t),yo}/**
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
 */const o1=new Pi(5e3,15e3),a1="__/auth/iframe",c1="emulator/auth/iframe",l1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h1(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ll(e,c1):`https://${t.config.authDomain}/${a1}`,r={apiKey:e.apiKey,appName:t.name,v:ws},s=u1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ci(r).slice(1)}`}async function d1(t){const e=await i1(t),n=cn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:h1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:l1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),c=cn().setTimeout(()=>{i(o)},o1.get());function l(){cn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const f1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p1=500,m1=600,g1="_blank",_1="http://localhost";class Hd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y1(t,e,n,r=p1,s=m1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},f1),{width:r.toString(),height:s.toString(),top:i,left:o}),h=It().toLowerCase();n&&(c=Mm(h)?g1:n),Nm(h)&&(e=e||_1,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,b])=>`${m}${y}=${b},`,"");if(eI(h)&&c!=="_self")return v1(e||"",c),new Hd(null);const p=window.open(e||"",c,d);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Hd(p)}function v1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const E1="__/auth/handler",T1="emulator/auth/handler",w1=encodeURIComponent("fac");async function zd(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ws,eventId:s};if(e instanceof jl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ki){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${w1}=${encodeURIComponent(l)}`:"";return`${I1(t)}?${Ci(c).slice(1)}${h}`}function I1({config:t}){return t.emulator?Ll(t,T1):`https://${t.authDomain}/${E1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="webStorageSupport";class A1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qm,this._completeRedirectFn=GI,this._overrideRedirectResult=zI}async _openPopup(e,n,r,s){var i;Pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await zd(e,n,r,Bc(),s);return y1(e,o,ql())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zd(e,n,r,Bc(),s);return SI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await d1(e),r=new XI(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mc,{type:mc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mc];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=t1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bm()||xm()||$l()}}const b1=A1;var Wd="@firebase/auth",Kd="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function C1(t){fs(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jm(t)},h=new oI(r,s,i,l);return dI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fs(new Dr("auth-internal",e=>{const n=ma(e.getProvider("auth").getImmediate());return(r=>new R1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(Wd,Kd,S1(t)),tr(Wd,Kd,"esm2017")}/**
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
 */const P1=5*60,k1=vm("authIdTokenMaxAge")||P1;let Gd=null;const D1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>k1)return;const s=n==null?void 0:n.token;Gd!==s&&(Gd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Kt(t=Im()){const e=Ol(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hI(t,{popupRedirectResolver:b1,persistence:[MI,AI,Qm]}),r=vm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=D1(i.toString());TI(n,o,()=>o(n.currentUser)),EI(n,c=>o(c))}}const s=_m("auth");return s&&fI(n,`http://${s}`),n}function V1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",V1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});C1("Browser");var O1="firebase",N1="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(O1,N1,"app");const x1={apiKey:"AIzaSyALY2Eu62yzZPuaySeDBI3ONz3DYCq2388",authDomain:"relay-hub.firebaseapp.com",projectId:"relay-hub",storageBucket:"relay-hub.appspot.com",messagingSenderId:"1088994606939",appId:"1:1088994606939:web:17dc0c1330726f959ca47e"},Lt=wm(x1),M1=Kt(Lt),L1=async()=>{const t=new wn;try{return(await BI(M1,t)).user}catch(e){throw console.error("Error during sign-in:",e),e}},F1=He({components:{ButtonDefault:kl},emits:["onButtonClicked"],props:{},setup(){const t=fm(),e=Ie(!1);async function n(){e.value=!0;try{const r=await L1();t.setUser({uid:r.uid,displayName:r.displayName,email:r.email,photoURL:r.photoURL})}catch(r){t.setUser(null),console.error("Failed to sign in:",r)}}return{isLoading:e,onButtonClicked:n}}}),U1={class:"button-google"};function $1(t,e,n,r,s,i){const o=De("ButtonDefault");return ne(),me("div",U1,[Ee(o,{text:"Sign in with Google",isLoading:t.isLoading,onOnButtonClicked:t.onButtonClicked},{icon:Sn(()=>e[0]||(e[0]=[Ve("div",{class:"google-icon"},null,-1)])),_:1},8,["isLoading","onOnButtonClicked"])])}const B1=Qe(F1,[["render",$1],["__scopeId","data-v-e750a2f5"]]),j1=He({name:"sign-in",components:{ButtonGoogle:B1},setup(){return{}}}),q1={class:"sign-in"};function H1(t,e,n,r,s,i){const o=De("button-google");return ne(),me("div",q1,[e[0]||(e[0]=Ve("div",{class:"relay-hub"},"RelayHub",-1)),Ee(o)])}const z1=Qe(j1,[["render",H1],["__scopeId","data-v-9540f920"]]),W1=He({name:"ToggleButton",props:{modelValue:{type:Boolean,required:!0},isBlocked:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=Ie(t.modelValue),r=Ie(!1);return Sr(()=>t.modelValue,i=>{n.value=i}),{isActive:n,toggleSwitch:()=>{t.isBlocked||r.value||(n.value=!n.value,r.value=!0,setTimeout(()=>r.value=!1,500),e("update:modelValue",n.value))}}}});function K1(t,e,n,r,s,i){return ne(),me("div",{class:xr(["toggle-switch",{active:t.isActive}]),onClick:e[0]||(e[0]=(...o)=>t.toggleSwitch&&t.toggleSwitch(...o))},e[1]||(e[1]=[Ve("div",{class:"switch"},null,-1)]),2)}const G1=Qe(W1,[["render",K1],["__scopeId","data-v-17dbdf4b"]]);var Qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,rg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function E(){}E.prototype=_.prototype,A.D=_.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(I,R,S){for(var w=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)w[ot-2]=arguments[ot];return _.prototype[R].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,E){E||(E=0);var I=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)I[R]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(R=0;16>R;++R)I[R]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=A.g[0],E=A.g[1],R=A.g[2];var S=A.g[3],w=_+(S^E&(R^S))+I[0]+3614090360&4294967295;_=E+(w<<7&4294967295|w>>>25),w=S+(R^_&(E^R))+I[1]+3905402710&4294967295,S=_+(w<<12&4294967295|w>>>20),w=R+(E^S&(_^E))+I[2]+606105819&4294967295,R=S+(w<<17&4294967295|w>>>15),w=E+(_^R&(S^_))+I[3]+3250441966&4294967295,E=R+(w<<22&4294967295|w>>>10),w=_+(S^E&(R^S))+I[4]+4118548399&4294967295,_=E+(w<<7&4294967295|w>>>25),w=S+(R^_&(E^R))+I[5]+1200080426&4294967295,S=_+(w<<12&4294967295|w>>>20),w=R+(E^S&(_^E))+I[6]+2821735955&4294967295,R=S+(w<<17&4294967295|w>>>15),w=E+(_^R&(S^_))+I[7]+4249261313&4294967295,E=R+(w<<22&4294967295|w>>>10),w=_+(S^E&(R^S))+I[8]+1770035416&4294967295,_=E+(w<<7&4294967295|w>>>25),w=S+(R^_&(E^R))+I[9]+2336552879&4294967295,S=_+(w<<12&4294967295|w>>>20),w=R+(E^S&(_^E))+I[10]+4294925233&4294967295,R=S+(w<<17&4294967295|w>>>15),w=E+(_^R&(S^_))+I[11]+2304563134&4294967295,E=R+(w<<22&4294967295|w>>>10),w=_+(S^E&(R^S))+I[12]+1804603682&4294967295,_=E+(w<<7&4294967295|w>>>25),w=S+(R^_&(E^R))+I[13]+4254626195&4294967295,S=_+(w<<12&4294967295|w>>>20),w=R+(E^S&(_^E))+I[14]+2792965006&4294967295,R=S+(w<<17&4294967295|w>>>15),w=E+(_^R&(S^_))+I[15]+1236535329&4294967295,E=R+(w<<22&4294967295|w>>>10),w=_+(R^S&(E^R))+I[1]+4129170786&4294967295,_=E+(w<<5&4294967295|w>>>27),w=S+(E^R&(_^E))+I[6]+3225465664&4294967295,S=_+(w<<9&4294967295|w>>>23),w=R+(_^E&(S^_))+I[11]+643717713&4294967295,R=S+(w<<14&4294967295|w>>>18),w=E+(S^_&(R^S))+I[0]+3921069994&4294967295,E=R+(w<<20&4294967295|w>>>12),w=_+(R^S&(E^R))+I[5]+3593408605&4294967295,_=E+(w<<5&4294967295|w>>>27),w=S+(E^R&(_^E))+I[10]+38016083&4294967295,S=_+(w<<9&4294967295|w>>>23),w=R+(_^E&(S^_))+I[15]+3634488961&4294967295,R=S+(w<<14&4294967295|w>>>18),w=E+(S^_&(R^S))+I[4]+3889429448&4294967295,E=R+(w<<20&4294967295|w>>>12),w=_+(R^S&(E^R))+I[9]+568446438&4294967295,_=E+(w<<5&4294967295|w>>>27),w=S+(E^R&(_^E))+I[14]+3275163606&4294967295,S=_+(w<<9&4294967295|w>>>23),w=R+(_^E&(S^_))+I[3]+4107603335&4294967295,R=S+(w<<14&4294967295|w>>>18),w=E+(S^_&(R^S))+I[8]+1163531501&4294967295,E=R+(w<<20&4294967295|w>>>12),w=_+(R^S&(E^R))+I[13]+2850285829&4294967295,_=E+(w<<5&4294967295|w>>>27),w=S+(E^R&(_^E))+I[2]+4243563512&4294967295,S=_+(w<<9&4294967295|w>>>23),w=R+(_^E&(S^_))+I[7]+1735328473&4294967295,R=S+(w<<14&4294967295|w>>>18),w=E+(S^_&(R^S))+I[12]+2368359562&4294967295,E=R+(w<<20&4294967295|w>>>12),w=_+(E^R^S)+I[5]+4294588738&4294967295,_=E+(w<<4&4294967295|w>>>28),w=S+(_^E^R)+I[8]+2272392833&4294967295,S=_+(w<<11&4294967295|w>>>21),w=R+(S^_^E)+I[11]+1839030562&4294967295,R=S+(w<<16&4294967295|w>>>16),w=E+(R^S^_)+I[14]+4259657740&4294967295,E=R+(w<<23&4294967295|w>>>9),w=_+(E^R^S)+I[1]+2763975236&4294967295,_=E+(w<<4&4294967295|w>>>28),w=S+(_^E^R)+I[4]+1272893353&4294967295,S=_+(w<<11&4294967295|w>>>21),w=R+(S^_^E)+I[7]+4139469664&4294967295,R=S+(w<<16&4294967295|w>>>16),w=E+(R^S^_)+I[10]+3200236656&4294967295,E=R+(w<<23&4294967295|w>>>9),w=_+(E^R^S)+I[13]+681279174&4294967295,_=E+(w<<4&4294967295|w>>>28),w=S+(_^E^R)+I[0]+3936430074&4294967295,S=_+(w<<11&4294967295|w>>>21),w=R+(S^_^E)+I[3]+3572445317&4294967295,R=S+(w<<16&4294967295|w>>>16),w=E+(R^S^_)+I[6]+76029189&4294967295,E=R+(w<<23&4294967295|w>>>9),w=_+(E^R^S)+I[9]+3654602809&4294967295,_=E+(w<<4&4294967295|w>>>28),w=S+(_^E^R)+I[12]+3873151461&4294967295,S=_+(w<<11&4294967295|w>>>21),w=R+(S^_^E)+I[15]+530742520&4294967295,R=S+(w<<16&4294967295|w>>>16),w=E+(R^S^_)+I[2]+3299628645&4294967295,E=R+(w<<23&4294967295|w>>>9),w=_+(R^(E|~S))+I[0]+4096336452&4294967295,_=E+(w<<6&4294967295|w>>>26),w=S+(E^(_|~R))+I[7]+1126891415&4294967295,S=_+(w<<10&4294967295|w>>>22),w=R+(_^(S|~E))+I[14]+2878612391&4294967295,R=S+(w<<15&4294967295|w>>>17),w=E+(S^(R|~_))+I[5]+4237533241&4294967295,E=R+(w<<21&4294967295|w>>>11),w=_+(R^(E|~S))+I[12]+1700485571&4294967295,_=E+(w<<6&4294967295|w>>>26),w=S+(E^(_|~R))+I[3]+2399980690&4294967295,S=_+(w<<10&4294967295|w>>>22),w=R+(_^(S|~E))+I[10]+4293915773&4294967295,R=S+(w<<15&4294967295|w>>>17),w=E+(S^(R|~_))+I[1]+2240044497&4294967295,E=R+(w<<21&4294967295|w>>>11),w=_+(R^(E|~S))+I[8]+1873313359&4294967295,_=E+(w<<6&4294967295|w>>>26),w=S+(E^(_|~R))+I[15]+4264355552&4294967295,S=_+(w<<10&4294967295|w>>>22),w=R+(_^(S|~E))+I[6]+2734768916&4294967295,R=S+(w<<15&4294967295|w>>>17),w=E+(S^(R|~_))+I[13]+1309151649&4294967295,E=R+(w<<21&4294967295|w>>>11),w=_+(R^(E|~S))+I[4]+4149444226&4294967295,_=E+(w<<6&4294967295|w>>>26),w=S+(E^(_|~R))+I[11]+3174756917&4294967295,S=_+(w<<10&4294967295|w>>>22),w=R+(_^(S|~E))+I[2]+718787259&4294967295,R=S+(w<<15&4294967295|w>>>17),w=E+(S^(R|~_))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+S&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var E=_-this.blockSize,I=this.B,R=this.h,S=0;S<_;){if(R==0)for(;S<=E;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<_;)if(I[R++]=A.charCodeAt(S++),R==this.blockSize){s(this,I),R=0;break}}else for(;S<_;)if(I[R++]=A[S++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var E=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=E&255,E/=256;for(this.u(A),A=Array(16),_=E=0;4>_;++_)for(var I=0;32>I;I+=8)A[E++]=this.g[_]>>>I&255;return A};function i(A,_){var E=c;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=_(A)}function o(A,_){this.h=_;for(var E=[],I=!0,R=A.length-1;0<=R;R--){var S=A[R]|0;I&&S==_||(E[R]=S,I=!1)}this.g=E}var c={};function l(A){return-128<=A&&128>A?i(A,function(_){return new o([_|0],0>_?-1:0)}):new o([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return D(h(-A));for(var _=[],E=1,I=0;A>=E;I++)_[I]=A/E|0,E*=4294967296;return new o(_,0)}function d(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return D(d(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),I=p,R=0;R<A.length;R+=8){var S=Math.min(8,A.length-R),w=parseInt(A.substring(R,R+S),_);8>S?(S=h(Math.pow(_,S)),I=I.j(S).add(h(w))):(I=I.j(E),I=I.add(h(w)))}return I}var p=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();for(var A=0,_=1,E=0;E<this.g.length;E++){var I=this.i(E);A+=(0<=I?I:4294967296+I)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(b(this))return"0";if(P(this))return"-"+D(this).toString(A);for(var _=h(Math.pow(A,6)),E=this,I="";;){var R=q(E,_).g;E=O(E,R.j(_));var S=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=R,b(E))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function b(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function P(A){return A.h==-1}t.l=function(A){return A=O(this,A),P(A)?-1:b(A)?0:1};function D(A){for(var _=A.g.length,E=[],I=0;I<_;I++)E[I]=~A.g[I];return new o(E,~A.h).add(m)}t.abs=function(){return P(this)?D(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],I=0,R=0;R<=_;R++){var S=I+(this.i(R)&65535)+(A.i(R)&65535),w=(S>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);I=w>>>16,S&=65535,w&=65535,E[R]=w<<16|S}return new o(E,E[E.length-1]&-2147483648?-1:0)};function O(A,_){return A.add(D(_))}t.j=function(A){if(b(this)||b(A))return p;if(P(this))return P(A)?D(this).j(D(A)):D(D(this).j(A));if(P(A))return D(this.j(D(A)));if(0>this.l(y)&&0>A.l(y))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,E=[],I=0;I<2*_;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<A.g.length;R++){var S=this.i(I)>>>16,w=this.i(I)&65535,ot=A.i(R)>>>16,Dt=A.i(R)&65535;E[2*I+2*R]+=w*Dt,F(E,2*I+2*R),E[2*I+2*R+1]+=S*Dt,F(E,2*I+2*R+1),E[2*I+2*R+1]+=w*ot,F(E,2*I+2*R+1),E[2*I+2*R+2]+=S*ot,F(E,2*I+2*R+2)}for(I=0;I<_;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=_;I<2*_;I++)E[I]=0;return new o(E,0)};function F(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function j(A,_){this.g=A,this.h=_}function q(A,_){if(b(_))throw Error("division by zero");if(b(A))return new j(p,p);if(P(A))return _=q(D(A),_),new j(D(_.g),D(_.h));if(P(_))return _=q(A,D(_)),new j(D(_.g),_.h);if(30<A.g.length){if(P(A)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=_;0>=I.l(A);)E=se(E),I=se(I);var R=pe(E,1),S=pe(I,1);for(I=pe(I,2),E=pe(E,2);!b(I);){var w=S.add(I);0>=w.l(A)&&(R=R.add(E),S=w),I=pe(I,1),E=pe(E,1)}return _=O(A,R.j(_)),new j(R,_)}for(R=p;0<=A.l(_);){for(E=Math.max(1,Math.floor(A.m()/_.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=h(E),w=S.j(_);P(w)||0<w.l(A);)E-=I,S=h(E),w=S.j(_);b(S)&&(S=m),R=R.add(S),A=O(A,w)}return new j(R,A)}t.A=function(A){return q(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)&A.i(I);return new o(E,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)|A.i(I);return new o(E,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)^A.i(I);return new o(E,this.h^A.h)};function se(A){for(var _=A.g.length+1,E=[],I=0;I<_;I++)E[I]=A.i(I)<<1|A.i(I-1)>>>31;return new o(E,A.h)}function pe(A,_){var E=_>>5;_%=32;for(var I=A.g.length-E,R=[],S=0;S<I;S++)R[S]=0<_?A.i(S+E)>>>_|A.i(S+E+1)<<32-_:A.i(S+E);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Pr=o}).apply(typeof Qd<"u"?Qd:typeof self<"u"?self:typeof window<"u"?window:{});var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sg,zs,ig,vo,Hc,og,ag,cg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ro=="object"&&ro];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var V=f++;return{value:u(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function y(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function b(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,V){for(var W=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)W[Ne-2]=arguments[Ne];return u.prototype[C].apply(g,W)}}function P(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function D(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const C=a.length||0,V=g.length||0;a.length=C+V;for(let W=0;W<V;W++)a[C+W]=g[W]}else a.push(g)}}class O{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var se=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function pe(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function A(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let V=0;V<E.length;V++)f=E[V],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function S(a){c.setTimeout(()=>{throw a},0)}function w(){var a=Ft;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ot{constructor(){this.h=this.g=null}add(u,f){const g=Dt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Dt=new O(()=>new Me,a=>a.reset());class Me{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,ge=!1,Ft=new ot,Gt=()=>{const a=c.Promise.resolve(void 0);ae=()=>{a.then(qt)}};var qt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){S(f)}var u=Dt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ge=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Mn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function nn(a,u){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(se){e:{try{q(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nn.aa.h.call(this)}}b(nn,je);var Vt={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),X=0;function G(a,u,f,g,C){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++X,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,u,f,g,C){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var W=v(a,u,g,C);return-1<W?(u=a[W],f||(u.fa=!1)):(u=new G(u,this.src,V,!!g,C),u.fa=f,a.push(u)),u};function Oe(a,u){var f=u.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,u,void 0),V;(V=0<=C)&&Array.prototype.splice.call(g,C,1),V&&(Z(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function v(a,u,f,g){for(var C=0;C<a.length;++C){var V=a[C];if(!V.da&&V.listener==u&&V.capture==!!f&&V.ha==g)return C}return-1}var T="closure_lm_"+(1e6*Math.random()|0),k={};function U(a,u,f,g,C){if(Array.isArray(u)){for(var V=0;V<u.length;V++)U(a,u[V],f,g,C);return null}return f=te(f),a&&a[x]?a.K(u,f,h(g)?!!g.capture:!!g,C):N(a,u,f,!1,g,C)}function N(a,u,f,g,C,V){if(!u)throw Error("Invalid event type");var W=h(C)?!!C.capture:!!C,Ne=ie(a);if(Ne||(a[T]=Ne=new Te(a)),f=Ne.add(u,f,g,W,V),f.proxy)return f;if(g=$(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Mn||(C=W),C===void 0&&(C=!1),a.addEventListener(u.toString(),g,C);else if(a.attachEvent)a.attachEvent(H(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function a(f){return u.call(a.src,a.listener,f)}const u=B;return a}function K(a,u,f,g,C){if(Array.isArray(u))for(var V=0;V<u.length;V++)K(a,u[V],f,g,C);else g=h(g)?!!g.capture:!!g,f=te(f),a&&a[x]?(a=a.i,u=String(u).toString(),u in a.g&&(V=a.g[u],f=v(V,f,g,C),-1<f&&(Z(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[u],a.h--)))):a&&(a=ie(a))&&(u=a.g[u.toString()],a=-1,u&&(a=v(u,f,g,C)),(f=-1<a?u[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[x])Oe(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(H(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=ie(u))?(Oe(f,a),f.h==0&&(f.src=null,u[T]=null)):Z(a)}}}function H(a){return a in k?k[a]:k[a]="on"+a}function B(a,u){if(a.da)a=!0;else{u=new nn(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&z(a),a=f.call(g,u)}return a}function ie(a){return a=a[T],a instanceof Te?a:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(a){return typeof a=="function"?a:(a[Q]||(a[Q]=function(u){return a.handleEvent(u)}),a[Q])}function ee(){Be.call(this),this.i=new Te(this),this.M=this,this.F=null}b(ee,Be),ee.prototype[x]=!0,ee.prototype.removeEventListener=function(a,u,f,g){K(this,a,u,f,g)};function oe(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new je(u,a);else if(u instanceof je)u.target=u.target||a;else{var C=u;u=new je(g,a),I(u,C)}if(C=!0,f)for(var V=f.length-1;0<=V;V--){var W=u.g=f[V];C=Se(W,g,!0,u)&&C}if(W=u.g=a,C=Se(W,g,!0,u)&&C,C=Se(W,g,!1,u)&&C,f)for(V=0;V<f.length;V++)W=u.g=f[V],C=Se(W,g,!1,u)&&C}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)Z(f[g]);delete a.g[u],a.h--}}this.F=null},ee.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},ee.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Se(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,V=0;V<u.length;++V){var W=u[V];if(W&&!W.da&&W.capture==f){var Ne=W.listener,ct=W.ha||W.src;W.fa&&Oe(a.i,W),C=Ne.call(ct,g)!==!1&&C}}return C&&!g.defaultPrevented}function Ae(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function pt(a){a.g=Ae(()=>{a.g=null,a.i&&(a.i=!1,pt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class nt extends Be{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:pt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(a){Be.call(this),this.h=a,this.g={}}b(at,Be);var mt=[];function Ln(a){pe(a.g,function(u,f){this.g.hasOwnProperty(f)&&z(u)},a),a.g={}}at.prototype.N=function(){at.aa.N.call(this),Ln(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $r=c.JSON.stringify,bt=c.JSON.parse,Ht=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Br(){}Br.prototype.h=null;function Nu(a){return a.h||(a.h=a.i())}function xu(){}var Ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Na(){je.call(this,"d")}b(Na,je);function xa(){je.call(this,"c")}b(xa,je);var mr={},Mu=null;function Fi(){return Mu=Mu||new ee}mr.La="serverreachability";function Lu(a){je.call(this,mr.La,a)}b(Lu,je);function ks(a){const u=Fi();oe(u,new Lu(u))}mr.STAT_EVENT="statevent";function Fu(a,u){je.call(this,mr.STAT_EVENT,a),this.stat=u}b(Fu,je);function Rt(a){const u=Fi();oe(u,new Fu(u,a))}mr.Ma="timingevent";function Uu(a,u){je.call(this,mr.Ma,a),this.size=u}b(Uu,je);function Ds(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Vs(){this.g=!0}Vs.prototype.xa=function(){this.g=!1};function x_(a,u,f,g,C,V){a.info(function(){if(a.g)if(V)for(var W="",Ne=V.split("&"),ct=0;ct<Ne.length;ct++){var be=Ne[ct].split("=");if(1<be.length){var gt=be[0];be=be[1];var _t=gt.split("_");W=2<=_t.length&&_t[1]=="type"?W+(gt+"="+be+"&"):W+(gt+"=redacted&")}}else W=null;else W=V;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+W})}function M_(a,u,f,g,C,V,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+V+" "+W})}function jr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+F_(a,f)+(g?" "+g:"")})}function L_(a,u){a.info(function(){return"TIMEOUT: "+u})}Vs.prototype.info=function(){};function F_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var V=C[0];if(V!="noop"&&V!="stop"&&V!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return $r(f)}catch{return u}}var Ui={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$u={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ma;function $i(){}b($i,Br),$i.prototype.g=function(){return new XMLHttpRequest},$i.prototype.i=function(){return{}},Ma=new $i;function Fn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bu}function Bu(){this.i=null,this.g="",this.h=!1}var ju={},La={};function Fa(a,u,f){a.L=1,a.v=Hi(mn(u)),a.m=f,a.P=!0,qu(a,null)}function qu(a,u){a.F=Date.now(),Bi(a),a.A=mn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),rh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Bu,a.g=Th(a.j,f?u:null,!a.m),0<a.O&&(a.M=new nt(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(mt[0]=C.toString()),C=mt);for(var V=0;V<C.length;V++){var W=U(f,C[V],g||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),ks(),x_(a.i,a.u,a.A,a.l,a.R,a.m)}Fn.prototype.ca=function(a){a=a.target;const u=this.M;u&&gn(a)==3?u.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const _t=gn(this.g);var u=this.g.Ba();const zr=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||uh(this.g)))){this.J||_t!=4||u==7||(u==8||0>=zr?ks(3):ks(2)),Ua(this);var f=this.g.Z();this.X=f;t:if(Hu(this)){var g=uh(this.g);a="";var C=g.length,V=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gr(this),Os(this);var W="";break t}this.h.i=new c.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(V&&u==C-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,M_(this.i,this.u,this.A,this.l,this.R,_t,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,ct=this.g;if((Ne=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Ne)){var be=Ne;break t}}be=null}if(f=be)jr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$a(this,f);else{this.o=!1,this.s=3,Rt(12),gr(this),Os(this);break e}}if(this.P){f=!0;let Qt;for(;!this.J&&this.C<W.length;)if(Qt=U_(this,W),Qt==La){_t==4&&(this.s=4,Rt(14),f=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==ju){this.s=4,Rt(15),jr(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else jr(this.i,this.l,Qt,null),$a(this,Qt);if(Hu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||W.length!=0||this.h.h||(this.s=1,Rt(16),f=!1),this.o=this.o&&f,!f)jr(this.i,this.l,W,"[Invalid Chunked Response]"),gr(this),Os(this);else if(0<W.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Wa(gt),gt.M=!0,Rt(11))}}else jr(this.i,this.l,W,null),$a(this,W);_t==4&&gr(this),this.o&&!this.J&&(_t==4?_h(this.j,this):(this.o=!1,Bi(this)))}else ny(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),gr(this),Os(this)}}}catch{}finally{}};function Hu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function U_(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?La:(f=Number(u.substring(f,g)),isNaN(f)?ju:(g+=1,g+f>u.length?La:(u=u.slice(g,g+f),a.C=g+f,u)))}Fn.prototype.cancel=function(){this.J=!0,gr(this)};function Bi(a){a.S=Date.now()+a.I,zu(a,a.I)}function zu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ds(m(a.ba,a),u)}function Ua(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(L_(this.i,this.A),this.L!=2&&(ks(),Rt(17)),gr(this),this.s=2,Os(this)):zu(this,this.S-a)};function Os(a){a.j.G==0||a.J||_h(a.j,a)}function gr(a){Ua(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ln(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function $a(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Ba(f.h,a))){if(!a.K&&Ba(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Xi(f),Gi(f);else break e;za(f),Rt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ds(m(f.Za,f),6e3));if(1>=Gu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else yr(f,11)}else if((a.K||f.g==a)&&Xi(f),!F(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let be=C[u];if(f.T=be[0],be=be[1],f.G==2)if(be[0]=="c"){f.K=be[1],f.ia=be[2];const gt=be[3];gt!=null&&(f.la=gt,f.j.info("VER="+f.la));const _t=be[4];_t!=null&&(f.Aa=_t,f.j.info("SVER="+f.Aa));const zr=be[5];zr!=null&&typeof zr=="number"&&0<zr&&(g=1.5*zr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Qt=a.g;if(Qt){const Ji=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var V=g.h;V.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ja(V,V.h),V.h=null))}if(g.D){const Ka=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ka&&(g.ya=Ka,Fe(g.I,g.D,Ka))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var W=a;if(g.qa=Eh(g,g.J?g.ia:null,g.W),W.K){Qu(g.h,W);var Ne=W,ct=g.L;ct&&(Ne.I=ct),Ne.B&&(Ua(Ne),Bi(Ne)),g.g=W}else mh(g);0<f.i.length&&Qi(f)}else be[0]!="stop"&&be[0]!="close"||yr(f,7);else f.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?yr(f,7):Ha(f):be[0]!="noop"&&f.l&&f.l.ta(be),f.v=0)}}ks(4)}catch{}}var $_=class{constructor(a,u){this.g=a,this.map=u}};function Wu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ku(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gu(a){return a.h?1:a.g?a.g.size:0}function Ba(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ja(a,u){a.g?a.g.add(u):a.h=u}function Qu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Wu.prototype.cancel=function(){if(this.i=Xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return P(a.i)}function B_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function j_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function Yu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=j_(a),g=B_(a),C=g.length,V=0;V<C;V++)u.call(void 0,g[V],f&&f[V],a)}var Ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function q_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var V=a[f].substring(0,g);C=a[f].substring(g+1)}else V=a[f];u(V,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function _r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof _r){this.h=a.h,ji(this,a.j),this.o=a.o,this.g=a.g,qi(this,a.s),this.l=a.l;var u=a.i,f=new Ms;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Zu(this,f),this.m=a.m}else a&&(u=String(a).match(Ju))?(this.h=!1,ji(this,u[1]||"",!0),this.o=Ns(u[2]||""),this.g=Ns(u[3]||"",!0),qi(this,u[4]),this.l=Ns(u[5]||"",!0),Zu(this,u[6]||"",!0),this.m=Ns(u[7]||"")):(this.h=!1,this.i=new Ms(null,this.h))}_r.prototype.toString=function(){var a=[],u=this.j;u&&a.push(xs(u,eh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(xs(u,eh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(xs(f,f.charAt(0)=="/"?W_:z_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",xs(f,G_)),a.join("")};function mn(a){return new _r(a)}function ji(a,u,f){a.j=f?Ns(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function qi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Zu(a,u,f){u instanceof Ms?(a.i=u,Q_(a.i,a.h)):(f||(u=xs(u,K_)),a.i=new Ms(u,a.h))}function Fe(a,u,f){a.i.set(u,f)}function Hi(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ns(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function xs(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,H_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function H_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var eh=/[#\/\?@]/g,z_=/[#\?:]/g,W_=/[#\?]/g,K_=/[#\?@]/g,G_=/#/g;function Ms(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Un(a){a.g||(a.g=new Map,a.h=0,a.i&&q_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ms.prototype,t.add=function(a,u){Un(this),this.i=null,a=qr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function th(a,u){Un(a),u=qr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function nh(a,u){return Un(a),u=qr(a,u),a.g.has(u)}t.forEach=function(a,u){Un(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(u,C,g,this)},this)},this)},t.na=function(){Un(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const C=a[g];for(let V=0;V<C.length;V++)f.push(u[g])}return f},t.V=function(a){Un(this);let u=[];if(typeof a=="string")nh(this,a)&&(u=u.concat(this.g.get(qr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Un(this),this.i=null,a=qr(this,a),nh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function rh(a,u,f){th(a,u),0<f.length&&(a.i=null,a.g.set(qr(a,u),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const V=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var C=V;W[g]!==""&&(C+="="+encodeURIComponent(String(W[g]))),a.push(C)}}return this.i=a.join("&")};function qr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Q_(a,u){u&&!a.j&&(Un(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(th(this,g),rh(this,C,f))},a)),a.j=u}function X_(a,u){const f=new Vs;if(c.Image){const g=new Image;g.onload=y($n,f,"TestLoadImage: loaded",!0,u,g),g.onerror=y($n,f,"TestLoadImage: error",!1,u,g),g.onabort=y($n,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=y($n,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Y_(a,u){const f=new Vs,g=new AbortController,C=setTimeout(()=>{g.abort(),$n(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(C),V.ok?$n(f,"TestPingServer: ok",!0,u):$n(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),$n(f,"TestPingServer: error",!1,u)})}function $n(a,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function J_(){this.g=new Ht}function Z_(a,u,f){const g=f||"";try{Yu(a,function(C,V){let W=C;h(C)&&(W=$r(C)),u.push(g+V+"="+encodeURIComponent(W))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function zi(a){this.l=a.Ub||null,this.j=a.eb||!1}b(zi,Br),zi.prototype.g=function(){return new Wi(this.l,this.j)},zi.prototype.i=function(a){return function(){return a}}({});function Wi(a,u){ee.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Wi,ee),t=Wi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Fs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function sh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ls(this):Fs(this),this.readyState==3&&sh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ls(this))},t.Qa=function(a){this.g&&(this.response=a,Ls(this))},t.ga=function(){this.g&&Ls(this)};function Ls(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Fs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Fs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ih(a){let u="";return pe(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function qa(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=ih(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Fe(a,u,f))}function ze(a){ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(ze,ee);var ey=/^https?$/i,ty=["POST","PUT"];t=ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ma.g(),this.v=this.o?Nu(this.o):Nu(Ma),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(V){oh(this,V);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ty,u,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,W]of f)this.g.setRequestHeader(V,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lh(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){oh(this,V)}};function oh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,ah(a),Ki(a)}function ah(a){a.A||(a.A=!0,oe(a,"complete"),oe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,oe(this,"complete"),oe(this,"abort"),Ki(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ki(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ch(this):this.bb())},t.bb=function(){ch(this)};function ch(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)Ae(a.Ea,0,a);else if(oe(a,"readystatechange"),gn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=W===0){var C=String(a.D).match(Ju)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!ey.test(C?C.toLowerCase():"")}f=g}if(f)oe(a,"complete"),oe(a,"success");else{a.m=6;try{var V=2<gn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",ah(a)}}finally{Ki(a)}}}}function Ki(a,u){if(a.g){lh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||oe(a,"ready");try{f.onreadystatechange=g}catch{}}}function lh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),bt(u)}};function uh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ny(a){const u={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(F(a[g]))continue;var f=R(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=u[C]||[];u[C]=V,V.push(f)}A(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Us(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function hh(a){this.Aa=0,this.i=[],this.j=new Vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Us("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Us("baseRetryDelayMs",5e3,a),this.cb=Us("retryDelaySeedMs",1e4,a),this.Wa=Us("forwardChannelMaxRetries",2,a),this.wa=Us("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Wu(a&&a.concurrentRequestLimit),this.Da=new J_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){Rt(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Eh(this,null,this.W),Qi(this)};function Ha(a){if(dh(a),a.G==3){var u=a.U++,f=mn(a.I);if(Fe(f,"SID",a.K),Fe(f,"RID",u),Fe(f,"TYPE","terminate"),$s(a,f),u=new Fn(a,a.j,u),u.L=2,u.v=Hi(mn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Th(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Bi(u)}vh(a)}function Gi(a){a.g&&(Wa(a),a.g.cancel(),a.g=null)}function dh(a){Gi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Xi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Qi(a){if(!Ku(a.h)&&!a.s){a.s=!0;var u=a.Ga;ae||Gt(),ge||(ae(),ge=!0),Ft.add(u,a),a.B=0}}function ry(a,u){return Gu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ds(m(a.Ga,a,u),yh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Fn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=_(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(C.H=V,V=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=ph(this,C,u),f=mn(this.I),Fe(f,"RID",a),Fe(f,"CVER",22),this.D&&Fe(f,"X-HTTP-Session-Id",this.D),$s(this,f),V&&(this.O?u="headers="+encodeURIComponent(String(ih(V)))+"&"+u:this.m&&qa(f,this.m,V)),ja(this.h,C),this.Ua&&Fe(f,"TYPE","init"),this.P?(Fe(f,"$req",u),Fe(f,"SID","null"),C.T=!0,Fa(C,f,null)):Fa(C,f,u),this.G=2}}else this.G==3&&(a?fh(this,a):this.i.length==0||Ku(this.h)||fh(this))};function fh(a,u){var f;u?f=u.l:f=a.U++;const g=mn(a.I);Fe(g,"SID",a.K),Fe(g,"RID",f),Fe(g,"AID",a.T),$s(a,g),a.m&&a.o&&qa(g,a.m,a.o),f=new Fn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=ph(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ja(a.h,f),Fa(f,g,u)}function $s(a,u){a.H&&pe(a.H,function(f,g){Fe(u,g,f)}),a.l&&Yu({},function(f,g){Fe(u,g,f)})}function ph(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let V=-1;for(;;){const W=["count="+f];V==-1?0<f?(V=C[0].g,W.push("ofs="+V)):V=0:W.push("ofs="+V);let Ne=!0;for(let ct=0;ct<f;ct++){let be=C[ct].g;const gt=C[ct].map;if(be-=V,0>be)V=Math.max(0,C[ct].g-100),Ne=!1;else try{Z_(gt,W,"req"+be+"_")}catch{g&&g(gt)}}if(Ne){g=W.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function mh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ae||Gt(),ge||(ae(),ge=!0),Ft.add(u,a),a.v=0}}function za(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ds(m(a.Fa,a),yh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,gh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ds(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),Gi(this),gh(this))};function Wa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function gh(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=mn(a.qa);Fe(u,"RID","rpc"),Fe(u,"SID",a.K),Fe(u,"AID",a.T),Fe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(u,"TO",a.ja),Fe(u,"TYPE","xmlhttp"),$s(a,u),a.m&&a.o&&qa(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Hi(mn(u)),f.m=null,f.P=!0,qu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Gi(this),za(this),Rt(19))};function Xi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function _h(a,u){var f=null;if(a.g==u){Xi(a),Wa(a),a.g=null;var g=2}else if(Ba(a.h,u))f=u.D,Qu(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;g=Fi(),oe(g,new Uu(g,f)),Qi(a)}else mh(a);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&ry(a,u)||g==2&&za(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),C){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function yh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function yr(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const C=!g;g=new _r(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ji(g,"https"),Hi(g),C?X_(g.toString(),f):Y_(g.toString(),f)}else Rt(2);a.G=0,a.l&&a.l.sa(u),vh(a),dh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function vh(a){if(a.G=0,a.ka=[],a.l){const u=Xu(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Eh(a,u,f){var g=f instanceof _r?mn(f):new _r(f);if(g.g!="")u&&(g.g=u+"."+g.g),qi(g,g.s);else{var C=c.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var V=new _r(null);g&&ji(V,g),u&&(V.g=u),C&&qi(V,C),f&&(V.l=f),g=V}return f=a.D,u=a.ya,f&&u&&Fe(g,f,u),Fe(g,"VER",a.la),$s(a,g),g}function Th(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new ze(new zi({eb:f})):new ze(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wh(){}t=wh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yi(){}Yi.prototype.g=function(a,u){return new Ut(a,u)};function Ut(a,u){ee.call(this),this.g=new hh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Hr(this)}b(Ut,ee),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Ha(this.g)},Ut.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=$r(a),a=f);u.i.push(new $_(u.Ya++,a)),u.G==3&&Qi(u)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Ha(this.g),delete this.g,Ut.aa.N.call(this)};function Ih(a){Na.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}b(Ih,Na);function Ah(){xa.call(this),this.status=1}b(Ah,xa);function Hr(a){this.g=a}b(Hr,wh),Hr.prototype.ua=function(){oe(this.g,"a")},Hr.prototype.ta=function(a){oe(this.g,new Ih(a))},Hr.prototype.sa=function(a){oe(this.g,new Ah)},Hr.prototype.ra=function(){oe(this.g,"b")},Yi.prototype.createWebChannel=Yi.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,cg=function(){return new Yi},ag=function(){return Fi()},og=mr,Hc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ui.NO_ERROR=0,Ui.TIMEOUT=8,Ui.HTTP_ERROR=6,vo=Ui,$u.COMPLETE="complete",ig=$u,xu.EventType=Ps,Ps.OPEN="a",Ps.CLOSE="b",Ps.ERROR="c",Ps.MESSAGE="d",ee.prototype.listen=ee.prototype.K,zs=xu,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,sg=ze}).apply(typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{});const Xd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Dl("@firebase/firestore");function Yr(){return Or.logLevel}function Y(t,...e){if(Or.logLevel<=_e.DEBUG){const n=e.map(zl);Or.debug(`Firestore (${As}): ${t}`,...n)}}function kn(t,...e){if(Or.logLevel<=_e.ERROR){const n=e.map(zl);Or.error(`Firestore (${As}): ${t}`,...n)}}function ms(t,...e){if(Or.logLevel<=_e.WARN){const n=e.map(zl);Or.warn(`Firestore (${As}): ${t}`,...n)}}function zl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function ke(t,e){t||ce()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Q1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class X1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Y1{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new lg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new vt(e)}}class J1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Z1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new J1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ke(this.o===void 0);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new eA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=nA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function gs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new et(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new et(0,0))}static max(){return new he(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(),r===void 0?r=e.length-n:r>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends yi{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const rA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends yi{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return rA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ue.fromString(e))}static fromName(e){return new re(Ue.fromString(e).popFirst(5))}static empty(){return new re(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ue(e.slice()))}}function sA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new ir(s,re.empty(),e)}function iA(t){return new ir(t.readTime,t.key,-1)}class ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ir(he.min(),re.empty(),-1)}static max(){return new ir(he.max(),re.empty(),-1)}}function oA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==aA)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function lA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Rs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ya{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ya.oe=-1;function va(t){return t==null}function Bo(t){return t===0&&1/t==-1/0}function uA(t){return typeof t=="number"&&Number.isInteger(t)&&!Bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yd(e)),e=dA(t.get(n),e);return Yd(e)}function dA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Yd(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new so(this.root,e,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new so(this.root,e,this.comparator,!0)}}class so{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zd(this.data.getIterator())}getIteratorFrom(e){return new Zd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Zd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new jt([])}unionWith(e){let n=new tt(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class dg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dg("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const fA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function or(t){if(ke(!!t),typeof t=="string"){let e=0;const n=fA.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ar(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ea(t){const e=t.mapValue.fields.__previous_value__;return Wl(e)?Ea(e):e}function vi(t){const e=or(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wl(t)?4:gA(t)?9007199254740991:mA(t)?10:11:ce()}function pn(t,e){if(t===e)return!0;const n=cr(t);if(n!==cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vi(t).isEqual(vi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=or(s.timestampValue),c=or(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ar(s.bytesValue).isEqual(ar(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?Bo(o)===Bo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return gs(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Jd(o)!==Jd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!pn(o[l],c[l])))return!1;return!0}(t,e);default:return ce()}}function Ti(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=cr(t),r=cr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return ef(t.timestampValue,e.timestampValue);case 4:return ef(vi(t),vi(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const c=ar(i),l=ar(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ve(c[h],l[h]);if(d!==0)return d}return ve(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ve(We(i.latitude),We(o.latitude));return c!==0?c:ve(We(i.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return tf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,d;const p=i.fields||{},m=o.fields||{},y=(c=p.value)===null||c===void 0?void 0:c.arrayValue,b=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=ve(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:tf(y,b)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===io.mapValue&&o===io.mapValue)return 0;if(i===io.mapValue)return 1;if(o===io.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=ve(l[p],d[p]);if(m!==0)return m;const y=_s(c[l[p]],h[d[p]]);if(y!==0)return y}return ve(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ce()}}function ef(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=or(t),r=or(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function tf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_s(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function ys(t){return zc(t)}function zc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ar(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=zc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${zc(n.fields[o])}`;return s+"}"}(t.mapValue):ce()}function Eo(t){switch(cr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ea(t);return e?16+Eo(e):16;case 5:return 2*t.stringValue.length;case 6:return ar(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Eo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return fr(r.fields,(i,o)=>{s+=i.length+Eo(o)}),s}(t.mapValue);default:throw ce()}}function nf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wc(t){return!!t&&"integerValue"in t}function Kl(t){return!!t&&"arrayValue"in t}function rf(t){return!!t&&"nullValue"in t}function sf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function To(t){return!!t&&"mapValue"in t}function mA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function si(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=si(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=si(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!To(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=si(n)}setAll(e){let n=dt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=si(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());To(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];To(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){fr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new xt(si(this.value))}}function fg(t){const e=[];return fr(t.fields,(n,r)=>{const s=new dt([n]);if(To(r)){const i=fg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new wt(e,0,he.min(),he.min(),he.min(),xt.empty(),0)}static newFoundDocument(e,n,r,s){return new wt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new wt(e,2,n,he.min(),he.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,he.min(),he.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jo{constructor(e,n){this.position=e,this.inclusive=n}}function of(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function af(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function _A(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class pg{}class Ye extends pg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vA(e,n,r):n==="array-contains"?new wA(e,r):n==="in"?new IA(e,r):n==="not-in"?new AA(e,r):n==="array-contains-any"?new bA(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new EA(e,r):new TA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&cr(this.value)===cr(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends pg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new tn(e,n)}matches(e){return mg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mg(t){return t.op==="and"}function gg(t){return yA(t)&&mg(t)}function yA(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function Kc(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(gg(t))return t.filters.map(e=>Kc(e)).join(",");{const e=t.filters.map(n=>Kc(n)).join(",");return`${t.op}(${e})`}}function _g(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)}(t,e):t instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&_g(o,s.filters[c]),!0):!1}(t,e):void ce()}function yg(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(yg).join(" ,")+"}"}(t):"Filter"}class vA extends Ye{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class EA extends Ye{constructor(e,n){super(e,"in",n),this.keys=vg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class TA extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=vg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class wA extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kl(n)&&Ti(n.arrayValue,this.value)}}class IA extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ti(this.value.arrayValue,n)}}class AA extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ti(this.value.arrayValue,n)}}class bA extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ti(this.value.arrayValue,r))}}/**
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
 */class RA{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function cf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new RA(t,e,n,r,s,i,o)}function Gl(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.ue=n}return e.ue}function Ql(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_A(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_g(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!af(t.startAt,e.startAt)&&af(t.endAt,e.endAt)}function Gc(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function SA(t,e,n,r,s,i,o,c){return new Vi(t,e,n,r,s,i,o,c)}function Xl(t){return new Vi(t)}function lf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Eg(t){return t.collectionGroup!==null}function ii(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new tt(dt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new qo(i,r))}),n.has(dt.keyField().canonicalString())||e.ce.push(new qo(dt.keyField(),r))}return e.ce}function ln(t){const e=de(t);return e.le||(e.le=CA(e,ii(t))),e.le}function CA(t,e){if(t.limitType==="F")return cf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new qo(s.field,i)});const n=t.endAt?new jo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jo(t.startAt.position,t.startAt.inclusive):null;return cf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qc(t,e){const n=t.filters.concat([e]);return new Vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xc(t,e,n){return new Vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ta(t,e){return Ql(ln(t),ln(e))&&t.limitType===e.limitType}function Tg(t){return`${Gl(ln(t))}|lt:${t.limitType}`}function Jr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>yg(s)).join(", ")}]`),va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ys(s)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function wa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ii(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=of(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,ii(r),s)||r.endAt&&!function(o,c,l){const h=of(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,ii(r),s))}(t,e)}function PA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wg(t){return(e,n)=>{let r=!1;for(const s of ii(t)){const i=kA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kA(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?_s(l,h):ce()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new qe(re.comparator);function Dn(){return DA}const Ig=new qe(re.comparator);function Ws(...t){let e=Ig;for(const n of t)e=e.insert(n.key,n);return e}function Ag(t){let e=Ig;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ar(){return oi()}function bg(){return oi()}function oi(){return new Mr(t=>t.toString(),(t,e)=>t.isEqual(e))}const VA=new qe(re.comparator),OA=new tt(re.comparator);function ye(...t){let e=OA;for(const n of t)e=e.add(n);return e}const NA=new tt(ve);function xA(){return NA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(e)?"-0":e}}function Rg(t){return{integerValue:""+t}}function MA(t,e){return uA(e)?Rg(e):Yl(t,e)}/**
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
 */class Ia{constructor(){this._=void 0}}function LA(t,e,n){return t instanceof Ho?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wl(i)&&(i=Ea(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof wi?Cg(t,e):t instanceof Ii?Pg(t,e):function(s,i){const o=Sg(s,i),c=uf(o)+uf(s.Pe);return Wc(o)&&Wc(s.Pe)?Rg(c):Yl(s.serializer,c)}(t,e)}function FA(t,e,n){return t instanceof wi?Cg(t,e):t instanceof Ii?Pg(t,e):n}function Sg(t,e){return t instanceof zo?function(r){return Wc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ho extends Ia{}class wi extends Ia{constructor(e){super(),this.elements=e}}function Cg(t,e){const n=kg(e);for(const r of t.elements)n.some(s=>pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ii extends Ia{constructor(e){super(),this.elements=e}}function Pg(t,e){let n=kg(e);for(const r of t.elements)n=n.filter(s=>!pn(s,r));return{arrayValue:{values:n}}}class zo extends Ia{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function uf(t){return We(t.integerValue||t.doubleValue)}function kg(t){return Kl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function UA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof wi&&s instanceof wi||r instanceof Ii&&s instanceof Ii?gs(r.elements,s.elements,pn):r instanceof zo&&s instanceof zo?pn(r.Pe,s.Pe):r instanceof Ho&&s instanceof Ho}(t.transform,e.transform)}class $A{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Aa{}function Dg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jl(t.key,Zt.none()):new Oi(t.key,t.data,Zt.none());{const n=t.data,r=xt.empty();let s=new tt(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new pr(t.key,r,new jt(s.toArray()),Zt.none())}}function BA(t,e,n){t instanceof Oi?function(s,i,o){const c=s.value.clone(),l=df(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof pr?function(s,i,o){if(!wo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=df(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Vg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ai(t,e,n,r){return t instanceof Oi?function(i,o,c,l){if(!wo(i.precondition,o))return c;const h=i.value.clone(),d=ff(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof pr?function(i,o,c,l){if(!wo(i.precondition,o))return c;const h=ff(i.fieldTransforms,l,o),d=o.data;return d.setAll(Vg(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return wo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function jA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Sg(r.transform,s||null);i!=null&&(n===null&&(n=xt.empty()),n.set(r.field,i))}return n||null}function hf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gs(r,s,(i,o)=>UA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oi extends Aa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pr extends Aa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function df(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,FA(o,c,n[s]))}return r}function ff(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,LA(i,o,e))}return r}class Jl extends Aa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qA extends Aa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&BA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ai(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ai(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Dg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(n,r)=>hf(n,r))&&gs(this.baseMutations,e.baseMutations,(n,r)=>hf(n,r))}}class Zl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=function(){return VA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zl(e,n,r,s)}}/**
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
 */class zA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,we;function KA(t){switch(t){default:return ce();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Og(t){if(t===void 0)return kn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Xe.OK:return L.OK;case Xe.CANCELLED:return L.CANCELLED;case Xe.UNKNOWN:return L.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return L.INTERNAL;case Xe.UNAVAILABLE:return L.UNAVAILABLE;case Xe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Xe.NOT_FOUND:return L.NOT_FOUND;case Xe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Xe.ABORTED:return L.ABORTED;case Xe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Xe.DATA_LOSS:return L.DATA_LOSS;default:return ce()}}(we=Xe||(Xe={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function GA(){return new TextEncoder}/**
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
 */const QA=new Pr([4294967295,4294967295],0);function pf(t){const e=GA().encode(t),n=new rg;return n.update(e),new Uint8Array(n.digest())}function mf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([s,i],0)]}class eu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ks(`Invalid padding: ${n}`);if(r<0)throw new Ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Pr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Pr.fromNumber(r)));return s.compare(QA)===1&&(s=new Pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=pf(e),[r,s]=mf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new eu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Te===0)return;const n=pf(e),[r,s]=mf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ni.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ba(he.min(),s,new qe(ve),Dn(),ye())}}class Ni{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ni(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Ng{constructor(e,n){this.targetId=e,this.me=n}}class xg{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class gf{constructor(){this.fe=0,this.ge=_f(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),n=ye(),r=ye();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new Ni(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=_f()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class XA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dn(),this.qe=oo(),this.Qe=oo(),this.Ke=new qe(ve)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Gc(i))if(r===0){const o=new re(i.path);this.We(n,o,wt.newNoDocument(o,he.min()))}else ke(r===1);else{const o=this.Ze(n);if(o!==r){const c=this.Xe(e),l=c?this.et(c,e,o):1;if(l!==0){this.He(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=ar(r).toUint8Array()}catch(l){if(l instanceof dg)return ms("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new eu(o,s,i)}catch(l){return ms(l instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Ye(o);if(c){if(i.current&&Gc(c.target)){const l=new re(c.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,wt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ye();this.Qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Ye(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ba(e,n,this.Ke,this.ke,r);return this.ke=Dn(),this.qe=oo(),this.Qe=oo(),this.Ke=new qe(ve),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new gf,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new tt(ve),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new tt(ve),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new gf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function oo(){return new qe(re.comparator)}function _f(){return new qe(re.comparator)}const YA={asc:"ASCENDING",desc:"DESCENDING"},JA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZA={and:"AND",or:"OR"};class eb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yc(t,e){return t.useProto3Json||va(e)?e:{value:e}}function Wo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tb(t,e){return Wo(t,e.toTimestamp())}function un(t){return ke(!!t),he.fromTimestamp(function(n){const r=or(n);return new et(r.seconds,r.nanos)}(t))}function tu(t,e){return Jc(t,e).canonicalString()}function Jc(t,e){const n=function(s){return new Ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Lg(t){const e=Ue.fromString(t);return ke(jg(e)),e}function Zc(t,e){return tu(t.databaseId,e.path)}function gc(t,e){const n=Lg(e);if(n.get(1)!==t.databaseId.projectId)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(Ug(n))}function Fg(t,e){return tu(t.databaseId,e)}function nb(t){const e=Lg(t);return e.length===4?Ue.emptyPath():Ug(e)}function el(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ug(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yf(t,e,n){return{name:Zc(t,e),fields:n.value.mapValue.fields}}function rb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(ke(d===void 0||typeof d=="string"),ft.fromBase64String(d||"")):(ke(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ft.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?L.UNKNOWN:Og(h.code);return new J(d,h.message||"")}(o);n=new xg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gc(t,r.document.name),i=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):he.min(),c=new xt({mapValue:{fields:r.document.fields}}),l=wt.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Io(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gc(t,r.document),i=r.readTime?un(r.readTime):he.min(),o=wt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Io([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gc(t,r.document),i=r.removedTargetIds||[];n=new Io([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new WA(s,i),c=r.targetId;n=new Ng(c,o)}}return n}function sb(t,e){let n;if(e instanceof Oi)n={update:yf(t,e.key,e.value)};else if(e instanceof Jl)n={delete:Zc(t,e.key)};else if(e instanceof pr)n={update:yf(t,e.key,e.data),updateMask:fb(e.fieldMask)};else{if(!(e instanceof qA))return ce();n={verify:Zc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof wi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ii)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ce()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:tb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(t,e.precondition)),n}function ib(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?un(s.updateTime):un(i);return o.isEqual(he.min())&&(o=un(i)),new $A(o,s.transformResults||[])}(n,e))):[]}function ob(t,e){return{documents:[Fg(t,e.path)]}}function ab(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Fg(t,s);const i=function(h){if(h.length!==0)return Bg(tn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Zr(m.field),direction:ub(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Yc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:n,parent:s}}function cb(t){let e=nb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=$g(p);return m instanceof tn&&gg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(b){return new qo(es(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,va(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,y=p.values||[];return new jo(y,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,y=p.values||[];return new jo(y,m)}(n.endAt)),SA(e,s,o,i,c,"F",l,h)}function lb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $g(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=es(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=es(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(es(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(r=>$g(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(n.compositeFilter.op))}(t):ce()}function ub(t){return YA[t]}function hb(t){return JA[t]}function db(t){return ZA[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function es(t){return dt.fromServerFormat(t.fieldPath)}function Bg(t){return t instanceof Ye?function(n){if(n.op==="=="){if(sf(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NAN"}};if(rf(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sf(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NAN"}};if(rf(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(n.field),op:hb(n.op),value:n.value}}}(t):t instanceof tn?function(n){const r=n.getFilters().map(s=>Bg(s));return r.length===1?r[0]:{compositeFilter:{op:db(n.op),filters:r}}}(t):ce()}function fb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r,s,i=he.min(),o=he.min(),c=ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.ht=e}}function mb(t){const e=cb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xc(e,e.limit,"L"):e}/**
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
 */class gb{constructor(){this.ln=new _b}addToCollectionParentIndex(e,n){return this.ln.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(ir.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class _b{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Ue.comparator)).toArray()}}/**
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
 */const vf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ot{static withCacheSize(e){return new Ot(e,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(41943040,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new vs(0)}static Qn(){return new vs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class yb{constructor(e){this.Gn=e,this.buffer=new tt(Ef),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ef(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Rs(n)?Y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await bs(n)}await this.Yn(3e5)})}}class Eb{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(ya.oe);const r=new yb(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(vf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vf):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Yr()<=_e.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Tb(t,e){return new Eb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.changes=new Mr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ib{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ai(r.mutation,s,jt.empty(),et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ws();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Dn();const o=oi(),c=function(){return oi()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof pr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),ai(d.mutation,h,d.mutation.getFieldMask(),et.now())):o.set(h.key,jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new Ib(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=oi();let s=new qe((o,c)=>o-c),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||jt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||ye()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=bg();d.forEach(m=>{if(!i.has(m)){const y=Dg(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Eg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Ar());let c=-1,l=i;return o.next(h=>M.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ye())).next(d=>({batchId:c,changes:Ag(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Ws();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ws();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,l=>{const h=function(p,m){return new Vi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,wt.newInvalidDocument(d)))});let c=Ws();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&ai(d.mutation,h,jt.empty(),et.now()),wa(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return M.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:mb(s.bundledQuery),readTime:un(s.readTime)}}(n)),M.resolve()}}/**
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
 */class Rb{constructor(){this.overlays=new qe(re.comparator),this.Er=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Ar(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Ar(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=Ar(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return M.resolve(c)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zA(n,r));let i=this.Er.get(n);i===void 0&&(i=ye(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class Sb{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.dr=new tt(rt.Ar),this.Rr=new tt(rt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new rt(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new re(new Ue([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new re(new Ue([])),r=new rt(n,e),s=new rt(n,e+1);let i=ye();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new rt(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return re.comparator(e.key,n.key)||ve(e.br,n.br)}static Vr(e,n){return ve(e.br,n.br)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new tt(rt.Ar)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HA(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.vr=this.vr.add(new rt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const c=this.Cr(o.br);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ve);return n.forEach(s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],c=>{r=r.add(c.br)})}),M.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new rt(new re(i),0);let c=new tt(ve);return this.vr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.br)),!0)},o),M.resolve(this.Mr(c))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return M.forEach(n.mutations,s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new rt(n,0),s=this.vr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.Nr=e,this.docs=function(){return new qe(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const o=n.path,c=new re(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||oA(iA(d),r)<=0||(s.has(d.key)||wa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce()}Lr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kb(this)}getSize(e){return M.resolve(this.size)}}class kb extends wb{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.persistence=e,this.Br=new Mr(n=>Gl(n),Ql),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.kr=0,this.qr=new nu,this.targetCount=0,this.Qr=vs.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),M.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Un(n),M.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n){this.Kr={},this.overlays={},this.$r=new ya(0),this.Ur=!1,this.Ur=!0,this.Wr=new Sb,this.referenceDelegate=e(this),this.Gr=new Db(this),this.indexManager=new gb,this.remoteDocumentCache=function(s){return new Pb(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new pb(n),this.jr=new bb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Rb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new Cb(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new Vb(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return M.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class Vb extends cA{constructor(e){super(),this.currentSequenceNumber=e}}class ru{constructor(e){this.persistence=e,this.Zr=new nu,this.Xr=null}static ei(e){return new ru(e)}get ti(){if(this.Xr)return this.Xr;throw ce()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),M.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ti,r=>{const s=re.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return M.or([()=>M.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Ko{constructor(e,n){this.persistence=e,this.ri=new Mr(r=>hA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Tb(this,n)}static ei(e,n){return new Ko(e,n)}Hr(){}Jr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return M.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(c=>{c||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Eo(e.data.value)),n}ir(e,n,r){return M.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new su(e,n.fromCache,r,s)}}/**
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
 */class Ob{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Nb{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return vT()?8:lA(It())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Ob;return this.ts(e,n,o).next(c=>{if(i.result=c,this.Hi)return this.ns(e,n,o,c.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Yr()<=_e.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Jr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),M.resolve()):(Yr()<=_e.DEBUG&&Y("QueryEngine","Query:",Jr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Yr()<=_e.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Jr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):M.resolve())}Xi(e,n){if(lf(n))return M.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Xc(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.Zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.rs(n,c);return this.ss(n,h,o,l.readTime)?this.Xi(e,Xc(n,null,"F")):this.os(e,h,n,l)}))})))}es(e,n,r,s){return lf(n)||s.isEqual(he.min())?M.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?M.resolve(null):(Yr()<=_e.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jr(n)),this.os(e,o,n,sA(s,-1)).next(c=>c))})}rs(e,n){let r=new tt(wg(e));return n.forEach((s,i)=>{wa(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Yr()<=_e.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Jr(n)),this.Zi.getDocumentsMatchingQuery(e,n,ir.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new qe(ve),this.cs=new Mr(i=>Gl(i),Ql),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ab(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function Mb(t,e,n,r){return new xb(t,e,n,r)}async function Hg(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ye();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ts:h,removedBatchIds:o,addedBatchIds:c}))})})}function Lb(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,m=p.keys();let y=M.resolve();return m.forEach(b=>{y=y.next(()=>d.getEntry(l,b)).next(P=>{const D=h.docVersions.get(b);ke(D!==null),P.version.compareTo(D)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),d.addEntry(P)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ye();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function zg(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function Fb(t,e){const n=de(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ft.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(P,D,O){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(m,y,d)&&c.push(n.Gr.updateTargetData(i,y))});let l=Dn(),h=ye();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(Ub(i,o,e.documentUpdates).next(d=>{l=d.Is,h=d.Es})),!r.isEqual(he.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return M.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.us=s,i))}function Ub(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Y("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Is:o,Es:s}})}function $b(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Bb(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function tl(t,e,n){const r=de(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Rs(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Tf(t,e,n){const r=de(t);let s=he.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=de(l),m=p.cs.get(d);return m!==void 0?M.resolve(p.us.get(m)):p.Gr.getTargetData(h,d)}(r,o,ln(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:ye())).next(c=>(jb(r,PA(e),c),{documents:c,ds:i})))}function jb(t,e,n){let r=t.ls.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class wf{constructor(){this.activeTargetIds=xA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qb{constructor(){this._o=new wf,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new wf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Hb{uo(e){}shutdown(){}}/**
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
 */class If{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ao=null;function _c(){return ao===null?ao=function(){return 268435456+Math.round(2147483648*Math.random())}():ao++,"0x"+ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class Kb extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const c=_c(),l=this.No(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,i,o),this.Bo(n,l,h,s).then(d=>(Y("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw ms("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}ko(n,r,s,i,o,c){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+As}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=zb[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=_c();return new Promise((o,c)=>{const l=new sg;l.setWithCredentials(!0),l.listenOnce(ig.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case vo.NO_ERROR:const d=l.getResponseJson();Y(yt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case vo.TIMEOUT:Y(yt,`RPC '${e}' ${i} timed out`),c(new J(L.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const p=l.getStatus();if(Y(yt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const b=function(D){const O=D.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(O)>=0?O:L.UNKNOWN}(y.status);c(new J(b,y.message))}else c(new J(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new J(L.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{Y(yt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Y(yt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}qo(e,n,r){const s=_c(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cg(),c=ag(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");Y(yt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,y=!1;const b=new Wb({Eo:D=>{y?Y(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(Y(yt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(yt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Ao:()=>p.close()}),P=(D,O,F)=>{D.listen(O,j=>{try{F(j)}catch(q){setTimeout(()=>{throw q},0)}})};return P(p,zs.EventType.OPEN,()=>{y||(Y(yt,`RPC '${e}' stream ${s} transport opened.`),b.So())}),P(p,zs.EventType.CLOSE,()=>{y||(y=!0,Y(yt,`RPC '${e}' stream ${s} transport closed`),b.Do())}),P(p,zs.EventType.ERROR,D=>{y||(y=!0,ms(yt,`RPC '${e}' stream ${s} transport errored:`,D),b.Do(new J(L.UNAVAILABLE,"The operation could not be completed")))}),P(p,zs.EventType.MESSAGE,D=>{var O;if(!y){const F=D.data[0];ke(!!F);const j=F,q=(j==null?void 0:j.error)||((O=j[0])===null||O===void 0?void 0:O.error);if(q){Y(yt,`RPC '${e}' stream ${s} received error:`,q);const se=q.status;let pe=function(E){const I=Xe[E];if(I!==void 0)return Og(I)}(se),A=q.message;pe===void 0&&(pe=L.INTERNAL,A="Unknown error status: "+se+" with message "+q.message),y=!0,b.Do(new J(pe,A)),p.close()}else Y(yt,`RPC '${e}' stream ${s} received:`,F),b.vo(F)}}),P(c,og.STAT_EVENT,D=>{D.stat===Hc.PROXY?Y(yt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Hc.NOPROXY&&Y(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.bo()},0),b}}function yc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){return new eb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,s,i,o,c,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Wg(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new J(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gb extends Kg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=rb(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?un(o.readTime):he.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=el(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Gc(l)?{documents:ob(i,l)}:{query:ab(i,l).ct},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Mg(i,o.resumeToken);const h=Yc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=Wo(i,o.snapshotVersion.toTimestamp());const h=Yc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=lb(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=el(this.serializer),n.removeTarget=e,this.c_(n)}}class Qb extends Kg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return ke(!!e.streamToken),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=ib(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=el(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>sb(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Jc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(L.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.ko(e,Jc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(L.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Yb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(kn(n),this.C_=!1):Y("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Lr(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=de(l);h.k_.add(4),await xi(h),h.K_.set("Unknown"),h.k_.delete(4),await Sa(h)}(this))})}),this.K_=new Yb(r,s)}}async function Sa(t){if(Lr(t))for(const e of t.q_)await e(!0)}async function xi(t){for(const e of t.q_)await e(!1)}function Gg(t,e){const n=de(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),cu(n)?au(n):Ss(n).s_()&&ou(n,e))}function iu(t,e){const n=de(t),r=Ss(n);n.B_.delete(e),r.s_()&&Qg(n,e),n.B_.size===0&&(r.s_()?r.a_():Lr(n)&&n.K_.set("Unknown"))}function ou(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ss(t).V_(e)}function Qg(t,e){t.U_.xe(e),Ss(t).m_(e)}function au(t){t.U_=new XA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ss(t).start(),t.K_.F_()}function cu(t){return Lr(t)&&!Ss(t).i_()&&t.B_.size>0}function Lr(t){return de(t).k_.size===0}function Xg(t){t.U_=void 0}async function Zb(t){t.K_.set("Online")}async function eR(t){t.B_.forEach((e,n)=>{ou(t,e)})}async function tR(t,e){Xg(t),cu(t)?(t.K_.O_(e),au(t)):t.K_.set("Unknown")}async function nR(t,e,n){if(t.K_.set("Online"),e instanceof xg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.B_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.B_.delete(c),s.U_.removeTarget(c))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Go(t,r)}else if(e instanceof Io?t.U_.$e(e):e instanceof Ng?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(he.min()))try{const r=await zg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.U_.it(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.B_.get(h);d&&i.B_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.B_.get(l);if(!d)return;i.B_.set(l,d.withResumeToken(ft.EMPTY_BYTE_STRING,d.snapshotVersion)),Qg(i,l);const p=new Xn(d.target,l,h,d.sequenceNumber);ou(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Go(t,r)}}async function Go(t,e,n){if(!Rs(e))throw e;t.k_.add(1),await xi(t),t.K_.set("Offline"),n||(n=()=>zg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Sa(t)})}function Yg(t,e){return e().catch(n=>Go(t,n,e))}async function Ca(t){const e=de(t),n=lr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;rR(e);)try{const s=await $b(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,sR(e,s)}catch(s){await Go(e,s)}Jg(e)&&Zg(e)}function rR(t){return Lr(t)&&t.L_.length<10}function sR(t,e){t.L_.push(e);const n=lr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Jg(t){return Lr(t)&&!lr(t).i_()&&t.L_.length>0}function Zg(t){lr(t).start()}async function iR(t){lr(t).w_()}async function oR(t){const e=lr(t);for(const n of t.L_)e.g_(n.mutations)}async function aR(t,e,n){const r=t.L_.shift(),s=Zl.from(r,e,n);await Yg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ca(t)}async function cR(t,e){e&&lr(t).f_&&await async function(r,s){if(function(o){return KA(o)&&o!==L.ABORTED}(s.code)){const i=r.L_.shift();lr(r).__(),await Yg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ca(r)}}(t,e),Jg(t)&&Zg(t)}async function Af(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=Lr(n);n.k_.add(3),await xi(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Sa(n)}async function lR(t,e){const n=de(t);e?(n.k_.delete(2),await Sa(n)):e||(n.k_.add(2),await xi(n),n.K_.set("Unknown"))}function Ss(t){return t.W_||(t.W_=function(n,r,s){const i=de(n);return i.b_(),new Gb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:Zb.bind(null,t),mo:eR.bind(null,t),po:tR.bind(null,t),R_:nR.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),cu(t)?au(t):t.K_.set("Unknown")):(await t.W_.stop(),Xg(t))})),t.W_}function lr(t){return t.G_||(t.G_=function(n,r,s){const i=de(n);return i.b_(),new Qb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:iR.bind(null,t),po:cR.bind(null,t),p_:oR.bind(null,t),y_:aR.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Ca(t)):(await t.G_.stop(),t.L_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new lu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uu(t,e){if(kn("AsyncQueue",`${e}: ${t}`),Rs(t))return new J(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{static emptySet(e){return new ls(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Ws(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.z_=new qe(re.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):ce():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Es(e,n,ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ta(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class hR{constructor(){this.queries=Rf(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Rf(),i.forEach((o,c)=>{for(const l of c.J_)l.onError(r)})})(this,new J(L.ABORTED,"Firestore shutting down"))}}function Rf(){return new Mr(t=>Tg(t),Ta)}async function e_(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new uR,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=uu(o,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&hu(n)}async function t_(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function dR(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.J_)c.ta(s)&&(r=!0);o.H_=s}}r&&hu(n)}function fR(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function hu(t){t.X_.forEach(e=>{e.next()})}var nl,Sf;(Sf=nl||(nl={})).na="default",Sf.Cache="cache";class n_{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==nl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.key=e}}class s_{constructor(e){this.key=e}}class pR{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ye(),this.mutatedKeys=ye(),this.Va=wg(e),this.ma=new ls(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new bf,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),y=wa(this.query,p)?p:null,b=!!m&&this.mutatedKeys.has(m.key),P=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;m&&y?m.data.isEqual(y.data)?b!==P&&(r.track({type:3,doc:y}),D=!0):this.ya(m,y)||(r.track({type:2,doc:y}),D=!0,(l&&this.Va(y,l)>0||h&&this.Va(y,h)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),D=!0):m&&!y&&(r.track({type:1,doc:m}),D=!0,(l||h)&&(c=!0)),D&&(y?(o=o.add(y),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:c,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(y,b){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return P(y)-P(b)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const c=n&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,h=l!==this.Aa;return this.Aa=l,o.length!==0||h?{snapshot:new Es(this.query,e.ma,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new bf,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ye(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new s_(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new r_(r))}),n}va(e){this.da=e.ds,this.Ra=ye();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Es.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class mR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gR{constructor(e){this.key=e,this.Fa=!1}}class _R{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Mr(c=>Tg(c),Ta),this.Oa=new Map,this.Na=new Set,this.La=new qe(re.comparator),this.Ba=new Map,this.ka=new nu,this.qa={},this.Qa=new Map,this.Ka=vs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function yR(t,e,n=!0){const r=u_(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await i_(r,e,n,!0),s}async function vR(t,e){const n=u_(t);await i_(n,e,!0,!1)}async function i_(t,e,n,r){const s=await Bb(t.localStore,ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await ER(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Gg(t.remoteStore,s),c}async function ER(t,e,n,r,s){t.Ua=(p,m,y)=>async function(P,D,O,F){let j=D.view.ga(O);j.ss&&(j=await Tf(P.localStore,D.query,!1).then(({documents:A})=>D.view.ga(A,j)));const q=F&&F.targetChanges.get(D.targetId),se=F&&F.targetMismatches.get(D.targetId)!=null,pe=D.view.applyChanges(j,P.isPrimaryClient,q,se);return Pf(P,D.targetId,pe.ba),pe.snapshot}(t,p,m,y);const i=await Tf(t.localStore,e,!0),o=new pR(e,i.ds),c=o.ga(i.documents),l=Ni.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Pf(t,n,h.ba);const d=new mR(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),h.snapshot}async function TR(t,e,n){const r=de(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Ta(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await tl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&iu(r.remoteStore,s.targetId),rl(r,s.targetId)}).catch(bs)):(rl(r,s.targetId),await tl(r.localStore,s.targetId,!0))}async function wR(t,e){const n=de(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),iu(n.remoteStore,r.targetId))}async function IR(t,e,n){const r=kR(t);try{const s=await function(o,c){const l=de(o),h=et.now(),d=c.reduce((y,b)=>y.add(b.key),ye());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let b=Dn(),P=ye();return l.hs.getEntries(y,d).next(D=>{b=D,b.forEach((O,F)=>{F.isValidDocument()||(P=P.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,b)).next(D=>{p=D;const O=[];for(const F of c){const j=jA(F,p.get(F.key).overlayedDocument);j!=null&&O.push(new pr(F.key,j,fg(j.value.mapValue),Zt.exists(!0)))}return l.mutationQueue.addMutationBatch(y,h,O,c)}).next(D=>{m=D;const O=D.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(y,D.batchId,O)})}).then(()=>({batchId:m.batchId,changes:Ag(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.qa[o.currentUser.toKey()];h||(h=new qe(ve)),h=h.insert(c,l),o.qa[o.currentUser.toKey()]=h}(r,s.batchId,n),await Mi(r,s.changes),await Ca(r.remoteStore)}catch(s){const i=uu(s,"Failed to persist write");n.reject(i)}}async function o_(t,e){const n=de(t);try{const r=await Fb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?ke(o.Fa):s.removedDocuments.size>0&&(ke(o.Fa),o.Fa=!1))}),await Mi(n,r,e)}catch(r){await bs(r)}}function Cf(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const c=o.view.ea(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=de(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(c)&&(h=!0)}),h&&hu(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AR(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new qe(re.comparator);o=o.insert(i,wt.newNoDocument(i,he.min()));const c=ye().add(i),l=new ba(he.min(),new Map,new qe(ve),o,c);await o_(r,l),r.La=r.La.remove(i),r.Ba.delete(e),du(r)}else await tl(r.localStore,e,!1).then(()=>rl(r,e,n)).catch(bs)}async function bR(t,e){const n=de(t),r=e.batch.batchId;try{const s=await Lb(n.localStore,e);c_(n,r,null),a_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Mi(n,s)}catch(s){await bs(s)}}async function RR(t,e,n){const r=de(t);try{const s=await function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(ke(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);c_(r,e,n),a_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Mi(r,s)}catch(s){await bs(s)}}function a_(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function c_(t,e,n){const r=de(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function rl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||l_(t,r)})}function l_(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(iu(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),du(t))}function Pf(t,e,n){for(const r of n)r instanceof r_?(t.ka.addReference(r.key,e),SR(t,r)):r instanceof s_?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||l_(t,r.key)):ce()}function SR(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.Na.add(r),du(t))}function du(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new re(Ue.fromString(e)),r=t.Ka.next();t.Ba.set(r,new gR(n)),t.La=t.La.insert(n,r),Gg(t.remoteStore,new Xn(ln(Xl(n.path)),r,"TargetPurposeLimboResolution",ya.oe))}}async function Mi(t,e,n){const r=de(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{o.push(r.Ua(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=su.zi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(l,h){const d=de(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Wi,y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>M.forEach(m.Gi,y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!Rs(p))throw p;Y("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const y=d.us.get(m),b=y.snapshotVersion,P=y.withLastLimboFreeSnapshotVersion(b);d.us=d.us.insert(m,P)}}}(r.localStore,i))}async function CR(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await Hg(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(c=>{c.forEach(l=>{l.reject(new J(L.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mi(n,r.Ts)}}function PR(t,e){const n=de(t),r=n.Ba.get(e);if(r&&r.Fa)return ye().add(r.key);{let s=ye();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const c=n.xa.get(o);s=s.unionWith(c.view.fa)}return s}}function u_(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=o_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AR.bind(null,e),e.Ma.R_=dR.bind(null,e.eventManager),e.Ma.Wa=fR.bind(null,e.eventManager),e}function kR(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RR.bind(null,e),e}class Qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ra(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return Mb(this.persistence,new Nb,e.initialUser,this.serializer)}ja(e){return new qg(ru.ei,this.serializer)}za(e){return new qb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qo.provider={build:()=>new Qo};class DR extends Qo{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){ke(this.persistence.referenceDelegate instanceof Ko);const r=this.persistence.referenceDelegate.garbageCollector;return new vb(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new qg(r=>Ko.ei(r,n),this.serializer)}}class sl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CR.bind(null,this.syncEngine),await lR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hR}()}createDatastore(e){const n=Ra(e.databaseInfo.databaseId),r=function(i){return new Kb(i)}(e.databaseInfo);return function(i,o,c,l){return new Xb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new Jb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Cf(this.syncEngine,n,0),function(){return If.p()?new If:new Hb}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new _R(s,i,o,c,l,h);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);Y("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await xi(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}sl.provider={build:()=>new sl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class h_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=ug.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vc(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OR(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Af(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Af(e.remoteStore,s)),t._onlineComponents=e}async function OR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ms("Error using user provided cache. Falling back to memory cache: "+n),await vc(t,new Qo)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await vc(t,new DR(void 0));return t._offlineComponents}async function d_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await kf(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await kf(t,new sl))),t._onlineComponents}function NR(t){return d_(t).then(e=>e.syncEngine)}async function il(t){const e=await d_(t),n=e.eventManager;return n.onListen=yR.bind(null,e.syncEngine),n.onUnlisten=TR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=wR.bind(null,e.syncEngine),n}function xR(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new h_({next:m=>{d.eu(),o.enqueueAndForget(()=>t_(i,p)),m.fromCache&&l.source==="server"?h.reject(new J(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new n_(c,d,{includeMetadataChanges:!0,ua:!0});return e_(i,p)}(await il(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function f_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t,e,n){if(!n)throw new J(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MR(t,e,n,r){if(e===!0&&r===!0)throw new J(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vf(t){if(!re.isDocumentKey(t))throw new J(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Of(t){if(re.isDocumentKey(t))throw new J(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pa(t);throw new J(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=f_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ka{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Q1;switch(r.type){case"firstParty":return new Z1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Df.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Df.delete(n),r.terminate())}(this),Promise.resolve()}}function LR(t,e,n,r={}){var s;const i=(t=hn(t,ka))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=vt.MOCK_USER;else{c=dT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new J(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new vt(h)}t._authCredentials=new X1(new lg(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fr(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class rr extends Fr{constructor(e,n,r){super(e,n,Xl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new re(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function fu(t,e,...n){if(t=At(t),p_("collection","path",e),t instanceof ka){const r=Ue.fromString(e,...n);return Of(r),new rr(t,null,r)}{if(!(t instanceof Mt||t instanceof rr))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Of(r),new rr(t.firestore,null,r)}}function Ur(t,e,...n){if(t=At(t),arguments.length===1&&(e=ug.newId()),p_("doc","path",e),t instanceof ka){const r=Ue.fromString(e,...n);return Vf(r),new Mt(t,null,new re(r))}{if(!(t instanceof Mt||t instanceof rr))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Vf(r),new Mt(t.firestore,t instanceof rr?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Wg(this,"async_queue_retry"),this.fu=()=>{const r=yc();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=yc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new nr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Rs(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=lu.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&ce()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Mf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Nr extends ka{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new xf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xf(e),this._firestoreClient=void 0,await e}}}function m_(t,e){const n=typeof t=="object"?t:Im(),r=typeof t=="string"?t:"(default)",s=Ol(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=uT("firestore");i&&LR(s,...i)}return s}function pu(t){if(t._terminated)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||FR(t),t._firestoreClient}function FR(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new pA(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,f_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new VR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(ft.fromBase64String(e))}catch(n){throw new J(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */class _u{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=/^__.*__$/;class $R{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oi(e,this.data,n,this.fieldTransforms)}}class g_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function __(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class yu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new yu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Xo(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(__(this.Mu)&&UR.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class BR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ra(e)}$u(e,n,r,s=!1){return new yu({Mu:e,methodName:n,Ku:r,path:dt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vu(t){const e=t._freezeSettings(),n=Ra(t._databaseId);return new BR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jR(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Eu("Data must be an object, but it was:",o,r);const c=y_(r,o);let l,h;if(i.merge)l=new jt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=ol(e,p,n);if(!o.contains(m))throw new J(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);E_(d,m)||d.push(m)}l=new jt(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new $R(new xt(c),l,h)}class Va extends mu{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Va}}function qR(t,e,n,r){const s=t.$u(1,e,n);Eu("Data must be an object, but it was:",s,r);const i=[],o=xt.empty();fr(r,(l,h)=>{const d=Tu(e,l,n);h=At(h);const p=s.Bu(d);if(h instanceof Va)i.push(d);else{const m=Li(h,p);m!=null&&(i.push(d),o.set(d,m))}});const c=new jt(i);return new g_(o,c,s.fieldTransforms)}function HR(t,e,n,r,s,i){const o=t.$u(1,e,n),c=[ol(e,r,n)],l=[s];if(i.length%2!=0)throw new J(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(ol(e,i[m])),l.push(i[m+1]);const h=[],d=xt.empty();for(let m=c.length-1;m>=0;--m)if(!E_(h,c[m])){const y=c[m];let b=l[m];b=At(b);const P=o.Bu(y);if(b instanceof Va)h.push(y);else{const D=Li(b,P);D!=null&&(h.push(y),d.set(y,D))}}const p=new jt(h);return new g_(d,p,o.fieldTransforms)}function zR(t,e,n,r=!1){return Li(n,t.$u(r?4:3,e))}function Li(t,e){if(v_(t=At(t)))return Eu("Unsupported field value:",e,t),y_(t,e);if(t instanceof mu)return function(r,s){if(!__(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Li(c,s.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=At(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return MA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=et.fromDate(r);return{timestampValue:Wo(s.serializer,i)}}if(r instanceof et){const i=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wo(s.serializer,i)}}if(r instanceof gu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:Mg(s.serializer,r._byteString)};if(r instanceof Mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _u)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return Yl(c.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Pa(r)}`)}(t,e)}function y_(t,e){const n={};return hg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fr(t,(r,s)=>{const i=Li(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function v_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof gu||t instanceof Ts||t instanceof Mt||t instanceof mu||t instanceof _u)}function Eu(t,e,n){if(!v_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Pa(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function ol(t,e,n){if((e=At(e))instanceof Da)return e._internalPath;if(typeof e=="string")return Tu(t,e);throw Xo("Field path arguments must be of type string or ",t,!1,void 0,n)}const WR=new RegExp("[~\\*/\\[\\]]");function Tu(t,e,n){if(e.search(WR)>=0)throw Xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Da(...e.split("."))._internalPath}catch{throw Xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(L.INVALID_ARGUMENT,c+t+l)}function E_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KR extends T_{data(){return super.data()}}function wu(t,e){return typeof e=="string"?Tu(t,e):e instanceof Da?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Iu{}class GR extends Iu{}function Au(t,e,...n){let r=[];e instanceof Iu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof bu).length,c=i.filter(l=>l instanceof Oa).length;if(o>1||o>0&&c>0)throw new J(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Oa extends GR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Oa(e,n,r)}_apply(e){const n=this._parse(e);return I_(e._query,n),new Fr(e.firestore,e.converter,Qc(e._query,n))}_parse(e){const n=vu(e.firestore);return function(i,o,c,l,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new J(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Ff(p,d);const y=[];for(const b of p)y.push(Lf(l,i,b));m={arrayValue:{values:y}}}else m=Lf(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Ff(p,d),m=zR(c,o,p,d==="in"||d==="not-in");return Ye.create(h,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Yo(t,e,n){const r=e,s=wu("where",t);return Oa._create(s,r,n)}class bu extends Iu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)I_(o,l),o=Qc(o,l)}(e._query,n),new Fr(e.firestore,e.converter,Qc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Lf(t,e,n){if(typeof(n=At(n))=="string"){if(n==="")throw new J(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Eg(e)&&n.indexOf("/")!==-1)throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!re.isDocumentKey(r))throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nf(t,new re(r))}if(n instanceof Mt)return nf(t,n._key);throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pa(n)}.`)}function Ff(t,e){if(!Array.isArray(t)||t.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function I_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class QR{convertValue(e,n="none"){switch(cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>We(o.doubleValue));return new _u(i)}convertGeoPoint(e){return new gu(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ea(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vi(e));default:return null}}convertTimestamp(e){const n=or(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);ke(jg(r));const s=new Ei(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class A_ extends T_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ao extends A_{data(e={}){return super.data(e)}}class b_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Gs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ao(this._firestore,this._userDataWriter,r.key,r,new Gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ao(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Gs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ao(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Gs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:YR(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function YR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}class Ru extends QR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function Su(t){t=hn(t,Fr);const e=hn(t.firestore,Nr),n=pu(e),r=new Ru(e);return w_(t._query),xR(n,t._query).then(s=>new b_(e,r,t,s))}function Cu(t,e,n,...r){t=hn(t,Mt);const s=hn(t.firestore,Nr),i=vu(s);let o;return o=typeof(e=At(e))=="string"||e instanceof Da?HR(i,"updateDoc",t._key,e,n,r):qR(i,"updateDoc",t._key,e),Pu(s,[o.toMutation(t._key,Zt.exists(!0))])}function R_(t){return Pu(hn(t.firestore,Nr),[new Jl(t._key,Zt.none())])}function S_(t,e){const n=hn(t.firestore,Nr),r=Ur(t),s=XR(t.converter,e);return Pu(n,[jR(vu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function JR(t,...e){var n,r,s;t=At(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Mf(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Mf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(t instanceof Mt)h=hn(t.firestore,Nr),d=Xl(t._key.path),l={next:p=>{e[o]&&e[o](ZR(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=hn(t,Fr);h=hn(p.firestore,Nr),d=p._query;const m=new Ru(h);l={next:y=>{e[o]&&e[o](new b_(h,m,p,y))},error:e[o+1],complete:e[o+2]},w_(t._query)}return function(m,y,b,P){const D=new h_(P),O=new n_(y,D,b);return m.asyncQueue.enqueueAndForget(async()=>e_(await il(m),O)),()=>{D.eu(),m.asyncQueue.enqueueAndForget(async()=>t_(await il(m),O))}}(pu(h),d,c,l)}function Pu(t,e){return function(r,s){const i=new nr;return r.asyncQueue.enqueueAndForget(async()=>IR(await NR(r),s,i)),i.promise}(pu(t),e)}function ZR(t,e,n){const r=n.docs.get(e._key),s=new Ru(t);return new A_(t,s,e._key,r,new Gs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){As=s})(ws),fs(new Dr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Nr(new Y1(r.getProvider("auth-internal")),new tA(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),tr(Xd,"4.7.5",e),tr(Xd,"4.7.5","esm2017")})();const Cs=m_(Lt),C_=fu(Cs,"relays");async function eS(){const e=Kt(Lt).currentUser;if(!e)throw new Error("User is not authenticated");const n=fu(Cs,"relays"),r=Au(n,Yo("uid","==",e.uid));return(await Su(r)).docs.map(i=>{const o=i.data();return{id:i.id,uid:o.uid,name:o.name,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0}})}async function tS(t,e){if(!Kt(Lt).currentUser)throw new Error("User is not authenticated");const s=Ur(Cs,"relays",t);await Cu(s,{state:e})}async function nS(t,e,n){if(!Kt(Lt).currentUser)throw new Error("User is not authenticated");const i=Ur(Cs,"relays",t);await Cu(i,{name:e,maxOnTime_s:n})}async function rS(t){const n=Kt(Lt).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await S_(C_,r)).id,...r}}async function sS(t){if(!Kt(Lt).currentUser)throw new Error("User is not authenticated");const r=Ur(Cs,"relays",t);await R_(r)}async function iS(t){const n=Kt(Lt).currentUser;if(!n)throw new Error("User is not authenticated");const r=Au(C_,Yo("uid","==",n.uid),Yo("name","==",t));return(await Su(r)).empty}function oS(t,e){if(!Kt(Lt).currentUser)throw new Error("User is not authenticated");const s=Ur(Cs,"relays",t);return JR(s,i=>{if(i.exists()){const o=i.data(),c={id:i.id,uid:o.uid,name:o.name,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0};e(c)}else console.error("Relay not found")})}const ku=ha("relay",()=>{const t=Ie([]),e=Ie(!1),n=Ie(null),r=Ie({}),s=async()=>{e.value=!0,n.value=null;try{t.value=await eS(),t.value.forEach(b=>{m(b.id)})}catch(b){n.value="Failed to load relays",console.error(b)}finally{e.value=!1}},i=async(b,P,D)=>{try{await nS(b,P,D);const O=t.value.find(F=>F.id===b);O&&(O.name=P,O.maxOnTime_s=D)}catch(O){console.error("Failed to update relay config:",O)}},o=async(b,P)=>{try{await tS(b,P);const D=t.value.find(O=>O.id===b);D&&(D.state=P)}catch(D){console.error("Failed to update relay state:",D)}},c=async b=>{try{const P=await rS(b);t.value.push(P),m(P.id)}catch(P){console.error("Failed to add relay:",P)}},l=async b=>{try{await sS(b),t.value=t.value.filter(P=>P.id!==b),y(b)}catch(P){console.error("Failed to delete relay:",P)}},h=async b=>{try{return await iS(b)}catch(P){return console.error("Failed to check relay name uniqueness:",P),!1}};function d(b){return p(b.maxOnTime_s?b.maxOnTime_s:0)}function p(b){if(isNaN(b)||b<0)return"00:00:00";const P=Math.floor(b/3600),D=Math.floor(b%3600/60),O=b%60,F=String(P).padStart(2,"0"),j=String(D).padStart(2,"0"),q=String(O).padStart(2,"0");return`${F}:${j}:${q}`}const m=b=>{y(b),r.value[b]=oS(b,P=>{const D=t.value.findIndex(O=>O.id===b);D!==-1&&(t.value[D]=P)})},y=b=>{r.value[b]&&(r.value[b](),delete r.value[b])};return Il(()=>{Object.keys(r.value).forEach(b=>{y(b)})}),{relays:t,loading:e,error:n,loadRelays:s,updateRelayConfig:i,updateRelayState:o,addRelay:c,isRelayNameUnique:h,deleteRelay:l,getMaxOnTime:d,secondsToHHMMSS:p}}),aS=He({components:{ToggleButton:G1},props:{relay:{type:Object,required:!0}},setup(t){const e=ku(),n=Ie(0);let r;const s=Ie(t.relay.turnedOnAt),i=Ie(!1);wl(async()=>{await c()}),wp(()=>{clearTimeout(r)});const o=Ke(()=>{let m=t.relay.name;return t.relay.maxOnTime_s&&t.relay.maxOnTime_s>0&&(t.relay.state?m+=" - "+e.secondsToHHMMSS(n.value):m+=" - "+e.getMaxOnTime(t.relay)),m});async function c(){t.relay.maxOnTime_s!==0&&(n.value=h(),n.value!==0&&t.relay.state&&d())}async function l(m){m&&t.relay.maxOnTime_s&&(n.value=t.relay.maxOnTime_s),m?(s.value=t.relay.turnedOnAt,i.value=!0):i.value=!1,await e.updateRelayState(t.relay.id,m),!(!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0)&&(m||(clearTimeout(r),n.value=0))}function h(){if(!t.relay.turnedOnAt||!t.relay.maxOnTime_s)return 0;const m=t.relay.turnedOnAt.getTime()+t.relay.maxOnTime_s*1e3;return Math.max(0,Math.floor((m-Date.now())/1e3))}function d(){!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0||(clearTimeout(r),r=setTimeout(async()=>{n.value--,n.value!==0&&d()},1e3))}function p(){!s.value||!t.relay.turnedOnAt||s.value>=t.relay.turnedOnAt||(i.value=!1,d())}return Sr(()=>t.relay.turnedOnAt,p),{displayName:o,isBlocked:i,handleToggle:l}}}),cS={class:"relay"},lS={class:"name"};function uS(t,e,n,r,s,i){const o=De("toggle-button");return ne(),me("div",cS,[Ve("div",lS,Nt(t.displayName),1),Ee(o,{modelValue:t.$props.relay.state,isBlocked:t.isBlocked,"onUpdate:modelValue":t.handleToggle},null,8,["modelValue","isBlocked","onUpdate:modelValue"])])}const hS=Qe(aS,[["render",uS],["__scopeId","data-v-5dc99cd3"]]),dS=He({name:"SwipeableListItem",emits:["left-action","right-action"],props:{blockSwipe:{type:Boolean,default:!1}},setup(t,{emit:e}){const n=Ie(0),r=Ie(0),s=Ie(0),i=Ie(0),o=Ie(!1),c=Ie(!1);let l=100,h=Ie(!1),d=Ie(!1);const p=O=>{t.blockSwipe||(n.value=O.touches[0].clientX,r.value=O.touches[0].clientY,l=O.currentTarget.clientWidth/4,i.value=Date.now(),h.value=!1,d.value=!1)},m=O=>{if(t.blockSwipe)return;const F=O.touches[0].clientX,j=O.touches[0].clientY,q=F-n.value,se=j-r.value;if(d.value&&h.value){y(q);return}d.value||(Math.abs(q)>Math.abs(se)?(h.value=!0,d.value=!0,y(q)):(h.value=!1,d.value=!0))},y=O=>{s.value=O,Math.abs(s.value)>l*2?c.value=!0:Math.abs(s.value)>l?(c.value=!1,o.value=!0):(c.value=!1,o.value=!1)},b=()=>{if(t.blockSwipe||!h.value)return;const O=Date.now()-i.value;c.value&&O>1e3&&(s.value<0?D():P()),s.value=0,c.value=!1,o.value=!1},P=()=>{e("left-action")},D=()=>{e("right-action")};return{onTouchStart:p,onTouchMove:m,onTouchEnd:b,onLeftAction:P,onRightAction:D,translateX:s,thresholdOneHit:o}}}),fS={class:"actions actions-left"},pS={class:"actions actions-right"};function mS(t,e,n,r,s,i){return ne(),me("div",{class:"swipeable-list-item",onTouchstart:e[0]||(e[0]=(...o)=>t.onTouchStart&&t.onTouchStart(...o)),onTouchmove:e[1]||(e[1]=(...o)=>t.onTouchMove&&t.onTouchMove(...o)),onTouchend:e[2]||(e[2]=(...o)=>t.onTouchEnd&&t.onTouchEnd(...o))},[Ve("div",{class:xr(["buttons",{"direction-left":t.translateX>0,"direction-right":t.translateX<0,"threshold-one-hit":t.thresholdOneHit}])},[Ve("div",fS,[lo(t.$slots,"left-action",{},()=>[e[3]||(e[3]=Do("Edit"))])]),Ve("div",pS,[lo(t.$slots,"right-action",{},()=>[e[4]||(e[4]=Do("Delete"))])])],2),Ve("div",{class:"content",style:On({transform:`translateX(${t.translateX}px)`})},[lo(t.$slots,"default",{},void 0)],4)],32)}const gS=Qe(dS,[["render",mS],["__scopeId","data-v-b07fba68"]]),_S=He({components:{ButtonDefault:kl},emits:["isDone"],props:{allowAdvancedSettings:{type:Boolean,default:!1},existingRelay:{type:Object,default:null}},setup(t,e){const n=ku(),r=Ie(""),s=Ie(""),i=Ie("");wl(()=>{t.existingRelay&&(r.value=t.existingRelay.name,s.value=n.getMaxOnTime(t.existingRelay))});async function o(){if(!await l()||!h())return;const p=d();t.existingRelay?await n.updateRelayConfig(t.existingRelay.id,r.value.trim(),p):await n.addRelay({name:r.value.trim(),state:!1,maxOnTime_s:p}),r.value="",e.emit("isDone")}function c(){e.emit("isDone")}async function l(){return r.value.trim().length<2?(i.value="Relay name must be at least 2 characters long.",!1):t.existingRelay&&t.existingRelay.name===r.value.trim()?!0:await n.isRelayNameUnique(r.value.trim())?(i.value="",!0):(i.value="Relay name already exists.",!1)}function h(){if(!t.allowAdvancedSettings)return!0;const p=s.value.trim();if(p==="")return!0;const y=/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(p);return y||(i.value="Max on time must be in the format HH:MM:SS."),y}function d(){if(!t.allowAdvancedSettings)return 0;const p=s.value.trim(),[m,y,b]=p.split(":").map(Number);return m*3600+y*60+b}return{newRelayName:r,newMaxOnTime:s,nameError:i,saveRelay:o,abortChanges:c}}}),yS={class:"relay-editable"},vS={key:0,class:"header"},ES={key:1,class:"max-on-time"},TS={class:"action-buttons"},wS={key:2,class:"name-error"};function IS(t,e,n,r,s,i){const o=De("button-default");return ne(),me("div",yS,[t.$props.allowAdvancedSettings?(ne(),me("div",vS,"Name")):Je("",!0),Ph(Ve("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>t.newRelayName=c),type:"text",placeholder:"Relay name",class:"relay-input"},null,512),[[td,t.newRelayName]]),t.$props.allowAdvancedSettings?(ne(),me("div",ES,[e[2]||(e[2]=Ve("div",{class:"header"},"Max on time",-1)),Ph(Ve("input",{"onUpdate:modelValue":e[1]||(e[1]=c=>t.newMaxOnTime=c),type:"text",placeholder:"HH:MM:SS or keep empty",class:"max-on-time-input"},null,512),[[td,t.newMaxOnTime]])])):Je("",!0),Ve("div",TS,[Ee(o,{class:"button-save",text:"Save",onClick:t.saveRelay},null,8,["onClick"]),Ee(o,{class:"button-cancel",text:"Cancel",onClick:t.abortChanges},null,8,["onClick"])]),t.nameError?(ne(),me("div",wS,Nt(t.nameError),1)):Je("",!0)])}const AS=Qe(_S,[["render",IS],["__scopeId","data-v-5c52aaf5"]]),bS=He({components:{RelayEditable:AS,SwipeableListItem:gS,ButtonDefault:kl,Relay:hS,Spinner:Pl},emits:["requestScrollToBottom"],setup(t,e){const n=ku(),r=Ie(!1),s=Ie(""),i=Ie(!1),o=Ie([]);let c=0,l=0;oa(()=>{n.loadRelays()});const h=D=>{if(i.value)return;const O=D.touches[0];c=O.clientY,l=O.clientX},d=D=>{if(i.value)return;const O=D.touches[0],F=Math.abs(O.clientX-l),j=Math.abs(O.clientY-c);j<=F||j<=40||(i.value=!0,setTimeout(()=>e.emit("requestScrollToBottom")))};function p(){r.value=!0,setTimeout(()=>e.emit("requestScrollToBottom"))}function m(D){s.value=D;const O=n.relays.findIndex(F=>F.id===D);!o.value||!o.value[O]||setTimeout(()=>{var F;return e.emit("requestScrollToBottom",(F=o.value[O])==null?void 0:F.$el)})}async function y(D){await n.deleteRelay(D)}function b(){s.value=""}function P(){r.value=!1}return{ref_relayItems:o,relayStore:n,isAddingNewRelay:r,editableRelayId:s,isVerticallySwiped:i,startAddingRelay:p,requestEdit:m,requestDelete:y,onEditArrayDone:b,onAddNewArrayDone:P,onTouchStart:h,onTouchMove:d}}}),RS={key:1};function SS(t,e,n,r,s,i){const o=De("spinner"),c=De("relay-editable"),l=De("relay"),h=De("swipeable-list-item"),d=De("button-default");return ne(),me("div",{class:"relays",onTouchstart:e[0]||(e[0]=(...p)=>t.onTouchStart&&t.onTouchStart(...p)),onTouchmove:e[1]||(e[1]=(...p)=>t.onTouchMove&&t.onTouchMove(...p))},[t.relayStore.loading?(ne(),ut(o,{key:0,"spinner-size":"20px","with-text":!0})):Je("",!0),!t.relayStore.loading&&!t.relayStore.error?(ne(),me("div",RS,[(ne(!0),me(kt,null,Al(t.relayStore.relays,p=>(ne(),ut(h,{ref_for:!0,ref:"ref_relayItems",key:p.id,blockSwipe:t.editableRelayId.length>0||p.state||t.isAddingNewRelay,onLeftAction:m=>t.requestEdit(p.id),onRightAction:m=>t.requestDelete(p.id)},{default:Sn(()=>[t.editableRelayId&&t.editableRelayId===p.id?(ne(),ut(c,{key:p.id,allowAdvancedSettings:!0,existingRelay:p,onIsDone:t.onEditArrayDone},null,8,["existingRelay","onIsDone"])):(ne(),ut(l,{key:p.id,relay:p},null,8,["relay"]))]),_:2},1032,["blockSwipe","onLeftAction","onRightAction"]))),128))])):Je("",!0),!t.isAddingNewRelay&&t.isVerticallySwiped&&t.editableRelayId.length===0?(ne(),ut(d,{key:2,text:"Add new Relay",onOnButtonClicked:t.startAddingRelay},null,8,["onOnButtonClicked"])):Je("",!0),t.isAddingNewRelay&&t.isVerticallySwiped&&t.editableRelayId.length===0?(ne(),ut(c,{key:3,onIsDone:t.onAddNewArrayDone},null,8,["onIsDone"])):Je("",!0)],32)}const P_=Qe(bS,[["render",SS],["__scopeId","data-v-bdf8a35d"]]),Du=m_(Lt),k_=fu(Du,"schedules");async function CS(){const e=Kt(Lt).currentUser;if(!e)throw new Error("User is not authenticated");const n=Au(k_,Yo("uid","==",e.uid));return(await Su(n)).docs.map(s=>{const i=s.data();return{id:s.id,uid:i.uid,name:i.name,timeStart:i.timeStart,duration:i.duration,relays:i.relays||[],days:i.days||[]}})}async function PS(t){const n=Kt(Lt).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await S_(k_,r)).id,...r}}async function kS(t,e){if(!Kt(Lt).currentUser)throw new Error("User is not authenticated");const s=Ur(Du,"schedules",t);await Cu(s,e)}async function DS(t){if(!Kt(Lt).currentUser)throw new Error("User is not authenticated");const r=Ur(Du,"schedules",t);await R_(r)}const VS=ha("schedule",()=>{const t=Ie([]),e=Ie(!1),n=Ie(null);return{schedules:t,loading:e,error:n,loadSchedules:async()=>{e.value=!0,n.value=null;try{t.value=await CS()}catch(c){n.value="Failed to load schedules",console.error(c)}finally{e.value=!1}},addSchedule:async c=>{try{const l=await PS(c);t.value.push(l)}catch(l){console.error("Failed to add schedule:",l)}},updateSchedule:async(c,l)=>{try{await kS(c,l);const h=t.value.find(d=>d.id===c);h&&Object.assign(h,l)}catch(h){console.error("Failed to update schedule:",h)}},deleteSchedule:async c=>{try{await DS(c),t.value=t.value.filter(l=>l.id!==c)}catch(l){console.error("Failed to delete schedule:",l)}}}}),OS=He({props:{schedule:{type:Object,required:!0}},setup(t){const e=["Mo","Tu","We","Th","Fr","Sa","Su"],n=Ke(()=>{const[s,i,o]=t.schedule.timeStart.split(":").map(Number),[c,l,h]=t.schedule.duration.split(":").map(Number),d=new Date;return d.setHours(s+c),d.setMinutes(i+l),d.setSeconds(o+h),`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`}),r=Ke(()=>t.schedule.days.map(s=>s.slice(0,2)));return{endTime:n,allDays:e,selectedDays:r}}}),NS={class:"schedule-item"},xS={class:"schedule-name"},MS={class:"times"},LS={class:"schedule-time"},FS={class:"duration"},US={class:"schedule-days"};function $S(t,e,n,r,s,i){return ne(),me("div",NS,[Ve("div",xS,Nt(t.schedule.name),1),Ve("div",MS,[Ve("div",LS,Nt(t.schedule.timeStart)+" - "+Nt(t.endTime),1),Ve("div",FS,"("+Nt(t.schedule.duration)+")",1)]),Ve("div",US,[(ne(!0),me(kt,null,Al(t.allDays,o=>(ne(),me("span",{key:o,class:xr([{selected:t.selectedDays.includes(o)},"day"])},Nt(o),3))),128))])])}const BS=Qe(OS,[["render",$S],["__scopeId","data-v-f470525b"]]),jS=He({components:{Schedule:BS,Spinner:Pl},setup(){const t=VS();return oa(async()=>{await t.loadSchedules()}),{scheduleStore:t}}}),qS={class:"schedules"},HS={key:1},zS={key:0};function WS(t,e,n,r,s,i){const o=De("spinner"),c=De("Schedule");return ne(),me("div",qS,[t.scheduleStore.loading?(ne(),ut(o,{key:0,"spinner-size":"20px","with-text":!0})):Je("",!0),!t.scheduleStore.loading&&!t.scheduleStore.error?(ne(),me("div",HS,[t.scheduleStore.schedules.length?(ne(),me("div",zS,[(ne(!0),me(kt,null,Al(t.scheduleStore.schedules,l=>(ne(),ut(c,{key:l.id,schedule:l},null,8,["schedule"]))),128))])):Je("",!0)])):Je("",!0)])}const D_=Qe(jS,[["render",WS],["__scopeId","data-v-acbf9593"]]),Vu=ha("page",()=>{const t=Ie("relays"),e={home:"Relay Hub",boards:"Boards",relays:"Relay Control",schedules:"Task Schedules"},n=s=>{t.value=s},r=Ke(()=>e[t.value]||"Unknown Page");return{currentPage:t,setPage:n,currentPageTitle:r}}),KS=He({props:{title:{type:String,required:!0}},setup(){return{}}}),GS={class:"page-tite"};function QS(t,e,n,r,s,i){return ne(),me("div",GS,Nt(t.$props.title),1)}const XS=Qe(KS,[["render",QS],["__scopeId","data-v-7de7892e"]]),YS=He({components:{PageTitle:XS},setup(){return{pageStore:Vu()}}}),JS={class:"top-bar"};function ZS(t,e,n,r,s,i){const o=De("PageTitle");return ne(),me("div",JS,[Ee(o,{title:t.pageStore.currentPageTitle},null,8,["title"])])}const eC=Qe(YS,[["render",ZS],["__scopeId","data-v-12269120"]]),tC=He({props:{color:{type:String,default:"white"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconRaspberryStyle:Ke(()=>({"--icon-color":t.color,fontSize:t.fontSize}))}}}),nC={key:0,class:"text"};function rC(t,e,n,r,s,i){return ne(),me("div",{class:"icon-raspberry",style:On(t.iconRaspberryStyle)},[e[0]||(e[0]=Ve("svg",{fill:"#000000",viewBox:"-2.5 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Ve("path",{d:"m 13.656,17.338 c -0.857,0.989 -1.334,2.79 -0.709,3.371 0.6,0.449 2.2,0.391 3.385,-1.23 0.344,-0.487 0.551,-1.093 0.551,-1.747 0,-0.603 -0.175,-1.164 -0.477,-1.637 l 0.007,0.012 c -0.73,-0.555 -1.778,0.164 -2.757,1.243 z m -8.057,0.3 c -0.908,-1.04 -2.088,-1.658 -2.851,-1.2 -0.51,0.382 -0.605,1.685 0.123,2.967 1.078,1.524 2.6,1.679 3.221,1.307 0.659,-0.488 0.3,-2.137 -0.493,-3.075 z m 4.105,3.145 c -1.1,-0.026 -2.8,0.439 -2.776,1.032 -0.018,0.4 1.331,1.572 2.7,1.513 1.326,0.03 2.7,-1.139 2.682,-1.649 -0.018,-0.51 -1.5,-0.927 -2.607,-0.884 z M 9.629,6.839 c -1.275,-0.032 -2.5,0.933 -2.5,1.493 0,0.68 1.008,1.376 2.51,1.394 1.543,0.01 2.518,-0.559 2.532,-1.26 C 12.187,7.672 10.777,6.827 9.653,6.839 Z M 6.558,7.371 C 4.423,7.026 2.645,8.271 2.716,10.563 2.786,11.447 7.346,7.522 6.559,7.386 V 7.371 Z m 9.749,3.251 c 0.071,-2.277 -1.709,-3.521 -3.844,-3.176 -0.787,0.135 3.772,4.061 3.844,3.176 z m 0.364,0.824 c -1.239,-0.329 -0.42,5.049 0.588,4.615 0.551,-0.525 0.894,-1.265 0.894,-2.084 0,-1.077 -0.592,-2.015 -1.468,-2.508 l -0.014,-0.007 v -0.015 z m -14.9,4.675 c 1.007,0.45 1.827,-4.929 0.589,-4.6 -0.891,0.504 -1.483,1.445 -1.483,2.525 0,0.821 0.343,1.563 0.893,2.089 l 10e-4,10e-4 z m 9.415,-5.948 c -0.63,0.49 -1.032,1.249 -1.032,2.101 0,0.624 0.215,1.197 0.575,1.65 l -0.004,-0.005 c 0.492,0.838 1.388,1.392 2.414,1.392 0.467,0 0.908,-0.115 1.295,-0.318 L 14.419,15 c 0.631,-0.49 1.034,-1.248 1.034,-2.101 0,-0.624 -0.215,-1.197 -0.576,-1.65 l 0.004,0.005 c -0.484,-0.835 -1.374,-1.388 -2.393,-1.388 -0.476,0 -0.923,0.121 -1.314,0.333 l 0.015,-0.007 z m -3.1,0.135 C 7.713,10.109 7.27,9.993 6.8,9.993 c -1.02,0 -1.911,0.548 -2.395,1.366 l -0.007,0.013 c -0.357,0.45 -0.572,1.026 -0.572,1.652 0,0.855 0.402,1.616 1.027,2.105 l 0.006,0.004 c 0.376,0.205 0.823,0.325 1.298,0.325 1.019,0 1.909,-0.553 2.386,-1.376 L 8.55,14.069 c 0.352,-0.448 0.564,-1.019 0.564,-1.64 0,-0.853 -0.4,-1.612 -1.024,-2.1 L 8.084,10.325 Z m 4.369,7.162 c -0.077,-1.399 -1.23,-2.504 -2.641,-2.504 -0.049,0 -0.098,0.001 -0.147,0.004 H 9.674 C 9.646,14.969 9.612,14.968 9.579,14.968 c -1.423,0 -2.585,1.119 -2.653,2.526 v 0.006 0.029 c 0.078,1.399 1.232,2.504 2.643,2.504 0.049,0 0.098,-0.001 0.147,-0.004 H 9.709 c 0.035,0.002 0.076,0.003 0.117,0.003 1.413,0 2.566,-1.116 2.625,-2.514 v -0.005 -0.029 l 0.01,-0.015 z M 15.67,2.337 c -1.69,0.771 -3.14,1.756 -4.396,2.945 l 0.007,-0.007 c 0.377,1.5 2.344,1.558 3.063,1.512 C 14.205,6.743 14.093,6.646 14.03,6.521 L 14.029,6.518 C 14.209,6.398 14.85,6.502 15.297,6.263 15.126,6.233 15.045,6.202 14.968,6.063 15.4,5.968 15.781,5.808 16.124,5.591 L 16.109,5.6 C 16.076,5.605 16.039,5.609 16,5.609 c -0.132,0 -0.256,-0.037 -0.361,-0.1 l 0.003,0.002 c 0.419,-0.179 0.779,-0.4 1.103,-0.664 l -0.008,0.006 c -0.2,0 -0.406,0 -0.466,-0.075 0.336,-0.197 0.625,-0.429 0.875,-0.698 l 0.002,-0.002 c -0.272,0.045 -0.39,0.016 -0.454,-0.03 0.295,-0.226 0.544,-0.494 0.742,-0.798 l 0.007,-0.012 c -0.076,0.04 -0.166,0.063 -0.261,0.063 -0.095,0 -0.185,-0.023 -0.264,-0.064 l 0.003,0.002 c 0.091,-0.194 0.47,-0.314 0.69,-0.779 -0.073,0.019 -0.157,0.031 -0.243,0.031 -0.086,0 -0.17,-0.011 -0.25,-0.032 l 0.007,0.002 C 17.218,2.133 17.367,1.848 17.564,1.602 L 17.56,1.607 C 17.465,1.611 17.354,1.613 17.242,1.613 16.961,1.613 16.684,1.6 16.41,1.575 l 0.035,0.003 0.283,-0.285 C 16.604,1.269 16.462,1.255 16.316,1.255 c -0.297,0 -0.58,0.058 -0.839,0.164 l 0.015,-0.005 c -0.149,-0.105 0,-0.255 0.185,-0.4 -0.385,0.05 -0.734,0.138 -1.065,0.262 L 14.645,1.265 C 14.481,1.115 14.745,0.98 14.885,0.829 14.472,0.9 14.104,1.047 13.779,1.256 L 13.791,1.249 C 13.611,1.084 13.776,0.935 13.891,0.8 13.537,0.937 13.234,1.13 12.975,1.37 l 0.002,-0.002 c -0.09,-0.1 -0.209,-0.179 -0.06,-0.449 -0.291,0.162 -0.535,0.373 -0.73,0.624 l -0.004,0.005 c -0.194,-0.134 -0.119,-0.3 -0.119,-0.449 -0.285,0.253 -0.545,0.518 -0.785,0.8 L 11.27,1.91 C 11.209,1.879 11.17,1.76 11.135,1.564 10.356,2.314 9.246,4.187 10.85,4.92 12.21,3.854 13.799,3.001 15.522,2.45 L 15.629,2.42 15.67,2.345 Z m -12.259,0 C 5.242,2.92 6.831,3.778 8.219,4.879 L 8.188,4.855 C 9.788,4.105 8.681,2.232 7.906,1.499 7.865,1.693 7.821,1.828 7.771,1.858 7.522,1.566 7.264,1.301 6.991,1.055 L 6.983,1.048 c 0,0.15 0.077,0.33 -0.117,0.45 C 6.673,1.24 6.432,1.029 6.156,0.874 L 6.145,0.868 C 6.294,1.124 6.17,1.198 6.089,1.317 5.842,1.059 5.542,0.855 5.206,0.723 L 5.189,0.717 c 0.12,0.149 0.3,0.3 0.12,0.465 C 5,0.979 4.636,0.832 4.245,0.765 L 4.228,0.763 c 0.135,0.149 0.4,0.3 0.238,0.45 C 4.165,1.093 3.816,1.002 3.452,0.957 L 3.431,0.955 c 0.181,0.15 0.342,0.289 0.192,0.4 C 3.372,1.245 3.08,1.182 2.774,1.182 2.631,1.182 2.49,1.196 2.355,1.222 L 2.369,1.22 2.653,1.504 C 2.411,1.53 2.13,1.545 1.846,1.545 c -0.11,0 -0.22,-0.002 -0.33,-0.007 l 0.016,10e-4 c 0.199,0.238 0.35,0.525 0.432,0.839 l 0.003,0.015 c -0.045,0.045 -0.27,0.016 -0.483,0 0.225,0.449 0.6,0.57 0.688,0.765 C 2.096,3.199 2.006,3.223 1.911,3.223 1.816,3.223 1.725,3.199 1.647,3.157 L 1.65,3.158 C 1.869,3.465 2.115,3.731 2.391,3.963 L 2.398,3.968 C 2.315,4.007 2.217,4.029 2.115,4.029 2.051,4.029 1.988,4.02 1.929,4.004 l 0.005,0.001 c 0.251,0.269 0.537,0.5 0.851,0.69 l 0.018,0.01 C 2.743,4.775 2.532,4.774 2.324,4.78 2.639,5.04 3,5.263 3.389,5.432 L 3.418,5.443 C 3.316,5.514 3.19,5.556 3.053,5.556 3.018,5.556 2.983,5.553 2.949,5.548 h 0.004 c 0.327,0.21 0.708,0.371 1.116,0.46 L 4.092,6.012 C 4.021,6.13 3.894,6.209 3.748,6.212 4.197,6.466 4.826,6.347 5.006,6.482 4.942,6.61 4.831,6.707 4.696,6.751 L 4.692,6.752 C 5.411,6.797 7.392,6.737 7.764,5.238 6.516,4.061 5.065,3.081 3.472,2.361 L 3.373,2.321 3.413,2.337 Z M 5.145,0.1 C 5.388,0.133 5.608,0.203 5.809,0.305 L 5.797,0.3 C 6.326,0.13 6.447,0.363 6.707,0.459 7.284,0.339 7.459,0.6 7.736,0.878 L 8.058,0.869 C 8.765,1.358 9.283,2.075 9.509,2.913 L 9.515,2.938 C 9.746,2.076 10.264,1.359 10.96,0.881 l 0.012,-0.008 0.321,0.007 c 0.277,-0.28 0.452,-0.539 1.029,-0.418 0.261,-0.1 0.38,-0.33 0.911,-0.166 0.33,-0.1 0.62,-0.375 1.057,-0.045 0.131,-0.076 0.289,-0.121 0.457,-0.121 0.224,0 0.429,0.08 0.589,0.213 L 15.335,0.342 c 0.5,-0.06 0.653,0.061 0.774,0.21 0.108,0 0.809,-0.1 1.132,0.36 0.81,-0.09 1.064,0.464 0.774,0.988 0.114,0.121 0.185,0.284 0.185,0.464 0,0.204 -0.091,0.387 -0.234,0.511 l -0.001,10e-4 c 0.15,0.269 0.062,0.553 -0.27,0.913 0.014,0.055 0.023,0.117 0.023,0.182 0,0.284 -0.159,0.53 -0.393,0.655 l -0.004,0.002 c 0.06,0.51 -0.48,0.81 -0.629,0.914 -0.061,0.3 -0.181,0.584 -0.8,0.734 -0.089,0.449 -0.464,0.523 -0.824,0.614 1.309,0.619 2.199,1.929 2.199,3.446 0,0.1 -0.004,0.2 -0.012,0.298 l 0.001,-0.013 0.181,0.3 c 0.991,0.664 1.634,1.779 1.634,3.045 0,0.953 -0.365,1.821 -0.963,2.472 l 0.002,-0.003 c -0.139,0.635 -0.315,1.186 -0.535,1.713 l 0.024,-0.065 c -0.211,1.48 -1.197,2.687 -2.528,3.209 l -0.027,0.01 c -0.697,0.564 -1.506,1.025 -2.384,1.344 l -0.058,0.019 c -0.745,0.815 -1.809,1.328 -2.993,1.337 H 9.515 C 8.324,23.995 7.253,23.483 6.506,22.67 L 6.503,22.667 C 5.565,22.328 4.755,21.866 4.04,21.289 l 0.016,0.013 C 2.698,20.769 1.71,19.563 1.497,18.105 L 1.494,18.083 C 1.296,17.618 1.118,17.062 0.989,16.488 L 0.976,16.421 C 0.377,15.772 0.01,14.902 0.01,13.946 c 0,-1.265 0.644,-2.38 1.621,-3.036 l 0.013,-0.008 0.172,-0.3 C 1.809,10.517 1.805,10.418 1.805,10.318 1.805,8.801 2.694,7.491 3.981,6.882 L 4.004,6.872 C 3.645,6.782 3.284,6.707 3.181,6.257 2.566,6.107 2.446,5.823 2.381,5.523 2.231,5.418 1.692,5.123 1.752,4.595 1.513,4.465 1.353,4.215 1.353,3.928 1.353,3.861 1.362,3.797 1.378,3.735 L 1.377,3.74 C 1.063,3.394 0.977,3.095 1.107,2.825 0.963,2.702 0.873,2.52 0.873,2.317 0.873,2.136 0.945,1.971 1.062,1.851 0.777,1.326 1.032,0.757 1.841,0.851 2.158,0.386 2.864,0.492 2.967,0.492 3.088,0.342 3.252,0.207 3.746,0.267 3.908,0.134 4.117,0.053 4.345,0.053 4.51,0.053 4.665,0.095 4.8,0.169 L 4.795,0.167 C 4.903,0.07 5.044,0.008 5.2,0.001 h 10e-4 z"})],-1)),t.$props.text&&t.$props.text.length>0?(ne(),me("div",nC,Nt(t.$props.text),1)):Je("",!0)],4)}const sC=Qe(tC,[["render",rC],["__scopeId","data-v-5243a882"]]),iC=He({components:{IconRaspberry:sC,IconSchedule:dm,IconLightSwitch:hm},setup(){return{}}}),oC={class:"home"};function aC(t,e,n,r,s,i){const o=De("icon-raspberry"),c=De("router-link"),l=De("icon-light-switch"),h=De("icon-schedule");return ne(),me("div",oC,[Ee(c,{to:"/boards",class:"tile boards"},{default:Sn(()=>[Ve("span",null,[Ee(o,{text:"Boards",strokeColor:"deeppink",fontSize:"22px"})])]),_:1}),Ee(c,{to:"/relays",class:"tile relays"},{default:Sn(()=>[Ve("span",null,[Ee(l,{text:"Relays",fontSize:"22px"})])]),_:1}),Je("",!0),Ee(c,{to:"/schedules",class:"tile schedules"},{default:Sn(()=>[Ve("span",null,[Ee(h,{strokeColor:"orange",text:"Schedules",fontSize:"22px"})])]),_:1}),Je("",!0)])}const V_=Qe(iC,[["render",aC],["__scopeId","data-v-37ea29cb"]]),cC=He({setup(){return{}}}),lC={class:"boards"};function uC(t,e,n,r,s,i){return ne(),me("div",lC)}const O_=Qe(cC,[["render",uC],["__scopeId","data-v-5024b8bb"]]),hC=He({name:"App",components:{Boards:O_,Home:V_,TopBar:eC,Schedules:D_,Relays:P_,TaskBar:QE,SignIn:z1},setup(){const t=fm(),e=Vu(),n=Ie(null),r=Ke(()=>!!t.user);function s(i){n.value&&(i instanceof HTMLElement?i.scrollIntoView({behavior:"smooth",block:"end"}):n.value.scroll({top:n.value.scrollHeight,behavior:"smooth"}))}return{signedIn:r,pageStore:e,ref_body:n,scrollToBottom:s}}}),dC={class:"app"},fC={key:0,class:"signed-in"},pC={class:"body",ref:"ref_body"};function mC(t,e,n,r,s,i){const o=De("top-bar"),c=De("home"),l=De("boards"),h=De("relays"),d=De("schedules"),p=De("task-bar"),m=De("sign-in");return ne(),me("div",dC,[t.signedIn?(ne(),me("div",fC,[Ee(o),Ve("div",pC,[t.pageStore.currentPage==="home"?(ne(),ut(c,{key:0})):Je("",!0),t.pageStore.currentPage==="boards"?(ne(),ut(l,{key:1})):Je("",!0),t.pageStore.currentPage==="relays"?(ne(),ut(h,{key:2,onRequestScrollToBottom:t.scrollToBottom},null,8,["onRequestScrollToBottom"])):t.pageStore.currentPage==="schedules"?(ne(),ut(d,{key:3,onRequestScrollToBottom:t.scrollToBottom},null,8,["onRequestScrollToBottom"])):Je("",!0)],512),Ee(p)])):(ne(),ut(m,{key:1}))])}const gC=Qe(hC,[["render",mC],["__scopeId","data-v-5db62a95"]]),_C=[{path:"/home",name:"home",component:V_},{path:"/boards",name:"boards",component:O_},{path:"/relays",name:"relays",component:P_},{path:"/schedules",name:"schedules",component:D_},{path:"/:catchAll(.*)",redirect:"/relays"}],N_=VE({history:aE("/RelayHub"),routes:_C});N_.beforeEach((t,e,n)=>{Vu().setPage(t.name),n()});const Ou=Tv(gC),yC=bv();Ou.use(N_);Ou.use(yC);Ou.mount("#app");
