(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Sc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ie={},xr=[],jt=()=>{},Bm=()=>!1,bo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pc=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Cc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jm=Object.prototype.hasOwnProperty,Ee=(t,e)=>jm.call(t,e),re=Array.isArray,Mr=t=>So(t)==="[object Map]",Ld=t=>So(t)==="[object Set]",ae=t=>typeof t=="function",Fe=t=>typeof t=="string",jn=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Fd=t=>(Pe(t)||ae(t))&&ae(t.then)&&ae(t.catch),Ud=Object.prototype.toString,So=t=>Ud.call(t),qm=t=>So(t).slice(8,-1),$d=t=>So(t)==="[object Object]",Dc=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ds=Sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Po=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Hm=/-(\w)/g,Dt=Po(t=>t.replace(Hm,(e,n)=>n?n.toUpperCase():"")),Wm=/\B([A-Z])/g,qn=Po(t=>t.replace(Wm,"-$1").toLowerCase()),Co=Po(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ea=Po(t=>t?`on${Co(t)}`:""),Ln=(t,e)=>!Object.is(t,e),Hi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ha=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $u;const jd=()=>$u||($u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ei(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?Qm(r):ei(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Fe(t)||Pe(t))return t}const zm=/;(?![^(]*\))/g,Km=/:([^]+)/,Gm=/\/\*[^]*?\*\//g;function Qm(t){const e={};return t.replace(Gm,"").split(zm).forEach(n=>{if(n){const r=n.split(Km);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zr(t){let e="";if(Fe(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Zr(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xm=Sc(Jm);function qd(t){return!!t||t===""}const Hd=t=>!!(t&&t.__v_isRef===!0),ti=t=>Fe(t)?t:t==null?"":re(t)||Pe(t)&&(t.toString===Ud||!ae(t.toString))?Hd(t)?ti(t.value):JSON.stringify(t,Wd,2):String(t),Wd=(t,e)=>Hd(e)?Wd(t,e.value):Mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ta(r,i)+" =>"]=s,n),{})}:Ld(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ta(n))}:jn(e)?Ta(e):Pe(e)&&!re(e)&&!$d(e)?String(e):e,Ta=(t,e="")=>{var n;return jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class zd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Kd(t){return new zd(t)}function Gd(){return gt}function Ym(t,e=!1){gt&&gt.cleanups.push(t)}let Ae;const Ia=new WeakSet;class Qd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&gt.active&&gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ia.has(this)&&(Ia.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bu(this),Yd(this);const e=Ae,n=Nt;Ae=this,Nt=!0;try{return this.fn()}finally{Zd(this),Ae=e,Nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nc(e);this.deps=this.depsTail=void 0,Bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ia.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wa(this)&&this.run()}get dirty(){return Wa(this)}}let Jd=0,Or;function Xd(t){t.flags|=8,t.next=Or,Or=t}function kc(){Jd++}function Vc(){if(--Jd>0)return;let t;for(;Or;){let e=Or,n;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Or,Or=void 0;e;){if(n=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Yd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Nc(r),Zm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Wa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ef(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ef(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Bs))return;t.globalVersion=Bs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Wa(t)){t.flags&=-3;return}const n=Ae,r=Nt;Ae=t,Nt=!0;try{Yd(t);const s=t.fn(t._value);(e.version===0||Ln(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ae=n,Nt=r,Zd(t),t.flags&=-3}}function Nc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Nc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Nt=!0;const tf=[];function Hn(){tf.push(Nt),Nt=!1}function Wn(){const t=tf.pop();Nt=t===void 0?!0:t}function Bu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ae;Ae=void 0;try{e()}finally{Ae=n}}}let Bs=0;class e_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Oc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ae||!Nt||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new e_(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,nf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=r)}return n}trigger(e){this.version++,Bs++,this.notify(e)}notify(e){kc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vc()}}}function nf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)nf(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ro=new WeakMap,cr=Symbol(""),za=Symbol(""),js=Symbol("");function lt(t,e,n){if(Nt&&Ae){let r=ro.get(t);r||ro.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Oc),s.target=t,s.map=r,s.key=n),s.track()}}function ln(t,e,n,r,s,i){const a=ro.get(t);if(!a){Bs++;return}const c=l=>{l&&l.trigger()};if(kc(),e==="clear")a.forEach(c);else{const l=re(t),h=l&&Dc(n);if(l&&n==="length"){const f=Number(r);a.forEach((g,m)=>{(m==="length"||m===js||!jn(m)&&m>=f)&&c(g)})}else switch(n!==void 0&&c(a.get(n)),h&&c(a.get(js)),e){case"add":l?h&&c(a.get("length")):(c(a.get(cr)),Mr(t)&&c(a.get(za)));break;case"delete":l||(c(a.get(cr)),Mr(t)&&c(a.get(za)));break;case"set":Mr(t)&&c(a.get(cr));break}}Vc()}function t_(t,e){const n=ro.get(t);return n&&n.get(e)}function Sr(t){const e=_e(t);return e===t?e:(lt(e,"iterate",js),Ct(t)?e:e.map(ot))}function Do(t){return lt(t=_e(t),"iterate",js),t}const n_={__proto__:null,[Symbol.iterator](){return wa(this,Symbol.iterator,ot)},concat(...t){return Sr(this).concat(...t.map(e=>re(e)?Sr(e):e))},entries(){return wa(this,"entries",t=>(t[1]=ot(t[1]),t))},every(t,e){return Zt(this,"every",t,e,void 0,arguments)},filter(t,e){return Zt(this,"filter",t,e,n=>n.map(ot),arguments)},find(t,e){return Zt(this,"find",t,e,ot,arguments)},findIndex(t,e){return Zt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Zt(this,"findLast",t,e,ot,arguments)},findLastIndex(t,e){return Zt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Zt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Aa(this,"includes",t)},indexOf(...t){return Aa(this,"indexOf",t)},join(t){return Sr(this).join(t)},lastIndexOf(...t){return Aa(this,"lastIndexOf",t)},map(t,e){return Zt(this,"map",t,e,void 0,arguments)},pop(){return Is(this,"pop")},push(...t){return Is(this,"push",t)},reduce(t,...e){return ju(this,"reduce",t,e)},reduceRight(t,...e){return ju(this,"reduceRight",t,e)},shift(){return Is(this,"shift")},some(t,e){return Zt(this,"some",t,e,void 0,arguments)},splice(...t){return Is(this,"splice",t)},toReversed(){return Sr(this).toReversed()},toSorted(t){return Sr(this).toSorted(t)},toSpliced(...t){return Sr(this).toSpliced(...t)},unshift(...t){return Is(this,"unshift",t)},values(){return wa(this,"values",ot)}};function wa(t,e,n){const r=Do(t),s=r[e]();return r!==t&&!Ct(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const r_=Array.prototype;function Zt(t,e,n,r,s,i){const a=Do(t),c=a!==t&&!Ct(t),l=a[e];if(l!==r_[e]){const g=l.apply(t,i);return c?ot(g):g}let h=n;a!==t&&(c?h=function(g,m){return n.call(this,ot(g),m,t)}:n.length>2&&(h=function(g,m){return n.call(this,g,m,t)}));const f=l.call(a,h,r);return c&&s?s(f):f}function ju(t,e,n,r){const s=Do(t);let i=n;return s!==t&&(Ct(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,ot(c),l,t)}),s[e](i,...r)}function Aa(t,e,n){const r=_e(t);lt(r,"iterate",js);const s=r[e](...n);return(s===-1||s===!1)&&Fc(n[0])?(n[0]=_e(n[0]),r[e](...n)):s}function Is(t,e,n=[]){Hn(),kc();const r=_e(t)[e].apply(t,n);return Vc(),Wn(),r}const s_=Sc("__proto__,__v_isRef,__isVue"),rf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn));function i_(t){jn(t)||(t=String(t));const e=_e(this);return lt(e,"has",t),e.hasOwnProperty(t)}class sf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?y_:lf:i?cf:af).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=n_[n]))return l;if(n==="hasOwnProperty")return i_}const c=Reflect.get(e,n,Ne(e)?e:r);return(jn(n)?rf.has(n):s_(n))||(s||lt(e,"get",n),i)?c:Ne(c)?a&&Dc(n)?c:c.value:Pe(c)?s?uf(c):Vo(c):c}}class of extends sf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=dr(i);if(!Ct(r)&&!dr(r)&&(i=_e(i),r=_e(r)),!re(e)&&Ne(i)&&!Ne(r))return l?!1:(i.value=r,!0)}const a=re(e)&&Dc(n)?Number(n)<e.length:Ee(e,n),c=Reflect.set(e,n,r,Ne(e)?e:s);return e===_e(s)&&(a?Ln(r,i)&&ln(e,"set",n,r):ln(e,"add",n,r)),c}deleteProperty(e,n){const r=Ee(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ln(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!jn(n)||!rf.has(n))&&lt(e,"has",n),r}ownKeys(e){return lt(e,"iterate",re(e)?"length":cr),Reflect.ownKeys(e)}}class o_ extends sf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const a_=new of,c_=new o_,l_=new of(!0);const xc=t=>t,ko=t=>Reflect.getPrototypeOf(t);function Ni(t,e,n=!1,r=!1){t=t.__v_raw;const s=_e(t),i=_e(e);n||(Ln(e,i)&&lt(s,"get",e),lt(s,"get",i));const{has:a}=ko(s),c=r?xc:n?$c:ot;if(a.call(s,e))return c(t.get(e));if(a.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Oi(t,e=!1){const n=this.__v_raw,r=_e(n),s=_e(t);return e||(Ln(t,s)&&lt(r,"has",t),lt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function xi(t,e=!1){return t=t.__v_raw,!e&&lt(_e(t),"iterate",cr),Reflect.get(t,"size",t)}function qu(t,e=!1){!e&&!Ct(t)&&!dr(t)&&(t=_e(t));const n=_e(this);return ko(n).has.call(n,t)||(n.add(t),ln(n,"add",t,t)),this}function Hu(t,e,n=!1){!n&&!Ct(e)&&!dr(e)&&(e=_e(e));const r=_e(this),{has:s,get:i}=ko(r);let a=s.call(r,t);a||(t=_e(t),a=s.call(r,t));const c=i.call(r,t);return r.set(t,e),a?Ln(e,c)&&ln(r,"set",t,e):ln(r,"add",t,e),this}function Wu(t){const e=_e(this),{has:n,get:r}=ko(e);let s=n.call(e,t);s||(t=_e(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ln(e,"delete",t,void 0),i}function zu(){const t=_e(this),e=t.size!==0,n=t.clear();return e&&ln(t,"clear",void 0,void 0),n}function Mi(t,e){return function(r,s){const i=this,a=i.__v_raw,c=_e(a),l=e?xc:t?$c:ot;return!t&&lt(c,"iterate",cr),a.forEach((h,f)=>r.call(s,l(h),l(f),i))}}function Li(t,e,n){return function(...r){const s=this.__v_raw,i=_e(s),a=Mr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),f=n?xc:e?$c:ot;return!e&&lt(i,"iterate",l?za:cr),{next(){const{value:g,done:m}=h.next();return m?{value:g,done:m}:{value:c?[f(g[0]),f(g[1])]:f(g),done:m}},[Symbol.iterator](){return this}}}}function wn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function u_(){const t={get(i){return Ni(this,i)},get size(){return xi(this)},has:Oi,add:qu,set:Hu,delete:Wu,clear:zu,forEach:Mi(!1,!1)},e={get(i){return Ni(this,i,!1,!0)},get size(){return xi(this)},has:Oi,add(i){return qu.call(this,i,!0)},set(i,a){return Hu.call(this,i,a,!0)},delete:Wu,clear:zu,forEach:Mi(!1,!0)},n={get(i){return Ni(this,i,!0)},get size(){return xi(this,!0)},has(i){return Oi.call(this,i,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:Mi(!0,!1)},r={get(i){return Ni(this,i,!0,!0)},get size(){return xi(this,!0)},has(i){return Oi.call(this,i,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:Mi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Li(i,!1,!1),n[i]=Li(i,!0,!1),e[i]=Li(i,!1,!0),r[i]=Li(i,!0,!0)}),[t,n,e,r]}const[h_,d_,f_,p_]=u_();function Mc(t,e){const n=e?t?p_:f_:t?d_:h_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ee(n,s)&&s in r?n:r,s,i)}const g_={get:Mc(!1,!1)},m_={get:Mc(!1,!0)},__={get:Mc(!0,!1)};const af=new WeakMap,cf=new WeakMap,lf=new WeakMap,y_=new WeakMap;function v_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E_(t){return t.__v_skip||!Object.isExtensible(t)?0:v_(qm(t))}function Vo(t){return dr(t)?t:Lc(t,!1,a_,g_,af)}function T_(t){return Lc(t,!1,l_,m_,cf)}function uf(t){return Lc(t,!0,c_,__,lf)}function Lc(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=E_(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function Vn(t){return dr(t)?Vn(t.__v_raw):!!(t&&t.__v_isReactive)}function dr(t){return!!(t&&t.__v_isReadonly)}function Ct(t){return!!(t&&t.__v_isShallow)}function Fc(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function Uc(t){return!Ee(t,"__v_skip")&&Object.isExtensible(t)&&Bd(t,"__v_skip",!0),t}const ot=t=>Pe(t)?Vo(t):t,$c=t=>Pe(t)?uf(t):t;function Ne(t){return t?t.__v_isRef===!0:!1}function xe(t){return I_(t,!1)}function I_(t,e){return Ne(t)?t:new w_(t,e)}class w_{constructor(e,n){this.dep=new Oc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:ot(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ct(e)||dr(e);e=r?e:_e(e),Ln(e,n)&&(this._rawValue=e,this._value=r?e:ot(e),this.dep.trigger())}}function A_(t){return Ne(t)?t.value:t}const R_={get:(t,e,n)=>e==="__v_raw"?t:A_(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ne(s)&&!Ne(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function hf(t){return Vn(t)?t:new Proxy(t,R_)}function b_(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=P_(t,n);return e}class S_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return t_(_e(this._object),this._key)}}function P_(t,e,n){const r=t[e];return Ne(r)?r:new S_(t,e,n)}class C_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Oc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return Xd(this),!0}get value(){const e=this.dep.track();return ef(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function D_(t,e,n=!1){let r,s;return ae(t)?r=t:(r=t.get,s=t.set),new C_(r,s,n)}const Fi={},so=new WeakMap;let sr;function k_(t,e=!1,n=sr){if(n){let r=so.get(n);r||so.set(n,r=[]),r.push(t)}}function V_(t,e,n=Ie){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=H=>s?H:Ct(H)||s===!1||s===0?tn(H,1):tn(H);let f,g,m,w,C=!1,V=!1;if(Ne(t)?(g=()=>t.value,C=Ct(t)):Vn(t)?(g=()=>h(t),C=!0):re(t)?(V=!0,C=t.some(H=>Vn(H)||Ct(H)),g=()=>t.map(H=>{if(Ne(H))return H.value;if(Vn(H))return h(H);if(ae(H))return l?l(H,2):H()})):ae(t)?e?g=l?()=>l(t,2):t:g=()=>{if(m){Hn();try{m()}finally{Wn()}}const H=sr;sr=f;try{return l?l(t,3,[w]):t(w)}finally{sr=H}}:g=jt,e&&s){const H=g,oe=s===!0?1/0:s;g=()=>tn(H(),oe)}const x=Gd(),z=()=>{f.stop(),x&&Cc(x.effects,f)};if(i&&e){const H=e;e=(...oe)=>{H(...oe),z()}}let Q=V?new Array(t.length).fill(Fi):Fi;const X=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const oe=f.run();if(s||C||(V?oe.some((ye,A)=>Ln(ye,Q[A])):Ln(oe,Q))){m&&m();const ye=sr;sr=f;try{const A=[oe,Q===Fi?void 0:V&&Q[0]===Fi?[]:Q,w];l?l(e,3,A):e(...A),Q=oe}finally{sr=ye}}}else f.run()};return c&&c(X),f=new Qd(g),f.scheduler=a?()=>a(X,!1):X,w=H=>k_(H,!1,f),m=f.onStop=()=>{const H=so.get(f);if(H){if(l)l(H,4);else for(const oe of H)oe();so.delete(f)}},e?r?X(!0):Q=f.run():a?a(X.bind(null,!0),!0):f.run(),z.pause=f.pause.bind(f),z.resume=f.resume.bind(f),z.stop=z,z}function tn(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ne(t))tn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)tn(t[r],e,n);else if(Ld(t)||Mr(t))t.forEach(r=>{tn(r,e,n)});else if($d(t)){for(const r in t)tn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&tn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ni(t,e,n,r){try{return r?t(...r):t()}catch(s){No(s,e,n)}}function zt(t,e,n,r){if(ae(t)){const s=ni(t,e,n,r);return s&&Fd(s)&&s.catch(i=>{No(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(zt(t[i],e,n,r));return s}}function No(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](t,l,h)===!1)return}c=c.parent}if(i){Hn(),ni(i,null,10,[t,l,h]),Wn();return}}N_(t,n,s,r,a)}function N_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let qs=!1,Ka=!1;const mt=[];let $t=0;const Lr=[];let bn=null,Cr=0;const df=Promise.resolve();let Bc=null;function ff(t){const e=Bc||df;return t?e.then(this?t.bind(this):t):e}function O_(t){let e=qs?$t+1:0,n=mt.length;for(;e<n;){const r=e+n>>>1,s=mt[r],i=Hs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function jc(t){if(!(t.flags&1)){const e=Hs(t),n=mt[mt.length-1];!n||!(t.flags&2)&&e>=Hs(n)?mt.push(t):mt.splice(O_(e),0,t),t.flags|=1,pf()}}function pf(){!qs&&!Ka&&(Ka=!0,Bc=df.then(mf))}function x_(t){re(t)?Lr.push(...t):bn&&t.id===-1?bn.splice(Cr+1,0,t):t.flags&1||(Lr.push(t),t.flags|=1),pf()}function Ku(t,e,n=qs?$t+1:0){for(;n<mt.length;n++){const r=mt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;mt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function gf(t){if(Lr.length){const e=[...new Set(Lr)].sort((n,r)=>Hs(n)-Hs(r));if(Lr.length=0,bn){bn.push(...e);return}for(bn=e,Cr=0;Cr<bn.length;Cr++){const n=bn[Cr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bn=null,Cr=0}}const Hs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function mf(t){Ka=!1,qs=!0;try{for($t=0;$t<mt.length;$t++){const e=mt[$t];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ni(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$t<mt.length;$t++){const e=mt[$t];e&&(e.flags&=-2)}$t=0,mt.length=0,gf(),qs=!1,Bc=null,(mt.length||Lr.length)&&mf()}}let qe=null,_f=null;function io(t){const e=qe;return qe=t,_f=t&&t.type.__scopeId||null,e}function qc(t,e=qe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&rh(-1);const i=io(e);let a;try{a=t(...s)}finally{io(i),r._d&&rh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Gu(t,e){if(qe===null)return t;const n=Fo(qe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Ie]=e[s];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&tn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function nr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(Hn(),zt(l,n,8,[t.el,c,t,e]),Wn())}}const M_=Symbol("_vte"),L_=t=>t.__isTeleport;function Hc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Hc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function bt(t,e){return ae(t)?Ye({name:t.name},e,{setup:t}):t}function yf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ga(t,e,n,r,s=!1){if(re(t)){t.forEach((C,V)=>Ga(C,e&&(re(e)?e[V]:e),n,r,s));return}if(Fr(r)&&!s)return;const i=r.shapeFlag&4?Fo(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ie?c.refs={}:c.refs,g=c.setupState,m=_e(g),w=g===Ie?()=>!1:C=>Ee(m,C);if(h!=null&&h!==l&&(Fe(h)?(f[h]=null,w(h)&&(g[h]=null)):Ne(h)&&(h.value=null)),ae(l))ni(l,c,12,[a,f]);else{const C=Fe(l),V=Ne(l);if(C||V){const x=()=>{if(t.f){const z=C?w(l)?g[l]:f[l]:l.value;s?re(z)&&Cc(z,i):re(z)?z.includes(i)||z.push(i):C?(f[l]=[i],w(l)&&(g[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else C?(f[l]=a,w(l)&&(g[l]=a)):V&&(l.value=a,t.k&&(f[t.k]=a))};a?(x.id=-1,Tt(x,n)):x()}}}const Fr=t=>!!t.type.__asyncLoader,vf=t=>t.type.__isKeepAlive;function F_(t,e){Ef(t,"a",e)}function U_(t,e){Ef(t,"da",e)}function Ef(t,e,n=Qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Oo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)vf(s.parent.vnode)&&$_(r,e,n,s),s=s.parent}}function $_(t,e,n,r){const s=Oo(e,t,r,!0);If(()=>{Cc(r[e],s)},n)}function Oo(t,e,n=Qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Hn();const c=ri(n),l=zt(e,n,t,a);return c(),Wn(),l});return r?s.unshift(i):s.push(i),i}}const mn=t=>(e,n=Qe)=>{(!Lo||t==="sp")&&Oo(t,(...r)=>e(...r),n)},Wc=mn("bm"),Tf=mn("m"),B_=mn("bu"),j_=mn("u"),q_=mn("bum"),If=mn("um"),H_=mn("sp"),W_=mn("rtg"),z_=mn("rtc");function K_(t,e=Qe){Oo("ec",t,e)}const G_="components";function at(t,e){return J_(G_,t,!0,e)||t}const Q_=Symbol.for("v-ndc");function J_(t,e,n=!0,r=!1){const s=qe||Qe;if(s){const i=s.type;{const c=Uy(i,!1);if(c&&(c===e||c===Dt(e)||c===Co(Dt(e))))return i}const a=Qu(s[t]||i[t],e)||Qu(s.appContext[t],e);return!a&&r?i:a}}function Qu(t,e){return t&&(t[e]||t[Dt(e)]||t[Co(Dt(e))])}function X_(t,e,n,r){let s;const i=n,a=re(t);if(a||Fe(t)){const c=a&&Vn(t);let l=!1;c&&(l=!Ct(t),t=Do(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(l?ot(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Pe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function Wi(t,e,n={},r,s){if(qe.ce||qe.parent&&Fr(qe.parent)&&qe.parent.ce)return e!=="default"&&(n.name=e),de(),wt(It,null,[We("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),de();const a=i&&wf(i(n)),c=wt(It,{key:(n.key||a&&a.key||`_${e}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function wf(t){return t.some(e=>Gc(e)?!(e.type===Fn||e.type===It&&!wf(e.children)):!0)?t:null}const Qa=t=>t?qf(t)?Fo(t):Qa(t.parent):null,ks=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qa(t.parent),$root:t=>Qa(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zc(t),$forceUpdate:t=>t.f||(t.f=()=>{jc(t.update)}),$nextTick:t=>t.n||(t.n=ff.bind(t.proxy)),$watch:t=>Ey.bind(t)}),Ra=(t,e)=>t!==Ie&&!t.__isScriptSetup&&Ee(t,e),Y_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const w=a[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ra(r,e))return a[e]=1,r[e];if(s!==Ie&&Ee(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Ee(h,e))return a[e]=3,i[e];if(n!==Ie&&Ee(n,e))return a[e]=4,n[e];Ja&&(a[e]=0)}}const f=ks[e];let g,m;if(f)return e==="$attrs"&&lt(t.attrs,"get",""),f(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==Ie&&Ee(n,e))return a[e]=4,n[e];if(m=l.config.globalProperties,Ee(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ra(s,e)?(s[e]=n,!0):r!==Ie&&Ee(r,e)?(r[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||t!==Ie&&Ee(t,a)||Ra(e,a)||(c=i[0])&&Ee(c,a)||Ee(r,a)||Ee(ks,a)||Ee(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ju(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ja=!0;function Z_(t){const e=zc(t),n=t.proxy,r=t.ctx;Ja=!1,e.beforeCreate&&Xu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:g,mounted:m,beforeUpdate:w,updated:C,activated:V,deactivated:x,beforeDestroy:z,beforeUnmount:Q,destroyed:X,unmounted:H,render:oe,renderTracked:ye,renderTriggered:A,errorCaptured:_,serverPrefetch:y,expose:T,inheritAttrs:R,components:b,directives:E,filters:ht}=e;if(h&&ey(h,r,null),a)for(const ce in a){const fe=a[ce];ae(fe)&&(r[ce]=fe.bind(n))}if(s){const ce=s.call(n,n);Pe(ce)&&(t.data=Vo(ce))}if(Ja=!0,i)for(const ce in i){const fe=i[ce],kt=ae(fe)?fe.bind(n,n):ae(fe.get)?fe.get.bind(n,n):jt,Gn=!ae(fe)&&ae(fe.set)?fe.set.bind(n):jt,Qt=Uo({get:kt,set:Gn});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:Ue=>Qt.value=Ue})}if(c)for(const ce in c)Af(c[ce],r,n,ce);if(l){const ce=ae(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(fe=>{oy(fe,ce[fe])})}f&&Xu(f,t,"c");function Se(ce,fe){re(fe)?fe.forEach(kt=>ce(kt.bind(n))):fe&&ce(fe.bind(n))}if(Se(Wc,g),Se(Tf,m),Se(B_,w),Se(j_,C),Se(F_,V),Se(U_,x),Se(K_,_),Se(z_,ye),Se(W_,A),Se(q_,Q),Se(If,H),Se(H_,y),re(T))if(T.length){const ce=t.exposed||(t.exposed={});T.forEach(fe=>{Object.defineProperty(ce,fe,{get:()=>n[fe],set:kt=>n[fe]=kt})})}else t.exposed||(t.exposed={});oe&&t.render===jt&&(t.render=oe),R!=null&&(t.inheritAttrs=R),b&&(t.components=b),E&&(t.directives=E),y&&yf(t)}function ey(t,e,n=jt){re(t)&&(t=Xa(t));for(const r in t){const s=t[r];let i;Pe(s)?"default"in s?i=Vs(s.from||r,s.default,!0):i=Vs(s.from||r):i=Vs(s),Ne(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Xu(t,e,n){zt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Af(t,e,n,r){let s=r.includes(".")?Ff(n,r):()=>n[r];if(Fe(t)){const i=e[t];ae(i)&&Ns(s,i)}else if(ae(t))Ns(s,t.bind(n));else if(Pe(t))if(re(t))t.forEach(i=>Af(i,e,n,r));else{const i=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(i)&&Ns(s,i,t)}}function zc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>oo(l,h,a,!0)),oo(l,e,a)),Pe(e)&&i.set(e,l),l}function oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&oo(t,i,n,!0),s&&s.forEach(a=>oo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=ty[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const ty={data:Yu,props:Zu,emits:Zu,methods:Rs,computed:Rs,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Rs,directives:Rs,watch:ry,provide:Yu,inject:ny};function Yu(t,e){return e?t?function(){return Ye(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function ny(t,e){return Rs(Xa(t),Xa(e))}function Xa(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Rs(t,e){return t?Ye(Object.create(null),t,e):e}function Zu(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Ye(Object.create(null),Ju(t),Ju(e??{})):e}function ry(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function Rf(){return{app:null,config:{isNativeTag:Bm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sy=0;function iy(t,e){return function(r,s=null){ae(r)||(r=Ye({},r)),s!=null&&!Pe(s)&&(s=null);const i=Rf(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:sy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:By,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&ae(f.install)?(a.add(f),f.install(h,...g)):ae(f)&&(a.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,m){if(!l){const w=h._ceVNode||We(r,s);return w.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),g&&e?e(w,f):t(w,f,m),l=!0,h._container=f,f.__vue_app__=h,Fo(w.component)}},onUnmount(f){c.push(f)},unmount(){l&&(zt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=lr;lr=h;try{return f()}finally{lr=g}}};return h}}let lr=null;function oy(t,e){if(Qe){let n=Qe.provides;const r=Qe.parent&&Qe.parent.provides;r===n&&(n=Qe.provides=Object.create(r)),n[t]=e}}function Vs(t,e,n=!1){const r=Qe||qe;if(r||lr){const s=lr?lr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ae(e)?e.call(r&&r.proxy):e}}function ay(){return!!(Qe||qe||lr)}const bf={},Sf=()=>Object.create(bf),Pf=t=>Object.getPrototypeOf(t)===bf;function cy(t,e,n,r=!1){const s={},i=Sf();t.propsDefaults=Object.create(null),Cf(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:T_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ly(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=_e(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let g=0;g<f.length;g++){let m=f[g];if(xo(t.emitsOptions,m))continue;const w=e[m];if(l)if(Ee(i,m))w!==i[m]&&(i[m]=w,h=!0);else{const C=Dt(m);s[C]=Ya(l,c,C,w,t,!1)}else w!==i[m]&&(i[m]=w,h=!0)}}}else{Cf(t,e,s,i)&&(h=!0);let f;for(const g in c)(!e||!Ee(e,g)&&((f=qn(g))===g||!Ee(e,f)))&&(l?n&&(n[g]!==void 0||n[f]!==void 0)&&(s[g]=Ya(l,c,g,void 0,t,!0)):delete s[g]);if(i!==c)for(const g in i)(!e||!Ee(e,g))&&(delete i[g],h=!0)}h&&ln(t.attrs,"set","")}function Cf(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(Ds(l))continue;const h=e[l];let f;s&&Ee(s,f=Dt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:xo(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=_e(n),h=c||Ie;for(let f=0;f<i.length;f++){const g=i[f];n[g]=Ya(s,l,g,h[g],t,!Ee(h,g))}}return a}function Ya(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Ee(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ae(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=ri(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===qn(n))&&(r=!0))}return r}const uy=new WeakMap;function Df(t,e,n=!1){const r=n?uy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!ae(t)){const f=g=>{l=!0;const[m,w]=Df(g,e,!0);Ye(a,m),w&&c.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Pe(t)&&r.set(t,xr),xr;if(re(i))for(let f=0;f<i.length;f++){const g=Dt(i[f]);eh(g)&&(a[g]=Ie)}else if(i)for(const f in i){const g=Dt(f);if(eh(g)){const m=i[f],w=a[g]=re(m)||ae(m)?{type:m}:Ye({},m),C=w.type;let V=!1,x=!0;if(re(C))for(let z=0;z<C.length;++z){const Q=C[z],X=ae(Q)&&Q.name;if(X==="Boolean"){V=!0;break}else X==="String"&&(x=!1)}else V=ae(C)&&C.name==="Boolean";w[0]=V,w[1]=x,(V||Ee(w,"default"))&&c.push(g)}}const h=[a,c];return Pe(t)&&r.set(t,h),h}function eh(t){return t[0]!=="$"&&!Ds(t)}const kf=t=>t[0]==="_"||t==="$stable",Kc=t=>re(t)?t.map(Bt):[Bt(t)],hy=(t,e,n)=>{if(e._n)return e;const r=qc((...s)=>Kc(e(...s)),n);return r._c=!1,r},Vf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(kf(s))continue;const i=t[s];if(ae(i))e[s]=hy(s,i,r);else if(i!=null){const a=Kc(i);e[s]=()=>a}}},Nf=(t,e)=>{const n=Kc(e);t.slots.default=()=>n},Of=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},dy=(t,e,n)=>{const r=t.slots=Sf();if(t.vnode.shapeFlag&32){const s=e._;s?(Of(r,e,n),n&&Bd(r,"_",s,!0)):Vf(e,r)}else e&&Nf(t,e)},fy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ie;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Of(s,e,n):(i=!e.$stable,Vf(e,s)),a=e}else e&&(Nf(t,e),a={default:1});if(i)for(const c in s)!kf(c)&&a[c]==null&&delete s[c]},Tt=Sy;function py(t){return gy(t)}function gy(t,e){const n=jd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:g,nextSibling:m,setScopeId:w=jt,insertStaticContent:C}=t,V=(v,I,D,L=null,N=null,M=null,j=void 0,$=null,U=!!I.dynamicChildren)=>{if(v===I)return;v&&!ws(v,I)&&(L=Jt(v),Ue(v,N,M,!0),v=null),I.patchFlag===-2&&(U=!1,I.dynamicChildren=null);const{type:F,ref:Z,shapeFlag:q}=I;switch(F){case Mo:x(v,I,D,L);break;case Fn:z(v,I,D,L);break;case Pa:v==null&&Q(I,D,L,j);break;case It:b(v,I,D,L,N,M,j,$,U);break;default:q&1?oe(v,I,D,L,N,M,j,$,U):q&6?E(v,I,D,L,N,M,j,$,U):(q&64||q&128)&&F.process(v,I,D,L,N,M,j,$,U,Ft)}Z!=null&&N&&Ga(Z,v&&v.ref,M,I||v,!I)},x=(v,I,D,L)=>{if(v==null)r(I.el=c(I.children),D,L);else{const N=I.el=v.el;I.children!==v.children&&h(N,I.children)}},z=(v,I,D,L)=>{v==null?r(I.el=l(I.children||""),D,L):I.el=v.el},Q=(v,I,D,L)=>{[v.el,v.anchor]=C(v.children,I,D,L,v.el,v.anchor)},X=({el:v,anchor:I},D,L)=>{let N;for(;v&&v!==I;)N=m(v),r(v,D,L),v=N;r(I,D,L)},H=({el:v,anchor:I})=>{let D;for(;v&&v!==I;)D=m(v),s(v),v=D;s(I)},oe=(v,I,D,L,N,M,j,$,U)=>{I.type==="svg"?j="svg":I.type==="math"&&(j="mathml"),v==null?ye(I,D,L,N,M,j,$,U):y(v,I,N,M,j,$,U)},ye=(v,I,D,L,N,M,j,$)=>{let U,F;const{props:Z,shapeFlag:q,transition:J,dirs:K}=v;if(U=v.el=a(v.type,M,Z&&Z.is,Z),q&8?f(U,v.children):q&16&&_(v.children,U,null,L,N,ba(v,M),j,$),K&&nr(v,null,L,"created"),A(U,v,v.scopeId,j,L),Z){for(const ve in Z)ve!=="value"&&!Ds(ve)&&i(U,ve,null,Z[ve],M,L);"value"in Z&&i(U,"value",null,Z.value,M),(F=Z.onVnodeBeforeMount)&&Ut(F,L,v)}K&&nr(v,null,L,"beforeMount");const ee=my(N,J);ee&&J.beforeEnter(U),r(U,I,D),((F=Z&&Z.onVnodeMounted)||ee||K)&&Tt(()=>{F&&Ut(F,L,v),ee&&J.enter(U),K&&nr(v,null,L,"mounted")},N)},A=(v,I,D,L,N)=>{if(D&&w(v,D),L)for(let M=0;M<L.length;M++)w(v,L[M]);if(N){let M=N.subTree;if(I===M||$f(M.type)&&(M.ssContent===I||M.ssFallback===I)){const j=N.vnode;A(v,j,j.scopeId,j.slotScopeIds,N.parent)}}},_=(v,I,D,L,N,M,j,$,U=0)=>{for(let F=U;F<v.length;F++){const Z=v[F]=$?Sn(v[F]):Bt(v[F]);V(null,Z,I,D,L,N,M,j,$)}},y=(v,I,D,L,N,M,j)=>{const $=I.el=v.el;let{patchFlag:U,dynamicChildren:F,dirs:Z}=I;U|=v.patchFlag&16;const q=v.props||Ie,J=I.props||Ie;let K;if(D&&rr(D,!1),(K=J.onVnodeBeforeUpdate)&&Ut(K,D,I,v),Z&&nr(I,v,D,"beforeUpdate"),D&&rr(D,!0),(q.innerHTML&&J.innerHTML==null||q.textContent&&J.textContent==null)&&f($,""),F?T(v.dynamicChildren,F,$,D,L,ba(I,N),M):j||fe(v,I,$,null,D,L,ba(I,N),M,!1),U>0){if(U&16)R($,q,J,D,N);else if(U&2&&q.class!==J.class&&i($,"class",null,J.class,N),U&4&&i($,"style",q.style,J.style,N),U&8){const ee=I.dynamicProps;for(let ve=0;ve<ee.length;ve++){const pe=ee[ve],et=q[pe],Be=J[pe];(Be!==et||pe==="value")&&i($,pe,et,Be,N,D)}}U&1&&v.children!==I.children&&f($,I.children)}else!j&&F==null&&R($,q,J,D,N);((K=J.onVnodeUpdated)||Z)&&Tt(()=>{K&&Ut(K,D,I,v),Z&&nr(I,v,D,"updated")},L)},T=(v,I,D,L,N,M,j)=>{for(let $=0;$<I.length;$++){const U=v[$],F=I[$],Z=U.el&&(U.type===It||!ws(U,F)||U.shapeFlag&70)?g(U.el):D;V(U,F,Z,null,L,N,M,j,!0)}},R=(v,I,D,L,N)=>{if(I!==D){if(I!==Ie)for(const M in I)!Ds(M)&&!(M in D)&&i(v,M,I[M],null,N,L);for(const M in D){if(Ds(M))continue;const j=D[M],$=I[M];j!==$&&M!=="value"&&i(v,M,$,j,N,L)}"value"in D&&i(v,"value",I.value,D.value,N)}},b=(v,I,D,L,N,M,j,$,U)=>{const F=I.el=v?v.el:c(""),Z=I.anchor=v?v.anchor:c("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:K}=I;K&&($=$?$.concat(K):K),v==null?(r(F,D,L),r(Z,D,L),_(I.children||[],D,Z,N,M,j,$,U)):q>0&&q&64&&J&&v.dynamicChildren?(T(v.dynamicChildren,J,D,N,M,j,$),(I.key!=null||N&&I===N.subTree)&&xf(v,I,!0)):fe(v,I,D,Z,N,M,j,$,U)},E=(v,I,D,L,N,M,j,$,U)=>{I.slotScopeIds=$,v==null?I.shapeFlag&512?N.ctx.activate(I,D,L,j,U):ht(I,D,L,N,M,j,U):Lt(v,I,U)},ht=(v,I,D,L,N,M,j)=>{const $=v.component=Oy(v,L,N);if(vf(v)&&($.ctx.renderer=Ft),xy($,!1,j),$.asyncDep){if(N&&N.registerDep($,Se,j),!v.el){const U=$.subTree=We(Fn);z(null,U,I,D)}}else Se($,v,I,D,N,M,j)},Lt=(v,I,D)=>{const L=I.component=v.component;if(Ry(v,I,D))if(L.asyncDep&&!L.asyncResolved){ce(L,I,D);return}else L.next=I,L.update();else I.el=v.el,L.vnode=I},Se=(v,I,D,L,N,M,j)=>{const $=()=>{if(v.isMounted){let{next:q,bu:J,u:K,parent:ee,vnode:ve}=v;{const tt=Mf(v);if(tt){q&&(q.el=ve.el,ce(v,q,j)),tt.asyncDep.then(()=>{v.isUnmounted||$()});return}}let pe=q,et;rr(v,!1),q?(q.el=ve.el,ce(v,q,j)):q=ve,J&&Hi(J),(et=q.props&&q.props.onVnodeBeforeUpdate)&&Ut(et,ee,q,ve),rr(v,!0);const Be=Sa(v),ze=v.subTree;v.subTree=Be,V(ze,Be,g(ze.el),Jt(ze),v,N,M),q.el=Be.el,pe===null&&by(v,Be.el),K&&Tt(K,N),(et=q.props&&q.props.onVnodeUpdated)&&Tt(()=>Ut(et,ee,q,ve),N)}else{let q;const{el:J,props:K}=I,{bm:ee,m:ve,parent:pe,root:et,type:Be}=v,ze=Fr(I);if(rr(v,!1),ee&&Hi(ee),!ze&&(q=K&&K.onVnodeBeforeMount)&&Ut(q,pe,I),rr(v,!0),J&&Er){const tt=()=>{v.subTree=Sa(v),Er(J,v.subTree,v,N,null)};ze&&Be.__asyncHydrate?Be.__asyncHydrate(J,v,tt):tt()}else{et.ce&&et.ce._injectChildStyle(Be);const tt=v.subTree=Sa(v);V(null,tt,D,L,v,N,M),I.el=tt.el}if(ve&&Tt(ve,N),!ze&&(q=K&&K.onVnodeMounted)){const tt=I;Tt(()=>Ut(q,pe,tt),N)}(I.shapeFlag&256||pe&&Fr(pe.vnode)&&pe.vnode.shapeFlag&256)&&v.a&&Tt(v.a,N),v.isMounted=!0,I=D=L=null}};v.scope.on();const U=v.effect=new Qd($);v.scope.off();const F=v.update=U.run.bind(U),Z=v.job=U.runIfDirty.bind(U);Z.i=v,Z.id=v.uid,U.scheduler=()=>jc(Z),rr(v,!0),F()},ce=(v,I,D)=>{I.component=v;const L=v.vnode.props;v.vnode=I,v.next=null,ly(v,I.props,L,D),fy(v,I.children,D),Hn(),Ku(v),Wn()},fe=(v,I,D,L,N,M,j,$,U=!1)=>{const F=v&&v.children,Z=v?v.shapeFlag:0,q=I.children,{patchFlag:J,shapeFlag:K}=I;if(J>0){if(J&128){Gn(F,q,D,L,N,M,j,$,U);return}else if(J&256){kt(F,q,D,L,N,M,j,$,U);return}}K&8?(Z&16&&Jn(F,N,M),q!==F&&f(D,q)):Z&16?K&16?Gn(F,q,D,L,N,M,j,$,U):Jn(F,N,M,!0):(Z&8&&f(D,""),K&16&&_(q,D,L,N,M,j,$,U))},kt=(v,I,D,L,N,M,j,$,U)=>{v=v||xr,I=I||xr;const F=v.length,Z=I.length,q=Math.min(F,Z);let J;for(J=0;J<q;J++){const K=I[J]=U?Sn(I[J]):Bt(I[J]);V(v[J],K,D,null,N,M,j,$,U)}F>Z?Jn(v,N,M,!0,!1,q):_(I,D,L,N,M,j,$,U,q)},Gn=(v,I,D,L,N,M,j,$,U)=>{let F=0;const Z=I.length;let q=v.length-1,J=Z-1;for(;F<=q&&F<=J;){const K=v[F],ee=I[F]=U?Sn(I[F]):Bt(I[F]);if(ws(K,ee))V(K,ee,D,null,N,M,j,$,U);else break;F++}for(;F<=q&&F<=J;){const K=v[q],ee=I[J]=U?Sn(I[J]):Bt(I[J]);if(ws(K,ee))V(K,ee,D,null,N,M,j,$,U);else break;q--,J--}if(F>q){if(F<=J){const K=J+1,ee=K<Z?I[K].el:L;for(;F<=J;)V(null,I[F]=U?Sn(I[F]):Bt(I[F]),D,ee,N,M,j,$,U),F++}}else if(F>J)for(;F<=q;)Ue(v[F],N,M,!0),F++;else{const K=F,ee=F,ve=new Map;for(F=ee;F<=J;F++){const dt=I[F]=U?Sn(I[F]):Bt(I[F]);dt.key!=null&&ve.set(dt.key,F)}let pe,et=0;const Be=J-ee+1;let ze=!1,tt=0;const vn=new Array(Be);for(F=0;F<Be;F++)vn[F]=0;for(F=K;F<=q;F++){const dt=v[F];if(et>=Be){Ue(dt,N,M,!0);continue}let Pt;if(dt.key!=null)Pt=ve.get(dt.key);else for(pe=ee;pe<=J;pe++)if(vn[pe-ee]===0&&ws(dt,I[pe])){Pt=pe;break}Pt===void 0?Ue(dt,N,M,!0):(vn[Pt-ee]=F+1,Pt>=tt?tt=Pt:ze=!0,V(dt,I[Pt],D,null,N,M,j,$,U),et++)}const Tr=ze?_y(vn):xr;for(pe=Tr.length-1,F=Be-1;F>=0;F--){const dt=ee+F,Pt=I[dt],Ir=dt+1<Z?I[dt+1].el:L;vn[F]===0?V(null,Pt,D,Ir,N,M,j,$,U):ze&&(pe<0||F!==Tr[pe]?Qt(Pt,D,Ir,2):pe--)}}},Qt=(v,I,D,L,N=null)=>{const{el:M,type:j,transition:$,children:U,shapeFlag:F}=v;if(F&6){Qt(v.component.subTree,I,D,L);return}if(F&128){v.suspense.move(I,D,L);return}if(F&64){j.move(v,I,D,Ft);return}if(j===It){r(M,I,D);for(let q=0;q<U.length;q++)Qt(U[q],I,D,L);r(v.anchor,I,D);return}if(j===Pa){X(v,I,D);return}if(L!==2&&F&1&&$)if(L===0)$.beforeEnter(M),r(M,I,D),Tt(()=>$.enter(M),N);else{const{leave:q,delayLeave:J,afterLeave:K}=$,ee=()=>r(M,I,D),ve=()=>{q(M,()=>{ee(),K&&K()})};J?J(M,ee,ve):ve()}else r(M,I,D)},Ue=(v,I,D,L=!1,N=!1)=>{const{type:M,props:j,ref:$,children:U,dynamicChildren:F,shapeFlag:Z,patchFlag:q,dirs:J,cacheIndex:K}=v;if(q===-2&&(N=!1),$!=null&&Ga($,null,D,v,!0),K!=null&&(I.renderCache[K]=void 0),Z&256){I.ctx.deactivate(v);return}const ee=Z&1&&J,ve=!Fr(v);let pe;if(ve&&(pe=j&&j.onVnodeBeforeUnmount)&&Ut(pe,I,v),Z&6)Qn(v.component,D,L);else{if(Z&128){v.suspense.unmount(D,L);return}ee&&nr(v,null,I,"beforeUnmount"),Z&64?v.type.remove(v,I,D,Ft,L):F&&!F.hasOnce&&(M!==It||q>0&&q&64)?Jn(F,I,D,!1,!0):(M===It&&q&384||!N&&Z&16)&&Jn(U,I,D),L&&$e(v)}(ve&&(pe=j&&j.onVnodeUnmounted)||ee)&&Tt(()=>{pe&&Ut(pe,I,v),ee&&nr(v,null,I,"unmounted")},D)},$e=v=>{const{type:I,el:D,anchor:L,transition:N}=v;if(I===It){ia(D,L);return}if(I===Pa){H(v);return}const M=()=>{s(D),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(v.shapeFlag&1&&N&&!N.persisted){const{leave:j,delayLeave:$}=N,U=()=>j(D,M);$?$(v.el,M,U):U()}else M()},ia=(v,I)=>{let D;for(;v!==I;)D=m(v),s(v),v=D;s(I)},Qn=(v,I,D)=>{const{bum:L,scope:N,job:M,subTree:j,um:$,m:U,a:F}=v;th(U),th(F),L&&Hi(L),N.stop(),M&&(M.flags|=8,Ue(j,v,I,D)),$&&Tt($,I),Tt(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Jn=(v,I,D,L=!1,N=!1,M=0)=>{for(let j=M;j<v.length;j++)Ue(v[j],I,D,L,N)},Jt=v=>{if(v.shapeFlag&6)return Jt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=m(v.anchor||v.el),D=I&&I[M_];return D?m(D):I};let cs=!1;const yi=(v,I,D)=>{v==null?I._vnode&&Ue(I._vnode,null,null,!0):V(I._vnode||null,v,I,null,null,null,D),I._vnode=v,cs||(cs=!0,Ku(),gf(),cs=!1)},Ft={p:V,um:Ue,m:Qt,r:$e,mt:ht,mc:_,pc:fe,pbc:T,n:Jt,o:t};let Xn,Er;return{render:yi,hydrate:Xn,createApp:iy(yi,Xn)}}function ba({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function my(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xf(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Sn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&xf(a,c)),c.type===Mo&&(c.el=a.el)}}function _y(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Mf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mf(e)}function th(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const yy=Symbol.for("v-scx"),vy=()=>Vs(yy);function Ns(t,e,n){return Lf(t,e,n)}function Lf(t,e,n=Ie){const{immediate:r,deep:s,flush:i,once:a}=n,c=Ye({},n);let l;if(Lo)if(i==="sync"){const m=vy();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!e||r)c.once=!0;else{const m=()=>{};return m.stop=jt,m.resume=jt,m.pause=jt,m}const h=Qe;c.call=(m,w,C)=>zt(m,h,w,C);let f=!1;i==="post"?c.scheduler=m=>{Tt(m,h&&h.suspense)}:i!=="sync"&&(f=!0,c.scheduler=(m,w)=>{w?m():jc(m)}),c.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const g=V_(t,e,c);return l&&l.push(g),g}function Ey(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?Ff(r,t):()=>r[t]:t.bind(r,r);let i;ae(e)?i=e:(i=e.handler,n=e);const a=ri(this),c=Lf(s,i.bind(r),n);return a(),c}function Ff(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ty=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Dt(e)}Modifiers`]||t[`${qn(e)}Modifiers`];function Iy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),a=i&&Ty(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>Fe(f)?f.trim():f)),a.number&&(s=n.map(Ha)));let c,l=r[c=Ea(e)]||r[c=Ea(Dt(e))];!l&&i&&(l=r[c=Ea(qn(e))]),l&&zt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,zt(h,t,6,s)}}function Uf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!ae(t)){const l=h=>{const f=Uf(h,e,!0);f&&(c=!0,Ye(a,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Pe(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>a[l]=null):Ye(a,i),Pe(t)&&r.set(t,a),a)}function xo(t,e){return!t||!bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,qn(e))||Ee(t,e))}function Sa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:f,props:g,data:m,setupState:w,ctx:C,inheritAttrs:V}=t,x=io(t);let z,Q;try{if(n.shapeFlag&4){const H=s||r,oe=H;z=Bt(h.call(oe,H,f,g,w,m,C)),Q=c}else{const H=e;z=Bt(H.length>1?H(g,{attrs:c,slots:a,emit:l}):H(g,null)),Q=e.props?c:wy(c)}}catch(H){Os.length=0,No(H,t,1),z=We(Fn)}let X=z;if(Q&&V!==!1){const H=Object.keys(Q),{shapeFlag:oe}=X;H.length&&oe&7&&(i&&H.some(Pc)&&(Q=Ay(Q,i)),X=qr(X,Q,!1,!0))}return n.dirs&&(X=qr(X,null,!1,!0),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&Hc(X,n.transition),z=X,io(x),z}const wy=t=>{let e;for(const n in t)(n==="class"||n==="style"||bo(n))&&((e||(e={}))[n]=t[n]);return e},Ay=(t,e)=>{const n={};for(const r in t)(!Pc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ry(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?nh(r,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const m=f[g];if(a[m]!==r[m]&&!xo(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?nh(r,a,h):!0:!!a;return!1}function nh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!xo(n,i))return!0}return!1}function by({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const $f=t=>t.__isSuspense;function Sy(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):x_(t)}const It=Symbol.for("v-fgt"),Mo=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),Pa=Symbol.for("v-stc"),Os=[];let At=null;function de(t=!1){Os.push(At=t?null:[])}function Py(){Os.pop(),At=Os[Os.length-1]||null}let Ws=1;function rh(t){Ws+=t,t<0&&At&&(At.hasOnce=!0)}function Bf(t){return t.dynamicChildren=Ws>0?At||xr:null,Py(),Ws>0&&At&&At.push(t),t}function Ve(t,e,n,r,s,i){return Bf(He(t,e,n,r,s,i,!0))}function wt(t,e,n,r,s){return Bf(We(t,e,n,r,s,!0))}function Gc(t){return t?t.__v_isVNode===!0:!1}function ws(t,e){return t.type===e.type&&t.key===e.key}const jf=({key:t})=>t??null,zi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||Ne(t)||ae(t)?{i:qe,r:t,k:e,f:!!n}:t:null);function He(t,e=null,n=null,r=0,s=null,i=t===It?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jf(e),ref:e&&zi(e),scopeId:_f,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qe};return c?(Qc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),Ws>0&&!a&&At&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&At.push(l),l}const We=Cy;function Cy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Q_)&&(t=Fn),Gc(t)){const c=qr(t,e,!0);return n&&Qc(c,n),Ws>0&&!i&&At&&(c.shapeFlag&6?At[At.indexOf(t)]=c:At.push(c)),c.patchFlag=-2,c}if($y(t)&&(t=t.__vccOpts),e){e=Dy(e);let{class:c,style:l}=e;c&&!Fe(c)&&(e.class=Zr(c)),Pe(l)&&(Fc(l)&&!re(l)&&(l=Ye({},l)),e.style=ei(l))}const a=Fe(t)?1:$f(t)?128:L_(t)?64:Pe(t)?4:ae(t)?2:0;return He(t,e,n,r,s,a,i,!0)}function Dy(t){return t?Fc(t)||Pf(t)?Ye({},t):t:null}function qr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?ky(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&jf(h),ref:e&&e.ref?n&&i?re(i)?i.concat(zi(e)):[i,zi(e)]:zi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qr(t.ssContent),ssFallback:t.ssFallback&&qr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Hc(f,l.clone(f)),f}function ao(t=" ",e=0){return We(Mo,null,t,e)}function rn(t="",e=!1){return e?(de(),wt(Fn,null,t)):We(Fn,null,t)}function Bt(t){return t==null||typeof t=="boolean"?We(Fn):re(t)?We(It,null,t.slice()):Gc(t)?Sn(t):We(Mo,null,String(t))}function Sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qr(t)}function Qc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Qc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Pf(e)?e._ctx=qe:s===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),r&64?(n=16,e=[ao(e)]):n=8);t.children=e,t.shapeFlag|=n}function ky(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zr([e.class,r.class]));else if(s==="style")e.style=ei([e.style,r.style]);else if(bo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ut(t,e,n,r=null){zt(t,e,7,[n,r])}const Vy=Rf();let Ny=0;function Oy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Vy,i={uid:Ny++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Df(r,s),emitsOptions:Uf(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Iy.bind(null,i),t.ce&&t.ce(i),i}let Qe=null,co,Za;{const t=jd(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};co=e("__VUE_INSTANCE_SETTERS__",n=>Qe=n),Za=e("__VUE_SSR_SETTERS__",n=>Lo=n)}const ri=t=>{const e=Qe;return co(t),t.scope.on(),()=>{t.scope.off(),co(e)}},sh=()=>{Qe&&Qe.scope.off(),co(null)};function qf(t){return t.vnode.shapeFlag&4}let Lo=!1;function xy(t,e=!1,n=!1){e&&Za(e);const{props:r,children:s}=t.vnode,i=qf(t);cy(t,r,i,e),dy(t,s,n);const a=i?My(t,e):void 0;return e&&Za(!1),a}function My(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Y_);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Fy(t):null,i=ri(t);Hn();const a=ni(r,t,0,[t.props,s]);if(Wn(),i(),Fd(a)){if(Fr(t)||yf(t),a.then(sh,sh),e)return a.then(c=>{ih(t,c,e)}).catch(c=>{No(c,t,0)});t.asyncDep=a}else ih(t,a,e)}else Hf(t,e)}function ih(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=hf(e)),Hf(t,n)}let oh;function Hf(t,e,n){const r=t.type;if(!t.render){if(!e&&oh&&!r.render){const s=r.template||zc(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=Ye(Ye({isCustomElement:i,delimiters:c},a),l);r.render=oh(s,h)}}t.render=r.render||jt}{const s=ri(t);Hn();try{Z_(t)}finally{Wn(),s()}}}const Ly={get(t,e){return lt(t,"get",""),t[e]}};function Fy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ly),slots:t.slots,emit:t.emit,expose:e}}function Fo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(hf(Uc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ks)return ks[n](t)},has(e,n){return n in e||n in ks}})):t.proxy}function Uy(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function $y(t){return ae(t)&&"__vccOpts"in t}const Uo=(t,e)=>D_(t,e,Lo),By="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ec;const ah=typeof window<"u"&&window.trustedTypes;if(ah)try{ec=ah.createPolicy("vue",{createHTML:t=>t})}catch{}const Wf=ec?t=>ec.createHTML(t):t=>t,jy="http://www.w3.org/2000/svg",qy="http://www.w3.org/1998/Math/MathML",en=typeof document<"u"?document:null,ch=en&&en.createElement("template"),Hy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?en.createElementNS(jy,t):e==="mathml"?en.createElementNS(qy,t):n?en.createElement(t,{is:n}):en.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>en.createTextNode(t),createComment:t=>en.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>en.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ch.innerHTML=Wf(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=ch.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Wy=Symbol("_vtc");function zy(t,e,n){const r=t[Wy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const lh=Symbol("_vod"),Ky=Symbol("_vsh"),Gy=Symbol(""),Qy=/(^|;)\s*display\s*:/;function Jy(t,e,n){const r=t.style,s=Fe(n);let i=!1;if(n&&!s){if(e)if(Fe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Ki(r,c,"")}else for(const a in e)n[a]==null&&Ki(r,a,"");for(const a in n)a==="display"&&(i=!0),Ki(r,a,n[a])}else if(s){if(e!==n){const a=r[Gy];a&&(n+=";"+a),r.cssText=n,i=Qy.test(n)}}else e&&t.removeAttribute("style");lh in t&&(t[lh]=i?r.display:"",t[Ky]&&(r.display="none"))}const uh=/\s*!important$/;function Ki(t,e,n){if(re(n))n.forEach(r=>Ki(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Xy(t,e);uh.test(n)?t.setProperty(qn(r),n.replace(uh,""),"important"):t[r]=n}}const hh=["Webkit","Moz","ms"],Ca={};function Xy(t,e){const n=Ca[e];if(n)return n;let r=Dt(e);if(r!=="filter"&&r in t)return Ca[e]=r;r=Co(r);for(let s=0;s<hh.length;s++){const i=hh[s]+r;if(i in t)return Ca[e]=i}return e}const dh="http://www.w3.org/1999/xlink";function fh(t,e,n,r,s,i=Xm(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(dh,e.slice(6,e.length)):t.setAttributeNS(dh,e,n):n==null||i&&!qd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":jn(n)?String(n):n)}function ph(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Wf(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=qd(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Dr(t,e,n,r){t.addEventListener(e,n,r)}function Yy(t,e,n,r){t.removeEventListener(e,n,r)}const gh=Symbol("_vei");function Zy(t,e,n,r,s=null){const i=t[gh]||(t[gh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=ev(e);if(r){const h=i[e]=rv(r,s);Dr(t,c,h,l)}else a&&(Yy(t,c,a,l),i[e]=void 0)}}const mh=/(?:Once|Passive|Capture)$/;function ev(t){let e;if(mh.test(t)){e={};let r;for(;r=t.match(mh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qn(t.slice(2)),e]}let Da=0;const tv=Promise.resolve(),nv=()=>Da||(tv.then(()=>Da=0),Da=Date.now());function rv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;zt(sv(r,n.value),e,5,[r])};return n.value=t,n.attached=nv(),n}function sv(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _h=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,iv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?zy(t,r,a):e==="style"?Jy(t,n,r):bo(e)?Pc(e)||Zy(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ov(t,e,r,a))?(ph(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Fe(r))?ph(t,Dt(e),r):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fh(t,e,r,a))};function ov(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&_h(e)&&ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _h(e)&&Fe(n)?!1:e in t}const yh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>Hi(e,n):e};function av(t){t.target.composing=!0}function vh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ka=Symbol("_assign"),Eh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ka]=yh(s);const i=r||s.props&&s.props.type==="number";Dr(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Ha(c)),t[ka](c)}),n&&Dr(t,"change",()=>{t.value=t.value.trim()}),e||(Dr(t,"compositionstart",av),Dr(t,"compositionend",vh),Dr(t,"change",vh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[ka]=yh(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ha(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},cv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lv=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=qn(s.key);if(e.some(a=>a===i||cv[a]===i))return t(s)})},uv=Ye({patchProp:iv},Hy);let Th;function hv(){return Th||(Th=py(uv))}const dv=(...t)=>{const e=hv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=pv(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,fv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function fv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function pv(t){return Fe(t)?document.querySelector(t):t}var gv=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let zf;const $o=t=>zf=t,Kf=Symbol();function tc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xs||(xs={}));function mv(){const t=Kd(!0),e=t.run(()=>xe({}));let n=[],r=[];const s=Uc({install(i){$o(s),s._a=i,i.provide(Kf,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return!this._a&&!gv?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Gf=()=>{};function Ih(t,e,n,r=Gf){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Gd()&&Ym(s),s}function Pr(t,...e){t.slice().forEach(n=>{n(...e)})}const _v=t=>t(),wh=Symbol(),Va=Symbol();function nc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];tc(s)&&tc(r)&&t.hasOwnProperty(n)&&!Ne(r)&&!Vn(r)?t[n]=nc(s,r):t[n]=r}return t}const yv=Symbol();function vv(t){return!tc(t)||!t.hasOwnProperty(yv)}const{assign:Rn}=Object;function Ev(t){return!!(Ne(t)&&t.effect)}function Tv(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const f=b_(n.state.value[t]);return Rn(f,i,Object.keys(a||{}).reduce((g,m)=>(g[m]=Uc(Uo(()=>{$o(n);const w=n._s.get(t);return a[m].call(w,w)})),g),{}))}return l=Qf(t,h,e,n,r,!0),l}function Qf(t,e,n={},r,s,i){let a;const c=Rn({actions:{}},n),l={deep:!0};let h,f,g=[],m=[],w;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),xe({});let V;function x(_){let y;h=f=!1,typeof _=="function"?(_(r.state.value[t]),y={type:xs.patchFunction,storeId:t,events:w}):(nc(r.state.value[t],_),y={type:xs.patchObject,payload:_,storeId:t,events:w});const T=V=Symbol();ff().then(()=>{V===T&&(h=!0)}),f=!0,Pr(g,y,r.state.value[t])}const z=i?function(){const{state:y}=n,T=y?y():{};this.$patch(R=>{Rn(R,T)})}:Gf;function Q(){a.stop(),g=[],m=[],r._s.delete(t)}const X=(_,y="")=>{if(wh in _)return _[Va]=y,_;const T=function(){$o(r);const R=Array.from(arguments),b=[],E=[];function ht(ce){b.push(ce)}function Lt(ce){E.push(ce)}Pr(m,{args:R,name:T[Va],store:oe,after:ht,onError:Lt});let Se;try{Se=_.apply(this&&this.$id===t?this:oe,R)}catch(ce){throw Pr(E,ce),ce}return Se instanceof Promise?Se.then(ce=>(Pr(b,ce),ce)).catch(ce=>(Pr(E,ce),Promise.reject(ce))):(Pr(b,Se),Se)};return T[wh]=!0,T[Va]=y,T},H={_p:r,$id:t,$onAction:Ih.bind(null,m),$patch:x,$reset:z,$subscribe(_,y={}){const T=Ih(g,_,y.detached,()=>R()),R=a.run(()=>Ns(()=>r.state.value[t],b=>{(y.flush==="sync"?f:h)&&_({storeId:t,type:xs.direct,events:w},b)},Rn({},l,y)));return T},$dispose:Q},oe=Vo(H);r._s.set(t,oe);const A=(r._a&&r._a.runWithContext||_v)(()=>r._e.run(()=>(a=Kd()).run(()=>e({action:X}))));for(const _ in A){const y=A[_];if(Ne(y)&&!Ev(y)||Vn(y))i||(C&&vv(y)&&(Ne(y)?y.value=C[_]:nc(y,C[_])),r.state.value[t][_]=y);else if(typeof y=="function"){const T=X(y,_);A[_]=T,c.actions[_]=y}}return Rn(oe,A),Rn(_e(oe),A),Object.defineProperty(oe,"$state",{get:()=>r.state.value[t],set:_=>{x(y=>{Rn(y,_)})}}),r._p.forEach(_=>{Rn(oe,a.run(()=>_({store:oe,app:r._a,pinia:r,options:c})))}),C&&i&&n.hydrate&&n.hydrate(oe.$state,C),h=!0,f=!0,oe}function Jc(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function a(c,l){const h=ay();return c=c||(h?Vs(Kf,null):null),c&&$o(c),c=zf,c._s.has(r)||(i?Qf(r,e,s,c):Tv(r,s,c)),c._s.get(r)}return a.$id=r,a}const Jf=Jc("page",()=>{const t=xe("relays");return{currentPage:t,setPage:n=>{t.value=n}}}),Iv=bt({name:"task-bar",setup(){const t=Jf();function e(n){t.setPage(n)}return{selectPage:e}}}),St=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},wv={class:"task-bar"};function Av(t,e,n,r,s,i){return de(),Ve("div",wv,[He("div",{class:"task",onClick:e[0]||(e[0]=a=>t.selectPage("schedules"))},"Schedules"),He("div",{class:"task",onClick:e[1]||(e[1]=a=>t.selectPage("relays"))},"Relays")])}const Rv=St(Iv,[["render",Av],["__scopeId","data-v-db314ecb"]]),bv=bt({props:{spinnerSize:{type:String,default:"30px"},withText:{type:Boolean,default:!1}},setup(){return{}}}),Sv={class:"spinner"},Pv={key:0,class:"text"};function Cv(t,e,n,r,s,i){return de(),Ve("div",Sv,[He("div",{class:"spinner-inner",style:ei({"--spinnerSize":t.spinnerSize})},null,4),t.withText?(de(),Ve("div",Pv,"Laden...")):rn("",!0)])}const Xf=St(bv,[["render",Cv],["__scopeId","data-v-8cb8f775"]]),Dv=bt({components:{Spinner:Xf},props:{text:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},emits:["onButtonClicked"],setup(t,e){function n(){e.emit("onButtonClicked")}return{onClicked:n}}}),kv={key:1,class:"button-content"};function Vv(t,e,n,r,s,i){const a=at("spinner");return de(),Ve("div",{class:Zr(["button-default",{"is-loading":t.isLoading}]),tabindex:"0",onClick:e[0]||(e[0]=(...c)=>t.onClicked&&t.onClicked(...c)),onKeydown:e[1]||(e[1]=lv((...c)=>t.onClicked&&t.onClicked(...c),["enter"]))},[t.isLoading?(de(),wt(a,{key:0,spinnerSize:"20px"})):(de(),Ve("div",kv,[Wi(t.$slots,"icon",{},void 0),ao(" "+ti(t.text),1)]))],34)}const Xc=St(Dv,[["render",Vv],["__scopeId","data-v-5dad5cd0"]]),Yf=Jc("user",()=>{const t=xe(null);return{user:t,setUser:n=>{t.value=n}}});var Ah={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Nv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},ep={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,w=h&63;l||(w=64,a||(m=64)),r.push(n[f],n[g],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new Ov;const m=i<<2|c>>4;if(r.push(m),h!==64){const w=c<<4&240|h>>2;if(r.push(w),g!==64){const C=h<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ov extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xv=function(t){const e=Zf(t);return ep.encodeByteArray(e,!0)},lo=function(t){return xv(t).replace(/\./g,"")},tp=function(t){try{return ep.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lv=()=>Mv().__FIREBASE_DEFAULTS__,Fv=()=>{if(typeof process>"u"||typeof Ah>"u")return;const t=Ah.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tp(t[1]);return e&&JSON.parse(e)},Bo=()=>{try{return Lv()||Fv()||Uv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},np=t=>{var e,n;return(n=(e=Bo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$v=t=>{const e=np(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rp=()=>{var t;return(t=Bo())===null||t===void 0?void 0:t.config},sp=t=>{var e;return(e=Bo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function jv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[lo(JSON.stringify(n)),lo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function Hv(){var t;const e=(t=Bo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gv(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qv(){return!Hv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jv(){try{return typeof indexedDB=="object"}catch{return!1}}function Xv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Yv,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Zv(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new _n(s,c,r)}}function Zv(t,e){return t.replace(eE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eE=/\{\$([^}]+)}/g;function tE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Rh(i)&&Rh(a)){if(!uo(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Rh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nE(t,e){const n=new rE(t,e);return n.subscribe.bind(n)}class rE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Na),s.error===void 0&&(s.error=Na),s.complete===void 0&&(s.complete=Na);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Na(){}/**
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
 */function _t(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class iE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aE(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oE(t){return t===ir?void 0:t}function aE(t){return t.instantiationMode==="EAGER"}/**
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
 */class cE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const lE={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},uE=ue.INFO,hE={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},dE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yc{constructor(e){this.name=e,this._logLevel=uE,this._logHandler=dE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const fE=(t,e)=>e.some(n=>t instanceof n);let bh,Sh;function pE(){return bh||(bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gE(){return Sh||(Sh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ip=new WeakMap,rc=new WeakMap,op=new WeakMap,Oa=new WeakMap,Zc=new WeakMap;function mE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Nn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&ip.set(n,t)}).catch(()=>{}),Zc.set(e,t),e}function _E(t){if(rc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});rc.set(t,e)}let sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||op.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yE(t){sc=t(sc)}function vE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xa(this),e,...n);return op.set(r,e.sort?e.sort():[e]),Nn(r)}:gE().includes(t)?function(...e){return t.apply(xa(this),e),Nn(ip.get(this))}:function(...e){return Nn(t.apply(xa(this),e))}}function EE(t){return typeof t=="function"?vE(t):(t instanceof IDBTransaction&&_E(t),fE(t,pE())?new Proxy(t,sc):t)}function Nn(t){if(t instanceof IDBRequest)return mE(t);if(Oa.has(t))return Oa.get(t);const e=EE(t);return e!==t&&(Oa.set(t,e),Zc.set(e,t)),e}const xa=t=>Zc.get(t);function TE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Nn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Nn(a.result),l.oldVersion,l.newVersion,Nn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const IE=["get","getKey","getAll","getAllKeys","count"],wE=["put","add","delete","clear"],Ma=new Map;function Ph(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=wE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||IE.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Ma.set(e,i),i}yE(t=>({...t,get:(e,n,r)=>Ph(e,n)||t.get(e,n,r),has:(e,n)=>!!Ph(e,n)||t.has(e,n)}));/**
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
 */class AE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ic="@firebase/app",Ch="0.10.11";/**
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
 */const hn=new Yc("@firebase/app"),bE="@firebase/app-compat",SE="@firebase/analytics-compat",PE="@firebase/analytics",CE="@firebase/app-check-compat",DE="@firebase/app-check",kE="@firebase/auth",VE="@firebase/auth-compat",NE="@firebase/database",OE="@firebase/database-compat",xE="@firebase/functions",ME="@firebase/functions-compat",LE="@firebase/installations",FE="@firebase/installations-compat",UE="@firebase/messaging",$E="@firebase/messaging-compat",BE="@firebase/performance",jE="@firebase/performance-compat",qE="@firebase/remote-config",HE="@firebase/remote-config-compat",WE="@firebase/storage",zE="@firebase/storage-compat",KE="@firebase/firestore",GE="@firebase/vertexai-preview",QE="@firebase/firestore-compat",JE="firebase",XE="10.13.2";/**
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
 */const oc="[DEFAULT]",YE={[ic]:"fire-core",[bE]:"fire-core-compat",[PE]:"fire-analytics",[SE]:"fire-analytics-compat",[DE]:"fire-app-check",[CE]:"fire-app-check-compat",[kE]:"fire-auth",[VE]:"fire-auth-compat",[NE]:"fire-rtdb",[OE]:"fire-rtdb-compat",[xE]:"fire-fn",[ME]:"fire-fn-compat",[LE]:"fire-iid",[FE]:"fire-iid-compat",[UE]:"fire-fcm",[$E]:"fire-fcm-compat",[BE]:"fire-perf",[jE]:"fire-perf-compat",[qE]:"fire-rc",[HE]:"fire-rc-compat",[WE]:"fire-gcs",[zE]:"fire-gcs-compat",[KE]:"fire-fst",[QE]:"fire-fst-compat",[GE]:"fire-vertex","fire-js":"fire-js",[JE]:"fire-js-all"};/**
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
 */const ho=new Map,ZE=new Map,ac=new Map;function Dh(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hr(t){const e=t.name;if(ac.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;ac.set(e,t);for(const n of ho.values())Dh(n,t);for(const n of ZE.values())Dh(n,t);return!0}function el(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t.settings!==void 0}/**
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
 */const eT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},On=new si("app","Firebase",eT);/**
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
 */class tT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const es=XE;function ap(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw On.create("bad-app-name",{appName:String(s)});if(n||(n=rp()),!n)throw On.create("no-options");const i=ho.get(s);if(i){if(uo(n,i.options)&&uo(r,i.config))return i;throw On.create("duplicate-app",{appName:s})}const a=new cE(s);for(const l of ac.values())a.addComponent(l);const c=new tT(n,r,a);return ho.set(s,c),c}function cp(t=oc){const e=ho.get(t);if(!e&&t===oc&&rp())return ap();if(!e)throw On.create("no-app",{appName:t});return e}function xn(t,e,n){var r;let s=(r=YE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(c.join(" "));return}Hr(new fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const nT="firebase-heartbeat-database",rT=1,zs="firebase-heartbeat-store";let La=null;function lp(){return La||(La=TE(nT,rT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zs)}catch(n){console.warn(n)}}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),La}async function sT(t){try{const n=(await lp()).transaction(zs),r=await n.objectStore(zs).get(up(t));return await n.done,r}catch(e){if(e instanceof _n)hn.warn(e.message);else{const n=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function kh(t,e){try{const r=(await lp()).transaction(zs,"readwrite");await r.objectStore(zs).put(e,up(t)),await r.done}catch(n){if(n instanceof _n)hn.warn(n.message);else{const r=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(r.message)}}}function up(t){return`${t.name}!${t.options.appId}`}/**
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
 */const iT=1024,oT=30*24*60*60*1e3;class aT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=oT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vh(),{heartbeatsToSend:r,unsentEntries:s}=cT(this._heartbeatsCache.heartbeats),i=lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return hn.warn(n),""}}}function Vh(){return new Date().toISOString().substring(0,10)}function cT(t,e=iT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Nh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Nh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jv()?Xv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return kh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return kh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nh(t){return lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uT(t){Hr(new fr("platform-logger",e=>new AE(e),"PRIVATE")),Hr(new fr("heartbeat",e=>new aT(e),"PRIVATE")),xn(ic,Ch,t),xn(ic,Ch,"esm2017"),xn("fire-js","")}uT("");function tl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function hp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hT=hp,dp=new si("auth","Firebase",hp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Yc("@firebase/auth");function dT(t,...e){fo.logLevel<=ue.WARN&&fo.warn(`Auth (${es}): ${t}`,...e)}function Gi(t,...e){fo.logLevel<=ue.ERROR&&fo.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw rl(t,...e)}function Ot(t,...e){return rl(t,...e)}function nl(t,e,n){const r=Object.assign(Object.assign({},hT()),{[e]:n});return new si("auth","Firebase",r).create(e,{appName:t.name})}function ur(t){return nl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Kt(t,"argument-error"),nl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dp.create(t,...e)}function te(t,e,...n){if(!t)throw rl(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gi(e),new Error(e)}function dn(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pT(){return Oh()==="http:"||Oh()==="https:"}function Oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pT()||zv()||"connection"in navigator)?navigator.onLine:!0}function mT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=qv()||Kv()}get(){return gT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=new oi(3e4,6e4);function il(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ts(t,e,n,r,s={}){return pp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ii(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return Wv()||(h.referrerPolicy="no-referrer"),fp.fetch()(gp(t,t.config.apiHost,n,c),h)})}async function pp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_T),e);try{const s=new ET(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ui(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ui(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ui(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ui(t,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw nl(t,f,h);Kt(t,f)}}catch(s){if(s instanceof _n)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function vT(t,e,n,r,s={}){const i=await ts(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?sl(t.config,s):`${t.config.apiScheme}://${s}`}class ET{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),yT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ui(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ot(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(t,e){return ts(t,"POST","/v1/accounts:delete",e)}async function mp(t,e){return ts(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IT(t,e=!1){const n=_t(t),r=await n.getIdToken(e),s=ol(r);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ms(Fa(s.auth_time)),issuedAtTime:Ms(Fa(s.iat)),expirationTime:Ms(Fa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fa(t){return Number(t)*1e3}function ol(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gi("JWT malformed, contained fewer than 3 sections"),null;try{const s=tp(n);return s?JSON.parse(s):(Gi("Failed to decode base64 JWT payload"),null)}catch(s){return Gi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function xh(t){const e=ol(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&wT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ks(t,mp(n,{idToken:r}));te(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_p(i.providerUserInfo):[],c=bT(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new lc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function RT(t){const e=_t(t);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _p(t){return t.map(e=>{var{providerId:n}=e,r=tl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(t,e){const n=await pp(t,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=gp(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",fp.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PT(t,e){return ts(t,"POST","/v2/accounts:revokeToken",il(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=xh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ST(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Ur;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ur,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=tl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IT(this,e)}reload(){return RT(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(ur(this.auth));const e=await this.getIdToken();return await Ks(this,TT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=n.photoURL)!==null&&a!==void 0?a:void 0,V=(c=n.tenantId)!==null&&c!==void 0?c:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,z=(h=n.createdAt)!==null&&h!==void 0?h:void 0,Q=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:X,emailVerified:H,isAnonymous:oe,providerData:ye,stsTokenManager:A}=n;te(X&&A,e,"internal-error");const _=Ur.fromJSON(this.name,A);te(typeof X=="string",e,"internal-error"),An(g,e.name),An(m,e.name),te(typeof H=="boolean",e,"internal-error"),te(typeof oe=="boolean",e,"internal-error"),An(w,e.name),An(C,e.name),An(V,e.name),An(x,e.name),An(z,e.name),An(Q,e.name);const y=new an({uid:X,auth:e,email:m,emailVerified:H,displayName:g,isAnonymous:oe,photoURL:C,phoneNumber:w,tenantId:V,stsTokenManager:_,createdAt:z,lastLoginAt:Q});return ye&&Array.isArray(ye)&&(y.providerData=ye.map(T=>Object.assign({},T))),x&&(y._redirectEventId=x),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ur;s.updateFromServerResponse(n);const i=new an({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await po(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?_p(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ur;c.updateFromIdToken(r);const l=new an({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new lc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=new Map;function cn(t){dn(t instanceof Function,"Expected a class definition");let e=Mh.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mh.set(t,e),e)}/**
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
 */class yp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yp.type="NONE";const Lh=yp;/**
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
 */function Qi(t,e,n){return`firebase:${t}:${e}:${n}`}class $r{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $r(cn(Lh),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||cn(Lh);const a=Qi(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(a);if(f){const g=an._fromJSON(e,f);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new $r(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new $r(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ip(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ap(e))return"Blackberry";if(Rp(e))return"Webos";if(Ep(e))return"Safari";if((e.includes("chrome/")||Tp(e))&&!e.includes("edge/"))return"Chrome";if(wp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vp(t=ut()){return/firefox\//i.test(t)}function Ep(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tp(t=ut()){return/crios\//i.test(t)}function Ip(t=ut()){return/iemobile/i.test(t)}function wp(t=ut()){return/android/i.test(t)}function Ap(t=ut()){return/blackberry/i.test(t)}function Rp(t=ut()){return/webos/i.test(t)}function al(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CT(t=ut()){var e;return al(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DT(){return Gv()&&document.documentMode===10}function bp(t=ut()){return al(t)||wp(t)||Rp(t)||Ap(t)||/windows phone/i.test(t)||Ip(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e=[]){let n;switch(t){case"Browser":n=Fh(ut());break;case"Worker":n=`${Fh(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
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
 */class kT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function VT(t,e={}){return ts(t,"GET","/v2/passwordPolicy",il(t,e))}/**
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
 */const NT=6;class OT{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:NT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uh(this),this.idTokenSubscription=new Uh(this),this.beforeStateQueue=new kT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await $r.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mp(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(ur(this));const n=e?_t(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VT(this),n=new OT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await $r.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jo(t){return _t(t)}class Uh{constructor(e){this.auth=e,this.observer=null,this.addObserver=nE(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MT(t){cl=t}function LT(t){return cl.loadJS(t)}function FT(){return cl.gapiScript}function UT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t,e){const n=el(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(uo(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function BT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jT(t,e,n){const r=jo(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Pp(e),{host:a,port:c}=qT(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),HT()}function Pp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qT(t){const e=Pp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$h(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:$h(a)}}}function $h(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t,e){return vT(t,"POST","/v1/accounts:signInWithIdp",il(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="http://localhost";class pr extends Cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=tl(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new pr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Br(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Br(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Br(e,n)}buildRequest(){const e={requestUri:WT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ai extends ll{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ai{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends ai{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends ai{constructor(){super("twitter.com")}static credential(e,n){return pr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await an._fromIdTokenResponse(e,r,s),a=Bh(r);return new Wr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bh(r);return new Wr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends _n{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new go(e,n,r,s)}}function Dp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(t,i,e,r):i})}async function zT(t,e,n=!1){const r=await Ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wr._forOperation(t,"link",r)}/**
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
 */async function KT(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(ur(r));const s="reauthenticate";try{const i=await Ks(t,Dp(r,s,e,t),n);te(i.idToken,r,"internal-error");const a=ol(i.idToken);te(a,r,"internal-error");const{sub:c}=a;return te(t.uid===c,r,"user-mismatch"),Wr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(t,e,n=!1){if(sn(t.app))return Promise.reject(ur(t));const r="signIn",s=await Dp(t,r,e),i=await Wr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function QT(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function JT(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}const mo="__sak";/**
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
 */class kp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=1e3,YT=10;class Vp extends kp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);DT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,YT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vp.type="LOCAL";const ZT=Vp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np extends kp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Np.type="SESSION";const Op=Np;/**
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
 */function eI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await eI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=ul("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}function nI(t){qt().location.href=t}/**
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
 */function xp(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function rI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iI(){return xp()?self:null}/**
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
 */const Mp="firebaseLocalStorageDb",oI=1,_o="firebaseLocalStorage",Lp="fbase_key";class ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ho(t,e){return t.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function aI(){const t=indexedDB.deleteDatabase(Mp);return new ci(t).toPromise()}function uc(){const t=indexedDB.open(Mp,oI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_o,{keyPath:Lp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_o)?e(r):(r.close(),await aI(),e(await uc()))})})}async function jh(t,e,n){const r=Ho(t,!0).put({[Lp]:e,value:n});return new ci(r).toPromise()}async function cI(t,e){const n=Ho(t,!1).get(e),r=await new ci(n).toPromise();return r===void 0?null:r.value}function qh(t,e){const n=Ho(t,!0).delete(e);return new ci(n).toPromise()}const lI=800,uI=3;class Fp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(iI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rI(),!this.activeServiceWorker)return;this.sender=new tI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uc();return await jh(e,mo,"1"),await qh(e,mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ho(s,!1).getAll();return new ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fp.type="LOCAL";const hI=Fp;new oi(3e4,6e4);/**
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
 */function Up(t,e){return e?cn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hl extends Cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Br(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Br(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Br(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dI(t){return GT(t.auth,new hl(t),t.bypassAuthState)}function fI(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),KT(n,new hl(t),t.bypassAuthState)}async function pI(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),zT(n,new hl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dI;case"linkViaPopup":case"linkViaRedirect":return pI;case"reauthViaPopup":case"reauthViaRedirect":return fI;default:Kt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new oi(2e3,1e4);async function mI(t,e,n){if(sn(t.app))return Promise.reject(Ot(t,"operation-not-supported-in-this-environment"));const r=jo(t);fT(t,e,ll);const s=Up(r,n);return new or(r,"signInViaPopup",e,s).executeNotNull()}class or extends $p{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=ul();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gI.get())};e()}}or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="pendingRedirect",Ji=new Map;class yI extends $p{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ji.get(this.auth._key());if(!e){try{const r=await vI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ji.set(this.auth._key(),e)}return this.bypassAuthState||Ji.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vI(t,e){const n=II(e),r=TI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function EI(t,e){Ji.set(t._key(),e)}function TI(t){return cn(t._redirectPersistence)}function II(t){return Qi(_I,t.config.apiKey,t.name)}async function wI(t,e,n=!1){if(sn(t.app))return Promise.reject(ur(t));const r=jo(t),s=Up(r,e),a=await new yI(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=10*60*1e3;class RI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hh(e))}saveEventToCache(e){this.cachedEventUids.add(Hh(e)),this.lastProcessedEventTime=Date.now()}}function Hh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(t,e={}){return ts(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CI=/^https?/;async function DI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SI(t);for(const n of e)try{if(kI(n))return}catch{}Kt(t,"unauthorized-domain")}function kI(t){const e=cc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!CI.test(n))return!1;if(PI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const VI=new oi(3e4,6e4);function Wh(){const t=qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NI(t){return new Promise((e,n)=>{var r,s,i;function a(){Wh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wh(),n(Ot(t,"network-request-failed"))},timeout:VI.get()})}if(!((s=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qt().gapi)===null||i===void 0)&&i.load)a();else{const c=UT("iframefcb");return qt()[c]=()=>{gapi.load?a():n(Ot(t,"network-request-failed"))},LT(`${FT()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Xi=null,e})}let Xi=null;function OI(t){return Xi=Xi||NI(t),Xi}/**
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
 */const xI=new oi(5e3,15e3),MI="__/auth/iframe",LI="emulator/auth/iframe",FI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $I(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sl(e,LI):`https://${t.config.authDomain}/${MI}`,r={apiKey:e.apiKey,appName:t.name,v:es},s=UI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ii(r).slice(1)}`}async function BI(t){const e=await OI(t),n=qt().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:$I(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ot(t,"network-request-failed"),c=qt().setTimeout(()=>{i(a)},xI.get());function l(){qt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const jI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qI=500,HI=600,WI="_blank",zI="http://localhost";class zh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KI(t,e,n,r=qI,s=HI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},jI),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();n&&(c=Tp(h)?WI:n),vp(h)&&(e=e||zI,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[w,C])=>`${m}${w}=${C},`,"");if(CT(h)&&c!=="_self")return GI(e||"",c),new zh(null);const g=window.open(e||"",c,f);te(g,t,"popup-blocked");try{g.focus()}catch{}return new zh(g)}function GI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QI="__/auth/handler",JI="emulator/auth/handler",XI=encodeURIComponent("fac");async function Kh(t,e,n,r,s,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:s};if(e instanceof ll){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",tE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof ai){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${XI}=${encodeURIComponent(l)}`:"";return`${YI(t)}?${ii(c).slice(1)}${h}`}function YI({config:t}){return t.emulator?sl(t,JI):`https://${t.authDomain}/${QI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="webStorageSupport";class ZI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Op,this._completeRedirectFn=wI,this._overrideRedirectResult=EI}async _openPopup(e,n,r,s){var i;dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Kh(e,n,r,cc(),s);return KI(e,a,ul())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Kh(e,n,r,cc(),s);return nI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BI(e),r=new RI(e);return n.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ua,{type:Ua},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ua];a!==void 0&&n(!!a),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bp()||Ep()||al()}}const ew=ZI;var Gh="@firebase/auth",Qh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rw(t){Hr(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sp(t)},h=new xT(r,s,i,l);return BT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new fr("auth-internal",e=>{const n=jo(e.getProvider("auth").getImmediate());return(r=>new tw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Gh,Qh,nw(t)),xn(Gh,Qh,"esm2017")}/**
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
 */const sw=5*60,iw=sp("authIdTokenMaxAge")||sw;let Jh=null;const ow=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iw)return;const s=n==null?void 0:n.token;Jh!==s&&(Jh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zn(t=cp()){const e=el(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$T(t,{popupRedirectResolver:ew,persistence:[hI,ZT,Op]}),r=sp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=ow(i.toString());JT(n,a,()=>a(n.currentUser)),QT(n,c=>a(c))}}const s=np("auth");return s&&jT(n,`http://${s}`),n}function aw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}MT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ot("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",aw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rw("Browser");var cw="firebase",lw="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(cw,lw,"app");const uw={apiKey:"AIzaSyALY2Eu62yzZPuaySeDBI3ONz3DYCq2388",authDomain:"relay-hub.firebaseapp.com",projectId:"relay-hub",storageBucket:"relay-hub.appspot.com",messagingSenderId:"1088994606939",appId:"1:1088994606939:web:17dc0c1330726f959ca47e"},yn=ap(uw),hw=zn(yn),dw=async()=>{const t=new nn;try{return(await mI(hw,t)).user}catch(e){throw console.error("Error during sign-in:",e),e}},fw=bt({components:{ButtonDefault:Xc},emits:["onButtonClicked"],props:{},setup(){const t=Yf(),e=xe(!1);async function n(){e.value=!0;try{const r=await dw();t.setUser({uid:r.uid,displayName:r.displayName,email:r.email,photoURL:r.photoURL})}catch(r){t.setUser(null),console.error("Failed to sign in:",r)}}return{isLoading:e,onButtonClicked:n}}}),pw={class:"button-google"};function gw(t,e,n,r,s,i){const a=at("ButtonDefault");return de(),Ve("div",pw,[We(a,{text:"Sign in with Google",isLoading:t.isLoading,onOnButtonClicked:t.onButtonClicked},{icon:qc(()=>e[0]||(e[0]=[He("div",{class:"google-icon"},null,-1)])),_:1},8,["isLoading","onOnButtonClicked"])])}const mw=St(fw,[["render",gw],["__scopeId","data-v-e750a2f5"]]),_w=bt({name:"sign-in",components:{ButtonGoogle:mw},setup(){return{}}}),yw={class:"sign-in"};function vw(t,e,n,r,s,i){const a=at("button-google");return de(),Ve("div",yw,[e[0]||(e[0]=He("div",{class:"relay-hub"},"RelayHub",-1)),We(a)])}const Ew=St(_w,[["render",vw],["__scopeId","data-v-9540f920"]]),Tw=bt({props:{title:{type:String,required:!0}},setup(){return{}}}),Iw={class:"page-tite"};function ww(t,e,n,r,s,i){return de(),Ve("div",Iw,ti(t.$props.title),1)}const jp=St(Tw,[["render",ww],["__scopeId","data-v-7de7892e"]]),Aw=bt({name:"ToggleButton",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=xe(t.modelValue);return Ns(()=>t.modelValue,s=>{n.value=s}),{isActive:n,toggleSwitch:()=>{n.value=!n.value,e("update:modelValue",n.value)}}}});function Rw(t,e,n,r,s,i){return de(),Ve("div",{class:Zr(["toggle-switch",{active:t.isActive}]),onClick:e[0]||(e[0]=(...a)=>t.toggleSwitch&&t.toggleSwitch(...a))},e[1]||(e[1]=[He("div",{class:"switch"},null,-1)]),2)}const bw=St(Aw,[["render",Rw],["__scopeId","data-v-27553030"]]);var Xh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,qp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function y(){}y.prototype=_.prototype,A.D=_.prototype,A.prototype=new y,A.prototype.constructor=A,A.C=function(T,R,b){for(var E=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)E[ht-2]=arguments[ht];return _.prototype[R].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,y){y||(y=0);var T=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)T[R]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(R=0;16>R;++R)T[R]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=A.g[0],y=A.g[1],R=A.g[2];var b=A.g[3],E=_+(b^y&(R^b))+T[0]+3614090360&4294967295;_=y+(E<<7&4294967295|E>>>25),E=b+(R^_&(y^R))+T[1]+3905402710&4294967295,b=_+(E<<12&4294967295|E>>>20),E=R+(y^b&(_^y))+T[2]+606105819&4294967295,R=b+(E<<17&4294967295|E>>>15),E=y+(_^R&(b^_))+T[3]+3250441966&4294967295,y=R+(E<<22&4294967295|E>>>10),E=_+(b^y&(R^b))+T[4]+4118548399&4294967295,_=y+(E<<7&4294967295|E>>>25),E=b+(R^_&(y^R))+T[5]+1200080426&4294967295,b=_+(E<<12&4294967295|E>>>20),E=R+(y^b&(_^y))+T[6]+2821735955&4294967295,R=b+(E<<17&4294967295|E>>>15),E=y+(_^R&(b^_))+T[7]+4249261313&4294967295,y=R+(E<<22&4294967295|E>>>10),E=_+(b^y&(R^b))+T[8]+1770035416&4294967295,_=y+(E<<7&4294967295|E>>>25),E=b+(R^_&(y^R))+T[9]+2336552879&4294967295,b=_+(E<<12&4294967295|E>>>20),E=R+(y^b&(_^y))+T[10]+4294925233&4294967295,R=b+(E<<17&4294967295|E>>>15),E=y+(_^R&(b^_))+T[11]+2304563134&4294967295,y=R+(E<<22&4294967295|E>>>10),E=_+(b^y&(R^b))+T[12]+1804603682&4294967295,_=y+(E<<7&4294967295|E>>>25),E=b+(R^_&(y^R))+T[13]+4254626195&4294967295,b=_+(E<<12&4294967295|E>>>20),E=R+(y^b&(_^y))+T[14]+2792965006&4294967295,R=b+(E<<17&4294967295|E>>>15),E=y+(_^R&(b^_))+T[15]+1236535329&4294967295,y=R+(E<<22&4294967295|E>>>10),E=_+(R^b&(y^R))+T[1]+4129170786&4294967295,_=y+(E<<5&4294967295|E>>>27),E=b+(y^R&(_^y))+T[6]+3225465664&4294967295,b=_+(E<<9&4294967295|E>>>23),E=R+(_^y&(b^_))+T[11]+643717713&4294967295,R=b+(E<<14&4294967295|E>>>18),E=y+(b^_&(R^b))+T[0]+3921069994&4294967295,y=R+(E<<20&4294967295|E>>>12),E=_+(R^b&(y^R))+T[5]+3593408605&4294967295,_=y+(E<<5&4294967295|E>>>27),E=b+(y^R&(_^y))+T[10]+38016083&4294967295,b=_+(E<<9&4294967295|E>>>23),E=R+(_^y&(b^_))+T[15]+3634488961&4294967295,R=b+(E<<14&4294967295|E>>>18),E=y+(b^_&(R^b))+T[4]+3889429448&4294967295,y=R+(E<<20&4294967295|E>>>12),E=_+(R^b&(y^R))+T[9]+568446438&4294967295,_=y+(E<<5&4294967295|E>>>27),E=b+(y^R&(_^y))+T[14]+3275163606&4294967295,b=_+(E<<9&4294967295|E>>>23),E=R+(_^y&(b^_))+T[3]+4107603335&4294967295,R=b+(E<<14&4294967295|E>>>18),E=y+(b^_&(R^b))+T[8]+1163531501&4294967295,y=R+(E<<20&4294967295|E>>>12),E=_+(R^b&(y^R))+T[13]+2850285829&4294967295,_=y+(E<<5&4294967295|E>>>27),E=b+(y^R&(_^y))+T[2]+4243563512&4294967295,b=_+(E<<9&4294967295|E>>>23),E=R+(_^y&(b^_))+T[7]+1735328473&4294967295,R=b+(E<<14&4294967295|E>>>18),E=y+(b^_&(R^b))+T[12]+2368359562&4294967295,y=R+(E<<20&4294967295|E>>>12),E=_+(y^R^b)+T[5]+4294588738&4294967295,_=y+(E<<4&4294967295|E>>>28),E=b+(_^y^R)+T[8]+2272392833&4294967295,b=_+(E<<11&4294967295|E>>>21),E=R+(b^_^y)+T[11]+1839030562&4294967295,R=b+(E<<16&4294967295|E>>>16),E=y+(R^b^_)+T[14]+4259657740&4294967295,y=R+(E<<23&4294967295|E>>>9),E=_+(y^R^b)+T[1]+2763975236&4294967295,_=y+(E<<4&4294967295|E>>>28),E=b+(_^y^R)+T[4]+1272893353&4294967295,b=_+(E<<11&4294967295|E>>>21),E=R+(b^_^y)+T[7]+4139469664&4294967295,R=b+(E<<16&4294967295|E>>>16),E=y+(R^b^_)+T[10]+3200236656&4294967295,y=R+(E<<23&4294967295|E>>>9),E=_+(y^R^b)+T[13]+681279174&4294967295,_=y+(E<<4&4294967295|E>>>28),E=b+(_^y^R)+T[0]+3936430074&4294967295,b=_+(E<<11&4294967295|E>>>21),E=R+(b^_^y)+T[3]+3572445317&4294967295,R=b+(E<<16&4294967295|E>>>16),E=y+(R^b^_)+T[6]+76029189&4294967295,y=R+(E<<23&4294967295|E>>>9),E=_+(y^R^b)+T[9]+3654602809&4294967295,_=y+(E<<4&4294967295|E>>>28),E=b+(_^y^R)+T[12]+3873151461&4294967295,b=_+(E<<11&4294967295|E>>>21),E=R+(b^_^y)+T[15]+530742520&4294967295,R=b+(E<<16&4294967295|E>>>16),E=y+(R^b^_)+T[2]+3299628645&4294967295,y=R+(E<<23&4294967295|E>>>9),E=_+(R^(y|~b))+T[0]+4096336452&4294967295,_=y+(E<<6&4294967295|E>>>26),E=b+(y^(_|~R))+T[7]+1126891415&4294967295,b=_+(E<<10&4294967295|E>>>22),E=R+(_^(b|~y))+T[14]+2878612391&4294967295,R=b+(E<<15&4294967295|E>>>17),E=y+(b^(R|~_))+T[5]+4237533241&4294967295,y=R+(E<<21&4294967295|E>>>11),E=_+(R^(y|~b))+T[12]+1700485571&4294967295,_=y+(E<<6&4294967295|E>>>26),E=b+(y^(_|~R))+T[3]+2399980690&4294967295,b=_+(E<<10&4294967295|E>>>22),E=R+(_^(b|~y))+T[10]+4293915773&4294967295,R=b+(E<<15&4294967295|E>>>17),E=y+(b^(R|~_))+T[1]+2240044497&4294967295,y=R+(E<<21&4294967295|E>>>11),E=_+(R^(y|~b))+T[8]+1873313359&4294967295,_=y+(E<<6&4294967295|E>>>26),E=b+(y^(_|~R))+T[15]+4264355552&4294967295,b=_+(E<<10&4294967295|E>>>22),E=R+(_^(b|~y))+T[6]+2734768916&4294967295,R=b+(E<<15&4294967295|E>>>17),E=y+(b^(R|~_))+T[13]+1309151649&4294967295,y=R+(E<<21&4294967295|E>>>11),E=_+(R^(y|~b))+T[4]+4149444226&4294967295,_=y+(E<<6&4294967295|E>>>26),E=b+(y^(_|~R))+T[11]+3174756917&4294967295,b=_+(E<<10&4294967295|E>>>22),E=R+(_^(b|~y))+T[2]+718787259&4294967295,R=b+(E<<15&4294967295|E>>>17),E=y+(b^(R|~_))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+b&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var y=_-this.blockSize,T=this.B,R=this.h,b=0;b<_;){if(R==0)for(;b<=y;)s(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<_;)if(T[R++]=A.charCodeAt(b++),R==this.blockSize){s(this,T),R=0;break}}else for(;b<_;)if(T[R++]=A[b++],R==this.blockSize){s(this,T),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var y=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=y&255,y/=256;for(this.u(A),A=Array(16),_=y=0;4>_;++_)for(var T=0;32>T;T+=8)A[y++]=this.g[_]>>>T&255;return A};function i(A,_){var y=c;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=_(A)}function a(A,_){this.h=_;for(var y=[],T=!0,R=A.length-1;0<=R;R--){var b=A[R]|0;T&&b==_||(y[R]=b,T=!1)}this.g=y}var c={};function l(A){return-128<=A&&128>A?i(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return g;if(0>A)return x(h(-A));for(var _=[],y=1,T=0;A>=y;T++)_[T]=A/y|0,y*=4294967296;return new a(_,0)}function f(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return x(f(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(_,8)),T=g,R=0;R<A.length;R+=8){var b=Math.min(8,A.length-R),E=parseInt(A.substring(R,R+b),_);8>b?(b=h(Math.pow(_,b)),T=T.j(b).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var g=l(0),m=l(1),w=l(16777216);t=a.prototype,t.m=function(){if(V(this))return-x(this).m();for(var A=0,_=1,y=0;y<this.g.length;y++){var T=this.i(y);A+=(0<=T?T:4294967296+T)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(V(this))return"-"+x(this).toString(A);for(var _=h(Math.pow(A,6)),y=this,T="";;){var R=H(y,_).g;y=z(y,R.j(_));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(A);if(y=R,C(y))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function V(A){return A.h==-1}t.l=function(A){return A=z(this,A),V(A)?-1:C(A)?0:1};function x(A){for(var _=A.g.length,y=[],T=0;T<_;T++)y[T]=~A.g[T];return new a(y,~A.h).add(m)}t.abs=function(){return V(this)?x(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],T=0,R=0;R<=_;R++){var b=T+(this.i(R)&65535)+(A.i(R)&65535),E=(b>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);T=E>>>16,b&=65535,E&=65535,y[R]=E<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(A,_){return A.add(x(_))}t.j=function(A){if(C(this)||C(A))return g;if(V(this))return V(A)?x(this).j(x(A)):x(x(this).j(A));if(V(A))return x(this.j(x(A)));if(0>this.l(w)&&0>A.l(w))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,y=[],T=0;T<2*_;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<A.g.length;R++){var b=this.i(T)>>>16,E=this.i(T)&65535,ht=A.i(R)>>>16,Lt=A.i(R)&65535;y[2*T+2*R]+=E*Lt,Q(y,2*T+2*R),y[2*T+2*R+1]+=b*Lt,Q(y,2*T+2*R+1),y[2*T+2*R+1]+=E*ht,Q(y,2*T+2*R+1),y[2*T+2*R+2]+=b*ht,Q(y,2*T+2*R+2)}for(T=0;T<_;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=_;T<2*_;T++)y[T]=0;return new a(y,0)};function Q(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function X(A,_){this.g=A,this.h=_}function H(A,_){if(C(_))throw Error("division by zero");if(C(A))return new X(g,g);if(V(A))return _=H(x(A),_),new X(x(_.g),x(_.h));if(V(_))return _=H(A,x(_)),new X(x(_.g),_.h);if(30<A.g.length){if(V(A)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var y=m,T=_;0>=T.l(A);)y=oe(y),T=oe(T);var R=ye(y,1),b=ye(T,1);for(T=ye(T,2),y=ye(y,2);!C(T);){var E=b.add(T);0>=E.l(A)&&(R=R.add(y),b=E),T=ye(T,1),y=ye(y,1)}return _=z(A,R.j(_)),new X(R,_)}for(R=g;0<=A.l(_);){for(y=Math.max(1,Math.floor(A.m()/_.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(y),E=b.j(_);V(E)||0<E.l(A);)y-=T,b=h(y),E=b.j(_);C(b)&&(b=m),R=R.add(b),A=z(A,E)}return new X(R,A)}t.A=function(A){return H(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)&A.i(T);return new a(y,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)|A.i(T);return new a(y,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)^A.i(T);return new a(y,this.h^A.h)};function oe(A){for(var _=A.g.length+1,y=[],T=0;T<_;T++)y[T]=A.i(T)<<1|A.i(T-1)>>>31;return new a(y,A.h)}function ye(A,_){var y=_>>5;_%=32;for(var T=A.g.length-y,R=[],b=0;b<T;b++)R[b]=0<_?A.i(b+y)>>>_|A.i(b+y+1)<<32-_:A.i(b+y);return new a(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,hr=a}).apply(typeof Xh<"u"?Xh:typeof self<"u"?self:typeof window<"u"?window:{});var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hp,Wp,bs,zp,Yi,hc,Kp,Gp,Qp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $i=="object"&&$i];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in d))break e;d=d[S]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,S={next:function(){if(!p&&d<o.length){var P=d++;return{value:u(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function m(o,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,m.apply(null,arguments)}function w(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function C(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,S,P){for(var B=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)B[Te-2]=arguments[Te];return u.prototype[S].apply(p,B)}}function V(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function x(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(l(p)){const S=o.length||0,P=p.length||0;o.length=S+P;for(let B=0;B<P;B++)o[S+B]=p[B]}else o.push(p)}}class z{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Q(o){return/^[\s\xa0]*$/.test(o)}function X(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var oe=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function ye(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function A(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function _(o){const u={};for(const d in o)u[d]=o[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)o[d]=p[d];for(let P=0;P<y.length;P++)d=y[P],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function R(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function b(o){c.setTimeout(()=>{throw o},0)}function E(){var o=kt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,d){const p=Lt.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Lt=new z(()=>new Se,o=>o.reset());class Se{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,fe=!1,kt=new ht,Gn=()=>{const o=c.Promise.resolve(void 0);ce=()=>{o.then(Qt)}};var Qt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){b(d)}var u=Lt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}fe=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var ia=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function Qn(o,u){if($e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{H(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Jn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qn.aa.h.call(this)}}C(Qn,$e);var Jn={2:"touch",3:"pen",4:"mouse"};Qn.prototype.h=function(){Qn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Jt="closure_listenable_"+(1e6*Math.random()|0),cs=0;function yi(o,u,d,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=S,this.key=++cs,this.da=this.fa=!1}function Ft(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Xn(o){this.src=o,this.g={},this.h=0}Xn.prototype.add=function(o,u,d,p,S){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var B=v(o,u,p,S);return-1<B?(u=o[B],d||(u.fa=!1)):(u=new yi(u,this.src,P,!!p,S),u.fa=d,o.push(u)),u};function Er(o,u){var d=u.type;if(d in o.g){var p=o.g[d],S=Array.prototype.indexOf.call(p,u,void 0),P;(P=0<=S)&&Array.prototype.splice.call(p,S,1),P&&(Ft(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function v(o,u,d,p){for(var S=0;S<o.length;++S){var P=o[S];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==p)return S}return-1}var I="closure_lm_"+(1e6*Math.random()|0),D={};function L(o,u,d,p,S){if(Array.isArray(u)){for(var P=0;P<u.length;P++)L(o,u[P],d,p,S);return null}return d=J(d),o&&o[Jt]?o.K(u,d,h(p)?!!p.capture:!!p,S):N(o,u,d,!1,p,S)}function N(o,u,d,p,S,P){if(!u)throw Error("Invalid event type");var B=h(S)?!!S.capture:!!S,Te=Z(o);if(Te||(o[I]=Te=new Xn(o)),d=Te.add(u,d,p,B,P),d.proxy)return d;if(p=M(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)ia||(S=B),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(U(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function M(){function o(d){return u.call(o.src,o.listener,d)}const u=F;return o}function j(o,u,d,p,S){if(Array.isArray(u))for(var P=0;P<u.length;P++)j(o,u[P],d,p,S);else p=h(p)?!!p.capture:!!p,d=J(d),o&&o[Jt]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],d=v(P,d,p,S),-1<d&&(Ft(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=Z(o))&&(u=o.g[u.toString()],o=-1,u&&(o=v(u,d,p,S)),(d=-1<o?u[o]:null)&&$(d))}function $(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Jt])Er(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(U(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=Z(u))?(Er(d,o),d.h==0&&(d.src=null,u[I]=null)):Ft(o)}}}function U(o){return o in D?D[o]:D[o]="on"+o}function F(o,u){if(o.da)o=!0;else{u=new Qn(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&$(o),o=d.call(p,u)}return o}function Z(o){return o=o[I],o instanceof Xn?o:null}var q="__closure_events_fn_"+(1e9*Math.random()>>>0);function J(o){return typeof o=="function"?o:(o[q]||(o[q]=function(u){return o.handleEvent(u)}),o[q])}function K(){Ue.call(this),this.i=new Xn(this),this.M=this,this.F=null}C(K,Ue),K.prototype[Jt]=!0,K.prototype.removeEventListener=function(o,u,d,p){j(this,o,u,d,p)};function ee(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new $e(u,o);else if(u instanceof $e)u.target=u.target||o;else{var S=u;u=new $e(p,o),T(u,S)}if(S=!0,d)for(var P=d.length-1;0<=P;P--){var B=u.g=d[P];S=ve(B,p,!0,u)&&S}if(B=u.g=o,S=ve(B,p,!0,u)&&S,S=ve(B,p,!1,u)&&S,d)for(P=0;P<d.length;P++)B=u.g=d[P],S=ve(B,p,!1,u)&&S}K.prototype.N=function(){if(K.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Ft(d[p]);delete o.g[u],o.h--}}this.F=null},K.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},K.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function ve(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,P=0;P<u.length;++P){var B=u[P];if(B&&!B.da&&B.capture==d){var Te=B.listener,Ke=B.ha||B.src;B.fa&&Er(o.i,B),S=Te.call(Ke,p)!==!1&&S}}return S&&!p.defaultPrevented}function pe(o,u,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function et(o){o.g=pe(()=>{o.g=null,o.i&&(o.i=!1,et(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Be extends Ue{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(o){Ue.call(this),this.h=o,this.g={}}C(ze,Ue);var tt=[];function vn(o){ye(o.g,function(u,d){this.g.hasOwnProperty(d)&&$(u)},o),o.g={}}ze.prototype.N=function(){ze.aa.N.call(this),vn(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tr=c.JSON.stringify,dt=c.JSON.parse,Pt=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ir(){}Ir.prototype.h=null;function Ql(o){return o.h||(o.h=o.i())}function Jl(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oa(){$e.call(this,"d")}C(oa,$e);function aa(){$e.call(this,"c")}C(aa,$e);var Yn={},Xl=null;function vi(){return Xl=Xl||new K}Yn.La="serverreachability";function Yl(o){$e.call(this,Yn.La,o)}C(Yl,$e);function us(o){const u=vi();ee(u,new Yl(u))}Yn.STAT_EVENT="statevent";function Zl(o,u){$e.call(this,Yn.STAT_EVENT,o),this.stat=u}C(Zl,$e);function ft(o){const u=vi();ee(u,new Zl(u,o))}Yn.Ma="timingevent";function eu(o,u){$e.call(this,Yn.Ma,o),this.size=u}C(eu,$e);function hs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ds(){this.g=!0}ds.prototype.xa=function(){this.g=!1};function ym(o,u,d,p,S,P){o.info(function(){if(o.g)if(P)for(var B="",Te=P.split("&"),Ke=0;Ke<Te.length;Ke++){var ge=Te[Ke].split("=");if(1<ge.length){var nt=ge[0];ge=ge[1];var rt=nt.split("_");B=2<=rt.length&&rt[1]=="type"?B+(nt+"="+ge+"&"):B+(nt+"=redacted&")}}else B=null;else B=P;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+d+`
`+B})}function vm(o,u,d,p,S,P,B){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+d+`
`+P+" "+B})}function wr(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Tm(o,d)+(p?" "+p:"")})}function Em(o,u){o.info(function(){return"TIMEOUT: "+u})}ds.prototype.info=function(){};function Tm(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var P=S[0];if(P!="noop"&&P!="stop"&&P!="close")for(var B=1;B<S.length;B++)S[B]=""}}}}return Tr(d)}catch{return u}}var Ei={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ca;function Ti(){}C(Ti,Ir),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},ca=new Ti;function En(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nu}function nu(){this.i=null,this.g="",this.h=!1}var ru={},la={};function ua(o,u,d){o.L=1,o.v=Ri(Xt(u)),o.m=d,o.P=!0,su(o,null)}function su(o,u){o.F=Date.now(),Ii(o),o.A=Xt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),yu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new nu,o.g=Mu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Be(m(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(tt[0]=S.toString()),S=tt);for(var P=0;P<S.length;P++){var B=L(d,S[P],p||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),us(),ym(o.i,o.u,o.A,o.l,o.R,o.m)}En.prototype.ca=function(o){o=o.target;const u=this.M;u&&Yt(o)==3?u.j():this.Y(o)},En.prototype.Y=function(o){try{if(o==this.g)e:{const rt=Yt(this.g);var u=this.g.Ba();const br=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Ru(this.g)))){this.J||rt!=4||u==7||(u==8||0>=br?us(3):us(2)),ha(this);var d=this.g.Z();this.X=d;t:if(iu(this)){var p=Ru(this.g);o="";var S=p.length,P=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),fs(this);var B="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(P&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,vm(this.i,this.u,this.A,this.l,this.R,rt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,Ke=this.g;if((Te=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Te)){var ge=Te;break t}}ge=null}if(d=ge)wr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,da(this,d);else{this.o=!1,this.s=3,ft(12),Zn(this),fs(this);break e}}if(this.P){d=!0;let Vt;for(;!this.J&&this.C<B.length;)if(Vt=Im(this,B),Vt==la){rt==4&&(this.s=4,ft(14),d=!1),wr(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==ru){this.s=4,ft(15),wr(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else wr(this.i,this.l,Vt,null),da(this,Vt);if(iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||B.length!=0||this.h.h||(this.s=1,ft(16),d=!1),this.o=this.o&&d,!d)wr(this.i,this.l,B,"[Invalid Chunked Response]"),Zn(this),fs(this);else if(0<B.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),ya(nt),nt.M=!0,ft(11))}}else wr(this.i,this.l,B,null),da(this,B);rt==4&&Zn(this),this.o&&!this.J&&(rt==4?Vu(this.j,this):(this.o=!1,Ii(this)))}else Um(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Zn(this),fs(this)}}}catch{}finally{}};function iu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Im(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?la:(d=Number(u.substring(d,p)),isNaN(d)?ru:(p+=1,p+d>u.length?la:(u=u.slice(p,p+d),o.C=p+d,u)))}En.prototype.cancel=function(){this.J=!0,Zn(this)};function Ii(o){o.S=Date.now()+o.I,ou(o,o.I)}function ou(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=hs(m(o.ba,o),u)}function ha(o){o.B&&(c.clearTimeout(o.B),o.B=null)}En.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Em(this.i,this.A),this.L!=2&&(us(),ft(17)),Zn(this),this.s=2,fs(this)):ou(this,this.S-o)};function fs(o){o.j.G==0||o.J||Vu(o.j,o)}function Zn(o){ha(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,vn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function da(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||fa(d.h,o))){if(!o.K&&fa(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Di(d),Pi(d);else break e;_a(d),ft(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=hs(m(d.Za,d),6e3));if(1>=lu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else tr(d,11)}else if((o.K||d.g==o)&&Di(d),!Q(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let ge=S[u];if(d.T=ge[0],ge=ge[1],d.G==2)if(ge[0]=="c"){d.K=ge[1],d.ia=ge[2];const nt=ge[3];nt!=null&&(d.la=nt,d.j.info("VER="+d.la));const rt=ge[4];rt!=null&&(d.Aa=rt,d.j.info("SVER="+d.Aa));const br=ge[5];br!=null&&typeof br=="number"&&0<br&&(p=1.5*br,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Vt=o.g;if(Vt){const Vi=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vi){var P=p.h;P.g||Vi.indexOf("spdy")==-1&&Vi.indexOf("quic")==-1&&Vi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(pa(P,P.h),P.h=null))}if(p.D){const va=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;va&&(p.ya=va,Re(p.I,p.D,va))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var B=o;if(p.qa=xu(p,p.J?p.ia:null,p.W),B.K){uu(p.h,B);var Te=B,Ke=p.L;Ke&&(Te.I=Ke),Te.B&&(ha(Te),Ii(Te)),p.g=B}else Du(p);0<d.i.length&&Ci(d)}else ge[0]!="stop"&&ge[0]!="close"||tr(d,7);else d.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?tr(d,7):ma(d):ge[0]!="noop"&&d.l&&d.l.ta(ge),d.v=0)}}us(4)}catch{}}var wm=class{constructor(o,u){this.g=o,this.map=u}};function au(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function lu(o){return o.h?1:o.g?o.g.size:0}function fa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function pa(o,u){o.g?o.g.add(u):o.h=u}function uu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}au.prototype.cancel=function(){if(this.i=hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return V(o.i)}function Am(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function Rm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function du(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Rm(o),p=Am(o),S=p.length,P=0;P<S;P++)u.call(void 0,p[P],d&&d[P],o)}var fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),S=null;if(0<=p){var P=o[d].substring(0,p);S=o[d].substring(p+1)}else P=o[d];u(P,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function er(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof er){this.h=o.h,wi(this,o.j),this.o=o.o,this.g=o.g,Ai(this,o.s),this.l=o.l;var u=o.i,d=new ms;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),pu(this,d),this.m=o.m}else o&&(u=String(o).match(fu))?(this.h=!1,wi(this,u[1]||"",!0),this.o=ps(u[2]||""),this.g=ps(u[3]||"",!0),Ai(this,u[4]),this.l=ps(u[5]||"",!0),pu(this,u[6]||"",!0),this.m=ps(u[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}er.prototype.toString=function(){var o=[],u=this.j;u&&o.push(gs(u,gu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(gs(u,gu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(gs(d,d.charAt(0)=="/"?Cm:Pm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",gs(d,km)),o.join("")};function Xt(o){return new er(o)}function wi(o,u,d){o.j=d?ps(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ai(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function pu(o,u,d){u instanceof ms?(o.i=u,Vm(o.i,o.h)):(d||(u=gs(u,Dm)),o.i=new ms(u,o.h))}function Re(o,u,d){o.i.set(u,d)}function Ri(o){return Re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ps(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function gs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Sm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Sm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var gu=/[#\/\?@]/g,Pm=/[#\?:]/g,Cm=/[#\?]/g,Dm=/[#\?@]/g,km=/#/g;function ms(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Tn(o){o.g||(o.g=new Map,o.h=0,o.i&&bm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=ms.prototype,t.add=function(o,u){Tn(this),this.i=null,o=Ar(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function mu(o,u){Tn(o),u=Ar(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function _u(o,u){return Tn(o),u=Ar(o,u),o.g.has(u)}t.forEach=function(o,u){Tn(this),this.g.forEach(function(d,p){d.forEach(function(S){o.call(u,S,p,this)},this)},this)},t.na=function(){Tn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const S=o[p];for(let P=0;P<S.length;P++)d.push(u[p])}return d},t.V=function(o){Tn(this);let u=[];if(typeof o=="string")_u(this,o)&&(u=u.concat(this.g.get(Ar(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return Tn(this),this.i=null,o=Ar(this,o),_u(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function yu(o,u,d){mu(o,u),0<d.length&&(o.i=null,o.g.set(Ar(o,u),V(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const P=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var S=P;B[p]!==""&&(S+="="+encodeURIComponent(String(B[p]))),o.push(S)}}return this.i=o.join("&")};function Ar(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Vm(o,u){u&&!o.j&&(Tn(o),o.i=null,o.g.forEach(function(d,p){var S=p.toLowerCase();p!=S&&(mu(this,p),yu(this,S,d))},o)),o.j=u}function Nm(o,u){const d=new ds;if(c.Image){const p=new Image;p.onload=w(In,d,"TestLoadImage: loaded",!0,u,p),p.onerror=w(In,d,"TestLoadImage: error",!1,u,p),p.onabort=w(In,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=w(In,d,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Om(o,u){const d=new ds,p=new AbortController,S=setTimeout(()=>{p.abort(),In(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(S),P.ok?In(d,"TestPingServer: ok",!0,u):In(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),In(d,"TestPingServer: error",!1,u)})}function In(o,u,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function xm(){this.g=new Pt}function Mm(o,u,d){const p=d||"";try{du(o,function(S,P){let B=S;h(S)&&(B=Tr(S)),u.push(p+P+"="+encodeURIComponent(B))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function _s(o){this.l=o.Ub||null,this.j=o.eb||!1}C(_s,Ir),_s.prototype.g=function(){return new bi(this.l,this.j)},_s.prototype.i=function(o){return function(){return o}}({});function bi(o,u){K.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(bi,K),t=bi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,vs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function vu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ys(this):vs(this),this.readyState==3&&vu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ys(this))},t.Qa=function(o){this.g&&(this.response=o,ys(this))},t.ga=function(){this.g&&ys(this)};function ys(o){o.readyState=4,o.l=null,o.j=null,o.v=null,vs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function vs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Eu(o){let u="";return ye(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function ga(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Eu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Re(o,u,d))}function De(o){K.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(De,K);var Lm=/^https?$/i,Fm=["POST","PUT"];t=De.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ca.g(),this.v=this.o?Ql(this.o):Ql(ca),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Tu(this,P);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())d.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Fm,u,void 0))||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,B]of d)this.g.setRequestHeader(P,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Au(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Tu(this,P)}};function Tu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Iu(o),Si(o)}function Iu(o){o.A||(o.A=!0,ee(o,"complete"),ee(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ee(this,"complete"),ee(this,"abort"),Si(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Si(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wu(this):this.bb())},t.bb=function(){wu(this)};function wu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Yt(o)!=4||o.Z()!=2)){if(o.u&&Yt(o)==4)pe(o.Ea,0,o);else if(ee(o,"readystatechange"),Yt(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=B===0){var S=String(o.D).match(fu)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),p=!Lm.test(S?S.toLowerCase():"")}d=p}if(d)ee(o,"complete"),ee(o,"success");else{o.m=6;try{var P=2<Yt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Iu(o)}}finally{Si(o)}}}}function Si(o,u){if(o.g){Au(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ee(o,"ready");try{d.onreadystatechange=p}catch{}}}function Au(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Yt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),dt(u)}};function Ru(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Um(o){const u={};o=(o.g&&2<=Yt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(Q(o[p]))continue;var d=R(o[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[S]||[];u[S]=P,P.push(d)}A(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Es(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function bu(o){this.Aa=0,this.i=[],this.j=new ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Es("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Es("baseRetryDelayMs",5e3,o),this.cb=Es("retryDelaySeedMs",1e4,o),this.Wa=Es("forwardChannelMaxRetries",2,o),this.wa=Es("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new au(o&&o.concurrentRequestLimit),this.Da=new xm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=bu.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,p){ft(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=xu(this,null,this.W),Ci(this)};function ma(o){if(Su(o),o.G==3){var u=o.U++,d=Xt(o.I);if(Re(d,"SID",o.K),Re(d,"RID",u),Re(d,"TYPE","terminate"),Ts(o,d),u=new En(o,o.j,u),u.L=2,u.v=Ri(Xt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Mu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ii(u)}Ou(o)}function Pi(o){o.g&&(ya(o),o.g.cancel(),o.g=null)}function Su(o){Pi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Di(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ci(o){if(!cu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ce||Gn(),fe||(ce(),fe=!0),kt.add(u,o),o.B=0}}function $m(o,u){return lu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=hs(m(o.Ga,o,u),Nu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new En(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(S.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Cu(this,S,u),d=Xt(this.I),Re(d,"RID",o),Re(d,"CVER",22),this.D&&Re(d,"X-HTTP-Session-Id",this.D),Ts(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(Eu(P)))+"&"+u:this.m&&ga(d,this.m,P)),pa(this.h,S),this.Ua&&Re(d,"TYPE","init"),this.P?(Re(d,"$req",u),Re(d,"SID","null"),S.T=!0,ua(S,d,null)):ua(S,d,u),this.G=2}}else this.G==3&&(o?Pu(this,o):this.i.length==0||cu(this.h)||Pu(this))};function Pu(o,u){var d;u?d=u.l:d=o.U++;const p=Xt(o.I);Re(p,"SID",o.K),Re(p,"RID",d),Re(p,"AID",o.T),Ts(o,p),o.m&&o.o&&ga(p,o.m,o.o),d=new En(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Cu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),pa(o.h,d),ua(d,p,u)}function Ts(o,u){o.H&&ye(o.H,function(d,p){Re(u,p,d)}),o.l&&du({},function(d,p){Re(u,p,d)})}function Cu(o,u,d){d=Math.min(o.i.length,d);var p=o.l?m(o.l.Na,o.l,o):null;e:{var S=o.i;let P=-1;for(;;){const B=["count="+d];P==-1?0<d?(P=S[0].g,B.push("ofs="+P)):P=0:B.push("ofs="+P);let Te=!0;for(let Ke=0;Ke<d;Ke++){let ge=S[Ke].g;const nt=S[Ke].map;if(ge-=P,0>ge)P=Math.max(0,S[Ke].g-100),Te=!1;else try{Mm(nt,B,"req"+ge+"_")}catch{p&&p(nt)}}if(Te){p=B.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function Du(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ce||Gn(),fe||(ce(),fe=!0),kt.add(u,o),o.v=0}}function _a(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=hs(m(o.Fa,o),Nu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,ku(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=hs(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Pi(this),ku(this))};function ya(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function ku(o){o.g=new En(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Xt(o.qa);Re(u,"RID","rpc"),Re(u,"SID",o.K),Re(u,"AID",o.T),Re(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Re(u,"TO",o.ja),Re(u,"TYPE","xmlhttp"),Ts(o,u),o.m&&o.o&&ga(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ri(Xt(u)),d.m=null,d.P=!0,su(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Pi(this),_a(this),ft(19))};function Di(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Vu(o,u){var d=null;if(o.g==u){Di(o),ya(o),o.g=null;var p=2}else if(fa(o.h,u))d=u.D,uu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=vi(),ee(p,new eu(p,d)),Ci(o)}else Du(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&$m(o,u)||p==2&&_a(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:tr(o,5);break;case 4:tr(o,10);break;case 3:tr(o,6);break;default:tr(o,2)}}}function Nu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function tr(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.fb,o),p=o.Xa;const S=!p;p=new er(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||wi(p,"https"),Ri(p),S?Nm(p.toString(),d):Om(p.toString(),d)}else ft(2);o.G=0,o.l&&o.l.sa(u),Ou(o),Su(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Ou(o){if(o.G=0,o.ka=[],o.l){const u=hu(o.h);(u.length!=0||o.i.length!=0)&&(x(o.ka,u),x(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function xu(o,u,d){var p=d instanceof er?Xt(d):new er(d);if(p.g!="")u&&(p.g=u+"."+p.g),Ai(p,p.s);else{var S=c.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var P=new er(null);p&&wi(P,p),u&&(P.g=u),S&&Ai(P,S),d&&(P.l=d),p=P}return d=o.D,u=o.ya,d&&u&&Re(p,d,u),Re(p,"VER",o.la),Ts(o,p),p}function Mu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new De(new _s({eb:d})):new De(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lu(){}t=Lu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ki(){}ki.prototype.g=function(o,u){return new Et(o,u)};function Et(o,u){K.call(this),this.g=new bu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!Q(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Q(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Rr(this)}C(Et,K),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){ma(this.g)},Et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Tr(o),o=d);u.i.push(new wm(u.Ya++,o)),u.G==3&&Ci(u)},Et.prototype.N=function(){this.g.l=null,delete this.j,ma(this.g),delete this.g,Et.aa.N.call(this)};function Fu(o){oa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(Fu,oa);function Uu(){aa.call(this),this.status=1}C(Uu,aa);function Rr(o){this.g=o}C(Rr,Lu),Rr.prototype.ua=function(){ee(this.g,"a")},Rr.prototype.ta=function(o){ee(this.g,new Fu(o))},Rr.prototype.sa=function(o){ee(this.g,new Uu)},Rr.prototype.ra=function(){ee(this.g,"b")},ki.prototype.createWebChannel=ki.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Qp=function(){return new ki},Gp=function(){return vi()},Kp=Yn,hc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ei.NO_ERROR=0,Ei.TIMEOUT=8,Ei.HTTP_ERROR=6,Yi=Ei,tu.COMPLETE="complete",zp=tu,Jl.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",K.prototype.listen=K.prototype.K,bs=Jl,Wp=_s,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,Hp=De}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});const Yh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Yc("@firebase/firestore");function As(){return gr.logLevel}function G(t,...e){if(gr.logLevel<=ue.DEBUG){const n=e.map(dl);gr.debug(`Firestore (${ns}): ${t}`,...n)}}function fn(t,...e){if(gr.logLevel<=ue.ERROR){const n=e.map(dl);gr.error(`Firestore (${ns}): ${t}`,...n)}}function zr(t,...e){if(gr.logLevel<=ue.WARN){const n=e.map(dl);gr.warn(`Firestore (${ns}): ${t}`,...n)}}function dl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${ns}) INTERNAL ASSERTION FAILED: `+t;throw fn(e),new Error(e)}function we(t,e){t||ne()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Pw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Cw{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new un,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new un)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new Jp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new it(e)}}class Dw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Dw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new Vw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ow(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function Kr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new Le(0,0))}static max(){return new se(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends Gs{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const xw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Gs{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return xw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new W(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new W(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(be.fromString(e))}static fromName(e){return new Y(be.fromString(e).popFirst(5))}static empty(){return new Y(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new be(e.slice()))}}function Mw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Un(s,Y.empty(),e)}function Lw(t){return new Un(t.readTime,t.key,-1)}class Un{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Un(se.min(),Y.empty(),-1)}static max(){return new Un(se.max(),Y.empty(),-1)}}function Fw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $w{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==Uw)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Bw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ui(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class fl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}fl.oe=-1;function Wo(t){return t==null}function yo(t){return t===0&&1/t==-1/0}function jw(t){return typeof t=="number"&&Number.isInteger(t)&&!yo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bi(this.root,e,this.comparator,!0)}}class Bi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=s??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ge(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ed(this.data.getIterator())}getIteratorFrom(e){return new ed(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class ed{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new Xe(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Kr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Zp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Zp("Invalid base64 string: "+i):i}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const qw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(we(!!t),typeof t=="string"){let e=0;const n=qw.exec(t);if(we(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gl(t){const e=t.mapValue.fields.__previous_value__;return pl(e)?gl(e):e}function Qs(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n,r,s,i,a,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Js{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pl(t)?4:zw(t)?9007199254740991:Ww(t)?10:11:ne()}function Gt(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qs(t).isEqual(Qs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=$n(s.timestampValue),c=$n(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return mr(s.bytesValue).isEqual(mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ke(s.doubleValue),c=ke(i.doubleValue);return a===c?yo(a)===yo(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return Kr(t.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Zh(a)!==Zh(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Gt(a[l],c[l])))return!1;return!0}(t,e);default:return ne()}}function Xs(t,e){return(t.values||[]).find(n=>Gt(n,e))!==void 0}function Gr(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ke(i.integerValue||i.doubleValue),l=ke(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return td(t.timestampValue,e.timestampValue);case 4:return td(Qs(t),Qs(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,a){const c=mr(i),l=mr(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=me(c[h],l[h]);if(f!==0)return f}return me(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=me(ke(i.latitude),ke(a.latitude));return c!==0?c:me(ke(i.longitude),ke(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return nd(t.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const g=i.fields||{},m=a.fields||{},w=(c=g.value)===null||c===void 0?void 0:c.arrayValue,C=(l=m.value)===null||l===void 0?void 0:l.arrayValue,V=me(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:nd(w,C)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===ji.mapValue&&a===ji.mapValue)return 0;if(i===ji.mapValue)return 1;if(a===ji.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const m=me(l[g],f[g]);if(m!==0)return m;const w=Gr(c[l[g]],h[f[g]]);if(w!==0)return w}return me(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ne()}}function td(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=$n(t),r=$n(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function nd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Gr(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function Qr(t){return dc(t)}function dc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$n(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=dc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${dc(n.fields[a])}`;return s+"}"}(t.mapValue):ne()}function rd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fc(t){return!!t&&"integerValue"in t}function ml(t){return!!t&&"arrayValue"in t}function sd(t){return!!t&&"nullValue"in t}function id(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zi(t){return!!t&&"mapValue"in t}function Ww(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ls(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ls(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=Ls(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Zi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Zi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){yr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new yt(Ls(this.value))}}function eg(t){const e=[];return yr(t.fields,(n,r)=>{const s=new Je([n]);if(Zi(r)){const i=eg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,se.min(),se.min(),se.min(),yt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,se.min(),se.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,se.min(),se.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vo{constructor(e,n){this.position=e,this.inclusive=n}}function od(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),n.key):r=Gr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ad(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Kw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class tg{}class Me extends tg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Qw(e,n,r):n==="array-contains"?new Yw(e,r):n==="in"?new Zw(e,r):n==="not-in"?new e0(e,r):n==="array-contains-any"?new t0(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Jw(e,r):new Xw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gr(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(Gr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends tg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Mt(e,n)}matches(e){return ng(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ng(t){return t.op==="and"}function rg(t){return Gw(t)&&ng(t)}function Gw(t){for(const e of t.filters)if(e instanceof Mt)return!1;return!0}function pc(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Qr(t.value);if(rg(t))return t.filters.map(e=>pc(e)).join(",");{const e=t.filters.map(n=>pc(n)).join(",");return`${t.op}(${e})`}}function sg(t,e){return t instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&Gt(r.value,s.value)}(t,e):t instanceof Mt?function(r,s){return s instanceof Mt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&sg(a,s.filters[c]),!0):!1}(t,e):void ne()}function ig(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Qr(n.value)}`}(t):t instanceof Mt?function(n){return n.op.toString()+" {"+n.getFilters().map(ig).join(" ,")+"}"}(t):"Filter"}class Qw extends Me{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Jw extends Me{constructor(e,n){super(e,"in",n),this.keys=og("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Xw extends Me{constructor(e,n){super(e,"not-in",n),this.keys=og("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function og(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Yw extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ml(n)&&Xs(n.arrayValue,this.value)}}class Zw extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xs(this.value.arrayValue,n)}}class e0 extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xs(this.value.arrayValue,n)}}class t0 extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ml(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xs(this.value.arrayValue,r))}}/**
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
 */class n0{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function cd(t,e=null,n=[],r=[],s=null,i=null,a=null){return new n0(t,e,n,r,s,i,a)}function _l(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Wo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qr(r)).join(",")),e.ue=n}return e.ue}function yl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Kw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ad(t.startAt,e.startAt)&&ad(t.endAt,e.endAt)}function gc(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function r0(t,e,n,r,s,i,a,c){return new hi(t,e,n,r,s,i,a,c)}function vl(t){return new hi(t)}function ld(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ag(t){return t.collectionGroup!==null}function Fs(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Xe(Je.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Eo(i,r))}),n.has(Je.keyField().canonicalString())||e.ce.push(new Eo(Je.keyField(),r))}return e.ce}function Ht(t){const e=ie(t);return e.le||(e.le=s0(e,Fs(t))),e.le}function s0(t,e){if(t.limitType==="F")return cd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Eo(s.field,i)});const n=t.endAt?new vo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vo(t.startAt.position,t.startAt.inclusive):null;return cd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mc(t,e){const n=t.filters.concat([e]);return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _c(t,e,n){return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zo(t,e){return yl(Ht(t),Ht(e))&&t.limitType===e.limitType}function cg(t){return`${_l(Ht(t))}|lt:${t.limitType}`}function kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ig(s)).join(", ")}]`),Wo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Qr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Qr(s)).join(",")),`Target(${r})`}(Ht(t))}; limitType=${t.limitType})`}function Ko(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Fs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=od(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,Fs(r),s)||r.endAt&&!function(a,c,l){const h=od(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,Fs(r),s))}(t,e)}function i0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lg(t){return(e,n)=>{let r=!1;for(const s of Fs(t)){const i=o0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function o0(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Gr(l,h):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Yp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=new Ce(Y.comparator);function pn(){return a0}const ug=new Ce(Y.comparator);function Ss(...t){let e=ug;for(const n of t)e=e.insert(n.key,n);return e}function hg(t){let e=ug;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ar(){return Us()}function dg(){return Us()}function Us(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const c0=new Ce(Y.comparator),l0=new Xe(Y.comparator);function le(...t){let e=l0;for(const n of t)e=e.add(n);return e}const u0=new Xe(me);function h0(){return u0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yo(e)?"-0":e}}function fg(t){return{integerValue:""+t}}function d0(t,e){return jw(e)?fg(e):El(t,e)}/**
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
 */class Go{constructor(){this._=void 0}}function f0(t,e,n){return t instanceof To?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&pl(i)&&(i=gl(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof Ys?gg(t,e):t instanceof Zs?mg(t,e):function(s,i){const a=pg(s,i),c=ud(a)+ud(s.Pe);return fc(a)&&fc(s.Pe)?fg(c):El(s.serializer,c)}(t,e)}function p0(t,e,n){return t instanceof Ys?gg(t,e):t instanceof Zs?mg(t,e):n}function pg(t,e){return t instanceof Io?function(r){return fc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class To extends Go{}class Ys extends Go{constructor(e){super(),this.elements=e}}function gg(t,e){const n=_g(e);for(const r of t.elements)n.some(s=>Gt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Zs extends Go{constructor(e){super(),this.elements=e}}function mg(t,e){let n=_g(e);for(const r of t.elements)n=n.filter(s=>!Gt(s,r));return{arrayValue:{values:n}}}class Io extends Go{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ud(t){return ke(t.integerValue||t.doubleValue)}function _g(t){return ml(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function g0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ys&&s instanceof Ys||r instanceof Zs&&s instanceof Zs?Kr(r.elements,s.elements,Gt):r instanceof Io&&s instanceof Io?Gt(r.Pe,s.Pe):r instanceof To&&s instanceof To}(t.transform,e.transform)}class m0{constructor(e,n){this.version=e,this.transformResults=n}}class xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qo{}function yg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tl(t.key,xt.none()):new di(t.key,t.data,xt.none());{const n=t.data,r=yt.empty();let s=new Xe(Je.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Kn(t.key,r,new Rt(s.toArray()),xt.none())}}function _0(t,e,n){t instanceof di?function(s,i,a){const c=s.value.clone(),l=dd(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Kn?function(s,i,a){if(!eo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=dd(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(vg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function $s(t,e,n,r){return t instanceof di?function(i,a,c,l){if(!eo(i.precondition,a))return c;const h=i.value.clone(),f=fd(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kn?function(i,a,c,l){if(!eo(i.precondition,a))return c;const h=fd(i.fieldTransforms,l,a),f=a.data;return f.setAll(vg(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,a,c){return eo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function y0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=pg(r.transform,s||null);i!=null&&(n===null&&(n=yt.empty()),n.set(r.field,i))}return n||null}function hd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Kr(r,s,(i,a)=>g0(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class di extends Qo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kn extends Qo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dd(t,e,n){const r=new Map;we(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,p0(a,c,n[s]))}return r}function fd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,f0(i,a,e))}return r}class Tl extends Qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v0 extends Qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=yg(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Kr(this.mutations,e.mutations,(n,r)=>hd(n,r))&&Kr(this.baseMutations,e.baseMutations,(n,r)=>hd(n,r))}}class Il{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){we(e.mutations.length===r.length);let s=function(){return c0}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Il(e,n,r,s)}}/**
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
 */class T0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class I0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,he;function w0(t){switch(t){default:return ne();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Eg(t){if(t===void 0)return fn("GRPC error has no .code"),k.UNKNOWN;switch(t){case Oe.OK:return k.OK;case Oe.CANCELLED:return k.CANCELLED;case Oe.UNKNOWN:return k.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return k.INTERNAL;case Oe.UNAVAILABLE:return k.UNAVAILABLE;case Oe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Oe.NOT_FOUND:return k.NOT_FOUND;case Oe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Oe.ABORTED:return k.ABORTED;case Oe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Oe.DATA_LOSS:return k.DATA_LOSS;default:return ne()}}(he=Oe||(Oe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function A0(){return new TextEncoder}/**
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
 */const R0=new hr([4294967295,4294967295],0);function pd(t){const e=A0().encode(t),n=new qp;return n.update(e),new Uint8Array(n.digest())}function gd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hr([n,r],0),new hr([s,i],0)]}class wl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ps(`Invalid padding: ${n}`);if(r<0)throw new Ps(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ps(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ps(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=hr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(hr.fromNumber(r)));return s.compare(R0)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=pd(e),[r,s]=gd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new wl(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const n=pd(e),[r,s]=gd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,fi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jo(se.min(),s,new Ce(me),pn(),le())}}class fi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fi(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Tg{constructor(e,n){this.targetId=e,this.me=n}}class Ig{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class md{constructor(){this.fe=0,this.ge=yd(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),n=le(),r=le();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ne()}}),new fi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=yd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class b0{constructor(e){this.Le=e,this.Be=new Map,this.ke=pn(),this.qe=_d(),this.Qe=new Ce(me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(gc(i))if(r===0){const a=new Y(i.path);this.Ue(n,a,ct.newNoDocument(a,se.min()))}else we(r===1);else{const a=this.Ye(n);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=mr(r).toUint8Array()}catch(l){if(l instanceof Zp)return zr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new wl(a,s,i)}catch(l){return zr(l instanceof Ps?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&gc(c.target)){const l=new Y(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,ct.newNoDocument(l,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=le();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Jo(e,n,this.Qe,this.ke,r);return this.ke=pn(),this.qe=_d(),this.Qe=new Ce(me),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new md,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Xe(me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new md),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function _d(){return new Ce(Y.comparator)}function yd(){return new Ce(Y.comparator)}const S0={asc:"ASCENDING",desc:"DESCENDING"},P0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},C0={and:"AND",or:"OR"};class D0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yc(t,e){return t.useProto3Json||Wo(e)?e:{value:e}}function wo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function k0(t,e){return wo(t,e.toTimestamp())}function Wt(t){return we(!!t),se.fromTimestamp(function(n){const r=$n(n);return new Le(r.seconds,r.nanos)}(t))}function Al(t,e){return vc(t,e).canonicalString()}function vc(t,e){const n=function(s){return new be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ag(t){const e=be.fromString(t);return we(Cg(e)),e}function Ec(t,e){return Al(t.databaseId,e.path)}function $a(t,e){const n=Ag(e);if(n.get(1)!==t.databaseId.projectId)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(bg(n))}function Rg(t,e){return Al(t.databaseId,e)}function V0(t){const e=Ag(t);return e.length===4?be.emptyPath():bg(e)}function Tc(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bg(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vd(t,e,n){return{name:Ec(t,e),fields:n.value.mapValue.fields}}function N0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(we(f===void 0||typeof f=="string"),Ze.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?k.UNKNOWN:Eg(h.code);return new W(f,h.message||"")}(a);n=new Ig(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=$a(t,r.document.name),i=Wt(r.document.updateTime),a=r.document.createTime?Wt(r.document.createTime):se.min(),c=new yt({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new to(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=$a(t,r.document),i=r.readTime?Wt(r.readTime):se.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];n=new to([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=$a(t,r.document),i=r.removedTargetIds||[];n=new to([],i,s,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new I0(s,i),c=r.targetId;n=new Tg(c,a)}}return n}function O0(t,e){let n;if(e instanceof di)n={update:vd(t,e.key,e.value)};else if(e instanceof Tl)n={delete:Ec(t,e.key)};else if(e instanceof Kn)n={update:vd(t,e.key,e.data),updateMask:q0(e.fieldMask)};else{if(!(e instanceof v0))return ne();n={verify:Ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof To)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ys)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Zs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Io)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:k0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(t,e.precondition)),n}function x0(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?Wt(s.updateTime):Wt(i);return a.isEqual(se.min())&&(a=Wt(i)),new m0(a,s.transformResults||[])}(n,e))):[]}function M0(t,e){return{documents:[Rg(t,e.path)]}}function L0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Rg(t,s);const i=function(h){if(h.length!==0)return Pg(Mt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Vr(m.field),direction:$0(m.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=yc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function F0(t){let e=V0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){we(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const m=Sg(g);return m instanceof Mt&&rg(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(m=>function(C){return new Eo(Nr(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(g){let m;return m=typeof g=="object"?g.value:g,Wo(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(g){const m=!!g.before,w=g.values||[];return new vo(w,m)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const m=!g.before,w=g.values||[];return new vo(w,m)}(n.endAt)),r0(e,s,a,i,c,"F",l,h)}function U0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Nr(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Nr(n.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nr(n.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nr(n.unaryFilter.field);return Me.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Nr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mt.create(n.compositeFilter.filters.map(r=>Sg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function $0(t){return S0[t]}function B0(t){return P0[t]}function j0(t){return C0[t]}function Vr(t){return{fieldPath:t.canonicalString()}}function Nr(t){return Je.fromServerFormat(t.fieldPath)}function Pg(t){return t instanceof Me?function(n){if(n.op==="=="){if(id(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NAN"}};if(sd(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(id(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NAN"}};if(sd(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vr(n.field),op:B0(n.op),value:n.value}}}(t):t instanceof Mt?function(n){const r=n.getFilters().map(s=>Pg(s));return r.length===1?r[0]:{compositeFilter:{op:j0(n.op),filters:r}}}(t):ne()}function q0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Cg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n,r,s,i=se.min(),a=se.min(),c=Ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.ct=e}}function W0(t){const e=F0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_c(e,e.limit,"L"):e}/**
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
 */class z0{constructor(){this.un=new K0}addToCollectionParentIndex(e,n){return this.un.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Un.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Un.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class K0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Jr(0)}static kn(){return new Jr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Q0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&$s(r.mutation,s,Rt.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Ss();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,s){let i=pn();const a=Us(),c=function(){return Us()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Kn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),$s(f.mutation,h,f.mutation.getFieldMask(),Le.now())):a.set(h.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var g;return c.set(h,new Q0(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Us();let s=new Ce((a,c)=>a-c),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Rt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const g=(s.get(c.batchId)||le()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,g=dg();f.forEach(m=>{if(!i.has(m)){const w=yg(n.get(m),r.get(m));w!==null&&g.set(m,w),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ag(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(ar());let c=-1,l=i;return a.next(h=>O.forEach(h,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,le())).next(f=>({batchId:c,changes:hg(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=Ss();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Ss();return this.indexManager.getCollectionParents(e,i).next(c=>O.forEach(c,l=>{const h=function(g,m){return new hi(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,m)=>{a=a.insert(g,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ct.newInvalidDocument(f)))});let c=Ss();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&$s(f.mutation,h,Rt.empty(),Le.now()),Ko(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return O.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:W0(s.bundledQuery),readTime:Wt(s.readTime)}}(n)),O.resolve()}}/**
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
 */class Y0{constructor(){this.overlays=new Ce(Y.comparator),this.Ir=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ar();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=ar(),i=n.length+1,a=new Y(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=ar(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=ar(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return O.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new T0(n,r));let i=this.Ir.get(n);i===void 0&&(i=le(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class Z0{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.Tr=new Xe(je.Er),this.dr=new Xe(je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new be([])),r=new je(n,e),s=new je(n,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new be([])),r=new je(n,e),s=new je(n,e+1);let i=le();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||me(e.wr,n.wr)}static Ar(e,n){return me(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Xe(je.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new E0(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new je(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,n){return O.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),s=new je(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(me);return n.forEach(s=>{const i=new je(s,0),a=new je(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new je(new Y(i),0);let c=new Xe(me);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},a),O.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(n.mutations,s=>{const i=new je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new je(n,0),s=this.br.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.Mr=e,this.docs=function(){return new Ce(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=pn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=pn();const a=n.path,c=new Y(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Fw(Lw(f),r)<=0||(s.has(f.key)||Ko(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ne()}Or(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new nA(this)}getSize(e){return O.resolve(this.size)}}class nA extends G0{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.persistence=e,this.Nr=new rs(n=>_l(n),yl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Rl,this.targetCount=0,this.kr=Jr.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),O.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Jr(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Kn(n),O.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new fl(0),this.Kr=!1,this.Kr=!0,this.$r=new Z0,this.referenceDelegate=e(this),this.Ur=new rA(this),this.indexManager=new z0,this.remoteDocumentCache=function(s){return new tA(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new H0(n),this.Gr=new X0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Y0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new eA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new iA(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class iA extends $w{constructor(e){super(),this.currentSequenceNumber=e}}class bl{constructor(e){this.persistence=e,this.Jr=new Rl,this.Yr=null}static Zr(e){return new bl(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const s=Y.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return O.or([()=>O.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Sl(e,n.fromCache,r,s)}}/**
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
 */class oA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class aA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Qv()?8:Bw(ut())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new oA;return this.Xi(e,n,a).next(c=>{if(i.result=c,this.zi)return this.es(e,n,a,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(As()<=ue.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(As()<=ue.DEBUG&&G("QueryEngine","Query:",kr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(As()<=ue.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(n))):O.resolve())}Yi(e,n){if(ld(n))return O.resolve(null);let r=Ht(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=_c(n,null,"F"),r=Ht(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=le(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,a,l.readTime)?this.Yi(e,_c(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return ld(n)||s.isEqual(se.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(n,i);return this.ns(n,a,r,s)?O.resolve(null):(As()<=ue.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),kr(n)),this.rs(e,a,n,Mw(s,-1)).next(c=>c))})}ts(e,n){let r=new Xe(lg(e));return n.forEach((s,i)=>{Ko(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return As()<=ue.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",kr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Un.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ce(me),this._s=new rs(i=>_l(i),yl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new J0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function lA(t,e,n,r){return new cA(t,e,n,r)}async function Dg(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=le();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:c}))})})}function uA(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const g=h.batch,m=g.keys();let w=O.resolve();return m.forEach(C=>{w=w.next(()=>f.getEntry(l,C)).next(V=>{const x=h.docVersions.get(C);we(x!==null),V.version.compareTo(x)<0&&(g.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=le();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function kg(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function hA(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,g)));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?w=w.withResumeToken(Ze.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(g,w),function(V,x,z){return V.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(m,w,f)&&c.push(n.Ur.updateTargetData(i,w))});let l=pn(),h=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(dA(i,a,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!r.isEqual(se.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(g=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return O.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function dA(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=pn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):G("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function fA(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pA(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.Ur.allocateTargetId(r).next(a=>(s=new kn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ic(t,e,n){const r=ie(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ui(a))throw a;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ed(t,e,n){const r=ie(t);let s=se.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const g=ie(l),m=g._s.get(f);return m!==void 0?O.resolve(g.os.get(m)):g.Ur.getTargetData(h,f)}(r,a,Ht(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?s:se.min(),n?i:le())).next(c=>(gA(r,i0(e),c),{documents:c,Ts:i})))}function gA(t,e,n){let r=t.us.get(e)||se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Td{constructor(){this.activeTargetIds=h0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mA{constructor(){this.so=new Td,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Td,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _A{_o(e){}shutdown(){}}/**
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
 */class Id{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qi=null;function Ba(){return qi===null?qi=function(){return 268435456+Math.round(2147483648*Math.random())}():qi++,"0x"+qi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class EA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,a){const c=Ba(),l=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(n,l,h,s).then(f=>(G("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw zr("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,a,c){return this.Mo(n,r,s,i,a)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ns}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}xo(n,r){const s=yA[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Ba();return new Promise((a,c)=>{const l=new Hp;l.setWithCredentials(!0),l.listenOnce(zp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Yi.NO_ERROR:const f=l.getResponseJson();G(st,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Yi.TIMEOUT:G(st,`RPC '${e}' ${i} timed out`),c(new W(k.DEADLINE_EXCEEDED,"Request time out"));break;case Yi.HTTP_ERROR:const g=l.getStatus();if(G(st,`RPC '${e}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const C=function(x){const z=x.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(z)>=0?z:k.UNKNOWN}(w.status);c(new W(C,w.message))}else c(new W(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new W(k.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{G(st,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);G(st,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Ba(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Qp(),c=Gp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Wp({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");G(st,`Creating RPC '${e}' stream ${s}: ${f}`,l);const g=a.createWebChannel(f,l);let m=!1,w=!1;const C=new vA({Io:x=>{w?G(st,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(G(st,`Opening RPC '${e}' stream ${s} transport.`),g.open(),m=!0),G(st,`RPC '${e}' stream ${s} sending:`,x),g.send(x))},To:()=>g.close()}),V=(x,z,Q)=>{x.listen(z,X=>{try{Q(X)}catch(H){setTimeout(()=>{throw H},0)}})};return V(g,bs.EventType.OPEN,()=>{w||(G(st,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),V(g,bs.EventType.CLOSE,()=>{w||(w=!0,G(st,`RPC '${e}' stream ${s} transport closed`),C.So())}),V(g,bs.EventType.ERROR,x=>{w||(w=!0,zr(st,`RPC '${e}' stream ${s} transport errored:`,x),C.So(new W(k.UNAVAILABLE,"The operation could not be completed")))}),V(g,bs.EventType.MESSAGE,x=>{var z;if(!w){const Q=x.data[0];we(!!Q);const X=Q,H=X.error||((z=X[0])===null||z===void 0?void 0:z.error);if(H){G(st,`RPC '${e}' stream ${s} received error:`,H);const oe=H.status;let ye=function(y){const T=Oe[y];if(T!==void 0)return Eg(T)}(oe),A=H.message;ye===void 0&&(ye=k.INTERNAL,A="Unknown error status: "+oe+" with message "+H.message),w=!0,C.So(new W(ye,A)),g.close()}else G(st,`RPC '${e}' stream ${s} received:`,Q),C.bo(Q)}}),V(c,Kp.STAT_EVENT,x=>{x.stat===hc.PROXY?G(st,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===hc.NOPROXY&&G(st,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function ja(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){return new D0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Vg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(fn(n.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new W(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TA extends Ng{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=N0(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Wt(a.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Tc(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=gc(l)?{documents:M0(i,l)}:{query:L0(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=wg(i,a.resumeToken);const h=yc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=wo(i,a.snapshotVersion.toTimestamp());const h=yc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=U0(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Tc(this.serializer),n.removeTarget=e,this.a_(n)}}class IA extends Ng{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=x0(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Tc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>O0(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,vc(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(k.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,vc(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(k.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class AA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(fn(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{vr(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=ie(l);h.L_.add(4),await pi(h),h.q_.set("Unknown"),h.L_.delete(4),await Yo(h)}(this))})}),this.q_=new AA(r,s)}}async function Yo(t){if(vr(t))for(const e of t.B_)await e(!0)}async function pi(t){for(const e of t.B_)await e(!1)}function Og(t,e){const n=ie(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),kl(n)?Dl(n):ss(n).r_()&&Cl(n,e))}function Pl(t,e){const n=ie(t),r=ss(n);n.N_.delete(e),r.r_()&&xg(n,e),n.N_.size===0&&(r.r_()?r.o_():vr(n)&&n.q_.set("Unknown"))}function Cl(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ss(t).A_(e)}function xg(t,e){t.Q_.xe(e),ss(t).R_(e)}function Dl(t){t.Q_=new b0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ss(t).start(),t.q_.v_()}function kl(t){return vr(t)&&!ss(t).n_()&&t.N_.size>0}function vr(t){return ie(t).L_.size===0}function Mg(t){t.Q_=void 0}async function bA(t){t.q_.set("Online")}async function SA(t){t.N_.forEach((e,n)=>{Cl(t,e)})}async function PA(t,e){Mg(t),kl(t)?(t.q_.M_(e),Dl(t)):t.q_.set("Unknown")}async function CA(t,e,n){if(t.q_.set("Online"),e instanceof Ig&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ao(t,r)}else if(e instanceof to?t.Q_.Ke(e):e instanceof Tg?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await kg(t.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),xg(i,l);const g=new kn(f.target,l,h,f.sequenceNumber);Cl(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Ao(t,r)}}async function Ao(t,e,n){if(!ui(e))throw e;t.L_.add(1),await pi(t),t.q_.set("Offline"),n||(n=()=>kg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Yo(t)})}function Lg(t,e){return e().catch(n=>Ao(t,n,e))}async function Zo(t){const e=ie(t),n=Bn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;DA(e);)try{const s=await fA(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,kA(e,s)}catch(s){await Ao(e,s)}Fg(e)&&Ug(e)}function DA(t){return vr(t)&&t.O_.length<10}function kA(t,e){t.O_.push(e);const n=Bn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Fg(t){return vr(t)&&!Bn(t).n_()&&t.O_.length>0}function Ug(t){Bn(t).start()}async function VA(t){Bn(t).p_()}async function NA(t){const e=Bn(t);for(const n of t.O_)e.m_(n.mutations)}async function OA(t,e,n){const r=t.O_.shift(),s=Il.from(r,e,n);await Lg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Zo(t)}async function xA(t,e){e&&Bn(t).V_&&await async function(r,s){if(function(a){return w0(a)&&a!==k.ABORTED}(s.code)){const i=r.O_.shift();Bn(r).s_(),await Lg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zo(r)}}(t,e),Fg(t)&&Ug(t)}async function wd(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=vr(n);n.L_.add(3),await pi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Yo(n)}async function MA(t,e){const n=ie(t);e?(n.L_.delete(2),await Yo(n)):e||(n.L_.add(2),await pi(n),n.q_.set("Unknown"))}function ss(t){return t.K_||(t.K_=function(n,r,s){const i=ie(n);return i.w_(),new TA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:bA.bind(null,t),Ro:SA.bind(null,t),mo:PA.bind(null,t),d_:CA.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),kl(t)?Dl(t):t.q_.set("Unknown")):(await t.K_.stop(),Mg(t))})),t.K_}function Bn(t){return t.U_||(t.U_=function(n,r,s){const i=ie(n);return i.w_(),new IA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:VA.bind(null,t),mo:xA.bind(null,t),f_:NA.bind(null,t),g_:OA.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Zo(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new Vl(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nl(t,e){if(fn("AsyncQueue",`${e}: ${t}`),ui(t))return new W(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Ss(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new jr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(){this.W_=new Ce(Y.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xr{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new Xr(e,n,jr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class FA{constructor(){this.queries=Rd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ie(n),i=s.queries;s.queries=Rd(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new W(k.ABORTED,"Firestore shutting down"))}}function Rd(){return new rs(t=>cg(t),zo)}async function $g(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new LA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Nl(a,`Initialization of query '${kr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Ol(n)}async function Bg(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UA(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Ol(n)}function $A(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Ol(t){t.Y_.forEach(e=>{e.next()})}var wc,bd;(bd=wc||(wc={})).ea="default",bd.Cache="cache";class jg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Xr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==wc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.key=e}}class Hg{constructor(e){this.key=e}}class BA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=lg(e),this.Ra=new jr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ad,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const m=s.get(f),w=Ko(this.query,g)?g:null,C=!!m&&this.mutatedKeys.has(m.key),V=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let x=!1;m&&w?m.data.isEqual(w.data)?C!==V&&(r.track({type:3,doc:w}),x=!0):this.ga(m,w)||(r.track({type:2,doc:w}),x=!0,(l&&this.Aa(w,l)>0||h&&this.Aa(w,h)<0)&&(c=!0)):!m&&w?(r.track({type:0,doc:w}),x=!0):m&&!w&&(r.track({type:1,doc:m}),x=!0,(l||h)&&(c=!0)),x&&(w?(a=a.add(w),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(w,C){const V=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return V(w)-V(C)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,a.length!==0||h?{snapshot:new Xr(this.query,e.Ra,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ad,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Hg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new qg(r))}),n}ba(e){this.Ta=e.Ts,this.da=le();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Xr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class jA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qA{constructor(e){this.key=e,this.va=!1}}class HA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new rs(c=>cg(c),zo),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(Y.comparator),this.Na=new Map,this.La=new Rl,this.Ba={},this.ka=new Map,this.qa=Jr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function WA(t,e,n=!0){const r=Jg(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Wg(r,e,n,!0),s}async function zA(t,e){const n=Jg(t);await Wg(n,e,!0,!1)}async function Wg(t,e,n,r){const s=await pA(t.localStore,Ht(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await KA(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Og(t.remoteStore,s),c}async function KA(t,e,n,r,s){t.Ka=(g,m,w)=>async function(V,x,z,Q){let X=x.view.ma(z);X.ns&&(X=await Ed(V.localStore,x.query,!1).then(({documents:A})=>x.view.ma(A,X)));const H=Q&&Q.targetChanges.get(x.targetId),oe=Q&&Q.targetMismatches.get(x.targetId)!=null,ye=x.view.applyChanges(X,V.isPrimaryClient,H,oe);return Pd(V,x.targetId,ye.wa),ye.snapshot}(t,g,m,w);const i=await Ed(t.localStore,e,!0),a=new BA(e,i.Ts),c=a.ma(i.documents),l=fi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);Pd(t,n,h.wa);const f=new jA(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function GA(t,e,n){const r=ie(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!zo(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ic(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Pl(r.remoteStore,s.targetId),Ac(r,s.targetId)}).catch(li)):(Ac(r,s.targetId),await Ic(r.localStore,s.targetId,!0))}async function QA(t,e){const n=ie(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Pl(n.remoteStore,r.targetId))}async function JA(t,e,n){const r=rR(t);try{const s=await function(a,c){const l=ie(a),h=Le.now(),f=c.reduce((w,C)=>w.add(C.key),le());let g,m;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=pn(),V=le();return l.cs.getEntries(w,f).next(x=>{C=x,C.forEach((z,Q)=>{Q.isValidDocument()||(V=V.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,C)).next(x=>{g=x;const z=[];for(const Q of c){const X=y0(Q,g.get(Q.key).overlayedDocument);X!=null&&z.push(new Kn(Q.key,X,eg(X.value.mapValue),xt.exists(!0)))}return l.mutationQueue.addMutationBatch(w,h,z,c)}).next(x=>{m=x;const z=x.applyToLocalDocumentSet(g,V);return l.documentOverlayCache.saveOverlays(w,x.batchId,z)})}).then(()=>({batchId:m.batchId,changes:hg(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.Ba[a.currentUser.toKey()];h||(h=new Ce(me)),h=h.insert(c,l),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,n),await gi(r,s.changes),await Zo(r.remoteStore)}catch(s){const i=Nl(s,"Failed to persist write");n.reject(i)}}async function zg(t,e){const n=ie(t);try{const r=await hA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Na.get(i);a&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?we(a.va):s.removedDocuments.size>0&&(we(a.va),a.va=!1))}),await gi(n,r,e)}catch(r){await li(r)}}function Sd(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach((f,g)=>{for(const m of g.j_)m.Z_(c)&&(h=!0)}),h&&Ol(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XA(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Ce(Y.comparator);a=a.insert(i,ct.newNoDocument(i,se.min()));const c=le().add(i),l=new Jo(se.min(),new Map,new Ce(me),a,c);await zg(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),xl(r)}else await Ic(r.localStore,e,!1).then(()=>Ac(r,e,n)).catch(li)}async function YA(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await uA(n.localStore,e);Gg(n,r,null),Kg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gi(n,s)}catch(s){await li(s)}}async function ZA(t,e,n){const r=ie(t);try{const s=await function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(g=>(we(g!==null),f=g.keys(),l.mutationQueue.removeMutationBatch(h,g))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Gg(r,e,n),Kg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await gi(r,s)}catch(s){await li(s)}}function Kg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Gg(t,e,n){const r=ie(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Ac(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Qg(t,r)})}function Qg(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Pl(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),xl(t))}function Pd(t,e,n){for(const r of n)r instanceof qg?(t.La.addReference(r.key,e),eR(t,r)):r instanceof Hg?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Qg(t,r.key)):ne()}function eR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),xl(t))}function xl(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Y(be.fromString(e)),r=t.qa.next();t.Na.set(r,new qA(n)),t.Oa=t.Oa.insert(n,r),Og(t.remoteStore,new kn(Ht(vl(n.path)),r,"TargetPurposeLimboResolution",fl.oe))}}async function gi(t,e,n){const r=ie(t),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Sl.Wi(l.targetId,h);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,h){const f=ie(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>O.forEach(h,m=>O.forEach(m.$i,w=>f.persistence.referenceDelegate.addReference(g,m.targetId,w)).next(()=>O.forEach(m.Ui,w=>f.persistence.referenceDelegate.removeReference(g,m.targetId,w)))))}catch(g){if(!ui(g))throw g;G("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const w=f.os.get(m),C=w.snapshotVersion,V=w.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(m,V)}}}(r.localStore,i))}async function tR(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await Dg(n.localStore,e);n.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new W(k.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gi(n,r.hs)}}function nR(t,e){const n=ie(t),r=n.Na.get(e);if(r&&r.va)return le().add(r.key);{let s=le();const i=n.Ma.get(e);if(!i)return s;for(const a of i){const c=n.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Jg(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XA.bind(null,e),e.Ca.d_=UA.bind(null,e.eventManager),e.Ca.$a=$A.bind(null,e.eventManager),e}function rR(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZA.bind(null,e),e}class Cd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return lA(this.persistence,new aA,e.initialUser,this.serializer)}createPersistence(e){return new sA(bl.Zr,this.serializer)}createSharedClientState(e){return new mA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tR.bind(null,this.syncEngine),await MA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FA}()}createDatastore(e){const n=Xo(e.databaseInfo.databaseId),r=function(i){return new EA(i)}(e.databaseInfo);return function(i,a,c,l){return new wA(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,c){return new RA(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Sd(this.syncEngine,n,0),function(){return Id.D()?new Id:new _A}())}createSyncEngine(e,n){return function(s,i,a,c,l,h,f){const g=new HA(s,i,a,c,l,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ie(s);G("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await pi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):fn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=Xp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{G("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(G("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Nl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qa(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Dg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aR(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>wd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>wd(e.remoteStore,s)),t._onlineComponents=e}function oR(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function aR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await qa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!oR(n))throw n;zr("Error using user provided cache. Falling back to memory cache: "+n),await qa(t,new Cd)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await qa(t,new Cd);return t._offlineComponents}async function Yg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await Dd(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await Dd(t,new sR))),t._onlineComponents}function cR(t){return Yg(t).then(e=>e.syncEngine)}async function Zg(t){const e=await Yg(t),n=e.eventManager;return n.onListen=WA.bind(null,e.syncEngine),n.onUnlisten=GA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QA.bind(null,e.syncEngine),n}function lR(t,e,n={}){const r=new un;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new Xg({next:m=>{a.enqueueAndForget(()=>Bg(i,g));const w=m.docs.has(c);!w&&m.fromCache?h.reject(new W(k.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&l&&l.source==="server"?h.reject(new W(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new jg(vl(c.path),f,{includeMetadataChanges:!0,_a:!0});return $g(i,g)}(await Zg(t),t.asyncQueue,e,n,r)),r.promise}function uR(t,e,n={}){const r=new un;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new Xg({next:m=>{a.enqueueAndForget(()=>Bg(i,g)),m.fromCache&&l.source==="server"?h.reject(new W(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new jg(c,f,{includeMetadataChanges:!0,_a:!0});return $g(i,g)}(await Zg(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function em(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t,e,n){if(!n)throw new W(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hR(t,e,n,r){if(e===!0&&r===!0)throw new W(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vd(t){if(!Y.isDocumentKey(t))throw new W(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nd(t){if(Y.isDocumentKey(t))throw new W(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ea(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ea(t);throw new W(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=em((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ta{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Od({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Od(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sw;switch(r.type){case"firstParty":return new kw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=kd.get(n);r&&(G("ComponentProvider","Removing Datastore"),kd.delete(n),r.terminate())}(this),Promise.resolve()}}function dR(t,e,n,r={}){var s;const i=(t=gn(t,ta))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=it.MOCK_USER;else{c=jv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new it(h)}t._authCredentials=new Pw(new Jp(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new is(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Mn extends is{constructor(e,n,r){super(e,n,vl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new Y(e))}withConverter(e){return new Mn(this.firestore,e,this._path)}}function nm(t,e,...n){if(t=_t(t),tm("collection","path",e),t instanceof ta){const r=be.fromString(e,...n);return Nd(r),new Mn(t,null,r)}{if(!(t instanceof vt||t instanceof Mn))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Nd(r),new Mn(t.firestore,null,r)}}function mi(t,e,...n){if(t=_t(t),arguments.length===1&&(e=Xp.newId()),tm("doc","path",e),t instanceof ta){const r=be.fromString(e,...n);return Vd(r),new vt(t,null,new Y(r))}{if(!(t instanceof vt||t instanceof Mn))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Vd(r),new vt(t.firestore,t instanceof Mn?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Vg(this,"async_queue_retry"),this.Eu=()=>{const n=ja();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=ja();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=ja();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new un;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ui(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Vl.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&ne()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class os extends ta{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new fR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rm(this),this._firestoreClient.terminate()}}function pR(t,e){const n=typeof t=="object"?t:cp(),r=typeof t=="string"?t:"(default)",s=el(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$v("firestore");i&&dR(s,...i)}return s}function Ml(t){return t._firestoreClient||rm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rm(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new Hw(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,em(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new iR(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yr(Ze.fromBase64String(e))}catch(n){throw new W(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yr(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */class Ul{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=/^__.*__$/;class mR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kn(e,this.data,this.fieldMask,n,this.fieldTransforms):new di(e,this.data,n,this.fieldTransforms)}}class sm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Kn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function im(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class $l{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new $l(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Ro(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(im(this.wu)&&gR.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class _R{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xo(e)}Nu(e,n,r,s=!1){return new $l({wu:e,methodName:n,Ou:r,path:Je.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bl(t){const e=t._freezeSettings(),n=Xo(t._databaseId);return new _R(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yR(t,e,n,r,s,i={}){const a=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);jl("Data must be an object, but it was:",a,r);const c=om(r,a);let l,h;if(i.merge)l=new Rt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=Rc(e,g,n);if(!a.contains(m))throw new W(k.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);cm(f,m)||f.push(m)}l=new Rt(f),h=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,h=a.fieldTransforms;return new mR(new yt(c),l,h)}class ra extends Ll{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ra}}function vR(t,e,n,r){const s=t.Nu(1,e,n);jl("Data must be an object, but it was:",s,r);const i=[],a=yt.empty();yr(r,(l,h)=>{const f=ql(e,l,n);h=_t(h);const g=s.Cu(f);if(h instanceof ra)i.push(f);else{const m=_i(h,g);m!=null&&(i.push(f),a.set(f,m))}});const c=new Rt(i);return new sm(a,c,s.fieldTransforms)}function ER(t,e,n,r,s,i){const a=t.Nu(1,e,n),c=[Rc(e,r,n)],l=[s];if(i.length%2!=0)throw new W(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Rc(e,i[m])),l.push(i[m+1]);const h=[],f=yt.empty();for(let m=c.length-1;m>=0;--m)if(!cm(h,c[m])){const w=c[m];let C=l[m];C=_t(C);const V=a.Cu(w);if(C instanceof ra)h.push(w);else{const x=_i(C,V);x!=null&&(h.push(w),f.set(w,x))}}const g=new Rt(h);return new sm(f,g,a.fieldTransforms)}function TR(t,e,n,r=!1){return _i(n,t.Nu(r?4:3,e))}function _i(t,e){if(am(t=_t(t)))return jl("Unsupported field value:",e,t),om(t,e);if(t instanceof Ll)return function(r,s){if(!im(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=_i(c,s.Fu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return d0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:wo(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wo(s.serializer,i)}}if(r instanceof Fl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yr)return{bytesValue:wg(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Al(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ul)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Mu("VectorValues must only contain numeric values.");return El(c.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${ea(r)}`)}(t,e)}function om(t,e){const n={};return Yp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(t,(r,s)=>{const i=_i(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function am(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Fl||t instanceof Yr||t instanceof vt||t instanceof Ll||t instanceof Ul)}function jl(t,e,n){if(!am(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ea(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Rc(t,e,n){if((e=_t(e))instanceof na)return e._internalPath;if(typeof e=="string")return ql(t,e);throw Ro("Field path arguments must be of type string or ",t,!1,void 0,n)}const IR=new RegExp("[~\\*/\\[\\]]");function ql(t,e,n){if(e.search(IR)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new na(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ro(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new W(k.INVALID_ARGUMENT,c+t+l)}function cm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wR extends lm{data(){return super.data()}}function Hl(t,e){return typeof e=="string"?ql(t,e):e instanceof na?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wl{}class RR extends Wl{}function um(t,e,...n){let r=[];e instanceof Wl&&r.push(e),r=r.concat(n),function(i){const a=i.filter(l=>l instanceof zl).length,c=i.filter(l=>l instanceof sa).length;if(a>1||a>0&&c>0)throw new W(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class sa extends RR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sa(e,n,r)}_apply(e){const n=this._parse(e);return hm(e._query,n),new is(e.firestore,e.converter,mc(e._query,n))}_parse(e){const n=Bl(e.firestore);return function(i,a,c,l,h,f,g){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Md(g,f);const w=[];for(const C of g)w.push(xd(l,i,C));m={arrayValue:{values:w}}}else m=xd(l,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Md(g,f),m=TR(c,a,g,f==="in"||f==="not-in");return Me.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function bc(t,e,n){const r=e,s=Hl("where",t);return sa._create(s,r,n)}class zl extends Wl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zl(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Mt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)hm(a,l),a=mc(a,l)}(e._query,n),new is(e.firestore,e.converter,mc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xd(t,e,n){if(typeof(n=_t(n))=="string"){if(n==="")throw new W(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ag(e)&&n.indexOf("/")!==-1)throw new W(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!Y.isDocumentKey(r))throw new W(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rd(t,new Y(r))}if(n instanceof vt)return rd(t,n._key);throw new W(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ea(n)}.`)}function Md(t,e){if(!Array.isArray(t)||t.length===0)throw new W(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hm(t,e){const n=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class bR{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ke(a.doubleValue));return new Ul(i)}convertGeoPoint(e){return new Fl(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qs(e));default:return null}}convertTimestamp(e){const n=$n(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);we(Cg(r));const s=new Js(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dm extends lm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new no(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class no extends dm{data(e={}){return super.data(e)}}class PR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Cs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new no(this._firestore,this._userDataWriter,r.key,r,new Cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new no(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Cs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new no(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Cs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:CR(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t){t=gn(t,vt);const e=gn(t.firestore,os);return lR(Ml(e),t._key).then(n=>NR(e,t,n))}class fm extends bR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function pm(t){t=gn(t,is);const e=gn(t.firestore,os),n=Ml(e),r=new fm(e);return AR(t._query),uR(n,t._query).then(s=>new PR(e,r,t,s))}function gm(t,e,n,...r){t=gn(t,vt);const s=gn(t.firestore,os),i=Bl(s);let a;return a=typeof(e=_t(e))=="string"||e instanceof na?ER(i,"updateDoc",t._key,e,n,r):vR(i,"updateDoc",t._key,e),Kl(s,[a.toMutation(t._key,xt.exists(!0))])}function kR(t){return Kl(gn(t.firestore,os),[new Tl(t._key,xt.none())])}function VR(t,e){const n=gn(t.firestore,os),r=mi(t),s=SR(t.converter,e);return Kl(n,[yR(Bl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,xt.exists(!1))]).then(()=>r)}function Kl(t,e){return function(r,s){const i=new un;return r.asyncQueue.enqueueAndForget(async()=>JA(await cR(r),s,i)),i.promise}(Ml(t),e)}function NR(t,e,n){const r=n.docs.get(e._key),s=new fm(t);return new dm(t,s,e._key,r,new Cs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ns=s})(es),Hr(new fr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new os(new Cw(r.getProvider("auth-internal")),new Nw(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),xn(Yh,"4.7.2",e),xn(Yh,"4.7.2","esm2017")})();const as=pR(yn),mm=nm(as,"relays");async function OR(){const e=zn(yn).currentUser;if(!e)throw new Error("User is not authenticated");const n=nm(as,"relays"),r=um(n,bc("uid","==",e.uid));return(await pm(r)).docs.map(i=>{const a=i.data();return{id:i.id,uid:a.uid,name:a.name,state:a.state===!0||a.state==="true",maxOnTime_s:a.maxOnTime_s??void 0,turnedOnAt:a.turnedOnAt?a.turnedOnAt.toDate():void 0}})}async function xR(t){if(!zn(yn).currentUser)throw new Error("User is not authenticated");const r=mi(as,"relays",t),s=await DR(r);if(!s.exists())throw new Error("Relay not found");const i=s.data();return{id:t,uid:i.uid,name:i.name,state:i.state===!0||i.state==="true",maxOnTime_s:i.maxOnTime_s??void 0,turnedOnAt:i.turnedOnAt?i.turnedOnAt.toDate():void 0}}async function MR(t,e){if(!zn(yn).currentUser)throw new Error("User is not authenticated");const s=mi(as,"relays",t),i={state:e};e&&(i.turnedOnAt=Le.now()),await gm(s,i)}async function LR(t,e,n){if(!zn(yn).currentUser)throw new Error("User is not authenticated");const i=mi(as,"relays",t);await gm(i,{name:e,maxOnTime_s:n})}async function FR(t){const n=zn(yn).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await VR(mm,r)).id,...r}}async function UR(t){if(!zn(yn).currentUser)throw new Error("User is not authenticated");const r=mi(as,"relays",t);await kR(r)}async function $R(t){const n=zn(yn).currentUser;if(!n)throw new Error("User is not authenticated");const r=um(mm,bc("uid","==",n.uid),bc("name","==",t));return(await pm(r)).empty}const Gl=Jc("relay",()=>{const t=xe([]),e=xe(!1),n=xe(null),r=async()=>{e.value=!0,n.value=null;try{t.value=await OR()}catch(m){n.value="Failed to load relays",console.error(m)}finally{e.value=!1}},s=async m=>{try{const w=await xR(m),C=t.value.findIndex(V=>V.id===m);C!==-1?t.value[C]=w:console.warn("Relay not found in local state:",m)}catch(w){console.error("Failed to refresh relay:",w)}},i=async(m,w,C)=>{try{await LR(m,w,C);const V=t.value.find(x=>x.id===m);V&&(V.name=w,V.maxOnTime_s=C)}catch(V){console.error("Failed to update relay config:",V)}},a=async(m,w)=>{try{if(await MR(m,w),w)await s(m);else{const C=t.value.find(V=>V.id===m);C&&(C.state=w)}}catch(C){console.error("Failed to update relay state:",C)}},c=async m=>{try{const w=await FR(m);t.value.push(w)}catch(w){console.error("Failed to add relay:",w)}},l=async m=>{try{return await $R(m)}catch(w){return console.error("Failed to check relay name uniqueness:",w),!1}},h=async m=>{try{await UR(m),t.value=t.value.filter(w=>w.id!==m)}catch(w){console.error("Failed to delete relay:",w)}};function f(m){return g(m.maxOnTime_s?m.maxOnTime_s:0)}function g(m){if(isNaN(m)||m<0)return"00:00:00";const w=Math.floor(m/3600),C=Math.floor(m%3600/60),V=m%60,x=String(w).padStart(2,"0"),z=String(C).padStart(2,"0"),Q=String(V).padStart(2,"0");return`${x}:${z}:${Q}`}return{relays:t,loading:e,error:n,loadRelays:r,updateRelayConfig:i,updateRelayState:a,addRelay:c,isRelayNameUnique:l,deleteRelay:h,getMaxOnTime:f,secondsToHHMMSS:g,refreshRelay:s}}),BR=bt({components:{ToggleButton:bw},props:{relay:{type:Object,required:!0}},setup(t){const e=Gl(),n=xe(0);let r;Wc(async()=>{await i()});const s=Uo(()=>{let h=t.relay.name;return t.relay.maxOnTime_s&&(t.relay.maxOnTime_s>0&&n.value<=0?h+=" - "+e.getMaxOnTime(t.relay):n.value>0&&(h+=" - "+e.secondsToHHMMSS(n.value))),h});async function i(){if(t.relay.maxOnTime_s===0)return;const h=c();h===0?t.relay.state&&await e.updateRelayState(t.relay.id,!1):t.relay.state&&(n.value=h,l())}async function a(h){await e.updateRelayState(t.relay.id,h),!(!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0)&&(h?(n.value=t.relay.maxOnTime_s,l()):(clearTimeout(r),n.value=0))}function c(){if(!t.relay.turnedOnAt||!t.relay.maxOnTime_s)return 0;const h=t.relay.turnedOnAt.getTime()+t.relay.maxOnTime_s*1e3;return Math.max(0,Math.floor((h-Date.now())/1e3))}function l(){clearTimeout(r),r=setTimeout(async()=>{n.value--,n.value>0?l():(await e.refreshRelay(t.relay.id),await i())},1e3)}return{displayName:s,handleToggle:a}}}),jR={class:"relay"},qR={class:"name"};function HR(t,e,n,r,s,i){const a=at("toggle-button");return de(),Ve("div",jR,[He("div",qR,ti(t.displayName),1),We(a,{modelValue:t.$props.relay.state,"onUpdate:modelValue":t.handleToggle},null,8,["modelValue","onUpdate:modelValue"])])}const WR=St(BR,[["render",HR],["__scopeId","data-v-fcf55a1a"]]),zR=bt({name:"SwipeableListItem",emits:["left-action","right-action"],props:{blockSwipe:{type:Boolean,default:!1}},setup(t,{emit:e}){const n=xe(0),r=xe(0),s=xe(0),i=xe(!1),a=xe(!1);let c=100;const l=w=>{t.blockSwipe||(n.value=w.touches[0].clientX,c=w.currentTarget.clientWidth/4,s.value=Date.now())},h=w=>{if(t.blockSwipe)return;const C=w.touches[0].clientX;r.value=C-n.value,Math.abs(r.value)>c*2?a.value=!0:Math.abs(r.value)>c?(a.value=!1,i.value=!0):(a.value=!1,i.value=!1)},f=()=>{if(t.blockSwipe)return;const w=Date.now()-s.value;a.value&&w>1e3&&(r.value<0?m():g()),r.value=0,a.value=!1,i.value=!1},g=()=>{e("left-action")},m=()=>{e("right-action")};return{onTouchStart:l,onTouchMove:h,onTouchEnd:f,onLeftAction:g,onRightAction:m,translateX:r,thresholdOneHit:i}}}),KR={class:"actions actions-left"},GR={class:"actions actions-right"};function QR(t,e,n,r,s,i){return de(),Ve("div",{class:"swipeable-list-item",onTouchstart:e[0]||(e[0]=(...a)=>t.onTouchStart&&t.onTouchStart(...a)),onTouchmove:e[1]||(e[1]=(...a)=>t.onTouchMove&&t.onTouchMove(...a)),onTouchend:e[2]||(e[2]=(...a)=>t.onTouchEnd&&t.onTouchEnd(...a))},[He("div",{class:Zr(["buttons",{"direction-left":t.translateX>0,"direction-right":t.translateX<0,"threshold-one-hit":t.thresholdOneHit}])},[He("div",KR,[Wi(t.$slots,"left-action",{},()=>[e[3]||(e[3]=ao("Edit"))])]),He("div",GR,[Wi(t.$slots,"right-action",{},()=>[e[4]||(e[4]=ao("Delete"))])])],2),He("div",{class:"content",style:ei({transform:`translateX(${t.translateX}px)`})},[Wi(t.$slots,"default",{},void 0)],4)],32)}const JR=St(zR,[["render",QR],["__scopeId","data-v-8849e356"]]),XR=bt({components:{ButtonDefault:Xc},emits:["isDone"],props:{allowAdvancedSettings:{type:Boolean,default:!1},existingRelay:{type:Object,default:null}},setup(t,e){const n=Gl(),r=xe(""),s=xe(""),i=xe("");Wc(()=>{t.existingRelay&&(r.value=t.existingRelay.name,s.value=n.getMaxOnTime(t.existingRelay))});async function a(){if(!await l()||!h())return;const g=f();t.existingRelay?await n.updateRelayConfig(t.existingRelay.id,r.value.trim(),g):await n.addRelay({name:r.value.trim(),state:!1,maxOnTime_s:g}),r.value="",e.emit("isDone")}function c(){e.emit("isDone")}async function l(){return r.value.trim().length<2?(i.value="Relay name must be at least 2 characters long.",!1):t.existingRelay&&t.existingRelay.name===r.value.trim()?!0:await n.isRelayNameUnique(r.value.trim())?(i.value="",!0):(i.value="Relay name already exists.",!1)}function h(){if(!t.allowAdvancedSettings)return!0;const g=s.value.trim();if(g==="")return!0;const w=/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(g);return w||(i.value="Max on time must be in the format HH:MM:SS."),w}function f(){if(!t.allowAdvancedSettings)return 0;const g=s.value.trim(),[m,w,C]=g.split(":").map(Number);return m*3600+w*60+C}return{newRelayName:r,newMaxOnTime:s,nameError:i,saveRelay:a,abortChanges:c}}}),YR={class:"relay-editable"},ZR={key:0,class:"header"},eb={key:1,class:"max-on-time"},tb={class:"action-buttons"},nb={key:2,class:"name-error"};function rb(t,e,n,r,s,i){const a=at("button-default");return de(),Ve("div",YR,[t.$props.allowAdvancedSettings?(de(),Ve("div",ZR,"Name")):rn("",!0),Gu(He("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>t.newRelayName=c),type:"text",placeholder:"Relay name",class:"relay-input"},null,512),[[Eh,t.newRelayName]]),t.$props.allowAdvancedSettings?(de(),Ve("div",eb,[e[2]||(e[2]=He("div",{class:"header"},"Max on time",-1)),Gu(He("input",{"onUpdate:modelValue":e[1]||(e[1]=c=>t.newMaxOnTime=c),type:"text",placeholder:"HH:MM:SS or keep empty",class:"max-on-time-input"},null,512),[[Eh,t.newMaxOnTime]])])):rn("",!0),He("div",tb,[We(a,{class:"button-save",text:"Save",onClick:t.saveRelay},null,8,["onClick"]),We(a,{class:"button-cancel",text:"Cancel",onClick:t.abortChanges},null,8,["onClick"])]),t.nameError?(de(),Ve("div",nb,ti(t.nameError),1)):rn("",!0)])}const sb=St(XR,[["render",rb],["__scopeId","data-v-38fef80a"]]),ib=bt({components:{RelayEditable:sb,SwipeableListItem:JR,ButtonDefault:Xc,Relay:WR,Spinner:Xf,PageTitle:jp},setup(){const t=Gl(),e=xe(!1),n=xe("");Tf(()=>{t.loadRelays()});function r(){e.value=!0}function s(l){n.value=l}async function i(l){await t.deleteRelay(l)}function a(){n.value=""}function c(){e.value=!1}return{relayStore:t,isAddingNewRelay:e,editableRelayId:n,startAddingRelay:r,requestEdit:s,requestDelete:i,onEditArrayDone:a,onAddNewArrayDone:c}}}),ob={class:"relays"},ab={key:1};function cb(t,e,n,r,s,i){const a=at("page-title"),c=at("spinner"),l=at("relay-editable"),h=at("relay"),f=at("swipeable-list-item"),g=at("button-default");return de(),Ve("div",ob,[We(a,{title:"Relays"}),t.relayStore.loading?(de(),wt(c,{key:0,"spinner-size":"20px","with-text":!0})):rn("",!0),!t.relayStore.loading&&!t.relayStore.error?(de(),Ve("div",ab,[(de(!0),Ve(It,null,X_(t.relayStore.relays,m=>(de(),wt(f,{blockSwipe:t.editableRelayId.length>0,onLeftAction:w=>t.requestEdit(m.id),onRightAction:w=>t.requestDelete(m.id)},{default:qc(()=>[t.editableRelayId&&t.editableRelayId===m.id?(de(),wt(l,{key:m.id,allowAdvancedSettings:!0,existingRelay:m,onIsDone:t.onEditArrayDone},null,8,["existingRelay","onIsDone"])):(de(),wt(h,{key:m.id,relay:m},null,8,["relay"]))]),_:2},1032,["blockSwipe","onLeftAction","onRightAction"]))),256))])):rn("",!0),t.isAddingNewRelay?rn("",!0):(de(),wt(g,{key:2,text:"Add new Relay",onOnButtonClicked:t.startAddingRelay},null,8,["onOnButtonClicked"])),t.isAddingNewRelay?(de(),wt(l,{key:3,onIsDone:t.onAddNewArrayDone},null,8,["onIsDone"])):rn("",!0)])}const lb=St(ib,[["render",cb],["__scopeId","data-v-721f91dd"]]),ub=bt({components:{PageTitle:jp},setup(){return{}}}),hb={class:"schedules"};function db(t,e,n,r,s,i){const a=at("page-title");return de(),Ve("div",hb,[We(a,{title:"Schedules"})])}const fb=St(ub,[["render",db],["__scopeId","data-v-b769630a"]]),pb=bt({name:"App",components:{Schedules:fb,Relays:lb,TaskBar:Rv,SignIn:Ew},setup(){const t=Yf(),e=Jf();return{signedIn:Uo(()=>!!t.user),pageStore:e}}}),gb={class:"app"},mb={key:0,class:"signed-in"},_b={class:"body"};function yb(t,e,n,r,s,i){const a=at("relays"),c=at("schedules"),l=at("task-bar"),h=at("sign-in");return de(),Ve("div",gb,[t.signedIn?(de(),Ve("div",mb,[He("div",_b,[t.pageStore.currentPage==="relays"?(de(),wt(a,{key:0})):t.pageStore.currentPage==="schedules"?(de(),wt(c,{key:1})):rn("",!0)]),We(l)])):(de(),wt(h,{key:1}))])}const vb=St(pb,[["render",yb],["__scopeId","data-v-b43dde52"]]),_m=dv(vb),Eb=mv();_m.use(Eb);_m.mount("#app");
